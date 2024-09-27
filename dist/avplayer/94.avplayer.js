"use strict";(self.webpackChunkAVPlayer=self.webpackChunkAVPlayer||[]).push([[94],{64436:(e,t,i)=>{i.d(t,{A:()=>o});var r=i(134),s=i(63939),a=i(37837),n=i(71766);class o{constructor(){(0,r.A)(this,"inCodecpar",void 0),(0,r.A)(this,"inTimeBase",void 0),(0,r.A)(this,"outCodecpar",void 0)}init(e,t){return this.inCodecpar=(0,a.Gy)(168),(0,n.Yi)(this.inCodecpar,e),this.inTimeBase={den:s.f[15](t+4),num:s.f[15](t)},0}destroy(){this.inCodecpar&&((0,n.dn)(this.inCodecpar),this.inCodecpar=0)}}},36488:(e,t,i)=>{i.d(t,{A:()=>y});var r=i(134),s=i(63939),a=i(50932),n=i(77162),o=i(29170),h=i(64436),d=i(14686),f=i(4624),c=i(9705),l=i(77231),p=i(58469),u=i(44328),m=i(37837),g=i(71517),R=i(37246),b=i(67672);class y extends h.A{constructor(...e){super(...e),(0,r.A)(this,"bitReader",void 0),(0,r.A)(this,"streamMuxConfig",void 0),(0,r.A)(this,"caches",void 0),(0,r.A)(this,"refSampleDuration",void 0)}init(e,t){return super.init(e,t),this.caches=[],this.refSampleDuration=BigInt(0),this.bitReader=new R.A,this.streamMuxConfig={profile:l.N_,sampleRate:l.N_,channels:l.N_},0}sendAVPacket(e){const t=(0,d.s3)(s.f[20](e+24),s.f[15](e+28));this.bitReader.appendBuffer(t);let i=s.f[17](e+16)||s.f[17](e+8);for(;this.bitReader.remainingLength()>=20;){const e=this.bitReader.getPos(),t=p.f7(null,this.bitReader);if(b.ai(t))return f.z3("AACLATMParser parse failed","src/avformat/bsf/aac/LATM2RawFilter.ts",94),this.bitReader.clear(),c.LR;if(t.framePayloadLength>=this.bitReader.remainingLength()){this.bitReader.skipPadding(),this.bitReader.backToPos(e);break}t.useSameStreamMux||(this.streamMuxConfig.profile=t.profile,this.streamMuxConfig.sampleRate=t.sampleRate,this.streamMuxConfig.channels=t.channels);const r=t.framePayloadLength,h=new Uint8Array(r);for(let e=0;e<r;e++)h[e]=this.bitReader.readU(8);const g={dts:i,buffer:h,extradata:null};if(s.f[15](this.inCodecpar+48)!==this.streamMuxConfig.profile||s.f[15](this.inCodecpar+136)!==this.streamMuxConfig.sampleRate||s.f[15](this.inCodecpar+116)!==this.streamMuxConfig.channels){this.refSampleDuration=(0,u.k)(BigInt(Math.floor(1024/this.streamMuxConfig.sampleRate*l.SF)),l.KR,this.inTimeBase),a.M[15](this.inCodecpar+48,this.streamMuxConfig.profile),a.M[15](this.inCodecpar+136,this.streamMuxConfig.sampleRate),a.M[15](this.inCodecpar+116,this.streamMuxConfig.channels);const e=(0,p.Ij)((0,o.A)(this.inCodecpar,n.A));s.f[20](this.inCodecpar+12)&&(0,m.Eb)(s.f[20](this.inCodecpar+12)),a.M[20](this.inCodecpar+12,(0,m.sY)(e.length)),(0,d.lW)(s.f[20](this.inCodecpar+12),e.length,e),a.M[15](this.inCodecpar+16,e.length),g.extradata=e}this.caches.push(g),i+=this.refSampleDuration,this.bitReader.skipPadding()}return 0}receiveAVPacket(e){if(this.caches.length){(0,g.Up)(e);const t=this.caches.shift(),i=(0,m.sY)(t.buffer.length);if((0,d.lW)(i,t.buffer.length,t.buffer),(0,g.NX)(e,i,t.buffer.length),a.M[17](e+16,t.dts),a.M[17](e+8,t.dts),a.M[15](e+36,1|s.f[15](e+36)),a.M[17](e+48,this.refSampleDuration),t.extradata){const i=(0,m.sY)(t.extradata.length);(0,d.lW)(i,t.extradata.length,t.extradata),(0,g.Ow)(e,1,i,t.extradata.length)}return 0}return c.LT}reset(){return this.bitReader.clear(),0}}},58469:(e,t,i)=>{i.d(t,{Bq:()=>c,Ij:()=>f,XC:()=>d,f7:()=>l,uF:()=>a});var r=i(77231),s=i(37246);const a={1:"Main",2:"LC",3:"LC",4:"LC",5:"HE",6:"HE"},n={96e3:0,88200:1,64e3:2,48e3:3,44100:4,32e3:5,24e3:6,22050:7,16e3:8,12e3:9,11025:10,8e3:11,7350:12},o=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350,r.N_,r.N_,r.N_],h=[r.N_,1,2,3,4,5,6,7];function d(e,t){if(!t&&e.sideData[1]&&(t=e.sideData[1]),t){const{profile:i,sampleRate:s,channels:a}=function(e){let t=r.N_,i=r.N_,s=r.N_;var a,n;return e.length>=2&&(t=e[0]>>3&31,i=null!==(a=o[(7&e[0])<<1|e[1]>>7])&&void 0!==a?a:48e3,s=null!==(n=h[e[1]>>3&15])&&void 0!==n?n:2),{profile:t,sampleRate:i,channels:s}}(t);e.codecpar.profile=i,e.codecpar.sampleRate=s,e.codecpar.chLayout.nbChannels=a}}function f(e){const t=n[e.sampleRate],i=e.chLayout.nbChannels,r=new Uint8Array(2);return r[0]=(31&e.profile)<<3|(14&t)>>1,r[1]=(1&t)<<7|(15&i)<<3,r}function c(e){if(e.length<7)return-1;const t=e[0]<<4|e[1]>>4;if(4095!==t)return-1;const i=1&e[1],r=(192&e[2])>>>6,s=(60&e[2])>>>2,a=(1&e[2])<<2|(192&e[3])>>>6,n=(3&e[3])<<11|e[4]<<3|(224&e[5])>>>5,d=3&e[6];let f=1===i?7:9,c=n-f;return{syncWord:t,profile:r+1,sampleRate:o[s],channels:h[a],aacFrameLength:n,numberOfRawDataBlocksInFrame:d,headerLength:f,framePayloadLength:c}}function l(e,t){function i(){const e=t.readU(2);let i=0;for(let r=0;r<=e;r++)i<<=8,i|=t.readU(8);return i}t||(t=new s.A).appendBuffer(e);const r=t.getPos(),a={syncWord:0,profile:0,sampleRate:0,channels:0,useSameStreamMux:!1,headerLength:0,framePayloadLength:0,muxLengthBytes:0},n=t.readU(11);if(695!==n)return-1;a.syncWord=n,a.muxLengthBytes=t.readU(13);const d=1===t.readU1();if(a.useSameStreamMux=d,!d){const e=1===t.readU1();if(e&&1===t.readU1())return-1;if(e&&i(),1!==t.readU1())return-1;if(0!==t.readU(6))return-1;if(0!==t.readU(4))return-1;if(0!==t.readU(3))return-1;let r=e?i():0;const s=t.readU(5);r-=5;const n=t.readU(4);r-=4;const d=t.readU(4);if(r-=4,t.readU(3),r-=3,r>0&&t.readU(r),0!==t.readU(3))return-1;if(t.readU(8),1===t.readU1())if(e)i();else{let e=0;for(;;){e<<=8;const i=1===t.readU1();if(e+=t.readU(8),!i)break}}1===t.readU1()&&t.readU(8),a.profile=s+1,a.sampleRate=o[n],a.channels=h[d]}let f=0;for(;;){const e=t.readU(8);if(f+=e,255!==e)break}return a.framePayloadLength=f,a.headerLength=t.getPos()-r+(8===t.getBitLeft()?0:1),a}},47094:(e,t,i)=>{i.r(t),i.d(t,{default:()=>L});var r=i(134),s=i(61499),a=i(63939),n=i(50932),o=i(4624),h=i(9705),d=i(85947),f=i(10754),c=i(14686),l=i(37837),p=i(71517),u=i(44328),m=i(77231),g=i(72739),R=i(58469),b=i(67672),y=i(36488),B="src/avformat/formats/IAacFormat.ts";const P=1024;class L extends d.A{constructor(){super(),(0,r.A)(this,"type",f.P.AAC),(0,r.A)(this,"frameType",void 0),(0,r.A)(this,"fileSize",void 0),(0,r.A)(this,"currentPts",void 0),(0,r.A)(this,"latmFilter",void 0)}init(e){this.currentPts=BigInt(0)}destroy(e){this.latmFilter&&(this.latmFilter.destroy(),this.latmFilter=null)}async estimateTotalBlock(e){let t=0;const i=e.ioReader.getPos();for(;;)try{const i=await e.ioReader.peekBuffer(7),r=(3&i[3])<<11|i[4]<<3|(224&i[5])>>>5;t+=1+(3&i[6]),await e.ioReader.skip(r)}catch(e){break}return await e.ioReader.seek(i),t}async readHeader(e){const t=await e.ioReader.peekBuffer(4);if(this.fileSize=await e.ioReader.fileSize(),65===t[0]&&68===t[1]&&73===t[2]&&70===t[3]){const t=e.createStream();t.codecpar.codecId=86018,t.codecpar.codecType=1,this.frameType=0,t.duration=this.fileSize,t.timeBase.den=16384,t.timeBase.num=1}else if(255!==t[0]||240&~t[1]){if(86!==t[0]||224&~t[1])return h.LR;{this.frameType=2;const t=e.createStream();t.codecpar.codecId=86018,t.codecpar.codecType=1;const i=(0,R.f7)(await e.ioReader.peekBuffer(20));if(b.ai(i))return h.LR;t.codecpar.profile=i.profile,t.codecpar.sampleRate=i.sampleRate,t.codecpar.chLayout.nbChannels=i.channels;const r=(0,R.Ij)(t.codecpar);t.codecpar.extradata=(0,l.sY)(r.length),(0,c.lW)(t.codecpar.extradata,r.length,r),t.codecpar.extradataSize=r.length,t.duration=this.fileSize,t.timeBase.den=16384,t.timeBase.num=1,this.latmFilter=new y.A,this.latmFilter.init(t.codecpar[s.o9],t.timeBase[s.o9])}}else{this.frameType=1;const t=e.createStream();t.codecpar.codecId=86018,t.codecpar.codecType=1;const i=(0,R.Bq)(await e.ioReader.peekBuffer(20));if(b.ai(i))return h.LR;t.codecpar.profile=i.profile,t.codecpar.sampleRate=i.sampleRate,t.codecpar.chLayout.nbChannels=i.channels;const r=(0,R.Ij)(t.codecpar);t.codecpar.extradata=(0,l.sY)(r.length),(0,c.lW)(t.codecpar.extradata,r.length,r),t.codecpar.extradataSize=r.length,t.timeBase.den=t.codecpar.sampleRate,t.timeBase.num=1,t.duration=(0,u.k)(BigInt(Math.floor(1024*await this.estimateTotalBlock(e)/t.codecpar.sampleRate*m.SF)),m.KR,t.timeBase)}return 0}async readAVPacket(e,t){const i=e.streams.find((e=>e.codecpar.codecType=1));try{const r=e.ioReader.getPos();let s;if(0===this.frameType){s=await e.ioReader.readBuffer(Math.min(P,Number(BigInt.asIntN(32,this.fileSize-r))));const i=(0,l.sY)(s.length);(0,c.lW)(i,s.length,s),(0,p.NX)(t,i,s.length),n.M[17](t+48,BigInt(P)),n.M[17](t+56,r)}else if(1===this.frameType){const a=await e.ioReader.readBuffer(7),o=1&a[1],h=(3&a[3])<<11|a[4]<<3|(224&a[5])>>>5,d=3&a[6];let f=1===o?7:9,g=h-f;9===f&&await e.ioReader.skip(2);const R=(0,u.k)(BigInt(Math.floor(1024*(d+1)/i.codecpar.sampleRate*m.SF)),m.KR,i.timeBase);n.M[17](t+48,R),s=await e.ioReader.readBuffer(g);const b=(0,l.sY)(s.length);(0,c.lW)(b,s.length,s),(0,p.NX)(t,b,s.length),n.M[17](t+56,r)}else if(2===this.frameType){if(r===this.fileSize)return-1048576;for(;;){let i=this.latmFilter.receiveAVPacket(t);if(i!==h.LT){if(i<0)return i;n.M[17](t+48,BigInt(0|a.f[15](t+28))),n.M[17](t+56,this.currentPts);break}{if(e.ioReader.getPos()===this.fileSize)return-1048576;s=await e.ioReader.readBuffer(Math.min(P,Number(BigInt.asIntN(32,this.fileSize-r))));const i=(0,l.sY)(s.length);(0,c.lW)(i,s.length,s),(0,p.NX)(t,i,s.length),this.latmFilter.sendAVPacket(t)}}}return n.M[15](t+32,i.index),n.M[15](t+76,i.timeBase.den),n.M[15](t+72,i.timeBase.num),n.M[17](t+16,this.currentPts),n.M[17](t+8,this.currentPts),this.currentPts+=a.f[17](t+48),0}catch(t){return-1048576!==e.ioReader.error?(o.z3(`read packet error, ${t}`,B,270),h.LR):e.ioReader.error}}async syncFrame(e){if(0===this.frameType)return;let t=m.Dh;const i=1===this.frameType?4095:695,r=1===this.frameType?4:5;for(;;)try{let s=0;for(t=e.ioReader.getPos();3!==s&&await e.ioReader.peekUint16()>>>r===i;){const t=1===this.frameType?(0,R.Bq)(await e.ioReader.peekBuffer(9)):(0,R.f7)(await e.ioReader.peekBuffer(20));if(b.ai(t))break;s++,await e.ioReader.skip(t.headerLength+t.framePayloadLength)}if(3===s)break;await e.ioReader.skip(1)}catch(e){break}t!==m.Dh&&await e.ioReader.seek(t)}async seek(e,t,i,r){if(1===this.frameType){const s=e.ioReader.getPos();if(2&r){const a=await e.ioReader.fileSize();return a<=BigInt(0)?BigInt(h.E$):(i<BigInt(0)?i=BigInt(0):i>a&&(i=a),await e.ioReader.seek(i),4&r||(await this.syncFrame(e),t.duration&&this.fileSize&&(this.currentPts=i/this.fileSize*t.duration)),s)}if(t&&t.sampleIndexes.length){let r=g.El(t.sampleIndexes,(e=>e.pts>i?-1:1));if(r>0&&(0,u.k)(i-t.sampleIndexes[r-1].pts,t.timeBase,m.i0)<BigInt(5e3))return o.Yz(`seek in sampleIndexes, found index: ${r}, pts: ${t.sampleIndexes[r-1].pts}, pos: ${t.sampleIndexes[r-1].pos}`,B,369),await e.ioReader.seek(t.sampleIndexes[r-1].pos),this.currentPts=i,s}if(o.Yz("not found any keyframe index, try to seek in bytes",B,376),!t.duration)return BigInt(h.E$);{await e.ioReader.seek(BigInt(0));let r=BigInt(0);for(;;)try{if(r>=i)return this.currentPts=r,s;const a=await e.ioReader.peekBuffer(7),n=(3&a[3])<<11|a[4]<<3|(224&a[5])>>>5,o=3&a[6];r+=(0,u.k)(BigInt(Math.floor(1024*(o+1)/t.codecpar.sampleRate*m.SF)),m.KR,t.timeBase),await e.ioReader.skip(n)}catch(e){return BigInt(h.E$)}}}else if(0===this.frameType||2===this.frameType){this.latmFilter&&this.latmFilter.reset();const t=e.ioReader.getPos();return i<BigInt(0)?i=BigInt(0):i>this.fileSize&&(i=this.fileSize),await e.ioReader.seek(i),this.currentPts=i,2!==this.frameType||4&r||await this.syncFrame(e),t}return BigInt(h.E$)}getAnalyzeStreamsCount(){return 1}}},85947:(e,t,i)=>{i.d(t,{A:()=>a});var r=i(134),s=i(10754);class a{constructor(){(0,r.A)(this,"type",s.P.UNKNOWN),(0,r.A)(this,"onStreamAdd",void 0)}destroy(e){}}},37246:(e,t,i)=>{i.d(t,{A:()=>a});var r=i(134),s=i(4624);class a{constructor(e=1048576){(0,r.A)(this,"buffer",void 0),(0,r.A)(this,"pointer",void 0),(0,r.A)(this,"bitsLeft",void 0),(0,r.A)(this,"size",void 0),(0,r.A)(this,"endPointer",void 0),(0,r.A)(this,"error",void 0),(0,r.A)(this,"onFlush",void 0),this.pointer=0,this.bitsLeft=8,this.size=e,this.endPointer=0,this.error=0,this.buffer=new Uint8Array(this.size)}peekU1(){let e=0;(this.remainingLength()<1||1===this.remainingLength()&&0===this.bitsLeft)&&this.flush();let t=this.pointer,i=this.bitsLeft;return 0===i&&(t++,i=8),e=this.buffer[t]>>i-1&1,e}readU1(){let e=0;return(this.remainingLength()<1||1===this.remainingLength()&&0===this.bitsLeft)&&this.flush(),this.bitsLeft--,e=this.buffer[this.pointer]>>this.bitsLeft&1,0===this.bitsLeft&&(this.pointer++,this.bitsLeft=8),e}readU(e){let t=0;for(let i=0;i<e;i++)t|=this.readU1()<<e-i-1;return t}remainingLength(){return this.endPointer-this.pointer}getBitLeft(){return this.bitsLeft}getPos(){return this.pointer}backToPos(e){this.pointer=e}skip(e){const t=(e-e%8)/8;this.pointer+=t;const i=e%8;this.bitsLeft<=i?(this.pointer++,this.bitsLeft=8-(i-this.bitsLeft)):this.bitsLeft-=i}flush(){if(!this.onFlush)throw this.error=-1048574,Error("IOReader error, flush failed because of no flush callback");if(0===this.bitsLeft&&this.pointer++,!(this.size-this.remainingLength()<=0))if(this.pointer<this.endPointer){this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0);const e=this.onFlush(this.buffer.subarray(this.endPointer-this.pointer,this.size));if(e<0)throw this.error=e,Error("IOReader error, flush failed");this.endPointer=this.endPointer-this.pointer+e,this.pointer=0}else{const e=this.onFlush(this.buffer);if(this.endPointer=e,this.pointer=0,this.bitsLeft=8,e<0)throw this.error=e,Error("IOReader error, flush failed")}}getBuffer(){return this.buffer}appendBuffer(e){if(this.size-this.endPointer>=e.length)this.buffer.set(e,this.endPointer),this.endPointer+=e.length;else if(this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0),this.endPointer=this.endPointer-this.pointer,this.pointer=0,this.size-this.endPointer>=e.length)this.buffer.set(e,this.endPointer),this.endPointer+=e.length;else{const t=Math.min(this.size-this.endPointer,e.length);this.buffer.set(e.subarray(0,t),this.endPointer),this.endPointer+=t,s.R8("BSReader, call appendBuffer but the buffer's size is lagger then the remaining size","src/common/io/BitReader.ts",198)}}clear(){this.pointer=this.endPointer=0,this.bitsLeft=8,this.error=0}skipPadding(){this.bitsLeft<8&&(this.bitsLeft=8,this.pointer++)}}}}]);