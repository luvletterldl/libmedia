"use strict";(self.webpackChunkAVPlayer=self.webpackChunkAVPlayer||[]).push([[299],{20620:(t,e,i)=>{i.d(e,{Jk:()=>v,KD:()=>I,MB:()=>w,S1:()=>A,XC:()=>P,ci:()=>M,oT:()=>B,tZ:()=>U,wf:()=>x});var s=i(63939),r=i(50932),n=i(72739),h=i(729),a=i(31865),o=i(37246),f=i(4624),u=i(14686),l=i(71517),d=i(60264),c=i(37837),p=i(23991),b=i(39381),g="src/avformat/codecs/h264.ts";const m=3,U={66:"Constrained Baseline",77:"Main",100:"High",110:"High10",122:"High422",244:"High444"};function w(t){const e=new a.A(t);e.skip(5);const i=[],s=[],r=[],n=31&e.readUint8();for(let t=0;t<n;t++){const t=e.readUint16();i.push(e.readBuffer(t))}const h=e.readUint8();for(let t=0;t<h;t++){const t=e.readUint16();s.push(e.readBuffer(t))}if(e.remainingSize()>4){e.skip(3);const t=e.readUint8();if(t>0)for(let i=0;i<t;i++){const t=e.readUint16();r.push(e.readBuffer(t))}}return{spss:i,ppss:s,spsExts:r}}function y(t,e,i=[]){t.length>32&&(f.R8(`h264 metadata's sps max length is 32, but get ${t.length}`,g,210),t=t.slice(0,32)),t.length>256&&(f.R8(`h264 metadata's pps max length is 256, but get ${t.length}`,g,214),t=t.slice(0,256));let s=7;s=t.reduce(((t,e)=>t+2+e.length),s),s=e.reduce(((t,e)=>t+2+e.length),s);const r=t[0],a=x(r);66!==a.profile&&77!==a.profile&&88!==a.profile&&(s+=4,i.length&&(s=i.reduce(((t,e)=>t+2+e.length),s)));const o=new Uint8Array(s),u=new h.A(o);return u.writeUint8(1),u.writeUint8(r[1]),u.writeUint8(r[2]),u.writeUint8(r[3]),u.writeUint8(252|m),u.writeUint8(224|31&t.length),n.__(t,(t=>{u.writeUint16(t.length),u.writeBuffer(t)})),u.writeUint8(e.length),n.__(e,(t=>{u.writeUint16(t.length),u.writeBuffer(t)})),66!==a.profile&&77!==a.profile&&88!==a.profile&&(u.writeUint8(252|a.chromaFormatIdc),u.writeUint8(248|a.bitDepthLumaMinus8),u.writeUint8(248|a.bitDepthChromaMinus8),i.length&&n.__(i,(t=>{u.writeUint16(t.length),u.writeBuffer(t)}))),o}function A(t){let e=(0,d.py)(t);if(e.length>1){const t=[],i=[],s=[];if(e.forEach((e=>{const r=31&e[0];7===r?t.push(e):8===r?i.push(e):13===r&&s.push(e)})),t.length&&i.length)return y(t,i,s)}}function B(t){let e,i=(0,d.py)(t),s=!1;if(i.length>1){const t=[],s=[],r=[];i.forEach((e=>{const i=31&e[0];7===i?t.push(e):8===i?s.push(e):13===i&&r.push(e)})),t.length&&s.length&&(e=y(t,s,r)),i=i.filter((t=>{const e=31&t[0];return 9!==e&&8!==e&&7!==e&&13!==e}))}const r=i.reduce(((t,e)=>t+m+1+e.length),0),a=(0,c.sY)(r),o=(0,u.s3)(a,r),f=new h.A(o);return n.__(i,(t=>{3===m?f.writeUint32(t.length):2===m?f.writeUint24(t.length):1===m?f.writeUint16(t.length):f.writeUint8(t.length),f.writeBuffer(t.subarray(0)),5==(31&t[0])&&(s=!0)})),{bufferPointer:a,length:r,key:s,extradata:e}}function v(t,e){var i;if(!(1&s.f[15](t+36)))return;const r=(0,l.iI)(t);if((0,d.Bs)(r))return;const n=null!==(i=e.metadata.naluLengthSizeMinusOne)&&void 0!==i?i:m;let h=[],o=[],f=[],p=[];const b=new a.A(r);for(;b.remainingSize()>0;){let t=0;t=3===n?b.readUint32():2===n?b.readUint24():1===n?b.readUint16():b.readUint8();const e=r.subarray(0|Number(0xffffffffn&b.getPos()),(0|Number(0xffffffffn&b.getPos()))+t);b.skip(t);const i=31&e[0];7===i?h.push(e):8===i?o.push(e):13===i?f.push(e):p.push(e)}if(h.length||o.length){const e=y(h,o,f),i=(0,c.sY)(e.length);(0,u.lW)(i,e.length,e),(0,l.Ow)(t,1,i,e.length)}}function M(t,e=!1){if(!(1&s.f[15](t+36)||e))return;const i=(0,l.iI)(t);if(!(0,d.Bs)(i))return;let n=(0,d.py)(i);if(n.length>1){const e=[],i=[],h=[];if(n.forEach((t=>{const s=31&t[0];7===s?e.push(t):8===s?i.push(t):13===s&&h.push(t)})),e.length&&i.length){const n=y(e,i,h),a=(0,c.sY)(n.length);(0,u.lW)(a,n.length,n),(0,l.Ow)(t,1,a,n.length),r.M[15](t+36,1|s.f[15](t+36))}}}function P(t,e){if(!e&&t.sideData[1]&&(e=t.sideData[1]),e&&e.length>=6){t.metadata.naluLengthSizeMinusOne=3&e[4];const{spss:i}=w(e);if(i.length){const{profile:e,level:s,width:r,height:n}=x(i[0]);t.codecpar.profile=e,t.codecpar.level=s,t.codecpar.width=r,t.codecpar.height=n}}}function I(t,e=4){if(2===s.f[15](t+80))return(0,d.py)((0,u.s3)(s.f[20](t+24),s.f[15](t+28))).some((t=>5==(31&t[0])));{const i=s.f[15](t+28);let r=0;for(;r<i-e;){if(5==(31&b.r8(s.f[20](t+24)+(r+e))))return!0;r+=4===e?b.Sg(s.f[20](t+24)+r):3===e?b.ht(s.f[20](t+24)+r):2===e?b.yd(s.f[20](t+24)+r):b.r8(s.f[20](t+24)+r),r+=e}return!1}}function x(t){if(!t||t.length<3)return;let e=0;0===t[0]&&0===t[1]&&0===t[2]&&1===t[3]&&(e=4);const i=(0,d.BN)(t.subarray(e)),s=new o.A(i.length);s.appendBuffer(i),s.readU1(),s.readU(2),s.readU(5);const r=s.readU(8);s.readU1(),s.readU1(),s.readU1(),s.readU1(),s.readU1(),s.readU1(),s.readU(2);const n=s.readU(8);p.xb(s);let h=1,a=0,f=0;if((100==r||110==r||122==r||244==r||44==r||83==r||86==r||118==r||128==r||138==r||139==r||134==r||135==r)&&(h=p.xb(s),3===h&&s.readU1(),a=p.xb(s),f=p.xb(s),s.readU1(),s.readU1())){const t=new Array(8);for(let e=0;e<(3!=h?8:12);e++)t[e]=s.readU1()}const u=p.xb(s),l=p.xb(s);let c=0,b=0;if(0===l)c=p.xb(s);else if(1===l){b=s.readU1(),p.$x(s),p.$x(s);const t=p.xb(s);for(let e=0;e<t;e++)p.$x(s)}p.xb(s),s.readU1();const g=p.xb(s),m=p.xb(s),U=s.readU1();let w=16*(g+1),y=(2-U)*(m+1)*16;U||s.readU1(),s.readU1();const A=s.readU1();if(A){let t=1,e=2-A;1===h?(t=2,e=2*(2-A)):2===A&&(t=2,e=2-A),w-=t*(p.xb(s)+p.xb(s)),y-=e*(p.xb(s)+p.xb(s))}return{profile:r,level:n,width:w,height:y,chromaFormatIdc:h,bitDepthLumaMinus8:a,bitDepthChromaMinus8:f,frameMbsOnlyFlag:U,picOrderCntType:l,log2MaxPicOrderCntLsbMinus4:c,deltaPicOrderAlwaysZeroFlag:b,log2MaxFrameNumMinus4:u}}},85947:(t,e,i)=>{i.d(e,{A:()=>r});var s=i(134);class r{constructor(){(0,s.A)(this,"type",-1),(0,s.A)(this,"onStreamAdd",void 0)}destroy(t){}}},5299:(t,e,i)=>{i.r(e),i.d(e,{default:()=>w});var s=i(134),r=i(63939),n=i(50932),h=i(9705),a=i(85947),o=i(14686),f=i(37837),u=i(71517),l=i(95335),d=i(92647),c=i(20620),p=i(77231),b=i(37246),g=i(23991),m=i(37805);const U={framerate:{num:30,den:1}};class w extends a.A{constructor(t={}){super(),(0,s.A)(this,"type",9),(0,s.A)(this,"options",void 0),(0,s.A)(this,"currentDts",void 0),(0,s.A)(this,"currentPts",void 0),(0,s.A)(this,"step",void 0),(0,s.A)(this,"slices",void 0),(0,s.A)(this,"naluPos",void 0),(0,s.A)(this,"queue",void 0),(0,s.A)(this,"bitReader",void 0),(0,s.A)(this,"sliceType",void 0),(0,s.A)(this,"poc",void 0),(0,s.A)(this,"picOrderCntMsb",void 0),(0,s.A)(this,"lastPicOrderCntLsb",void 0),(0,s.A)(this,"frameNumberOffset",void 0),(0,s.A)(this,"prevFrameNumber",void 0),(0,s.A)(this,"sps",void 0),(0,s.A)(this,"naluReader",void 0),this.options=l.X$({},U,t)}init(t){t.ioReader&&t.ioReader.setEndian(!1),this.slices=[],this.queue=[],this.bitReader=new b.A(50),this.naluReader=new m.A}isFrameNalu(t){const e=31&t[1===t[2]?3:4];return 1===e||5===e||2===e||3===e||4===e}async readNaluFrame(t){let e=!1;const i=this.slices;for(this.slices=[],i.length&&(e=this.isFrameNalu(i[0]));;){const s=await this.naluReader.read(t.ioReader);if(!s)return i;const r=31&s[1===s[2]?3:4];if(this.isFrameNalu(s))if(e){if(this.bitReader.clear(),this.bitReader.appendBuffer(s.subarray(1===s[2]?4:5,10)),0===g.xb(this.bitReader))return this.slices.push(s),i;i.push(s)}else i.push(s),e=!0;else{if(e&&(9===r||7===r||8===r))return this.slices.push(s),i;i.push(s)}}}async readHeader(t){const e=t.createStream();for(e.codecpar.codecType=0,e.codecpar.codecId=27,e.timeBase.den=p.SF,e.timeBase.num=1,e.codecpar.bitFormat=2,this.currentDts=BigInt(0),this.currentPts=BigInt(0),this.naluPos=BigInt(0),this.poc=BigInt(0),this.picOrderCntMsb=BigInt(0),this.lastPicOrderCntLsb=0,this.frameNumberOffset=BigInt(0),this.prevFrameNumber=0,this.step=BigInt(Math.floor(p.SF/this.options.framerate.num*this.options.framerate.den));;){const i=await this.readNaluFrame(t);if(!i.length)return-1048576;const s=(0,d.A)(Uint8Array,i),h=c.S1(s);if(h){e.codecpar.extradata=(0,f.sY)(h.length),(0,o.lW)(e.codecpar.extradata,h.length,h),e.codecpar.extradataSize=h.length,c.XC(e,h);const{spss:i}=c.MB(h);this.sps=c.wf(i[0]);const a=(0,u._5)(),l=(0,f.sY)(s.length);(0,o.lW)(l,s.length,s),(0,u.NX)(a,l,s.length),n.M[17](a+56,this.naluPos),this.naluPos+=BigInt(Math.floor(s.length)),n.M[17](a+16,this.currentDts),this.currentDts+=this.step,n.M[17](a+8,this.currentPts),this.currentPts+=this.step,n.M[15](a+32,e.index),n.M[15](a+36,1|r.f[15](a+36)),n.M[15](a+72,e.timeBase.num),n.M[15](a+76,e.timeBase.den),n.M[15](a+80,2),t.interval.packetBuffer.push(a);break}this.naluPos+=BigInt(Math.floor(s.length))}return 0}async readAVPacket_(t,e){const i=t.getStreamByMediaType(0),s=await this.readNaluFrame(t);if(!s.length)return-1048576;this.sliceType=-1;let h=!1,a=!0;s.forEach((t=>{const e=1===t[2]?t[3]:t[4],i=31&e,s=e>>>5&3;if(7===i&&(this.sps=c.wf(t)),5===i&&(h=!0),(1===i||2===i||3===i||4===i||5===i)&&a){a=!1,this.bitReader.clear(),this.bitReader.appendBuffer(t.subarray(1===t[2]?4:5,50)),g.xb(this.bitReader),this.sliceType=g.xb(this.bitReader),g.xb(this.bitReader);const e=this.bitReader.readU(this.sps.log2MaxFrameNumMinus4+4);let r=0,n=0;if(this.sps.frameMbsOnlyFlag||(r=this.bitReader.readU1()),r&&(n=this.bitReader.readU1()),5===i&&g.xb(this.bitReader),0===this.sps.picOrderCntType){const t=this.bitReader.readU(this.sps.log2MaxPicOrderCntLsbMinus4+4),e=(1<<this.sps.log2MaxPicOrderCntLsbMinus4+4)-1;Math.abs(t-this.lastPicOrderCntLsb)>e>>>1&&(this.picOrderCntMsb+=BigInt(Math.floor(e))),this.poc=this.picOrderCntMsb+BigInt(Math.floor(t)),this.lastPicOrderCntLsb=t}else if(1===this.sps.picOrderCntType){const t=[0,0];if(this.sps.deltaPicOrderAlwaysZeroFlag||(t[0]=g.$x(this.bitReader),n&&(t[1]=g.$x(this.bitReader))),e<this.prevFrameNumber){const t=(1<<this.sps.log2MaxFrameNumMinus4+4)-1;this.frameNumberOffset+=BigInt(Math.floor(t))}let i=this.frameNumberOffset+BigInt(Math.floor(e));0===s&&i>0&&i--,this.poc=BigInt(2)*i+BigInt(t[0]>>>0),r&&n&&(this.poc+=BigInt(t[1]>>>0)),this.prevFrameNumber=e}else this.poc++}}));const l=(0,d.A)(Uint8Array,s),p=(0,f.sY)(l.length);return(0,o.lW)(p,l.length,l),(0,u.NX)(e,p,l.length),n.M[17](e+56,this.naluPos),this.naluPos+=BigInt(Math.floor(l.length)),n.M[17](e+16,this.currentDts),this.currentDts+=this.step,n.M[15](e+32,i.index),n.M[15](e+72,i.timeBase.num),n.M[15](e+76,i.timeBase.den),n.M[15](e+80,2),h&&n.M[15](e+36,1|r.f[15](e+36)),0}async readAVPacket(t,e){let i=this.queue.length;const s=()=>{this.queue.length>1&&this.queue.sort(((t,e)=>t.poc-e.poc>BigInt(0)?1:-1));for(let t=0;t<this.queue.length;t++)n.M[17](this.queue[t].avpacket+8,this.currentPts),this.currentPts+=this.step;this.queue.length>1&&this.queue.sort(((t,e)=>r.f[17](t.avpacket+16)-r.f[17](e.avpacket+16)>BigInt(0)?1:-1)),this.queue.length&&((0,u.rN)(e,this.queue[0].avpacket),(0,u.Qe)(this.queue[0].avpacket));for(let e=1;e<this.queue.length;e++)t.interval.packetBuffer.push(this.queue[e].avpacket);this.queue.length=0};for(;;){const e=(0,u._5)();let n=await this.readAVPacket_(t,e);if(n<0)return(0,u.Qe)(e),this.queue.length?(s(),0):n;if(1&r.f[15](e+36)||0===this.sliceType||2===this.sliceType||5===this.sliceType||7===this.sliceType){if(1===i||1&r.f[15](e+36)&&this.queue.length)return s(),this.queue.push({avpacket:e,poc:this.poc}),0;this.queue.push({avpacket:e,poc:this.poc}),i++}else this.queue.push({avpacket:e,poc:this.poc})}}async seek(t,e,i,s){return BigInt(h.E$)}getAnalyzeStreamsCount(){return 1}}},37805:(t,e,i)=>{i.d(e,{A:()=>h});var s=i(134),r=i(60264),n=i(92647);class h{constructor(){(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"pos",void 0),(0,s.A)(this,"end",void 0),(0,s.A)(this,"ended",void 0),this.buffer=new Uint8Array(102400),this.pos=0,this.end=0,this.ended=!1}async read(t){if(this.ended&&this.pos>=this.end)return;const e=[];if(this.pos<this.end-4){let t=r.Ky(this.buffer.subarray(this.pos,this.end-4),3);if(t.offset>-1){const e=this.buffer.slice(this.pos,this.pos+t.offset);return this.pos+=t.offset,e}e.push(this.buffer.slice(this.pos,this.end-4)),this.buffer.copyWithin(0,this.end-4,this.end),this.pos=0,this.end=4}for(;;){if(!this.ended&&this.end<this.buffer.length)try{const e=await t.readToBuffer(this.buffer.length-this.end,this.buffer.subarray(this.end));this.end+=e}catch(t){if(this.ended=!0,this.pos>=this.end)return e.length?(0,n.A)(Uint8Array,e):null}let i=r.Ky(this.buffer.subarray(this.pos,this.end-4),e.length?0:3);if(i.offset>-1)return e.push(this.buffer.slice(this.pos,this.pos+i.offset)),this.pos+=i.offset,(0,n.A)(Uint8Array,e);if(this.ended)return e.push(this.buffer.slice(this.pos,this.end)),this.pos=this.end=0,(0,n.A)(Uint8Array,e);e.push(this.buffer.slice(this.pos,this.end-4)),this.buffer.copyWithin(0,this.end-4,this.end),this.pos=0,this.end=4}}reset(){this.pos=0,this.end=0,this.ended=!1}}},23991:(t,e,i)=>{function s(t){let e=0,i=0;for(;i<32&&0===t.readU1();)i++;return e=t.readU(i),e+=(1<<i)-1,e}function r(t){let e=s(t);return e=1&e?(e+1)/2:-e/2,e}i.d(e,{$x:()=>r,xb:()=>s})},39381:(t,e,i)=>{i.d(e,{E3:()=>n,Sg:()=>f,Y0:()=>o,ht:()=>a,r8:()=>r,yd:()=>h});var s=i(63939);function r(t){return s.f[2](t)}function n(t){return r(t+1)<<8|r(t)}function h(t){return r(t)<<8|r(t+1)}function a(t){return r(t)<<16|r(t+1)<<8|r(t+2)}function o(t){return n(t+2)<<16|n(t)}function f(t){return h(t)<<16|h(t+2)}},60264:(t,e,i)=>{function s(t){return t.length>4&&0===t[0]&&0===t[1]&&(1===t[2]||0===t[2]&&1===t[3])}function r(t,e){let i=0;for(let s=e;s<t.length;s++)switch(t[s]){case 0:i++;break;case 1:if(i>=2)return{offset:s-Math.min(i,3),startCode:Math.min(i+1,4)};i=0;break;default:i=0}return{offset:-1,startCode:0}}function n(t){const e=[];let i=r(t,0),s={offset:-1,startCode:0};for(;s=r(t,i.offset+i.startCode),s.offset>-1;)e.push(t.subarray(i.offset+i.startCode,s.offset,!0)),i=s;return e.push(t.subarray(i.offset+i.startCode,void 0,!0)),e}function h(t,e=0,i){i||(i=t.length);const s=new Uint8Array(t.length);let r=0,n=0;for(let h=0;h<t.length;h++){if(h>=e&&h<i)if(0===t[h])r++;else if(3===t[h]&&2===r&&h+1<t.length&&t[h+1]<=3){if(h++,h===t.length)break;r=0===t[h]?1:0}else r=0;s[n++]=t[h]}return s.slice(0,n)}i.d(e,{BN:()=>h,Bs:()=>s,Ky:()=>r,py:()=>n})},37246:(t,e,i)=>{i.d(e,{A:()=>n});var s=i(134),r=i(4624);class n{constructor(t=1048576){(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"pointer",void 0),(0,s.A)(this,"bitsLeft",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"endPointer",void 0),(0,s.A)(this,"error",void 0),(0,s.A)(this,"onFlush",void 0),this.pointer=0,this.bitsLeft=8,this.size=t,this.endPointer=0,this.error=0,this.buffer=new Uint8Array(this.size)}peekU1(){let t=0;(this.remainingLength()<1||1===this.remainingLength()&&0===this.bitsLeft)&&this.flush();let e=this.pointer,i=this.bitsLeft;return 0===i&&(e++,i=8),t=this.buffer[e]>>i-1&1,t}readU1(){let t=0;return(this.remainingLength()<1||1===this.remainingLength()&&0===this.bitsLeft)&&this.flush(),this.bitsLeft--,t=this.buffer[this.pointer]>>this.bitsLeft&1,0===this.bitsLeft&&(this.pointer++,this.bitsLeft=8),t}readU(t){let e=0;for(let i=0;i<t;i++)e|=this.readU1()<<t-i-1;return e}remainingLength(){return this.endPointer-this.pointer}getBitLeft(){return this.bitsLeft}getPos(){return this.pointer}backToPos(t){this.pointer=t}skip(t){const e=(t-t%8)/8;this.pointer+=e;const i=t%8;this.bitsLeft<=i?(this.pointer++,this.bitsLeft=8-(i-this.bitsLeft)):this.bitsLeft-=i}flush(){if(!this.onFlush)throw this.error=-1048574,Error("IOReader error, flush failed because of no flush callback");if(0===this.bitsLeft&&this.pointer++,!(this.size-this.remainingLength()<=0))if(this.pointer<this.endPointer){this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0);const t=this.onFlush(this.buffer.subarray(this.endPointer-this.pointer,this.size));if(t<0)throw this.error=t,Error("IOReader error, flush failed");this.endPointer=this.endPointer-this.pointer+t,this.pointer=0}else{const t=this.onFlush(this.buffer);if(this.endPointer=t,this.pointer=0,this.bitsLeft=8,t<0)throw this.error=t,Error("IOReader error, flush failed")}}getBuffer(){return this.buffer}appendBuffer(t){if(this.size-this.endPointer>=t.length)this.buffer.set(t,this.endPointer),this.endPointer+=t.length;else if(this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0),this.endPointer=this.endPointer-this.pointer,this.pointer=0,this.size-this.endPointer>=t.length)this.buffer.set(t,this.endPointer),this.endPointer+=t.length;else{const e=Math.min(this.size-this.endPointer,t.length);this.buffer.set(t.subarray(0,e),this.endPointer),this.endPointer+=e,r.R8("BSReader, call appendBuffer but the buffer's size is lagger then the remaining size","src/common/io/BitReader.ts",198)}}clear(){this.pointer=this.endPointer=0,this.bitsLeft=8,this.error=0}skipPadding(){this.bitsLeft<8&&(this.bitsLeft=8,this.pointer++)}}},729:(t,e,i)=>{i.d(e,{A:()=>h});var s=i(134),r=i(4624),n=i(50011);class h{constructor(t,e=!0){(0,s.A)(this,"data",void 0),(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"byteStart",void 0),(0,s.A)(this,"pos",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"littleEndian",void 0),this.buffer=t,this.data=t instanceof Uint8Array?new DataView(t.buffer):t.view,this.byteStart=t instanceof Uint8Array?t.byteOffset:0,this.pos=0,this.size=t.byteLength,this.littleEndian=!e}writeUint8(t){this.data.setUint8(this.pos+++this.byteStart,t)}writeUint16(t){this.data.setUint16(this.pos+this.byteStart,t,this.littleEndian),this.pos+=2}writeUint24(t){const e=3840&t,i=240&t,s=15&t;this.littleEndian?(this.writeUint8(s),this.writeUint8(i),this.writeUint8(e)):(this.writeUint8(e),this.writeUint8(i),this.writeUint8(s))}writeUint32(t){this.data.setUint32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}writeUint64(t){const e=t&BigInt(4294967295),i=(t&BigInt(4294967295)<<BigInt(32))>>BigInt(32);this.littleEndian?(this.writeUint32(Number(e)),this.writeUint32(Number(i))):(this.writeUint32(Number(i)),this.writeUint32(Number(e)))}writeInt8(t){this.data.setInt8(this.pos+++this.byteStart,t)}writeInt16(t){this.data.setInt16(this.pos+this.byteStart,t,this.littleEndian),this.pos+=2}writeInt32(t){this.data.setInt32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}writeInt64(t){const e=t&BigInt(4294967295),i=(t&BigInt(4294967295)<<BigInt(32))>>BigInt(32);this.littleEndian?(this.writeInt32(Number(e)),this.writeInt32(Number(i))):(this.writeInt32(Number(i)),this.writeInt32(Number(e)))}writeFloat(t){this.data.setFloat32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}writeDouble(t){this.data.setFloat64(this.pos+this.byteStart,t,this.littleEndian),this.pos+=8}getPos(){return this.pos}seek(t){t>this.size&&(t=this.size),this.pos=Math.max(0,t)}skip(t){this.seek(this.pos+t)}back(t){this.seek(this.pos-t)}remainingSize(){return this.size-this.pos}writeBuffer(t){let e=t.length;this.remainingSize()<e&&(e=this.remainingSize(),r.R8(`the remaining buffer size is smaller then the wrote buffer, hope set ${t.length}, but set ${e}`,"src/common/io/BufferWriter.ts",211)),this.buffer.set(t,this.pos),this.pos+=t.length}writeString(t){const e=n.encode(t);return this.writeBuffer(e),e.length}getWroteBuffer(){return this.buffer.subarray(0,this.pos)}resetBuffer(t,e=!0){this.buffer=t,this.data=t instanceof Uint8Array?new DataView(t.buffer):t.view,this.byteStart=t instanceof Uint8Array?t.byteOffset:0,this.pos=0,this.size=t.byteLength,this.littleEndian=!e}}}}]);