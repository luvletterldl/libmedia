"use strict";(self.webpackChunkAVTranscoder=self.webpackChunkAVTranscoder||[]).push([[487],{53e3:(t,e,i)=>{i.d(e,{HL:()=>w,Jk:()=>A,KD:()=>B,OD:()=>P,S1:()=>x,XC:()=>S,ZU:()=>z,ci:()=>v,dT:()=>m,k9:()=>b,oT:()=>y,wf:()=>L});var s=i(63939),n=i(50932),r=i(72739),h=i(729),a=i(31865),o=i(37246),u=i(14686),l=i(60264),f=i(71517),d=i(37837),c=i(23991),p=i(39381);const m={1:"Main",2:"Main10",3:"MainStillPicture",4:"Main444"},g=[{level:10,maxLumaSamplesPerSecond:552960,maxLumaPictureSize:36864,maxBitRate:{main:128,main10:150}},{level:20,maxLumaSamplesPerSecond:3686400,maxLumaPictureSize:122880,maxBitRate:{main:1500,main10:1875}},{level:21,maxLumaSamplesPerSecond:7372800,maxLumaPictureSize:245760,maxBitRate:{main:3e3,main10:3750}},{level:30,maxLumaSamplesPerSecond:16588800,maxLumaPictureSize:552960,maxBitRate:{main:6e3,main10:7500}},{level:31,maxLumaSamplesPerSecond:33177600,maxLumaPictureSize:983040,maxBitRate:{main:1e4,main10:12500}},{level:40,maxLumaSamplesPerSecond:66846720,maxLumaPictureSize:2228224,maxBitRate:{main:12e3,main10:15e3}},{level:41,maxLumaSamplesPerSecond:133693440,maxLumaPictureSize:2228224,maxBitRate:{main:2e4,main10:25e3}},{level:50,maxLumaSamplesPerSecond:267386880,maxLumaPictureSize:8912896,maxBitRate:{main:25e3,main10:4e4}},{level:51,maxLumaSamplesPerSecond:534773760,maxLumaPictureSize:8912896,maxBitRate:{main:4e4,main10:6e4}},{level:52,maxLumaSamplesPerSecond:1069547520,maxLumaPictureSize:35651584,maxBitRate:{main:6e4,main10:1e5}},{level:60,maxLumaSamplesPerSecond:1069547520,maxLumaPictureSize:35651584,maxBitRate:{main:6e4,main10:1e5}},{level:61,maxLumaSamplesPerSecond:2139095040,maxLumaPictureSize:89128960,maxBitRate:{main:12e4,main10:24e4}},{level:62,maxLumaSamplesPerSecond:4278190080,maxLumaPictureSize:356515840,maxBitRate:{main:24e4,main10:48e4}}];function b(t,e,i,s,n){n/=1e3;const r=1===t?"main":"main10",h=e*i*s;for(const t of g)if(h<=t.maxLumaSamplesPerSecond&&e*i<=t.maxLumaPictureSize&&n<=t.maxBitRate[r])return t.level}const U=3;function w(t){const e=new a.A(t,!0);e.skip(22);let i=[],s=[],n=[];const r=e.readUint8();for(let t=0;t<r;t++){const t=63&e.readUint8(),r=e.readUint16(),h=[];for(let t=0;t<r;t++){const t=e.readUint16();h.push(e.readBuffer(t))}32===t?i=h:33===t?s=h:34===t&&(n=h)}return{vpss:i,spss:s,ppss:n}}function _(t,e,i){const s=e[0];let n=23;t.length&&(n+=3,n=t.reduce(((t,e)=>t+2+e.length),n)),e.length&&(n+=3,n=e.reduce(((t,e)=>t+2+e.length),n)),i.length&&(n+=3,n=i.reduce(((t,e)=>t+2+e.length),n));const a=new Uint8Array(n),o=new h.A(a,!0),u=L(s);o.writeUint8(1),o.writeUint8(s[1]),o.writeUint8(s[2]),o.writeUint8(s[3]),o.writeUint8(s[4]),o.writeUint8(s[5]),o.writeUint8(s[6]),o.writeUint8(s[7]),o.writeUint8(s[8]),o.writeUint8(s[9]),o.writeUint8(s[10]),o.writeUint8(s[11]),o.writeUint8(u.level),o.writeUint8(1020),o.writeUint8(0),o.writeUint8(16320),o.writeUint8(16320|u.chroma_format_idc),o.writeUint8(8160|u.bit_depth_luma_minus8),o.writeUint8(8160|u.bit_depth_chroma_minus8),o.writeUint16(0),o.writeUint8(8|(1&s[0])<<2|U);let l=0;return t.length&&l++,e.length&&l++,i.length&&l++,o.writeUint8(l),t.length&&(o.writeUint8(160),o.writeUint16(t.length),r.__(t,(t=>{o.writeUint16(t.length),o.writeBuffer(t)}))),e.length&&(o.writeUint8(161),o.writeUint16(e.length),r.__(e,(t=>{o.writeUint16(t.length),o.writeBuffer(t)}))),i.length&&(o.writeUint8(162),o.writeUint16(i.length),r.__(i,(t=>{o.writeUint16(t.length),o.writeBuffer(t)}))),a}function x(t){let e=(0,l.py)(t);if(e.length>=2){const t=[],i=[],s=[];if(e.forEach((e=>{const n=e[0]>>>1&63;32===n?t.push(e):33===n?i.push(e):34===n&&s.push(e)})),i.length&&s.length)return _(t,i,s)}}function y(t){let e,i=!1,s=(0,l.py)(t);if(s.length>=2){const t=[],i=[],n=[];s.forEach((e=>{const s=e[0]>>>1&63;32===s?t.push(e):33===s?i.push(e):34===s&&n.push(e)})),i.length&&n.length&&(e=_(t,i,n),s=s.filter((t=>{const e=t[0]>>>1&63;return 32!==e&&33!==e&&34!==e&&35!==e})))}const n=s.reduce(((t,e)=>t+U+1+e.length),0),a=(0,d.sY)(n),o=(0,u.s3)(a,n),f=new h.A(o);return r.__(s,(t=>{3===U?f.writeUint32(t.length):2===U?f.writeUint24(t.length):1===U?f.writeUint16(t.length):f.writeUint8(t.length),f.writeBuffer(t.subarray(0));const e=t[0]>>>1&63;19!==e&&20!==e&&21!==e||(i=!0)})),{bufferPointer:a,length:n,extradata:e,key:i}}function P(t,e){const i=e?3&e[21]:U;let s=[],n=[],o=[],l=!1;if(e){const t=w(e);s=t.vpss,n=t.spss,o=t.ppss,l=!0}const f=[],c=new a.A(t);for(;c.remainingSize()>0;){let t=0;t=3===i?c.readUint32():2===i?c.readUint24():1===i?c.readUint16():c.readUint8(),f.push(c.readBuffer(t))}let p=s.reduce(((t,e)=>t+4+e.length),0);p=n.reduce(((t,e)=>t+4+e.length),p),p=o.reduce(((t,e)=>t+4+e.length),p),p=f.reduce(((t,e,i)=>t+(i?3:4)+e.length),p);const m=(0,d.sY)(p+7),g=(0,u.s3)(m,p+7),b=new h.A(g);return b.writeUint8(0),b.writeUint8(0),b.writeUint8(0),b.writeUint8(1),b.writeUint8(70),b.writeUint8(0),b.writeUint8(240),r.__(s,(t=>{b.writeUint8(0),b.writeUint8(0),b.writeUint8(0),b.writeUint8(1),b.writeBuffer(t)})),r.__(n,(t=>{b.writeUint8(0),b.writeUint8(0),b.writeUint8(0),b.writeUint8(1),b.writeBuffer(t)})),r.__(o,(t=>{b.writeUint8(0),b.writeUint8(0),b.writeUint8(0),b.writeUint8(1),b.writeBuffer(t)})),r.__(f,((t,e)=>{b.writeUint8(0),b.writeUint8(0),e||b.writeUint8(0),b.writeUint8(1),b.writeBuffer(t);const i=t[0]>>>1&63;19!==i&&20!==i&&21!==i||(l=!0)})),{bufferPointer:m,length:p+7,key:l}}function A(t,e){var i;if(!(1&s.f[15](t+36)))return;const n=(0,f.iI)(t);if((0,l.Bs)(n))return;const r=null!==(i=e.metadata.naluLengthSizeMinusOne)&&void 0!==i?i:U;let h=[],o=[],c=[];const p=new a.A(n);for(;p.remainingSize()>0;){let t=0;t=3===r?p.readUint32():2===r?p.readUint24():1===r?p.readUint16():p.readUint8();const e=n.subarray(Number(BigInt.asIntN(32,p.getPos())),Number(BigInt.asIntN(32,p.getPos()))+t);p.skip(t);const i=e[0]>>>1&63;33===i?o.push(e):34===i?c.push(e):32===i&&h.push(e)}if(o.length||c.length||h.length){const e=_(h,o,c),i=(0,d.sY)(e.length);(0,u.lW)(i,e.length,e),(0,f.Ow)(t,1,i,e.length)}}function v(t,e=!1){if(!(1&s.f[15](t+36)||e))return;const i=(0,f.iI)(t);if(!(0,l.Bs)(i))return;let r=(0,l.py)(i);if(r.length>2){const e=[],i=[],h=[];if(r.forEach((t=>{const s=t[0]>>>1&63;32===s?e.push(t):33===s?i.push(t):34===s&&h.push(t)})),e.length&&i.length&&h.length){const r=_(e,i,h),a=(0,d.sY)(r.length);(0,u.lW)(a,r.length,r),(0,f.Ow)(t,1,a,r.length),n.M[15](t+36,1|s.f[15](t+36))}}}function S(t,e){if(!e&&t.sideData[1]&&(e=t.sideData[1]),e&&e.length>=6){t.metadata.naluLengthSizeMinusOne=3&e[21];const{spss:i}=w(e);if(i.length){const{profile:e,level:s,width:n,height:r}=L(i[0]);t.codecpar.profile=e,t.codecpar.level=s,t.codecpar.width=n,t.codecpar.height=r}}}function B(t,e=4){if(2===s.f[15](t+80))return(0,l.py)((0,u.s3)(s.f[20](t+24),s.f[15](t+28))).some((t=>{const e=t[0]>>>1&63;return 20===e||19===e}));{const i=s.f[15](t+28);let n=0;for(;n<i-e;){const i=p.r8(s.f[20](t+24)+(n+e))>>>1&63;if(20===i||19===i)return!0;n+=4===e?p.Sg(s.f[20](t+24)+n):3===e?p.ht(s.f[20](t+24)+n):2===e?p.yd(s.f[20](t+24)+n):p.r8(s.f[20](t+24)+n),n+=e}return!1}}function L(t){if(!t||t.length<3)return;let e=0;0===t[0]&&0===t[1]&&0===t[2]&&1===t[3]&&(e=4);let i=0,s=0,n=0,r=0,h=0,a=0,u=1,f=0,d=0,p=0,m=0;const g=(0,l.BN)(t.subarray(e)),b=new o.A(g.length);b.appendBuffer(g),b.readU1(),b.readU(6),b.readU(6),b.readU(3),b.readU(4);const U=b.readU(3);b.readU1();let w=0;if(U<=6){f=b.readU(2),d=b.readU1(),i=b.readU(5),p=b.readU(32),m=b.readU(48),s=b.readU(8);const t=new Array(6),e=new Array(6);for(let i=0;i<U;i++)t[i]=b.readU1(),e[i]=b.readU1();if(U>0)for(let t=U;t<8;t++)b.readU(2);for(let i=0;i<U;i++)t[i]&&(b.readU(2),b.readU(1),b.readU(5),b.readU(32),b.readU(1),b.readU(1),b.readU(1),b.readU(1),b.readU(44)),e[i]&&b.readU(8);c.xb(b),u=c.xb(b),3===u&&(w=b.readU(1)),n=c.xb(b),r=c.xb(b);let o=0,l=0,g=0,_=0;b.readU1()&&(o=c.xb(b),l=c.xb(b),g=c.xb(b),_=c.xb(b)),h=c.xb(b),a=c.xb(b);let x=2,y=2;0===u?x=y=0:2===u?(x=2,y=1):3===u&&(x=y=1),n-=x*(1<<h+1)*(o+l),r-=y*(1<<h+1)*(g+_)}const _=c.xb(b)+4;for(let t=b.readU1()?0:U;t<U+1;t++)c.xb(b),c.xb(b),c.xb(b);const x=c.xb(b)+3,y=c.xb(b),P=c.xb(b)+2,A=c.xb(b),v=x+y,S=x-1,B=n+(1<<v)-1>>v,L=r+(1<<v)-1>>v;return{profile:i,level:s,width:n,height:r,chroma_format_idc:u,bit_depth_luma_minus8:h,bit_depth_chroma_minus8:a,general_profile_space:f,general_tier_flag:d,general_profile_compatibility_flags:p,constraint_flags:m,separate_colour_plane_flag:w,log2_min_cb_size:x,log2_diff_max_min_coding_block_size:y,log2_min_tb_size:P,log2_diff_max_min_transform_block_size:A,log2_max_trafo_size:A+P,log2_ctb_size:v,log2_min_pu_size:S,ctb_width:B,ctb_height:L,ctb_size:B*L,min_cb_width:n>>x,min_cb_height:r>>x,min_tb_width:n>>P,min_tb_height:r>>P,min_pu_width:n>>S,min_pu_height:r>>S,log2_max_poc_lsb:_}}function z(t){if(!t||t.length<3)return;let e=0;0===t[0]&&0===t[1]&&0===t[2]&&1===t[3]&&(e=4);const i=(0,l.BN)(t.subarray(e)),s=new o.A(i.length);return s.appendBuffer(i),{pps_pic_parameter_set_id:c.xb(s),pps_seq_parameter_set_id:c.xb(s),dependent_slice_segment_flag:s.readU1(),output_flag_present_flag:s.readU1(),num_extra_slice_header_bits:s.readU(3)}}},85947:(t,e,i)=>{i.d(e,{A:()=>r});var s=i(134),n=i(10754);class r{constructor(){(0,s.A)(this,"type",n.P.UNKNOWN),(0,s.A)(this,"onStreamAdd",void 0)}destroy(t){}}},85487:(t,e,i)=>{i.r(e),i.d(e,{default:()=>_});var s=i(134),n=i(63939),r=i(50932),h=i(9705),a=i(85947),o=i(10754),u=i(14686),l=i(37837),f=i(71517),d=i(95335),c=i(92647),p=i(53e3),m=i(77231),g=i(37246),b=i(23991),U=i(37805);const w={framerate:{num:30,den:1}};class _ extends a.A{constructor(t={}){super(),(0,s.A)(this,"type",o.P.HEVC),(0,s.A)(this,"options",void 0),(0,s.A)(this,"currentDts",void 0),(0,s.A)(this,"currentPts",void 0),(0,s.A)(this,"step",void 0),(0,s.A)(this,"slices",void 0),(0,s.A)(this,"naluPos",void 0),(0,s.A)(this,"queue",void 0),(0,s.A)(this,"bitReader",void 0),(0,s.A)(this,"sliceType",void 0),(0,s.A)(this,"poc",void 0),(0,s.A)(this,"pocTid0",void 0),(0,s.A)(this,"sps",void 0),(0,s.A)(this,"pps",void 0),(0,s.A)(this,"naluReader",void 0),this.options=d.X$({},w,t)}init(t){t.ioReader&&t.ioReader.setEndian(!1),this.slices=[],this.queue=[],this.bitReader=new g.A(50),this.naluReader=new U.A}isFrameNalu(t){return(t[1===t[2]?3:4]>>>1&63)<32}async readNaluFrame(t){let e=!1;const i=this.slices;for(this.slices=[],i.length&&(e=this.isFrameNalu(i[0]));;){const s=await this.naluReader.read(t.ioReader);if(!s)return i;const n=s[1===s[2]?3:4]>>>1&63;if(this.isFrameNalu(s))if(e){if(s[1===s[2]?5:6]>>>7)return this.slices.push(s),i;i.push(s)}else i.push(s),e=!0;else{if(e&&(35===n||33===n||34===n||32===n))return this.slices.push(s),i;i.push(s)}}}async readHeader(t){const e=t.createStream();for(e.codecpar.codecType=0,e.codecpar.codecId=173,e.timeBase.den=m.SF,e.timeBase.num=1,e.codecpar.bitFormat=2,this.currentDts=BigInt(0),this.currentPts=BigInt(0),this.naluPos=BigInt(0),this.poc=0,this.pocTid0=0,this.step=BigInt(Math.floor(m.SF/this.options.framerate.num*this.options.framerate.den));;){const i=await this.readNaluFrame(t);if(!i.length)return-1048576;const s=(0,c.A)(Uint8Array,i),h=p.S1(s);if(h){e.codecpar.extradata=(0,l.sY)(h.length),(0,u.lW)(e.codecpar.extradata,h.length,h),e.codecpar.extradataSize=h.length,p.XC(e,h);const{spss:i,ppss:a}=p.HL(h);this.sps=p.wf(i[0]),this.pps=p.ZU(a[0]);const o=(0,f._5)(),d=(0,l.sY)(s.length);(0,u.lW)(d,s.length,s),(0,f.NX)(o,d,s.length),r.M[17](o+56,this.naluPos),this.naluPos+=BigInt(Math.floor(s.length)),r.M[17](o+16,this.currentDts),this.currentDts+=this.step,r.M[17](o+8,this.currentPts),this.currentPts+=this.step,r.M[15](o+32,e.index),r.M[15](o+36,1|n.f[15](o+36)),r.M[15](o+72,e.timeBase.num),r.M[15](o+76,e.timeBase.den),r.M[15](o+80,2),t.interval.packetBuffer.push(o);break}this.naluPos+=BigInt(Math.floor(s.length))}return 0}async readAVPacket_(t,e){const i=t.getStreamByMediaType(0),s=await this.readNaluFrame(t);if(!s.length)return-1048576;this.sliceType=-1;let h=!1,a=!0;s.forEach((t=>{const e=(1===t[2]?t[3]:t[4])>>>1&63,i=7&(1===t[2]?t[4]:t[5]);if(33===e&&(this.sps=p.wf(t)),34===e&&(this.pps=p.ZU(t)),19!==e&&20!==e||(h=!0),e<32&&a){a=!1,this.bitReader.clear(),this.bitReader.appendBuffer(t.subarray(1===t[2]?5:6,50));const s=this.bitReader.readU1();if(e>=16&&e<=23&&(h=!0,this.bitReader.readU1()),b.xb(this.bitReader),!s){this.pps.dependent_slice_segment_flag&&this.bitReader.readU1();const t=Math.ceil(Math.log2(this.sps.ctb_width*this.sps.ctb_height));this.bitReader.readU(t)}for(let t=0;t<this.pps.num_extra_slice_header_bits;t++)this.bitReader.readU1();if(this.sliceType=b.xb(this.bitReader),this.pps.output_flag_present_flag&&this.bitReader.readU1(),this.sps.separate_colour_plane_flag&&this.bitReader.readU(2),19===e||20===e)this.poc=0;else{const t=this.bitReader.readU(this.sps.log2_max_poc_lsb);let i=1<<this.sps.log2_max_poc_lsb,s=this.pocTid0%i,n=this.pocTid0-s,r=0;r=t<s&&s-t>=i/2?n+i:t>s&&t-s>i/2?n-i:n,16!=e&&17!=e&&18!=e||(r=0),this.poc=r+t}0==i&&0!=e&&2!=e&&4!=e&&6!=e&&8!=e&&7!=e&&9!=e&&(this.pocTid0=this.poc)}}));const o=(0,c.A)(Uint8Array,s),d=(0,l.sY)(o.length);return(0,u.lW)(d,o.length,o),(0,f.NX)(e,d,o.length),r.M[17](e+56,this.naluPos),this.naluPos+=BigInt(Math.floor(o.length)),r.M[17](e+16,this.currentDts),this.currentDts+=this.step,r.M[15](e+32,i.index),r.M[15](e+72,i.timeBase.num),r.M[15](e+76,i.timeBase.den),r.M[15](e+80,2),h&&r.M[15](e+36,1|n.f[15](e+36)),0}async readAVPacket(t,e){let i=this.queue.length;const s=()=>{this.queue.length>1&&this.queue.sort(((t,e)=>t.poc-e.poc>0?1:-1));for(let t=0;t<this.queue.length;t++)r.M[17](this.queue[t].avpacket+8,this.currentPts),this.currentPts+=this.step;this.queue.length>1&&this.queue.sort(((t,e)=>n.f[17](t.avpacket+16)-n.f[17](e.avpacket+16)>BigInt(0)?1:-1)),this.queue.length&&((0,f.rN)(e,this.queue[0].avpacket),(0,f.Qe)(this.queue[0].avpacket));for(let e=1;e<this.queue.length;e++)t.interval.packetBuffer.push(this.queue[e].avpacket);this.queue.length=0};for(;;){const e=(0,f._5)();let r=await this.readAVPacket_(t,e);if(r<0)return(0,f.Qe)(e),this.queue.length?(s(),0):r;if(1&n.f[15](e+36)||1===this.sliceType||2===this.sliceType){if(1===i||1&n.f[15](e+36)&&this.queue.length)return s(),this.queue.push({avpacket:e,poc:this.poc}),0;this.queue.push({avpacket:e,poc:this.poc}),i++}else this.queue.push({avpacket:e,poc:this.poc})}}async seek(t,e,i,s){return BigInt(h.E$)}getAnalyzeStreamsCount(){return 1}}},37805:(t,e,i)=>{i.d(e,{A:()=>h});var s=i(134),n=i(60264),r=i(92647);class h{constructor(){(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"pos",void 0),(0,s.A)(this,"end",void 0),(0,s.A)(this,"ended",void 0),this.buffer=new Uint8Array(102400),this.pos=0,this.end=0,this.ended=!1}async read(t){if(this.ended&&this.pos>=this.end)return;const e=[];if(this.pos<this.end-4){let t=n.Ky(this.buffer.subarray(this.pos,this.end-4),3);if(t.offset>-1){const e=this.buffer.slice(this.pos,this.pos+t.offset);return this.pos+=t.offset,e}e.push(this.buffer.slice(this.pos,this.end-4)),this.buffer.copyWithin(0,this.end-4,this.end),this.pos=0,this.end=4}for(;;){if(!this.ended&&this.end<this.buffer.length)try{const e=await t.readToBuffer(this.buffer.length-this.end,this.buffer.subarray(this.end));this.end+=e}catch(t){if(this.ended=!0,this.pos>=this.end)return e.length?(0,r.A)(Uint8Array,e):null}let i=n.Ky(this.buffer.subarray(this.pos,this.end-4),e.length?0:3);if(i.offset>-1)return e.push(this.buffer.slice(this.pos,this.pos+i.offset)),this.pos+=i.offset,(0,r.A)(Uint8Array,e);if(this.ended)return e.push(this.buffer.slice(this.pos,this.end)),this.pos=this.end=0,(0,r.A)(Uint8Array,e);e.push(this.buffer.slice(this.pos,this.end-4)),this.buffer.copyWithin(0,this.end-4,this.end),this.pos=0,this.end=4}}reset(){this.pos=0,this.end=0,this.ended=!1}}},23991:(t,e,i)=>{function s(t){let e=0,i=0;for(;i<32&&0===t.readU1();)i++;return e=t.readU(i),e+=(1<<i)-1,e}function n(t){let e=s(t);return e=1&e?(e+1)/2:-e/2,e}i.d(e,{$x:()=>n,xb:()=>s})},39381:(t,e,i)=>{i.d(e,{E3:()=>r,Sg:()=>u,Y0:()=>o,ht:()=>a,r8:()=>n,yd:()=>h});var s=i(63939);function n(t){return s.f[2](t)}function r(t){return n(t+1)<<8|n(t)}function h(t){return n(t)<<8|n(t+1)}function a(t){return n(t)<<16|n(t+1)<<8|n(t+2)}function o(t){return r(t+2)<<16|r(t)}function u(t){return h(t)<<16|h(t+2)}},60264:(t,e,i)=>{function s(t){return t.length>4&&0===t[0]&&0===t[1]&&(1===t[2]||0===t[2]&&1===t[3])}function n(t,e){let i=0;for(let s=e;s<t.length;s++)switch(t[s]){case 0:i++;break;case 1:if(i>=2)return{offset:s-Math.min(i,3),startCode:Math.min(i+1,4)};i=0;break;default:i=0}return{offset:-1,startCode:0}}function r(t){const e=[];let i=n(t,0),s={offset:-1,startCode:0};for(;s=n(t,i.offset+i.startCode),s.offset>-1;)e.push(t.subarray(i.offset+i.startCode,s.offset,!0)),i=s;return e.push(t.subarray(i.offset+i.startCode,void 0,!0)),e}function h(t,e=0,i){i||(i=t.length);const s=new Uint8Array(t.length);let n=0,r=0;for(let h=0;h<t.length;h++){if(h>=e&&h<i)if(0===t[h])n++;else if(3===t[h]&&2===n&&h+1<t.length&&t[h+1]<=3){if(h++,h===t.length)break;n=0===t[h]?1:0}else n=0;s[r++]=t[h]}return s.slice(0,r)}i.d(e,{BN:()=>h,Bs:()=>s,Ky:()=>n,py:()=>r})},37246:(t,e,i)=>{i.d(e,{A:()=>r});var s=i(134),n=i(4624);class r{constructor(t=1048576){(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"pointer",void 0),(0,s.A)(this,"bitsLeft",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"endPointer",void 0),(0,s.A)(this,"error",void 0),(0,s.A)(this,"onFlush",void 0),this.pointer=0,this.bitsLeft=8,this.size=t,this.endPointer=0,this.error=0,this.buffer=new Uint8Array(this.size)}peekU1(){let t=0;(this.remainingLength()<1||1===this.remainingLength()&&0===this.bitsLeft)&&this.flush();let e=this.pointer,i=this.bitsLeft;return 0===i&&(e++,i=8),t=this.buffer[e]>>i-1&1,t}readU1(){let t=0;return(this.remainingLength()<1||1===this.remainingLength()&&0===this.bitsLeft)&&this.flush(),this.bitsLeft--,t=this.buffer[this.pointer]>>this.bitsLeft&1,0===this.bitsLeft&&(this.pointer++,this.bitsLeft=8),t}readU(t){let e=0;for(let i=0;i<t;i++)e|=this.readU1()<<t-i-1;return e}remainingLength(){return this.endPointer-this.pointer}getBitLeft(){return this.bitsLeft}getPos(){return this.pointer}backToPos(t){this.pointer=t}skip(t){const e=(t-t%8)/8;this.pointer+=e;const i=t%8;this.bitsLeft<=i?(this.pointer++,this.bitsLeft=8-(i-this.bitsLeft)):this.bitsLeft-=i}flush(){if(!this.onFlush)throw this.error=-1048574,Error("IOReader error, flush failed because of no flush callback");if(0===this.bitsLeft&&this.pointer++,!(this.size-this.remainingLength()<=0))if(this.pointer<this.endPointer){this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0);const t=this.onFlush(this.buffer.subarray(this.endPointer-this.pointer,this.size));if(t<0)throw this.error=t,Error("IOReader error, flush failed");this.endPointer=this.endPointer-this.pointer+t,this.pointer=0}else{const t=this.onFlush(this.buffer);if(this.endPointer=t,this.pointer=0,this.bitsLeft=8,t<0)throw this.error=t,Error("IOReader error, flush failed")}}getBuffer(){return this.buffer}appendBuffer(t){if(this.size-this.endPointer>=t.length)this.buffer.set(t,this.endPointer),this.endPointer+=t.length;else if(this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0),this.endPointer=this.endPointer-this.pointer,this.pointer=0,this.size-this.endPointer>=t.length)this.buffer.set(t,this.endPointer),this.endPointer+=t.length;else{const e=Math.min(this.size-this.endPointer,t.length);this.buffer.set(t.subarray(0,e),this.endPointer),this.endPointer+=e,n.R8("BSReader, call appendBuffer but the buffer's size is lagger then the remaining size","src/common/io/BitReader.ts",198)}}clear(){this.pointer=this.endPointer=0,this.bitsLeft=8,this.error=0}skipPadding(){this.bitsLeft<8&&(this.bitsLeft=8,this.pointer++)}}},729:(t,e,i)=>{i.d(e,{A:()=>h});var s=i(134),n=i(4624),r=i(50011);class h{constructor(t,e=!0){(0,s.A)(this,"data",void 0),(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"byteStart",void 0),(0,s.A)(this,"pos",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"littleEndian",void 0),this.buffer=t,this.data=t instanceof Uint8Array?new DataView(t.buffer):t.view,this.byteStart=t instanceof Uint8Array?t.byteOffset:0,this.pos=0,this.size=t.byteLength,this.littleEndian=!e}writeUint8(t){this.data.setUint8(this.pos+++this.byteStart,t)}writeUint16(t){this.data.setUint16(this.pos+this.byteStart,t,this.littleEndian),this.pos+=2}writeUint24(t){const e=3840&t,i=240&t,s=15&t;this.littleEndian?(this.writeUint8(s),this.writeUint8(i),this.writeUint8(e)):(this.writeUint8(e),this.writeUint8(i),this.writeUint8(s))}writeUint32(t){this.data.setUint32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}writeUint64(t){const e=t&BigInt(4294967295),i=(t&BigInt(4294967295)<<BigInt(32))>>BigInt(32);this.littleEndian?(this.writeUint32(Number(e)),this.writeUint32(Number(i))):(this.writeUint32(Number(i)),this.writeUint32(Number(e)))}writeInt8(t){this.data.setInt8(this.pos+++this.byteStart,t)}writeInt16(t){this.data.setInt16(this.pos+this.byteStart,t,this.littleEndian),this.pos+=2}writeInt32(t){this.data.setInt32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}writeInt64(t){const e=t&BigInt(4294967295),i=(t&BigInt(4294967295)<<BigInt(32))>>BigInt(32);this.littleEndian?(this.writeInt32(Number(e)),this.writeInt32(Number(i))):(this.writeInt32(Number(i)),this.writeInt32(Number(e)))}writeFloat(t){this.data.setFloat32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}writeDouble(t){this.data.setFloat64(this.pos+this.byteStart,t,this.littleEndian),this.pos+=8}getPos(){return this.pos}seek(t){t>this.size&&(t=this.size),this.pos=Math.max(0,t)}skip(t){this.seek(this.pos+t)}back(t){this.seek(this.pos-t)}remainingSize(){return this.size-this.pos}writeBuffer(t){let e=t.length;this.remainingSize()<e&&(e=this.remainingSize(),n.R8(`the remaining buffer size is smaller then the wrote buffer, hope set ${t.length}, but set ${e}`,"src/common/io/BufferWriter.ts",211)),this.buffer.set(t,this.pos),this.pos+=t.length}writeString(t){const e=r.encode(t);return this.writeBuffer(e),e.length}getWroteBuffer(){return this.buffer.subarray(0,this.pos)}resetBuffer(t,e=!0){this.buffer=t,this.data=t instanceof Uint8Array?new DataView(t.buffer):t.view,this.byteStart=t instanceof Uint8Array?t.byteOffset:0,this.pos=0,this.size=t.byteLength,this.littleEndian=!e}}}}]);