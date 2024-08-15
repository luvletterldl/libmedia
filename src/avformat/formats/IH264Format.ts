/*
 * libmedia 264 decoder
 *
 * 版权所有 (C) 2024 赵高兴
 * Copyright (C) 2024 Gaoxing Zhao
 *
 * 此文件是 libmedia 的一部分
 * This file is part of libmedia.
 * 
 * libmedia 是自由软件；您可以根据 GNU Lesser General Public License（GNU LGPL）3.1
 * 或任何其更新的版本条款重新分发或修改它
 * libmedia is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3.1 of the License, or (at your option) any later version.
 * 
 * libmedia 希望能够为您提供帮助，但不提供任何明示或暗示的担保，包括但不限于适销性或特定用途的保证
 * 您应自行承担使用 libmedia 的风险，并且需要遵守 GNU Lesser General Public License 中的条款和条件。
 * libmedia is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 */

import { AVIFormatContext } from '../AVFormatContext'
import AVPacket, { AVPacketFlags } from 'avutil/struct/avpacket'
import { AVCodecID, AVMediaType } from 'avutil/codec'
import { IOError } from 'common/io/error'
import * as errorType from 'avutil/error'
import IFormat from './IFormat'
import { AVFormat } from '../avformat'
import { memcpyFromUint8Array } from 'cheap/std/memory'
import { avMalloc } from 'avutil/util/mem'
import { addAVPacketData, createAVPacket, destroyAVPacket, refAVPacket } from 'avutil/util/avpacket'
import AVStream from '../AVStream'
import { Rational } from 'avutil/struct/rational'
import * as object from 'common/util/object'
import concatTypeArray from 'common/function/concatTypeArray'
import * as h264 from '../codecs/h264'
import { AV_TIME_BASE } from 'avutil/constant'
import BitReader from 'common/io/BitReader'
import * as expgolomb from 'avutil/util/expgolomb'
import NaluReader from './nalu/NaluReader'

export interface IH264FormatOptions {
  framerate?: Rational
}

const DefaultIH264FormatOptions: IH264FormatOptions = {
  framerate: {
    num: 30,
    den: 1
  }
}

export default class IH264Format extends IFormat {

  public type: AVFormat = AVFormat.H264

  private options: IH264FormatOptions

  private currentDts: int64
  private currentPts: int64
  private step: int64

  private slices: Uint8Array[]
  private naluPos: int64

  private queue: { avpacket: pointer<AVPacket>, poc: int64 }[]
  private bitReader: BitReader

  private sliceType: h264.H264SliceType
  private poc: int64

  private picOrderCntMsb: int64
  private lastPicOrderCntLsb: int32

  private frameNumberOffset: int64
  private prevFrameNumber: int32

  private sps: h264.H264SPS

  private naluReader: NaluReader

  constructor(options: IH264FormatOptions = {}) {
    super()
    this.options = object.extend({}, DefaultIH264FormatOptions, options)
  }

  public init(formatContext: AVIFormatContext): void {

    if (formatContext.ioReader) {
      formatContext.ioReader.setEndian(false)
    }
    this.slices = []
    this.queue = []
    this.bitReader = new BitReader(50)
    this.naluReader = new NaluReader()
  }

  private isFrameNalu(data: Uint8Array) {
    const type = data[(data[2] === 1 ? 3 : 4)] & 0x1f
    return type === h264.H264NaluType.kSliceNonIDR
      || type === h264.H264NaluType.kSliceIDR
      || type === h264.H264NaluType.kSliceDPA
      || type === h264.H264NaluType.kSliceDPB
      || type === h264.H264NaluType.kSliceDPC
  }

  @deasync
  private async readNaluFrame(formatContext: AVIFormatContext) {

    let hasFrame = false

    const nalus: Uint8Array[] = this.slices
    this.slices = []

    if (nalus.length) {
      hasFrame = this.isFrameNalu(nalus[0])
    }

    while (true) {
      const next = await this.naluReader.read(formatContext.ioReader)
      if (!next) {
        return nalus
      }

      const type = next[(next[2] === 1 ? 3 : 4)] & 0x1f

      if (this.isFrameNalu(next)) {
        if (hasFrame) {
          this.bitReader.clear()
          this.bitReader.appendBuffer(next.subarray(next[2] === 1 ? 4 : 5, 10))
          const firstMbInSlice = expgolomb.readUE(this.bitReader)
          if (firstMbInSlice === 0) {
            this.slices.push(next)
            return nalus
          }
          else {
            nalus.push(next)
          }
        }
        else {
          nalus.push(next)
          hasFrame = true
        }
      }
      else if (hasFrame
        && (type === h264.H264NaluType.kSliceAUD
          || type === h264.H264NaluType.kSliceSPS
          || type === h264.H264NaluType.kSlicePPS
        )
      ) {
        this.slices.push(next)
        return nalus
      }
      else {
        nalus.push(next)
      }
    }
  }

  public async readHeader(formatContext: AVIFormatContext): Promise<number> {
    const stream = formatContext.createStream()
    stream.codecpar.codecType = AVMediaType.AVMEDIA_TYPE_VIDEO
    stream.codecpar.codecId = AVCodecID.AV_CODEC_ID_H264
    stream.timeBase.den = AV_TIME_BASE
    stream.timeBase.num = 1
    stream.codecpar.bitFormat = h264.BitFormat.ANNEXB
    this.currentDts = 0n
    this.currentPts = 0n
    this.naluPos = 0n
    this.poc = 0n
    this.picOrderCntMsb = 0n
    this.lastPicOrderCntLsb = 0
    this.frameNumberOffset = 0n
    this.prevFrameNumber = 0
    this.step = static_cast<int64>((AV_TIME_BASE / this.options.framerate.num * this.options.framerate.den) as double)

    while (true) {
      const slices = await this.readNaluFrame(formatContext)

      if (!slices.length) {
        return IOError.END
      }

      const data = concatTypeArray(Uint8Array, slices)

      const extradata = h264.annexbExtradata2AvccExtradata(data)

      if (extradata) {
        stream.codecpar.extradata = avMalloc(extradata.length)
        memcpyFromUint8Array(stream.codecpar.extradata, extradata.length, extradata)
        stream.codecpar.extradataSize = extradata.length

        h264.parseAVCodecParameters(stream, extradata)

        const { spss } = h264.extradata2SpsPps(extradata)
        this.sps = h264.parseSPS(spss[0])

        const avpacket = createAVPacket()

        const dataP = avMalloc(data.length)
        memcpyFromUint8Array(dataP, data.length, data)
        addAVPacketData(avpacket, dataP, data.length)

        avpacket.pos = this.naluPos
        this.naluPos += static_cast<int64>(data.length)

        avpacket.dts = this.currentDts
        this.currentDts += this.step
        avpacket.pts = this.currentPts
        this.currentPts += this.step

        avpacket.streamIndex = stream.index
        avpacket.flags |= AVPacketFlags.AV_PKT_FLAG_KEY
        avpacket.timeBase.num = stream.timeBase.num
        avpacket.timeBase.den = stream.timeBase.den
        avpacket.bitFormat = h264.BitFormat.ANNEXB

        formatContext.interval.packetBuffer.push(avpacket)

        break
      }

      this.naluPos += static_cast<int64>(data.length)
    }

    return 0
  }

  @deasync
  private async readAVPacket_(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number> {

    const stream = formatContext.getStreamByMediaType(AVMediaType.AVMEDIA_TYPE_VIDEO)

    const nalus = await this.readNaluFrame(formatContext)

    if (!nalus.length) {
      return IOError.END
    }

    this.sliceType = h264.H264SliceType.kSliceNone
    let isKey = false
    let isFirst = true

    nalus.forEach((n) => {
      const header = n[2] === 1 ? n[3] : n[4]
      const type = header & 0x1f
      const nalRefIdc = (header >>> 5) & 0x03

      if (type === h264.H264NaluType.kSliceSPS) {
        this.sps = h264.parseSPS(n)
      }
      if (type === h264.H264NaluType.kSliceIDR) {
        isKey = true
      }

      if ((type === h264.H264NaluType.kSliceNonIDR
          || type === h264.H264NaluType.kSliceDPA
          || type === h264.H264NaluType.kSliceDPB
          || type === h264.H264NaluType.kSliceDPC
          || type === h264.H264NaluType.kSliceIDR
        )
        && isFirst
      ) {
        isFirst = false
        this.bitReader.clear()
        this.bitReader.appendBuffer(n.subarray(n[2] === 1 ? 4 : 5, 50))

        // first_mb_in_slice
        expgolomb.readUE(this.bitReader)
        this.sliceType = expgolomb.readUE(this.bitReader)
        // pic_parameter_set_id
        expgolomb.readUE(this.bitReader)
        // frame_num
        const frameNumber = this.bitReader.readU(this.sps.log2MaxFrameNumMinus4 + 4)
        let fieldPicFlag = 0
        let bottomFieldFlag = 0
        if (!this.sps.frameMbsOnlyFlag) {
          fieldPicFlag = this.bitReader.readU1()
        }
        if (fieldPicFlag) {
          bottomFieldFlag = this.bitReader.readU1()
        }
        if (type ===  h264.H264NaluType.kSliceIDR) {
          // idr_pic_id
          expgolomb.readUE(this.bitReader)
        }
        if (this.sps.picOrderCntType === 0) {
          const picOrderCntLsb = this.bitReader.readU(this.sps.log2MaxPicOrderCntLsbMinus4 + 4)
          const max = (1 << (this.sps.log2MaxPicOrderCntLsbMinus4 + 4)) - 1
          if (Math.abs(picOrderCntLsb - this.lastPicOrderCntLsb) > (max >>> 1)) {
            this.picOrderCntMsb += static_cast<int64>(max)
          }
          this.poc = this.picOrderCntMsb + static_cast<int64>(picOrderCntLsb)
          this.lastPicOrderCntLsb = picOrderCntLsb
        }
        else if (this.sps.picOrderCntType === 1) {
          const deltaPicOrderCnt: int32[] = [0, 0]
          if (!this.sps.deltaPicOrderAlwaysZeroFlag) {
            deltaPicOrderCnt[0] = expgolomb.readSE(this.bitReader)
            if (bottomFieldFlag) {
              deltaPicOrderCnt[1] = expgolomb.readSE(this.bitReader)
            }
          }
          if (frameNumber < this.prevFrameNumber) {
            const max = (1 << (this.sps.log2MaxFrameNumMinus4 + 4)) - 1
            this.frameNumberOffset += static_cast<int64>(max)
          }

          let absFrameNumber = this.frameNumberOffset + static_cast<int64>(frameNumber)
          if (nalRefIdc === 0 && absFrameNumber > 0) {
            absFrameNumber--
          }
          this.poc = 2n * absFrameNumber + static_cast<int64>(deltaPicOrderCnt[0])
          if (fieldPicFlag && bottomFieldFlag) {
            this.poc += static_cast<int64>(deltaPicOrderCnt[1])
          }
          this.prevFrameNumber = frameNumber
        }
        else {
          this.poc++
        }
      }
    })

    const data = concatTypeArray(Uint8Array, nalus)

    const dataP = avMalloc(data.length)
    memcpyFromUint8Array(dataP, data.length, data)
    addAVPacketData(avpacket, dataP, data.length)

    avpacket.pos = this.naluPos
    this.naluPos += static_cast<int64>(data.length)
    avpacket.dts = this.currentDts
    this.currentDts += this.step
    avpacket.streamIndex = stream.index
    avpacket.timeBase.num = stream.timeBase.num
    avpacket.timeBase.den = stream.timeBase.den
    avpacket.bitFormat = h264.BitFormat.ANNEXB

    if (isKey) {
      avpacket.flags |= AVPacketFlags.AV_PKT_FLAG_KEY
    }

    return 0
  }

  public async readAVPacket(formatContext: AVIFormatContext, avpacket: pointer<AVPacket>): Promise<number> {

    let ipFrameCount = this.queue.length

    const output = () => {

      if (this.queue.length > 1) {
        this.queue.sort((a, b) => {
          return a.poc - b.poc > 0n ? 1 : -1
        })
      }

      for (let i = 0; i < this.queue.length; i++) {
        this.queue[i].avpacket.pts = this.currentPts
        this.currentPts += this.step
      }
      if (this.queue.length > 1) {
        this.queue.sort((a, b) => {
          return a.avpacket.dts - b.avpacket.dts > 0n ? 1 : -1
        })
      }
      if (this.queue.length) {
        refAVPacket(avpacket, this.queue[0].avpacket)
        destroyAVPacket(this.queue[0].avpacket)
      }
      for (let i = 1; i < this.queue.length; i++) {
        formatContext.interval.packetBuffer.push(this.queue[i].avpacket)
      }
      this.queue.length = 0
    }

    while (true) {
      const next = createAVPacket()
      let ret = await this.readAVPacket_(formatContext, next)
      if (ret < 0) {
        destroyAVPacket(next)
        if (this.queue.length) {
          output()
          return 0
        }
        else {
          return ret
        }
      }
      if ((next.flags & AVPacketFlags.AV_PKT_FLAG_KEY)
        || (this.sliceType === h264.H264SliceType.kSliceP
          || this.sliceType === h264.H264SliceType.kSliceI
          || this.sliceType === h264.H264SliceType.kSliceSP
          || this.sliceType === h264.H264SliceType.kSliceSI
        )
      ) {
        if (ipFrameCount === 1
          || ((next.flags & AVPacketFlags.AV_PKT_FLAG_KEY)
            && this.queue.length
          )
        ) {
          output()
          this.queue.push({
            avpacket: next,
            poc: this.poc
          })
          return 0
        }
        else {
          this.queue.push({
            avpacket: next,
            poc: this.poc
          })
          ipFrameCount++
        }
      }
      else {
        this.queue.push({
          avpacket: next,
          poc: this.poc
        })
      }
    }
  }

  public async seek(formatContext: AVIFormatContext, stream: AVStream, timestamp: int64, flags: int32): Promise<int64> {
    return static_cast<int64>(errorType.FORMAT_NOT_SUPPORT)
  }

  public getAnalyzeStreamsCount(): number {
    return 1
  }

}
