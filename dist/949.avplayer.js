"use strict";(self.webpackChunkAVPlayer=self.webpackChunkAVPlayer||[]).push([[949],{2949:(e,i,t)=>{t.r(i),t.d(i,{default:()=>$});var a=t(1026),s=t(4001),d=t.n(s),n=t(662),o=t.n(n),r=t(3724),h=t(2800),m=t(5335),l=t(4624),u=t(8032),c=t.n(u),g=t(2348),f=t.n(g),S=t(8632),L=t.n(S);const p={aloneValueName:"_@attribute"};function v(e,i=p){const t={...p,...i};return function(e,i){const t={};let a;for(;a=e.match(/<[^\/][^>]*>/);){let s,d=a[0],n=d.substring(1,d.length-1),o=e.indexOf(d.replace("<","</"));-1==o&&(s=d.match(/[^<][\S+$]*/))&&(n=s[0],o=e.indexOf("</"+n),-1==o&&(o=e.indexOf("<\\/"+n)));let r=e.substring(d.length,o);const h=r.match(/<[^\/][^>]*>/)?v(r,i):r;void 0===t[n]?t[n]=h:L()(t[n])?t[n].push(h):t[n]=[t[n],h],e=e.substring(2*d.length+1+r.length)}return t}(e=function(e,i){return e=function(e,i){const t=e.match(/<[^\/][^>][^<]+\s+.[^<]+[=][^<]+>([^<]+)/g);if(!t)return e;for(let a=0;a<t.length;a++){const s=t[a],d=s.substring(0,s.indexOf(">")+1)+"<"+i+">"+s.substring(s.indexOf(">")+1)+"</"+i+">";e=e.replace(s,d)}return e}(e=function(e){const i=e.match(/<[^/][^>]*\/>/g);if(!i)return e;for(let t=0;t<i.length;t++){const a=i[t],s=a.match(/[^<][\S+$]*/);if(s){const i=s[0],t="</"+i+">",d=y(i,a)+t;e=e.replace(a,d)}}return e}(e=(e=(e=(e=e.replace(/<!--[\s\S]*?-->/g,"")).replace(/[\n\t\r]/g,"")).replace(/>[ \t]+</g,"><")).replace(/<\?[^>]*\?>/g,"")),i),e=function(e){const i=e.match(/<[^\/><]\S+\s+[^<]+[=][^<]+>/g);if(!i)return e;for(let t=0;t<i.length;t++){const a=i[t],s=a.match(/[^<]\S*/);if(s){const i=y(s[0],a);e=e.replace(a,i)}}return e}(e)}(e,t.aloneValueName),t)}function y(e,i){let t="<"+e+">";const a=i.match(/([^"'\s]+)\s*=\s*((?:"[^"]+")|(?:'[^']+'))/g);if(!a)return t;for(let e=0;e<a.length;e++){const i=a[e],s=i.substring(0,i.indexOf("=")).trim(),d=i[i.length-1];t+="<"+s+">"+i.substring(i.indexOf(d)+1,i.lastIndexOf(d))+"</"+s+">"}return t}var P=t(7672),x=t(2100),A=t(6932);function I(e){let i=0,t=0,a=0;return(e=e.slice(e.indexOf("PT")+2)).indexOf("H")>-1&&e.indexOf("M")>-1&&e.indexOf("S")>-1?(i=c()(e.slice(0,e.indexOf("H"))),t=c()(e.slice(e.indexOf("H")+1,e.indexOf("M"))),a=c()(e.slice(e.indexOf("M")+1,e.indexOf("S")))):e.indexOf("H")<0&&e.indexOf("M")>0&&e.indexOf("S")>-1?(t=c()(e.slice(0,e.indexOf("M"))),a=c()(e.slice(e.indexOf("M")+1,e.indexOf("S")))):e.indexOf("H")<0&&e.indexOf("M")<0&&e.indexOf("S")>-1&&(a=c()(e.slice(0,e.indexOf("S")))),3600*i+60*t+a}function w(e,i){return(Array(i).join("0")+e).slice(-i)}function b(e){if(!e)return 0;if(e.indexOf("/")>-1){const i=e.split("/");return c()(i[0])/c()(i[1])}return c()(e)}function O(e,i){const t={source:e,mediaList:{audio:[],video:[],subtitle:[]},type:"live",isEnd:!1,duration:0,minBufferTime:0,maxSegmentDuration:0,minimumUpdatePeriod:0,timestamp:(0,A.A)()},a=[],s=(d=e,d?v(d):null).MPD;var d;"static"===s.type&&(t.type="vod",t.isEnd=!0),s.minBufferTime&&(t.minBufferTime=I(s.minBufferTime)),s.maxSegmentDuration&&(t.maxSegmentDuration=I(s.maxSegmentDuration)),s.minimumUpdatePeriod&&(t.minimumUpdatePeriod=I(s.minimumUpdatePeriod)),s.mediaPresentationDuration&&(t.duration=I(s.mediaPresentationDuration));let n="";s.BaseURL&&(n=s.BaseURL);const o=P.YO(s.Period)?s.Period[0]:s.Period;return!t.duration&&o&&o.duration&&(t.duration=I(o.duration)),(P.YO(o.AdaptationSet)?o.AdaptationSet:[o.AdaptationSet]).forEach(((e,s)=>{let d="video/mp4",o="avc1.64001E",r=640,h=360,m=640,l=360,u=25,g="1:1",S="1",L=588633,p=n,v="und";e.BaseURL&&(p+=e.BaseURL),e.lang&&(v=e.lang),e.mimeType?(d=e.mimeType,"video/mp4"===d?(o=e.codecs,r=c()(e.width),h=c()(e.height),e.maxWidth&&(m=c()(e.maxWidth)),e.maxHeight&&(l=c()(e.maxHeight)),e.frameRate&&(u=b(e.frameRate)),g=e.sar,S=e.startWithSAP,L=c()(e.bandwidth)):"audio/mp4"===d&&(o=e.codecs,S=e.startWithSAP,L=c()(e.bandwidth))):(e.maxWidth&&(m=c()(e.maxWidth)),e.maxHeight&&(l=c()(e.maxHeight)),e.frameRate&&(u=b(e.frameRate))),(P.YO(e.Representation)?e.Representation:[e.Representation]).forEach(((s,n)=>{a.indexOf(s.id)>-1&&(s.id=(f()(a[a.length-1])+1).toString()),a.push(s.id);let y="";const A=[];let I=0,b=0,O=i.slice(0,i.lastIndexOf("/")+1)+p;s.mimeType&&(d=s.mimeType),"video/mp4"===d?(s.codecs&&(o=s.codecs),s.width&&(r=c()(s.width)),s.height&&(h=c()(s.height)),s.maxWidth&&(m=c()(s.maxWidth)),s.maxHeight&&(l=c()(s.maxHeight)),s.frameRate&&(u=c()(s.frameRate)),s.sar&&(g=s.sar),s.startWithSAP&&(S=s.startWithSAP),s.bandwidth&&(L=c()(s.bandwidth))):(s.codecs&&(o=s.codecs),s.startWithSAP&&(S=s.startWithSAP),s.bandwidth&&(L=c()(s.bandwidth))),s.BaseURL&&(O+=s.BaseURL);let T=!1;if((e.ContentProtection||s.ContentProtection)&&(T=!0),s.SegmentBase)"video/mp4"===d?t.mediaList.video.push({id:s.id,file:O,mimeType:d,codecs:o,width:r,height:h,maxWidth:m,maxHeight:l,frameRate:u,sar:g,startWithSAP:"1"===S,bandwidth:L,timescale:I,duration:b,encrypted:T}):"audio/mp4"===d?t.mediaList.audio.push({id:s.id,file:O,mimeType:d,codecs:o,startWithSAP:"1"===S,bandwidth:L,timescale:I,duration:b,encrypted:T,lang:v}):"application/mp4"===d&&t.mediaList.subtitle.push({id:s.id,file:O,mimeType:d,codecs:o,startWithSAP:"1"===S,bandwidth:L,timescale:I,duration:b,encrypted:T,lang:v});else{let i;if(e.SegmentTemplate&&(i=P.YO(e.SegmentTemplate)?e.SegmentTemplate[0]:e.SegmentTemplate),s.SegmentTemplate&&(i=P.YO(s.SegmentTemplate)?s.SegmentTemplate[0]:s.SegmentTemplate),i){const e=f()(i.startNumber);if(y=i.initialization,I=c()(i.timescale||"1"),i.duration&&!i.SegmentTimeline){b=c()(i.duration);let a=b/I;const d=e+Math.ceil((t.duration||a)/a)-1;for(let n=e;n<=d;n++){const o=a*(n-e);let r=a*(n-e+1);n===d&&(a=t.duration-a*(d-e),r=t.duration),A.push({idx:n,start:o,end:r,url:O+i.media.replace(/\$RepresentationID\$/g,s.id).replace(/\$Number(%(\d+)d)?\$/g,((e,i,t)=>t?w(n,+t):(0,x.A)(n))),segmentDuration:a})}}else if(i.SegmentTimeline&&i.SegmentTimeline.S){const t=P.YO(i.SegmentTimeline.S)?i.SegmentTimeline.S:[i.SegmentTimeline.S];let a=0,d=e;for(let e=0;e<t.length;e++){let n=c()(t[e].d);t[e].t&&(a=c()(t[0].t));let o=1;t[e].r&&(o=f()(t[e].r)+1);for(let e=0;e<o;e++)A.push({idx:d,start:a/I,end:(a+n)/I,url:O+i.media.replace(/\$RepresentationID\$/g,s.id).replace(/\$Number(%(\d+)d)?\$/g,((e,i,t)=>t?w(d,+t):(0,x.A)(d))).replace(/\$Time\$/g,(0,x.A)(a)),segmentDuration:n/I}),d++,a+=n}}}else if(s.SegmentList){const e=P.YO(s.SegmentList.SegmentURL)?s.SegmentList.SegmentURL:[s.SegmentList.SegmentURL];let i=0,t=c()(s.SegmentList.duration);for(let a=0;a<e.length;a++)A.push({idx:a,start:i/I,end:(i+t)/I,url:O+e[a].media,segmentDuration:t/I}),i+=t}"video/mp4"===d?t.mediaList.video.push({id:s.id,baseURL:O,initSegment:O+y.replace(/\$RepresentationID\$/g,s.id).replace(/\$Bandwidth\$/g,(0,x.A)(L)),mediaSegments:A,mimeType:d,codecs:o,width:r,height:h,maxWidth:m,maxHeight:l,frameRate:u,sar:g,startWithSAP:"1"===S,bandwidth:L,timescale:I,duration:b,encrypted:T}):"audio/mp4"===d?t.mediaList.audio.push({id:s.id,baseURL:O,initSegment:O+y.replace(/\$RepresentationID\$/g,s.id).replace(/\$Bandwidth\$/g,(0,x.A)(L)),mediaSegments:A,mimeType:d,codecs:o,startWithSAP:"1"===S,bandwidth:L,timescale:I,duration:b,encrypted:T,lang:v}):"application/mp4"===d&&t.mediaList.subtitle.push({id:s.id,baseURL:O,initSegment:O+y.replace(/\$RepresentationID\$/g,s.id).replace(/\$Bandwidth\$/g,(0,x.A)(L)),mediaSegments:A,mimeType:d,codecs:o,startWithSAP:"1"===S,bandwidth:L,timescale:I,duration:b,encrypted:T,lang:v})}}))})),["video","audio"].forEach((e=>{t.mediaList[e].sort(((e,i)=>e.bandwidth-i.bandwidth))})),t}var T=t(7580),M="src/avnetwork/ioLoader/DashIOLoader.ts";class $ extends h.A{constructor(...e){super(...e),(0,a.A)(this,"info",void 0),(0,a.A)(this,"range",void 0),(0,a.A)(this,"mediaPlayList",void 0),(0,a.A)(this,"fetchedMap",void 0),(0,a.A)(this,"fetchedHistoryList",void 0),(0,a.A)(this,"audioLoader",void 0),(0,a.A)(this,"videoLoader",void 0),(0,a.A)(this,"audioSegmentIndex",void 0),(0,a.A)(this,"videoSegmentIndex",void 0),(0,a.A)(this,"audioCurrentUri",void 0),(0,a.A)(this,"videoCurrentUri",void 0),(0,a.A)(this,"audioSelectedIndex",void 0),(0,a.A)(this,"videoSelectedIndex",void 0),(0,a.A)(this,"audioSegments",void 0),(0,a.A)(this,"videoSegments",void 0),(0,a.A)(this,"audioInitSegmentPadding",void 0),(0,a.A)(this,"videoInitSegmentPadding",void 0),(0,a.A)(this,"subtitleInitSegmentPadding",void 0),(0,a.A)(this,"audioInitedSegment",void 0),(0,a.A)(this,"videoInitedSegment",void 0),(0,a.A)(this,"fetchMediaPlayListPromise",void 0),(0,a.A)(this,"minBuffer",void 0)}async fetchMediaPlayList(e){if(!e){if(this.fetchMediaPlayListPromise)return;this.fetchMediaPlayListPromise=new(d())((i=>{e=i}))}const i={method:"GET",headers:{},mode:"cors",cache:"default",referrerPolicy:"no-referrer-when-downgrade"};this.info.headers&&m.__(this.info.headers,((e,t)=>{i.headers[t]=e})),this.info.withCredentials&&(i.credentials="include"),this.info.referrerPolicy&&(i.referrerPolicy=this.info.referrerPolicy);try{const s=await fetch(this.info.url,i),d=await s.text();if(this.mediaPlayList=O(d,this.info.url),this.minBuffer=this.mediaPlayList.minBufferTime,this.options.isLive){var t,a;const i=this.mediaPlayList.minBufferTime/this.mediaPlayList.maxSegmentDuration,s=Math.max(this.mediaPlayList.mediaList.audio&&(null===(t=this.mediaPlayList.mediaList.audio[0])||void 0===t?void 0:t.mediaSegments.length)||0,this.mediaPlayList.mediaList.video&&(null===(a=this.mediaPlayList.mediaList.video[0])||void 0===a?void 0:a.mediaSegments.length)||0);if(s<i)return await new r.A((i-s)*this.mediaPlayList.maxSegmentDuration),l.R8(`wait for min buffer time, buffer: ${s*this.mediaPlayList.maxSegmentDuration}, need: ${i*this.mediaPlayList.maxSegmentDuration}`,M,131),this.fetchMediaPlayList(e)}if("vod"===this.mediaPlayList.type?this.options.isLive=!1:this.options.isLive=!0,this.mediaPlayList.mediaList.audio.length){const e=this.mediaPlayList.mediaList.audio[this.audioSelectedIndex];e.file?this.audioSegments=[e.file]:this.options.isLive&&this.audioInitedSegment===e.initSegment?this.audioSegments=e.mediaSegments.map((e=>e.url)):(this.audioSegments=[e.initSegment].concat(e.mediaSegments.map((e=>e.url))),this.audioInitedSegment=e.initSegment)}if(this.mediaPlayList.mediaList.video.length){this.videoSelectedIndex=this.mediaPlayList.mediaList.video.length-1;const e=this.mediaPlayList.mediaList.video[this.videoSelectedIndex];e.file?this.videoSegments=[e.file]:this.options.isLive&&this.videoInitedSegment===e.initSegment?this.videoSegments=e.mediaSegments.map((e=>e.url)):(this.videoSegments=[e.initSegment].concat(e.mediaSegments.map((e=>e.url))),this.videoInitedSegment=e.initSegment)}return e(),this.fetchMediaPlayListPromise=null,this.status=2,this.retryCount=0,this.mediaPlayList}catch(i){if(this.retryCount<this.options.retryCount)return this.retryCount++,l.z3(`failed fetch mpd file, retry(${this.retryCount}/3)`,M,189),await new r.A(2===this.status?this.options.retryInterval:5),this.fetchMediaPlayList(e);this.status=3,e(),l.h2(`DashLoader: exception, fetch slice error, error: ${i.message}`,M,197)}}async open(e,i){0===this.status&&(this.info=e,this.range=i,this.range.to||(this.range.to=-1),this.range.from=Math.max(this.range.from,0),this.audioSegmentIndex=0,this.videoSegmentIndex=0,this.audioSelectedIndex=0,this.videoSelectedIndex=0,this.fetchedMap=new(o()),this.fetchedHistoryList=[],this.status=1,this.retryCount=0,await this.fetchMediaPlayList())}async readAudio(e){let i=0;if(this.audioLoader){if(i=await this.audioLoader.read(e),-1048576!==i)return i;if(this.options.isLive)this.fetchedMap.set(this.audioCurrentUri,!0),10===this.fetchedHistoryList.length&&this.fetchedMap.delete(this.fetchedHistoryList.shift()),this.fetchedHistoryList.push(this.audioCurrentUri);else if(this.audioSegmentIndex++,this.audioSegmentIndex>=this.audioSegments.length)return-1048576;this.audioLoader=null}if(this.options.isLive){const i=this.audioSegments.filter((e=>!this.fetchedMap.get(e)));if(!i.length){if(this.mediaPlayList.isEnd)return-1048576;const i=(this.mediaPlayList.duration||this.mediaPlayList.minimumUpdatePeriod)-((0,A.A)()-this.mediaPlayList.timestamp)/1e3;if(i>0&&await new r.A(i),this.fetchMediaPlayListPromise){if(await this.fetchMediaPlayListPromise,3===this.status)return-1048576}else await this.fetchMediaPlayList();return this.readAudio(e)}return this.audioCurrentUri=i[0],this.audioLoader=new T.A(m.X$({},this.options,{disableSegment:!0,loop:!1})),await this.audioLoader.open({url:this.audioCurrentUri},{from:0,to:-1}),this.audioLoader.read(e)}return this.audioLoader=new T.A(m.X$({},this.options,{disableSegment:!0,loop:!1})),this.audioInitSegmentPadding?(await this.audioLoader.open({url:this.audioInitSegmentPadding},{from:0,to:-1}),this.audioInitSegmentPadding=null,this.audioSegmentIndex--):await this.audioLoader.open({url:this.audioSegments[this.audioSegmentIndex]},{from:0,to:-1}),this.audioLoader.read(e)}async readVideo(e){let i=0;if(this.videoLoader){if(i=await this.videoLoader.read(e),-1048576!==i)return i;if(this.options.isLive)this.fetchedMap.set(this.videoCurrentUri,!0),10===this.fetchedHistoryList.length&&this.fetchedMap.delete(this.fetchedHistoryList.shift()),this.fetchedHistoryList.push(this.videoCurrentUri);else if(this.videoSegmentIndex++,this.videoSegmentIndex>=this.videoSegments.length)return-1048576;this.videoLoader=null}if(this.options.isLive){const i=this.videoSegments.filter((e=>!this.fetchedMap.get(e)));if(!i.length){if(this.mediaPlayList.isEnd)return-1048576;const i=(this.mediaPlayList.duration||this.mediaPlayList.minimumUpdatePeriod)-((0,A.A)()-this.mediaPlayList.timestamp)/1e3;if(i>0&&await new r.A(Math.max(i,2)),this.fetchMediaPlayListPromise){if(await this.fetchMediaPlayListPromise,3===this.status)return-1048576}else await this.fetchMediaPlayList();return this.readVideo(e)}return this.videoCurrentUri=i[0],this.videoLoader=new T.A(m.X$({},this.options,{disableSegment:!0,loop:!1})),await this.videoLoader.open({url:this.videoCurrentUri},{from:0,to:-1}),this.videoLoader.read(e)}return this.videoLoader=new T.A(m.X$({},this.options,{disableSegment:!0,loop:!1})),this.videoInitSegmentPadding?(await this.videoLoader.open({url:this.videoInitSegmentPadding},{from:0,to:-1}),this.videoInitSegmentPadding=null,this.videoSegmentIndex--):await this.videoLoader.open({url:this.videoSegments[this.videoSegmentIndex]},{from:0,to:-1}),this.videoLoader.read(e)}async read(e,i){return"audio"===i.mediaType?this.readAudio(e):this.readVideo(e)}async seek(e,i){this.audioLoader&&"audio"===i.mediaType&&(await this.audioLoader.abort(),this.audioLoader=null),this.videoLoader&&"video"===i.mediaType&&(await this.videoLoader.abort(),this.videoLoader=null);let t=Number(e);if(this.audioSegments&&"audio"===i.mediaType){let e=0;const i=this.mediaPlayList.mediaList.audio[this.audioSelectedIndex].mediaSegments;if(null!=i&&i.length)for(let a=0;a<i.length;a++)if(t>=1e3*i[a].start&&t<1e3*i[a].end){e=a;break}this.audioSegmentIndex=e+(this.mediaPlayList.mediaList.audio[this.audioSelectedIndex].initSegment?1:0)}if(this.videoSegments&&"video"===i.mediaType){let e=0;const i=this.mediaPlayList.mediaList.video[this.videoSelectedIndex].mediaSegments;if(null!=i&&i.length)for(let a=0;a<i.length;a++)if(t>=1e3*i[a].start&&t<1e3*i[a].end){e=a;break}this.videoSegmentIndex=e+(this.mediaPlayList.mediaList.video[this.videoSelectedIndex].initSegment?1:0)}4===this.status&&(this.status=2)}async size(){return BigInt(0)}async abort(){this.videoLoader&&(await this.videoLoader.abort(),this.videoLoader=null),this.audioLoader&&(await this.audioLoader.abort(),this.audioLoader=null)}async stop(){await this.abort(),this.status=0}getDuration(){return this.mediaPlayList.duration}hasVideo(){var e;return(null===(e=this.mediaPlayList)||void 0===e?void 0:e.mediaList.video.length)>0}hasAudio(){var e;return(null===(e=this.mediaPlayList)||void 0===e?void 0:e.mediaList.audio.length)>0}hasSubtitle(){var e;return(null===(e=this.mediaPlayList)||void 0===e?void 0:e.mediaList.subtitle.length)>0}getVideoList(){return this.hasVideo()?{list:this.mediaPlayList.mediaList.video.map((e=>({width:e.width,height:e.height,frameRate:e.frameRate}))),selectedIndex:this.videoSelectedIndex}:{list:[],selectedIndex:0}}getAudioList(){return this.hasAudio()?{list:this.mediaPlayList.mediaList.audio.map((e=>({lang:e.lang}))),selectedIndex:this.audioSelectedIndex}:{list:[],selectedIndex:0}}getSubtitleList(){return this.hasSubtitle()?{list:this.mediaPlayList.mediaList.subtitle.map((e=>({lang:e.lang,codecs:e.codecs}))),selectedIndex:0}:{list:[],selectedIndex:0}}selectVideo(e){if(e!==this.videoSelectedIndex&&this.hasVideo()&&e>=0&&e<this.mediaPlayList.mediaList.video.length){this.videoSelectedIndex=e;const i=this.mediaPlayList.mediaList.video[this.videoSelectedIndex];i.file?this.videoSegments=[i.file]:(this.videoSegments=[i.initSegment].concat(i.mediaSegments.map((e=>e.url))),this.videoInitSegmentPadding=i.initSegment)}}selectAudio(e){if(e!==this.audioSelectedIndex&&this.hasAudio()&&e>=0&&e<this.mediaPlayList.mediaList.audio.length){this.audioSelectedIndex=e;const i=this.mediaPlayList.mediaList.audio[this.audioSelectedIndex];i.file?this.audioSegments=[i.file]:(this.audioSegments=[i.initSegment].concat(i.mediaSegments.map((e=>e.url))),this.audioInitSegmentPadding=i.initSegment)}}selectSubtitle(e){}getMinBuffer(){return this.minBuffer}}}}]);