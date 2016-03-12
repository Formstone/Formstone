/*! formstone v0.8.40 [modernizr.js] 2016-03-12 | MIT License | formstone.it */

/*! formstone v0.8.40 [modernizr.js] 2016-02-28 | MIT License | formstone.it */

/*! formstone v0.8.40 [modernizr.js] 2016-02-28 | MIT License | formstone.it */

/*! formstone v0.8.40 [modernizr.js] 2016-02-28 | MIT License | formstone.it */

/*! formstone v0.8.40 [modernizr.js] 2016-02-28 | MIT License | formstone.it */

/*! formstone v0.8.40 [modernizr.js] 2016-02-28 | MIT License | formstone.it */

/*! formstone v0.8.40 [modernizr.js] 2016-02-28 | MIT License | formstone.it */

/*! formstone v0.8.40 [modernizr.js] 2016-02-28 | MIT License | formstone.it */

/*! formstone v0.8.40 [modernizr.js] 2016-02-28 | MIT License | formstone.it */

/*! formstone v0.8.40 [modernizr.js] 2016-02-28 | MIT License | formstone.it */

/*! formstone v0.8.40 [modernizr.js] 2016-02-28 | MIT License | formstone.it */

/*! formstone v0.8.40 [modernizr.js] 2016-02-28 | MIT License | formstone.it */

/*! formstone v0.8.39 [modernizr.js] 2016-02-28 | MIT License | formstone.it */

/*! formstone v0.8.39 [modernizr.js] 2016-02-28 | MIT License | formstone.it */

/*! formstone v0.8.39 [modernizr.js] 2016-02-28 | MIT License | formstone.it */

/*! formstone v0.8.39 [modernizr.js] 2016-02-28 | MIT License | formstone.it */

/*! formstone v0.8.39 [modernizr.js] 2016-02-24 | MIT License | formstone.it */

/*! formstone v0.8.38 [modernizr.js] 2016-02-04 | MIT License | formstone.it */

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-canvas-csstransforms-opacity-svg-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,s,i,a;for(var f in y)if(y.hasOwnProperty(f)){if(e=[],n=y[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),w.push((r?"":"no-")+a.join("-"))}}function s(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(S&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),S?x.className.baseVal=n:x.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):S?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(S?"svg":"body"),e.fake=!0),e}function f(e,t,o,r){var s,f,l,u,c="modernizr",d=i("div"),p=a();if(parseInt(o,10))for(;o--;)l=i("div"),l.id=r?r[o]:c+(o+1),d.appendChild(l);return s=i("style"),s.type="text/css",s.id="s"+c,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),f=t(d,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=u,x.offsetHeight):d.parentNode.removeChild(d),!!f}function l(e,n){return!!~(""+e).indexOf(n)}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(u(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];r--;)s.push("("+u(n[r])+":"+o+")");return s=s.join(" or "),f("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function p(e,n,r,s){function a(){u&&(delete N.style,delete N.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var f=c(e,r);if(!o(f,"undefined"))return f}for(var u,p,m,v,h,g=["modernizr","tspan"];!N.style;)u=!0,N.modElem=i(g.shift()),N.style=N.modElem.style;for(m=e.length,p=0;m>p;p++)if(v=e[p],h=N.style[v],l(v,"-")&&(v=d(v)),N.style[v]!==t){if(s||o(r,"undefined"))return a(),"pfx"==n?v:!0;try{N.style[v]=r}catch(y){}if(N.style[v]!=h)return a(),"pfx"==n?v:!0}return a(),!1}function m(e,n){return function(){return e.apply(n,arguments)}}function v(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?m(r,t||n):r);return!1}function h(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?p(a,n,r,s):(a=(e+" "+P.join(i+" ")+i).split(" "),v(a,n,t))}function g(e,n,o){return h(e,t,t,n,o)}var y=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){y.push({name:e,fn:n,options:t})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var w=[],x=n.documentElement,S="svg"===x.nodeName.toLowerCase(),_=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];C._prefixes=_;var T=C.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",_.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");T(o,function(e){t=9===e.offsetTop})}return t}),Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=_.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var b="Moz O ms Webkit",z=C._config.usePrefixes?b.split(" "):[];C._cssomPrefixes=z;var E={elem:i("modernizr")};Modernizr._q.push(function(){delete E.elem});var N={style:E.elem.style};Modernizr._q.unshift(function(){delete N.style});var P=C._config.usePrefixes?b.toLowerCase().split(" "):[];C._domPrefixes=P,C.testAllProps=h,C.testAllProps=g,Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&g("transform","scale(1)",!0)}),Modernizr.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),r(),s(w),delete C.addTest,delete C.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);