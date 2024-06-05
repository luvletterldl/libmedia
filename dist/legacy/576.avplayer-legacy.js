"use strict";(self.webpackChunkAVPlayer=self.webpackChunkAVPlayer||[]).push([[576],{41576:(e,t,i)=>{i.r(t),i.d(t,{default:()=>T});var n=i(88435),a=i.n(n),r=i(25182),s=i(78716),d=i(81570),o=i(77193),u=i(25767),h=i(43070),m=i(31060),c=i(134),l=i(36443),f=i.n(l),g=i(54001),p=i.n(g),v=i(80662),x=i.n(v),S=i(13724),L=i(82800),y=i(95335),b=i(4624),A=i(78417),P=i(77580),k=i(86932);function I(e,t,i){return t=(0,u.A)(t),(0,o.A)(e,w()?a()(t,i||[],(0,u.A)(e).constructor):t.apply(e,i))}function w(){try{var e=!Boolean.prototype.valueOf.call(a()(Boolean,[],(function(){})))}catch(e){}return(w=function(){return!!e})()}var O="src/avnetwork/ioLoader/DashIOLoader.ts",T=function(e){function t(){var e;(0,s.A)(this,t);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return e=I(this,t,[].concat(n)),(0,c.A)((0,h.A)(e),"info",void 0),(0,c.A)((0,h.A)(e),"range",void 0),(0,c.A)((0,h.A)(e),"mediaPlayList",void 0),(0,c.A)((0,h.A)(e),"fetchedMap",void 0),(0,c.A)((0,h.A)(e),"fetchedHistoryList",void 0),(0,c.A)((0,h.A)(e),"audioLoader",void 0),(0,c.A)((0,h.A)(e),"videoLoader",void 0),(0,c.A)((0,h.A)(e),"audioSegmentIndex",void 0),(0,c.A)((0,h.A)(e),"videoSegmentIndex",void 0),(0,c.A)((0,h.A)(e),"audioCurrentUri",void 0),(0,c.A)((0,h.A)(e),"videoCurrentUri",void 0),(0,c.A)((0,h.A)(e),"audioSelectedIndex",void 0),(0,c.A)((0,h.A)(e),"videoSelectedIndex",void 0),(0,c.A)((0,h.A)(e),"audioSegments",void 0),(0,c.A)((0,h.A)(e),"videoSegments",void 0),(0,c.A)((0,h.A)(e),"audioInitSegmentPadding",void 0),(0,c.A)((0,h.A)(e),"videoInitSegmentPadding",void 0),(0,c.A)((0,h.A)(e),"subtitleInitSegmentPadding",void 0),(0,c.A)((0,h.A)(e),"audioInitedSegment",void 0),(0,c.A)((0,h.A)(e),"videoInitedSegment",void 0),(0,c.A)((0,h.A)(e),"fetchMediaPlayListPromise",void 0),(0,c.A)((0,h.A)(e),"minBuffer",void 0),e}var i,n,a,o,u,l,g,v,L;return(0,m.A)(t,e),(0,d.A)(t,[{key:"fetchMediaPlayList",value:(L=(0,r.A)(f().mark((function e(t){var i,n,a,r,s,d,o,u,h;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}if(!this.fetchMediaPlayListPromise){e.next=3;break}return e.abrupt("return");case 3:this.fetchMediaPlayListPromise=new(p())((function(e){t=e}));case 4:return i={method:"GET",headers:{},mode:"cors",cache:"default",referrerPolicy:"no-referrer-when-downgrade"},this.info.headers&&y.__(this.info.headers,(function(e,t){i.headers[t]=e})),this.info.withCredentials&&(i.credentials="include"),this.info.referrerPolicy&&(i.referrerPolicy=this.info.referrerPolicy),e.prev=8,e.next=11,fetch(this.info.url,i);case 11:return n=e.sent,e.next=14,n.text();case 14:if(a=e.sent,this.mediaPlayList=(0,A.A)(a,this.info.url),this.minBuffer=this.mediaPlayList.minBufferTime,!this.options.isLive){e.next=25;break}if(d=this.mediaPlayList.minBufferTime/this.mediaPlayList.maxSegmentDuration,!((o=Math.max(this.mediaPlayList.mediaList.audio&&(null===(r=this.mediaPlayList.mediaList.audio[0])||void 0===r?void 0:r.mediaSegments.length)||0,this.mediaPlayList.mediaList.video&&(null===(s=this.mediaPlayList.mediaList.video[0])||void 0===s?void 0:s.mediaSegments.length)||0))<d)){e.next=25;break}return e.next=23,new S.A((d-o)*this.mediaPlayList.maxSegmentDuration);case 23:return b.R8("wait for min buffer time, buffer: ".concat(o*this.mediaPlayList.maxSegmentDuration,", need: ").concat(d*this.mediaPlayList.maxSegmentDuration),O,131),e.abrupt("return",this.fetchMediaPlayList(t));case 25:return"vod"===this.mediaPlayList.type?this.options.isLive=!1:this.options.isLive=!0,this.mediaPlayList.mediaList.audio.length&&((u=this.mediaPlayList.mediaList.audio[this.audioSelectedIndex]).file?this.audioSegments=[u.file]:this.options.isLive&&this.audioInitedSegment===u.initSegment?this.audioSegments=u.mediaSegments.map((function(e){return e.url})):(this.audioSegments=[u.initSegment].concat(u.mediaSegments.map((function(e){return e.url}))),this.audioInitedSegment=u.initSegment)),this.mediaPlayList.mediaList.video.length&&(this.videoSelectedIndex=this.mediaPlayList.mediaList.video.length-1,(h=this.mediaPlayList.mediaList.video[this.videoSelectedIndex]).file?this.videoSegments=[h.file]:this.options.isLive&&this.videoInitedSegment===h.initSegment?this.videoSegments=h.mediaSegments.map((function(e){return e.url})):(this.videoSegments=[h.initSegment].concat(h.mediaSegments.map((function(e){return e.url}))),this.videoInitedSegment=h.initSegment)),t(),this.fetchMediaPlayListPromise=null,this.status=2,this.retryCount=0,e.abrupt("return",this.mediaPlayList);case 35:if(e.prev=35,e.t0=e.catch(8),!(this.retryCount<this.options.retryCount)){e.next=45;break}return this.retryCount++,b.z3("failed fetch mpd file, retry(".concat(this.retryCount,"/3)"),O,189),e.next=42,new S.A(2===this.status?this.options.retryInterval:5);case 42:return e.abrupt("return",this.fetchMediaPlayList(t));case 45:this.status=3,t(),b.h2("DashLoader: exception, fetch slice error, error: ".concat(e.t0.message),O,197);case 48:case"end":return e.stop()}}),e,this,[[8,35]])}))),function(e){return L.apply(this,arguments)})},{key:"open",value:(v=(0,r.A)(f().mark((function e(t,i){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===this.status){e.next=2;break}return e.abrupt("return");case 2:return this.info=t,this.range=i,this.range.to||(this.range.to=-1),this.range.from=Math.max(this.range.from,0),this.audioSegmentIndex=0,this.videoSegmentIndex=0,this.audioSelectedIndex=0,this.videoSelectedIndex=0,this.fetchedMap=new(x()),this.fetchedHistoryList=[],this.status=1,this.retryCount=0,e.next=16,this.fetchMediaPlayList();case 16:case"end":return e.stop()}}),e,this)}))),function(e,t){return v.apply(this,arguments)})},{key:"readAudio",value:(g=(0,r.A)(f().mark((function e(t){var i,n,a,r=this;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=0,!this.audioLoader){e.next=19;break}return e.next=4,this.audioLoader.read(t);case 4:if(-1048576===(i=e.sent)){e.next=9;break}return e.abrupt("return",i);case 9:if(!this.options.isLive){e.next=15;break}this.fetchedMap.set(this.audioCurrentUri,!0),10===this.fetchedHistoryList.length&&this.fetchedMap.delete(this.fetchedHistoryList.shift()),this.fetchedHistoryList.push(this.audioCurrentUri),e.next=18;break;case 15:if(this.audioSegmentIndex++,!(this.audioSegmentIndex>=this.audioSegments.length)){e.next=18;break}return e.abrupt("return",-1048576);case 18:this.audioLoader=null;case 19:if(!this.options.isLive){e.next=45;break}if((n=this.audioSegments.filter((function(e){return!r.fetchedMap.get(e)}))).length){e.next=38;break}if(!this.mediaPlayList.isEnd){e.next=24;break}return e.abrupt("return",-1048576);case 24:if(!((a=(this.mediaPlayList.duration||this.mediaPlayList.minimumUpdatePeriod)-((0,k.A)()-this.mediaPlayList.timestamp)/1e3)>0)){e.next=28;break}return e.next=28,new S.A(a);case 28:if(!this.fetchMediaPlayListPromise){e.next=35;break}return e.next=31,this.fetchMediaPlayListPromise;case 31:if(3!==this.status){e.next=33;break}return e.abrupt("return",-1048576);case 33:e.next=37;break;case 35:return e.next=37,this.fetchMediaPlayList();case 37:return e.abrupt("return",this.readAudio(t));case 38:return this.audioCurrentUri=n[0],this.audioLoader=new P.A(y.X$({},this.options,{disableSegment:!0,loop:!1})),e.next=42,this.audioLoader.open({url:this.audioCurrentUri},{from:0,to:-1});case 42:return e.abrupt("return",this.audioLoader.read(t));case 45:if(this.audioLoader=new P.A(y.X$({},this.options,{disableSegment:!0,loop:!1})),!this.audioInitSegmentPadding){e.next=53;break}return e.next=49,this.audioLoader.open({url:this.audioInitSegmentPadding},{from:0,to:-1});case 49:this.audioInitSegmentPadding=null,this.audioSegmentIndex--,e.next=55;break;case 53:return e.next=55,this.audioLoader.open({url:this.audioSegments[this.audioSegmentIndex]},{from:0,to:-1});case 55:return e.abrupt("return",this.audioLoader.read(t));case 56:case"end":return e.stop()}}),e,this)}))),function(e){return g.apply(this,arguments)})},{key:"readVideo",value:(l=(0,r.A)(f().mark((function e(t){var i,n,a,r=this;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=0,!this.videoLoader){e.next=19;break}return e.next=4,this.videoLoader.read(t);case 4:if(-1048576===(i=e.sent)){e.next=9;break}return e.abrupt("return",i);case 9:if(!this.options.isLive){e.next=15;break}this.fetchedMap.set(this.videoCurrentUri,!0),10===this.fetchedHistoryList.length&&this.fetchedMap.delete(this.fetchedHistoryList.shift()),this.fetchedHistoryList.push(this.videoCurrentUri),e.next=18;break;case 15:if(this.videoSegmentIndex++,!(this.videoSegmentIndex>=this.videoSegments.length)){e.next=18;break}return e.abrupt("return",-1048576);case 18:this.videoLoader=null;case 19:if(!this.options.isLive){e.next=45;break}if((n=this.videoSegments.filter((function(e){return!r.fetchedMap.get(e)}))).length){e.next=38;break}if(!this.mediaPlayList.isEnd){e.next=24;break}return e.abrupt("return",-1048576);case 24:if(!((a=(this.mediaPlayList.duration||this.mediaPlayList.minimumUpdatePeriod)-((0,k.A)()-this.mediaPlayList.timestamp)/1e3)>0)){e.next=28;break}return e.next=28,new S.A(Math.max(a,2));case 28:if(!this.fetchMediaPlayListPromise){e.next=35;break}return e.next=31,this.fetchMediaPlayListPromise;case 31:if(3!==this.status){e.next=33;break}return e.abrupt("return",-1048576);case 33:e.next=37;break;case 35:return e.next=37,this.fetchMediaPlayList();case 37:return e.abrupt("return",this.readVideo(t));case 38:return this.videoCurrentUri=n[0],this.videoLoader=new P.A(y.X$({},this.options,{disableSegment:!0,loop:!1})),e.next=42,this.videoLoader.open({url:this.videoCurrentUri},{from:0,to:-1});case 42:return e.abrupt("return",this.videoLoader.read(t));case 45:if(this.videoLoader=new P.A(y.X$({},this.options,{disableSegment:!0,loop:!1})),!this.videoInitSegmentPadding){e.next=53;break}return e.next=49,this.videoLoader.open({url:this.videoInitSegmentPadding},{from:0,to:-1});case 49:this.videoInitSegmentPadding=null,this.videoSegmentIndex--,e.next=55;break;case 53:return e.next=55,this.videoLoader.open({url:this.videoSegments[this.videoSegmentIndex]},{from:0,to:-1});case 55:return e.abrupt("return",this.videoLoader.read(t));case 56:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"read",value:(u=(0,r.A)(f().mark((function e(t,i){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("audio"!==i.mediaType){e.next=4;break}return e.abrupt("return",this.readAudio(t));case 4:return e.abrupt("return",this.readVideo(t));case 5:case"end":return e.stop()}}),e,this)}))),function(e,t){return u.apply(this,arguments)})},{key:"seek",value:(o=(0,r.A)(f().mark((function e(t,i){var n,a,r,s,d,o,u;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.audioLoader||"audio"!==i.mediaType){e.next=4;break}return e.next=3,this.audioLoader.abort();case 3:this.audioLoader=null;case 4:if(!this.videoLoader||"video"!==i.mediaType){e.next=8;break}return e.next=7,this.videoLoader.abort();case 7:this.videoLoader=null;case 8:if(n=Number(t),!this.audioSegments||"audio"!==i.mediaType){e.next=22;break}if(a=0,null==(r=this.mediaPlayList.mediaList.audio[this.audioSelectedIndex].mediaSegments)||!r.length){e.next=21;break}s=0;case 14:if(!(s<r.length)){e.next=21;break}if(!(n>=1e3*r[s].start&&n<1e3*r[s].end)){e.next=18;break}return a=s,e.abrupt("break",21);case 18:s++,e.next=14;break;case 21:this.audioSegmentIndex=a+(this.mediaPlayList.mediaList.audio[this.audioSelectedIndex].initSegment?1:0);case 22:if(!this.videoSegments||"video"!==i.mediaType){e.next=35;break}if(d=0,null==(o=this.mediaPlayList.mediaList.video[this.videoSelectedIndex].mediaSegments)||!o.length){e.next=34;break}u=0;case 27:if(!(u<o.length)){e.next=34;break}if(!(n>=1e3*o[u].start&&n<1e3*o[u].end)){e.next=31;break}return d=u,e.abrupt("break",34);case 31:u++,e.next=27;break;case 34:this.videoSegmentIndex=d+(this.mediaPlayList.mediaList.video[this.videoSelectedIndex].initSegment?1:0);case 35:4===this.status&&(this.status=2);case 36:case"end":return e.stop()}}),e,this)}))),function(e,t){return o.apply(this,arguments)})},{key:"size",value:(a=(0,r.A)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",BigInt(0));case 1:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})},{key:"abort",value:(n=(0,r.A)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.videoLoader){e.next=4;break}return e.next=3,this.videoLoader.abort();case 3:this.videoLoader=null;case 4:if(!this.audioLoader){e.next=8;break}return e.next=7,this.audioLoader.abort();case 7:this.audioLoader=null;case 8:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"stop",value:(i=(0,r.A)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.abort();case 2:this.status=0;case 3:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"getDuration",value:function(){return this.mediaPlayList.duration}},{key:"hasVideo",value:function(){var e;return(null===(e=this.mediaPlayList)||void 0===e?void 0:e.mediaList.video.length)>0}},{key:"hasAudio",value:function(){var e;return(null===(e=this.mediaPlayList)||void 0===e?void 0:e.mediaList.audio.length)>0}},{key:"hasSubtitle",value:function(){var e;return(null===(e=this.mediaPlayList)||void 0===e?void 0:e.mediaList.subtitle.length)>0}},{key:"getVideoList",value:function(){return this.hasVideo()?{list:this.mediaPlayList.mediaList.video.map((function(e){return{width:e.width,height:e.height,frameRate:e.frameRate}})),selectedIndex:this.videoSelectedIndex}:{list:[],selectedIndex:0}}},{key:"getAudioList",value:function(){return this.hasAudio()?{list:this.mediaPlayList.mediaList.audio.map((function(e){return{lang:e.lang}})),selectedIndex:this.audioSelectedIndex}:{list:[],selectedIndex:0}}},{key:"getSubtitleList",value:function(){return this.hasSubtitle()?{list:this.mediaPlayList.mediaList.subtitle.map((function(e){return{lang:e.lang,codecs:e.codecs}})),selectedIndex:0}:{list:[],selectedIndex:0}}},{key:"selectVideo",value:function(e){if(e!==this.videoSelectedIndex&&this.hasVideo()&&e>=0&&e<this.mediaPlayList.mediaList.video.length){this.videoSelectedIndex=e;var t=this.mediaPlayList.mediaList.video[this.videoSelectedIndex];t.file?this.videoSegments=[t.file]:(this.videoSegments=[t.initSegment].concat(t.mediaSegments.map((function(e){return e.url}))),this.videoInitSegmentPadding=t.initSegment)}}},{key:"selectAudio",value:function(e){if(e!==this.audioSelectedIndex&&this.hasAudio()&&e>=0&&e<this.mediaPlayList.mediaList.audio.length){this.audioSelectedIndex=e;var t=this.mediaPlayList.mediaList.audio[this.audioSelectedIndex];t.file?this.audioSegments=[t.file]:(this.audioSegments=[t.initSegment].concat(t.mediaSegments.map((function(e){return e.url}))),this.audioInitSegmentPadding=t.initSegment)}}},{key:"selectSubtitle",value:function(e){}},{key:"getMinBuffer",value:function(){return this.minBuffer}}]),t}(L.A)},78417:(e,t,i)=>{i.d(t,{A:()=>f});var n=i(88032),a=i.n(n),r=i(29967),s=i.n(r),d=i(79331),o=i(67672),u=i(62100),h=i(86932);function m(e){var t=0,i=0,n=0;return(e=e.slice(e.indexOf("PT")+2)).indexOf("H")>-1&&e.indexOf("M")>-1&&e.indexOf("S")>-1?(t=a()(e.slice(0,e.indexOf("H"))),i=a()(e.slice(e.indexOf("H")+1,e.indexOf("M"))),n=a()(e.slice(e.indexOf("M")+1,e.indexOf("S")))):e.indexOf("H")<0&&e.indexOf("M")>0&&e.indexOf("S")>-1?(i=a()(e.slice(0,e.indexOf("M"))),n=a()(e.slice(e.indexOf("M")+1,e.indexOf("S")))):e.indexOf("H")<0&&e.indexOf("M")<0&&e.indexOf("S")>-1&&(n=a()(e.slice(0,e.indexOf("S")))),3600*t+60*i+n}function c(e,t){return(Array(t).join("0")+e).slice(-t)}function l(e){if(!e)return 0;if(e.indexOf("/")>-1){var t=e.split("/");return a()(t[0])/a()(t[1])}return a()(e)}function f(e,t){var i,n={source:e,mediaList:{audio:[],video:[],subtitle:[]},type:"live",isEnd:!1,duration:0,minBufferTime:0,maxSegmentDuration:0,minimumUpdatePeriod:0,timestamp:(0,h.A)()},r=[],f=(i=e,i?(0,d.A)(i):null).MPD;"static"===f.type&&(n.type="vod",n.isEnd=!0),f.minBufferTime&&(n.minBufferTime=m(f.minBufferTime)),f.maxSegmentDuration&&(n.maxSegmentDuration=m(f.maxSegmentDuration)),f.minimumUpdatePeriod&&(n.minimumUpdatePeriod=m(f.minimumUpdatePeriod)),f.mediaPresentationDuration&&(n.duration=m(f.mediaPresentationDuration));var g="";f.BaseURL&&(g=f.BaseURL);var p=o.YO(f.Period)?f.Period[0]:f.Period;return!n.duration&&p&&p.duration&&(n.duration=m(p.duration)),(o.YO(p.AdaptationSet)?p.AdaptationSet:[p.AdaptationSet]).forEach((function(e,i){var d="video/mp4",h="avc1.64001E",m=640,f=360,p=640,v=360,x=25,S="1:1",L="1",y=588633,b=g,A="und";e.BaseURL&&(b+=e.BaseURL),e.lang&&(A=e.lang),e.mimeType?"video/mp4"===(d=e.mimeType)?(h=e.codecs,m=a()(e.width),f=a()(e.height),e.maxWidth&&(p=a()(e.maxWidth)),e.maxHeight&&(v=a()(e.maxHeight)),e.frameRate&&(x=l(e.frameRate)),S=e.sar,L=e.startWithSAP,y=a()(e.bandwidth)):"audio/mp4"===d&&(h=e.codecs,L=e.startWithSAP,y=a()(e.bandwidth)):(e.maxWidth&&(p=a()(e.maxWidth)),e.maxHeight&&(v=a()(e.maxHeight)),e.frameRate&&(x=l(e.frameRate))),(o.YO(e.Representation)?e.Representation:[e.Representation]).forEach((function(i,l){r.indexOf(i.id)>-1&&(i.id=(s()(r[r.length-1])+1).toString()),r.push(i.id);var g="",P=[],k=0,I=0,w=t.slice(0,t.lastIndexOf("/")+1)+b;i.mimeType&&(d=i.mimeType),"video/mp4"===d?(i.codecs&&(h=i.codecs),i.width&&(m=a()(i.width)),i.height&&(f=a()(i.height)),i.maxWidth&&(p=a()(i.maxWidth)),i.maxHeight&&(v=a()(i.maxHeight)),i.frameRate&&(x=a()(i.frameRate)),i.sar&&(S=i.sar),i.startWithSAP&&(L=i.startWithSAP),i.bandwidth&&(y=a()(i.bandwidth))):(i.codecs&&(h=i.codecs),i.startWithSAP&&(L=i.startWithSAP),i.bandwidth&&(y=a()(i.bandwidth))),i.BaseURL&&(w+=i.BaseURL);var O=!1;if((e.ContentProtection||i.ContentProtection)&&(O=!0),i.SegmentBase)"video/mp4"===d?n.mediaList.video.push({id:i.id,file:w,mimeType:d,codecs:h,width:m,height:f,maxWidth:p,maxHeight:v,frameRate:x,sar:S,startWithSAP:"1"===L,bandwidth:y,timescale:k,duration:I,encrypted:O}):"audio/mp4"===d?n.mediaList.audio.push({id:i.id,file:w,mimeType:d,codecs:h,startWithSAP:"1"===L,bandwidth:y,timescale:k,duration:I,encrypted:O,lang:A}):"application/mp4"===d&&n.mediaList.subtitle.push({id:i.id,file:w,mimeType:d,codecs:h,startWithSAP:"1"===L,bandwidth:y,timescale:k,duration:I,encrypted:O,lang:A});else{var T;if(e.SegmentTemplate&&(T=o.YO(e.SegmentTemplate)?e.SegmentTemplate[0]:e.SegmentTemplate),i.SegmentTemplate&&(T=o.YO(i.SegmentTemplate)?i.SegmentTemplate[0]:i.SegmentTemplate),T){var M=s()(T.startNumber);if(g=T.initialization,k=a()(T.timescale||"1"),T.duration&&!T.SegmentTimeline)for(var R=(I=a()(T.duration))/k,U=M+Math.ceil((n.duration||R)/R)-1,$=function(e){var t=R*(e-M),a=R*(e-M+1);e===U&&(R=n.duration-R*(U-M),a=n.duration),P.push({idx:e,start:t,end:a,url:w+T.media.replace(/\$RepresentationID\$/g,i.id).replace(/\$Number(%(\d+)d)?\$/g,(function(t,i,n){return n?c(e,+n):(0,u.A)(e)})),segmentDuration:R})},B=M;B<=U;B++)$(B);else if(T.SegmentTimeline&&T.SegmentTimeline.S)for(var D=o.YO(T.SegmentTimeline.S)?T.SegmentTimeline.S:[T.SegmentTimeline.S],C=0,H=M,W=0;W<D.length;W++){var V=a()(D[W].d);D[W].t&&(C=a()(D[0].t));var E=1;D[W].r&&(E=s()(D[W].r)+1);for(var Y=0;Y<E;Y++)P.push({idx:H,start:C/k,end:(C+V)/k,url:w+T.media.replace(/\$RepresentationID\$/g,i.id).replace(/\$Number(%(\d+)d)?\$/g,(function(e,t,i){return i?c(H,+i):(0,u.A)(H)})).replace(/\$Time\$/g,(0,u.A)(C)),segmentDuration:V/k}),H++,C+=V}}else if(i.SegmentList)for(var N=o.YO(i.SegmentList.SegmentURL)?i.SegmentList.SegmentURL:[i.SegmentList.SegmentURL],X=0,j=a()(i.SegmentList.duration),z=0;z<N.length;z++)P.push({idx:z,start:X/k,end:(X+j)/k,url:w+N[z].media,segmentDuration:j/k}),X+=j;"video/mp4"===d?n.mediaList.video.push({id:i.id,baseURL:w,initSegment:w+g.replace(/\$RepresentationID\$/g,i.id).replace(/\$Bandwidth\$/g,(0,u.A)(y)),mediaSegments:P,mimeType:d,codecs:h,width:m,height:f,maxWidth:p,maxHeight:v,frameRate:x,sar:S,startWithSAP:"1"===L,bandwidth:y,timescale:k,duration:I,encrypted:O}):"audio/mp4"===d?n.mediaList.audio.push({id:i.id,baseURL:w,initSegment:w+g.replace(/\$RepresentationID\$/g,i.id).replace(/\$Bandwidth\$/g,(0,u.A)(y)),mediaSegments:P,mimeType:d,codecs:h,startWithSAP:"1"===L,bandwidth:y,timescale:k,duration:I,encrypted:O,lang:A}):"application/mp4"===d&&n.mediaList.subtitle.push({id:i.id,baseURL:w,initSegment:w+g.replace(/\$RepresentationID\$/g,i.id).replace(/\$Bandwidth\$/g,(0,u.A)(y)),mediaSegments:P,mimeType:d,codecs:h,startWithSAP:"1"===L,bandwidth:y,timescale:k,duration:I,encrypted:O,lang:A})}}))})),["video","audio"].forEach((function(e){n.mediaList[e].sort((function(e,t){return e.bandwidth-t.bandwidth}))})),n}},79331:(e,t,i)=>{i.d(t,{A:()=>y});var n=i(69736),a=i.n(n),r=i(44301),s=i.n(r),d=i(82731),o=i.n(d),u=i(59614),h=i.n(u),m=i(969),c=i.n(m),l=i(66681),f=i.n(l),g=i(134),p=i(68632),v=i.n(p);function x(e,t){var i=a()(e);if(s()){var n=s()(e);t&&(n=n.filter((function(t){return o()(e,t).enumerable}))),i.push.apply(i,n)}return i}function S(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?x(Object(i),!0).forEach((function(t){(0,g.A)(e,t,i[t])})):h()?c()(e,h()(i)):x(Object(i)).forEach((function(t){f()(e,t,o()(i,t))}))}return e}var L={aloneValueName:"_@attribute"};function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:L,i=S(S({},L),t);return function(e,t){for(var i,n={};i=e.match(/<[^\/][^>]*>/);){var a=i[0],r=a.substring(1,a.length-1),s=e.indexOf(a.replace("<","</")),d=void 0;-1==s&&(d=a.match(/[^<][\S+$]*/))&&(r=d[0],-1==(s=e.indexOf("</"+r))&&(s=e.indexOf("<\\/"+r)));var o=e.substring(a.length,s),u=o.match(/<[^\/][^>]*>/)?y(o,t):o;void 0===n[r]?n[r]=u:v()(n[r])?n[r].push(u):n[r]=[n[r],u],e=e.substring(2*a.length+1+o.length)}return n}(e=function(e,t){return e=function(e,t){var i=e.match(/<[^\/][^>][^<]+\s+.[^<]+[=][^<]+>([^<]+)/g);if(!i)return e;for(var n=0;n<i.length;n++){var a=i[n],r=a.substring(0,a.indexOf(">")+1)+"<"+t+">"+a.substring(a.indexOf(">")+1)+"</"+t+">";e=e.replace(a,r)}return e}(e=function(e){var t=e.match(/<[^/][^>]*\/>/g);if(!t)return e;for(var i=0;i<t.length;i++){var n=t[i],a=n.match(/[^<][\S+$]*/);if(a){var r=a[0],s="</"+r+">",d=b(r,n)+s;e=e.replace(n,d)}}return e}(e=(e=(e=(e=e.replace(/<!--[\s\S]*?-->/g,"")).replace(/[\n\t\r]/g,"")).replace(/>[ \t]+</g,"><")).replace(/<\?[^>]*\?>/g,"")),t),e=function(e){var t=e.match(/<[^\/><]\S+\s+[^<]+[=][^<]+>/g);if(!t)return e;for(var i=0;i<t.length;i++){var n=t[i],a=n.match(/[^<]\S*/);if(a){var r=b(a[0],n);e=e.replace(n,r)}}return e}(e)}(e,i.aloneValueName),i)}function b(e,t){var i="<"+e+">",n=t.match(/([^"'\s]+)\s*=\s*((?:"[^"]+")|(?:'[^']+'))/g);if(!n)return i;for(var a=0;a<n.length;a++){var r=n[a],s=r.substring(0,r.indexOf("=")).trim(),d=r[r.length-1];i+="<"+s+">"+r.substring(r.indexOf(d)+1,r.lastIndexOf(d))+"</"+s+">"}return i}}}]);