"use strict";(self.webpackChunkAVTranscoder=self.webpackChunkAVTranscoder||[]).push([[634],{85947:(e,t,r)=>{r.d(t,{A:()=>d});var a=r(134),i=r(10754);class d{constructor(){(0,a.A)(this,"type",i.P.UNKNOWN),(0,a.A)(this,"onStreamAdd",void 0)}destroy(e){}}},16634:(e,t,r)=>{r.r(t),r.d(t,{IVFHeader:()=>f,default:()=>v});var a=r(134),i=r(63939),d=r(50932),o=r(4624),s=r(9705),h=r(85947),n=r(10754),c=r(14686),m=r(37837),u=r(71517),R=r(77231),w="src/avformat/formats/IIvfFormat.ts";const A={VP80:139,VP90:167};class f{constructor(){(0,a.A)(this,"version",void 0),(0,a.A)(this,"length",void 0),(0,a.A)(this,"codec",void 0),(0,a.A)(this,"width",void 0),(0,a.A)(this,"height",void 0),(0,a.A)(this,"denominator",void 0),(0,a.A)(this,"numerator",void 0),(0,a.A)(this,"framesCount",void 0),this.version=0,this.length=32,this.codec="VP80",this.width=0,this.height=0,this.framesCount=0,this.denominator=1,this.numerator=0}}class v extends h.A{constructor(){super(),(0,a.A)(this,"type",n.P.IVF),(0,a.A)(this,"header",void 0),this.header=new f}init(e){e.ioReader&&e.ioReader.setEndian(!1)}async readHeader(e){try{if("DKIF"!==await e.ioReader.readString(4))return o.z3("the file format is not ivf",w,104),s.LR;this.header.version=await e.ioReader.readUint16(),await e.ioReader.skip(2),this.header.codec=await e.ioReader.readString(4),this.header.width=await e.ioReader.readUint16(),this.header.height=await e.ioReader.readUint16(),this.header.denominator=await e.ioReader.readUint32(),this.header.numerator=await e.ioReader.readUint32(),this.header.framesCount=await e.ioReader.readUint32(),await e.ioReader.skip(4);const t=e.createStream();return t.codecpar.codecType=0,t.codecpar.codecId=A[this.header.codec],t.timeBase.den=this.header.denominator,t.timeBase.num=this.header.numerator,t.codecpar.width=this.header.width,t.codecpar.height=this.header.height,t.nbFrames=BigInt(Math.floor(this.header.framesCount)),this.onStreamAdd&&this.onStreamAdd(t),0}catch(t){return o.z3(t.message,w,136),e.ioReader.error}}async readAVPacket(e,t){try{const r=e.getStreamByMediaType(0);if(!r)return s.LR;{const a=e.ioReader.getPos(),o=await e.ioReader.readUint32(),s=await e.ioReader.readUint64(),h=(0,m.sY)(o);(0,u.NX)(t,h,o),await e.ioReader.readBuffer(o,(0,c.JW)(h,o)),d.M[17](t+56,a),d.M[17](t+8,s),d.M[17](t+16,s),d.M[15](t+76,this.header.denominator),d.M[15](t+72,this.header.numerator),d.M[15](t+32,r.index),r.startTime===R.Dh&&(r.startTime=i.f[17](t+8)||i.f[17](t+16))}return 0}catch(t){return-1048576!==e.ioReader.error?(o.z3(`read packet error, ${t}`,w,173),s.LR):e.ioReader.error}}async seek(e,t,r,a){return BigInt(s.E$)}getAnalyzeStreamsCount(){return 1}}}}]);