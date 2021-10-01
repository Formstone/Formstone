/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});


/*! formstone v1.4.22 [core.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(w){"use strict";function e(){this.Version="1.4.22",this.Plugins={},this.DontConflict=!1,this.Conflicts={fn:{}},this.ResizeHandlers=[],this.RAFHandlers=[],this.window=i,this.$window=w(i),this.document=r,this.$document=w(r),this.$body=null,this.windowWidth=0,this.windowHeight=0,this.fallbackWidth=1024,this.fallbackHeight=768,this.userAgent=window.navigator.userAgent||window.navigator.vendor||window.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isIEMobile=/IEMobile/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.transform=null,this.transition=null,this.support={file:!!(window.File&&window.FileList&&window.FileReader),history:!!(window.history&&window.history.pushState&&window.history.replaceState),matchMedia:!(!window.matchMedia&&!window.msMatchMedia),pointer:!!window.PointerEvent,raf:!(!window.requestAnimationFrame||!window.cancelAnimationFrame),touch:!!("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),transition:!1,transform:!1}}var t,n,s,i="undefined"!=typeof window?window:this,r=i.document,o={killEvent:function(e,t){try{e.preventDefault(),e.stopPropagation(),t&&e.stopImmediatePropagation()}catch(e){}},killGesture:function(e){try{e.preventDefault()}catch(e){}},lockViewport:function(e){h[e]=!0,w.isEmptyObject(h)||p||(t.length?t.attr("content",s):t=w("head").append('<meta name="viewport" content="'+s+'">'),c.$body.on(u.gestureChange,o.killGesture).on(u.gestureStart,o.killGesture).on(u.gestureEnd,o.killGesture),p=!0)},unlockViewport:function(e){void 0!==h[e]&&delete h[e],w.isEmptyObject(h)&&p&&(t.length&&(n?t.attr("content",n):t.remove()),c.$body.off(u.gestureChange).off(u.gestureStart).off(u.gestureEnd),p=!1)},startTimer:function(e,t,n,s){return o.clearTimer(e),s?setInterval(n,t):setTimeout(n,t)},clearTimer:function(e,t){e&&(t?clearInterval(e):clearTimeout(e),e=null)},sortAsc:function(e,t){return parseInt(e,10)-parseInt(t,10)},sortDesc:function(e,t){return parseInt(t,10)-parseInt(e,10)},decodeEntities:function(e){var t=c.document.createElement("textarea");return t.innerHTML=e,t.value},parseQueryString:function(e){for(var t={},n=e.slice(e.indexOf("?")+1).split("&"),s=0;s<n.length;s++){var i=n[s].split("=");t[i[0]]=i[1]}return t}},c=new e,a=w.Deferred(),l={base:"{ns}",element:"{ns}-element"},u={namespace:".{ns}",beforeUnload:"beforeunload.{ns}",blur:"blur.{ns}",change:"change.{ns}",click:"click.{ns}",dblClick:"dblclick.{ns}",drag:"drag.{ns}",dragEnd:"dragend.{ns}",dragEnter:"dragenter.{ns}",dragLeave:"dragleave.{ns}",dragOver:"dragover.{ns}",dragStart:"dragstart.{ns}",drop:"drop.{ns}",error:"error.{ns}",focus:"focus.{ns}",focusIn:"focusin.{ns}",focusOut:"focusout.{ns}",gestureChange:"gesturechange.{ns}",gestureStart:"gesturestart.{ns}",gestureEnd:"gestureend.{ns}",input:"input.{ns}",keyDown:"keydown.{ns}",keyPress:"keypress.{ns}",keyUp:"keyup.{ns}",load:"load.{ns}",mouseDown:"mousedown.{ns}",mouseEnter:"mouseenter.{ns}",mouseLeave:"mouseleave.{ns}",mouseMove:"mousemove.{ns}",mouseOut:"mouseout.{ns}",mouseOver:"mouseover.{ns}",mouseUp:"mouseup.{ns}",panStart:"panstart.{ns}",pan:"pan.{ns}",panEnd:"panend.{ns}",resize:"resize.{ns}",scaleStart:"scalestart.{ns}",scaleEnd:"scaleend.{ns}",scale:"scale.{ns}",scroll:"scroll.{ns}",select:"select.{ns}",swipe:"swipe.{ns}",touchCancel:"touchcancel.{ns}",touchEnd:"touchend.{ns}",touchLeave:"touchleave.{ns}",touchMove:"touchmove.{ns}",touchStart:"touchstart.{ns}"},d=null,f=20,h=[],p=!1;function m(e,t,n,s){var i,r={raw:{}};for(i in s=s||{})s.hasOwnProperty(i)&&("classes"===e?(r.raw[s[i]]=t+"-"+s[i],r[s[i]]="."+t+"-"+s[i]):(r.raw[i]=s[i],r[i]=s[i]+"."+t));for(i in n)n.hasOwnProperty(i)&&("classes"===e?(r.raw[i]=n[i].replace(/{ns}/g,t),r[i]=n[i].replace(/{ns}/g,"."+t)):(r.raw[i]=n[i].replace(/.{ns}/g,""),r[i]=n[i].replace(/{ns}/g,t)));return r}function g(){c.windowWidth=c.$window.width(),c.windowHeight=c.$window.height(),d=o.startTimer(d,f,y)}function y(){for(var e in c.ResizeHandlers)c.ResizeHandlers.hasOwnProperty(e)&&c.ResizeHandlers[e].callback.call(window,c.windowWidth,c.windowHeight)}function v(e,t){return parseInt(e.priority)-parseInt(t.priority)}return e.prototype.NoConflict=function(){for(var e in c.DontConflict=!0,c.Plugins)c.Plugins.hasOwnProperty(e)&&(w[e]=c.Conflicts[e],w.fn[e]=c.Conflicts.fn[e])},e.prototype.Ready=function(e){"complete"===c.document.readyState||"loading"!==c.document.readyState&&!c.document.documentElement.doScroll?e():c.document.addEventListener("DOMContentLoaded",e)},e.prototype.Plugin=function(e,t){function d(e){return e.data(p)}var f,h,n,p;return c.Plugins[e]=(h=t,n="fs-"+(f=e),p="fs"+f.replace(/(^|\s)([a-z])/g,function(e,t,n){return t+n.toUpperCase()}),h.initialized=!1,h.priority=h.priority||10,h.classes=m("classes",n,l,h.classes),h.events=m("events",f,u,h.events),h.functions=w.extend({getData:d,iterate:function(e){for(var t=Array.prototype.slice.call(arguments,1),n=0,s=this.length;n<s;n++){var i=this.eq(n),r=d(i)||{};void 0!==r.$el&&e.apply(i,[r].concat(t))}return this}},o,h.functions),h.methods=w.extend(!0,{_construct:w.noop,_postConstruct:w.noop,_destruct:w.noop,_resize:!1,destroy:function(e){h.functions.iterate.apply(this,[h.methods._destruct].concat(Array.prototype.slice.call(arguments,1))),this.removeClass(h.classes.raw.element).removeData(p)}},h.methods),h.utilities=w.extend(!0,{_initialize:!1,_delegate:!1,defaults:function(e){h.defaults=w.extend(!0,h.defaults,e||{})}},h.utilities),h.widget&&(c.Conflicts.fn[f]=w.fn[f],w.fn[p]=function(e){if(this instanceof w){var t=h.methods[e];if("object"==typeof e||!e)return function(e){var t,n,s,i="object"==typeof e,r=Array.prototype.slice.call(arguments,i?1:0),o=w();for(e=w.extend(!0,{},h.defaults||{},i?e:{}),n=0,s=this.length;n<s;n++)if(!d(t=this.eq(n))){h.guid++;var a="__"+h.guid,c=h.classes.raw.base+a,l=t.data(f+"-options"),u=w.extend(!0,{$el:t,guid:a,numGuid:h.guid,rawGuid:c,dotGuid:"."+c},e,"object"==typeof l?l:{});t.addClass(h.classes.raw.element).data(p,u),h.methods._construct.apply(t,[u].concat(r)),o=o.add(t)}for(n=0,s=o.length;n<s;n++)t=o.eq(n),h.methods._postConstruct.apply(t,[d(t)]);return this}.apply(this,arguments);if(t&&0!==e.indexOf("_")){var n=[t].concat(Array.prototype.slice.call(arguments,1));return h.functions.iterate.apply(this,n)}return this}},c.DontConflict||(w.fn[f]=w.fn[p])),c.Conflicts[f]=w[f],w[p]=h.utilities._delegate||function(e){var t=h.utilities[e]||h.utilities._initialize||!1;if(t){var n=Array.prototype.slice.call(arguments,"object"==typeof e?0:1);return t.apply(window,n)}},c.DontConflict||(w[f]=w[p]),h.namespace=f,h.namespaceClean=p,h.guid=0,h.methods._resize&&(c.ResizeHandlers.push({namespace:f,priority:h.priority,callback:h.methods._resize}),c.ResizeHandlers.sort(v)),h.methods._raf&&(c.RAFHandlers.push({namespace:f,priority:h.priority,callback:h.methods._raf}),c.RAFHandlers.sort(v)),h),c.Plugins[e]},c.$window.on("resize.fs",g),g(),function e(){if(c.support.raf)for(var t in c.window.requestAnimationFrame(e),c.RAFHandlers)c.RAFHandlers.hasOwnProperty(t)&&c.RAFHandlers[t].callback.call(window)}(),c.Ready(function(){c.$body=w("body"),w("html").addClass(c.support.touch?"touchevents":"no-touchevents"),t=w('meta[name="viewport"]'),n=!!t.length&&t.attr("content"),s="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",a.resolve()}),u.clickTouchStart=u.click+" "+u.touchStart,function(){var e,t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"},n=["transition","-webkit-transition"],s={transform:"transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",webkitTransform:"-webkit-transform"},i="transitionend",r="",o="",a=document.createElement("div");for(e in t)if(t.hasOwnProperty(e)&&e in a.style){i=t[e],c.support.transition=!0;break}for(e in u.transitionEnd=i+".{ns}",n)if(n.hasOwnProperty(e)&&n[e]in a.style){r=n[e];break}for(e in c.transition=r,s)if(s.hasOwnProperty(e)&&s[e]in a.style){c.support.transform=!0,o=s[e];break}c.transform=o}(),window.Formstone=c});
/*! formstone v1.4.22 [analytics.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(c,a){"use strict";function t(){p.scrollDepth&&l()}function n(){var e,t=c(this),n=void 0!==t[0].href?t[0].href:"",i=document.domain.split(".").reverse(),o=null!==n.match(i[1]+"."+i[0]);if(n.match(/^mailto\:/i))e="Email, Click, "+n.replace(/^mailto\:/i,"");else if(n.match(/^tel\:/i))e="Telephone, Click, "+n.replace(/^tel\:/i,"");else if(n.match(p.fileTypes)){e="File, Download:"+(/[.]/.exec(n)?/[^.]+$/.exec(n):void 0)[0]+", "+n.replace(/ /g,"-")}else o||(e="ExternalLink, Click, "+n);e&&t.attr(w,e)}function i(e){h.startTimer(T,250,o)}function o(){for(var e,t=u.scrollTop()+a.windowHeight,n=1/p.scrollStops,i=n,o=1;o<=p.scrollStops;o++){if(e=Math.round(100*i).toString(),!x[k][e].passed&&t>x[k][e].edge)x[k][e].passed=!0,s(c.extend(p.scrollFields,{eventCategory:"ScrollDepth",eventAction:k,eventLabel:e,nonInteraction:!0}));i+=n}}function l(){var e,t=c.mediaquery("state"),n=v.outerHeight(),i={},o=1/p.scrollStops,a=o,l=0;t.minWidth&&(k="MinWidth:"+t.minWidth+"px");for(var r=1;r<=p.scrollStops;r++)l=parseInt(n*a),i[e=Math.round(100*a).toString()]={edge:"100"===e?l-10:l,passsed:!(!x[k]||!x[k][e])&&x[k][e].passed},a+=o;x[k]=i}function r(e){var t=c(this),n=t.attr("href"),i=t.data(g).split(",");for(var o in p.eventCallback&&e.preventDefault(),i)i.hasOwnProperty(o)&&(i[o]=c.trim(i[o]));s({eventCategory:i[0],eventAction:i[1],eventLabel:i[2]||n,eventValue:i[3],nonInteraction:i[4]},t)}function s(e,t){d.location;var n=c.extend({hitType:"event"},e);if(void 0!==t&&!t.attr("data-analytics-stop")){var i=void 0!==t[0].href?t[0].href:"",o=!i.match(/^mailto\:/i)&&!i.match(/^tel\:/i)&&i.indexOf(":")<0?d.location.protocol+"//"+d.location.hostname+"/"+i:i;if(""!==o){var a=t.attr("target");if(a)d.open(o,a);else if(p.eventCallback){var l="hitCallback";n[l]=function(){b&&(h.clearTimer(b),function(e){document.location=e}(o))},b=h.startTimer(b,p.eventTimeout,n[l])}}}f(n)}function f(e){if("function"==typeof d.ga&&"function"==typeof d.ga.getAll)for(var t=d.ga.getAll(),n=0,i=t.length;n<i;n++)d.ga(t[n].get("name")+".send",e)}var e=a.Plugin("analytics",{methods:{_resize:t},utilities:{_delegate:function(){if(arguments.length&&"object"!=typeof arguments[0])if("destroy"===arguments[0])(function(){y&&v&&v.length&&(u.off(m.namespace),v.off(m.namespace),y=!1)}).apply(this);else{var e=Array.prototype.slice.call(arguments,1);switch(arguments[0]){case"pageview":(function(e){f(c.extend({hitType:"pageview"},e))}).apply(this,e);break;case"event":s.apply(this,e)}}else(function(e){!y&&v&&v.length&&(y=!0,(p=c.extend(p,e||{})).autoEvents&&v.find("a").not("["+w+"]").each(n),p.scrollDepth&&(l(),u.on(m.scroll,i).one(m.load,t)),v.on(m.click,"*["+w+"]",r))}).apply(this,arguments);return null}}}),p={autoEvents:!1,fileTypes:/\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,eventCallback:!1,eventTimeout:1e3,scrollDepth:!1,scrollStops:5,scrollFields:{}},d=a.window,u=a.$window,v=null,h=e.functions,m=e.events,y=!1,g="analytics-event",w="data-"+g,x={},T=null,k="Site",b=null;a.Ready(function(){v=a.$body})});
/*! formstone v1.4.22 [asap.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./analytics"],e):e(jQuery,Formstone)}(function(l,t){"use strict";function r(e){var t=e.currentTarget;1<e.which||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||window.location.protocol!==t.protocol||window.location.host!==t.host||"_blank"===t.target||t.hash&&(t.href.replace(t.hash,"")===window.location.href.replace(location.hash,"")||t.href===window.location.href+"#")||t.href.match(f.ignoreTypes)||(g.killEvent(e),e.stopImmediatePropagation(),t.href!==m&&o(t.href,!0))}function n(e){d&&d.abort();var t=e.originalEvent.state;t&&(O=t.id,t.url!==m&&o(t.url,!1))}function o(n,e){d&&d.abort(),p.trigger(y.requested,[e]),f.transitionOutDeferred=f.transitionOut.apply(h,[!1]);var o=c(n),t=o.params,r=(o.hash,o.clean),a="User error",i=null,s=l.Deferred();t[f.requestKey]=!0,d=l.ajax({url:r,data:t,dataType:"json",cache:f.cache,xhr:function(){var e=new h.XMLHttpRequest;return e.addEventListener("progress",function(e){if(e.lengthComputable){var t=e.loaded/e.total;p.trigger(y.progress,[t])}},!1),e},success:function(e,t,r){i="string"==typeof e?l.parseJSON(e):e,e.location&&(n=e.location,o=c(n),o.hash),s.resolve()},error:function(e,t,r){a=r,s.reject()}}),l.when(s,f.transitionOutDeferred).done(function(){!function(e,t,r){p.trigger(y.loaded,[t]),void 0!==l.fsAnalytics&&l.fsAnalytics("pageview");f.render.call(this,t,e.hash),m=e.url,r&&function(e,t){history.pushState({id:e,url:t},w+e,t)}(++O,m);p.trigger(y.rendered,[t]);var n=!1;if(""!==e.hash){var o=l(e.hash);o.length&&(n=o.offset().top)}!1!==n&&p.scrollTop(n)}(o,i,e)}).fail(function(){p.trigger(y.failed,[a])})}function a(e,t){var r;if(void 0!==e)for(var n in e)e.hasOwnProperty(n)&&(r=l(n)).length&&r.html(e[n])}function i(e,t){history.replaceState({id:e,url:t},w+e,t)}function c(e){var t=e.indexOf("?"),r=e.indexOf("#"),n={},o="",a=e;return-1<r&&(o=e.slice(r),a=e.slice(0,r)),-1<t&&(n=g.parseQueryString(e.slice(t+1,-1<r?r:e.length)),a=e.slice(0,t)),{hash:o,params:n,url:e,clean:a}}var s,d,f,e=t.Plugin("asap",{utilities:{_initialize:function(e){!f&&t.support.history&&(s=t.$body,(f=l.extend(u,e)).render===l.noop&&(f.render=a),f.transitionOut===l.noop&&(f.transitionOut=function(){return l.Deferred().resolve()}),history.state?(O=history.state.id,m=history.state.url):(m=window.location.href,i(O,m)),p.on(y.popState,n),s&&!s.hasClass(v.base)&&s.on(y.click,f.selector,r).addClass(v.base))},load:function(e){f&&t.support.history?e&&o(e,!0):window.location.href=e},replace:function(e){var t=history.state;m=e,i(t.id,e)}},events:{failed:"failed",loaded:"loaded",popState:"popstate",progress:"progress",requested:"requested",rendered:"rendered"}}),u={cache:!0,ignoreTypes:/\.(jpg|sjpg|jpeg|png|gif|zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,render:l.noop,requestKey:"fs-asap",selector:"a",transitionOut:l.noop},p=t.$window,h=p[0],g=e.functions,y=e.events,v=e.classes.raw,w="asap-",m="",O=1});
/*! formstone v1.4.22 [background.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],e):e(jQuery,Formstone)}(function(u,t){"use strict";function e(){(Y=$.scrollTop()+t.windowHeight)<0&&(Y=0),T.iterate.call(j,s)}function i(){C=u(m.base),j=u(m.lazy),T.iterate.call(j,r)}function o(e){if(e.visible){var i=e.source;e.source=null,a(e,i,!0)}}function a(e,i,o){if(i!==e.source&&e.visible){if(e.source=i,e.responsive=!1,e.isYouTube=!1,"object"==typeof i&&"string"==typeof i.video){var t=i.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);t&&1<=t.length&&(e.isYouTube=!0,e.videoId=t[1])}var a=!e.isYouTube&&"object"==typeof i&&(i.hasOwnProperty("mp4")||i.hasOwnProperty("ogg")||i.hasOwnProperty("webm"));if(e.video=e.isYouTube||a,e.playing=!1,e.isYouTube)e.playerReady=!1,e.posterLoaded=!1,p(e,i,o);else if("object"==typeof i&&i.hasOwnProperty("poster"))!function(i,e,o){i.source&&i.source.poster&&(c(i,i.source.poster,!0,!0),o=!1);var t='<div class="'+[b.media,b.video,!0!==o?b.animated:""].join(" ")+'" aria-hidden="true">';t+="<video playsinline",i.loop&&(t+=" loop");i.mute&&(t+=" muted");i.autoPlay&&(t+=" autoplay");t+=">",i.source.webm&&(t+='<source src="'+i.source.webm+'" type="video/webm" />');i.source.mp4&&(t+='<source src="'+i.source.mp4+'" type="video/mp4" />');i.source.ogg&&(t+='<source src="'+i.source.ogg+'" type="video/ogg" />');t+="</video>";var a=u(t+="</div>");a.find("video").one(w.loadedMetaData,function(e){a.fsTransition({property:"opacity"},function(){y(i)}).css({opacity:1}),h(i),i.$el.trigger(w.loaded),i.autoPlay&&f(i)}),i.$container.append(a)}(e,0,o);else{var n=i;if("object"==typeof i){var r,s=[],d=[];for(r in i)i.hasOwnProperty(r)&&d.push(r);for(r in d.sort(T.sortAsc),d)d.hasOwnProperty(r)&&s.push({width:parseInt(d[r]),url:i[d[r]],mq:P.matchMedia("(min-width: "+parseInt(d[r])+"px)")});e.responsive=!0,e.sources=s,n=l(e)}c(e,n,!1,o)}}else e.$el.trigger(w.loaded)}function l(e){var i=e.source;if(e.responsive)for(var o in i=e.sources[0].url,e.sources)e.sources.hasOwnProperty(o)&&(t.support.matchMedia?e.sources[o].mq.matches&&(i=e.sources[o].url):e.sources[o].width<t.fallbackWidth&&(i=e.sources[o].url));return i}function c(e,i,o,t){var a=[b.media,b.image,!0!==t?b.animated:""].join(" "),n=u('<div class="'+a+'" aria-hidden="true"><img alt="'+e.alt+'"></div>'),r=n.find("img"),s=i;r.one(w.load,function(){I&&n.addClass(b.native).css({backgroundImage:"url('"+s+"')"}),n.fsTransition({property:"opacity"},function(){o||y(e)}).css({opacity:1}),h(e),o&&!t||e.$el.trigger(w.loaded)}).one(w.error,e,d).attr("src",s),e.responsive&&n.addClass(b.responsive),e.$container.append(n),!r[0].complete&&4!==r[0].readyState||r.trigger(w.load),e.currentSource=s}function p(i,e,o){if(!i.videoId){var t=e.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);i.videoId=t[1]}if(i.posterLoaded||(i.source.poster||(i.source.poster="//img.youtube.com/vi/"+i.videoId+"/0.jpg"),i.posterLoaded=!0,c(i,i.source.poster,!0,o),o=!1),u("script[src*='youtube.com/iframe_api']").length||u("head").append('<script src="//www.youtube.com/iframe_api"><\/script>'),R){var a=i.guid+"_"+i.youTubeGuid++,n='<div class="'+[b.media,b.embed,!0!==o?b.animated:""].join(" ")+'" aria-hidden="true">';n+='<div id="'+a+'"></div>';var r=u(n+="</div>"),s=u.extend(!0,{},{controls:0,rel:0,showinfo:0,wmode:"transparent",enablejsapi:1,version:3,playerapiid:a,loop:i.loop?1:0,autoplay:1,mute:1,origin:P.location.protocol+"//"+P.location.host},i.youtubeOptions);s.autoplay=1,i.$container.append(r),i.player&&(i.oldPlayer=i.player,i.player=null),i.player=new P.YT.Player(a,{videoId:i.videoId,playerVars:s,events:{onReady:function(e){i.playerReady=!0,i.mute&&i.player.mute(),i.autoPlay?i.player.playVideo():i.player.pauseVideo()},onStateChange:function(e){i.playing||e.data!==P.YT.PlayerState.PLAYING?i.loop&&i.playing&&e.data===P.YT.PlayerState.ENDED&&i.player.playVideo():(i.playing=!0,r.fsTransition({property:"opacity"},function(){y(i)}).css({opacity:1}),h(i),i.$el.trigger(w.loaded)),i.$el.find(m.embed).addClass(b.ready)},onPlaybackQualityChange:function(e){},onPlaybackRateChange:function(e){},onError:function(e){d({data:i})},onApiChange:function(e){}}}),h(i)}else z.push({data:i,source:e})}function y(e){var i=e.$container.find(m.media);1<=i.length&&(i.not(":last").remove(),e.oldPlayer=null)}function d(e){e.data.$el.trigger(w.error)}function f(e){if(e.video&&!e.playing)if(e.isYouTube)e.playerReady?e.player.playVideo():e.autoPlay=!0;else{var i=e.$container.find("video");i.length&&i[0].play(),e.playing=!0}}function n(e){if(e.visible)if(e.responsive){var i=l(e);i!==e.currentSource?c(e,i,!1,!0):h(e)}else h(e)}function h(e){for(var i=e.$container.find(m.media),o=0,t=i.length;o<t;o++){var a=i.eq(o),n=e.isYouTube?"iframe":a.find("video").length?"video":"img",r=a.find(n);if(r.length&&("img"!=n||!I)){var s=e.$el.outerWidth(),d=e.$el.outerHeight(),u=v(e,r);e.width=u.width,e.height=u.height,e.left=0,e.top=0;var l=e.isYouTube?e.embedRatio:e.width/e.height;e.height=d,e.width=e.height*l,e.width<s&&(e.width=s,e.height=e.width/l),e.left=-(e.width-s)/2,e.top=-(e.height-d)/2,a.css({height:e.height,width:e.width,left:e.left,top:e.top})}}}function r(e){e.scrollTop=e.$el.offset().top}function s(e){!e.visible&&e.scrollTop<Y+e.lazyEdge&&(e.visible=!0,o(e))}function v(e,i){if(e.isYouTube)return{height:500,width:500/e.embedRatio};if(i.is("img")){var o=i[0];if(void 0!==o.naturalHeight)return{height:o.naturalHeight,width:o.naturalWidth};var t=new Image;return t.src=o.src,{height:t.height,width:t.width}}return{height:i[0].videoHeight,width:i[0].videoWidth}}var g=t.Plugin("background",{widget:!0,defaults:{alt:"",autoPlay:!0,customClass:"",embedRatio:1.777777,lazy:!1,lazyEdge:100,loop:!0,mute:!0,source:null,youtubeOptions:{}},classes:["container","media","animated","responsive","native","fixed","ready","lazy"],events:{loaded:"loaded",ready:"ready",loadedMetaData:"loadedmetadata"},methods:{_construct:function(e){e.youTubeGuid=0,e.$container=u('<div class="'+b.container+'"></div>').appendTo(this),e.thisClasses=[b.base,e.customClass],e.visible=!0,e.lazy&&(e.visible=!1,e.thisClasses.push(b.lazy)),this.addClass(e.thisClasses.join(" ")),i(),e.lazy?(r(e),s(e)):o(e)},_destruct:function(e){e.$container.remove(),this.removeClass(e.thisClasses.join(" ")).off(w.namespace),i()},_resize:function(){T.iterate.call(C,n),T.iterate.call(j,r),T.iterate.call(j,s)},play:f,pause:function(e){if(e.video&&e.playing){if(e.isYouTube)e.playerReady?e.player.pauseVideo():e.autoPlay=!1;else{var i=e.$container.find("video");i.length&&i[0].pause()}e.playing=!1}},mute:function(e){if(e.video)if(e.isYouTube&&e.playerReady)e.player.mute();else{var i=e.$container.find("video");i.length&&(i[0].muted=!0)}e.mute=!0},unmute:function(e){if(e.video){if(e.isYouTube&&e.playerReady)e.player.unMute();else{var i=e.$container.find("video");i.length&&(i[0].muted=!1)}e.playing=!0}e.mute=!1},resize:h,load:a,unload:function(e){var i=e.$container.find(m.media);1<=i.length&&i.fsTransition({property:"opacity"},function(){i.remove(),delete e.source}).css({opacity:0})}}}),m=g.classes,b=m.raw,w=g.events,T=g.functions,P=t.window,$=t.$window,Y=0,C=[],j=[],I="backgroundSize"in t.document.documentElement.style,R=!1,z=[];t.Ready(function(){e(),$.on("scroll",e)}),P.onYouTubeIframeAPIReady=function(){for(var e in R=!0,z)z.hasOwnProperty(e)&&p(z[e].data,z[e].source);z=[]}});
/*! formstone v1.4.22 [carousel.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./touch"],e):e(jQuery,Formstone)}(function(u,m){"use strict";function g(){H=u(j.base)}function h(e){e.enabled&&(X.clearTimer(e.autoTimer),e.enabled=!1,e.$subordinate.off(L.update),this.removeClass([y.enabled,y.animated].join(" ")).off(L.namespace),e.$canister.fsTouch("destroy").off(L.namespace).attr("style","").css(z,"none"),e.$items.css({width:"",height:""}).removeClass([y.visible,j.item_previous,j.item_next].join(" ")),e.$images.off(L.namespace),e.$controlItems.off(L.namespace),e.$pagination.html("").off(L.namespace),$(e),e.useMargin?e.$canister.css({marginLeft:""}):e.$canister.css(N,""),e.index=0)}function p(e){e.enabled||(e.enabled=!0,this.addClass(y.enabled),e.$controlItems.on(L.click,e,o),e.$pagination.on(L.click,j.page,e,r),e.$items.on(L.click,e,W),e.$subordinate.on(L.update,e,P),P({data:e},0),e.touch&&e.$canister.fsTouch({axis:"x",pan:!0,swipe:!0}).on(L.panStart,e,l).on(L.pan,e,c).on(L.panEnd,e,d).on(L.swipe,e,x).on(L.focusIn,e,M).css(z,""),f(e),e.$images.on(L.load,e,s),e.autoAdvance&&(e.autoTimer=X.startTimer(e.autoTimer,e.autoTime,function(){!function(e){var t=e.index+1;t>=e.pageCount&&(t=0);v(e,t)}(e)},!0)),i.call(this,e))}function i(e){if(e.enabled){var t,i,a,n,s;if(e.count=e.$items.length,e.count<1)return $(e),void e.$canister.css({height:""});if(this.removeClass(y.animated),e.containerWidth=e.$container.outerWidth(!1),e.visible=function(e){var t=1;{if(e.single)return t;if("object"==typeof e.show)for(var i in e.show)e.show.hasOwnProperty(i)&&(m.support.matchMedia?e.show[i].mq.matches&&(t=e.show[i].count):e.show[i].width<m.fallbackWidth&&(t=e.show[i].count));else t=e.show}return e.fill&&e.count<t?e.count:t}(e),e.perPage=e.paged?1:e.visible,e.itemMarginLeft=parseInt(e.$items.eq(0).css("marginLeft")),e.itemMarginRight=parseInt(e.$items.eq(0).css("marginRight")),e.itemMargin=e.itemMarginLeft+e.itemMarginRight,isNaN(e.itemMargin)&&(e.itemMargin=0),e.itemWidth=(e.containerWidth-e.itemMargin*(e.visible-1))/e.visible,e.itemHeight=0,e.pageWidth=e.paged?e.itemWidth:e.containerWidth,e.matchWidth)e.canisterWidth=e.single?e.containerWidth:(e.itemWidth+e.itemMargin)*e.count;else for(e.canisterWidth=0,e.$canister.css({width:1e6}),t=0;t<e.count;t++)e.canisterWidth+=e.$items.eq(t).outerWidth(!0);e.$canister.css({width:e.canisterWidth,height:""}),e.$items.css({width:e.matchWidth?e.itemWidth:"",height:""}).removeClass([y.visible,y.item_previous,y.item_next].join(" ")),e.pages=[],e.items=[];var o,r=0,l=0,c=0;for(n=a=0,i=u(),t=0;t<e.count;t++)o=e.$items.eq(t),r=e.matchWidth?e.itemWidth+e.itemMargin:o.outerWidth(!0),l=o.outerHeight(),c=o.position().left,e.items.push({$el:o,width:r,height:l,left:e.rtl?c-(e.canisterWidth-r):c}),(i.length&&a+r>e.containerWidth+e.itemMargin||e.paged&&0<t)&&(s=(e.rtl?i.eq(i.length-1):i.eq(0)).position().left,e.pages.push({left:e.rtl?s-(e.canisterWidth-a):s,height:n,width:a,$items:i}),i=u(),a=n=0),i=i.add(o),a+=r,r,n<l&&(n=l),n>e.itemHeight&&(e.itemHeight=n);if(e.rtl?i.eq(i.length-1):i.eq(0),s=e.canisterWidth-e.containerWidth-(e.rtl?e.itemMarginLeft:e.itemMarginRight),e.pages.push({left:e.rtl?-s:s,height:n,width:a,$items:i}),e.pageCount=e.pages.length,e.paged&&e.matchWidth&&(e.pageCount-=e.count%e.visible),e.pageCount<=0&&(e.pageCount=1),e.maxMove=(e.canisterWidth-e.containerWidth-(e.rtl?e.itemMarginLeft:e.itemMarginRight))*(e.rtl?1:-1),e.paged&&!e.matchWidth)for(t=0;t<e.pages.length;t++)if(e.pages[t].left-e.pages[t].width>Math.abs(e.maxMove)){e.pageCount=t;break}e.autoHeight?e.$canister.css({height:e.pages[0].height}):e.matchHeight&&e.$items.css({height:e.itemHeight});var d="";for(t=0;t<e.pageCount;t++)d+='<button type="button" class="'+y.page+'">'+(t+1)+"</button>";e.$pagination.html(d),e.pageCount<=1?$(e):function(e){e.$controls.addClass(y.visible),e.$controlItems.addClass(y.visible),e.$pagination.addClass(y.visible),C(e,e.$controlItems)}(e),e.$paginationItems=e.$pagination.find(j.page),v(e,e.index,!1),setTimeout(function(){e.$el.addClass(y.animated)},5)}}function f(e){e.$items=e.$canister.children().not(":hidden").addClass(y.item),e.$images=e.$canister.find("img"),e.totalImages=e.$images.length}function t(e,t){e.$images.off(L.namespace),!1!==t&&e.$canister.html(t),e.index=0,f(e),i.call(this,e)}function e(e,t,i,a,n){e.enabled&&(a||X.clearTimer(e.autoTimer),void 0===n&&(n=!0),v(e,t-1,n,i,a))}function a(e){var t=e.index-1;e.infinite&&t<0&&(t=e.pageCount-1),v(e,t)}function n(e){var t=e.index+1;e.infinite&&t>=e.pageCount&&(t=0),v(e,t)}function s(e){var t=e.data;t.resizeTimer=X.startTimer(t.resizeTimer,1,function(){i.call(t.$el,t)})}function o(e){X.killEvent(e);var t=e.data,i=t.index+(u(e.currentTarget).hasClass(y.control_next)?1:-1);X.clearTimer(t.autoTimer),v(t,i)}function r(e){X.killEvent(e);var t=e.data,i=t.$paginationItems.index(u(e.currentTarget));X.clearTimer(t.autoTimer),v(t,i)}function v(e,t,i,a,n){if(t<0&&(t=e.infinite?e.pageCount-1:0),t>=e.pageCount&&(t=e.infinite?0:e.pageCount-1),!(e.count<1)){if(e.pages[t]&&(e.leftPosition=-e.pages[t].left),e.leftPosition=T(e,e.leftPosition),e.useMargin?e.$canister.css({marginLeft:e.leftPosition}):!1===i?(e.$canister.css(z,"none").css(N,"translateX("+e.leftPosition+"px)"),setTimeout(function(){e.$canister.css(z,"")},5)):e.$canister.css(N,"translateX("+e.leftPosition+"px)"),e.$items.removeClass([y.visible,y.item_previous,y.item_next].join(" ")),e.single)for(var s=0,o=e.pages.length;s<o;s++)s===t?e.pages[s].$items.addClass(y.visible).attr("aria-hidden","false"):e.pages[s].$items.not(e.pages[t].$items).addClass(s<t?y.item_previous:y.item_next).attr("aria-hidden","true");else for(s=0;s<e.count;s++){var r=e.rtl?-1:1,l=e.leftPosition*r+e.items[s].left*r,c=l+e.items[s].width,d=e.containerWidth+e.itemMargin+1;-1<=l&&c<=d?e.items[s].$el.addClass(y.visible).attr("aria-hidden","false"):l<0?e.items[s].$el.addClass(y.item_previous).attr("aria-hidden","false"):e.items[s].$el.addClass(y.item_next).attr("aria-hidden","false")}e.autoHeight&&e.$canister.css({height:e.pages[t].height}),!1!==i&&!0!==a&&t!==e.index&&(e.infinite||-1<t&&t<e.pageCount)&&e.$el.trigger(L.update,[t]),e.index=t,e.linked&&!0!==n&&u(e.linked).not(e.$el)[q]("jumpPage",e.index+1,!0,!0),function(e){e.$paginationItems.removeClass(y.active).eq(e.index).addClass(y.active),e.infinite?(e.$controlItems.addClass(y.visible),C(e,e.$controlItems)):e.pageCount<1?(e.$controlItems.removeClass(y.visible),b(e,e.$controlItems)):(e.$controlItems.addClass(y.visible),C(e,e.$controlItems),e.index<=0?(e.$controlPrevious.removeClass(y.visible),b(e,e.$controlPrevious)):(e.index>=e.pageCount-1||!e.single&&e.leftPosition===e.maxMove)&&(e.$controlNext.removeClass(y.visible),b(e,e.$controlNext)))}(e)}}function $(e){e.$controls.removeClass(y.visible),e.$controlItems.removeClass(y.visible),e.$pagination.removeClass(y.visible),b(e,e.$controlItems)}function b(e,t){e.customControls||t.prop("disabled",!0)}function C(e,t){e.customControls||t.prop("disabled",!1)}function l(e,t){var i=e.data;if(X.clearTimer(i.autoTimer),!i.single){if(i.useMargin)i.leftPosition=parseInt(i.$canister.css("marginLeft"));else{var a=i.$canister.css(N).split(",");i.leftPosition=parseInt(a[4])}if(i.$canister.css(z,"none").css("will-change","transform"),c(e),i.linked&&!0!==t){var n=e.deltaX/i.pageWidth;i.rtl&&(n*=-1),u(i.linked).not(i.$el)[q]("panStart",n)}}i.isTouching=!0}function c(e,t){var i=e.data;if(!i.single&&(i.touchLeft=T(i,i.leftPosition+e.deltaX),i.useMargin?i.$canister.css({marginLeft:i.touchLeft}):i.$canister.css(N,"translateX("+i.touchLeft+"px)"),i.linked&&!0!==t)){var a=e.deltaX/i.pageWidth;i.rtl&&(a*=-1),u(i.linked).not(i.$el)[q]("pan",a)}}function d(e,t){var i=e.data,a=Math.abs(e.deltaX),n=I(i,e),s=!1;if(i.didPan=!1,0==n)s=i.index;else{if(!i.single){var o,r,l=Math.abs(i.touchLeft),c=!1,d=i.rtl?"right":"left";if(e.directionX===d)for(o=0,r=i.pages.length;o<r;o++)c=i.pages[o],l>Math.abs(c.left)+20&&(s=o+1);else for(o=i.pages.length-1,r=0;r<=o;o--)c=i.pages[o],l<Math.abs(c.left)&&(s=o-1)}!1===s&&(s=a<50?i.index:i.index+n)}s!==i.index&&(i.didPan=!0),i.linked&&!0!==t&&u(i.linked).not(i.$el)[q]("panEnd",s),w(i,s)}function x(e,t){var i=e.data,a=I(i,e),n=i.index+a;i.linked&&!0!==t&&u(i.linked).not(i.$el)[q]("swipe",e.directionX),w(i,n)}function w(e,t){e.$canister.css(z,"").css("will-change",""),v(e,t),e.isTouching=!1}function W(e){var t=e.data,i=u(e.currentTarget);if(!t.didPan&&(i.trigger(L.itemClick),t.controller)){var a=t.$items.index(i);P(e,a),t.$subordinate[q]("jumpPage",a+1,!0)}}function M(e){var t=e.data;if(t.enabled&&!t.isTouching){X.clearTimer(t.autoTimer),t.$container.scrollLeft(0);var i,a=u(e.target);a.hasClass(y.item)?i=a:a.parents(j.item).length&&(i=a.parents(j.item).eq(0));for(var n=0;n<t.pageCount;n++)if(t.pages[n].$items.is(i)){v(t,n);break}}}function P(e,t){var i=e.data;if(i.controller){var a=i.$items.eq(t);i.$items.removeClass(y.active),a.addClass(y.active);for(var n=0;n<i.pageCount;n++)if(i.pages[n].$items.is(a)){v(i,n,!0,!0);break}}}function T(e,t){return isNaN(t)?t=0:e.rtl?(t>e.maxMove&&(t=e.maxMove),t<0&&(t=0)):(t<e.maxMove&&(t=e.maxMove),0<t&&(t=0)),t}function I(e,t){return Math.abs(t.deltaX)<Math.abs(t.deltaY)?0:e.rtl?"right"===t.directionX?1:-1:"left"===t.directionX?1:-1}var _=m.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoHeight:!1,autoTime:8e3,contained:!0,controls:!0,customClass:"",fill:!1,infinite:!1,labels:{next:"Next",previous:"Previous",controls:"Carousel {guid} Controls",pagination:"Carousel {guid} Pagination"},matchHeight:!1,matchWidth:!0,maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,rtl:!1,show:1,single:!1,theme:"fs-light",touch:!0,useMargin:!1},classes:["ltr","rtl","viewport","wrapper","container","canister","item","item_previous","item_next","controls","controls_custom","control","control_previous","control_next","pagination","page","animated","enabled","visible","active","auto_height","contained","single"],events:{itemClick:"itemClick",update:"update"},methods:{_construct:function(e){var t;e.didPan=!1,e.carouselClasses=[y.base,e.theme,e.customClass,e.rtl?y.rtl:y.ltr],e.maxWidth=e.maxWidth===1/0?"100000px":e.maxWidth,e.mq="(min-width:"+e.minWidth+") and (max-width:"+e.maxWidth+")",e.customControls="object"==typeof e.controls&&e.controls.previous&&e.controls.next,e.customPagination="string"==typeof e.pagination,e.id=this.attr("id"),e.id?e.ariaId=e.id:(e.ariaId=e.rawGuid,this.attr("id",e.ariaId)),m.support.transform||(e.useMargin=!0);var i="",a="",n=[y.control,y.control_previous].join(" "),s=[y.control,y.control_next].join(" ");e.controls&&!e.customControls&&(e.labels.controls=e.labels.controls.replace("{guid}",e.numGuid),i+='<div class="'+y.controls+'" aria-label="'+e.labels.controls+'" aria-controls="'+e.ariaId+'">',i+='<button type="button" class="'+n+'" aria-label="'+e.labels.previous+'">'+e.labels.previous+"</button>",i+='<button type="button" class="'+s+'" aria-label="'+e.labels.next+'">'+e.labels.next+"</button>",i+="</div>"),e.pagination&&!e.customPagination&&(e.labels.pagination=e.labels.pagination.replace("{guid}",e.numGuid),a+='<div class="'+y.pagination+'" aria-label="'+e.labels.pagination+'" aria-controls="'+e.ariaId+'" role="navigation">',a+="</div>"),e.autoHeight&&e.carouselClasses.push(y.auto_height),e.contained&&e.carouselClasses.push(y.contained),e.single&&e.carouselClasses.push(y.single),this.addClass(e.carouselClasses.join(" ")).wrapInner('<div class="'+y.wrapper+'" aria-live="polite"><div class="'+y.container+'"><div class="'+y.canister+'"></div></div></div>').append(i).wrapInner('<div class="'+y.viewport+'"></div>').append(a),e.$viewport=this.find(j.viewport).eq(0),e.$container=this.find(j.container).eq(0),e.$canister=this.find(j.canister).eq(0),e.$pagination=this.find(j.pagination).eq(0),e.$controlPrevious=e.$controlNext=u(""),e.customControls?(e.$controls=u(e.controls.container).addClass([y.controls,y.controls_custom].join(" ")),e.$controlPrevious=u(e.controls.previous).addClass(n),e.$controlNext=u(e.controls.next).addClass(s)):(e.$controls=this.find(j.controls).eq(0),e.$controlPrevious=e.$controls.find(j.control_previous),e.$controlNext=e.$controls.find(j.control_next)),e.$controlItems=e.$controlPrevious.add(e.$controlNext),e.customPagination&&(e.$pagination=u(e.pagination).addClass([y.pagination])),e.$paginationItems=e.$pagination.find(j.page),e.index=0,e.enabled=!1,e.leftPosition=0,e.autoTimer=null,e.resizeTimer=null;var o=this.data(k+"-linked");e.linked=!!o&&"[data-"+k+'-linked="'+o+'"]',e.linked&&(e.paged=!0);var r=this.data(k+"-controller-for")||"";if(e.$subordinate=u(r),e.$subordinate.length&&(e.controller=!0),"object"==typeof e.show){var l=e.show,c=[],d=[];for(t in l)l.hasOwnProperty(t)&&d.push(t);for(t in d.sort(X.sortAsc),d)d.hasOwnProperty(t)&&c.push({width:parseInt(d[t]),count:l[d[t]],mq:window.matchMedia("(min-width: "+parseInt(d[t])+"px)")});e.show=c}f(e),u.fsMediaquery("bind",e.rawGuid,e.mq,{enter:function(){p.call(e.$el,e)},leave:function(){h.call(e.$el,e)}}),g(),e.carouselClasses.push(y.enabled),e.carouselClasses.push(y.animated)},_destruct:function(e){X.clearTimer(e.autoTimer),X.clearTimer(e.resizeTimer),h.call(this,e),u.fsMediaquery("unbind",e.rawGuid),e.id!==e.ariaId&&this.removeAttr("id"),e.$controlItems.removeClass([j.control,y.control_previous,j.control_next,j.visible].join(" ")).off(L.namespace),C(e,e.$controlItems),e.$images.off(L.namespace),e.$canister.fsTouch("destroy"),e.$items.removeClass([y.item,y.visible,j.item_previous,j.item_next].join(" ")).unwrap().unwrap().unwrap().unwrap(),e.controls&&!e.customControls&&e.$controls.remove(),e.customControls&&e.$controls.removeClass([y.controls,y.controls_custom,y.visible].join(" ")),e.pagination&&!e.customPagination&&e.$pagination.remove(),e.customPagination&&e.$pagination.html("").removeClass([y.pagination,y.visible].join(" ")),this.removeClass(e.carouselClasses.join(" ")),g()},_resize:function(e){X.iterate.call(H,i)},disable:h,enable:p,jump:e,previous:a,next:n,jumpPage:e,previousPage:a,nextPage:n,jumpItem:function(e,t,i,a,n){if(e.enabled){X.clearTimer(e.autoTimer);var s=e.$items.eq(t-1);void 0===n&&(n=!0);for(var o=0;o<e.pageCount;o++)if(e.pages[o].$items.is(s)){v(e,o,n,i,a);break}}},reset:function(e){e.enabled&&t.call(this,e,!1)},resize:i,update:t,panStart:function(e,t){if(X.clearTimer(e.autoTimer),!e.single){if(e.rtl&&(t*=-1),e.useMargin)e.leftPosition=parseInt(e.$canister.css("marginLeft"));else{var i=e.$canister.css(N).split(",");e.leftPosition=parseInt(i[4])}e.$canister.css(z,"none"),c({data:e,deltaX:e.pageWidth*t},!0)}e.isTouching=!0},pan:function(e,t){if(!e.single){e.rtl&&(t*=-1);var i=e.pageWidth*t;e.touchLeft=T(e,e.leftPosition+i),e.useMargin?e.$canister.css({marginLeft:e.touchLeft}):e.$canister.css(N,"translateX("+e.touchLeft+"px)")}},panEnd:function(e,t){w(e,t)},swipe:function(e,t){x({data:e,directionX:t},!0)}}}),k=_.namespace,q=_.namespaceClean,j=_.classes,y=j.raw,L=_.events,X=_.functions,H=[],N=m.transform,z=m.transition});
/*! formstone v1.4.22 [checkbox.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(c,e){"use strict";function o(e){var a=e.data;c(e.target).is(a.$el)||(e.preventDefault(),a.$el.trigger("click"))}function i(e){var a=e.data,s=a.$el.is(":disabled"),l=a.$el.is(":checked");s||(a.radio?l&&t(e):l?t(e):n(e))}function t(e){e.data.radio&&c('input[name="'+e.data.group+'"]').not(e.data.$el).trigger("deselect"),e.data.$el.trigger(u.focus),e.data.$classable.addClass(h.checked)}function n(e){e.data.$classable.removeClass(h.checked)}function r(e){e.data.$classable.addClass(h.focus)}function b(e){e.data.$classable.removeClass(h.focus)}var a=e.Plugin("checkbox",{widget:!0,defaults:{customClass:"",toggle:!1,labels:{on:"ON",off:"OFF"},theme:"fs-light"},classes:["element_placeholder","label","marker","flag","radio","focus","checked","disabled","toggle","state","state_on","state_off"],methods:{_construct:function(e){var a=this.closest("label"),s=a.length?a.eq(0):c('label[for="'+this.attr("id")+'"]'),l=[h.base,e.theme,e.customClass].join(" "),t=[h.label,e.theme,e.customClass].join(" "),d="";e.radio="radio"===this.attr("type"),e.group=this.attr("name"),d+='<div class="'+h.marker+'" aria-hidden="true">',d+='<div class="'+h.flag+'"></div>',e.toggle&&(l+=" "+h.toggle,t+=" "+h.toggle,d+='<span class="'+[h.state,h.state_on].join(" ")+'">'+e.labels.on+"</span>",d+='<span class="'+[h.state,h.state_off].join(" ")+'">'+e.labels.off+"</span>"),e.radio&&(l+=" "+h.radio,t+=" "+h.radio),d+="</div>",e.$placeholder=c('<span class="'+h.element_placeholder+'"></span>'),this.before(e.$placeholder),e.labelParent=s.find(this).length,e.labelClass=t,s.addClass(t),e.labelParent?s.wrap('<div class="'+l+'"></div>').before(d):this.before('<div class=" '+l+'">'+d+"</div>"),e.$checkbox=e.labelParent?s.parents(f.base):this.prev(f.base),e.$marker=e.$checkbox.find(f.marker),e.$states=e.$checkbox.find(f.state),e.$label=s,e.$classable=c().add(e.$checkbox).add(e.$label),this.is(":checked")&&e.$classable.addClass(h.checked),this.is(":disabled")&&e.$classable.addClass(h.disabled),this.appendTo(e.$marker),this.on(u.focus,e,r).on(u.blur,e,b).on(u.change,e,i).on(u.click,e,o).on(u.deselect,e,n),e.$checkbox.on(u.click,e,o)},_destruct:function(e){e.$checkbox.off(u.namespace),e.$marker.remove(),e.$states.remove(),e.$label.removeClass(e.labelClass),e.labelParent?e.$label.unwrap():this.unwrap(),e.$placeholder.before(this),e.$placeholder.remove(),this.off(u.namespace)},enable:function(e){this.prop("disabled",!1),e.$classable.removeClass(h.disabled)},disable:function(e){this.prop("disabled",!0),e.$classable.addClass(h.disabled)},update:function(e){var a=e.$el.is(":disabled"),s=e.$el.is(":checked");a||(s?t({data:e}):n({data:e}))}},events:{deselect:"deselect"}}),f=a.classes,h=f.raw,u=a.events;a.functions});
/*! formstone v1.4.22 [checkpoint.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(s,e){"use strict";function t(){p=h.height(),d.iterate.call(g,o)}function a(){g=s(r.base),t()}function i(e){if(e.hasParent){var t=e.$parent.scrollTop();t!==e.parentScroll&&(n(e),e.parentScroll=t)}}function o(e){if(e.initialized){switch(e.parentHeight=e.hasParent?e.$parent.outerHeight(!1):p,e.windowIntersect){case"top":e.windowCheck=0-e.offset;break;case"middle":case"center":e.windowCheck=e.parentHeight/2-e.offset;break;case"bottom":e.windowCheck=e.parentHeight-e.offset}switch(e.elOffset=e.$target.offset(),e.elIntersect){case"top":e.elCheck=e.elOffset.top;break;case"middle":e.elCheck=e.elOffset.top+e.$target.outerHeight()/2;break;case"bottom":e.elCheck=e.elOffset.top+e.$target.outerHeight()}if(e.hasParent){var t=e.$parent.offset();e.elCheck-=t.top}n(e)}}function n(e){e.initialized&&(e.windowCheck+(e.hasParent?e.parentScroll:v)>=e.elCheck?(e.active||e.$el.trigger(f.activate),e.active=!0,e.$el.addClass(l.active)):e.reverse&&(e.active&&e.$el.trigger(f.deactivate),e.active=!1,e.$el.removeClass(l.active)))}var c=e.Plugin("checkpoint",{widget:!0,defaults:{intersect:"bottom-top",offset:0,reverse:!1},classes:["active"],events:{activate:"activate",deactivate:"deactivate"},methods:{_construct:function(e){e.initialized=!1;var t=s(e.$el.data("checkpoint-parent")),a=s(e.$el.data("checkpoint-container")),i=e.$el.data("checkpoint-intersect"),n=e.$el.data("checkpoint-offset");i&&(e.intersect=i),n&&(e.offset=n);var c=e.intersect.split("-");e.windowIntersect=c[0],e.elIntersect=c[1],e.visible=!1,e.$target=a.length?a:e.$el,e.hasParent=0<t.length,e.$parent=t;var r=e.$target.find("img");r.length&&r.on(f.load,e,o),e.$el.addClass(l.base),e.initialized=!0},_postConstruct:function(e){a(),t()},_destruct:function(e){e.$el.removeClass(l.base),a()},_resize:t,_raf:function(){(v=h.scrollTop())<0&&(v=0),v!==u&&(d.iterate.call(g,n),u=v),d.iterate.call(g,i)},resize:o}}),r=(c.namespace,c.classes),l=r.raw,f=c.events,d=c.functions,h=(e.window,e.$window),p=0,v=0,u=0,g=[]});
/*! formstone v1.4.22 [cookie.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(t,e){"use strict";function r(e,n,i){var t=!1,r=new Date;i.expires&&"number"==typeof i.expires&&(r.setTime(r.getTime()+i.expires),t=r.toGMTString());var o=i.domain?"; domain="+i.domain:"",u=t?"; expires="+t:"",l=t?"; max-age="+i.expires/1e3:"",s=i.path?"; path="+i.path:"",f=i.secure?"; secure":"";a.cookie=e+"="+n+u+l+o+s+f}e.Plugin("cookie",{utilities:{_delegate:function(e,n,i){if("object"==typeof e)o=t.extend(o,e);else if(i=t.extend({},o,i||{}),void 0!==e){if(void 0===n)return function(e){for(var n=e+"=",i=a.cookie.split(";"),t=0;t<i.length;t++){for(var r=i[t];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(n))return r.substring(n.length,r.length)}return null}(e);null===n?function(e,n){r(e,"",t.extend({},n,{expires:-6048e5}))}(e,i):r(e,n,i)}return null}}});var o={domain:null,expires:6048e5,path:null,secure:null},a=e.document});
/*! formstone v1.4.22 [dropdown.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./scrollbar","./touch"],e):e(jQuery,Formstone)}(function(c,u){"use strict";function f(e){for(var t="",l=0,i=e.$allOptions.length;l<i;l++){var s=e.$allOptions.eq(l),o=[];if("OPTGROUP"===s[0].tagName)o.push(I.group),s.prop("disabled")&&o.push(I.disabled),t+='<span class="'+o.join(" ")+'">'+s.attr("label")+"</span>";else{var a=s.val(),d=s.data("label"),n=e.links?"a":'button type="button"';s.attr("value")||s.attr("value",a),o.push(I.item),s.hasClass(I.item_placeholder)&&(o.push(I.item_placeholder),n="span"),s.prop("selected")&&o.push(I.item_selected),s.prop("disabled")&&o.push(I.item_disabled),t+="<"+n+' class="'+o.join(" ")+'"',e.links?"span"===n?t+=' aria-hidden="true"':(t+=' href="'+a+'"',e.external&&(t+=' target="_blank"')):t+=' data-value="'+a+'"',t+=' role="option"',s.prop("selected")&&(t+=' "aria-selected"="true"'),t+=">",t+=d||r.decodeEntities(g(s.text(),e.trim)),t+="</"+n+">",0}}e.$items=e.$wrapper.html(c.parseHTML(t)).find(C.item)}function m(e){r.killEvent(e);var t=e.data;t.disabled||t.useNative||(t.closed?i(t):a(t)),l(t)}function l(e){c(C.base).not(e.$dropdown).trigger(k.close,[e])}function i(e){if(e.closed){var t=_.height(),l=e.$wrapper.outerHeight(!0);e.$dropdown[0].getBoundingClientRect().bottom+l>t-e.bottomEdge&&e.$dropdown.addClass(I.bottom),y.on(k.click+e.dotGuid,":not("+C.options+")",e,s),e.$dropdown.trigger(k.focusIn),e.$dropdown.addClass(I.open),d(e),e.closed=!1}}function a(e){e&&!e.closed&&(y.off(k.click+e.dotGuid),e.$dropdown.removeClass([I.open,I.bottom].join(" ")),e.closed=!0)}function s(e){r.killEvent(e);var t=e.data;t&&0===c(e.currentTarget).parents(C.base).length&&(a(t),t.$dropdown.trigger(k.focusOut))}function b(e){var t=e.data;t&&(a(t),t.$dropdown.trigger(k.focusOut))}function $(e){var t=c(this),l=e.data;if(r.killEvent(e),!l.disabled){var i=l.$items.index(t);l.focusIndex=i,l.$wrapper.is(":visible")&&(w(i,l,e.shiftKey,e.metaKey||e.ctrlKey),n(l)),l.multiple||a(l),l.$dropdown.trigger(k.focus)}}function v(e,t){c(this);var l=e.data;if(!t&&!l.multiple){var i=l.$options.index(l.$options.filter(":selected"));w(l.focusIndex=i,l),n(l,!0)}}function h(e){r.killEvent(e);c(e.currentTarget);var t=e.data;t.disabled||t.multiple||t.focused||(l(t),t.focused=!0,t.focusIndex=t.index,t.input="",t.$dropdown.addClass(I.focus).on(k.keyDown+t.dotGuid,t,o))}function x(e){r.killEvent(e);c(e.currentTarget);var t=e.data;t.focused&&t.closed&&(t.focused=!1,t.$dropdown.removeClass(I.focus).off(k.keyDown+t.dotGuid),t.multiple||(a(t),t.index!==t.focusIndex&&(n(t),t.focusIndex=t.index)))}function o(e){var t=e.data;if(t.keyTimer=r.startTimer(t.keyTimer,1e3,function(){t.input=""}),13===e.keyCode)t.closed||(a(t),w(t.index,t)),n(t);else if(!(9===e.keyCode||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){r.killEvent(e);var l=t.$items.length-1,i=t.index<0?0:t.index;if(-1<c.inArray(e.keyCode,u.isFirefox?[38,40,37,39]:[38,40]))(i+=38===e.keyCode||u.isFirefox&&37===e.keyCode?-1:1)<0&&(i=0),l<i&&(i=l);else{var s,o=String.fromCharCode(e.keyCode).toUpperCase();for(t.input+=o,s=t.index+1;s<=l;s++)if(t.$options.eq(s).text().substr(0,t.input.length).toUpperCase()===t.input){i=s;break}if(i<0||i===t.index)for(s=0;s<=l;s++)if(t.$options.eq(s).text().substr(0,t.input.length).toUpperCase()===t.input){i=s;break}}0<=i&&(w(i,t),d(t))}}function w(e,t,l,i){var s=t.$items.eq(e),o=t.$options.eq(e),a=s.hasClass(I.item_selected);if(!s.hasClass(I.item_disabled))if(t.multiple)if(t.useNative)a?(o.prop("selected",null).attr("aria-selected",null),s.removeClass(I.item_selected)):(o.prop("selected",!0).attr("aria-selected",!0),s.addClass(I.item_selected));else if(l&&!1!==t.lastIndex){var d=t.lastIndex>e?e:t.lastIndex,n=(t.lastIndex>e?t.lastIndex:e)+1;t.$options.prop("selected",null).attr("aria-selected",null),t.$items.filter(C.item_selected).removeClass(I.item_selected),t.$options.slice(d,n).not("[disabled]").prop("selected",!0),t.$items.slice(d,n).not(C.item_disabled).addClass(I.item_selected)}else i||t.selectMultiple?a?(o.prop("selected",null).attr("aria-selected",null),s.removeClass(I.item_selected)):(o.prop("selected",!0).attr("aria-selected",!0),s.addClass(I.item_selected)):(t.$options.prop("selected",null).attr("aria-selected",null),t.$items.filter(C.item_selected).removeClass(I.item_selected),o.prop("selected",!0).attr("aria-selected",!0),s.addClass(I.item_selected)),t.lastIndex=e;else if(-1<e&&e<t.$items.length){if(e!==t.index){var r=o.data("label")||s.html();t.$selected.html(r).removeClass(C.item_placeholder),t.$items.filter(C.item_selected).removeClass(I.item_selected),t.$el[0].selectedIndex=e,s.addClass(I.item_selected),t.index=e}}else""!==t.label&&t.$selected.html(t.label)}function d(e){var t=e.$items.eq(e.index),l=0<=e.index&&!t.hasClass(I.item_placeholder)?t.position():{left:0,top:0},i=(e.$wrapper.outerHeight()-t.outerHeight())/2;void 0!==c.fn.fsScrollbar?e.$wrapper.fsScrollbar("resize").fsScrollbar("scroll",e.$wrapper.find(".fs-scrollbar-content").scrollTop()+l.top):e.$wrapper.scrollTop(e.$wrapper.scrollTop()+l.top-i)}function n(e,t){e.links?function(e){var t=e.$el.val();e.external?p.open(t):p.location.href=t}(e):t||e.$el.trigger(k.raw.change,[!0])}function g(e,t){return 0===t?e:e.length>t?e.substring(0,t)+"...":e}var e=u.Plugin("dropdown",{widget:!0,defaults:{bottomEdge:0,cover:!1,customClass:"",label:"",external:!1,links:!1,mobile:!1,native:!1,theme:"fs-light",trim:0,selectMultiple:!1},methods:{_construct:function(e){e.multiple=this.prop("multiple"),e.disabled=this.prop("disabled")||this.is("[readonly]"),e.lastIndex=!1,e.native=e.mobile||e.native,e.useNative=e.native||u.isMobile,e.multiple?e.links=!1:e.external&&(e.links=!0);var t=this.find("[selected]").not(":disabled"),l=this.find(":selected").not(":disabled"),i=l.text(),s=this.find("option").index(l);e.multiple||""===e.label||t.length?e.label="":(l=this.prepend('<option value="" class="'+I.item_placeholder+'" selected>'+e.label+"</option>"),i=e.label,s=0);var o=this.find("option, optgroup"),a=o.filter("option"),d=c('[for="'+this.attr("id")+'"]');e.tabIndex=this[0].tabIndex,this[0].tabIndex=-1,d.length&&(d[0].tabIndex=-1);var n=[I.base,e.theme,e.customClass];e.useNative?n.push(I.native):e.cover&&n.push(I.cover),e.multiple&&n.push(I.multiple),e.disabled&&n.push(I.disabled),e.id=this.attr("id"),e.id?e.ariaId=e.id:e.ariaId=e.rawGuid,e.ariaId+="-dropdown",e.selectedAriaId=e.ariaId+"-selected";var r="",p="";r+='<div class="'+n.join(" ")+'"id="'+e.ariaId+'" tabindex="'+e.tabIndex+'" role="listbox"',e.multiple?r+=' aria-label="multi select"':r+=' aria-haspopup="true" aria-live="polite" aria-labelledby="'+e.selectedAriaId+'"',r+="></div>",e.multiple||(p+='<button type="button" class="'+I.selected+'" id="'+e.selectedAriaId+'" tabindex="-1">',p+=c("<span></span>").text(g(i,e.trim)).html(),p+="</button>"),p+='<div class="'+I.options+'">',p+="</div>",this.wrap(r).after(p),e.$dropdown=this.parent(C.base),e.$label=d,e.$allOptions=o,e.$options=a,e.$selected=e.$dropdown.find(C.selected),e.$wrapper=e.$dropdown.find(C.options),e.$placeholder=e.$dropdown.find(C.placeholder),e.index=-1,e.closed=!0,e.focused=!1,f(e),e.multiple||w(s,e),void 0!==c.fn.fsScrollbar&&e.$wrapper.fsScrollbar({theme:e.theme}).find(".fs-scrollbar-content").attr("tabindex",null),e.$dropdown.on(k.click,e,m),e.$selected.on(k.click,e,m),e.$dropdown.on(k.click,C.item,e,$).on(k.close,e,b),this.on(k.change,e,v),e.useNative||(this.on(k.focusIn,e,function(e){e.data.$dropdown.trigger(k.raw.focus)}),e.$dropdown.on(k.focusIn,e,h).on(k.focusOut,e,x))},_destruct:function(e){e.$dropdown.hasClass(I.open)&&e.$selected.trigger(k.click),void 0!==c.fn.fsScrollbar&&e.$wrapper.fsScrollbar("destroy"),e.$el[0].tabIndex=e.tabIndex,e.$label.length&&(e.$label[0].tabIndex=e.tabIndex),e.$dropdown.off(k.namespace),e.$options.off(k.namespace),e.$placeholder.remove(),e.$selected.remove(),e.$wrapper.remove(),e.$el.off(k.namespace).show().unwrap()},disable:function(e,t){if(void 0!==t){var l=e.$items.index(e.$items.filter("[data-value="+t+"]"));e.$items.eq(l).addClass(I.item_disabled),e.$options.eq(l).prop("disabled",!0)}else e.$dropdown.hasClass(I.open)&&e.$selected.trigger(k.click),e.$dropdown.addClass(I.disabled),e.$el.prop("disabled",!0),e.disabled=!0},enable:function(e,t){if(void 0!==t){var l=e.$items.index(e.$items.filter("[data-value="+t+"]"));e.$items.eq(l).removeClass(I.item_disabled),e.$options.eq(l).prop("disabled",!1)}else e.$dropdown.removeClass(I.disabled),e.$el.prop("disabled",!1),e.disabled=!1},update:function(e){void 0!==c.fn.fsScrollbar&&e.$wrapper.fsScrollbar("destroy");var t=e.index;e.$allOptions=e.$el.find("option, optgroup"),e.$options=e.$allOptions.filter("option"),e.index=-1,t=e.$options.index(e.$options.filter(":selected")),f(e),e.multiple||w(t,e),void 0!==c.fn.fsScrollbar&&e.$wrapper.fsScrollbar({theme:e.theme}).find(".fs-scrollbar-content").attr("tabindex",null)},open:i,close:a},classes:["cover","bottom","multiple","mobile","native","open","disabled","focus","selected","options","group","item","item_disabled","item_selected","item_placeholder"],events:{close:"close"}}),C=e.classes,I=C.raw,k=e.events,r=e.functions,p=u.window,_=u.$window,y=(u.document,null);u.Ready(function(){y=u.$body})});
/*! formstone v1.4.22 [equalize.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(t,e){"use strict";function n(){u=t(d.element)}function i(e){if(e.data&&(e=e.data),e.enabled)for(var t,n,i,r=0;r<e.target.length;r++){n=t=0,(i=e.$el.find(e.target[r])).css(e.property,"");for(var a=0;a<i.length;a++)t<(n=i.eq(a)[e.type]())&&(t=n);i.css(e.property,t)}}function r(e){for(var t=0;t<e.target.length;t++)e.$el.find(e.target[t]).css(e.property,"");e.$el.find("img").off(o.namespace)}var a=e.Plugin("equalize",{widget:!0,priority:5,defaults:{maxWidth:1/0,minWidth:"0px",property:"height",target:null},methods:{_construct:function(e){e.maxWidth=e.maxWidth===1/0?"100000px":e.maxWidth,e.mq="(min-width:"+e.minWidth+") and (max-width:"+e.maxWidth+")",e.type="height"===e.property?"outerHeight":"outerWidth",e.target?t.isArray(e.target)||(e.target=[e.target]):e.target=["> *"],n(),t.fsMediaquery("bind",e.rawGuid,e.mq,{enter:function(){(function(e){if(!e.enabled){e.enabled=!0;var t=e.$el.find("img");t.length&&t.on(o.load,e,i),i(e)}}).call(e.$el,e)},leave:function(){(function(e){e.enabled&&(e.enabled=!1,r(e))}).call(e.$el,e)}})},_destruct:function(e){r(e),t.fsMediaquery("unbind",e.rawGuid),n()},_resize:function(e){f.iterate.call(u,i)},resize:i}}),d=a.classes,o=(d.raw,a.events),f=a.functions,u=[]});
/*! formstone v1.4.22 [lightbox.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./touch","./transition","./viewer"],t):t(jQuery,Formstone)}(function($,f){"use strict";function e(t){if(!K){var i=t.data;(K=$.extend({},{visible:!1,gallery:{active:!1},isMobile:f.isMobile&&!1!==i.mobile||i.overlay,isTouch:f.support.touch,isAnimating:!0,isZooming:!1,oldContentHeight:0,oldContentWidth:0,metaHeight:0,thumbnailHeight:0,captionOpen:!1,thumbnailsOpen:!1,tapTimer:null},i)).isViewer=K.isMobile&&i.viewer&&void 0!==$.fn.fsViewer;var e=i.$el,n=i.$object,o=e&&e[0].href&&e[0].href||"",a=e&&e[0].hash&&e[0].hash||"",l=(o.toLowerCase().split(".").pop().split(/\#|\?/),e?e.data(P+"-type"):""),r="image"===l||o.match(i.fileTypes)||"data:image"===o.substr(0,10),g=L(o),s="url"===l||!r&&!g&&"http"===o.substr(0,4)&&!a,d="element"===l||!r&&!g&&!s&&"#"===a.substr(0,1),h=void 0!==n;if(d&&(o=a),!(r||g||s||d||h))return void(K=null);if(A.killEvent(t),K.margin*=2,K.type=r?"image":g?"video":"element",e&&e.length){var c=e.data(P+"-gallery");c&&(K.gallery.active=!0,K.gallery.id=c,K.gallery.$items=$("a[data-lightbox-gallery= "+K.gallery.id+"], a[rel= "+K.gallery.id+"]"),K.gallery.index=K.gallery.$items.index(K.$el),K.gallery.total=K.gallery.$items.length-1)}K.thumbnails&&(r||g)&&K.gallery.active||(K.thumbnails=!1);var m="";K.isMobile||(m+='<div class="'+[E.overlay,K.theme,K.customClass].join(" ")+'"></div>');var p=[E.base,E.loading,E.animating,K.theme,K.customClass];if(K.fixed&&p.push(E.fixed),K.isMobile&&p.push(E.mobile),K.isTouch&&p.push(E.touch),s&&p.push(E.iframed),(d||h)&&p.push(E.inline),K.thumbnails&&p.push(E.thumbnailed),K.labels.lightbox=K.labels.lightbox.replace("{guid}",i.numGuid),m+='<div class="'+p.join(" ")+'" role="dialog" aria-label="'+K.labels.lightbox+'" tabindex="-1">',m+='<button type="button" class="'+E.close+'">'+K.labels.close+"</button>",m+='<span class="'+E.loading_icon+'"></span>',m+='<div class="'+E.container+'">',K.gallery.active&&K.thumbnails){var u,b;m+='<div class="'+[E.thumbnails]+'">',m+='<div class="'+[E.thumbnail_container]+'">';for(var v=0,H=K.gallery.$items.length;v<H;v++)b=(b=(u=K.gallery.$items.eq(v)).data("lightbox-thumbnail"))||u.find("img").attr("src"),m+='<button class="'+[E.thumbnail_item]+'">',m+='<img src="'+b+'" alt="">',m+="</button>";m+="</div></div>"}m+='<div class="'+E.content+'"></div>',r||g?(m+='<div class="'+E.tools+'">',m+='<div class="'+E.controls+'">',K.gallery.active&&(m+='<button type="button" class="'+[E.control,E.control_previous].join(" ")+'">'+K.labels.previous+"</button>",m+='<button type="button" class="'+[E.control,E.control_next].join(" ")+'">'+K.labels.next+"</button>"),K.isMobile&&K.isTouch&&(m+='<button type="button" class="'+[E.toggle,E.caption_toggle].join(" ")+'">'+K.labels.captionClosed+"</button>",K.gallery.active&&K.thumbnails&&(m+='<button type="button" class="'+[E.toggle,E.thumbnail_toggle].join(" ")+'">'+K.labels.thumbnailsClosed+"</button>")),m+="</div>",m+='<div class="'+E.meta+'">',m+='<div class="'+E.meta_content+'">',K.gallery.active&&(m+='<p class="'+E.position+'"',K.gallery.total<1&&(m+=' style="display: none;"'),m+=">",m+='<span class="'+E.position_current+'">'+(K.gallery.index+1)+"</span> ",m+=K.labels.count,m+=' <span class="'+E.position_total+'">'+(K.gallery.total+1)+"</span>",m+="</p>"),m+='<div class="'+E.caption+'">',m+=K.formatter.call(e,i),m+="</div></div></div>",m+="</div>"):K.gallery.active&&(m+='<div class="'+E.tools+'">',m+='<div class="'+E.controls+'">',m+='<button type="button" class="'+[E.control,E.control_previous].join(" ")+'">'+K.labels.previous+"</button>",m+='<button type="button" class="'+[E.control,E.control_next].join(" ")+'">'+K.labels.next+"</button>",m+="</div>",m+="</div>"),m+="</div></div>",F.append(m),K.$overlay=$(q.overlay),K.$lightbox=$(q.base),K.$close=$(q.close),K.$container=$(q.container),K.$content=$(q.content),K.$tools=$(q.tools),K.$meta=$(q.meta),K.$metaContent=$(q.meta_content),K.$position=$(q.position),K.$caption=$(q.caption),K.$controlBox=$(q.controls),K.$controls=$(q.control),K.$thumbnails=$(q.thumbnails),K.$thumbnailContainer=$(q.thumbnail_container),K.$thumbnailItems=$(q.thumbnail_item),K.isMobile?(K.paddingVertical=K.$close.outerHeight(),K.paddingHorizontal=0,K.mobilePaddingVertical=parseInt(K.$content.css("paddingTop"),10)+parseInt(K.$content.css("paddingBottom"),10),K.mobilePaddingHorizontal=parseInt(K.$content.css("paddingLeft"),10)+parseInt(K.$content.css("paddingRight"),10)):(K.paddingVertical=parseInt(K.$lightbox.css("paddingTop"),10)+parseInt(K.$lightbox.css("paddingBottom"),10),K.paddingHorizontal=parseInt(K.$lightbox.css("paddingLeft"),10)+parseInt(K.$lightbox.css("paddingRight"),10),K.mobilePaddingVertical=0,K.mobilePaddingHorizontal=0),K.contentHeight=K.$lightbox.outerHeight()-K.paddingVertical,K.contentWidth=K.$lightbox.outerWidth()-K.paddingHorizontal,K.controlHeight=K.$controls.outerHeight(),function(){var t=W();K.$lightbox.css({top:K.fixed?0:t.top})}(),K.gallery.active&&(K.$lightbox.addClass(E.has_controls),T()),B.on(R.keyDown,M),F.on(R.click,[q.overlay,q.close].join(", "),w).on([R.focus,R.focusIn].join(" "),O),K.gallery.active&&K.$lightbox.on(R.click,q.control,I),K.thumbnails&&K.$lightbox.on(R.click,q.thumbnail_item,V),K.isMobile&&K.isTouch&&K.$lightbox.on(R.click,q.caption_toggle,y).on(R.click,q.thumbnail_toggle,x),K.$lightbox.fsTransition({property:"opacity"},function(){r?C(o):g?_(o):s?k(o):d?j(o):h&&z(K.$object)}).addClass(E.open),K.$overlay.addClass(E.open)}}function t(t){"object"!=typeof t&&(K.targetHeight=t,K.targetWidth=arguments[1]),"element"===K.type?h(K.$content.find("> :first-child")):"image"===K.type?i():"video"===K.type&&r(),function(){if(K.visible&&!K.isMobile){var t=W();K.$controls.css({marginTop:(K.contentHeight-K.controlHeight-K.metaHeight+K.thumbnailHeight)/2}),K.$lightbox.css({height:K.contentHeight+K.paddingVertical,width:K.contentWidth+K.paddingHorizontal,top:K.fixed?0:t.top}),K.oldContentHeight=K.contentHeight,K.oldContentWidth=K.contentWidth}}()}function w(t){A.killEvent(t),K&&(K.$lightbox.fsTransition("destroy"),K.$content.fsTransition("destroy"),K.$lightbox.addClass(E.animating).fsTransition({property:"opacity"},function(t){void 0!==K.$inlineTarget&&K.$inlineTarget.length&&d(),K.isViewer&&K.$imageContainer&&K.$imageContainer.length&&K.$imageContainer.fsViewer("destroy"),K.$lightbox.off(R.namespace),K.$container.off(R.namespace),B.off(R.keyDown),F.off(R.namespace),F.off(R.namespace),K.$overlay.remove(),K.$lightbox.remove(),void 0!==K.$el&&K.$el&&K.$el.length&&K.$el.focus(),K=null,B.trigger(R.close)}),K.$lightbox.removeClass(E.open),K.$overlay.removeClass(E.open),K.isMobile&&(b.removeClass(E.lock),A.unlockViewport(P)))}function o(){var t=W();K.isMobile||K.duration;K.isMobile?A.lockViewport(P):K.$controls.css({marginTop:(K.contentHeight-K.controlHeight-K.metaHeight+K.thumbnailHeight)/2}),""===K.$caption.html()?(K.$caption.hide(),K.$lightbox.removeClass(E.has_caption),K.gallery.active||K.$tools.hide()):(K.$caption.show(),K.$lightbox.addClass(E.has_caption)),K.$lightbox.fsTransition({property:K.contentHeight!==K.oldContentHeight?"height":"width"},function(){K.$content.fsTransition({property:"opacity"},function(){K.$lightbox.removeClass(E.animating),K.isAnimating=!1}),K.$lightbox.removeClass(E.loading).addClass(E.ready),K.visible=!0,B.trigger(R.open,[{instance:K}]),K.gallery.active&&("element"==K.type||(function(){var t="";0<K.gallery.index&&(L(t=K.gallery.$items.eq(K.gallery.index-1).attr("href"))||$('<img src="'+t+'">'));K.gallery.index<K.gallery.total&&(L(t=K.gallery.$items.eq(K.gallery.index+1).attr("href"))||$('<img src="'+t+'">'))}(),g(),function(){if(K.thumbnails){var t=K.$thumbnailItems.eq(K.gallery.index),i=t.position().left+t.outerWidth(!1)/2-K.$thumbnailContainer.outerWidth(!0)/2;K.$thumbnailContainer.stop().animate({scrollLeft:i},200,"linear")}}())),K.$lightbox.focus()}),K.isMobile||K.$lightbox.css({height:K.contentHeight+K.paddingVertical,width:K.contentWidth+K.paddingHorizontal,top:K.fixed?0:t.top});var i=K.oldContentHeight!==K.contentHeight||K.oldContentWidth!==K.contentWidth;!K.isMobile&&i||K.$lightbox.fsTransition("resolve"),K.oldContentHeight=K.contentHeight,K.oldContentWidth=K.contentWidth,K.isMobile&&b.addClass(E.lock)}function W(){if(K.isMobile)return{left:0,top:0};var t={left:(f.windowWidth-K.contentWidth-K.paddingHorizontal)/2,top:K.top<=0?(f.windowHeight-K.contentHeight-K.paddingVertical)/2:K.top};return!0!==K.fixed&&(t.top+=B.scrollTop()),t}function y(t){if(A.killEvent(t),K.captionOpen)n();else{a();var i=parseInt(K.$metaContent.outerHeight(!0));i+=parseInt(K.$meta.css("padding-top")),i+=parseInt(K.$meta.css("padding-bottom")),K.$meta.css({height:i}),K.$lightbox.addClass(E.caption_open).find(q.caption_toggle).text(K.labels.captionOpen),K.captionOpen=!0}}function n(){K.$lightbox.removeClass(E.caption_open).find(q.caption_toggle).text(K.labels.captionClosed),K.captionOpen=!1}function x(t){A.killEvent(t),K.thumbnailsOpen?a():(n(),K.$lightbox.addClass(E.thumbnails_open).find(q.thumbnail_toggle).text(K.labels.thumbnailsOpen),K.thumbnailsOpen=!0)}function a(){K.$lightbox.removeClass(E.thumbnails_open).find(q.thumbnail_toggle).text(K.labels.thumbnailsClosed),K.thumbnailsOpen=!1}function C(t){K.isViewer?(K.$imageContainer=$('<div class="'+E.image_container+'"><img></div>'),K.$image=K.$imageContainer.find("img"),K.$image.attr("src",t).addClass(E.image),K.$content.prepend(K.$imageContainer),i(),K.$imageContainer.one("loaded.viewer",function(){o()}).fsViewer({theme:K.theme})):(K.$imageContainer=$('<div class="'+E.image_container+'"><img></div>'),K.$image=K.$imageContainer.find("img"),K.$image.one(R.load,function(){var t=function(t){var i=t[0],e=new Image;{if(void 0!==i.naturalHeight)return{naturalHeight:i.naturalHeight,naturalWidth:i.naturalWidth};if("img"===i.tagName.toLowerCase())return e.src=i.src,{naturalHeight:e.height,naturalWidth:e.width}}return!1}(K.$image);K.naturalHeight=t.naturalHeight,K.naturalWidth=t.naturalWidth,K.retina&&(K.naturalHeight/=2,K.naturalWidth/=2),K.$content.prepend(K.$imageContainer),i(),o()}).on(R.error,c).attr("src",t).addClass(E.image),!K.$image[0].complete&&4!==K.$image[0].readyState||K.$image.trigger(R.load))}function i(){if(K.$image){var t=0;for(K.windowHeight=K.viewportHeight=f.windowHeight-K.mobilePaddingVertical-K.paddingVertical,K.windowWidth=K.viewportWidth=f.windowWidth-K.mobilePaddingHorizontal-K.paddingHorizontal,K.contentHeight=1/0,K.contentWidth=1/0,K.imageMarginTop=0,K.imageMarginLeft=0;K.contentHeight>K.viewportHeight&&t<2;)K.imageHeight=0===t?K.naturalHeight:K.$image.outerHeight(),K.imageWidth=0===t?K.naturalWidth:K.$image.outerWidth(),K.metaHeight=0===t?0:K.metaHeight,K.spacerHeight=0===t?0:K.spacerHeight,K.thumbnailHeight=0===t?0:K.thumbnailHeight,0===t&&(K.ratioHorizontal=K.imageHeight/K.imageWidth,K.ratioVertical=K.imageWidth/K.imageHeight,K.isWide=K.imageWidth>K.imageHeight),K.imageHeight<K.minHeight&&(K.minHeight=K.imageHeight),K.imageWidth<K.minWidth&&(K.minWidth=K.imageWidth),K.isMobile?(K.isTouch?(K.$controlBox.css({width:f.windowWidth}),K.spacerHeight=K.$controls.outerHeight(!0)):(K.$tools.css({width:f.windowWidth}),K.spacerHeight=K.$tools.outerHeight(!0)),K.contentHeight=K.viewportHeight,K.contentWidth=K.viewportWidth,K.isTouch||K.$content.css({height:K.contentHeight-K.spacerHeight}),K.$thumbnails.length&&(K.spacerHeight+=K.$thumbnails.outerHeight(!0)),K.spacerHeight+=10,l(),K.imageMarginTop=(K.contentHeight-K.targetImageHeight-K.spacerHeight)/2,K.imageMarginLeft=(K.contentWidth-K.targetImageWidth)/2):(0===t&&(K.viewportHeight-=K.margin+K.paddingVertical,K.viewportWidth-=K.margin+K.paddingHorizontal),K.viewportHeight-=K.metaHeight,K.thumbnails&&(K.viewportHeight-=K.thumbnailHeight),l(),K.contentHeight=K.targetImageHeight,K.contentWidth=K.targetImageWidth),K.isMobile||K.isTouch||K.$meta.css({width:K.contentWidth}),K.$image.css({height:K.targetImageHeight,width:K.targetImageWidth,marginTop:K.imageMarginTop,marginLeft:K.imageMarginLeft}),K.isMobile||(K.metaHeight=K.$meta.outerHeight(!0),K.contentHeight+=K.metaHeight),K.thumbnails&&(K.thumbnailHeight=K.$thumbnails.outerHeight(!0),K.contentHeight+=K.thumbnailHeight),t++}}function l(){var t=K.isMobile?K.contentHeight-K.spacerHeight:K.viewportHeight,i=K.isMobile?K.contentWidth:K.viewportWidth;K.isWide?(K.targetImageWidth=i,K.targetImageHeight=K.targetImageWidth*K.ratioHorizontal,K.targetImageHeight>t&&(K.targetImageHeight=t,K.targetImageWidth=K.targetImageHeight*K.ratioVertical)):(K.targetImageHeight=t,K.targetImageWidth=K.targetImageHeight*K.ratioVertical,K.targetImageWidth>i&&(K.targetImageWidth=i,K.targetImageHeight=K.targetImageWidth*K.ratioHorizontal)),(K.targetImageWidth>K.imageWidth||K.targetImageHeight>K.imageHeight)&&(K.targetImageHeight=K.imageHeight,K.targetImageWidth=K.imageWidth),(K.targetImageWidth<K.minWidth||K.targetImageHeight<K.minHeight)&&(K.targetImageWidth<K.minWidth?(K.targetImageWidth=K.minWidth,K.targetImageHeight=K.targetImageWidth*K.ratioHorizontal):(K.targetImageHeight=K.minHeight,K.targetImageWidth=K.targetImageHeight*K.ratioVertical))}function _(t){var i=L(t),e=t.split("?"),n="&origin="+encodeURIComponent(window.location.protocol+"//"+window.location.hostname);i?(2<=e.length&&(i+="?"+e.slice(1)[0].trim()),K.$videoWrapper=$('<div class="'+E.video_wrapper+'"></div>'),K.$video=$('<iframe class="'+E.video+'" frameborder="0" seamless="seamless" allowfullscreen></iframe>'),K.$video.attr("src",i+"&enablejsapi=1"+n).addClass(E.video).prependTo(K.$videoWrapper),K.$content.prepend(K.$videoWrapper),r(),o()):c()}function r(){K.windowHeight=K.viewportHeight=f.windowHeight-K.mobilePaddingVertical-K.paddingVertical,K.windowWidth=K.viewportWidth=f.windowWidth-K.mobilePaddingHorizontal-K.paddingHorizontal,K.videoMarginTop=0,K.videoMarginLeft=0,K.isMobile?(K.isTouch?(K.$controlBox.css({width:f.windowWidth}),K.spacerHeight=K.$controls.outerHeight(!0)+10):(K.$tools.css({width:f.windowWidth}),K.spacerHeight=K.$tools.outerHeight(!0),K.spacerHeight+=K.$thumbnails.outerHeight(!0)+10),K.viewportHeight-=K.spacerHeight,K.targetVideoWidth=K.viewportWidth,K.targetVideoHeight=K.targetVideoWidth*K.videoRatio,K.targetVideoHeight>K.viewportHeight&&(K.targetVideoHeight=K.viewportHeight,K.targetVideoWidth=K.targetVideoHeight/K.videoRatio),K.videoMarginTop=(K.viewportHeight-K.targetVideoHeight)/2,K.videoMarginLeft=(K.viewportWidth-K.targetVideoWidth)/2):(K.viewportHeight=K.windowHeight-K.margin,K.viewportWidth=K.windowWidth-K.margin,K.targetVideoWidth=K.videoWidth>K.viewportWidth?K.viewportWidth:K.videoWidth,K.targetVideoWidth<K.minWidth&&(K.targetVideoWidth=K.minWidth),K.targetVideoHeight=K.targetVideoWidth*K.videoRatio,K.contentHeight=K.targetVideoHeight,K.contentWidth=K.targetVideoWidth),K.isMobile||K.isTouch||K.$meta.css({width:K.contentWidth}),K.$videoWrapper.css({height:K.targetVideoHeight,width:K.targetVideoWidth,marginTop:K.videoMarginTop,marginLeft:K.videoMarginLeft}),K.isMobile||(K.metaHeight=K.$meta.outerHeight(!0),K.contentHeight+=K.metaHeight),K.thumbnails&&(K.thumbnailHeight=K.$thumbnails.outerHeight(!0),K.contentHeight+=K.thumbnailHeight)}function I(t){A.killEvent(t);var i=$(t.currentTarget);K.isAnimating||i.hasClass(E.control_disabled)||(K.isAnimating=!0,n(),K.gallery.index+=i.hasClass(E.control_next)?1:-1,K.gallery.index>K.gallery.total&&(K.gallery.index=K.infinite?0:K.gallery.total),K.gallery.index<0&&(K.gallery.index=K.infinite?K.gallery.total:0),g(),K.$lightbox.addClass(E.animating),K.$content.fsTransition({property:"opacity"},s),K.$lightbox.addClass(E.loading))}function V(t){A.killEvent(t);var i=$(t.currentTarget);K.isAnimating||i.hasClass(E.active)||(K.isAnimating=!0,n(),K.gallery.index=K.$thumbnailItems.index(i),g(),K.$lightbox.addClass(E.animating),K.$content.fsTransition({property:"opacity"},s),K.$lightbox.addClass(E.loading))}function g(){if(K.thumbnails){var t=K.$thumbnailItems.eq(K.gallery.index);K.$thumbnailItems.removeClass(E.active),t.addClass(E.active)}}function s(){if("element"==K.type?void 0!==K.$inlineTarget&&K.$inlineTarget.length&&d():(void 0!==K.$imageContainer&&(K.isViewer&&K.$imageContainer.fsViewer("destroy"),K.$imageContainer.remove()),void 0!==K.$videoWrapper&&K.$videoWrapper.remove()),K.$el=K.gallery.$items.eq(K.gallery.index),"element"==K.type){var t=K.$el[0].href,i=K.$el&&K.$el[0].hash&&K.$el[0].hash||"";"http"===t.substr(0,4)&&!i?k(t):j(i)}else{K.$caption.html(K.formatter.call(K.$el,K)),K.$position.find(q.position_current).html(K.gallery.index+1),L(t=K.$el[0].href)?(K.type="video",_(t)):(K.type="image",C(t))}T()}function T(){K.$controls.removeClass(E.control_disabled),K.infinite||(0===K.gallery.index&&K.$controls.filter(q.control_previous).addClass(E.control_disabled),K.gallery.index===K.gallery.total&&K.$controls.filter(q.control_next).addClass(E.control_disabled))}function M(t){!K.gallery.active||37!==t.keyCode&&39!==t.keyCode?27===t.keyCode&&K.$close.trigger(R.click):(A.killEvent(t),K.$controls.filter(37===t.keyCode?q.control_previous:q.control_next).trigger(R.click))}function j(t){K.$inlineTarget=$(t),K.$inlineContents=K.$inlineTarget.children().detach(),z(K.$inlineContents)}function d(){K.$inlineTarget.append(K.$inlineContents.detach())}function k(t){t+=-1<t.indexOf("?")?"&"+K.requestKey+"=true":"?"+K.requestKey+"=true",z($('<iframe class="'+E.iframe+'" src="'+t+'"></iframe>'))}function z(t){K.$content.append(t),h(t),o()}function h(t){K.windowHeight=f.windowHeight-K.mobilePaddingVertical-K.paddingVertical,K.windowWidth=f.windowWidth-K.mobilePaddingHorizontal-K.paddingHorizontal,K.objectHeight=t.outerHeight(!0),K.objectWidth=t.outerWidth(!0),K.targetHeight=K.targetHeight||(K.$el?K.$el.data(P+"-height"):null),K.targetWidth=K.targetWidth||(K.$el?K.$el.data(P+"-width"):null),K.maxHeight=K.windowHeight<0?K.minHeight:K.windowHeight,K.isIframe=t.is("iframe"),K.objectMarginTop=0,K.objectMarginLeft=0,K.isMobile||(K.windowHeight-=K.margin,K.windowWidth-=K.margin),K.contentHeight=K.targetHeight?K.targetHeight:K.isIframe||K.isMobile?K.windowHeight:K.objectHeight,K.contentWidth=K.targetWidth?K.targetWidth:K.isIframe||K.isMobile?K.windowWidth:K.objectWidth,(K.isIframe||K.isObject)&&K.isMobile?(K.contentHeight=K.windowHeight,K.contentWidth=K.windowWidth):K.isObject&&(K.contentHeight=K.contentHeight>K.windowHeight?K.windowHeight:K.contentHeight,K.contentWidth=K.contentWidth>K.windowWidth?K.windowWidth:K.contentWidth),K.isMobile||(K.contentHeight>K.maxHeight&&(K.contentHeight=K.maxHeight),K.contentWidth>K.maxWidth&&(K.contentWidth=K.maxWidth))}function c(){var t=$('<div class="'+E.error+'"><p>Error Loading Resource</p></div>');K.type="element",K.$tools.remove(),K.$image.off(R.namespace),z(t),B.trigger(R.error)}function L(t){var i,e=K.videoFormatter;for(var n in e)if(e.hasOwnProperty(n)&&null!==(i=t.match(e[n].pattern)))return e[n].format.call(K,i);return!1}function O(t){var i=t.target;$.contains(K.$lightbox[0],i)||i===K.$lightbox[0]||i===K.$overlay[0]||(A.killEvent(t),K.$lightbox.focus())}var m=f.Plugin("lightbox",{widget:!0,defaults:{customClass:"",fileTypes:/\.(jpg|sjpg|jpeg|png|gif)/i,fixed:!1,formatter:function(){var t=this.attr("title"),i=!(void 0===t||!t)&&t.replace(/^\s+|\s+$/g,"");return i?'<p class="caption">'+i+"</p>":""},infinite:!1,labels:{close:"Close",count:"of",next:"Next",previous:"Previous",captionClosed:"View Caption",captionOpen:"Close Caption",thumbnailsClosed:"View Thumbnails",thumbnailsOpen:"Close Thumbnails",lightbox:"Lightbox {guid}"},margin:50,maxHeight:1e4,maxWidth:1e4,minHeight:100,minWidth:100,mobile:null,overlay:!1,retina:!1,requestKey:"fs-lightbox",theme:"fs-light",thumbnails:!1,top:0,videoFormatter:{youtube:{pattern:/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,format:function(t){return"//www.youtube.com/embed/"+t[1]}},vimeo:{pattern:/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,format:function(t){return"//player.vimeo.com/video/"+t[3]}}},videoRatio:.5625,videoWidth:800,viewer:!0},classes:["loading","animating","fixed","mobile","touch","inline","iframed","open","ready","overlay","close","loading_icon","container","content","image","image_container","video","video_wrapper","tools","meta","meta_content","controls","control","control_previous","control_next","control_disabled","position","position_current","position_total","toggle","caption_toggle","caption","caption_open","thumbnailed","thumbnails_open","thumbnail_toggle","thumbnails","thumbnail_container","thumbnail_item","active","has_controls","has_caption","iframe","error","active","lock"],events:{open:"open",close:"close"},methods:{_construct:function(t){this.on(R.click,t,e);var i=this.data(P+"-gallery");!H&&v&&i===v&&(H=!0,this.trigger(R.click))},_destruct:function(t){w(),this.off(R.namespace)},_resize:function(){K&&t()},resize:t},utilities:{_initialize:function(t,i){t instanceof $&&e.apply(u,[{data:$.extend(!0,{},{$object:t},p,i||{})}])},close:w}}),P=m.namespace,p=m.defaults,q=m.classes,E=q.raw,R=m.events,A=m.functions,u=f.window,B=f.$window,F=null,b=null,v=!1,H=!1,K=null;f.Ready(function(){F=f.$body,b=$("html, body"),v=f.window.location.hash.replace("#","")})});
/*! formstone v1.4.22 [mediaquery.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(a,e){"use strict";function o(){!function(){for(var e in r={unit:s.unit},u)if(u.hasOwnProperty(e))for(var t in l[e])if(l[e].hasOwnProperty(t)){var n="Infinity"===t?1/0:parseInt(t,10),i=-1<e.indexOf("max");l[e][t].matches&&(i?(!r[e]||n<r[e])&&(r[e]=n):(!r[e]||n>r[e])&&(r[e]=n))}}(),n.trigger(c.mqChange,[r])}function h(e){var t=m(e.media),n=d[t],i=e.matches,r=i?c.enter:c.leave;if(n&&(n.active||!n.active&&i)){for(var a in n[r])n[r].hasOwnProperty(a)&&n[r][a].apply(n.mq);n.active=!0}}function m(e){return e.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").replace(/^\s+|\s+$/g,"")}var t=e.Plugin("mediaquery",{utilities:{_initialize:function(e){for(var t in e=e||{},u)u.hasOwnProperty(t)&&(s[t]=e[t]?a.merge(e[t],s[t]):s[t]);for(var n in(s=a.extend(s,e)).minWidth.sort(v.sortDesc),s.maxWidth.sort(v.sortAsc),s.minHeight.sort(v.sortDesc),s.maxHeight.sort(v.sortAsc),u)if(u.hasOwnProperty(n))for(var i in l[n]={},s[n])if(s[n].hasOwnProperty(i)){var r=window.matchMedia("("+u[n]+": "+(s[n][i]===1/0?1e5:s[n][i])+s.unit+")");r.addListener(o),l[n][s[n][i]]=r}o()},state:function(){return r},bind:function(e,t,n){var i=f.matchMedia(t),r=m(i.media);for(var a in d[r]||(d[r]={mq:i,active:!0,enter:{},leave:{}},d[r].mq.addListener(h)),n)n.hasOwnProperty(a)&&d[r].hasOwnProperty(a)&&(d[r][a][e]=n[a]);var o=d[r],s=i.matches;s&&o[c.enter].hasOwnProperty(e)?(o[c.enter][e].apply(i),o.active=!0):!s&&o[c.leave].hasOwnProperty(e)&&(o[c.leave][e].apply(i),o.active=!1)},unbind:function(e,t){if(e)if(t){var n=m(t);d[n]&&(d[n].enter[e]&&delete d[n].enter[e],d[n].leave[e]&&delete d[n].leave[e])}else for(var i in d)d.hasOwnProperty(i)&&(d[i].enter[e]&&delete d[i].enter[e],d[i].leave[e]&&delete d[i].leave[e])}},events:{mqChange:"mqchange"}}),s={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},c=a.extend(t.events,{enter:"enter",leave:"leave"}),n=e.$window,f=n[0],v=t.functions,r=null,d=[],l={},u={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}});
/*! formstone v1.4.22 [pagination.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(a,e){"use strict";function t(e){v.killEvent(e);var s=e.data,i=s.index+(a(e.currentTarget).hasClass(c.control_previous)?-1:1);0<=i&&s.$items.eq(i).trigger(p.raw.click)}function l(e){v.killEvent(e);var s=e.data,i=a(e.currentTarget),t=parseInt(i.val(),10);s.$items.eq(t).trigger(p.raw.click)}function n(e){var s=e.data,i=a(e.currentTarget),t=s.$items.index(i);s.ajax?v.killEvent(e):i[0].click(),o(s,t)}function o(e,s){if(s<0&&(s=0),s>e.total&&(s=e.total),s!==e.index){e.index=s;var i=e.index-e.visible,t=e.index+(e.visible+1);i<0&&(i=0),t>e.total&&(t=e.total),e.$items.removeClass(c.visible).removeClass(c.hidden).filter(d.active).removeClass(c.active).end().eq(e.index).addClass(c.active).end().slice(i,t).addClass(c.visible),e.$items.not(d.visible).addClass(c.hidden),e.$position.find(d.current).text(e.index+1).end().find(d.total).text(e.total+1),e.$select.val(e.index),e.$controls.removeClass(c.visible),0<s&&e.$controls.filter(d.control_previous).addClass(c.visible),s<e.total&&e.$controls.filter(d.control_next).addClass(c.visible),e.$ellipsis.removeClass(c.visible),s>e.visible+1&&e.$ellipsis.eq(0).addClass(c.visible),s<e.total-e.visible-1&&e.$ellipsis.eq(1).addClass(c.visible),e.$el.trigger(p.update,[e.index])}}var r=e.Plugin("pagination",{widget:!0,defaults:{ajax:!1,customClass:"",labels:{count:"of",next:"Next",previous:"Previous",select:"Select Page",pagination:"Pagination {guid}"},maxWidth:"740px",theme:"fs-light",visible:2},classes:["pages","page","active","first","last","ellipsis","visible","hidden","control","control_previous","control_next","position","select","mobile","current","total"],events:{update:"update"},methods:{_construct:function(e){e.mq="(max-width:"+(e.maxWidth===1/0?"100000px":e.maxWidth)+")";var s="";s+='<button type="button" class="'+[c.control,c.control_previous].join(" ")+'">'+e.labels.previous+"</button>",s+='<button type="button" class="'+[c.control,c.control_next].join(" ")+'">'+e.labels.next+"</button>",s+='<div class="'+c.position+'" aria-hidden="true">',s+='<span class="'+c.current+'">0</span>',s+=" "+e.labels.count+" ",s+='<span class="'+c.total+'">0</span>',s+='<select class="'+c.select+'" title="'+e.labels.select+'" tabindex="-1" aria-hidden="true"></select>',s+="</div>",e.thisClasses=[c.base,e.theme,e.customClass],e.labels.pagination=e.labels.pagination.replace("{guid}",e.numGuid),this.addClass(e.thisClasses.join(" ")).wrapInner('<div class="'+c.pages+'" aria-label="'+e.labels.pagination+'"></div>').prepend(s),e.$controls=this.find(d.control),e.$pages=this.find(d.pages),e.$items=e.$pages.children().addClass(c.page),e.$position=this.find(d.position),e.$select=this.find(d.select),e.index=-1,e.total=e.$items.length-1;var i=e.$items.index(e.$items.filter("[data-"+r.namespace+"-active]"));i<0&&(i=e.$items.index(e.$items.filter(d.active))),e.$items.eq(0).addClass(c.first).after('<span class="'+c.ellipsis+'">&hellip;</span>').end().eq(e.total).addClass(c.last).before('<span class="'+c.ellipsis+'">&hellip;</span>'),e.$ellipsis=e.$pages.find(d.ellipsis),function(e){for(var s="",i=0;i<=e.total;i++)s+='<option value="'+i+'"',i===e.index&&(s+='selected="selected"'),s+=">Page "+(i+1)+"</option>";e.$select.html(s)}(e),this.on(p.click,d.page,e,n).on(p.click,d.control,e,t).on(p.change,d.select,e,l),a.fsMediaquery("bind",e.rawGuid,e.mq,{enter:function(){e.$el.addClass(c.mobile)},leave:function(){e.$el.removeClass(c.mobile)}}),o(e,i)},_destruct:function(e){a.fsMediaquery("unbind",e.rawGuid),e.$controls.remove(),e.$ellipsis.remove(),e.$select.remove(),e.$position.remove(),e.$items.removeClass([c.page,c.active,c.visible,c.first,c.last].join(" ")).unwrap(),this.removeClass(e.thisClasses.join(" ")).off(p.namespace)}}}),d=r.classes,c=d.raw,p=r.events,v=r.functions});
/*! formstone v1.4.22 [navigation.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./swap"],a):a(jQuery,Formstone)}(function(d,a){"use strict";function t(a){a.$handle.fsSwap("deactivate")}function o(a){a.data.$handle.addClass(v.focus)}function i(a){a.data.$handle.removeClass(v.focus)}function s(a){var e=a.data;13!==a.keyCode&&32!==a.keyCode||(g.killEvent(a),e.$handle.trigger(m.raw.click))}function r(a){if(!a.originalEvent){var e=a.data;e.open||(e.$el.trigger(m.open).attr("aria-hidden",!1),e.$content.addClass(e.contentClassesOpen).one(m.click,function(){t(e)}),e.$handle.attr("aria-expanded",!0),e.label&&e.$handle.html(e.labels.open),function(a){a.isToggle||$.addClass(v.lock)}(e),e.open=!0,e.$nav.focus())}}function c(a){if(!a.originalEvent){var e=a.data;e.open&&(e.$el.trigger(m.close).attr("aria-hidden",!0),e.$content.removeClass(e.contentClassesOpen).off(m.namespace),e.$handle.attr("aria-expanded",!1),e.label&&e.$handle.html(e.labels.closed),n(e),e.open=!1,e.$el.focus())}}function h(a){var e=a.data;e.$el.attr("aria-hidden",!0),e.$handle.attr("aria-controls",e.ariaId).attr("aria-expanded",!1),e.$content.addClass(v.enabled),setTimeout(function(){e.$animate.addClass(v.animated)},0),e.label&&e.$handle.html(e.labels.closed)}function u(a){var e=a.data;e.$el.removeAttr("aria-hidden"),e.$handle.removeAttr("aria-controls").removeAttr("aria-expanded"),e.$content.removeClass(v.enabled,v.animated),e.$animate.removeClass(v.animated),l(e),n(e)}function n(a){a.isToggle||$.removeClass(v.lock)}function l(a){if(a.label)if(1<a.$handle.length)for(var e=0,t=a.$handle.length;e<t;e++)a.$handle.eq(e).html(a.originalLabel[e]);else a.$handle.html(a.originalLabel)}var e=a.Plugin("navigation",{widget:!0,defaults:{customClass:"",gravity:"left",label:!0,labels:{closed:"Menu",open:"Close"},maxWidth:"980px",theme:"fs-light",type:"toggle"},classes:["handle","nav","content","animated","enabled","focus","open","toggle","push","reveal","overlay","left","right","lock"],events:{open:"open",close:"close"},methods:{_construct:function(a){a.handleGuid=v.handle+a.guid,a.isToggle="toggle"===a.type,a.open=!1,a.isToggle&&(a.gravity="");var e=v.base,t=[e,a.type].join("-"),n=a.gravity?[t,a.gravity].join("-"):"",l=[a.rawGuid,a.theme,a.customClass].join(" ");a.handle=this.data(p+"-handle"),a.content=this.data(p+"-content"),a.handleClasses=[v.handle,v.handle.replace(e,t),n?v.handle.replace(e,n):"",a.handleGuid,l].join(" "),a.thisClasses=[v.nav.replace(e,t),n?v.nav.replace(e,n):"",l],a.contentClasses=[v.content.replace(e,t),l].join(" "),a.contentClassesOpen=[n?v.content.replace(e,n):"",v.open].join(" "),a.$nav=this.addClass(a.thisClasses.join(" ")).attr("role","navigation"),a.$handle=d(a.handle).addClass(a.handleClasses),a.$content=d(a.content).addClass(a.contentClasses),a.$animate=d().add(a.$nav).add(a.$content),function(a){if(a.label)if(1<a.$handle.length){a.originalLabel=[];for(var e=0,t=a.$handle.length;e<t;e++)a.originalLabel[e]=a.$handle.eq(e).html()}else a.originalLabel=a.$handle.html()}(a),a.navTabIndex=a.$nav.attr("tabindex"),a.$nav.attr("tabindex",-1),a.id=this.attr("id"),a.id?a.ariaId=a.id:(a.ariaId=a.rawGuid,this.attr("id",a.ariaId)),a.$handle.attr("data-swap-target",a.dotGuid).attr("data-swap-linked",a.handleGuid).attr("data-swap-group",v.base).attr("tabindex",0).on("activate.swap"+a.dotGuid,a,r).on("deactivate.swap"+a.dotGuid,a,c).on("enable.swap"+a.dotGuid,a,h).on("disable.swap"+a.dotGuid,a,u).on(m.focus+a.dotGuid,a,o).on(m.blur+a.dotGuid,a,i).fsSwap({maxWidth:a.maxWidth,classes:{target:a.dotGuid,enabled:f.enabled,active:f.open,raw:{target:a.rawGuid,enabled:v.enabled,active:v.open}}}),a.$handle.is("a, button")||a.$handle.on(m.keyPress+a.dotGuid,a,s)},_destruct:function(a){a.$content.removeClass([a.contentClasses,a.contentClassesOpen].join(" ")).off(m.namespace),a.$handle.removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("data-swap-target").removeData("swap-target").removeAttr("data-swap-linked").removeAttr("data-swap-group").removeData("swap-linked").removeData("tabindex").removeClass(a.handleClasses).off(a.dotGuid).html(a.originalLabel).fsSwap("destroy"),a.$nav.attr("tabindex",a.navTabIndex),l(a),n(a),this.removeAttr("aria-hidden").removeClass(a.thisClasses.join(" ")).off(m.namespace),this.attr("id")===a.rawGuid&&this.removeAttr("id")},open:function(a){a.$handle.fsSwap("activate")},close:t,enable:function(a){a.$handle.fsSwap("enable")},disable:function(a){a.$handle.fsSwap("disable")}}}),p=e.namespace,f=e.classes,v=f.raw,m=e.events,g=e.functions,$=null;a.Ready(function(){$=d("html, body")})});
/*! formstone v1.4.22 [number.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core"],t):t(jQuery,Formstone)}(function(n,t){"use strict";function i(t){t.data.$container.addClass(m.focus)}function s(t){l(t.data,0),t.data.$container.removeClass(m.focus)}function r(t){var e=t.data;38!==t.keyCode&&40!==t.keyCode||(t.preventDefault(),l(e,38===t.keyCode?e.step:-e.step))}function o(t){p.killEvent(t),d(t);var e=t.data;if(!e.disabled&&t.which<=1){var a=n(t.target).hasClass(m.up)?e.step:-e.step;e.timer=p.startTimer(e.timer,300,function(){e.timer=p.startTimer(e.timer,100,function(){l(e,a)},!0)}),l(e,a),b.on([f.touchEnd,f.mouseUp].join(" "),e,d)}}function d(t){p.killEvent(t);var e=t.data;p.clearTimer(e.timer,!0),b.off(f.namespace)}function l(t,e){var a=parseFloat(t.$el.val()),n=e;0!=e&&(void 0===a||isNaN(a)?n=!1!==t.min?t.min:0:!1!==t.min&&a<t.min?n=t.min:n+=a,""!==n&&(!1!==t.min&&n<t.min&&(n=t.min),!1!==t.max&&n>t.max&&(n=t.max)),n===a&&0!=e||(""!==n&&(n=function(t,e){var a=Math.pow(10,e);return Math.round(t*a)/a}(n,t.digits)),t.$el.val(n).trigger(f.raw.change,[!0])))}function u(t){var e=String(t);return-1<e.indexOf(".")?e.length-e.indexOf(".")-1:0}var e=t.Plugin("number",{widget:!0,defaults:{customClass:"",labels:{up:"Up",down:"Down"},theme:"fs-light"},classes:["arrow","up","down","disabled","focus"],methods:{_construct:function(t){var e=parseFloat(this.attr("min")),a=parseFloat(this.attr("max"));t.min=!(!e&&0!==e)&&e,t.max=!(!a&&0!==a)&&a,t.step=parseFloat(this.attr("step"))||1,t.timer=null,t.digits=u(t.step),t.disabled=this.is(":disabled")||this.is("[readonly]");var n="";n+='<button type="button" class="'+[m.arrow,m.up].join(" ")+'" aria-hidden="true" tabindex="-1">'+t.labels.up+"</button>",n+='<button type="button" class="'+[m.arrow,m.down].join(" ")+'" aria-hidden="true" tabindex="-1">'+t.labels.down+"</button>",this.wrap('<div class="'+[m.base,t.theme,t.customClass,t.disabled?m.disabled:""].join(" ")+'"></div>').after(n),t.$container=this.parent(c.base),t.$arrows=t.$container.find(c.arrow),this.on(f.focus,t,i).on(f.blur,t,s).on(f.keyPress,t,r),t.$container.on([f.touchStart,f.mouseDown].join(" "),c.arrow,t,o),l(t,0)},_destruct:function(t){t.$arrows.remove(),this.unwrap().off(f.namespace)},enable:function(t){t.disabled&&(this.prop("disabled",!1),t.$container.removeClass(m.disabled),t.disabled=!1)},disable:function(t){t.disabled||(this.prop("disabled",!0),t.$container.addClass(m.disabled),t.disabled=!0)},update:function(t){var e=parseFloat(t.$el.attr("min")),a=parseFloat(t.$el.attr("max"));t.min=!(!e&&0!==e)&&e,t.max=!(!a&&0!==a)&&a,t.step=parseFloat(t.$el.attr("step"))||1,t.timer=null,t.digits=u(t.step),t.disabled=t.$el.is(":disabled")||t.$el.is("[readonly]"),l(t,0)}}}),c=e.classes,m=c.raw,f=e.events,p=e.functions,b=null;t.Ready(function(){b=t.$body})});
/*! formstone v1.4.22 [range.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./touch"],a):a(jQuery,Formstone)}(function(a,e){"use strict";function n(){b=a(u.element)}function s(a){a.stepCount=(a.max-a.min)/a.step,a.offset=a.$track.offset(),a.vertical?(a.trackHeight=a.$track.outerHeight(),a.handleHeight=a.$handle.outerHeight(),a.increment=a.trackHeight/a.stepCount):(a.trackWidth=a.$track.outerWidth(),a.handleWidth=a.$handle.outerWidth(),a.increment=a.trackWidth/a.stepCount);var e=(a.$el.val()-a.min)/(a.max-a.min);i(a,e,!0)}function r(a){l.killEvent(a);var e=a.data;e.disabled||(s(e),o(a),e.$container.addClass(p.focus))}function o(a){l.killEvent();var e=a.data;e.disabled||i(e,e.vertical?1-(a.pageY-e.offset.top)/e.trackHeight:(a.pageX-e.offset.left)/e.trackWidth)}function c(a){l.killEvent(a);var e=a.data;e.disabled||e.$container.removeClass(p.focus)}function d(a){a.data.$container.addClass(p.focus)}function m(a){a.data.$container.removeClass(p.focus)}function i(a,e,t){1<a.increment&&(e=a.vertical?Math.round(e*a.stepCount)*a.increment/a.trackHeight:Math.round(e*a.stepCount)*a.increment/a.trackWidth),e<0&&(e=0),1<e&&(e=1);var l=(a.min-a.max)*e;l=-parseFloat(l.toFixed(a.digits)),a.$fill.css(a.vertical?"height":"width",100*e+"%"),a.$handle.css(a.vertical?"bottom":"left",100*e+"%"),(l+=a.min)!==a.value&&!1!==l&&!0!==t&&(a.$el.val(l).trigger(v.raw.change,[!0]),a.value=l)}function f(a,e){var t=a.data;if(!e&&!t.disabled){var l=(t.$el.val()-t.min)/(t.max-t.min);i(t,l)}}function h(a){var e=a.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}var t=e.Plugin("range",{widget:!0,defaults:{customClass:"",fill:!1,formatter:!1,labels:{max:!1,min:!1},theme:"fs-light",vertical:!1},classes:["track","handle","fill","marker","labels","label","label_min","label_max","vertical","focus","disabled"],methods:{_construct:function(a){a.formatter||(a.formatter=h),a.min=parseFloat(this.attr("min"))||0,a.max=parseFloat(this.attr("max"))||100,a.step=parseFloat(this.attr("step"))||1,a.digits=a.step.toString().length-a.step.toString().indexOf("."),a.value=parseFloat(this.val())||a.min+(a.max-a.min)/2;var e="";a.vertical="vertical"===this.attr("orient")||a.vertical,a.disabled=this.is(":disabled")||this.is("[readonly]"),e+='<div class="'+p.track+'" aria-hidden="true">',a.fill&&(e+='<span class="'+p.fill+'"></span>'),e+='<div class="'+p.handle+'" role="slider">',e+='<span class="'+p.marker+'"></span>',e+="</div>",e+="</div>";var t=[p.base,a.theme,a.customClass,a.vertical?p.vertical:"",a.labels?p.labels:"",a.disabled?p.disabled:""];if(this.addClass(p.element).wrap('<div class="'+t.join(" ")+'"></div>').after(e),a.$container=this.parents(u.base),a.$track=a.$container.find(u.track),a.$fill=a.$container.find(u.fill),a.$handle=a.$container.find(u.handle),a.$output=a.$container.find(u.output),a.labels){var l='<span class="'+[p.label,p.label_max].join(" ")+'">'+a.formatter.call(this,a.labels.max?a.labels.max:a.max)+"</span>",i='<span class="'+[p.label,p.label_min].join(" ")+'">'+a.formatter.call(this,a.labels.max?a.labels.min:a.min)+"</span>";a.$container.prepend(a.vertical?l:i).append(a.vertical?i:l)}a.$labels=a.$container.find(u.label),this.on(v.focus,a,d).on(v.blur,a,m).on(v.change,a,f),a.$container.fsTouch({pan:!0,axis:a.vertical?"y":"x"}).on(v.panStart,a,r).on(v.pan,a,o).on(v.panEnd,a,c),n(),s.call(this,a)},_destruct:function(a){a.$container.off(v.namespace).fsTouch("destroy"),a.$track.remove(),a.$labels.remove(),this.unwrap().removeClass(p.element).off(v.namespace),n()},_resize:function(a){l.iterate.call(b,s)},enable:function(a){a.disabled&&(this.prop("disabled",!1),a.$container.removeClass(p.disabled),a.disabled=!1)},disable:function(a){a.disabled||(this.prop("disabled",!0),a.$container.addClass(p.disabled),a.disabled=!0)},resize:s,update:function(a){a.min=parseFloat(a.$el.attr("min"))||0,a.max=parseFloat(a.$el.attr("max"))||100,a.step=parseFloat(a.$el.attr("step"))||1,a.digits=a.step.toString().length-a.step.toString().indexOf("."),a.value=parseFloat(this.val())||a.min+(a.max-a.min)/2,a.labels&&(a.$labels.filter(u.label_max).html(a.formatter.call(this,a.labels.max?a.labels.max:a.max)),a.$labels.filter(u.label_min).html(a.formatter.call(this,a.labels.max?a.labels.min:a.min))),s.call(this,a)}}}),u=t.classes,p=u.raw,v=t.events,l=t.functions,b=[]});
/*! formstone v1.4.22 [scrollbar.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./touch"],t):t(jQuery,Formstone)}(function(r,t){"use strict";function e(t){t.$el.addClass(g.isSetup);var n={},e={},o={},a=0,i=!0;t.horizontal?(t.barHeight=t.$content[0].offsetHeight-t.$content[0].clientHeight,t.frameWidth=t.$content.outerWidth(),t.trackWidth=t.frameWidth-2*t.trackMargin,t.scrollWidth=t.$content[0].scrollWidth,t.ratio=t.trackWidth/t.scrollWidth,t.trackRatio=t.trackWidth/t.scrollWidth,t.handleWidth=0<t.handleSize?t.handleSize:t.trackWidth*t.trackRatio,t.scrollRatio=(t.scrollWidth-t.frameWidth)/(t.trackWidth-t.handleWidth),t.handleBounds={left:0,right:t.trackWidth-t.handleWidth},t.$content.css({paddingBottom:t.barHeight+t.paddingBottom}),a=t.$content.scrollLeft()*t.ratio,i=t.scrollWidth<=t.frameWidth,n={width:t.frameWidth},e={width:t.trackWidth,marginLeft:t.trackMargin,marginRight:t.trackMargin},o={width:t.handleWidth}):(t.barWidth=t.$content[0].offsetWidth-t.$content[0].clientWidth,t.frameHeight=t.$content.outerHeight(),t.trackHeight=t.frameHeight-2*t.trackMargin,t.scrollHeight=t.$content[0].scrollHeight,t.ratio=t.trackHeight/t.scrollHeight,t.trackRatio=t.trackHeight/t.scrollHeight,t.handleHeight=0<t.handleSize?t.handleSize:t.trackHeight*t.trackRatio,t.scrollRatio=(t.scrollHeight-t.frameHeight)/(t.trackHeight-t.handleHeight),t.handleBounds={top:0,bottom:t.trackHeight-t.handleHeight},a=t.$content.scrollTop()*t.ratio,i=t.scrollHeight<=t.frameHeight,n={height:t.frameHeight},e={height:t.trackHeight,marginBottom:t.trackMargin,marginTop:t.trackMargin},o={height:t.handleHeight});i?t.$el.removeClass(g.active):t.$el.addClass(g.active),t.$bar.css(n),t.$track.css(e),t.$handle.css(o),t.panning=!1,s(t,a),l({data:t}),t.$el.removeClass(g.setup)}function l(t){p.killEvent(t);var n=t.data,e={};if(!n.panning){if(n.horizontal){var o=n.$content.scrollLeft();o<0&&(o=0),n.handleLeft=o/n.scrollRatio,n.handleLeft>n.handleBounds.right&&(n.handleLeft=n.handleBounds.right),e={left:n.handleLeft}}else{var a=n.$content.scrollTop();a<0&&(a=0),n.handleTop=a/n.scrollRatio,n.handleTop>n.handleBounds.bottom&&(n.handleTop=n.handleBounds.bottom),e={top:n.handleTop}}n.$handle.css(e)}}function o(t){a(t,!0)}function a(t,n){var e,o,a=t.data;if(a.horizontal){var i=a.$content[0].scrollLeft,l=a.$content[0].scrollWidth,r=a.$content.outerWidth();if(e=t.originalEvent.deltaX*(!0===n?-1:1),!0===n)return a.$content.scrollLeft(i-e),d(t);if("left"===(o=e<0?"right":"left")&&l-r-i<e)return a.$content.scrollLeft(l),d(t);if("right"===o&&i<-e)return a.$content.scrollLeft(0),d(t)}else{var c=a.$content[0].scrollTop,h=a.$content[0].scrollHeight,s=a.$content.outerHeight();if(e=t.originalEvent.deltaY*(!0===n?-1:1),!0===n)return a.$content.scrollTop(c-e),d(t);if("down"===(o=e<0?"up":"down")&&h-s-c<e)return a.$content.scrollTop(h),d(t);if("up"===o&&c<-e)return a.$content.scrollTop(0),d(t)}}function d(t){return p.killEvent(t),t.returnValue=!1}function i(t){var n,e=t.data,o=e.$track.offset();e.panning=!0,n=e.horizontal?e.handleLeft=t.pageX-o.left-e.handleWidth/2:e.handleTop=t.pageY-o.top-e.handleHeight/2,s(e,n)}function c(t){var n=t.data;s(n,n.horizontal?n.handleLeft+t.deltaX:n.handleTop+t.deltaY)}function h(t){var n=t.data;n.panning=!1,n.horizontal?n.handleLeft+=t.deltaX:n.handleTop+=t.deltaY}function s(t,n){var e={};t.horizontal?(n<t.handleBounds.left&&(n=t.handleBounds.left),n>t.handleBounds.right&&(n=t.handleBounds.right),e={left:n},t.$content.scrollLeft(Math.round(n*t.scrollRatio))):(n<t.handleBounds.top&&(n=t.handleBounds.top),n>t.handleBounds.bottom&&(n=t.handleBounds.bottom),e={top:n},t.$content.scrollTop(Math.round(n*t.scrollRatio))),t.$handle.css(e)}var n=t.Plugin("scrollbar",{widget:!0,defaults:{customClass:"",duration:0,handleSize:0,horizontal:!1,mouseWheel:!0,theme:"fs-light",trackMargin:0},classes:["content","bar","track","handle","horizontal","setup","active"],methods:{_construct:function(t){var n="";n+='<div class="'+g.bar+'">',n+='<div class="'+g.track+'">',n+='<button type="button" class="'+g.handle+'" aria-hidden="true" tabindex="-1"></button>',n+="</div></div>",t.paddingRight=parseInt(this.css("padding-right"),10),t.paddingBottom=parseInt(this.css("padding-bottom"),10),t.thisClasses=[g.base,t.theme,t.customClass,t.horizontal?g.horizontal:""],this.addClass(t.thisClasses.join(" ")).wrapInner('<div class="'+g.content+'" tabindex="0"></div>').prepend(n),t.$content=this.find(f.content),t.$bar=this.find(f.bar),t.$track=this.find(f.track),t.$handle=this.find(f.handle),t.trackMargin=parseInt(t.trackMargin,10),t.$content.on(u.scroll,t,l),t.mouseWheel&&t.$content.on("wheel"+u.namespace,t,a),t.$track.fsTouch({axis:t.horizontal?"x":"y",pan:!0}).on(u.panStart,t,i).on(u.pan,t,c).on(u.panEnd,t,h).on(u.click,p.killEvent).on("wheel"+u.namespace,t,o),e(t),$=r(f.base)},_destruct:function(t){t.$track.fsTouch("destroy"),t.$bar.remove(),t.$content.off(u.namespace).contents().unwrap(),this.removeClass(t.thisClasses.join(" ")).off(u.namespace),this.attr("id")===t.rawGuid&&this.removeAttr("id")},_resize:function(t){p.iterate.call($,e)},scroll:function(t,n,e){var o=e||t.duration,a={};if("number"!=typeof n){var i=r(n);if(0<i.length){var l=i.position();n=t.horizontal?l.left+t.$content.scrollLeft():l.top+t.$content.scrollTop()}else n="top"===n?0:"bottom"===n?t.horizontal?t.$content[0].scrollWidth:t.$content[0].scrollHeight:t.$content.scrollTop()}a[t.horizontal?"scrollLeft":"scrollTop"]=n,t.$content.stop().animate(a,o)},resize:e}}),f=n.classes,g=f.raw,u=n.events,p=n.functions,$=(t.$window,[]);t.Ready(function(){t.$body})});
/*! formstone v1.4.22 [sticky.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(n,e){"use strict";function t(){f.iterate.call(p,o)}function s(){p=n(l.base),t()}function a(e){e.enabled=!0,e.$el.addClass(m.enabled),o(e)}function i(e){e.enabled=!1,e.$el.css({height:"",width:"",top:"",bottom:"",marginBottom:""}).removeClass(m.enabled),e.$stickys.removeClass([m.passed,m.stuck].join(" "))}function o(e){if(e.enabled){if(c(e),e.$container.length){var t=e.$container.offset();e.min=t.top-e.margin,e.max=e.min+e.$container.outerHeight(!1)-e.height}else{var n=(e.stuck?e.$clone:e.$el).offset();e.min=n.top-e.margin,e.max=!1}d(e)}}function c(e){var t;t=e.stuck?e.$clone:e.$el,e.margin=parseInt(t.css("margin-top"),10),e.$container.length?e.containerMargin=parseInt(e.$container.css("margin-top"),10):e.containerMargin=0,e.height=t.outerHeight(),e.width=t.outerWidth()}function d(e){if(e.enabled){var t=h+e.offset;if(t>=e.min){e.stuck=!0,e.$stickys.addClass(m.stuck),e.stuck||(e.$el.trigger(u.stuck),c(e));var n=e.offset,s="";e.max&&t>e.max?(e.passed||e.$el.trigger(u.passed),e.passed=!0,e.$stickys.addClass(m.passed),n="",s=0):(e.passed=!1,e.$stickys.removeClass(m.passed)),e.$el.css({height:e.height,width:e.width,top:n,bottom:s,marginBottom:0})}else e.stuck=!1,e.$stickys.removeClass(m.stuck).removeClass(m.passed),e.stuck&&e.$el.trigger(u.unstuck),e.$el.css({height:"",width:"",top:"",bottom:"",marginBottom:""})}}var r=e.Plugin("sticky",{widget:!0,defaults:{maxWidth:1/0,minWidth:"0px",offset:0},classes:["enabled","sticky","stuck","clone","container","passed"],events:{passed:"passed",stuck:"stuck",unstuck:"unstuck"},methods:{_construct:function(e){e.enabled=!1,e.stuck=!1,e.passed=!0,e.$clone=e.$el.clone(),e.container=e.$el.data("sticky-container"),e.$container=n(e.container),e.$el.addClass(m.base),e.$clone.removeClass(m.element).addClass(m.clone),e.$container.addClass(m.container),e.$stickys=n().add(e.$el).add(e.$clone),e.$el.after(e.$clone);var t=n().add(e.$el.find("img")).add(e.$container.find("img"));t.length&&t.on(u.load,e,o),e.maxWidth=e.maxWidth===1/0?"100000px":e.maxWidth,e.mq="(min-width:"+e.minWidth+") and (max-width:"+e.maxWidth+")",n.fsMediaquery("bind",e.rawGuid,e.mq,{enter:function(){a.call(e.$el,e)},leave:function(){i.call(e.$el,e)}})},_postConstruct:function(e){s(),t()},_destruct:function(e){e.$clone.remove(),e.$container.removeClass(m.container),e.$el.css({height:"",width:"",top:"",bottom:"",marginBottom:""}).removeClass(m.base),s()},_resize:t,_raf:function(){(h=$.scrollTop())<0&&(h=0),h!==g&&(f.iterate.call(p,d),g=h)},disable:i,enable:a,reset:o,resize:o}}),l=(r.namespace,r.classes),m=l.raw,u=r.events,f=r.functions,$=(e.window,e.$window),h=0,g=0,p=[]});
/*! formstone v1.4.22 [swap.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(s,e){"use strict";function t(e,a){if(e.enabled&&!e.active){e.group&&!a&&s(e.group).not(e.$el).not(e.linked)[c.namespaceClean]("deactivate",!0);var t=e.group?s(e.group).index(e.$el):null;e.$swaps.addClass(e.classes.raw.active),a||e.linked&&s(e.linked).not(e.$el)[c.namespaceClean]("activate",!0),this.trigger(o.activate,[t]),e.active=!0}}function i(e,a){e.enabled&&e.active&&(e.$swaps.removeClass(e.classes.raw.active),a||e.linked&&s(e.linked).not(e.$el)[c.namespaceClean]("deactivate",!0),this.trigger(o.deactivate),e.active=!1)}function a(e,a){e.enabled||(e.enabled=!0,e.$swaps.addClass(e.classes.raw.enabled),a||s(e.linked).not(e.$el)[c.namespaceClean]("enable"),this.trigger(o.enable),e.onEnable?(e.active=!1,t.call(this,e)):(e.active=!0,i.call(this,e)))}function n(e,a){e.enabled&&(e.enabled=!1,e.$swaps.removeClass([e.classes.raw.enabled,e.classes.raw.active].join(" ")),a||s(e.linked).not(e.$el)[c.namespaceClean]("disable"),this.trigger(o.disable))}function l(e){u.killEvent(e);var a=e.data;a.active&&a.collapse?i.call(a.$el,a):t.call(a.$el,a)}var c=e.Plugin("swap",{widget:!0,defaults:{collapse:!0,maxWidth:1/0},classes:["target","enabled","active"],events:{activate:"activate",deactivate:"deactivate",enable:"enable",disable:"disable"},methods:{_construct:function(e){e.enabled=!1,e.active=!1,e.classes=s.extend(!0,{},r,e.classes),e.target=this.data(d+"-target"),e.$target=s(e.target).addClass(e.classes.raw.target),e.mq="(max-width:"+(e.maxWidth===1/0?"100000px":e.maxWidth)+")";var a=this.data(d+"-linked");e.linked=!!a&&"[data-"+d+'-linked="'+a+'"]';var t=this.data(d+"-group");e.group=!!t&&"[data-"+d+'-group="'+t+'"]',e.$swaps=s().add(this).add(e.$target),this.on(o.click+e.dotGuid,e,l)},_postConstruct:function(e){e.collapse||!e.group||s(e.group).filter("[data-"+d+"-active]").length||s(e.group).eq(0).attr("data-"+d+"-active","true"),e.onEnable=this.data(d+"-active")||!1,s.fsMediaquery("bind",e.rawGuid,e.mq,{enter:function(){a.call(e.$el,e,!0)},leave:function(){n.call(e.$el,e,!0)}})},_destruct:function(e){s.fsMediaquery("unbind",e.rawGuid),e.$swaps.removeClass([e.classes.raw.enabled,e.classes.raw.active].join(" ")).off(o.namespace)},activate:t,deactivate:i,enable:a,disable:n}}),d=c.namespace,r=c.classes,o=c.events,u=c.functions});
/*! formstone v1.4.22 [tabs.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./swap"],t):t(jQuery,Formstone)}(function(o,n){"use strict";function s(t){if(!t.originalEvent){var e=t.data;e.$el.attr("aria-selected",!0).trigger(i.update,[0]),e.$mobileTab.addClass(m.active),e.$content.attr("aria-hidden",!1).addClass(m.active)}}function r(t){if(!t.originalEvent){var e=t.data;e.$el.attr("aria-selected",!1),e.$mobileTab.removeClass(m.active),e.$content.attr("aria-hidden",!0).removeClass(m.active)}}function d(t){var e=t.data;e.$el.attr("aria-controls",e.ariaContentId),e.$mobileTab.addClass(m.enabled),e.$content.attr("aria-labelledby",e.ariaId).addClass(m.enabled)}function l(t){var e=t.data;e.$el.removeAttr("aria-controls").removeAttr("aria-selected"),e.$mobileTab.removeClass(m.enabled),e.$content.removeAttr("aria-labelledby").removeAttr("aria-hidden").removeClass(m.enabled)}function e(t){t.data.$el.fsSwap("activate")}var t=n.Plugin("tabs",{widget:!0,defaults:{customClass:"",maxWidth:1/0,mobileMaxWidth:"740px",theme:"fs-light"},classes:["tab","tab_mobile","mobile","content","enabled","active"],events:{update:"update"},methods:{_construct:function(t){t.mq="(max-width:"+(t.mobileMaxWidth===1/0?"100000px":t.mobileMaxWidth)+")",t.content=this.attr("href"),t.group=this.data(c+"-group"),t.elementClasses=[m.tab,t.rawGuid,t.theme,t.customClass],t.mobileTabClasses=[m.tab,m.tab_mobile,t.rawGuid,t.theme,t.customClass],t.contentClasses=[m.content,t.rawGuid,t.theme,t.customClass],t.$mobileTab=o('<button type="button" class="'+t.mobileTabClasses.join(" ")+'" aria-hidden="true">'+this.html()+"</button>"),t.$content=o(t.content).addClass(t.contentClasses.join(" ")),t.$content.before(t.$mobileTab).attr("role","tabpanel"),this.attr("role","tab"),t.id=this.attr("id"),t.id?t.ariaId=t.id:(t.ariaId=t.rawGuid,this.attr("id",t.ariaId)),t.contentId=t.$content.attr("id"),t.contentGuid=t.rawGuid+"_content",t.contentId?t.ariacontentId=t.contentId:(t.ariaContentId=t.contentGuid,t.$content.attr("id",t.ariaContentId));var e=n.window.location.hash,a=!1,i=!1;e.length&&(a=0<this.filter("[href$='"+e+"']").length,i=t.group&&0<o("[data-"+c+'-group="'+t.group+'"]').filter("[href$='"+e+"']").length),a?this.attr("data-swap-active","true"):i?this.removeAttr("data-swap-active").removeData("data-swap-active"):"true"===this.attr("data-tabs-active")&&this.attr("data-swap-active","true"),this.attr("data-swap-target",t.content).attr("data-swap-group",t.group).addClass(t.elementClasses.join(" ")).on("activate.swap"+t.dotGuid,t,s).on("deactivate.swap"+t.dotGuid,t,r).on("enable.swap"+t.dotGuid,t,d).on("disable.swap"+t.dotGuid,t,l)},_postConstruct:function(t){this.fsSwap({maxWidth:t.maxWidth,classes:{target:t.dotGuid,enabled:a.enabled,active:a.active,raw:{target:t.rawGuid,enabled:m.enabled,active:m.active}},collapse:!1}),t.$mobileTab.on("click"+t.dotGuid,t,e),o.fsMediaquery("bind",t.rawGuid,t.mq,{enter:function(){(function(t){t.$el.addClass(m.mobile),t.$mobileTab.addClass(m.mobile),t.$content.addClass(m.mobile)}).call(t.$el,t)},leave:function(){(function(t){t.$el.removeClass(m.mobile),t.$mobileTab.removeClass(m.mobile),t.$content.removeClass(m.mobile)}).call(t.$el,t)}})},_destruct:function(t){o.fsMediaquery("unbind",t.rawGuid),t.$mobileTab.off(i.namespace).remove(),t.elementClasses.push(m.mobile),t.contentClasses.push(m.mobile),t.$content.removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass(t.contentClasses.join(" ")),t.$content.attr("id")===t.contentGuid&&t.$content.removeAttr("id"),this.removeAttr("aria-controls").removeAttr("aria-selected").removeAttr("data-swap-active").removeData("data-swap-active").removeAttr("data-swap-target").removeData("data-swap-target").removeAttr("data-swap-group").removeData("data-swap-group").removeAttr("role").removeClass(t.elementClasses.join(" ")).off(i.namespace).fsSwap("destroy"),this.attr("id")===t.rawGuid&&this.removeAttr("id")},activate:function(t){this.fsSwap("activate")},enable:function(t){this.fsSwap("enable")},disable:function(t){this.fsSwap("disable")}}}),c=t.namespace,a=t.classes,m=a.raw,i=t.events;t.functions});
/*! formstone v1.4.22 [tooltip.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core"],t):t(jQuery,Formstone)}(function(v,$){"use strict";function e(t){w();var e=t.data;e.left=t.pageX,e.top=t.pageY,function(t){w();var e="";e+='<div class="',e+=[H.base,H[t.direction],t.theme,t.customClass].join(" "),e+='">',e+='<div class="'+H.content+'">',e+=t.formatter.call(t.$el,t),e+='<span class="'+H.caret+'"></span>',e+="</div>",M={$tooltip:v(e+="</div>"),$el:t.$el},$.$body.append(M.$tooltip);var o=M.$tooltip.find(C.content),i=M.$tooltip.find(C.caret),n=t.$el.offset(),r=t.$el.outerHeight(),l=t.$el.outerWidth(),c=0,a=0,s=0,f=0,d=!1,u=!1,p=i.outerHeight(!0),m=i.outerWidth(!0),g=o.outerHeight(!0),h=o.outerWidth(!0);"right"===t.direction||"left"===t.direction?(u=(g-p)/2,f=-g/2,"right"===t.direction?s=t.margin:"left"===t.direction&&(s=-(h+t.margin))):(d=(h-m)/2,s=-h/2,"bottom"===t.direction?f=t.margin:"top"===t.direction&&(f=-(g+t.margin)));o.css({top:f,left:s}),i.css({top:u,left:d}),t.follow?t.$el.on(W.mouseMove,t,y):(t.match?"right"===t.direction||"left"===t.direction?(a=t.top,"right"===t.direction?c=n.left+l:"left"===t.direction&&(c=n.left)):(c=t.left,"bottom"===t.direction?a=n.top+r:"top"===t.direction&&(a=n.top)):"right"===t.direction||"left"===t.direction?(a=n.top+r/2,"right"===t.direction?c=n.left+l:"left"===t.direction&&(c=n.left)):(c=n.left+l/2,"bottom"===t.direction?a=n.top+r:"top"===t.direction&&(a=n.top)),j(c,a));t.timer=L.startTimer(t.timer,t.delay,function(){M.$tooltip.addClass(H.visible)}),t.$el.one(W.mouseLeave,t,b)}(e)}function b(t){var e=t.data;L.clearTimer(e.timer),w()}function y(t){j(t.pageX,t.pageY)}function j(t,e){M&&M.$tooltip.css({left:t,top:e})}function w(){M&&(M.$el.off([W.mouseMove,W.mouseLeave].join(" ")),M.$tooltip.remove(),M=null)}var t=$.Plugin("tooltip",{widget:!0,defaults:{customClass:"",delay:0,direction:"top",follow:!1,formatter:function(t){return this.data("title")},margin:15,match:!1,theme:"fs-light"},classes:["content","caret","visible","top","bottom","right","left"],methods:{_construct:function(t){this.on(W.mouseEnter,t,e)},_destruct:function(t){w(),this.off(W.namespace)}}}),C=t.classes,H=C.raw,W=t.events,L=t.functions,M=null});
/*! formstone v1.4.22 [touch.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(r,s){"use strict";function o(e){e.preventManipulation&&e.preventManipulation();var t=e.data,a=e.originalEvent;if(a.type.match(/(up|end|cancel)$/i))d(e);else{if(a.pointerId){var n=!1;for(var i in t.touches)t.touches[i].id===a.pointerId&&(n=!0,t.touches[i].pageX=a.pageX,t.touches[i].pageY=a.pageY);n||t.touches.push({id:a.pointerId,pageX:a.pageX,pageY:a.pageY})}else t.touches=a.touches;a.type.match(/(down|start)$/i)?v(e):a.type.match(/move$/i)&&c(e)}}function v(e){var t=e.data,a=void 0!==t.touches&&t.touches.length?t.touches[0]:null;a&&t.$el.off(m.mouseDown),t.touching||(t.startE=e.originalEvent,t.startX=a?a.pageX:e.pageX,t.startY=a?a.pageY:e.pageY,t.startT=(new Date).getTime(),t.scaleD=1,t.passedAxis=!1),t.$links&&t.$links.off(m.click);var n=Y(t.scale?m.scaleStart:m.panStart,e,t.startX,t.startY,t.scaleD,0,0,"","");if(t.scale&&t.touches&&2<=t.touches.length){var i=t.touches;t.pinch={startX:f(i[0].pageX,i[1].pageX),startY:f(i[0].pageY,i[1].pageY),startD:x(i[1].pageX-i[0].pageX,i[1].pageY-i[0].pageY)},n.pageX=t.startX=t.pinch.startX,n.pageY=t.startY=t.pinch.startY}t.touching||(t.touching=!0,t.pan&&!a&&M.on(m.mouseMove,t,c).on(m.mouseUp,t,d),s.support.pointer?M.on([m.pointerMove,m.pointerUp,m.pointerCancel].join(" "),t,o):M.on([m.touchMove,m.touchEnd,m.touchCancel].join(" "),t,o),t.$el.trigger(n))}function c(e){var t=e.data,a=void 0!==t.touches&&t.touches.length?t.touches[0]:null,n=a?a.pageX:e.pageX,i=a?a.pageY:e.pageY,s=n-t.startX,o=i-t.startY,c=0<s?"right":"left",p=0<o?"down":"up",r=Math.abs(s)>t.threshold,l=Math.abs(o)>t.threshold;if(!t.passedAxis&&t.axis&&(t.axisX&&l||t.axisY&&r))d(e);else{!t.passedAxis&&(!t.axis||t.axis&&t.axisX&&r||t.axisY&&l)&&(t.passedAxis=!0),t.passedAxis&&(w.killEvent(e),w.killEvent(t.startE));var h=!0,u=Y(t.scale?m.scale:m.pan,e,n,i,t.scaleD,s,o,c,p);if(t.scale)if(t.touches&&2<=t.touches.length){var g=t.touches;t.pinch.endX=f(g[0].pageX,g[1].pageX),t.pinch.endY=f(g[0].pageY,g[1].pageY),t.pinch.endD=x(g[1].pageX-g[0].pageX,g[1].pageY-g[0].pageY),t.scaleD=t.pinch.endD/t.pinch.startD,u.pageX=t.pinch.endX,u.pageY=t.pinch.endY,u.scale=t.scaleD,u.deltaX=t.pinch.endX-t.pinch.startX,u.deltaY=t.pinch.endY-t.pinch.startY}else t.pan||(h=!1);h&&t.$el.trigger(u)}}function d(e){var t=e.data,a=void 0!==t.touches&&t.touches.length?t.touches[0]:null,n=a?a.pageX:e.pageX,i=a?a.pageY:e.pageY,s=n-t.startX,o=i-t.startY,c=(new Date).getTime(),p=t.scale?m.scaleEnd:m.panEnd,r=0<s?"right":"left",l=0<o?"down":"up",h=1<Math.abs(s),u=1<Math.abs(o);if(t.swipe&&c-t.startT<t.time&&Math.abs(s)>t.threshold&&(p=m.swipe),t.axis&&(t.axisX&&u||t.axisY&&h)||h||u){t.$links=t.$el.find("a");for(var g=0,d=t.$links.length;g<d;g++)X(t.$links.eq(g),t)}var f=Y(p,e,n,i,t.scaleD,s,o,r,l);M.off([m.touchMove,m.touchEnd,m.touchCancel,m.mouseMove,m.mouseUp,m.pointerMove,m.pointerUp,m.pointerCancel].join(" ")),t.$el.trigger(f),t.touches=[],t.scale,a&&(t.touchTimer=w.startTimer(t.touchTimer,5,function(){t.$el.on(m.mouseDown,t,v)})),t.touching=!1}function X(e,t){e.on(m.click,t,n);var a=r._data(e[0],"events").click;a.unshift(a.pop())}function n(e){w.killEvent(e,!0),e.data.$links.off(m.click)}function Y(e,t,a,n,i,s,o,c,p){return r.Event(e,{originalEvent:t,bubbles:!0,pageX:a,pageY:n,scale:i,deltaX:s,deltaY:o,directionX:c,directionY:p})}function f(e,t){return(e+t)/2}function x(e,t){return Math.sqrt(e*e+t*t)}function a(e,t){e.css({"-ms-touch-action":t,"touch-action":t})}var e=!s.window.PointerEvent,t=s.Plugin("touch",{widget:!0,defaults:{axis:!1,pan:!1,scale:!1,swipe:!1,threshold:10,time:50},methods:{_construct:function(e){if(e.touches=[],e.touching=!1,this.on(m.dragStart,w.killEvent),e.swipe&&(e.pan=!0),e.scale&&(e.axis=!1),e.axisX="x"===e.axis,e.axisY="y"===e.axis,s.support.pointer){var t="";!e.axis||e.axisX&&e.axisY?t="none":(e.axisX&&(t+=" pan-y"),e.axisY&&(t+=" pan-x")),a(this,t),this.on(m.pointerDown,e,o)}else this.on(m.touchStart,e,o).on(m.mouseDown,e,v)},_destruct:function(e){this.off(m.namespace),a(this,"")}},events:{pointerDown:e?"MSPointerDown":"pointerdown",pointerUp:e?"MSPointerUp":"pointerup",pointerMove:e?"MSPointerMove":"pointermove",pointerCancel:e?"MSPointerCancel":"pointercancel"}}),m=t.events,w=t.functions,M=s.$window;m.pan="pan",m.panStart="panstart",m.panEnd="panend",m.scale="scale",m.scaleStart="scalestart",m.scaleEnd="scaleend",m.swipe="swipe"});
/*! formstone v1.4.22 [transition.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core"],t):t(jQuery,Formstone)}(function(s,a){"use strict";function i(t){t.stopPropagation(),t.preventDefault();var e=t.data,r=t.originalEvent,n=e.target?e.$target:e.$el;e.property&&r.propertyName!==e.property||!s(r.target).is(n)||o(e)}function o(t){t.always||t.$el[e.namespaceClean]("destroy"),t.callback.apply(t.$el)}function c(t){var e,r,n,a={};if(t instanceof s&&(t=t[0]),f.getComputedStyle)for(var i=0,o=(e=f.getComputedStyle(t,null)).length;i<o;i++)r=e[i],n=e.getPropertyValue(r),a[r]=n;else if(t.currentStyle)for(r in e=t.currentStyle)a[r]=e[r];return a}var e=a.Plugin("transition",{widget:!0,defaults:{always:!1,property:null,target:null},methods:{_construct:function(t,e){if(e){t.$target=this.find(t.target),t.$check=t.target?t.$target:this,t.callback=e,t.styles=c(t.$check),t.timer=null;var r=t.$check.css(a.transition+"-duration"),n=parseFloat(r);a.support.transition&&r&&n?this.on(l.transitionEnd,t,i):t.timer=u.startTimer(t.timer,50,function(){!function(t){var e=c(t.$check);!function(t,e){if(typeof t!=typeof e)return!1;for(var r in t){if(!t.hasOwnProperty(r))return!1;if(!t.hasOwnProperty(r)||!e.hasOwnProperty(r)||t[r]!==e[r])return!1}return!0}(t.styles,e)&&o(t);t.styles=e}(t)},!0)}},_destruct:function(t){u.clearTimer(t.timer,!0),this.off(l.namespace)},resolve:o}}),l=e.events,u=e.functions,f=a.window});
/*! formstone v1.4.22 [upload.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(u,r){"use strict";function s(e,t,a){t.error=!0,e.$el.trigger($.fileError,[t,a]),e.aborting||v(e)}function a(e){e.disabled&&(this.removeClass(C.disabled),e.$input.prop("disabled",!1),e.disabled=!1)}function n(e){y.killEvent(e);var t=e.data;t.disabled||t.$input.trigger($.click)}function i(e){e.data.$el.addClass(C.focus)}function l(e){e.data.$el.removeClass(C.focus)}function o(e){y.killEvent(e);var t=e.data,a=t.$input[0].files;!t.disabled&&a.length&&g(t,a)}function c(e){y.killEvent(e),e.data.$el.addClass(C.dropping).trigger($.fileDragEnter)}function d(e){y.killEvent(e),e.data.$el.addClass(C.dropping).trigger($.fileDragOver)}function f(e){y.killEvent(e),e.data.$el.removeClass(C.dropping).trigger($.fileDragLeave)}function p(e){y.killEvent(e);var t=e.data,a=e.originalEvent.dataTransfer.files;t.$el.removeClass(C.dropping),t.disabled||g(t,a)}function g(e,t){var a=[],r=t.length;if(e.maxFiles){var n=e.maxFiles-e.uploaded;0<=n&&t.length>n&&(r=n)}if(0<r){for(var i=0;i<r;i++){var l={index:e.total++,file:t[i],name:t[i].name,size:t[i].size,started:!1,complete:!1,error:!1,transfer:null};a.push(l),e.queue.push(l)}e.$el.trigger($.queued,[a]),e.autoUpload&&h(e)}e.$input.val("")}function h(e){e.uploading||(S.on($.beforeUnload,function(){return e.leave}),e.uploading=!0,e.$el.trigger($.start,[e.queue])),v(e)}function v(e){var t=0,a=[];if(e.uploading){for(var r in e.queue)!e.queue.hasOwnProperty(r)||e.queue[r].complete||e.queue[r].error||a.push(e.queue[r]);for(var n in e.queue=a,e.queue)if(e.queue.hasOwnProperty(n)){if(e.queue[n].started||m(e,e.queue[n]),++t>=e.maxConcurrent)return;r++}0===t&&(S.off($.beforeUnload),e.uploading=!1,e.$el.trigger($.complete))}}function m(n,i){if(i.size>=n.maxSize||!0===i.error)s(n,i,"size");else if(n.chunked)i.started=!0,i.chunkSize=1024*n.chunkSize,i.totalChunks=Math.ceil(i.size/i.chunkSize),i.currentChunk=0,n.$el.trigger($.fileStart,[i]),function n(l,o){var e=o.chunkSize*o.currentChunk,t=e+o.chunkSize;t>o.size&&(t=o.size);var a=o.file[q](e,t),r=new FormData;r.append(l.postKey,a,o.file.name);r.append("chunks",o.totalChunks);r.append("chunk",o.currentChunk);r=k(l,r,o);!1===r?s(l,o,"abort"):o.chunkTransfer=u.ajax({url:l.action,data:r,dataType:l.dataType,headers:l.headers,type:"POST",contentType:!1,processData:!1,cache:!1,beforeSend:function(e,t){l.$el.trigger($.chunkStart,[o,t,e])},success:function(e,t,a){o.currentChunk++,l.$el.trigger($.chunkComplete,[o]);var r=Math.ceil(o.currentChunk/o.totalChunks*100);l.$el.trigger($.fileProgress,[o,r,t,a]),o.currentChunk<o.totalChunks?n(l,o):(o.complete=!0,l.$el.trigger($.fileComplete,[o,e,t,a]),v(l))},error:function(e,t,a){var r,n,i;n=o,i=a,(r=l).$el.trigger($.chunkError,[n,i]),s(r,n,i)}})}(n,i);else{var e=new FormData;e.append(n.postKey,i.file),!1===(e=k(n,e,i))?s(n,i,"abort"):(i.started=!0,i.transfer=u.ajax({url:n.action,data:e,dataType:n.dataType,headers:n.headers,type:"POST",contentType:!1,processData:!1,cache:!1,xhr:function(){var e=u.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,a=e.loaded||e.position,r=e.total;e.lengthComputable&&(t=Math.ceil(a/r*100)),n.$el.trigger($.fileProgress,[i,t,e])},!1),e},beforeSend:function(e,t){n.$el.trigger($.fileStart,[i,t,e])},success:function(e,t,a){i.complete=!0,n.uploaded++,n.$el.trigger($.fileComplete,[i,e,t,a]),v(n)},error:function(e,t,a){s(n,i,a)}}))}}function k(e,t,a){for(var r in e.postData)e.postData.hasOwnProperty(r)&&t.append(r,e.postData[r]);return t=e.beforeSend.call(e.$el,t,a)}var e=r.Plugin("upload",{widget:!0,defaults:{accept:!1,action:"",autoUpload:!0,beforeSend:function(e){return e},chunked:!1,chunkSize:100,customClass:"",dataType:"html",headers:{},label:"Drag and drop files or click to select",leave:"You have uploads pending, are you sure you want to leave this page?",maxConcurrent:2,maxFiles:!1,maxSize:5242880,multiple:!0,postData:{},postKey:"file",theme:"fs-light"},classes:["input","target","multiple","dropping","disabled","focus"],methods:{_construct:function(e){if(r.support.file){var t="";q||(e.chunked=!1),e.maxQueue&&(e.maxConcurrent=e.maxQueue),!1!==e.label&&(t+='<div class="'+C.target+'">',t+=e.label,t+="</div>"),t+='<input class="'+C.input+'" type="file"',e.multiple&&(t+=" multiple"),e.accept&&(t+=' accept="'+e.accept+'"'),t+=">",e.baseClasses=[C.base,e.theme,e.customClass].join(" "),this.addClass(e.baseClasses).append(t),e.$input=this.find(b.input),e.queue=[],e.total=0,e.uploaded=0,e.uploading=!1,e.disabled=!0,e.aborting=!1,this.on($.click,b.target,e,n).on($.dragEnter,e,c).on($.dragOver,e,d).on($.dragLeave,e,f).on($.drop,e,p),e.$input.on($.focus,e,i).on($.blur,e,l).on($.change,e,o),a.call(this,e)}},_destruct:function(e){r.support.file&&(e.$input.off($.namespace),this.off($.namespace).removeClass(e.baseClasses).html(""))},disable:function(e){e.disabled||(this.addClass(C.disabled),e.$input.prop("disabled",!0),e.disabled=!0)},enable:a,abort:function(e,t){var a;for(var r in e.aborting=!0,e.queue)e.queue.hasOwnProperty(r)&&(a=e.queue[r],(void 0===t||0<=t&&a.index===t)&&(a.started&&!a.complete?e.chunked?a.chunkTransfer.abort():a.transfer.abort():s(e,a,"abort")));e.aborting=!1,v(e)},start:h}}),b=e.classes,C=b.raw,$=e.events,y=e.functions,S=(r.window,r.$window),q=!1;r.Ready(function(){var e=["mozSlice","webkitSlice","slice"];if(r.support.file){var t=!1;try{t=new File([""],"f")}catch(e){}if(!t)try{t=new Blob([""],{})}catch(e){}if(t)for(var a in e)if(e.hasOwnProperty(a)&&e[a]in t){q=e[a];break}}}),$.chunkComplete="chunkcomplete",$.chunkError="chunkerror",$.chunkStart="chunkstart",$.complete="complete",$.fileComplete="filecomplete",$.fileDragEnter="filedragenter",$.fileDragLeave="filedragleave",$.fileDragOver="filedragover",$.fileError="fileerror",$.fileProgress="fileprogress",$.fileStart="filestart",$.start="start",$.queued="queued"});
/*! formstone v1.4.22 [viewer.js] 2021-10-01 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],t):t(jQuery,Formstone)}(function(s,n){"use strict";function t(){Z.scrollTop()+n.windowHeight<0&&0}function l(){(E=s(I.base)).length?j.lockViewport(z):j.unlockViewport(z)}function c(t,e){t.isAnimating||(t.isAnimating=!0,t.$container=s('<div class="'+y.container+'"><img></div>'),t.$image=t.$container.find("img"),t.$viewport.append(t.$container),t.$image.one(b.load,function(){!function(t){(function(t){var e=function(t){var e=t[0],i=new Image;{if(void 0!==e.naturalHeight)return{naturalHeight:e.naturalHeight,naturalWidth:e.naturalWidth};if("img"===e.tagName.toLowerCase())return i.src=e.src,{naturalHeight:i.height,naturalWidth:i.width}}return!1}(t.$image);t.naturalHeight=e.naturalHeight,t.naturalWidth=e.naturalWidth,t.ratioHorizontal=t.naturalHeight/t.naturalWidth,t.ratioVertical=t.naturalWidth/t.naturalHeight,t.isWide=t.naturalWidth>t.naturalHeight})(t),o(t),t.containerTop=t.viewportHeight/2,t.containerLeft=t.viewportWidth/2,r(t),t.imageHeight=t.naturalHeight,t.imageWidth=t.naturalWidth,function(t){t.imageHeight=t.imageMinHeight,t.imageWidth=t.imageMinWidth}(t),a(t),g(t),m(t),d(t);var e={containerTop:t.containerTop,containerLeft:t.containerLeft,imageHeight:t.imageHeight,imageWidth:t.imageWidth,imageTop:t.imageTop,imageLeft:t.imageLeft};H(t,e),t.isRendering=!0}(t),t.isAnimating=!1,t.$container.fsTransition({property:"opacity"},function(){}),t.$el.removeClass(y.loading),t.$container.fsTouch({pan:!0,scale:!0}).on(b.scaleStart,t,v).on(b.scaleEnd,t,T).on(b.scale,t,W),t.$el.trigger(b.loaded)}).one(b.error,t,i).attr("src",e).addClass(y.image),!t.$image[0].complete&&4!==t.$image[0].readyState||t.$image.trigger(b.load),t.source=e)}function i(t){t.data.$el.trigger(b.error)}function o(t){t.viewportHeight=t.$viewport.outerHeight(),t.viewportWidth=t.$viewport.outerWidth()}function a(t){t.imageHeight<=t.viewportHeight?(t.containerMinTop=t.viewportHeight/2,t.containerMaxTop=t.viewportHeight/2):(t.containerMinTop=t.viewportHeight-t.imageHeight/2,t.containerMaxTop=t.imageHeight/2),t.imageWidth<=t.viewportWidth?(t.containerMinLeft=t.viewportWidth/2,t.containerMaxLeft=t.viewportWidth/2):(t.containerMinLeft=t.viewportWidth-t.imageWidth/2,t.containerMaxLeft=t.imageWidth/2)}function r(t){t.isWide?(t.imageMinWidth=t.viewportWidth,t.imageMinHeight=t.imageMinWidth*t.ratioHorizontal,t.imageMinHeight>t.viewportHeight&&(t.imageMinHeight=t.viewportHeight,t.imageMinWidth=t.imageMinHeight*t.ratioVertical)):(t.imageMinHeight=t.viewportHeight,t.imageMinWidth=t.imageMinHeight*t.ratioVertical,t.imageMinWidth>t.viewportWidth&&(t.imageMinWidth=t.viewportWidth,t.imageMinHeight=t.imageMinWidth*t.ratioHorizontal)),(t.imageMinWidth>t.naturalWidth||t.imageMinHeight>t.naturalHeight)&&(t.imageMinHeight=t.naturalHeight,t.imageMinWidth=t.naturalWidth),t.imageMaxHeight=t.naturalHeight,t.imageMaxWidth=t.naturalWidth}function g(t){t.imageTop=-t.imageHeight/2,t.imageLeft=-t.imageWidth/2}function m(t){t.lastContainerTop=t.containerTop,t.lastContainerLeft=t.containerLeft,t.lastImageHeight=t.imageHeight,t.lastImageWidth=t.imageWidth,t.lastImageTop=t.imageTop,t.lastImageLeft=t.imageLeft}function d(t){t.renderContainerTop=t.lastContainerTop,t.renderContainerLeft=t.lastContainerLeft,t.renderImageTop=t.lastImageTop,t.renderImageLeft=t.lastImageLeft,t.renderImageHeight=t.lastImageHeight,t.renderImageWidth=t.lastImageWidth}function h(t){t.imageHeight<t.imageMinHeight&&(t.imageHeight=t.imageMinHeight),t.imageHeight>t.imageMaxHeight&&(t.imageHeight=t.imageMaxHeight),t.imageWidth<t.imageMinWidth&&(t.imageWidth=t.imageMinWidth),t.imageWidth>t.imageMaxWidth&&(t.imageWidth=t.imageMaxWidth)}function u(t){t.containerTop<t.containerMinTop&&(t.containerTop=t.containerMinTop),t.containerTop>t.containerMaxTop&&(t.containerTop=t.containerMaxTop),t.containerLeft<t.containerMinLeft&&(t.containerLeft=t.containerMinLeft),t.containerLeft>t.containerMaxLeft&&(t.containerLeft=t.containerMaxLeft)}function f(t){null===t.tapTimer?t.tapTimer=j.startTimer(t.tapTimer,500,function(){p(t)}):(p(t),function(t){var e=t.imageHeight>t.imageMinHeight+1;t.isZooming=!0,m(t),d(t),e?(t.imageHeight=t.imageMinHeight,t.imageWidth=t.imageMinWidth):(t.imageHeight=t.imageMaxHeight,t.imageWidth=t.imageMaxWidth);a(t),u(t),g(t),t.isRendering=!0}(t))}function p(t){j.clearTimer(t.tapTimer),t.tapTimer=null}function H(t,e){if(n.transform){var i=e.imageWidth/t.naturalWidth,o=e.imageHeight/t.naturalHeight;t.$container.css(n.transform,"translate3d("+e.containerLeft+"px, "+e.containerTop+"px, 0)"),t.$image.css(n.transform,"translate3d(-50%, -50%, 0) scale("+i+","+o+")")}else t.$container.css({top:e.containerTop,left:e.containerLeft}),t.$image.css({height:e.imageHeight,width:e.imageWidth,top:e.imageTop,left:e.imageLeft})}function v(t){var e=t.data;f(e),m(e)}function W(t){var e=t.data;p(e),e.isRendering=!1,e.isZooming=!1;e.imageHeight,e.imageMinHeight;e.containerTop=e.lastContainerTop+t.deltaY,e.containerLeft=e.lastContainerLeft+t.deltaX,e.imageHeight=e.lastImageHeight*t.scale,e.imageWidth=e.lastImageWidth*t.scale,a(e),u(e),h(e),g(e),H(e,{containerTop:e.containerTop,containerLeft:e.containerLeft,imageHeight:e.imageHeight,imageWidth:e.imageWidth,imageTop:e.imageTop,imageLeft:e.imageLeft})}function T(t){var e=t.data;e.isZooming||(m(e),d(e),e.isRendering=!0)}function $(t){j.killEvent(t);var e=s(t.currentTarget),i=t.data;"out"==(e.hasClass(y.control_zoom_out)?"out":"in")?function(t){t.keyDownTime=1,t.action="zoom_out"}(i):function(t){t.keyDownTime=1,t.action="zoom_in"}(i)}function M(t){t.data.action=!1}function e(t){if(t.isRendering){if(t.action){t.keyDownTime+=t.zoomIncrement;var e=("zoom_out"===t.action?-1:1)*Math.round(t.imageWidth*t.keyDownTime-t.imageWidth);e>t.zoomDelta&&(e=t.zoomDelta),t.isWide?(t.imageWidth+=e,t.imageHeight=Math.round(t.imageWidth/t.ratioVertical)):(t.imageHeight+=e,t.imageWidth=Math.round(t.imageHeight/t.ratioHorizontal)),h(t),g(t),a(t),u(t)}t.renderContainerTop+=Math.round((t.containerTop-t.renderContainerTop)*t.zoomEnertia),t.renderContainerLeft+=Math.round((t.containerLeft-t.renderContainerLeft)*t.zoomEnertia),t.renderImageTop+=Math.round((t.imageTop-t.renderImageTop)*t.zoomEnertia),t.renderImageLeft+=Math.round((t.imageLeft-t.renderImageLeft)*t.zoomEnertia),t.renderImageHeight+=Math.round((t.imageHeight-t.renderImageHeight)*t.zoomEnertia),t.renderImageWidth+=Math.round((t.imageWidth-t.renderImageWidth)*t.zoomEnertia),H(t,{containerTop:t.renderContainerTop,containerLeft:t.renderContainerLeft,imageHeight:t.renderImageHeight,imageWidth:t.renderImageWidth,imageTop:t.renderImageTop,imageLeft:t.renderImageLeft})}}function w(t,e){t.isAnimating||(p(t),t.isAnimating=!0,t.isRendering=!1,t.isZooming=!1,function(t){t.$container&&t.$container.length&&t.$container.fsTouch("destroy").off(b.scaleStart,v).off(b.scaleEnd,T).off(b.scale,W)}(t),t.$container.fsTransition({property:"opacity"},function(){t.isAnimating=!1,t.$container.remove(),"function"==typeof e&&e.call(window,t)}),t.$el.addClass(y.loading))}function _(t){j.killEvent(t);var e=s(t.currentTarget),i=t.data,o=i.index+(e.hasClass(y.control_next)?1:-1);i.isAnimating||(o<0&&(o=0),o>i.total&&(o=i.total),o!==i.index&&(i.index=o,w(i,function(){c(i,i.images[i.index])})),C(i))}function C(t){t.$controlItems.removeClass(y.control_disabled),0===t.index&&t.$controlPrevious.addClass(y.control_disabled),t.index===t.images.length-1&&t.$controlNext.addClass(y.control_disabled)}function L(t){o(t),a(t),r(t),g(t),a(t),u(t),h(t)}var x=n.Plugin("viewer",{widget:!0,defaults:{controls:!0,customClass:"",labels:{count:"of",next:"Next",previous:"Previous",zoom_in:"Zoom In",zoom_out:"Zoom Out"},theme:"fs-light",zoomDelta:100,zoomEnertia:.2,zoomIncrement:.01},classes:["source","wrapper","viewport","container","image","gallery","loading_icon","controls","controls_custom","control","control_previous","control_next","control_zoom_in","control_zoom_out","control_disabled","loading"],events:{loaded:"loaded",ready:"ready"},methods:{_construct:function(t){var e,i="",o=[y.control,y.control_previous].join(" "),n=[y.control,y.control_next].join(" "),a=[y.control,y.control_zoom_in].join(" "),r=[y.control,y.control_zoom_out].join(" ");t.thisClasses=[y.base,y.loading,t.customClass,t.theme],t.images=[],t.source=!1,t.gallery=!1,t.tapTimer=null,t.action=!1,t.isRendering=!1,t.isZooming=!1,t.isAnimating=!1,t.keyDownTime=1,t.$images=this.find("img").addClass(y.source),t.index=0,t.total=t.$images.length-1,t.customControls="object"==typeof t.controls&&t.controls.zoom_in&&t.controls.zoom_out,1<t.$images.length&&(t.gallery=!0,t.thisClasses.push(y.gallery),!t.customControls||t.controls.previous&&t.controls.next||(t.customControls=!1));for(var g=0;g<t.$images.length;g++)e=t.$images.eq(g),t.images.push(e.attr("src"));i+='<div class="'+y.wrapper+'">',i+='<div class="'+y.loading_icon+'"></div>',i+='<div class="'+y.viewport+'"></div>',i+="</div>",t.controls&&!t.customControls&&(i+='<div class="'+y.controls+'">',i+='<button type="button" class="'+o+'">'+t.labels.previous+"</button>",i+='<button type="button" class="'+r+'">'+t.labels.zoom_out+"</button>",i+='<button type="button" class="'+a+'">'+t.labels.zoom_in+"</button>",i+='<button type="button" class="'+n+'">'+t.labels.next+"</button>",i+="</div>"),this.addClass(t.thisClasses.join(" ")).prepend(i),t.$wrapper=this.find(I.wrapper),t.$viewport=this.find(I.viewport),t.customControls?(t.$controls=s(t.controls.container).addClass([y.controls,y.controls_custom].join(" ")),t.$controlPrevious=s(t.controls.previous).addClass(o),t.$controlNext=s(t.controls.next).addClass(n),t.$controlZoomIn=s(t.controls.zoom_in).addClass(a),t.$controlZoomOut=s(t.controls.zoom_out).addClass(r)):(t.$controls=this.find(I.controls),t.$controlPrevious=this.find(I.control_previous),t.$controlNext=this.find(I.control_next),t.$controlZoomIn=this.find(I.control_zoom_in),t.$controlZoomOut=this.find(I.control_zoom_out)),t.$controlItems=t.$controlPrevious.add(t.$controlNext),t.$controlZooms=t.$controlZoomIn.add(t.$controlZoomOut),l(),t.$controlItems.on(b.click,t,_),t.$controlZooms.on([b.touchStart,b.mouseDown].join(" "),t,$).on([b.touchEnd,b.mouseUp].join(" "),t,M),c(t,t.images[t.index],!0),C(t)},_destruct:function(t){t.$wrapper.remove(),t.$image.removeClass(y.source),t.controls&&!t.customControls&&t.$controls.remove(),t.customControls&&(t.$controls.removeClass([y.controls,y.controls_custom].join(" ")),t.$controlItems.off(b.click).removeClass([y.control,y.control_previous,y.control_next].join(" ")),t.$controlZooms.off([b.touchStart,b.mouseDown].join(" ")).off([b.touchStart,b.mouseDown].join(" ")).off([b.touchEnd,b.mouseUp].join(" ")).removeClass([y.control,y.control_zoom_in,y.control_zoom_out].join(" "))),this.removeClass(t.thisClasses.join(" ")).off(b.namespace),l()},_resize:function(){j.iterate.call(E,L)},_raf:function(){j.iterate.call(E,e)},resize:L,load:function(t,e){t.index=0,"string"==typeof e?(t.total=0,t.images=[e],t.gallery=!1,t.$el.removeClass(y.gallery)):(t.total=e.length-1,1<(t.images=e).length&&(t.gallery=!0,t.$el.addClass(y.gallery)),e=t.images[t.index]),w(t,function(){c(t,e)})},unload:function(t){w(t)}}}),z=x.namespace,I=x.classes,y=I.raw,b=x.events,j=x.functions,Z=(n.window,n.$window),E=[];n.Ready(function(){t(),Z.on("scroll",t),n.$body})});

/* ==========================================================================
  Demo
============================================================================= */

  (function($, Formstone) {
    var $window,
        $body,
        opts = {};

    opts.minXS = parseInt("320", 10);
    opts.minSM = parseInt("500", 10);
    opts.minMD = parseInt("740", 10);
    opts.minLG = parseInt("980", 10);
    opts.minXL = parseInt("1220", 10);

    opts.maxXS = opts.minXS - 1;
    opts.maxSM = opts.minSM - 1;
    opts.maxMD = opts.minMD - 1;
    opts.maxLG = opts.minLG - 1;
    opts.maxXL = opts.minXL - 1;

    opts.minHTsm = parseInt("500", 10);
    opts.minHT   = parseInt("800", 10);

    opts.maxHTsm = opts.minHTsm - 1;
    opts.maxHT   = opts.minHT - 1;

    function init() {
      $window = $(window);
      $body   = $("body");

      $.analytics();

      $.lightbox("defaults", {
        // mobile: false,
        videoFormatter: {
          "viddler": {
            pattern: /(?:viddler\.com\/)((v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?\/]*)/,
            format: function formatViddler(parts) {
              return '//www.viddler.com/embed/' + parts[6];
            }
          }
        }
      });

      if ($.mediaquery) {
        $.mediaquery({
          minWidth: [ opts.minXS, opts.minSM, opts.minMD, opts.minLG, opts.minXL ],
          maxWidth: [ opts.maxXL, opts.maxLG, opts.maxMD, opts.maxSM, opts.maxXS ],
          minHeight: [ opts.minHTsm, opts.minHT ],
          maxHeight: [ opts.maxHT, opts.maxHTsm ]
        });
      }

      if ($.cookie) {
        $.cookie({
          path: "/"
        });
      }

      buildDemoTabs();
      buildPlugins("fs-light");
    }

    function buildDemoTabs() {
      $(".demo_container").each(function(index) {
        var html     = "",
            $demo    = $(this),
            $example = $demo.find(".demo_example"),
            $code    = $demo.find(".demo_code");

        $example.attr("id", "example-" + index);
        $code.attr("id", "code-" + index);

        html += '<div class="demo_tabs contain">';
        html += '<a href="#example-' + index + '" class="demo_tab js-demo_tabs" data-tabs-group="demo-' + index + '">Demo</a>';
        html += '<a href="#code-' + index +    '" class="demo_tab js-demo_tabs" data-tabs-group="demo-' + index + '">Code</a>';
        html += '</div>';

        $demo.prepend(html);
      });
    }

    function buildPlugins(theme) {
      var options = {
        theme: theme
      };

      // Move the demo navs out

      $(".js-navigation_elements").appendTo("body");

      // Destroy

      $body.find(".js-background").background("destroy");
      $body.find(".js-carousel").carousel("destroy");
      $body.find(".js-checkbox, .js-radio, input[type=checkbox], input[type=radio]").checkbox("destroy");
      $body.find(".js-checkpoint").checkpoint("destroy");
      $body.find(".js-dropdown").dropdown("destroy");
      $body.find(".js-equalize").equalize("destroy");
      $body.find(".js-lightbox").lightbox("destroy");
      $body.find(".js-navigation").navigation("destroy");
      $body.find("input[type=number]").number("destroy");
      $body.find(".js-pagination").pagination("destroy");
      $body.find("input[type=range]").range("destroy");
      $body.find(".js-scrollbar").scrollbar("destroy");
      $body.find(".js-sticky").sticky("destroy");
      $body.find(".js-swap").swap("destroy");
      $body.find(".js-tabs").tabs("destroy");
      $body.find(".js-tooltip").tooltip("destroy");
      $body.find(".js-upload").upload("destroy");
      $body.find(".js-viewer").viewer("destroy");

      // Init

      $body.find(".js-background").background(options);
      $body.find(".js-carousel").carousel(options);
      $body.find(".js-checkbox, .js-radio, input[type=checkbox], input[type=radio]").checkbox(options);
      $body.find(".js-checkpoint").checkpoint();
      $body.find(".js-dropdown").dropdown(options);
      $body.find(".js-equalize").equalize(options);
      $body.find(".js-lightbox").lightbox(options);
      $body.find(".js-navigation").navigation(options);
      $body.find("input[type=number]").number(options);
      $body.find(".js-pagination").pagination(options);
      $body.find("input[type=range]").range(options);
      $body.find(".js-scrollbar").scrollbar(options);
      $body.find(".js-sticky").sticky(options);
      $body.find(".js-swap").swap(options);
      $body.find(".js-tabs").tabs(options);
      $body.find(".js-tooltip").tooltip(options);
      $body.find(".js-upload").upload(options);
      $body.find(".js-viewer").viewer(options);

      // Demo Tabs

      $body.find(".js-demo_tabs").off("update.tabs").tabs("destroy");

      $body.find(".js-demo_tabs").tabs({
        mobileMaxWidth: "0px",
        theme: "fs-demo"
      }).on("update.tabs", resetPlugins);
    }

    function resetPlugins() {
      var $tab     = $(this),
          $content = $( $tab.attr("href") );

      $content.find(".js-background").background("resize");
      $content.find(".js-carousel").carousel("resize");
      $content.find(".js-equalize").equalize("resize");
      $content.find("input[type=range]").range("resize");
      $content.find(".js-scrollbar").scrollbar("resize");

      $body.find(".js-checkpoint").checkpoint("resize");
      $body.find(".js-sticky").sticky("resize");
    }

    // Ready

    Formstone.Ready(init);

  })(jQuery, Formstone);



/* **********************************************
     Begin prism-core.js
********************************************** */

/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;


var _ = {
	/**
	 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
	 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
	 * additional languages or plugins yourself.
	 *
	 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
	 *
	 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
	 * empty Prism object into the global scope before loading the Prism script like this:
	 *
	 * ```js
	 * window.Prism = window.Prism || {};
	 * Prism.manual = true;
	 * // add a new <script> to load Prism's script
	 * ```
	 *
	 * @default false
	 * @type {boolean}
	 * @memberof Prism
	 * @public
	 */
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

	/**
	 * A namespace for utility methods.
	 *
	 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
	 * change or disappear at any time.
	 *
	 * @namespace
	 * @memberof Prism
	 */
	util: {
		encode: function encode(tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		/**
		 * Returns the name of the type of the given value.
		 *
		 * @param {any} o
		 * @returns {string}
		 * @example
		 * type(null)      === 'Null'
		 * type(undefined) === 'Undefined'
		 * type(123)       === 'Number'
		 * type('foo')     === 'String'
		 * type(true)      === 'Boolean'
		 * type([1, 2])    === 'Array'
		 * type({})        === 'Object'
		 * type(String)    === 'Function'
		 * type(/abc+/)    === 'RegExp'
		 */
		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		/**
		 * Returns a unique number for the given object. Later calls will still return the same number.
		 *
		 * @param {Object} obj
		 * @returns {number}
		 */
		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		/**
		 * Creates a deep clone of the given object.
		 *
		 * The main intended use of this function is to clone language definitions.
		 *
		 * @param {T} o
		 * @param {Record<number, any>} [visited]
		 * @returns {T}
		 * @template T
		 */
		clone: function deepClone(o, visited) {
			visited = visited || {};

			var clone, id;
			switch (_.util.type(o)) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = /** @type {Record<string, any>} */ ({});
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return /** @type {any} */ (clone);

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return /** @type {any} */ (clone);

				default:
					return o;
			}
		},

		/**
		 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
		 *
		 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
		 *
		 * @param {Element} element
		 * @returns {string}
		 */
		getLanguage: function (element) {
			while (element && !lang.test(element.className)) {
				element = element.parentElement;
			}
			if (element) {
				return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
			}
			return 'none';
		},

		/**
		 * Returns the script element that is currently executing.
		 *
		 * This does __not__ work for line script element.
		 *
		 * @returns {HTMLScriptElement | null}
		 */
		currentScript: function () {
			if (typeof document === 'undefined') {
				return null;
			}
			if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
				return /** @type {any} */ (document.currentScript);
			}

			// IE11 workaround
			// we'll get the src of the current script by parsing IE11's error stack trace
			// this will not work for inline scripts

			try {
				throw new Error();
			} catch (err) {
				// Get file src url from stack. Specifically works with the format of stack traces in IE.
				// A stack will look like this:
				//
				// Error
				//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
				//    at Global code (http://localhost/components/prism-core.js:606:1)

				var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
				if (src) {
					var scripts = document.getElementsByTagName('script');
					for (var i in scripts) {
						if (scripts[i].src == src) {
							return scripts[i];
						}
					}
				}
				return null;
			}
		},

		/**
		 * Returns whether a given class is active for `element`.
		 *
		 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
		 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
		 * given class is just the given class with a `no-` prefix.
		 *
		 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
		 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
		 * ancestors have the given class or the negated version of it, then the default activation will be returned.
		 *
		 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
		 * version of it, the class is considered active.
		 *
		 * @param {Element} element
		 * @param {string} className
		 * @param {boolean} [defaultActivation=false]
		 * @returns {boolean}
		 */
		isActive: function (element, className, defaultActivation) {
			var no = 'no-' + className;

			while (element) {
				var classList = element.classList;
				if (classList.contains(className)) {
					return true;
				}
				if (classList.contains(no)) {
					return false;
				}
				element = element.parentElement;
			}
			return !!defaultActivation;
		}
	},

	/**
	 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
	 *
	 * @namespace
	 * @memberof Prism
	 * @public
	 */
	languages: {
		/**
		 * Creates a deep copy of the language with the given id and appends the given tokens.
		 *
		 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
		 * will be overwritten at its original position.
		 *
		 * ## Best practices
		 *
		 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
		 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
		 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
		 *
		 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
		 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
		 *
		 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
		 * @param {Grammar} redef The new tokens to append.
		 * @returns {Grammar} The new language created.
		 * @public
		 * @example
		 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
		 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
		 *     // at its original position
		 *     'comment': { ... },
		 *     // CSS doesn't have a 'color' token, so this token will be appended
		 *     'color': /\b(?:red|green|blue)\b/
		 * });
		 */
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Inserts tokens _before_ another token in a language definition or any other grammar.
		 *
		 * ## Usage
		 *
		 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
		 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
		 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
		 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
		 * this:
		 *
		 * ```js
		 * Prism.languages.markup.style = {
		 *     // token
		 * };
		 * ```
		 *
		 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
		 * before existing tokens. For the CSS example above, you would use it like this:
		 *
		 * ```js
		 * Prism.languages.insertBefore('markup', 'cdata', {
		 *     'style': {
		 *         // token
		 *     }
		 * });
		 * ```
		 *
		 * ## Special cases
		 *
		 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
		 * will be ignored.
		 *
		 * This behavior can be used to insert tokens after `before`:
		 *
		 * ```js
		 * Prism.languages.insertBefore('markup', 'comment', {
		 *     'comment': Prism.languages.markup.comment,
		 *     // tokens after 'comment'
		 * });
		 * ```
		 *
		 * ## Limitations
		 *
		 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
		 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
		 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
		 * deleting properties which is necessary to insert at arbitrary positions.
		 *
		 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
		 * Instead, it will create a new object and replace all references to the target object with the new one. This
		 * can be done without temporarily deleting properties, so the iteration order is well-defined.
		 *
		 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
		 * you hold the target object in a variable, then the value of the variable will not change.
		 *
		 * ```js
		 * var oldMarkup = Prism.languages.markup;
		 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
		 *
		 * assert(oldMarkup !== Prism.languages.markup);
		 * assert(newMarkup === Prism.languages.markup);
		 * ```
		 *
		 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
		 * object to be modified.
		 * @param {string} before The key to insert before.
		 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
		 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
		 * object to be modified.
		 *
		 * Defaults to `Prism.languages`.
		 * @returns {Grammar} The new grammar object.
		 * @public
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || /** @type {any} */ (_.languages);
			var grammar = root[inside];
			/** @type {Grammar} */
			var ret = {};

			for (var token in grammar) {
				if (grammar.hasOwnProperty(token)) {

					if (token == before) {
						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					// Do not insert token which also occur in insert. See #1525
					if (!insert.hasOwnProperty(token)) {
						ret[token] = grammar[token];
					}
				}
			}

			var old = root[inside];
			root[inside] = ret;

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === old && key != inside) {
					this[key] = ret;
				}
			});

			return ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function DFS(o, callback, type, visited) {
			visited = visited || {};

			var objId = _.util.objId;

			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					var property = o[i],
					    propertyType = _.util.type(property);

					if (propertyType === 'Object' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, null, visited);
					}
					else if (propertyType === 'Array' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, i, visited);
					}
				}
			}
		}
	},

	plugins: {},

	/**
	 * This is the most high-level function in Prism’s API.
	 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
	 * each one of them.
	 *
	 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
	 *
	 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
	 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
	 * @memberof Prism
	 * @public
	 */
	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	/**
	 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
	 * {@link Prism.highlightElement} on each one of them.
	 *
	 * The following hooks will be run:
	 * 1. `before-highlightall`
	 * 2. `before-all-elements-highlight`
	 * 3. All hooks of {@link Prism.highlightElement} for each element.
	 *
	 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
	 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
	 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
	 * @memberof Prism
	 * @public
	 */
	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			container: container,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run('before-highlightall', env);

		env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

		_.hooks.run('before-all-elements-highlight', env);

		for (var i = 0, element; element = env.elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	/**
	 * Highlights the code inside a single element.
	 *
	 * The following hooks will be run:
	 * 1. `before-sanity-check`
	 * 2. `before-highlight`
	 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
	 * 4. `before-insert`
	 * 5. `after-highlight`
	 * 6. `complete`
	 *
	 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
	 * the element's language.
	 *
	 * @param {Element} element The element containing the code.
	 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
	 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
	 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
	 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
	 *
	 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
	 * asynchronous highlighting to work. You can build your own bundle on the
	 * [Download page](https://prismjs.com/download.html).
	 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
	 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
	 * @memberof Prism
	 * @public
	 */
	highlightElement: function(element, async, callback) {
		// Find language
		var language = _.util.getLanguage(element);
		var grammar = _.languages[language];

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		var parent = element.parentElement;
		if (parent && parent.nodeName.toLowerCase() === 'pre') {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		function insertHighlightedCode(highlightedCode) {
			env.highlightedCode = highlightedCode;

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
		}

		_.hooks.run('before-sanity-check', env);

		if (!env.code) {
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (!env.grammar) {
			insertHighlightedCode(_.util.encode(env.code));
			return;
		}

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				insertHighlightedCode(evt.data);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
		}
	},

	/**
	 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
	 * and the language definitions to use, and returns a string with the HTML produced.
	 *
	 * The following hooks will be run:
	 * 1. `before-tokenize`
	 * 2. `after-tokenize`
	 * 3. `wrap`: On each {@link Token}.
	 *
	 * @param {string} text A string with the code to be highlighted.
	 * @param {Grammar} grammar An object containing the tokens to use.
	 *
	 * Usually a language definition like `Prism.languages.markup`.
	 * @param {string} language The name of the language definition passed to `grammar`.
	 * @returns {string} The highlighted HTML.
	 * @memberof Prism
	 * @public
	 * @example
	 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
	 */
	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	/**
	 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
	 * and the language definitions to use, and returns an array with the tokenized code.
	 *
	 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
	 *
	 * This method could be useful in other contexts as well, as a very crude parser.
	 *
	 * @param {string} text A string with the code to be highlighted.
	 * @param {Grammar} grammar An object containing the tokens to use.
	 *
	 * Usually a language definition like `Prism.languages.markup`.
	 * @returns {TokenStream} An array of strings and tokens, a token stream.
	 * @memberof Prism
	 * @public
	 * @example
	 * let code = `var foo = 0;`;
	 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
	 * tokens.forEach(token => {
	 *     if (token instanceof Prism.Token && token.type === 'number') {
	 *         console.log(`Found numeric literal: ${token.content}`);
	 *     }
	 * });
	 */
	tokenize: function(text, grammar) {
		var rest = grammar.rest;
		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		var tokenList = new LinkedList();
		addAfter(tokenList, tokenList.head, text);

		matchGrammar(text, tokenList, grammar, tokenList.head, 0);

		return toArray(tokenList);
	},

	/**
	 * @namespace
	 * @memberof Prism
	 * @public
	 */
	hooks: {
		all: {},

		/**
		 * Adds the given callback to the list of callbacks for the given hook.
		 *
		 * The callback will be invoked when the hook it is registered for is run.
		 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
		 *
		 * One callback function can be registered to multiple hooks and the same hook multiple times.
		 *
		 * @param {string} name The name of the hook.
		 * @param {HookCallback} callback The callback function which is given environment variables.
		 * @public
		 */
		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		/**
		 * Runs a hook invoking all registered callbacks with the given environment variables.
		 *
		 * Callbacks will be invoked synchronously and in the order in which they were registered.
		 *
		 * @param {string} name The name of the hook.
		 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
		 * @public
		 */
		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	},

	Token: Token
};
_self.Prism = _;


// Typescript note:
// The following can be used to import the Token type in JSDoc:
//
//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

/**
 * Creates a new token.
 *
 * @param {string} type See {@link Token#type type}
 * @param {string | TokenStream} content See {@link Token#content content}
 * @param {string|string[]} [alias] The alias(es) of the token.
 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
 * @class
 * @global
 * @public
 */
function Token(type, content, alias, matchedStr) {
	/**
	 * The type of the token.
	 *
	 * This is usually the key of a pattern in a {@link Grammar}.
	 *
	 * @type {string}
	 * @see GrammarToken
	 * @public
	 */
	this.type = type;
	/**
	 * The strings or tokens contained by this token.
	 *
	 * This will be a token stream if the pattern matched also defined an `inside` grammar.
	 *
	 * @type {string | TokenStream}
	 * @public
	 */
	this.content = content;
	/**
	 * The alias(es) of the token.
	 *
	 * @type {string|string[]}
	 * @see GrammarToken
	 * @public
	 */
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || '').length | 0;
}

/**
 * A token stream is an array of strings and {@link Token Token} objects.
 *
 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
 * them.
 *
 * 1. No adjacent strings.
 * 2. No empty strings.
 *
 *    The only exception here is the token stream that only contains the empty string and nothing else.
 *
 * @typedef {Array<string | Token>} TokenStream
 * @global
 * @public
 */

/**
 * Converts the given token or token stream to an HTML representation.
 *
 * The following hooks will be run:
 * 1. `wrap`: On each {@link Token}.
 *
 * @param {string | Token | TokenStream} o The token or token stream to be converted.
 * @param {string} language The name of current language.
 * @returns {string} The HTML representation of the token or token stream.
 * @memberof Token
 * @static
 */
Token.stringify = function stringify(o, language) {
	if (typeof o == 'string') {
		return o;
	}
	if (Array.isArray(o)) {
		var s = '';
		o.forEach(function (e) {
			s += stringify(e, language);
		});
		return s;
	}

	var env = {
		type: o.type,
		content: stringify(o.content, language),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language
	};

	var aliases = o.alias;
	if (aliases) {
		if (Array.isArray(aliases)) {
			Array.prototype.push.apply(env.classes, aliases);
		} else {
			env.classes.push(aliases);
		}
	}

	_.hooks.run('wrap', env);

	var attributes = '';
	for (var name in env.attributes) {
		attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
};

/**
 * @param {string} text
 * @param {LinkedList<string | Token>} tokenList
 * @param {any} grammar
 * @param {LinkedListNode<string | Token>} startNode
 * @param {number} startPos
 * @param {RematchOptions} [rematch]
 * @returns {void}
 * @private
 *
 * @typedef RematchOptions
 * @property {string} cause
 * @property {number} reach
 */
function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
	for (var token in grammar) {
		if (!grammar.hasOwnProperty(token) || !grammar[token]) {
			continue;
		}

		var patterns = grammar[token];
		patterns = Array.isArray(patterns) ? patterns : [patterns];

		for (var j = 0; j < patterns.length; ++j) {
			if (rematch && rematch.cause == token + ',' + j) {
				return;
			}

			var patternObj = patterns[j],
				inside = patternObj.inside,
				lookbehind = !!patternObj.lookbehind,
				greedy = !!patternObj.greedy,
				lookbehindLength = 0,
				alias = patternObj.alias;

			if (greedy && !patternObj.pattern.global) {
				// Without the global flag, lastIndex won't work
				var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
				patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
			}

			/** @type {RegExp} */
			var pattern = patternObj.pattern || patternObj;

			for ( // iterate the token list and keep track of the current token/string position
				var currentNode = startNode.next, pos = startPos;
				currentNode !== tokenList.tail;
				pos += currentNode.value.length, currentNode = currentNode.next
			) {

				if (rematch && pos >= rematch.reach) {
					break;
				}

				var str = currentNode.value;

				if (tokenList.length > text.length) {
					// Something went terribly wrong, ABORT, ABORT!
					return;
				}

				if (str instanceof Token) {
					continue;
				}

				var removeCount = 1; // this is the to parameter of removeBetween

				if (greedy && currentNode != tokenList.tail.prev) {
					pattern.lastIndex = pos;
					var match = pattern.exec(text);
					if (!match) {
						break;
					}

					var from = match.index + (lookbehind && match[1] ? match[1].length : 0);
					var to = match.index + match[0].length;
					var p = pos;

					// find the node that contains the match
					p += currentNode.value.length;
					while (from >= p) {
						currentNode = currentNode.next;
						p += currentNode.value.length;
					}
					// adjust pos (and p)
					p -= currentNode.value.length;
					pos = p;

					// the current node is a Token, then the match starts inside another Token, which is invalid
					if (currentNode.value instanceof Token) {
						continue;
					}

					// find the last node which is affected by this match
					for (
						var k = currentNode;
						k !== tokenList.tail && (p < to || typeof k.value === 'string');
						k = k.next
					) {
						removeCount++;
						p += k.value.length;
					}
					removeCount--;

					// replace with the new match
					str = text.slice(pos, p);
					match.index -= pos;
				} else {
					pattern.lastIndex = 0;

					var match = pattern.exec(str);
				}

				if (!match) {
					continue;
				}

				if (lookbehind) {
					lookbehindLength = match[1] ? match[1].length : 0;
				}

				var from = match.index + lookbehindLength,
					matchStr = match[0].slice(lookbehindLength),
					to = from + matchStr.length,
					before = str.slice(0, from),
					after = str.slice(to);

				var reach = pos + str.length;
				if (rematch && reach > rematch.reach) {
					rematch.reach = reach;
				}

				var removeFrom = currentNode.prev;

				if (before) {
					removeFrom = addAfter(tokenList, removeFrom, before);
					pos += before.length;
				}

				removeRange(tokenList, removeFrom, removeCount);

				var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
				currentNode = addAfter(tokenList, removeFrom, wrapped);

				if (after) {
					addAfter(tokenList, currentNode, after);
				}

				if (removeCount > 1) {
					// at least one Token object was removed, so we have to do some rematching
					// this can only happen if the current pattern is greedy
					matchGrammar(text, tokenList, grammar, currentNode.prev, pos, {
						cause: token + ',' + j,
						reach: reach
					});
				}
			}
		}
	}
}

/**
 * @typedef LinkedListNode
 * @property {T} value
 * @property {LinkedListNode<T> | null} prev The previous node.
 * @property {LinkedListNode<T> | null} next The next node.
 * @template T
 * @private
 */

/**
 * @template T
 * @private
 */
function LinkedList() {
	/** @type {LinkedListNode<T>} */
	var head = { value: null, prev: null, next: null };
	/** @type {LinkedListNode<T>} */
	var tail = { value: null, prev: head, next: null };
	head.next = tail;

	/** @type {LinkedListNode<T>} */
	this.head = head;
	/** @type {LinkedListNode<T>} */
	this.tail = tail;
	this.length = 0;
}

/**
 * Adds a new node with the given value to the list.
 * @param {LinkedList<T>} list
 * @param {LinkedListNode<T>} node
 * @param {T} value
 * @returns {LinkedListNode<T>} The added node.
 * @template T
 */
function addAfter(list, node, value) {
	// assumes that node != list.tail && values.length >= 0
	var next = node.next;

	var newNode = { value: value, prev: node, next: next };
	node.next = newNode;
	next.prev = newNode;
	list.length++;

	return newNode;
}
/**
 * Removes `count` nodes after the given node. The given node will not be removed.
 * @param {LinkedList<T>} list
 * @param {LinkedListNode<T>} node
 * @param {number} count
 * @template T
 */
function removeRange(list, node, count) {
	var next = node.next;
	for (var i = 0; i < count && next !== list.tail; i++) {
		next = next.next;
	}
	node.next = next;
	next.prev = node;
	list.length -= i;
}
/**
 * @param {LinkedList<T>} list
 * @returns {T[]}
 * @template T
 */
function toArray(list) {
	var array = [];
	var node = list.head.next;
	while (node !== list.tail) {
		array.push(node.value);
		node = node.next;
	}
	return array;
}


if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _;
}

// Get current script and highlight
var script = _.util.currentScript();

if (script) {
	_.filename = script.src;

	if (script.hasAttribute('data-manual')) {
		_.manual = true;
	}
}

function highlightAutomaticallyCallback() {
	if (!_.manual) {
		_.highlightAll();
	}
}

if (!_.manual) {
	// If the document state is "loading", then we'll use DOMContentLoaded.
	// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
	// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
	// might take longer one animation frame to execute which can create a race condition where only some plugins have
	// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
	// See https://github.com/PrismJS/prism/issues/2102
	var readyState = document.readyState;
	if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
		document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
	} else {
		if (window.requestAnimationFrame) {
			window.requestAnimationFrame(highlightAutomaticallyCallback);
		} else {
			window.setTimeout(highlightAutomaticallyCallback, 16);
		}
	}
}

return _;

})(_self);

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
*/

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
*/

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						/"|'/
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
		'string': {
			pattern: string,
			greedy: true
		},
		'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
		'important': /!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');

		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, markup.tag);
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-flags': /[a-z]+$/,
			'regex-delimiter': /^\/|\/$/
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document) {
		return;
	}

	var Prism = window.Prism;

	var LOADING_MESSAGE = 'Loading…';
	var FAILURE_MESSAGE = function (status, message) {
		return '✖ Error ' + status + ' while fetching file: ' + message;
	};
	var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

	var EXTENSIONS = {
		'js': 'javascript',
		'py': 'python',
		'rb': 'ruby',
		'ps1': 'powershell',
		'psm1': 'powershell',
		'sh': 'bash',
		'bat': 'batch',
		'h': 'c',
		'tex': 'latex'
	};

	var STATUS_ATTR = 'data-src-status';
	var STATUS_LOADING = 'loading';
	var STATUS_LOADED = 'loaded';
	var STATUS_FAILED = 'failed';

	var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])'
		+ ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

	var lang = /\blang(?:uage)?-([\w-]+)\b/i;

	/**
	 * Sets the Prism `language-xxxx` or `lang-xxxx` class to the given language.
	 *
	 * @param {HTMLElement} element
	 * @param {string} language
	 * @returns {void}
	 */
	function setLanguageClass(element, language) {
		var className = element.className;
		className = className.replace(lang, ' ') + ' language-' + language;
		element.className = className.replace(/\s+/g, ' ').trim();
	}


	Prism.hooks.add('before-highlightall', function (env) {
		env.selector += ', ' + SELECTOR;
	});

	Prism.hooks.add('before-sanity-check', function (env) {
		var pre = /** @type {HTMLPreElement} */ (env.element);
		if (pre.matches(SELECTOR)) {
			env.code = ''; // fast-path the whole thing and go to complete

			pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

			// add code element with loading message
			var code = pre.appendChild(document.createElement('CODE'));
			code.textContent = LOADING_MESSAGE;

			var src = pre.getAttribute('data-src');

			var language = env.language;
			if (language === 'none') {
				// the language might be 'none' because there is no language set;
				// in this case, we want to use the extension as the language
				var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
				language = EXTENSIONS[extension] || extension;
			}

			// set language classes
			setLanguageClass(code, language);
			setLanguageClass(pre, language);

			// preload the language
			var autoloader = Prism.plugins.autoloader;
			if (autoloader) {
				autoloader.loadLanguages(language);
			}

			// load file
			var xhr = new XMLHttpRequest();
			xhr.open('GET', src, true);
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					if (xhr.status < 400 && xhr.responseText) {
						// mark as loaded
						pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

						// highlight code
						code.textContent = xhr.responseText;
						Prism.highlightElement(code);

					} else {
						// mark as failed
						pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

						if (xhr.status >= 400) {
							code.textContent = FAILURE_MESSAGE(xhr.status, xhr.statusText);
						} else {
							code.textContent = FAILURE_EMPTY_MESSAGE;
						}
					}
				}
			};
			xhr.send(null);
		}
	});

	Prism.plugins.fileHighlight = {
		/**
		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
		 *
		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
		 *
		 * @param {ParentNode} [container=document]
		 */
		highlight: function highlight(container) {
			var elements = (container || document).querySelectorAll(SELECTOR);

			for (var i = 0, element; element = elements[i++];) {
				Prism.highlightElement(element);
			}
		}
	};

	var logged = false;
	/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
	Prism.fileHighlight = function () {
		if (!logged) {
			console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
			logged = true;
		}
		Prism.plugins.fileHighlight.highlight.apply(this, arguments);
	}

})();

