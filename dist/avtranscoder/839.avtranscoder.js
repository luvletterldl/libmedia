"use strict";(self.webpackChunkAVTranscoder=self.webpackChunkAVTranscoder||[]).push([[839],{89088:(e,t,a)=>{a.d(t,{Au:()=>R,He:()=>x,XC:()=>k,Y2:()=>h,hG:()=>u,oz:()=>w});var i=a(77231);const r=[44100,48e3,32e3,0],o=[22050,24e3,16e3,0],s=[11025,12e3,8e3,0],n=[0,1152,1152,384],c=[0,576,1152,384],d=[0,576,1152,384],f=[0,32,64,96,128,160,192,224,256,288,320,352,384,416,448,-1],l=[0,32,48,56,64,80,96,112,128,160,192,224,256,320,384,-1],m=[0,32,40,48,56,64,80,96,112,128,160,192,224,256,320,-1],p=[0,32,48,56,64,80,96,112,128,144,160,176,192,224,256,-1],g=[0,8,16,24,32,40,48,56,64,80,96,112,128,144,160,-1];function h(e,t){switch(e){case 0:return s[t];case 2:return o[t];case 3:return r[t]}return i.N_}function u(e,t){switch(e){case 0:return d[t];case 2:return c[t];case 3:return n[t]}return i.N_}function w(e,t,a){switch(t){case 1:switch(e){case 0:case 2:return g[a];case 3:return m[a]}break;case 2:switch(e){case 0:case 2:return g[a];case 3:return l[a]}case 3:switch(e){case 0:case 2:return p[a];case 3:return f[a]}}return i.N_}function R(e){switch(e){case 1:return 34;case 2:return 33;case 3:return 32}return i.N_}const x={32:"Layer1",33:"Layer2",34:"Layer3"};function k(e,t){if(t&&t.length>=4){const a=t[1]>>>3&3,i=(6&t[1])>>1,r=(12&t[2])>>>2,o=3&~(t[3]>>>6)?2:1,s=R(i),n=h(a,r);e.codecpar.profile=s,e.codecpar.sampleRate=n,e.codecpar.chLayout.nbChannels=o}}},85947:(e,t,a)=>{a.d(t,{A:()=>r});var i=a(134);class r{constructor(){(0,i.A)(this,"type",-1),(0,i.A)(this,"onStreamAdd",void 0)}destroy(e){}}},6839:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var i=a(134),r=a(14686),o=a(61499),s=a(63939),n=a(50932),c=a(4624),d=a(85947),f=a(37837),l=a(71517),m=a(77231),p=a(50011),g=a(89088),h=a(44328),u=a(31608),w=a(43607),R=a(72739),x=a(19028),k=a(75294),T="src/avformat/formats/IMp3Format.ts";class B extends d.A{constructor(){super(),(0,i.A)(this,"type",8),(0,i.A)(this,"context",void 0)}init(e){e.ioReader&&e.ioReader.setEndian(!0),this.context={firstFramePos:m.Dh,isVBR:!1,hasID3v1:!1,id3v2:{version:m.N_,revision:m.N_,flags:m.N_},fileSize:BigInt(0)}}async readHeader(e){const t=e.createStream();t.codecpar.codecId=86017,t.codecpar.codecType=1,t.startTime=BigInt(0),t.firstDTS=BigInt(0);const a={frameHeader:new k.Vz,nbFrame:BigInt(0),tocIndexes:[],nextDTS:BigInt(0),frameLength:0};t.privData=a;const i=t.metadata={},o=await e.ioReader.fileSize();if(1&e.ioReader.flags&&o>u.c1&&(await e.ioReader.seek(o-BigInt(u.c1)),"TAG"===await e.ioReader.readString(3))){let t=await e.ioReader.readBuffer(30);i.title=p.decode(t).replace(/\s/g,""),t=await e.ioReader.readBuffer(30),i.artist=p.decode(t).replace(/\s/g,""),t=await e.ioReader.readBuffer(30),i.album=p.decode(t).replace(/\s/g,""),t=await e.ioReader.readBuffer(4),i.date=p.decode(t).replace(/\s/g,""),t=await e.ioReader.readBuffer(30),i.comment=p.decode(t).replace(/\s/g,""),0===t[28]&&0!==t[29]&&(i.track=t[29]+""),i.genre=await e.ioReader.readUint8(),this.context.hasID3v1=!0}if(await e.ioReader.seek(BigInt(0)),"ID3"===await e.ioReader.peekString(3)){await e.ioReader.skip(3),this.context.id3v2.version=await e.ioReader.readUint8(),this.context.id3v2.revision=await e.ioReader.readUint8(),this.context.id3v2.flags=await e.ioReader.readUint8();const t=(127&await e.ioReader.readUint8())<<21|(127&await e.ioReader.readUint8())<<14|(127&await e.ioReader.readUint8())<<7|127&await e.ioReader.readUint8();await x.q(e.ioReader,t,this.context.id3v2,i)}for(this.context.firstFramePos=e.ioReader.getPos();65504&~await e.ioReader.peekUint16();)await e.ioReader.skip(1);this.context.firstFramePos!==e.ioReader.getPos()&&(c.R8(`skipping ${e.ioReader.getPos()-this.context.firstFramePos} bytes of junk at ${this.context.firstFramePos}`,T,170),this.context.firstFramePos=e.ioReader.getPos()),t.codecpar.extradataSize=4,t.codecpar.extradata=(0,f.sY)(t.codecpar.extradataSize),await e.ioReader.peekBuffer(t.codecpar.extradataSize,(0,r.JW)(t.codecpar.extradata,t.codecpar.extradataSize)),k.qg(a.frameHeader,await e.ioReader.readUint32()),t.codecpar.profile=g.Au(a.frameHeader.layer),t.codecpar.frameSize=g.hG(a.frameHeader.version,a.frameHeader.layer),t.codecpar.sampleRate=g.Y2(a.frameHeader.version,a.frameHeader.samplingFrequency),t.timeBase.num=1,t.timeBase.den=t.codecpar.sampleRate;const s=3===a.frameHeader.mode?1:2;t.codecpar.chLayout.nbChannels=s;const n=BigInt(Math.floor(g.oz(a.frameHeader.version,a.frameHeader.layer,a.frameHeader.bitrateIndex))),d=k.CM(a.frameHeader,t.codecpar.sampleRate),l=e.ioReader.getPos();await e.ioReader.skip([[0,9,17],[0,0,0],[0,9,17],[0,17,32]][a.frameHeader.version][t.codecpar.chLayout.nbChannels]);const m=await e.ioReader.readString(4);if("Xing"===m||"Info"===m){this.context.isVBR=!0;const r=await e.ioReader.readUint32();1&r&&(a.nbFrame=BigInt(Math.floor(await e.ioReader.readUint32()))),2&r&&(this.context.fileSize=BigInt(Math.floor(await e.ioReader.readUint32())));const s=o>=l?o-l:BigInt(0);if(s&&this.context.fileSize){const e=w.jk(s,this.context.fileSize),t=w.T9(s,this.context.fileSize)-e;s>this.context.fileSize&&t>e>>BigInt(4)?(a.nbFrame=BigInt(0),c.R8("invalid concatenated file detected - using bitrate for duration",T,223)):t>e>>BigInt(4)&&c.R8("filesize and duration do not match (growing file?)",T,226)}if(t.duration=a.nbFrame*BigInt(t.codecpar.frameSize>>>0),4&r)for(let i=0;i<u.W8;i++){const r=await e.ioReader.readUint8(),o=this.context.fileSize*BigInt(Math.floor(r))/BigInt(256),s={dts:t.duration/BigInt(u.W8)*BigInt(Math.floor(i)),pos:o};a.tocIndexes.push(s)}8&r&&await e.ioReader.skip(4),i.encoder=await e.ioReader.readString(9),this.context.firstFramePos+=BigInt(Math.floor(d))}else await e.ioReader.seek(l),"VBRI"===await e.ioReader.readString(4)?(1===await e.ioReader.readUint16()&&(await e.ioReader.skip(4),this.context.fileSize=BigInt(Math.floor(await e.ioReader.readUint32())),a.nbFrame=BigInt(Math.floor(await e.ioReader.readUint32())),t.duration=a.nbFrame*BigInt(t.codecpar.frameSize>>>0)),this.context.firstFramePos+=BigInt(Math.floor(d))):(this.context.isVBR=!1,t.codecpar.bitRate=n*BigInt(1e3),a.nbFrame=(o-this.context.firstFramePos-BigInt(u.c1))/BigInt(Math.floor(d)),t.duration=a.nbFrame*BigInt(t.codecpar.frameSize>>>0),a.frameLength=d,this.context.fileSize=o);for(await e.ioReader.seek(this.context.firstFramePos);65504&~await e.ioReader.peekUint16();)await e.ioReader.skip(1);if(this.context.firstFramePos!==e.ioReader.getPos()&&(c.R8(`skipping ${e.ioReader.getPos()-this.context.firstFramePos} bytes of junk at ${this.context.firstFramePos}`,T,286),this.context.firstFramePos=e.ioReader.getPos()),a.tocIndexes.length)for(let e=0;e<u.W8;e++)a.tocIndexes[e].pos+=this.context.firstFramePos;return 0}async readAVPacket(e,t){const a=e.getStreamByMediaType(1),i=a.privData,d=e.ioReader.getPos();if(this.context.hasID3v1&&d>=this.context.fileSize-BigInt(u.c1))return-1048576;try{k.qg(i.frameHeader,await e.ioReader.peekUint32());let c=this.context.isVBR?k.CM(i.frameHeader,a.codecpar.sampleRate):i.frameLength;n.M[15](t+28,c),n.M[17](t+56,d),n.M[15](t+32,a.index),(0,r.Mr)(t+72,a.timeBase[o.o9],8),n.M[17](t+48,BigInt(a.codecpar.frameSize>>>0)),n.M[17](t+16,i.nextDTS),n.M[17](t+8,i.nextDTS),n.M[15](t+36,1|s.f[15](t+36)),i.nextDTS+=BigInt(a.codecpar.frameSize>>>0);const m=(0,f.sY)(c);return(0,l.NX)(t,m,c),await e.ioReader.readBuffer(c,(0,r.JW)(m,c)),0}catch(t){return-1048576!==e.ioReader.error&&c.z3(t.message,T,333),e.ioReader.error}}async syncToFrame(e){let t=m.Dh;const a=e.getStreamByMediaType(1),i=a.privData;for(;;)try{if(!(65504&~await e.ioReader.peekUint16())){t=e.ioReader.getPos(),k.qg(i.frameHeader,await e.ioReader.peekUint32());let r=this.context.isVBR?k.CM(i.frameHeader,a.codecpar.sampleRate):i.frameLength;if(r>512e3){await e.ioReader.skip(1);continue}await e.ioReader.skip(r);let o=0;for(;o<=3&&!(65504&~await e.ioReader.peekUint16());){k.qg(i.frameHeader,await e.ioReader.peekUint32());let t=this.context.isVBR?k.CM(i.frameHeader,a.codecpar.sampleRate):i.frameLength;await e.ioReader.skip(t),o++}if(!(o<3))break;await e.ioReader.seek(t+BigInt(1)),t=m.Dh}await e.ioReader.skip(1)}catch(e){break}t!==m.Dh&&await e.ioReader.seek(t)}async seek(e,t,a,i){const r=e.ioReader.getPos(),o=t.privData;if(t.sampleIndexes.length){let i=R.El(t.sampleIndexes,(e=>e.pts>a?-1:1));if(i>0&&(0,h.k)(a-t.sampleIndexes[i-1].pts,t.timeBase,m.i0)<BigInt(1e4))return c.Yz(`seek in sampleIndexes, found index: ${i}, pts: ${t.sampleIndexes[i-1].pts}, pos: ${t.sampleIndexes[i-1].pos}`,T,416),await e.ioReader.seek(t.sampleIndexes[i-1].pos),o.nextDTS=t.sampleIndexes[i-1].dts,r}if(a===BigInt(0))return await e.ioReader.seek(this.context.firstFramePos),r;if(this.context.isVBR)if(o.tocIndexes.length){const i=o.tocIndexes[0|Number(a/(t.duration/BigInt(u.W8))&0xffffffffn)];if(i)c.Yz(`seek in xing toc indexes, pts: ${i.dts}, pos: ${i.pos}`,T,432),await e.ioReader.seek(i.pos),o.nextDTS=i.dts;else{c.Yz("not found any keyframe index, try to seek in bytes",T,437);const i=k.CM(o.frameHeader,t.codecpar.sampleRate),r=a/BigInt(t.codecpar.frameSize>>>0),s=r*BigInt(Math.floor(i))+this.context.firstFramePos;o.nextDTS=r*BigInt(t.codecpar.frameSize>>>0),await e.ioReader.seek(s)}}else{c.Yz("not found any keyframe index, try to seek in bytes",T,446);const i=k.CM(o.frameHeader,t.codecpar.sampleRate),r=a/BigInt(t.codecpar.frameSize>>>0),s=r*BigInt(Math.floor(i))+this.context.firstFramePos;o.nextDTS=r*BigInt(t.codecpar.frameSize>>>0),await e.ioReader.seek(s)}else{const i=a/BigInt(t.codecpar.frameSize>>>0),r=i*BigInt(o.frameLength>>>0)+this.context.firstFramePos;o.nextDTS=i*BigInt(t.codecpar.frameSize>>>0),await e.ioReader.seek(r)}return await this.syncToFrame(e),r}getAnalyzeStreamsCount(){return 1}}},75294:(e,t,a)=>{a.d(t,{CM:()=>n,Vz:()=>o,qg:()=>s});var i=a(134),r=a(89088);class o{constructor(){(0,i.A)(this,"version",void 0),(0,i.A)(this,"layer",void 0),(0,i.A)(this,"protection",void 0),(0,i.A)(this,"bitrateIndex",void 0),(0,i.A)(this,"samplingFrequency",void 0),(0,i.A)(this,"padding",void 0),(0,i.A)(this,"private",void 0),(0,i.A)(this,"mode",void 0),(0,i.A)(this,"modeExtension",void 0),(0,i.A)(this,"copyright",void 0),(0,i.A)(this,"original",void 0),(0,i.A)(this,"emphasis",void 0)}}function s(e,t){e.version=t>>19&3,e.layer=t>>17&3,e.protection=t>>16&1,e.bitrateIndex=t>>12&15,e.samplingFrequency=t>>10&3,e.padding=t>>9&1,e.mode=t>>6&3,e.modeExtension=t>>4&3,e.copyright=t>>3&1,e.original=t>>2&1,e.emphasis=3&t}function n(e,t){let a=r.oz(e.version,e.layer,e.bitrateIndex);switch(e.layer){case 1:default:a=144e3*a/(t<<(3===e.version?0:1))>>>0,a+=e.padding;break;case 2:a=144e3*a/t>>>0,a+=e.padding;break;case 3:a=12e3*a/t>>>0,a=4*(a+e.padding)}return a}},19028:(e,t,a)=>{a.d(t,{M:()=>c,q:()=>n});var i=a(4624),r=a(50011),o="src/avformat/formats/mp3/id3v2.ts";function s(e,t){let a="utf-8";return 0===e?a="iso-8859-1":1===e?a="utf-16":2===e&&(a="utf-16be"),new TextDecoder(a).decode(t)}async function n(e,t,a,r){const n=2!==a.version,c=n?10:6;let d=e.getPos()+BigInt(t>>>0);async function f(){await e.seek(d)}if(n&&64&a.flags){let r=await async function(e,t){let a=0;for(;t--;)a=(a<<7)+(127&await e.readUint8());return a}(e,4);if(4===a.version&&(r-=4),r<0)return i.z3("invalid extended header length",o,92),await f();if(await e.skip(r),(t-=r+4)<0)return i.z3("extended header too long",o,98),await e.seek(d),await f()}for(;t>c;){let a,d;if(n){if(a=await e.readString(4),d=await e.readUint32(),!d){i.z3("invalid frame size",o,112);break}await e.readUint16()}else a=await e.readString(3),d=await e.readUint24();if("APIC"===a)r.poster=await e.readBuffer(d);else if("USLT"===a){const t=await e.readUint8(),a=await e.readString(3),i=await e.readBuffer(d-4);r.lyrics=`${a} ${s(t,i)}`}else if("COMM"===a||"COM"===a){const t=await e.readUint8(),a=await e.readString(3),i=await e.readBuffer(d-4);r.comment=`${a} ${s(t,i)}`}else{let t;switch(t="T"===a[0]?s(await e.readUint8(),await e.readBuffer(d-1)):await e.readBuffer(d),a){case"TIT2":case"TT2":r.title=t;break;case"TPE1":case"TP1":r.artist=t;break;case"TPE2":case"TP2":r.albumArtist=t;break;case"TPOS":r.disc=t;break;case"TCOP":r.copyright=t;break;case"TALB":case"TAL":r.album=t;break;case"TRCK":case"TRK":r.track=t;break;case"TYER":case"TDRL":case"TDRC":r.date=t;break;case"COMM":case"COM":r.comment=t;break;case"TCON":case"TCO":r.genre=t;break;case"TSSE":case"TEN":r.encoder=t;break;case"TCOM":r.composer=t;break;case"TENC":r.encodedBy=t;break;case"TLAN":r.language=t;break;case"TPE3":case"TP3":r.performer=t;break;case"TPUB":r.publisher=t;break;case"TCMP":case"TCP":r.compilation=t;break;case"TDEN":r.creationTime=t;break;case"TSOA":r.albumSort=t;break;case"TSOP":r.artistSort=t;break;case"TSOT":r.titleSort=t;break;case"TIT1":r.grouping=t;break;default:r[a]=t}}t-=d+c}4==a.version&&16&a.flags&&(d+=BigInt(10)),await e.seek(d)}function c(e,t,a,i){let o=e.getPos();e.writeString("ID3"),e.writeUint8(t),e.writeUint16(0);const s=e.getPos();function n(t,a){const i=r.encode(a);e.writeString(t),e.writeUint32(i.length+1),e.writeUint16(0),e.writeUint8(3),e.writeBuffer(i)}var c;if(e.writeUint32(0),i.poster&&("APIC",c=i.poster,e.writeString("APIC"),e.writeUint32(c.length),e.writeUint16(0),e.writeBuffer(c)),i.title&&n("TIT2",i.title),i.artist&&n("TPE1",i.artist),i.albumArtist&&n("TPE2",i.albumArtist),i.disc&&n("TPOS",i.disc),i.copyright&&n("TCOP",i.copyright),i.album&&n("TALB",i.album),i.track&&n("TRCK",i.track),i.date&&n("TDRC",i.date),i.comment){let e=i.comment;" "===e[3]&&(e=e.slice(0,3)+e.slice(4)),n("COMM",e)}if(i.lyrics){let e=i.lyrics;" "===e[3]&&(e=e.slice(0,3)+e.slice(4)),n("USLT",e)}i.genre&&n("TCON",i.genre+""),i.encoder&&n("TSSE",i.encoder),i.composer&&n("TCOM",i.composer),i.encodedBy&&n("TENC",i.encodedBy),i.language&&n("TLAN",i.language),i.performer&&n("TPE3",i.performer),i.publisher&&n("TPUB",i.publisher),i.compilation&&n("TCMP",i.compilation),i.creationTime&&n("TDEN",i.creationTime),i.albumSort&&n("TSOA",i.albumSort),i.artistSort&&n("TSOP",i.artistSort),i.titleSort&&n("TSOT",i.titleSort),i.grouping&&n("TIT1",i.grouping),a<10&&(a=10);const d=0|Number(e.getPos()-o&0xffffffffn);a>268435455-d&&(a=268435455-d),e.writeBuffer(new Uint8Array(a).fill(0)),o=e.getPos(),e.seek(s),function(e,t){e.writeUint8(t>>21&127),e.writeUint8(t>>14&127),e.writeUint8(t>>7&127),e.writeUint8(127&t)}(e,d),e.seek(o)}},31608:(e,t,a)=>{a.d(t,{FN:()=>o,W8:()=>i,c1:()=>r});const i=100,r=128,o=156}}]);