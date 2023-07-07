/*! formstone v2.0.0-2 [formstone.jquery.js] 2023-07-07 | GPL-3.0 License | formstone.it */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Formstone=e():t.Formstone=e()}(window,(function(){return function(){"use strict";var t={d:function(e,i){for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{Background:function(){return B},CheckPoint:function(){return R},Cookie:function(){return W},Lightbox:function(){return q},MediaQuery:function(){return X},Navigation:function(){return it},Swap:function(){return st},Tabs:function(){return ot},Utils:function(){return i}});var i={};t.r(i),t.d(i,{addClass:function(){return k},element:function(){return u},extend:function(){return T},falsey:function(){return h},getAttr:function(){return $},hasAttr:function(){return I},hasClass:function(){return E},isFn:function(){return r},isObj:function(){return d},isReady:function(){return n},isU:function(){return c},iterable:function(){return b},iterate:function(){return f},normalizeAttrs:function(){return _},normalizeClasses:function(){return w},off:function(){return x},on:function(){return m},once:function(){return v},proto:function(){return l},ready:function(){return a},removeAttr:function(){return S},removeClass:function(){return C},select:function(){return g},setAttr:function(){return O},siblings:function(){return p},trigger:function(){return y},type:function(){return o}});let s=[];function a(t){"loading"===document.readyState?(s.push(t),document.addEventListener("DOMContentLoaded",n,!1)):t.call()}function n(){f(s,(t=>{t.call()}))}function o(t){return typeof t}function l(t){return Object.prototype.toString.call(t)}function h(t){return c(t)||!1===t||null===t}function r(t){return"function"===o(t)}function d(t){return"object"===o(t)}function c(t){return"undefined"===o(t)}function u(t){return document.createElement(t)}function g(t,e){return(e||document).querySelectorAll(t)}function p(t){return[...t.parentElement.children].filter((e=>e!=t))}function b(t){return["[object NodeList]","[object Array]"].includes(l(t))||(t=[t]),[...t].filter((t=>!h(t)))}function f(t,e){b(t).forEach(e)}function m(t,e,i,s){f(t,(t=>{t.addEventListener(e,i,s||null)}))}function v(t,e,i,s){m(t,e,i,T({once:!0,capture:!0===s},d(s)?s:{}))}function x(t,e,i){f(t,(t=>{t.removeEventListener(e,i)}))}function y(t,e,i){f(t,(t=>{t.dispatchEvent(new CustomEvent(e,{detail:i||null}))}))}function w(...t){return"[object Array]"===l(t[0])&&(t=t[0]),t.filter((t=>""!==t))}function E(t,e){return t.classList.contains(e)}function k(t,...e){e=w(...e),f(t,(t=>{t.classList.add(...e)}))}function C(t,...e){e=w(...e),f(t,(t=>{t.classList.remove(...e)}))}function I(t,e){return t.hasAttribute(e)}function $(t,e){return t.getAttribute(e)}function _(t,e){if("[object Object]"!==l(t)){let i={};i[`${t}`]=e,t=i}return Object.entries(t)}function O(t,e,i){e=_(e,i),f(t,(i=>{for(let[s,a]of e)h(a)?S(t,s):i.setAttribute(s,a)}))}function S(t,e){"[object Array]"!==l(e)&&(e=[e]),f(t,(t=>{f(e,(e=>{t.removeAttribute(e)}))}))}function T(...t){let e={},i=!1,s=0;"boolean"===o(t[0])&&(i=t[0],s++);let a=t=>{for(let s in t)Object.hasOwn(t,s)&&(i&&"[object Object]"===l(t[s])?e[s]=T(e[s],t[s]):e[s]=t[s])};for(;s<t.length;s++)a(t[s]);return e}class L{static#t={};static bind(t,e,i){t=this.#e(t);let s=window.matchMedia(e),a=this.#e(s.media);this.#t[a]||(this.#t[a]={mq:s,active:!0,enter:{},leave:{}},m(s,"change",(t=>{this.#i(t)}))),f(Object.entries(i),(i=>{let s=i[0],n=i[1];this.#t[a][s]&&(this.#t[a][s][t]?console.warn(`MediaQuery: '${t}' ${e} already exists and can not be bound`):this.#t[a][s][t]=n)}));let n=this.#t[a];s.matches&&n.enter[t]?(n.enter[t].apply(s),n.active=!0):!s.matches&&n.leave[t]&&(n.leave[t].apply(s),n.active=!1)}static unbind(t,e){if(t)if(e){var i=this.#e(e);this.#t[i]&&(this.#t[i].enter[t]&&delete this.#t[i].enter[t],this.#t[i].leave[t]&&delete this.#t[i].leave[t])}else f(Object.entries(this.#t),(e=>{let i=e[1];i.enter[t]&&delete i.enter[t],i.leave[t]&&delete i.leave[t]}))}static#i(t){let e=L.#e(t.media),i=this.#t[e],s=t.matches?"enter":"leave";i&&(i.active||!i.active&&t.matches)&&(f(Object.entries(i[s]),(t=>{t[1].apply(i.mq)})),i.active=!0)}static#e(t){return t.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").replace(/^\s+|\s+$/g,"")}}var P=L;class A{static#s=1;static#a={alt:"",autoPlay:!0,lazy:!1,lazyOffset:"100px",loop:!0,mute:!0,source:null,youtubeOptions:{}};static defaults(t){this.#a=T(!0,this.#a,t)}static construct(t,e){let i=g(t);return f(i,(t=>{t.Background||new A(t,e)})),i}constructor(t,e){if(t.Background)return void console.warn("Background: Instance already exists",t);let i={},s=t.dataset;try{i=JSON.parse(s.backgroundOptions||"{}")}catch(e){console.warn("Background: Error parsing options JSON",t)}Object.assign(this,T(!0,this.constructor.#a,e||{},i)),this.el=t,this.guid=this.constructor.#s++,this.guidClass=`fs-background-element-${this.guid}`,this.layerGuid=0,this.container=u("div"),k(this.container,"fs-background-container"),O(this.container,"aria-hidden","true"),this.container.tabIndex=-1,t.append(this.container),k(t,"fs-background",this.guidClass),this.lazy?(k(t,"fs-background-lazy"),this.observer=new IntersectionObserver(((t,e)=>{f(t,(t=>{this.#n(t)}))}),{root:null,threshold:0,rootMargin:`0px 0px ${this.lazyOffset} 0px`}),this.observer.observe(t)):this.#o(this.source),t.Background=this}destroy(){this.container.remove(),C(this.el,"fs-background",this.guidClass),this.el.Background=null,delete this.el.Background}#n(t){t.isIntersecting&&(this.observer.unobserve(this.el),this.observer=null,this.#o(this.source))}#o(){let t=this.source;this.source="",this.load(t)}load(t){if(k(this.el,"fs-background-loaded"),t!==this.source){if(this.source=t,this.sources=null,this.responsive=!1,this.player=null,this.playerReady=!0,this.playing=!1,this.isVideo=d(t)&&!!(t.mp4||t.ogg||t.webm),this.isYouTube=!this.isVideo&&d(t)&&!!t.youtube,this.isImage=!this.isVideo&&!this.isYouTube,this.isImage){let e=t;if(d(t)){let e=[],i=[];f(Object.keys(t),(t=>{i.push(t)})),i.sort(((t,e)=>parseInt(t,10)-parseInt(e,10)));for(let s=0;s<i.length;s++){let a=i[s],n=parseInt(a,10),o=`(min-width: ${n}px)`;s+1<i.length&&(o=`(min-width: ${n}px) and (max-width: ${parseInt(i[s+1],10)-1}px)`),e.push({width:n,url:t[a],mediaquery:P.bind(`background-${this.guid}-${o}`,o,{enter:()=>{this.#l(t[a])}})})}this.sources=e}else this.#l(e)}this.isVideo&&this.#h(t),this.isYouTube&&this.#r(t)}else y(this.el,"background:loaded")}#l(t){this.layerGuid++;let e=u("div");e.ariaHidden=!0,e.className="fs-background-media fs-background-image",e.style.opacity=0,e.style.backgroundImage=`url(${t})`,O(e,"data-background-layer",this.layerGuid),this.container.append(e);let i=new Image;i.onload=()=>{this.#d(e)},i.src=t,this.source=t}#h(t){t.poster&&this.#l(t.poster),this.layerGuid++;let e=u("div"),i=u("video");if(e.ariaHidden=!0,e.className="fs-background-media fs-background-video",e.style.opacity=0,O(e,"data-background-layer",this.layerGuid),i.playsinline=!0,i.preload="auto",i.tabIndex=-1,this.loop&&(i.loop=!0),this.mute&&(i.muted=!0),this.autoPlay&&(i.autoplay=!0),t.webm){let e=u("source");e.type="video/webm",e.src=t.webm,i.append(e)}if(t.mp4){let e=u("source");e.type="video/mp4",e.src=t.mp4,i.append(e)}if(t.ogg){let e=u("source");e.type="video/ogg",e.src=t.ogg,i.append(e)}v(i,"loadeddata",(t=>{this.#d(e),this.autoPlay&&this.play()})),e.append(i),this.container.append(e),this.source=t}#r(t){let e=t.youtube.match(/(?:(?:youtube\.com|youtube-nocookie\.com)\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);this.youTubeId=e[1];let i="youtube.com";if(t.poster||(t.poster=`//img.${i}/vi/${this.youTubeId}/maxresdefault.jpg`),this.#l(t.poster),this.layerGuid++,!g(`script[src*="${i}/iframe_api"]`).length){let t=u("script");t.src=`//www.${i}/iframe_api`,document.head.append(t)}if(j){let t=`fs-background-${this.guid}-${this.layerGuid}`,e=u("div"),s=u("div");s.id=t,e.ariaHidden=!0,e.className="fs-background-media fs-background-embed",e.style.opacity=0,O(e,"data-background-layer",this.layerGuid),e.append(s),this.container.append(e);let a=T(!0,{},{controls:0,rel:0,showinfo:0,wmode:"transparent",enablejsapi:1,version:3,playerapiid:t,loop:this.loop?1:0,mute:1,origin:`${window.location.protocol}//${window.location.host}`},this.youtubeOptions,{autoplay:1});this.player=new window.YT.Player(t,{host:`https://www.${i.replace(".com","-nocookie.com")}`,videoId:this.youTubeId,playerVars:a,events:{onReady:t=>{g("iframe",this.container)[0].tabIndex=-1,this.playerReady=!0,this.mute&&this.player.mute(),this.autoPlay?this.player.playVideo():this.player.pauseVideo()},onStateChange:t=>{this.playing||t.data!==window.YT.PlayerState.PLAYING?this.loop&&this.playing&&t.data===window.YT.PlayerState.ENDED&&this.player.playVideo():(this.playing=!0,this.#d(e))},onPlaybackQualityChange:t=>{},onPlaybackRateChange:t=>{},onError:t=>{},onApiChange:t=>{}}})}else z.push({el:this,source:t})}play(){if(this.isYouTube)this.playerReady?this.player.playVideo():this.autoPlay=!0;else if(this.isVideo){let t=g("video",this.container);t.length&&t[0].play()}this.playing=!0}pause(){if(this.isYouTube)this.playerReady?this.player.pauseVideo():this.autoPlay=!1;else if(this.video){let t=g("video",this.container);t.length&&t[0].pause()}this.playing=!1}mute(){if(this.isYouTube&&this.playerReady)this.player.mute();else if(this.video){let t=g("video",this.container);t.length&&(t[0].muted=!0)}this.mute=!0}unmute(){if(this.isYouTube&&this.playerReady)this.player.unMute(),this.playing&&this.player.playVideo();else if(this.video){let t=g("video",this.container);t.length&&(t[0].muted=!1)}this.mute=!1}#d(t){let e=$(t,"data-background-layer");v(t,"transitionend",(t=>{this.onLoadTimer&&(clearTimeout(this.onLoadTimer),this.onLoadTimer=null),this.onLoadTimer=setTimeout((()=>{f(g(`div:not([data-background-layer="${e}"]):not([data-background-layer="${this.layerGuid}"])`,this.container),(t=>{t.remove()}))}),500)})),t.style.opacity=1,y(this.el,"background:loaded")}}let j=!1,z=[],N=r(window.onYouTubeIframeAPIReady)?window.onYouTubeIframeAPIReady:null;window.onYouTubeIframeAPIReady=()=>{N&&N.call(),j=!0,f(z,(t=>{t.el.load(t.source)})),z=[]};var M=A;function H(t,e){"undefined"!=typeof jQuery&&(jQuery.fn[e.toLowerCase()]=function(i,...s){return jQuery(this).each(((a,n)=>{!i||d(i)?new t(n,i):n[e]&&r(n[e][i])&&n[e][i](...s)}))})}function V(t,e){"undefined"!=typeof jQuery&&(jQuery[e.toLowerCase()]=function(e,...i){if(r(t[e]))return t[e](...i)})}H(M,"Background"),V(M,"Background");var B=M;class D{static#s=1;static#a={intersect:"bottom",offset:"0px",reverse:!1};static defaults(t){this.#a=T(!0,this.#a,t)}static construct(t,e){let i=g(t);return f(i,(t=>{t.CheckPoint||new D(t,e)})),i}constructor(t,e){if(t.CheckPoint)return void console.warn("Checkpoint: Instance already exists",t);let i={},s=t.dataset;try{i=JSON.parse(s.checkpointOptions||"{}")}catch(e){console.warn("Checkpoint: Error parsing options JSON",t)}Object.assign(this,T(!0,this.constructor.#a,e||{},i)),this.el=t,this.guid=this.constructor.#s++,this.guidClass=`fs-checkpoint-element-${this.guid}`,this.enabled=!1,this.active=!1,this.hasActived=!1,this.parent=s.checkpointParent||null,this.parentEl=this.parent?g(this.parent)[0]:null,this.container=s.checkpointContainer||null,k(this.el,this.guidClass),this.target=this.container||`.${this.guidClass}`,this.targetEl=g(this.target),this.intersect=s.checkpointIntersect||this.intersect,this.offset=s.checkpointOffset||this.offset,this.margin=`0px 0px -${this.offset} 0px`,this.edge=parseInt(this.offset,10),this.percent=this.offset.includes("%")?this.edge/100:null,this.observer=new IntersectionObserver(((t,e)=>{f(t,(t=>{this.#n(t)}))}),{root:this.parentEl||null,threshold:0,rootMargin:this.margin}),this.enable(),t.CheckPoint=this}destroy(){this.disable(),C(this.el,this.guidClass),this.observer=null,this.el.CheckPoint=null,delete this.el.CheckPoint}#n(t){let e=this.parentEl?this.parentEl.innerHeight:window.innerHeight,i=e-(this.percent?e*this.percent:this.edge);t.isIntersecting||t.boundingClientRect.top<i?this.activate():this.deactivate()}enable(){this.enabled||(this.enabled=!0,k(this.el,"fs-checkpoint"),f(this.targetEl,(t=>{this.observer.observe(t)})))}disable(){this.enabled&&(this.deactivate(),this.enabled=!1,C(this.el,"fs-checkpoint","fs-checkpoint-active"),f(this.targetEl,(t=>{this.observer.unobserve(t)})))}activate(){this.enabled&&!this.active&&(this.active=!0,this.hasActived=!0,k(this.el,"fs-checkpoint-active"),y(this.el,"checkpoint:activate",{}))}deactivate(){this.enabled&&this.active&&!this.hasActived&&(this.active=!1,C(this.el,"fs-checkpoint-active"),y(this.el,"checkpoint:deactivate",{}))}}var G=D;H(G,"CheckPoint"),V(G,"CheckPoint");var R=G,Y=class{static#a={domain:null,expires:6048e5,path:null,samesite:"Lax",secure:null};static defaults(t){this.#a=T(!0,this.#a,t)}static set(t,e,i){let s=!1,a=new Date;"number"===o((i=T(!0,this.#a,i||{})).expires)&&(a.setTime(a.getTime()+i.expires),s=a.toGMTString());let n=i.domain?"; domain="+i.domain:"",l=s?"; expires="+s:"",h=s?"; max-age="+i.expires/1e3:"",r=i.path?"; path="+i.path:"",d=i.samesite?"; samesite="+i.samesite:"",c=i.secure?"; secure":"";document.cookie=`${t}=${e}${l}${h}${n}${r}${d}${c}`}static get(t){let e=`${t}=`,i=document.cookie.split(";");for(var s=0;s<i.length;s++){let t=i[s].trim();if(0===t.indexOf(e))return t.substring(e.length,t.length)}return null}static delete(t,e){this.set(t,"",T({},e,{expires:-6048e5}))}};V(Y,"Cookie");var W=Y;function Z(t){return"//www.youtube.com/embed/"+t[1]}function J(t){return"//player.vimeo.com/video/"+t[3]}class K{static#s=1;static#a={fileTypes:/\.(jpg|sjpg|jpeg|png|gif)/i,iframeWidth:"900px",threshold:50,templates:{container:'\n<div class="fs-lightbox" role="dialog" aria-modal="true">\n  <div class="fs-lightbox-overlay"></div>\n  <div class="fs-lightbox-loading">[loading]</div>\n  <button type="button" class="fs-lightbox-close" aria-label="Close">[close]</button>\n  <div class="fs-lightbox-container"></div>\n  <button type="button" class="fs-lightbox-control fs-lightbox-control_previous" aria-label="Previous">[previous]</button>\n  <button type="button" class="fs-lightbox-control fs-lightbox-control_next" aria-label="Next">[next]</button>\n</div>',zoom:'\n<button type="button" class="fs-lightbox-zoom fs-lightbox-zoom_in" aria-label="Zoom In">[zoomIn]</button>\n<button type="button" class="fs-lightbox-zoom fs-lightbox-zoom_out" aria-label="Zoom Out">[zoomOut]</button>',close:'<span class="fs-lightbox-sr">Close</span><svg viewBox="-6 -6 24 24" fill="currentColor"><path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></path></svg>',loading:'<span class="fs-lightbox-sr">Loading</span>',previous:'<span class="fs-lightbox-sr">Previous</span><svg viewBox="-5 -5 24 24" fill="currentColor"><path d="M3.414 7.657l3.95 3.95A1 1 0 0 1 5.95 13.02L.293 7.364a.997.997 0 0 1 0-1.414L5.95.293a1 1 0 1 1 1.414 1.414l-3.95 3.95H13a1 1 0 0 1 0 2H3.414z"></path></svg>',next:'<span class="fs-lightbox-sr">Next</span><svg viewBox="-5 -5 24 24" fill="currentColor"><path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z"></path></svg>',zoomIn:'<span class="fs-lightbox-sr">Zoom In</span><svg viewBox="-2.5 -2.5 24 24" fill="currentColor"><path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414zM9 7h2a1 1 0 0 1 0 2H9v2a1 1 0 0 1-2 0V9H5a1 1 0 1 1 0-2h2V5a1 1 0 1 1 2 0v2z"></path></svg>',zoomOut:'<span class="fs-lightbox-sr">Zoom Out</span><svg viewBox="-2.5 -2.5 24 24" fill="currentColor"><path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414zM5 7h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2z"></path></svg>'},videoProviders:{youtube:{pattern:/(?:(?:youtube\.com|youtube-nocookie\.com)\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,format:Z},vimeo:{pattern:/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,format:J}}};static defaults(t){this.#a=T(!0,this.#a,t)}static construct(t,e){let i=g(t);return f(i,(t=>{t.Lightbox||new K(t,e)})),i}constructor(t,e){if(t.Lightbox)return void console.warn("Lightbox: Instance already exists",t);let i={},s=t.dataset;try{i=JSON.parse(s.lightboxOptions||"{}")}catch(e){console.warn("Lightbox: Error parsing options JSON",t)}Object.assign(this,T(!0,this.constructor.#a,e||{},i)),this.el=t,this.guid=this.constructor.#s++,this.guidClass=`fs-lightbox-element-${this.guid}`,this.gallery=s.lightboxGallery||null,this.isOpen=!1,this.isTouching=!1,k(this.el,this.guidClass),m(this.el,"click",this.#c),t.Lightbox=this}destroy(){this.close(),C(this.el,this.guidClass),x(this.el,"click",this.#c),this.el.Lightbox=null,delete this.el.Lightbox}open(t){this.isOpen||(this.index=t,this.#u(),this.listeners={close:this.#g(),next:this.#p(),previous:this.#b(),container:this.#f(),keydown:this.#m(),pointerdown:this.#v(),pointermove:this.#x(),pointerup:this.#y(),zoomin:this.#w(),zoomout:this.#E()},this.#k(),this.#C(),this.#I(),setTimeout((()=>{k(this.lightboxEl,"fs-lightbox-open"),this.isOpen=!0,this.lightboxEl.focus()}),0))}close(){this.isOpen&&(C(this.lightboxEl,"fs-lightbox-open"),this.#$(),x(window,"keydown",this.listeners.keydown),v(this.lightboxEl,"transitionend",(t=>{f(this.items,((t,e)=>{t.isElement&&t.targetEl.append(...t.frameEl.childNodes)})),this.lightboxEl.remove(),this.isOpen=!1,this.el.focus()})))}next(){this.index++,this.#_(),this.#C()}previous(){this.index--,this.#_(),this.#C()}jump(t){this.index=t,this.#_(),this.#C()}#u(){this.selector=this.gallery?`[data-lightbox-gallery="${this.gallery}"]`:`.${this.guidClass}`;let t=g(this.selector);this.items=[],f(t,((t,e)=>{if("A"===t.tagName){let i=t.href,s=t.hash,a=t.dataset.lightboxType||"",n="image"===a||this.#O(i),o="video"===a||!!this.#S(i),l="url"===a||!n&&!o&&"http"===i.substr(0,4)&&!s,h="element"===a||!n&&!o&&!l&&"#"===s.substr(0,1);this.index||t!=this.el||(this.index=e),this.items.push({source:i,hash:s,isLoaded:!1,isImage:n,isVideo:o,isIframe:l,isElement:h,caption:t.dataset.lightboxCaption||$(t,"title"),zoomed:!1})}}))}#k(){let t=this.templates.container.replace("[close]",this.templates.close).replace("[loading]",this.templates.loading).replace("[previous]",this.templates.previous).replace("[next]",this.templates.next);document.body.insertAdjacentHTML("beforeend",t),this.lightboxEl=g(".fs-lightbox")[0],this.overlayEl=g(".fs-lightbox-overlay",this.lightboxEl)[0],this.closeEl=g(".fs-lightbox-close",this.lightboxEl)[0],this.loadingEl=g(".fs-lightbox-loading",this.lightboxEl)[0],this.containerEl=g(".fs-lightbox-container",this.lightboxEl)[0],this.controlPreviousEl=g(".fs-lightbox-control_previous",this.lightboxEl)[0],this.controlNextEl=g(".fs-lightbox-control_next",this.lightboxEl)[0],this.items.length>1&&k(this.lightboxEl,"fs-lightbox-gallery"),f(this.items,((t,e)=>{t.isImage&&this.#T(t,e),t.isVideo&&this.#L(t,e),t.isIframe&&this.#P(t,e),t.isElement&&this.#A(t,e),this.items.length>1&&m(t.mediaEl,"pointerdown",this.listeners.pointerdown)})),v(this.closeEl,"click",this.listeners.close),m(this.controlPreviousEl,"click",this.listeners.previous),m(this.controlNextEl,"click",this.listeners.next),m(this.containerEl,"click",this.listeners.container),m(window,"keydown",this.listeners.keydown)}#T(t,e){let i=u("div"),s=u("div"),a=u("div"),n=u("img");k(i,"fs-lightbox-item",`fs-lightbox-item_${e}`),k(s,"fs-lightbox-wrap"),k(a,"fs-lightbox-media","fs-lightbox-media_image"),k(n,"fs-lightbox-image"),O(n,{"data-src":t.source,draggable:"false"}),a.append(n),s.append(a),i.append(s),this.#j(t,i),this.containerEl.append(i),t.el=i,t.mediaEl=a;let o=this.templates.zoom.replace("[zoomIn]",this.templates.zoomIn).replace("[zoomOut]",this.templates.zoomOut);s.insertAdjacentHTML("beforeend",o);let l=g(".fs-lightbox-zoom_in",i)[0],h=g(".fs-lightbox-zoom_out",i)[0];console.log(l),m(l,"click",this.listeners.zoomin),m(h,"click",this.listeners.zoomout)}#L(t,e){let i=this.#S(t.source),s=t.source.split("?"),a=["&origin="+encodeURIComponent(window.location.protocol+"//"+window.location.hostname),"&enablejsapi=1"];s.length>=2&&a.push(s.slice(1)[0].trim());let n=`${i}?${a.join("&")}`,o=u("div"),l=u("div"),h=u("div"),r=u("div"),d=u("iframe");k(o,"fs-lightbox-item",`fs-lightbox-item_${e}`),k(l,"fs-lightbox-wrap"),k(h,"fs-lightbox-media","fs-lightbox-media_video"),k(r,"fs-lightbox-video"),O(d,{frameborder:"0",seamless:"seamless",allowfullscreen:"","data-src":n}),r.append(d),h.append(r),l.append(h),o.append(l),this.#j(t,o),this.containerEl.append(o),t.el=o,t.mediaEl=h}#P(t,e){let i=u("div"),s=u("div"),a=u("div"),n=u("div"),o=u("iframe");k(i,"fs-lightbox-item",`fs-lightbox-item_${e}`),k(s,"fs-lightbox-wrap"),k(a,"fs-lightbox-media","fs-lightbox-media_iframe"),k(n,"fs-lightbox-iframe"),O(o,{frameborder:"0",seamless:"seamless","data-src":t.source}),n.append(o),a.append(n),s.append(a),i.append(s),this.#j(t,i),this.containerEl.append(i),t.el=i,t.mediaEl=a,t.frameEl=n}#A(t,e){let i=u("div"),s=u("div"),a=u("div"),n=u("div");t.targetEl=g(t.hash)[0],k(i,"fs-lightbox-item",`fs-lightbox-item_${e}`,"fs-lightbox-loaded"),k(s,"fs-lightbox-wrap"),k(a,"fs-lightbox-media","fs-lightbox-media_element"),k(n,"fs-lightbox-element"),n.append(...t.targetEl.childNodes),a.append(n),s.append(a),i.append(s),this.#j(t,i),this.containerEl.append(i),t.isLoaded=!0,t.el=i,t.mediaEl=a,t.frameEl=n}#C(){f(this.items,((t,e)=>{C(t.el,"fs-lightbox-active","fs-lightbox-item_previous","fs-lightbox-item_next"),e===this.index?(k(t.el,"fs-lightbox-active"),S(t.el,"aria-hidden"),t.isLoaded?this.#z():(this.#N(),this.#M(t,e))):(v(t.el,"transitionend",(i=>{this.#H(t,e)})),O(t.el,"aria-hidden","true")),e<this.index&&k(t.el,"fs-lightbox-item_previous"),e>this.index&&k(t.el,"fs-lightbox-item_next")})),O(this.controlPreviousEl,"disabled",0===this.index),O(this.controlNextEl,"disabled",this.index===this.items.length-1)}#M(t,e){e===this.index&&f(g("[data-src]",t.el),(e=>{v(e,"load",(e=>{k(t.el,"fs-lightbox-loaded"),t.isLoaded=!0,this.#z()})),e.src=$(e,"data-src")}))}#H(t,e){e!=this.index&&(t.isImage&&this.#V(t),(t.isVideo||t.isIframe)&&t.isLoaded)&&(f(g("[data-src]",t.el),(t=>{t.src=""})),C(t.el,"fs-lightbox-loaded"),t.isLoaded=!1)}#N(){k(this.loadingEl,"fs-lightbox-visible")}#z(){C(this.loadingEl,"fs-lightbox-visible")}#$(){f(p(this.lightboxEl),(t=>{O(t,"aria-hidden",t.dataset.lightboxAriaHidden||!1),delete t.dataset.lightboxAriaHidden}))}#I(){f(p(this.lightboxEl),(t=>{t.dataset.lightboxAriaHidden=$(t,"aria-hidden")||"",O(t,"aria-hidden",!0)}))}#_(){this.index<0&&(this.index=0),this.index>=this.items.length&&(this.index=this.items.length-1)}#O(t){return null!==t.match(this.fileTypes)||"data:image"===t.substr(0,10)}#S(t){for(let e in this.videoProviders){let i=this.videoProviders[e],s=t.match(i.pattern);if(null!==s)return i.format.call(this,s)}return!1}#j(t,e){t.caption&&e.insertAdjacentHTML("beforeend",`<div class="fs-lightbox-details">${t.caption}</div>`)}#c(t){t.preventDefault(),t.stopPropagation(),this.Lightbox.open()}#f(){return t=>{let e=this.items[this.index].mediaEl;t.target===e||e.contains(t.target)||this.close()}}#g(){return t=>{this.close()}}#b(){return t=>{this.previous()}}#p(){return t=>{this.next()}}#m(){return t=>{"ArrowLeft"===t.key&&this.previous(),"ArrowRight"===t.key&&this.next(),"Escape"===t.key&&this.close()}}#v(){return t=>{this.isTouching=!0,this.pointerStartX=t.clientX,this.containerEl.setPointerCapture(t.pointerId),k(this.containerEl,"fs-lightbox-touching"),m(this.containerEl,"pointermove",this.listeners.pointermove),m(this.containerEl,"pointerup",this.listeners.pointerup)}}#x(){return t=>{let e=this.items[this.index];if(e.zoomed);else{let i=-(this.pointerStartX-t.clientX);e.el.style.transform=`translate3d(${i}px, 0, 0)`}}}#y(){return t=>{let e=this.items[this.index];if(C(this.containerEl,"fs-lightbox-touching"),x(this.containerEl,"pointermove",this.listeners.pointermove),x(this.containerEl,"pointerup",this.listeners.pointerup),e.zoomed);else{let i=this.pointerStartX-t.clientX;e.el.style.transform=null,Math.abs(i)>this.threshold&&(i<0&&this.previous(),i>0&&this.next())}this.isTouching=!1,v(this.containerEl,"click",(t=>{t.stopPropagation()}),!0)}}#w(){return t=>{t.stopPropagation(),console.log("Zoom in");let e=this.items[this.index];e.zoomed=!0,k(e.el,"fs-lightbox-zoomed"),console.log(e,e.el)}}#E(){return t=>{t.stopPropagation(),console.log("Zoom out");let e=this.items[this.index];this.#V(e)}}#V(t){t.zoomed=!1,C(t.el,"fs-lightbox-zoomed")}}var Q=K;H(Q,"Lightbox"),V(Q,"Lightbox");var q=Q;V(P,"MediaQuery");var X=P;class U{static#s=1;static#a={classes:{enabled:"fs-swap-enabled",active:"fs-swap-active",inactive:"fs-swap-inactive"},collapse:!0,maxWidth:1/0,minWidth:"0px"};static defaults(t){this.#a=T(!0,this.#a,t)}static construct(t,e){let i=g(t);return f(i,(t=>{t.Swap||new U(t,e)})),i}constructor(t,e){if(t.Swap)return void console.warn("Swap: Instance already exists",t);let i={},s=t.dataset;try{i=JSON.parse(s.swapOptions||"{}")}catch(e){console.warn("Swap: Error parsing options JSON",t)}Object.assign(this,T(!0,this.constructor.#a,e||{},i)),this.el=t,this.guid=this.constructor.#s++,this.guidClass=`fs-swap-element-${this.guid}`,this.guidTarget=`fs-swap-target-${this.guid}`,this.enabled=!1,this.group=!!s.swapGroup&&`[data-swap-group="${s.swapGroup}"]`,this.linked=!!s.swapLinked&&`[data-swap-linked="${s.swapLinked}"]`,this.target=s.swapTarget||null,this.targetEl=g(this.target);let a=this.maxWidth===1/0?"100000px":this.maxWidth;this.mq=`(min-width: ${this.minWidth}) and (max-width: ${a})`,k(this.el,this.guidClass),k(this.targetEl,this.guidTarget),this.toggleEl=g(`.${this.guidClass}, .${this.guidTarget}`),P.bind(this.guidClass,this.mq,{enter:()=>{this.enable()},leave:()=>{this.disable()}}),t.Swap=this}destroy(){this.disable(),C(this.toggleEl,this.guidClass,this.guidTarget),this.el.Swap=null,delete this.el.Swap}enable(t){if(!this.enabled){if(this.enabled=!0,k(this.toggleEl,this.classes.enabled,this.classes.inactive),m(this.el,"click",this.#c),!this.collapse&&this.group){let t=g(this.group);Array.from(t).filter((t=>I(t,"data-swap-active"))).length||(t[0].dataset.swapActive="true")}y(this.toggleEl,"swap:enable"),this.el.dataset.swapActive&&this.activate(),!t&&this.linked&&f(g(this.linked),(t=>{t.Swap&&!E(t,this.guidClass)&&t.Swap.enable(!0)}))}}disable(t){this.enabled&&(this.enabled=!1,this.active=!1,C(this.toggleEl,this.classes.enabled,this.classes.active,this.classes.inactive),x(this.el,"click",this.#c),y(this.toggleEl,"swap:disable"),!t&&this.linked&&f(g(this.linked),(t=>{t.Swap&&!E(t,this.guidClass)&&t.Swap.disable(!0)})))}activate(t){this.enabled&&!this.active&&(this.active=!0,C(this.toggleEl,this.classes.inactive),k(this.toggleEl,this.classes.active),t||(y(this.toggleEl,"swap:activate"),this.linked&&f(g(this.linked),(t=>{t.Swap&&!E(t,this.guidClass)&&t.Swap.activate(!0)}))),this.group&&f(g(this.linked?`${this.group}:not(${this.linked})`:this.group),(t=>{t.Swap&&!E(t,this.guidClass)&&t.Swap.deactivate(!0)})))}deactivate(t){this.enabled&&this.active&&(this.active=!1,C(this.toggleEl,this.classes.active),k(this.toggleEl,this.classes.inactive),t||(y(this.toggleEl,"swap:deactivate"),this.linked&&f(g(this.linked),(t=>{t.Swap&&!E(t,this.guidClass)&&t.Swap.deactivate(!0)}))))}#c(t){t.preventDefault(),t.stopPropagation();let e=this.Swap;e.active&&e.collapse?e.deactivate():e.activate()}}var F=U;class tt{static#s=1;static#a={gravity:"left",label:"Menu",maxWidth:"980px",type:"toggle"};static defaults(t){this.#a=T(!0,this.#a,t)}static construct(t,e){let i=g(t);return f(i,(t=>{t.Navigation||new tt(t,e)})),i}constructor(t,e){if(t.Navigation)return void console.warn("Navigation: Instance already exists",t);let i={},s=t.dataset;try{i=JSON.parse(s.navigationOptions||"{}")}catch(e){console.warn("Navigation: Error parsing options JSON",t)}Object.assign(this,T(!0,this.constructor.#a,e||{},i)),this.el=t,this.guid=this.constructor.#s++,this.guidClass=`fs-navigation-element-${this.guid}`,this.guidHandle=`fs-navigation-handle-${this.guid}`,this.isOpen=!1,this.handleEl=g(s.navigationHandle),this.contentEl=g(s.navigationContent),this.isToggle="toggle"===this.type;let a=`fs-navigation-${this.type}`,n=this.isToggle?"":`${a}-${this.gravity}`;this.navClasses=["fs-navigation",this.guidClass,`${a}-nav`,`${n}-nav`],this.handleClasses=["fs-navigation-handle",this.guidHandle,`${a}-handle`,`${n}-handle`],this.contentClasses=["fs-navigation-content",`${a}-content`],this.contentOpenClasses=["fs-navigation-open",`${n}-content`],k(t,this.navClasses),k(this.handleEl,this.handleClasses),k(this.contentEl,this.contentClasses),this.originalTabIndex=this.el.tabIndex,this.el.tabIndex=-1,this.originalRole=$(this.el,"role"),this.originalLabel=$(this.el,"aria-label"),this.originalModal=$(this.el,"aria-modal"),this.originalId=$(this.el,"id"),this.originalId?this.elId=this.originalId:(this.elId=this.guidClass,O(this.el,"id",this.elId)),this.listeners={open:this.#B(this),close:this.#g(this),enable:this.#D(this),disable:this.#G(this),body:this.#R(this),keydown:this.#Y(this)},O(this.handleEl,{"data-swap-target":`.${this.guidClass}`,"data-swap-linked":`${this.guidHandle}`,"data-swap-group":"fs-navigation"}),f(this.handleEl,(t=>{O(t,"data-tabindex",t.tabIndex),t.tabIndex=0,m(t,"swap:activate",this.listeners.open),m(t,"swap:deactivate",this.listeners.close),m(t,"swap:enable",this.listeners.enable),m(t,"swap:disable",this.listeners.disable)})),F.construct(`.${this.guidHandle}`,{classes:{enabled:"fs-navigation-enabled",active:"fs-navigation-open",inactive:"fs-navigation-closed"},collapse:!0,maxWidth:this.maxWidth}),t.Navigation=this}destroy(){this.listeners.disable.call(),C(this.el,this.navClasses),C(this.handleEl,this.handleClasses),C(this.contentEl,this.contentClasses),S(this.el,"aria-hidden"),this.tabIndex=this.originalTabIndex,S(this.handleEl,["data-swap-target","data-swap-linked","data-swap-group"]),f(this.handleEl,(t=>{t.tabIndex=$(t,"data-tabindex"),S(t,"data-tabindex"),x(t,"swap:activate",this.listeners.open),x(t,"swap:deactivate",this.listeners.close),x(t,"swap:enable",this.listeners.enable),x(t,"swap:disable",this.listeners.disable),t.Swap.destroy()})),this.el.Navigation=null,delete this.el.Navigation}enable(){f(this.handleEl,(t=>{t.Swap.enable()}))}disable(){f(this.handleEl,(t=>{t.Swap.disable()}))}open(){this.handleEl[0].Swap.activate()}close(){this.handleEl[0].Swap.deactivate()}#D(){return t=>{O(this.el,"aria-label",this.label),this.isToggle||O(this.el,{role:"dialog","aria-modal":"true"}),O(this.handleEl,"aria-controls",this.elId),this.isToggle&&O(this.handleEl,"aria-expanded","false"),k(this.contentEl,"fs-navigation-enabled"),setTimeout((()=>{k(this.el,"fs-navigation-animated"),k(this.contentEl,"fs-navigation-animated")}),0)}}#G(){return t=>{this.listeners.close.call(),O(this.el,{role:this.originalRole||!1,"aria-label":this.originaLabel||!1,"aria-modal":this.originaModal||!1,id:this.originalId||!1}),S(this.handleEl,["aria-controls","aria-expanded"]),C(this.el,"fs-navigation-animated"),C(this.contentEl,"fs-navigation-enabled","fs-navigation-animated",this.contentOpenClasses)}}#B(){return t=>{O(this.el,"aria-hidden","false"),k(this.contentEl,this.contentOpenClasses),this.isToggle?O(this.handleEl,"aria-expanded","true"):this.#I(),m(document.body,"click",this.listeners.body),m(document.body,"keydown",this.listeners.keydown),this.isOpen||(y(this.el,"navigation:open"),this.isOpen=!0,setTimeout((()=>{(g('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',this.el)[0]||this.el).focus()}),50))}}#g(){return t=>{O(this.el,"aria-hidden","true"),C(this.contentEl,this.contentOpenClasses),this.isToggle||this.#$(),O(this.handleEl,"aria-expanded","false"),x(document.body,"click",this.listeners.body),x(document.body,"keydown",this.listeners.keydown),this.isOpen&&(y(this.el,"navigation:close"),this.handleEl[0].focus(),this.isOpen=!1)}}#W(){return p(this.el).filter((t=>c(t.Navigation)))}#$(){f(this.#W(),(t=>{O(t,"aria-hidden",t.dataset.navigationAriaHidden||!1),delete t.dataset.navigationAriaHidden}))}#I(){f(this.#W(),(t=>{t.dataset.navigationAriaHidden=$(t,"aria-hidden")||"",O(t,"aria-hidden",!0)}))}#R(){return t=>{t.target===this.el||this.el.contains(t.target)||this.close()}}#Y(){return t=>{"Escape"===t.key&&this.close()}}}var et=tt;H(et,"Navigation"),V(et,"Navigation");var it=et;H(F,"Swap"),V(F,"Swap");var st=F;class at{static#s=1;static#a={maxWidth:1/0,mobileMaxWidth:"980px"};static defaults(t){this.#a=T(!0,this.#a,t)}static construct(t,e){let i=g(t);return i.forEach((t=>{t.Tabs||new at(t,e)})),i}constructor(t,e){if(t.Tabs)return void console.warn("Tabs: Instance already exists",t);let i={},s=t.dataset;try{i=JSON.parse(s.tabsOptions||"{}")}catch(e){console.warn("Tabs: Error parsing options JSON",t)}Object.assign(this,T(!0,this.constructor.#a,e||{},i)),this.el=t,this.guid=this.constructor.#s++,this.guidClass=`fs-tabs-element-${this.guid}`,this.guidContent=`fs-tabs-content-${this.guid}`;let a=this.mobileMaxWidth===1/0?"100000px":this.mobileMaxWidth;this.mq=`(max-width: ${a})`,this.target=t.hash,this.container=s.tabsContainer,this.group=s.tabsGroup,this.mobileEl=u("button"),this.contentEl=g(this.target)[0],this.containerEl=g(this.container)[0],this.handleEl=[t,this.mobileEl],this.mobileEl.innerHTML=t.innerHTML,O(this.mobileEl,{type:"button","aria-hidden":"true"}),k(t,"fs-tabs-tab",this.guidClass),k(this.mobileEl,"fs-tabs-tab_mobile",this.guidClass),k(this.contentEl,"fs-tabs-content",this.guidContent),k(this.containerEl,"fs-tabs-container"),this.contentEl.parentNode.insertBefore(this.mobileEl,this.contentEl),this.originalId=$(t,"id"),this.originalId?this.elId=this.originalId:(this.elId=this.guidClass,O(t,"id",this.elId)),this.originalContentId=$(t,"id"),this.originalContentId?this.contentId=this.originalContentId:(this.contentId=this.guidContent,O(this.contentEl,"id",this.contentId));let n=window.location.hash;this.hashActive=!1,this.hashGroup=!1,n.length&&(this.hashActive=t.hash==n,this.hashGroup=this.group&&g(`[data-tabs-group="${this.group}"][href$="${n}]`).length>0),this.hashActive?O(this.handleEl,"data-swap-active","true"):this.hashGroup?S(this.handleEl,"data-swap-active"):"true"===this.el.dataset.tabsActive&&O(this.handleEl,"data-swap-active","true"),this.listeners={activate:this.#Z(this),enable:this.#D(this),disable:this.#G(this)},this.handleEl.forEach((t=>{O(t,{"data-swap-target":`.${this.guidContent}`,"data-swap-linked":`${this.guidClass}`,"data-swap-group":`${this.group}`}),m(t,"swap:activate",this.listeners.activate),m(t,"swap:enable",this.listeners.enable),m(t,"swap:disable",this.listeners.disable)})),P.bind(this.guidClass,this.mq,{enter:()=>{console.log("enter"),this.#J()},leave:()=>{console.log("leave"),this.#K()}}),F.construct(`.${this.guidClass}`,{classes:{enabled:"fs-tabs-enabled",active:"fs-tabs-active",inactive:"fs-tabs-inactive"},collapse:!1,maxWidth:this.maxWidth}),t.Tabs=this}destroy(){this.listeners.disable.call(),C(this.el,"fs-tabs-tab",this.guidClass),C(this.contentEl,"fs-tabs-content",this.guidContent),C(this.containerEl,"fs-tabs-container"),S(this.handle,["data-swap-target","data-swap-linked","data-swap-group"]),this.handleEl.forEach((t=>{x(t,"swap:activate",this.listeners.activate),x(t,"swap:enable",this.listeners.enable),x(t,"swap:disable",this.listeners.disable),t.Swap.destroy()})),this.mobileEl.remove(),this.el.Tabs=null,delete this.el.Tabs}enable(){this.el.Swap.enable()}disable(){this.el.Swap.disable()}activate(){this.el.Swap.activate()}deactivate(){this.el.Swap.deactivate()}#D(){return t=>{O(this.el,{role:"tab","aria-controls":this.contentId}),O(this.contentEl,{role:"tabpanel","aria-labeledby":this.elId}),O(this.containerEl,{role:"tablist"}),k(this.contentEl,"fs-tabs-enabled"),k(this.contentEl,"fs-tabs-enabled")}}#G(){return t=>{S(this.el,"role"),S(this.contentEl,"role"),S(this.containerEl,"role"),C(this.contentEl,"fs-tabs-enabled")}}#Z(){return t=>{}}#Q(){}#J(){f(this.handleEl,(t=>{k(t,"fs-tabs-mobile")}))}#K(){f(this.handleEl,(t=>{C(t,"fs-tabs-mobile")}))}}var nt=at;H(nt,"Tabs"),V(nt,"Tabs");var ot=nt;return e}()}));