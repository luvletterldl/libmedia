"use strict";(self.webpackChunkAVPlayer=self.webpackChunkAVPlayer||[]).push([[487],{53e3:(t,e,i)=>{i.d(e,{HL:()=>y,Jk:()=>k,KD:()=>x,S1:()=>_,XC:()=>m,ZU:()=>P,ci:()=>A,dT:()=>v,oT:()=>w,wf:()=>B}),i(42096),i(75062),i(16091),i(68632);var r=i(134),n=i(63939),s=i(50932),a=i(72739),h=i(729),u=i(31865),o=i(37246),f=i(14686),l=i(60264),c=i(71517),d=i(37837),p=i(23991),b=i(39381),v=(0,r.A)((0,r.A)((0,r.A)((0,r.A)({},1,"Main"),2,"Main10"),3,"MainStillPicture"),4,"Main444"),g=3;function y(t){var e=new u.A(t,!0);e.skip(22);for(var i=[],r=[],n=[],s=e.readUint8(),a=0;a<s;a++){for(var h=63&e.readUint8(),o=e.readUint16(),f=[],l=0;l<o;l++){var c=e.readUint16();f.push(e.readBuffer(c))}32===h?i=f:33===h?r=f:34===h&&(n=f)}return{vpss:i,spss:r,ppss:n}}function U(t,e,i){var r=e[0],n=23;t.length&&(n+=3,n=t.reduce((function(t,e){return t+2+e.length}),n)),e.length&&(n+=3,n=e.reduce((function(t,e){return t+2+e.length}),n)),i.length&&(n+=3,n=i.reduce((function(t,e){return t+2+e.length}),n));var s=new Uint8Array(n),u=new h.A(s,!0),o=B(r);u.writeUint8(1),u.writeUint8(r[1]),u.writeUint8(r[2]),u.writeUint8(r[3]),u.writeUint8(r[4]),u.writeUint8(r[5]),u.writeUint8(r[6]),u.writeUint8(r[7]),u.writeUint8(r[8]),u.writeUint8(r[9]),u.writeUint8(r[10]),u.writeUint8(r[11]),u.writeUint8(o.level),u.writeUint8(1020),u.writeUint8(0),u.writeUint8(16320),u.writeUint8(16320|o.chroma_format_idc),u.writeUint8(8160|o.bit_depth_luma_minus8),u.writeUint8(8160|o.bit_depth_chroma_minus8),u.writeUint16(0),u.writeUint8(8|(1&r[0])<<2|g);var f=0;return t.length&&f++,e.length&&f++,i.length&&f++,u.writeUint8(f),t.length&&(u.writeUint8(160),u.writeUint16(t.length),a.__(t,(function(t){u.writeUint16(t.length),u.writeBuffer(t)}))),e.length&&(u.writeUint8(161),u.writeUint16(e.length),a.__(e,(function(t){u.writeUint16(t.length),u.writeBuffer(t)}))),i.length&&(u.writeUint8(162),u.writeUint16(i.length),a.__(i,(function(t){u.writeUint16(t.length),u.writeBuffer(t)}))),s}function _(t){var e=(0,l.py)(t);if(e.length>=2){var i=[],r=[],n=[];if(e.forEach((function(t){var e=t[0]>>>1&63;32===e?i.push(t):33===e?r.push(t):34===e&&n.push(t)})),r.length&&n.length)return U(i,r,n)}}function w(t){var e,i=!1,r=(0,l.py)(t);if(r.length>=2){var n=[],s=[],u=[];r.forEach((function(t){var e=t[0]>>>1&63;32===e?n.push(t):33===e?s.push(t):34===e&&u.push(t)})),s.length&&u.length&&(e=U(n,s,u),r=r.filter((function(t){var e=t[0]>>>1&63;return 32!==e&&33!==e&&34!==e&&35!==e})))}var o=r.reduce((function(t,e){return t+g+1+e.length}),0),c=(0,d.sY)(o),p=(0,f.s3)(c,o),b=new h.A(p);return a.__(r,(function(t){3===g?b.writeUint32(t.length):2===g?b.writeUint24(t.length):1===g?b.writeUint16(t.length):b.writeUint8(t.length),b.writeBuffer(t.subarray(0));var e=t[0]>>>1&63;19!==e&&20!==e&&21!==e||(i=!0)})),{bufferPointer:c,length:o,extradata:e,key:i}}function k(t,e){var i;if(1&n.f[15](t+36)){var r=(0,c.iI)(t);if(!(0,l.Bs)(r)){for(var s=null!==(i=e.metadata.naluLengthSizeMinusOne)&&void 0!==i?i:g,a=[],h=[],o=[],p=new u.A(r);p.remainingSize()>0;){var b;b=3===s?p.readUint32():2===s?p.readUint24():1===s?p.readUint16():p.readUint8();var v=r.subarray(Number(BigInt.asIntN(32,p.getPos())),Number(BigInt.asIntN(32,p.getPos()))+b);p.skip(b);var y=v[0]>>>1&63;33===y?h.push(v):34===y?o.push(v):32===y&&a.push(v)}if(h.length||o.length||a.length){var _=U(a,h,o),w=(0,d.sY)(_.length);(0,f.lW)(w,_.length,_),(0,c.Ow)(t,1,w,_.length)}}}}function A(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(1&n.f[15](t+36)||e){var i=(0,c.iI)(t);if((0,l.Bs)(i)){var r=(0,l.py)(i);if(r.length>2){var a=[],h=[],u=[];if(r.forEach((function(t){var e=t[0]>>>1&63;32===e?a.push(t):33===e?h.push(t):34===e&&u.push(t)})),a.length&&h.length&&u.length){var o=U(a,h,u),p=(0,d.sY)(o.length);(0,f.lW)(p,o.length,o),(0,c.Ow)(t,1,p,o.length),s.M[15](t+36,1|n.f[15](t+36))}}}}}function m(t,e){if(!e&&t.sideData[1]&&(e=t.sideData[1]),e&&e.length>=6){t.metadata.naluLengthSizeMinusOne=3&e[21];var i=y(e).spss;if(i.length){var r=B(i[0]),n=r.profile,s=r.level,a=r.width,h=r.height;t.codecpar.profile=n,t.codecpar.level=s,t.codecpar.width=a,t.codecpar.height=h}}}function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(2===n.f[15](t+80))return(0,l.py)((0,f.s3)(n.f[20](t+24),n.f[15](t+28))).some((function(t){var e=t[0]>>>1&63;return 20===e||19===e}));for(var i=n.f[15](t+28),r=0;r<i-e;){var s=b.r8(n.f[20](t+24)+(r+e))>>>1&63;if(20===s||19===s)return!0;r+=4===e?b.Sg(n.f[20](t+24)+r):3===e?b.ht(n.f[20](t+24)+r):2===e?b.yd(n.f[20](t+24)+r):b.r8(n.f[20](t+24)+r),r+=e}return!1}function B(t){if(t&&!(t.length<3)){var e=0;0===t[0]&&0===t[1]&&0===t[2]&&1===t[3]&&(e=4);var i=0,r=0,n=0,s=0,a=0,h=0,u=1,f=0,c=0,d=0,b=0,v=(0,l.BN)(t.subarray(e)),g=new o.A(v.length);g.appendBuffer(v),g.readU1(),g.readU(6),g.readU(6),g.readU(3),g.readU(4);var y=g.readU(3);g.readU1();var U=0;if(y<=6){f=g.readU(2),c=g.readU1(),i=g.readU(5),d=g.readU(32),b=g.readU(48),r=g.readU(8);for(var _=new Array(6),w=new Array(6),k=0;k<y;k++)_[k]=g.readU1(),w[k]=g.readU1();if(y>0)for(var A=y;A<8;A++)g.readU(2);for(var m=0;m<y;m++)_[m]&&(g.readU(2),g.readU(1),g.readU(5),g.readU(32),g.readU(1),g.readU(1),g.readU(1),g.readU(1),g.readU(44)),w[m]&&g.readU(8);p.xb(g),3===(u=p.xb(g))&&(U=g.readU(1)),n=p.xb(g),s=p.xb(g);var x=0,B=0,P=0,I=0;g.readU1()&&(x=p.xb(g),B=p.xb(g),P=p.xb(g),I=p.xb(g)),a=p.xb(g),h=p.xb(g);var M=2,z=2;0===u?M=z=0:2===u?(M=2,z=1):3===u&&(M=z=1),n-=M*(1<<a+1)*(x+B),s-=z*(1<<a+1)*(P+I)}for(var L=p.xb(g)+4,S=g.readU1()?0:y;S<y+1;S++)p.xb(g),p.xb(g),p.xb(g);var R=p.xb(g)+3,q=p.xb(g),N=p.xb(g)+2,E=p.xb(g),F=R+q,T=R-1,D=n+(1<<F)-1>>F,C=s+(1<<F)-1>>F;return{profile:i,level:r,width:n,height:s,chroma_format_idc:u,bit_depth_luma_minus8:a,bit_depth_chroma_minus8:h,general_profile_space:f,general_tier_flag:c,general_profile_compatibility_flags:d,constraint_flags:b,separate_colour_plane_flag:U,log2_min_cb_size:R,log2_diff_max_min_coding_block_size:q,log2_min_tb_size:N,log2_diff_max_min_transform_block_size:E,log2_max_trafo_size:E+N,log2_ctb_size:F,log2_min_pu_size:T,ctb_width:D,ctb_height:C,ctb_size:D*C,min_cb_width:n>>R,min_cb_height:s>>R,min_tb_width:n>>N,min_tb_height:s>>N,min_pu_width:n>>T,min_pu_height:s>>T,log2_max_poc_lsb:L}}}function P(t){if(t&&!(t.length<3)){var e=0;0===t[0]&&0===t[1]&&0===t[2]&&1===t[3]&&(e=4);var i=(0,l.BN)(t.subarray(e)),r=new o.A(i.length);return r.appendBuffer(i),{pps_pic_parameter_set_id:p.xb(r),pps_seq_parameter_set_id:p.xb(r),dependent_slice_segment_flag:r.readU1(),output_flag_present_flag:r.readU1(),num_extra_slice_header_bits:r.readU(3)}}}},85947:(t,e,i)=>{i.d(e,{A:()=>a});var r=i(78716),n=i(81570),s=i(134),a=function(){function t(){(0,r.A)(this,t),(0,s.A)(this,"type",-1),(0,s.A)(this,"onStreamAdd",void 0)}return(0,n.A)(t,[{key:"destroy",value:function(t){}}]),t}()},85487:(t,e,i)=>{i.r(e),i.d(e,{default:()=>S});var r=i(88435),n=i.n(r),s=i(25182),a=i(78716),h=i(81570),u=i(77193),o=i(25767),f=i(43070),l=i(31060),c=i(134),d=i(36443),p=i.n(d),b=i(63939),v=i(50932),g=i(9705),y=i(85947),U=i(14686),_=i(37837),w=i(71517),k=i(95335),A=i(92647),m=i(53e3),x=i(77231),B=i(37246),P=i(23991),I=i(37805);function M(t,e,i){return e=(0,o.A)(e),(0,u.A)(t,z()?n()(e,i||[],(0,o.A)(t).constructor):e.apply(t,i))}function z(){try{var t=!Boolean.prototype.valueOf.call(n()(Boolean,[],(function(){})))}catch(t){}return(z=function(){return!!t})()}var L={framerate:{num:30,den:1}},S=function(t){function e(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.A)(this,e),t=M(this,e),(0,c.A)((0,f.A)(t),"type",10),(0,c.A)((0,f.A)(t),"options",void 0),(0,c.A)((0,f.A)(t),"currentDts",void 0),(0,c.A)((0,f.A)(t),"currentPts",void 0),(0,c.A)((0,f.A)(t),"step",void 0),(0,c.A)((0,f.A)(t),"slices",void 0),(0,c.A)((0,f.A)(t),"naluPos",void 0),(0,c.A)((0,f.A)(t),"queue",void 0),(0,c.A)((0,f.A)(t),"bitReader",void 0),(0,c.A)((0,f.A)(t),"sliceType",void 0),(0,c.A)((0,f.A)(t),"poc",void 0),(0,c.A)((0,f.A)(t),"pocTid0",void 0),(0,c.A)((0,f.A)(t),"sps",void 0),(0,c.A)((0,f.A)(t),"pps",void 0),(0,c.A)((0,f.A)(t),"naluReader",void 0),t.options=k.extend({},L,i),t}var i,r,n,u,o;return(0,l.A)(e,t),(0,h.A)(e,[{key:"init",value:function(t){t.ioReader&&t.ioReader.setEndian(!1),this.slices=[],this.queue=[],this.bitReader=new B.A(50),this.naluReader=new I.A}},{key:"destroy",value:function(t){if(this.queue.length){for(var e=0;e<this.queue.length;e++)(0,w.Qe)(this.queue[e].avpacket);this.queue.length=0}}},{key:"isFrameNalu",value:function(t){return(t[1===t[2]?3:4]>>>1&63)<32}},{key:"readNaluFrame",value:(o=(0,s.A)(p().mark((function t(e){var i,r,n,s;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=!1,r=this.slices,this.slices=[],r.length&&(i=this.isFrameNalu(r[0]));case 4:return t.next=7,this.naluReader.read(e.ioReader);case 7:if(n=t.sent){t.next=10;break}return t.abrupt("return",r);case 10:if(s=n[1===n[2]?3:4]>>>1&63,!this.isFrameNalu(n)){t.next=26;break}if(!i){t.next=22;break}if(!(n[1===n[2]?5:6]>>>7)){t.next=19;break}return this.slices.push(n),t.abrupt("return",r);case 19:r.push(n);case 20:t.next=24;break;case 22:r.push(n),i=!0;case 24:t.next=32;break;case 26:if(!i||35!==s&&33!==s&&34!==s&&32!==s){t.next=31;break}return this.slices.push(n),t.abrupt("return",r);case 31:r.push(n);case 32:t.next=4;break;case 34:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"readHeader",value:(u=(0,s.A)(p().mark((function t(e){var i,r,n,s,a,h,u,o,f;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(i=e.createStream()).codecpar.codecType=0,i.codecpar.codecId=173,i.timeBase.den=x.SF,i.timeBase.num=1,i.codecpar.bitFormat=2,this.currentDts=BigInt(0),this.currentPts=BigInt(0),this.naluPos=BigInt(0),this.poc=0,this.pocTid0=0,this.step=BigInt(Math.floor(x.SF/this.options.framerate.num*this.options.framerate.den));case 12:return t.next=15,this.readNaluFrame(e);case 15:if((r=t.sent).length){t.next=18;break}return t.abrupt("return",-1048576);case 18:if(n=(0,A.A)(Uint8Array,r),!(s=m.S1(n))){t.next=45;break}return i.codecpar.extradata=(0,_.sY)(s.length),(0,U.lW)(i.codecpar.extradata,s.length,s),i.codecpar.extradataSize=s.length,m.XC(i,s),a=m.HL(s),h=a.spss,u=a.ppss,this.sps=m.wf(h[0]),this.pps=m.ZU(u[0]),o=(0,w._5)(),f=(0,_.sY)(n.length),(0,U.lW)(f,n.length,n),(0,w.NX)(o,f,n.length),v.M[17](o+56,this.naluPos),this.naluPos+=BigInt(Math.floor(n.length)),v.M[17](o+16,this.currentDts),this.currentDts+=this.step,v.M[17](o+8,this.currentPts),this.currentPts+=this.step,v.M[15](o+32,i.index),v.M[15](o+36,1|b.f[15](o+36)),v.M[15](o+72,i.timeBase.num),v.M[15](o+76,i.timeBase.den),v.M[15](o+80,2),e.interval.packetBuffer.push(o),t.abrupt("break",48);case 45:this.naluPos+=BigInt(Math.floor(n.length)),t.next=12;break;case 48:return t.abrupt("return",0);case 49:case"end":return t.stop()}}),t,this)}))),function(t){return u.apply(this,arguments)})},{key:"readAVPacket_",value:(n=(0,s.A)(p().mark((function t(e,i){var r,n,s,a,h,u,o=this;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.getStreamByMediaType(0),t.next=3,this.readNaluFrame(e);case 3:if((n=t.sent).length){t.next=6;break}return t.abrupt("return",-1048576);case 6:return this.sliceType=-1,s=!1,a=!0,n.forEach((function(t){var e=(1===t[2]?t[3]:t[4])>>>1&63,i=7&(1===t[2]?t[4]:t[5]);if(33===e&&(o.sps=m.wf(t)),34===e&&(o.pps=m.ZU(t)),19!==e&&20!==e||(s=!0),e<32&&a){a=!1,o.bitReader.reset(),o.bitReader.appendBuffer(t.subarray(1===t[2]?5:6,50));var r=o.bitReader.readU1();if(e>=16&&e<=23&&(s=!0,o.bitReader.readU1()),P.xb(o.bitReader),!r){o.pps.dependent_slice_segment_flag&&o.bitReader.readU1();var n=Math.ceil(Math.log2(o.sps.ctb_width*o.sps.ctb_height));o.bitReader.readU(n)}for(var h=0;h<o.pps.num_extra_slice_header_bits;h++)o.bitReader.readU1();if(o.sliceType=P.xb(o.bitReader),o.pps.output_flag_present_flag&&o.bitReader.readU1(),o.sps.separate_colour_plane_flag&&o.bitReader.readU(2),19===e||20===e)o.poc=0;else{var u=o.bitReader.readU(o.sps.log2_max_poc_lsb),f=1<<o.sps.log2_max_poc_lsb,l=o.pocTid0%f,c=o.pocTid0-l,d=0;d=u<l&&l-u>=f/2?c+f:u>l&&u-l>f/2?c-f:c,16!=e&&17!=e&&18!=e||(d=0),o.poc=d+u}0==i&&0!=e&&2!=e&&4!=e&&6!=e&&8!=e&&7!=e&&9!=e&&(o.pocTid0=o.poc)}})),h=(0,A.A)(Uint8Array,n),u=(0,_.sY)(h.length),(0,U.lW)(u,h.length,h),(0,w.NX)(i,u,h.length),v.M[17](i+56,this.naluPos),this.naluPos+=BigInt(Math.floor(h.length)),v.M[17](i+16,this.currentDts),this.currentDts+=this.step,v.M[15](i+32,r.index),v.M[15](i+72,r.timeBase.num),v.M[15](i+76,r.timeBase.den),v.M[15](i+80,2),s&&v.M[15](i+36,1|b.f[15](i+36)),t.abrupt("return",0);case 24:case"end":return t.stop()}}),t,this)}))),function(t,e){return n.apply(this,arguments)})},{key:"readAVPacket",value:(r=(0,s.A)(p().mark((function t(e,i){var r,n,s,a,h=this;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=this.queue.length,n=function(){h.queue.length>1&&h.queue.sort((function(t,e){return t.poc-e.poc>0?1:-1}));for(var t=0;t<h.queue.length;t++)v.M[17](h.queue[t].avpacket+8,h.currentPts),h.currentPts+=h.step;h.queue.length>1&&h.queue.sort((function(t,e){return b.f[17](t.avpacket+16)-b.f[17](e.avpacket+16)>BigInt(0)?1:-1})),h.queue.length&&((0,w.rN)(i,h.queue[0].avpacket),(0,w.Qe)(h.queue[0].avpacket));for(var r=1;r<h.queue.length;r++)e.interval.packetBuffer.push(h.queue[r].avpacket);h.queue.length=0};case 2:return s=(0,w._5)(),t.next=6,this.readAVPacket_(e,s);case 6:if(!((a=t.sent)<0)){t.next=15;break}if((0,w.Qe)(s),!this.queue.length){t.next=14;break}return n(),t.abrupt("return",0);case 14:return t.abrupt("return",a);case 15:if(!(1&b.f[15](s+36)||1===this.sliceType||2===this.sliceType)){t.next=26;break}if(!(1===r||1&b.f[15](s+36)&&this.queue.length)){t.next=22;break}return n(),this.queue.push({avpacket:s,poc:this.poc}),t.abrupt("return",0);case 22:this.queue.push({avpacket:s,poc:this.poc}),r++;case 24:t.next=27;break;case 26:this.queue.push({avpacket:s,poc:this.poc});case 27:t.next=2;break;case 29:case"end":return t.stop()}}),t,this)}))),function(t,e){return r.apply(this,arguments)})},{key:"seek",value:(i=(0,s.A)(p().mark((function t(e,i,r,n){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",BigInt(g.E$));case 1:case"end":return t.stop()}}),t)}))),function(t,e,r,n){return i.apply(this,arguments)})},{key:"getAnalyzeStreamsCount",value:function(){return 1}}]),e}(y.A)},37805:(t,e,i)=>{i.d(e,{A:()=>l});var r=i(25182),n=i(78716),s=i(81570),a=i(134),h=i(36443),u=i.n(h),o=i(60264),f=i(92647),l=function(){function t(){(0,n.A)(this,t),(0,a.A)(this,"buffer",void 0),(0,a.A)(this,"pos",void 0),(0,a.A)(this,"end",void 0),(0,a.A)(this,"ended",void 0),this.buffer=new Uint8Array(102400),this.pos=0,this.end=0,this.ended=!1}var e;return(0,s.A)(t,[{key:"read",value:(e=(0,r.A)(u().mark((function t(e){var i,r,n,s,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.ended&&this.pos>=this.end)){t.next=2;break}return t.abrupt("return");case 2:if(i=[],!(this.pos<this.end-4)){t.next=15;break}if(!((r=o.Ky(this.buffer.subarray(this.pos,this.end-4),3)).offset>-1)){t.next=11;break}return n=this.buffer.slice(this.pos,this.pos+r.offset),this.pos+=r.offset,t.abrupt("return",n);case 11:i.push(this.buffer.slice(this.pos,this.end-4)),this.buffer.copyWithin(0,this.end-4,this.end),this.pos=0,this.end=4;case 15:if(this.ended||!(this.end<this.buffer.length)){t.next=29;break}return t.prev=17,t.next=20,e.readToBuffer(this.buffer.length-this.end,this.buffer.subarray(this.end));case 20:s=t.sent,this.end+=s,t.next=29;break;case 24:if(t.prev=24,t.t0=t.catch(17),this.ended=!0,!(this.pos>=this.end)){t.next=29;break}return t.abrupt("return",i.length?(0,f.A)(Uint8Array,i):null);case 29:if(!((a=o.Ky(this.buffer.subarray(this.pos,this.end-4),i.length?0:3)).offset>-1)){t.next=36;break}return i.push(this.buffer.slice(this.pos,this.pos+a.offset)),this.pos+=a.offset,t.abrupt("return",(0,f.A)(Uint8Array,i));case 36:if(!this.ended){t.next=42;break}return i.push(this.buffer.slice(this.pos,this.end)),this.pos=this.end=0,t.abrupt("return",(0,f.A)(Uint8Array,i));case 42:i.push(this.buffer.slice(this.pos,this.end-4)),this.buffer.copyWithin(0,this.end-4,this.end),this.pos=0,this.end=4;case 46:t.next=15;break;case 48:case"end":return t.stop()}}),t,this,[[17,24]])}))),function(t){return e.apply(this,arguments)})},{key:"reset",value:function(){this.pos=0,this.end=0,this.ended=!1}}]),t}()},23991:(t,e,i)=>{function r(t){for(var e=0;e<32&&0===t.readU1();)e++;return t.readU(e)+((1<<e)-1)}function n(t){var e=r(t);return 1&e?(e+1)/2:-e/2}i.d(e,{$x:()=>n,xb:()=>r})},39381:(t,e,i)=>{i.d(e,{E3:()=>s,Sg:()=>o,Y0:()=>u,ht:()=>h,r8:()=>n,yd:()=>a});var r=i(63939);function n(t){return r.f[2](t)}function s(t){return n(t+1)<<8|n(t)}function a(t){return n(t)<<8|n(t+1)}function h(t){return n(t)<<16|n(t+1)<<8|n(t+2)}function u(t){return s(t+2)<<16|s(t)}function o(t){return a(t)<<16|a(t+2)}},60264:(t,e,i)=>{function r(t){return t.length>4&&0===t[0]&&0===t[1]&&(1===t[2]||0===t[2]&&1===t[3])}function n(t,e){for(var i=0,r=e;r<t.length;r++)switch(t[r]){case 0:i++;break;case 1:if(i>=2)return{offset:r-Math.min(i,3),startCode:Math.min(i+1,4)};i=0;break;default:i=0}return{offset:-1,startCode:0}}function s(t){for(var e=[],i=n(t,0),r={offset:-1,startCode:0};(r=n(t,i.offset+i.startCode)).offset>-1;)e.push(t.subarray(i.offset+i.startCode,r.offset,!0)),i=r;return e.push(t.subarray(i.offset+i.startCode,void 0,!0)),e}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0;i||(i=t.length);for(var r=new Uint8Array(t.length),n=0,s=0,a=0;a<t.length;a++){if(a>=e&&a<i)if(0===t[a])n++;else if(3===t[a]&&2===n&&a+1<t.length&&t[a+1]<=3){if(++a===t.length)break;n=0===t[a]?1:0}else n=0;r[s++]=t[a]}return r.slice(0,s)}i.d(e,{BN:()=>a,Bs:()=>r,Ky:()=>n,py:()=>s})},37246:(t,e,i)=>{i.d(e,{A:()=>h});var r=i(78716),n=i(81570),s=i(134),a=i(4624),h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1048576;(0,r.A)(this,t),(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"pointer",void 0),(0,s.A)(this,"bitsLeft",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"endPointer",void 0),(0,s.A)(this,"pos",void 0),(0,s.A)(this,"error",void 0),(0,s.A)(this,"onFlush",void 0),this.pointer=0,this.bitsLeft=8,this.pos=BigInt(0),this.size=e,this.endPointer=0,this.error=0,this.buffer=new Uint8Array(this.size)}return(0,n.A)(t,[{key:"peekU1",value:function(){(this.remainingLength()<1||1===this.remainingLength()&&0===this.bitsLeft)&&this.flush();var t=this.pointer,e=this.bitsLeft;return 0===e&&(t++,e=8),this.buffer[t]>>e-1&1}},{key:"readU1",value:function(){var t;return(this.remainingLength()<1||1===this.remainingLength()&&0===this.bitsLeft)&&this.flush(),this.bitsLeft--,t=this.buffer[this.pointer]>>this.bitsLeft&1,0===this.bitsLeft&&(this.pointer++,this.bitsLeft=8,this.pos++),t}},{key:"readU",value:function(t){for(var e=0,i=0;i<t;i++)e|=this.readU1()<<t-i-1;return e}},{key:"remainingLength",value:function(){return this.endPointer-this.pointer}},{key:"getBitLeft",value:function(){return this.bitsLeft}},{key:"getPointer",value:function(){return this.pointer}},{key:"setPointer",value:function(t){this.pointer=t}},{key:"getPos",value:function(){return this.pos}},{key:"skip",value:function(t){var e=(t-t%8)/8;this.pointer+=e,this.pos+=BigInt(e);var i=t%8;this.bitsLeft<=i?(this.pointer++,this.pos++,this.bitsLeft=8-(i-this.bitsLeft)):this.bitsLeft-=i}},{key:"flush",value:function(){if(!this.onFlush)throw this.error=-1048574,Error("IOReader error, flush failed because of no flush callback");if(0===this.bitsLeft&&(this.pointer++,this.pos++),!(this.size-this.remainingLength()<=0))if(this.pointer<this.endPointer){this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0);var t=this.onFlush(this.buffer.subarray(this.endPointer-this.pointer,this.size));if(t<0)throw this.error=t,Error("IOReader error, flush failed");this.endPointer=this.endPointer-this.pointer+t,this.pointer=0}else{var e=this.onFlush(this.buffer);if(this.endPointer=e,this.pointer=0,this.bitsLeft=8,e<0)throw this.error=e,Error("IOReader error, flush failed")}}},{key:"getBuffer",value:function(){return this.buffer}},{key:"appendBuffer",value:function(t){if(this.size-this.endPointer>=t.length)this.buffer.set(t,this.endPointer),this.endPointer+=t.length;else if(this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0),this.endPointer=this.endPointer-this.pointer,this.pointer=0,this.size-this.endPointer>=t.length)this.buffer.set(t,this.endPointer),this.endPointer+=t.length;else{var e=Math.min(this.size-this.endPointer,t.length);this.buffer.set(t.subarray(0,e),this.endPointer),this.endPointer+=e,a.R8("BSReader, call appendBuffer but the buffer's size is lagger then the remaining size","src/common/io/BitReader.ts",241)}}},{key:"reset",value:function(){this.pointer=this.endPointer=0,this.bitsLeft=8,this.error=0,this.pos=BigInt(0)}},{key:"skipPadding",value:function(){this.bitsLeft<8&&(this.bitsLeft=8,this.pointer++,this.pos++)}}]),t}()},729:(t,e,i)=>{i.d(e,{A:()=>u});var r=i(78716),n=i(81570),s=i(134),a=i(4624),h=i(50011),u=function(){function t(e){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,r.A)(this,t),(0,s.A)(this,"data",void 0),(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"byteStart",void 0),(0,s.A)(this,"pos",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"littleEndian",void 0),this.buffer=e,this.data=e instanceof Uint8Array?new DataView(e.buffer):e.view,this.byteStart=e instanceof Uint8Array?e.byteOffset:0,this.pos=0,this.size=e.byteLength,this.littleEndian=!i}return(0,n.A)(t,[{key:"writeUint8",value:function(t){this.data.setUint8(this.pos+++this.byteStart,t)}},{key:"writeUint16",value:function(t){this.data.setUint16(this.pos+this.byteStart,t,this.littleEndian),this.pos+=2}},{key:"writeUint24",value:function(t){var e=3840&t,i=240&t,r=15&t;this.littleEndian?(this.writeUint8(r),this.writeUint8(i),this.writeUint8(e)):(this.writeUint8(e),this.writeUint8(i),this.writeUint8(r))}},{key:"writeUint32",value:function(t){this.data.setUint32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}},{key:"writeUint64",value:function(t){var e=t&BigInt(4294967295),i=(t&BigInt(4294967295)<<BigInt(32))>>BigInt(32);this.littleEndian?(this.writeUint32(Number(e)),this.writeUint32(Number(i))):(this.writeUint32(Number(i)),this.writeUint32(Number(e)))}},{key:"writeInt8",value:function(t){this.data.setInt8(this.pos+++this.byteStart,t)}},{key:"writeInt16",value:function(t){this.data.setInt16(this.pos+this.byteStart,t,this.littleEndian),this.pos+=2}},{key:"writeInt32",value:function(t){this.data.setInt32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}},{key:"writeInt64",value:function(t){var e=t&BigInt(4294967295),i=(t&BigInt(4294967295)<<BigInt(32))>>BigInt(32);this.littleEndian?(this.writeInt32(Number(e)),this.writeInt32(Number(i))):(this.writeInt32(Number(i)),this.writeInt32(Number(e)))}},{key:"writeFloat",value:function(t){this.data.setFloat32(this.pos+this.byteStart,t,this.littleEndian),this.pos+=4}},{key:"writeDouble",value:function(t){this.data.setFloat64(this.pos+this.byteStart,t,this.littleEndian),this.pos+=8}},{key:"getPos",value:function(){return this.pos}},{key:"seek",value:function(t){t>this.size&&(t=this.size),this.pos=Math.max(0,t)}},{key:"skip",value:function(t){this.seek(this.pos+t)}},{key:"back",value:function(t){this.seek(this.pos-t)}},{key:"remainingSize",value:function(){return this.size-this.pos}},{key:"writeBuffer",value:function(t){var e=t.length;this.remainingSize()<e&&(e=this.remainingSize(),a.R8("the remaining buffer size is smaller then the wrote buffer, hope set ".concat(t.length,", but set ").concat(e),"src/common/io/BufferWriter.ts",211)),this.buffer.set(t,this.pos),this.pos+=t.length}},{key:"writeString",value:function(t){var e=h.encode(t);return this.writeBuffer(e),e.length}},{key:"getWroteBuffer",value:function(){return this.buffer.subarray(0,this.pos)}},{key:"resetBuffer",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.buffer=t,this.data=t instanceof Uint8Array?new DataView(t.buffer):t.view,this.byteStart=t instanceof Uint8Array?t.byteOffset:0,this.pos=0,this.size=t.byteLength,this.littleEndian=!e}}]),t}()}}]);