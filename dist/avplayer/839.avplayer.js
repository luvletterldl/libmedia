"use strict";(self.webpackChunkAVPlayer=self.webpackChunkAVPlayer||[]).push([[839],{89088:(e,a,t)=>{t.d(a,{Au:()=>w,He:()=>x,XC:()=>k,Y2:()=>h,hG:()=>u,oz:()=>R});var i=t(77231);const r=[44100,48e3,32e3,0],s=[22050,24e3,16e3,0],o=[11025,12e3,8e3,0],n=[0,1152,1152,384],d=[0,576,1152,384],c=[0,576,1152,384],f=[0,32,64,96,128,160,192,224,256,288,320,352,384,416,448,-1],p=[0,32,48,56,64,80,96,112,128,160,192,224,256,320,384,-1],m=[0,32,40,48,56,64,80,96,112,128,160,192,224,256,320,-1],l=[0,32,48,56,64,80,96,112,128,144,160,176,192,224,256,-1],g=[0,8,16,24,32,40,48,56,64,80,96,112,128,144,160,-1];function h(e,a){switch(e){case 0:return o[a];case 2:return s[a];case 3:return r[a]}return i.N_}function u(e,a){switch(e){case 0:return c[a];case 2:return d[a];case 3:return n[a]}return i.N_}function R(e,a,t){switch(a){case 1:switch(e){case 0:case 2:return g[t];case 3:return m[t]}break;case 2:switch(e){case 0:case 2:return g[t];case 3:return p[t]}case 3:switch(e){case 0:case 2:return l[t];case 3:return f[t]}}return i.N_}function w(e){switch(e){case 1:return 34;case 2:return 33;case 3:return 32}return i.N_}const x={32:"Layer1",33:"Layer2",34:"Layer3"};function k(e,a){if(a&&a.length>=4){const t=a[1]>>>3&3,i=(6&a[1])>>1,r=(12&a[2])>>>2,s=3&~(a[3]>>>6)?2:1,o=w(i),n=h(t,r);e.codecpar.profile=o,e.codecpar.sampleRate=n,e.codecpar.chLayout.nbChannels=s}}},85947:(e,a,t)=>{t.d(a,{A:()=>r});var i=t(134);class r{constructor(){(0,i.A)(this,"type",-1),(0,i.A)(this,"onStreamAdd",void 0)}destroy(e){}}},6839:(e,a,t)=>{t.r(a),t.d(a,{default:()=>I});var i=t(134),r=t(14686),s=t(61499),o=t(63939),n=t(50932),d=t(4624),c=t(85947),f=t(37837),p=t(71517),m=t(77231),l=t(50011),g=t(89088),h=t(44328),u=t(31608),R=t(43607),w=t(72739),x=t(19028),k=t(75294),B="src/avformat/formats/IMp3Format.ts";class I extends c.A{constructor(){super(),(0,i.A)(this,"type",8),(0,i.A)(this,"context",void 0)}init(e){e.ioReader&&e.ioReader.setEndian(!0),this.context={firstFramePos:m.Dh,isVBR:!1,hasID3v1:!1,id3v2:{version:m.N_,revision:m.N_,flags:m.N_},fileSize:BigInt(0)}}async readHeader(e){const a=e.createStream();a.codecpar.codecId=86017,a.codecpar.codecType=1,a.startTime=BigInt(0),a.firstDTS=BigInt(0);const t={frameHeader:new k.Vz,nbFrame:BigInt(0),tocIndexes:[],nextDTS:BigInt(0),frameLength:0};a.privData=t;const i=a.metadata={},s=await e.ioReader.fileSize();if(1&e.ioReader.flags&&s>u.c1&&(await e.ioReader.seek(s-BigInt(u.c1)),"TAG"===await e.ioReader.readString(3))){let a=await e.ioReader.readBuffer(30);i.title=l.decode(a).replace(/\s/g,""),a=await e.ioReader.readBuffer(30),i.artist=l.decode(a).replace(/\s/g,""),a=await e.ioReader.readBuffer(30),i.album=l.decode(a).replace(/\s/g,""),a=await e.ioReader.readBuffer(4),i.date=l.decode(a).replace(/\s/g,""),a=await e.ioReader.readBuffer(30),i.comment=l.decode(a).replace(/\s/g,""),0===a[28]&&0!==a[29]&&(i.track=a[29]+""),i.genre=await e.ioReader.readUint8(),this.context.hasID3v1=!0}if(await e.ioReader.seek(BigInt(0)),"ID3"===await e.ioReader.peekString(3)){await e.ioReader.skip(3),this.context.id3v2.version=await e.ioReader.readUint8(),this.context.id3v2.revision=await e.ioReader.readUint8(),this.context.id3v2.flags=await e.ioReader.readUint8();const a=(127&await e.ioReader.readUint8())<<21|(127&await e.ioReader.readUint8())<<14|(127&await e.ioReader.readUint8())<<7|127&await e.ioReader.readUint8();await x.q(e.ioReader,a,this.context.id3v2,i)}for(this.context.firstFramePos=e.ioReader.getPos();65504&~await e.ioReader.peekUint16();)await e.ioReader.skip(1);this.context.firstFramePos!==e.ioReader.getPos()&&(d.R8(`skipping ${e.ioReader.getPos()-this.context.firstFramePos} bytes of junk at ${this.context.firstFramePos}`,B,170),this.context.firstFramePos=e.ioReader.getPos()),a.codecpar.extradataSize=4,a.codecpar.extradata=(0,f.sY)(a.codecpar.extradataSize),await e.ioReader.peekBuffer(a.codecpar.extradataSize,(0,r.JW)(a.codecpar.extradata,a.codecpar.extradataSize)),k.qg(t.frameHeader,await e.ioReader.readUint32()),a.codecpar.profile=g.Au(t.frameHeader.layer),a.codecpar.frameSize=g.hG(t.frameHeader.version,t.frameHeader.layer),a.codecpar.sampleRate=g.Y2(t.frameHeader.version,t.frameHeader.samplingFrequency),a.timeBase.num=1,a.timeBase.den=a.codecpar.sampleRate;const o=3===t.frameHeader.mode?1:2;a.codecpar.chLayout.nbChannels=o;const n=BigInt(Math.floor(g.oz(t.frameHeader.version,t.frameHeader.layer,t.frameHeader.bitrateIndex))),c=k.CM(t.frameHeader,a.codecpar.sampleRate),p=e.ioReader.getPos();await e.ioReader.skip([[0,9,17],[0,0,0],[0,9,17],[0,17,32]][t.frameHeader.version][a.codecpar.chLayout.nbChannels]);const m=await e.ioReader.readString(4);if("Xing"===m||"Info"===m){this.context.isVBR=!0;const r=await e.ioReader.readUint32();1&r&&(t.nbFrame=BigInt(Math.floor(await e.ioReader.readUint32()))),2&r&&(this.context.fileSize=BigInt(Math.floor(await e.ioReader.readUint32())));const o=s>=p?s-p:BigInt(0);if(o&&this.context.fileSize){const e=R.jk(o,this.context.fileSize),a=R.T9(o,this.context.fileSize)-e;o>this.context.fileSize&&a>e>>BigInt(4)?(t.nbFrame=BigInt(0),d.R8("invalid concatenated file detected - using bitrate for duration",B,223)):a>e>>BigInt(4)&&d.R8("filesize and duration do not match (growing file?)",B,226)}if(a.duration=t.nbFrame*BigInt(a.codecpar.frameSize>>>0),4&r)for(let i=0;i<u.W8;i++){const r=await e.ioReader.readUint8(),s=this.context.fileSize*BigInt(Math.floor(r))/BigInt(256),o={dts:a.duration/BigInt(u.W8)*BigInt(Math.floor(i)),pos:s};t.tocIndexes.push(o)}8&r&&await e.ioReader.skip(4),i.encoder=await e.ioReader.readString(9),this.context.firstFramePos+=BigInt(Math.floor(c))}else await e.ioReader.seek(p),"VBRI"===await e.ioReader.readString(4)?(1===await e.ioReader.readUint16()&&(await e.ioReader.skip(4),this.context.fileSize=BigInt(Math.floor(await e.ioReader.readUint32())),t.nbFrame=BigInt(Math.floor(await e.ioReader.readUint32())),a.duration=t.nbFrame*BigInt(a.codecpar.frameSize>>>0)),this.context.firstFramePos+=BigInt(Math.floor(c))):(this.context.isVBR=!1,a.codecpar.bitRate=n*BigInt(1e3),t.nbFrame=(s-this.context.firstFramePos-BigInt(u.c1))/BigInt(Math.floor(c)),a.duration=t.nbFrame*BigInt(a.codecpar.frameSize>>>0),t.frameLength=c,this.context.fileSize=s);for(await e.ioReader.seek(this.context.firstFramePos);65504&~await e.ioReader.peekUint16();)await e.ioReader.skip(1);if(this.context.firstFramePos!==e.ioReader.getPos()&&(d.R8(`skipping ${e.ioReader.getPos()-this.context.firstFramePos} bytes of junk at ${this.context.firstFramePos}`,B,286),this.context.firstFramePos=e.ioReader.getPos()),t.tocIndexes.length)for(let e=0;e<u.W8;e++)t.tocIndexes[e].pos+=this.context.firstFramePos;return 0}async readAVPacket(e,a){const t=e.getStreamByMediaType(1),i=t.privData,c=e.ioReader.getPos();if(this.context.hasID3v1&&c>=this.context.fileSize-BigInt(u.c1))return-1048576;try{k.qg(i.frameHeader,await e.ioReader.peekUint32());let d=this.context.isVBR?k.CM(i.frameHeader,t.codecpar.sampleRate):i.frameLength;n.M[15](a+28,d),n.M[17](a+56,c),n.M[15](a+32,t.index),(0,r.Mr)(a+72,t.timeBase[s.o9],8),n.M[17](a+48,BigInt(t.codecpar.frameSize>>>0)),n.M[17](a+16,i.nextDTS),n.M[17](a+8,i.nextDTS),n.M[15](a+36,1|o.f[15](a+36)),i.nextDTS+=BigInt(t.codecpar.frameSize>>>0);const m=(0,f.sY)(d);return(0,p.NX)(a,m,d),await e.ioReader.readBuffer(d,(0,r.JW)(m,d)),0}catch(a){return-1048576!==e.ioReader.error&&d.z3(a.message,B,333),e.ioReader.error}}async syncToFrame(e){let a=m.Dh;const t=e.getStreamByMediaType(1),i=t.privData;for(;;)try{if(!(65504&~await e.ioReader.peekUint16())){a=e.ioReader.getPos(),k.qg(i.frameHeader,await e.ioReader.peekUint32());let r=this.context.isVBR?k.CM(i.frameHeader,t.codecpar.sampleRate):i.frameLength;if(r>512e3){await e.ioReader.skip(1);continue}await e.ioReader.skip(r);let s=0;for(;s<=3&&!(65504&~await e.ioReader.peekUint16());){k.qg(i.frameHeader,await e.ioReader.peekUint32());let a=this.context.isVBR?k.CM(i.frameHeader,t.codecpar.sampleRate):i.frameLength;await e.ioReader.skip(a),s++}if(!(s<3))break;await e.ioReader.seek(a+BigInt(1)),a=m.Dh}await e.ioReader.skip(1)}catch(e){break}a!==m.Dh&&await e.ioReader.seek(a)}async seek(e,a,t,i){const r=e.ioReader.getPos(),s=a.privData;if(a.sampleIndexes.length){let i=w.El(a.sampleIndexes,(e=>e.pts>t?-1:1));if(i>0&&(0,h.k)(t-a.sampleIndexes[i-1].pts,a.timeBase,m.i0)<BigInt(1e4))return d.Yz(`seek in sampleIndexes, found index: ${i}, pts: ${a.sampleIndexes[i-1].pts}, pos: ${a.sampleIndexes[i-1].pos}`,B,416),await e.ioReader.seek(a.sampleIndexes[i-1].pos),s.nextDTS=a.sampleIndexes[i-1].dts,r}if(t===BigInt(0))return await e.ioReader.seek(this.context.firstFramePos),r;if(this.context.isVBR)if(s.tocIndexes.length){const i=s.tocIndexes[0|Number(t/(a.duration/BigInt(u.W8))&0xffffffffn)];if(i)d.Yz(`seek in xing toc indexes, pts: ${i.dts}, pos: ${i.pos}`,B,432),await e.ioReader.seek(i.pos),s.nextDTS=i.dts;else{d.Yz("not found any keyframe index, try to seek in bytes",B,437);const i=k.CM(s.frameHeader,a.codecpar.sampleRate),r=t/BigInt(a.codecpar.frameSize>>>0),o=r*BigInt(Math.floor(i))+this.context.firstFramePos;s.nextDTS=r*BigInt(a.codecpar.frameSize>>>0),await e.ioReader.seek(o)}}else{d.Yz("not found any keyframe index, try to seek in bytes",B,446);const i=k.CM(s.frameHeader,a.codecpar.sampleRate),r=t/BigInt(a.codecpar.frameSize>>>0),o=r*BigInt(Math.floor(i))+this.context.firstFramePos;s.nextDTS=r*BigInt(a.codecpar.frameSize>>>0),await e.ioReader.seek(o)}else{const i=t/BigInt(a.codecpar.frameSize>>>0),r=i*BigInt(s.frameLength>>>0)+this.context.firstFramePos;s.nextDTS=i*BigInt(a.codecpar.frameSize>>>0),await e.ioReader.seek(r)}return await this.syncToFrame(e),r}getAnalyzeStreamsCount(){return 1}}},75294:(e,a,t)=>{t.d(a,{CM:()=>n,Vz:()=>s,qg:()=>o});var i=t(134),r=t(89088);class s{constructor(){(0,i.A)(this,"version",void 0),(0,i.A)(this,"layer",void 0),(0,i.A)(this,"protection",void 0),(0,i.A)(this,"bitrateIndex",void 0),(0,i.A)(this,"samplingFrequency",void 0),(0,i.A)(this,"padding",void 0),(0,i.A)(this,"private",void 0),(0,i.A)(this,"mode",void 0),(0,i.A)(this,"modeExtension",void 0),(0,i.A)(this,"copyright",void 0),(0,i.A)(this,"original",void 0),(0,i.A)(this,"emphasis",void 0)}}function o(e,a){e.version=a>>19&3,e.layer=a>>17&3,e.protection=a>>16&1,e.bitrateIndex=a>>12&15,e.samplingFrequency=a>>10&3,e.padding=a>>9&1,e.mode=a>>6&3,e.modeExtension=a>>4&3,e.copyright=a>>3&1,e.original=a>>2&1,e.emphasis=3&a}function n(e,a){let t=r.oz(e.version,e.layer,e.bitrateIndex);switch(e.layer){case 1:default:t=144e3*t/(a<<(3===e.version?0:1))>>>0,t+=e.padding;break;case 2:t=144e3*t/a>>>0,t+=e.padding;break;case 3:t=12e3*t/a>>>0,t=4*(t+e.padding)}return t}},19028:(e,a,t)=>{t.d(a,{q:()=>o});var i=t(4624),r="src/avformat/formats/mp3/id3v2.ts";function s(e,a){let t="utf-8";return 0===e?t="iso-8859-1":1===e?t="utf-16":2===e&&(t="utf-16be"),new TextDecoder(t).decode(a)}async function o(e,a,t,o){const n=2!==t.version,d=n?10:6;let c=e.getPos()+BigInt(a>>>0);async function f(){await e.seek(c)}if(n&&64&t.flags){let s=await async function(e,a){let t=0;for(;a--;)t=(t<<7)+(127&await e.readUint8());return t}(e,4);if(4===t.version&&(s-=4),s<0)return i.z3("invalid extended header length",r,92),await f();if(await e.skip(s),(a-=s+4)<0)return i.z3("extended header too long",r,98),await e.seek(c),await f()}for(;a>d;){let t,c;if(n){if(t=await e.readString(4),c=await e.readUint32(),!c){i.z3("invalid frame size",r,112);break}await e.readUint16()}else t=await e.readString(3),c=await e.readUint24();if("APIC"===t)o.poster=await e.readBuffer(c);else if("USLT"===t){const a=await e.readUint8(),t=await e.readString(3),i=await e.readBuffer(c-4);o.lyrics=`${t} ${s(a,i)}`}else if("COMM"===t||"COM"===t){const a=await e.readUint8(),t=await e.readString(3),i=await e.readBuffer(c-4);o.comment=`${t} ${s(a,i)}`}else{let a;switch(a="T"===t[0]?s(await e.readUint8(),await e.readBuffer(c-1)):await e.readBuffer(c),t){case"TIT2":case"TT2":o.title=a;break;case"TPE1":case"TP1":o.artist=a;break;case"TPE2":case"TP2":o.albumArtist=a;break;case"TPOS":o.disc=a;break;case"TCOP":o.copyright=a;break;case"TALB":case"TAL":o.album=a;break;case"TRCK":case"TRK":o.track=a;break;case"TYER":case"TDRL":case"TDRC":o.date=a;break;case"COMM":case"COM":o.comment=a;break;case"TCON":case"TCO":o.genre=a;break;case"TSSE":case"TEN":o.encoder=a;break;case"TCOM":o.composer=a;break;case"TENC":o.encodedBy=a;break;case"TLAN":o.language=a;break;case"TPE3":case"TP3":o.performer=a;break;case"TPUB":o.publisher=a;break;case"TCMP":case"TCP":o.compilation=a;break;case"TDEN":o.creationTime=a;break;case"TSOA":o.albumSort=a;break;case"TSOP":o.artistSort=a;break;case"TSOT":o.titleSort=a;break;case"TIT1":o.grouping=a;break;default:o[t]=a}}a-=c+d}4==t.version&&16&t.flags&&(c+=BigInt(10)),await e.seek(c)}},31608:(e,a,t)=>{t.d(a,{W8:()=>i,c1:()=>r});const i=100,r=128}}]);