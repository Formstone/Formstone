/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});


/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-(\w+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	manual: _self.Prism && _self.Prism.manual,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o) {
			var type = _.util.type(o);

			switch (type) {
				case 'Object':
					var clone = {};

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key]);
						}
					}

					return clone;

				case 'Array':
					// Check for existence for IE8
					return o.map && o.map(function(v) { return _.util.clone(v); });
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

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

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || document.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		parent = element.parentNode;

		if (/pre/i.test(parent.nodeName)) {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			if (env.code) {
				_.hooks.run('before-highlight', env);
				env.element.textContent = env.code;
				_.hooks.run('after-highlight', env);
			}
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

	highlight: function (text, grammar, language) {
		var tokens = _.tokenize(text, grammar);
		return Token.stringify(_.util.encode(tokens), language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		var Token = _.Token;

		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					pattern.lastIndex = 0;

					var match = pattern.exec(str),
					    delNum = 1;

					// Greedy patterns can override/remove up to two previously matched tokens
					if (!match && greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						/*
						 * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						 * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
						 */
						if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1].length;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar, language) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (env.type == 'comment') {
		env.attributes['spellcheck'] = 'true';
	}

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}
 	// In worker
	_self.addEventListener('message', function(evt) {
		var message = JSON.parse(evt.data),
		    lang = message.language,
		    code = message.code,
		    immediateClose = message.immediateClose;

		_self.postMessage(_.highlight(code, _.languages[lang], lang));
		if (immediateClose) {
			_self.close();
		}
	}, false);

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (document.addEventListener && !_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _self.Prism;

})();

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': /<!DOCTYPE[\s\S]+?>/i,
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:('|")[\s\S]*?(\1)|[^\s>]+)/i,
				inside: {
					'punctuation': /[=>"']/
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
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
	'comment': /\/\*[\s\S]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
	'string': {
		pattern: /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'property': /(\b|\B)[\w-]+(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css'
		}
	});
	
	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|').*?\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'string': {
		pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /(\.|\\)/
		}
	},
	'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b-?(0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
	'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	}
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\\\|\\?[^\\])*?`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^}]+\}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
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
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript'
		}
	});
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	self.Prism.fileHighlight = function() {

		var Extensions = {
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

		if(Array.prototype.forEach) { // Check to prevent error in IE8
			Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
				var src = pre.getAttribute('data-src');

				var language, parent = pre;
				var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
				while (parent && !lang.test(parent.className)) {
					parent = parent.parentNode;
				}

				if (parent) {
					language = (pre.className.match(lang) || [, ''])[1];
				}

				if (!language) {
					var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
					language = Extensions[extension] || extension;
				}

				var code = document.createElement('code');
				code.className = 'language-' + language;

				pre.textContent = '';

				code.textContent = 'Loading…';

				pre.appendChild(code);

				var xhr = new XMLHttpRequest();

				xhr.open('GET', src, true);

				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {

						if (xhr.status < 400 && xhr.responseText) {
							code.textContent = xhr.responseText;

							Prism.highlightElement(code);
						}
						else if (xhr.status >= 400) {
							code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
						}
						else {
							code.textContent = '✖ Error: File does not exist or is empty';
						}
					}
				};

				xhr.send(null);
			});
		}

	};

	document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);

})();

/*! formstone v1.3.3 [core.js] 2017-08-18 | GPL-3.0 License | formstone.it */
/**
 * @plugin
 * @name Core
 * @description Formstone Library core. Required for all plugins.
 */

/* global define */
/* global ga */

(function(factory) {
  if (typeof define === "function" && define.amd) {
    define([ "jquery" ], factory);
  } else {
    factory(jQuery);
  }
}(function($) {

  "use strict";

  // Namespace

  var Win  = typeof window !== "undefined" ? window : this,
      Doc  = Win.document,
      Core = function() {
        this.Version = '@version';
        this.Plugins = {};

        this.DontConflict   = false;
        this.Conflicts      = {
          fn: {}
        };
        this.ResizeHandlers = [];
        this.RAFHandlers    = [];

        // Globals

        this.window               = Win;
        this.$window              = $(Win);
        this.document             = Doc;
        this.$document            = $(Doc);
        this.$body                = null;

        this.windowWidth          = 0;
        this.windowHeight         = 0;
        this.fallbackWidth        = 1024;
        this.fallbackHeight       = 768;
        this.userAgent            = window.navigator.userAgent || window.navigator.vendor || window.opera;
        this.isFirefox            = /Firefox/i.test(this.userAgent);
        this.isChrome             = /Chrome/i.test(this.userAgent);
        this.isSafari             = /Safari/i.test(this.userAgent) && !this.isChrome;
        this.isMobile             = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test( this.userAgent );
        this.isIEMobile           = /IEMobile/i.test(this.userAgent);
        this.isFirefoxMobile      = (this.isFirefox && this.isMobile);
        this.transform            = null;
        this.transition           = null;

        this.support = {
          file          : !!(window.File && window.FileList && window.FileReader),
          history       : !!(window.history && window.history.pushState && window.history.replaceState),
          matchMedia    : !!(window.matchMedia || window.msMatchMedia),
          pointer       : !!(window.PointerEvent),
          raf           : !!(window.requestAnimationFrame && window.cancelAnimationFrame),
          touch         : !!(("ontouchstart" in window) || window.DocumentTouch && document instanceof window.DocumentTouch),
          transition    : false,
          transform     : false
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
          } catch(error) {
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
          }  catch(error) {
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
          if ($.type( ViewportLocks[plugin_namespace] ) !== 'undefined') {
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
              parts = url.slice( url.indexOf("?") + 1 ).split("&");

          for (var i = 0; i < parts.length; i++) {
            var part = parts[i].split("=");
            params[ part[0] ] = part[1];
          }

          return params;
          }
      },

      Formstone = new Core(),

      // Deferred ready

      $Ready = $.Deferred(),

      // Classes

      Classes = {
        base                 : "{ns}",
        element              : "{ns}-element"
      },

      // Events

      Events = {
        namespace            : ".{ns}",
        beforeUnload         : "beforeunload.{ns}",
        blur                 : "blur.{ns}",
        change               : "change.{ns}",
        click                : "click.{ns}",
        dblClick             : "dblclick.{ns}",
        drag                 : "drag.{ns}",
        dragEnd              : "dragend.{ns}",
        dragEnter            : "dragenter.{ns}",
        dragLeave            : "dragleave.{ns}",
        dragOver             : "dragover.{ns}",
        dragStart            : "dragstart.{ns}",
        drop                 : "drop.{ns}",
        error                : "error.{ns}",
        focus                : "focus.{ns}",
        focusIn              : "focusin.{ns}",
        focusOut             : "focusout.{ns}",
        gestureChange        : "gesturechange.{ns}",
        gestureStart         : "gesturestart.{ns}",
        gestureEnd           : "gestureend.{ns}",
        input                : "input.{ns}",
        keyDown              : "keydown.{ns}",
        keyPress             : "keypress.{ns}",
        keyUp                : "keyup.{ns}",
        load                 : "load.{ns}",
        mouseDown            : "mousedown.{ns}",
        mouseEnter           : "mouseenter.{ns}",
        mouseLeave           : "mouseleave.{ns}",
        mouseMove            : "mousemove.{ns}",
        mouseOut             : "mouseout.{ns}",
        mouseOver            : "mouseover.{ns}",
        mouseUp              : "mouseup.{ns}",
        panStart             : "panstart.{ns}",
        pan                  : "pan.{ns}",
        panEnd               : "panend.{ns}",
        resize               : "resize.{ns}",
        scaleStart           : "scalestart.{ns}",
        scaleEnd             : "scaleend.{ns}",
        scale                : "scale.{ns}",
        scroll               : "scroll.{ns}",
        select               : "select.{ns}",
        swipe                : "swipe.{ns}",
        touchCancel          : "touchcancel.{ns}",
        touchEnd             : "touchend.{ns}",
        touchLeave           : "touchleave.{ns}",
        touchMove            : "touchmove.{ns}",
        touchStart           : "touchstart.{ns}"
      },

      ResizeTimer    = null,
      Debounce       = 20,

      $ViewportMeta,
      ViewportMetaOriginal,
      ViewportMetaLocked,
      ViewportLocks     = [],
      ViewportLocked    = false;

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
        $[i]    = Formstone.Conflicts[i];
        $.fn[i] = Formstone.Conflicts.fn[i];
      }
    }
  };

  /**
   * @method
   * @name ready
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

      var namespaceDash  = "fs-" + namespace,
          namespaceDot   = "fs." + namespace,
          namespaceClean = "fs"  + namespace.replace(/(^|\s)([a-z])/g, function(m, p1, p2) { return p1 + p2.toUpperCase(); });

      /**
       * @method private
       * @name initialize
       * @description Creates plugin instance by adding base classname, creating data and scoping a _construct call.
       * @param options [object] <{}> "Instance options"
       */

      function initialize(options) {
        // Maintain Chain

        var hasOptions = $.type(options) === "object",
            args = Array.prototype.slice.call(arguments, (hasOptions ? 1 : 0) ),
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

            var guid    = "__" + settings.guid++,
                rawGuid = settings.classes.raw.base + guid,
                locals  = $element.data(namespace + "-options"),
                data    = $.extend(true, {
                  $el     : $element,
                  guid    : guid,
                  rawGuid : rawGuid,
                  dotGuid : "." + rawGuid
                }, options, ($.type(locals) === "object" ? locals : {}) );

            // Cache Instance

            $element.addClass(settings.classes.raw.element)
                    .data(namespaceClean, data);

            // Constructor

            settings.methods._construct.apply($element, [ data ].concat(args));

            // Post Constructor

            $postTargets = $postTargets.add($element);
          }

        }

        // Post targets

        for (i = 0, count = $postTargets.length; i < count; i++) {
          $element = $postTargets.eq(i);

          // Post Constructor

          settings.methods._postConstruct.apply($element, [ getData($element) ]);
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
        settings.functions.iterate.apply(this, [ settings.methods._destruct ].concat(Array.prototype.slice.call(arguments, 1)));

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

      function getData($element) {
        return $element.data(namespaceClean);
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

          if ($.type(method) === "object" || !method) {

            // Initialize

            return initialize.apply(this, arguments);
          } else if (_method && method.indexOf("_") !== 0) {

            // Wrap Public Methods

            return settings.functions.iterate.apply(this, [ _method ].concat(Array.prototype.slice.call(arguments, 1)));
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

          return _method.apply(window, Array.prototype.slice.call(arguments, ($.type(method) === "object" ? 0 : 1) ));
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
            args     = Array.prototype.slice.call(arguments, 1);

        for (var i = 0, count = $targets.length; i < count; i++) {
          var $element = $targets.eq(i),
              data = getData($element) || {};

          if ($.type(data.$el) !== "undefined") {
            fn.apply($element, [ data ].concat(args));
          }
        }

        return $targets;
      }

      // Locals

      settings.initialized = false;
      settings.priority    = settings.priority || 10;

      // Namespace Classes & Events

      settings.classes   = namespaceProperties("classes", namespaceDash, Classes, settings.classes);
      settings.events    = namespaceProperties("events",  namespace,     Events,  settings.events);

      // Extend Functions

      settings.functions = $.extend({
        getData    : getData,
        iterate    : iterate
      }, Functions, settings.functions);

      // Extend Methods

      settings.methods = $.extend(true, {

        // Private Methods

        _setup         : $.noop,    // Document ready
        _construct     : $.noop,    // Constructor
        _postConstruct : $.noop,    // Post Constructor
        _destruct      : $.noop,    // Destructor
        _resize        : false,     // Window resize

        // Public Methods

        destroy        : destroy

      }, settings.methods);

      // Extend Utilities

      settings.utilities = $.extend(true, {

        // Private Utilities

        _initialize    : false,    // First Run
        _delegate      : false,    // Custom Delegation

        // Public Utilities

        defaults       : defaults

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

      settings.namespace      = namespace;
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

    // Setup, catches lazy-loaded components, ensures order

    $Ready.then(function() {
      setupPlugin(namespace);
    });

    return Formstone.Plugins[namespace];
  };

  // Setup Plugins

  function setupPlugin(namespace) {
    if (!Formstone.Plugins[namespace].initialized) {
      Formstone.Plugins[namespace].methods._setup.call(document);
      Formstone.Plugins[namespace].initialized = true;
    }
  }

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
          _props.raw[ customProps[i] ] = namespace + "-" + customProps[i];
          _props[ customProps[i] ]     = "." + namespace + "-" + customProps[i];
        } else {
          // Custom events
          _props.raw[ i ] = customProps[i];
          _props[ i ]     = customProps[i] + "." + namespace;
        }
      }
    }

    for (i in globalProps) {
      if (globalProps.hasOwnProperty(i)) {
        if (type === "classes") {

          // Global classes
          _props.raw[ i ] = globalProps[i].replace(/{ns}/g, namespace);
          _props[ i ]     = globalProps[i].replace(/{ns}/g, "." + namespace);
        } else {
          // Global events
          _props.raw[ i ] = globalProps[i].replace(/.{ns}/g, "");
          _props[ i ]     = globalProps[i].replace(/{ns}/g, namespace);
        }
      }
    }

    return _props;
  }

  // Set Browser Prefixes

  function setBrowserPrefixes() {
    var transitionEvents = {
          "WebkitTransition"    : "webkitTransitionEnd",
          "MozTransition"       : "transitionend",
          "OTransition"         : "otransitionend",
          "transition"          : "transitionend"
        },
        transitionProperties = [
          "transition",
          "-webkit-transition"
        ],
        transformProperties = {
          'transform'          : 'transform',
          'MozTransform'       : '-moz-transform',
          'OTransform'         : '-o-transform',
          'msTransform'        : '-ms-transform',
          'webkitTransform'    : '-webkit-transform'
        },
        transitionEvent       = "transitionend",
        transitionProperty    = "",
        transformProperty     = "",
        testDiv               = document.createElement("div"),
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
    Formstone.windowWidth  = Formstone.$window.width();
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

    // Viewport
    $ViewportMeta = $('meta[name="viewport"]');
    ViewportMetaOriginal = ($ViewportMeta.length) ? $ViewportMeta.attr("content") : false;
    ViewportMetaLocked   = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';

    $Ready.resolve();

    // ie8 fallback support
    Formstone.support.nativeMatchMedia = Formstone.support.matchMedia && !$("html").hasClass("no-matchmedia");
  });

  // Custom Events

  Events.clickTouchStart = Events.click + " " + Events.touchStart;

  // Browser Prefixes

  setBrowserPrefixes();

  window.Formstone = Formstone;

  return Formstone;

})

);

/*! formstone v1.3.3 [analytics.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
    if (arguments.length && $.type(arguments[0]) !== "object") {
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
    var $target  = $(this),
        href     = ($.type($target[0].href) !== "undefined") ? $target[0].href : "",
        domain   = document.domain.split(".").reverse(),
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
      eventData = "File, Download:" + extension[0] + ", " + href.replace(/ /g,"-");
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
        step      = (1 / Defaults.scrollStops),
        depth     = step,
        key;

    for (var i = 1; i <= Defaults.scrollStops; i++) {
      key = ( Math.round(100 * depth) ).toString();

      if (!ScrollDepths[ ScrollWidth ][ key ].passed && scrollTop > ScrollDepths[ ScrollWidth ][ key ].edge) {
        ScrollDepths[ ScrollWidth ][ key ].passed = true;

        // Push data
        var eventData = $.extend(Defaults.scrollFields, {
            eventCategory  : "ScrollDepth",
            eventAction    : ScrollWidth,
            eventLabel     : key,
            nonInteraction : true
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
    var mqState    = $.mediaquery("state"),
        bodyHeight = $Body.outerHeight(),
        newDepths  = {},
        step       = (1 / Defaults.scrollStops),
        depth      = step,
        top        = 0,
        key;

    if (mqState.minWidth) {
      ScrollWidth = "MinWidth:" + mqState.minWidth + "px";
    }

    for (var i = 1; i <= Defaults.scrollStops; i++) {
      top = parseInt(bodyHeight * depth);
      key = ( Math.round(100 * depth) ).toString();

      newDepths[ key ] = {
        edge    : ( key === "100" ) ? top - 10 : top,
        passsed : ( ScrollDepths[ ScrollWidth ] && ScrollDepths[ ScrollWidth ][ key ] ) ? ScrollDepths[ ScrollWidth ][ key ].passed : false
      };

      depth += step;
    }

    ScrollDepths[ ScrollWidth ] = newDepths;
  }

  /**
   * @method private
   * @name trackEvent
   * @description Tracks event
   * @param e [object] "Event data"
   */

  function trackEvent(e) {
    var $target = $(this),
        url     = $target.attr("href"),
        data    = $target.data(DataKey).split(",");

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
      eventCategory  : data[0],
      eventAction    : data[1],
      eventLabel     : (data[2] || url),
      eventValue     : data[3],
      nonInteraction : data[4],
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
          hitType : "event"
        }, data);

    // If active link, launch that ish!
    if ($.type($target) !== "undefined" && !$target.attr("data-analytics-stop")) {
      var href = ($.type($target[0].href) !== "undefined") ? $target[0].href : "",
        url  = (!href.match(/^mailto\:/i) && !href.match(/^tel\:/i) && href.indexOf(":") < 0) ? Window.location.protocol + "//" + Window.location.hostname + "/" + href : href;

      if (url !== "") {
        // Check Window target
        var target = $target.attr("target");
        if (target) {
          Window.open(url, target);
        } else if (Defaults.eventCallback) {
          var callbackType = "hitCallback"; // GUA ? "hitCallback" : "eventCallback";

          evt[ callbackType ] = function() {
            if (LinkTimer) {
              Functions.clearTimer(LinkTimer);

              openURL( url );
            }
          };

          // Event timeout
          LinkTimer = Functions.startTimer(LinkTimer, Defaults.eventTimeout, evt[ callbackType ]);
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
          hitType : "pageview"
        }, data);

    push(pageView);
  }

  /**
   * @method private
   * @name push
   * @description Push data to Universal Analytics
   */

  function push(data) {
    if ($.type(Window.ga) === "function" && $.type(Window.ga.getAll) === "function") {
      var trackers = Window.ga.getAll();

      for (var i = 0, count = trackers.length; i < count; i++) {
        Window.ga( trackers[i].get("name") + ".send", data);
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
          _setup    : setup,
          _resize   : resize
        },
        utilities: {
          _delegate : delegate
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
        autoEvents    : false,
        fileTypes     : /\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,
        eventCallback : false,
        eventTimeout  : 1000,
        scrollDepth   : false,
        scrollStops   : 5,
        scrollFields  : {}
      },

      // Localize References

      Window       = Formstone.window,
      $Window      = Formstone.$window,
      $Body        = null,

      Functions    = Plugin.functions,
      Events       = Plugin.events,

      // Internal

      Initialized  = false,
      DataKey      = "analytics-event",
      DataKeyFull  = "data-" + DataKey,

      ScrollDepths = {},
      ScrollTimer  = null,
      ScrollWidth  = "Site", // default value, non-responsive
      LinkTimer    = null;

})

);

/*! formstone v1.3.3 [asap.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
      CurrentID  = history.state.id;
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
    if ( url.hash && (url.href.replace(url.hash, "") === window.location.href.replace(location.hash, "") || url.href === window.location.href + "#") ) {
      return;
    }

    // Ignore certain file types
    if ( url.href.match(Instance.ignoreTypes) ) {
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
    $Window.trigger(Events.requested, [ doPush ]);

    // Get transition out deferred
    Instance.transitionOutDeferred = Instance.transitionOut.apply(Window, [ false ]);

    var parsed   = parseURL(url),
        params   = parsed.params,
        hash     = parsed.hash,
        cleanURL = parsed.clean,
        error    = "User error",
        response = null,
        requestDeferred = $.Deferred();

    params[ Instance.requestKey ] = true;

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
            $Window.trigger(Events.progress, [ percent ]);
          }
        }, false);

        return xhr;
      },
      success: function(resp, status, jqXHR) {
        response  = ($.type(resp) === "string") ? $.parseJSON(resp) : resp;

        // handle redirects - requires passing new location with json response
        if (resp.location) {
          url = resp.location;

          parsed = parseURL(url);
          hash   = parsed.hash;
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
      $Window.trigger(Events.failed, [ error ]);
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
    $Window.trigger(Events.loaded, [ data ]);

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

    $Window.trigger(Events.rendered, [ data ]);

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
    if ($.type(data) !== "undefined") {
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
      id  : id,
      url : url
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
        hashIndex  = url.indexOf("#"),
        params     = {},
        hash       = "",
        cleanURL   = url;

    if (hashIndex > -1) {
      hash = url.slice(hashIndex);
      cleanURL = url.slice(0, hashIndex);
    }

    if (queryIndex > -1) {
      params = Functions.parseQueryString( url.slice(queryIndex + 1, ((hashIndex > -1) ? hashIndex : url.length)) );
      cleanURL = url.slice(0, queryIndex);
    }

    return {
      hash   : hash,
      params : params,
      url    : url,
      clean  : cleanURL
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
          _initialize : initialize,

          load        : loadURL,
          replace     : replaceURL
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
          failed    : "failed",
          loaded    : "loaded",
          popState  : "popstate",
          progress  : "progress",
          requested : "requested",
          rendered  : "rendered"
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
        cache         : true,
        ignoreTypes   : /\.(jpg|sjpg|jpeg|png|gif|zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,
        render        : $.noop,
        requestKey    : "fs-asap",
        selector      : "a",
        transitionOut : $.noop
      },

      // Localize References

      $Window    = Formstone.$window,
      Window     = $Window[0],
      $Body,

      Functions  = Plugin.functions,
      Events     = Plugin.events,
      RawClasses = Plugin.classes.raw,

      // Internal

      Namespace  = "asap-",
      CurrentURL = '',
      CurrentID  = 1,
      Request,
      Instance;

})

);

/*! formstone v1.3.3 [background.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
    $Instances     = $(Classes.base);
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
    data.youTubeGuid  = 0;

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
      data.source        = source;
      data.responsive    = false;
      data.isYouTube     = false;

      // Check YouTube
      if ($.type(source) === "object" && $.type(source.video) === "string") {
        var parts = source.video.match( /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i );

        if (parts && parts.length >= 1) {
          data.isYouTube = true;
          data.videoId = parts[1];
        }
      }

      var isVideo = !data.isYouTube && ($.type(source) === "object" &&
                      (source.hasOwnProperty("mp4") || source.hasOwnProperty("ogg") || source.hasOwnProperty("webm") )
                    );

      data.video      = data.isYouTube || isVideo;
      data.playing    = false;

      if (data.isYouTube) {
        // youtube video
        data.playerReady = false;
        data.posterLoaded = false;

        loadYouTube(data, source, firstLoad);
      } else if ($.type(source) === "object" && source.hasOwnProperty("poster")) {
        // html5 video
        loadVideo(data, source, firstLoad);
      } else {
        var newSource = source;

        // Responsive image handling
        if ($.type(source) === "object") {
          var cache = [],
              keys  = [],
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
                width    : parseInt( keys[i] ),
                url      : source[ keys[i] ],
                mq       : Window.matchMedia( "(min-width: " + parseInt( keys[i] ) + "px)" )
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
          if (Formstone.support.nativeMatchMedia) {
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
        $media       = $('<div class="' + imageClasses + '" aria-hidden="true"><img alt=""></div>'),
        $img         = $media.find("img"),
        newSource    = source;

    // Load image
    $img.one(Events.load, function() {
      if (BGSupport) {
        $media.addClass(RawClasses.native)
            .css({ backgroundImage: "url('" + newSource + "')" });
      }

      // YTransition in
      $media.fsTransition({
        property: "opacity"
      },
      function() {
        if (!poster) {
          cleanMedia(data);
        }
      }).css({ opacity: 1 });

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

    if (!Formstone.isMobile) {
      var videoClasses = [RawClasses.media, RawClasses.video, (firstLoad !== true ? RawClasses.animated : '')].join(" "),
          html = '<div class="' + videoClasses + '" aria-hidden="true">';

      html += '<video';
      if (data.loop) {
        html += ' loop';
      }
      if (data.mute) {
        html += ' muted';
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
        }).css({ opacity: 1 });

        doResizeInstance(data);

        data.$el.trigger(Events.loaded);

        // Events
        if (data.autoPlay) {
          playVideo(data);
        }
      });

      data.$container.append($media);
    }
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
      var parts = source.match( /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/ );
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

    if (!Formstone.isMobile) {
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
          videoId    : data.videoId,
          playerVars : ytOptions,
          events : {
            onReady: function (e) {
              /* console.log("onReady", e); */

              data.playerReady = true;
              /* data.player.setPlaybackQuality("highres"); */

              if (data.mute) {
                data.player.mute();
              }

              if (!data.autoPlay) {
                // make sure the video plays
                data.player.pauseVideo();
              }
            },
            onStateChange: function (e) {
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
                }).css({ opacity: 1 });

                doResizeInstance(data);

                data.$el.trigger(Events.loaded);
              } else if (data.loop && data.playing && e.data === Window.YT.PlayerState.ENDED) {
                // fix looping option
                data.player.playVideo();
              }

              /* if (!isSafari) { */
                // Fix for Safari's overly secure security settings...
                data.$el.find(Classes.embed)
                    .addClass(RawClasses.ready);
              /* } */
            },
            onPlaybackQualityChange: function(e) {
              /* console.log("onPlaybackQualityChange", e); */
            },
            onPlaybackRateChange: function(e) {
              /* console.log("onPlaybackRateChange", e); */
            },
            onError: function(e) {
              /* console.log("onError", e); */
              loadError({ data: data });
            },
            onApiChange: function(e) {
              /* console.log("onApiChange", e); */
            }
          }
            });

        // Resize
        doResizeInstance(data);
      }
    }
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
      }).css({ opacity: 0 });
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
      var $m     = $all.eq(i),
          type   = (data.isYouTube) ? "iframe" : ($m.find("video").length ? "video" : "img"),
          $media = $m.find(type);

      // If media found and scaling is not natively support
      if ($media.length && !(type === "img" && BGSupport)) {
        var frameWidth  = data.$el.outerWidth(),
            frameHeight = data.$el.outerHeight(),
            frameRatio  = frameWidth / frameHeight,
            nSize       = naturalSize(data, $media);

        data.width  = nSize.width;
        data.height = nSize.height;
        data.left   = 0;
        data.top    = 0;

        var mediaRatio = (data.isYouTube) ? data.embedRatio : (data.width / data.height);

        // First check the height
        data.height = frameHeight;
        data.width  = data.height * mediaRatio;

        // Next check the width
        if (data.width < frameWidth) {
          data.width  = frameWidth;
          data.height = data.width / mediaRatio;
        }

        // Position the media
        data.left = -(data.width - frameWidth) / 2;
        data.top  = -(data.height - frameHeight) / 2;

        $m.css({
          height : data.height,
          width  : data.width,
          left   : data.left,
          top    : data.top
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
        width:  500 / data.embedRatio
      };
    } else if ($media.is("img")) {
      var node = $media[0];

      if ($.type(node.naturalHeight) !== "undefined") {
        return {
          height : node.naturalHeight,
          width  :  node.naturalWidth
        };
      } else {
        var img = new Image();
        img.src = node.src;
        return {
          height : img.height,
          width  :  img.width
        };
      }
    } else {
      return {
        height : $media[0].videoHeight,
        width  :  $media[0].videoWidth
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
          autoPlay       : true,
          customClass    : "",
          embedRatio     : 1.777777,
          lazy           : false,
          lazyEdge       : 100,
          loop           : true,
          mute           : true,
          source         : null,
          youtubeOptions : {}
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
          loaded : "loaded",
          ready  : "ready",
          loadedMetaData : "loadedmetadata"
        },

        methods: {
          _setup     : setup,
          _construct : construct,
          _destruct  : destruct,
          _resize    : resize,

          play       : playVideo,
          pause      : pauseVideo,
          mute       : muteVideo,
          unmute     : unmuteVideo,
          resize     : doResizeInstance,
          load       : loadMedia,
          unload     : unloadMedia
        }
      }),

      // Localize References

      Classes         = Plugin.classes,
      RawClasses      = Classes.raw,
      Events          = Plugin.events,
      Functions       = Plugin.functions,

      Window          = Formstone.window,
      $Window         = Formstone.$window,
      ScrollTop       = 0,
      $Instances      = [],
      $LazyInstances  = [],

      BGSupport       = ("backgroundSize" in Formstone.document.documentElement.style),
      YouTubeReady    = false,
      YouTubeQueue    = [];

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

/*! formstone v1.3.3 [carousel.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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

      data.customControls = ($.type(data.controls) === "object" && data.controls.previous && data.controls.next);
      data.customPagination = ($.type(data.pagination) === "string");

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
        controlsHtml += '<div class="' + RawClasses.controls + '" aria-label="carousel controls" aria-controls="' + data.ariaId + '">';
        controlsHtml += '<button type="button" class="' + controlPrevClasses + '" aria-label="' + data.labels.previous + '">' + data.labels.previous + '</button>';
        controlsHtml += '<button type="button" class="' + controlNextClasses + '" aria-label="' + data.labels.next + '">' + data.labels.next + '</button>';
        controlsHtml += '</div>';
      }

      if (data.pagination && !data.customPagination) {
        paginationHtml += '<div class="' + RawClasses.pagination + '" aria-label="carousel pagination" aria-controls="' + data.ariaId + '" role="navigation">';
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
      if ($.type(data.show) === "object") {
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
        data.pageCount = Math.ceil(data.count / data.perPage);

        data.canisterWidth = data.single ? data.containerWidth : ((data.pageWidth + data.itemMargin) * data.pageCount);
        data.$canister.css({
          width: (data.matchWidth) ? data.canisterWidth : 1000000,
          height: ""
        });

        data.$items.css({
          width: (data.matchWidth) ? data.itemWidth : "",
          height: ""
        }).removeClass([RawClasses.visible, RawClasses.item_previous, RawClasses.item_next].join(" "));

        // initial page
        data.pages = [];

        for (i = 0, j = 0; i < data.count; i += data.perPage) {
          $items = data.$items.slice(i, i + data.perPage);
          width = 0;
          height = 0;

          if ($items.length < data.perPage) {
            if (i === 0) {
              $items = data.$items;
            } else {
              $items = data.$items.slice(data.$items.length - data.perPage);
            }
          }

          $first = data.rtl ? $items.eq($items.length - 1) : $items.eq(0);
          left = $first.position().left;

          // if (data.autoHeight) {
          for (k = 0; k < $items.length; k++) {
            w = $items.eq(k).outerWidth(true);
            h = $items.eq(k).outerHeight();

            width += w;

            if (h > height) {
              height = h;
            }
          }
          // } else {
          //   height = $first.outerHeight();
          // }

          data.pages.push({
            left: data.rtl ? left - (data.canisterWidth - width) : left,
            height: height,
            width: width,
            $items: $items
          });

          if (height > data.itemHeight) {
            data.itemHeight = height;
          }

          j++;
        }

        if (data.paged) {
          data.pageCount -= (data.count % data.visible);
        }

        if (data.pageCount <= 0) {
          data.pageCount = 1;
        }

        data.maxMove = -data.pages[data.pageCount - 1].left;

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
        Functions.clearTimer(data.autoTimer);

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

      for (var i = 0, count = data.pages.length; i < count; i++) {
        if (i === index) {
          data.pages[i].$items.addClass(RawClasses.visible).attr("aria-hidden", "false");
        } else {
          data.pages[i].$items.not(data.pages[index].$items).addClass((i < index) ? RawClasses.item_previous : RawClasses.item_next).attr("aria-hidden", "true");
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
      } else if (data.pageCount < 1) {
        data.$controlItems.removeClass(RawClasses.visible);
      } else {
        data.$controlItems.addClass(RawClasses.visible);

        if (data.index <= 0) {
          data.$controlPrevious.removeClass(RawClasses.visible);
        } else if (data.index >= data.pageCount - 1 || (!data.single && data.leftPosition === data.maxMove)) {
          data.$controlNext.removeClass(RawClasses.visible);
        }
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
      } else if ($.type(data.show) === "array") {
        for (var i in data.show) {
          if (data.show.hasOwnProperty(i)) {
            if (Formstone.support.nativeMatchMedia) {
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
            previous: "Previous"
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

/*! formstone v1.3.3 [checkbox.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
    var $parent      = this.closest("label"),
      $label       = $parent.length ? $parent.eq(0) : $("label[for=" + this.attr("id") + "]"),
      baseClass    = [RawClasses.base, data.theme, data.customClass].join(" "),
      labelClass   = [RawClasses.label, data.theme, data.customClass].join(" "),
      html         = "";

    data.radio = (this.attr("type") === "radio");
    data.group = this.attr("name");

    html += '<div class="' + RawClasses.marker + '" aria-hidden="true">';
    html += '<div class="' + RawClasses.flag + '"></div>';

    if (data.toggle) {
      baseClass  += " " + RawClasses.toggle;
      labelClass += " " + RawClasses.toggle;
      html += '<span class="' + [RawClasses.state, RawClasses.state_on].join(" ") + '">'  + data.labels.on  + '</span>';
      html += '<span class="' + [RawClasses.state, RawClasses.state_off].join(" ") + '">' + data.labels.off + '</span>';
    }

    if (data.radio) {
      baseClass  += " " + RawClasses.radio;
      labelClass += " " + RawClasses.radio;
    }

    html += '</div>';

    // Modify DOM
    data.$placeholder = $('<span class="' + RawClasses.element_placeholder + '"></span>');
    this.before(data.$placeholder);

        data.labelParent = ($label.find(this).length);
    data.labelClass  = labelClass;

    $label.addClass( labelClass );

        if (data.labelParent) {
        $label.wrap('<div class="' + baseClass + '"></div>')
          .before(html);
    } else {
      this.before('<div class=" ' + baseClass + '">' + html + '</div>');
    }

    // Store plugin data
    data.$checkbox     = (data.labelParent) ? $label.parents(Classes.base) : this.prev(Classes.base);
    data.$marker       = data.$checkbox.find(Classes.marker);
    data.$states       = data.$checkbox.find(Classes.state);
    data.$label        = $label;
        data.$classable    = $().add(data.$checkbox).add(data.$label);

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

        data.$label.removeClass( data.labelClass );

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
    var disabled    = data.$el.is(":disabled") /* || data.$el.is("[readonly]") */,
      checked     = data.$el.is(":checked");

    if (!disabled) {
      if (checked) {
        onSelect({ data: data });
      } else {
        onDeselect({ data: data });
      }
    }
  }

  /**
   * @method private
   * @name onClick
   * @description Handles click
   */

  function onClick(e) {
    e.stopPropagation();

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
    var data        = e.data,
      disabled    = data.$el.is(":disabled") /* || data.$el.is("[readonly]") */,
      checked     = data.$el.is(":checked");

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
    e.data.$el.trigger(Events.focus);
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
        customClass    : "",
        toggle         : false,
        labels : {
          on         : "ON",
          off        : "OFF"
        },
        theme          : "fs-light"
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
        _construct    : construct,
        _destruct     : destruct,

        // Public Methods

        enable        : enable,
        disable       : disable,
        update        : update
      },

      events: {
        deselect : "deselect"
      }
    }),

    // Localize References

    Classes       = Plugin.classes,
    RawClasses    = Classes.raw,
    Events        = Plugin.events,
    Functions     = Plugin.functions;

})

);

/*! formstone v1.3.3 [checkpoint.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
    var intersectParts = data.intersect.split("-");

    data.windowIntersect = intersectParts[0];
    data.elIntersect     = intersectParts[1];
    data.visible         = false;

    var $container = $( data.$el.data("checkpoint-container") );

    data.$target = ($container.length) ? $container : data.$el;

    data.$el.addClass(RawClasses.base);
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

  /**
   * @method private
   * @name resizeInstance
   * @description Handle window resize event
   * @param data [object] "Instance data"
   */

  function resizeInstance(data) {
        switch (data.windowIntersect) {
            case "top":
                data.windowCheck = 0 - data.offset;
                break;
            case "middle":
                data.windowCheck = (WindowHeight / 2) - data.offset;
                break;
            case "bottom":
                data.windowCheck = WindowHeight - data.offset;
                break;
            default:
                break;
        }

    switch (data.elIntersect) {
            case "top":
                data.elCheck = data.$target[0].offsetTop;
                break;
            case "middle":
                data.elCheck = data.$target[0].offsetTop + (data.$target.outerHeight() / 2);
                break;
            case "bottom":
                data.elCheck = data.$target[0].offsetTop + data.$target.outerHeight();
                break;
            default:
                break;
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
    var check = (ScrollTop + data.windowCheck);

    if ( check >= data.elCheck ) {
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
        intersect    : 'bottom-top',
        offset       : 0,
        reverse      : false,
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
        activate      : "activate",
        deactivate    : "deactivate"
      },

      methods: {
        _construct    : construct,
        _postConstruct: postConstruct,
        _destruct     : destruct,
        _resize       : resize,
        _raf          : raf
      }
    }),

    // Localize References

    Namespace     = Plugin.namespace,
    Classes       = Plugin.classes,
    RawClasses    = Classes.raw,
    Events        = Plugin.events,
    Functions     = Plugin.functions,

    Window        = Formstone.window,
    $Window       = Formstone.$window,
    $Body,
    WindowHeight  = 0,
    ScrollTop     = 0,
    OldScrollTop  = 0,
    $Instances    = [];

})

);

/*! formstone v1.3.3 [cookie.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
    if ($.type(key) === "object") {

      // Set defaults

      Defaults = $.extend(Defaults, key);
    } else {

      // Delegate intent

      options = $.extend({}, Defaults, options || {});

      if ($.type(key) !== "undefined") {
        if ($.type(value) !== "undefined") {
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

    if (options.expires && $.type(options.expires) === "number") {
      date.setTime( date.getTime() + options.expires );
      expiration = date.toGMTString();
    }

    var domain     = (options.domain)    ? "; domain=" + options.domain : "",
      expires    = (expiration)        ? "; expires=" + expiration : "",
      maxAge     = (expiration)        ? "; max-age=" + (options.expires / 1000) : "", // to seconds
      path       = (options.path)      ? "; path=" + options.path : "",
      secure     = (options.secure)    ? "; secure" : "";

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
    var keyString    = key + "=",
      cookies      = Document.cookie.split(';');

    // Loop Cookies

    for(var i = 0; i < cookies.length; i++) {
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

    console.log(Document.cookie);
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
        _delegate : delegate
      }
    }),

    /**
     * @options
     * @param domain [string] "Cookie domain"
     * @param expires [int] <604800000> "Time until cookie expires"
     * @param path [string] "Cookie path"
     */

    Defaults = {
      domain     : null,
      expires    : 604800000, // 7 days
      path       : null,
      secure     : null
    },

    // Localize References

    Document = Formstone.document;

})

);
/*! formstone v1.3.3 [dropdown.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
    data.multiple  = this.prop("multiple");
    data.disabled  = this.prop("disabled") || this.is("[readonly]");
    data.lastIndex = false;

    if (data.multiple) {
      data.links = false;
    } else if (data.external) {
      data.links = true;
    }

    // Grab true original index, only if selected attribute exits
    var $trueOriginal   = this.find("[selected]").not(":disabled"),
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
      $options    = $allOptions.filter("option"),
      $label      = $("[for=" + this.attr("id") + "]");

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

    if (data.mobile /* || Formstone.isMobile */) {
      wrapperClasses.push(RawClasses.mobile);
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
      innerHtml   = "";

    wrapperHtml += '<div class="' + wrapperClasses.join(" ") + '"id="' + data.ariaId + '" tabindex="' + data.tabIndex + '" role="listbox"';
    if (data.multiple) {
      wrapperHtml += ' aria-label="multi select"';
    } else {
      wrapperHtml += ' aria-haspopup="true" aria-live="polite" aria-labeledby="' + data.selectedAriaId + '"';
    }
    wrapperHtml += '></div>';

    // Build inner
    if (!data.multiple) {
      innerHtml += '<button type="button" class="' + RawClasses.selected + '" id="' + data.selectedAriaId + '" tabindex="-1">';
      innerHtml += $('<span></span>').text( trimText(originalLabel, data.trim) ).html();
      innerHtml += '</button>';
    }
    innerHtml += '<div class="' + RawClasses.options + '">';
    innerHtml += '</div>';

    // Modify DOM
    this.wrap(wrapperHtml)
      .after(innerHtml);

    // Store plugin data
    data.$dropdown        = this.parent(Classes.base);
    data.$label           = $label;
    data.$allOptions      = $allOptions;
    data.$options         = $options;
    data.$selected        = data.$dropdown.find(Classes.selected);
    data.$wrapper         = data.$dropdown.find(Classes.options);
    data.$placeholder     = data.$dropdown.find(Classes.placeholder);
    data.index            = -1;
    data.closed           = true;
    data.focused          = false;

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
    if (!data.mobile /*!Formstone.isMobile*/) {

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
      var index = data.$items.index( data.$items.filter("[data-value=" + option + "]") );

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
      var index = data.$items.index( data.$items.filter("[data-value=" + option + "]") );
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
      j    = 0;

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
        var opVal   = $option.val(),
          opLabel = $option.data("label"),
          opType  = (data.links) ? "a" : 'button type="button"';

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
          html += Functions.decodeEntities( trimText($option.text(), data.trim) );
        }

        html += '</' + opType + '>';

        j++;
      }
    }

    data.$items = data.$wrapper.html( $.parseHTML(html) )
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

    if (!data.disabled) {
      // // Handle mobile, but not Firefox, unless desktop forced
      // if (!data.mobile && Formstone.isMobile && !Formstone.isFirefoxMobile && !Formstone.isIEMobile) {
      //   var el = data.$el[0];
      //
      //   if (Document.createEvent) { // All
      //     var evt = Document.createEvent("MouseEvents");
      //     evt.initMouseEvent("mousedown", false, true, Window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      //     el.dispatchEvent(evt);
      //   } else if (el.fireEvent) { // IE
      //     el.fireEvent("onmousedown");
      //   }
      // } else {

      if (!data.mobile) {
        // Delegate intent
        if (data.closed) {
          openOptions(data);
        } else {
          closeOptions(data);
        }
      }
    }

    closeOthers(data);
  }

  function closeOthers(data) {
    $(Classes.base).not(data.$dropdown).trigger(Events.close, [ data ]);
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
      var windowHeight   = $Window.height(),
        optionsHeight  = data.$wrapper.outerHeight(true),
        boundingRect   = data.$dropdown[0].getBoundingClientRect();

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

      data.$dropdown.removeClass( [RawClasses.open, RawClasses.bottom].join(" ") );

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
      data    = e.data;

    if (!internal && !data.multiple) {
      var index = data.$options.index( data.$options.filter(":selected") );

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
      data    = e.data;

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
      data    = e.data;

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
    var $item      = data.$items.eq(index),
      $option    = data.$options.eq(index),
      isSelected = $item.hasClass(RawClasses.item_selected),
      isDisabled = $item.hasClass(RawClasses.item_disabled);

    // Check for disabled options
    if (!isDisabled) {
      if (data.multiple) {
        if (data.mobile /* Formstone.isMobile*/) {
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
            var start = (data.lastIndex > index)  ? index : data.lastIndex,
              end   = ((data.lastIndex > index) ? data.lastIndex : index) + 1;

            data.$options.prop("selected", null)
                   .attr("aria-selected", null);
            data.$items.filter(Classes.item_selected)
              .removeClass(RawClasses.item_selected);

            data.$options.slice(start, end).not("[disabled]").prop("selected", true);
            data.$items.slice(start, end).not(Classes.item_disabled).addClass(RawClasses.item_selected);
          } else if (metaKey) {
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
    var $selected      = data.$items.eq(data.index),
      selectedOffset = (data.index >= 0 && !$selected.hasClass(RawClasses.item_placeholder)) ? $selected.position() : { left: 0, top: 0 },
      buffer         = (data.$wrapper.outerHeight() - $selected.outerHeight()) / 2;

    if ($.fn.fsScrollbar !== undefined) {
      data.$wrapper.fsScrollbar("resize")
             .fsScrollbar("scroll", (data.$wrapper.find(".fs-scrollbar-content").scrollTop() + selectedOffset.top) );
    } else {
      data.$wrapper.scrollTop( data.$wrapper.scrollTop() + selectedOffset.top - buffer );
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
        data.$el.trigger(Events.raw.change, [ true ]);
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
       * @param mobile [boolean] <false> "Use native browser UI on mobile"
       * @param theme [string] <"fs-light"> "Theme class name"
       * @param trim [int] <0> "Trim options to specified length; 0 to disable”
       */
      defaults: {
        bottomEdge     : 0,
        cover          : false,
        customClass    : "",
        label          : "",
        external       : false,
        links          : false,
        mobile         : false,
        theme          : "fs-light",
        trim           : 0
      },

      methods: {
        _setup        : setup,
        _construct    : construct,
        _destruct     : destruct,

        disable       : disableDropdown,
        enable        : enableDropdown,
        update        : updateDropdown,
        open          : openOptions,
        close         : closeOptions
      },

      classes: [
        "cover",
        "bottom",
        "multiple",
        "mobile",

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

    Classes       = Plugin.classes,
    RawClasses    = Classes.raw,
    Events        = Plugin.events,
    Functions     = Plugin.functions,

    // Local

    Window        = Formstone.window,
    $Window       = Formstone.$window,
    Document      = Formstone.document,
    $Body         = null;

})

);

/*! formstone v1.3.3 [equalize.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
    data.mq       = "(min-width:" + data.minWidth + ") and (max-width:" + data.maxWidth + ")";
    data.type     = (data.property === "height") ? "outerHeight" : "outerWidth";

    if (data.target) {
      if (!$.isArray(data.target)) {
        data.target = [ data.target ];
      }
    } else {
      data.target = [ "> *" ];
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
        $target = data.$el.find( data.target[i] );

        $target.css(data.property, "");

        for (var j = 0; j < $target.length; j++) {
          check = $target.eq(j)[ data.type ]();

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
      data.$el.find( data.target[i] ).css(data.property, "");
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
        maxWidth    : Infinity,
        minWidth    : "0px",
        property    : "height",
        target      : null
      },

      methods : {
        _construct    : construct,
        _destruct     : destruct,
        _resize       : resize,

        resize        : resizeInstance
      }
    }),

    // Localize References

    Classes        = Plugin.classes,
    RawClasses     = Classes.raw,
    Events         = Plugin.events,
    Functions      = Plugin.functions,

    $Instances     = [];

})

);
/*! formstone v1.3.3 [lightbox.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
    $Body  = Formstone.$body;
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

      buildLightbox.apply(Window, [{ data: $.extend(true, {}, {
        $object: $target
      }, Defaults, options || {}) }]);
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

      // Cache internal data
      Instance = $.extend({}, {
        visible            : false,
        gallery: {
          active         : false
        },
        isMobile           : (Formstone.isMobile || data.mobile),
        isTouch            : Formstone.support.touch,
        isAnimating        : true,
        isZooming          : false,
        oldContentHeight   : 0,
        oldContentWidth    : 0,
        metaHeight         : 0,
        thumbnailHeight    : 0,
        captionOpen        : false,
        thumbnailsOpen     : false,
        tapTimer           : null
      }, data);

      Instance.isViewer = (Instance.isMobile && data.viewer && typeof $.fn.fsViewer !== "undefined");

      // Check target type
      var $el            = data.$el,
        $object        = data.$object,
        source         = ($el && $el[0].href) ? $el[0].href || "" : "",
        hash           = ($el && $el[0].hash) ? $el[0].hash || "" : "",
        sourceParts    = source.toLowerCase().split(".").pop().split(/\#|\?/),
        type           = ($el) ? $el.data(Namespace + "-type") : "",
        isImage         = ( (type === "image") || (source.match(data.fileTypes) || source.substr(0, 10) === "data:image") ),
        isVideo         = checkVideo(source),
        isUrl         = ( (type === "url") || (!isImage && !isVideo && source.substr(0, 4) === "http" && !hash) ),
        isElement      = ( (type === "element") || (!isImage && !isVideo && !isUrl && (hash.substr(0, 1) === "#")) ),
        isObject       = ( (typeof $object !== "undefined") );

      if (isElement) {
        source = hash;
      }

      // Retain default click
      if ( !(isImage || isVideo || isUrl || isElement || isObject) ) {
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

      if (isImage || isVideo) {
        // Check for gallery
        var id = $el.data(Namespace + "-gallery");

        if (id) {
          Instance.gallery.active    = true;
          Instance.gallery.id        = id;
          Instance.gallery.$items    = $("a[data-lightbox-gallery= " + Instance.gallery.id + "], a[rel= " + Instance.gallery.id + "]"); // backwards compatibility
          Instance.gallery.index     = Instance.gallery.$items.index(Instance.$el);
          Instance.gallery.total     = Instance.gallery.$items.length - 1;
        }
      }

      // Thumbnails support
      if ( !(Instance.thumbnails && (isImage || isVideo) && Instance.gallery.active) ) {
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

      html += '<div class="' + lightboxClasses.join(" ") + '" role="dialog" aria-label="lightbox" tabindex="-1">';
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
      }
      html += '</div></div>'; //container, content, lightbox

      // Modify Dom
      $Body.append(html);

      // Cache jquery objects
      Instance.$overlay               = $(Classes.overlay);
      Instance.$lightbox              = $(Classes.base);
      Instance.$close                 = $(Classes.close);
      Instance.$container             = $(Classes.container);
      Instance.$content               = $(Classes.content);
      Instance.$tools                 = $(Classes.tools);
      Instance.$meta                  = $(Classes.meta);
      Instance.$metaContent           = $(Classes.meta_content);
      Instance.$position              = $(Classes.position);
      Instance.$caption               = $(Classes.caption);
      Instance.$controlBox            = $(Classes.controls);
      Instance.$controls              = $(Classes.control);
      Instance.$thumbnails            = $(Classes.thumbnails);
      Instance.$thumbnailContainer    = $(Classes.thumbnail_container);
      Instance.$thumbnailItems        = $(Classes.thumbnail_item);

      if (Instance.isMobile) {
        Instance.paddingVertical   = Instance.$close.outerHeight();
        Instance.paddingHorizontal = 0;

        Instance.mobilePaddingVertical   = parseInt(Instance.$content.css("paddingTop"), 10)  + parseInt(Instance.$content.css("paddingBottom"), 10);
        Instance.mobilePaddingHorizontal = parseInt(Instance.$content.css("paddingLeft"), 10) + parseInt(Instance.$content.css("paddingRight"), 10);
      } else {
        Instance.paddingVertical   = parseInt(Instance.$lightbox.css("paddingTop"), 10)  + parseInt(Instance.$lightbox.css("paddingBottom"), 10);
        Instance.paddingHorizontal = parseInt(Instance.$lightbox.css("paddingLeft"), 10) + parseInt(Instance.$lightbox.css("paddingRight"), 10);

        Instance.mobilePaddingVertical   = 0;
        Instance.mobilePaddingHorizontal = 0;
      }

      Instance.contentHeight     = Instance.$lightbox.outerHeight() - Instance.paddingVertical;
      Instance.contentWidth      = Instance.$lightbox.outerWidth()  - Instance.paddingHorizontal;
      Instance.controlHeight     = Instance.$controls.outerHeight();

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
         .on( [ Events.focus, Events.focusIn ].join(" "), onDocumentFocus);

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
      Instance.targetWidth  = arguments[1];
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
      $Window.trigger(Events.open);

      // Start preloading
      if (Instance.gallery.active) {
        preloadGallery();
        updateThumbnails();
        positionThumbnails();
      }

      // Focus
      Instance.$lightbox.focus();
    });

    if (!Instance.isMobile) {
      Instance.$lightbox.css({
        height: Instance.contentHeight + Instance.paddingVertical,
        width:  Instance.contentWidth  + Instance.paddingHorizontal,
        top:    (!Instance.fixed) ? position.top : 0
      });
    }

    // Trigger event in case the content size hasn't changed
    var contentHasChanged = (Instance.oldContentHeight !== Instance.contentHeight || Instance.oldContentWidth !== Instance.contentWidth);

    if (Instance.isMobile || !contentHasChanged) {
      Instance.$lightbox.fsTransition("resolve");
    }

    // Track content size changes
    Instance.oldContentHeight = Instance.contentHeight;
    Instance.oldContentWidth  = Instance.contentWidth;

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
        width:  Instance.contentWidth  + Instance.paddingHorizontal,
        top:    (!Instance.fixed) ? position.top : 0
      });

      Instance.oldContentHeight = Instance.contentHeight;
      Instance.oldContentWidth  = Instance.contentWidth;
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

      var height = parseInt( Instance.$metaContent.outerHeight(true) );
      height += parseInt( Instance.$meta.css("padding-top") );
      height += parseInt( Instance.$meta.css("padding-bottom") );

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
      t = (title !== undefined && title) ? title.replace(/^\s+|\s+$/g,'') : false;

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
        Instance.naturalWidth  = naturalSize.naturalWidth;

        if (Instance.retina) {
          Instance.naturalHeight /= 2;
          Instance.naturalWidth  /= 2;
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

      Instance.windowHeight = Instance.viewportHeight = Formstone.windowHeight - Instance.mobilePaddingVertical   - Instance.paddingVertical;
      Instance.windowWidth  = Instance.viewportWidth  = Formstone.windowWidth  - Instance.mobilePaddingHorizontal - Instance.paddingHorizontal;

      Instance.contentHeight = Infinity;
      Instance.contentWidth = Infinity;

      Instance.imageMarginTop  = 0;
      Instance.imageMarginLeft = 0;

      while (Instance.contentHeight > Instance.viewportHeight && count < 2) {
        Instance.imageHeight     = (count === 0) ? Instance.naturalHeight : Instance.$image.outerHeight();
        Instance.imageWidth      = (count === 0) ? Instance.naturalWidth  : Instance.$image.outerWidth();
        Instance.metaHeight      = (count === 0) ? 0 : Instance.metaHeight;
        Instance.spacerHeight    = (count === 0) ? 0 : Instance.spacerHeight;
        Instance.thumbnailHeight = (count === 0) ? 0 : Instance.thumbnailHeight;

        if (count === 0) {
          Instance.ratioHorizontal = Instance.imageHeight / Instance.imageWidth;
          Instance.ratioVertical   = Instance.imageWidth  / Instance.imageHeight;

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
          Instance.contentWidth  = Instance.viewportWidth;

          if (!Instance.isTouch) {
            Instance.$content.css({
              height: Instance.contentHeight - Instance.spacerHeight // - 10
            });
          }

          Instance.spacerHeight += Instance.$thumbnails.outerHeight(true) + 10;

          fitImage();

          Instance.imageMarginTop  = (Instance.contentHeight - Instance.targetImageHeight - Instance.spacerHeight) / 2;
          Instance.imageMarginLeft = (Instance.contentWidth  - Instance.targetImageWidth) / 2;
        } else {
          // Viewport should match window, less margin, padding and meta
          if (count === 0) {
            Instance.viewportHeight -= (Instance.margin + Instance.paddingVertical);
            Instance.viewportWidth  -= (Instance.margin + Instance.paddingHorizontal);
          }
          Instance.viewportHeight -= Instance.metaHeight;

          if (Instance.thumbnails) {
            Instance.viewportHeight -= Instance.thumbnailHeight;
          }

          fitImage();

          Instance.contentHeight = Instance.targetImageHeight;
          Instance.contentWidth  = Instance.targetImageWidth;
        }

        // Modify DOM
        if (!Instance.isMobile && !Instance.isTouch) {
          Instance.$meta.css({
            width: Instance.contentWidth
          });
        }

        Instance.$image.css({
          height        : Instance.targetImageHeight,
          width         : Instance.targetImageWidth,
          marginTop     : Instance.imageMarginTop,
          marginLeft    : Instance.imageMarginLeft
        });

        if (!Instance.isMobile) {
          Instance.metaHeight = Instance.$meta.outerHeight(true);
          Instance.contentHeight += Instance.metaHeight;
        }

        if (Instance.thumbnails) {
          Instance.thumbnailHeight = Instance.$thumbnails.outerHeight(true);
          Instance.contentHeight += Instance.thumbnailHeight;
        }

        count ++;
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
      width  = (!Instance.isMobile) ? Instance.viewportWidth  : Instance.contentWidth;

    if (Instance.isWide) {
      //WIDE
      Instance.targetImageWidth  = width;
      Instance.targetImageHeight = Instance.targetImageWidth * Instance.ratioHorizontal;

      if (Instance.targetImageHeight > height) {
        Instance.targetImageHeight = height;
        Instance.targetImageWidth  = Instance.targetImageHeight * Instance.ratioVertical;
      }
    } else {
      //TALL
      Instance.targetImageHeight = height;
      Instance.targetImageWidth  = Instance.targetImageHeight * Instance.ratioVertical;

      if (Instance.targetImageWidth > width) {
        Instance.targetImageWidth  = width;
        Instance.targetImageHeight = Instance.targetImageWidth * Instance.ratioHorizontal;
      }
    }

    // MAX
    if (Instance.targetImageWidth > Instance.imageWidth || Instance.targetImageHeight > Instance.imageHeight) {
      Instance.targetImageHeight = Instance.imageHeight;
      Instance.targetImageWidth  = Instance.imageWidth;
    }

    // MIN
    if (Instance.targetImageWidth < Instance.minWidth || Instance.targetImageHeight < Instance.minHeight) {
      if (Instance.targetImageWidth < Instance.minWidth) {
        Instance.targetImageWidth  = Instance.minWidth;
        Instance.targetImageHeight = Instance.targetImageWidth * Instance.ratioHorizontal;
      } else {
        Instance.targetImageHeight = Instance.minHeight;
        Instance.targetImageWidth  = Instance.targetImageHeight * Instance.ratioVertical;
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
      queryString = source.split("?");

    if (url) {
      // if we have a query string
      if (queryString.length >= 2) {
        url += "?" + queryString.slice(1)[0].trim();
      }

      Instance.$videoWrapper = $('<div class="' + RawClasses.video_wrapper + '"></div>');
      Instance.$video = $('<iframe class="' + RawClasses.video + '" frameborder="0" seamless="seamless" allowfullscreen></iframe>');

      Instance.$video.attr("src", url)
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
    Instance.windowHeight = Instance.viewportHeight = Formstone.windowHeight - Instance.mobilePaddingVertical   - Instance.paddingVertical;
    Instance.windowWidth  = Instance.viewportWidth  = Formstone.windowWidth  - Instance.mobilePaddingHorizontal - Instance.paddingHorizontal;
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

      Instance.targetVideoWidth  = Instance.viewportWidth;
      Instance.targetVideoHeight = Instance.targetVideoWidth * Instance.videoRatio;

      if (Instance.targetVideoHeight > Instance.viewportHeight) {
        Instance.targetVideoHeight = Instance.viewportHeight;
        Instance.targetVideoWidth  = Instance.targetVideoHeight / Instance.videoRatio;
      }

      Instance.videoMarginTop  = (Instance.viewportHeight - Instance.targetVideoHeight) / 2;
      Instance.videoMarginLeft = (Instance.viewportWidth  - Instance.targetVideoWidth)  / 2;
    } else {
      Instance.viewportHeight = Instance.windowHeight - Instance.margin;
      Instance.viewportWidth  = Instance.windowWidth  - Instance.margin;

      Instance.targetVideoWidth  = (Instance.videoWidth > Instance.viewportWidth) ? Instance.viewportWidth : Instance.videoWidth;
      if (Instance.targetVideoWidth < Instance.minWidth) {
        Instance.targetVideoWidth = Instance.minWidth;
      }
      Instance.targetVideoHeight = Instance.targetVideoWidth * Instance.videoRatio;

      Instance.contentHeight = Instance.targetVideoHeight;
      Instance.contentWidth  = Instance.targetVideoWidth;
    }

    // Update dom
    if (!Instance.isMobile && !Instance.isTouch) {
      Instance.$meta.css({
        width: Instance.contentWidth
      });
    }

    Instance.$videoWrapper.css({
      height:     Instance.targetVideoHeight,
      width:      Instance.targetVideoWidth,
      marginTop:  Instance.videoMarginTop,
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
      var $thumb     = Instance.$thumbnailItems.eq(Instance.gallery.index),
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
    if (typeof Instance.$imageContainer !== 'undefined') {
      if (Instance.isViewer) {
        Instance.$imageContainer.fsViewer("destroy");
      }
      Instance.$imageContainer.remove();
    }
    if (typeof Instance.$videoWrapper !== 'undefined') {
      Instance.$videoWrapper.remove();
    }
    Instance.$el = Instance.gallery.$items.eq(Instance.gallery.index);

    Instance.$caption.html(Instance.formatter.call(Instance.$el, Instance));
    Instance.$position.find(Classes.position_current).html(Instance.gallery.index + 1);

    var source = Instance.$el.attr("href"),
      isVideo = checkVideo(source);

    if (isVideo) {
      Instance.type = "video";

      loadVideo(source);
    } else {
      Instance.type = "image";

      loadImage(source);
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
    Instance.$inlineTarget   = $(id);
    Instance.$inlineContents = Instance.$inlineTarget.children().detach();

    appendObject(Instance.$inlineContents);
  }

  /**
   * @method private
   * @name restoreContents
   * @description Restores inline element.
   */

  function restoreContents() {
    Instance.$inlineTarget.append( Instance.$inlineContents.detach() );
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
    Instance.windowHeight    = Formstone.windowHeight - Instance.mobilePaddingVertical   - Instance.paddingVertical;
    Instance.windowWidth    = Formstone.windowWidth  - Instance.mobilePaddingHorizontal - Instance.paddingHorizontal;

    Instance.objectHeight    = $object.outerHeight(true);
    Instance.objectWidth    = $object.outerWidth(true);
    Instance.targetHeight    = Instance.targetHeight || (Instance.$el ? Instance.$el.data(Namespace + "-height") : null);
    Instance.targetWidth    = Instance.targetWidth  || (Instance.$el ? Instance.$el.data(Namespace + "-width")  : null);
    Instance.maxHeight      = (Instance.windowHeight < 0) ? Instance.minHeight : Instance.windowHeight;
    Instance.isIframe      = $object.is("iframe");
    Instance.objectMarginTop  = 0;
    Instance.objectMarginLeft = 0;

    if (!Instance.isMobile) {
      Instance.windowHeight -= Instance.margin;
      Instance.windowWidth  -= Instance.margin;
    }

    Instance.contentHeight = (Instance.targetHeight) ? Instance.targetHeight : (Instance.isIframe || Instance.isMobile) ? Instance.windowHeight : Instance.objectHeight;
    Instance.contentWidth  = (Instance.targetWidth)  ? Instance.targetWidth  : (Instance.isIframe || Instance.isMobile) ? Instance.windowWidth  : Instance.objectWidth;

    if ((Instance.isIframe || Instance.isObject) && Instance.isMobile) {
      Instance.contentHeight = Instance.windowHeight;
      Instance.contentWidth  = Instance.windowWidth;
    } else if (Instance.isObject) {
      Instance.contentHeight = (Instance.contentHeight > Instance.windowHeight) ? Instance.windowHeight : Instance.contentHeight;
      Instance.contentWidth  = (Instance.contentWidth  > Instance.windowWidth)  ? Instance.windowWidth  : Instance.contentWidth;
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
        naturalWidth:  node.naturalWidth
      };
    } else {
      if (node.tagName.toLowerCase() === 'img') {
        img.src = node.src;
        return {
          naturalHeight: img.height,
          naturalWidth:  img.width
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
        parts = source.match( formats[i].pattern );

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
       * @param margin [int] <50> "Margin used when sizing (single side)"
       * @param maxHeight [int] <10000> "Maximum height of element modal"
       * @param maxWidth [int] <10000> "Maximum width of element modal"
       * @param minHeight [int] <100> "Minimum height of modal"
       * @param minWidth [int] <100> "Minimum width of modal"
       * @param mobile [boolean] <false> "Flag to force 'mobile' rendering"
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
        customClass    : "",
        fileTypes      : /\.(jpg|sjpg|jpeg|png|gif)$/i,
        fixed          : false,
        formatter      : formatCaption,
        infinite       : false,
        labels: {
          close            : "Close",
          count            : "of",
          next             : "Next",
          previous         : "Previous",
          captionClosed    : "View Caption",
          captionOpen      : "Close Caption",
          thumbnailsClosed : "View Thumbnails",
          thumbnailsOpen   : "Close Thumbnails"
        },
        margin         : 50,
        maxHeight      : 10000,
        maxWidth       : 10000,
        minHeight      : 100,
        minWidth       : 100,
        mobile         : false,
        retina         : false,
        requestKey     : "fs-lightbox",
        theme          : "fs-light",
        thumbnails     : false,
        top            : 0,
        videoFormatter : {
          "youtube": {
            pattern : /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,
            format  : formatYouTube
          },
          "vimeo": {
            pattern : /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,
            format  : formatVimeo
          }
        },
        videoRatio     : 0.5625,
        videoWidth     : 800,
        viewer         : true
      },

      classes: [
        "loading",
        "animating",
        "scaling",
        "zooming",
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
        open     : "open",
        close    : "close"
      },

      methods: {
        _setup        : setup,
        _construct    : construct,
        _destruct     : destruct,
        _resize       : resize,

        resize        : resizeLightbox
      },

      utilities: {
        _initialize    : initialize,

        close          : closeLightbox
      }
    }),

    // Localize References

    Namespace     = Plugin.namespace,
    Defaults      = Plugin.defaults,
    Classes       = Plugin.classes,
    RawClasses    = Classes.raw,
    Events        = Plugin.events,
    Functions     = Plugin.functions,
    Window        = Formstone.window,
    $Window       = Formstone.$window,
    $Body         = null,

    // Internal

    $Locks        = null,
    OnLoad        = false,
    OnLoaded      = false,

    // Singleton

    Instance      = null;

})

);

/*! formstone v1.3.3 [mediaquery.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
            var mq = window.matchMedia( "(" + MQStrings[j] + ": " + (Defaults[j][k] === Infinity ? 100000 : Defaults[j][k]) + Defaults.unit + ")" );
            mq.addListener( onStateChange );
            MQMatches[j][ Defaults[j][k] ] = mq;
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
        mq        : mq,
        active    : true,
        enter     : {},
        leave     : {}
      };

      Bindings[mqKey].mq.addListener(onBindingChange);
    }

    for (var i in data) {
      if (data.hasOwnProperty(i) && Bindings[mqKey].hasOwnProperty(i)) {
        Bindings[mqKey][i][key] = data[i];
      }
    }

    var binding    = Bindings[mqKey],
      matches    = mq.matches;

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
              check = (MQStrings[i].indexOf("width") > -1) ? Formstone.fallbackWidth : Formstone.fallbackHeight,
              isMax = i.indexOf("max") > -1;

            if (Formstone.support.nativeMatchMedia) {
              // Native
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
            } else {
              // Fallback
              if (isMax) {
                if (!State[i] && state > check) {
                  State[i] = state;
                }
              } else {
                if ( (!State[i] && State[i] !== 0) || (state > State[i] && state < check) ) {
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

    $Window.trigger(Events.mqChange, [ State ]);
  }

  /**
   * @method private
   * @name onBindingChange
   * @description Handles a binding's media query change.
   */

  function onBindingChange(mq) {
    var mqkey      = createKey(mq.media),
      binding    = Bindings[mqkey],
      matches    = mq.matches,
      event      = matches ? Events.enter : Events.leave;

    if (binding && (binding.active || (!binding.active && matches) ) ) {
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
    return text.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '').replace(/^\s+|\s+$/g,'');
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
        _initialize    : initialize,
        state          : getState,
        bind           : bind,
        unbind         : unbind
      },

      /**
       * @events
       * @event mqchange.mediaquery "Change to a media query match; Triggered on window"
       */

      events: {
        mqChange    : "mqchange"
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
      minWidth     : [ 0 ],
      maxWidth     : [ Infinity ],
      minHeight    : [ 0 ],
      maxHeight    : [ Infinity ],
      unit         : "px"
    },

    // Raw events for switch
    Events = $.extend(Plugin.events, {
      enter       : "enter",
      leave       : "leave"
    }),

    // Localize References

    $Window        = Formstone.$window,
    Window         = $Window[0],

    Functions      = Plugin.functions,

    // Internal

    State          = null,
    Bindings       = [],
    MQMatches      = {},
    MQStrings      = {
      minWidth:     "min-width",
      maxWidth:     "max-width",
      minHeight:    "min-height",
      maxHeight:    "max-height"
    };

})

);
/*! formstone v1.3.3 [pagination.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
    html += '<select class="' + RawClasses.select + '" tabindex="-1" aria-hidden="true"></select>';
    html += '</div>';

    data.thisClasses = [RawClasses.base, data.theme, data.customClass];

    this.addClass(data.thisClasses.join(" "))
      .wrapInner('<div class="' + RawClasses.pages + '" aria-label="pagination"></div>')
      .prepend(html);

    data.$controls  = this.find(Classes.control);
    data.$pages     = this.find(Classes.pages);
    data.$items     = data.$pages.children().addClass(RawClasses.page);
    data.$position  = this.find(Classes.position);
    data.$select    = this.find(Classes.select);
    data.index      = -1;

    data.total = data.$items.length - 1;

    var index = data.$items.index(data.$items.filter("[data-" + Plugin.namespace + "-active]"));
    if (!index) {
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
    data.$items.removeClass( [RawClasses.page, RawClasses.active, RawClasses.visible, RawClasses.first, RawClasses.last].join(" ") )
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
      index = data.index + ( $(e.currentTarget).hasClass(RawClasses.control_previous) ? -1 : 1 );

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
    var data    = e.data,
      $target = $(e.currentTarget),
      index   = data.$items.index($target);

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
      data.$el.trigger(Events.update, [ data.index ]);
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
      html += '>Page ' + (i+1) + '</option>';
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
       * @param labels.count [string] <'of'> "Gallery count separator text"
       * @param labels.next [string] <'Next'> "Gallery control text"
       * @param labels.previous [string] <'Previous'> "Gallery control text"
       * @param maxWidth [string] <'980px'> "Width at which to auto-disable plugin"
       * @param theme [string] <"fs-light"> "Theme class name"
       * @param visible [int] <2> "Visible pages before and after current page"
       */

      defaults: {
        ajax            : false,
        customClass     : "",
        labels: {
          count       : "of",
          next        : "Next",
          previous    : "Previous"
        },
        maxWidth        : "740px",
        theme           : "fs-light",
        visible         : 2
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
        update    : "update"
      },

      methods: {
        _construct    : construct,
        _destruct     : destruct
      }
    }),

    // Localize References

    Classes       = Plugin.classes,
    RawClasses    = Classes.raw,
    Events        = Plugin.events,
    Functions     = Plugin.functions;

})

);

/*! formstone v1.3.3 [navigation.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
    data.handleGuid   = RawClasses.handle + data.guid;

    data.isToggle     = (data.type === "toggle");
    data.open         = false;

    if (data.isToggle) {
      data.gravity  = "";
    }

    var baseClass     = RawClasses.base,
      typeClass     = [baseClass, data.type].join("-"),
      gravityClass  = data.gravity ? [typeClass, data.gravity].join("-") : "",
      classGroup    = [data.rawGuid, data.theme, data.customClass].join(" ");

    data.handle       = this.data(Namespace + "-handle");
    data.content      = this.data(Namespace + "-content");

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

    data.$nav        = this.addClass(data.thisClasses.join(" ")).attr("role", "navigation");
    data.$handle     = $(data.handle).addClass(data.handleClasses);
    data.$content    = $(data.content).addClass(data.contentClasses);
    data.$animate    = $().add(data.$nav).add(data.$content);

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
              target  : data.dotGuid,
              enabled : Classes.enabled,
              active  : Classes.open,
              raw: {
                target  : data.rawGuid,
                enabled : RawClasses.enabled,
                active  : RawClasses.open
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
    data.$content.removeClass( [data.contentClasses, data.contentClassesOpen].join(" ") )
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
        customClass    : "",
        gravity        : "left",
        label          : true,
        labels: {
          closed     : "Menu",
          open       : "Close"
        },
        maxWidth       : "980px",
        theme          : "fs-light",
        type           : "toggle"
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
        open     : "open",
        close    : "close"
      },

      methods: {
        _setup        : setup,
        _construct    : construct,
        _destruct     : destruct,

        // Public Methods

        open          : open,
        close         : close,
        enable        : enable,
        disable       : disable
      }
    }),

    // Localize References

    Namespace     = Plugin.namespace,
    Classes       = Plugin.classes,
    RawClasses    = Classes.raw,
    Events        = Plugin.events,
    Functions     = Plugin.functions,
    // $Body         = null,

    // Internal

    $Locks        = null;

})

);

/*! formstone v1.3.3 [number.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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

    data.min  = (min || min === 0) ? min : false;
    data.max  = (max || max === 0) ? max : false;
    data.step = parseFloat(this.attr("step")) || 1;
    data.timer        = null;
    data.digits       = significantDigits(data.step);
    data.disabled     = this.is(":disabled") || this.is("[readonly]");

    var html = "";
    html += '<button type="button" class="' + [RawClasses.arrow, RawClasses.up].join(" ") + '" aria-hidden="true" tabindex="-1">'   + data.labels.up + '</button>';
    html += '<button type="button" class="' + [RawClasses.arrow, RawClasses.down].join(" ") + '" aria-hidden="true" tabindex="-1">' + data.labels.down + '</button>';

    // Modify DOM
    this.wrap('<div class="' + [RawClasses.base, data.theme, data.customClass, (data.disabled) ? RawClasses.disabled : ""].join(" ") + '"></div>')
      .after(html);

    // Store data
    data.$container    = this.parent(Classes.base);
    data.$arrows       = data.$container.find(Classes.arrow);

    // Bind events
    this.on(Events.focus, data, onFocus)
      .on(Events.blur, data, onBlur)
      .on(Events.keyPress, data, onKeyup);

    data.$container.on( [Events.touchStart, Events.mouseDown].join(" "), Classes.arrow, data, onPointerDown);

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

    data.min  = (min || min === 0) ? min : false;
    data.max  = (max || max === 0) ? max : false;
    data.step = parseFloat(data.$el.attr("step")) || 1;
    data.timer        = null;
    data.digits       = significantDigits(data.step);
    data.disabled     = data.$el.is(":disabled") || data.$el.is("[readonly]");

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

        data.timer = Functions.startTimer(data.timer, 125, function() {
          step(data, change, false);
        }, true);

      });

      step(data, change);

      $Body.on( [Events.touchEnd, Events.mouseUp].join(" "), data, onPointerUp);
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

    if ($.type(oValue) === "undefined" || isNaN(oValue)) {
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

    var diff = (value - data.min) % data.step;
    if (diff !== 0) {
      value -= diff;
    }

    if (data.min !== false && value < data.min) {
      value = data.min;
    }
    if (data.max !== false && value > data.max) {
      value = data.max;
    }

    if (value !== oValue) {
      value = round(value, data.digits);

      data.$el.val(value)
          .trigger(Events.raw.change, [ true ]);
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
        customClass    : "",
        labels : {
          up         : "Up",
          down       : "Down"
        },
        theme          : "fs-light"
      },

      classes: [
        "arrow",
        "up",
        "down",
        "disabled",
        "focus"
      ],

      methods: {
        _setup        : setup,
        _construct    : construct,
        _destruct     : destruct,

        // Public Methods

        enable        : enable,
        disable       : disable,
        update        : updateInstance
      }
    }),

    // Localize References

    Classes       = Plugin.classes,
    RawClasses    = Classes.raw,
    Events        = Plugin.events,
    Functions     = Plugin.functions,

    $Body    = null;

})

);

/*! formstone v1.3.3 [range.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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

    data.min       = parseFloat(this.attr("min"))  || 0;
    data.max       = parseFloat(this.attr("max"))  || 100;
    data.step      = parseFloat(this.attr("step")) || 1;
    data.digits    = data.step.toString().length - data.step.toString().indexOf(".");
    data.value     = parseFloat(this.val()) || (data.min + ((data.max - data.min) / 2));

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
      (data.labels)   ? RawClasses.labels   : "",
      (data.disabled) ? RawClasses.disabled : ""
    ];

    this.addClass(RawClasses.element)
      .wrap('<div class="' + baseClasses.join(" ") + '"></div>')
      .after(html);

    data.$container = this.parents(Classes.base);
    data.$track     = data.$container.find(Classes.track);
    data.$fill      = data.$container.find(Classes.fill);
    data.$handle    = data.$container.find(Classes.handle);
    data.$output    = data.$container.find(Classes.output);

    if (data.labels) {
      var labelMax = '<span class="' + [RawClasses.label, RawClasses.label_max].join(" ") + '">' + data.formatter.call(this, (data.labels.max) ? data.labels.max : data.max) + '</span>',
        labelMin = '<span class="' + [RawClasses.label, RawClasses.label_min].join(" ") + '">' + data.formatter.call(this, (data.labels.max) ? data.labels.min : data.min) + '</span>';

      data.$container.prepend((data.vertical) ? labelMax : labelMin)
               .append( (data.vertical) ? labelMin : labelMax);
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
    data.min       = parseFloat(data.$el.attr("min"))  || 0;
    data.max       = parseFloat(data.$el.attr("max"))  || 100;
    data.step      = parseFloat(data.$el.attr("step")) || 1;
    data.digits    = data.step.toString().length - data.step.toString().indexOf(".");
    data.value     = parseFloat(this.val()) || (data.min + ((data.max - data.min) / 2));

    if (data.labels) {
      data.$labels.filter(Classes.label_max).html( data.formatter.call(this, (data.labels.max) ? data.labels.max : data.max) );
      data.$labels.filter(Classes.label_min).html( data.formatter.call(this, (data.labels.max) ? data.labels.min : data.min) );
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
      data.trackHeight  = data.$track.outerHeight();
      data.handleHeight = data.$handle.outerHeight();
      data.increment    = data.trackHeight / data.stepCount;
    } else {
      data.trackWidth  = data.$track.outerWidth();
      data.handleWidth = data.$handle.outerWidth();
      data.increment   = data.trackWidth / data.stepCount;
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
          .trigger(Events.raw.change, [ true ]);

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
        customClass    : "",
        fill           : false,
        formatter      : false,
        labels: {
          max        : false,
          min        : false
        },
        theme          : "fs-light",
        vertical       : false
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
        _construct    : construct,
        _destruct     : destruct,
        _resize       : resize,

        // Public Methods

        enable        : enable,
        disable       : disable,
        resize        : resizeInstance,
        update        : updateInstance
      }
    }),

    // Localize References

    Classes       = Plugin.classes,
    RawClasses    = Classes.raw,
    Events        = Plugin.events,
    Functions     = Plugin.functions,

    $Instances    = [];

})

);

/*! formstone v1.3.3 [scrollbar.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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

    data.paddingRight     = parseInt(this.css("padding-right"), 10);
    data.paddingBottom    = parseInt(this.css("padding-bottom"), 10);
    data.thisClasses      = [RawClasses.base, data.theme, data.customClass, (data.horizontal ? RawClasses.horizontal : "")];

    this.addClass(data.thisClasses.join(" "))
      .wrapInner('<div class="' + RawClasses.content + '" tabindex="0"></div>')
      .prepend(html);

    data.$content    = this.find(Classes.content);
    data.$bar        = this.find(Classes.bar);
    data.$track      = this.find(Classes.track);
    data.$handle     = this.find(Classes.handle);

    data.trackMargin = parseInt(data.trackMargin, 10);

    // Events

    data.$content.on(Events.scroll, data, onScroll);

    if (data.mouseWheel) {
      data.$content.on("wheel" + Events.namespace, data, onMouseWheel);
    }

    data.$track.fsTouch({
      axis    : (data.horizontal) ? "x" : "y",
      pan     : true
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

    if ($.type(position) !== "number") {
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

    styles[ (data.horizontal ? "scrollLeft" : "scrollTop") ] = position;

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

  function resizeInstance(data)  {
    data.$el.addClass(RawClasses.isSetup);

    var barStyles = {},
      trackStyles = {},
      handleStyles = {},
      handlePosition = 0,
      active = true;

    if (data.horizontal) {
      // Horizontal
      data.barHeight       = data.$content[0].offsetHeight - data.$content[0].clientHeight;
      data.frameWidth      = data.$content.outerWidth();
      data.trackWidth      = data.frameWidth - (data.trackMargin * 2);
      data.scrollWidth     = data.$content[0].scrollWidth;
      data.ratio           = data.trackWidth / data.scrollWidth;
      data.trackRatio      = data.trackWidth / data.scrollWidth;
      data.handleWidth     = (data.handleSize > 0) ? data.handleSize : data.trackWidth * data.trackRatio;
      data.scrollRatio     = (data.scrollWidth - data.frameWidth) / (data.trackWidth - data.handleWidth);
      data.handleBounds    = {
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
      data : data
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
      var scrollLeft   = data.$content[0].scrollLeft,
        scrollWidth  = data.$content[0].scrollWidth,
        width        = data.$content.outerWidth();

      delta = e.originalEvent.deltaX * ( (fromTrack === true) ? -1 : 1 );

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
      var scrollTop    = data.$content[0].scrollTop,
        scrollHeight = data.$content[0].scrollHeight,
        height       = data.$content.outerHeight();

      delta = e.originalEvent.deltaY * ( (fromTrack === true) ? -1 : 1 );

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
    var data      = e.data,
      offset    = data.$track.offset(),
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
        customClass    : "",
        duration       : 0,
        handleSize     : 0,
        horizontal     : false,
        mouseWheel     : true,
        theme          : "fs-light",
        trackMargin    : 0
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
        _setup        : setup,
        _construct    : construct,
        _destruct     : destruct,
        _resize       : resize,

        // Public Methods
        scroll        : scroll,
        resize        : resizeInstance
      }
    }),

    // Localize References

    Classes        = Plugin.classes,
    RawClasses     = Classes.raw,
    Events         = Plugin.events,
    Functions      = Plugin.functions,

    $Body,
    $Window        = Formstone.$window,
    $Instances     = [];

})

);

/*! formstone v1.3.3 [sticky.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
    data.stuck    = false;
    data.passed   = true;
    data.$clone   = data.$el.clone();

    data.container  = data.$el.data("sticky-container");
    data.$container = $(data.container);

    data.$el.addClass(RawClasses.base);
    data.$clone.removeClass(RawClasses.element)
           .addClass(RawClasses.clone);
    data.$container.addClass(RawClasses.container);

    data.$stickys = $().add(data.$el).add(data.$clone);

    data.$el.after(data.$clone);
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
      width:  '',
      top:    '',
      bottom: '',
      marginBottom: ''
    }).removeClass(RawClasses.base);

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

  /**
   * @method private
   * @name resizeInstance
   * @description Handle window resize event
   * @param data [object] "Instance data"
   */

  function resizeInstance(data) {
    cacheProps(data);

    if (data.$container.length) {
      var containerPos = data.$container.position();

            data.min = containerPos.top + data.containerMargin - data.margin;
      data.max = data.min + data.$container.outerHeight(false) - data.height;
    } else {
            var $el;

            if (data.stuck) {
                $el = data.$clone;
            } else {
                $el = data.$el;
            }

            var elPos = $el.position();

            data.min = elPos.top;
      data.max = false;
    }

        checkInstance(data);
  }

  function cacheProps(data) {
        var $el;

        if (data.stuck) {
            $el = data.$clone;
        } else {
            $el = data.$el;
        }

    data.margin = parseInt( $el.css("margin-top"), 10);

    if (data.$container.length) {
       data.containerMargin = parseInt( data.$container.css("margin-top"), 10);
    } else {
      data.containerMargin = 0;
    }

    data.height = $el.outerHeight();
    data.width  = $el.outerWidth();
  }

  /**
   * @method private
   * @name checkInstance
   * @description Handle window scroll event
   * @param data [object] "Instance data"
   */

  function checkInstance(data) {
    var check = (ScrollTop + data.offset);

    if ( check >= data.min ) {
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
        width:  data.width,
        top:    top,
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
        width:  '',
        top:    '',
        bottom: '',
        marginBottom: ''
      });
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
       * @param offset [int] <0> "Element offset for activating sticky position"
       */

      defaults: {
        offset    : 0,
      },

      classes: [
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
        passed     : "passed",
        stuck      : "stuck",
        unstuck    : "unstuck"
      },

      methods: {
        _construct    : construct,
        _postConstruct: postConstruct,
        _destruct     : destruct,
        _resize       : resize,
        _raf          : raf
      }
    }),

    // Localize References

    Namespace     = Plugin.namespace,
    Classes       = Plugin.classes,
    RawClasses    = Classes.raw,
        Events        = Plugin.events,
    Functions     = Plugin.functions,

    Window        = Formstone.window,
    $Window       = Formstone.$window,
    $Body,
    ScrollTop     = 0,
    OldScrollTop  = 0,
    $Instances    = [];

})

);

/*! formstone v1.3.3 [swap.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
    data.enabled    = false;
    data.active     = false;

    data.classes    = $.extend(true, {}, Classes, data.classes);

    data.target     = this.data(Namespace + "-target");
    data.$target    = $(data.target).addClass(data.classes.raw.target);

    data.mq         = "(max-width:" + (data.maxWidth === Infinity ? "100000px" : data.maxWidth) + ")";

    // live query for linked to avoid missing new elements
    var linked      = this.data(Namespace + "-linked");
    data.linked     = linked ? '[data-' + Namespace + '-linked="' + linked + '"]' : false;

    // live query for the group to avoid missing new elements
    var group       = this.data(Namespace + "-group");
    data.group      = group ? '[data-' + Namespace + '-group="' + group + '"]' : false;

    data.$swaps     = $().add(this).add(data.$target);

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

    data.$swaps.removeClass( [data.classes.raw.enabled, data.classes.raw.active].join(" ") )
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

      data.$swaps.removeClass( [data.classes.raw.enabled, data.classes.raw.active].join(" ") );

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
        collapse       : true,
        maxWidth       : Infinity
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
        activate      : "activate",
        deactivate    : "deactivate",
        enable        : "enable",
        disable       : "disable"
      },

      methods: {
        _construct    : construct,
        _postConstruct: postConstruct,
        _destruct     : destruct,

        // Public Methods

        activate      : activate,
        deactivate    : deactivate,
        enable        : enable,
        disable       : disable
      }
    }),

    // Localize References

    Namespace     = Plugin.namespace,
    Classes       = Plugin.classes,
    Events        = Plugin.events,
    Functions     = Plugin.functions;

})

);

/*! formstone v1.3.3 [tabs.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
    data.mq           = "(max-width:" + (data.mobileMaxWidth === Infinity ? "100000px" : data.mobileMaxWidth) + ")";

    data.content      = this.attr("href");
    data.group        = this.data(Namespace + "-group");

    data.elementClasses      = [RawClasses.tab, data.rawGuid, data.theme, data.customClass];
    data.mobileTabClasses    = [RawClasses.tab, RawClasses.tab_mobile, data.rawGuid, data.theme, data.customClass];
    data.contentClasses      = [RawClasses.content, data.rawGuid, data.theme, data.customClass];

    // DOM

    data.$mobileTab    = $('<button type="button" class="' + data.mobileTabClasses.join(" ") + '" aria-hidden="true">' + this.text() + '</button>');
    data.$content      = $(data.content).addClass( data.contentClasses.join(" ") );

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

    data.contentId   = data.$content.attr("id");
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
      hashGroup  = false;

    if (hash.length) {
        hashActive = (this.filter("[href*='" + hash + "']").length > 0);
        hashGroup  = data.group && ($('[data-' + Namespace + '-group="' + data.group + '"]').filter("[href*='" + hash + "']").length > 0);
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
          target  : data.dotGuid,
          enabled : Classes.enabled,
          active  : Classes.active,
          raw: {
            target  : data.rawGuid,
            enabled : RawClasses.enabled,
            active  : RawClasses.active
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
           .removeClass( data.contentClasses.join(" ") );

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
      .removeClass( data.elementClasses.join(" ") )
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
          .trigger(Events.update, [ index ]);
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
        customClass       : "",
        maxWidth          : Infinity,
        mobileMaxWidth    : "740px",
        theme             : "fs-light"
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
        update   : "update"
      },

      methods: {
        _construct    : construct,
        _postConstruct: postConstruct,
        _destruct     : destruct,

        // Public Methods

        activate      : activate,
        enable        : enable,
        disable       : disable
      }
    }),

    // Localize References

    Namespace     = Plugin.namespace,
    Classes       = Plugin.classes,
    RawClasses    = Classes.raw,
    Events        = Plugin.events,
    Functions     = Plugin.functions;

})

);

/*! formstone v1.3.3 [tooltip.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
    data.top  = e.pageY;

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
      $tooltip    : $(html),
      $el         : data.$el
    };

    Formstone.$body.append(Instance.$tooltip);

    var $content = Instance.$tooltip.find(Classes.content),
      $caret   = Instance.$tooltip.find(Classes.caret),

      offset = data.$el.offset(),
      height = data.$el.outerHeight(),
      width  = data.$el.outerWidth(),

      tooltipLeft     = 0,
      tooltipTop      = 0,
      contentLeft     = 0,
      contentTop      = 0,
      caretLeft       = false,
      caretTop        = false,

      caretHeight     = $caret.outerHeight(true),
      caretWidth      = $caret.outerWidth(true),
      contentHeight   = $content.outerHeight(true),
      contentWidth    = $content.outerWidth(true);

    // position content
    if (data.direction === "right" || data.direction === "left") {
      caretTop   = (contentHeight - caretHeight) / 2;
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
      top:  contentTop,
      left: contentLeft
    });

    $caret.css({
      top:  caretTop,
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
        left : left,
        top  : top
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
      Instance.$el.off( [Events.mouseMove, Events.mouseLeave].join(" ") );

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
        customClass    : "",
        delay          : 0,
        direction      : "top",
        follow         : false,
        formatter      : format,
        margin         : 15,
        match          : false,
        theme          : "fs-light"
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
        _construct    : construct,
        _destruct     : destruct
      }
    }),

    // Localize References

    Classes       = Plugin.classes,
    RawClasses    = Classes.raw,
    Events        = Plugin.events,
    Functions     = Plugin.functions,

    // Singleton

    Instance     = null;

})

);

/*! formstone v1.3.3 [touch.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
    data.touches     = [];
    data.touching    = false;

    this.on( Events.dragStart, Functions.killEvent );

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

    var data    = e.data,
      oe      = e.originalEvent;

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
          data.touches[i].pageX    = oe.pageX;
          data.touches[i].pageY    = oe.pageY;
        }
      }
      if (!activeTouch) {
        data.touches.push({
          id       : oe.pointerId,
          pageX    : oe.pageX,
          pageY    : oe.pageY
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
    var data     = e.data,
      touch    = ($.type(data.touches) !== "undefined" && data.touches.length) ? data.touches[0] : null;

    if (touch) {
      data.$el.off(Events.mouseDown);
    }

    if (!data.touching) {
      data.startE      = e.originalEvent;
      data.startX      = (touch) ? touch.pageX : e.pageX;
      data.startY      = (touch) ? touch.pageY : e.pageY;
      data.startT      = new Date().getTime();
      data.scaleD      = 1;
      data.passed      = false;
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
        startX     : midpoint(t[0].pageX, t[1].pageX),
        startY     : midpoint(t[0].pageY, t[1].pageY),
        startD     : pythagorus((t[1].pageX - t[0].pageX), (t[1].pageY - t[0].pageY))
      };

      newE.pageX    = data.startX   = data.pinch.startX;
      newE.pageY    = data.startY   = data.pinch.startY;
    }

    // Only bind at first touch
    if (!data.touching) {
      data.touching = true;

      if (data.pan && !touch) {
        $Window.on(Events.mouseMove, data, onPointerMove)
             .on(Events.mouseUp, data, onPointerEnd);
      }

      if (Formstone.support.pointer) {
        $Window.on( [
          Events.pointerMove,
          Events.pointerUp,
          Events.pointerCancel
        ].join(" ") , data, onTouch);
      } else {
        $Window.on( [
          Events.touchMove,
          Events.touchEnd,
          Events.touchCancel
        ].join(" ") , data, onTouch);
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
    var data      = e.data,
      touch     = ($.type(data.touches) !== "undefined" && data.touches.length) ? data.touches[0] : null,
      newX      = (touch) ? touch.pageX : e.pageX,
      newY      = (touch) ? touch.pageY : e.pageY,
      deltaX    = newX - data.startX,
      deltaY    = newY - data.startY,
      dirX      = (deltaX > 0) ? "right" : "left",
      dirY      = (deltaY > 0) ? "down"  : "up",
      movedX    = Math.abs(deltaX) > TouchThreshold,
      movedY    = Math.abs(deltaY) > TouchThreshold;

    if (!data.passed && data.axis && ((data.axisX && movedY) || (data.axisY && movedX)) ) {
      // if axis and moved in opposite direction
      onPointerEnd(e);
    } else {
      if (!data.passed && (!data.axis || (data.axis && (data.axisX && movedX) || (data.axisY && movedY)))) {
        // if has axis and moved in same direction
        data.passed = true;
      }

      if (data.passed) {
        Functions.killEvent(e);
        Functions.killEvent(data.startE);
      }

      // Pan / Scale

      var fire    = true,
        newE    = buildEvent(data.scale ? Events.scale : Events.pan, e, newX, newY, data.scaleD, deltaX, deltaY, dirX, dirY);

      if (data.scale) {
        if (data.touches && data.touches.length >= 2) {
          var t = data.touches;

          data.pinch.endX     = midpoint(t[0].pageX, t[1].pageX);
          data.pinch.endY     = midpoint(t[0].pageY, t[1].pageY);
          data.pinch.endD     = pythagorus((t[1].pageX - t[0].pageX), (t[1].pageY - t[0].pageY));
          data.scaleD    = (data.pinch.endD / data.pinch.startD);
          newE.pageX     = data.pinch.endX;
          newE.pageY     = data.pinch.endY;
          newE.scale     = data.scaleD;
          newE.deltaX    = data.pinch.endX - data.pinch.startX;
          newE.deltaY    = data.pinch.endY - data.pinch.startY;
        } else if (!data.pan) {
          fire = false;
        }
      }

      if (fire) {
        data.$el.trigger( newE );
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

    var touch     = ($.type(data.touches) !== "undefined" && data.touches.length) ? data.touches[0] : null,
      newX      = (touch) ? touch.pageX : e.pageX,
      newY      = (touch) ? touch.pageY : e.pageY,
      deltaX    = newX - data.startX,
      deltaY    = newY - data.startY,
      endT      = new Date().getTime(),
      eType     = data.scale ? Events.scaleEnd : Events.panEnd,
      dirX      = (deltaX > 0) ? "right" : "left",
      dirY      = (deltaY > 0) ? "down"  : "up",
      movedX    = Math.abs(deltaX) > 1,
      movedY    = Math.abs(deltaY) > 1;

    // Swipe

    if (data.swipe && Math.abs(deltaX) > TouchThreshold && (endT - data.startT) < TouchTime) {
      eType = Events.swipe;
    }

    // Kill clicks to internal links

    if ( (data.axis && ((data.axisX && movedY) || (data.axisY && movedX))) || (movedX || movedY) ) {
      data.$links = data.$el.find("a");

      for (var i = 0, count = data.$links.length; i < count; i++) {
        bindLink(data.$links.eq(i), data);
      }
    }

    var newE = buildEvent(eType, e, newX, newY, data.scaleD, deltaX, deltaY, dirX, dirY);

    $Window.off( [
      Events.touchMove,
      Events.touchEnd,
      Events.touchCancel,
      Events.mouseMove,
      Events.mouseUp,
      Events.pointerMove,
      Events.pointerUp,
      Events.pointerCancel
    ].join(" ") );

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
      originalEvent : oe,
      bubbles       : true,
      pageX         : px,
      pageY         : py,
      scale         : s,
      deltaX        : dx,
      deltaY        : dy,
      directionX    : dirx,
      directionY    : diry
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
       */

      defaults : {
        axis     : false,
        pan      : false,
        scale    : false,
        swipe    : false
      },

      methods : {
        _construct    : construct,
        _destruct     : destruct
      },

      events: {
        pointerDown    : legacyPointer ? "MSPointerDown"   : "pointerdown",
        pointerUp      : legacyPointer ? "MSPointerUp"     : "pointerup",
        pointerMove    : legacyPointer ? "MSPointerMove"   : "pointermove",
        pointerCancel  : legacyPointer ? "MSPointerCancel" : "pointercancel"
      }
    }),

    // Localize References

    Events        = Plugin.events,
    Functions     = Plugin.functions,

    // Local

    $Window           = Formstone.$window,
    TouchThreshold    = 10,
    TouchTime         = 50;

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

    Events.pan           = "pan";
    Events.panStart      = "panstart";
    Events.panEnd        = "panend";
    Events.scale         = "scale";
    Events.scaleStart    = "scalestart";
    Events.scaleEnd      = "scaleend";
    Events.swipe         = "swipe";

})

);

/*! formstone v1.3.3 [transition.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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

      data.$target     = this.find(data.target);
      data.$check      = data.target ? data.$target : this;
      data.callback    = callback;
      data.styles      = getStyles(data.$check);
      data.timer       = null;

      var duration = data.$check.css( Formstone.transition + "-duration" ),
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

    var data           = e.data,
      oe             = e.originalEvent,
      $target        = data.target ? data.$target : data.$el;

    // Check property and target
    if ( (!data.property || oe.propertyName === data.property) && $(oe.target).is($target) ) {
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
        if (computed[prop]) { // ie8...
          styles[prop] = computed[prop];
        }
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
    if ($.type(a) !== $.type(b)) {
      return false;
    }

    for (var i in a) {

      if (a.hasOwnProperty(i)) {
        if ( !(a.hasOwnProperty(i) && b.hasOwnProperty(i) && a[i] === b[i]) ) {
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
        always      : false,
        property    : null,
        target      : null
      },

      methods : {
        _construct    : construct,
        _destruct     : destruct,
        resolve       : resolve
      }
    }),

    // Localize References

    Events       = Plugin.events,
    Functions    = Plugin.functions,

    Window       = Formstone.window;

})

);

/*! formstone v1.3.3 [upload.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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

      data.$input       = this.find(Classes.input);
      data.queue        = [];
      data.total        = 0;
      data.uploaded     = 0;
      data.uploading    = false;
      data.disabled     = true;
      data.aborting     = false;

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
   * @description Cancels all active uploads.
   * @param data [object] "Instance data"
   * @param index [int] "File index"
   */

  /**
   * @method
   * @name abort
   * @description Cancels all active uploads.
   * @example $(".target").upload("abort");
   */

  function abortUpload(data, index) {
    var file;

    data.aborting = true;

    for (var i in data.queue) {
      if (data.queue.hasOwnProperty(i)) {
        file = data.queue[i];

        if ($.type(index) === "undefined" || (index >= 0 && file.index === index)) {
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
    data.$el.trigger(Events.fileError, [ file, error ]);

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
    data.$el.trigger(Events.chunkError, [ file, error ]);

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
          index       : data.total++,
          file        : files[i],
          name        : files[i].name,
          size        : files[i].size,
          started     : false,
          complete    : false,
          error       : false,
          transfer    : null
        };

        newFiles.push(file);
        data.queue.push(file);
      }

      data.$el.trigger(Events.queued, [ newFiles ]);

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

      data.$el.trigger(Events.start, [ data.queue ]);
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
      file.totalChunks = Math.ceil( file.size / file.chunkSize );
      file.currentChunk = 0;

      data.$el.trigger(Events.fileStart, [ file ]);

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
          url         : data.action,
          data        : formData,
          dataType    : data.dataType,
          type        : "POST",
          contentType : false,
          processData : false,
          cache       : false,
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

                data.$el.trigger(Events.fileProgress, [ file, percent ]);
              }, false);
            }

            return $xhr;
          },
          beforeSend: function(jqXHR, settings) {
            data.$el.trigger(Events.fileStart, [ file, settings, jqXHR ]);
          },
          success: function(response, status, jqXHR) {
            file.complete = true;

            data.uploaded++;
            data.$el.trigger(Events.fileComplete, [ file, response, status, jqXHR ]);

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
      chunkEnd   = (chunkStart + file.chunkSize);

    if (chunkEnd > file.size) {
      chunkEnd = file.size;
    }

    var newChunk = file.file[ BlobSliceMethod ]( chunkStart, chunkEnd ),
      formData = new FormData();

    formData.append(data.postKey, newChunk, file.file.name);
    formData.append("chunks", file.totalChunks);
    formData.append("chunk", file.currentChunk);

    formData = setFormData(data, formData, file);

    if (formData === false) {
      abortFile(data, file, "abort");
    } else {
      file.chunkTransfer = $.ajax({
        url         : data.action,
        data        : formData,
        dataType    : data.dataType,
        type        : "POST",
        contentType : false,
        processData : false,
        cache       : false,
        beforeSend: function(jqXHR, settings) {
          data.$el.trigger(Events.chunkStart, [ file, settings, jqXHR ]);
        },
        success: function(response, status, jqXHR) {
          file.currentChunk++;

          data.$el.trigger(Events.chunkComplete, [ file ]);

          var percent = Math.ceil((file.currentChunk / file.totalChunks) * 100);
          data.$el.trigger(Events.fileProgress, [ file, percent, status, jqXHR ]);

          if (file.currentChunk < file.totalChunks) {
            uploadChunk(data, file);
          } else {
            file.complete = true;
            data.$el.trigger(Events.fileComplete, [ file, response, status, jqXHR ]);

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
        accept         : false,
        action         : "",
        autoUpload     : true,
        beforeSend     : function(formdata) { return formdata; },
        chunked        : false,
        chunkSize      : 100,
        customClass    : "",
        dataType       : "html",
        label          : "Drag and drop files or click to select",
        leave          : "You have uploads pending, are you sure you want to leave this page?",
        maxConcurrent  : 2,
        // maxQueue       : 2,
        maxFiles       : false,
        maxSize        : 5242880, // 5 mb
        multiple       : true,
        postData       : {},
        postKey        : "file",
        theme          : "fs-light"
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
        _setup        : setup,
        _construct    : construct,
        _destruct     : destruct,

        disable       : disableUpload,
        enable        : enableUpload,
        abort         : abortUpload,
        start         : startUpload
      }
    }),

    // Localize References

    Classes       = Plugin.classes,
    RawClasses    = Classes.raw,
    Events        = Plugin.events,
    Functions     = Plugin.functions,

    Window        = Formstone.window,
    $Window       = Formstone.$window,

    // Internal
    BlobSliceMethod = false;

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
     * @event start "Uploads starting"
     * @event queued "Files are queued for upload"
     */

    Events.chunkComplete   = "chunkcomplete";
    Events.chunkError      = "chunkerror";
    Events.chunkStart      = "chunkstart";
    Events.complete        = "complete";
    Events.fileComplete    = "filecomplete";
    Events.fileDragEnter   = "filedragenter";
    Events.fileDragLeave   = "filedragleave";
    Events.fileDragOver    = "filedragover";
    Events.fileError       = "fileerror";
    Events.fileProgress    = "fileprogress";
    Events.fileStart       = "filestart";
    Events.start           = "start";
    Events.queued          = "queued";

})

);

/*! formstone v1.3.3 [viewer.js] 2017-08-18 | GPL-3.0 License | formstone.it */
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
    $Instances     = $(Classes.base);
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
      controlPrevClasses    = [RawClasses.control, RawClasses.control_previous].join(" "),
      controlNextClasses    = [RawClasses.control, RawClasses.control_next].join(" "),
      controlZoomInClasses  = [RawClasses.control, RawClasses.control_zoom_in].join(" "),
      controlZoomOutClasses = [RawClasses.control, RawClasses.control_zoom_out].join(" ");

    data.thisClasses = [RawClasses.base, RawClasses.loading, data.customClass, data.theme];
    data.images      = [];
    data.source      = false;
    data.gallery     = false;
    data.tapTimer    = null;
    data.action      = false;
    data.isRendering = false;
    data.isZooming   = false;
    data.isAnimating = false;

    data.keyDownTime  = 1;

    data.$images    = this.find("img").addClass(RawClasses.source);
    data.index      = 0;
    data.total      = data.$images.length - 1;

    // Check custom controls
    data.customControls = ($.type(data.controls) === "object" && data.controls.zoom_in && data.controls.zoom_out);

    if (data.$images.length > 1) {
      data.gallery = true;
      data.thisClasses.push(RawClasses.gallery);

      // Requie zoom for gallery custom controls
      if (data.customControls && (!data.controls.previous || !data.controls.next) ) {
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
      html += '<button type="button" class="' + controlPrevClasses+ '">' + data.labels.previous + '</button>';
      html += '<button type="button" class="' + controlZoomOutClasses + '">' + data.labels.zoom_out + '</button>';
      html += '<button type="button" class="' + controlZoomInClasses + '">' + data.labels.zoom_in + '</button>';
      html += '<button type="button" class="' + controlNextClasses + '">' + data.labels.next + '</button>';
      html += '</div>'; // controls
    }

    this.addClass(data.thisClasses.join(" "))
      .prepend(html);

    data.$wrapper      = this.find(Classes.wrapper);
    data.$viewport     = this.find(Classes.viewport);

    if (data.customControls) {
      data.$controls           = $(data.controls.container).addClass( [RawClasses.controls, RawClasses.controls_custom].join(" ") );
      data.$controlPrevious    = $(data.controls.previous).addClass(controlPrevClasses);
      data.$controlNext        = $(data.controls.next).addClass(controlNextClasses);
      data.$controlZoomIn      = $(data.controls.zoom_in).addClass(controlZoomInClasses);
      data.$controlZoomOut     = $(data.controls.zoom_out).addClass(controlZoomOutClasses);
    } else {
      data.$controls           = this.find(Classes.controls);
      data.$controlPrevious    = this.find(Classes.control_previous);
      data.$controlNext        = this.find(Classes.control_next);
      data.$controlZoomIn      = this.find(Classes.control_zoom_in);
      data.$controlZoomOut     = this.find(Classes.control_zoom_out);
    }

    data.$controlItems = data.$controlPrevious.add(data.$controlNext);
    data.$controlZooms = data.$controlZoomIn.add(data.$controlZoomOut);

    cacheInstances();

    data.$controlItems.on(Events.click, data, advanceGallery);
    data.$controlZooms.on( [Events.touchStart, Events.mouseDown].join(" "), data, onZoomStart)
              .on( [Events.touchEnd, Events.mouseUp].join(" "), data, onClearZoom);

    // if (data.lazy) {
    //  checkScrollPosition(data);
    // } else {
      loadImage(data, data.images[ data.index ], true);
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
      data.$controls.removeClass( [RawClasses.controls, RawClasses.controls_custom].join(" ") );
      data.$controlItems.off(Events.click).removeClass( [RawClasses.control, RawClasses.control_previous, RawClasses.control_next].join(" ") );
      data.$controlZooms.off( [Events.touchStart, Events.mouseDown].join(" ") )
                .off( [Events.touchStart, Events.mouseDown].join(" ") )
                .off( [Events.touchEnd, Events.mouseUp].join(" ") )
                .removeClass( [RawClasses.control, RawClasses.control_zoom_in, RawClasses.control_zoom_out].join(" ") );
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
      data.total      = 0;
      data.images     = [ source ];
      data.gallery    = false;

      data.$el.removeClass(RawClasses.gallery);
    } else {
      data.total      = source.length - 1;
      data.images     = source;

      if (source.length > 1) {
        data.gallery = true;
        data.$el.addClass(RawClasses.gallery);
      }

      source = data.images[ data.index ];
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
    loadImage(data, data.images[ data.index ]);
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
          // console.log("loaded!");
        });

        data.$el.removeClass(RawClasses.loading);

        data.$container.fsTouch({
          pan      : true,
          scale    : true
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
    data.containerTop  = (data.viewportHeight / 2);
    data.containerLeft = (data.viewportWidth  / 2);

    // Cache image min max
    cacheImageMinMax(data);

    // Set initial image size
    data.imageHeight = data.naturalHeight;
    data.imageWidth  = data.naturalWidth;

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
      containerTop     : data.containerTop,
      containerLeft    : data.containerLeft,
      imageHeight      : data.imageHeight,
      imageWidth       : data.imageWidth,
      imageTop         : data.imageTop,
      imageLeft        : data.imageLeft,
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
    data.naturalWidth  = naturalSize.naturalWidth;

    data.ratioHorizontal = data.naturalHeight / data.naturalWidth;
    data.ratioVertical   = data.naturalWidth  / data.naturalHeight;

    data.isWide  = (data.naturalWidth > data.naturalHeight);
  }

  /**
   * @method private
   * @name cacheViewportProps
   * @description Caches viewport properties
   * @param data [object] "Instance data"
   */

  function cacheViewportProps(data) {
    data.viewportHeight = data.$viewport.outerHeight();
    data.viewportWidth  = data.$viewport.outerWidth();
  }

  /**
   * @method private
   * @name cacheContainerProps
   * @description Caches container properties
   * @param data [object] "Instance data"
   */

  function cacheContainerMinMax(data) {
    if (data.imageHeight <= data.viewportHeight) {
      data.containerMinTop = ( data.viewportHeight / 2 );
      data.containerMaxTop = ( data.viewportHeight / 2 );
    } else {
      data.containerMinTop = data.viewportHeight - ( data.imageHeight / 2 );
      data.containerMaxTop = ( data.imageHeight / 2 );
    }

    if (data.imageWidth <= data.viewportWidth) {
      data.containerMinLeft = ( data.viewportWidth / 2 );
      data.containerMaxLeft = ( data.viewportWidth / 2 );
    } else {
      data.containerMinLeft = data.viewportWidth  - ( data.imageWidth  / 2 );
      data.containerMaxLeft = ( data.imageWidth  / 2 );
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
      data.imageMinWidth  = data.viewportWidth;
      data.imageMinHeight = data.imageMinWidth * data.ratioHorizontal;

      if (data.imageMinHeight > data.viewportHeight) {
        data.imageMinHeight = data.viewportHeight;
        data.imageMinWidth  = data.imageMinHeight * data.ratioVertical;
      }
    } else {
      //TALL
      data.imageMinHeight = data.viewportHeight;
      data.imageMinWidth  = data.imageMinHeight * data.ratioVertical;

      if (data.imageMinWidth > data.viewportWidth) {
        data.imageMinWidth  = data.viewportWidth;
        data.imageMinHeight = data.imageMinWidth * data.ratioHorizontal;
      }
    }

    // Check natural max against new min
    if (data.imageMinWidth > data.naturalWidth || data.imageMinHeight > data.naturalHeight) {
      data.imageMinHeight = data.naturalHeight;
      data.imageMinWidth  = data.naturalWidth;
    }

    // Set max
    data.imageMaxHeight = data.naturalHeight;
    data.imageMaxWidth  = data.naturalWidth;
  }

  /**
   * @method private
   * @name cacheImageTopLeft
   * @description Caches image top and left based on viewport and size
   * @param data [object] "Instance data"
   */

  function cacheImageTopLeft(data) {
    data.imageTop  = -(data.imageHeight / 2);
    data.imageLeft = -(data.imageWidth / 2);
  }

  /**
   * @method private
   * @name cacheLastProps
   * @description Caches last container and image properties
   * @param data [object] "Instance data"
   */

  function cacheLastProps(data) {
    data.lastContainerTop  = data.containerTop;
    data.lastContainerLeft = data.containerLeft;

    data.lastImageHeight = data.imageHeight;
    data.lastImageWidth  = data.imageWidth;

    data.lastImageTop  = data.imageTop;
    data.lastImageLeft = data.imageLeft;
  }

  /**
   * @method private
   * @name cacheRenderProps
   * @description Caches container and image render properties
   * @param data [object] "Instance data"
   */

  function cacheRenderProps(data) {
    data.renderContainerTop  = data.lastContainerTop;
    data.renderContainerLeft = data.lastContainerLeft;

    data.renderImageTop  = data.lastImageTop;
    data.renderImageLeft = data.lastImageLeft;

    data.renderImageHeight = data.lastImageHeight;
    data.renderImageWidth  = data.lastImageWidth;
  }

  /**
   * @method private
   * @name fitToViewport
   * @description Fits image to viewport size
   * @param data [object] "Instance data"
   */

  function fitToViewport(data) {
    data.imageHeight = data.imageMinHeight;
    data.imageWidth  = data.imageMinWidth;
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
      var scaleX = props.imageWidth  / data.naturalWidth,
        scaleY = props.imageHeight / data.naturalHeight;

      data.$container.css( Formstone.transform, "translate3d(" + props.containerLeft + "px, " + props.containerTop + "px, 0)" );
      data.$image.css( Formstone.transform, "translate3d(-50%, -50%, 0) scale(" + scaleX + "," + scaleY + ")" );
    } else {
      data.$container.css({
        top     : props.containerTop,
        left    : props.containerLeft
      });

      data.$image.css({
        height    : props.imageHeight,
        width     : props.imageWidth,
        top       : props.imageTop,
        left      : props.imageLeft
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
    data.isZooming   = false;

    var zoomed = (data.imageHeight > data.imageMinHeight + 1);

    // Change container position
    data.containerTop  = data.lastContainerTop  + e.deltaY;
    data.containerLeft = data.lastContainerLeft + e.deltaX;

/*
    var diffX  = data.lastContainerLeft - data.containerLeft,
      diffY  = data.lastContainerTop - data.containerTop;

    data.containerLeft -= diffX;
    data.containerTop  -= diffY;
*/

    // Change image size
    data.imageHeight = data.lastImageHeight * e.scale;
    data.imageWidth  = data.lastImageWidth  * e.scale;

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
      containerTop     : data.containerTop,
      containerLeft    : data.containerLeft,
      imageHeight      : data.imageHeight,
      imageWidth       : data.imageWidth,
      imageTop         : data.imageTop,
      imageLeft        : data.imageLeft,
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
      data.imageWidth  = data.imageMinWidth;
    } else {
      // zoomed out (go to max)
      data.imageHeight = data.imageMaxHeight;
      data.imageWidth  = data.imageMaxWidth;
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

    var $target   = $(e.currentTarget),
      data      = e.data,
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

      data.renderContainerTop  += Math.round((data.containerTop  - data.renderContainerTop)  * data.zoomEnertia);
      data.renderContainerLeft += Math.round((data.containerLeft - data.renderContainerLeft) * data.zoomEnertia);

      data.renderImageTop  += Math.round((data.imageTop  - data.renderImageTop)  * data.zoomEnertia);
      data.renderImageLeft += Math.round((data.imageLeft - data.renderImageLeft) * data.zoomEnertia);

      data.renderImageHeight += Math.round((data.imageHeight - data.renderImageHeight) * data.zoomEnertia);
      data.renderImageWidth  += Math.round((data.imageWidth  - data.renderImageWidth)  * data.zoomEnertia);

      // Update DOM

      var props = {
        containerTop     : data.renderContainerTop,
        containerLeft    : data.renderContainerLeft,
        imageHeight      : data.renderImageHeight,
        imageWidth       : data.renderImageWidth,
        imageTop         : data.renderImageTop,
        imageLeft        : data.renderImageLeft,
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
      data.isZooming   = false;

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
      data    = e.data,
      index   = data.index + (( $target.hasClass(RawClasses.control_next) ) ? 1 : -1);

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
          loadImage(data, data.images[ data.index ]);
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
        naturalWidth:  node.naturalWidth
      };
    } else {
      if (node.tagName.toLowerCase() === 'img') {
        img.src = node.src;
        return {
          naturalHeight: img.height,
          naturalWidth:  img.width
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
        controls       : true,
        customClass    : "",
        // lazy           : false,
        // lazyEdge       : 100,
        labels: {
          count      : "of",
          next       : "Next",
          previous   : "Previous",
          zoom_in    : "Zoom In",
          zoom_out   : "Zoom Out"
        },
        theme          : "fs-light",
        zoomDelta      : 100,
        zoomEnertia    : 0.2,
        zoomIncrement  : 0.01
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
        loaded    : "loaded",
        ready     : "ready"
      },

      methods: {
        _setup        : setup,
        _construct    : construct,
        _destruct     : destruct,
        _resize       : resize,
        _raf          : raf,

        resize        : resizeInstance,
        load          : load,
        unload        : unload
      }
    }),

    // Localize References

    Namespace       = Plugin.namespace,
    Classes         = Plugin.classes,
    RawClasses      = Classes.raw,
    Events          = Plugin.events,
    Functions       = Plugin.functions,

    Window          = Formstone.window,
    $Window         = Formstone.$window,
    $Body,
    ScrollTop       = 0,
    $Instances      = [],
    ViewportSetup   = false;
    // $LazyInstances  = [];

})

);

/* ==========================================================================
  Demo
============================================================================= */

  (function($, Formstone) {
    var $window,
        $body,
        opts = {};

    opts.minXS = "320";
    opts.minSM = "500";
    opts.minMD = "740";
    opts.minLG = "980";
    opts.minXL = "1220";

    opts.maxXS = opts.minXS - 1;
    opts.maxSM = opts.minSM - 1;
    opts.maxMD = opts.minMD - 1;
    opts.maxLG = opts.minLG - 1;
    opts.maxXL = opts.minXL - 1;

    opts.minHTsm = parseInt("800_sm", 10);
    opts.minHT   = parseInt("800", 10);

    opts.maxHTsm = opts.minHTsm - 1;
    opts.maxHT   = opts.minHT - 1;

    function init() {
      $window = $(window);
      $body   = $("body");

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
    }

    // Ready

    Formstone.Ready(init);

  })(jQuery, Formstone);

