"use strict";(self.webpackChunkAVPlayer=self.webpackChunkAVPlayer||[]).push([[808],{55611:(t,e,i)=>{i.d(e,{Jk:()=>m,KD:()=>_,QA:()=>P,Ui:()=>I,XC:()=>v,ci:()=>A,oT:()=>y,wf:()=>B});var s=i(63939),r=i(50932),n=i(72739),h=i(729),a=i(31865),o=i(37246),l=i(14686),f=i(60264),u=i(71517),d=i(37837),c=i(23991),p=i(83314),g=i(39381);const b=3;function U(t){const e=t.readU(9),i=t.readU(3),s=t.readU(2),r=t.readU(2),n=t.readU(3);t.readU(5),t.readU(2);const h=t.readU(6),a=t.readU(7),o=t.readU(1),l=t.readU(8),f=t.readU(1),u=t.readU(1),d=[],c=[];if(h){for(let e=0;e<h-1;e++)d[e]=t.readU(8);d[h-1]=t.readU(6)}else t.readU(6);if(i>1){let e=0;for(let s=i-2;s>=0;--s)e|=t.readU(1)<<s;for(let e=i;e<=8&&i>1;++e)t.readU(1);for(let s=i-2;s>=0;--s)e&1<<s&&(c[s]=t.readU(8))}const p=t.readU(8),g=[];if(p)for(let e=0;e<p;e++)g.push(t.readU(8));return{olsIdx:e,numSublayers:i,bitDepthMinus8:n,chromaFormatIdc:r,constantFrameRate:s,generalProfileIdc:a,generalTierFlag:o,generalLevelIdc:l,ptlFrameOnlyConstraintFlag:f,ptlMultilayerEnabledFlag:u,generalConstraintInfo:d,sublayerLevelIdc:c,generalSubProfileIdc:g,maxPictureWidth:t.readU(16),maxPictureHeight:t.readU(16),avgFramerate:t.readU(16)}}function w(t,e,i){const s=e[0];let r;if(s){const t=B(s);let e=t.generalConstraintInfo;e.length||(e=new Array(12).fill(0));const i=new p.A;if(i.writeU(9,0),i.writeU(3,t.spsMaxSublayersMinus1+1),i.writeU(2,1),i.writeU(2,t.chromaFormatIdc),i.writeU(3,t.bitDepthMinus8),i.writeU(5,31),i.writeU(2,0),i.writeU(6,e.length),i.writeU(7,t.profile),i.writeU1(t.tierFlag),i.writeU(8,t.level),i.writeU1(t.ptlFrameOnlyConstraintFlag),i.writeU1(t.ptlMultilayerEnabledFlag),e.length){for(let t=0;t<e.length-1;t++)i.writeU(8,e[t]);i.writeU(6,e[e.length-1])}else i.writeU(6,63);if(t.spsMaxSublayersMinus1+1>1){let e=0;for(let i=t.spsMaxSublayersMinus1-1;i>=0;i--)e=e<<1|t.ptlSublayerLevelPresentFlag[i];i.writeU(t.spsMaxSublayersMinus1,e);for(let e=t.spsMaxSublayersMinus1+1;e<=8&&t.spsMaxSublayersMinus1>0;++e)i.writeU1(0);for(let e=t.spsMaxSublayersMinus1-1;e>=0;e--)t.ptlSublayerLevelPresentFlag[e]&&i.writeU(8,t.sublayerLevelIdc[e])}i.writeU(8,t.generalSubProfileIdc.length);for(let e=0;e<t.generalSubProfileIdc.length;e++)i.writeU(8,t.sublayerLevelIdc[e]);i.writeU(16,t.width),i.writeU(16,t.height),i.writeU(16,0),i.padding(),r=i.getBuffer().subarray(0,i.getPointer())}let a=2+(r?r.length:0);t.length&&(a+=3,a=t.reduce(((t,e)=>t+2+e.length),a)),e.length&&(a+=3,a=e.reduce(((t,e)=>t+2+e.length),a)),i.length&&(a+=3,a=i.reduce(((t,e)=>t+2+e.length),a));const o=new Uint8Array(a),l=new h.A(o,!0);l.writeUint8(b<<1|(r?1:0)|248),r&&l.writeBuffer(r);let f=0;return t.length&&f++,e.length&&f++,i.length&&f++,l.writeUint8(f),t.length&&(l.writeUint8(142),l.writeUint16(t.length),n.__(t,(t=>{l.writeUint16(t.length),l.writeBuffer(t)}))),e.length&&(l.writeUint8(143),l.writeUint16(e.length),n.__(e,(t=>{l.writeUint16(t.length),l.writeBuffer(t)}))),i.length&&(l.writeUint8(144),l.writeUint16(i.length),n.__(i,(t=>{l.writeUint16(t.length),l.writeBuffer(t)}))),o}function y(t){let e,i=!1,s=(0,f.py)(t);if(s.length>=2){const t=[],i=[],r=[];s.forEach((e=>{const s=e[1]>>>3&31;14===s?t.push(e):15===s?i.push(e):16===s&&r.push(e)})),i.length&&r.length&&(e=w(t,i,r),s=s.filter((t=>{const e=t[1]>>>3&31;return 14!==e&&15!==e&&16!==e&&20!==e})))}const r=s.reduce(((t,e)=>t+b+1+e.length),0),a=(0,d.sY)(r),o=(0,l.s3)(a,r),u=new h.A(o);return n.__(s,(t=>{3===b?u.writeUint32(t.length):2===b?u.writeUint24(t.length):1===b?u.writeUint16(t.length):u.writeUint8(t.length),u.writeBuffer(t.subarray(0));const e=t[1]>>>3&31;8!==e&&7!==e&&9!==e&&10!==e||(i=!0)})),{bufferPointer:a,length:r,extradata:e,key:i}}function m(t,e){var i;if(!(1&s.f[15](t+36)))return;const r=(0,u.iI)(t);if((0,f.Bs)(r))return;const n=null!==(i=e.metadata.naluLengthSizeMinusOne)&&void 0!==i?i:b;let h=[],o=[],c=[];const p=new a.A(r);for(;p.remainingSize()>0;){let t=0;t=3===n?p.readUint32():2===n?p.readUint24():1===n?p.readUint16():p.readUint8();const e=r.subarray(Number(BigInt.asIntN(32,p.getPos())),Number(BigInt.asIntN(32,p.getPos()))+t);p.skip(t);const i=e[1]>>>3&31;15===i?o.push(e):16===i?c.push(e):14===i&&h.push(e)}if(o.length||c.length||h.length){const e=w(h,o,c),i=(0,d.sY)(e.length);(0,l.lW)(i,e.length,e),(0,u.Ow)(t,1,i,e.length)}}function A(t,e=!1){if(!(1&s.f[15](t+36)||e))return;const i=(0,u.iI)(t);if(!(0,f.Bs)(i))return;let n=(0,f.py)(i);if(n.length>2){const e=[],i=[],h=[];if(n.forEach((t=>{const s=t[1]>>>3&31;14===s?e.push(t):15===s?i.push(t):16===s&&h.push(t)})),e.length&&i.length&&h.length){const n=w(e,i,h),a=(0,d.sY)(n.length);(0,l.lW)(a,n.length,n),(0,u.Ow)(t,1,a,n.length),r.M[15](t+36,1|s.f[15](t+36))}}}function P(t,e){const{profile:i,level:s,width:r,height:n}=B(e);t.codecpar.profile=i,t.codecpar.level=s,t.codecpar.width=r,t.codecpar.height=n}function v(t,e){if(!e&&t.sideData[1]&&(e=t.sideData[1]),e&&e.length>=6){t.metadata.naluLengthSizeMinusOne=e[0]>>>1&3;const{spss:i}=function(t){const e=new a.A(t,!0);if(1&e.readUint8()){const i=new o.A;i.appendBuffer(t.subarray(1)),U(i),e.skip(i.getPos())}let i=[],s=[],r=[];const n=e.readUint8();for(let t=0;t<n;t++){const t=31&e.readUint8();let n=1;13!==t&&12!==t&&(n=e.readUint16());const h=[];for(let t=0;t<n;t++){const t=e.readUint16();h.push(e.readBuffer(t))}14===t?i=h:15===t?s=h:16===t&&(r=h)}return{vpss:i,spss:s,ppss:r}}(e);i.length&&P(t,i[0])}}function _(t,e=4){if(2===s.f[15](t+80))return(0,f.py)((0,l.s3)(s.f[20](t+24),s.f[15](t+28))).some((t=>{const e=t[1]>>>3&31;return 8===e||7===e}));{const i=s.f[15](t+28);let r=0;for(;r<i-e;){const i=g.r8(s.f[20](t+24)+(r+e+1))>>>3&31;if(8===i||7===i)return!0;r+=4===e?g.Sg(s.f[20](t+24)+r):3===e?g.ht(s.f[20](t+24)+r):2===e?g.yd(s.f[20](t+24)+r):g.r8(s.f[20](t+24)+r),r+=e}return!1}}function B(t){if(!t||t.length<3)return;let e=0;0===t[0]&&0===t[1]&&0===t[2]&&1===t[3]&&(e=4);let i=0,s=0,r=0,n=0,h=0,a=1,l=0,u=0,d=0;const p=[],g=[],b=[],U=[],w=(0,f.BN)(t.subarray(e)),y=new o.A(w.length);y.appendBuffer(w),y.readU1(),y.readU1(),y.readU(6),y.readU(5),y.readU(3),y.readU(8);const m=y.readU(3);a=y.readU(2);const A=y.readU(2);if(y.readU(1)){if(i=y.readU(7),l=y.readU(1),s=y.readU(8),u=y.readU(1),d=y.readU(1),y.readU(1)){for(let t=0;t<8;t++)p[t]=y.readU(8);p[8]=y.readU(7);const t=y.readU(8);y.readU(t)}y.skipPadding();for(let t=m-1;t>=0;t--)g[t]=y.readU(1);y.skipPadding();for(let t=m-1;t>=0;t--)g[t]&&(b[t]=y.readU(8));const t=y.readU(8);if(t)for(let e=0;e<t;e++)U[e]=y.readU(32)}y.readU1(),y.readU1()&&y.readU1();const P=r=c.xb(y),v=n=c.xb(y);if(y.readU1()&&(c.xb(y),c.xb(y),c.xb(y),c.xb(y)),y.readU1()){const t=c.xb(y),e=A+5,i=1<<e,s=P/(1<<e),r=v/(1<<e),n=Math.ceil(Math.log2(s)),h=Math.ceil(Math.log2(r));let a=0,o=0,l=0;t>0&&(l=y.readU1(),o=y.readU1());for(let e=0;t>0&&e<=t;e++)o&&0!=e||(e>0&&P>i&&y.readU(n),e>0&&v>i&&y.readU(h),e<t&&P>i&&y.readU(n),e<t&&v>i&&y.readU(h)),l||y.readU(2);if(a=c.xb(y)+1,y.readU(1)&&y.readU(1))for(let e=0;e<=t;e++)y.readU(a)}h=c.xb(y),y.readU(1),y.readU(1);const _=y.readU(4),B=y.readU(1);let I=0;B&&(I=c.xb(y));const M=[],S=y.readU(2);for(let t=0;t<8*S;t++)M[t]=y.readU(1);return{profile:i,level:s,width:r,height:n,chromaFormatIdc:a,bitDepthMinus8:h,generalProfileSpace:0,tierFlag:l,generalConstraintInfo:p,generalSubProfileIdc:U,ptlFrameOnlyConstraintFlag:u,ptlMultilayerEnabledFlag:d,spsMaxSublayersMinus1:m,ptlSublayerLevelPresentFlag:g,sublayerLevelIdc:b,sps_log2_max_pic_order_cnt_lsb_minus4:_,sps_poc_msb_cycle_flag:B,sps_poc_msb_cycle_len_minus1:I,sps_num_extra_ph_bytes:S,sps_extra_ph_bit_present_flag:M}}function I(t){0===t[0]&&0===t[1]&&0===t[2]&&1===t[3]&&(t=function(t){let e=(0,f.py)(t);if(e.length>=2){const t=[],i=[],s=[];if(e.forEach((e=>{const r=e[1]>>>3&31;14===r?t.push(e):15===r?i.push(e):16===r&&s.push(e)})),i.length&&s.length)return w(t,i,s)}}(t));const e=new o.A;return e.appendBuffer(t),1&e.readU(8)?U(e):{}}},85947:(t,e,i)=>{i.d(e,{A:()=>n});var s=i(134),r=i(10754);class n{constructor(){(0,s.A)(this,"type",r.P.UNKNOWN),(0,s.A)(this,"onStreamAdd",void 0)}destroy(t){}}},95808:(t,e,i)=>{i.r(e),i.d(e,{default:()=>m});var s=i(134),r=i(63939),n=i(50932),h=i(9705),a=i(85947),o=i(10754),l=i(14686),f=i(37837),u=i(71517),d=i(95335),c=i(92647),p=i(55611),g=i(77231),b=i(37246),U=i(23991),w=i(37805);const y={framerate:{num:30,den:1}};class m extends a.A{constructor(t={}){super(),(0,s.A)(this,"type",o.P.HEVC),(0,s.A)(this,"options",void 0),(0,s.A)(this,"currentDts",void 0),(0,s.A)(this,"currentPts",void 0),(0,s.A)(this,"step",void 0),(0,s.A)(this,"slices",void 0),(0,s.A)(this,"naluPos",void 0),(0,s.A)(this,"queue",void 0),(0,s.A)(this,"bitReader",void 0),(0,s.A)(this,"sliceType",void 0),(0,s.A)(this,"naluType",void 0),(0,s.A)(this,"poc",void 0),(0,s.A)(this,"pocTid0",void 0),(0,s.A)(this,"sps",void 0),(0,s.A)(this,"naluReader",void 0),this.options=d.X$({},y,t)}init(t){t.ioReader&&t.ioReader.setEndian(!1),this.slices=[],this.queue=[],this.bitReader=new b.A(500),this.naluReader=new w.A}isFrameNalu(t){return(t[1===t[2]?4:5]>>>3&31)<12}async readNaluFrame(t){let e=!1;const i=this.slices;for(this.slices=[],i.length&&(e=this.isFrameNalu(i[0]));;){const s=await this.naluReader.read(t.ioReader);if(!s)return i;const r=s[1===s[2]?4:5]>>>3&31;if(this.isFrameNalu(s))if(e){if(s[1===s[2]?5:6]>>>7)return this.slices.push(s),i;i.push(s)}else i.push(s),e=!0;else{if(e&&(20===r||19===r||15===r||14===r||16===r||12===r||13===r))return this.slices.push(s),i;i.push(s)}}}async readHeader(t){const e=t.createStream();for(e.codecpar.codecType=0,e.codecpar.codecId=196,e.timeBase.den=g.SF,e.timeBase.num=1,e.codecpar.bitFormat=2,this.currentDts=BigInt(0),this.currentPts=BigInt(0),this.naluPos=BigInt(0),this.poc=0,this.pocTid0=0,this.step=BigInt(Math.floor(g.SF/this.options.framerate.num*this.options.framerate.den));;){const i=await this.readNaluFrame(t);if(!i.length)return-1048576;const s=(0,c.A)(Uint8Array,i),h=(0,c.A)(Uint8Array,i.filter((t=>{const e=t[1===t[2]?4:5]>>>3&31;return 14===e||15===e||16===e})));if(h){e.codecpar.extradata=(0,f.sY)(h.length),(0,l.lW)(e.codecpar.extradata,h.length,h),e.codecpar.extradataSize=h.length;const a=i.find((t=>15==(t[1===t[2]?4:5]>>>3&31)));p.QA(e,a),this.sps=p.wf(a);const o=(0,u._5)(),d=(0,f.sY)(s.length);(0,l.lW)(d,s.length,s),(0,u.NX)(o,d,s.length),n.M[17](o+56,this.naluPos),this.naluPos+=BigInt(Math.floor(s.length)),n.M[17](o+16,this.currentDts),this.currentDts+=this.step,n.M[17](o+8,this.currentPts),this.currentPts+=this.step,n.M[15](o+32,e.index),n.M[15](o+36,1|r.f[15](o+36)),n.M[15](o+72,e.timeBase.num),n.M[15](o+76,e.timeBase.den),n.M[15](o+80,2),t.interval.packetBuffer.push(o);break}this.naluPos+=BigInt(Math.floor(s.length))}return 0}computePoc(t,e,i,s){this.bitReader.clear(),this.bitReader.appendBuffer(i.subarray(0,500)),s&&this.bitReader.readU1();const r=this.bitReader.readU1(),n=this.bitReader.readU1();let h=0;r&&(h=this.bitReader.readU1()),this.bitReader.readU1()&&this.bitReader.readU1(),U.xb(this.bitReader);const a=this.bitReader.readU(this.sps.sps_log2_max_pic_order_cnt_lsb_minus4+4);h&&U.xb(this.bitReader);for(let t=0;t<8*this.sps.sps_num_extra_ph_bytes;t++)this.sps.sps_extra_ph_bit_present_flag[t]&&this.bitReader.readU1();let o=0,l=0;this.sps.sps_poc_msb_cycle_flag&&(l=this.bitReader.readU1(),l&&(o=this.bitReader.readU(this.sps.sps_poc_msb_cycle_len_minus1+1)));const f=1<<this.sps.sps_log2_max_pic_order_cnt_lsb_minus4+4;let u=0;if(8===t||7===t)u=l?o*f:0;else{const t=this.pocTid0,e=t&f-1,i=t-e;u=l?o*f:a<e&&e-a>=f/2?i+f:a>e&&a-e>f/2?i-f:i}this.poc=u+a,0!=e||n||2===t||3===t||(this.pocTid0=this.poc)}async readAVPacket_(t,e){const i=t.getStreamByMediaType(0),s=await this.readNaluFrame(t);if(!s.length)return-1048576;this.sliceType=-1;let h=!1,a=!0;s.forEach((t=>{const e=1===t[2]?t[4]:t[5],i=e>>>3&31,s=(7&e)-1;15===i&&(this.sps=p.wf(t)),8!==i&&7!==i||(h=!0),19===i&&this.computePoc(i,s,t.subarray(1===t[2]?5:6),!1),i<14&&a&&(a=!1,this.naluType=i,t[1===t[2]?5:6]>>>7&&this.computePoc(i,s,t.subarray(1===t[2]?5:6),!0))}));const o=(0,c.A)(Uint8Array,s),d=(0,f.sY)(o.length);return(0,l.lW)(d,o.length,o),(0,u.NX)(e,d,o.length),n.M[17](e+56,this.naluPos),this.naluPos+=BigInt(Math.floor(o.length)),n.M[17](e+16,this.currentDts),this.currentDts+=this.step,n.M[15](e+32,i.index),n.M[15](e+72,i.timeBase.num),n.M[15](e+76,i.timeBase.den),n.M[15](e+80,2),h&&n.M[15](e+36,1|r.f[15](e+36)),0}async readAVPacket(t,e){let i=this.queue.length;const s=()=>{this.queue.length>1&&this.queue.sort(((t,e)=>t.poc-e.poc>0?1:-1));for(let t=0;t<this.queue.length;t++)n.M[17](this.queue[t].avpacket+8,this.currentPts),this.currentPts+=this.step;this.queue.length>1&&this.queue.sort(((t,e)=>r.f[17](t.avpacket+16)-r.f[17](e.avpacket+16)>BigInt(0)?1:-1)),this.queue.length&&((0,u.rN)(e,this.queue[0].avpacket),(0,u.Qe)(this.queue[0].avpacket));for(let e=1;e<this.queue.length;e++)t.interval.packetBuffer.push(this.queue[e].avpacket);this.queue.length=0};for(;;){const e=(0,u._5)();let n=await this.readAVPacket_(t,e);if(n<0)return(0,u.Qe)(e),this.queue.length?(s(),0):n;if(1&r.f[15](e+36)||9===this.naluType||1===this.sliceType||2===this.sliceType){if(1===i||(9===this.naluType||1&r.f[15](e+36))&&this.queue.length)return s(),this.queue.push({avpacket:e,poc:this.poc}),0;this.queue.push({avpacket:e,poc:this.poc}),i++}else this.queue.push({avpacket:e,poc:this.poc})}}async seek(t,e,i,s){return BigInt(h.E$)}getAnalyzeStreamsCount(){return 1}}},37805:(t,e,i)=>{i.d(e,{A:()=>h});var s=i(134),r=i(60264),n=i(92647);class h{constructor(){(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"pos",void 0),(0,s.A)(this,"end",void 0),(0,s.A)(this,"ended",void 0),this.buffer=new Uint8Array(102400),this.pos=0,this.end=0,this.ended=!1}async read(t){if(this.ended&&this.pos>=this.end)return;const e=[];if(this.pos<this.end-4){let t=r.Ky(this.buffer.subarray(this.pos,this.end-4),3);if(t.offset>-1){const e=this.buffer.slice(this.pos,this.pos+t.offset);return this.pos+=t.offset,e}e.push(this.buffer.slice(this.pos,this.end-4)),this.buffer.copyWithin(0,this.end-4,this.end),this.pos=0,this.end=4}for(;;){if(!this.ended&&this.end<this.buffer.length)try{const e=await t.readToBuffer(this.buffer.length-this.end,this.buffer.subarray(this.end));this.end+=e}catch(t){if(this.ended=!0,this.pos>=this.end)return e.length?(0,n.A)(Uint8Array,e):null}let i=r.Ky(this.buffer.subarray(this.pos,this.end-4),e.length?0:3);if(i.offset>-1)return e.push(this.buffer.slice(this.pos,this.pos+i.offset)),this.pos+=i.offset,(0,n.A)(Uint8Array,e);if(this.ended)return e.push(this.buffer.slice(this.pos,this.end)),this.pos=this.end=0,(0,n.A)(Uint8Array,e);e.push(this.buffer.slice(this.pos,this.end-4)),this.buffer.copyWithin(0,this.end-4,this.end),this.pos=0,this.end=4}}reset(){this.pos=0,this.end=0,this.ended=!1}}},23991:(t,e,i)=>{function s(t){let e=0,i=0;for(;i<32&&0===t.readU1();)i++;return e=t.readU(i),e+=(1<<i)-1,e}function r(t){let e=s(t);return e=1&e?(e+1)/2:-e/2,e}i.d(e,{$x:()=>r,xb:()=>s})},39381:(t,e,i)=>{i.d(e,{E3:()=>n,Sg:()=>l,Y0:()=>o,ht:()=>a,r8:()=>r,yd:()=>h});var s=i(63939);function r(t){return s.f[2](t)}function n(t){return r(t+1)<<8|r(t)}function h(t){return r(t)<<8|r(t+1)}function a(t){return r(t)<<16|r(t+1)<<8|r(t+2)}function o(t){return n(t+2)<<16|n(t)}function l(t){return h(t)<<16|h(t+2)}},60264:(t,e,i)=>{function s(t){return t.length>4&&0===t[0]&&0===t[1]&&(1===t[2]||0===t[2]&&1===t[3])}function r(t,e){let i=0;for(let s=e;s<t.length;s++)switch(t[s]){case 0:i++;break;case 1:if(i>=2)return{offset:s-Math.min(i,3),startCode:Math.min(i+1,4)};i=0;break;default:i=0}return{offset:-1,startCode:0}}function n(t){const e=[];let i=r(t,0),s={offset:-1,startCode:0};for(;s=r(t,i.offset+i.startCode),s.offset>-1;)e.push(t.subarray(i.offset+i.startCode,s.offset,!0)),i=s;return e.push(t.subarray(i.offset+i.startCode,void 0,!0)),e}function h(t,e=0,i){i||(i=t.length);const s=new Uint8Array(t.length);let r=0,n=0;for(let h=0;h<t.length;h++){if(h>=e&&h<i)if(0===t[h])r++;else if(3===t[h]&&2===r&&h+1<t.length&&t[h+1]<=3){if(h++,h===t.length)break;r=0===t[h]?1:0}else r=0;s[n++]=t[h]}return s.slice(0,n)}i.d(e,{BN:()=>h,Bs:()=>s,Ky:()=>r,py:()=>n})},37246:(t,e,i)=>{i.d(e,{A:()=>n});var s=i(134),r=i(4624);class n{constructor(t=1048576){(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"pointer",void 0),(0,s.A)(this,"bitsLeft",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"endPointer",void 0),(0,s.A)(this,"error",void 0),(0,s.A)(this,"onFlush",void 0),this.pointer=0,this.bitsLeft=8,this.size=t,this.endPointer=0,this.error=0,this.buffer=new Uint8Array(this.size)}peekU1(){let t=0;(this.remainingLength()<1||1===this.remainingLength()&&0===this.bitsLeft)&&this.flush();let e=this.pointer,i=this.bitsLeft;return 0===i&&(e++,i=8),t=this.buffer[e]>>i-1&1,t}readU1(){let t=0;return(this.remainingLength()<1||1===this.remainingLength()&&0===this.bitsLeft)&&this.flush(),this.bitsLeft--,t=this.buffer[this.pointer]>>this.bitsLeft&1,0===this.bitsLeft&&(this.pointer++,this.bitsLeft=8),t}readU(t){let e=0;for(let i=0;i<t;i++)e|=this.readU1()<<t-i-1;return e}remainingLength(){return this.endPointer-this.pointer}getBitLeft(){return this.bitsLeft}getPos(){return this.pointer}backToPos(t){this.pointer=t}skip(t){const e=(t-t%8)/8;this.pointer+=e;const i=t%8;this.bitsLeft<=i?(this.pointer++,this.bitsLeft=8-(i-this.bitsLeft)):this.bitsLeft-=i}flush(){if(!this.onFlush)throw this.error=-1048574,Error("IOReader error, flush failed because of no flush callback");if(0===this.bitsLeft&&this.pointer++,!(this.size-this.remainingLength()<=0))if(this.pointer<this.endPointer){this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0);const t=this.onFlush(this.buffer.subarray(this.endPointer-this.pointer,this.size));if(t<0)throw this.error=t,Error("IOReader error, flush failed");this.endPointer=this.endPointer-this.pointer+t,this.pointer=0}else{const t=this.onFlush(this.buffer);if(this.endPointer=t,this.pointer=0,this.bitsLeft=8,t<0)throw this.error=t,Error("IOReader error, flush failed")}}getBuffer(){return this.buffer}appendBuffer(t){if(this.size-this.endPointer>=t.length)this.buffer.set(t,this.endPointer),this.endPointer+=t.length;else if(this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0),this.endPointer=this.endPointer-this.pointer,this.pointer=0,this.size-this.endPointer>=t.length)this.buffer.set(t,this.endPointer),this.endPointer+=t.length;else{const e=Math.min(this.size-this.endPointer,t.length);this.buffer.set(t.subarray(0,e),this.endPointer),this.endPointer+=e,r.R8("BSReader, call appendBuffer but the buffer's size is lagger then the remaining size","src/common/io/BitReader.ts",198)}}clear(){this.pointer=this.endPointer=0,this.bitsLeft=8,this.error=0}skipPadding(){this.bitsLeft<8&&(this.bitsLeft=8,this.pointer++)}}},83314:(t,e,i)=>{i.d(e,{A:()=>r});var s=i(134);class r{constructor(t=1048576){(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"pointer",void 0),(0,s.A)(this,"bitPointer",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"error",void 0),(0,s.A)(this,"onFlush",void 0),this.pointer=0,this.bitPointer=0,this.size=t,this.error=0,this.buffer=new Uint8Array(this.size)}writeU1(t){(this.remainingLength()<1||1===this.remainingLength()&&this.bitPointer>=8)&&this.flush(),1&t?this.buffer[this.pointer]|=1<<7-this.bitPointer:this.buffer[this.pointer]&=~(1<<7-this.bitPointer),this.bitPointer++,8===this.bitPointer&&(this.pointer++,this.bitPointer=0)}writeU(t,e){for(let i=0;i<t;i++)this.writeU1(e>>t-i-1&1)}remainingLength(){return this.size-this.pointer}flush(){if(!this.onFlush)throw this.error=-1048574,Error("BSWriter error, flush failed because of no flush callback");if(this.pointer)if(this.bitPointer&&this.pointer>1){const t=this.onFlush(this.buffer.subarray(0,this.pointer-1));if(0!==t)throw this.error=t,Error("BSWriter error, flush failed");this.buffer[0]=this.buffer[this.pointer]}else if(0===this.bitPointer){const t=this.onFlush(this.buffer.subarray(0,this.pointer));if(0!==t)throw this.error=t,Error("BSWriter error, flush failed")}this.pointer=0}padding(){for(;0!==this.bitPointer;)this.writeU1(0)}clear(){this.pointer=0,this.bitPointer=0,this.error=0}getBuffer(){return this.buffer}getPointer(){return this.pointer}}},729:(t,e,i)=>{i.d(e,{A:()=>h});var s=i(134),r=i(4624),n=i(50011);class h{constructor(t,e=!0){(0,s.A)(this,"data",void 0),(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"byteStart",void 0),(0,s.A)(this,"pos",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"littleEndian",void 0),this.buffer=t,this.data=t instanceof Uint8Array?new DataView(t.buffer):t.view,this.byteStart=t instanceof Uint8Array?t.byteOffset:0,this.pos=0,this.size=t.byteLength,this.littleEndian=!e}writeUint8(t){this.data.setUint8(this.pos+++this.byteStart,t)}writeUint16(t){this.data.setUint16(this.pos+this.byteStart,t,this.littleEndian),this.pos+=2}writeUint24(t){const e=3840&t,i=240&t,s=15&t;this.littleEndian?(this.writeUint8(s),this.writeUint8(i),this.writeUint8(e)):(this.writeUint8(e),this.writeUint8(i),this.writeUint8(s))}writeUint32(t){this.data.setUint32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}writeUint64(t){const e=t&BigInt(4294967295),i=(t&BigInt(4294967295)<<BigInt(32))>>BigInt(32);this.littleEndian?(this.writeUint32(Number(e)),this.writeUint32(Number(i))):(this.writeUint32(Number(i)),this.writeUint32(Number(e)))}writeInt8(t){this.data.setInt8(this.pos+++this.byteStart,t)}writeInt16(t){this.data.setInt16(this.pos+this.byteStart,t,this.littleEndian),this.pos+=2}writeInt32(t){this.data.setInt32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}writeInt64(t){const e=t&BigInt(4294967295),i=(t&BigInt(4294967295)<<BigInt(32))>>BigInt(32);this.littleEndian?(this.writeInt32(Number(e)),this.writeInt32(Number(i))):(this.writeInt32(Number(i)),this.writeInt32(Number(e)))}writeFloat(t){this.data.setFloat32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}writeDouble(t){this.data.setFloat64(this.pos+this.byteStart,t,this.littleEndian),this.pos+=8}getPos(){return this.pos}seek(t){t>this.size&&(t=this.size),this.pos=Math.max(0,t)}skip(t){this.seek(this.pos+t)}back(t){this.seek(this.pos-t)}remainingSize(){return this.size-this.pos}writeBuffer(t){let e=t.length;this.remainingSize()<e&&(e=this.remainingSize(),r.R8(`the remaining buffer size is smaller then the wrote buffer, hope set ${t.length}, but set ${e}`,"src/common/io/BufferWriter.ts",211)),this.buffer.set(t,this.pos),this.pos+=t.length}writeString(t){const e=n.encode(t);return this.writeBuffer(e),e.length}getWroteBuffer(){return this.buffer.subarray(0,this.pos)}resetBuffer(t,e=!0){this.buffer=t,this.data=t instanceof Uint8Array?new DataView(t.buffer):t.view,this.byteStart=t instanceof Uint8Array?t.byteOffset:0,this.pos=0,this.size=t.byteLength,this.littleEndian=!e}}}}]);