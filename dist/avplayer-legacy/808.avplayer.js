"use strict";(self.webpackChunkAVPlayer=self.webpackChunkAVPlayer||[]).push([[808],{55611:(t,e,r)=>{r.d(e,{Jk:()=>k,KD:()=>P,QA:()=>A,Ui:()=>_,XC:()=>m,ci:()=>w,oT:()=>U,wf:()=>x});var i=r(63939),n=r(50932),s=r(72739),a=r(729),h=r(31865),u=r(37246),o=r(14686),f=r(60264),l=r(71517),d=r(37837),c=r(23991),p=r(83314),v=r(39381),b=3;function g(t){var e=t.readU(9),r=t.readU(3),i=t.readU(2),n=t.readU(2),s=t.readU(3);t.readU(5),t.readU(2);var a=t.readU(6),h=t.readU(7),u=t.readU(1),o=t.readU(8),f=t.readU(1),l=t.readU(1),d=[],c=[];if(a){for(var p=0;p<a-1;p++)d[p]=t.readU(8);d[a-1]=t.readU(6)}else t.readU(6);if(r>1){for(var v=0,b=r-2;b>=0;--b)v|=t.readU(1)<<b;for(var g=r;g<=8&&r>1;++g)t.readU(1);for(var y=r-2;y>=0;--y)v&1<<y&&(c[y]=t.readU(8))}var U=t.readU(8),k=[];if(U)for(var w=0;w<U;w++)k.push(t.readU(8));return{olsIdx:e,numSublayers:r,bitDepthMinus8:s,chromaFormatIdc:n,constantFrameRate:i,generalProfileIdc:h,generalTierFlag:u,generalLevelIdc:o,ptlFrameOnlyConstraintFlag:f,ptlMultilayerEnabledFlag:l,generalConstraintInfo:d,sublayerLevelIdc:c,generalSubProfileIdc:k,maxPictureWidth:t.readU(16),maxPictureHeight:t.readU(16),avgFramerate:t.readU(16)}}function y(t,e,r){var i,n=e[0];if(n){var h=x(n),u=h.generalConstraintInfo;u.length||(u=new Array(12).fill(0));var o=new p.A;if(o.writeU(9,0),o.writeU(3,h.spsMaxSublayersMinus1+1),o.writeU(2,1),o.writeU(2,h.chromaFormatIdc),o.writeU(3,h.bitDepthMinus8),o.writeU(5,31),o.writeU(2,0),o.writeU(6,u.length),o.writeU(7,h.profile),o.writeU1(h.tierFlag),o.writeU(8,h.level),o.writeU1(h.ptlFrameOnlyConstraintFlag),o.writeU1(h.ptlMultilayerEnabledFlag),u.length){for(var f=0;f<u.length-1;f++)o.writeU(8,u[f]);o.writeU(6,u[u.length-1])}else o.writeU(6,63);if(h.spsMaxSublayersMinus1+1>1){for(var l=0,d=h.spsMaxSublayersMinus1-1;d>=0;d--)l=l<<1|h.ptlSublayerLevelPresentFlag[d];o.writeU(h.spsMaxSublayersMinus1,l);for(var c=h.spsMaxSublayersMinus1+1;c<=8&&h.spsMaxSublayersMinus1>0;++c)o.writeU1(0);for(var v=h.spsMaxSublayersMinus1-1;v>=0;v--)h.ptlSublayerLevelPresentFlag[v]&&o.writeU(8,h.sublayerLevelIdc[v])}o.writeU(8,h.generalSubProfileIdc.length);for(var g=0;g<h.generalSubProfileIdc.length;g++)o.writeU(8,h.sublayerLevelIdc[g]);o.writeU(16,h.width),o.writeU(16,h.height),o.writeU(16,0),o.padding(),i=o.getBuffer().subarray(0,o.getPointer())}var y=2+(i?i.length:0);t.length&&(y+=3,y=t.reduce((function(t,e){return t+2+e.length}),y)),e.length&&(y+=3,y=e.reduce((function(t,e){return t+2+e.length}),y)),r.length&&(y+=3,y=r.reduce((function(t,e){return t+2+e.length}),y));var U=new Uint8Array(y),k=new a.A(U,!0);k.writeUint8(b<<1|(i?1:0)|248),i&&k.writeBuffer(i);var w=0;return t.length&&w++,e.length&&w++,r.length&&w++,k.writeUint8(w),t.length&&(k.writeUint8(142),k.writeUint16(t.length),s.__(t,(function(t){k.writeUint16(t.length),k.writeBuffer(t)}))),e.length&&(k.writeUint8(143),k.writeUint16(e.length),s.__(e,(function(t){k.writeUint16(t.length),k.writeBuffer(t)}))),r.length&&(k.writeUint8(144),k.writeUint16(r.length),s.__(r,(function(t){k.writeUint16(t.length),k.writeBuffer(t)}))),U}function U(t){var e,r=!1,i=(0,f.py)(t);if(i.length>=2){var n=[],h=[],u=[];i.forEach((function(t){var e=t[1]>>>3&31;14===e?n.push(t):15===e?h.push(t):16===e&&u.push(t)})),h.length&&u.length&&(e=y(n,h,u),i=i.filter((function(t){var e=t[1]>>>3&31;return 14!==e&&15!==e&&16!==e&&20!==e})))}var l=i.reduce((function(t,e){return t+b+1+e.length}),0),c=(0,d.sY)(l),p=(0,o.s3)(c,l),v=new a.A(p);return s.__(i,(function(t){3===b?v.writeUint32(t.length):2===b?v.writeUint24(t.length):1===b?v.writeUint16(t.length):v.writeUint8(t.length),v.writeBuffer(t.subarray(0));var e=t[1]>>>3&31;8!==e&&7!==e&&9!==e&&10!==e||(r=!0)})),{bufferPointer:c,length:l,extradata:e,key:r}}function k(t,e){var r;if(1&i.f[15](t+36)){var n=(0,l.iI)(t);if(!(0,f.Bs)(n)){for(var s=null!==(r=e.metadata.naluLengthSizeMinusOne)&&void 0!==r?r:b,a=[],u=[],c=[],p=new h.A(n);p.remainingSize()>0;){var v;v=3===s?p.readUint32():2===s?p.readUint24():1===s?p.readUint16():p.readUint8();var g=n.subarray(Number(BigInt.asIntN(32,p.getPos())),Number(BigInt.asIntN(32,p.getPos()))+v);p.skip(v);var U=g[1]>>>3&31;15===U?u.push(g):16===U?c.push(g):14===U&&a.push(g)}if(u.length||c.length||a.length){var k=y(a,u,c),w=(0,d.sY)(k.length);(0,o.lW)(w,k.length,k),(0,l.Ow)(t,1,w,k.length)}}}}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(1&i.f[15](t+36)||e){var r=(0,l.iI)(t);if((0,f.Bs)(r)){var s=(0,f.py)(r);if(s.length>2){var a=[],h=[],u=[];if(s.forEach((function(t){var e=t[1]>>>3&31;14===e?a.push(t):15===e?h.push(t):16===e&&u.push(t)})),a.length&&h.length&&u.length){var c=y(a,h,u),p=(0,d.sY)(c.length);(0,o.lW)(p,c.length,c),(0,l.Ow)(t,1,p,c.length),n.M[15](t+36,1|i.f[15](t+36))}}}}}function A(t,e){var r=x(e),i=r.profile,n=r.level,s=r.width,a=r.height;t.codecpar.profile=i,t.codecpar.level=n,t.codecpar.width=s,t.codecpar.height=a}function m(t,e){if(!e&&t.sideData[1]&&(e=t.sideData[1]),e&&e.length>=6){t.metadata.naluLengthSizeMinusOne=e[0]>>>1&3;var r=function(t){var e=new h.A(t,!0);if(1&e.readUint8()){var r=new u.A;r.appendBuffer(t.subarray(1)),g(r),e.skip(r.getPointer())}for(var i=[],n=[],s=[],a=e.readUint8(),o=0;o<a;o++){var f=31&e.readUint8(),l=1;13!==f&&12!==f&&(l=e.readUint16());for(var d=[],c=0;c<l;c++){var p=e.readUint16();d.push(e.readBuffer(p))}14===f?i=d:15===f?n=d:16===f&&(s=d)}return{vpss:i,spss:n,ppss:s}}(e).spss;r.length&&A(t,r[0])}}function P(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(2===i.f[15](t+80))return(0,f.py)((0,o.s3)(i.f[20](t+24),i.f[15](t+28))).some((function(t){var e=t[1]>>>3&31;return 8===e||7===e}));for(var r=i.f[15](t+28),n=0;n<r-e;){var s=v.r8(i.f[20](t+24)+(n+e+1))>>>3&31;if(8===s||7===s)return!0;n+=4===e?v.Sg(i.f[20](t+24)+n):3===e?v.ht(i.f[20](t+24)+n):2===e?v.yd(i.f[20](t+24)+n):v.r8(i.f[20](t+24)+n),n+=e}return!1}function x(t){if(t&&!(t.length<3)){var e=0;0===t[0]&&0===t[1]&&0===t[2]&&1===t[3]&&(e=4);var r,i,n,s,a=0,h=0,o=0,l=0,d=0,p=[],v=[],b=[],g=[],y=(0,f.BN)(t.subarray(e)),U=new u.A(y.length);U.appendBuffer(y),U.readU1(),U.readU1(),U.readU(6),U.readU(5),U.readU(3),U.readU(8);var k=U.readU(3);s=U.readU(2);var w=U.readU(2);if(U.readU(1)){if(a=U.readU(7),o=U.readU(1),h=U.readU(8),l=U.readU(1),d=U.readU(1),U.readU(1)){for(var A=0;A<8;A++)p[A]=U.readU(8);p[8]=U.readU(7);var m=U.readU(8);U.readU(m)}U.skipPadding();for(var P=k-1;P>=0;P--)v[P]=U.readU(1);U.skipPadding();for(var x=k-1;x>=0;x--)v[x]&&(b[x]=U.readU(8));var _=U.readU(8);if(_)for(var B=0;B<_;B++)g[B]=U.readU(32)}U.readU1(),U.readU1()&&U.readU1();var I=r=c.xb(U),M=i=c.xb(U);if(U.readU1()&&(c.xb(U),c.xb(U),c.xb(U),c.xb(U)),U.readU1()){var S,L=c.xb(U),F=w+5,R=1<<F,z=I/(1<<F),E=M/(1<<F),q=Math.ceil(Math.log2(z)),N=Math.ceil(Math.log2(E)),T=0,C=0;L>0&&(C=U.readU1(),T=U.readU1());for(var D=0;L>0&&D<=L;D++)T&&0!=D||(D>0&&I>R&&U.readU(q),D>0&&M>R&&U.readU(N),D<L&&I>R&&U.readU(q),D<L&&M>R&&U.readU(N)),C||U.readU(2);if(S=c.xb(U)+1,U.readU(1)&&U.readU(1))for(var O=0;O<=L;O++)U.readU(S)}n=c.xb(U),U.readU(1),U.readU(1);var W=U.readU(4),V=U.readU(1),Y=0;V&&(Y=c.xb(U));for(var Q=[],K=U.readU(2),X=0;X<8*K;X++)Q[X]=U.readU(1);return{profile:a,level:h,width:r,height:i,chromaFormatIdc:s,bitDepthMinus8:n,generalProfileSpace:0,tierFlag:o,generalConstraintInfo:p,generalSubProfileIdc:g,ptlFrameOnlyConstraintFlag:l,ptlMultilayerEnabledFlag:d,spsMaxSublayersMinus1:k,ptlSublayerLevelPresentFlag:v,sublayerLevelIdc:b,sps_log2_max_pic_order_cnt_lsb_minus4:W,sps_poc_msb_cycle_flag:V,sps_poc_msb_cycle_len_minus1:Y,sps_num_extra_ph_bytes:K,sps_extra_ph_bit_present_flag:Q}}}function _(t){0===t[0]&&0===t[1]&&0===t[2]&&1===t[3]&&(t=function(t){var e=(0,f.py)(t);if(e.length>=2){var r=[],i=[],n=[];if(e.forEach((function(t){var e=t[1]>>>3&31;14===e?r.push(t):15===e?i.push(t):16===e&&n.push(t)})),i.length&&n.length)return y(r,i,n)}}(t));var e=new u.A;return e.appendBuffer(t),1&e.readU(8)?g(e):{}}},85947:(t,e,r)=>{r.d(e,{A:()=>a});var i=r(78716),n=r(81570),s=r(134),a=function(){function t(){(0,i.A)(this,t),(0,s.A)(this,"type",-1),(0,s.A)(this,"onStreamAdd",void 0)}return(0,n.A)(t,[{key:"destroy",value:function(t){}}]),t}()},95808:(t,e,r)=>{r.r(e),r.d(e,{default:()=>F});var i=r(88435),n=r.n(i),s=r(25182),a=r(78716),h=r(81570),u=r(77193),o=r(25767),f=r(43070),l=r(31060),d=r(134),c=r(36443),p=r.n(c),v=r(63939),b=r(50932),g=r(9705),y=r(85947),U=r(14686),k=r(37837),w=r(71517),A=r(95335),m=r(92647),P=r(55611),x=r(77231),_=r(37246),B=r(23991),I=r(37805);function M(t,e,r){return e=(0,o.A)(e),(0,u.A)(t,S()?n()(e,r||[],(0,o.A)(t).constructor):e.apply(t,r))}function S(){try{var t=!Boolean.prototype.valueOf.call(n()(Boolean,[],(function(){})))}catch(t){}return(S=function(){return!!t})()}var L={framerate:{num:30,den:1}},F=function(t){function e(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.A)(this,e),t=M(this,e),(0,d.A)((0,f.A)(t),"type",10),(0,d.A)((0,f.A)(t),"options",void 0),(0,d.A)((0,f.A)(t),"currentDts",void 0),(0,d.A)((0,f.A)(t),"currentPts",void 0),(0,d.A)((0,f.A)(t),"step",void 0),(0,d.A)((0,f.A)(t),"slices",void 0),(0,d.A)((0,f.A)(t),"naluPos",void 0),(0,d.A)((0,f.A)(t),"queue",void 0),(0,d.A)((0,f.A)(t),"bitReader",void 0),(0,d.A)((0,f.A)(t),"sliceType",void 0),(0,d.A)((0,f.A)(t),"naluType",void 0),(0,d.A)((0,f.A)(t),"poc",void 0),(0,d.A)((0,f.A)(t),"pocTid0",void 0),(0,d.A)((0,f.A)(t),"sps",void 0),(0,d.A)((0,f.A)(t),"naluReader",void 0),t.options=A.extend({},L,r),t}var r,i,n,u,o;return(0,l.A)(e,t),(0,h.A)(e,[{key:"init",value:function(t){t.ioReader&&t.ioReader.setEndian(!1),this.slices=[],this.queue=[],this.bitReader=new _.A(500),this.naluReader=new I.A}},{key:"destroy",value:function(t){if(this.queue.length){for(var e=0;e<this.queue.length;e++)(0,w.Qe)(this.queue[e].avpacket);this.queue.length=0}}},{key:"isFrameNalu",value:function(t){return(t[1===t[2]?4:5]>>>3&31)<12}},{key:"readNaluFrame",value:(o=(0,s.A)(p().mark((function t(e){var r,i,n,s;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=!1,i=this.slices,this.slices=[],i.length&&(r=this.isFrameNalu(i[0]));case 4:return t.next=7,this.naluReader.read(e.ioReader);case 7:if(n=t.sent){t.next=10;break}return t.abrupt("return",i);case 10:if(s=n[1===n[2]?4:5]>>>3&31,!this.isFrameNalu(n)){t.next=26;break}if(!r){t.next=22;break}if(!(n[1===n[2]?5:6]>>>7)){t.next=19;break}return this.slices.push(n),t.abrupt("return",i);case 19:i.push(n);case 20:t.next=24;break;case 22:i.push(n),r=!0;case 24:t.next=32;break;case 26:if(!r||20!==s&&19!==s&&15!==s&&14!==s&&16!==s&&12!==s&&13!==s){t.next=31;break}return this.slices.push(n),t.abrupt("return",i);case 31:i.push(n);case 32:t.next=4;break;case 34:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"readHeader",value:(u=(0,s.A)(p().mark((function t(e){var r,i,n,s,a,h,u;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=e.createStream()).codecpar.codecType=0,r.codecpar.codecId=196,r.timeBase.den=x.SF,r.timeBase.num=1,r.codecpar.bitFormat=2,this.currentDts=BigInt(0),this.currentPts=BigInt(0),this.naluPos=BigInt(0),this.poc=0,this.pocTid0=0,this.step=BigInt(Math.floor(x.SF/this.options.framerate.num*this.options.framerate.den));case 12:return t.next=15,this.readNaluFrame(e);case 15:if((i=t.sent).length){t.next=18;break}return t.abrupt("return",-1048576);case 18:if(n=(0,m.A)(Uint8Array,i),!(s=(0,m.A)(Uint8Array,i.filter((function(t){var e=t[1===t[2]?4:5]>>>3&31;return 14===e||15===e||16===e}))))){t.next=44;break}return r.codecpar.extradata=(0,k.sY)(s.length),(0,U.lW)(r.codecpar.extradata,s.length,s),r.codecpar.extradataSize=s.length,a=i.find((function(t){return 15==(t[1===t[2]?4:5]>>>3&31)})),P.QA(r,a),this.sps=P.wf(a),h=(0,w._5)(),u=(0,k.sY)(n.length),(0,U.lW)(u,n.length,n),(0,w.NX)(h,u,n.length),b.M[17](h+56,this.naluPos),this.naluPos+=BigInt(Math.floor(n.length)),b.M[17](h+16,this.currentDts),this.currentDts+=this.step,b.M[17](h+8,this.currentPts),this.currentPts+=this.step,b.M[15](h+32,r.index),b.M[15](h+36,1|v.f[15](h+36)),b.M[15](h+72,r.timeBase.num),b.M[15](h+76,r.timeBase.den),b.M[15](h+80,2),e.interval.packetBuffer.push(h),t.abrupt("break",47);case 44:this.naluPos+=BigInt(Math.floor(n.length)),t.next=12;break;case 47:return t.abrupt("return",0);case 48:case"end":return t.stop()}}),t,this)}))),function(t){return u.apply(this,arguments)})},{key:"computePoc",value:function(t,e,r,i){this.bitReader.reset(),this.bitReader.appendBuffer(r.subarray(0,500)),i&&this.bitReader.readU1();var n=this.bitReader.readU1(),s=this.bitReader.readU1(),a=0;n&&(a=this.bitReader.readU1()),this.bitReader.readU1()&&this.bitReader.readU1(),B.xb(this.bitReader);var h=this.bitReader.readU(this.sps.sps_log2_max_pic_order_cnt_lsb_minus4+4);a&&B.xb(this.bitReader);for(var u=0;u<8*this.sps.sps_num_extra_ph_bytes;u++)this.sps.sps_extra_ph_bit_present_flag[u]&&this.bitReader.readU1();var o=0,f=0;this.sps.sps_poc_msb_cycle_flag&&(f=this.bitReader.readU1())&&(o=this.bitReader.readU(this.sps.sps_poc_msb_cycle_len_minus1+1));var l=1<<this.sps.sps_log2_max_pic_order_cnt_lsb_minus4+4,d=0;if(8===t||7===t)d=f?o*l:0;else{var c=this.pocTid0,p=c&l-1,v=c-p;d=f?o*l:h<p&&p-h>=l/2?v+l:h>p&&h-p>l/2?v-l:v}this.poc=d+h,0!=e||s||2===t||3===t||(this.pocTid0=this.poc)}},{key:"readAVPacket_",value:(n=(0,s.A)(p().mark((function t(e,r){var i,n,s,a,h,u,o=this;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.getStreamByMediaType(0),t.next=3,this.readNaluFrame(e);case 3:if((n=t.sent).length){t.next=6;break}return t.abrupt("return",-1048576);case 6:return this.sliceType=-1,s=!1,a=!0,n.forEach((function(t){var e=1===t[2]?t[4]:t[5],r=e>>>3&31,i=(7&e)-1;15===r&&(o.sps=P.wf(t)),8!==r&&7!==r||(s=!0),19===r&&o.computePoc(r,i,t.subarray(1===t[2]?5:6),!1),r<14&&a&&(a=!1,o.naluType=r,t[1===t[2]?5:6]>>>7&&o.computePoc(r,i,t.subarray(1===t[2]?5:6),!0))})),h=(0,m.A)(Uint8Array,n),u=(0,k.sY)(h.length),(0,U.lW)(u,h.length,h),(0,w.NX)(r,u,h.length),b.M[17](r+56,this.naluPos),this.naluPos+=BigInt(Math.floor(h.length)),b.M[17](r+16,this.currentDts),this.currentDts+=this.step,b.M[15](r+32,i.index),b.M[15](r+72,i.timeBase.num),b.M[15](r+76,i.timeBase.den),b.M[15](r+80,2),s&&b.M[15](r+36,1|v.f[15](r+36)),t.abrupt("return",0);case 24:case"end":return t.stop()}}),t,this)}))),function(t,e){return n.apply(this,arguments)})},{key:"readAVPacket",value:(i=(0,s.A)(p().mark((function t(e,r){var i,n,s,a,h=this;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=this.queue.length,n=function(){h.queue.length>1&&h.queue.sort((function(t,e){return t.poc-e.poc>0?1:-1}));for(var t=0;t<h.queue.length;t++)b.M[17](h.queue[t].avpacket+8,h.currentPts),h.currentPts+=h.step;h.queue.length>1&&h.queue.sort((function(t,e){return v.f[17](t.avpacket+16)-v.f[17](e.avpacket+16)>BigInt(0)?1:-1})),h.queue.length&&((0,w.rN)(r,h.queue[0].avpacket),(0,w.Qe)(h.queue[0].avpacket));for(var i=1;i<h.queue.length;i++)e.interval.packetBuffer.push(h.queue[i].avpacket);h.queue.length=0};case 2:return s=(0,w._5)(),t.next=6,this.readAVPacket_(e,s);case 6:if(!((a=t.sent)<0)){t.next=15;break}if((0,w.Qe)(s),!this.queue.length){t.next=14;break}return n(),t.abrupt("return",0);case 14:return t.abrupt("return",a);case 15:if(!(1&v.f[15](s+36)||9===this.naluType||1===this.sliceType||2===this.sliceType)){t.next=26;break}if(!(1===i||(9===this.naluType||1&v.f[15](s+36))&&this.queue.length)){t.next=22;break}return n(),this.queue.push({avpacket:s,poc:this.poc}),t.abrupt("return",0);case 22:this.queue.push({avpacket:s,poc:this.poc}),i++;case 24:t.next=27;break;case 26:this.queue.push({avpacket:s,poc:this.poc});case 27:t.next=2;break;case 29:case"end":return t.stop()}}),t,this)}))),function(t,e){return i.apply(this,arguments)})},{key:"seek",value:(r=(0,s.A)(p().mark((function t(e,r,i,n){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",BigInt(g.E$));case 1:case"end":return t.stop()}}),t)}))),function(t,e,i,n){return r.apply(this,arguments)})},{key:"getAnalyzeStreamsCount",value:function(){return 1}}]),e}(y.A)},37805:(t,e,r)=>{r.d(e,{A:()=>l});var i=r(25182),n=r(78716),s=r(81570),a=r(134),h=r(36443),u=r.n(h),o=r(60264),f=r(92647),l=function(){function t(){(0,n.A)(this,t),(0,a.A)(this,"buffer",void 0),(0,a.A)(this,"pos",void 0),(0,a.A)(this,"end",void 0),(0,a.A)(this,"ended",void 0),this.buffer=new Uint8Array(102400),this.pos=0,this.end=0,this.ended=!1}var e;return(0,s.A)(t,[{key:"read",value:(e=(0,i.A)(u().mark((function t(e){var r,i,n,s,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.ended&&this.pos>=this.end)){t.next=2;break}return t.abrupt("return");case 2:if(r=[],!(this.pos<this.end-4)){t.next=15;break}if(!((i=o.Ky(this.buffer.subarray(this.pos,this.end-4),3)).offset>-1)){t.next=11;break}return n=this.buffer.slice(this.pos,this.pos+i.offset),this.pos+=i.offset,t.abrupt("return",n);case 11:r.push(this.buffer.slice(this.pos,this.end-4)),this.buffer.copyWithin(0,this.end-4,this.end),this.pos=0,this.end=4;case 15:if(this.ended||!(this.end<this.buffer.length)){t.next=29;break}return t.prev=17,t.next=20,e.readToBuffer(this.buffer.length-this.end,this.buffer.subarray(this.end));case 20:s=t.sent,this.end+=s,t.next=29;break;case 24:if(t.prev=24,t.t0=t.catch(17),this.ended=!0,!(this.pos>=this.end)){t.next=29;break}return t.abrupt("return",r.length?(0,f.A)(Uint8Array,r):null);case 29:if(!((a=o.Ky(this.buffer.subarray(this.pos,this.end-4),r.length?0:3)).offset>-1)){t.next=36;break}return r.push(this.buffer.slice(this.pos,this.pos+a.offset)),this.pos+=a.offset,t.abrupt("return",(0,f.A)(Uint8Array,r));case 36:if(!this.ended){t.next=42;break}return r.push(this.buffer.slice(this.pos,this.end)),this.pos=this.end=0,t.abrupt("return",(0,f.A)(Uint8Array,r));case 42:r.push(this.buffer.slice(this.pos,this.end-4)),this.buffer.copyWithin(0,this.end-4,this.end),this.pos=0,this.end=4;case 46:t.next=15;break;case 48:case"end":return t.stop()}}),t,this,[[17,24]])}))),function(t){return e.apply(this,arguments)})},{key:"reset",value:function(){this.pos=0,this.end=0,this.ended=!1}}]),t}()},23991:(t,e,r)=>{function i(t){for(var e=0;e<32&&0===t.readU1();)e++;return t.readU(e)+((1<<e)-1)}function n(t){var e=i(t);return 1&e?(e+1)/2:-e/2}r.d(e,{$x:()=>n,xb:()=>i})},39381:(t,e,r)=>{r.d(e,{E3:()=>s,Sg:()=>o,Y0:()=>u,ht:()=>h,r8:()=>n,yd:()=>a});var i=r(63939);function n(t){return i.f[2](t)}function s(t){return n(t+1)<<8|n(t)}function a(t){return n(t)<<8|n(t+1)}function h(t){return n(t)<<16|n(t+1)<<8|n(t+2)}function u(t){return s(t+2)<<16|s(t)}function o(t){return a(t)<<16|a(t+2)}},60264:(t,e,r)=>{function i(t){return t.length>4&&0===t[0]&&0===t[1]&&(1===t[2]||0===t[2]&&1===t[3])}function n(t,e){for(var r=0,i=e;i<t.length;i++)switch(t[i]){case 0:r++;break;case 1:if(r>=2)return{offset:i-Math.min(r,3),startCode:Math.min(r+1,4)};r=0;break;default:r=0}return{offset:-1,startCode:0}}function s(t){for(var e=[],r=n(t,0),i={offset:-1,startCode:0};(i=n(t,r.offset+r.startCode)).offset>-1;)e.push(t.subarray(r.offset+r.startCode,i.offset,!0)),r=i;return e.push(t.subarray(r.offset+r.startCode,void 0,!0)),e}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;r||(r=t.length);for(var i=new Uint8Array(t.length),n=0,s=0,a=0;a<t.length;a++){if(a>=e&&a<r)if(0===t[a])n++;else if(3===t[a]&&2===n&&a+1<t.length&&t[a+1]<=3){if(++a===t.length)break;n=0===t[a]?1:0}else n=0;i[s++]=t[a]}return i.slice(0,s)}r.d(e,{BN:()=>a,Bs:()=>i,Ky:()=>n,py:()=>s})},37246:(t,e,r)=>{r.d(e,{A:()=>h});var i=r(78716),n=r(81570),s=r(134),a=r(4624),h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1048576;(0,i.A)(this,t),(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"pointer",void 0),(0,s.A)(this,"bitsLeft",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"endPointer",void 0),(0,s.A)(this,"pos",void 0),(0,s.A)(this,"error",void 0),(0,s.A)(this,"onFlush",void 0),this.pointer=0,this.bitsLeft=8,this.pos=BigInt(0),this.size=e,this.endPointer=0,this.error=0,this.buffer=new Uint8Array(this.size)}return(0,n.A)(t,[{key:"peekU1",value:function(){(this.remainingLength()<1||1===this.remainingLength()&&0===this.bitsLeft)&&this.flush();var t=this.pointer,e=this.bitsLeft;return 0===e&&(t++,e=8),this.buffer[t]>>e-1&1}},{key:"readU1",value:function(){var t;return(this.remainingLength()<1||1===this.remainingLength()&&0===this.bitsLeft)&&this.flush(),this.bitsLeft--,t=this.buffer[this.pointer]>>this.bitsLeft&1,0===this.bitsLeft&&(this.pointer++,this.bitsLeft=8,this.pos++),t}},{key:"readU",value:function(t){for(var e=0,r=0;r<t;r++)e|=this.readU1()<<t-r-1;return e}},{key:"remainingLength",value:function(){return this.endPointer-this.pointer}},{key:"getBitLeft",value:function(){return this.bitsLeft}},{key:"getPointer",value:function(){return this.pointer}},{key:"setPointer",value:function(t){this.pointer=t}},{key:"getPos",value:function(){return this.pos}},{key:"skip",value:function(t){var e=(t-t%8)/8;this.pointer+=e,this.pos+=BigInt(e);var r=t%8;this.bitsLeft<=r?(this.pointer++,this.pos++,this.bitsLeft=8-(r-this.bitsLeft)):this.bitsLeft-=r}},{key:"flush",value:function(){if(!this.onFlush)throw this.error=-1048574,Error("IOReader error, flush failed because of no flush callback");if(0===this.bitsLeft&&(this.pointer++,this.pos++),!(this.size-this.remainingLength()<=0))if(this.pointer<this.endPointer){this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0);var t=this.onFlush(this.buffer.subarray(this.endPointer-this.pointer,this.size));if(t<0)throw this.error=t,Error("IOReader error, flush failed");this.endPointer=this.endPointer-this.pointer+t,this.pointer=0}else{var e=this.onFlush(this.buffer);if(this.endPointer=e,this.pointer=0,this.bitsLeft=8,e<0)throw this.error=e,Error("IOReader error, flush failed")}}},{key:"getBuffer",value:function(){return this.buffer}},{key:"appendBuffer",value:function(t){if(this.size-this.endPointer>=t.length)this.buffer.set(t,this.endPointer),this.endPointer+=t.length;else if(this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0),this.endPointer=this.endPointer-this.pointer,this.pointer=0,this.size-this.endPointer>=t.length)this.buffer.set(t,this.endPointer),this.endPointer+=t.length;else{var e=Math.min(this.size-this.endPointer,t.length);this.buffer.set(t.subarray(0,e),this.endPointer),this.endPointer+=e,a.R8("BSReader, call appendBuffer but the buffer's size is lagger then the remaining size","src/common/io/BitReader.ts",241)}}},{key:"reset",value:function(){this.pointer=this.endPointer=0,this.bitsLeft=8,this.error=0,this.pos=BigInt(0)}},{key:"skipPadding",value:function(){this.bitsLeft<8&&(this.bitsLeft=8,this.pointer++,this.pos++)}}]),t}()},83314:(t,e,r)=>{r.d(e,{A:()=>a});var i=r(78716),n=r(81570),s=r(134),a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1048576;(0,i.A)(this,t),(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"pointer",void 0),(0,s.A)(this,"pos",void 0),(0,s.A)(this,"bitPointer",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"error",void 0),(0,s.A)(this,"onFlush",void 0),this.pointer=0,this.bitPointer=0,this.size=e,this.error=0,this.pos=BigInt(0),this.buffer=new Uint8Array(this.size)}return(0,n.A)(t,[{key:"writeU1",value:function(t){(this.remainingLength()<1||1===this.remainingLength()&&this.bitPointer>=8)&&this.flush(),1&t?this.buffer[this.pointer]|=1<<7-this.bitPointer:this.buffer[this.pointer]&=~(1<<7-this.bitPointer),this.bitPointer++,8===this.bitPointer&&(this.pointer++,this.pos++,this.bitPointer=0)}},{key:"writeU",value:function(t,e){for(var r=0;r<t;r++)this.writeU1(e>>t-r-1&1)}},{key:"remainingLength",value:function(){return this.size-this.pointer}},{key:"flush",value:function(){if(!this.onFlush)throw this.error=-1048574,Error("BSWriter error, flush failed because of no flush callback");if(this.pointer)if(this.bitPointer&&this.pointer>1){var t=this.onFlush(this.buffer.subarray(0,this.pointer-1));if(0!==t)throw this.error=t,Error("BSWriter error, flush failed");this.buffer[0]=this.buffer[this.pointer]}else if(0===this.bitPointer){var e=this.onFlush(this.buffer.subarray(0,this.pointer));if(0!==e)throw this.error=e,Error("BSWriter error, flush failed")}this.pointer=0}},{key:"padding",value:function(){for(;0!==this.bitPointer;)this.writeU1(0)}},{key:"reset",value:function(){this.pointer=0,this.bitPointer=0,this.error=0,this.pos=BigInt(0)}},{key:"getBuffer",value:function(){return this.buffer}},{key:"getPointer",value:function(){return this.pointer}},{key:"getPos",value:function(){return this.pos}}]),t}()},729:(t,e,r)=>{r.d(e,{A:()=>u});var i=r(78716),n=r(81570),s=r(134),a=r(4624),h=r(50011),u=function(){function t(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,i.A)(this,t),(0,s.A)(this,"data",void 0),(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"byteStart",void 0),(0,s.A)(this,"pos",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"littleEndian",void 0),this.buffer=e,this.data=e instanceof Uint8Array?new DataView(e.buffer):e.view,this.byteStart=e instanceof Uint8Array?e.byteOffset:0,this.pos=0,this.size=e.byteLength,this.littleEndian=!r}return(0,n.A)(t,[{key:"writeUint8",value:function(t){this.data.setUint8(this.pos+++this.byteStart,t)}},{key:"writeUint16",value:function(t){this.data.setUint16(this.pos+this.byteStart,t,this.littleEndian),this.pos+=2}},{key:"writeUint24",value:function(t){var e=3840&t,r=240&t,i=15&t;this.littleEndian?(this.writeUint8(i),this.writeUint8(r),this.writeUint8(e)):(this.writeUint8(e),this.writeUint8(r),this.writeUint8(i))}},{key:"writeUint32",value:function(t){this.data.setUint32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}},{key:"writeUint64",value:function(t){var e=t&BigInt(4294967295),r=(t&BigInt(4294967295)<<BigInt(32))>>BigInt(32);this.littleEndian?(this.writeUint32(Number(e)),this.writeUint32(Number(r))):(this.writeUint32(Number(r)),this.writeUint32(Number(e)))}},{key:"writeInt8",value:function(t){this.data.setInt8(this.pos+++this.byteStart,t)}},{key:"writeInt16",value:function(t){this.data.setInt16(this.pos+this.byteStart,t,this.littleEndian),this.pos+=2}},{key:"writeInt32",value:function(t){this.data.setInt32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}},{key:"writeInt64",value:function(t){var e=t&BigInt(4294967295),r=(t&BigInt(4294967295)<<BigInt(32))>>BigInt(32);this.littleEndian?(this.writeInt32(Number(e)),this.writeInt32(Number(r))):(this.writeInt32(Number(r)),this.writeInt32(Number(e)))}},{key:"writeFloat",value:function(t){this.data.setFloat32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}},{key:"writeDouble",value:function(t){this.data.setFloat64(this.pos+this.byteStart,t,this.littleEndian),this.pos+=8}},{key:"getPos",value:function(){return this.pos}},{key:"seek",value:function(t){t>this.size&&(t=this.size),this.pos=Math.max(0,t)}},{key:"skip",value:function(t){this.seek(this.pos+t)}},{key:"back",value:function(t){this.seek(this.pos-t)}},{key:"remainingSize",value:function(){return this.size-this.pos}},{key:"writeBuffer",value:function(t){var e=t.length;this.remainingSize()<e&&(e=this.remainingSize(),a.R8("the remaining buffer size is smaller then the wrote buffer, hope set ".concat(t.length,", but set ").concat(e),"src/common/io/BufferWriter.ts",211)),this.buffer.set(t,this.pos),this.pos+=t.length}},{key:"writeString",value:function(t){var e=h.encode(t);return this.writeBuffer(e),e.length}},{key:"getWroteBuffer",value:function(){return this.buffer.subarray(0,this.pos)}},{key:"resetBuffer",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.buffer=t,this.data=t instanceof Uint8Array?new DataView(t.buffer):t.view,this.byteStart=t instanceof Uint8Array?t.byteOffset:0,this.pos=0,this.size=t.byteLength,this.littleEndian=!e}}]),t}()}}]);