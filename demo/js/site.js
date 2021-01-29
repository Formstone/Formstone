/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});


/*! formstone v1.4.20-1 [core.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/**
 * @plugin
 * @name Core
 * @description Formstone Library core. Required for all plugins.
 */

/* global define */
/* global ga */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define(["jquery"], factory);
    } else {
      factory(jQuery);
    }
  }(function($) {

    "use strict";

    // Namespace

    var Win = typeof window !== "undefined" ? window : this,
      Doc = Win.document,
      Core = function() {
        this.Version = '1.4.20-1';
        this.Plugins = {};

        this.DontConflict = false;
        this.Conflicts = {
          fn: {}
        };
        this.ResizeHandlers = [];
        this.RAFHandlers = [];

        // Globals

        this.window = Win;
        this.$window = $(Win);
        this.document = Doc;
        this.$document = $(Doc);
        this.$body = null;

        this.windowWidth = 0;
        this.windowHeight = 0;
        this.fallbackWidth = 1024;
        this.fallbackHeight = 768;
        this.userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;
        this.isFirefox = /Firefox/i.test(this.userAgent);
        this.isChrome = /Chrome/i.test(this.userAgent);
        this.isSafari = /Safari/i.test(this.userAgent) && !this.isChrome;
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent);
        this.isIEMobile = /IEMobile/i.test(this.userAgent);
        this.isFirefoxMobile = (this.isFirefox && this.isMobile);
        this.transform = null;
        this.transition = null;

        this.support = {
          file: !!(window.File && window.FileList && window.FileReader),
          history: !!(window.history && window.history.pushState && window.history.replaceState),
          matchMedia: !!(window.matchMedia || window.msMatchMedia),
          pointer: !!(window.PointerEvent),
          raf: !!(window.requestAnimationFrame && window.cancelAnimationFrame),
          touch: !!(("ontouchstart" in window) || window.DocumentTouch && document instanceof window.DocumentTouch),
          transition: false,
          transform: false
        };
      },

      Functions = {

        /**
         * @method private
         * @name killEvent
         * @description Stops event action and bubble.
         * @param e [object] "Event data"
         */

        killEvent: function(e, immediate) {
          try {
            e.preventDefault();
            e.stopPropagation();

            if (immediate) {
              e.stopImmediatePropagation();
            }
          } catch (error) {
            //
          }
        },

        /**
         * @method private
         * @name killGesture
         * @description Stops gesture event action.
         * @param e [object] "Event data"
         */

        killGesture: function(e) {
          try {
            e.preventDefault();
          } catch (error) {
            //
          }
        },

        /**
         * @method private
         * @name lockViewport
         * @description Unlocks the viewport, preventing getsures.
         */

        lockViewport: function(plugin_namespace) {
          ViewportLocks[plugin_namespace] = true;

          if (!$.isEmptyObject(ViewportLocks) && !ViewportLocked) {
            if ($ViewportMeta.length) {
              $ViewportMeta.attr("content", ViewportMetaLocked);
            } else {
              $ViewportMeta = $("head").append('<meta name="viewport" content="' + ViewportMetaLocked + '">');
            }

            Formstone.$body.on(Events.gestureChange, Functions.killGesture)
              .on(Events.gestureStart, Functions.killGesture)
              .on(Events.gestureEnd, Functions.killGesture);

            ViewportLocked = true;
          }
        },

        /**
         * @method private
         * @name unlockViewport
         * @description Unlocks the viewport, allowing getsures.
         */

        unlockViewport: function(plugin_namespace) {
          if (typeof ViewportLocks[plugin_namespace] !== 'undefined') {
            delete ViewportLocks[plugin_namespace];
          }

          if ($.isEmptyObject(ViewportLocks) && ViewportLocked) {
            if ($ViewportMeta.length) {
              if (ViewportMetaOriginal) {
                $ViewportMeta.attr("content", ViewportMetaOriginal);
              } else {
                $ViewportMeta.remove();
              }
            }

            Formstone.$body.off(Events.gestureChange)
              .off(Events.gestureStart)
              .off(Events.gestureEnd);

            ViewportLocked = false;
          }
        },

        /**
         * @method private
         * @name startTimer
         * @description Starts an internal timer.
         * @param timer [int] "Timer ID"
         * @param time [int] "Time until execution"
         * @param callback [function] "Function to execute"
         * @return [int] "Timer ID"
         */

        startTimer: function(timer, time, callback, interval) {
          Functions.clearTimer(timer);

          return (interval) ? setInterval(callback, time) : setTimeout(callback, time);
        },

        /**
         * @method private
         * @name clearTimer
         * @description Clears an internal timer.
         * @param timer [int] "Timer ID"
         */

        clearTimer: function(timer, interval) {
          if (timer) {
            if (interval) {
              clearInterval(timer);
            } else {
              clearTimeout(timer);
            }

            timer = null;
          }
        },

        /**
         * @method private
         * @name sortAsc
         * @description Sorts an array (ascending).
         * @param a [mixed] "First value"
         * @param b [mixed] "Second value"
         * @return Difference between second and first values
         */

        sortAsc: function(a, b) {
          return (parseInt(a, 10) - parseInt(b, 10));
        },

        /**
         * @method private
         * @name sortDesc
         * @description Sorts an array (descending).
         * @param a [mixed] "First value"
         * @param b [mixed] "Second value"
         * @return Difference between second and first values
         */

        sortDesc: function(a, b) {
          return (parseInt(b, 10) - parseInt(a, 10));
        },

        /**
         * @method private
         * @name decodeEntities
         * @description Decodes HTML.
         * @param string [string] "String to decode"
         * @return Decoded string
         */

        decodeEntities: function(string) {
          // http://stackoverflow.com/a/1395954
          var el = Formstone.document.createElement("textarea");
          el.innerHTML = string;

          return el.value;
        },

        /**
         * @method private
         * @name parseGetParams
         * @description Returns keyed object containing all GET query parameters
         * @param url [string] "URL to parse"
         * @return [object] "Keyed query params"
         */

        parseQueryString: function(url) {
          var params = {},
            parts = url.slice(url.indexOf("?") + 1).split("&");

          for (var i = 0; i < parts.length; i++) {
            var part = parts[i].split("=");
            params[part[0]] = part[1];
          }

          return params;
        }
      },

      Formstone = new Core(),

      // Deferred ready

      $Ready = $.Deferred(),

      // Classes

      Classes = {
        base: "{ns}",
        element: "{ns}-element"
      },

      // Events

      Events = {
        namespace: ".{ns}",
        beforeUnload: "beforeunload.{ns}",
        blur: "blur.{ns}",
        change: "change.{ns}",
        click: "click.{ns}",
        dblClick: "dblclick.{ns}",
        drag: "drag.{ns}",
        dragEnd: "dragend.{ns}",
        dragEnter: "dragenter.{ns}",
        dragLeave: "dragleave.{ns}",
        dragOver: "dragover.{ns}",
        dragStart: "dragstart.{ns}",
        drop: "drop.{ns}",
        error: "error.{ns}",
        focus: "focus.{ns}",
        focusIn: "focusin.{ns}",
        focusOut: "focusout.{ns}",
        gestureChange: "gesturechange.{ns}",
        gestureStart: "gesturestart.{ns}",
        gestureEnd: "gestureend.{ns}",
        input: "input.{ns}",
        keyDown: "keydown.{ns}",
        keyPress: "keypress.{ns}",
        keyUp: "keyup.{ns}",
        load: "load.{ns}",
        mouseDown: "mousedown.{ns}",
        mouseEnter: "mouseenter.{ns}",
        mouseLeave: "mouseleave.{ns}",
        mouseMove: "mousemove.{ns}",
        mouseOut: "mouseout.{ns}",
        mouseOver: "mouseover.{ns}",
        mouseUp: "mouseup.{ns}",
        panStart: "panstart.{ns}",
        pan: "pan.{ns}",
        panEnd: "panend.{ns}",
        resize: "resize.{ns}",
        scaleStart: "scalestart.{ns}",
        scaleEnd: "scaleend.{ns}",
        scale: "scale.{ns}",
        scroll: "scroll.{ns}",
        select: "select.{ns}",
        swipe: "swipe.{ns}",
        touchCancel: "touchcancel.{ns}",
        touchEnd: "touchend.{ns}",
        touchLeave: "touchleave.{ns}",
        touchMove: "touchmove.{ns}",
        touchStart: "touchstart.{ns}"
      },

      ResizeTimer = null,
      Debounce = 20,

      $ViewportMeta,
      ViewportMetaOriginal,
      ViewportMetaLocked,
      ViewportLocks = [],
      ViewportLocked = false;

    /**
     * @method
     * @name NoConflict
     * @description Resolves plugin namespace conflicts
     * @example Formstone.NoConflict();
     */

    Core.prototype.NoConflict = function() {
      Formstone.DontConflict = true;

      for (var i in Formstone.Plugins) {
        if (Formstone.Plugins.hasOwnProperty(i)) {
          $[i] = Formstone.Conflicts[i];
          $.fn[i] = Formstone.Conflicts.fn[i];
        }
      }
    };

    /**
     * @method
     * @name Ready
     * @description Replacement for jQuery ready
     * @param e [object] "Event data"
     */

    Core.prototype.Ready = function(fn) {
      if (
        Formstone.document.readyState === "complete" ||
        (Formstone.document.readyState !== "loading" && !Formstone.document.documentElement.doScroll)
      ) {
        fn();
      } else {
        Formstone.document.addEventListener("DOMContentLoaded", fn);
      }
    };

    /**
     * @method
     * @name Plugin
     * @description Builds a plugin and registers it with jQuery.
     * @param namespace [string] "Plugin namespace"
     * @param settings [object] "Plugin settings"
     * @return [object] "Plugin properties. Includes `defaults`, `classes`, `events`, `functions`, `methods` and `utilities` keys"
     * @example Formstone.Plugin("namespace", { ... });
     */

    Core.prototype.Plugin = function(namespace, settings) {
      Formstone.Plugins[namespace] = (function(namespace, settings) {

        var namespaceDash = "fs-" + namespace,
          namespaceDot = "fs." + namespace,
          namespaceClean = "fs" + namespace.replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
            return p1 + p2.toUpperCase();
          });

        /**
         * @method private
         * @name initialize
         * @description Creates plugin instance by adding base classname, creating data and scoping a _construct call.
         * @param options [object] <{}> "Instance options"
         */

        function initialize(options) {
          // Maintain Chain

          var hasOptions = (typeof options === "object"),
            args = Array.prototype.slice.call(arguments, (hasOptions ? 1 : 0)),
            $targets = this,
            $postTargets = $(),
            $element,
            i,
            count;

          // Extend Defaults

          options = $.extend(true, {}, settings.defaults || {}, (hasOptions ? options : {}));

          // All targets

          for (i = 0, count = $targets.length; i < count; i++) {
            $element = $targets.eq(i);

            // Gaurd Against Exiting Instances

            if (!getData($element)) {

              // Extend w/ Local Options

              settings.guid++;

              var guid = "__" + settings.guid,
                rawGuid = settings.classes.raw.base + guid,
                locals = $element.data(namespace + "-options"),
                data = $.extend(true, {
                  $el: $element,
                  guid: guid,
                  numGuid: settings.guid,
                  rawGuid: rawGuid,
                  dotGuid: "." + rawGuid
                }, options, (typeof locals === "object" ? locals : {}));

              // Cache Instance

              $element.addClass(settings.classes.raw.element)
                .data(namespaceClean, data);

              // Constructor

              settings.methods._construct.apply($element, [data].concat(args));

              // Post Constructor

              $postTargets = $postTargets.add($element);
            }

          }

          // Post targets

          for (i = 0, count = $postTargets.length; i < count; i++) {
            $element = $postTargets.eq(i);

            // Post Constructor

            settings.methods._postConstruct.apply($element, [getData($element)]);
          }

          return $targets;
        }

        /**
         * @method private
         * @name destroy
         * @description Removes plugin instance by scoping a _destruct call, and removing the base classname and data.
         * @param data [object] <{}> "Instance data"
         */

        /**
         * @method widget
         * @name destroy
         * @description Removes plugin instance.
         * @example $(".target").{ns}("destroy");
         */

        function destroy(data) {
          settings.functions.iterate.apply(this, [settings.methods._destruct].concat(Array.prototype.slice.call(arguments, 1)));

          this.removeClass(settings.classes.raw.element)
            .removeData(namespaceClean);
        }

        /**
         * @method private
         * @name getData
         * @description Creates class selector from text.
         * @param $element [jQuery] "Target jQuery object"
         * @return [object] "Instance data"
         */

        function getData($el) {
          return $el.data(namespaceClean);
        }

        /**
         * @method private
         * @name delegateWidget
         * @description Delegates public methods.
         * @param method [string] "Method to execute"
         * @return [jQuery] "jQuery object"
         */

        function delegateWidget(method) {

          // If jQuery object

          if (this instanceof $) {

            var _method = settings.methods[method];

            // Public method OR false

            if (typeof method === "object" || !method) {

              // Initialize

              return initialize.apply(this, arguments);
            } else if (_method && method.indexOf("_") !== 0) {

              // Wrap Public Methods

              var args = [_method].concat(Array.prototype.slice.call(arguments, 1));

              return settings.functions.iterate.apply(this, args);
            }

            return this;
          }
        }

        /**
         * @method private
         * @name delegateUtility
         * @description Delegates utility methods.
         * @param method [string] "Method to execute"
         */

        function delegateUtility(method) {

          // public utility OR utility init OR false

          var _method = settings.utilities[method] || settings.utilities._initialize || false;

          if (_method) {

            // Wrap Utility Methods

            var args = Array.prototype.slice.call(arguments, (typeof method === "object" ? 0 : 1));

            return _method.apply(window, args);
          }
        }

        /**
         * @method utility
         * @name defaults
         * @description Extends plugin default settings; effects instances created hereafter.
         * @param options [object] <{}> "New plugin defaults"
         * @example $.{ns}("defaults", { ... });
         */

        function defaults(options) {
          settings.defaults = $.extend(true, settings.defaults, options || {});
        }

        /**
         * @method private
         * @name iterate
         * @description Loops scoped function calls over jQuery object with instance data as first parameter.
         * @param func [function] "Function to execute"
         * @return [jQuery] "jQuery object"
         */

        function iterate(fn) {
          var $targets = this,
            args = Array.prototype.slice.call(arguments, 1);

          for (var i = 0, count = $targets.length; i < count; i++) {
            var $element = $targets.eq(i),
              data = getData($element) || {};

            if (typeof data.$el !== "undefined") {
              fn.apply($element, [data].concat(args));
            }
          }

          return $targets;
        }

        // Locals

        settings.initialized = false;
        settings.priority = settings.priority || 10;

        // Namespace Classes & Events

        settings.classes = namespaceProperties("classes", namespaceDash, Classes, settings.classes);
        settings.events = namespaceProperties("events", namespace, Events, settings.events);

        // Extend Functions

        settings.functions = $.extend({
          getData: getData,
          iterate: iterate
        }, Functions, settings.functions);

        // Extend Methods

        settings.methods = $.extend(true, {

          // Private Methods

          _construct: $.noop, // Constructor
          _postConstruct: $.noop, // Post Constructor
          _destruct: $.noop, // Destructor
          _resize: false, // Window resize

          // Public Methods

          destroy: destroy

        }, settings.methods);

        // Extend Utilities

        settings.utilities = $.extend(true, {

          // Private Utilities

          _initialize: false, // First Run
          _delegate: false, // Custom Delegation

          // Public Utilities

          defaults: defaults

        }, settings.utilities);

        // Register Plugin

        // Widget

        if (settings.widget) {

          // Store conflicting namesapaces
          Formstone.Conflicts.fn[namespace] = $.fn[namespace];

          // Widget Delegation: $(".target").fsPlugin("method", ...);
          $.fn[namespaceClean] = delegateWidget;

          if (!Formstone.DontConflict) {

            // $(".target").plugin("method", ...);
            $.fn[namespace] = $.fn[namespaceClean];
          }
        }

        // Utility

        Formstone.Conflicts[namespace] = $[namespace];

        // Utility Delegation: $.fsPlugin("method", ... );
        $[namespaceClean] = settings.utilities._delegate || delegateUtility;

        if (!Formstone.DontConflict) {

          // $.plugin("method", ... );
          $[namespace] = $[namespaceClean];
        }

        // Run Setup

        settings.namespace = namespace;
        settings.namespaceClean = namespaceClean;

        settings.guid = 0;

        // Resize handler

        if (settings.methods._resize) {
          Formstone.ResizeHandlers.push({
            namespace: namespace,
            priority: settings.priority,
            callback: settings.methods._resize
          });

          // Sort handlers on push
          Formstone.ResizeHandlers.sort(sortPriority);
        }

        // RAF handler

        if (settings.methods._raf) {
          Formstone.RAFHandlers.push({
            namespace: namespace,
            priority: settings.priority,
            callback: settings.methods._raf
          });

          // Sort handlers on push
          Formstone.RAFHandlers.sort(sortPriority);
        }

        return settings;
      })(namespace, settings);

      return Formstone.Plugins[namespace];
    };

    // Namespace Properties

    function namespaceProperties(type, namespace, globalProps, customProps) {
      var _props = {
          raw: {}
        },
        i;

      customProps = customProps || {};

      for (i in customProps) {
        if (customProps.hasOwnProperty(i)) {
          if (type === "classes") {

            // Custom classes
            _props.raw[customProps[i]] = namespace + "-" + customProps[i];
            _props[customProps[i]] = "." + namespace + "-" + customProps[i];
          } else {
            // Custom events
            _props.raw[i] = customProps[i];
            _props[i] = customProps[i] + "." + namespace;
          }
        }
      }

      for (i in globalProps) {
        if (globalProps.hasOwnProperty(i)) {
          if (type === "classes") {

            // Global classes
            _props.raw[i] = globalProps[i].replace(/{ns}/g, namespace);
            _props[i] = globalProps[i].replace(/{ns}/g, "." + namespace);
          } else {
            // Global events
            _props.raw[i] = globalProps[i].replace(/.{ns}/g, "");
            _props[i] = globalProps[i].replace(/{ns}/g, namespace);
          }
        }
      }

      return _props;
    }

    // Set Browser Prefixes

    function setBrowserPrefixes() {
      var transitionEvents = {
          "WebkitTransition": "webkitTransitionEnd",
          "MozTransition": "transitionend",
          "OTransition": "otransitionend",
          "transition": "transitionend"
        },
        transitionProperties = [
          "transition",
          "-webkit-transition"
        ],
        transformProperties = {
          'transform': 'transform',
          'MozTransform': '-moz-transform',
          'OTransform': '-o-transform',
          'msTransform': '-ms-transform',
          'webkitTransform': '-webkit-transform'
        },
        transitionEvent = "transitionend",
        transitionProperty = "",
        transformProperty = "",
        testDiv = document.createElement("div"),
        i;

      for (i in transitionEvents) {
        if (transitionEvents.hasOwnProperty(i) && i in testDiv.style) {
          transitionEvent = transitionEvents[i];
          Formstone.support.transition = true;
          break;
        }
      }

      Events.transitionEnd = transitionEvent + ".{ns}";

      for (i in transitionProperties) {
        if (transitionProperties.hasOwnProperty(i) && transitionProperties[i] in testDiv.style) {
          transitionProperty = transitionProperties[i];
          break;
        }
      }

      Formstone.transition = transitionProperty;

      for (i in transformProperties) {
        if (transformProperties.hasOwnProperty(i) && transformProperties[i] in testDiv.style) {
          Formstone.support.transform = true;
          transformProperty = transformProperties[i];
          break;
        }
      }

      Formstone.transform = transformProperty;
    }

    // Window resize

    function onWindowResize() {
      Formstone.windowWidth = Formstone.$window.width();
      Formstone.windowHeight = Formstone.$window.height();

      ResizeTimer = Functions.startTimer(ResizeTimer, Debounce, handleWindowResize);
    }

    function handleWindowResize() {
      for (var i in Formstone.ResizeHandlers) {
        if (Formstone.ResizeHandlers.hasOwnProperty(i)) {
          Formstone.ResizeHandlers[i].callback.call(window, Formstone.windowWidth, Formstone.windowHeight);
        }
      }
    }

    Formstone.$window.on("resize.fs", onWindowResize);
    onWindowResize();

    // RAF

    function handleRAF() {
      if (Formstone.support.raf) {
        Formstone.window.requestAnimationFrame(handleRAF);

        for (var i in Formstone.RAFHandlers) {
          if (Formstone.RAFHandlers.hasOwnProperty(i)) {
            Formstone.RAFHandlers[i].callback.call(window);
          }
        }
      }
    }

    handleRAF();

    // Sort Priority

    function sortPriority(a, b) {
      return (parseInt(a.priority) - parseInt(b.priority));
    }

    // Document Ready

    Formstone.Ready(function() {
      Formstone.$body = $("body");

      $("html").addClass( (Formstone.support.touch) ? "touchevents" : "no-touchevents" );

      // Viewport
      $ViewportMeta = $('meta[name="viewport"]');
      ViewportMetaOriginal = ($ViewportMeta.length) ? $ViewportMeta.attr("content") : false;
      ViewportMetaLocked = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';

      $Ready.resolve();
    });

    // Custom Events

    Events.clickTouchStart = Events.click + " " + Events.touchStart;

    // Browser Prefixes

    setBrowserPrefixes();

    window.Formstone = Formstone;

    return Formstone;

  })

);

/*! formstone v1.4.20-1 [analytics.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./mediaquery"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name setup
     * @description Setup plugin.
     */

    function setup() {
      $Body = Formstone.$body;
    }

    /**
     * @method private
     * @name setup
     * @description Setup plugin.
     */

    function resize() {
      if (Defaults.scrollDepth) {
        setScrollDepths();
      }
    }

    /**
     * @method private
     * @name delegate
     */

    function delegate() {
      if (arguments.length && typeof arguments[0] !== "object") {
        if (arguments[0] === "destroy") {
          destroy.apply(this);
        } else {
          var args = Array.prototype.slice.call(arguments, 1);

          switch (arguments[0]) {
            case "pageview":
              pushPageView.apply(this, args);
              break;
            case "event":
              pushEvent.apply(this, args);
              break;
            default:
              break;
          }
        }
      } else {
        init.apply(this, arguments);
      }

      return null;
    }

    /**
     * @method private
     * @name init
     * @description Initializes plugin
     * @param opts [object] "Initialization options"
     */

    function init(options) {
      // Attach Analytics events
      if (!Initialized && $Body && $Body.length) {
        Initialized = true;

        Defaults = $.extend(Defaults, options || {});

        if (Defaults.autoEvents) {
          $Body.find("a").not("[" + DataKeyFull + "]").each(buildEvent);
        }

        if (Defaults.scrollDepth) {
          setScrollDepths();
          $Window.on(Events.scroll, trackScroll)
            .one(Events.load, resize);
        }

        $Body.on(Events.click, "*[" + DataKeyFull + "]", trackEvent);
      }
    }

    /**
     * @method private
     * @name destroy
     * @description Destroys plugin
     */

    function destroy() {
      if (Initialized && $Body && $Body.length) {
        $Window.off(Events.namespace);
        $Body.off(Events.namespace);

        Initialized = false;
      }
    }

    /**
     * @method private
     * @name buildEvent
     * @description Build events for email, phone, file types & external links
     */

    function buildEvent() {
      var $target = $(this),
        href = (typeof $target[0].href !== "undefined") ? $target[0].href : "",
        domain = document.domain.split(".").reverse(),
        internal = href.match(domain[1] + "." + domain[0]) !== null,
        eventData;

      if (href.match(/^mailto\:/i)) {
        // Email
        eventData = "Email, Click, " + href.replace(/^mailto\:/i, "");
      } else if (href.match(/^tel\:/i)) {
        // Action
        eventData = "Telephone, Click, " + href.replace(/^tel\:/i, "");
      } else if (href.match(Defaults.fileTypes)) {
        // Files
        var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
        eventData = "File, Download:" + extension[0] + ", " + href.replace(/ /g, "-");
      } else if (!internal) {
        // External Link
        eventData = "ExternalLink, Click, " + href;
      }

      if (eventData) {
        $target.attr(DataKeyFull, eventData);
      }
    }

    /**
     * @method private
     * @name trackScroll
     * @description Debounces scroll tracking
     */

    function trackScroll(e) {
      Functions.startTimer(ScrollTimer, 250, doTrackScroll);
    }

    /**
     * @method private
     * @name doTrackScroll
     * @description Handle scroll tracking
     */

    function doTrackScroll() {
      var scrollTop = $Window.scrollTop() + Formstone.windowHeight,
        step = (1 / Defaults.scrollStops),
        depth = step,
        key;

      for (var i = 1; i <= Defaults.scrollStops; i++) {
        key = (Math.round(100 * depth)).toString();

        if (!ScrollDepths[ScrollWidth][key].passed && scrollTop > ScrollDepths[ScrollWidth][key].edge) {
          ScrollDepths[ScrollWidth][key].passed = true;

          // Push data
          var eventData = $.extend(Defaults.scrollFields, {
            eventCategory: "ScrollDepth",
            eventAction: ScrollWidth,
            eventLabel: key,
            nonInteraction: true
          });

          pushEvent(eventData);
        }

        depth += step;
      }
    }

    /**
     * @method private
     * @name setScrollDepths
     * @description Sets scroll depths at specific widths
     */

    function setScrollDepths() {
      var mqState = $.mediaquery("state"),
        bodyHeight = $Body.outerHeight(),
        newDepths = {},
        step = (1 / Defaults.scrollStops),
        depth = step,
        top = 0,
        key;

      if (mqState.minWidth) {
        ScrollWidth = "MinWidth:" + mqState.minWidth + "px";
      }

      for (var i = 1; i <= Defaults.scrollStops; i++) {
        top = parseInt(bodyHeight * depth);
        key = (Math.round(100 * depth)).toString();

        newDepths[key] = {
          edge: (key === "100") ? top - 10 : top,
          passsed: (ScrollDepths[ScrollWidth] && ScrollDepths[ScrollWidth][key]) ? ScrollDepths[ScrollWidth][key].passed : false
        };

        depth += step;
      }

      ScrollDepths[ScrollWidth] = newDepths;
    }

    /**
     * @method private
     * @name trackEvent
     * @description Tracks event
     * @param e [object] "Event data"
     */

    function trackEvent(e) {
      var $target = $(this),
        url = $target.attr("href"),
        data = $target.data(DataKey).split(",");

      if (Defaults.eventCallback) {
        e.preventDefault();
      }

      // Trim data
      for (var i in data) {
        if (data.hasOwnProperty(i)) {
          data[i] = $.trim(data[i]);
        }
      }

      // Push data
      pushEvent({
        eventCategory: data[0],
        eventAction: data[1],
        eventLabel: (data[2] || url),
        eventValue: data[3],
        nonInteraction: data[4],
      }, $target);
    }

    /**
     * @method private
     * @name pushEvent
     * @description Push event to Universal Analytics
     */

    function pushEvent(data, $target) {
      // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference
      var loc = Window.location,
        evt = $.extend({
          hitType: "event"
        }, data);

      // If active link, launch that ish!
      if (typeof $target !== "undefined" && !$target.attr("data-analytics-stop")) {
        var href = (typeof $target[0].href !== "undefined") ? $target[0].href : "",
          url = (!href.match(/^mailto\:/i) && !href.match(/^tel\:/i) && href.indexOf(":") < 0) ? Window.location.protocol + "//" + Window.location.hostname + "/" + href : href;

        if (url !== "") {
          // Check Window target
          var target = $target.attr("target");
          if (target) {
            Window.open(url, target);
          } else if (Defaults.eventCallback) {
            var callbackType = "hitCallback"; // GUA ? "hitCallback" : "eventCallback";

            evt[callbackType] = function() {
              if (LinkTimer) {
                Functions.clearTimer(LinkTimer);

                openURL(url);
              }
            };

            // Event timeout
            LinkTimer = Functions.startTimer(LinkTimer, Defaults.eventTimeout, evt[callbackType]);
          }
        }
      }

      push(evt);
    }

    /**
     * @method private
     * @name pushPageView
     * @description Push page view to Universal Analytics
     */

    function pushPageView(data) {
      var pageView = $.extend({
        hitType: "pageview"
      }, data);

      push(pageView);
    }

    /**
     * @method private
     * @name push
     * @description Push data to Universal Analytics
     */

    function push(data) {
      if (typeof Window.ga === "function" && typeof Window.ga.getAll === "function") {
        var trackers = Window.ga.getAll();

        for (var i = 0, count = trackers.length; i < count; i++) {
          Window.ga(trackers[i].get("name") + ".send", data);
        }
      }
    }

    /**
     * @method private
     * @name openURL
     * @description Launch a url
     */
    function openURL(url) {
      document.location = url;
    }

    /**
     * @plugin
     * @name Analytics
     * @description A jQuery plugin for Google Universal Analytics Events.
     * @type utility
     * @main analytics.js
     * @dependency jQuery
     * @dependency core.js
     * @dependency mediaquery.js
     */

    var Plugin = Formstone.Plugin("analytics", {
        methods: {
          _resize: resize
        },
        utilities: {
          _delegate: delegate
        }
      }),

      /**
       * @options
       * @param autoEvents [boolean] <false> "Flag to bind auto-events to mailto, tel, files and external links"
       * @param fileTypes [regex] <> "File types for binding auto-events"
       * @param eventCallback [boolean] <false> "Flag to use event callbacks when navigating"
       * @param eventTimeout [int] <1000> "Event failure timeout"
       * @param scrollDepth [boolean] <false> "Flag to track scroll depth events"
       * @param scrollStops [int] <5> "Number of scroll increments to track"
       * @param scrollFields [object] <{}> "Additional event fields for scroll depth events"
       */

      Defaults = {
        autoEvents: false,
        fileTypes: /\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,
        eventCallback: false,
        eventTimeout: 1000,
        scrollDepth: false,
        scrollStops: 5,
        scrollFields: {}
      },

      // Localize References

      Window = Formstone.window,
      $Window = Formstone.$window,
      $Body = null,

      Functions = Plugin.functions,
      Events = Plugin.events,

      // Internal

      Initialized = false,
      DataKey = "analytics-event",
      DataKeyFull = "data-" + DataKey,

      ScrollDepths = {},
      ScrollTimer = null,
      ScrollWidth = "Site", // default value, non-responsive
      LinkTimer = null;

    // Setup

    Formstone.Ready(setup);

  })

);

/*! formstone v1.4.20-1 [asap.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */
/* global ga */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./analytics"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name initialize
     * @description Initializes plugin.
     * @param opts [object] "Plugin options"
     */

    function initialize(options) {
      if (Instance || !Formstone.support.history) {
        return;
      }

      $Body = Formstone.$body;

      Instance = $.extend(Defaults, options);

      if (Instance.render === $.noop) {
        Instance.render = renderState;
      }

      if (Instance.transitionOut === $.noop) {
        Instance.transitionOut = function() {
          return $.Deferred().resolve();
        };
      }

      // Initial state
      if (history.state) {
        CurrentID = history.state.id;
        CurrentURL = history.state.url;
      } else {
        CurrentURL = window.location.href;

        replaceState(CurrentID, CurrentURL);
      }

      // Bind state events
      $Window.on(Events.popState, onPop);

      enable();
    }

    /**
     * @method private
     * @name disable
     * @description Disable ASAP
     * @example $.asap("enable");
     */

    function disable() {
      if ($Body && $Body.hasClass(RawClasses.base)) {
        $Body.off(Events.click)
          .removeClass(RawClasses.base);
      }
    }

    /**
     * @method private
     * @name enable
     * @description Enables ASAP
     * @example $.asap("enable");
     */

    function enable() {
      if ($Body && !$Body.hasClass(RawClasses.base)) {
        $Body.on(Events.click, Instance.selector, onClick)
          .addClass(RawClasses.base);
      }
    }

    /**
     * @method private
     * @name onClick
     * @description Handles click events
     * @param e [object] "Event data"
     */

    function onClick(e) {
      var url = e.currentTarget;

      // Ignore everything but normal click
      if (
        (e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) ||
        (window.location.protocol !== url.protocol || window.location.host !== url.host) || url.target === "_blank"
      ) {
        return;
      }

      // Update state on hash change
      if (url.hash && (url.href.replace(url.hash, "") === window.location.href.replace(location.hash, "") || url.href === window.location.href + "#")) {
        return;
      }

      // Ignore certain file types
      if (url.href.match(Instance.ignoreTypes)) {
        return;
      }

      Functions.killEvent(e);
      e.stopImmediatePropagation();

      if (url.href !== CurrentURL) {
        requestURL(url.href, true);
      }
    }

    /**
     * @method private
     * @name onPop
     * @description Handles history navigation events
     * @param e [object] "Event data"
     */

    function onPop(e) {
      if (Request) {
        Request.abort();
      }

      var state = e.originalEvent.state;
      // direction = (state.id > CurrentID) ? "forward" : "back";

      if (state) {
        CurrentID = state.id;

        if (state.url !== CurrentURL) {
          requestURL(state.url, false);
        }
      }
    }

    /**
     * @method private
     * @name requestURL
     * @description Requests new content via AJAX
     * @param url [string] "URL to load"
     * @param doPush [boolean] "Flag to push to stack"
     */

    function requestURL(url, doPush) {
      if (Request) {
        Request.abort();
      }

      // Fire request event
      $Window.trigger(Events.requested, [doPush]);

      // Get transition out deferred
      Instance.transitionOutDeferred = Instance.transitionOut.apply(Window, [false]);

      var parsed = parseURL(url),
        params = parsed.params,
        hash = parsed.hash,
        cleanURL = parsed.clean,
        error = "User error",
        response = null,
        requestDeferred = $.Deferred();

      params[Instance.requestKey] = true;

      // Request new content
      Request = $.ajax({
        url: cleanURL,
        data: params,
        dataType: "json",
        cache: Instance.cache,
        xhr: function() {
          // custom xhr
          var xhr = new Window.XMLHttpRequest();

          /*
          //Upload progress ?
          xhr.upload.addEventListener("progress", function(e) {
            if (e.lengthComputable) {
              var percent = (e.loaded / e.total) / 2;
              $window.trigger(Events.progress, [ percent ]);
            }
          }, false);
          */

          //Download progress
          xhr.addEventListener("progress", function(e) {
            if (e.lengthComputable) {
              var percent = e.loaded / e.total;
              $Window.trigger(Events.progress, [percent]);
            }
          }, false);

          return xhr;
        },
        success: function(resp, status, jqXHR) {
          response = (typeof resp === "string") ? $.parseJSON(resp) : resp;

          // handle redirects - requires passing new location with json response
          if (resp.location) {
            url = resp.location;

            parsed = parseURL(url);
            hash = parsed.hash;
          }

          requestDeferred.resolve();
        },
        error: function(jqXHR, status, err) {
          error = err;

          requestDeferred.reject();
        }
      });

      $.when(requestDeferred, Instance.transitionOutDeferred).done(function() {
        processResponse(parsed, response, doPush);
      }).fail(function() {
        $Window.trigger(Events.failed, [error]);
      });
    }

    /**
     * @method private
     * @name processResponse
     * @description Processes a state
     * @param parsedURL [object] "Parsed URL"
     * @param data [object] "State Data"
     * @param doPush [boolean] "Flag to replace or add state"
     */

    function processResponse(parsedURL, data, doPush) {
      // Fire load event
      $Window.trigger(Events.loaded, [data]);

      // Trigger analytics page view
      if ($.fsAnalytics !== undefined) {
        $.fsAnalytics("pageview");
      }

      // Render before updating
      Instance.render.call(this, data, parsedURL.hash);

      // Update current url
      CurrentURL = parsedURL.url;

      if (doPush) {
        // Push new states to the stack
        CurrentID++;
        pushState(CurrentID, CurrentURL);
      }

      $Window.trigger(Events.rendered, [data]);

      var scrollTop = false;

      if (parsedURL.hash !== "") {
        var $el = $(parsedURL.hash);

        if ($el.length) {
          scrollTop = $el.offset().top;
        }
      }

      if (scrollTop !== false) {
        $Window.scrollTop(scrollTop);
      }
    }

    /**
     * @method private
     * @name renderHTML
     * @description Renders a new state
     * @param data [object] "State Data"
     * @param hash [string] "Hash"
     */

    function renderState(data, hash) {
      // Update DOM
      if (typeof data !== "undefined") {
        var $target;

        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            $target = $(key);

            if ($target.length) {
              $target.html(data[key]);
            }
          }
        }
      }
    }

    /**
     * @method private
     * @name loadURL
     * @description Loads new page
     * @param opts [url] <''> "URL to load"
     */

    /**
     * @method
     * @name load
     * @description Loads new page
     * @param opts [url] <''> "URL to load"
     * @example $.asap("load", "http://example.com/page/");
     */

    function loadURL(url) {
      if (!Instance || !Formstone.support.history) {
        window.location.href = url;
      } else if (url) {
        requestURL(url, true);
      }

      return;
    }

    /**
     * @method private
     * @name replaceURL
     * @description Updates current url in history
     * @param url [string] <''> "New URL"
     */

    /**
     * @method
     * @name replace
     * @description Updates current url in history
     * @param url [string] <''> "New URL"
     * @example $.asap("replace", "http://example.com/page/");
     */

    function replaceURL(url) {
      var state = history.state;

      CurrentURL = url;

      replaceState(state.id, url);
    }

    /**
     * @method private
     * @name pushState
     * @description Push state to the history stack
     * @param id [int] "State id"
     * @param url [string] "State url"
     */

    function pushState(id, url) {
      history.pushState({
        id: id,
        url: url
      }, Namespace + id, url);
    }

    /**
     * @method private
     * @name replaceState
     * @description Push state to the history stack
     * @param id [int] "State id"
     * @param url [string] "State url"
     */

    function replaceState(id, url) {
      history.replaceState({
        id: id,
        url: url
      }, Namespace + id, url);
    }

    /**
     * @method private
     * @name parseURL
     * @description Parse url parts
     * @param url [string] "URL to parse"
     */

    function parseURL(url) {
      var queryIndex = url.indexOf("?"),
        hashIndex = url.indexOf("#"),
        params = {},
        hash = "",
        cleanURL = url;

      if (hashIndex > -1) {
        hash = url.slice(hashIndex);
        cleanURL = url.slice(0, hashIndex);
      }

      if (queryIndex > -1) {
        params = Functions.parseQueryString(url.slice(queryIndex + 1, ((hashIndex > -1) ? hashIndex : url.length)));
        cleanURL = url.slice(0, queryIndex);
      }

      return {
        hash: hash,
        params: params,
        url: url,
        clean: cleanURL
      };
    }

    /**
     * @plugin
     * @name ASAP
     * @description A jQuery plugin for asynchronous page loads.
     * @type utility
     * @main asap.js
     * @dependency jQuery
     * @dependency core.js
     * @dependency analytics.js
     */

    var Plugin = Formstone.Plugin("asap", {
        utilities: {
          _initialize: initialize,

          load: loadURL,
          replace: replaceURL
        },

        /**
         * @events
         * @event requested.asap "Before request is made; triggered on window; Second parameter 'true' if pop event"
         * @event progress.asap "As request is loaded; triggered on window; Second parameter contains percentage complete"
         * @event loaded.asap "After request is loaded; triggered on window"
         * @event rendered.asap "After state is rendered; triggered on window"
         * @event failed.asap "After load error; triggered on window"
         */

        events: {
          failed: "failed",
          loaded: "loaded",
          popState: "popstate",
          progress: "progress",
          requested: "requested",
          rendered: "rendered"
        }
      }),

      /**
       * @options
       * @param cache [boolean] <true> "Flag to cache AJAX responses"
       * @param ignoreTypes [regex] <> "File types to ignore"
       * @param render [function] <$.noop> "Custom render function"
       * @param requestKey [string] <'fs-asap'> "GET variable for requests"
       * @param selector [string] <'a'> "Target DOM Selector"
       * @param transitionOut [function] <$.noop> "Transition timing callback; should return user defined $.Deferred object, which must eventually resolve"
       */

      Defaults = {
        cache: true,
        ignoreTypes: /\.(jpg|sjpg|jpeg|png|gif|zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,
        render: $.noop,
        requestKey: "fs-asap",
        selector: "a",
        transitionOut: $.noop
      },

      // Localize References

      $Window = Formstone.$window,
      Window = $Window[0],
      $Body,

      Functions = Plugin.functions,
      Events = Plugin.events,
      RawClasses = Plugin.classes.raw,

      // Internal

      Namespace = "asap-",
      CurrentURL = '',
      CurrentID = 1,
      Request,
      Instance;

  })

);

/*! formstone v1.4.20-1 [background.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./transition"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name setup
     * @description Setup plugin.
     */

    function setup() {
      scroll();
      $Window.on("scroll", scroll);
    }

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize() {
      Functions.iterate.call($Instances, resizeInstance);
      Functions.iterate.call($LazyInstances, cacheScrollPosition);
      Functions.iterate.call($LazyInstances, checkScrollPosition);
    }

    /**
     * @method private
     * @name scroll
     * @description Handles window scroll
     */

    function scroll() {
      ScrollTop = $Window.scrollTop() + Formstone.windowHeight;

      if (ScrollTop < 0) {
        ScrollTop = 0;
      }

      Functions.iterate.call($LazyInstances, checkScrollPosition);
    }

    /**
     * @method private
     * @name cacheInstances
     * @description Caches active instances
     */

    function cacheInstances() {
      $Instances = $(Classes.base);
      $LazyInstances = $(Classes.lazy);

      Functions.iterate.call($LazyInstances, cacheScrollPosition);
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      // guid
      data.youTubeGuid = 0;

      data.$container = $('<div class="' + RawClasses.container + '"></div>').appendTo(this);

      data.thisClasses = [RawClasses.base, data.customClass];
      data.visible = true;

      if (data.lazy) {
        data.visible = false;
        data.thisClasses.push(RawClasses.lazy);
      }

      this.addClass(data.thisClasses.join(" "));

      cacheInstances();

      if (data.lazy) {
        cacheScrollPosition(data);
        checkScrollPosition(data);
      } else {
        loadInitialSource(data);
      }
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      data.$container.remove();

      this.removeClass(data.thisClasses.join(" "))
        .off(Events.namespace);

      cacheInstances();
    }

    /**
     * @method private
     * @name loadInitialSource
     * @description Loads initial source.
     * @param data [object] "Instance data"
     */

    function loadInitialSource(data) {
      if (data.visible) {
        var source = data.source;
        data.source = null;

        loadMedia(data, source, true);
      }
    }

    /**
     * @method
     * @name load
     * @description Loads source media
     * @param source [string OR object] "Source image (string or object) or video (object)"
     * @example $(".target").background("load", "path/to/image.jpg");
     * @example $(".target").background("load", { "0px": "path/to/image-small.jpg", "980px": "path/to/image-large.jpg" });
     * @example $(".target").background("load", { "poster": "path/to/image.jpg", "webm": "path/to/video.webm", "mp4": "path/to/video.mp4", "ogg": "path/to/video.ogv" });
     */

    /**
     * @method private
     * @name loadMedia
     * @description Determines how to handle source media
     * @param data [object] "Instance data"
     * @param source [string OR object] "Source image (string) or video (object)"
     * @param firstLoad [boolean] "Flag for first load"
     */

    function loadMedia(data, source, firstLoad) {
      // Check if the source is new
      if (source !== data.source && data.visible) {
        data.source = source;
        data.responsive = false;
        data.isYouTube = false;

        // Check YouTube
        if (typeof source === "object" && typeof source.video === "string") {
          var parts = source.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);

          if (parts && parts.length >= 1) {
            data.isYouTube = true;
            data.videoId = parts[1];
          }
        }

        var isVideo = !data.isYouTube && (typeof source === "object" &&
          (source.hasOwnProperty("mp4") || source.hasOwnProperty("ogg") || source.hasOwnProperty("webm"))
        );

        data.video = data.isYouTube || isVideo;
        data.playing = false;

        if (data.isYouTube) {
          // youtube video
          data.playerReady = false;
          data.posterLoaded = false;

          loadYouTube(data, source, firstLoad);
        } else if (typeof source === "object" && source.hasOwnProperty("poster")) {
          // html5 video
          loadVideo(data, source, firstLoad);
        } else {
          var newSource = source;

          // Responsive image handling
          if (typeof source === "object") {
            var cache = [],
              keys = [],
              i;

            for (i in source) {
              if (source.hasOwnProperty(i)) {
                keys.push(i);
              }
            }

            keys.sort(Functions.sortAsc);

            for (i in keys) {
              if (keys.hasOwnProperty(i)) {
                cache.push({
                  width: parseInt(keys[i]),
                  url: source[keys[i]],
                  mq: Window.matchMedia("(min-width: " + parseInt(keys[i]) + "px)")
                });
              }
            }

            data.responsive = true;
            data.sources = cache;

            newSource = calculateSource(data);
          }

          loadImage(data, newSource, false, firstLoad);
        }
      } else {
        data.$el.trigger(Events.loaded);
      }
    }

    /**
     * @method private
     * @name calculateSource
     * @description Determines responsive source
     * @param data [object] "Instance data"
     * @return [string] "New source url"
     */

    function calculateSource(data) {
      var source = data.source;

      if (data.responsive) {
        source = data.sources[0].url;

        for (var i in data.sources) {
          if (data.sources.hasOwnProperty(i)) {
            if (Formstone.support.matchMedia) {
              if (data.sources[i].mq.matches) {
                source = data.sources[i].url;
              }
            } else {
              // Fallback, grab the first breakpoint that's large enough
              if (data.sources[i].width < Formstone.fallbackWidth) {
                source = data.sources[i].url;
              }
            }
          }
        }
      }

      return source;
    }

    /**
     * @method private
     * @name loadImage
     * @description Loads source image
     * @param data [object] "Instance data",
     * @param source [string] "Source image"
     * @param poster [boolean] "Flag for video poster"
     * @param firstLoad [boolean] "Flag for first load"
     */

    function loadImage(data, source, poster, firstLoad) {
      var imageClasses = [RawClasses.media, RawClasses.image, (firstLoad !== true ? RawClasses.animated : '')].join(" "),
        $media = $('<div class="' + imageClasses + '" aria-hidden="true"><img alt="' + data.alt + '"></div>'),
        $img = $media.find("img"),
        newSource = source;

      // Load image
      $img.one(Events.load, function() {
        if (BGSupport) {
          $media.addClass(RawClasses.native)
            .css({
              backgroundImage: "url('" + newSource + "')"
            });
        }

        // YTransition in
        $media.fsTransition({
          property: "opacity"
        },
        function() {
          if (!poster) {
            cleanMedia(data);
          }
        }).css({
          opacity: 1
        });

        doResizeInstance(data);

        if (!poster || firstLoad) {
          data.$el.trigger(Events.loaded);
        }
      }).one(Events.error, data, loadError)
        .attr("src", newSource);

      if (data.responsive) {
        $media.addClass(RawClasses.responsive);
      }

      data.$container.append($media);

      // Check if image is cached
      if ($img[0].complete || $img[0].readyState === 4) {
        $img.trigger(Events.load);
      }

      data.currentSource = newSource;
    }

    /**
     * @method private
     * @name loadVideo
     * @description Loads source video
     * @param data [object] "Instance data"
     * @param source [object] "Source video"
     * @param firstLoad [boolean] "Flag for first load"
     */

    function loadVideo(data, source, firstLoad) {
      if (data.source && data.source.poster) {
        loadImage(data, data.source.poster, true, true);

        firstLoad = false;
      }

      // if (!Formstone.isMobile) {
        var videoClasses = [RawClasses.media, RawClasses.video, (firstLoad !== true ? RawClasses.animated : '')].join(" "),
          html = '<div class="' + videoClasses + '" aria-hidden="true">';

        html += '<video playsinline';
        if (data.loop) {
          html += ' loop';
        }
        if (data.mute) {
          html += ' muted';
        }
        if (data.autoPlay) {
          html += ' autoplay';
        }
        html += '>';
        if (data.source.webm) {
          html += '<source src="' + data.source.webm + '" type="video/webm" />';
        }
        if (data.source.mp4) {
          html += '<source src="' + data.source.mp4 + '" type="video/mp4" />';
        }
        if (data.source.ogg) {
          html += '<source src="' + data.source.ogg + '" type="video/ogg" />';
        }
        html += '</video>';
        html += '</div>';

        var $media = $(html),
          $video = $media.find("video");

        $video.one(Events.loadedMetaData, function(e) {
          $media.fsTransition({
            property: "opacity"
          },
          function() {
            cleanMedia(data);
          }).css({
            opacity: 1
          });

          doResizeInstance(data);

          data.$el.trigger(Events.loaded);

          // Events
          if (data.autoPlay) {
            playVideo(data);
          }
        });

        data.$container.append($media);
      // }
    }

    /**
     * @method private
     * @name loadYouTube
     * @description Loads YouTube video
     * @param data [object] "Instance data"
     * @param source [string] "YouTube URL"
     */

    function loadYouTube(data, source, firstLoad) {
      if (!data.videoId) {
        var parts = source.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);
        data.videoId = parts[1];
      }

      if (!data.posterLoaded) {
        if (!data.source.poster) {
          data.source.poster = "//img.youtube.com/vi/" + data.videoId + "/0.jpg";
        }

        data.posterLoaded = true;
        loadImage(data, data.source.poster, true, firstLoad);

        firstLoad = false;
      }

      // if (!Formstone.isMobile) {
        if (!$("script[src*='youtube.com/iframe_api']").length) {
          $("head").append('<script src="//www.youtube.com/iframe_api"></script>');
        }

        if (!YouTubeReady) {
          YouTubeQueue.push({
            data: data,
            source: source
          });
        } else {
          var guid = data.guid + "_" + (data.youTubeGuid++),
            youTubeClasses = [RawClasses.media, RawClasses.embed, (firstLoad !== true ? RawClasses.animated : '')].join(" "),
            html = '<div class="' + youTubeClasses + '" aria-hidden="true">';

          html += '<div id="' + guid + '"></div>';
          html += '</div>';

          var $media = $(html),
            ytOptions = $.extend(true, {}, {
              controls: 0,
              rel: 0,
              showinfo: 0,
              wmode: "transparent",
              enablejsapi: 1,
              version: 3,
              playerapiid: guid,
              loop: (data.loop) ? 1 : 0,
              autoplay: 1,
              mute: 1,
              origin: Window.location.protocol + "//" + Window.location.host
            }, data.youtubeOptions);

          // For youtube auto so events fire, disabled by plugin
          ytOptions.autoplay = 1;

          data.$container.append($media);

          if (data.player) {
            data.oldPlayer = data.player;
            data.player = null;
          }

          data.player = new Window.YT.Player(guid, {
            videoId: data.videoId,
            playerVars: ytOptions,
            events: {
              onReady: function(e) {
                /* console.log("onReady", e); */

                data.playerReady = true;
                /* data.player.setPlaybackQuality("highres"); */

                if (data.mute) {
                  data.player.mute();
                }

                if (data.autoPlay) {
                  // make sure the video plays
                  data.player.playVideo();
                } else {
                  data.player.pauseVideo();
                }
              },
              onStateChange: function(e) {
                /* console.log("onStateChange", e); */

                // -1 = unstarted
                //  0 = ended
                //  1 = playing
                //  2 = paused
                //  3 = buffering
                //  4 =
                //  5 = cued

                if (!data.playing && e.data === Window.YT.PlayerState.PLAYING) {
                  data.playing = true;

                  $media.fsTransition({
                    property: "opacity"
                  },
                  function() {
                    cleanMedia(data);
                  }).css({
                    opacity: 1
                  });

                  doResizeInstance(data);

                  data.$el.trigger(Events.loaded);
                } else if (data.loop && data.playing && e.data === Window.YT.PlayerState.ENDED) {
                  // fix looping option
                  data.player.playVideo();
                }

                // Fix for Safari's overly secure security settings...
                data.$el.find(Classes.embed)
                  .addClass(RawClasses.ready);
              },
              onPlaybackQualityChange: function(e) {
                /* console.log("onPlaybackQualityChange", e); */
              },
              onPlaybackRateChange: function(e) {
                /* console.log("onPlaybackRateChange", e); */
              },
              onError: function(e) {
                /* console.log("onError", e); */
                loadError({
                  data: data
                });
              },
              onApiChange: function(e) {
                /* console.log("onApiChange", e); */
              }
            }
          });

          // Resize
          doResizeInstance(data);
        }
      // }
    }

    /**
     * @method private
     * @name cleanMedia
     * @description Cleans up old media
     * @param data [object] "Instance data"
     */

    function cleanMedia(data) {
      var $media = data.$container.find(Classes.media);

      if ($media.length >= 1) {
        $media.not(":last").remove();
        data.oldPlayer = null;
      }
    }

    /**
     * @method private
     * @name loadError
     * @description Error when resource fails to load.
     */

    function loadError(e) {
      var data = e.data;

      data.$el.trigger(Events.error);
    }

    /**
     * @method
     * @name unload
     * @description Unloads current media
     * @example $(".target").background("unload");
     */

    /**
     * @method private
     * @name uploadMedia
     * @description Unloads current media
     * @param data [object] "Instance data"
     */

    function unloadMedia(data) {
      var $media = data.$container.find(Classes.media);

      if ($media.length >= 1) {
        $media.fsTransition({
          property: "opacity"
        },
        function() {
          $media.remove();
          delete data.source;
        }).css({
          opacity: 0
        });
      }
    }

    /**
     * @method private
     * @name pauseVideo
     * @description Pauses target video
     * @param data [object] "Instance data"
     */

    /**
     * @method
     * @name pause
     * @description Pauses target video
     * @example $(".target").background("pause");
     */

    function pauseVideo(data) {
      if (data.video && data.playing) {
        if (data.isYouTube) {
          if (data.playerReady) {
            data.player.pauseVideo();
          } else {
            data.autoPlay = false;
          }
        } else {
          var $video = data.$container.find("video");

          if ($video.length) {
            $video[0].pause();
          }
        }

        data.playing = false;
      }
    }

    /**
     * @method private
     * @name playVideo
     * @description Plays target video
     * @param data [object] "Instance data"
     */

    /**
     * @method
     * @name play
     * @description Plays target video
     * @example $(".target").background("play");
     */

    function playVideo(data) {
      if (data.video && !data.playing) {
        if (data.isYouTube) {
          if (data.playerReady) {
            data.player.playVideo();
          } else {
            data.autoPlay = true;
          }
        } else {
          var $video = data.$container.find("video");

          if ($video.length) {
            $video[0].play();
          }

          data.playing = true;
        }
      }
    }

    /**
     * @method private
     * @name muteVideo
     * @description Mutes target video
     * @param data [object] "Instance data"
     */

    /**
     * @method
     * @name mute
     * @description Mutes target video
     * @example $(".target").background("mute");
     */

    function muteVideo(data) {
      if (data.video) {
        if (data.isYouTube && data.playerReady) {
          data.player.mute();
        } else {
          var $video = data.$container.find("video");

          if ($video.length) {
            $video[0].muted = true;
          }
        }
      }

      data.mute = true;
    }

    /**
     * @method private
     * @name unmuteVideo
     * @description Unmutes target video
     * @param data [object] "Instance data"
     */

    /**
     * @method
     * @name unmute
     * @description Unmutes target video
     * @example $(".target").background("unmute");
     */

    function unmuteVideo(data) {
      if (data.video) {
        if (data.isYouTube && data.playerReady) {
          data.player.unMute();
        } else {
          var $video = data.$container.find("video");

          if ($video.length) {
            $video[0].muted = false;
          }
        }

        data.playing = true;
      }

      data.mute = false;
    }

    /**
     * @method private
     * @name resizeInstance
     * @description Handle window resize event
     * @param data [object] "Instance data"
     */

    function resizeInstance(data) {
      if (data.visible) {
        if (data.responsive) {
          var newSource = calculateSource(data);

          if (newSource !== data.currentSource) {
            loadImage(data, newSource, false, true);
          } else {
            doResizeInstance(data);
          }
        } else {
          doResizeInstance(data);
        }
      }
    }

    /**
     * @method private
     * @name resize
     * @description Resize target instance
     * @example $(".target").background("resize");
     */

    /**
     * @method private
     * @name doResizeInstance
     * @description Resize target instance
     * @param data [object] "Instance data"
     */

    function doResizeInstance(data) {
      // Target all media
      var $all = data.$container.find(Classes.media);

      for (var i = 0, count = $all.length; i < count; i++) {
        var $m = $all.eq(i),
          type = (data.isYouTube) ? "iframe" : ($m.find("video").length ? "video" : "img"),
          $media = $m.find(type);

        // If media found and scaling is not natively support
        if ($media.length && !(type === "img" && BGSupport)) {
          var frameWidth = data.$el.outerWidth(),
            frameHeight = data.$el.outerHeight(),
            frameRatio = frameWidth / frameHeight,
            nSize = naturalSize(data, $media);

          data.width = nSize.width;
          data.height = nSize.height;
          data.left = 0;
          data.top = 0;

          var mediaRatio = (data.isYouTube) ? data.embedRatio : (data.width / data.height);

          // First check the height
          data.height = frameHeight;
          data.width = data.height * mediaRatio;

          // Next check the width
          if (data.width < frameWidth) {
            data.width = frameWidth;
            data.height = data.width / mediaRatio;
          }

          // Position the media
          data.left = -(data.width - frameWidth) / 2;
          data.top = -(data.height - frameHeight) / 2;

          $m.css({
            height: data.height,
            width: data.width,
            left: data.left,
            top: data.top
          });
        }
      }
    }

    /**
     * @method private
     * @name cacheScrollPosition
     * @description Cahce target scroll position
     * @param data [object] "Instance data"
     */

    function cacheScrollPosition(data) {
      data.scrollTop = data.$el.offset().top;
    }

    /**
     * @method private
     * @name checkScrollPosition
     * @description Check target scroll position against window
     * @param data [object] "Instance data"
     */

    function checkScrollPosition(data) {
      if (!data.visible && data.scrollTop < ScrollTop + data.lazyEdge) {
        data.visible = true;
        loadInitialSource(data);
      }
    }

    /**
     * @method private
     * @name naturalSize
     * @description Determines natural size of target media
     * @param data [object] "Instance data"
     * @param $media [jQuery object] "Source media object"
     * @return [object OR boolean] "Object containing natural height and width values or false"
     */

    function naturalSize(data, $media) {
      if (data.isYouTube) {
        return {
          height: 500,
          width: 500 / data.embedRatio
        };
      } else if ($media.is("img")) {
        var node = $media[0];

        if (typeof node.naturalHeight !== "undefined") {
          return {
            height: node.naturalHeight,
            width: node.naturalWidth
          };
        } else {
          var img = new Image();
          img.src = node.src;
          return {
            height: img.height,
            width: img.width
          };
        }
      } else {
        return {
          height: $media[0].videoHeight,
          width: $media[0].videoWidth
        };
      }
      return false;
    }

    /**
     * @plugin
     * @name Background
     * @description A jQuery plugin for full-frame image and video backgrounds.
     * @type widget
     * @main background.js
     * @main background.css
     * @dependency jQuery
     * @dependency core.js
     * @dependency transition.js
     */

    var Plugin = Formstone.Plugin("background", {
        widget: true,

        /**
         * @options
         * @param alt [string] <''> "Image `alt` attribute"
         * @param autoPlay [boolean] <true> "Autoplay video"
         * @param customClass [string] <''> "Class applied to instance"
         * @param embedRatio [number] <1.777777> "Video / embed ratio (16/9)"
         * @param lazy [boolean] <false> "Lazy load with scroll"
         * @param lazyEdge [int] <100> "Lazy load edge"
         * @param loop [boolean] <true> "Loop video"
         * @param mute [boolean] <true> "Mute video"
         * @param source [string OR object] <null> "Source image (string or object) or video (object)"
         */
        defaults: {
          alt: "",
          autoPlay: true,
          customClass: "",
          embedRatio: 1.777777,
          lazy: false,
          lazyEdge: 100,
          loop: true,
          mute: true,
          source: null,
          youtubeOptions: {}
        },

        classes: [
          "container",
          "media",
          "animated",
          "responsive",
          "native",
          "fixed",
          "ready",
          "lazy"
        ],

        /**
         * @events
         * @event loaded.background "Background media loaded"
         * @event ready.background "Background media ready"
         * @event error.background "Background media error"
         */

        events: {
          loaded: "loaded",
          ready: "ready",
          loadedMetaData: "loadedmetadata"
        },

        methods: {
          _construct: construct,
          _destruct: destruct,
          _resize: resize,

          play: playVideo,
          pause: pauseVideo,
          mute: muteVideo,
          unmute: unmuteVideo,
          resize: doResizeInstance,
          load: loadMedia,
          unload: unloadMedia
        }
      }),

      // Localize References

      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      Window = Formstone.window,
      $Window = Formstone.$window,
      ScrollTop = 0,
      $Instances = [],
      $LazyInstances = [],

      BGSupport = ("backgroundSize" in Formstone.document.documentElement.style),
      YouTubeReady = false,
      YouTubeQueue = [];

    // Setup

    Formstone.Ready(setup);

    /**
     * @method private global
     * @name window.onYouTubeIframeAPIReady
     * @description Attaches YouTube players to active instances
     */
    Window.onYouTubeIframeAPIReady = function() {
      YouTubeReady = true;

      for (var i in YouTubeQueue) {
        if (YouTubeQueue.hasOwnProperty(i)) {
          loadYouTube(YouTubeQueue[i].data, YouTubeQueue[i].source);
        }
      }

      YouTubeQueue = [];
    };

  })

);

/*! formstone v1.4.20-1 [carousel.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./mediaquery",
        "./touch"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize(windowWidth) {
      Functions.iterate.call($Instances, resizeInstance);
    }

    /**
     * @method private
     * @name cacheInstances
     * @description Caches active instances
     */

    function cacheInstances() {
      $Instances = $(Classes.base);
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      var i;

      data.didPan = false;

      data.carouselClasses = [
        RawClasses.base,
        data.theme,
        data.customClass,
        (data.rtl ? RawClasses.rtl : RawClasses.ltr)
      ];

      data.maxWidth = (data.maxWidth === Infinity ? "100000px" : data.maxWidth);
      data.mq = "(min-width:" + data.minWidth + ") and (max-width:" + data.maxWidth + ")";

      data.customControls = (typeof data.controls === "object" && data.controls.previous && data.controls.next);
      data.customPagination = (typeof data.pagination === "string");

      data.id = this.attr("id");

      if (data.id) {
        data.ariaId = data.id;
      } else {
        data.ariaId = data.rawGuid;
        this.attr("id", data.ariaId);
      }

      // Legacy browser support
      if (!Formstone.support.transform) {
        data.useMargin = true;
      }

      // Build controls and pagination
      var controlsHtml = '',
        paginationHtml = '',
        controlPrevClasses = [RawClasses.control, RawClasses.control_previous].join(" "),
        controlNextClasses = [RawClasses.control, RawClasses.control_next].join(" ");

      if (data.controls && !data.customControls) {
        data.labels.controls = data.labels.controls.replace('{guid}', data.numGuid);

        controlsHtml += '<div class="' + RawClasses.controls + '" aria-label="' + data.labels.controls + '" aria-controls="' + data.ariaId + '">';
        controlsHtml += '<button type="button" class="' + controlPrevClasses + '" aria-label="' + data.labels.previous + '">' + data.labels.previous + '</button>';
        controlsHtml += '<button type="button" class="' + controlNextClasses + '" aria-label="' + data.labels.next + '">' + data.labels.next + '</button>';
        controlsHtml += '</div>';
      }

      if (data.pagination && !data.customPagination) {
        data.labels.pagination = data.labels.pagination.replace('{guid}', data.numGuid);

        paginationHtml += '<div class="' + RawClasses.pagination + '" aria-label="' + data.labels.pagination + '" aria-controls="' + data.ariaId + '" role="navigation">';
        paginationHtml += '</div>';
      }

      if (data.autoHeight) {
        data.carouselClasses.push(RawClasses.auto_height);
      }

      if (data.contained) {
        data.carouselClasses.push(RawClasses.contained);
      }

      if (data.single) {
        data.carouselClasses.push(RawClasses.single);
      }

      // Modify dom
      this.addClass(data.carouselClasses.join(" "))
        .wrapInner('<div class="' + RawClasses.wrapper + '" aria-live="polite"><div class="' + RawClasses.container + '"><div class="' + RawClasses.canister + '"></div></div></div>')
        .append(controlsHtml)
        .wrapInner('<div class="' + RawClasses.viewport + '"></div>')
        .append(paginationHtml);

      data.$viewport = this.find(Classes.viewport).eq(0);
      data.$container = this.find(Classes.container).eq(0);
      data.$canister = this.find(Classes.canister).eq(0);
      data.$pagination = this.find(Classes.pagination).eq(0);

      data.$controlPrevious = data.$controlNext = $('');

      if (data.customControls) {
        data.$controls = $(data.controls.container).addClass([RawClasses.controls, RawClasses.controls_custom].join(" "));
        data.$controlPrevious = $(data.controls.previous).addClass(controlPrevClasses);
        data.$controlNext = $(data.controls.next).addClass(controlNextClasses);
      } else {
        data.$controls = this.find(Classes.controls).eq(0);
        data.$controlPrevious = data.$controls.find(Classes.control_previous);
        data.$controlNext = data.$controls.find(Classes.control_next);
      }

      data.$controlItems = data.$controlPrevious.add(data.$controlNext);

      if (data.customPagination) {
        data.$pagination = $(data.pagination).addClass([RawClasses.pagination]);
      }

      data.$paginationItems = data.$pagination.find(Classes.page);

      data.index = 0;
      data.enabled = false;
      data.leftPosition = 0;
      data.autoTimer = null;
      data.resizeTimer = null;

      // live query for linked to avoid missing new elements
      var linked = this.data(Namespace + "-linked");
      data.linked = linked ? '[data-' + Namespace + '-linked="' + linked + '"]' : false;

      // force paged if linked, keeps counts accurate
      if (data.linked) {
        data.paged = true;
      }

      // live query for controlled to avoid missing new elements
      var subordinate = this.data(Namespace + "-controller-for") || '';
      data.$subordinate = $(subordinate);

      if (data.$subordinate.length) {
        data.controller = true;
      }

      // Responsive count handling
      if (typeof data.show === "object") {
        var show = data.show,
          cache = [],
          keys = [];

        for (i in show) {
          if (show.hasOwnProperty(i)) {
            keys.push(i);
          }
        }

        keys.sort(Functions.sortAsc);

        for (i in keys) {
          if (keys.hasOwnProperty(i)) {
            cache.push({
              width: parseInt(keys[i]),
              count: show[keys[i]],
              mq: window.matchMedia("(min-width: " + parseInt(keys[i]) + "px)")
            });
          }
        }

        data.show = cache;
      }

      cacheValues(data);

      // Media Query support
      $.fsMediaquery("bind", data.rawGuid, data.mq, {
        enter: function() {
          enable.call(data.$el, data);
        },
        leave: function() {
          disable.call(data.$el, data);
        }
      });

      cacheInstances();

      data.carouselClasses.push(RawClasses.enabled);
      data.carouselClasses.push(RawClasses.animated);
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      Functions.clearTimer(data.autoTimer);
      Functions.clearTimer(data.resizeTimer);

      disable.call(this, data);

      $.fsMediaquery("unbind", data.rawGuid);

      if (data.id !== data.ariaId) {
        this.removeAttr("id");
      }

      data.$controlItems.removeClass([Classes.control, RawClasses.control_previous, Classes.control_next, Classes.visible].join(" "))
        .off(Events.namespace);

      enableControls(data, data.$controlItems);

      data.$images.off(Events.namespace);

      data.$canister.fsTouch("destroy");

      data.$items.removeClass([RawClasses.item, RawClasses.visible, Classes.item_previous, Classes.item_next].join(" "))
        .unwrap()
        .unwrap()
        .unwrap()
        .unwrap();

      if (data.controls && !data.customControls) {
        data.$controls.remove();
      }

      if (data.customControls) {
        data.$controls.removeClass([RawClasses.controls, RawClasses.controls_custom, RawClasses.visible].join(" "));
      }

      if (data.pagination && !data.customPagination) {
        data.$pagination.remove();
      }

      if (data.customPagination) {
        data.$pagination.html("").removeClass([RawClasses.pagination, RawClasses.visible].join(" "));
      }

      this.removeClass(data.carouselClasses.join(" "));

      cacheInstances();
    }

    /**
     * @method
     * @name disable
     * @description Disables instance of plugin
     * @example $(".target").carousel("disable");
     */

    function disable(data) {
      if (data.enabled) {
        Functions.clearTimer(data.autoTimer);

        data.enabled = false;

        data.$subordinate.off(Events.update);

        this.removeClass([RawClasses.enabled, RawClasses.animated].join(" "))
          .off(Events.namespace);

        data.$canister.fsTouch("destroy")
          .off(Events.namespace)
          .attr("style", "")
          .css(TransitionProperty, "none");

        data.$items.css({
          width: "",
          height: ""
        }).removeClass([RawClasses.visible, Classes.item_previous, Classes.item_next].join(" "));

        data.$images.off(Events.namespace);
        data.$controlItems.off(Events.namespace);
        data.$pagination.html("").off(Events.namespace);

        hideControls(data);

        if (data.useMargin) {
          data.$canister.css({
            marginLeft: ""
          });
        } else {
          data.$canister.css(TransformProperty, "");
        }

        data.index = 0;
      }
    }

    /**
     * @method
     * @name enable
     * @description Enables instance of plugin
     * @example $(".target").carousel("enable");
     */

    function enable(data) {
      if (!data.enabled) {
        data.enabled = true;

        this.addClass(RawClasses.enabled);

        data.$controlItems.on(Events.click, data, onAdvance);
        data.$pagination.on(Events.click, Classes.page, data, onSelect);

        data.$items.on(Events.click, data, onItemClick);
        data.$subordinate.on(Events.update, data, onSubordinateUpdate);

        onSubordinateUpdate({
          data: data
        }, 0);

        if (data.touch) {
          data.$canister.fsTouch({
              axis: "x",
              pan: true,
              swipe: true
            }).on(Events.panStart, data, onPanStart)
            .on(Events.pan, data, onPan)
            .on(Events.panEnd, data, onPanEnd)
            .on(Events.swipe, data, onSwipe)
            .on(Events.focusIn, data, onItemFocus)
            .css(TransitionProperty, "");
        }

        cacheValues(data);

        // Watch Images
        data.$images.on(Events.load, data, onImageLoad);

        // Auto timer
        if (data.autoAdvance) {
          data.autoTimer = Functions.startTimer(data.autoTimer, data.autoTime, function() {
            autoAdvance(data);
          }, true);
        }

        resizeInstance.call(this, data);
      }
    }

    /**
     * @method
     * @name resize
     * @description Resizes instance
     * @example $(".target").carousel("resize");
     */

    /**
     * @method private
     * @name resizeInstance
     * @description Resizes each instance
     * @param data [object] "Instance data"
     */

    function resizeInstance(data) {
      if (data.enabled) {
        var h, i, j, k, w,
          $items,
          $first,
          width,
          height,
          left;

        data.count = data.$items.length;

        if (data.count < 1) { // avoid empty carousels
          hideControls(data);
          data.$canister.css({
            height: ""
          });

          return;
        }

        this.removeClass(RawClasses.animated);

        data.containerWidth = data.$container.outerWidth(false);

        data.visible = calculateVisible(data);
        data.perPage = data.paged ? 1 : data.visible;

        data.itemMarginLeft = parseInt(data.$items.eq(0).css("marginLeft"));
        data.itemMarginRight = parseInt(data.$items.eq(0).css("marginRight"));

        data.itemMargin = data.itemMarginLeft + data.itemMarginRight;

        if (isNaN(data.itemMargin)) {
          data.itemMargin = 0;
        }

        data.itemWidth = (data.containerWidth - (data.itemMargin * (data.visible - 1))) / data.visible;
        data.itemHeight = 0;

        data.pageWidth = data.paged ? data.itemWidth : data.containerWidth;

        if (data.matchWidth) {
          data.canisterWidth = data.single ? data.containerWidth : ((data.itemWidth + data.itemMargin) * data.count);
        } else {
          data.canisterWidth = 0;
          data.$canister.css({
            width: 1000000
          });

          for (i = 0; i < data.count; i++) {
            data.canisterWidth += data.$items.eq(i).outerWidth(true);
          }
        }

        data.$canister.css({
          width: data.canisterWidth,
          height: ""
        });

        data.$items.css({
          width: (data.matchWidth) ? data.itemWidth : "",
          height: ""
        }).removeClass([RawClasses.visible, RawClasses.item_previous, RawClasses.item_next].join(" "));

        // initial pages
        data.pages = [];
        data.items = [];
        // data.pagesReverse = [];
        // data.pagesVisible = [];

        var $item,
          iWidth = 0,
          iHeight = 0,
          tWidth = 0,
          iLeft = 0;

        width = 0;
        height = 0;
        $items = $();

        // Pages forward
        for (i = 0; i < data.count; i++) {
          $item = data.$items.eq(i);
          iWidth = data.matchWidth ? (data.itemWidth + data.itemMargin) : $item.outerWidth(true);
          iHeight = $item.outerHeight();
          iLeft = $item.position().left;

          data.items.push({
            $el: $item,
            width: iWidth,
            height: iHeight,
            left: data.rtl ? iLeft - (data.canisterWidth - iWidth) : iLeft
          });

          // Too far / Paged
          if ( ($items.length && width + iWidth > data.containerWidth + data.itemMargin) || (data.paged && i > 0) ) {
            $first = data.rtl ? $items.eq($items.length - 1) : $items.eq(0);
            left = $first.position().left;

            data.pages.push({
              left: data.rtl ? left - (data.canisterWidth - width) : left,
              // left: data.rtl ? left - (data.canisterWidth - (data.containerWidth - width)) : left,
              height: height,
              width: width,
              $items: $items
            });

            // Reset counters
            $items = $();
            height = 0;
            width = 0;
          }

          $items = $items.add($item);
          width += iWidth;
          tWidth += iWidth;

          if (iHeight > height) {
            height = iHeight;
          }
          if (height > data.itemHeight) {
            data.itemHeight = height;
          }
        }

        // Last Page
        $first = data.rtl ? $items.eq($items.length - 1) : $items.eq(0);
        left = data.canisterWidth - data.containerWidth - (data.rtl ? data.itemMarginLeft : data.itemMarginRight);

        data.pages.push({
          left: data.rtl ? -left : left,
          height: height,
          width: width,
          $items: $items
        });

        data.pageCount = data.pages.length;

        // Random Config

        if (data.paged && data.matchWidth) {
          data.pageCount -= (data.count % data.visible);
        }

        if (data.pageCount <= 0) {
          data.pageCount = 1;
        }

        data.maxMove = (data.canisterWidth - data.containerWidth - (data.rtl ? data.itemMarginLeft : data.itemMarginRight)) * (data.rtl ? 1 : -1);

        if (data.paged && !data.matchWidth) {
          for (i = 0; i < data.pages.length; i++) {
            if (data.pages[i].left - data.pages[i].width > Math.abs(data.maxMove)) {
              data.pageCount = i;
              break;
            }
          }
        }

        // auto / match height
        if (data.autoHeight) {
          data.$canister.css({
            height: data.pages[0].height
          });
        } else if (data.matchHeight) {
          data.$items.css({
            height: data.itemHeight
          });
        }

        // Reset Page Count
        var html = '';
        for (i = 0; i < data.pageCount; i++) {
          html += '<button type="button" class="' + RawClasses.page + '">' + (i + 1) + '</button>';
        }
        data.$pagination.html(html);

        // update pagination
        if (data.pageCount <= 1) {
          hideControls(data);
        } else {
          showControls(data);
        }
        data.$paginationItems = data.$pagination.find(Classes.page);

        positionCanister(data, data.index, false);

        setTimeout(function() {
          data.$el.addClass(RawClasses.animated);
        }, 5);
      }
    }

    /**
     * @method private
     * @name cacheValues
     * @description Caches internal values after item change
     * @param data [object] "Instance data"
     */

    function cacheValues(data) {
      // Cache vaules
      data.$items = data.$canister.children().not(":hidden").addClass(RawClasses.item);
      data.$images = data.$canister.find("img");

      data.totalImages = data.$images.length;
    }

    /**
     * @method
     * @name reset
     * @description Resets instance after item change
     * @example $(".target").carousel("reset");
     */

    /**
     * @method private
     * @name resetInstance
     * @description Resets instance after item change
     * @param data [object] "Instance data"
     */

    function resetInstance(data) {
      if (data.enabled) {
        updateItems.call(this, data, false);
      }
    }

    /**
     * @method
     * @name update
     * @description Updates carousel items
     * @example $(".target").carousel("update", "...");
     */

    /**
     * @method private
     * @name updateItems
     * @description Updates carousel items for each instance
     * @param data [object] "Instance data"
     * @param html [string] "New carousel contents"
     */

    function updateItems(data, html) {
      data.$images.off(Events.namespace);

      if (html !== false) {
        data.$canister.html(html);
      }

      data.index = 0;

      cacheValues(data);

      resizeInstance.call(this, data);
    }

    /**
     * @method
     * @name jumpPage
     * @description Jump instance of plugin to specific page
     * @example $(".target").carousel("jumpPage", 1);
     * @param index [int] "New index"
     * @param silent [boolean] "Flag to prevent triggering update event"
     */
    /**
     * @method
     * @name jump
     * @description Jump instance of plugin to specific page; Alias of `jumpPage`
     * @example $(".target").carousel("jump", 1);
     * @param index [int] "New index"
     * @param silent [boolean] "Flag to prevent triggering update event"
     */

    /**
     * @method private
     * @name jumpPage
     * @description Jump instance of plugin to specific page
     * @param data [object] "Instance data"
     * @param index [int] "New index"
     * @param silent [boolean] ""
     * @param animated [boolean] ""
     */

    function jumpPage(data, index, silent, fromLinked, animated) {
      if (data.enabled) {
        if (!fromLinked) {
          Functions.clearTimer(data.autoTimer);
        }

        if (typeof animated === "undefined") {
          animated = true;
        }

        positionCanister(data, index - 1, animated, silent, fromLinked);
      }
    }

    /**
     * @method
     * @name previousPage
     * @description Move to the previous page
     * @example $(".target").carousel("previousPage");
     */
    /**
     * @method
     * @name previous
     * @description Move to the previous page; Alias of `previousPage`
     * @example $(".target").carousel("previous");
     */

    /**
     * @method private
     * @name previousPage
     * @description Move to previous page
     * @param data [object] "Instance data"
     */

    function previousPage(data) {
      var index = data.index - 1;

      if (data.infinite && index < 0) {
        index = data.pageCount - 1;
      }

      positionCanister(data, index);
    }

    /**
     * @method
     * @name nextPage
     * @description Move to next page
     * @example $(".target").carousel("nextPage");
     */
    /**
     * @method
     * @name next
     * @description Move to next page; Alias of `nextPage`
     * @example $(".target").carousel("next");
     */

    /**
     * @method private
     * @name nextPage
     * @description Move to next page
     * @param data [object] "Instance data"
     */

    function nextPage(data) {
      var index = data.index + 1;

      if (data.infinite && index >= data.pageCount) {
        index = 0;
      }

      positionCanister(data, index);
    }


    /**
     * @method
     * @name jumpItem
     * @description Jump instance of plugin to specific item
     * @example $(".target").carousel("jumpItem", 1);
     * @param index [int] "New item index"
     * @param silent [boolean] "Flag to prevent triggering update event"
     */

    /**
     * @method private
     * @name jumpItem
     * @description Jump instance of plugin to specific page
     * @param data [object] "Instance data"
     * @param index [int] "New index"
     * @param silent [boolean] ""
     * @param animated [boolean] ""
     */

    function jumpItem(data, index, silent, fromLinked, animated) {
      if (data.enabled) {
        Functions.clearTimer(data.autoTimer);

        var $active = data.$items.eq(index - 1);

        if (typeof animated === "undefined") {
          animated = true;
        }

        for (var i = 0; i < data.pageCount; i++) {
          if (data.pages[i].$items.is($active)) {
            positionCanister(data, i, animated, silent, fromLinked);
            break;
          }
        }
      }
    }

    /**
     * @method private
     * @name onImageLoad
     * @description Handles child image load
     * @param e [object] "Event data"
     */

    function onImageLoad(e) {
      var data = e.data;

      data.resizeTimer = Functions.startTimer(data.resizeTimer, 1, function() {
        resizeInstance.call(data.$el, data);
      });
    }

    /**
     * @method private
     * @name autoAdvance
     * @description Handles auto advancement
     * @param data [object] "Instance data"
     */

    function autoAdvance(data) {
      var index = data.index + 1;

      if (index >= data.pageCount) {
        index = 0;
      }

      positionCanister(data, index);
    }

    /**
     * @method private
     * @name onAdvance
     * @description Handles item advancement
     * @param e [object] "Event data"
     */

    function onAdvance(e) {
      Functions.killEvent(e);

      var data = e.data,
        index = data.index + ($(e.currentTarget).hasClass(RawClasses.control_next) ? 1 : -1);

      Functions.clearTimer(data.autoTimer);
      positionCanister(data, index);
    }

    /**
     * @method private
     * @name onSelect
     * @description Handles item select
     * @param e [object] "Event data"
     */

    function onSelect(e) {
      Functions.killEvent(e);

      var data = e.data,
        index = data.$paginationItems.index($(e.currentTarget));

      Functions.clearTimer(data.autoTimer);
      positionCanister(data, index);
    }

    /**
     * @method private
     * @name position
     * @description Handles updating instance position
     * @param data [object] "Instance data"
     * @param index [int] "Item index"
     */

    function positionCanister(data, index, animate, silent, fromLinked) {
      if (index < 0) {
        index = (data.infinite) ? data.pageCount - 1 : 0;
      }
      if (index >= data.pageCount) {
        index = (data.infinite) ? 0 : data.pageCount - 1;
      }

      if (data.count < 1) {
        return;
      }

      if (data.pages[index]) {
        data.leftPosition = -data.pages[index].left;
      }

      data.leftPosition = checkPosition(data, data.leftPosition);

      if (data.useMargin) {
        data.$canister.css({
          marginLeft: data.leftPosition
        });
      } else {
        if (animate === false) {
          data.$canister.css(TransitionProperty, "none")
            .css(TransformProperty, "translateX(" + data.leftPosition + "px)");

          // Slight delay before adding transitions back
          setTimeout(function() {
            data.$canister.css(TransitionProperty, "");
          }, 5);
        } else {
          data.$canister.css(TransformProperty, "translateX(" + data.leftPosition + "px)");
        }
      }

      // Update classes
      data.$items.removeClass([RawClasses.visible, RawClasses.item_previous, RawClasses.item_next].join(" "));

      if (data.single) {
        for (var i = 0, count = data.pages.length; i < count; i++) {
          if (i === index) {
            data.pages[i].$items.addClass(RawClasses.visible).attr("aria-hidden", "false");
          } else {
            data.pages[i].$items.not(data.pages[index].$items).addClass((i < index) ? RawClasses.item_previous : RawClasses.item_next).attr("aria-hidden", "true");
          }
        }
      } else {
        for (var i = 0; i < data.count; i++) {
          var multiplier = (data.rtl ? -1 : 1),
            posLeft = (data.leftPosition * multiplier) + (data.items[i].left * multiplier),
            posWidth = posLeft + data.items[i].width,
            edge = data.containerWidth + data.itemMargin + 1;

          if ( posLeft >= -1 && posWidth <= edge ) {
            data.items[i].$el.addClass(RawClasses.visible).attr("aria-hidden", "false");
          } else {
            if ( posLeft < 0 ) {
              data.items[i].$el.addClass(RawClasses.item_previous).attr("aria-hidden", "false");
            } else {
              data.items[i].$el.addClass(RawClasses.item_next).attr("aria-hidden", "false");
            }
          }
        }
      }

      // Auto Height
      if (data.autoHeight) {
        data.$canister.css({
          height: data.pages[index].height
        });
      }

      if (animate !== false && silent !== true && index !== data.index && (data.infinite || (index > -1 && index < data.pageCount))) {
        data.$el.trigger(Events.update, [index]);
      }

      data.index = index;

      // Linked
      if (data.linked && fromLinked !== true) {
        $(data.linked).not(data.$el)[NamespaceClean]("jumpPage", data.index + 1, true, true);
      }

      updateControls(data);
    }

    /**
     * @method private
     * @name hideControls
     * @description Hides instance controls
     * @param data [object] "Instance data"
     */

    function hideControls(data) {
      data.$controls.removeClass(RawClasses.visible);
      data.$controlItems.removeClass(RawClasses.visible);
      data.$pagination.removeClass(RawClasses.visible);

      disableControls(data, data.$controlItems);
    }

    /**
     * @method private
     * @name showControls
     * @description Shows instance controls
     * @param data [object] "Instance data"
     */

    function showControls(data) {
      data.$controls.addClass(RawClasses.visible);
      data.$controlItems.addClass(RawClasses.visible);
      data.$pagination.addClass(RawClasses.visible);

      enableControls(data, data.$controlItems);
    }

    /**
     * @method private
     * @name updateControls
     * @description Handles updating instance controls
     * @param data [object] "Instance data"
     */

    function updateControls(data) {
      data.$paginationItems.removeClass(RawClasses.active)
        .eq(data.index)
        .addClass(RawClasses.active);

      if (data.infinite) {
        data.$controlItems.addClass(RawClasses.visible);

        enableControls(data, data.$controlItems);
      } else if (data.pageCount < 1) {
        data.$controlItems.removeClass(RawClasses.visible);

        disableControls(data, data.$controlItems);
      } else {
        data.$controlItems.addClass(RawClasses.visible);

        enableControls(data, data.$controlItems);

        if (data.index <= 0) {
          data.$controlPrevious.removeClass(RawClasses.visible);

          disableControls(data, data.$controlPrevious);
        } else if (data.index >= data.pageCount - 1 || (!data.single && data.leftPosition === data.maxMove)) {
          data.$controlNext.removeClass(RawClasses.visible);

          disableControls(data, data.$controlNext);
        }
      }
    }

    /**
     * @method private
     * @name disableControls
     * @description Adds disabled prop to element
     * @param data [object] "Instance data"
     * @return [] "Target element"
     */

    function disableControls(data, $el) {
      if (!data.customControls) {
        $el.prop("disabled", true);
      }
    }

    /**
     * @method private
     * @name enableControls
     * @description Removes disabled prop to element
     * @param data [object] "Instance data"
     * @return [] "Target element"
     */

    function enableControls(data, $el) {
      if (!data.customControls) {
        $el.prop("disabled", false);
      }
    }

    /**
     * @method private
     * @name calculateVisible
     * @description Determines how many items should show at screen width
     * @param data [object] "Instance data"
     * @return [int] "New visible count"
     */

    function calculateVisible(data) {
      var show = 1;

      if (data.single) {
        return show;
      } else if (typeof data.show === "object") {
        for (var i in data.show) {
          if (data.show.hasOwnProperty(i)) {
            if (Formstone.support.matchMedia) {
              if (data.show[i].mq.matches) {
                show = data.show[i].count;
              }
            } else {
              // Fallback, grab the first breakpoint that's large enough
              if (data.show[i].width < Formstone.fallbackWidth) {
                show = data.show[i].count;
              }
            }
          }
        }
      } else {
        show = data.show;
      }

      return (data.fill && data.count < show) ? data.count : show;
    }

    /**
     * @method private
     * @name onPanStart
     * @description Handles pan start event
     * @param e [object] "Event data"
     */

    function onPanStart(e, fromLinked) {
      var data = e.data;

      Functions.clearTimer(data.autoTimer);

      if (!data.single) {
        if (data.useMargin) {
          data.leftPosition = parseInt(data.$canister.css("marginLeft"));
        } else {
          var matrix = data.$canister.css(TransformProperty).split(",");
          data.leftPosition = parseInt(matrix[4]); // ?
        }

        data.$canister.css(TransitionProperty, "none")
          .css("will-change", "transform");

        onPan(e);

        // Linked
        if (data.linked && fromLinked !== true) {
          var percent = e.deltaX / data.pageWidth;

          if (data.rtl) {
            percent *= -1;
          }

          $(data.linked).not(data.$el)[NamespaceClean]("panStart", percent);
        }
      }

      data.isTouching = true;
    }

    /**
     * @method private
     * @name onPan
     * @description Handles pan event
     * @param e [object] "Event data"
     */

    function onPan(e, fromLinked) {
      var data = e.data;

      if (!data.single) {
        data.touchLeft = checkPosition(data, data.leftPosition + e.deltaX);

        if (data.useMargin) {
          data.$canister.css({
            marginLeft: data.touchLeft
          });
        } else {
          data.$canister.css(TransformProperty, "translateX(" + data.touchLeft + "px)");
        }

        // Linked
        if (data.linked && fromLinked !== true) {
          var percent = e.deltaX / data.pageWidth;

          if (data.rtl) {
            percent *= -1;
          }

          $(data.linked).not(data.$el)[NamespaceClean]("pan", percent);
        }
      }
    }

    /**
     * @method private
     * @name onPanEnd
     * @description Handles pan end event
     * @param e [object] "Event data"
     */

    function onPanEnd(e, fromLinked) {
      var data = e.data,
        delta = Math.abs(e.deltaX),
        increment = getIncrement(data, e),
        index = false;

      data.didPan = false;

      if (increment == 0) {
        index = data.index;
      } else {
        if (!data.single) {
          var i, count,
            left = Math.abs(data.touchLeft),
            page = false,
            dir = (data.rtl) ? "right" : "left";

          if (e.directionX === dir) {
            // Left (RTL Right)
            for (i = 0, count = data.pages.length; i < count; i++) {
              page = data.pages[i];

              if (left > Math.abs(page.left) + 20) {
                index = i + 1;
              }
            }
          } else {
            // Right (RTL Left)
            for (i = data.pages.length - 1, count = 0; i >= count; i--) {
              page = data.pages[i];

              if (left < Math.abs(page.left)) {
                index = i - 1;
              }
            }
          }
        }

        if (index === false) {
          index = (delta < 50) ? data.index : data.index + increment;
        }
      }

      if (index !== data.index) {
        data.didPan = true;
      }

      // Linked
      if (data.linked && fromLinked !== true) {
        $(data.linked).not(data.$el)[NamespaceClean]("panEnd", index);
      }

      endTouch(data, index);
    }

    /**
     * @method private
     * @name linkedPanStart
     * @description Handles linked pan start
     * @param data [object] "Instance data"
     * @param percent [float] "Percentage moved"
     */

    function linkedPanStart(data, percent) {
      Functions.clearTimer(data.autoTimer);

      if (!data.single) {
        if (data.rtl) {
          percent *= -1;
        }

        if (data.useMargin) {
          data.leftPosition = parseInt(data.$canister.css("marginLeft"));
        } else {
          var matrix = data.$canister.css(TransformProperty).split(",");
          data.leftPosition = parseInt(matrix[4]); // ?
        }

        data.$canister.css(TransitionProperty, "none");

        var e = {
          data: data,
          deltaX: (data.pageWidth * percent)
        };

        onPan(e, true);
      }

      data.isTouching = true;
    }

    /**
     * @method private
     * @name linkedPan
     * @description Handles linked pan
     * @param data [object] "Instance data"
     * @param percent [float] "Percentage moved"
     */

    function linkedPan(data, percent) {
      if (!data.single) {
        if (data.rtl) {
          percent *= -1;
        }

        var delta = (data.pageWidth * percent);

        data.touchLeft = checkPosition(data, data.leftPosition + delta);

        if (data.useMargin) {
          data.$canister.css({
            marginLeft: data.touchLeft
          });
        } else {
          data.$canister.css(TransformProperty, "translateX(" + data.touchLeft + "px)");
        }
      }
    }

    /**
     * @method private
     * @name linkedPanEnd
     * @description Handles linked pan end
     * @param data [object] "Instance data"
     * @param index [int] "New Index"
     */

    function linkedPanEnd(data, index) {
      endTouch(data, index, true);
    }

    /**
     * @method private
     * @name onSwipe
     * @description Handles swipe event
     * @param e [object] "Event data"
     */

    function onSwipe(e, fromLinked) {
      var data = e.data,
        increment = getIncrement(data, e),
        index = data.index + increment;

      // Linked
      if (data.linked && fromLinked !== true) {
        $(data.linked).not(data.$el)[NamespaceClean]("swipe", e.directionX);
      }

      endTouch(data, index);
    }

    /**
     * @method private
     * @name linkedSwipe
     * @description Handles swipe event
     * @param data [object] "Instance data"
     * @param direction [string] "Swipe direction"
     */

    function linkedSwipe(data, direction) {
      var e = {
        data: data,
        directionX: direction
      };

      onSwipe(e, true);
    }

    /**
     * @method private
     * @name endTouch
     * @description Cleans up touch interactions
     * @param data [object] "Instance data"
     * @param index [object] "New index"
     */

    function endTouch(data, index) {
      data.$canister.css(TransitionProperty, "")
        .css("will-change", "");

      positionCanister(data, index);

      data.isTouching = false;
    }

    /**
     * @method private
     * @name onItemClick
     * @description Handles click to item
     * @param e [object] "Event data"
     */

    function onItemClick(e) {
      var data = e.data,
        $target = $(e.currentTarget);

      if (!data.didPan) {
        $target.trigger(Events.itemClick);

        if (data.controller) {
          var index = data.$items.index($target);

          onSubordinateUpdate(e, index);

          data.$subordinate[NamespaceClean]("jumpPage", index + 1, true);
        }
      }
    }

    /**
     * @method private
     * @name onItemFocus
     * @description Handles focus to item/element in item
     * @param e [object] "Event data"
     */

    function onItemFocus(e) {
      var data = e.data;

      if (data.enabled && !data.isTouching) {
        Functions.clearTimer(data.autoTimer);

        data.$container.scrollLeft(0);

        var $target = $(e.target),
          $active;

        if ($target.hasClass(RawClasses.item)) {
          $active = $target;
        } else if ($target.parents(Classes.item).length) {
          $active = $target.parents(Classes.item).eq(0);
        }

        for (var i = 0; i < data.pageCount; i++) {
          if (data.pages[i].$items.is($active)) {
            positionCanister(data, i);
            break;
          }
        }
      }
    }

    /**
     * @method private
     * @name onSubordinateUpdate
     * @description Handles update from subordinate
     * @param e [object] "Event data"
     * @param index [int] "Index"
     */

    function onSubordinateUpdate(e, index) {
      var data = e.data;

      if (data.controller) {
        var $active = data.$items.eq(index);

        data.$items.removeClass(RawClasses.active);
        $active.addClass(RawClasses.active);

        for (var i = 0; i < data.pageCount; i++) {
          if (data.pages[i].$items.is($active)) {
            positionCanister(data, i, true, true);
            break;
          }
        }
      }
    }

    /**
     * @method private
     * @name checkPosition
     * @description Checks if left pos is in range
     * @param data [object] "Event data"
     * @param e [object] "Event data"
     * @return [int] "Corrected left position"
     */

    function checkPosition(data, pos) {
      if (isNaN(pos)) {
        pos = 0;
      } else if (data.rtl) {
        if (pos > data.maxMove) {
          pos = data.maxMove;
        }
        if (pos < 0) {
          pos = 0;
        }
      } else {
        if (pos < data.maxMove) {
          pos = data.maxMove;
        }
        if (pos > 0) {
          pos = 0;
        }
      }

      return pos;
    }

    /**
     * @method private
     * @name getIncrement
     * @description Returns touch increment
     * @param data [object] "Instance data"
     * @param e [object] "Event data"
     * @return [int] "Target direction"
     */

    function getIncrement(data, e) {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        return 0;
      }

      return data.rtl ? ((e.directionX === "right") ? 1 : -1) : ((e.directionX === "left") ? 1 : -1);
    }

    /**
     * @plugin
     * @name Carousel
     * @description A jQuery plugin for simple content carousels.
     * @type widget
     * @main carousel.js
     * @main carousel.css
     * @dependency jQuery
     * @dependency core.js
     * @dependency mediaquery.js
     * @dependency touch.js
     */

    var Plugin = Formstone.Plugin("carousel", {
        widget: true,

        /**
         * @options
         * @param autoAdvance [boolean] <false> "Flag to auto advance items"
         * @param autoHeight [boolean] <false> "Flag to adjust carousel height to visible item(s)"
         * @param autoTime [int] <8000> "Auto advance time"
         * @param contained [boolean] <true> "Flag for 'overflow: visible'"
         * @param controls [boolean or object] <true> "Flag to draw controls OR object containing container, next and previous control selectors (Must be fully qualified selectors)"
         * @param customClass [string] <''> "Class applied to instance"
         * @param fill [boolean] <false> "Flag to fill viewport if item count is less then show count"
         * @param infinite [boolean] <false> "Flag for looping items"
         * @param labels.next [string] <'Next'> "Control text"
         * @param labels.previous [string] <'Previous'> "Control text"
         * @param labels.controls [string] <'Carousel {guid} Controls'> "Controls aria label; {guid} replaced with instance GUID"
         * @param labels.pagination [string] <'Carousel {guid} Pagination'> "Pagination aria label; {guid} replaced with instance GUID"
         * @param matchHeight [boolean] <false> "Flag to match item heights"
         * @param matchWidth [boolean] <true> "Flag to match item widths; Requires CSS widths if false"
         * @param maxWidth [string] <'Infinity'> "Width at which to auto-disable plugin"
         * @param minWidth [string] <'0'> "Width at which to auto-disable plugin"
         * @param paged [boolean] <false> "Flag for paged items"
         * @param pagination [boolean or string] <true> "Flag to draw pagination OR string containing pagination target selector (Must be fully qualified selector)"
         * @param rtl [boolean] <false> "Right to Left display"
         * @param show [int / object] <1> "Items visible per page; Object for responsive counts"
         * @param single [boolean] <false> "Flag to display single item at a time"
         * @param theme [string] <"fs-light"> "Theme class name"
         * @param touch [boolean] <true> "Use touch events"
         * @param useMargin [boolean] <false> "Use margins instead of css transitions (legacy browser support)"
         */

        defaults: {
          autoAdvance: false,
          autoHeight: false,
          autoTime: 8000,
          contained: true,
          controls: true,
          customClass: "",
          fill: false,
          infinite: false,
          labels: {
            next: "Next",
            previous: "Previous",
            controls: "Carousel {guid} Controls",
            pagination: "Carousel {guid} Pagination"
          },
          matchHeight: false,
          matchWidth: true,
          maxWidth: Infinity,
          minWidth: '0px',
          paged: false,
          pagination: true,
          rtl: false,
          show: 1,
          single: false,
          theme: "fs-light",
          touch: true,
          useMargin: false
        },

        classes: [
          "ltr",
          "rtl",

          "viewport",
          "wrapper",
          "container",
          "canister",

          "item",
          "item_previous",
          "item_next",

          "controls",
          "controls_custom",

          "control",
          "control_previous",
          "control_next",

          "pagination",
          "page",

          "animated",
          "enabled",
          "visible",
          "active",
          "auto_height",
          "contained",
          "single"
        ],

        /**
         * @events
         * @event itemClick.carousel "Item clicked; Triggered on carousel item"
         * @event update.carousel "Carousel position updated"
         */

        events: {
          itemClick: "itemClick",
          update: "update"
        },

        methods: {
          _construct: construct,
          _destruct: destruct,
          _resize: resize,

          disable: disable,
          enable: enable,

          // Backwards compat?
          jump: jumpPage,
          previous: previousPage,
          next: nextPage,
          // Pages
          jumpPage: jumpPage,
          previousPage: previousPage,
          nextPage: nextPage,
          // Items
          jumpItem: jumpItem,

          reset: resetInstance,
          resize: resizeInstance,
          update: updateItems,

          panStart: linkedPanStart,
          pan: linkedPan,
          panEnd: linkedPanEnd,
          swipe: linkedSwipe
        }
      }),

      // Localize References

      Namespace = Plugin.namespace,
      NamespaceClean = Plugin.namespaceClean,
      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      $Instances = [],

      TransformProperty = Formstone.transform,
      TransitionProperty = Formstone.transition;

  })

);

/*! formstone v1.4.20-1 [checkbox.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      var $parent = this.closest("label"),
        $label = $parent.length ? $parent.eq(0) : $('label[for="' + this.attr("id") + '"]'),
        baseClass = [RawClasses.base, data.theme, data.customClass].join(" "),
        labelClass = [RawClasses.label, data.theme, data.customClass].join(" "),
        html = "";

      data.radio = (this.attr("type") === "radio");
      data.group = this.attr("name");

      html += '<div class="' + RawClasses.marker + '" aria-hidden="true">';
      html += '<div class="' + RawClasses.flag + '"></div>';

      if (data.toggle) {
        baseClass += " " + RawClasses.toggle;
        labelClass += " " + RawClasses.toggle;
        html += '<span class="' + [RawClasses.state, RawClasses.state_on].join(" ") + '">' + data.labels.on + '</span>';
        html += '<span class="' + [RawClasses.state, RawClasses.state_off].join(" ") + '">' + data.labels.off + '</span>';
      }

      if (data.radio) {
        baseClass += " " + RawClasses.radio;
        labelClass += " " + RawClasses.radio;
      }

      html += '</div>';

      // Modify DOM
      data.$placeholder = $('<span class="' + RawClasses.element_placeholder + '"></span>');
      this.before(data.$placeholder);

      data.labelParent = ($label.find(this).length);
      data.labelClass = labelClass;

      $label.addClass(labelClass);

      if (data.labelParent) {
        $label.wrap('<div class="' + baseClass + '"></div>')
          .before(html);
      } else {
        this.before('<div class=" ' + baseClass + '">' + html + '</div>');
      }

      // Store plugin data
      data.$checkbox = (data.labelParent) ? $label.parents(Classes.base) : this.prev(Classes.base);
      data.$marker = data.$checkbox.find(Classes.marker);
      data.$states = data.$checkbox.find(Classes.state);
      data.$label = $label;
      data.$classable = $().add(data.$checkbox).add(data.$label);

      // Check checked
      if (this.is(":checked")) {
        data.$classable.addClass(RawClasses.checked);
      }

      // Check disabled
      if (this.is(":disabled") /* || this.is("[readonly]") */ ) {
        data.$classable.addClass(RawClasses.disabled);
      }

      // Move original checkbox
      this.appendTo(data.$marker);

      // Bind click events
      this.on(Events.focus, data, onFocus)
        .on(Events.blur, data, onBlur)
        .on(Events.change, data, onChange)
        .on(Events.click, data, onClick)
        .on(Events.deselect, data, onDeselect);

      data.$checkbox.on(Events.click, data, onClick);
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      data.$checkbox.off(Events.namespace);
      // .fsTouch("destroy");

      data.$marker.remove();
      data.$states.remove();

      data.$label.removeClass(data.labelClass);

      if (data.labelParent) {
        data.$label.unwrap();
      } else {
        this.unwrap();
      }

      data.$placeholder.before(this);
      data.$placeholder.remove();

      this.off(Events.namespace);
    }

    /**
     * @method
     * @name enable
     * @description Enables target instance
     * @example $(".target").checkbox("enable");
     */

    function enable(data) {
      this.prop("disabled", false);
      data.$classable.removeClass(RawClasses.disabled);
    }

    /**
     * @method
     * @name disable
     * @description Disables target instance
     * @example $(".target").checkbox("disable");
     */

    function disable(data) {
      this.prop("disabled", true);
      data.$classable.addClass(RawClasses.disabled);
    }

    /**
     * @method
     * @name update
     * @description Updates target instance
     * @example $(".target").checkbox("update");
     */

    function update(data) {
      var disabled = data.$el.is(":disabled") /* || data.$el.is("[readonly]") */ ,
        checked = data.$el.is(":checked");

      if (!disabled) {
        if (checked) {
          onSelect({
            data: data
          });
        } else {
          onDeselect({
            data: data
          });
        }
      }
    }

    /**
     * @method private
     * @name onClick
     * @description Handles click
     */

    function onClick(e) {
      var data = e.data;

      if (!$(e.target).is(data.$el)) {
        e.preventDefault();

        data.$el.trigger("click");
      }
    }

    /**
     * @method private
     * @name onChange
     * @description Handles external changes
     * @param e [object] "Event data"
     */

    function onChange(e) {
      var data = e.data,
        disabled = data.$el.is(":disabled") /* || data.$el.is("[readonly]") */ ,
        checked = data.$el.is(":checked");

      if (!disabled) {
        if (data.radio) {
          // radio
          if (checked) {
            onSelect(e);
          }
        } else {
          // Checkbox change events fire after state has changed
          if (checked) {
            onSelect(e);
          } else {
            onDeselect(e);
          }
        }
      }
    }

    /*
     * @method private
     * @name onSelect
     * @description Changes input to "checked"
     * @param e [object] "Event data"
     */
    function onSelect(e) {
      if (e.data.radio) {
        $('input[name="' + e.data.group + '"]').not(e.data.$el).trigger("deselect");
      }

      e.data.$el.trigger(Events.focus);
      e.data.$classable.addClass(RawClasses.checked);
    }

    /**
     * @method private
     * @name onDeselect
     * @description Changes input to "checked"
     * @param e [object] "Event data"
     */
    function onDeselect(e) {
      e.data.$classable.removeClass(RawClasses.checked);
    }

    /**
     * @method private
     * @name onFocus
     * @description Handles instance focus
     * @param e [object] "Event data"
     */

    function onFocus(e) {
      e.data.$classable.addClass(RawClasses.focus);
    }

    /**
     * @method private
     * @name onBlur
     * @description Handles instance blur
     * @param e [object] "Event data"
     */

    function onBlur(e) {
      e.data.$classable.removeClass(RawClasses.focus);
    }

    /**
     * @plugin
     * @name Checkbox
     * @description A jQuery plugin for replacing checkboxes.
     * @type widget
     * @main checkbox.js
     * @main checkbox.css
     * @dependency jQuery
     * @dependency core.js
     * @__dependency touch.js
     */

    var Plugin = Formstone.Plugin("checkbox", {
        widget: true,

        /**
         * @options
         * @param customClass [string] <''> "Class applied to instance"
         * @param toggle [boolean] <false> "Render 'toggle' styles"
         * @param labels.on [string] <'ON'> "Label for 'On' position; 'toggle' only"
         * @param labels.off [string] <'OFF'> "Label for 'Off' position; 'toggle' only"
         * @param theme [string] <"fs-light"> "Theme class name"
         */

        defaults: {
          customClass: "",
          toggle: false,
          labels: {
            on: "ON",
            off: "OFF"
          },
          theme: "fs-light"
        },

        classes: [
          "element_placeholder",
          "label",
          "marker",
          "flag",
          "radio",
          "focus",
          "checked",
          "disabled",
          "toggle",
          "state",
          "state_on",
          "state_off"
        ],

        methods: {
          _construct: construct,
          _destruct: destruct,

          // Public Methods

          enable: enable,
          disable: disable,
          update: update
        },

        events: {
          deselect: "deselect"
        }
      }),

      // Localize References

      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions;

  })

);

/*! formstone v1.4.20-1 [checkpoint.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize() {
      WindowHeight = $Window.height();

      Functions.iterate.call($Instances, resizeInstance);
    }

    /**
     * @method private
     * @name raf
     * @description Handles request animation frame
     */

    function raf() {
      ScrollTop = $Window.scrollTop();

      if (ScrollTop < 0) {
        ScrollTop = 0;
      }

      if (ScrollTop !== OldScrollTop) {
        renderRAF();

        OldScrollTop = ScrollTop;
      }

      Functions.iterate.call($Instances, scrollInstance);
    }

    /**
     * @method private
     * @name cacheInstances
     * @description Caches active instances
     */

    function cacheInstances() {
      $Instances = $(Classes.base);

      resize();
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      data.initialized = false;

      var $parent    = $(data.$el.data("checkpoint-parent")),
          $container = $(data.$el.data("checkpoint-container")),
          intersect  = data.$el.data("checkpoint-intersect"),
          offset     = data.$el.data("checkpoint-offset");

      if (intersect) {
        data.intersect = intersect;
      }
      if (offset) {
        data.offset = offset;
      }

      var intersectParts = data.intersect.split("-");

      data.windowIntersect = intersectParts[0];
      data.elIntersect = intersectParts[1];
      data.visible = false;

      data.$target = ($container.length) ? $container : data.$el;

      data.hasParent = ($parent.length > 0);
      data.$parent   = $parent;

      var $images = data.$target.find("img");

      if ($images.length) {
        $images.on(Events.load, data, resizeInstance);
      }

      data.$el.addClass(RawClasses.base);

      data.initialized = true;
    }

    /**
     * @method private
     * @name postConstruct
     * @description Run post build.
     * @param data [object] "Instance data"
     */

    function postConstruct(data) {
      cacheInstances();
      resize();
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      data.$el.removeClass(RawClasses.base);

      cacheInstances();
    }

    /**
     * @method private
     * @name renderRAF
     * @description Updates DOM based on animation values
     */

    function renderRAF() {
      Functions.iterate.call($Instances, checkInstance);
    }

    function scrollInstance(data) {
      if (!data.hasParent) {
        return;
      }

      var parentScroll = data.$parent.scrollTop();

      if (parentScroll !== data.parentScroll) {
        checkInstance(data);

        data.parentScroll = parentScroll;
      }
    }

    /**
     * @method
     * @name resize
     * @description Updates instance.
     * @example $(".target").checkpoint("resize");
     */

    /**
     * @method private
     * @name resizeInstance
     * @description Handle window resize event
     * @param data [object] "Instance data"
     */

    function resizeInstance(data) {
      if (!data.initialized) {
        return;
      }

      data.parentHeight = (data.hasParent) ? data.$parent.outerHeight(false) : WindowHeight;

      switch (data.windowIntersect) {
        case "top":
          data.windowCheck = 0 - data.offset;
          break;
        case "middle":
        case "center":
          data.windowCheck = (data.parentHeight / 2) - data.offset;
          break;
        case "bottom":
          data.windowCheck = data.parentHeight - data.offset;
          break;
        default:
          break;
      }

      data.elOffset = data.$target.offset();

      switch (data.elIntersect) {
        case "top":
          data.elCheck = data.elOffset.top;
          break;
        case "middle":
          data.elCheck = data.elOffset.top + (data.$target.outerHeight() / 2);
          break;
        case "bottom":
          data.elCheck = data.elOffset.top + data.$target.outerHeight();
          break;
        default:
          break;
      }

      if (data.hasParent) {
        var parentOffset = data.$parent.offset();
        data.elCheck -= parentOffset.top;
      }

      checkInstance(data);
    }

    /**
     * @method private
     * @name checkInstance
     * @description Handle window scroll event
     * @param data [object] "Instance data"
     */

    function checkInstance(data) {
      if (!data.initialized) {
        return;
      }

      var check = data.windowCheck + ((data.hasParent) ? data.parentScroll : ScrollTop);

      if (check >= data.elCheck) {
        if (!data.active) {
          data.$el.trigger(Events.activate);
        }

        data.active = true;
        data.$el.addClass(RawClasses.active);
      } else {
        if (data.reverse) {
          if (data.active) {
            data.$el.trigger(Events.deactivate);
          }

          data.active = false;
          data.$el.removeClass(RawClasses.active);
        }
      }
    }

    /**
     * @plugin
     * @name Checkpoint
     * @description A jQuery plugin for animating visible elements.
     * @type widget
     * @main checkpoint.js
     * @main checkpoint.css
     * @dependency jQuery
     * @dependency core.js
     */

    var Plugin = Formstone.Plugin("checkpoint", {
        widget: true,

        /**
         * @options
         * @param intersect [string] <'bottom-top'> "Position of intersection"
         * @param offset [int] <0> "Element offset for activating animation"
         * @param reverse [boolean] <false> "Deactivate animation when scrolling back"
         */

        defaults: {
          intersect: 'bottom-top',
          offset: 0,
          reverse: false,
        },

        classes: [
          "active"
        ],

        /**
         * @events
         * @event activate.checkpoint "Checkpoint activated"
         * @event deactivate.checkpoint "Checkpoint deactivated"
         */

        events: {
          activate: "activate",
          deactivate: "deactivate"
        },

        methods: {
          _construct: construct,
          _postConstruct: postConstruct,
          _destruct: destruct,
          _resize: resize,
          _raf: raf,

          resize: resizeInstance
        }
      }),

      // Localize References

      Namespace = Plugin.namespace,
      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      Window = Formstone.window,
      $Window = Formstone.$window,
      $Body,
      WindowHeight = 0,
      ScrollTop = 0,
      OldScrollTop = 0,
      $Instances = [];

  })

);

/*! formstone v1.4.20-1 [cookie.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name delegate
     * @param key [string] "Cookie key"
     * @param value [string] "Cookie value"
     * @param options [object] "Options object"
     * @return [null || string] "Cookie value, if 'read'"
     */

    function delegate(key, value, options) {
      if (typeof key === "object") {

        // Set defaults

        Defaults = $.extend(Defaults, key);
      } else {

        // Delegate intent

        options = $.extend({}, Defaults, options || {});

        if (typeof key !== "undefined") {
          if (typeof value !== "undefined") {
            if (value === null) {
              eraseCookie(key, options);
            } else {
              createCookie(key, value, options);
            }
          } else {
            return readCookie(key);
          }
        }
      }

      return null;
    }

    /**
     * @method
     * @name create
     * @description Creates a cookie.
     * @param key [string] "Cookie key"
     * @param value [string] "Cookie value"
     * @param options [object] "Options object"
     * @example $.cookie(key, value, options);
     */

    function createCookie(key, value, options) {
      var expiration = false,
        date = new Date();

      // Check Expiration Date

      if (options.expires && typeof options.expires === "number") {
        date.setTime(date.getTime() + options.expires);
        expiration = date.toGMTString();
      }

      var domain = (options.domain) ? "; domain=" + options.domain : "",
        expires = (expiration) ? "; expires=" + expiration : "",
        maxAge = (expiration) ? "; max-age=" + (options.expires / 1000) : "", // to seconds
        path = (options.path) ? "; path=" + options.path : "",
        secure = (options.secure) ? "; secure" : "";

      // Set Cookie

      Document.cookie = key + "=" + value + expires + maxAge + domain + path + secure;
    }

    /**
     * @method
     * @name read
     * @description Returns a cookie's value, or null.
     * @param key [string] "Cookie key"
     * @return [string | null] "Cookie's value, or null"
     * @example var value = $.cookie(key);
     */

    function readCookie(key) {
      var keyString = key + "=",
        cookies = Document.cookie.split(';');

      // Loop Cookies

      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];

        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
        }

        // Return Match

        if (cookie.indexOf(keyString) === 0) {
          return cookie.substring(keyString.length, cookie.length);
        }
      }

      return null;
    }

    /**
     * @method
     * @name erase
     * @description Deletes a cookie.
     * @param key [string] "Cookie key"
     * @example $.cookie(key, null);
     */

    function eraseCookie(key, options) {
      createCookie(key, "", $.extend({}, options, {
        expires: -604800000 // -7 days
      }));
    }

    /**
     * @plugin
     * @name Cookie
     * @description A jQuery plugin for simple access to browser cookies.
     * @type utility
     * @main cookie.js
     * @dependency jQuery
     * @dependency core.js
     */

    var Plugin = Formstone.Plugin("cookie", {
        utilities: {
          _delegate: delegate
        }
      }),

      /**
       * @options
       * @param domain [string] "Cookie domain"
       * @param expires [int] <604800000> "Time until cookie expires"
       * @param path [string] "Cookie path"
       */

      Defaults = {
        domain: null,
        expires: 604800000, // 7 days
        path: null,
        secure: null
      },

      // Localize References

      Document = Formstone.document;

  })

);

/*! formstone v1.4.20-1 [dropdown.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./scrollbar",
        "./touch"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name setup
     * @description Setup plugin.
     */

    function setup() {
      $Body = Formstone.$body;
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      data.multiple = this.prop("multiple");
      data.disabled = this.prop("disabled") || this.is("[readonly]");
      data.lastIndex = false;

      data.native = data.mobile || data.native; // TODO: 'mobile' deprecated
      data.useNative = data.native || Formstone.isMobile;

      if (data.multiple) {
        data.links = false;
      } else if (data.external) {
        data.links = true;
      }

      // Grab true original index, only if selected attribute exits
      var $trueOriginal = this.find("[selected]").not(":disabled"),
        $originalOption = this.find(":selected").not(":disabled"),
        originalLabel = $originalOption.text(),
        originalIndex = this.find("option").index($originalOption);

      if (!data.multiple && data.label !== "" && !$trueOriginal.length) {
        $originalOption = this.prepend('<option value="" class="' + RawClasses.item_placeholder + '" selected>' + data.label + '</option>');
        originalLabel = data.label;
        originalIndex = 0;
      } else {
        data.label = "";
      }

      // Build options array
      var $allOptions = this.find("option, optgroup"),
        $options = $allOptions.filter("option"),
        $label = $('[for="' + this.attr("id") + '"]');

      // Swap tab index, no more interacting with the actual input!
      data.tabIndex = this[0].tabIndex;
      this[0].tabIndex = -1;

      if ($label.length) {
        $label[0].tabIndex = -1;
      }

      // Build wrapper
      var wrapperClasses = [
        RawClasses.base,
        data.theme,
        data.customClass
      ];

      if (data.useNative) {
        wrapperClasses.push(RawClasses.native);
      } else if (data.cover) {
        wrapperClasses.push(RawClasses.cover);
      }
      if (data.multiple) {
        wrapperClasses.push(RawClasses.multiple);
      }
      if (data.disabled) {
        wrapperClasses.push(RawClasses.disabled);
      }

      // Aria

      data.id = this.attr("id");

      if (data.id) {
        data.ariaId = data.id;
      } else {
        data.ariaId = data.rawGuid;
      }

      data.ariaId += '-dropdown';
      data.selectedAriaId = data.ariaId + "-selected";

      // Build html
      var wrapperHtml = "",
        innerHtml = "";

      wrapperHtml += '<div class="' + wrapperClasses.join(" ") + '"id="' + data.ariaId + '" tabindex="' + data.tabIndex + '" role="listbox"';
      if (data.multiple) {
        wrapperHtml += ' aria-label="multi select"';
      } else {
        wrapperHtml += ' aria-haspopup="true" aria-live="polite" aria-labelledby="' + data.selectedAriaId + '"';
      }
      wrapperHtml += '></div>';

      // Build inner
      if (!data.multiple) {
        innerHtml += '<button type="button" class="' + RawClasses.selected + '" id="' + data.selectedAriaId + '" tabindex="-1">';
        innerHtml += $('<span></span>').text(trimText(originalLabel, data.trim)).html();
        innerHtml += '</button>';
      }
      innerHtml += '<div class="' + RawClasses.options + '">';
      innerHtml += '</div>';

      // Modify DOM
      this.wrap(wrapperHtml)
        .after(innerHtml);

      // Store plugin data
      data.$dropdown = this.parent(Classes.base);
      data.$label = $label;
      data.$allOptions = $allOptions;
      data.$options = $options;
      data.$selected = data.$dropdown.find(Classes.selected);
      data.$wrapper = data.$dropdown.find(Classes.options);
      data.$placeholder = data.$dropdown.find(Classes.placeholder);
      data.index = -1;
      data.closed = true;
      data.focused = false;

      buildOptions(data);

      if (!data.multiple) {
        updateOption(originalIndex, data);
      }

      // Scrollbar support
      if ($.fn.fsScrollbar !== undefined) {
        data.$wrapper.fsScrollbar({
          theme: data.theme
        }).find(".fs-scrollbar-content").attr("tabindex", null);
      }

      // Bind events
      data.$dropdown.on(Events.click, data, onClick);
      data.$selected.on(Events.click, data, onClick);

      data.$dropdown.on(Events.click, Classes.item, data, onSelect)
        .on(Events.close, data, onClose);

      // Change events
      this.on(Events.change, data, onChange);

      // Focus/Blur events
      if (!data.useNative) {
        // Handle clicks to associated labels
        this.on(Events.focusIn, data, function(e) {
          e.data.$dropdown.trigger(Events.raw.focus);
        });

        data.$dropdown.on(Events.focusIn, data, onFocusIn)
          .on(Events.focusOut, data, onFocusOut);
      }
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      if (data.$dropdown.hasClass(RawClasses.open)) {
        data.$selected.trigger(Events.click);
      }

      // Scrollbar support
      if ($.fn.fsScrollbar !== undefined) {
        data.$wrapper.fsScrollbar("destroy");
      }

      data.$el[0].tabIndex = data.tabIndex;

      if (data.$label.length) {
        data.$label[0].tabIndex = data.tabIndex;
      }

      data.$dropdown.off(Events.namespace);
      data.$options.off(Events.namespace);

      data.$placeholder.remove();
      data.$selected.remove();
      data.$wrapper.remove();

      data.$el.off(Events.namespace)
        .show()
        .unwrap();
    }

    /**
     * @method
     * @name disable
     * @description Disables target instance or option.
     * @param option [string] <null> "Target option value"
     * @example $(".target").dropdown("disable", "1");
     */

    function disableDropdown(data, option) {
      if (typeof option !== "undefined") {
        var index = data.$items.index(data.$items.filter("[data-value=" + option + "]"));

        data.$items.eq(index).addClass(RawClasses.item_disabled);
        data.$options.eq(index).prop("disabled", true);
      } else {
        if (data.$dropdown.hasClass(RawClasses.open)) {
          data.$selected.trigger(Events.click);
        }

        data.$dropdown.addClass(RawClasses.disabled);
        data.$el.prop("disabled", true);

        data.disabled = true;
      }
    }

    /**
     * @method
     * @name enable
     * @description Enables target instance or option.
     * @param option [string] <null> "Target option value"
     * @example $(".target").dropdown("enable", "1");
     */

    function enableDropdown(data, option) {
      if (typeof option !== "undefined") {
        var index = data.$items.index(data.$items.filter("[data-value=" + option + "]"));
        data.$items.eq(index).removeClass(RawClasses.item_disabled);
        data.$options.eq(index).prop("disabled", false);
      } else {
        data.$dropdown.removeClass(RawClasses.disabled);
        data.$el.prop("disabled", false);

        data.disabled = false;
      }
    }

    /**
     * @method
     * @name update
     * @description Updates instance.
     * @example $(".target").dropdown("update");
     */

    function updateDropdown(data) {
      // Scrollbar support
      if ($.fn.fsScrollbar !== undefined) {
        data.$wrapper.fsScrollbar("destroy");
      }

      var index = data.index;

      data.$allOptions = data.$el.find("option, optgroup");
      data.$options = data.$allOptions.filter("option");
      data.index = -1;

      index = data.$options.index(data.$options.filter(":selected"));

      buildOptions(data);

      if (!data.multiple) {
        updateOption(index, data);
      }

      // Scrollbar support
      if ($.fn.fsScrollbar !== undefined) {
        data.$wrapper.fsScrollbar({
          theme: data.theme
        }).find(".fs-scrollbar-content").attr("tabindex", null);
      }
    }

    /**
     * @method private
     * @name buildOptions
     * @description Builds instance's option set.
     * @param data [object] "Instance data"
     */

    function buildOptions(data) {
      var html = '',
        j = 0;

      for (var i = 0, count = data.$allOptions.length; i < count; i++) {
        var $option = data.$allOptions.eq(i),
          classes = [];

        // Option group
        if ($option[0].tagName === "OPTGROUP") {
          classes.push(RawClasses.group);

          // Disabled groups
          if ($option.prop("disabled")) {
            classes.push(RawClasses.disabled);
          }

          html += '<span class="' + classes.join(" ") + '">' + $option.attr("label") + '</span>';
        } else {
          var opVal = $option.val(),
            opLabel = $option.data("label"),
            opType = (data.links) ? "a" : 'button type="button"';

          if (!$option.attr("value")) {
            $option.attr("value", opVal);
          }

          classes.push(RawClasses.item);

          if ($option.hasClass(RawClasses.item_placeholder)) {
            classes.push(RawClasses.item_placeholder);

            opType = "span";
          }
          if ($option.prop("selected")) {
            classes.push(RawClasses.item_selected);
          }
          if ($option.prop("disabled")) {
            classes.push(RawClasses.item_disabled);
          }

          html += '<' + opType + ' class="' + classes.join(" ") + '"';

          if (data.links) {
            if (opType === "span") {
              html += ' aria-hidden="true"';
            } else {
              html += ' href="' + opVal + '"';

              if (data.external) {
                html += ' target="_blank"';
              }
            }
          } else {
            html += ' data-value="' + opVal + '"';
          }

          //html += ' tabindex="-1">';
          html += ' role="option"';
          if ($option.prop("selected")) {
            html += ' "aria-selected"="true"';
          }
          html += '>';

          if (opLabel) {
            html += opLabel;
          } else {
            html += Functions.decodeEntities(trimText($option.text(), data.trim));
          }

          html += '</' + opType + '>';

          j++;
        }
      }

      data.$items = data.$wrapper.html($.parseHTML(html))
        .find(Classes.item);
    }

    /**
     * @method private
     * @name onClick
     * @description Handles click to selected item.
     * @param e [object] "Event data"
     */

    function onClick(e) {
      Functions.killEvent(e);

      var data = e.data;

      if (!data.disabled && !data.useNative) {
        // Delegate intent
        if (data.closed) {
          openOptions(data);
        } else {
          closeOptions(data);
        }
      }

      closeOthers(data);
    }

    function closeOthers(data) {
      $(Classes.base).not(data.$dropdown).trigger(Events.close, [data]);
    }

    /**
     * @method private
     * @name openOptions
     * @description Opens option set.
     * @param data [object] "Instance data"
     */

    /**
     * @method
     * @name open
     * @description Opens target instance.
     * @example $(".target").dropdown("open");
     */

    function openOptions(data) {
      // Make sure it's not already open
      if (data.closed) {
        var windowHeight = $Window.height(),
          optionsHeight = data.$wrapper.outerHeight(true),
          boundingRect = data.$dropdown[0].getBoundingClientRect();

        // Calculate bottom of document
        if (boundingRect.bottom + optionsHeight > windowHeight - data.bottomEdge) {
          data.$dropdown.addClass(RawClasses.bottom);
        }

        // Bind Events
        $Body.on(Events.click + data.dotGuid, ":not(" + Classes.options + ")", data, closeOptionsHelper);

        data.$dropdown.trigger(Events.focusIn);

        data.$dropdown.addClass(RawClasses.open);
        scrollOptions(data);

        data.closed = false;
      }
    }

    /**
     * @method private
     * @name closeOptions
     * @description Closes option set.
     * @param data [object] "Instance data"
     */

    /**
     * @method
     * @name close
     * @description Closes target instance.
     * @example $(".target").dropdown("close");
     */

    function closeOptions(data) {
      // Make sure it's actually open
      if (data && !data.closed) {
        $Body.off(Events.click + data.dotGuid);

        data.$dropdown.removeClass([RawClasses.open, RawClasses.bottom].join(" "));

        data.closed = true;
      }
    }

    /**
     * @method private
     * @name closeOptionsHelper
     * @description Determines if event target is outside instance before closing
     * @param e [object] "Event data"
     */

    function closeOptionsHelper(e) {
      Functions.killEvent(e);

      var data = e.data;

      if (data && $(e.currentTarget).parents(Classes.base).length === 0) {
        closeOptions(data);

        data.$dropdown.trigger(Events.focusOut);
      }
    }

    /**
     * @method private
     * @name onClose
     * @description Handles close event.
     * @param e [object] "Event data"
     */

    function onClose(e) {
      var data = e.data;

      if (data) {
        closeOptions(data);

        data.$dropdown.trigger(Events.focusOut);
      }
    }

    /**
     * @method private
     * @name onSelect
     * @description Handles option select.
     * @param e [object] "Event data"
     */

    function onSelect(e) {
      var $target = $(this),
        data = e.data;

      Functions.killEvent(e);

      if (!data.disabled) {
        var index = data.$items.index($target);

        data.focusIndex = index;

        if (data.$wrapper.is(":visible")) {
          updateOption(index, data, e.shiftKey, e.metaKey || e.ctrlKey);
          handleChange(data);
        }

        if (!data.multiple) {
          closeOptions(data);
        }

        data.$dropdown.trigger(Events.focus);
      }
    }

    /**
     * @method private
     * @name onChange
     * @description Handles external changes.
     * @param e [object] "Event data"
     */

    function onChange(e, internal) {
      var $target = $(this),
        data = e.data;

      if (!internal && !data.multiple) {
        var index = data.$options.index(data.$options.filter(":selected"));

        data.focusIndex = index;

        updateOption(index, data);
        handleChange(data, true);
      }
    }

    /**
     * @method private
     * @name onFocusIn
     * @description Handles instance focusIn.
     * @param e [object] "Event data"
     */

    function onFocusIn(e) {
      Functions.killEvent(e);

      var $target = $(e.currentTarget),
        data = e.data;

      if (!data.disabled && !data.multiple && !data.focused) {
        closeOthers(data);

        data.focused = true;
        data.focusIndex = data.index;
        data.input = '';

        data.$dropdown.addClass(RawClasses.focus)
          .on(Events.keyDown + data.dotGuid, data, onKeypress);
      }
    }

    /**
     * @method private
     * @name onFocusOut
     * @description Handles instance focusOut.
     * @param e [object] "Event data"
     */

    function onFocusOut(e) {
      Functions.killEvent(e);

      var $target = $(e.currentTarget),
        data = e.data;

      if (data.focused && data.closed) {
        data.focused = false;

        data.$dropdown.removeClass(RawClasses.focus)
          .off(Events.keyDown + data.dotGuid);

        if (!data.multiple) {
          // Clean up
          closeOptions(data);

          if (data.index !== data.focusIndex) {
            handleChange(data);

            data.focusIndex = data.index;
          }
        }
      }
    }

    /**
     * @method private
     * @name onKeypress
     * @description Handles instance keypress, once focused.
     * @param e [object] "Event data"
     */

    function onKeypress(e) {
      var data = e.data;

      data.keyTimer = Functions.startTimer(data.keyTimer, 1000, function() {
        data.input = '';
      });

      if (e.keyCode === 13) {
        if (!data.closed) {
          closeOptions(data);
          updateOption(data.index, data);
        }
        handleChange(data);
      } else if (e.keyCode !== 9 && (!e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey)) {
        // Ignore modifiers & tabs
        Functions.killEvent(e);

        var total = data.$items.length - 1,
          index = (data.index < 0) ? 0 : data.index;

        // Firefox left/right support thanks to Kylemade
        if ($.inArray(e.keyCode, (Formstone.isFirefox) ? [38, 40, 37, 39] : [38, 40]) > -1) {
          // Increment / decrement using the arrow keys
          index = index + ((e.keyCode === 38 || (Formstone.isFirefox && e.keyCode === 37)) ? -1 : 1);

          if (index < 0) {
            index = 0;
          }
          if (index > total) {
            index = total;
          }
        } else {
          var input = String.fromCharCode(e.keyCode).toUpperCase(),
            check,
            i;

          // Store more than 1 input letter
          data.input += input;

          // Search for input from original index
          for (i = data.index + 1; i <= total; i++) {
            check = data.$options.eq(i).text().substr(0, data.input.length).toUpperCase();

            if (check === data.input) {
              index = i;
              break;
            }
          }

          // If not, start from the beginning
          if (index < 0 || index === data.index) {
            for (i = 0; i <= total; i++) {
              check = data.$options.eq(i).text().substr(0, data.input.length).toUpperCase();

              if (check === data.input) {
                index = i;
                break;
              }
            }
          }
        }

        // Update
        if (index >= 0) {
          updateOption(index, data);
          scrollOptions(data);
        }
      }
    }

    /**
     * @method private
     * @name updateOption
     * @description Updates instance based on new target index.
     * @param index [int] "Selected option index"
     * @param data [object] "instance data"
     */

    function updateOption(index, data, shiftKey, metaKey) {
      var $item = data.$items.eq(index),
        $option = data.$options.eq(index),
        isSelected = $item.hasClass(RawClasses.item_selected),
        isDisabled = $item.hasClass(RawClasses.item_disabled);

      // Check for disabled options
      if (!isDisabled) {
        if (data.multiple) {
          if (data.useNative) {
            if (isSelected) {
              $option.prop("selected", null)
                .attr("aria-selected", null);
              $item.removeClass(RawClasses.item_selected);
            } else {
              $option.prop("selected", true)
                .attr("aria-selected", true);
              $item.addClass(RawClasses.item_selected);
            }
          } else {
            if (shiftKey && data.lastIndex !== false) {
              var start = (data.lastIndex > index) ? index : data.lastIndex,
                end = ((data.lastIndex > index) ? data.lastIndex : index) + 1;

              data.$options.prop("selected", null)
                .attr("aria-selected", null);
              data.$items.filter(Classes.item_selected)
                .removeClass(RawClasses.item_selected);

              data.$options.slice(start, end).not("[disabled]").prop("selected", true);
              data.$items.slice(start, end).not(Classes.item_disabled).addClass(RawClasses.item_selected);
            } else if (metaKey || data.selectMultiple) {
              if (isSelected) {
                $option.prop("selected", null)
                  .attr("aria-selected", null);
                $item.removeClass(RawClasses.item_selected);
              } else {
                $option.prop("selected", true)
                  .attr("aria-selected", true);
                $item.addClass(RawClasses.item_selected);
              }

              data.lastIndex = index;
            } else {
              data.$options.prop("selected", null)
                .attr("aria-selected", null);
              data.$items.filter(Classes.item_selected)
                .removeClass(RawClasses.item_selected);

              $option.prop("selected", true)
                .attr("aria-selected", true);
              $item.addClass(RawClasses.item_selected);

              data.lastIndex = index;
            }
          }
        } else if (index > -1 && index < data.$items.length) {
          if (index !== data.index) {
            var label = $option.data("label") || $item.html();

            data.$selected.html(label)
              .removeClass(Classes.item_placeholder);

            data.$items.filter(Classes.item_selected)
              .removeClass(RawClasses.item_selected);

            data.$el[0].selectedIndex = index;

            $item.addClass(RawClasses.item_selected);
            data.index = index;
          }
        } else if (data.label !== "") {
          data.$selected.html(data.label);
        }
      }
    }

    /**
     * @method private
     * @name scrollOptions
     * @description Scrolls options wrapper to specific option.
     * @param data [object] "Instance data"
     */

    function scrollOptions(data) {
      var $selected = data.$items.eq(data.index),
        selectedOffset = (data.index >= 0 && !$selected.hasClass(RawClasses.item_placeholder)) ? $selected.position() : {
          left: 0,
          top: 0
        },
        buffer = (data.$wrapper.outerHeight() - $selected.outerHeight()) / 2;

      if ($.fn.fsScrollbar !== undefined) {
        data.$wrapper.fsScrollbar("resize")
          .fsScrollbar("scroll", (data.$wrapper.find(".fs-scrollbar-content").scrollTop() + selectedOffset.top));
      } else {
        data.$wrapper.scrollTop(data.$wrapper.scrollTop() + selectedOffset.top - buffer);
      }
    }

    /**
     * @method private
     * @name handleChange
     * @description Handles change events.
     * @param data [object] "Instance data"
     */

    function handleChange(data, external) {
      if (data.links) {
        launchLink(data);
      } else {
        if (!external) {
          data.$el.trigger(Events.raw.change, [true]);
        }
      }
    }

    /**
     * @method private
     * @name launchLink
     * @description Launches link.
     * @param data [object] "Instance data"
     */

    function launchLink(data) {
      var url = data.$el.val();

      if (data.external) {
        // Open link in a new tab/window
        Window.open(url);
      } else {
        // Open link in same tab/window
        Window.location.href = url;
      }
    }

    /**
     * @method private
     * @name trimText
     * @description Trims text, if specified length is greater then 0.
     * @param length [int] "Length to trim at"
     * @param text [string] "Text to trim"
     * @return [string] "Trimmed string"
     */

    function trimText(text, length) {
      if (length === 0) {
        return text;
      } else {
        if (text.length > length) {
          return text.substring(0, length) + "...";
        } else {
          return text;
        }
      }
    }

    /**
     * @method private
     * @name escapeText
     * @description Escapes text.
     * @param text [string] "Text to escape"
     */

    function escapeText(text) {
      return (typeof text === "string") ? text.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1') : text;
    }

    /**
     * @plugin
     * @name Dropdown
     * @description A jQuery plugin for custom select elements.
     * @type widget
     * @main dropdown.js
     * @main dropdown.css
     * @dependency jQuery
     * @dependency core.js
     * @dependency scrollbar.js (optional)
     * @dependency touch.js (optional, for scrollbar)
     */

    var Plugin = Formstone.Plugin("dropdown", {
        widget: true,

        /**
         * @options
         * @param bottomEdge [int] <0> "Threshold for bottom position”
         * @param cover [boolean] <false> "Cover handle with option set"
         * @param customClass [string] <''> "Class applied to instance"
         * @param label [string] <''> "Label displayed before selection"
         * @param external [boolean] <false> "Open options as links in new window"
         * @param links [boolean] <false> "Open options as links in same window"
         * @param native [boolean] <false> "Use native browser options"
         * @param theme [string] <"fs-light"> "Theme class name"
         * @param trim [int] <0> "Trim options to specified length; 0 to disable”
         * @param selectMultiple [boolean] <false> "Select multiple items without push ctrl key”
         */
        defaults: {
          bottomEdge: 0,
          cover: false,
          customClass: "",
          label: "",
          external: false,
          links: false,
          mobile: false, // TODO: deprecated
          native: false,
          theme: "fs-light",
          trim: 0,
          selectMultiple: false
        },

        methods: {
          _construct: construct,
          _destruct: destruct,

          disable: disableDropdown,
          enable: enableDropdown,
          update: updateDropdown,
          open: openOptions,
          close: closeOptions
        },

        classes: [
          "cover",
          "bottom",
          "multiple",
          "mobile", // deprecated
          "native",

          "open",
          "disabled",
          "focus",

          "selected",
          "options",
          "group",
          "item",

          "item_disabled",
          "item_selected",
          "item_placeholder"
        ],

        events: {
          close: "close"
        }
      }),

      // Localize References

      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      // Local

      Window = Formstone.window,
      $Window = Formstone.$window,
      Document = Formstone.document,
      $Body = null;

    // Setup

    Formstone.Ready(setup);

  })

);

/*! formstone v1.4.20-1 [equalize.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./mediaquery"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize(windowWidth) {
      Functions.iterate.call($Instances, resizeInstance);
    }

    /**
     * @method private
     * @name cacheInstances
     * @description Caches active instances
     */

    function cacheInstances() {
      $Instances = $(Classes.element);
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance Data"
     */

    function construct(data) {
      data.maxWidth = (data.maxWidth === Infinity ? "100000px" : data.maxWidth);
      data.mq = "(min-width:" + data.minWidth + ") and (max-width:" + data.maxWidth + ")";
      data.type = (data.property === "height") ? "outerHeight" : "outerWidth";

      if (data.target) {
        if (!$.isArray(data.target)) {
          data.target = [data.target];
        }
      } else {
        data.target = ["> *"];
      }

      cacheInstances();

      $.fsMediaquery("bind", data.rawGuid, data.mq, {
        enter: function() {
          enable.call(data.$el, data);
        },
        leave: function() {
          disable.call(data.$el, data);
        }
      });
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      tearDown(data);

      $.fsMediaquery("unbind", data.rawGuid);

      cacheInstances();
    }

    /**
     * @method
     * @name resize
     * @description Resizes instance
     * @example $(".target").equalize("resize");
     */

    /**
     * @method private
     * @name resizeInstance
     * @description Handle window resize event
     * @param data [object] "Instance data"
     */

    function resizeInstance(data) {
      if (data.data) {
        data = data.data; // normalize image resize events
      }

      if (data.enabled) {
        var value,
          check,
          $target;

        for (var i = 0; i < data.target.length; i++) {
          value = 0;
          check = 0;
          $target = data.$el.find(data.target[i]);

          $target.css(data.property, "");

          for (var j = 0; j < $target.length; j++) {
            check = $target.eq(j)[data.type]();

            if (check > value) {
              value = check;
            }
          }

          $target.css(data.property, value);
        }
      }
    }

    /**
     * @method
     * @name disable
     * @description Disables instance of plugin
     * @example $(".target").equalize("disable");
     */

    function disable(data) {
      if (data.enabled) {
        data.enabled = false;

        tearDown(data);
      }
    }

    /**
     * @method
     * @name enable
     * @description Enables instance of plugin
     * @example $(".target").equalize("enable");
     */

    function enable(data) {
      if (!data.enabled) {
        data.enabled = true;

        var $images = data.$el.find("img");

        if ($images.length) {
          $images.on(Events.load, data, resizeInstance);
        }

        resizeInstance(data);
      }
    }

    /**
     * @method private
     * @name tearDown
     * @description Removes styling from elements
     * @param data [object] "Instance data"
     */

    function tearDown(data) {
      for (var i = 0; i < data.target.length; i++) {
        data.$el.find(data.target[i]).css(data.property, "");
      }

      data.$el.find("img").off(Events.namespace);
    }

    /**
     * @plugin
     * @name Equalize
     * @description A jQuery plugin for equal dimensions.
     * @type widget
     * @main equalize.js
     * @dependency jQuery
     * @dependency core.js
     * @dependency mediaquery.js
     */

    var Plugin = Formstone.Plugin("equalize", {
        widget: true,
        priority: 5,

        /**
         * @options
         * @param maxWidth [string] <'Infinity'> "Width at which to auto-disable plugin"
         * @param minWidth [string] <'0'> "Width at which to auto-disable plugin"
         * @param property [string] <"height"> "Property to size; 'height' or 'width'"
         * @param target [string OR array] <null> "Target child selector(s); Defaults to direct descendants"
         */

        defaults: {
          maxWidth: Infinity,
          minWidth: "0px",
          property: "height",
          target: null
        },

        methods: {
          _construct: construct,
          _destruct: destruct,
          _resize: resize,

          resize: resizeInstance
        }
      }),

      // Localize References

      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      $Instances = [];

  })

);

/*! formstone v1.4.20-1 [lightbox.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./touch",
        "./transition",
        "./viewer"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name setup
     * @description Setup plugin.
     */

    function setup() {
      $Body = Formstone.$body;
      $Locks = $("html, body");

      OnLoad = Formstone.window.location.hash.replace("#", "");
    }

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize() {
      if (Instance) {
        resizeLightbox();
      }
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      this.on(Events.click, data, buildLightbox);

      var gallery = this.data(Namespace + "-gallery");

      if (!OnLoaded && OnLoad && gallery === OnLoad) {
        OnLoaded = true;

        this.trigger(Events.click);
      }
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      closeLightbox();

      this.off(Events.namespace);
    }

    /**
     * @method private
     * @name initialize
     * @description Builds instance from $target.
     * @param $target [jQuery] "Target jQuery object"
     */

    function initialize($target, options) {
      if ($target instanceof $) {

        // Emulate event

        buildLightbox.apply(Window, [{
          data: $.extend(true, {}, {
            $object: $target
          }, Defaults, options || {})
        }]);
      }
    }

    /**
     * @method private
     * @name buildLightbox
     * @description Builds new lightbox.
     * @param e [object] "Event data"
     */

    function buildLightbox(e) {
      if (!Instance) {
        var data = e.data;

        // if (data.mobile === false) {
        //   data.overlay = false;
        // }

        // Cache internal data
        Instance = $.extend({}, {
          visible: false,
          gallery: {
            active: false
          },
          isMobile: ((Formstone.isMobile && data.mobile !== false) || data.overlay),
          isTouch: Formstone.support.touch,
          isAnimating: true,
          isZooming: false,
          oldContentHeight: 0,
          oldContentWidth: 0,
          metaHeight: 0,
          thumbnailHeight: 0,
          captionOpen: false,
          thumbnailsOpen: false,
          tapTimer: null
        }, data);

        Instance.isViewer = (Instance.isMobile && data.viewer && typeof $.fn.fsViewer !== "undefined");

        // Check target type
        var $el = data.$el,
          $object = data.$object,
          source = ($el && $el[0].href) ? $el[0].href || "" : "",
          hash = ($el && $el[0].hash) ? $el[0].hash || "" : "",
          sourceParts = source.toLowerCase().split(".").pop().split(/\#|\?/),
          type = ($el) ? $el.data(Namespace + "-type") : "",
          isImage = ((type === "image") || (source.match(data.fileTypes) || source.substr(0, 10) === "data:image")),
          isVideo = checkVideo(source),
          isUrl = ((type === "url") || (!isImage && !isVideo && source.substr(0, 4) === "http" && !hash)),
          isElement = ((type === "element") || (!isImage && !isVideo && !isUrl && (hash.substr(0, 1) === "#"))),
          isObject = ((typeof $object !== "undefined"));

        if (isElement) {
          source = hash;
        }

        // Retain default click
        if (!(isImage || isVideo || isUrl || isElement || isObject)) {
          Instance = null;

          return;
        }

        // Kill event
        Functions.killEvent(e);

        // Double the margin
        Instance.margin *= 2;

        if (isImage) {
          Instance.type = "image";
        } else if (isVideo) {
          Instance.type = "video";
        } else {
          Instance.type = "element";
        }

        // if (isImage || isVideo) {
        if ($el && $el.length) {
          // Check for gallery
          var id = $el.data(Namespace + "-gallery");

          if (id) {
            Instance.gallery.active = true;
            Instance.gallery.id = id;
            Instance.gallery.$items = $("a[data-lightbox-gallery= " + Instance.gallery.id + "], a[rel= " + Instance.gallery.id + "]"); // backwards compatibility
            Instance.gallery.index = Instance.gallery.$items.index(Instance.$el);
            Instance.gallery.total = Instance.gallery.$items.length - 1;
          }
        }

        // Thumbnails support
        if (!(Instance.thumbnails && (isImage || isVideo) && Instance.gallery.active)) {
          Instance.thumbnails = false;
        }

        // Assemble HTML
        var html = '';
        if (!Instance.isMobile) {
          html += '<div class="' + [RawClasses.overlay, Instance.theme, Instance.customClass].join(" ") + '"></div>';
        }
        var lightboxClasses = [
          RawClasses.base,
          RawClasses.loading,
          RawClasses.animating,
          Instance.theme,
          Instance.customClass
        ];

        if (Instance.fixed) {
          lightboxClasses.push(RawClasses.fixed);
        }
        if (Instance.isMobile) {
          lightboxClasses.push(RawClasses.mobile);
        }
        if (Instance.isTouch) {
          lightboxClasses.push(RawClasses.touch);
        }
        if (isUrl) {
          lightboxClasses.push(RawClasses.iframed);
        }
        if (isElement || isObject) {
          lightboxClasses.push(RawClasses.inline);
        }
        if (Instance.thumbnails) {
          lightboxClasses.push(RawClasses.thumbnailed);
        }

        Instance.labels.lightbox = Instance.labels.lightbox.replace('{guid}', data.numGuid);

        html += '<div class="' + lightboxClasses.join(" ") + '" role="dialog" aria-label="' + Instance.labels.lightbox + '" tabindex="-1">';
        html += '<button type="button" class="' + RawClasses.close + '">' + Instance.labels.close + '</button>';
        html += '<span class="' + RawClasses.loading_icon + '"></span>';
        html += '<div class="' + RawClasses.container + '">';

        // Thumbnails
        if (Instance.gallery.active && Instance.thumbnails) {
          html += '<div class="' + [RawClasses.thumbnails] + '">';
          html += '<div class="' + [RawClasses.thumbnail_container] + '">';

          var $item,
            thumb;

          for (var i = 0, count = Instance.gallery.$items.length; i < count; i++) {
            $item = Instance.gallery.$items.eq(i);
            thumb = $item.data("lightbox-thumbnail");

            if (!thumb) {
              thumb = $item.find("img").attr("src");
            }

            html += '<button class="' + [RawClasses.thumbnail_item] + '">';
            html += '<img src="' + thumb + '" alt="">';
            html += '</button>';
          }

          html += '</div></div>';
        }

        html += '<div class="' + RawClasses.content + '"></div>';

        if (isImage || isVideo) {

          html += '<div class="' + RawClasses.tools + '">';

          html += '<div class="' + RawClasses.controls + '">';
          if (Instance.gallery.active) {
            html += '<button type="button" class="' + [RawClasses.control, RawClasses.control_previous].join(" ") + '">' + Instance.labels.previous + '</button>';
            html += '<button type="button" class="' + [RawClasses.control, RawClasses.control_next].join(" ") + '">' + Instance.labels.next + '</button>';
          }
          if (Instance.isMobile && Instance.isTouch) {
            html += '<button type="button" class="' + [RawClasses.toggle, RawClasses.caption_toggle].join(" ") + '">' + Instance.labels.captionClosed + '</button>';

            if (Instance.gallery.active && Instance.thumbnails) {
              html += '<button type="button" class="' + [RawClasses.toggle, RawClasses.thumbnail_toggle].join(" ") + '">' + Instance.labels.thumbnailsClosed + '</button>';
            }
          }
          html += '</div>'; // controls

          html += '<div class="' + RawClasses.meta + '">';
          html += '<div class="' + RawClasses.meta_content + '">';
          if (Instance.gallery.active) {
            html += '<p class="' + RawClasses.position + '"';
            if (Instance.gallery.total < 1) {
              html += ' style="display: none;"';
            }
            html += '>';
            html += '<span class="' + RawClasses.position_current + '">' + (Instance.gallery.index + 1) + '</span> ';
            html += Instance.labels.count;
            html += ' <span class="' + RawClasses.position_total + '">' + (Instance.gallery.total + 1) + '</span>';
            html += '</p>';
          }
          html += '<div class="' + RawClasses.caption + '">';
          html += Instance.formatter.call($el, data);
          html += '</div></div></div>'; // caption, meta_content, meta

          html += '</div>'; // tools
        } else {
          // Other galleries
          if (Instance.gallery.active) {
            html += '<div class="' + RawClasses.tools + '">';

            html += '<div class="' + RawClasses.controls + '">';

            html += '<button type="button" class="' + [RawClasses.control, RawClasses.control_previous].join(" ") + '">' + Instance.labels.previous + '</button>';
            html += '<button type="button" class="' + [RawClasses.control, RawClasses.control_next].join(" ") + '">' + Instance.labels.next + '</button>';

            html += '</div>';

            html += '</div>';
          }
        }
        html += '</div></div>'; //container, content, lightbox

        // Modify Dom
        $Body.append(html);

        // Cache jquery objects
        Instance.$overlay = $(Classes.overlay);
        Instance.$lightbox = $(Classes.base);
        Instance.$close = $(Classes.close);
        Instance.$container = $(Classes.container);
        Instance.$content = $(Classes.content);
        Instance.$tools = $(Classes.tools);
        Instance.$meta = $(Classes.meta);
        Instance.$metaContent = $(Classes.meta_content);
        Instance.$position = $(Classes.position);
        Instance.$caption = $(Classes.caption);
        Instance.$controlBox = $(Classes.controls);
        Instance.$controls = $(Classes.control);
        Instance.$thumbnails = $(Classes.thumbnails);
        Instance.$thumbnailContainer = $(Classes.thumbnail_container);
        Instance.$thumbnailItems = $(Classes.thumbnail_item);

        if (Instance.isMobile) {
          Instance.paddingVertical = Instance.$close.outerHeight();
          Instance.paddingHorizontal = 0;

          Instance.mobilePaddingVertical = parseInt(Instance.$content.css("paddingTop"), 10) + parseInt(Instance.$content.css("paddingBottom"), 10);
          Instance.mobilePaddingHorizontal = parseInt(Instance.$content.css("paddingLeft"), 10) + parseInt(Instance.$content.css("paddingRight"), 10);
        } else {
          Instance.paddingVertical = parseInt(Instance.$lightbox.css("paddingTop"), 10) + parseInt(Instance.$lightbox.css("paddingBottom"), 10);
          Instance.paddingHorizontal = parseInt(Instance.$lightbox.css("paddingLeft"), 10) + parseInt(Instance.$lightbox.css("paddingRight"), 10);

          Instance.mobilePaddingVertical = 0;
          Instance.mobilePaddingHorizontal = 0;
        }

        Instance.contentHeight = Instance.$lightbox.outerHeight() - Instance.paddingVertical;
        Instance.contentWidth = Instance.$lightbox.outerWidth() - Instance.paddingHorizontal;
        Instance.controlHeight = Instance.$controls.outerHeight();

        // Center
        centerLightbox();

        // Update gallery
        if (Instance.gallery.active) {
          Instance.$lightbox.addClass(RawClasses.has_controls);
          updateGalleryControls();
        }

        // Bind events
        $Window.on(Events.keyDown, onKeyDown);
        $Body.on(Events.click, [Classes.overlay, Classes.close].join(", "), closeLightbox)
          .on([Events.focus, Events.focusIn].join(" "), onDocumentFocus);

        if (Instance.gallery.active) {
          Instance.$lightbox.on(Events.click, Classes.control, advanceGallery);
        }

        if (Instance.thumbnails) {
          Instance.$lightbox.on(Events.click, Classes.thumbnail_item, jumpGallery);
        }

        if (Instance.isMobile && Instance.isTouch) {
          Instance.$lightbox.on(Events.click, Classes.caption_toggle, toggleCaption)
            .on(Events.click, Classes.thumbnail_toggle, toggleThumbnails);
        }

        Instance.$lightbox.fsTransition({
            property: "opacity"
          },
          function() {
            if (isImage) {
              loadImage(source);
            } else if (isVideo) {
              loadVideo(source);
            } else if (isUrl) {
              loadURL(source);
            } else if (isElement) {
              appendContents(source);
            } else if (isObject) {
              appendObject(Instance.$object);
            }
          }).addClass(RawClasses.open);

        Instance.$overlay.addClass(RawClasses.open);
      }
    }

    /**
     * @method
     * @name resize
     * @description Resizes lightbox.
     * @example $.lightbox("resize");
     * @param height [int | false] "Target height or false to auto size"
     * @param width [int | false] "Target width or false to auto size"
     */

    /**
     * @method private
     * @name resizeLightbox
     * @description Triggers resize of instance.
     */

    function resizeLightbox(e) {
      if (typeof e !== "object") {
        Instance.targetHeight = arguments[0];
        Instance.targetWidth = arguments[1];
      }

      if (Instance.type === "element") {
        sizeContent(Instance.$content.find("> :first-child"));
      } else if (Instance.type === "image") {
        sizeImage();
      } else if (Instance.type === "video") {
        sizeVideo();
      }

      sizeLightbox();
    }

    /**
     * @method
     * @name close
     * @description Closes active instance.
     * @example $.lightbox("close");
     */

    /**
     * @method private
     * @name closeLightbox
     * @description Closes active instance.
     * @param e [object] "Event data"
     */

    function closeLightbox(e) {
      Functions.killEvent(e);

      if (Instance) {
        Instance.$lightbox.fsTransition("destroy");
        Instance.$content.fsTransition("destroy");

        Instance.$lightbox.addClass(RawClasses.animating).fsTransition({
            property: "opacity"
          },
          function(e) {
            // Clean up
            if (typeof Instance.$inlineTarget !== 'undefined' && Instance.$inlineTarget.length) {
              restoreContents();
            }

            if (Instance.isViewer && Instance.$imageContainer && Instance.$imageContainer.length) {
              Instance.$imageContainer.fsViewer("destroy");
            }

            Instance.$lightbox.off(Events.namespace);
            Instance.$container.off(Events.namespace);
            $Window.off(Events.keyDown);
            $Body.off(Events.namespace);
            $Body.off(Events.namespace);

            Instance.$overlay.remove();
            Instance.$lightbox.remove();

            if (typeof Instance.$el !== "undefined" && Instance.$el && Instance.$el.length) {
              Instance.$el.focus();
            }

            // Reset Instance
            Instance = null;

            $Window.trigger(Events.close);
          });

        Instance.$lightbox.removeClass(RawClasses.open);
        Instance.$overlay.removeClass(RawClasses.open);

        if (Instance.isMobile) {
          $Locks.removeClass(RawClasses.lock);

          Functions.unlockViewport(Namespace);
        }
      }
    }

    /**
     * @method private
     * @name openLightbox
     * @description Opens active instance.
     */

    function openLightbox() {
      var position = calculatePosition(),
        durration = Instance.isMobile ? 0 : Instance.duration;

      if (Instance.isMobile) {
        Functions.lockViewport(Namespace);
      } else {
        Instance.$controls.css({
          marginTop: ((Instance.contentHeight - Instance.controlHeight - Instance.metaHeight + Instance.thumbnailHeight) / 2)
        });
      }

      if (Instance.$caption.html() === "") {
        Instance.$caption.hide();
        Instance.$lightbox.removeClass(RawClasses.has_caption);

        if (!Instance.gallery.active) {
          Instance.$tools.hide();
        }
      } else {
        Instance.$caption.show();
        Instance.$lightbox.addClass(RawClasses.has_caption);
      }

      Instance.$lightbox.fsTransition({
          property: (Instance.contentHeight !== Instance.oldContentHeight) ? "height" : "width"
        },
        function() {
          Instance.$content.fsTransition({
              property: "opacity"
            },
            function() {
              Instance.$lightbox.removeClass(RawClasses.animating);
              Instance.isAnimating = false;
            });

          Instance.$lightbox.removeClass(RawClasses.loading)
            .addClass(RawClasses.ready);

          Instance.visible = true;

          // Fire open event
          $Window.trigger(Events.open, [{ instance: Instance }]);

          // Start preloading
          if (Instance.gallery.active) {
            if (Instance.type == 'element') {

            } else {
              preloadGallery();
              updateThumbnails();
              positionThumbnails();
            }
          }

          // Focus
          Instance.$lightbox.focus();
        });

      if (!Instance.isMobile) {
        Instance.$lightbox.css({
          height: Instance.contentHeight + Instance.paddingVertical,
          width: Instance.contentWidth + Instance.paddingHorizontal,
          top: (!Instance.fixed) ? position.top : 0
        });
      }

      // Trigger event in case the content size hasn't changed
      var contentHasChanged = (Instance.oldContentHeight !== Instance.contentHeight || Instance.oldContentWidth !== Instance.contentWidth);

      if (Instance.isMobile || !contentHasChanged) {
        Instance.$lightbox.fsTransition("resolve");
      }

      // Track content size changes
      Instance.oldContentHeight = Instance.contentHeight;
      Instance.oldContentWidth = Instance.contentWidth;

      if (Instance.isMobile) {
        $Locks.addClass(RawClasses.lock);
      }
    }

    /**
     * @method private
     * @name sizeLightbox
     * @description Sizes active instance.
     */

    function sizeLightbox() {
      if (Instance.visible && !Instance.isMobile) {
        var position = calculatePosition();

        Instance.$controls.css({
          marginTop: ((Instance.contentHeight - Instance.controlHeight - Instance.metaHeight + Instance.thumbnailHeight) / 2)
        });

        Instance.$lightbox.css({
          height: Instance.contentHeight + Instance.paddingVertical,
          width: Instance.contentWidth + Instance.paddingHorizontal,
          top: (!Instance.fixed) ? position.top : 0
        });

        Instance.oldContentHeight = Instance.contentHeight;
        Instance.oldContentWidth = Instance.contentWidth;
      }
    }

    /**
     * @method private
     * @name centerLightbox
     * @description Centers instance.
     */

    function centerLightbox() {
      var position = calculatePosition();

      Instance.$lightbox.css({
        top: (!Instance.fixed) ? position.top : 0
      });
    }

    /**
     * @method private
     * @name calculatePosition
     * @description Calculates positions.
     * @return [object] "Object containing top and left positions"
     */

    function calculatePosition() {
      if (Instance.isMobile) {
        return {
          left: 0,
          top: 0
        };
      }

      var pos = {
        left: (Formstone.windowWidth - Instance.contentWidth - Instance.paddingHorizontal) / 2,
        top: (Instance.top <= 0) ? ((Formstone.windowHeight - Instance.contentHeight - Instance.paddingVertical) / 2) : Instance.top
      };

      if (Instance.fixed !== true) {
        pos.top += $Window.scrollTop();
      }

      return pos;
    }


    /**
     * @method private
     * @name toggleCaption
     * @description Toggle caption.
     */

    function toggleCaption(e) {
      Functions.killEvent(e);

      if (Instance.captionOpen) {
        closeCaption();
      } else {
        closeThumbnails();

        var height = parseInt(Instance.$metaContent.outerHeight(true));
        height += parseInt(Instance.$meta.css("padding-top"));
        height += parseInt(Instance.$meta.css("padding-bottom"));

        Instance.$meta.css({
          height: height
        });

        Instance.$lightbox.addClass(RawClasses.caption_open)
          .find(Classes.caption_toggle).text(Instance.labels.captionOpen);

        Instance.captionOpen = true;
      }
    }

    /**
     * @method private
     * @name closeCaption
     * @description Close caption.
     */

    function closeCaption() {
      Instance.$lightbox.removeClass(RawClasses.caption_open)
        .find(Classes.caption_toggle).text(Instance.labels.captionClosed);
      Instance.captionOpen = false;
    }

    /**
     * @method private
     * @name formatCaption
     * @description Formats caption.
     * @param $target [jQuery object] "Target element"
     */

    function formatCaption() {
      var title = this.attr("title"),
        t = (title !== undefined && title) ? title.replace(/^\s+|\s+$/g, '') : false;

      return t ? '<p class="caption">' + t + '</p>' : "";
    }

    /**
     * @method private
     * @name toggleThumbnails
     * @description Toggle thumbnails.
     */

    function toggleThumbnails(e) {
      Functions.killEvent(e);

      if (Instance.thumbnailsOpen) {
        closeThumbnails();
      } else {
        closeCaption();

        Instance.$lightbox.addClass(RawClasses.thumbnails_open)
          .find(Classes.thumbnail_toggle).text(Instance.labels.thumbnailsOpen);

        Instance.thumbnailsOpen = true;
      }
    }

    /**
     * @method private
     * @name closeThumbnails
     * @description Close thumbnails.
     */

    function closeThumbnails() {
      Instance.$lightbox.removeClass(RawClasses.thumbnails_open)
        .find(Classes.thumbnail_toggle).text(Instance.labels.thumbnailsClosed);
      Instance.thumbnailsOpen = false;
    }

    /**
     * @method private
     * @name loadImage
     * @description Loads source image.
     * @param source [string] "Source image URL"
     */

    function loadImage(source) {
      if (Instance.isViewer) {
        Instance.$imageContainer = $('<div class="' + RawClasses.image_container + '"><img></div>');
        Instance.$image = Instance.$imageContainer.find("img");

        Instance.$image.attr("src", source)
          .addClass(RawClasses.image);

        Instance.$content.prepend(Instance.$imageContainer);

        sizeImage();

        Instance.$imageContainer.one("loaded.viewer", function() {
          openLightbox();
        }).fsViewer({
          theme: Instance.theme
        });
      } else {
        // Cache current image
        Instance.$imageContainer = $('<div class="' + RawClasses.image_container + '"><img></div>');
        Instance.$image = Instance.$imageContainer.find("img");

        Instance.$image.one(Events.load, function() {
            var naturalSize = calculateNaturalSize(Instance.$image);

            Instance.naturalHeight = naturalSize.naturalHeight;
            Instance.naturalWidth = naturalSize.naturalWidth;

            if (Instance.retina) {
              Instance.naturalHeight /= 2;
              Instance.naturalWidth /= 2;
            }

            Instance.$content.prepend(Instance.$imageContainer);

            // Size content to be sure it fits the viewport
            sizeImage();

            openLightbox();
          }).on(Events.error, loadError)
          .attr("src", source)
          .addClass(RawClasses.image);

        // If image has already loaded into cache, trigger load event
        if (Instance.$image[0].complete || Instance.$image[0].readyState === 4) {
          Instance.$image.trigger(Events.load);
        }
      }
    }

    /**
     * @method private
     * @name sizeImage
     * @description Sizes image to fit in viewport.
     * @param count [int] "Number of resize attempts"
     */

    function sizeImage() {
      if (Instance.$image) {
        var count = 0;

        Instance.windowHeight = Instance.viewportHeight = Formstone.windowHeight - Instance.mobilePaddingVertical - Instance.paddingVertical;
        Instance.windowWidth = Instance.viewportWidth = Formstone.windowWidth - Instance.mobilePaddingHorizontal - Instance.paddingHorizontal;

        Instance.contentHeight = Infinity;
        Instance.contentWidth = Infinity;

        Instance.imageMarginTop = 0;
        Instance.imageMarginLeft = 0;

        while (Instance.contentHeight > Instance.viewportHeight && count < 2) {
          Instance.imageHeight = (count === 0) ? Instance.naturalHeight : Instance.$image.outerHeight();
          Instance.imageWidth = (count === 0) ? Instance.naturalWidth : Instance.$image.outerWidth();
          Instance.metaHeight = (count === 0) ? 0 : Instance.metaHeight;
          Instance.spacerHeight = (count === 0) ? 0 : Instance.spacerHeight;
          Instance.thumbnailHeight = (count === 0) ? 0 : Instance.thumbnailHeight;

          if (count === 0) {
            Instance.ratioHorizontal = Instance.imageHeight / Instance.imageWidth;
            Instance.ratioVertical = Instance.imageWidth / Instance.imageHeight;

            Instance.isWide = (Instance.imageWidth > Instance.imageHeight);
          }

          // Double check min and max
          if (Instance.imageHeight < Instance.minHeight) {
            Instance.minHeight = Instance.imageHeight;
          }
          if (Instance.imageWidth < Instance.minWidth) {
            Instance.minWidth = Instance.imageWidth;
          }

          if (Instance.isMobile) {
            if (Instance.isTouch) {
              Instance.$controlBox.css({
                width: Formstone.windowWidth
              });
              Instance.spacerHeight = Instance.$controls.outerHeight(true);
            } else {
              Instance.$tools.css({
                width: Formstone.windowWidth
              });
              Instance.spacerHeight = Instance.$tools.outerHeight(true);
            }

            // Content match viewport
            Instance.contentHeight = Instance.viewportHeight;
            Instance.contentWidth = Instance.viewportWidth;

            if (!Instance.isTouch) {
              Instance.$content.css({
                height: Instance.contentHeight - Instance.spacerHeight // - 10
              });
            }

            if (Instance.$thumbnails.length) {
              Instance.spacerHeight += Instance.$thumbnails.outerHeight(true);
            }
            Instance.spacerHeight += 10;

            fitImage();

            Instance.imageMarginTop = (Instance.contentHeight - Instance.targetImageHeight - Instance.spacerHeight) / 2;
            Instance.imageMarginLeft = (Instance.contentWidth - Instance.targetImageWidth) / 2;
          } else {
            // Viewport should match window, less margin, padding and meta
            if (count === 0) {
              Instance.viewportHeight -= (Instance.margin + Instance.paddingVertical);
              Instance.viewportWidth -= (Instance.margin + Instance.paddingHorizontal);
            }
            Instance.viewportHeight -= Instance.metaHeight;

            if (Instance.thumbnails) {
              Instance.viewportHeight -= Instance.thumbnailHeight;
            }

            fitImage();

            Instance.contentHeight = Instance.targetImageHeight;
            Instance.contentWidth = Instance.targetImageWidth;
          }

          // Modify DOM
          if (!Instance.isMobile && !Instance.isTouch) {
            Instance.$meta.css({
              width: Instance.contentWidth
            });
          }

          Instance.$image.css({
            height: Instance.targetImageHeight,
            width: Instance.targetImageWidth,
            marginTop: Instance.imageMarginTop,
            marginLeft: Instance.imageMarginLeft
          });

          if (!Instance.isMobile) {
            Instance.metaHeight = Instance.$meta.outerHeight(true);
            Instance.contentHeight += Instance.metaHeight;
          }

          if (Instance.thumbnails) {
            Instance.thumbnailHeight = Instance.$thumbnails.outerHeight(true);
            Instance.contentHeight += Instance.thumbnailHeight;
          }

          count++;
        }
      }
    }

    /**
     * @method private
     * @name fitImage
     * @description Calculates target image size.
     */

    function fitImage() {
      var height = (!Instance.isMobile) ? Instance.viewportHeight : Instance.contentHeight - Instance.spacerHeight,
        width = (!Instance.isMobile) ? Instance.viewportWidth : Instance.contentWidth;

      if (Instance.isWide) {
        // WIDE
        Instance.targetImageWidth = width;
        Instance.targetImageHeight = Instance.targetImageWidth * Instance.ratioHorizontal;

        if (Instance.targetImageHeight > height) {
          Instance.targetImageHeight = height;
          Instance.targetImageWidth = Instance.targetImageHeight * Instance.ratioVertical;
        }
      } else {
        // TALL
        Instance.targetImageHeight = height;
        Instance.targetImageWidth = Instance.targetImageHeight * Instance.ratioVertical;

        if (Instance.targetImageWidth > width) {
          Instance.targetImageWidth = width;
          Instance.targetImageHeight = Instance.targetImageWidth * Instance.ratioHorizontal;
        }
      }

      // MAX
      if (Instance.targetImageWidth > Instance.imageWidth || Instance.targetImageHeight > Instance.imageHeight) {
        Instance.targetImageHeight = Instance.imageHeight;
        Instance.targetImageWidth = Instance.imageWidth;
      }

      // MIN
      if (Instance.targetImageWidth < Instance.minWidth || Instance.targetImageHeight < Instance.minHeight) {
        if (Instance.targetImageWidth < Instance.minWidth) {
          Instance.targetImageWidth = Instance.minWidth;
          Instance.targetImageHeight = Instance.targetImageWidth * Instance.ratioHorizontal;
        } else {
          Instance.targetImageHeight = Instance.minHeight;
          Instance.targetImageWidth = Instance.targetImageHeight * Instance.ratioVertical;
        }
      }
    }

    /**
     * @method private
     * @name loadVideo
     * @description Loads source video.
     * @param source [string] "Source video URL"
     */

    function formatYouTube(parts) {
      return "//www.youtube.com/embed/" + parts[1];
    }

    function formatVimeo(parts) {
      return "//player.vimeo.com/video/" + parts[3];
    }

    function loadVideo(source) {
      var parts,
        url = checkVideo(source),
        queryString = source.split("?"),
        origin = '&origin=' + encodeURIComponent(window.location.protocol + '//' + window.location.hostname);

      if (url) {
        // if we have a query string
        if (queryString.length >= 2) {
          url += "?" + queryString.slice(1)[0].trim();
        }

        Instance.$videoWrapper = $('<div class="' + RawClasses.video_wrapper + '"></div>');
        Instance.$video = $('<iframe class="' + RawClasses.video + '" frameborder="0" seamless="seamless" allowfullscreen></iframe>');

        Instance.$video.attr("src", url + '&enablejsapi=1' + origin)
          .addClass(RawClasses.video)
          .prependTo(Instance.$videoWrapper);

        Instance.$content.prepend(Instance.$videoWrapper);

        sizeVideo();
        openLightbox();
      } else {
        loadError();
      }
    }

    /**
     * @method private
     * @name sizeVideo
     * @description Sizes video to fit in viewport.
     */

    function sizeVideo() {
      // Set initial vars
      Instance.windowHeight = Instance.viewportHeight = Formstone.windowHeight - Instance.mobilePaddingVertical - Instance.paddingVertical;
      Instance.windowWidth = Instance.viewportWidth = Formstone.windowWidth - Instance.mobilePaddingHorizontal - Instance.paddingHorizontal;
      Instance.videoMarginTop = 0;
      Instance.videoMarginLeft = 0;

      if (Instance.isMobile) {
        if (Instance.isTouch) {
          Instance.$controlBox.css({
            width: Formstone.windowWidth
          });
          Instance.spacerHeight = Instance.$controls.outerHeight(true) + 10;
        } else {
          Instance.$tools.css({
            width: Formstone.windowWidth
          });
          Instance.spacerHeight = Instance.$tools.outerHeight(true);
          Instance.spacerHeight += Instance.$thumbnails.outerHeight(true) + 10;
        }

        Instance.viewportHeight -= Instance.spacerHeight;

        Instance.targetVideoWidth = Instance.viewportWidth;
        Instance.targetVideoHeight = Instance.targetVideoWidth * Instance.videoRatio;

        if (Instance.targetVideoHeight > Instance.viewportHeight) {
          Instance.targetVideoHeight = Instance.viewportHeight;
          Instance.targetVideoWidth = Instance.targetVideoHeight / Instance.videoRatio;
        }

        Instance.videoMarginTop = (Instance.viewportHeight - Instance.targetVideoHeight) / 2;
        Instance.videoMarginLeft = (Instance.viewportWidth - Instance.targetVideoWidth) / 2;
      } else {
        Instance.viewportHeight = Instance.windowHeight - Instance.margin;
        Instance.viewportWidth = Instance.windowWidth - Instance.margin;

        Instance.targetVideoWidth = (Instance.videoWidth > Instance.viewportWidth) ? Instance.viewportWidth : Instance.videoWidth;
        if (Instance.targetVideoWidth < Instance.minWidth) {
          Instance.targetVideoWidth = Instance.minWidth;
        }
        Instance.targetVideoHeight = Instance.targetVideoWidth * Instance.videoRatio;

        Instance.contentHeight = Instance.targetVideoHeight;
        Instance.contentWidth = Instance.targetVideoWidth;
      }

      // Update dom
      if (!Instance.isMobile && !Instance.isTouch) {
        Instance.$meta.css({
          width: Instance.contentWidth
        });
      }

      Instance.$videoWrapper.css({
        height: Instance.targetVideoHeight,
        width: Instance.targetVideoWidth,
        marginTop: Instance.videoMarginTop,
        marginLeft: Instance.videoMarginLeft
      });

      if (!Instance.isMobile) {
        Instance.metaHeight = Instance.$meta.outerHeight(true);
        Instance.contentHeight += Instance.metaHeight;
      }

      if (Instance.thumbnails) {
        Instance.thumbnailHeight = Instance.$thumbnails.outerHeight(true);
        Instance.contentHeight += Instance.thumbnailHeight;
      }
    }

    /**
     * @method private
     * @name preloadGallery
     * @description Preloads previous and next images in gallery for faster rendering.
     * @param e [object] "Event Data"
     */

    function preloadGallery(e) {
      var source = '';

      if (Instance.gallery.index > 0) {
        source = Instance.gallery.$items.eq(Instance.gallery.index - 1).attr("href");
        if (!checkVideo(source)) {
          $('<img src="' + source + '">');
        }
      }
      if (Instance.gallery.index < Instance.gallery.total) {
        source = Instance.gallery.$items.eq(Instance.gallery.index + 1).attr("href");
        if (!checkVideo(source)) {
          $('<img src="' + source + '">');
        }
      }
    }

    /**
     * @method private
     * @name advanceGallery
     * @description Advances gallery base on direction.
     * @param e [object] "Event Data"
     */

    function advanceGallery(e) {
      Functions.killEvent(e);

      var $control = $(e.currentTarget);

      if (!Instance.isAnimating && !$control.hasClass(RawClasses.control_disabled)) {
        Instance.isAnimating = true;

        closeCaption();

        Instance.gallery.index += ($control.hasClass(RawClasses.control_next)) ? 1 : -1;
        if (Instance.gallery.index > Instance.gallery.total) {
          Instance.gallery.index = (Instance.infinite) ? 0 : Instance.gallery.total;
        }
        if (Instance.gallery.index < 0) {
          Instance.gallery.index = (Instance.infinite) ? Instance.gallery.total : 0;
        }

        updateThumbnails();

        Instance.$lightbox.addClass(RawClasses.animating);

        Instance.$content.fsTransition({
          property: "opacity"
        }, cleanGallery);

        Instance.$lightbox.addClass(RawClasses.loading);
      }
    }

    /**
     * @method private
     * @name jumpGallery
     * @description Jumps gallery base on thumbnail click.
     * @param e [object] "Event Data"
     */

    function jumpGallery(e) {
      Functions.killEvent(e);

      var $thumbnail = $(e.currentTarget);

      if (!Instance.isAnimating && !$thumbnail.hasClass(RawClasses.active)) {
        Instance.isAnimating = true;

        closeCaption();

        Instance.gallery.index = Instance.$thumbnailItems.index($thumbnail);

        updateThumbnails();

        Instance.$lightbox.addClass(RawClasses.animating);

        Instance.$content.fsTransition({
          property: "opacity"
        }, cleanGallery);

        Instance.$lightbox.addClass(RawClasses.loading);
      }
    }

    /**
     * @method private
     * @name jumpGallery
     * @description
     */

    function updateThumbnails() {
      // Thumbnails
      if (Instance.thumbnails) {
        var $thumb = Instance.$thumbnailItems.eq(Instance.gallery.index);

        Instance.$thumbnailItems.removeClass(RawClasses.active);
        $thumb.addClass(RawClasses.active);
      }
    }

    /**
     * @method private
     * @name jumpGallery
     * @description
     */

    function positionThumbnails() {
      // Thumbnails
      if (Instance.thumbnails) {
        var $thumb = Instance.$thumbnailItems.eq(Instance.gallery.index),
          scrollLeft = $thumb.position().left + ($thumb.outerWidth(false) / 2) - (Instance.$thumbnailContainer.outerWidth(true) / 2);

        Instance.$thumbnailContainer.stop().animate({
          scrollLeft: scrollLeft
        }, 200, "linear");
      }
    }

    /**
     * @method private
     * @name cleanGallery
     * @description Cleans gallery.
     */

    function cleanGallery() {
      if (Instance.type == 'element') {
        if (typeof Instance.$inlineTarget !== 'undefined' && Instance.$inlineTarget.length) {
          restoreContents();
        }
      } else {
        if (typeof Instance.$imageContainer !== 'undefined') {
          if (Instance.isViewer) {
            Instance.$imageContainer.fsViewer("destroy");
          }
          Instance.$imageContainer.remove();
        }
        if (typeof Instance.$videoWrapper !== 'undefined') {
          Instance.$videoWrapper.remove();
        }
      }

      Instance.$el = Instance.gallery.$items.eq(Instance.gallery.index);

      // var $el = Instance.$el,
      //     source = ($el && $el[0].href) ? $el[0].href || "" : "",
      //     hash = ($el && $el[0].hash) ? $el[0].hash || "" : "",
      //     sourceParts = source.toLowerCase().split(".").pop().split(/\#|\?/),
      //     type = ($el) ? $el.data(Namespace + "-type") : "",
      //     isImage = ((type === "image") || (source.match(data.fileTypes) || source.substr(0, 10) === "data:image")),
      //     isVideo = checkVideo(source),
      //     isUrl = ((type === "url") || (!isImage && !isVideo && source.substr(0, 4) === "http" && !hash)),
      //     isElement = ((type === "element") || (!isImage && !isVideo && !isUrl && (hash.substr(0, 1) === "#"))),
      //     isObject = ((typeof $object !== "undefined"));

      if (Instance.type == 'element') {
        var source = Instance.$el[0].href,
            hash  = (Instance.$el && Instance.$el[0].hash) ? Instance.$el[0].hash || "" : "",
            isUrl = (source.substr(0, 4) === "http");

        // var isUrl = ((type === "url") || (source.substr(0, 4) === "http" && !hash)),
        //   isElement = ((type === "element") || (!isUrl && (hash.substr(0, 1) === "#"))),
        //   isObject = ((typeof $object !== "undefined"));

        if (isUrl && !hash) {
          loadURL(source);
        } else {
          appendContents(hash);
        }

        // } else if (isElement) {
        // appendContents(source);
        // } else if (isObject) {
        //   appendObject(Instance.$object);
        // }
      } else {
        Instance.$caption.html(Instance.formatter.call(Instance.$el, Instance));
        Instance.$position.find(Classes.position_current).html(Instance.gallery.index + 1);

        var source = Instance.$el[0].href,
            isVideo = checkVideo(source);

        if (isVideo) {
          Instance.type = "video";

          loadVideo(source);
        } else {
          Instance.type = "image";

          loadImage(source);
        }
      }

      updateGalleryControls();
    }

    /**
     * @method private
     * @name updateGalleryControls
     * @description Updates gallery control states.
     */

    function updateGalleryControls() {
      Instance.$controls.removeClass(RawClasses.control_disabled);

      if (!Instance.infinite) {
        if (Instance.gallery.index === 0) {
          Instance.$controls.filter(Classes.control_previous).addClass(RawClasses.control_disabled);
        }
        if (Instance.gallery.index === Instance.gallery.total) {
          Instance.$controls.filter(Classes.control_next).addClass(RawClasses.control_disabled);
        }
      }
    }

    /**
     * @method private
     * @name onKeyDown
     * @description Handles keypress in gallery.
     * @param e [object] "Event data"
     */

    function onKeyDown(e) {
      if (Instance.gallery.active && (e.keyCode === 37 || e.keyCode === 39)) {
        Functions.killEvent(e);

        Instance.$controls.filter((e.keyCode === 37) ? Classes.control_previous : Classes.control_next).trigger(Events.click);
      } else if (e.keyCode === 27) {
        Instance.$close.trigger(Events.click);
      }
    }

    /**
     * @method private
     * @name appendContents
     * @description Moves target inline element.
     * @param id [string] "Target element id"
     */

    function appendContents(id) {
      Instance.$inlineTarget = $(id);
      Instance.$inlineContents = Instance.$inlineTarget.children().detach();

      appendObject(Instance.$inlineContents);
    }

    /**
     * @method private
     * @name restoreContents
     * @description Restores inline element.
     */

    function restoreContents() {
      Instance.$inlineTarget.append(Instance.$inlineContents.detach());
    }

    /**
     * @method private
     * @name loadURL
     * @description Load URL into iframe.
     * @param source [string] "Target URL"
     */

    function loadURL(source) {
      source = source + ((source.indexOf("?") > -1) ? "&" + Instance.requestKey + "=true" : "?" + Instance.requestKey + "=true");
      var $iframe = $('<iframe class="' + RawClasses.iframe + '" src="' + source + '"></iframe>');
      appendObject($iframe);
    }

    /**
     * @method private
     * @name appendObject
     * @description Appends and sizes object.
     * @param $object [jQuery Object] "Object to append"
     */

    function appendObject($object) {
      Instance.$content.append($object);
      sizeContent($object);
      openLightbox();
    }

    /**
     * @method private
     * @name sizeContent
     * @description Sizes jQuery object to fir in viewport.
     * @param $object [jQuery Object] "Object to size"
     */

    function sizeContent($object) {
      Instance.windowHeight = Formstone.windowHeight - Instance.mobilePaddingVertical - Instance.paddingVertical;
      Instance.windowWidth = Formstone.windowWidth - Instance.mobilePaddingHorizontal - Instance.paddingHorizontal;

      Instance.objectHeight = $object.outerHeight(true);
      Instance.objectWidth = $object.outerWidth(true);
      Instance.targetHeight = Instance.targetHeight || (Instance.$el ? Instance.$el.data(Namespace + "-height") : null);
      Instance.targetWidth = Instance.targetWidth || (Instance.$el ? Instance.$el.data(Namespace + "-width") : null);
      Instance.maxHeight = (Instance.windowHeight < 0) ? Instance.minHeight : Instance.windowHeight;
      Instance.isIframe = $object.is("iframe");
      Instance.objectMarginTop = 0;
      Instance.objectMarginLeft = 0;

      if (!Instance.isMobile) {
        Instance.windowHeight -= Instance.margin;
        Instance.windowWidth -= Instance.margin;
      }

      Instance.contentHeight = (Instance.targetHeight) ? Instance.targetHeight : (Instance.isIframe || Instance.isMobile) ? Instance.windowHeight : Instance.objectHeight;
      Instance.contentWidth = (Instance.targetWidth) ? Instance.targetWidth : (Instance.isIframe || Instance.isMobile) ? Instance.windowWidth : Instance.objectWidth;

      if ((Instance.isIframe || Instance.isObject) && Instance.isMobile) {
        Instance.contentHeight = Instance.windowHeight;
        Instance.contentWidth = Instance.windowWidth;
      } else if (Instance.isObject) {
        Instance.contentHeight = (Instance.contentHeight > Instance.windowHeight) ? Instance.windowHeight : Instance.contentHeight;
        Instance.contentWidth = (Instance.contentWidth > Instance.windowWidth) ? Instance.windowWidth : Instance.contentWidth;
      }

      if (!Instance.isMobile) {
        if (Instance.contentHeight > Instance.maxHeight) {
          Instance.contentHeight = Instance.maxHeight;
        }
        if (Instance.contentWidth > Instance.maxWidth) {
          Instance.contentWidth = Instance.maxWidth;
        }
      }
    }

    /**
     * @method private
     * @name loadError
     * @description Error when resource fails to load.
     */

    function loadError() {
      var $error = $('<div class="' + RawClasses.error + '"><p>Error Loading Resource</p></div>');

      // Clean up
      Instance.type = "element";
      Instance.$tools.remove();

      Instance.$image.off(Events.namespace);

      appendObject($error);

      $Window.trigger(Events.error);
    }

    /**
     * @method private
     * @name calculateNaturalSize
     * @description Determines natural size of target image.
     * @param $img [jQuery object] "Source image object"
     * @return [object | boolean] "Object containing natural height and width values or false"
     */

    function calculateNaturalSize($img) {
      var node = $img[0],
        img = new Image();

      if (typeof node.naturalHeight !== "undefined") {
        return {
          naturalHeight: node.naturalHeight,
          naturalWidth: node.naturalWidth
        };
      } else {
        if (node.tagName.toLowerCase() === 'img') {
          img.src = node.src;
          return {
            naturalHeight: img.height,
            naturalWidth: img.width
          };
        }
      }

      return false;
    }

    /**
     * @method private
     * @name checkVideo
     * @description Determines if url is a YouTube or Vimeo url.
     * @param source [string] "Source url"
     * @return [boolean] "True if YouTube or Vimeo url"
     */

    function checkVideo(source) {
      var formats = Instance.videoFormatter,
        parts;

      for (var i in formats) {
        if (formats.hasOwnProperty(i)) {
          parts = source.match(formats[i].pattern);

          if (parts !== null) {
            return formats[i].format.call(Instance, parts);
          }
        }
      }

      return false;
    }

    /**
     * @method private
     * @name onDocumentFocus
     * @description Hanle document focus
     * @param e [object] "Event data"
     */

    function onDocumentFocus(e) {
      var target = e.target;

      if (!$.contains(Instance.$lightbox[0], target) && target !== Instance.$lightbox[0] && target !== Instance.$overlay[0]) {
        Functions.killEvent(e);

        Instance.$lightbox.focus();
      }
    }

    /**
     * @plugin
     * @name Lightbox
     * @description A jQuery plugin for simple modals.
     * @type widget
     * @main lightbox.js
     * @main lightbox.css
     * @dependency jQuery
     * @dependency core.js
     * @dependency touch.js
     * @dependency transition.js
     * @dependency viewer.js (optional)
     */

    var Plugin = Formstone.Plugin("lightbox", {
        widget: true,

        /**
         * @options
         * @param customClass [string] <''> "Class applied to instance"
         * @param fileTypes [regex] <> "Image file types"
         * @param fixed [boolean] <false> "Flag for fixed positioning"
         * @param formatter [function] <$.noop> "Caption format function"
         * @param infinite [boolean] <false> "Flag for infinite galleries"
         * @param labels.close [string] <'Close'> "Close button text"
         * @param labels.count [string] <'of'> "Gallery count separator text"
         * @param labels.next [string] <'Next'> "Gallery control text"
         * @param labels.previous [string] <'Previous'> "Gallery control text"
         * @param labels.captionClosed [string] <'Close Caption'> "Mobile caption toggle text, closed state"
         * @param labels.captionOpen [string] <'View Caption'> "Mobile caption toggle text, open state"
         * @param labels.thumbnailsClosed [string] <'Close Thumbnails'> "Mobile thumbnails toggle text, closed state"
         * @param labels.thumbnailsOpen [string] <'View Thumbnails'> "Mobile thumbnails toggle text, open state"
         * @param labels.lightbox [string] <'Lightbox {guid}'> "Lightbox aria label; {guid} replaced with instance GUID"
         * @param margin [int] <50> "Margin used when sizing (single side)"
         * @param maxHeight [int] <10000> "Maximum height of element modal"
         * @param maxWidth [int] <10000> "Maximum width of element modal"
         * @param minHeight [int] <100> "Minimum height of modal"
         * @param minWidth [int] <100> "Minimum width of modal"
         * @param overlay [boolean] <false> "Flag to force 'overlay' rendering"
         * @param retina [boolean] <false> "Flag to use 'retina' sizing (halves natural sizes)"
         * @param requestKey [string] <'fs-lightbox'> "GET variable for ajax / iframe requests"
         * @param theme [string] <"fs-light"> "Theme class name"
         * @param thumbnails [boolean] <false> "Flag to display thumbnail strip"
         * @param top [int] <0> "Target top position; over-rides centering"
         * @param videoFormatter [array] <[]> "Object of video formatter objects containing a 'pattern' regex and 'format' callback"
         * @param videoRatio [number] <0.5625> "Video height / width ratio (9 / 16 = 0.5625)"
         * @param videoWidth [int] <800> "Video max width"
         * @param viewer [boolean] <false> "Flag to force 'Viewer' rendering, if available"
         */

        defaults: {
          customClass: "",
          fileTypes: /\.(jpg|sjpg|jpeg|png|gif)/i,
          fixed: false,
          formatter: formatCaption,
          infinite: false,
          labels: {
            close: "Close",
            count: "of",
            next: "Next",
            previous: "Previous",
            captionClosed: "View Caption",
            captionOpen: "Close Caption",
            thumbnailsClosed: "View Thumbnails",
            thumbnailsOpen: "Close Thumbnails",
            lightbox: "Lightbox {guid}"
          },
          margin: 50,
          maxHeight: 10000,
          maxWidth: 10000,
          minHeight: 100,
          minWidth: 100,
          mobile: null,
          overlay: false,
          retina: false,
          requestKey: "fs-lightbox",
          theme: "fs-light",
          thumbnails: false,
          top: 0,
          videoFormatter: {
            "youtube": {
              pattern: /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,
              format: formatYouTube
            },
            "vimeo": {
              pattern: /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,
              format: formatVimeo
            }
          },
          videoRatio: 0.5625,
          videoWidth: 800,
          viewer: true
        },

        classes: [
          "loading",
          "animating",
          // "scaling",
          // "zooming",
          "fixed",
          "mobile",
          "touch",
          "inline",
          "iframed",
          "open",
          "ready",
          "overlay",
          "close",
          "loading_icon",
          "container",
          "content",
          "image",
          "image_container",
          "video",
          "video_wrapper",
          "tools",
          "meta",
          "meta_content",
          "controls",
          "control",
          "control_previous",
          "control_next",
          "control_disabled",
          "position",
          "position_current",
          "position_total",
          "toggle",
          "caption_toggle",
          "caption",
          "caption_open",
          "thumbnailed",
          "thumbnails_open",
          "thumbnail_toggle",
          "thumbnails",
          "thumbnail_container",
          "thumbnail_item",
          "active",
          "has_controls",
          "has_caption",
          "iframe",
          "error",
          "active",
          "lock"
        ],

        /**
         * @events
         * @event open.lightbox "Lightbox opened; Triggered on window"
         * @event close.lightbox "Lightbox closed; Triggered on window"
         * @event error.lightbox "Lightbox error; Triggered on window"
         */

        events: {
          open: "open",
          close: "close"
        },

        methods: {
          _construct: construct,
          _destruct: destruct,
          _resize: resize,

          resize: resizeLightbox
        },

        utilities: {
          _initialize: initialize,

          close: closeLightbox
        }
      }),

      // Localize References

      Namespace = Plugin.namespace,
      Defaults = Plugin.defaults,
      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,
      Window = Formstone.window,
      $Window = Formstone.$window,
      $Body = null,

      // Internal

      $Locks = null,
      OnLoad = false,
      OnLoaded = false,

      // Singleton

      Instance = null;

    // Setup

    Formstone.Ready(setup);

  })

);

/*! formstone v1.4.20-1 [mediaquery.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name initialize
     * @description Initializes plugin.
     * @param opts [object] "Plugin options"
     */

    function initialize(options) {
      options = options || {};

      // Build Media Queries

      for (var i in MQStrings) {
        if (MQStrings.hasOwnProperty(i)) {
          Defaults[i] = (options[i]) ? $.merge(options[i], Defaults[i]) : Defaults[i];
        }
      }

      Defaults = $.extend(Defaults, options);

      // Sort

      Defaults.minWidth.sort(Functions.sortDesc);
      Defaults.maxWidth.sort(Functions.sortAsc);
      Defaults.minHeight.sort(Functions.sortDesc);
      Defaults.maxHeight.sort(Functions.sortAsc);

      // Bind Media Query Matches

      for (var j in MQStrings) {
        if (MQStrings.hasOwnProperty(j)) {
          MQMatches[j] = {};
          for (var k in Defaults[j]) {
            if (Defaults[j].hasOwnProperty(k)) {
              var mq = window.matchMedia("(" + MQStrings[j] + ": " + (Defaults[j][k] === Infinity ? 100000 : Defaults[j][k]) + Defaults.unit + ")");
              mq.addListener(onStateChange);
              MQMatches[j][Defaults[j][k]] = mq;
            }
          }
        }
      }

      // Initial Trigger

      onStateChange();
    }

    /**
     * @method
     * @name bind
     * @description Binds callbacks to media query matching.
     * @param key [string] "Instance key"
     * @param media [string] "Media query to match"
     * @param data [object] "Object containing 'enter' and 'leave' callbacks"
     * @example $.mediaquery("bind", "key", "(min-width: 500px)", { ... });
     */

    function bind(key, media, data) {
      var mq = Window.matchMedia(media),
        mqKey = createKey(mq.media);

      if (!Bindings[mqKey]) {
        Bindings[mqKey] = {
          mq: mq,
          active: true,
          enter: {},
          leave: {}
        };

        Bindings[mqKey].mq.addListener(onBindingChange);
      }

      for (var i in data) {
        if (data.hasOwnProperty(i) && Bindings[mqKey].hasOwnProperty(i)) {
          Bindings[mqKey][i][key] = data[i];
        }
      }

      var binding = Bindings[mqKey],
        matches = mq.matches;

      if (matches && binding[Events.enter].hasOwnProperty(key)) {
        binding[Events.enter][key].apply(mq);
        binding.active = true;
      } else if (!matches && binding[Events.leave].hasOwnProperty(key)) {
        binding[Events.leave][key].apply(mq);
        binding.active = false;
      }
    }

    /**
     * @method
     * @name unbind
     * @description Unbinds all callbacks from media query.
     * @param key [string] "Instance key"
     * @param media [string] "Media query to unbind; defaults to all"
     * @example $.mediaquery("unbind", "key");
     */

    function unbind(key, media) {
      if (!key) {
        return;
      }

      if (media) {
        // unbind specific query
        var mqKey = createKey(media);

        if (Bindings[mqKey]) {
          if (Bindings[mqKey].enter[key]) {
            delete Bindings[mqKey].enter[key];
          }

          if (Bindings[mqKey].leave[key]) {
            delete Bindings[mqKey].leave[key];
          }
        }
      } else {
        // unbind all
        for (var i in Bindings) {
          if (Bindings.hasOwnProperty(i)) {
            if (Bindings[i].enter[key]) {
              delete Bindings[i].enter[key];
            }

            if (Bindings[i].leave[key]) {
              delete Bindings[i].leave[key];
            }
          }
        }
      }
    }

    /**
     * @method private
     * @name setState
     * @description Sets current media query match state.
     */

    function setState() {
      State = {
        unit: Defaults.unit
      };

      for (var i in MQStrings) {
        if (MQStrings.hasOwnProperty(i)) {

          for (var j in MQMatches[i]) {
            if (MQMatches[i].hasOwnProperty(j)) {
              var state = (j === "Infinity") ? Infinity : parseInt(j, 10),
                isMax = i.indexOf("max") > -1;

              if (MQMatches[i][j].matches) {
                if (isMax) {
                  if (!State[i] || state < State[i]) {
                    State[i] = state;
                  }
                } else {
                  if (!State[i] || state > State[i]) {
                    State[i] = state;
                  }
                }
              }

            }
          }

        }
      }
    }

    /**
     * @method private
     * @name onStateChange
     * @description Handles media query changes.
     */

    function onStateChange() {
      setState();

      $Window.trigger(Events.mqChange, [State]);
    }

    /**
     * @method private
     * @name onBindingChange
     * @description Handles a binding's media query change.
     */

    function onBindingChange(mq) {
      var mqkey = createKey(mq.media),
        binding = Bindings[mqkey],
        matches = mq.matches,
        event = matches ? Events.enter : Events.leave;

      if (binding && (binding.active || (!binding.active && matches))) {
        for (var i in binding[event]) {
          if (binding[event].hasOwnProperty(i)) {
            binding[event][i].apply(binding.mq);
          }
        }

        binding.active = true;
      }
    }

    /**
     * @method private
     * @name createKey
     * @description Creates valid object key from string.
     * @param text [String] "String to create key from"
     * @return [string] Valid object key
     */

    function createKey(text) {
      return text.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '').replace(/^\s+|\s+$/g, '');
    }

    /**
     * @method
     * @name state
     * @description Returns the current state.
     * @return [object] "Current state object"
     * @example var state = $.mediaquery("state");
     */

    /**
     * @method private
     * @name getState
     * @description Returns the current state.
     * @return [object] "Current state object"
     */

    function getState() {
      return State;
    }

    /**
     * @plugin
     * @name Media Query
     * @description A jQuery plugin for responsive media query events.
     * @type utility
     * @main mediaquery.js
     * @dependency jQuery
     * @dependency core.js
     */

    var Plugin = Formstone.Plugin("mediaquery", {
        utilities: {
          _initialize: initialize,
          state: getState,
          bind: bind,
          unbind: unbind
        },

        /**
         * @events
         * @event mqchange.mediaquery "Change to a media query match; Triggered on window"
         */

        events: {
          mqChange: "mqchange"
        }
      }),

      /**
       * @options
       * @param minWidth [array] <[ 0 ]> "Array of min-widths"
       * @param maxWidth [array] <[ Infinity ]> "Array of max-widths"
       * @param minHeight [array] <[ 0 ]> "Array of min-heights"
       * @param maxHeight [array] <[ Infinity ]> "Array of max-heights"
       * @param unit [string] <'px'> "Unit to use when matching widths and heights"
       */

      Defaults = {
        minWidth: [0],
        maxWidth: [Infinity],
        minHeight: [0],
        maxHeight: [Infinity],
        unit: "px"
      },

      // Raw events for switch
      Events = $.extend(Plugin.events, {
        enter: "enter",
        leave: "leave"
      }),

      // Localize References

      $Window = Formstone.$window,
      Window = $Window[0],

      Functions = Plugin.functions,

      // Internal

      State = null,
      Bindings = [],
      MQMatches = {},
      MQStrings = {
        minWidth: "min-width",
        maxWidth: "max-width",
        minHeight: "min-height",
        maxHeight: "max-height"
      };

  })

);

/*! formstone v1.4.20-1 [pagination.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./mediaquery"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      data.mq = "(max-width:" + (data.maxWidth === Infinity ? "100000px" : data.maxWidth) + ")";

      var html = "";
      html += '<button type="button" class="' + [RawClasses.control, RawClasses.control_previous].join(" ") + '">' + data.labels.previous + '</button>';
      html += '<button type="button" class="' + [RawClasses.control, RawClasses.control_next].join(" ") + '">' + data.labels.next + '</button>';
      html += '<div class="' + RawClasses.position + '" aria-hidden="true">';
      html += '<span class="' + RawClasses.current + '">0</span>';
      html += ' ' + data.labels.count + ' ';
      html += '<span class="' + RawClasses.total + '">0</span>';
      html += '<select class="' + RawClasses.select + '" title="' + data.labels.select + '" tabindex="-1" aria-hidden="true"></select>';
      html += '</div>';

      data.thisClasses = [RawClasses.base, data.theme, data.customClass];

      data.labels.pagination = data.labels.pagination.replace('{guid}', data.numGuid);

      this.addClass(data.thisClasses.join(" "))
        .wrapInner('<div class="' + RawClasses.pages + '" aria-label="' + data.labels.pagination + '"></div>')
        .prepend(html);

      data.$controls = this.find(Classes.control);
      data.$pages = this.find(Classes.pages);
      data.$items = data.$pages.children().addClass(RawClasses.page);
      data.$position = this.find(Classes.position);
      data.$select = this.find(Classes.select);
      data.index = -1;

      data.total = data.$items.length - 1;

      var index = data.$items.index(data.$items.filter("[data-" + Plugin.namespace + "-active]"));
      if (index < 0) {
        index = data.$items.index(data.$items.filter(Classes.active)); // reverse compat.
      }

      data.$items.eq(0)
        .addClass(RawClasses.first)
        .after('<span class="' + RawClasses.ellipsis + '">&hellip;</span>')
        .end()
        .eq(data.total)
        .addClass(RawClasses.last)
        .before('<span class="' + RawClasses.ellipsis + '">&hellip;</span>');

      data.$ellipsis = data.$pages.find(Classes.ellipsis);

      buildMobilePages(data);

      this.on(Events.click, Classes.page, data, onPageClick)
        .on(Events.click, Classes.control, data, onControlClick)
        // .on(Events.click, Classes.position, data, onPositionClick)
        .on(Events.change, Classes.select, data, onPageSelect);

      $.fsMediaquery("bind", data.rawGuid, data.mq, {
        enter: function() {
          data.$el.addClass(RawClasses.mobile);
        },
        leave: function() {
          data.$el.removeClass(RawClasses.mobile);
        }
      });

      updatePage(data, index);
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      $.fsMediaquery("unbind", data.rawGuid);

      data.$controls.remove();
      data.$ellipsis.remove();
      data.$select.remove();
      data.$position.remove();
      data.$items.removeClass([RawClasses.page, RawClasses.active, RawClasses.visible, RawClasses.first, RawClasses.last].join(" "))
        .unwrap();

      this.removeClass(data.thisClasses.join(" "))
        .off(Events.namespace);
    }

    /**
     * @method
     * @name jump
     * @description Jump instance of plugin to specific page
     * @example $(".target").pagination("jump", 1);
     */

    function jump(data, index) {
      data.$items.eq(index).trigger(Events.raw.click);
    }

    /**
     * @method private
     * @name onControlClick
     * @description Traverses pages
     * @param e [object] "Event data"
     */

    function onControlClick(e) {
      Functions.killEvent(e);

      var data = e.data,
        index = data.index + ($(e.currentTarget).hasClass(RawClasses.control_previous) ? -1 : 1);

      if (index >= 0) {
        data.$items.eq(index).trigger(Events.raw.click);
      }
    }

    /**
     * @method private
     * @name onPageSelect
     * @description Jumps to a page
     * @param e [object] "Event data"
     */

    function onPageSelect(e) {
      Functions.killEvent(e);

      var data = e.data,
        $target = $(e.currentTarget),
        index = parseInt($target.val(), 10);

      data.$items.eq(index).trigger(Events.raw.click);
    }

    /**
     * @method private
     * @name onPageClick
     * @description Jumps to a page
     * @param e [object] "Event data"
     */

    function onPageClick(e) {
      var data = e.data,
        $target = $(e.currentTarget),
        index = data.$items.index($target);

      if (data.ajax) {
        Functions.killEvent(e);
      } else {
        $target[0].click();
      }

      updatePage(data, index);
    }

    /**
     * @method private
     * @name onPositionClick
     * @description Opens mobile select
     * @param e [object] "Event data"
     */

    function onPositionClick(e) {
      Functions.killEvent(e);

      var data = e.data;

      if (Formstone.isMobile && !Formstone.isFirefoxMobile) {
        // Only open select on non-firefox mobile
        var el = data.$select[0];
        if (window.document.createEvent) { // All
          var evt = window.document.createEvent("MouseEvents");
          evt.initMouseEvent("mousedown", false, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          el.dispatchEvent(evt);
        } else if (el.fireEvent) { // IE
          el.fireEvent("onmousedown");
        }
      }
    }

    /**
     * @method private
     * @name updatePage
     * @description Updates pagination state
     * @param data [object] "Instance data"
     * @param index [int] "New page index"
     */

    function updatePage(data, index) {
      if (index < 0) {
        index = 0;
      }
      if (index > data.total) {
        index = data.total;
      }

      if (index !== data.index) {
        data.index = index;

        var start = data.index - data.visible,
          end = data.index + (data.visible + 1);

        if (start < 0) {
          start = 0;
        }
        if (end > data.total) {
          end = data.total;
        }

        data.$items.removeClass(RawClasses.visible)
          .removeClass(RawClasses.hidden)
          .filter(Classes.active)
          .removeClass(RawClasses.active)
          .end()
          .eq(data.index)
          .addClass(RawClasses.active)
          .end()
          .slice(start, end)
          .addClass(RawClasses.visible);

        data.$items.not(Classes.visible).addClass(RawClasses.hidden);

        data.$position.find(Classes.current)
          .text(data.index + 1)
          .end()
          .find(Classes.total)
          .text(data.total + 1);

        data.$select.val(data.index);

        // controls
        data.$controls.removeClass(RawClasses.visible);

        if (index > 0) {
          data.$controls.filter(Classes.control_previous).addClass(RawClasses.visible);
        }
        if (index < data.total) {
          data.$controls.filter(Classes.control_next).addClass(RawClasses.visible);
        }

        // elipsis
        data.$ellipsis.removeClass(RawClasses.visible);
        if (index > data.visible + 1) {
          data.$ellipsis.eq(0).addClass(RawClasses.visible);
        }
        if (index < data.total - data.visible - 1) {
          data.$ellipsis.eq(1).addClass(RawClasses.visible);
        }

        // Update
        data.$el.trigger(Events.update, [data.index]);
      }
    }

    /**
     * @method private
     * @name buildMobilePages
     * @description Builds options for mobile select
     * @param data [object] "Instance data"
     */

    function buildMobilePages(data) {
      var html = '';

      for (var i = 0; i <= data.total; i++) {
        html += '<option value="' + i + '"';
        if (i === data.index) {
          html += 'selected="selected"';
        }
        html += '>Page ' + (i + 1) + '</option>';
      }

      data.$select.html(html);
    }

    /**
     * @plugin
     * @name Pagination
     * @description A jQuery plugin for simple pagination.
     * @type widget
     * @main pagination.js
     * @main pagination.css
     * @dependency jQuery
     * @dependency core.js
     * @dependency mediaquery.js
     */

    var Plugin = Formstone.Plugin("pagination", {
        widget: true,

        /**
         * @options
         * @param ajax [boolean] <false> "Flag to disable default click actions"
         * @param customClass [string] <''> "Class applied to instance"
         * @param labels.close [string] <'Close'> "Close button text"
         * @param labels.count [string] <'of'> "Pagination count separator text"
         * @param labels.next [string] <'Next'> "Pagination control text"
         * @param labels.previous [string] <'Previous'> "Pagination control text"
         * @param labels.select [string] <'Select Page'> "Pagination select title"
         * @param labels.pagination [string] <'Pagination {guid}'> "Pagination aria label; {guid} replaced with instance GUID"
         * @param maxWidth [string] <'980px'> "Width at which to auto-disable plugin"
         * @param theme [string] <"fs-light"> "Theme class name"
         * @param visible [int] <2> "Visible pages before and after current page"
         */

        defaults: {
          ajax: false,
          customClass: "",
          labels: {
            count: "of",
            next: "Next",
            previous: "Previous",
            select: "Select Page",
            pagination: "Pagination {guid}"
          },
          maxWidth: "740px",
          theme: "fs-light",
          visible: 2
        },

        classes: [
          "pages",
          "page",

          "active",
          "first",
          "last",
          "ellipsis",
          "visible",
          "hidden",

          "control",
          "control_previous",
          "control_next",

          "position",
          "select",

          "mobile",

          "current",
          "total"
        ],

        /**
         * @events
         * @event update.pagination "Page updated"
         */

        events: {
          update: "update"
        },

        methods: {
          _construct: construct,
          _destruct: destruct
        }
      }),

      // Localize References

      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions;

  })

);

/*! formstone v1.4.20-1 [navigation.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./mediaquery",
        "./swap"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name setup
     * @description Setup plugin.
     */

    function setup() {
      // $Body  = Formstone.$body;
      $Locks = $("html, body");
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      // guid
      data.handleGuid = RawClasses.handle + data.guid;

      data.isToggle = (data.type === "toggle");
      data.open = false;

      if (data.isToggle) {
        data.gravity = "";
      }

      var baseClass = RawClasses.base,
        typeClass = [baseClass, data.type].join("-"),
        gravityClass = data.gravity ? [typeClass, data.gravity].join("-") : "",
        classGroup = [data.rawGuid, data.theme, data.customClass].join(" ");

      data.handle = this.data(Namespace + "-handle");
      data.content = this.data(Namespace + "-content");

      data.handleClasses = [
        RawClasses.handle,
        RawClasses.handle.replace(baseClass, typeClass),
        gravityClass ? RawClasses.handle.replace(baseClass, gravityClass) : "",
        data.handleGuid,
        classGroup
      ].join(" ");

      data.thisClasses = [
        RawClasses.nav.replace(baseClass, typeClass),
        gravityClass ? RawClasses.nav.replace(baseClass, gravityClass) : "",
        classGroup
      ];

      data.contentClasses = [
        RawClasses.content.replace(baseClass, typeClass),
        classGroup
      ].join(" ");

      data.contentClassesOpen = [
        gravityClass ? RawClasses.content.replace(baseClass, gravityClass) : "",
        RawClasses.open
      ].join(" ");

      // DOM

      data.$nav = this.addClass(data.thisClasses.join(" ")).attr("role", "navigation");
      data.$handle = $(data.handle).addClass(data.handleClasses);
      data.$content = $(data.content).addClass(data.contentClasses);
      data.$animate = $().add(data.$nav).add(data.$content);

      cacheLabel(data);

      // Tab index

      data.navTabIndex = data.$nav.attr("tabindex");
      data.$nav.attr("tabindex", -1);

      // Aria

      data.id = this.attr("id");

      if (data.id) {
        data.ariaId = data.id;
      } else {
        data.ariaId = data.rawGuid;
        this.attr("id", data.ariaId);
      }

      // toggle

      data.$handle.attr("data-swap-target", data.dotGuid)
        .attr("data-swap-linked", data.handleGuid)
        .attr("data-swap-group", RawClasses.base)
        .attr("tabindex", 0)
        .on("activate.swap" + data.dotGuid, data, onOpen)
        .on("deactivate.swap" + data.dotGuid, data, onClose)
        .on("enable.swap" + data.dotGuid, data, onEnable)
        .on("disable.swap" + data.dotGuid, data, onDisable)
        .on(Events.focus + data.dotGuid, data, onFocus)
        .on(Events.blur + data.dotGuid, data, onBlur)
        .fsSwap({
          maxWidth: data.maxWidth,
          classes: {
            target: data.dotGuid,
            enabled: Classes.enabled,
            active: Classes.open,
            raw: {
              target: data.rawGuid,
              enabled: RawClasses.enabled,
              active: RawClasses.open
            }
          }
        });

      if (!data.$handle.is("a, button")) {
        data.$handle.on(Events.keyPress + data.dotGuid, data, onKeyup);
      }

      // $Body.on( [ Events.focus + data.dotGuid, Events.focusIn + data.dotGuid ].join(" "), data, onDocumentFocus);
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      data.$content.removeClass([data.contentClasses, data.contentClassesOpen].join(" "))
        .off(Events.namespace);

      data.$handle.removeAttr("aria-controls")
        .removeAttr("aria-expanded")
        .removeAttr("data-swap-target")
        .removeData("swap-target")
        .removeAttr("data-swap-linked")
        .removeAttr("data-swap-group")
        .removeData("swap-linked")
        .removeData("tabindex")
        .removeClass(data.handleClasses)
        .off(data.dotGuid)
        .html(data.originalLabel)
        .fsSwap("destroy");

      data.$nav.attr("tabindex", data.navTabIndex);

      // $Body.off(data.dotGuid);

      restoreLabel(data);

      clearLocks(data);

      this.removeAttr("aria-hidden")
        .removeClass(data.thisClasses.join(" "))
        .off(Events.namespace);

      if (this.attr("id") === data.rawGuid) {
        this.removeAttr("id");
      }
    }

    /**
     * @method
     * @name open
     * @description Opens instance.
     * @example $(".target").navigation("open");
     */

    function open(data) {
      data.$handle.fsSwap("activate");
    }

    /**
     * @method
     * @name close
     * @description Closes instance.
     * @example $(".target").navigation("close");
     */

    function close(data) {
      data.$handle.fsSwap("deactivate");
    }

    /**
     * @method
     * @name enable
     * @description Enables instance.
     * @example $(".target").navigation("enable");
     */

    function enable(data) {
      data.$handle.fsSwap("enable");
    }

    /**
     * @method
     * @name disable
     * @description Disables instance.
     * @example $(".target").navigation("disable");
     */

    function disable(data) {
      data.$handle.fsSwap("disable");
    }

    /**
     * @method private
     * @name onFocus
     * @description Handles instance focus
     * @param e [object] "Event data"
     */

    function onFocus(e) {
      e.data.$handle.addClass(RawClasses.focus);
    }

    /**
     * @method private
     * @name onBlur
     * @description Handles instance blur
     * @param e [object] "Event data"
     */

    function onBlur(e) {
      e.data.$handle.removeClass(RawClasses.focus);
    }

    /**
     * @method private
     * @name onKeyup
     * @description Handles keypress event on inputs
     * @param e [object] "Event data"
     */

    function onKeyup(e) {
      var data = e.data;

      // If arrow keys
      if (e.keyCode === 13 || e.keyCode === 32) {
        Functions.killEvent(e);

        data.$handle.trigger(Events.raw.click);
      }
    }

    /**
     * @method private
     * @name onOpen
     * @description Handles nav open event.
     * @param e [object] "Event data"
     */

    function onOpen(e) {
      if (!e.originalEvent) { // thanks IE :/
        var data = e.data;

        if (!data.open) {
          data.$el.trigger(Events.open)
            .attr("aria-hidden", false);

          data.$content.addClass(data.contentClassesOpen)
            .one(Events.click, function() {
              close(data);
            });

          data.$handle.attr("aria-expanded", true);

          if (data.label) {
            data.$handle.html(data.labels.open);
          }

          addLocks(data);

          data.open = true;

          data.$nav.focus();
        }
      }
    }

    /**
     * @method private
     * @name onClose
     * @description Handles nav close event.
     * @param e [object] "Event data"
     */

    function onClose(e) {
      if (!e.originalEvent) { // thanks IE :/
        var data = e.data;

        if (data.open) {
          data.$el.trigger(Events.close)
            .attr("aria-hidden", true);

          data.$content.removeClass(data.contentClassesOpen)
            .off(Events.namespace);

          data.$handle.attr("aria-expanded", false);

          if (data.label) {
            data.$handle.html(data.labels.closed);
          }

          clearLocks(data);

          data.open = false;

          data.$el.focus();
        }
      }
    }

    /**
     * @method private
     * @name onEnable
     * @description Handles nav enable event.
     * @param e [object] "Event data"
     */

    function onEnable(e) {
      var data = e.data;

      data.$el.attr("aria-hidden", true);
      data.$handle.attr("aria-controls", data.ariaId)
        .attr("aria-expanded", false);
      data.$content.addClass(RawClasses.enabled);

      setTimeout(function() {
        data.$animate.addClass(RawClasses.animated);
      }, 0);

      if (data.label) {
        data.$handle.html(data.labels.closed);
      }
    }

    /**
     * @method private
     * @name onDisable
     * @description Handles nav disable event.
     * @param e [object] "Event data"
     */

    function onDisable(e) {
      var data = e.data;

      data.$el.removeAttr("aria-hidden");
      data.$handle.removeAttr("aria-controls")
        .removeAttr("aria-expanded");
      data.$content.removeClass(RawClasses.enabled, RawClasses.animated);
      data.$animate.removeClass(RawClasses.animated);

      restoreLabel(data);

      clearLocks(data);
    }

    /**
     * @method private
     * @name addLocks
     * @description Locks scrolling
     * @param data [object] "Instance data"
     */

    function addLocks(data) {
      if (!data.isToggle) {
        $Locks.addClass(RawClasses.lock);
      }
    }

    /**
     * @method private
     * @name clearLocks
     * @description Unlocks scrolling
     * @param data [object] "Instance data"
     */

    function clearLocks(data) {
      if (!data.isToggle) {
        $Locks.removeClass(RawClasses.lock);
      }
    }

    /**
     * @method private
     * @name cacheLabel
     * @description Sets handle labels
     * @param data [object] "Instance data"
     */

    function cacheLabel(data) {
      if (data.label) {
        if (data.$handle.length > 1) {
          data.originalLabel = [];

          for (var i = 0, count = data.$handle.length; i < count; i++) {
            data.originalLabel[i] = data.$handle.eq(i).html();
          }
        } else {
          data.originalLabel = data.$handle.html();
        }
      }
    }

    /**
     * @method private
     * @name restoreLabel
     * @description restores handle labels
     * @param data [object] "Instance data"
     */

    function restoreLabel(data) {
      if (data.label) {
        if (data.$handle.length > 1) {
          for (var i = 0, count = data.$handle.length; i < count; i++) {
            data.$handle.eq(i).html(data.originalLabel[i]);
          }
        } else {
          data.$handle.html(data.originalLabel);
        }
      }
    }

    /**
     * @method private
     * @name onDocumentFocus
     * @description Handles document focus
     * @param e [object] "Event data"
     */

    // function onDocumentFocus(e) {
    //   var target = e.target,
    //     data   = e.data;
    //
    //   if (data.open && !$.contains(data.$nav, target) && target !== data.$nav[0] && target !== data.$handle[0]) {
    //     Functions.killEvent(e);
    //
    //     data.$nav.focus();
    //   }
    // }

    /**
     * @plugin
     * @name Navigation
     * @description A jQuery plugin for simple responsive navigation.
     * @type widget
     * @main navigation.js
     * @main navigation.css
     * @dependency jQuery
     * @dependency core.js
     * @dependency mediaquery.js
     * @dependency swap.js
     */

    var Plugin = Formstone.Plugin("navigation", {
        widget: true,

        /**
         * @options
         * @param customClass [string] <''> "Class applied to instance"
         * @param gravity [string] <'left'> "Gravity of 'push', 'reveal' and 'overlay' navigation; 'right', 'left'"
         * @param label [boolean] <true> "Display handle width label"
         * @param labels.closed [string] <'Menu'> "Closed state text"
         * @param labels.open [string] <'Close'> "Open state text"
         * @param maxWidth [string] <'980px'> "Width at which to auto-disable plugin"
         * @param theme [string] <"fs-light"> "Theme class name"
         * @param type [string] <'toggle'> "Type of navigation; 'toggle', 'push', 'reveal', 'overlay'"
         */

        defaults: {
          customClass: "",
          gravity: "left",
          label: true,
          labels: {
            closed: "Menu",
            open: "Close"
          },
          maxWidth: "980px",
          theme: "fs-light",
          type: "toggle"
        },

        classes: [
          "handle",
          "nav",
          "content",
          "animated",
          "enabled",
          "focus",
          "open",
          "toggle",
          "push",
          "reveal",
          "overlay",
          "left",
          "right",
          "lock"
        ],

        /**
         * @events
         * @event open.navigation "Navigation opened"
         * @event close.navigation "Navigation closed"
         */

        events: {
          open: "open",
          close: "close"
        },

        methods: {
          _construct: construct,
          _destruct: destruct,

          // Public Methods

          open: open,
          close: close,
          enable: enable,
          disable: disable
        }
      }),

      // Localize References

      Namespace = Plugin.namespace,
      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,
      // $Body         = null,

      // Internal

      $Locks = null;

    // Setup

    Formstone.Ready(setup);

  })

);

/*! formstone v1.4.20-1 [number.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name setup
     * @description Setup plugin.
     */

    function setup() {
      $Body = Formstone.$body;
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      var min = parseFloat(this.attr("min")),
        max = parseFloat(this.attr("max"));

      // Mask as text

      data.min = (min || min === 0) ? min : false;
      data.max = (max || max === 0) ? max : false;
      data.step = parseFloat(this.attr("step")) || 1;
      data.timer = null;
      data.digits = significantDigits(data.step);
      data.disabled = this.is(":disabled") || this.is("[readonly]");

      var html = "";
      html += '<button type="button" class="' + [RawClasses.arrow, RawClasses.up].join(" ") + '" aria-hidden="true" tabindex="-1">' + data.labels.up + '</button>';
      html += '<button type="button" class="' + [RawClasses.arrow, RawClasses.down].join(" ") + '" aria-hidden="true" tabindex="-1">' + data.labels.down + '</button>';

      // Modify DOM
      this.wrap('<div class="' + [RawClasses.base, data.theme, data.customClass, (data.disabled) ? RawClasses.disabled : ""].join(" ") + '"></div>')
        .after(html);

      // Store data
      data.$container = this.parent(Classes.base);
      data.$arrows = data.$container.find(Classes.arrow);

      // Bind events
      this.on(Events.focus, data, onFocus)
        .on(Events.blur, data, onBlur)
        .on(Events.keyPress, data, onKeyup);

      data.$container.on([Events.touchStart, Events.mouseDown].join(" "), Classes.arrow, data, onPointerDown);

      step(data, 0);
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      data.$arrows.remove();

      this.unwrap()
        .off(Events.namespace);
    }

    /**
     * @method
     * @name enable
     * @description Enables target instance
     * @example $(".target").number("enable");
     */

    function enable(data) {
      if (data.disabled) {
        this.prop("disabled", false);

        data.$container.removeClass(RawClasses.disabled);

        data.disabled = false;
      }
    }

    /**
     * @method
     * @name disable
     * @description Disables target instance
     * @example $(".target").number("disable");
     */

    function disable(data) {
      if (!data.disabled) {
        this.prop("disabled", true);

        data.$container.addClass(RawClasses.disabled);

        data.disabled = true;
      }
    }

    /**
     * @method
     * @name update
     * @description Updates instance.
     * @example $(".target").number("update");
     */

    function updateInstance(data) {
      var min = parseFloat(data.$el.attr("min")),
        max = parseFloat(data.$el.attr("max"));

      data.min = (min || min === 0) ? min : false;
      data.max = (max || max === 0) ? max : false;
      data.step = parseFloat(data.$el.attr("step")) || 1;
      data.timer = null;
      data.digits = significantDigits(data.step);
      data.disabled = data.$el.is(":disabled") || data.$el.is("[readonly]");

      step(data, 0);
    }

    /**
     * @method private
     * @name onFocus
     * @description Handles instance focus
     * @param e [object] "Event data"
     */

    function onFocus(e) {
      e.data.$container.addClass(RawClasses.focus);
    }

    /**
     * @method private
     * @name onBlur
     * @description Handles instance blur
     * @param e [object] "Event data"
     */

    function onBlur(e) {
      step(e.data, 0);

      e.data.$container.removeClass(RawClasses.focus);
    }

    /**
     * @method private
     * @name onKeyup
     * @description Handles keypress event on inputs
     * @param e [object] "Event data"
     */

    function onKeyup(e) {
      var data = e.data;

      // If arrow keys
      if (e.keyCode === 38 || e.keyCode === 40) {
        e.preventDefault();

        step(data, (e.keyCode === 38) ? data.step : -data.step);
      }
    }

    /**
     * @method private
     * @name onPointerDown
     * @description Handles pointer down event on instance arrows
     * @param e [object] "Event data"
     */

    function onPointerDown(e) {
      Functions.killEvent(e);

      // Make sure we reset the states
      onPointerUp(e);

      var data = e.data;

      if (!data.disabled && e.which <= 1) {
        var change = $(e.target).hasClass(RawClasses.up) ? data.step : -data.step;

        data.timer = Functions.startTimer(data.timer, 300, function() {

          data.timer = Functions.startTimer(data.timer, 100, function() {
            step(data, change);
          }, true);

        });

        step(data, change);

        $Body.on([Events.touchEnd, Events.mouseUp].join(" "), data, onPointerUp);
      }
    }

    /**
     * @method private
     * @name onPointerUp
     * @description Handles pointer up event on instance arrows
     * @param e [object] "Event data"
     */

    function onPointerUp(e) {
      Functions.killEvent(e);

      var data = e.data;

      Functions.clearTimer(data.timer, true);

      $Body.off(Events.namespace);
    }

    /**
     * @method private
     * @name step
     * @description Steps through values
     * @param e [object] "Event data"
     * @param change [string] "Change value"
     */

    function step(data, change) {
      var oValue = parseFloat(data.$el.val()),
        value = change;

      if (change == 0) {
        return;
      }

      if (typeof oValue === "undefined" || isNaN(oValue)) {
        if (data.min !== false) {
          value = data.min;
        } else {
          value = 0;
        }
      } else if (data.min !== false && oValue < data.min) {
        value = data.min;
      } else {
        value += oValue;
      }

      if (value !== "") {
        if (data.min !== false && value < data.min) {
          value = data.min;
        }
        if (data.max !== false && value > data.max) {
          value = data.max;
        }
      }

      if (value !== oValue || change == 0) {
        if (value !== "") {
          value = round(value, data.digits);
        }

        data.$el.val(value)
          .trigger(Events.raw.change, [true]);
      }
    }

    /**
     * @method private
     * @name significantDigits
     * @description Analyzes and returns significant digit count
     * @param value [float] "Value to analyze"
     * @return [int] "Number of significant digits"
     */
    function significantDigits(value) {
      var test = String(value);

      if (test.indexOf(".") > -1) {
        return test.length - test.indexOf(".") - 1;
      } else {
        return 0;
      }
    }

    /**
     * @method private
     * @name round
     * @description Rounds a number to a sepcific significant digit count
     * @param value [float] "Value to round"
     * @param digits [float] "Digits to round to"
     * @return [number] "Rounded number"
     */

    function round(value, digits) {
      var exp = Math.pow(10, digits);
      return Math.round(value * exp) / exp;
    }

    /**
     * @plugin
     * @name Number
     * @description A jQuery plugin for cross browser number inputs.
     * @type widget
     * @main number.js
     * @main number.css
     * @dependency jQuery
     * @dependency core.js
     */

    var Plugin = Formstone.Plugin("number", {
        widget: true,

        /**
         * @options
         * @param customClass [string] <''> "Class applied to instance"
         * @param labels.up [string] <'Up'> "Up arrow label"
         * @param labels.down [string] <'Down'> "Down arrow label"
         * @param theme [string] <"fs-light"> "Theme class name"
         */

        defaults: {
          customClass: "",
          labels: {
            up: "Up",
            down: "Down"
          },
          theme: "fs-light"
        },

        classes: [
          "arrow",
          "up",
          "down",
          "disabled",
          "focus"
        ],

        methods: {
          _construct: construct,
          _destruct: destruct,

          // Public Methods

          enable: enable,
          disable: disable,
          update: updateInstance
        }
      }),

      // Localize References

      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      $Body = null;

    // Setup

    Formstone.Ready(setup);

  })

);

/*! formstone v1.4.20-1 [range.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./touch"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize(windowWidth) {
      Functions.iterate.call($Instances, resizeInstance);
    }

    /**
     * @method private
     * @name cacheInstances
     * @description Caches active instances
     */

    function cacheInstances() {
      $Instances = $(Classes.element);
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      if (!data.formatter) {
        data.formatter = formatNumber;
      }

      data.min = parseFloat(this.attr("min")) || 0;
      data.max = parseFloat(this.attr("max")) || 100;
      data.step = parseFloat(this.attr("step")) || 1;
      data.digits = data.step.toString().length - data.step.toString().indexOf(".");
      data.value = parseFloat(this.val()) || (data.min + ((data.max - data.min) / 2));

      var html = "";

      // Not valid in the spec
      data.vertical = this.attr("orient") === "vertical" || data.vertical;
      data.disabled = this.is(":disabled") || this.is("[readonly]");

      html += '<div class="' + RawClasses.track + '" aria-hidden="true">';
      if (data.fill) {
        html += '<span class="' + RawClasses.fill + '"></span>';
      }
      html += '<div class="' + RawClasses.handle + '" role="slider">';
      html += '<span class="' + RawClasses.marker + '"></span>';
      html += '</div>';
      html += '</div>';

      var baseClasses = [
        RawClasses.base,
        data.theme,
        data.customClass,
        (data.vertical) ? RawClasses.vertical : "",
        (data.labels) ? RawClasses.labels : "",
        (data.disabled) ? RawClasses.disabled : ""
      ];

      this.addClass(RawClasses.element)
        .wrap('<div class="' + baseClasses.join(" ") + '"></div>')
        .after(html);

      data.$container = this.parents(Classes.base);
      data.$track = data.$container.find(Classes.track);
      data.$fill = data.$container.find(Classes.fill);
      data.$handle = data.$container.find(Classes.handle);
      data.$output = data.$container.find(Classes.output);

      if (data.labels) {
        var labelMax = '<span class="' + [RawClasses.label, RawClasses.label_max].join(" ") + '">' + data.formatter.call(this, (data.labels.max) ? data.labels.max : data.max) + '</span>',
          labelMin = '<span class="' + [RawClasses.label, RawClasses.label_min].join(" ") + '">' + data.formatter.call(this, (data.labels.max) ? data.labels.min : data.min) + '</span>';

        data.$container.prepend((data.vertical) ? labelMax : labelMin)
          .append((data.vertical) ? labelMin : labelMax);
      }

      data.$labels = data.$container.find(Classes.label);

      // Bind click events
      this.on(Events.focus, data, onFocus)
        .on(Events.blur, data, onBlur)
        .on(Events.change, data, onChange);

      data.$container.fsTouch({
          pan: true,
          axis: data.vertical ? "y" : "x"
        }).on(Events.panStart, data, onPanStart)
        .on(Events.pan, data, onPan)
        .on(Events.panEnd, data, onPanEnd);

      cacheInstances();

      resizeInstance.call(this, data);
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      data.$container.off(Events.namespace)
        .fsTouch("destroy");

      data.$track.remove();
      data.$labels.remove();

      this.unwrap()
        .removeClass(RawClasses.element)
        .off(Events.namespace);

      cacheInstances();
    }

    /**
     * @method
     * @name enable
     * @description Enables target instance
     * @example $(".target").range("enable");
     */

    function enable(data) {
      if (data.disabled) {
        this.prop("disabled", false);

        data.$container.removeClass(RawClasses.disabled);

        data.disabled = false;
      }
    }

    /**
     * @method
     * @name disable
     * @description Disables target instance
     * @example $(".target").range("disable");
     */

    function disable(data) {
      if (!data.disabled) {
        this.prop("disabled", true);

        data.$container.addClass(RawClasses.disabled);

        data.disabled = true;
      }
    }

    /**
     * @method
     * @name update
     * @description Updates instance.
     * @example $(".target").range("update");
     */

    function updateInstance(data) {
      data.min = parseFloat(data.$el.attr("min")) || 0;
      data.max = parseFloat(data.$el.attr("max")) || 100;
      data.step = parseFloat(data.$el.attr("step")) || 1;
      data.digits = data.step.toString().length - data.step.toString().indexOf(".");
      data.value = parseFloat(this.val()) || (data.min + ((data.max - data.min) / 2));

      if (data.labels) {
        data.$labels.filter(Classes.label_max).html(data.formatter.call(this, (data.labels.max) ? data.labels.max : data.max));
        data.$labels.filter(Classes.label_min).html(data.formatter.call(this, (data.labels.max) ? data.labels.min : data.min));
      }

      resizeInstance.call(this, data);
    }

    /**
     * @method
     * @name resize
     * @description Resizes instance
     * @example $(".target").range("resize");
     */

    /**
     * @method private
     * @name resizeInstance
     * @description Resizes each instance
     * @param data [object] "Instance data"
     */

    function resizeInstance(data) {
      data.stepCount = (data.max - data.min) / data.step;
      data.offset = data.$track.offset();

      if (data.vertical) {
        data.trackHeight = data.$track.outerHeight();
        data.handleHeight = data.$handle.outerHeight();
        data.increment = data.trackHeight / data.stepCount;
      } else {
        data.trackWidth = data.$track.outerWidth();
        data.handleWidth = data.$handle.outerWidth();
        data.increment = data.trackWidth / data.stepCount;
      }

      var percent = (data.$el.val() - data.min) / (data.max - data.min);

      position(data, percent, true); // isResize
    }

    /**
     * @method private
     * @name onTrackDown
     * @description Handles panstart event to track
     * @param e [object] "Event data"
     */

    function onPanStart(e) {
      Functions.killEvent(e);

      var data = e.data;

      if (!data.disabled) {
        resizeInstance(data);
        onPan(e);

        data.$container.addClass(RawClasses.focus);
      }
    }

    /**
     * @method private
     * @name onPan
     * @description Handles pan event
     * @param e [object] "Event data"
     */

    function onPan(e) {
      Functions.killEvent();

      var data = e.data,
        percent = 0;

      if (!data.disabled) {
        if (data.vertical) {
          percent = 1 - (e.pageY - data.offset.top) / data.trackHeight;
        } else {
          percent = (e.pageX - data.offset.left) / data.trackWidth;
        }

        position(data, percent);
      }
    }

    /**
     * @method private
     * @name onPanEnd
     * @description Handles panend event
     * @param e [object] "Event data"
     */

    function onPanEnd(e) {
      Functions.killEvent(e);

      var data = e.data;

      if (!data.disabled) {
        data.$container.removeClass(RawClasses.focus);
      }
    }

    /**
     * @method private
     * @name onFocus
     * @description Handles instance focus
     * @param e [object] "Event data"
     */

    function onFocus(e) {
      e.data.$container.addClass(RawClasses.focus);
    }

    /**
     * @method private
     * @name onBlur
     * @description Handles instance blur
     * @param e [object] "Event data"
     */

    function onBlur(e) {
      e.data.$container.removeClass(RawClasses.focus);
    }

    /**
     * @method private
     * @name position
     * @description Positions handle
     * @param data [object] "Instance Data"
     * @param perc [number] "Position precentage"
     * @param isResize [boolean] "Called from resize"
     */

    function position(data, perc, isResize) {
      if (data.increment > 1) {
        if (data.vertical) {
          perc = (Math.round(perc * data.stepCount) * data.increment) / data.trackHeight;
        } else {
          perc = (Math.round(perc * data.stepCount) * data.increment) / data.trackWidth;
        }
      }

      if (perc < 0) {
        perc = 0;
      }
      if (perc > 1) {
        perc = 1;
      }

      var value = ((data.min - data.max) * perc);
      value = -parseFloat(value.toFixed(data.digits));

      data.$fill.css((data.vertical) ? "height" : "width", (perc * 100) + "%");
      data.$handle.css((data.vertical) ? "bottom" : "left", (perc * 100) + "%");
      /* .attr("aria-valuenow", value) */
      value += data.min;

      if (value !== data.value && value !== false && isResize !== true) {
        data.$el.val(value)
          .trigger(Events.raw.change, [true]);

        data.value = value;
      }
    }

    /**
     * @method private
     * @name onChange
     * @description Handles change events
     * @param e [object] "Event data"
     * @param internal [boolean] "Flag for internal change"
     */

    function onChange(e, internal) {
      var data = e.data;

      if (!internal && !data.disabled) {
        var percent = (data.$el.val() - data.min) / (data.max - data.min);

        position(data, percent);
      }
    }

    /**
     * @method private
     * @name formatNumber
     * @description Formats provided number
     * @param number [number] "Number to format"
     */

    function formatNumber(number) {
      var parts = number.toString().split(".");

      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      return parts.join(".");
    }

    /**
     * @plugin
     * @name Range
     * @description A jQuery plugin for cross browser range inputs.
     * @type widget
     * @main range.js
     * @main range.css
     * @dependency jQuery
     * @dependency core.js
     * @dependency touch.js
     */

    var Plugin = Formstone.Plugin("range", {
        widget: true,

        /**
         * @options
         * @param customClass [string] <''> "Class applied to instance"
         * @param fill [boolean] <false> "Flag to draw fill"
         * @param formatter [function] <false> "Value format function"
         * @param labels [boolean] <true> "Flag to draw labels"
         * @param labels.max [string] "Max value label; defaults to max value"
         * @param labels.min [string] "Min value label; defaults to min value"
         * @param theme [string] <"fs-light"> "Theme class name"
         * @param vertical [boolean] <false> "Flag to render vertical range; Deprecated use 'orientation' attribute instead
         */

        defaults: {
          customClass: "",
          fill: false,
          formatter: false,
          labels: {
            max: false,
            min: false
          },
          theme: "fs-light",
          vertical: false
        },

        classes: [
          "track",
          "handle",
          "fill",
          "marker",
          "labels",
          "label",
          "label_min",
          "label_max",
          "vertical",
          "focus",
          "disabled"
        ],

        methods: {
          _construct: construct,
          _destruct: destruct,
          _resize: resize,

          // Public Methods

          enable: enable,
          disable: disable,
          resize: resizeInstance,
          update: updateInstance
        }
      }),

      // Localize References

      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      $Instances = [];

  })

);

/*! formstone v1.4.20-1 [scrollbar.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./touch"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name setup
     * @description Setup plugin.
     */

    function setup() {
      $Body = Formstone.$body;
    }

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize(windowWidth) {
      Functions.iterate.call($Instances, resizeInstance);
    }

    /**
     * @method private
     * @name cacheInstances
     * @description Caches active instances
     */

    function cacheInstances() {
      $Instances = $(Classes.base);
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      var html = '';

      html += '<div class="' + RawClasses.bar + '">';
      html += '<div class="' + RawClasses.track + '">';
      html += '<button type="button" class="' + RawClasses.handle + '" aria-hidden="true" tabindex="-1"></button>';
      html += '</div></div>';

      data.paddingRight = parseInt(this.css("padding-right"), 10);
      data.paddingBottom = parseInt(this.css("padding-bottom"), 10);
      data.thisClasses = [RawClasses.base, data.theme, data.customClass, (data.horizontal ? RawClasses.horizontal : "")];

      this.addClass(data.thisClasses.join(" "))
        .wrapInner('<div class="' + RawClasses.content + '" tabindex="0"></div>')
        .prepend(html);

      data.$content = this.find(Classes.content);
      data.$bar = this.find(Classes.bar);
      data.$track = this.find(Classes.track);
      data.$handle = this.find(Classes.handle);

      data.trackMargin = parseInt(data.trackMargin, 10);

      // Events

      data.$content.on(Events.scroll, data, onScroll);

      if (data.mouseWheel) {
        data.$content.on("wheel" + Events.namespace, data, onMouseWheel);
      }

      data.$track.fsTouch({
          axis: (data.horizontal) ? "x" : "y",
          pan: true
        }).on(Events.panStart, data, onPanStart)
        .on(Events.pan, data, onPan)
        .on(Events.panEnd, data, onPanEnd)
        .on(Events.click, Functions.killEvent)
        .on("wheel" + Events.namespace, data, onTrackMouseWheel);

      resizeInstance(data);

      cacheInstances();
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      data.$track.fsTouch("destroy");

      data.$bar.remove();

      data.$content.off(Events.namespace)
        .contents()
        .unwrap();

      this.removeClass(data.thisClasses.join(" "))
        .off(Events.namespace);

      if (this.attr("id") === data.rawGuid) {
        this.removeAttr("id");
      }
    }

    /**
     * @method
     * @name scroll
     * @description Scrolls instance of plugin to element or position
     * @param position [string or int] <null> "Target element selector or static position"
     * @param duration [int] <null> "Optional scroll duration"
     * @example $(".target").scrollbar("scroll", position, duration);
     */

    function scroll(data, position, dur) {
      var duration = dur || data.duration,
        styles = {};

      if (typeof position !== "number") {
        var $target = $(position);

        if ($target.length > 0) {
          var offset = $target.position();

          if (data.horizontal) {
            position = offset.left + data.$content.scrollLeft();
          } else {
            position = offset.top + data.$content.scrollTop();
          }
        } else {
          if (position === "top") {
            position = 0;
          } else if (position === "bottom") {
            position = data.horizontal ? data.$content[0].scrollWidth : data.$content[0].scrollHeight;
          } else {
            position = data.$content.scrollTop();
          }
        }
      }

      styles[(data.horizontal ? "scrollLeft" : "scrollTop")] = position;

      data.$content.stop()
        .animate(styles, duration);
    }

    /**
     * @method
     * @name resize
     * @description Resizes layout on instance of plugin
     * @example $(".target").scrollbar("resize");
     */

    /**
     * @method private
     * @name resizeInstance
     * @description Resizes layout on instance of plugin
     */

    function resizeInstance(data) {
      data.$el.addClass(RawClasses.isSetup);

      var barStyles = {},
        trackStyles = {},
        handleStyles = {},
        handlePosition = 0,
        active = true;

      if (data.horizontal) {
        // Horizontal
        data.barHeight = data.$content[0].offsetHeight - data.$content[0].clientHeight;
        data.frameWidth = data.$content.outerWidth();
        data.trackWidth = data.frameWidth - (data.trackMargin * 2);
        data.scrollWidth = data.$content[0].scrollWidth;
        data.ratio = data.trackWidth / data.scrollWidth;
        data.trackRatio = data.trackWidth / data.scrollWidth;
        data.handleWidth = (data.handleSize > 0) ? data.handleSize : data.trackWidth * data.trackRatio;
        data.scrollRatio = (data.scrollWidth - data.frameWidth) / (data.trackWidth - data.handleWidth);
        data.handleBounds = {
          left: 0,
          right: data.trackWidth - data.handleWidth
        };

        data.$content.css({
          paddingBottom: data.barHeight + data.paddingBottom
        });

        var scrollLeft = data.$content.scrollLeft();

        handlePosition = scrollLeft * data.ratio;
        active = (data.scrollWidth <= data.frameWidth);

        barStyles = {
          width: data.frameWidth
        };

        trackStyles = {
          width: data.trackWidth,
          marginLeft: data.trackMargin,
          marginRight: data.trackMargin
        };

        handleStyles = {
          width: data.handleWidth
        };
      } else {
        // Vertical
        data.barWidth = data.$content[0].offsetWidth - data.$content[0].clientWidth;
        data.frameHeight = data.$content.outerHeight();
        data.trackHeight = data.frameHeight - (data.trackMargin * 2);
        data.scrollHeight = data.$content[0].scrollHeight;
        data.ratio = data.trackHeight / data.scrollHeight;
        data.trackRatio = data.trackHeight / data.scrollHeight;
        data.handleHeight = (data.handleSize > 0) ? data.handleSize : data.trackHeight * data.trackRatio;
        data.scrollRatio = (data.scrollHeight - data.frameHeight) / (data.trackHeight - data.handleHeight);
        data.handleBounds = {
          top: 0,
          bottom: data.trackHeight - data.handleHeight
        };

        var scrollTop = data.$content.scrollTop();

        handlePosition = scrollTop * data.ratio;
        active = (data.scrollHeight <= data.frameHeight);

        barStyles = {
          height: data.frameHeight
        };

        trackStyles = {
          height: data.trackHeight,
          marginBottom: data.trackMargin,
          marginTop: data.trackMargin
        };

        handleStyles = {
          height: data.handleHeight
        };
      }

      // Updates

      if (active) {
        data.$el.removeClass(RawClasses.active);
      } else {
        data.$el.addClass(RawClasses.active);
      }

      data.$bar.css(barStyles);
      data.$track.css(trackStyles);
      data.$handle.css(handleStyles);

      data.panning = false;

      positionContent(data, handlePosition);

      onScroll({
        data: data
      });

      data.$el.removeClass(RawClasses.setup);
    }

    /**
     * @method private
     * @name onScroll
     * @description Handles scroll event
     * @param e [object] "Event data"
     */

    function onScroll(e) {
      Functions.killEvent(e);

      var data = e.data,
        handleStyles = {};

      if (!data.panning) {
        if (data.horizontal) {
          // Horizontal
          var scrollLeft = data.$content.scrollLeft();

          if (scrollLeft < 0) {
            scrollLeft = 0;
          }

          data.handleLeft = scrollLeft / data.scrollRatio;

          if (data.handleLeft > data.handleBounds.right) {
            data.handleLeft = data.handleBounds.right;
          }

          handleStyles = {
            left: data.handleLeft
          };
        } else {
          // Vertical
          var scrollTop = data.$content.scrollTop();

          if (scrollTop < 0) {
            scrollTop = 0;
          }

          data.handleTop = scrollTop / data.scrollRatio;

          if (data.handleTop > data.handleBounds.bottom) {
            data.handleTop = data.handleBounds.bottom;
          }

          handleStyles = {
            top: data.handleTop
          };
        }

        data.$handle.css(handleStyles);
      }
    }

    function onTrackMouseWheel(e) {
      onMouseWheel(e, true);
    }

    /**
     * @method private
     * @name onMouseWheel
     * @description Handles mousewheel event on content
     * @param e [object] "Event data"
     */

    function onMouseWheel(e, fromTrack) {
      // http://stackoverflow.com/questions/5802467/prevent-scrolling-of-parent-element/16324762#16324762
      var data = e.data,
        delta,
        direction;

      if (data.horizontal) {
        // Horizontal
        var scrollLeft = data.$content[0].scrollLeft,
          scrollWidth = data.$content[0].scrollWidth,
          width = data.$content.outerWidth();

        delta = e.originalEvent.deltaX * ((fromTrack === true) ? -1 : 1);

        if (fromTrack === true) {
          data.$content.scrollLeft(scrollLeft - delta);
          return killEvent(e);
        }

        direction = (delta < 0) ? "right" : "left";

        if (direction === "left" && delta > (scrollWidth - width - scrollLeft)) {
          data.$content.scrollLeft(scrollWidth);
          return killEvent(e);
        } else if (direction === "right" && -delta > scrollLeft) {
          data.$content.scrollLeft(0);
          return killEvent(e);
        }
      } else {
        // Vertical
        var scrollTop = data.$content[0].scrollTop,
          scrollHeight = data.$content[0].scrollHeight,
          height = data.$content.outerHeight();

        delta = e.originalEvent.deltaY * ((fromTrack === true) ? -1 : 1);

        if (fromTrack === true) {
          data.$content.scrollTop(scrollTop - delta);
          return killEvent(e);
        }

        direction = (delta < 0) ? "up" : "down";

        if (direction === "down" && delta > (scrollHeight - height - scrollTop)) {
          data.$content.scrollTop(scrollHeight);
          return killEvent(e);
        } else if (direction === "up" && -delta > scrollTop) {
          data.$content.scrollTop(0);
          return killEvent(e);
        }
      }
    }

    /**
     * @method private
     * @name killEvent
     * @description Localized version of Formstone.killEvent()
     * @param e [object] "Event data"
     */

    function killEvent(e) {
      Functions.killEvent(e);
      e.returnValue = false;
      return false;
    }

    /**
     * @method private
     * @name onPanStart
     * @description Handles pan event on track
     * @param e [object] "Event data"
     */

    function onPanStart(e) {
      var data = e.data,
        offset = data.$track.offset(),
        handlePosition;

      data.panning = true;

      if (data.horizontal) {
        handlePosition = data.handleLeft = e.pageX - offset.left /* + $Window.scrollLeft() */ - (data.handleWidth / 2);
      } else {
        handlePosition = data.handleTop = e.pageY - offset.top /* + $Window.scrollTop() */ - (data.handleHeight / 2);
      }

      positionContent(data, handlePosition);
    }

    function onPan(e) {
      var data = e.data,
        handlePosition;

      if (data.horizontal) {
        handlePosition = data.handleLeft + e.deltaX;
      } else {
        handlePosition = data.handleTop + e.deltaY;
      }

      positionContent(data, handlePosition);
    }

    function onPanEnd(e) {
      var data = e.data;

      data.panning = false;

      if (data.horizontal) {
        data.handleLeft += e.deltaX;
      } else {
        data.handleTop += e.deltaY;
      }

      // positionContent(data, handlePosition);
    }

    /**
     * @method private
     * @name position
     * @description Position handle based on scroll
     * @param data [object] "Instance data"
     * @param position [int] "Scroll position"
     */

    function positionContent(data, position) {
      var handleStyles = {};

      if (data.horizontal) {
        // Horizontal
        if (position < data.handleBounds.left) {
          position = data.handleBounds.left;
        }

        if (position > data.handleBounds.right) {
          position = data.handleBounds.right;
        }

        handleStyles = {
          left: position
        };

        data.$content.scrollLeft(Math.round(position * data.scrollRatio));
      } else {
        // Vertical
        if (position < data.handleBounds.top) {
          position = data.handleBounds.top;
        }

        if (position > data.handleBounds.bottom) {
          position = data.handleBounds.bottom;
        }

        handleStyles = {
          top: position
        };

        data.$content.scrollTop(Math.round(position * data.scrollRatio));
      }

      data.$handle.css(handleStyles);
    }

    /**
     * @plugin
     * @name Scrollbar
     * @description A jQuery plugin for custom scrollbars.
     * @type widget
     * @main scrollbar.js
     * @main scrollbar.css
     * @dependency jQuery
     * @dependency core.js
     * @dependency touch.js
     */

    var Plugin = Formstone.Plugin("scrollbar", {
        widget: true,

        /**
         * @options
         * @param customClass [string] <''> "Class applied to instance"
         * @param duration [int] <0> "Scroll animation length"
         * @param handleSize [int] <0> "Handle size; 0 to auto size"
         * @param horizontal [boolean] <false> "Scroll horizontally"
         * @param mouseWheel [boolean] <true> "Flag to prevent scrolling of parent element"
         * @param theme [string] <"fs-light"> "Theme class name"
         * @param trackMargin [int] <0> "Margin between track and handle edge”
         */

        defaults: {
          customClass: "",
          duration: 0,
          handleSize: 0,
          horizontal: false,
          mouseWheel: true,
          theme: "fs-light",
          trackMargin: 0
        },

        classes: [
          "content",
          "bar",
          "track",
          "handle",
          "horizontal",
          "setup",
          "active"
        ],

        methods: {
          _construct: construct,
          _destruct: destruct,
          _resize: resize,

          // Public Methods
          scroll: scroll,
          resize: resizeInstance
        }
      }),

      // Localize References

      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      $Body,
      $Window = Formstone.$window,
      $Instances = [];

    // Setup

    Formstone.Ready(setup);

  })

);

/*! formstone v1.4.20-1 [sticky.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./mediaquery",
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize() {
      Functions.iterate.call($Instances, resizeInstance);
    }

    /**
     * @method private
     * @name raf
     * @description Handles request animation frame
     */

    function raf() {
      ScrollTop = $Window.scrollTop();

      if (ScrollTop < 0) {
        ScrollTop = 0;
      }

      if (ScrollTop !== OldScrollTop) {
        renderRAF();

        OldScrollTop = ScrollTop;
      }
    }

    /**
     * @method private
     * @name cacheInstances
     * @description Caches active instances
     */

    function cacheInstances() {
      $Instances = $(Classes.base);

      resize();
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      data.enabled = false;
      data.stuck   = false;
      data.passed  = true;
      data.$clone  = data.$el.clone();

      data.container = data.$el.data("sticky-container");
      data.$container = $(data.container);

      data.$el.addClass(RawClasses.base);
      data.$clone.removeClass(RawClasses.element)
        .addClass(RawClasses.clone);
      data.$container.addClass(RawClasses.container);

      data.$stickys = $().add(data.$el).add(data.$clone);

      data.$el.after(data.$clone);

      var $images = $().add( data.$el.find("img") ).add( data.$container.find("img") );

      if ($images.length) {
        $images.on(Events.load, data, resizeInstance);
      }

      data.maxWidth = (data.maxWidth === Infinity ? "100000px" : data.maxWidth);
      data.mq = "(min-width:" + data.minWidth + ") and (max-width:" + data.maxWidth + ")";

      // Media Query support
      $.fsMediaquery("bind", data.rawGuid, data.mq, {
        enter: function() {
          enable.call(data.$el, data);
        },
        leave: function() {
          disable.call(data.$el, data);
        }
      });
    }

    /**
     * @method private
     * @name postConstruct
     * @description Run post build.
     * @param data [object] "Instance data"
     */

    function postConstruct(data) {
      cacheInstances();
      resize();
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      data.$clone.remove();
      data.$container.removeClass(RawClasses.container);

      data.$el.css({
        height: '',
        width: '',
        top: '',
        bottom: '',
        marginBottom: ''
      }).removeClass(RawClasses.base);

      cacheInstances();
    }

    /**
     * @method
     * @name enable
     * @description Enables instance.
     * @example $(".target").sticky("enable");
     */

    function enable(data) {
      data.enabled = true;

      data.$el.addClass(RawClasses.enabled);

      resizeInstance(data);
    }

    /**
     * @method
     * @name disable
     * @description Disables instance.
     * @example $(".target").sticky("disable");
     */

    function disable(data) {
      data.enabled = false;

      data.$el.css({
        height: '',
        width: '',
        top: '',
        bottom: '',
        marginBottom: ''
      }).removeClass(RawClasses.enabled);

      data.$stickys.removeClass([RawClasses.passed, RawClasses.stuck].join(" "));
    }

    /**
     * @method private
     * @name renderRAF
     * @description Updates DOM based on animation values
     */

    function renderRAF() {
      Functions.iterate.call($Instances, checkInstance);
    }

    /**
     * @method
     * @name resize
     * @description Updates instance.
     * @example $(".target").sticky("resize");
     */

    /**
     * @method private
     * @name resizeInstance
     * @description Handle window resize event
     * @param data [object] "Instance data"
     */

    function resizeInstance(data) {
      if (data.enabled) {
        cacheProps(data);

        if (data.$container.length) {
          var containerPos = data.$container.offset();

          data.min = containerPos.top - data.margin;
          data.max = data.min + data.$container.outerHeight(false) - data.height;
        } else {
          var $el;

          if (data.stuck) {
            $el = data.$clone;
          } else {
            $el = data.$el;
          }

          var elPos = $el.offset();

          data.min = elPos.top - data.margin;
          data.max = false;
        }

        checkInstance(data);
      }
    }

    /**
     * @method private
     * @name cacheProps
     * @description Cache instance props
     * @param data [object] "Instance data"
     */

    function cacheProps(data) {
      var $el;

      if (data.stuck) {
        $el = data.$clone;
      } else {
        $el = data.$el;
      }

      data.margin = parseInt($el.css("margin-top"), 10);

      if (data.$container.length) {
        data.containerMargin = parseInt(data.$container.css("margin-top"), 10);
      } else {
        data.containerMargin = 0;
      }

      data.height = $el.outerHeight();
      data.width = $el.outerWidth();
    }

    /**
     * @method private
     * @name checkInstance
     * @description Handle window scroll event
     * @param data [object] "Instance data"
     */

    function checkInstance(data) {
      if (data.enabled) {
        var check = (ScrollTop + data.offset);

        if (check >= data.min) {
          data.stuck = true;
          data.$stickys.addClass(RawClasses.stuck);

          if (!data.stuck) {
            data.$el.trigger(Events.stuck);

            cacheProps(data);
          }

          var top = data.offset;
          var bottom = '';

          if (data.max && check > data.max) {
            if (!data.passed) {
              data.$el.trigger(Events.passed);
            }

            data.passed = true;
            data.$stickys.addClass(RawClasses.passed);

            top = '';
            bottom = 0;
          } else {
            data.passed = false;
            data.$stickys.removeClass(RawClasses.passed);
          }

          data.$el.css({
            height: data.height,
            width: data.width,
            top: top,
            bottom: bottom,
            marginBottom: 0
          });
        } else {
          data.stuck = false;
          data.$stickys.removeClass(RawClasses.stuck).removeClass(RawClasses.passed);

          if (data.stuck) {
            data.$el.trigger(Events.unstuck);

            // cacheProps(data);
          }

          data.$el.css({
            height: '',
            width: '',
            top: '',
            bottom: '',
            marginBottom: ''
          });
        }
      }
    }

    /**
     * @plugin
     * @name Sticky
     * @description A jQuery plugin for sticky elements.
     * @type widget
     * @main sticky.js
     * @dependency jQuery
     * @dependency core.js
     */

    var Plugin = Formstone.Plugin("sticky", {
        widget: true,

        /**
         * @options
         * @param maxWidth [string] <'Infinity'> "Width at which to auto-disable plugin"
         * @param minWidth [string] <'0'> "Width at which to auto-disable plugin"
         * @param offset [int] <0> "Element offset for activating sticky position"
         */

        defaults: {
          maxWidth: Infinity,
          minWidth: '0px',
          offset: 0
        },

        classes: [
          "enabled",
          "sticky",
          "stuck",
          "clone",
          "container",
          "passed"
        ],

        /**
         * @events
         * @event passed.sticky "Element passed"
         * @event stuck.sticky "Element stuck"
         * @event unstuck.sticky "Element unstuck"
         */

        events: {
          passed: "passed",
          stuck: "stuck",
          unstuck: "unstuck"
        },

        methods: {
          _construct: construct,
          _postConstruct: postConstruct,
          _destruct: destruct,
          _resize: resize,
          _raf: raf,

          disable: disable,
          enable: enable,

          reset: resizeInstance,
          resize: resizeInstance
        }
      }),

      // Localize References

      Namespace = Plugin.namespace,
      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      Window = Formstone.window,
      $Window = Formstone.$window,
      $Body,
      ScrollTop = 0,
      OldScrollTop = 0,
      $Instances = [];

  })

);

/*! formstone v1.4.20-1 [swap.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./mediaquery"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      data.enabled = false;
      data.active = false;

      data.classes = $.extend(true, {}, Classes, data.classes);

      data.target = this.data(Namespace + "-target");
      data.$target = $(data.target).addClass(data.classes.raw.target);

      data.mq = "(max-width:" + (data.maxWidth === Infinity ? "100000px" : data.maxWidth) + ")";

      // live query for linked to avoid missing new elements
      var linked = this.data(Namespace + "-linked");
      data.linked = linked ? '[data-' + Namespace + '-linked="' + linked + '"]' : false;

      // live query for the group to avoid missing new elements
      var group = this.data(Namespace + "-group");
      data.group = group ? '[data-' + Namespace + '-group="' + group + '"]' : false;

      data.$swaps = $().add(this).add(data.$target);

      this.on(Events.click + data.dotGuid, data, onClick);
    }

    /**
     * @method private
     * @name postConstruct
     * @description Run post build.
     * @param data [object] "Instance data"
     */

    function postConstruct(data) {
      if (!data.collapse && data.group && !$(data.group).filter("[data-" + Namespace + "-active]").length) {
        $(data.group).eq(0).attr("data-" + Namespace + "-active", "true");
      }

      // Should be activate when enabled
      data.onEnable = this.data(Namespace + "-active") || false;

      // Media Query support
      $.fsMediaquery("bind", data.rawGuid, data.mq, {
        enter: function() {
          enable.call(data.$el, data, true);
        },
        leave: function() {
          disable.call(data.$el, data, true);
        }
      });
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      $.fsMediaquery("unbind", data.rawGuid);

      data.$swaps.removeClass([data.classes.raw.enabled, data.classes.raw.active].join(" "))
        .off(Events.namespace);
    }

    /**
     * @method
     * @name activate
     * @description Activate instance.
     * @example $(".target").swap("activate");
     */

    function activate(data, fromLinked) {
      if (data.enabled && !data.active) {
        if (data.group && !fromLinked) {
          // Deactivates grouped instances
          $(data.group).not(data.$el).not(data.linked)[Plugin.namespaceClean]("deactivate", true);
        }

        // index in group
        var index = (data.group) ? $(data.group).index(data.$el) : null;

        data.$swaps.addClass(data.classes.raw.active);

        if (!fromLinked) {
          if (data.linked) {
            // Linked handles
            $(data.linked).not(data.$el)[Plugin.namespaceClean]("activate", true);
          }
        }

        this.trigger(Events.activate, [index]);

        data.active = true;
      }
    }

    /**
     * @method
     * @name deactivate
     * @description Deactivates instance.
     * @example $(".target").swap("deactivate");
     */

    function deactivate(data, fromLinked) {
      if (data.enabled && data.active) {
        data.$swaps.removeClass(data.classes.raw.active);

        if (!fromLinked) {
          if (data.linked) {
            // Linked handles
            $(data.linked).not(data.$el)[Plugin.namespaceClean]("deactivate", true);
          }
        }

        this.trigger(Events.deactivate);

        data.active = false;
      }
    }

    /**
     * @method
     * @name enable
     * @description Enables instance.
     * @example $(".target").swap("enable");
     */

    function enable(data, fromLinked) {
      if (!data.enabled) {
        data.enabled = true;

        data.$swaps.addClass(data.classes.raw.enabled);

        if (!fromLinked) {
          // Linked handles
          $(data.linked).not(data.$el)[Plugin.namespaceClean]("enable");
        }

        this.trigger(Events.enable);

        if (data.onEnable) {
          data.active = false;
          activate.call(this, data);
        } else {
          data.active = true;
          deactivate.call(this, data);
        }
      }
    }

    /**
     * @method
     * @name disable
     * @description Disables instance.
     * @example $(".target").swap("disable");
     */

    function disable(data, fromLinked) {
      if (data.enabled) {
        data.enabled = false;

        data.$swaps.removeClass([data.classes.raw.enabled, data.classes.raw.active].join(" "));

        if (!fromLinked) {
          // Linked handles
          $(data.linked).not(data.$el)[Plugin.namespaceClean]("disable");
        }

        this.trigger(Events.disable);
      }
    }

    /**
     * @method private
     * @name onClick
     * @description Handles click nav click.
     * @param e [object] "Event data"
     */

    function onClick(e) {
      Functions.killEvent(e);

      var data = e.data;

      if (data.active && data.collapse) {
        deactivate.call(data.$el, data);
      } else {
        activate.call(data.$el, data);
      }
    }

    /**
     * @plugin
     * @name Swap
     * @description A jQuery plugin for toggling states.
     * @type widget
     * @main swap.js
     * @dependency jQuery
     * @dependency core.js
     * @dependency mediaquery.js
     */

    var Plugin = Formstone.Plugin("swap", {
        widget: true,

        /**
         * @options
         * @param collapse [boolean] <true> "Allow swap to collapse it's target"
         * @param maxWidth [string] <Infinity> "Width at which to auto-disable plugin"
         */

        defaults: {
          collapse: true,
          maxWidth: Infinity
        },

        classes: [
          "target",
          "enabled",
          "active"
        ],

        /**
         * @events
         * @event activate.swap "Swap activated"
         * @event deactivate.swap "Swap deactivated"
         * @event enable.swap "Swap enabled"
         * @event disable.swap "Swap diabled"
         */

        events: {
          activate: "activate",
          deactivate: "deactivate",
          enable: "enable",
          disable: "disable"
        },

        methods: {
          _construct: construct,
          _postConstruct: postConstruct,
          _destruct: destruct,

          // Public Methods

          activate: activate,
          deactivate: deactivate,
          enable: enable,
          disable: disable
        }
      }),

      // Localize References

      Namespace = Plugin.namespace,
      Classes = Plugin.classes,
      Events = Plugin.events,
      Functions = Plugin.functions;

  })

);

/*! formstone v1.4.20-1 [tabs.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./mediaquery",
        "./swap"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      data.mq = "(max-width:" + (data.mobileMaxWidth === Infinity ? "100000px" : data.mobileMaxWidth) + ")";

      data.content = this.attr("href");
      data.group = this.data(Namespace + "-group");

      data.elementClasses = [RawClasses.tab, data.rawGuid, data.theme, data.customClass];
      data.mobileTabClasses = [RawClasses.tab, RawClasses.tab_mobile, data.rawGuid, data.theme, data.customClass];
      data.contentClasses = [RawClasses.content, data.rawGuid, data.theme, data.customClass];

      // DOM

      data.$mobileTab = $('<button type="button" class="' + data.mobileTabClasses.join(" ") + '" aria-hidden="true">' + this.html() + '</button>');
      data.$content = $(data.content).addClass(data.contentClasses.join(" "));

      data.$content.before(data.$mobileTab)
        .attr("role", "tabpanel");

      this.attr("role", "tab");

      // Aria

      data.id = this.attr("id");

      if (data.id) {
        data.ariaId = data.id;
      } else {
        data.ariaId = data.rawGuid;
        this.attr("id", data.ariaId);
      }

      data.contentId = data.$content.attr("id");
      data.contentGuid = data.rawGuid + "_content";

      if (data.contentId) {
        data.ariacontentId = data.contentId;
      } else {
        data.ariaContentId = data.contentGuid;
        data.$content.attr("id", data.ariaContentId);
      }

      // Check for hash

      var hash = Formstone.window.location.hash,
        hashActive = false,
        hashGroup = false;

      if (hash.length) {
        hashActive = (this.filter("[href*='" + hash + "']").length > 0);
        hashGroup = data.group && ($('[data-' + Namespace + '-group="' + data.group + '"]').filter("[href*='" + hash + "']").length > 0);
      }

      if (hashActive) {
        // If this matches hash
        this.attr("data-swap-active", "true");
      } else if (hashGroup) {
        // If item in group matches hash
        this.removeAttr("data-swap-active")
          .removeData("data-swap-active");
      } else if (this.attr("data-tabs-active") === "true") {
        // If this has active attribute
        this.attr("data-swap-active", "true");
      }

      this.attr("data-swap-target", data.content)
        .attr("data-swap-group", data.group)
        .addClass(data.elementClasses.join(" "))
        .on("activate.swap" + data.dotGuid, data, onActivate)
        .on("deactivate.swap" + data.dotGuid, data, onDeactivate)
        .on("enable.swap" + data.dotGuid, data, onEnable)
        .on("disable.swap" + data.dotGuid, data, onDisable);
    }

    /**
     * @method private
     * @name postConstruct
     * @description Run post build.
     * @param data [object] "Instance data"
     */

    function postConstruct(data) {
      this.fsSwap({
        maxWidth: data.maxWidth,
        classes: {
          target: data.dotGuid,
          enabled: Classes.enabled,
          active: Classes.active,
          raw: {
            target: data.rawGuid,
            enabled: RawClasses.enabled,
            active: RawClasses.active
          }
        },
        collapse: false
      });

      data.$mobileTab.on("click" + data.dotGuid, data, onMobileActivate);

      // Media Query support
      $.fsMediaquery("bind", data.rawGuid, data.mq, {
        enter: function() {
          mobileEnable.call(data.$el, data);
        },
        leave: function() {
          mobileDisable.call(data.$el, data);
        }
      });
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      $.fsMediaquery("unbind", data.rawGuid);

      data.$mobileTab.off(Events.namespace)
        .remove();

      data.elementClasses.push(RawClasses.mobile);
      data.contentClasses.push(RawClasses.mobile);

      data.$content.removeAttr("aria-labelledby")
        .removeAttr("aria-hidden")
        .removeAttr("role")
        .removeClass(data.contentClasses.join(" "));

      if (data.$content.attr("id") === data.contentGuid) {
        data.$content.removeAttr("id");
      }

      this.removeAttr("aria-controls")
        .removeAttr("aria-selected")
        .removeAttr("data-swap-active")
        .removeData("data-swap-active")
        .removeAttr("data-swap-target")
        .removeData("data-swap-target")
        .removeAttr("data-swap-group")
        .removeData("data-swap-group")
        .removeAttr("role")
        .removeClass(data.elementClasses.join(" "))
        .off(Events.namespace)
        .fsSwap("destroy");

      if (this.attr("id") === data.rawGuid) {
        this.removeAttr("id");
      }
    }

    /**
     * @method
     * @name activate
     * @description Activates instance.
     * @example $(".target").tabs("activate");
     */

    function activate(data) {
      this.fsSwap("activate");
    }

    /**
     * @method
     * @name enable
     * @description Enables instance.
     * @example $(".target").tabs("enable");
     */

    function enable(data) {
      this.fsSwap("enable");
    }

    /**
     * @method
     * @name disable
     * @description Disables instance.
     * @example $(".target").tabs("disable");
     */

    function disable(data) {
      this.fsSwap("disable");
    }

    /**
     * @method private
     * @name onActivate
     * @description Handles tab open event.
     * @param e [object] "Event data"
     */

    function onActivate(e) {
      if (!e.originalEvent) { // thanks IE :/
        var data = e.data,
          index = 0;

        data.$el.attr("aria-selected", true)
          .trigger(Events.update, [index]);
        data.$mobileTab.addClass(RawClasses.active);
        data.$content.attr("aria-hidden", false)
          .addClass(RawClasses.active);
      }
    }

    /**
     * @method private
     * @name onDeactivate
     * @description Handles tab close event.
     * @param e [object] "Event data"
     */

    function onDeactivate(e) {
      if (!e.originalEvent) { // thanks IE :/
        var data = e.data;

        data.$el.attr("aria-selected", false);
        data.$mobileTab.removeClass(RawClasses.active);
        data.$content.attr("aria-hidden", true)
          .removeClass(RawClasses.active);
      }
    }

    /**
     * @method private
     * @name onEnable
     * @description Handles tab enable event.
     * @param e [object] "Event data"
     */

    function onEnable(e) {
      var data = e.data;

      data.$el.attr("aria-controls", data.ariaContentId);
      data.$mobileTab.addClass(RawClasses.enabled);
      data.$content.attr("aria-labelledby", data.ariaId)
        .addClass(RawClasses.enabled);
    }

    /**
     * @method private
     * @name onDisable
     * @description Handles tab disable event.
     * @param e [object] "Event data"
     */

    function onDisable(e) {
      var data = e.data;

      data.$el.removeAttr("aria-controls")
        .removeAttr("aria-selected");
      data.$mobileTab.removeClass(RawClasses.enabled);
      data.$content.removeAttr("aria-labelledby")
        .removeAttr("aria-hidden")
        .removeClass(RawClasses.enabled);
    }

    /**
     * @method private
     * @name onMobileActivate
     * @description Activates instance.
     * @param e [object] "Event data"
     */

    function onMobileActivate(e) {
      e.data.$el.fsSwap("activate");
    }

    /**
     * @method private
     * @name mobileEnable
     * @description Handles mobile enable event.
     * @param data [object] "Instance data"
     */

    function mobileEnable(data) {
      data.$el.addClass(RawClasses.mobile);
      data.$mobileTab.addClass(RawClasses.mobile);
      data.$content.addClass(RawClasses.mobile);
    }

    /**
     * @method private
     * @name mobileDisable
     * @description Handles mobile disable event.
     * @param data [object] "Instance data"
     */

    function mobileDisable(data) {
      data.$el.removeClass(RawClasses.mobile);
      data.$mobileTab.removeClass(RawClasses.mobile);
      data.$content.removeClass(RawClasses.mobile);
    }

    /**
     * @plugin
     * @name Tabs
     * @description A jQuery plugin for simple tabs.
     * @type widget
     * @main tabs.js
     * @main tabs.css
     * @dependency jQuery
     * @dependency core.js
     * @dependency mediaquery.js
     * @dependency swap.js
     */

    var Plugin = Formstone.Plugin("tabs", {
        widget: true,

        /**
         * @options
         * @param customClass [string] <''> "Class applied to instance"
         * @param maxWidth [string] <Infinity> "Width at which to auto-disable plugin"
         * @param mobileMaxWidth [string] <'740px'> "Width at which to auto-disable mobile styles"
         * @param theme [string] <"fs-light"> "Theme class name"
         */

        defaults: {
          customClass: "",
          maxWidth: Infinity,
          mobileMaxWidth: "740px",
          theme: "fs-light"
        },

        classes: [
          "tab",
          "tab_mobile",
          "mobile",
          "content",
          "enabled",
          "active"
        ],

        /**
         * @events
         * @event update.tabs "Tab activated"
         */

        events: {
          update: "update"
        },

        methods: {
          _construct: construct,
          _postConstruct: postConstruct,
          _destruct: destruct,

          // Public Methods

          activate: activate,
          enable: enable,
          disable: disable
        }
      }),

      // Localize References

      Namespace = Plugin.namespace,
      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions;

  })

);

/*! formstone v1.4.20-1 [tooltip.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      this.on(Events.mouseEnter, data, onMouseEnter);
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      removeTooltip();

      this.off(Events.namespace);
    }

    /**
     * @method private
     * @name onMouseEnter
     * @description Handles mouse enter event.
     * @param e [object] "Event data"
     */

    function onMouseEnter(e) {
      removeTooltip();

      var data = e.data;

      data.left = e.pageX;
      data.top = e.pageY;

      buildTooltip(data);
    }

    /**
     * @method private
     * @name onMouseLeave
     * @description Handles mouse leave event.
     * @param e [object] "Event data"
     */

    function onMouseLeave(e) {
      var data = e.data;

      Functions.clearTimer(data.timer);

      removeTooltip();
    }

    /**
     * @method private
     * @name onMouseLeave
     * @description Handles mouse move event.
     * @param e [object] "Event data"
     */

    function onMouseMove(e) {
      positionTooltip(e.pageX, e.pageY);
    }

    /**
     * @method private
     * @name buildTooltip
     * @description Builds new tooltip instance.
     * @param data [object] "Instance data"
     */

    function buildTooltip(data) {
      removeTooltip();

      var html = '';

      html += '<div class="';
      html += [RawClasses.base, RawClasses[data.direction], data.theme, data.customClass].join(" ");
      html += '">';
      html += '<div class="' + RawClasses.content + '">';
      html += data.formatter.call(data.$el, data);
      html += '<span class="' + RawClasses.caret + '"></span>';
      html += '</div>';
      html += '</div>';

      Instance = {
        $tooltip: $(html),
        $el: data.$el
      };

      Formstone.$body.append(Instance.$tooltip);

      var $content = Instance.$tooltip.find(Classes.content),
        $caret = Instance.$tooltip.find(Classes.caret),

        offset = data.$el.offset(),
        height = data.$el.outerHeight(),
        width = data.$el.outerWidth(),

        tooltipLeft = 0,
        tooltipTop = 0,
        contentLeft = 0,
        contentTop = 0,
        caretLeft = false,
        caretTop = false,

        caretHeight = $caret.outerHeight(true),
        caretWidth = $caret.outerWidth(true),
        contentHeight = $content.outerHeight(true),
        contentWidth = $content.outerWidth(true);

      // position content
      if (data.direction === "right" || data.direction === "left") {
        caretTop = (contentHeight - caretHeight) / 2;
        contentTop = -contentHeight / 2;

        if (data.direction === "right") {
          contentLeft = data.margin;
        } else if (data.direction === "left") {
          contentLeft = -(contentWidth + data.margin);
        }
      } else {
        caretLeft = (contentWidth - caretWidth) / 2;
        contentLeft = -contentWidth / 2;

        if (data.direction === "bottom") {
          contentTop = data.margin;
        } else if (data.direction === "top") {
          contentTop = -(contentHeight + data.margin);
        }
      }

      // Modify Dom
      $content.css({
        top: contentTop,
        left: contentLeft
      });

      $caret.css({
        top: caretTop,
        left: caretLeft
      });

      // Position tooltip
      if (data.follow) {
        data.$el.on(Events.mouseMove, data, onMouseMove);
      } else {
        if (data.match) {
          if (data.direction === "right" || data.direction === "left") {
            tooltipTop = data.top; // mouse pos

            if (data.direction === "right") {
              tooltipLeft = offset.left + width;
            } else if (data.direction === "left") {
              tooltipLeft = offset.left;
            }
          } else {
            tooltipLeft = data.left; // mouse pos

            if (data.direction === "bottom") {
              tooltipTop = offset.top + height;
            } else if (data.direction === "top") {
              tooltipTop = offset.top;
            }
          }
        } else {
          if (data.direction === "right" || data.direction === "left") {
            tooltipTop = offset.top + (height / 2);

            if (data.direction === "right") {
              tooltipLeft = offset.left + width;
            } else if (data.direction === "left") {
              tooltipLeft = offset.left;
            }
          } else {
            tooltipLeft = offset.left + (width / 2);

            if (data.direction === "bottom") {
              tooltipTop = offset.top + height;
            } else if (data.direction === "top") {
              tooltipTop = offset.top;
            }
          }
        }

        positionTooltip(tooltipLeft, tooltipTop);
      }

      data.timer = Functions.startTimer(data.timer, data.delay, function() {
        Instance.$tooltip.addClass(RawClasses.visible);
      });

      data.$el.one(Events.mouseLeave, data, onMouseLeave);
    }

    /**
     * @method private
     * @name positionTooltip
     * @description Positions active tooltip instance.
     * @param left [int] "Left position"
     * @param top [int] "Top position"
     */

    function positionTooltip(left, top) {
      if (Instance) {
        Instance.$tooltip.css({
          left: left,
          top: top
        });
      }
    }

    /**
     * @method private
     * @name removeTooltip
     * @description Removes active tooltip instance.
     */

    function removeTooltip() {
      if (Instance) {
        Instance.$el.off([Events.mouseMove, Events.mouseLeave].join(" "));

        Instance.$tooltip.remove();
        Instance = null;
      }
    }

    /**
     * @method private
     * @name format
     * @description Formats tooltip text.
     * @return [string] "Tooltip text"
     */

    function format(data) {
      return this.data("title");
    }

    /**
     * @plugin
     * @name Tooltip
     * @description A jQuery plugin for simple tooltips.
     * @type widget
     * @main tooltip.js
     * @main tooltip.css
     * @dependency jQuery
     * @dependency core.js
     */

    var Plugin = Formstone.Plugin("tooltip", {
        widget: true,

        /**
         * @options
         * @param customClass [string] <''> "Class applied to instance"
         * @param delay [int] <0> "Hover delay"
         * @param direction [string] <'top'> "Tooltip direction"
         * @param follow [boolean] <false> "Flag to follow mouse"
         * @param formatter [function] <$.noop> "Text format function"
         * @param margin [int] <15> "Tooltip margin"
         * @param match [boolean] <false> "Flag to match mouse position"
         * @param theme [string] <"fs-light"> "Theme class name"
         */

        defaults: {
          customClass: "",
          delay: 0,
          direction: "top",
          follow: false,
          formatter: format,
          margin: 15,
          match: false,
          theme: "fs-light"
        },

        classes: [
          "content",
          "caret",
          "visible",
          "top",
          "bottom",
          "right",
          "left"
        ],

        methods: {
          _construct: construct,
          _destruct: destruct
        }
      }),

      // Localize References

      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      // Singleton

      Instance = null;

  })

);

/*! formstone v1.4.20-1 [touch.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      data.touches = [];
      data.touching = false;

      this.on(Events.dragStart, Functions.killEvent);

      if (data.swipe) {
        data.pan = true;
      }

      if (data.scale) {
        data.axis = false;
      }

      data.axisX = data.axis === "x";
      data.axisY = data.axis === "y";

      if (Formstone.support.pointer) {
        var action = "";

        if (!data.axis || (data.axisX && data.axisY)) {
          action = "none";
        } else {
          if (data.axisX) {
            action += " pan-y";
          }
          if (data.axisY) {
            action += " pan-x";
          }
        }

        touchAction(this, action);

        this.on(Events.pointerDown, data, onTouch);
      } else {
        this.on(Events.touchStart, data, onTouch)
          .on(Events.mouseDown, data, onPointerStart);
      }
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      this.off(Events.namespace);

      touchAction(this, "");
    }

    /**
     * @method private
     * @name onTouch
     * @description Delegates touch events.
     * @param e [object] "Event data"
     */

    function onTouch(e) {
      // Stop panning and zooming
      if (e.preventManipulation) {
        e.preventManipulation();
      }

      var data = e.data,
        oe = e.originalEvent;

      if (oe.type.match(/(up|end|cancel)$/i)) {
        onPointerEnd(e);
        return;
      }

      if (oe.pointerId) {
        // Normalize MS pointer events back to standard touches
        var activeTouch = false;
        for (var i in data.touches) {
          if (data.touches[i].id === oe.pointerId) {
            activeTouch = true;
            data.touches[i].pageX = oe.pageX;
            data.touches[i].pageY = oe.pageY;
          }
        }
        if (!activeTouch) {
          data.touches.push({
            id: oe.pointerId,
            pageX: oe.pageX,
            pageY: oe.pageY
          });
        }
      } else {
        // Alias normal touches
        data.touches = oe.touches;
      }

      // Delegate touch actions
      if (oe.type.match(/(down|start)$/i)) {
        onPointerStart(e);
      } else if (oe.type.match(/move$/i)) {
        onPointerMove(e);
      }
    }

    /**
     * @method private
     * @name onPointerStart
     * @description Handles pointer start.
     * @param e [object] "Event data"
     */

    function onPointerStart(e) {
      var data = e.data,
        touch = (typeof data.touches !== "undefined" && data.touches.length) ? data.touches[0] : null;

      if (touch) {
        data.$el.off(Events.mouseDown);
      }

      if (!data.touching) {
        data.startE = e.originalEvent;
        data.startX = (touch) ? touch.pageX : e.pageX;
        data.startY = (touch) ? touch.pageY : e.pageY;
        data.startT = new Date().getTime();
        data.scaleD = 1;
        data.passedAxis = false;
      }

      // Clear old click events

      if (data.$links) {
        data.$links.off(Events.click);
      }

      // Pan / Scale

      var newE = buildEvent(data.scale ? Events.scaleStart : Events.panStart, e, data.startX, data.startY, data.scaleD, 0, 0, "", "");

      if (data.scale && data.touches && data.touches.length >= 2) {
        var t = data.touches;

        data.pinch = {
          startX: midpoint(t[0].pageX, t[1].pageX),
          startY: midpoint(t[0].pageY, t[1].pageY),
          startD: pythagorus((t[1].pageX - t[0].pageX), (t[1].pageY - t[0].pageY))
        };

        newE.pageX = data.startX = data.pinch.startX;
        newE.pageY = data.startY = data.pinch.startY;
      }

      // Only bind at first touch
      if (!data.touching) {
        data.touching = true;

        if (data.pan && !touch) {
          $Window.on(Events.mouseMove, data, onPointerMove)
            .on(Events.mouseUp, data, onPointerEnd);
        }

        if (Formstone.support.pointer) {
          $Window.on([
            Events.pointerMove,
            Events.pointerUp,
            Events.pointerCancel
          ].join(" "), data, onTouch);
        } else {
          $Window.on([
            Events.touchMove,
            Events.touchEnd,
            Events.touchCancel
          ].join(" "), data, onTouch);
        }

        data.$el.trigger(newE);
      }
    }

    /**
     * @method private
     * @name onPointerMove
     * @description Handles pointer move.
     * @param e [object] "Event data"
     */

    function onPointerMove(e) {
      var data = e.data,
        touch = (typeof data.touches !== "undefined" && data.touches.length) ? data.touches[0] : null,
        newX = (touch) ? touch.pageX : e.pageX,
        newY = (touch) ? touch.pageY : e.pageY,
        deltaX = newX - data.startX,
        deltaY = newY - data.startY,
        dirX = (deltaX > 0) ? "right" : "left",
        dirY = (deltaY > 0) ? "down" : "up",
        movedX = Math.abs(deltaX) > data.threshold,
        movedY = Math.abs(deltaY) > data.threshold;

      if (!data.passedAxis && data.axis && ((data.axisX && movedY) || (data.axisY && movedX))) {
        // if axis and moved in opposite direction
        onPointerEnd(e);
      } else {
        if (!data.passedAxis && (!data.axis || (data.axis && (data.axisX && movedX) || (data.axisY && movedY)))) {
          // if has axis and moved in same direction
          data.passedAxis = true;
        }

        if (data.passedAxis) {
          Functions.killEvent(e);
          Functions.killEvent(data.startE);
        }

        // Pan / Scale

        var fire = true,
          newE = buildEvent(data.scale ? Events.scale : Events.pan, e, newX, newY, data.scaleD, deltaX, deltaY, dirX, dirY);

        if (data.scale) {
          if (data.touches && data.touches.length >= 2) {
            var t = data.touches;

            data.pinch.endX = midpoint(t[0].pageX, t[1].pageX);
            data.pinch.endY = midpoint(t[0].pageY, t[1].pageY);
            data.pinch.endD = pythagorus((t[1].pageX - t[0].pageX), (t[1].pageY - t[0].pageY));
            data.scaleD = (data.pinch.endD / data.pinch.startD);
            newE.pageX = data.pinch.endX;
            newE.pageY = data.pinch.endY;
            newE.scale = data.scaleD;
            newE.deltaX = data.pinch.endX - data.pinch.startX;
            newE.deltaY = data.pinch.endY - data.pinch.startY;
          } else if (!data.pan) {
            fire = false;
          }
        }

        if (fire) {
          data.$el.trigger(newE);
        }
      }
    }

    /**
     * @method private
     * @name onPointerEnd
     * @description Handles pointer end / cancel.
     * @param e [object] "Event data"
     */

    function onPointerEnd(e) {
      var data = e.data;

      // Pan / Swipe / Scale

      var touch = (typeof data.touches !== "undefined" && data.touches.length) ? data.touches[0] : null,
        newX = (touch) ? touch.pageX : e.pageX,
        newY = (touch) ? touch.pageY : e.pageY,
        deltaX = newX - data.startX,
        deltaY = newY - data.startY,
        endT = new Date().getTime(),
        eType = data.scale ? Events.scaleEnd : Events.panEnd,
        dirX = (deltaX > 0) ? "right" : "left",
        dirY = (deltaY > 0) ? "down" : "up",
        movedX = Math.abs(deltaX) > 1,
        movedY = Math.abs(deltaY) > 1;

      // Swipe
      if ( data.swipe && (endT - data.startT) < data.time && Math.abs(deltaX) > data.threshold) {
        eType = Events.swipe;
      }

      // Kill clicks to internal links

      if ((data.axis && ((data.axisX && movedY) || (data.axisY && movedX))) || (movedX || movedY)) {
        data.$links = data.$el.find("a");

        for (var i = 0, count = data.$links.length; i < count; i++) {
          bindLink(data.$links.eq(i), data);
        }
      }

      var newE = buildEvent(eType, e, newX, newY, data.scaleD, deltaX, deltaY, dirX, dirY);

      $Window.off([
        Events.touchMove,
        Events.touchEnd,
        Events.touchCancel,
        Events.mouseMove,
        Events.mouseUp,
        Events.pointerMove,
        Events.pointerUp,
        Events.pointerCancel
      ].join(" "));

      data.$el.trigger(newE);

      data.touches = [];

      if (data.scale) {
        /*
        if (e.originalEvent.pointerId) {
          for (var i in data.touches) {
            if (data.touches[i].id === e.originalEvent.pointerId) {
              data.touches.splice(i, 1);
            }
          }
        } else {
          data.touches = e.originalEvent.touches;
        }
        */

        /*
        if (data.touches.length) {
          onPointerStart($.extend(e, {
            data: data,
            originalEvent: {
              touches: data.touches
            }
          }));
        }
        */
      }

      if (touch) {
        data.touchTimer = Functions.startTimer(data.touchTimer, 5, function() {
          data.$el.on(Events.mouseDown, data, onPointerStart);
        });
      }

      data.touching = false;
    }

    /**
     * @method private
     * @name bindLink
     * @description Bind events to internal links
     * @param $link [object] "Object to bind"
     * @param data [object] "Instance data"
     */

    function bindLink($link, data) {
      $link.on(Events.click, data, onLinkClick);

      // http://www.elijahmanor.com/how-to-access-jquerys-internal-data/
      var events = $._data($link[0], "events")["click"];
      events.unshift(events.pop());
    }

    /**
     * @method private
     * @name onLinkClick
     * @description Handles clicks to internal links
     * @param e [object] "Event data"
     */

    function onLinkClick(e) {
      Functions.killEvent(e, true);
      e.data.$links.off(Events.click);
    }

    /**
     * @method private
     * @name buildEvents
     * @description Builds new event.
     * @param type [type] "Event type"
     * @param oe [object] "Original event"
     * @param x [int] "X value"
     * @param y [int] "Y value"
     * @param scale [float] "Scale value"
     * @param dx [float] "Delta X value"
     * @param dy [float] "Delta Y value"
     */

    function buildEvent(type, oe, px, py, s, dx, dy, dirx, diry) {
      return $.Event(type, {
        originalEvent: oe,
        bubbles: true,
        pageX: px,
        pageY: py,
        scale: s,
        deltaX: dx,
        deltaY: dy,
        directionX: dirx,
        directionY: diry
      });
    }

    /**
     * @method private
     * @name midpoint
     * @description Calculates midpoint.
     * @param a [float] "Value 1"
     * @param b [float] "Value 2"
     */

    function midpoint(a, b) {
      return (a + b) / 2.0;
    }

    /**
     * @method private
     * @name pythagorus
     * @description Pythagorean theorem.
     * @param a [float] "Value 1"
     * @param b [float] "Value 2"
     */

    function pythagorus(a, b) {
      return Math.sqrt((a * a) + (b * b));
    }

    /**
     * @method private
     * @name touchAction
     * @description Set ms touch action on target.
     * @param action [string] "Touch action value"
     */

    function touchAction($target, action) {
      $target.css({
        "-ms-touch-action": action,
        "touch-action": action
      });
    }

    /**
     * @plugin
     * @name Touch
     * @description A jQuery plugin for multi-touch events.
     * @type widget
     * @main touch.js
     * @dependency jQuery
     * @dependency core.js
     */

    var legacyPointer = !(Formstone.window.PointerEvent),
      Plugin = Formstone.Plugin("touch", {
        widget: true,

        /**
         * @options
         * @param axis [string] <null> "Limit axis for pan and swipe; 'x' or 'y'"
         * @param pan [boolean] <false> "Pan events"
         * @param scale [boolean] <false> "Scale events"
         * @param swipe [boolean] <false> "Swipe events"
         * @param threshold [int] <10> "Touch threshold for single axis"
         * @param time [int] <50> "Touch time limit for single axis"
         */

        defaults: {
          axis: false,
          pan: false,
          scale: false,
          swipe: false,
          threshold: 10,
          time: 50
        },

        methods: {
          _construct: construct,
          _destruct: destruct
        },

        events: {
          pointerDown: legacyPointer ? "MSPointerDown" : "pointerdown",
          pointerUp: legacyPointer ? "MSPointerUp" : "pointerup",
          pointerMove: legacyPointer ? "MSPointerMove" : "pointermove",
          pointerCancel: legacyPointer ? "MSPointerCancel" : "pointercancel"
        }
      }),

      // Localize References

      Events = Plugin.events,
      Functions = Plugin.functions,

      // Local

      $Window = Formstone.$window;

    /**
     * @events
     * @event panstart "Panning started"
     * @event pan "Panning"
     * @event panend "Panning ended"
     * @event scalestart "Scaling started"
     * @event scale "Scaling"
     * @event scaleend "Scaling ended"
     * @event swipe "Swipe"
     */

    Events.pan = "pan";
    Events.panStart = "panstart";
    Events.panEnd = "panend";
    Events.scale = "scale";
    Events.scaleStart = "scalestart";
    Events.scaleEnd = "scaleend";
    Events.swipe = "swipe";

  })

);

/*! formstone v1.4.20-1 [transition.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance Data"
     * @param callback [object] "Function to call"
     */

    function construct(data, callback) {
      if (callback) {
        // Target child element, for event delegation

        data.$target = this.find(data.target);
        data.$check = data.target ? data.$target : this;
        data.callback = callback;
        data.styles = getStyles(data.$check);
        data.timer = null;

        var duration = data.$check.css(Formstone.transition + "-duration"),
          durationValue = parseFloat(duration);

        if (Formstone.support.transition && duration && durationValue) {
          // If transitions supported and active

          this.on(Events.transitionEnd, data, onTranistionEnd);
        } else {
          data.timer = Functions.startTimer(data.timer, 50, function() {
            checkStyles(data);
          }, true);
        }
      }
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      Functions.clearTimer(data.timer, true);

      this.off(Events.namespace);
    }

    /**
     * @method private
     * @name onTransitionEnd
     * @description Handles transition end events.
     * @param e [object] "Event data"
     */

    function onTranistionEnd(e) {
      e.stopPropagation();
      e.preventDefault();

      var data = e.data,
        oe = e.originalEvent,
        $target = data.target ? data.$target : data.$el;

      // Check property and target
      if ((!data.property || oe.propertyName === data.property) && $(oe.target).is($target)) {
        resolve(data);
      }
    }

    /**
     * @method private
     * @name resolve
     * @description Resolves transition end events.
     * @param e [object] "Event data"
     */
    /**
     * @method
     * @name resolve
     * @description Resolves current transition end events.
     * @example $(".target").transition("resolve");
     */

    function resolve(data) {
      if (!data.always) {
        // Unbind events, clear timers, similiar to .one()

        data.$el[Plugin.namespaceClean]("destroy"); // clean up old data?
      }

      // fire callback

      data.callback.apply(data.$el);
    }

    /**
     * @method private
     * @name checkStyles
     * @description Compares current CSS to previous styles.
     * @param data [object] "Instance data"
     */

    function checkStyles(data) {
      var styles = getStyles(data.$check);

      if (!isEqual(data.styles, styles)) {
        resolve(data);
      }

      data.styles = styles;
    }

    /**
     * @method private
     * @name getStyles
     * @description Returns element's styles.
     * @param el [DOM] "Element to check"
     */

    function getStyles(el) {
      var computed,
        styles = {},
        prop,
        val;

      if (el instanceof $) {
        el = el[0];
      }

      if (Window.getComputedStyle) {
        // FireFox, Chrome, Safari

        computed = Window.getComputedStyle(el, null);

        for (var i = 0, count = computed.length; i < count; i++) {
          prop = computed[i];
          val = computed.getPropertyValue(prop);

          styles[prop] = val;
        }
      } else if (el.currentStyle) {
        // IE, Opera

        computed = el.currentStyle;

        for (prop in computed) {
          styles[prop] = computed[prop];
        }
      }

      return styles;
    }

    /**
     * @method private
     * @name isEqual
     * @description Compares two obejcts.
     * @param a [object] "Object to compare"
     * @param b [object] "Object to compare"
     */

    function isEqual(a, b) {
      if (typeof a !== typeof b) {
        return false;
      }

      for (var i in a) {

        if (a.hasOwnProperty(i)) {
          if (!(a.hasOwnProperty(i) && b.hasOwnProperty(i) && a[i] === b[i])) {
            return false;
          }
        } else {
          return false;
        }
      }

      return true;
    }

    /**
     * @plugin
     * @name Transition
     * @description A jQuery plugin for CSS transition events.
     * @type widget
     * @main transition.js
     * @dependency jQuery
     * @dependency core.js
     */

    var Plugin = Formstone.Plugin("transition", {
        widget: true,

        /**
         * @options
         * @param always [boolean] <False> "Flag to always react to transition end (.on vs .one)"
         * @param property [string] <null> "Property to react to"
         * @param target [string] <null> "Target child selector"
         */

        defaults: {
          always: false,
          property: null,
          target: null
        },

        methods: {
          _construct: construct,
          _destruct: destruct,
          resolve: resolve
        }
      }),

      // Localize References

      Events = Plugin.events,
      Functions = Plugin.functions,

      Window = Formstone.window;

  })

);

/*! formstone v1.4.20-1 [upload.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name setup
     * @description Setup plugin.
     */

    function setup() {
      var blobSliceMethods = [
        'mozSlice',
        'webkitSlice',
        'slice'
      ];

      if (Formstone.support.file) {
        var testFile = false;

        try {
          testFile = new File([""], "f");
        } catch (e) {}

        if (!testFile) {
          // Safari & IE/Edge :/
          try {
            testFile = new Blob([""], {});
          } catch (e) {}
        }

        if (testFile) {
          for (var i in blobSliceMethods) {
            if (blobSliceMethods.hasOwnProperty(i) && blobSliceMethods[i] in testFile) {
              BlobSliceMethod = blobSliceMethods[i];
              break;
            }
          }
        }
      }
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      if (Formstone.support.file) {
        var html = "";

        if (!BlobSliceMethod) {
          data.chunked = false;
        }

        // Backwards compat
        if (data.maxQueue) {
          data.maxConcurrent = data.maxQueue;
        }

        if (data.label !== false) {
          html += '<div class="' + RawClasses.target + '">';
          html += data.label;
          html += '</div>';
        }
        html += '<input class="' + RawClasses.input + '" type="file"';
        if (data.multiple) {
          html += ' multiple';
        }
        if (data.accept) {
          html += ' accept="' + data.accept + '"';
        }
        html += '>';

        data.baseClasses = [RawClasses.base, data.theme, data.customClass].join(" ");

        this.addClass(data.baseClasses)
          .append(html);

        data.$input = this.find(Classes.input);
        data.queue = [];
        data.total = 0;
        data.uploaded = 0;
        data.uploading = false;
        data.disabled = true;
        data.aborting = false;

        this.on(Events.click, Classes.target, data, onClick)
          .on(Events.dragEnter, data, onDragEnter)
          .on(Events.dragOver, data, onDragOver)
          .on(Events.dragLeave, data, onDragOut)
          .on(Events.drop, data, onDrop);

        data.$input.on(Events.focus, data, onFocus)
          .on(Events.blur, data, onBlur)
          .on(Events.change, data, onChange);

        enableUpload.call(this, data);
      }
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      if (Formstone.support.file) {
        data.$input.off(Events.namespace);

        this.off(Events.namespace)
          .removeClass(data.baseClasses)
          .html("");
      }
    }

    /**
     * @method private
     * @name abortUpload
     * @description Cancels specific upload.
     * @param data [object] "Instance data"
     * @param index [int] "File index"
     */

    /**
     * @method
     * @name abort
     * @description Cancels all active uploads, or specific file.
     * @example $(".target").upload("abort", [index]);
     */

    function abortUpload(data, index) {
      var file;

      data.aborting = true;

      for (var i in data.queue) {
        if (data.queue.hasOwnProperty(i)) {
          file = data.queue[i];

          if (typeof index === "undefined" || (index >= 0 && file.index === index)) {
            // Abort all
            if (file.started && !file.complete) {
              if (data.chunked) {
                file.chunkTransfer.abort();
              } else {
                file.transfer.abort();
              }
            } else {
              abortFile(data, file, "abort");
            }
          }
        }
      }

      data.aborting = false;

      checkQueue(data);
    }

    /**
     * @method private
     * @name abortFile
     * @description Aborts file.
     * @param data [object] "Instance data"
     * @param formData [object] "Target form"
     * @param file [object] "Target file"
     */

    function abortFile(data, file, error) {
      file.error = true;
      data.$el.trigger(Events.fileError, [file, error]);

      if (!data.aborting) {
        checkQueue(data);
      }
    }

    /**
     * @method private
     * @name abortChunk
     * @description Aborts file chunk.
     * @param data [object] "Instance data"
     * @param formData [object] "Target form"
     * @param file [object] "Target file"
     */

    function abortChunk(data, file, error) {
      data.$el.trigger(Events.chunkError, [file, error]);

      abortFile(data, file, error);
    }

    /**
     * @method
     * @name disable
     * @description Disables target instance.
     * @example $(".target").upload("disable");
     */

    function disableUpload(data) {
      if (!data.disabled) {
        this.addClass(RawClasses.disabled);
        data.$input.prop("disabled", true);

        data.disabled = true;
      }
    }

    /**
     * @method
     * @name enable
     * @description Enables target instance.
     * @example $(".target").upload("enable");
     */

    function enableUpload(data) {
      if (data.disabled) {
        this.removeClass(RawClasses.disabled);
        data.$input.prop("disabled", false);

        data.disabled = false;
      }
    }

    /**
     * @method private
     * @name onClick
     * @description Handles click to target.
     * @param e [object] "Event data"
     */

    function onClick(e) {
      Functions.killEvent(e);

      var data = e.data;

      if (!data.disabled) {
        data.$input.trigger(Events.click);
      }
    }

    /**
     * @method private
     * @name onFocus
     * @description Handles instance focus
     * @param e [object] "Event data"
     */

    function onFocus(e) {
      e.data.$el.addClass(RawClasses.focus);
    }

    /**
     * @method private
     * @name onBlur
     * @description Handles instance blur
     * @param e [object] "Event data"
     */

    function onBlur(e) {
      e.data.$el.removeClass(RawClasses.focus);
    }

    /**
     * @method private
     * @name onChange
     * @description Handles change to hidden input.
     * @param e [object] "Event data"
     */

    function onChange(e) {
      Functions.killEvent(e);

      var data = e.data,
        files = data.$input[0].files;

      if (!data.disabled && files.length) {
        handleUpload(data, files);
      }
    }

    /**
     * @method private
     * @name onDragEnter
     * @description Handles dragenter to target.
     * @param e [object] "Event data"
     */

    function onDragEnter(e) {
      Functions.killEvent(e);

      var data = e.data;

      // if (!data.disabled) {
      data.$el.addClass(RawClasses.dropping)
        .trigger(Events.fileDragEnter);
      // }
    }

    /**
     * @method private
     * @name onDragOver
     * @description Handles dragover to target.
     * @param e [object] "Event data"
     */

    function onDragOver(e) {
      Functions.killEvent(e);

      var data = e.data;

      // if (!data.disabled) {
      data.$el.addClass(RawClasses.dropping)
        .trigger(Events.fileDragOver);
      // }
    }

    /**
     * @method private
     * @name onDragOut
     * @description Handles dragout to target.
     * @param e [object] "Event data"
     */

    function onDragOut(e) {
      Functions.killEvent(e);

      var data = e.data;

      // if (!data.disabled) {
      data.$el.removeClass(RawClasses.dropping)
        .trigger(Events.fileDragLeave);
      // }
    }

    /**
     * @method private
     * @name onDrop
     * @description Handles drop to target.
     * @param e [object] "Event data"
     */

    function onDrop(e) {
      Functions.killEvent(e);

      var data = e.data,
        files = e.originalEvent.dataTransfer.files;

      data.$el.removeClass(RawClasses.dropping);

      if (!data.disabled) {
        handleUpload(data, files);
      }
    }

    /**
     * @method private
     * @name handleUpload
     * @description Handles new files.
     * @param data [object] "Instance data"
     * @param files [object] "File list"
     */

    function handleUpload(data, files) {
      var newFiles = [],
        numFiles = files.length;

      if (data.maxFiles) {
        var filesRemaining = data.maxFiles - data.uploaded;

        if (filesRemaining >= 0 && files.length > filesRemaining) {
          numFiles = filesRemaining;
        }
      }

      if (numFiles > 0) {
        for (var i = 0; i < numFiles; i++) {
          var file = {
            index: data.total++,
            file: files[i],
            name: files[i].name,
            size: files[i].size,
            started: false,
            complete: false,
            error: false,
            transfer: null
          };

          newFiles.push(file);
          data.queue.push(file);
        }

        data.$el.trigger(Events.queued, [newFiles]);

        if (data.autoUpload) {
          startUpload(data);
        }
      }

      data.$input.val("");
    }

    /**
     * @method private
     * @name startUpload
     * @description Start queued uploads.
     * @param data [object] "Instance data"
     */

    /**
     * @method
     * @name start
     * @description Starts queued uploads; Use when autoUpload is set to false.
     * @example $(".target").upload("start");
     */

    function startUpload(data) {
      if (!data.uploading) {
        $Window.on(Events.beforeUnload, function() {
          return data.leave;
        });

        data.uploading = true;

        data.$el.trigger(Events.start, [data.queue]);
      }

      checkQueue(data);
    }

    /**
     * @method private
     * @name checkQueue
     * @description Checks and updates file queue.
     * @param data [object] "Instance data"
     */

    function checkQueue(data) {
      var transfering = 0,
        newQueue = [];

      if (!data.uploading) {
        return;
      }

      // remove lingering items from queue
      for (var i in data.queue) {
        if (data.queue.hasOwnProperty(i) && !data.queue[i].complete && !data.queue[i].error) {
          newQueue.push(data.queue[i]);
        }
      }

      data.queue = newQueue;

      for (var j in data.queue) {
        if (data.queue.hasOwnProperty(j)) {
          if (!data.queue[j].started) {
            uploadFile(data, data.queue[j]);
          }

          transfering++;

          if (transfering >= data.maxConcurrent) {
            return;
          } else {
            i++;
          }
        }
      }

      if (transfering === 0) {
        $Window.off(Events.beforeUnload);

        data.uploading = false;

        data.$el.trigger(Events.complete);
      }
    }

    /**
     * @method private
     * @name uploadFile
     * @description Uploads file.
     * @param data [object] "Instance data"
     * @param file [object] "Target file"
     */

    function uploadFile(data, file) {
      if (file.size >= data.maxSize || file.error === true) {
        abortFile(data, file, "size");
      } else if (data.chunked) {
        // Chunked upload
        file.started = true;

        file.chunkSize = (1024 * data.chunkSize);
        file.totalChunks = Math.ceil(file.size / file.chunkSize);
        file.currentChunk = 0;

        data.$el.trigger(Events.fileStart, [file]);

        uploadChunk(data, file);
      } else {
        var formData = new FormData();

        formData.append(data.postKey, file.file);
        formData = setFormData(data, formData, file);

        if (formData === false) {
          abortFile(data, file, "abort");
        } else {
          // Standard upload
          file.started = true;
          file.transfer = $.ajax({
            url: data.action,
            data: formData,
            dataType: data.dataType,
            headers: data.headers,
            type: "POST",
            contentType: false,
            processData: false,
            cache: false,
            xhr: function() {
              var $xhr = $.ajaxSettings.xhr();

              if ($xhr.upload) {
                // Clean progress event
                $xhr.upload.addEventListener("progress", function(e) {
                  var percent = 0,
                    position = e.loaded || e.position,
                    total = e.total;

                  if (e.lengthComputable) {
                    percent = Math.ceil((position / total) * 100);
                  }

                  data.$el.trigger(Events.fileProgress, [file, percent, e]);
                }, false);
              }

              return $xhr;
            },
            beforeSend: function(jqXHR, settings) {
              data.$el.trigger(Events.fileStart, [file, settings, jqXHR]);
            },
            success: function(response, status, jqXHR) {
              file.complete = true;

              data.uploaded++;
              data.$el.trigger(Events.fileComplete, [file, response, status, jqXHR]);

              checkQueue(data);
            },
            error: function(jqXHR, status, error) {
              abortFile(data, file, error, jqXHR);
            }
          });
        }
      }
    }

    /**
     * @method private
     * @name uploadChunk
     * @description Uploads file chunk.
     * @param data [object] "Instance data"
     * @param formData [object] "Target form"
     * @param file [object] "Target file"
     */

    function uploadChunk(data, file) {
      var chunkStart = (file.chunkSize * file.currentChunk),
        chunkEnd = (chunkStart + file.chunkSize);

      if (chunkEnd > file.size) {
        chunkEnd = file.size;
      }

      var newChunk = file.file[BlobSliceMethod](chunkStart, chunkEnd),
        formData = new FormData();

      formData.append(data.postKey, newChunk, file.file.name);
      formData.append("chunks", file.totalChunks);
      formData.append("chunk", file.currentChunk);

      formData = setFormData(data, formData, file);

      if (formData === false) {
        abortFile(data, file, "abort");
      } else {
        file.chunkTransfer = $.ajax({
          url: data.action,
          data: formData,
          dataType: data.dataType,
          headers: data.headers,
          type: "POST",
          contentType: false,
          processData: false,
          cache: false,
          beforeSend: function(jqXHR, settings) {
            data.$el.trigger(Events.chunkStart, [file, settings, jqXHR]);
          },
          success: function(response, status, jqXHR) {
            file.currentChunk++;

            data.$el.trigger(Events.chunkComplete, [file]);

            var percent = Math.ceil((file.currentChunk / file.totalChunks) * 100);
            data.$el.trigger(Events.fileProgress, [file, percent, status, jqXHR]);

            if (file.currentChunk < file.totalChunks) {
              uploadChunk(data, file);
            } else {
              file.complete = true;
              data.$el.trigger(Events.fileComplete, [file, response, status, jqXHR]);

              checkQueue(data);
            }
          },
          error: function(jqXHR, status, error) {
            abortChunk(data, file, error, jqXHR);
          }
        });
      }
    }

    function setFormData(data, formData, file) {
      for (var i in data.postData) {
        if (data.postData.hasOwnProperty(i)) {
          formData.append(i, data.postData[i]);
        }
      }

      // Modify data before upload
      formData = data.beforeSend.call(data.$el, formData, file);

      return formData;
    }

    /**
     * @plugin
     * @name Upload
     * @description A jQuery plugin for simple drag and drop uploads.
     * @type widget
     * @main upload.js
     * @main upload.css
     * @dependency jQuery
     * @dependency core.js
     */

    var Plugin = Formstone.Plugin("upload", {
        widget: true,

        /**
         * @options
         * @param accept [string] "Input accept attribute"
         * @param action [string] "Where to submit uploads"
         * @param autoUpload [boolean] <false> "Beging upload when files are dropped"
         * @param beforeSend [function] "Run before request sent, must return modified formdata or `false` to cancel"
         * @param chunked [boolean] <false> "Use chunked uploading, if supported"
         * @param chunkSize [int] <100> "Size to chunk, in kB"
         * @param customClass [string] <''> "Class applied to instance"
         * @param dataType [string] <'html'> "Data type of AJAX request"
         * @param headers [object] "An object of additional header key/value pairs to send along with requests"
         * @param label [string] <'Drag and drop files or click to select'> "Drop target text; `false` to disable"
         * @param leave [string] <'You have uploads pending, are you sure you want to leave this page?'> "Before leave message"
         * @param maxConcurrent [int] <2> "Number of files to simultaneously upload"
         * @param maxFiles [int OR boolean] <false> "Total number of files that can be uploaded; `false` to disable"
         * @param maxSize [int] <5242880> "Max file size allowed"
         * @param multiple [true] <true> "Flag to allow mutiple file uploads"
         * @param postData [object] "Extra data to post with upload"
         * @param postKey [string] <'file'> "Key to upload file as"
         * @param theme [string] <"fs-light"> "Theme class name"
         */

        defaults: {
          accept: false,
          action: "",
          autoUpload: true,
          beforeSend: function(formdata) {
            return formdata;
          },
          chunked: false,
          chunkSize: 100,
          customClass: "",
          dataType: "html",
          headers: {},
          label: "Drag and drop files or click to select",
          leave: "You have uploads pending, are you sure you want to leave this page?",
          maxConcurrent: 2,
          // maxQueue       : 2,
          maxFiles: false,
          maxSize: 5242880, // 5 mb
          multiple: true,
          postData: {},
          postKey: "file",
          theme: "fs-light"
        },

        classes: [
          "input",
          "target",
          "multiple",
          "dropping",
          "disabled",
          "focus"
        ],

        methods: {
          _construct: construct,
          _destruct: destruct,

          disable: disableUpload,
          enable: enableUpload,
          abort: abortUpload,
          start: startUpload
        }
      }),

      // Localize References

      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      Window = Formstone.window,
      $Window = Formstone.$window,

      // Internal
      BlobSliceMethod = false;

    // Setup

    Formstone.Ready(setup);

    /**
     * @events
     * @event chunkcomplete "File chunk complete"
     * @event chunkstart "File chunk starting"
     * @event chunkerror "File chunk error"
     * @event complete "All uploads are complete"
     * @event filecomplete "Specific upload complete"
     * @event filedragenter "File dragged into target"
     * @event filedragleave "File dragged from target"
     * @event filedragover "File dragged over target"
     * @event fileerror "Specific upload error"
     * @event fileprogress "Specific upload progress"
     * @event filestart "Specific upload starting"
     * @event fileremove "Specific upload removed"
     * @event start "Uploads starting"
     * @event queued "Files are queued for upload"
     */

    Events.chunkComplete = "chunkcomplete";
    Events.chunkError = "chunkerror";
    Events.chunkStart = "chunkstart";
    Events.complete = "complete";
    Events.fileComplete = "filecomplete";
    Events.fileDragEnter = "filedragenter";
    Events.fileDragLeave = "filedragleave";
    Events.fileDragOver = "filedragover";
    Events.fileError = "fileerror";
    Events.fileProgress = "fileprogress";
    Events.fileStart = "filestart";
    Events.start = "start";
    Events.queued = "queued";

  })

);

/*! formstone v1.4.20-1 [viewer.js] 2021-01-29 | GPL-3.0 License | formstone.it */
/* global define */

// TODO: external controls like carousel?
// TODO: Add swipe next/previous when zoomed out?

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
        "./transition"
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name setup
     * @description Setup plugin.
     */

    function setup() {
      scroll();
      $Window.on("scroll", scroll);
      $Body = Formstone.$body;
    }

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize() {
      Functions.iterate.call($Instances, resizeInstance);
      // Functions.iterate.call($LazyInstances, cacheScrollPosition);
      // Functions.iterate.call($LazyInstances, checkScrollPosition);
    }

    /**
     * @method private
     * @name scroll
     * @description Handles window scroll
     */

    function scroll() {
      ScrollTop = $Window.scrollTop() + Formstone.windowHeight;

      if (ScrollTop < 0) {
        ScrollTop = 0;
      }

      // Functions.iterate.call($LazyInstances, checkScrollPosition);
    }

    /**
     * @method private
     * @name raf
     * @description Handles request animation frame
     */

    function raf() {
      Functions.iterate.call($Instances, renderRAF);
    }

    /**
     * @method private
     * @name cacheInstances
     * @description Caches active instances
     */

    function cacheInstances() {
      $Instances = $(Classes.base);
      // $LazyInstances = $(Classes.lazy);

      // Functions.iterate.call($LazyInstances, cacheScrollPosition);

      if ($Instances.length) {
        Functions.lockViewport(Namespace);
      } else {
        Functions.unlockViewport(Namespace);
      }
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      var $image,
        imageData,
        html = '',
        controlPrevClasses = [RawClasses.control, RawClasses.control_previous].join(" "),
        controlNextClasses = [RawClasses.control, RawClasses.control_next].join(" "),
        controlZoomInClasses = [RawClasses.control, RawClasses.control_zoom_in].join(" "),
        controlZoomOutClasses = [RawClasses.control, RawClasses.control_zoom_out].join(" ");

      data.thisClasses = [RawClasses.base, RawClasses.loading, data.customClass, data.theme];
      data.images = [];
      data.source = false;
      data.gallery = false;
      data.tapTimer = null;
      data.action = false;
      data.isRendering = false;
      data.isZooming = false;
      data.isAnimating = false;

      data.keyDownTime = 1;

      data.$images = this.find("img").addClass(RawClasses.source);
      data.index = 0;
      data.total = data.$images.length - 1;

      // Check custom controls
      data.customControls = (typeof data.controls === "object" && data.controls.zoom_in && data.controls.zoom_out);

      if (data.$images.length > 1) {
        data.gallery = true;
        data.thisClasses.push(RawClasses.gallery);

        // Requie zoom for gallery custom controls
        if (data.customControls && (!data.controls.previous || !data.controls.next)) {
          data.customControls = false;
        }
      }

      for (var i = 0; i < data.$images.length; i++) {
        $image = data.$images.eq(i);
        data.images.push($image.attr("src"));
      }

      html += '<div class="' + RawClasses.wrapper + '">';
      html += '<div class="' + RawClasses.loading_icon + '"></div>';
      html += '<div class="' + RawClasses.viewport + '"></div>';
      html += '</div>'; // wrapper

      if (data.controls && !data.customControls) {
        html += '<div class="' + RawClasses.controls + '">';
        html += '<button type="button" class="' + controlPrevClasses + '">' + data.labels.previous + '</button>';
        html += '<button type="button" class="' + controlZoomOutClasses + '">' + data.labels.zoom_out + '</button>';
        html += '<button type="button" class="' + controlZoomInClasses + '">' + data.labels.zoom_in + '</button>';
        html += '<button type="button" class="' + controlNextClasses + '">' + data.labels.next + '</button>';
        html += '</div>'; // controls
      }

      this.addClass(data.thisClasses.join(" "))
        .prepend(html);

      data.$wrapper = this.find(Classes.wrapper);
      data.$viewport = this.find(Classes.viewport);

      if (data.customControls) {
        data.$controls = $(data.controls.container).addClass([RawClasses.controls, RawClasses.controls_custom].join(" "));
        data.$controlPrevious = $(data.controls.previous).addClass(controlPrevClasses);
        data.$controlNext = $(data.controls.next).addClass(controlNextClasses);
        data.$controlZoomIn = $(data.controls.zoom_in).addClass(controlZoomInClasses);
        data.$controlZoomOut = $(data.controls.zoom_out).addClass(controlZoomOutClasses);
      } else {
        data.$controls = this.find(Classes.controls);
        data.$controlPrevious = this.find(Classes.control_previous);
        data.$controlNext = this.find(Classes.control_next);
        data.$controlZoomIn = this.find(Classes.control_zoom_in);
        data.$controlZoomOut = this.find(Classes.control_zoom_out);
      }

      data.$controlItems = data.$controlPrevious.add(data.$controlNext);
      data.$controlZooms = data.$controlZoomIn.add(data.$controlZoomOut);

      cacheInstances();

      data.$controlItems.on(Events.click, data, advanceGallery);
      data.$controlZooms.on([Events.touchStart, Events.mouseDown].join(" "), data, onZoomStart)
        .on([Events.touchEnd, Events.mouseUp].join(" "), data, onClearZoom);

      // if (data.lazy) {
      //  checkScrollPosition(data);
      // } else {
      loadImage(data, data.images[data.index], true);
      // }

      updateControls(data);
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      data.$wrapper.remove();

      data.$image.removeClass(RawClasses.source);

      if (data.controls && !data.customControls) {
        data.$controls.remove();
      }

      if (data.customControls) {
        data.$controls.removeClass([RawClasses.controls, RawClasses.controls_custom].join(" "));
        data.$controlItems.off(Events.click).removeClass([RawClasses.control, RawClasses.control_previous, RawClasses.control_next].join(" "));
        data.$controlZooms.off([Events.touchStart, Events.mouseDown].join(" "))
          .off([Events.touchStart, Events.mouseDown].join(" "))
          .off([Events.touchEnd, Events.mouseUp].join(" "))
          .removeClass([RawClasses.control, RawClasses.control_zoom_in, RawClasses.control_zoom_out].join(" "));
      }

      this.removeClass(data.thisClasses.join(" "))
        .off(Events.namespace);

      cacheInstances();
    }

    /**
     * @method
     * @name load
     * @description Loads source image
     * @param source [string OR array] "Source image (string) or array of images (array)"
     * @example $(".target").viewer("load", "path/to/image.jpg");
     * @example $(".target").viewer("load", ["path/to/image-1.jpg","path/to/image-2.jpg"]);
     */

    function load(data, source) {
      data.index = 0;

      if (typeof source === "string") {
        data.total = 0;
        data.images = [source];
        data.gallery = false;

        data.$el.removeClass(RawClasses.gallery);
      } else {
        data.total = source.length - 1;
        data.images = source;

        if (source.length > 1) {
          data.gallery = true;
          data.$el.addClass(RawClasses.gallery);
        }

        source = data.images[data.index];
      }

      unloadImage(data, function() {
        loadImage(data, source);
      });
    }

    /**
     * @method private
     * @name loadInitialImage
     * @description Loads first source image
     * @param data [object] "Instance data"
     */

    function loadInitialImage(data) {
      loadImage(data, data.images[data.index]);
    }

    /**
     * @method private
     * @name loadImage
     * @description Loads source image
     * @param data [object] "Instance data"
     * @param source [string] "Source image"
     * @param initialLoad [boolean] "Is initial load"
     */

    function loadImage(data, source, initialLoad) {
      if (!data.isAnimating) {
        data.isAnimating = true;

        data.$container = $('<div class="' + RawClasses.container + '"><img></div>');
        data.$image = data.$container.find("img");

        data.$viewport.append(data.$container);

        // Load image
        data.$image.one(Events.load, function() {
            onImageReady(data);

            data.isAnimating = false;

            // Transition in
            data.$container.fsTransition({
                property: "opacity"
              },
              function() {
                // Loaded
              });

            data.$el.removeClass(RawClasses.loading);

            data.$container.fsTouch({
                pan: true,
                scale: true
              }).on(Events.scaleStart, data, onScaleStart)
              .on(Events.scaleEnd, data, onScaleEnd)
              .on(Events.scale, data, onScale);

            data.$el.trigger(Events.loaded);
          }).one(Events.error, data, loadError)
          .attr("src", source)
          .addClass(RawClasses.image);

        // Check if image is cached
        if (data.$image[0].complete || data.$image[0].readyState === 4) {
          data.$image.trigger(Events.load);
        }

        data.source = source;
      }
    }

    /**
     * @method private
     * @name loadError
     * @description Error when resource fails to load.
     */

    function loadError(e) {
      var data = e.data;

      data.$el.trigger(Events.error);
    }

    /**
     * @method private
     * @name onImageReady
     * @description Sets up image data
     * @param data [object] "Instance data"
     */

    // on initial load
    function onImageReady(data) {
      // Cache image properties
      // First for container
      cacheImageProps(data);

      // Cache viewport properties
      cacheViewportProps(data);

      // Set initial container position
      data.containerTop = (data.viewportHeight / 2);
      data.containerLeft = (data.viewportWidth / 2);

      // Cache image min max
      cacheImageMinMax(data);

      // Set initial image size
      data.imageHeight = data.naturalHeight;
      data.imageWidth = data.naturalWidth;

      // Size the image to fit into the viewport
      fitToViewport(data);

      // Cache container min max
      cacheContainerMinMax(data);

      // Cache image top left
      cacheImageTopLeft(data);

      // Cache last props
      cacheLastProps(data);

      // Cache render props
      cacheRenderProps(data);

      // Update dom
      var props = {
        containerTop: data.containerTop,
        containerLeft: data.containerLeft,
        imageHeight: data.imageHeight,
        imageWidth: data.imageWidth,
        imageTop: data.imageTop,
        imageLeft: data.imageLeft,
      };

      setSizeAndPosition(data, props);

      data.isRendering = true;
    }

    /**
     * @method private
     * @name cacheImageProps
     * @description Caches image properties
     * @param data [object] "Instance data"
     */

    function cacheImageProps(data) {
      var naturalSize = calculateNaturalSize(data.$image);

      data.naturalHeight = naturalSize.naturalHeight;
      data.naturalWidth = naturalSize.naturalWidth;

      data.ratioHorizontal = data.naturalHeight / data.naturalWidth;
      data.ratioVertical = data.naturalWidth / data.naturalHeight;

      data.isWide = (data.naturalWidth > data.naturalHeight);
    }

    /**
     * @method private
     * @name cacheViewportProps
     * @description Caches viewport properties
     * @param data [object] "Instance data"
     */

    function cacheViewportProps(data) {
      data.viewportHeight = data.$viewport.outerHeight();
      data.viewportWidth = data.$viewport.outerWidth();
    }

    /**
     * @method private
     * @name cacheContainerProps
     * @description Caches container properties
     * @param data [object] "Instance data"
     */

    function cacheContainerMinMax(data) {
      if (data.imageHeight <= data.viewportHeight) {
        data.containerMinTop = (data.viewportHeight / 2);
        data.containerMaxTop = (data.viewportHeight / 2);
      } else {
        data.containerMinTop = data.viewportHeight - (data.imageHeight / 2);
        data.containerMaxTop = (data.imageHeight / 2);
      }

      if (data.imageWidth <= data.viewportWidth) {
        data.containerMinLeft = (data.viewportWidth / 2);
        data.containerMaxLeft = (data.viewportWidth / 2);
      } else {
        data.containerMinLeft = data.viewportWidth - (data.imageWidth / 2);
        data.containerMaxLeft = (data.imageWidth / 2);
      }
    }

    /**
     * @method private
     * @name cacheImageMinMax
     * @description Caches image min and max based on viewport and size
     * @param data [object] "Instance data"
     */

    function cacheImageMinMax(data) {
      // Set min
      if (data.isWide) {
        //WIDE
        data.imageMinWidth = data.viewportWidth;
        data.imageMinHeight = data.imageMinWidth * data.ratioHorizontal;

        if (data.imageMinHeight > data.viewportHeight) {
          data.imageMinHeight = data.viewportHeight;
          data.imageMinWidth = data.imageMinHeight * data.ratioVertical;
        }
      } else {
        //TALL
        data.imageMinHeight = data.viewportHeight;
        data.imageMinWidth = data.imageMinHeight * data.ratioVertical;

        if (data.imageMinWidth > data.viewportWidth) {
          data.imageMinWidth = data.viewportWidth;
          data.imageMinHeight = data.imageMinWidth * data.ratioHorizontal;
        }
      }

      // Check natural max against new min
      if (data.imageMinWidth > data.naturalWidth || data.imageMinHeight > data.naturalHeight) {
        data.imageMinHeight = data.naturalHeight;
        data.imageMinWidth = data.naturalWidth;
      }

      // Set max
      data.imageMaxHeight = data.naturalHeight;
      data.imageMaxWidth = data.naturalWidth;
    }

    /**
     * @method private
     * @name cacheImageTopLeft
     * @description Caches image top and left based on viewport and size
     * @param data [object] "Instance data"
     */

    function cacheImageTopLeft(data) {
      data.imageTop = -(data.imageHeight / 2);
      data.imageLeft = -(data.imageWidth / 2);
    }

    /**
     * @method private
     * @name cacheLastProps
     * @description Caches last container and image properties
     * @param data [object] "Instance data"
     */

    function cacheLastProps(data) {
      data.lastContainerTop = data.containerTop;
      data.lastContainerLeft = data.containerLeft;

      data.lastImageHeight = data.imageHeight;
      data.lastImageWidth = data.imageWidth;

      data.lastImageTop = data.imageTop;
      data.lastImageLeft = data.imageLeft;
    }

    /**
     * @method private
     * @name cacheRenderProps
     * @description Caches container and image render properties
     * @param data [object] "Instance data"
     */

    function cacheRenderProps(data) {
      data.renderContainerTop = data.lastContainerTop;
      data.renderContainerLeft = data.lastContainerLeft;

      data.renderImageTop = data.lastImageTop;
      data.renderImageLeft = data.lastImageLeft;

      data.renderImageHeight = data.lastImageHeight;
      data.renderImageWidth = data.lastImageWidth;
    }

    /**
     * @method private
     * @name fitToViewport
     * @description Fits image to viewport size
     * @param data [object] "Instance data"
     */

    function fitToViewport(data) {
      data.imageHeight = data.imageMinHeight;
      data.imageWidth = data.imageMinWidth;
    }

    /**
     * @method private
     * @name checkImageMinMax
     * @description Checks image properties against min and max
     * @param data [object] "Instance data"
     */

    // on scale
    function checkImageMinMax(data) {
      if (data.imageHeight < data.imageMinHeight) {
        data.imageHeight = data.imageMinHeight;
      }
      if (data.imageHeight > data.imageMaxHeight) {
        data.imageHeight = data.imageMaxHeight;
      }

      if (data.imageWidth < data.imageMinWidth) {
        data.imageWidth = data.imageMinWidth;
      }
      if (data.imageWidth > data.imageMaxWidth) {
        data.imageWidth = data.imageMaxWidth;
      }
    }

    /**
     * @method private
     * @name checkContainerTopLeft
     * @description Checks container properties against top and left
     * @param data [object] "Instance data"
     */

    function checkContainerTopLeft(data) {
      if (data.containerTop < data.containerMinTop) {
        data.containerTop = data.containerMinTop;
      }
      if (data.containerTop > data.containerMaxTop) {
        data.containerTop = data.containerMaxTop;
      }

      if (data.containerLeft < data.containerMinLeft) {
        data.containerLeft = data.containerMinLeft;
      }
      if (data.containerLeft > data.containerMaxLeft) {
        data.containerLeft = data.containerMaxLeft;
      }
    }

    /**
     * @method private
     * @name checkDoubleTap
     * @description Checks is double tapping
     * @param data [object] "Instance data"
     */

    function checkDoubleTap(data) {
      if (data.tapTimer === null) {
        data.tapTimer = Functions.startTimer(data.tapTimer, 500, function() {
          clearDoubleTap(data);
        });
      } else {
        clearDoubleTap(data);
        onImageZoom(data);
      }
    }

    /**
     * @method private
     * @name clearDoubleTap
     * @description Clears double tap timer
     * @param data [object] "Instance data"
     */

    function clearDoubleTap(data) {
      Functions.clearTimer(data.tapTimer);
      data.tapTimer = null;
    }

    /**
     * @method private
     * @name setSizeAndPosition
     * @description Updates image and container DOM
     * @param data [object] "Instance data"
     */

    function setSizeAndPosition(data, props) {
      if (Formstone.transform) {
        var scaleX = props.imageWidth / data.naturalWidth,
          scaleY = props.imageHeight / data.naturalHeight;

        data.$container.css(Formstone.transform, "translate3d(" + props.containerLeft + "px, " + props.containerTop + "px, 0)");
        data.$image.css(Formstone.transform, "translate3d(-50%, -50%, 0) scale(" + scaleX + "," + scaleY + ")");
      } else {
        data.$container.css({
          top: props.containerTop,
          left: props.containerLeft
        });

        data.$image.css({
          height: props.imageHeight,
          width: props.imageWidth,
          top: props.imageTop,
          left: props.imageLeft
        });
      }
    }

    /**
     * @method private
     * @name onScaleStart
     * @description Handles scale start event
     * @param e [object] "Event data"
     */

    function onScaleStart(e) {
      var data = e.data;

      // Check double tap
      checkDoubleTap(data);

      // Cache previous values
      cacheLastProps(data);
    }

    /**
     * @method private
     * @name onScale
     * @description Handles scale event
     * @param e [object] "Event data"
     */

    function onScale(e) {
      var data = e.data;

      // Clear double tap
      clearDoubleTap(data);

      data.isRendering = false;
      data.isZooming = false;

      var zoomed = (data.imageHeight > data.imageMinHeight + 1);

      // Change container position
      data.containerTop = data.lastContainerTop + e.deltaY;
      data.containerLeft = data.lastContainerLeft + e.deltaX;

      /*
          var diffX  = data.lastContainerLeft - data.containerLeft,
            diffY  = data.lastContainerTop - data.containerTop;

          data.containerLeft -= diffX;
          data.containerTop  -= diffY;
      */

      // Change image size
      data.imageHeight = data.lastImageHeight * e.scale;
      data.imageWidth = data.lastImageWidth * e.scale;

      // Cache container min max
      cacheContainerMinMax(data);

      // Check container top left
      checkContainerTopLeft(data);

      // Check image min max
      checkImageMinMax(data);

      // Cache image top left
      cacheImageTopLeft(data);

      // Update dom
      var props = {
        containerTop: data.containerTop,
        containerLeft: data.containerLeft,
        imageHeight: data.imageHeight,
        imageWidth: data.imageWidth,
        imageTop: data.imageTop,
        imageLeft: data.imageLeft,
      };

      setSizeAndPosition(data, props);
    }

    /**
     * @method private
     * @name onScaleEnd
     * @description Handles scale end event
     * @param e [object] "Event data"
     */

    function onScaleEnd(e) {
      var data = e.data;

      if (!data.isZooming) {
        // Cache last properties
        cacheLastProps(data);

        // Cache rander properties
        cacheRenderProps(data);

        data.isRendering = true;
      }
    }

    /**
     * @method private
     * @name onImageZoom
     * @description Zooms image in or out depending on current size
     * @param data [object] "Instance data"
     */

    function onImageZoom(data) {
      var zoomed = (data.imageHeight > data.imageMinHeight + 1);

      data.isZooming = true;

      // Cache last properties
      cacheLastProps(data);

      // Cache rander properties
      cacheRenderProps(data);

      if (zoomed) {
        // zoomed in (go to min)
        data.imageHeight = data.imageMinHeight;
        data.imageWidth = data.imageMinWidth;
      } else {
        // zoomed out (go to max)
        data.imageHeight = data.imageMaxHeight;
        data.imageWidth = data.imageMaxWidth;
      }

      // Cache container min max
      cacheContainerMinMax(data);

      // Check container top left
      checkContainerTopLeft(data);

      // Cache image top left
      cacheImageTopLeft(data);

      data.isRendering = true;
    }

    /**
     * @method private
     * @name onZoomStart
     * @description Handle zoom start
     * @param e [object] "Event data"
     */

    function onZoomStart(e) {
      Functions.killEvent(e);

      var $target = $(e.currentTarget),
        data = e.data,
        direction = ($target.hasClass(RawClasses.control_zoom_out)) ? 'out' : 'in';

      if (direction === 'out') {
        onZoomOut(data);
      } else {
        onZoomIn(data);
      }
    }

    /**
     * @method private
     * @name onZoomIn
     * @description Handle zoom in
     * @param data [object] "Instance data"
     */

    function onZoomIn(data) {
      data.keyDownTime = 1;
      data.action = 'zoom_in';
    }

    /**
     * @method private
     * @name onZoomOut
     * @description Handle zoom out
     * @param data [object] "Instance data"
     */

    function onZoomOut(data) {
      data.keyDownTime = 1;
      data.action = 'zoom_out';
    }

    /**
     * @method private
     * @name onClearZoom
     * @description Handle clear zoom
     * @param e [object] "Event data"
     */

    function onClearZoom(e) {
      var data = e.data;

      data.action = false;
    }

    /**
     * @method private
     * @name renderRAF
     * @description Updates DOM based on animation values
     * @param data [object] "Instance data"
     */

    function renderRAF(data) {
      if (data.isRendering) {
        if (data.action) {
          data.keyDownTime += data.zoomIncrement;

          var delta = ((data.action === "zoom_out") ? -1 : 1) * Math.round((data.imageWidth * data.keyDownTime) - data.imageWidth);

          if (delta > data.zoomDelta) {
            delta = data.zoomDelta;
          }

          if (data.isWide) {
            data.imageWidth += delta;
            data.imageHeight = Math.round(data.imageWidth / data.ratioVertical);
          } else {
            data.imageHeight += delta;
            data.imageWidth = Math.round(data.imageHeight / data.ratioHorizontal);
          }

          // Check image min max
          checkImageMinMax(data);

          // Cache image top left
          cacheImageTopLeft(data);

          // Cache container min max
          cacheContainerMinMax(data);

          // Check container top left
          checkContainerTopLeft(data);
        }

        data.renderContainerTop += Math.round((data.containerTop - data.renderContainerTop) * data.zoomEnertia);
        data.renderContainerLeft += Math.round((data.containerLeft - data.renderContainerLeft) * data.zoomEnertia);

        data.renderImageTop += Math.round((data.imageTop - data.renderImageTop) * data.zoomEnertia);
        data.renderImageLeft += Math.round((data.imageLeft - data.renderImageLeft) * data.zoomEnertia);

        data.renderImageHeight += Math.round((data.imageHeight - data.renderImageHeight) * data.zoomEnertia);
        data.renderImageWidth += Math.round((data.imageWidth - data.renderImageWidth) * data.zoomEnertia);

        // Update DOM

        var props = {
          containerTop: data.renderContainerTop,
          containerLeft: data.renderContainerLeft,
          imageHeight: data.renderImageHeight,
          imageWidth: data.renderImageWidth,
          imageTop: data.renderImageTop,
          imageLeft: data.renderImageLeft,
        };

        setSizeAndPosition(data, props);
      }
    }

    /**
     * @method
     * @name unload
     * @description Unloads current image
     * @example $(".target").viewer("unload");
     */

    function unload(data) {
      unloadImage(data);
    }

    /**
     * @method private
     * @name unloadImage
     * @description Unloads current image
     * @param data [object] "Instance data"
     * @param callback [function] "Callback function"
     */

    function unloadImage(data, callback) {
      if (!data.isAnimating) {
        clearDoubleTap(data);

        data.isAnimating = true;
        data.isRendering = false;
        data.isZooming = false;

        clearTouch(data);

        data.$container.fsTransition({
            property: "opacity"
          },
          function() {
            data.isAnimating = false;

            data.$container.remove();

            if (typeof callback === "function") {
              callback.call(window, data);
            }
          });

        data.$el.addClass(RawClasses.loading);
      }
    }

    /**
     * @method private
     * @name advanceGallery
     * @description Advances gallery
     * @param e [object] "Event data"
     */

    function advanceGallery(e) {
      Functions.killEvent(e);

      var $target = $(e.currentTarget),
        data = e.data,
        index = data.index + (($target.hasClass(RawClasses.control_next)) ? 1 : -1);

      if (!data.isAnimating) {
        if (index < 0) {
          index = 0;
        }

        if (index > data.total) {
          index = data.total;
        }

        if (index !== data.index) {
          data.index = index;

          unloadImage(data, function() {
            loadImage(data, data.images[data.index]);
          });
        }

        updateControls(data);
      }
    }

    /**
     * @method private
     * @name updateControls
     * @description Update control states
     * @param data [object] Instance data
     */

    function updateControls(data) {
      data.$controlItems.removeClass(RawClasses.control_disabled);

      if (data.index === 0) {
        data.$controlPrevious.addClass(RawClasses.control_disabled);
      }
      if (data.index === data.images.length - 1) {
        data.$controlNext.addClass(RawClasses.control_disabled);
      }
    }

    /**
     * @method private
     * @name resize
     * @description Resize target instance
     * @example $(".target").viewer("resize");
     */

    /**
     * @method private
     * @name resizeInstance
     * @description Handle window resize event
     * @param data [object] "Instance data"
     */

    function resizeInstance(data) {
      cacheViewportProps(data);

      cacheContainerMinMax(data);

      cacheImageMinMax(data);

      cacheImageTopLeft(data);

      cacheContainerMinMax(data);

      checkContainerTopLeft(data);

      checkImageMinMax(data);
    }

    /**
     * @method private
     * @name clearTouch
     * @description Clears current touch action.
     */

    function clearTouch(data) {
      if (data.$container && data.$container.length) {
        data.$container.fsTouch("destroy")
          .off(Events.scaleStart, onScaleStart)
          .off(Events.scaleEnd, onScaleEnd)
          .off(Events.scale, onScale);
      }
    }

    /**
     * @method private
     * @name cacheScrollPosition
     * @description Cahce target scroll position
     * @param data [object] "Instance data"
     */

    function cacheScrollPosition(data) {
      data.scrollTop = data.$el.offset().top;
    }

    // /**
    //  * @method private
    //  * @name checkScrollPosition
    //  * @description Check target scroll position against window
    //  * @param data [object] "Instance data"
    //  */
    //
    // function checkScrollPosition(data) {
    //   if (!data.visible && data.scrollTop < ScrollTop + data.lazyEdge) {
    //     data.visible = true;
    //     loadInitialImage(data);
    //   }
    // }

    /**
     * @method private
     * @name calculateNaturalSize
     * @description Determines natural size of target image.
     * @param $img [jQuery object] "Source image object"
     * @return [object | boolean] "Object containing natural height and width values or false"
     */

    function calculateNaturalSize($img) {
      var node = $img[0],
        img = new Image();

      if (typeof node.naturalHeight !== "undefined") {
        return {
          naturalHeight: node.naturalHeight,
          naturalWidth: node.naturalWidth
        };
      } else {
        if (node.tagName.toLowerCase() === 'img') {
          img.src = node.src;
          return {
            naturalHeight: img.height,
            naturalWidth: img.width
          };
        }
      }

      return false;
    }

    /**
     * @plugin
     * @name Viewer
     * @description A jQuery plugin for image exploration.
     * @type widget
     * @main viewer.js
     * @main viewer.css
     * @dependency jQuery
     * @dependency core.js
     * @dependency touch.js
     * @dependency transition.js
     */

    var Plugin = Formstone.Plugin("viewer", {
        widget: true,

        /**
         * @options
         * @param controls [boolean or object] <true> "Flag to draw controls OR object containing container, next, previous, zoom_in and zoom_out control selectors (Must be fully qualified selectors)"
         * @param customClass [string] <''> "Class applied to instance"
         // param lazy [boolean] <false> "Lazy load with scroll"
         // param lazyEdge [int] <100> "Lazy load edge"
         * @param labels.count [string] <'of'> "Gallery count separator text"
         * @param labels.next [string] <'Next'> "Gallery control text"
         * @param labels.previous [string] <'Previous'> "Gallery control text"
         * @param labels.zoom_in [string] <'Zoom In'> "Image zoom text"
         * @param labels.zoom_out [string] <'Zoom Out'> "Image zoom text"
         * @param theme [string] <"fs-light"> "Theme class name"
         * @param zoomDelta [int] <100> "Max zoom change"
         * @param zoomEnertia [float] <0.2> "Enertia for zoom"
         * @param zoomIncrement [float] <0.01> "Increment for zoom buttons"
         */

        defaults: {
          controls: true,
          customClass: "",
          // lazy           : false,
          // lazyEdge       : 100,
          labels: {
            count: "of",
            next: "Next",
            previous: "Previous",
            zoom_in: "Zoom In",
            zoom_out: "Zoom Out"
          },
          theme: "fs-light",
          zoomDelta: 100,
          zoomEnertia: 0.2,
          zoomIncrement: 0.01
        },

        classes: [
          "source",
          "wrapper",
          "viewport",
          "container",
          "image",
          "gallery",
          "loading_icon",

          "controls",
          "controls_custom",
          "control",
          "control_previous",
          "control_next",
          "control_zoom_in",
          "control_zoom_out",
          "control_disabled",
          // "lazy"
          "loading"
        ],

        /**
         * @events
         * @event loaded.viewer "Image loaded"
         * @event ready.viewer "Image ready"
         */

        events: {
          loaded: "loaded",
          ready: "ready"
        },

        methods: {
          _construct: construct,
          _destruct: destruct,
          _resize: resize,
          _raf: raf,

          resize: resizeInstance,
          load: load,
          unload: unload
        }
      }),

      // Localize References

      Namespace = Plugin.namespace,
      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      Window = Formstone.window,
      $Window = Formstone.$window,
      $Body,
      ScrollTop = 0,
      $Instances = [],
      ViewportSetup = false;

    // Setup

    Formstone.Ready(setup);

  })

);


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

