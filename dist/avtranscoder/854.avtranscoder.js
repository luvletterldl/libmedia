"use strict";(self.webpackChunkAVTranscoder=self.webpackChunkAVTranscoder||[]).push([[854],{85947:(t,e,n)=>{n.d(e,{A:()=>r});var i=n(134);class r{constructor(){(0,i.A)(this,"type",-1),(0,i.A)(this,"onStreamAdd",void 0)}destroy(t){}}},98854:(t,e,n)=>{n.r(e),n.d(e,{default:()=>m});var i=n(134),r=n(73146),a=n.n(r),o=n(50932),s=n(4624),u=n(9705),c=n(85947),d=n(14686),l=n(37837),f=n(71517),g=n(72739),h=n(50011),p=n(38115);class m extends c.A{constructor(){super(),(0,i.A)(this,"type",19),(0,i.A)(this,"queue",void 0),(0,i.A)(this,"index",void 0)}init(t){this.queue=[]}async readHeader(t){const e=t.createStream();e.codecpar.codecId=94232,e.codecpar.codecType=3,e.timeBase.den=1e3,e.timeBase.num=1;let n="";if(1&t.ioReader.flags){const e=await t.ioReader.fileSize();n=await t.ioReader.readString(0|Number(0xffffffffn&e))}else try{n+=await t.ioReader.readLine()+"\n"}catch(t){}if(h){const t=p.q(n);if(this.queue=t.queue,t.head){const n=a()(t.head),i=h.encode(n);e.codecpar.extradata=(0,l.sY)(i.length),(0,d.lW)(e.codecpar.extradata,i.length,i),e.codecpar.extradataSize=i.length}}return this.index=0,0}async readAVPacket(t,e){if(!this.queue.length)return u.LR;if(this.index>=this.queue.length)return-1048576;const n=t.streams.find((t=>3===t.codecpar.codecType)),i=this.queue[this.index++];o.M[15](e+32,n.index),o.M[15](e+76,n.timeBase.den),o.M[15](e+72,n.timeBase.num),o.M[17](e+16,i.pts),o.M[17](e+8,i.pts),o.M[17](e+48,i.duration);const r=h.encode(i.context),a=(0,l.sY)(r.length);return(0,d.lW)(a,r.length,r),(0,f.NX)(e,a,r.length),0}async seek(t,e,n,i){if(2&i)return BigInt(u.E$);if(n<=BigInt(0))return this.index=0,BigInt(0);const r=g.El(this.queue,(t=>t.pts>n?-1:1));if(r>=0){for(s.Yz(`seek in cues, found index: ${r}, pts: ${this.queue[r].pts}`,"src/avformat/formats/ITtmlFormat.ts",143),this.index=Math.max(r-1,0);this.index>0&&this.queue[this.index-1].pts===this.queue[this.index].pts;)this.index--;return BigInt(0)}return BigInt(u.LR)}getAnalyzeStreamsCount(){return 1}}},38115:(t,e,n)=>{n.d(e,{q:()=>s});var i=n(79331),r=n(67672),a=n(72739),o=n(54825);function s(t){const e=(0,i.A)(t,{aloneValueName:"context"});if(!e.tt)return{queue:[],head:{}};const n=[];function s(t){let e="";return a.__(t,(t=>{r.Yj(t)?e+=t:t.context?e+=`<${t.tagName}>${t.context}</${t.tagName}>`:e+=`<${t.tagName}/>`})),e}function u(t,e,i){var a;const u=(0,o.j)(e||t.begin);let c=t.context||"",d=t.region||"Default";r.YO(c)&&(c=s(c)),null!==(a=t.span)&&void 0!==a&&a.context&&(t.span.region&&(d=t.span.region),r.Yj(t.span.context)?c+=t.span.context:c+=s(t.span.context)),n.push({context:c,pts:u,region:d,duration:t.dur?(0,o.j)(t.dur):(0,o.j)(i||t.end)-u})}function c(t,e,n){r.YO(t)?a.__(t,(t=>{u(t,e,n)})):u(t,e,n)}return e.tt.body&&e.tt.body.div&&(r.YO(e.tt.body.div)?a.__(e.tt.body.div,(t=>{t.p&&c(t.p,t.begin,t.end)})):e.tt.body.div.p&&c(e.tt.body.div.p,e.tt.body.div.begin,e.tt.body.end)),{queue:n,head:e.tt.head||{}}}},54825:(t,e,n)=>{function i(t){if(!(t=t.trim()))return-BigInt(1);let e=t.split(":"),n=BigInt(0);return 3===e.length&&(n+=BigInt(+e.shift().trim())*BigInt(36e5)),n+=BigInt(+e.shift().trim())*BigInt(6e4),e=e.shift().trim().split("."),n+=BigInt(+e.shift().trim())*BigInt(1e3),n+=BigInt(+e.shift().trim()),n}function r(t){if(!(t=t.trim()))return-BigInt(1);let e=t.split(":"),n=BigInt(0);return 3===e.length&&(n+=BigInt(+e.shift().trim())*BigInt(36e5)),n+=BigInt(+e.shift().trim())*BigInt(6e4),e=e.shift().trim().split(","),n+=BigInt(+e.shift().trim())*BigInt(1e3),n+=BigInt(+e.shift().trim()),n}n.d(e,{j:()=>i,t:()=>r})},79331:(t,e,n)=>{n.d(e,{A:()=>u});var i=n(68632),r=n.n(i),a=n(72739);const o={aloneValueName:"_@attribute"},s=[" ","/",'"',"'","<",">"];function u(t,e=o){t=(t=(t=(t=t.replace(/<!--[\s\S]*?-->/g,"")).replace(/[\n\t\r]/g,"")).replace(/>[ \t]+</g,"><")).replace(/<\?[^>]*\?>/g,"");const n=[];let i=0;function u(t,i){const a=n[n.length-1];a&&(t===e.aloneValueName||null==a.obj[e.aloneValueName]?null==a.obj[t]?a.obj[t]=i:r()(a.obj[t])?a.obj[t].push(i):a.obj[t]=[a.obj[t],i]:a.obj[e.aloneValueName]=[a.obj[e.aloneValueName],{tagName:t,...i}])}function c(e){for(;i<t.length;){if(t[i]===e)return!0;i++}return!1}function d(){l();let e="";for(;i<t.length&&!a.zy(s,t[i]);)e+=t[i],i++;return e}function l(){for(;i<t.length&&/\s|\r|\n/.test(t[i]);)i++}const f=/\s/,g=/'/,h=/"/;function p(){if(i>=t.length)return!0;l();let e=f;'"'!==t[i]&&"'"!=t[i]||(e='"'===t[i]?h:g,i++);let n="";for(;i<t.length;){if(e.test(t[i])){i++;break}n+=t[i],i++}return n}function m(){l();let e="";for(;i<t.length&&"<"!==t[i];)e+=t[i],i++;return e}function b(){for(;"<"===t[i];){const e=i;if(i++,l(),"/"!==t[i]){i=e;break}if(i++,d()===n[n.length-1].tag){if(n.length>1){const t=n.pop();u(t.tag,t.obj)}c(">"),i++,l()}else n.pop(),c(">"),i++,l()}}return function r(){if(i>=t.length)return;let a=i;if(l(),"<"!==t[i])return i=a,u(e.aloneValueName,m()),b(),r();let o=c("<");if(!o)return;a=i,i++;const s=d();if(n.push({obj:{},tag:s,start:a}),function(){for(;l(),">"!==t[i]&&"/"!==t[i];){let t=d();if(!t)break;"="===t[t.length-1]?t=t.substring(0,t.length-1):(c("="),i++),u(t,p())}}(),l(),"/"===t[i]){if(i++,n.length>1){const t=n.pop();u(t.tag,t.obj)}return c(">"),i++,b(),r()}o=c(">"),o&&(i++,l(),"<"!==t[i]&&(u(e.aloneValueName,m()),l()),b(),r())}(),{[n[0].tag]:n[0].obj}}}}]);