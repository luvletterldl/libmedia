"use strict";(self.webpackChunkAVPlayer=self.webpackChunkAVPlayer||[]).push([[299],{20620:(t,e,i)=>{i.d(e,{Jk:()=>x,KD:()=>P,MB:()=>k,S1:()=>w,XC:()=>M,ci:()=>B,oT:()=>U,tZ:()=>A,wf:()=>I}),i(42096),i(75062),i(16091),i(68632);var r=i(134),n=i(63939),s=i(50932),a=i(72739),h=i(729),u=i(31865),o=i(37246),f=i(4624),c=i(14686),l=i(71517),d=i(60264),p=i(37837),b=i(23991),v=i(39381),g="src/avformat/codecs/h264.ts",y=3,A=(0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)({},66,"Constrained Baseline"),77,"Main"),100,"High"),110,"High10"),122,"High422"),244,"High444");function k(t){var e=new u.A(t);e.skip(5);for(var i=[],r=[],n=[],s=31&e.readUint8(),a=0;a<s;a++){var h=e.readUint16();i.push(e.readBuffer(h))}for(var o=e.readUint8(),f=0;f<o;f++){var c=e.readUint16();r.push(e.readBuffer(c))}if(e.remainingSize()>4){e.skip(3);var l=e.readUint8();if(l>0)for(var d=0;d<l;d++){var p=e.readUint16();n.push(e.readBuffer(p))}}return{spss:i,ppss:r,spsExts:n}}function m(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];t.length>32&&(f.R8("h264 metadata's sps max length is 32, but get ".concat(t.length),g,210),t=t.slice(0,32)),t.length>256&&(f.R8("h264 metadata's pps max length is 256, but get ".concat(t.length),g,214),t=t.slice(0,256));var r=7;r=t.reduce((function(t,e){return t+2+e.length}),r),r=e.reduce((function(t,e){return t+2+e.length}),r);var n=t[0],s=I(n);66!==s.profile&&77!==s.profile&&88!==s.profile&&(r+=4,i.length&&(r=i.reduce((function(t,e){return t+2+e.length}),r)));var u=new Uint8Array(r),o=new h.A(u);return o.writeUint8(1),o.writeUint8(n[1]),o.writeUint8(n[2]),o.writeUint8(n[3]),o.writeUint8(252|y),o.writeUint8(224|31&t.length),a.__(t,(function(t){o.writeUint16(t.length),o.writeBuffer(t)})),o.writeUint8(e.length),a.__(e,(function(t){o.writeUint16(t.length),o.writeBuffer(t)})),66!==s.profile&&77!==s.profile&&88!==s.profile&&(o.writeUint8(252|s.chromaFormatIdc),o.writeUint8(248|s.bitDepthLumaMinus8),o.writeUint8(248|s.bitDepthChromaMinus8),i.length&&a.__(i,(function(t){o.writeUint16(t.length),o.writeBuffer(t)}))),u}function w(t){var e=(0,d.py)(t);if(e.length>1){var i=[],r=[],n=[];if(e.forEach((function(t){var e=31&t[0];7===e?i.push(t):8===e?r.push(t):13===e&&n.push(t)})),i.length&&r.length)return m(i,r,n)}}function U(t){var e,i=(0,d.py)(t),r=!1;if(i.length>1){var n=[],s=[],u=[];i.forEach((function(t){var e=31&t[0];7===e?n.push(t):8===e?s.push(t):13===e&&u.push(t)})),n.length&&s.length&&(e=m(n,s,u)),i=i.filter((function(t){var e=31&t[0];return 9!==e&&8!==e&&7!==e&&13!==e}))}var o=i.reduce((function(t,e){return t+y+1+e.length}),0),f=(0,p.sY)(o),l=(0,c.s3)(f,o),b=new h.A(l);return a.__(i,(function(t){3===y?b.writeUint32(t.length):2===y?b.writeUint24(t.length):1===y?b.writeUint16(t.length):b.writeUint8(t.length),b.writeBuffer(t.subarray(0)),5==(31&t[0])&&(r=!0)})),{bufferPointer:f,length:o,key:r,extradata:e}}function x(t,e){var i;if(1&n.f[15](t+36)){var r=(0,l.iI)(t);if(!(0,d.Bs)(r)){for(var s=null!==(i=e.metadata.naluLengthSizeMinusOne)&&void 0!==i?i:y,a=[],h=[],o=[],f=[],b=new u.A(r);b.remainingSize()>0;){var v;v=3===s?b.readUint32():2===s?b.readUint24():1===s?b.readUint16():b.readUint8();var g=r.subarray(Number(BigInt.asIntN(32,b.getPos())),Number(BigInt.asIntN(32,b.getPos()))+v);b.skip(v);var A=31&g[0];7===A?a.push(g):8===A?h.push(g):13===A?o.push(g):f.push(g)}if(a.length||h.length){var k=m(a,h,o),w=(0,p.sY)(k.length);(0,c.lW)(w,k.length,k),(0,l.Ow)(t,1,w,k.length)}}}}function B(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(1&n.f[15](t+36)||e){var i=(0,l.iI)(t);if((0,d.Bs)(i)){var r=(0,d.py)(i);if(r.length>1){var a=[],h=[],u=[];if(r.forEach((function(t){var e=31&t[0];7===e?a.push(t):8===e?h.push(t):13===e&&u.push(t)})),a.length&&h.length){var o=m(a,h,u),f=(0,p.sY)(o.length);(0,c.lW)(f,o.length,o),(0,l.Ow)(t,1,f,o.length),s.M[15](t+36,1|n.f[15](t+36))}}}}}function M(t,e){if(!e&&t.sideData[1]&&(e=t.sideData[1]),e&&e.length>=6){t.metadata.naluLengthSizeMinusOne=3&e[4];var i=k(e).spss;if(i.length){var r=I(i[0]),n=r.profile,s=r.level,a=r.width,h=r.height;t.codecpar.profile=n,t.codecpar.level=s,t.codecpar.width=a,t.codecpar.height=h}}}function P(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(2===n.f[15](t+80))return(0,d.py)((0,c.s3)(n.f[20](t+24),n.f[15](t+28))).some((function(t){return 5==(31&t[0])}));for(var i=n.f[15](t+28),r=0;r<i-e;){if(5==(31&v.r8(n.f[20](t+24)+(r+e))))return!0;r+=4===e?v.Sg(n.f[20](t+24)+r):3===e?v.ht(n.f[20](t+24)+r):2===e?v.yd(n.f[20](t+24)+r):v.r8(n.f[20](t+24)+r),r+=e}return!1}function I(t){if(t&&!(t.length<3)){var e=0;0===t[0]&&0===t[1]&&0===t[2]&&1===t[3]&&(e=4);var i=(0,d.BN)(t.subarray(e)),r=new o.A(i.length);r.appendBuffer(i),r.readU1(),r.readU(2),r.readU(5);var n=r.readU(8);r.readU1(),r.readU1(),r.readU1(),r.readU1(),r.readU1(),r.readU1(),r.readU(2);var s=r.readU(8);b.xb(r);var a=1,h=0,u=0;if((100==n||110==n||122==n||244==n||44==n||83==n||86==n||118==n||128==n||138==n||139==n||134==n||135==n)&&(3===(a=b.xb(r))&&r.readU1(),h=b.xb(r),u=b.xb(r),r.readU1(),r.readU1()))for(var f=new Array(8),c=0;c<(3!=a?8:12);c++)f[c]=r.readU1();var l=b.xb(r),p=b.xb(r),v=0,g=0;if(0===p)v=b.xb(r);else if(1===p){g=r.readU1(),b.$x(r),b.$x(r);for(var y=b.xb(r),A=0;A<y;A++)b.$x(r)}b.xb(r),r.readU1();var k=b.xb(r),m=b.xb(r),w=r.readU1(),U=16*(k+1),x=(2-w)*(m+1)*16;w||r.readU1(),r.readU1();var B=r.readU1();if(B){var M=1,P=2-B;1===a?(M=2,P=2*(2-B)):2===B&&(M=2,P=2-B),U-=M*(b.xb(r)+b.xb(r)),x-=P*(b.xb(r)+b.xb(r))}return{profile:n,level:s,width:U,height:x,chromaFormatIdc:a,bitDepthLumaMinus8:h,bitDepthChromaMinus8:u,frameMbsOnlyFlag:w,picOrderCntType:p,log2MaxPicOrderCntLsbMinus4:v,deltaPicOrderAlwaysZeroFlag:g,log2MaxFrameNumMinus4:l}}}},85947:(t,e,i)=>{i.d(e,{A:()=>h});var r=i(78716),n=i(81570),s=i(134),a=i(10754),h=function(){function t(){(0,r.A)(this,t),(0,s.A)(this,"type",a.P.UNKNOWN),(0,s.A)(this,"onStreamAdd",void 0)}return(0,n.A)(t,[{key:"destroy",value:function(t){}}]),t}()},5299:(t,e,i)=>{i.r(e),i.d(e,{default:()=>S});var r=i(88435),n=i.n(r),s=i(25182),a=i(78716),h=i(81570),u=i(77193),o=i(25767),f=i(43070),c=i(31060),l=i(134),d=i(36443),p=i.n(d),b=i(63939),v=i(50932),g=i(9705),y=i(85947),A=i(10754),k=i(14686),m=i(37837),w=i(71517),U=i(95335),x=i(92647),B=i(20620),M=i(77231),P=i(37246),I=i(23991),L=i(37805);function N(t,e,i){return e=(0,o.A)(e),(0,u.A)(t,O()?n()(e,i||[],(0,o.A)(t).constructor):e.apply(t,i))}function O(){try{var t=!Boolean.prototype.valueOf.call(n()(Boolean,[],(function(){})))}catch(t){}return(O=function(){return!!t})()}var R={framerate:{num:30,den:1}},S=function(t){function e(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.A)(this,e),t=N(this,e),(0,l.A)((0,f.A)(t),"type",A.P.H264),(0,l.A)((0,f.A)(t),"options",void 0),(0,l.A)((0,f.A)(t),"currentDts",void 0),(0,l.A)((0,f.A)(t),"currentPts",void 0),(0,l.A)((0,f.A)(t),"step",void 0),(0,l.A)((0,f.A)(t),"slices",void 0),(0,l.A)((0,f.A)(t),"naluPos",void 0),(0,l.A)((0,f.A)(t),"queue",void 0),(0,l.A)((0,f.A)(t),"bitReader",void 0),(0,l.A)((0,f.A)(t),"sliceType",void 0),(0,l.A)((0,f.A)(t),"poc",void 0),(0,l.A)((0,f.A)(t),"picOrderCntMsb",void 0),(0,l.A)((0,f.A)(t),"lastPicOrderCntLsb",void 0),(0,l.A)((0,f.A)(t),"frameNumberOffset",void 0),(0,l.A)((0,f.A)(t),"prevFrameNumber",void 0),(0,l.A)((0,f.A)(t),"sps",void 0),(0,l.A)((0,f.A)(t),"naluReader",void 0),t.options=U.extend({},R,i),t}var i,r,n,u,o;return(0,c.A)(e,t),(0,h.A)(e,[{key:"init",value:function(t){t.ioReader&&t.ioReader.setEndian(!1),this.slices=[],this.queue=[],this.bitReader=new P.A(50),this.naluReader=new L.A}},{key:"isFrameNalu",value:function(t){var e=31&t[1===t[2]?3:4];return 1===e||5===e||2===e||3===e||4===e}},{key:"readNaluFrame",value:(o=(0,s.A)(p().mark((function t(e){var i,r,n,s;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=!1,r=this.slices,this.slices=[],r.length&&(i=this.isFrameNalu(r[0]));case 4:return t.next=7,this.naluReader.read(e.ioReader);case 7:if(n=t.sent){t.next=10;break}return t.abrupt("return",r);case 10:if(s=31&n[1===n[2]?3:4],!this.isFrameNalu(n)){t.next=28;break}if(!i){t.next=24;break}if(this.bitReader.clear(),this.bitReader.appendBuffer(n.subarray(1===n[2]?4:5,10)),0!==I.xb(this.bitReader)){t.next=21;break}return this.slices.push(n),t.abrupt("return",r);case 21:r.push(n);case 22:t.next=26;break;case 24:r.push(n),i=!0;case 26:t.next=34;break;case 28:if(!i||9!==s&&7!==s&&8!==s){t.next=33;break}return this.slices.push(n),t.abrupt("return",r);case 33:r.push(n);case 34:t.next=4;break;case 36:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"readHeader",value:(u=(0,s.A)(p().mark((function t(e){var i,r,n,s,a,h,u,o;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(i=e.createStream()).codecpar.codecType=0,i.codecpar.codecId=27,i.timeBase.den=M.SF,i.timeBase.num=1,i.codecpar.bitFormat=2,this.currentDts=BigInt(0),this.currentPts=BigInt(0),this.naluPos=BigInt(0),this.poc=BigInt(0),this.picOrderCntMsb=BigInt(0),this.lastPicOrderCntLsb=0,this.frameNumberOffset=BigInt(0),this.prevFrameNumber=0,this.step=BigInt(Math.floor(M.SF/this.options.framerate.num*this.options.framerate.den));case 15:return t.next=18,this.readNaluFrame(e);case 18:if((r=t.sent).length){t.next=21;break}return t.abrupt("return",-1048576);case 21:if(n=(0,x.A)(Uint8Array,r),!(s=B.S1(n))){t.next=47;break}return i.codecpar.extradata=(0,m.sY)(s.length),(0,k.lW)(i.codecpar.extradata,s.length,s),i.codecpar.extradataSize=s.length,B.XC(i,s),a=B.MB(s),h=a.spss,this.sps=B.wf(h[0]),u=(0,w._5)(),o=(0,m.sY)(n.length),(0,k.lW)(o,n.length,n),(0,w.NX)(u,o,n.length),v.M[17](u+56,this.naluPos),this.naluPos+=BigInt(Math.floor(n.length)),v.M[17](u+16,this.currentDts),this.currentDts+=this.step,v.M[17](u+8,this.currentPts),this.currentPts+=this.step,v.M[15](u+32,i.index),v.M[15](u+36,1|b.f[15](u+36)),v.M[15](u+72,i.timeBase.num),v.M[15](u+76,i.timeBase.den),v.M[15](u+80,2),e.interval.packetBuffer.push(u),t.abrupt("break",50);case 47:this.naluPos+=BigInt(Math.floor(n.length)),t.next=15;break;case 50:return t.abrupt("return",0);case 51:case"end":return t.stop()}}),t,this)}))),function(t){return u.apply(this,arguments)})},{key:"readAVPacket_",value:(n=(0,s.A)(p().mark((function t(e,i){var r,n,s,a,h,u,o=this;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.getStreamByMediaType(0),t.next=3,this.readNaluFrame(e);case 3:if((n=t.sent).length){t.next=6;break}return t.abrupt("return",-1048576);case 6:return this.sliceType=-1,s=!1,a=!0,n.forEach((function(t){var e=1===t[2]?t[3]:t[4],i=31&e,r=e>>>5&3;if(7===i&&(o.sps=B.wf(t)),5===i&&(s=!0),(1===i||2===i||3===i||4===i||5===i)&&a){a=!1,o.bitReader.clear(),o.bitReader.appendBuffer(t.subarray(1===t[2]?4:5,50)),I.xb(o.bitReader),o.sliceType=I.xb(o.bitReader),I.xb(o.bitReader);var n=o.bitReader.readU(o.sps.log2MaxFrameNumMinus4+4),h=0,u=0;if(o.sps.frameMbsOnlyFlag||(h=o.bitReader.readU1()),h&&(u=o.bitReader.readU1()),5===i&&I.xb(o.bitReader),0===o.sps.picOrderCntType){var f=o.bitReader.readU(o.sps.log2MaxPicOrderCntLsbMinus4+4),c=(1<<o.sps.log2MaxPicOrderCntLsbMinus4+4)-1;Math.abs(f-o.lastPicOrderCntLsb)>c>>>1&&(o.picOrderCntMsb+=BigInt(Math.floor(c))),o.poc=o.picOrderCntMsb+BigInt(Math.floor(f)),o.lastPicOrderCntLsb=f}else if(1===o.sps.picOrderCntType){var l=[0,0];if(o.sps.deltaPicOrderAlwaysZeroFlag||(l[0]=I.$x(o.bitReader),u&&(l[1]=I.$x(o.bitReader))),n<o.prevFrameNumber){var d=(1<<o.sps.log2MaxFrameNumMinus4+4)-1;o.frameNumberOffset+=BigInt(Math.floor(d))}var p=o.frameNumberOffset+BigInt(Math.floor(n));0===r&&p>0&&p--,o.poc=BigInt(2)*p+BigInt(0|l[0]),h&&u&&(o.poc+=BigInt(0|l[1])),o.prevFrameNumber=n}else o.poc++}})),h=(0,x.A)(Uint8Array,n),u=(0,m.sY)(h.length),(0,k.lW)(u,h.length,h),(0,w.NX)(i,u,h.length),v.M[17](i+56,this.naluPos),this.naluPos+=BigInt(Math.floor(h.length)),v.M[17](i+16,this.currentDts),this.currentDts+=this.step,v.M[15](i+32,r.index),v.M[15](i+72,r.timeBase.num),v.M[15](i+76,r.timeBase.den),v.M[15](i+80,2),s&&v.M[15](i+36,1|b.f[15](i+36)),t.abrupt("return",0);case 24:case"end":return t.stop()}}),t,this)}))),function(t,e){return n.apply(this,arguments)})},{key:"readAVPacket",value:(r=(0,s.A)(p().mark((function t(e,i){var r,n,s,a,h=this;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=this.queue.length,n=function(){h.queue.length>1&&h.queue.sort((function(t,e){return t.poc-e.poc>BigInt(0)?1:-1}));for(var t=0;t<h.queue.length;t++)v.M[17](h.queue[t].avpacket+8,h.currentPts),h.currentPts+=h.step;h.queue.length>1&&h.queue.sort((function(t,e){return b.f[17](t.avpacket+16)-b.f[17](e.avpacket+16)>BigInt(0)?1:-1})),h.queue.length&&((0,w.rN)(i,h.queue[0].avpacket),(0,w.Qe)(h.queue[0].avpacket));for(var r=1;r<h.queue.length;r++)e.interval.packetBuffer.push(h.queue[r].avpacket);h.queue.length=0};case 2:return s=(0,w._5)(),t.next=6,this.readAVPacket_(e,s);case 6:if(!((a=t.sent)<0)){t.next=15;break}if((0,w.Qe)(s),!this.queue.length){t.next=14;break}return n(),t.abrupt("return",0);case 14:return t.abrupt("return",a);case 15:if(!(1&b.f[15](s+36)||0===this.sliceType||2===this.sliceType||5===this.sliceType||7===this.sliceType)){t.next=26;break}if(!(1===r||1&b.f[15](s+36)&&this.queue.length)){t.next=22;break}return n(),this.queue.push({avpacket:s,poc:this.poc}),t.abrupt("return",0);case 22:this.queue.push({avpacket:s,poc:this.poc}),r++;case 24:t.next=27;break;case 26:this.queue.push({avpacket:s,poc:this.poc});case 27:t.next=2;break;case 29:case"end":return t.stop()}}),t,this)}))),function(t,e){return r.apply(this,arguments)})},{key:"seek",value:(i=(0,s.A)(p().mark((function t(e,i,r,n){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",BigInt(g.E$));case 1:case"end":return t.stop()}}),t)}))),function(t,e,r,n){return i.apply(this,arguments)})},{key:"getAnalyzeStreamsCount",value:function(){return 1}}]),e}(y.A)},37805:(t,e,i)=>{i.d(e,{A:()=>c});var r=i(25182),n=i(78716),s=i(81570),a=i(134),h=i(36443),u=i.n(h),o=i(60264),f=i(92647),c=function(){function t(){(0,n.A)(this,t),(0,a.A)(this,"buffer",void 0),(0,a.A)(this,"pos",void 0),(0,a.A)(this,"end",void 0),(0,a.A)(this,"ended",void 0),this.buffer=new Uint8Array(102400),this.pos=0,this.end=0,this.ended=!1}var e;return(0,s.A)(t,[{key:"read",value:(e=(0,r.A)(u().mark((function t(e){var i,r,n,s,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.ended&&this.pos>=this.end)){t.next=2;break}return t.abrupt("return");case 2:if(i=[],!(this.pos<this.end-4)){t.next=15;break}if(!((r=o.Ky(this.buffer.subarray(this.pos,this.end-4),3)).offset>-1)){t.next=11;break}return n=this.buffer.slice(this.pos,this.pos+r.offset),this.pos+=r.offset,t.abrupt("return",n);case 11:i.push(this.buffer.slice(this.pos,this.end-4)),this.buffer.copyWithin(0,this.end-4,this.end),this.pos=0,this.end=4;case 15:if(this.ended||!(this.end<this.buffer.length)){t.next=29;break}return t.prev=17,t.next=20,e.readToBuffer(this.buffer.length-this.end,this.buffer.subarray(this.end));case 20:s=t.sent,this.end+=s,t.next=29;break;case 24:if(t.prev=24,t.t0=t.catch(17),this.ended=!0,!(this.pos>=this.end)){t.next=29;break}return t.abrupt("return",i.length?(0,f.A)(Uint8Array,i):null);case 29:if(!((a=o.Ky(this.buffer.subarray(this.pos,this.end-4),i.length?0:3)).offset>-1)){t.next=36;break}return i.push(this.buffer.slice(this.pos,this.pos+a.offset)),this.pos+=a.offset,t.abrupt("return",(0,f.A)(Uint8Array,i));case 36:if(!this.ended){t.next=42;break}return i.push(this.buffer.slice(this.pos,this.end)),this.pos=this.end=0,t.abrupt("return",(0,f.A)(Uint8Array,i));case 42:i.push(this.buffer.slice(this.pos,this.end-4)),this.buffer.copyWithin(0,this.end-4,this.end),this.pos=0,this.end=4;case 46:t.next=15;break;case 48:case"end":return t.stop()}}),t,this,[[17,24]])}))),function(t){return e.apply(this,arguments)})},{key:"reset",value:function(){this.pos=0,this.end=0,this.ended=!1}}]),t}()},23991:(t,e,i)=>{function r(t){for(var e=0;e<32&&0===t.readU1();)e++;return t.readU(e)+((1<<e)-1)}function n(t){var e=r(t);return 1&e?(e+1)/2:-e/2}i.d(e,{$x:()=>n,xb:()=>r})},39381:(t,e,i)=>{i.d(e,{E3:()=>s,Sg:()=>o,Y0:()=>u,ht:()=>h,r8:()=>n,yd:()=>a});var r=i(63939);function n(t){return r.f[2](t)}function s(t){return n(t+1)<<8|n(t)}function a(t){return n(t)<<8|n(t+1)}function h(t){return n(t)<<16|n(t+1)<<8|n(t+2)}function u(t){return s(t+2)<<16|s(t)}function o(t){return a(t)<<16|a(t+2)}},60264:(t,e,i)=>{function r(t){return t.length>4&&0===t[0]&&0===t[1]&&(1===t[2]||0===t[2]&&1===t[3])}function n(t,e){for(var i=0,r=e;r<t.length;r++)switch(t[r]){case 0:i++;break;case 1:if(i>=2)return{offset:r-Math.min(i,3),startCode:Math.min(i+1,4)};i=0;break;default:i=0}return{offset:-1,startCode:0}}function s(t){for(var e=[],i=n(t,0),r={offset:-1,startCode:0};(r=n(t,i.offset+i.startCode)).offset>-1;)e.push(t.subarray(i.offset+i.startCode,r.offset,!0)),i=r;return e.push(t.subarray(i.offset+i.startCode,void 0,!0)),e}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0;i||(i=t.length);for(var r=new Uint8Array(t.length),n=0,s=0,a=0;a<t.length;a++){if(a>=e&&a<i)if(0===t[a])n++;else if(3===t[a]&&2===n&&a+1<t.length&&t[a+1]<=3){if(++a===t.length)break;n=0===t[a]?1:0}else n=0;r[s++]=t[a]}return r.slice(0,s)}i.d(e,{BN:()=>a,Bs:()=>r,Ky:()=>n,py:()=>s})},37246:(t,e,i)=>{i.d(e,{A:()=>h});var r=i(78716),n=i(81570),s=i(134),a=i(4624),h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1048576;(0,r.A)(this,t),(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"pointer",void 0),(0,s.A)(this,"bitsLeft",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"endPointer",void 0),(0,s.A)(this,"error",void 0),(0,s.A)(this,"onFlush",void 0),this.pointer=0,this.bitsLeft=8,this.size=e,this.endPointer=0,this.error=0,this.buffer=new Uint8Array(this.size)}return(0,n.A)(t,[{key:"peekU1",value:function(){(this.remainingLength()<1||1===this.remainingLength()&&0===this.bitsLeft)&&this.flush();var t=this.pointer,e=this.bitsLeft;return 0===e&&(t++,e=8),this.buffer[t]>>e-1&1}},{key:"readU1",value:function(){var t;return(this.remainingLength()<1||1===this.remainingLength()&&0===this.bitsLeft)&&this.flush(),this.bitsLeft--,t=this.buffer[this.pointer]>>this.bitsLeft&1,0===this.bitsLeft&&(this.pointer++,this.bitsLeft=8),t}},{key:"readU",value:function(t){for(var e=0,i=0;i<t;i++)e|=this.readU1()<<t-i-1;return e}},{key:"remainingLength",value:function(){return this.endPointer-this.pointer}},{key:"getBitLeft",value:function(){return this.bitsLeft}},{key:"getPos",value:function(){return this.pointer}},{key:"backToPos",value:function(t){this.pointer=t}},{key:"skip",value:function(t){var e=(t-t%8)/8;this.pointer+=e;var i=t%8;this.bitsLeft<=i?(this.pointer++,this.bitsLeft=8-(i-this.bitsLeft)):this.bitsLeft-=i}},{key:"flush",value:function(){if(!this.onFlush)throw this.error=-1048574,Error("IOReader error, flush failed because of no flush callback");if(0===this.bitsLeft&&this.pointer++,!(this.size-this.remainingLength()<=0))if(this.pointer<this.endPointer){this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0);var t=this.onFlush(this.buffer.subarray(this.endPointer-this.pointer,this.size));if(t<0)throw this.error=t,Error("IOReader error, flush failed");this.endPointer=this.endPointer-this.pointer+t,this.pointer=0}else{var e=this.onFlush(this.buffer);if(this.endPointer=e,this.pointer=0,this.bitsLeft=8,e<0)throw this.error=e,Error("IOReader error, flush failed")}}},{key:"getBuffer",value:function(){return this.buffer}},{key:"appendBuffer",value:function(t){if(this.size-this.endPointer>=t.length)this.buffer.set(t,this.endPointer),this.endPointer+=t.length;else if(this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0),this.endPointer=this.endPointer-this.pointer,this.pointer=0,this.size-this.endPointer>=t.length)this.buffer.set(t,this.endPointer),this.endPointer+=t.length;else{var e=Math.min(this.size-this.endPointer,t.length);this.buffer.set(t.subarray(0,e),this.endPointer),this.endPointer+=e,a.R8("BSReader, call appendBuffer but the buffer's size is lagger then the remaining size","src/common/io/BitReader.ts",198)}}},{key:"clear",value:function(){this.pointer=this.endPointer=0,this.bitsLeft=8,this.error=0}},{key:"skipPadding",value:function(){this.bitsLeft<8&&(this.bitsLeft=8,this.pointer++)}}]),t}()},729:(t,e,i)=>{i.d(e,{A:()=>u});var r=i(78716),n=i(81570),s=i(134),a=i(4624),h=i(50011),u=function(){function t(e){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,r.A)(this,t),(0,s.A)(this,"data",void 0),(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"byteStart",void 0),(0,s.A)(this,"pos",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"littleEndian",void 0),this.buffer=e,this.data=e instanceof Uint8Array?new DataView(e.buffer):e.view,this.byteStart=e instanceof Uint8Array?e.byteOffset:0,this.pos=0,this.size=e.byteLength,this.littleEndian=!i}return(0,n.A)(t,[{key:"writeUint8",value:function(t){this.data.setUint8(this.pos+++this.byteStart,t)}},{key:"writeUint16",value:function(t){this.data.setUint16(this.pos+this.byteStart,t,this.littleEndian),this.pos+=2}},{key:"writeUint24",value:function(t){var e=3840&t,i=240&t,r=15&t;this.littleEndian?(this.writeUint8(r),this.writeUint8(i),this.writeUint8(e)):(this.writeUint8(e),this.writeUint8(i),this.writeUint8(r))}},{key:"writeUint32",value:function(t){this.data.setUint32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}},{key:"writeUint64",value:function(t){var e=t&BigInt(4294967295),i=(t&BigInt(4294967295)<<BigInt(32))>>BigInt(32);this.littleEndian?(this.writeUint32(Number(e)),this.writeUint32(Number(i))):(this.writeUint32(Number(i)),this.writeUint32(Number(e)))}},{key:"writeInt8",value:function(t){this.data.setInt8(this.pos+++this.byteStart,t)}},{key:"writeInt16",value:function(t){this.data.setInt16(this.pos+this.byteStart,t,this.littleEndian),this.pos+=2}},{key:"writeInt32",value:function(t){this.data.setInt32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}},{key:"writeInt64",value:function(t){var e=t&BigInt(4294967295),i=(t&BigInt(4294967295)<<BigInt(32))>>BigInt(32);this.littleEndian?(this.writeInt32(Number(e)),this.writeInt32(Number(i))):(this.writeInt32(Number(i)),this.writeInt32(Number(e)))}},{key:"writeFloat",value:function(t){this.data.setFloat32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}},{key:"writeDouble",value:function(t){this.data.setFloat64(this.pos+this.byteStart,t,this.littleEndian),this.pos+=8}},{key:"getPos",value:function(){return this.pos}},{key:"seek",value:function(t){t>this.size&&(t=this.size),this.pos=Math.max(0,t)}},{key:"skip",value:function(t){this.seek(this.pos+t)}},{key:"back",value:function(t){this.seek(this.pos-t)}},{key:"remainingSize",value:function(){return this.size-this.pos}},{key:"writeBuffer",value:function(t){var e=t.length;this.remainingSize()<e&&(e=this.remainingSize(),a.R8("the remaining buffer size is smaller then the wrote buffer, hope set ".concat(t.length,", but set ").concat(e),"src/common/io/BufferWriter.ts",211)),this.buffer.set(t,this.pos),this.pos+=t.length}},{key:"writeString",value:function(t){var e=h.encode(t);return this.writeBuffer(e),e.length}},{key:"getWroteBuffer",value:function(){return this.buffer.subarray(0,this.pos)}},{key:"resetBuffer",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.buffer=t,this.data=t instanceof Uint8Array?new DataView(t.buffer):t.view,this.byteStart=t instanceof Uint8Array?t.byteOffset:0,this.pos=0,this.size=t.byteLength,this.littleEndian=!e}}]),t}()}}]);