(self.webpackChunkAVPlayer=self.webpackChunkAVPlayer||[]).push([[197],{85947:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var a=r(78716),n=r(81570),s=r(134),c=r(10754),u=function(){function e(){(0,a.A)(this,e),(0,s.A)(this,"type",c.P.UNKNOWN),(0,s.A)(this,"onStreamAdd",void 0)}return(0,n.A)(e,[{key:"destroy",value:function(e){}}]),e}()},3791:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>B});var a=r(88435),n=r.n(a),s=r(25182),c=r(78716),u=r(81570),i=r(77193),A=r(25767),o=r(43070),f=r(31060),d=r(134),p=r(36443),x=r.n(p),h=r(61499),M=r(50932),b=r(4624),k=r(9705),l=r(85947),m=r(10754),v=r(14686),P=r(37837),R=r(71517),I=r(35531),S=r(95644);function V(e,t,r){return t=(0,A.A)(t),(0,i.A)(e,g()?n()(t,r||[],(0,A.A)(e).constructor):t.apply(e,r))}function g(){try{var e=!Boolean.prototype.valueOf.call(n()(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var y="src/avformat/formats/IWavFormat.ts",B=function(e){function t(){var e;return(0,c.A)(this,t),e=V(this,t),(0,d.A)((0,o.A)(e),"type",m.P.WAV),(0,d.A)((0,o.A)(e),"dataSize",void 0),(0,d.A)((0,o.A)(e),"sampleCount",void 0),(0,d.A)((0,o.A)(e),"pcmStartPos",void 0),(0,d.A)((0,o.A)(e),"currentPts",void 0),e}var r,a,n;return(0,f.A)(t,e),(0,u.A)(t,[{key:"init",value:function(e){e.ioReader.setEndian(!1)}},{key:"readHeader",value:(n=(0,s.A)(x().mark((function e(t){var r,a,n,s,c,u,i,A,o;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.ioReader.readString(4);case 2:r=e.sent,e.t0=r,e.next="RIFF"===e.t0||"RF64"===e.t0||"BW64"===e.t0?6:"RIFX"===e.t0?7:9;break;case 6:return e.abrupt("break",11);case 7:return t.ioReader.setEndian(!0),e.abrupt("break",11);case 9:return b.z3("the file format is not wav",y,73),e.abrupt("return",k.LR);case 11:return e.next=13,t.ioReader.skip(4);case 13:return e.next=15,t.ioReader.readString(4);case 15:if("WAVE"===(a=e.sent)){e.next=19;break}return b.z3("invalid start code ".concat(a," in RIFF header"),y,83),e.abrupt("return",k.LR);case 19:if("RF64"!==r&&"BW64"!==r){e.next=43;break}return e.next=22,t.ioReader.readString(4);case 22:if("ds64"===e.sent){e.next=25;break}return e.abrupt("return",k.LR);case 25:return e.next=27,t.ioReader.readUint32();case 27:if(!((n=e.sent)<24)){e.next=30;break}return e.abrupt("return",k.LR);case 30:return e.next=32,t.ioReader.skip(8);case 32:return e.next=34,t.ioReader.readUint64();case 34:return this.dataSize=e.sent,e.next=37,t.ioReader.readUint64();case 37:if(this.sampleCount=e.sent,!(this.dataSize<0||this.sampleCount<0)){e.next=41;break}return b.z3("negative data_size and/or sample_count in ds64",y,103),e.abrupt("return",k.LR);case 41:return e.next=43,t.ioReader.skip(n-24);case 43:return s=t.createStream(),e.next=46,t.ioReader.fileSize();case 46:c=e.sent,u=!1;case 49:if(!(t.ioReader.getPos()<c)){e.next=83;break}return e.next=52,t.ioReader.readString(4);case 52:return i=e.sent,e.next=55,t.ioReader.readUint32();case 55:if(A=e.sent,"fmt "!==i){e.next=68;break}if(u){e.next=65;break}return e.next=60,(0,I.y)(t.ioReader,s.codecpar[h.o9],A);case 60:if(!((o=e.sent)<0)){e.next=63;break}return e.abrupt("return",o);case 63:e.next=66;break;case 65:b.R8("found more than one 'fmt ' tag, ignore it",y,128);case 66:e.next=81;break;case 68:if("data"!==i){e.next=77;break}if(this.pcmStartPos=t.ioReader.getPos(),this.dataSize||(this.dataSize=BigInt(Math.floor(A))),this.pcmStartPos+this.dataSize!==c){e.next=73;break}return e.abrupt("break",83);case 73:return e.next=75,t.ioReader.seek(this.pcmStartPos+this.dataSize);case 75:e.next=81;break;case 77:if(this.pcmStartPos+this.dataSize!==c){e.next=79;break}return e.abrupt("break",83);case 79:return e.next=81,t.ioReader.seek(t.ioReader.getPos()+BigInt(Math.floor(A)));case 81:e.next=49;break;case 83:return this.sampleCount||(this.sampleCount=(this.dataSize<<BigInt(3))/BigInt(s.codecpar.chLayout.nbChannels*(0,S.MZ)(s.codecpar.codecId))),s.timeBase.den=s.codecpar.sampleRate,s.timeBase.num=1,this.sampleCount&&(s.duration=this.sampleCount),this.currentPts=BigInt(0),e.next=90,t.ioReader.seek(this.pcmStartPos);case 90:return e.abrupt("return",0);case 91:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"readAVPacket",value:(a=(0,s.A)(x().mark((function e(t,r){var a,n,s;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.streams.find((function(e){return e.codecpar.codecType=1})),e.prev=1,n=1024*a.codecpar.chLayout.nbChannels*(0,S.MZ)(a.codecpar.codecId)>>>3,s=(0,P.sY)(n),(0,R.NX)(r,s,n),M.M[17](r+16,this.currentPts),M.M[17](r+8,this.currentPts),M.M[17](r+56,t.ioReader.getPos()),e.next=9,t.ioReader.readBuffer(n,(0,v.JW)(s,n));case 9:return M.M[15](r+32,a.index),M.M[15](r+76,a.timeBase.den),M.M[15](r+72,a.timeBase.num),this.currentPts+=BigInt(1024),e.abrupt("return",0);case 16:if(e.prev=16,e.t0=e.catch(1),-1048576===t.ioReader.error){e.next=21;break}return b.z3("read packet error, ".concat(e.t0),y,191),e.abrupt("return",k.LR);case 21:return e.abrupt("return",t.ioReader.error);case 22:case"end":return e.stop()}}),e,this,[[1,16]])}))),function(e,t){return a.apply(this,arguments)})},{key:"seek",value:(r=(0,s.A)(x().mark((function e(t,r,a,n){var s,c,u;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.ioReader.getPos(),!(2&n)){e.next=14;break}return e.next=4,t.ioReader.fileSize();case 4:if(!((c=e.sent)<=BigInt(0))){e.next=7;break}return e.abrupt("return",BigInt(k.E$));case 7:return a<BigInt(0)?a=BigInt(0):a>c&&(a=c),e.next=10,t.ioReader.seek(a);case 10:return 4&n||(this.currentPts=(a-this.pcmStartPos<<BigInt(3))/BigInt(r.codecpar.chLayout.nbChannels*(0,S.MZ)(r.codecpar.codecId))),e.abrupt("return",s);case 14:return u=this.pcmStartPos+(a*BigInt(r.codecpar.chLayout.nbChannels*(0,S.MZ)(r.codecpar.codecId))>>BigInt(3)),e.next=17,t.ioReader.seek(u);case 17:return this.currentPts=a,e.abrupt("return",s);case 19:case"end":return e.stop()}}),e,this)}))),function(e,t,a,n){return r.apply(this,arguments)})},{key:"getAnalyzeStreamsCount",value:function(){return 1}}]),t}(l.A)},35531:(e,t,r)=>{"use strict";r.d(t,{y:()=>M});var a=r(25182),n=r(36443),s=r.n(n),c=r(63939),u=r(50932),i=r(4624),A=r(9705),o=r(53260),f=r(95644),d=r(37837),p=r(14686),x=r(39381),h="src/avformat/formats/riff/iriff.ts";function M(e,t,r){return b.apply(this,arguments)}function b(){return(b=(0,a.A)(s().mark((function e(t,r,a){var n,M,b,k,l,m,v,P;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a<14)){e.next=3;break}return i.z3("wav format size < 14",h,36),e.abrupt("return",A.LR);case 3:return u.M[15](r,1),e.next=6,t.readUint16();case 6:return n=e.sent,e.next=9,t.readUint16();case 9:return M=e.sent,e.next=12,t.readUint32();case 12:return b=e.sent,e.next=15,t.readUint32();case 15:return e.t0=e.sent,k=8*e.t0,e.next=19,t.readUint16();case 19:if(l=e.sent,u.M[15](r+136,b),u.M[15](r+140,l),14!==a){e.next=26;break}u.M[15](r+40,8),e.next=32;break;case 26:return e.t1=u.M,e.t2=r+40,e.next=30,t.readUint16();case 30:e.t3=e.sent,e.t1[15].call(e.t1,e.t2,e.t3);case 32:if(65534===n?u.M[8](r+8,0):(u.M[8](r+8,n),u.M[15](r+4,(s=n,R=c.f[15](r+40),I=void 0,(I=o.g[s])?(65541===I?I=(0,f.uU)(R,!1,!1,-2):65557===I&&(I=(0,f.uU)(R,!0,!1,0)),69633===I&&8===R&&(I=69676),I):0))),!(a>=18&&357!==n)){e.next=55;break}return e.next=36,t.readUint16();case 36:if(m=e.sent,a-=18,!((m=Math.min(a,m))>=22&&65534===n)){e.next=44;break}return e.next=42,t.skip(22);case 42:m-=22,a-=22;case 44:if(!(m>0)){e.next=50;break}return u.M[20](r+12,(0,d.sY)(m)),u.M[15](r+16,m),e.next=49,t.readBuffer(m,(0,p.JW)(c.f[20](r+12),m));case 49:a-=m;case 50:if(!(a>0)){e.next=53;break}return e.next=53,t.skip(a);case 53:e.next=68;break;case 55:if(!(357===n&&a>=32)){e.next=68;break}return a-=4,u.M[20](r+12,(0,d.sY)(a)),u.M[15](r+16,a),e.next=61,t.readBuffer(a,(0,p.JW)(c.f[20](r+12),a));case 61:if(v=x.E3(c.f[20](r+12)+4),u.M[15](r+136,x.Y0(c.f[20](r+12)+12)),M=0,k=0,!(a<8+20*v)){e.next=67;break}return e.abrupt("return",A.LR);case 67:for(P=0;P<v;P++)M+=c.f[2](c.f[20](r+12)+(8+20*P+17));case 68:if(u.M[17](r+32,BigInt(k)),!(c.f[15](r+136)<0)){e.next=72;break}return i.z3("Invalid sample rate: ".concat(c.f[15](r+136)),h,116),e.abrupt("return",A.LR);case 72:return 86065===c.f[15](r+4)&&(M=0,u.M[15](r+136,0)),69643==c.f[15](r+4)&&c.f[15](r+136)&&u.M[15](r+40,Number(BigInt.asIntN(32,c.f[17](r+32)))/c.f[15](r+136)),M!=c.f[15](r+116)&&(u.M[15](r+112,0),u.M[15](r+116,M)),e.abrupt("return",0);case 76:case"end":return e.stop()}var s,R,I}),e)})))).apply(this,arguments)}},53260:(e,t,r)=>{"use strict";r.d(t,{g:()=>c,n:()=>u});var a,n=r(134),s=r(79682),c={1:65541,2:69638,3:65557,6:65543,7:65542,10:86052,16:69664,17:69633,23:69664,32:69646,34:86037,49:86046,50:86046,56:73728,66:86068,69:69643,20:69643,64:69643,97:69635,98:69634,100:69643,105:69633,117:86079,131:86069,255:86018,273:86068,5632:86018,5634:86065,8192:86019},u=(a={},(0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)(a,(0,s.A)("H264"),27),(0,s.A)("h264"),27),(0,s.A)("X264"),27),(0,s.A)("x264"),27),(0,s.A)("avc1"),27),(0,s.A)("DAVC"),27),(0,s.A)("SMV2"),27),(0,s.A)("VSSH"),27),(0,s.A)("Q264"),27),(0,s.A)("V264"),27),(0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)(a,(0,s.A)("GAVC"),27),(0,s.A)("UMSV"),27),(0,s.A)("tshd"),27),(0,s.A)("INMC"),27),(0,s.A)("FMP4"),12),(0,s.A)("DIVX"),12),(0,s.A)("DX50"),12),(0,s.A)("XVID"),12),(0,s.A)("MP4S"),12),(0,s.A)("M4S2"),12),(0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)(a,(0,s.A)("DIVX"),12),4,12),(0,s.A)("ZMP4"),12),(0,s.A)("DIV1"),12),(0,s.A)("BLZ0"),12),(0,s.A)("mp4v"),12),(0,s.A)("UMP4"),12),(0,s.A)("WV1F"),12),(0,s.A)("SEDG"),12),(0,s.A)("RMP4"),12),(0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)(a,(0,s.A)("3IV2"),12),(0,s.A)("WAWV"),12),(0,s.A)("FFDS"),12),(0,s.A)("FVFW"),12),(0,s.A)("DCOD"),12),(0,s.A)("MVXM"),12),(0,s.A)("PM4V"),12),(0,s.A)("SMP4"),12),(0,s.A)("DXGM"),12),(0,s.A)("VIDM"),12),(0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)(a,(0,s.A)("M4T3"),12),(0,s.A)("GEOX"),12),(0,s.A)("G264"),12),(0,s.A)("HDX4"),12),(0,s.A)("DM4V"),12),(0,s.A)("DMK2"),12),(0,s.A)("DYM4"),12),(0,s.A)("DIGI"),12),(0,s.A)("EPHV"),12),(0,s.A)("EM4A"),12),(0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)(a,(0,s.A)("M4CC"),12),(0,s.A)("SN40"),12),(0,s.A)("VSPX"),12),(0,s.A)("ULDX"),12),(0,s.A)("GEOV"),12),(0,s.A)("SIPP"),12),(0,s.A)("SM4V"),12),(0,s.A)("XVIX"),12),(0,s.A)("DreX"),12),(0,s.A)("QMP4"),12),(0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)(a,(0,s.A)("PLV1"),12),(0,s.A)("GLV4"),12),(0,s.A)("GMP4"),12),(0,s.A)("MNM4"),12),(0,s.A)("GTM4"),12),(0,s.A)("MPG4"),14),(0,s.A)("MP41"),14),(0,s.A)("MP42"),15),(0,s.A)("DIV2"),15),(0,s.A)("MP43"),16),(0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)(a,(0,s.A)("DIV3"),16),(0,s.A)("MPG3"),16),(0,s.A)("DIV5"),16),(0,s.A)("DIV6"),16),(0,s.A)("DIV4"),16),(0,s.A)("DVX3"),16),(0,s.A)("AP41"),16),(0,s.A)("COL1"),16),(0,s.A)("COL0"),16),(0,s.A)("VP80"),139),(0,n.A)(a,(0,s.A)("VP90"),167))},79682:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var a=r(4624),n="src/avformat/function/mktagle.ts";function s(e){4!==e.length&&a.R8("tag length is not 4, tag: ".concat(e),n,30);for(var t=0,r=3;r>=0;r--)t=t<<8|e.charCodeAt(r);return t}},39381:(e,t,r)=>{"use strict";r.d(t,{E3:()=>s,Sg:()=>A,Y0:()=>i,ht:()=>u,r8:()=>n,yd:()=>c});var a=r(63939);function n(e){return a.f[2](e)}function s(e){return n(e+1)<<8|n(e)}function c(e){return n(e)<<8|n(e+1)}function u(e){return n(e)<<16|n(e+1)<<8|n(e+2)}function i(e){return s(e+2)<<16|s(e)}function A(e){return c(e)<<16|c(e+2)}},95644:(e,t,r)=>{"use strict";function a(e,t,r,a){if(e<=0||e>64)return 0;if(t)switch(e){case 32:return r?65556:65557;case 64:return r?65558:65559;default:return 0}else if(e+=7,a&1<<(e>>>=3)-1)switch(e){case 1:return 65540;case 2:return r?65537:65536;case 3:return r?65549:65548;case 4:return r?65545:65544;case 8:return r?65568:65567;default:return 0}else switch(e){case 1:return 65541;case 2:return r?65539:65538;case 3:return r?65551:65550;case 4:return r?65547:65546;default:return 0}}function n(e){switch(e){case 69649:return 2;case 69648:return 3;case 69647:case 69633:case 69632:case 69645:case 69638:return 4;default:return function(e){switch(e){case 86070:case 86071:case 69674:case 69644:case 69678:case 69651:case 69661:case 69677:case 69655:case 69664:case 69636:case 69675:case 69660:case 69646:case 69670:return 4;case 86089:case 86090:case 86091:case 86092:case 65543:case 65542:case 65571:case 65540:case 65563:case 65572:case 65541:case 81924:case 81926:return 8;case 65537:case 65566:case 65536:case 65554:case 65539:case 65538:return 16;case 65552:case 65549:case 65548:case 65564:case 65551:case 65550:return 24;case 65545:case 65544:case 65565:case 65547:case 65546:case 65556:case 65557:case 65570:case 65569:return 32;case 65558:case 65559:case 65568:case 65567:return 64;default:return 0}}(e)}}r.d(t,{MZ:()=>n,uU:()=>a})},803:(e,t,r)=>{var a=r(16560),n=r(54220);function s(t){return e.exports=s="function"==typeof a&&"symbol"==typeof n?function(e){return typeof e}:function(e){return e&&"function"==typeof a&&e.constructor===a&&e!==a.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,s(t)}e.exports=s,e.exports.__esModule=!0,e.exports.default=e.exports}}]);