"use strict";(self.webpackChunkAVTranscoder=self.webpackChunkAVTranscoder||[]).push([[855],{64436:(e,t,a)=>{a.d(t,{A:()=>c});var s=a(134),r=a(63939),i=a(37837),n=a(71766);class c{constructor(){(0,s.A)(this,"inCodecpar",void 0),(0,s.A)(this,"inTimeBase",void 0),(0,s.A)(this,"outCodecpar",void 0)}init(e,t){return this.inCodecpar=(0,i.Gy)(168),(0,n.Yi)(this.inCodecpar,e),this.inTimeBase={den:r.f[15](t+4),num:r.f[15](t)},0}destroy(){this.inCodecpar&&((0,n.dn)(this.inCodecpar),this.inCodecpar=0)}}},50848:(e,t,a)=>{a.d(t,{A:()=>b});var s=a(134),r=a(63939),i=a(50932),n=a(77162),c=a(29170),o=a(64436),d=a(14686),h=a(4624),f=a(9705),l=a(77231),p=a(58469),u=a(44328),m=a(37837),g=a(71517),x=a(67672);class b extends o.A{constructor(...e){super(...e),(0,s.A)(this,"streamMuxConfig",void 0),(0,s.A)(this,"caches",void 0)}init(e,t){return super.init(e,t),this.caches=[],this.streamMuxConfig={profile:l.N_,sampleRate:l.N_,channels:l.N_},0}sendAVPacket(e){let t=0,a=r.f[17](e+16)||r.f[17](e+8);const s=(0,d.s3)(r.f[20](e+24),r.f[15](e+28)).slice();for(;t<s.length;){const e=p.Bq(s.subarray(t));if(x.ai(e))return h.z3("AACADTSParser parse failed","src/avformat/bsf/aac/ADTS2RawFilter.ts",81),f.LR;const o={dts:a,buffer:null,extradata:null,duration:l.N_};o.buffer=s.subarray(t+e.headerLength,t+e.headerLength+e.framePayloadLength),this.streamMuxConfig.profile=e.profile,this.streamMuxConfig.sampleRate=e.sampleRate,this.streamMuxConfig.channels=e.channels;const g=r.f[15](this.inCodecpar+48)!==this.streamMuxConfig.profile||r.f[15](this.inCodecpar+136)!==this.streamMuxConfig.sampleRate||r.f[15](this.inCodecpar+116)!==this.streamMuxConfig.channels,b=(0,u.k)(BigInt(Math.floor(1024*(e.numberOfRawDataBlocksInFrame+1)/this.streamMuxConfig.sampleRate*l.SF)),l.KR,this.inTimeBase);if(o.duration=Number(b),g){i.M[15](this.inCodecpar+48,this.streamMuxConfig.profile),i.M[15](this.inCodecpar+136,this.streamMuxConfig.sampleRate),i.M[15](this.inCodecpar+116,this.streamMuxConfig.channels);const e=(0,p.Ij)((0,c.A)(this.inCodecpar,n.A));r.f[20](this.inCodecpar+12)&&(0,m.Eb)(r.f[20](this.inCodecpar+12)),i.M[20](this.inCodecpar+12,(0,m.sY)(e.length)),(0,d.lW)(r.f[20](this.inCodecpar+12),e.length,e),i.M[15](this.inCodecpar+16,e.length),o.extradata=e}this.caches.push(o),t+=e.aacFrameLength,a+=b}return 0}receiveAVPacket(e){if(this.caches.length){(0,g.Up)(e);const t=this.caches.shift(),a=(0,m.sY)(t.buffer.length);if((0,d.lW)(a,t.buffer.length,t.buffer),(0,g.NX)(e,a,t.buffer.length),i.M[17](e+16,t.dts),i.M[17](e+8,t.dts),i.M[17](e+48,BigInt(Math.floor(t.duration))),i.M[15](e+36,1|r.f[15](e+36)),t.extradata){const a=(0,m.sY)(t.extradata.length);(0,d.lW)(a,t.extradata.length,t.extradata),(0,g.Ow)(e,1,a,t.extradata.length)}return 0}return f.LT}reset(){return 0}}},51113:(e,t,a)=>{a.d(t,{A:()=>x});var s=a(134),r=a(63939),i=a(50932),n=a(64436),c=a(14686),o=a(4624),d=a(9705),h=a(77231),f=a(44328),l=a(37837),p=a(71517),u=a(87771),m=a(92647),g=a(67672);class x extends n.A{constructor(...e){super(...e),(0,s.A)(this,"caches",void 0),(0,s.A)(this,"cache",void 0),(0,s.A)(this,"lastDts",void 0)}init(e,t){return super.init(e,t),this.caches=[],0}sendAVPacket(e){let t=0,a=this.lastDts||r.f[17](e+16)||r.f[17](e+8),s=(0,c.s3)(r.f[20](e+24),r.f[15](e+28)).slice(),i=!1,n=!!this.cache;for(n&&(s=(0,m.A)(Uint8Array,[this.cache,s]),this.cache=null);t<s.length;){if(t>s.length-10)return this.cache=s.subarray(t),this.lastDts=a,0;const c=u.R(s.subarray(t));if(g.ai(c))return o.z3("parse ac3 header failed","src/avformat/bsf/ac3/Ac32RawFilter.ts",84),d.LR;const l={dts:a,buffer:null,duration:h.N_};let p=c.frameSize;if(l.buffer=s.subarray(t,t+p),t+p>s.length)return this.cache=s.subarray(t),this.lastDts=a,0;const m=(0,f.k)(BigInt(1536/c.sampleRate*h.SF),h.KR,this.inTimeBase);l.duration=Number(m),this.caches.push(l),t+=p,a+=m,!i&&n&&(i=!0,a=r.f[17](e+16)||r.f[17](e+8))}return this.lastDts=BigInt(0),0}receiveAVPacket(e){if(this.caches.length){(0,p.Up)(e);const t=this.caches.shift(),a=(0,l.sY)(t.buffer.length);return(0,c.lW)(a,t.buffer.length,t.buffer),(0,p.NX)(e,a,t.buffer.length),i.M[17](e+16,t.dts),i.M[17](e+8,t.dts),i.M[17](e+48,BigInt(Math.floor(t.duration))),i.M[15](e+36,1|r.f[15](e+36)),0}return d.LT}reset(){return this.cache=null,this.lastDts=BigInt(0),0}}},7309:(e,t,a)=>{a.d(t,{A:()=>x});var s=a(134),r=a(63939),i=a(50932),n=a(64436),c=a(14686),o=a(4624),d=a(9705),h=a(77231),f=a(44328),l=a(37837),p=a(71517),u=a(29347),m=a(92647),g=a(67672);class x extends n.A{constructor(...e){super(...e),(0,s.A)(this,"caches",void 0),(0,s.A)(this,"cache",void 0),(0,s.A)(this,"lastDts",void 0)}init(e,t){return super.init(e,t),this.caches=[],0}sendAVPacket(e){let t=0,a=this.lastDts||r.f[17](e+16)||r.f[17](e+8),s=(0,c.s3)(r.f[20](e+24),r.f[15](e+28)).slice(),i=!1,n=!!this.cache;for(n&&(s=(0,m.A)(Uint8Array,[this.cache,s]),this.cache=null);t<s.length;){if(t>s.length-6)return this.cache=s.subarray(t),this.lastDts=a,0;const c=u.R(s.subarray(t));if(g.ai(c))return o.z3("parse dts header failed","src/avformat/bsf/dts/Dts2RawFilter.ts",84),d.LR;const l={dts:a,buffer:null,duration:h.N_};let p=c.frameSize;if(l.buffer=s.subarray(t,t+p),t+p>s.length)return this.cache=s.subarray(t),this.lastDts=a,0;const m=(0,f.k)(BigInt(Math.floor(c.sampleBlock*u.u/c.sampleRate*h.SF)),h.KR,this.inTimeBase);l.duration=Number(m),this.caches.push(l),t+=p,a+=m,!i&&n&&(i=!0,a=r.f[17](e+16)||r.f[17](e+8))}return this.lastDts=BigInt(0),0}receiveAVPacket(e){if(this.caches.length){(0,p.Up)(e);const t=this.caches.shift(),a=(0,l.sY)(t.buffer.length);return(0,c.lW)(a,t.buffer.length,t.buffer),(0,p.NX)(e,a,t.buffer.length),i.M[17](e+16,t.dts),i.M[17](e+8,t.dts),i.M[17](e+48,BigInt(Math.floor(t.duration))),i.M[15](e+36,1|r.f[15](e+36)),0}return d.LT}reset(){return this.cache=null,this.lastDts=BigInt(0),0}}},56397:(e,t,a)=>{a.d(t,{A:()=>x});var s=a(134),r=a(63939),i=a(50932),n=a(64436),c=a(14686),o=a(4624),d=a(9705),h=a(77231),f=a(44328),l=a(37837),p=a(71517),u=a(75294),m=a(89088),g=a(92647);class x extends n.A{constructor(...e){super(...e),(0,s.A)(this,"frameHeader",void 0),(0,s.A)(this,"caches",void 0),(0,s.A)(this,"cache",void 0),(0,s.A)(this,"lastDts",void 0)}init(e,t){return super.init(e,t),this.caches=[],this.frameHeader=new u.Vz,0}sendAVPacket(e){let t=0,a=this.lastDts||r.f[17](e+16)||r.f[17](e+8),s=(0,c.s3)(r.f[20](e+24),r.f[15](e+28)).slice(),i=!1,n=!!this.cache;for(n&&(s=(0,g.A)(Uint8Array,[this.cache,s]),this.cache=null);t<s.length;){const c=s[t]<<4|s[t+1]>>4&14;if(4094!==c)return o.z3(`found syncWord not 0xFFE, got: 0x${c.toString(16)}`,"src/avformat/bsf/mp3/Mp32RawFilter.ts",82),d.LR;const l=s[1]>>>3&3,p=(12&s[2])>>>2,g={dts:a,buffer:null,extradata:null,duration:h.N_},x=m.Y2(l,p);u.qg(this.frameHeader,s[t]<<24|s[t+1]<<16|s[t+2]<<8|s[t+3]);let b=u.CM(this.frameHeader,x);if(g.buffer=s.subarray(t,t+b),t+b>s.length){this.cache=s.subarray(t),this.lastDts=a;break}const y=(0,f.k)(BigInt(Math.floor(b/x*h.SF)),h.KR,this.inTimeBase);g.duration=Number(y),this.caches.push(g),t+=b,a+=y,!i&&n&&(i=!0,a=r.f[17](e+16)||r.f[17](e+8))}return this.lastDts=BigInt(0),0}receiveAVPacket(e){if(this.caches.length){(0,p.Up)(e);const t=this.caches.shift(),a=(0,l.sY)(t.buffer.length);return(0,c.lW)(a,t.buffer.length,t.buffer),(0,p.NX)(e,a,t.buffer.length),i.M[17](e+16,t.dts),i.M[17](e+8,t.dts),i.M[17](e+48,BigInt(Math.floor(t.duration))),i.M[15](e+36,1|r.f[15](e+36)),0}return d.LT}reset(){return this.cache=null,this.lastDts=BigInt(0),0}}},58469:(e,t,a)=>{a.d(t,{Bq:()=>l,Hm:()=>n,Ij:()=>f,XC:()=>h,_5:()=>d,f7:()=>p,uF:()=>i});var s=a(77231),r=a(37246);const i={1:"Main",2:"LC",3:"LC",4:"LC",5:"HE",6:"HE"},n={96e3:0,88200:1,64e3:2,48e3:3,44100:4,32e3:5,24e3:6,22050:7,16e3:8,12e3:9,11025:10,8e3:11,7350:12},c=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350,s.N_,s.N_,s.N_],o=[s.N_,1,2,3,4,5,6,7];function d(e){let t=s.N_,a=s.N_,r=s.N_;var i,n;return e.length>=2&&(t=e[0]>>3&31,a=null!==(i=c[(7&e[0])<<1|e[1]>>7])&&void 0!==i?i:48e3,r=null!==(n=o[e[1]>>3&15])&&void 0!==n?n:2),{profile:t,sampleRate:a,channels:r}}function h(e,t){if(!t&&e.sideData[1]&&(t=e.sideData[1]),t){const{profile:a,sampleRate:s,channels:r}=d(t);e.codecpar.profile=a,e.codecpar.sampleRate=s,e.codecpar.chLayout.nbChannels=r}}function f(e){const t=n[e.sampleRate],a=e.chLayout.nbChannels,r=e.profile===s.N_?2:e.profile,i=new Uint8Array(2);return i[0]=(31&r)<<3|(14&t)>>1,i[1]=(1&t)<<7|(15&a)<<3,i}function l(e){if(e.length<7)return-1;const t=e[0]<<4|e[1]>>4;if(4095!==t)return-1;const a=1&e[1],s=(192&e[2])>>>6,r=(60&e[2])>>>2,i=(1&e[2])<<2|(192&e[3])>>>6,n=(3&e[3])<<11|e[4]<<3|(224&e[5])>>>5,d=3&e[6];let h=1===a?7:9,f=n-h;return{syncWord:t,profile:s+1,sampleRate:c[r],channels:o[i],aacFrameLength:n,numberOfRawDataBlocksInFrame:d,headerLength:h,framePayloadLength:f}}function p(e,t){function a(){const e=t.readU(2);let a=0;for(let s=0;s<=e;s++)a<<=8,a|=t.readU(8);return a}t||(t=new r.A).appendBuffer(e);const s=t.getPointer(),i={syncWord:0,profile:0,sampleRate:0,channels:0,useSameStreamMux:!1,headerLength:0,framePayloadLength:0,muxLengthBytes:0},n=t.readU(11);if(695!==n)return-1;i.syncWord=n,i.muxLengthBytes=t.readU(13);const d=1===t.readU1();if(i.useSameStreamMux=d,!d){const e=1===t.readU1();if(e&&1===t.readU1())return-1;if(e&&a(),1!==t.readU1())return-1;if(0!==t.readU(6))return-1;if(0!==t.readU(4))return-1;if(0!==t.readU(3))return-1;let s=e?a():0;const r=t.readU(5);s-=5;const n=t.readU(4);s-=4;const d=t.readU(4);if(s-=4,t.readU(3),s-=3,s>0&&t.readU(s),0!==t.readU(3))return-1;if(t.readU(8),1===t.readU1())if(e)a();else{let e=0;for(;;){e<<=8;const a=1===t.readU1();if(e+=t.readU(8),!a)break}}1===t.readU1()&&t.readU(8),i.profile=r+1,i.sampleRate=c[n],i.channels=o[d]}let h=0;for(;;){const e=t.readU(8);if(h+=e,255!==e)break}return i.framePayloadLength=h,i.headerLength=t.getPointer()-s+(8===t.getBitLeft()?0:1),i}},87771:(e,t,a)=>{a.d(t,{R:()=>p,j:()=>r});var s=a(37246);const r=[3,4,3,7,259,263,1539,1543],i=[[64,69,96],[64,70,96],[80,87,120],[80,88,120],[96,104,144],[96,105,144],[112,121,168],[112,122,168],[128,139,192],[128,140,192],[160,174,240],[160,175,240],[192,208,288],[192,209,288],[224,243,336],[224,244,336],[256,278,384],[256,279,384],[320,348,480],[320,349,480],[384,417,576],[384,418,576],[448,487,672],[448,488,672],[512,557,768],[512,558,768],[640,696,960],[640,697,960],[768,835,1152],[768,836,1152],[896,975,1344],[896,976,1344],[1024,1114,1536],[1024,1115,1536],[1152,1253,1728],[1152,1254,1728],[1280,1393,1920],[1280,1394,1920]],n=[4,5,6,5],c=[4,6,7,6],o=[48e3,44100,32e3,0],d=[32,40,48,56,64,80,96,112,128,160,192,224,256,320,384,448,512,576,640],h=[2,1,2,3,3,4,4,5],f=[1,2,3,6],l=7;function p(e){const t=new s.A(e.length);t.appendBuffer(e);const a={syncWord:0,crc1:0,srCode:0,bitstreamId:0,bitstreamMode:0,channelMode:0,lfeOn:0,frameType:0,substreamId:0,centerMixLevel:0,surroundMixLevel:0,channelMap:0,numBlocks:0,dolbySurroundMode:0,srShift:0,sampleRate:0,bitrate:0,channels:0,frameSize:0,channelLayout:BigInt(0),ac3BitrateCode:0};if(a.syncWord=t.readU(16),2935!==a.syncWord)return-1;if(a.bitstreamId=31&t.peekU(29),a.bitstreamId>16)return-2;if(a.numBlocks=6,a.ac3BitrateCode=-1,a.centerMixLevel=5,a.surroundMixLevel=6,a.dolbySurroundMode=0,a.bitstreamId<=10){if(a.crc1=t.readU(16),a.srCode=t.readU(2),3===a.srCode)return-3;const e=t.readU(6);if(e>37)return-4;a.ac3BitrateCode=e>>1,t.readU(5),a.bitstreamMode=t.readU(3),a.channelMode=t.readU(3),2==a.channelMode?a.dolbySurroundMode=t.readU(2):(1&a.channelMode&&1!=a.channelMode&&(a.centerMixLevel=n[t.readU(2)]),4&a.channelMode&&(a.surroundMixLevel=c[t.readU(2)])),a.lfeOn=t.readU(1),a.srShift=Math.max(a.bitstreamId,8)-8,a.sampleRate=o[a.srCode]>>a.srShift,a.bitrate=1e3*d[a.ac3BitrateCode]>>a.srShift,a.channels=h[a.channelMode]+a.lfeOn,a.frameSize=2*i[e][a.srCode],a.frameType=2,a.substreamId=0}else{if(a.crc1=0,a.frameType=t.readU(2),3==a.frameType)return-5;if(a.substreamId=t.readU(3),a.frameSize=t.readU(11)+1<<1,a.frameSize<l)return-6;if(a.srCode=t.readU(2),3==a.srCode){const e=t.readU(2);if(3==e)return-7;a.sampleRate=o[e]/2,a.srShift=1}else a.numBlocks=f[t.readU(2)],a.sampleRate=o[a.srCode],a.srShift=0;a.channelMode=t.readU(3),a.lfeOn=t.readU(1),a.bitrate=8*a.frameSize*a.sampleRate/(256*a.numBlocks),a.channels=h[a.channelMode]+a.lfeOn}return a.channelLayout=BigInt(r[a.channelMode]),a.lfeOn&&(a.channelLayout|=BigInt(8)),a}},29347:(e,t,a)=>{a.d(t,{R:()=>d,u:()=>o});var s=a(37246),r=a(95073);const i=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],n=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],c=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],o=32;function d(e){const t=new s.A(e.length);t.appendBuffer(e);const a={syncWord:0,frameType:0,deficitSamples:0,crcFlag:0,sampleBlock:0,frameSize:0,channelIndex:0,sampleRateIndex:0,bitrateIndex:0,channels:0,sampleRate:0,bitrate:0};return a.syncWord=t.readU(32),2147385345!==a.syncWord&&4269736320!==a.syncWord?-1:(a.frameType=t.readU1(),a.deficitSamples=t.readU(5)+1,a.crcFlag=t.readU1(),a.sampleBlock=t.readU(7)+1,a.frameSize=(0,r.A)(t.readU(14)+1,4),a.channelIndex=t.readU(6),a.sampleRateIndex=t.readU(4),a.bitrateIndex=t.readU(5),a.channels=i[a.channelIndex],a.sampleRate=n[a.sampleRateIndex],a.bitrate=c[a.bitrateIndex],a)}},89088:(e,t,a)=>{a.d(t,{Au:()=>b,He:()=>y,XC:()=>A,Y2:()=>m,hG:()=>g,oz:()=>x});var s=a(77231);const r=[44100,48e3,32e3,0],i=[22050,24e3,16e3,0],n=[11025,12e3,8e3,0],c=[0,1152,1152,384],o=[0,576,1152,384],d=[0,576,1152,384],h=[0,32,64,96,128,160,192,224,256,288,320,352,384,416,448,-1],f=[0,32,48,56,64,80,96,112,128,160,192,224,256,320,384,-1],l=[0,32,40,48,56,64,80,96,112,128,160,192,224,256,320,-1],p=[0,32,48,56,64,80,96,112,128,144,160,176,192,224,256,-1],u=[0,8,16,24,32,40,48,56,64,80,96,112,128,144,160,-1];function m(e,t){switch(e){case 0:return n[t];case 2:return i[t];case 3:return r[t]}return s.N_}function g(e,t){switch(e){case 0:return d[t];case 2:return o[t];case 3:return c[t]}return s.N_}function x(e,t,a){switch(t){case 1:switch(e){case 0:case 2:return u[a];case 3:return l[a]}break;case 2:switch(e){case 0:case 2:return u[a];case 3:return f[a]}case 3:switch(e){case 0:case 2:return p[a];case 3:return h[a]}}return s.N_}function b(e){switch(e){case 1:return 34;case 2:return 33;case 3:return 32}return s.N_}const y={32:"Layer1",33:"Layer2",34:"Layer3"};function A(e,t){if(t&&t.length>=4){const a=t[1]>>>3&3,s=(6&t[1])>>1,r=(12&t[2])>>>2,i=3&~(t[3]>>>6)?2:1,n=b(s),c=m(a,r);e.codecpar.profile=n,e.codecpar.sampleRate=c,e.codecpar.chLayout.nbChannels=i}}},25906:(e,t,a)=>{a.d(t,{K:()=>r});var s=a(71517);function r(e){const t=(0,s.iI)(e);for(let e=0;e<t.length-6;e++)if(0===t[e]&&0===t[e+1]&&1===t[e+2]&&0===t[e+3])return 1==(t[e+5]>>3&7);return!1}},65451:(e,t,a)=>{a.d(t,{Ij:()=>d,XC:()=>o,kt:()=>c});var s=a(31865),r=a(729),i=a(44328);const n=[480,960,1920,2880,480,960,1920,2880,480,960,1920,2880,480,960,480,960,120,240,480,960,120,240,480,960,120,240,480,960,120,240,480,960];function c(e){let t=0,a=0,s=0;if(e.length<1)return 0;switch(t=e[0],a=n[t>>3],3&t){case 0:s=1;break;case 1:case 2:s=2;break;case 3:if(e.length<2)return 0;s=63&e[1]}return s*a}function o(e,t){if(!t&&e.sideData[1]&&(t=e.sideData[1]),t&&t.length>=19){const a=new s.A(t,!1);a.skip(9),e.codecpar.chLayout.nbChannels=a.readUint8(),e.codecpar.initialPadding=a.readUint16(),e.codecpar.sampleRate=a.readUint32(),e.codecpar.seekPreroll=Number((0,i.k)(BigInt(80),{den:1e3,num:1},{den:48e3,num:1}))}}function d(e){const t=new Uint8Array(19),a=new r.A(t,!1);return a.writeString("OpusHead"),a.writeUint8(1),a.writeUint8(e.chLayout.nbChannels),a.writeUint16(e.initialPadding),a.writeUint32(e.sampleRate),t}},85947:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(134);class r{constructor(){(0,s.A)(this,"type",-1),(0,s.A)(this,"onStreamAdd",void 0)}async destroy(e){}}},83855:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var s=a(134),r=a(80662),i=a.n(r),n=a(61499),c=a(63939),o=a(50932),d=a(4624),h=a(9705),f=a(51660),l=a(6403),p=a(85947),u=a(71517),m=a(77231),g=a(52071),x=a(44328),b=a(72739),y=a(95335),A=a(89088),I=a(20620),k=a(53e3),M=a(55611),R=a(58469),S=a(65451),v=a(87771),B=a(29347),w=a(25906),U=a(37837),P=a(14686),C=a(10662),D=a(92647),L=a(60264),E=a(56397),z=a(75294),N=a(67672),_=a(51113),T=a(7309),F=a(50848),V="src/avformat/formats/IMpegpsFormat.ts";class W extends p.A{constructor(){super(),(0,s.A)(this,"type",3),(0,s.A)(this,"context",void 0),(0,s.A)(this,"cacheAVPacket",void 0),this.context={headerState:255,psmType:new(i()),pes:new l.xf,slices:new(i()),lastPtsMap:new(i()),imkhCctv:!1,sofdec:!1,ioEnded:!1,paddingPES:null}}init(e){e.ioReader&&e.ioReader.setEndian(!0),this.cacheAVPacket=0}async destroy(e){this.cacheAVPacket&&((0,u.Qe)(this.cacheAVPacket),this.cacheAVPacket=0),b.__(e.streams,(e=>{const t=e.privData;t.filter&&(t.filter.destroy(),t.filter=null)}))}async findNextStartCode(e){let t=255,a=0;for(;a<C.V;){const s=await e.ioReader.readUint8();if(1===t){t=16777215&(t<<8|s);break}t=16777215&(t<<8|s),a++}return a===C.V&&(t=-1),this.context.headerState=t,t}async parsePSM(e){const t=await e.ioReader.readUint16();await e.ioReader.skip(2);const a=await e.ioReader.readUint16();await e.ioReader.skip(a),await e.ioReader.readUint16();let s=t-a-10;for(;s>=4;){const t=await e.ioReader.readUint8(),a=await e.ioReader.readUint8(),r=await e.ioReader.readUint16();this.context.psmType.set(a,t),await e.ioReader.skip(r),s-=r+4}await e.ioReader.readUint32()}async readPES(e){for(;;){const t=await this.findNextStartCode(e);if(t<0)return h.LR;if(442===t||443===t)continue;if(446===t||447===t){const t=await e.ioReader.readUint16();await e.ioReader.skip(t);continue}if(444===t){await this.parsePSM(e);continue}if(!(t>=448&&t<=479||t>=480&&t<=495||445==t||447==t||509==t))continue;const a=await e.ioReader.readUint16();this.context.pes.pos=e.ioReader.getPos()-BigInt(6),this.context.pes.streamId=255&t,this.context.pes.streamType=this.context.psmType[this.context.pes.streamId];const s=new Uint8Array(a+6);return s[0]=0,s[1]=0,s[2]=1,s[3]=this.context.pes.streamId,s[4]=a>>8,s[5]=255&a,await e.ioReader.readBuffer(a,s.subarray(6)),this.context.pes.data=s,t}}createStream(e,t,a,s){let r=0,i=-1;switch(a){case 226:i=0,r=27;break;case 128:i=1,r=86019;break;case 136:i=1,r=86020;break;case 160:i=1,r=65537;break;case 32:i=3,r=94208;break;default:switch(t){case 1:case 2:i=0,r=2;break;case 3:case 4:i=1,r=86017;break;case 15:i=1,r=86018;break;case 16:i=0,r=12;break;case 27:i=0,r=27;break;case 36:i=0,r=173;break;case 51:i=0,r=196;break;case 129:i=1,r=86019;break;case 144:i=1,r=65543;break;case 145:i=1,r=65542;break;case 447:i=2,r=98312;break;default:if(s>=480&&s<=495)i=0,r=2;else if(s>=448&&s<=479)i=1,r=86017;else if(s>=128&&s<=135)i=1,r=86019;else if(s>=136&&s<=143||s>=152&&s<=159)i=1,r=86020;else if(s>=176&&s<=191)i=1,r=86060;else if(s>=192&&s<=207)i=1,r=86019;else if(s>=32&&s<=63)i=3,r=94208;else{if(!(s>=64853&&s<=64863))return;i=0,r=70}}}const c=e.createStream();c.codecpar.codecType=i,c.codecpar.codecId=r,c.timeBase.den=9e4,c.timeBase.num=1;const o=c.privData={streamId:a,streamType:t,filter:null,paddingPES:null};return 65543!==r&&65542!==r||(c.codecpar.chLayout.nbChannels=1,c.codecpar.sampleRate=8e3,c.codecpar.chLayout.order=1,c.codecpar.chLayout.u.mask=BigInt(4)),86017===c.codecpar.codecId?o.filter=new E.A:86019===c.codecpar.codecId?o.filter=new _.A:86020===c.codecpar.codecId?o.filter=new T.A:86018===c.codecpar.codecId&&(o.filter=new F.A),o.filter&&o.filter.init(c.codecpar[n.o9],c.timeBase[n.o9]),c}async readHeader(e){const t=await e.ioReader.peekString(6);if("IMKH"===t.substring(0,4)?(this.context.imkhCctv=!0,await e.ioReader.skip(4)):"Sofdec"===t&&(this.context.sofdec=!0,await e.ioReader.skip(6)),442!==await e.ioReader.peekUint32())return d.z3("the file format is not mpegps",V,385),h.LR;if(1&e.ioReader.flags){const t=e.ioReader.getPos(),a=BigInt(500)*BigInt(1e3);let s=await e.ioReader.fileSize()-a;s<t&&(s=t),await e.ioReader.seek(s);try{for(this.context.pes.pts=m.Dh;;)await this.readPES(e),(0,f.A)(this.context.pes),this.context.pes.pts!==m.Dh&&this.context.lastPtsMap.set(this.context.pes.streamId,this.context.pes.pts)}catch(a){await e.ioReader.seek(t)}}return this.context.ioEnded=!1,0}checkExtradata(e,t){if(86017===t.codecpar.codecId&&t.codecpar.sampleRate===m.N_){const a=(0,u.iI)(e),s=a[1]>>>3&3,r=(6&a[1])>>1,i=(12&a[2])>>>2,n=3&~(a[3]>>>6)?2:1,c=A.Au(r),o=A.Y2(s,i);t.codecpar.profile=c,t.codecpar.sampleRate=o,t.codecpar.chLayout.nbChannels=n}else if(86019===t.codecpar.codecId&&t.codecpar.sampleRate===m.N_){const a=(0,u.iI)(e),s=v.R(a);N.ai(s)||(t.codecpar.sampleRate=s.sampleRate,t.codecpar.chLayout.nbChannels=s.channels,t.codecpar.bitrate=BigInt(s.bitrate))}else if(86020===t.codecpar.codecId&&t.codecpar.sampleRate===m.N_){const a=(0,u.iI)(e),s=B.R(a);N.ai(s)||(t.codecpar.sampleRate=s.sampleRate,t.codecpar.chLayout.nbChannels=s.channels,t.codecpar.bitrate=BigInt(0|s.bitrate))}else if(!t.codecpar.extradata){let a=(0,u.rU)(e,1);a&&(t.codecpar.extradata=(0,U.sY)(c.f[15](a+4)),(0,P.Mr)(t.codecpar.extradata,c.f[20](a),c.f[15](a+4)),t.codecpar.extradataSize=c.f[15](a+4),(0,u.Is)(e,1),27===t.codecpar.codecId?I.XC(t,(0,P.JW)(t.codecpar.extradata,t.codecpar.extradataSize)):173===t.codecpar.codecId?k.XC(t,(0,P.JW)(t.codecpar.extradata,t.codecpar.extradataSize)):196===t.codecpar.codecId?M.XC(t,(0,P.JW)(t.codecpar.extradata,t.codecpar.extradataSize)):86018===t.codecpar.codecId?R.XC(t,(0,P.JW)(t.codecpar.extradata,t.codecpar.extradataSize)):86076===t.codecpar.codecId&&S.XC(t,(0,P.JW)(t.codecpar.extradata,t.codecpar.extradataSize)))}}parseSlice(e,t,a,s){const r=(0,D.A)(Uint8Array,e.buffers),i=s.privData;1===s.codecpar.codecType&&o.M[15](a+36,1|c.f[15](a+36));const n=s.codecpar.codecId;27!==n&&173!==n&&196!==n||o.M[15](a+80,2),o.M[15](a+32,s.index),o.M[17](a+16,e.dts),o.M[17](a+8,e.pts),o.M[17](a+56,e.pos),o.M[15](a+76,9e4),o.M[15](a+72,1),s.startTime===m.Dh&&(s.startTime=c.f[17](a+8)||c.f[17](a+16),this.context.lastPtsMap.has(i.streamId)&&(s.duration=this.context.lastPtsMap.get(i.streamId)-s.startTime));const f=(0,U.sY)(r.length);if((0,P.lW)(f,r.length,r),(0,u.NX)(a,f,r.length),i.filter){let e=0;if(e=i.filter.sendAVPacket(a),e<0)return d.z3("send avpacket to bsf failed",V,533),h.LR;if(e=i.filter.receiveAVPacket(a),e<0)return e;for(o.M[15](a+76,9e4),o.M[15](a+72,1),o.M[15](a+32,s.index),this.checkExtradata(a,s);;){const a=this.cacheAVPacket||(0,u._5)();if(e=i.filter.receiveAVPacket(a),0!==e){this.cacheAVPacket=a;break}o.M[15](a+76,9e4),o.M[15](a+72,1),o.M[15](a+32,s.index),this.checkExtradata(a,s),t.interval.packetBuffer.push(a),this.cacheAVPacket=0}}else 2===s.codecpar.codecId?w.K(a)&&o.M[15](a+36,1|c.f[15](a+36)):27===s.codecpar.codecId?(s.codecpar.extradata||(I.ci(a,!0),this.checkExtradata(a,s),s.codecpar.bitFormat=2),I.KD(a)&&o.M[15](a+36,1|c.f[15](a+36))):173===s.codecpar.codecId?(s.codecpar.extradata||(k.ci(a,!0),this.checkExtradata(a,s),s.codecpar.bitFormat=2),k.KD(a)&&o.M[15](a+36,1|c.f[15](a+36))):196===s.codecpar.codecId&&(s.codecpar.extradata||(M.ci(a,!0),this.checkExtradata(a,s),s.codecpar.bitFormat=2),M.KD(a)&&o.M[15](a+36,1|c.f[15](a+36)));return 0}getMpegVideoNextFrame(e,t,a){for(;;){const s=L.Ky(t,e);if(!(s.offset>=0))return-1;if(27===a.codecpar.codecId&&4===s.startCode||2===a.codecpar.codecId&&3===s.startCode&&s.offset+3<t.length&&(t[s.offset+3]<1||t[s.offset+3]>175)&&181!==t[s.offset+3])return 183===t[s.offset+3]?s.offset+4:s.offset;if(2===a.codecpar.codecId&&4===s.startCode&&s.offset+4<t.length&&(t[s.offset+4]<1||t[s.offset+4]>175)&&181!==t[s.offset+4])return 183===t[s.offset+4]?s.offset+5:s.offset+1;e=s.offset+3}}getMpegAudioNextFrame(e,t){let a=0,s=2;86019===t.codecpar.codecId?a=11:86017===t.codecpar.codecId?a=255:(a=127,s=4);for(let r=0;r<e.length-s;r++)if(e[r]===a){const a=e[r+1],s=2;if(!(86017!==t.codecpar.codecId||224&~a)){if(0!==r){let t=0,a=0;for(;;){const i=new z.Vz;z.qg(i,e[r+a]<<24|e[r+a+1]<<16|e[r+a+2]<<8|e[r+a+3]);const n=e[r+a+1]>>>3&3,c=(12&e[r+a+2])>>>2,o=A.Y2(n,c);let d=z.CM(i,o);if(!(d&&r+a+d<e.length-2&&255===e[r+a+d])||224&~e[r+a+d+1])break;if(t++,a+=d,t===s)break}if(t===s)return r;continue}break}if(86019===t.codecpar.codecId&&119===a){if(0!==r){let t=0,a=0;for(;;){const i=v.R(e.subarray(r+a));if(N.ai(i)||!(r+a+i.frameSize<e.length-2)||11!==e[r+a+i.frameSize]||119!==e[r+a+i.frameSize+1])break;if(t++,a+=i.frameSize,t===s)break}if(t===s)return r;continue}break}if(86020===t.codecpar.codecId&&254===a&&128===e[r+2]&&129===e[r+3]){if(0!==r){let t=0,a=0;for(;;){const i=B.R(e.subarray(r+a));if(N.ai(i)||!(r+a+i.frameSize<e.length-4)||127!==e[r+a+i.frameSize]||254!==e[r+a+i.frameSize+1]||128!==e[r+a+i.frameSize+2]||129!==e[r+a+i.frameSize+3])break;if(t++,a+=i.frameSize,t===s)break}if(t===s)return r;continue}break}}return-1}async readAVPacket_(e,t){const a=(a,s)=>{let r=this.context.slices.get(a.streamId);if(r||(r={pts:-BigInt(1),dts:-BigInt(1),pos:-BigInt(1),buffers:[]},this.context.slices.set(a.streamId,r)),this.context.pes.dts!==m.Dh&&r.buffers.length){let i=0;if(0===s.codecpar.codecType){let e=this.getMpegVideoNextFrame(0,this.context.pes.payload,s);if(e>0)r.buffers.push(this.context.pes.payload.subarray(0,e)),this.context.pes.payload=this.context.pes.payload.subarray(e);else if(e<0)return a.paddingPES=y.X$({},this.context.pes),!0}if(2===s.codecpar.codecId){let a=(0,D.A)(Uint8Array,r.buffers);const i=[];for(;;){let e=0,t=0,r=!1;for(;;){const i=this.getMpegVideoNextFrame(t,a,s);if(!(i>=0))break;if(r){e=i;break}0===a[i+3]&&(r=!0),t=i+3}if(!(e>0))break;i.push(a.subarray(0,e)),a=a.subarray(e)}if(i.push(a),i.length>1){const a=(this.context.pes.dts-r.dts)/BigInt(Math.floor(i.length)),n=(this.context.pes.pts-r.pts)/BigInt(Math.floor(i.length));for(let c=0;c<i.length;c++)if(r.buffers.length=0,r.buffers.push(i[c]),r.dts+=a*BigInt(Math.floor(c)),r.pts+=n*BigInt(Math.floor(c)),0===c)this.parseSlice(r,e,t,s);else{const t=(0,u._5)();this.parseSlice(r,e,t,s),e.interval.packetBuffer.push(t)}}else r.buffers=i,this.parseSlice(r,e,t,s)}else i=this.parseSlice(r,e,t,s);return r.buffers.length=0,this.context.paddingPES?this.context.paddingPES.payload=this.context.pes.payload:(r.buffers.push(this.context.pes.payload),r.dts=this.context.pes.dts,r.pts=this.context.pes.pts,r.pos=this.context.pes.pos),i===h.LT}if(this.context.pes.dts!==m.Dh)if(r.dts=this.context.pes.dts,r.pts=this.context.pes.pts,r.pos=this.context.pes.pos,0===s.codecpar.codecType){const e=this.getMpegVideoNextFrame(0,this.context.pes.payload,s);if(e>0)this.context.pes.payload=this.context.pes.payload.subarray(e);else if(e<0)return a.paddingPES=y.X$({},this.context.pes),!0}else if(86019===s.codecpar.codecId||86020===s.codecpar.codecId||86017===s.codecpar.codecId){const e=this.getMpegAudioNextFrame(this.context.pes.payload,s);e>0&&(this.context.pes.payload=this.context.pes.payload.subarray(e))}return r.buffers.push(this.context.pes.payload),!0};for(;;){let t=0;this.context.paddingPES?(this.context.pes=this.context.paddingPES,this.context.paddingPES=null):(t=await this.readPES(e),(0,f.A)(this.context.pes),445===t&&(t=this.context.pes.payload[0],11===t?119===this.context.pes.payload[1]?t=128:this.context.pes.payload=this.context.pes.payload.subarray(1):this.context.pes.payload=t>=128&&t<=207?this.context.pes.payload.subarray(4):this.context.pes.payload.subarray(1),this.context.pes.streamId=255&t));let s=e.streams.find((e=>e.privData.streamId===this.context.pes.streamId));if(!s){const a=255&t;s=this.createStream(e,this.context.psmType.get(a),a,t)}if(s){const e=s.privData;if(!this.context.pes.payload)continue;if(e.paddingPES&&(e.paddingPES.payload=(0,D.A)(Uint8Array,[e.paddingPES.payload,this.context.pes.payload]),this.context.pes.dts===m.Dh?(this.context.pes=e.paddingPES,e.paddingPES=null):(this.context.paddingPES=this.context.pes,this.context.pes=e.paddingPES,e.paddingPES=null)),a(e,s))continue;return 0}}}async readAVPacket(e,t){try{if(this.context.ioEnded){if(this.context.slices.size){let a,s;if(this.context.slices.forEach(((t,r)=>{t.buffers.length&&(s=e.streams.find((e=>e.privData.streamId===r)),s&&(a=t))})),a)return this.parseSlice(a,e,t,s),a.buffers.length=0,a.pts=a.dts=a.pos=-BigInt(1),0}return-1048576}return await this.readAVPacket_(e,t)}catch(a){return-1048576!==e.ioReader.error?(d.z3(`read packet error, ${a}`,V,1025),h.LR):(this.context.ioEnded=!0,this.readAVPacket(e,t))}}async syncPSPacket(e){let t=m.Dh;try{for(this.context.pes.pts=m.Dh;this.context.pes.pts===m.Dh;)await this.readPES(e),(0,f.A)(this.context.pes),t=this.context.pes.pos}catch(e){t=m.Dh}t!==m.Dh&&await e.ioReader.seek(t)}async seek(e,t,a,s){let r=e.ioReader.getPos();if(this.context.slices.forEach((e=>{e.buffers.length&&e.pos<r&&(r=e.pos),e.buffers.length=0,e.pts=e.dts=e.pos=-BigInt(1)})),e.streams.forEach((e=>{const t=e.privData;t.filter&&t.filter.reset()})),2&s){const t=await e.ioReader.fileSize();return t<=BigInt(0)?BigInt(h.E$):(a<BigInt(0)?a=BigInt(0):a>t&&(a=t),await e.ioReader.seek(a),4&s||await this.syncPSPacket(e),this.context.ioEnded=!1,r)}{if(t&&t.sampleIndexes.length){let s=b.El(t.sampleIndexes,(e=>e.pts>a?-1:1));if(s>0&&(0,x.k)(a-t.sampleIndexes[s-1].pts,t.timeBase,m.i0)<BigInt(1e4))return d.Yz(`seek in sampleIndexes, found index: ${s}, pts: ${t.sampleIndexes[s-1].pts}, pos: ${t.sampleIndexes[s-1].pos}`,V,1110),await e.ioReader.seek(t.sampleIndexes[s-1].pos),this.context.ioEnded=!1,r}d.Yz("not found any keyframe index, try to seek in bytes",V,1117);let s=await(0,g.A)(e,t,a,BigInt(0),this.readAVPacket.bind(this),this.syncPSPacket.bind(this));return s>=0&&(this.context.ioEnded=!1),s}}getAnalyzeStreamsCount(){return 1}}},75294:(e,t,a)=>{a.d(t,{CM:()=>c,Vz:()=>i,qg:()=>n});var s=a(134),r=a(89088);class i{constructor(){(0,s.A)(this,"version",void 0),(0,s.A)(this,"layer",void 0),(0,s.A)(this,"protection",void 0),(0,s.A)(this,"bitrateIndex",void 0),(0,s.A)(this,"samplingFrequency",void 0),(0,s.A)(this,"padding",void 0),(0,s.A)(this,"private",void 0),(0,s.A)(this,"mode",void 0),(0,s.A)(this,"modeExtension",void 0),(0,s.A)(this,"copyright",void 0),(0,s.A)(this,"original",void 0),(0,s.A)(this,"emphasis",void 0)}}function n(e,t){e.version=t>>19&3,e.layer=t>>17&3,e.protection=t>>16&1,e.bitrateIndex=t>>12&15,e.samplingFrequency=t>>10&3,e.padding=t>>9&1,e.mode=t>>6&3,e.modeExtension=t>>4&3,e.copyright=t>>3&1,e.original=t>>2&1,e.emphasis=3&t}function c(e,t){let a=r.oz(e.version,e.layer,e.bitrateIndex);switch(e.layer){case 1:default:a=144e3*a/(t<<(3===e.version?0:1))>>>0,a+=e.padding;break;case 2:a=144e3*a/t>>>0,a+=e.padding;break;case 3:a=12e3*a/t>>>0,a=4*(a+e.padding)}return a}},51660:(e,t,a)=>{a.d(t,{A:()=>c});var s=a(77231),r=a(4624),i=a(9705),n="src/avformat/formats/mpegts/function/parsePES.ts";function c(e){const t=e.data,a=t[3],c=t[4]<<8|t[5];let o=0,d=0,h=0;if(188!==a&&190!==a&&191!==a&&240!==a&&241!==a&&255!==a&&242!==a&&248!==a){let a=s.Dh,f=s.Dh;for(;;){if(6+d>=t.length)return;if(h=t[6+d],255!==h)break;d++}if(64==(192&h)&&(d+=2,h=t[6+d]),32==(224&h))o+=5,a=a=BigInt(Math.floor(536870912*(14&t[6+d])+4194304*(255&t[7+d])+16384*(254&t[8+d])+128*(255&t[9+d])+(254&t[10+d])/2)),16&h?(f=BigInt(Math.floor(536870912*(14&t[11+d])+4194304*(255&t[12+d])+16384*(254&t[13+d])+128*(255&t[14+d])+(254&t[15+d])/2)),o+=5):f=a;else if(128==(192&h)){const e=(192&t[7+d])>>>6;o=3+t[8+d],2!==e&&3!==e||(a=BigInt(Math.floor(536870912*(14&t[9+d])+4194304*(255&t[10+d])+16384*(254&t[11+d])+128*(255&t[12+d])+(254&t[13+d])/2)),f=3===e?BigInt(Math.floor(536870912*(14&t[14+d])+4194304*(255&t[15+d])+16384*(254&t[16+d])+128*(255&t[17+d])+(254&t[18+d])/2)):a)}else{if(15!==h)return r.z3("invalid data",n,121),i.LR;o=1}e.dts=f,e.pts=a;const l=6+d+o;let p=0;if(0!==c){if(c<d+o)return void r.z3("Malformed PES: PES_packet_length < 3 + PES_header_data_length",n,133);p=c-(d+o)}else p=t.byteLength-l;e.payload=t.subarray(l,l+p)}else if((188===a||191===a||240===a||241===a||255===a||242===a||248===a)&&6===e.streamId){const a=6;let s=0;s=0!==c?c:t.byteLength-a,e.payload=t.subarray(a,a+s)}return 0}},10662:(e,t,a)=>{a.d(t,{V:()=>s});const s=1e5},6403:(e,t,a)=>{a.d(t,{Cd:()=>h,I4:()=>p,am:()=>o,kJ:()=>l,pi:()=>d,xf:()=>u,yU:()=>f});var s=a(134),r=a(80662),i=a.n(r),n=a(77231);class c{constructor(){(0,s.A)(this,"discontinuityIndicator",0),(0,s.A)(this,"randomAccessIndicator",0),(0,s.A)(this,"elementaryStreamPriorityIndicator",0),(0,s.A)(this,"pcrFlag",0),(0,s.A)(this,"opcrFlag",0),(0,s.A)(this,"splicingPointFlag",0),(0,s.A)(this,"transportPrivateDataFlag",0),(0,s.A)(this,"adaptationFieldExtensionFlag",0),(0,s.A)(this,"pcr",BigInt(0)),(0,s.A)(this,"opcr",BigInt(0)),(0,s.A)(this,"spliceCountDown",0),(0,s.A)(this,"transportPrivateData",null),(0,s.A)(this,"extension",null)}}class o{constructor(){(0,s.A)(this,"pos",n.Dh),(0,s.A)(this,"payloadUnitStartIndicator",0),(0,s.A)(this,"transportPriority",0),(0,s.A)(this,"pid",n.N_),(0,s.A)(this,"adaptationFieldControl",0),(0,s.A)(this,"continuityCounter",0),(0,s.A)(this,"transportScramblingControl",0),(0,s.A)(this,"adaptationFieldInfo",new c),(0,s.A)(this,"payload",null)}}class d{constructor(){(0,s.A)(this,"slices",[]),(0,s.A)(this,"totalLength",0),(0,s.A)(this,"expectedLength",n.N_),(0,s.A)(this,"randomAccessIndicator",0),(0,s.A)(this,"pid",n.N_),(0,s.A)(this,"streamType",0),(0,s.A)(this,"pos",n.Dh)}}class h{constructor(){(0,s.A)(this,"versionNumber",0),(0,s.A)(this,"networkPid",n.N_),(0,s.A)(this,"program2PmtPid",new(i()))}}class f extends o{}class l{constructor(){(0,s.A)(this,"tag",void 0),(0,s.A)(this,"buffer",void 0)}}class p{constructor(){(0,s.A)(this,"versionNumber",0),(0,s.A)(this,"programNumber",0),(0,s.A)(this,"pcrPid",0),(0,s.A)(this,"pid2StreamType",new(i())),(0,s.A)(this,"pid2ESDescriptor",new(i()))}}class u{constructor(){(0,s.A)(this,"pid",n.N_),(0,s.A)(this,"streamType",0),(0,s.A)(this,"streamId",n.N_),(0,s.A)(this,"dts",n.Dh),(0,s.A)(this,"pts",n.Dh),(0,s.A)(this,"pos",n.Dh),(0,s.A)(this,"payload",null),(0,s.A)(this,"data",null),(0,s.A)(this,"randomAccessIndicator",0)}}},2187:(e,t,a)=>{a.d(t,{d:()=>n});var s=a(72739),r=a(44328),i=a(77231);function n(e,t,a){let n=BigInt(0);return s.__(e,(e=>{n+=e.codecpar.bitrate*(0,r.k)(t,a,i.i0)/BigInt(8e3)})),n}},52071:(e,t,a)=>{a.d(t,{A:()=>p});var s=a(63939),r=a(9599),i=a(29170),n=a(77231),c=a(44328),o=a(2187),d=a(71517),h=a(9705),f=a(4624),l="src/avformat/function/seekInBytes.ts";async function p(e,t,a,p,u,m){const g=e.ioReader.getPos(),x=await e.ioReader.fileSize();let b=n.Dh,y=a;t.startTime!==n.Dh?y-=t.startTime:y-=t.firstDTS;const A=(0,c.k)(a,t.timeBase,n.i0);if(A<BigInt(1e4))return f.Yz(`seek pts is earlier then 10s, seek to first packet pos(${p}) directly`,l,63),await e.ioReader.seek(p),g;let I=(0,o.d)(e.streams,y,t.timeBase);const k=x-(0,o.d)(e.streams,BigInt(1e4),n.i0),M=(0,o.d)(e.streams,BigInt(1e4),n.i0);if(I>k&&(I=k),I<p)return await e.ioReader.seek(p),g;const R=(0,d._5)();let S=x,v=BigInt(0);for(;;){if(S-v<M){b=v;break}await e.ioReader.seek(I),await m(e);const t=e.ioReader.getPos();if(!(await u(e,R)>=0)){b=n.Dh;break}{const e=(0,c.k)(s.f[17](R+8),(0,i.A)(R+72,r.P),n.i0),a=e-A;if(f.Yz(`try to seek to pos: ${I}, got packet pts: ${s.f[17](R+8)}(${e}ms), diff: ${a}ms`,l,98),a<=BigInt(0)&&-a<BigInt(1e4)){b=t;break}a>BigInt(0)?(S=I,I=v+S>>BigInt(1)):(v=I,I=v+S>>BigInt(1))}}return(0,d.Qe)(R),b!==n.Dh?(f.Yz(`finally seek to pos ${b}`,l,126),await e.ioReader.seek(b),await m(e),g):(await e.ioReader.seek(g),BigInt(h.E$))}}}]);