/*! Formstone v0.2.0 [site.js] 2015-03-23 | MIT License | formstone.it */

/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
//# sourceMappingURL=jquery.min.map
/*! Formstone v0.2.0 [core.js] 2015-03-23 | MIT License | formstone.it */


/**
 * @plugin
 * @name Core
 * @description Formstone Library core. Required for all plugins.
 */

var Formstone = this.Formstone = (function ($, window, document, undefined) {

	/* global ga */

	"use strict";

	// Namespace

	var Core = function() {
			this.Plugins = {};
			this.ResizeHandlers = [];

			// Globals

			this.window               = window;
			this.$window              = $(window);
			this.document             = document;
			this.$document            = $(document);
			this.$body                = null;

			this.windowWidth          = 0;
			this.userAgent            = window.navigator.userAgent || window.navigator.vendor || window.opera;
			this.isFirefox            = /Firefox/i.test(this.userAgent);
			this.isChrome             = /Chrome/i.test(this.userAgent);
			this.isSafari             = /Safari/i.test(this.userAgent) && !this.isChrome;
			this.isMobile             = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test( this.userAgent );
			this.isFirefoxMobile      = (this.isFirefox && this.isMobile);
			this.transform            = null;
			this.transition           = null;

			this.support = {
				file          : !!(window.File && window.FileList && window.FileReader),
				history       : !!(window.history && window.history.pushState && window.history.replaceState),
				matchMedia    : !!(window.matchMedia || window.msMatchMedia),
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
				return (parseInt(b) - parseInt(a));
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
				return (parseInt(b) - parseInt(a));
			}
		},

		Formstone = new Core(),

		// Classes

		Classes = {
			base                 : "{ns}",
			element              : "{ns}-element"
		},

		// Events

		Events = {
			namespace            : ".{ns}",
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
			resize               : "resize.{ns}",
			scroll               : "scroll.{ns}",
			select               : "select.{ns}",
			touchCancel          : "touchcancel.{ns}",
			touchEnd             : "touchend.{ns}",
			touchLeave           : "touchleave.{ns}",
			touchMove            : "touchmove.{ns}",
			touchStart           : "touchstart.{ns}"
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
				namespaceDot  = "fs." + namespace;

			/**
			 * @method private
			 * @name initialize
			 * @description Creates plugin instance by adding base classname, creating data and scoping a _construct call.
			 * @param options [object] <{}> "Instance options"
			 */

			function initialize(options) {
				// Extend Defaults

				var hasOptions = $.type(options) === "object";

				options = $.extend(true, {}, settings.defaults || {}, (hasOptions ? options : {}));

				// Maintain Chain

				var $targets = this;

				for (var i = 0, count = $targets.length; i < count; i++) {
					var $element = $targets.eq(i);

					// Gaurd Against Exiting Instances

					if (!getData($element)) {

						// Extend w/ Local Options

						var localOptions = $element.data(namespace + "-options"),
							data = $.extend(true, {
								$el : $element
							}, options, ($.type(localOptions) === "object" ? localOptions : {}) );

						// Cache Instance

						$element.addClass(settings.classes.raw.element)
						        .data(namespaceDash, data);

						// Constructor

						settings.methods._construct.apply($element, [ data ].concat(Array.prototype.slice.call(arguments, (hasOptions ? 1 : 0) )));
					}

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
					.removeData(namespaceDash);
			}

			/**
			 * @method private
			 * @name getData
			 * @description Creates class selector from text.
			 * @param $element [jQuery] "Target jQuery object"
			 * @return [object] "Instance data"
			 */

			function getData($element) {
				return $element.data(namespaceDash);
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
				var $targets = this;

				for (var i = 0, count = $targets.length; i < count; i++) {
					var $element = $targets.eq(i),
						data = getData($element) || {};

					if ($.type(data.$el) !== "undefined") {
						fn.apply($element, [ data ].concat(Array.prototype.slice.call(arguments, 1)));
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
				_destruct      : $.noop,    // Destructor
				_resize        : false,    // Window resize

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

				// Widget Delegation: $(".target").plugin("method", ...);
				$.fn[namespace] = delegateWidget;
			}

			// Utility

				// Utility Delegation: $.plugin("method", ... );
				$[namespace] = settings.utilities._delegate || delegateUtility;

			// Run Setup

			settings.namespace = namespace;

			// Resize handler

			if (settings.methods._resize) {
				Formstone.ResizeHandlers.push({
					namespace: namespace,
					priority: settings.priority,
					callback: settings.methods._resize
				});
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

	// Set Transition Information

	function setTransitionInformation() {
		var transitionEvents = {
				"transition"          : "transitionend",
				"MozTransition"       : "transitionend",
				"OTransition"         : "otransitionend",
				"WebkitTransition"    : "webkitTransitionEnd"
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
			test                  = document.createElement("div"),
			i;


		for (i in transitionEvents) {
			if (transitionEvents.hasOwnProperty(i) && i in test.style) {
				transitionEvent = transitionEvents[i];
				Formstone.support.transition = true;
				break;
			}
		}

		Events.transitionEnd = transitionEvent + ".{ns}";

		for (i in transitionProperties) {
			if (transitionProperties.hasOwnProperty(i) && transitionProperties[i] in test.style) {
				transitionProperty = transitionProperties[i];
				break;
			}
		}

		Formstone.transition = transitionProperty;

		for (i in transformProperties) {
			if (transformProperties.hasOwnProperty(i) && transformProperties[i] in test.style) {
				Formstone.support.transform = true;
				transformProperty = transformProperties[i];
				break;
			}
		}

		Formstone.transform = transformProperty;
	}

	// Window resize

	var ResizeTimer = null,
		Debounce = 20;

	function onWindowResize() {
		Formstone.windowWidth = Formstone.$window.width();

		ResizeTimer = Functions.startTimer(ResizeTimer, Debounce, handleWindowResize);
	}

	function handleWindowResize() {
		for (var i in Formstone.ResizeHandlers) {
			if (Formstone.ResizeHandlers.hasOwnProperty(i)) {
				Formstone.ResizeHandlers[i].callback.call(window, Formstone.windowWidth);
			}
		}
	}

	Formstone.$window.on("resize.fs", onWindowResize);
	onWindowResize();

	// Sort Priority

	function sortPriority(a, b) {
		return (parseInt(a.priority) - parseInt(b.priority));
	}

	// Document Ready

	$(function() {
		Formstone.$body = $("body");

		Formstone.ResizeHandlers.sort(sortPriority);

		for (var i in Formstone.Plugins) {
			if (Formstone.Plugins.hasOwnProperty(i) && !Formstone.Plugins[i].initialized) {
				Formstone.Plugins[i].methods._setup.call(document);
				Formstone.Plugins[i].initialized = true;
			}
		}
	});

	// Custom Events

	Events.clickTouchStart = Events.click + " " + Events.touchStart;

	// Transitions

	setTransitionInformation();

	return Formstone;

})(jQuery, this, document);
/*! Formstone v0.2.0 [background.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

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
		// guid
		data.guid         = "__" + (GUID++);
		data.youTubeGuid  = 0;
		data.eventGuid    = Events.namespace + data.guid;
		data.rawGuid      = RawClasses.base + data.guid;
		data.classGuid    = "." + data.rawGuid;

		data.$container = $('<div class="' + RawClasses.container + '"></div>').appendTo(this);

		this.addClass( [RawClasses.base, data.customClass].join(" ") );

		var source = data.source;
		data.source = null;

		loadMedia(data, source, true);

		cacheInstances();
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		data.$container.remove();

		this.removeClass( [RawClasses.base, data.customClass].join(" ") )
			.off(Events.namespace);

		cacheInstances();
	}

	/**
	 * @method
	 * @name load
	 * @description Loads source media
	 * @param source [string OR object] "Source image (string) or video (object) or YouTube (object);"
	 * @example $(".target").background("load", "path/to/image.jpg");
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
		if (source !== data.source) {
			data.source        = source;
			data.responsive    = false;
			data.isYouTube     = false;

			// Check YouTube
			if ($.type(source) === "object" && $.type(source.video) === "string") {
				// var parts = source.match( /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/ );
				var parts = source.video.match( /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i );

				if (parts && parts.length >= 1) {
					data.isYouTube = true;
					data.videoId = parts[1];
				}
			}

			if (data.isYouTube) {
				// youtube video
				data.playing = false;
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
					var sources    = {},
						keys       = [],
						i;

					for (i in source) {
						if (source.hasOwnProperty(i)) {
							keys.push(i);
						}
					}

					keys.sort(Functions.sortAsc);

					for (i in keys) {
						if (keys.hasOwnProperty(i)) {
							sources[ keys[i] ] = {
								width    : parseInt( keys[i] ),
								url      : source[ keys[i] ]
							};
						}
					}

					data.responsive = true;
					data.sources = sources;

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
		if (data.responsive) {
			for (var i in data.sources) {
				if (data.sources.hasOwnProperty(i) && Formstone.windowWidth >= data.sources[i].width) {
					return data.sources[i].url;
				}
			}
		}

		return data.source;
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
			$media = $('<div class="' + imageClasses + '"><img></div>'),
			$img = $media.find("img"),
			newSource = source;

		// Load image
		$img.one(Events.load, function() {
			if (BGSupport) {
				$media.addClass(RawClasses.native)
					  .css({ backgroundImage: "url('" + newSource + "')" });
			}

			// YTransition in
			$media.transition({
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
		}).attr("src", newSource);

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
				html = '<div class="' + videoClasses + '">';

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
				$media.transition({
					property: "opacity"
				},
				function() {
					cleanMedia(data);
				}).css({ opacity: 1 });

				doResizeInstance(data);

				data.$el.trigger(Events.loaded);

				// Events
				if (data.autoPlay) {
					this.play();
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
				// data.source.poster = "http://img.youtube.com/vi/" + data.videoId + "/maxresdefault.jpg";
				data.source.poster = "http://img.youtube.com/vi/" + data.videoId + "/0.jpg";
			}

			data.posterLoaded = true;
			loadImage(data, data.source.poster, true, firstLoad);

			firstLoad = false;
		}

		if (!Formstone.isMobile) {
			if (!$("script[src*='youtube.com/iframe_api']").length) {
				// $("head").append('<script src="' + window.location.protocol + '//www.youtube.com/iframe_api"></script>');
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
					html = '<div class="' + youTubeClasses + '">';

				html += '<div id="' + guid + '"></div>';
				html += '</div>';

				var $media = $(html);

				data.$container.append($media);

				if (data.player) {
					data.oldPlayer = data.player;
					data.player = null;
				}

				data.player = new Window.YT.Player(guid, {
					videoId: data.videoId,
					playerVars: {
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
					},
					events: {
						onReady: function (e) {
							/* console.log("onReady", e); */

							data.playerReady = true;
							/* data.player.setPlaybackQuality("highres"); */

							if (data.mute) {
								data.player.mute();
							}

							if (data.autoPlay) {
								// make sure the video plays
								data.player.playVideo();
							}
						},
						onStateChange: function (e) {
							/* console.log("onStateChange", e); */

							if (!data.playing && e.data === Window.YT.PlayerState.PLAYING) {
								data.playing = true;

								if (!data.autoPlay) {
									data.player.pauseVideo();
								}

								$media.transition({
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
			$media.transition({
				property: "opacity"
			},
			function() {
				$media.remove();
				delete data.source;
			}).css({ opacity: 0 });
		}
	}

	/**
	 * @method
	 * @name pause
	 * @description Pauses target video
	 * @example $(".target").background("pause");
	 */

	function pause(data) {
		if (data.isYouTube && data.playerReady) {
			data.player.pauseVideo();
		} else {
			var $video = data.$container.find("video");

			if ($video.length) {
				$video[0].pause();
			}
		}
	}

	/**
	 * @method
	 * @name play
	 * @description Plays target video
	 * @example $(".target").background("play");
	 */

	function play(data) {
		if (data.isYouTube && data.playerReady) {
			data.player.playVideo();
		} else {
			var $video = data.$container.find("video");

			if ($video.length) {
				$video[0].play();
			}
		}
	}

	/**
	 * @method private
	 * @name resizeInstance
	 * @description Handle window resize event
	 * @param data [object] "Instance data"
	 */

	function resizeInstance(data) {
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
				var frameWidth     = data.$el.outerWidth(),
					frameHeight    = data.$el.outerHeight(),
					frameRatio     = frameWidth / frameHeight,
					nSize          = naturalSize(data, $media);

				data.width     = nSize.width;
				data.height    = nSize.height;
				data.left      = 0;
				data.top       = 0;

				var mediaRatio = (data.isYouTube) ? data.embedRatio : (data.width / data.height);

				// First check the height
				data.height = frameHeight;
				data.width = data.height * mediaRatio;

				// Next check the width
				if (data.width < frameWidth) {
					data.width     = frameWidth;
					data.height    = data.width / mediaRatio;
				}

				// Position the media
				data.left    = -(data.width - frameWidth) / 2;
				data.top     = -(data.height - frameHeight) / 2;

				$m.css({
					height    : data.height,
					width     : data.width,
					left      : data.left,
					top       : data.top
				});
			}
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
					height: node.naturalHeight,
					width:  node.naturalWidth
				};
			} else {
				var img = new Image();
				img.src = node.src;
				return {
					height: img.height,
					width:  img.width
				};
			}
		} else {
			return {
				height: $media[0].videoHeight,
				width:  $media[0].videoWidth
			};
		}
		return false;
	}

	/**
	 * @plugin
	 * @name Background
	 * @description A jQuery plugin for full-frame image and video backgrounds.
	 * @type widget
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
			 * @param loop [boolean] <true> "Loop video"
			 * @param mute [boolean] <true> "Mute video"
			 * @param source [string OR object] <null> "Source image (string or object) or video (object) or YouTube (object)"
			 */
			defaults: {
				autoPlay       : true,
				customClass    : "",
				embedRatio     : 1.777777,
				loop           : true,
				mute           : true,
				source         : null
			},

			classes: [
				"container",
				"media",
				"animated",
				"responsive",
				"native",
				"fixed",
				"ready"
			],

			/**
			 * @events
			 * @event loaded.background "Background media loaded"
			 * @event ready.background "Background media ready"
			 */

			events: {
				loaded    : "loaded",
				ready     : "ready",
				loadedMetaData : "loadedmetadata"
			},

			methods: {
				_construct    : construct,
				_destruct     : destruct,
				_resize       : resize,

				play          : play,
				pause         : pause,
				resize        : doResizeInstance,
				load          : loadMedia,
				unload        : unloadMedia
			}
		}),

		// Localize References

		Classes         = Plugin.classes,
		RawClasses      = Classes.raw,
		Events          = Plugin.events,
		Functions       = Plugin.functions,

		Window          = Formstone.window,
		$Instances      = [],
		GUID            = 0,

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

})(jQuery, Formstone);
/*! Formstone v0.2.0 [carousel.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

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

		data.maxWidth = (data.maxWidth === Infinity ? "100000px" : data.maxWidth);
		data.mq       = "(min-width:" + data.minWidth + ") and (max-width:" + data.maxWidth + ")";
		data.mqGuid   = RawClasses.base + "__" + (GUID++);

		// Legacy browser support
		if (!Formstone.support.transform) {
			data.useMargin = true;
		}

		// Build controls and pagination
		var controlsHtml = '',
			paginationHtml = '';

		if (data.controls) {
			controlsHtml += '<div class="' + RawClasses.controls + '">';
			controlsHtml += '<button type="button" class="' + [RawClasses.control, RawClasses.control_previous].join(" ")+ '">' + data.labels.previous + '</button>';
			controlsHtml += '<button type="button" class="' + [RawClasses.control, RawClasses.control_next].join(" ")+ '">' + data.labels.next + '</button>';
			controlsHtml += '</div>';
		}

		if (data.pagination) {
			paginationHtml += '<div class="' + RawClasses.pagination + '">';
			paginationHtml += '</div>';
		}

		// Modify dom
		this.addClass( [RawClasses.base, data.customClass].join(" ") )
			.wrapInner('<div class="' + RawClasses.container + '"><div class="' + RawClasses.canister + '"></div></div>')
			.append(controlsHtml)
			.wrapInner('<div class="' + RawClasses.viewport + '"></div>')
			.append(paginationHtml);

		data.$viewport           = this.find(Classes.viewport).eq(0);
		data.$container          = this.find(Classes.container).eq(0);
		data.$canister           = this.find(Classes.canister).eq(0);
		data.$controls           = this.find(Classes.controls).eq(0);
		data.$pagination         = this.find(Classes.pagination).eq(0);
		data.$items              = data.$canister.children().addClass(RawClasses.item);
		data.$controlItems       = data.$controls.find(Classes.control);
		data.$paginationItems    = data.$pagination.find(Classes.page);
		data.$images             = data.$canister.find("img");

		data.index           = 0;
		data.enabled         = false;
		data.leftPosition    = 0;
		data.totalImages     = data.$images.length;
		data.autoTimer       = null;

		if ($.type(data.show) === "object") {
			var show = data.show,
				keys = [];

			for (i in show) {
				if (show.hasOwnProperty(i)) {
					keys.push(i);
				}
			}

			keys.sort(Functions.sortAsc);
			data.show = {};

			for (i in keys) {
				if (keys.hasOwnProperty(i)) {
					data.show[ keys[i] ] = {
						width: parseInt( keys[i] ),
						count: show[ keys[i] ]
					};
				}
			}
		}

		// Media Query support
		$.mediaquery("bind", data.mqGuid, data.mq, {
			enter: function() {
				enable.call(data.$el, data);
			},
			leave: function() {
				disable.call(data.$el, data);
			}
		});

		// Watch Images
		if (data.totalImages > 0) {
			data.loadedImages = 0;
			for (i = 0; i < data.totalImages; i++) {
				var $img = data.$images.eq(i);
				$img.one(Events.load, data, onImageLoad);

				if ($img[0].complete || $img[0].height) {
					$img.trigger(Events.load);
				}
			}
		}

		// Auto timer
		if (data.autoAdvance) {
			data.autoTimer = Functions.startTimer(data.autoTimer, data.autoTime, function() {
				autoAdvance(data);
			}, true);
		}

		cacheInstances();
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		Functions.clearTimer(data.autoTimer);

		disable.call(this, data);

		$.mediaquery("unbind", data.mqGuid, data.mq);

		data.$items.removeClass( [RawClasses.item, RawClasses.visible].join(" ") )
				   .unwrap().unwrap();

		if (data.pagination) {
			data.$pagination.remove();
		}
		if (data.controls) {
			data.$controls.remove();
		}

		this.removeClass( [RawClasses.base, RawClasses.enabled, RawClasses.animated, data.customClass].join(" ") );

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

			this.removeClass( [RawClasses.enabled, RawClasses.animated].join(" ") )
				.off(Events.namespace);

			data.$canister.touch("destroy")
						  .off(Events.namespace)
						  .attr("style", "")
						  .css(TransitionProperty, "none");

			data.$items.css({
				width: "",
				height: ""
			});

			data.$controls.removeClass(RawClasses.visible);
			data.$pagination.removeClass(RawClasses.visible)
							.html("");

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

			this.addClass(RawClasses.enabled)
				.on(Events.clickTouchStart, Classes.control, data, onAdvance)
				.on(Events.clickTouchStart, Classes.page, data, onSelect);

			data.$canister.touch({
				axis: "x",
				pan: true,
				swipe: true
			}).on(Events.panStart, data, onPanStart)
			  .on(Events.pan, data, onPan)
			  .on(Events.panEnd, data, onPanEnd)
			  .on(Events.swipe, data, onSwipe)
			  .css(TransitionProperty, "");

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
			var i,
				j,
				$items,
				$first,
				height;

			data.count = data.$items.length;

			if (data.count < 1) { // avoid empty carousels
				return;
			}

			this.removeClass(RawClasses.animated);

			// data.viewportWidth  = data.$viewport.outerWidth(false);
			data.containerWidth = data.$container.outerWidth(false);

			data.visible   = calculateVisible(data);
			data.perPage   = data.paged ? 1 : data.visible;

			data.itemMargin = parseInt(data.$items.eq(0).css("marginRight")) + parseInt(data.$items.eq(0).css("marginLeft"));
			data.itemWidth  = (data.containerWidth - (data.itemMargin * (data.visible - 1))) / data.visible;
			data.itemHeight = 0;

			data.pageWidth = data.paged ? data.itemWidth : data.containerWidth;
			data.pageCount = Math.ceil(data.count / data.perPage);

			data.$canister.css({
				width: ((data.pageWidth + data.itemMargin) * data.pageCount)
			});

			data.$items.css({
				width: data.itemWidth,
				height: ""
			}).removeClass(RawClasses.visible);

			// initial page
			data.pages = [];

			for (i = 0, j = 0; i < data.count; i += data.perPage) {
				$items = data.$items.slice(i, i + data.perPage);

				if ($items.length < data.perPage) {
					if (i === 0) {
						$items = data.$items;
					} else {
						$items = data.$items.slice(data.$items.length - data.perPage);
					}
				}

				$first = $items.eq(0);
				height = $first.outerHeight();

				data.pages.push({
					left      : $first.position().left,
					height    : height,
					$items    : $items
				});

				if (height > data.itemHeight) {
					data.itemHeight = height;
				}

				j++;
			}

			if (data.paged) {
				data.pageCount -=  (data.count % data.visible);
			}

			data.maxMove = -data.pages[ data.pageCount - 1 ].left;

			// auto height
			if (data.autoHeight) {
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
				data.$controls.removeClass(RawClasses.visible);
				data.$pagination.removeClass(RawClasses.visible);
			} else {
				data.$controls.addClass(RawClasses.visible);
				data.$pagination.addClass(RawClasses.visible);
			}
			data.$paginationItems = data.$el.find(Classes.page);

			positionCanister(data, data.index, false);

			setTimeout(function() {
				data.$el.addClass(RawClasses.animated);
			}, 5);
		}
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
			data.$items = data.$canister.children().addClass(RawClasses.item);

			resizeInstance.call(this, data);
		}
	}

	/**
	 * @method
	 * @name jump
	 * @description Jump instance of plugin to specific page
	 * @example $(".target").carousel("jump", 1);
	 */

	/**
	 * @method private
	 * @name jumpToItem
	 * @description Jump instance of plugin to specific page
	 * @param data [object] "Instance data"
	 * @param index [int] "New index"
	 */

	function jumpToItem(data, index) {
		if (data.enabled) {
			Functions.clearTimer(data.autoTimer);

			positionCanister(data, index-1);
		}
	}

	/**
	 * @method
	 * @name previous
	 * @description Move to the previous item
	 * @example $(".target").carousel("previous");
	 */

	/**
	 * @method private
	 * @name previousItem
	 * @description Move to next item
	 * @param data [object] "Instance data"
	 */

	function previousItem(data) {
		var index = data.index - 1;

		if (data.infinite && index < 0) {
			index = data.pageCount;
		}

		positionCanister(data, index);
	}

	/**
	 * @method
	 * @name next
	 * @description Move to next item
	 * @param data [object] "Instance data"
	 */

	/**
	 * @method private
	 * @name nextItem
	 * @description Move to next item
	 * @example $(".target").carousel("next");
	 */

	function nextItem(data) {
		var index = data.index + 1;

		if (data.infinite && index >= data.pageCount) {
			index = 0;
		}

		positionCanister(data, index);
	}

	/**
	 * @method private
	 * @name onImageLoad
	 * @description Handles child image load
	 * @param e [object] "Event data"
	 */

	function onImageLoad(e) {
		var data = e.data;

		data.loadedImages++;

		if (data.loadedImages === data.totalImages) {
			resizeInstance.call(data.$el, data);
		}
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

	function positionCanister(data, index, animate) {
		if (index < 0) {
			index = (data.infinite) ? data.pageCount-1 : 0;
		}
		if (index >= data.pageCount) {
			index = (data.infinite) ? 0 : data.pageCount-1;
		}

		if (data.pages[index]) {
			data.leftPosition = -data.pages[index].left;
		}

		if (data.leftPosition < data.maxMove) {
			data.leftPosition = data.maxMove;
		}
		if (data.leftPosition > 0 || isNaN(data.leftPosition)) {
			data.leftPosition = 0;
		}

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
		data.$items.removeClass(RawClasses.visible);
		data.pages[index].$items.addClass(RawClasses.visible);

		if (animate !== false && index !== data.index && (data.infinite || (index > -1 && index < data.pageCount)) ) {
			data.$el.trigger(Events.update, [ index ]);
		}

		data.index = index;

		updateControls(data);
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
				data.$controlItems.filter(Classes.control_previous).removeClass(RawClasses.visible);
			} else if (data.index >= data.pageCount || data.leftPosition === data.maxMove) {
				data.$controlItems.filter(Classes.control_next).removeClass(RawClasses.visible);
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
		if ($.type(data.show) === "object") {
			for (var i in data.show) {
				if (data.show.hasOwnProperty(i) && Formstone.windowWidth >= data.show[i].width) {
					return (data.fill && data.count < data.show[i].count) ? data.count : data.show[i].count;
				}
			}
			return 1;
		}

		return (data.fill && data.count < data.show) ? data.count : data.show;
	}

	/**
	 * @method private
	 * @name onPanStart
	 * @description Handles pan start event
	 * @param e [object] "Event data"
	 */

	function onPanStart(e) {
		var data = e.data;

		if (data.useMargin) {
			data.leftPosition = parseInt(data.$canister.css("marginLeft"));
		} else {
			var matrix = data.$canister.css(TransformProperty).split(",");
			data.leftPosition = parseInt(matrix[4]); // ?
		}

		data.$canister.css(TransitionProperty, "none");

		onPan(e);

		data.isTouching = true;
	}

	/**
	 * @method private
	 * @name onPan
	 * @description Handles pan event
	 * @param e [object] "Event data"
	 */

	function onPan(e) {
		var data = e.data;

		data.touchLeft = data.leftPosition + e.deltaX;

		if (data.touchLeft > 0) {
			data.touchLeft = 0;
		}
		if (data.touchLeft < data.maxMove) {
			data.touchLeft = data.maxMove;
		}

		if (data.useMargin) {
			data.$canister.css({
				marginLeft: data.touchLeft
			});
		} else {
			data.$canister.css(TransformProperty, "translateX(" + data.touchLeft + "px)");
		}
	}

	/**
	 * @method private
	 * @name onPanEnd
	 * @description Handles pan end event
	 * @param e [object] "Event data"
	 */

	function onPanEnd(e) {
		var data = e.data,
			index = (e.deltaX > -50 && e.deltaX < 50) ? data.index : data.index + ((e.directionX === "left") ? 1 : -1);

		endTouch(data, index);
	}

	/**
	 * @method private
	 * @name onSwipe
	 * @description Handles swipe event
	 * @param e [object] "Event data"
	 */

	function onSwipe(e) {
		var data = e.data,
			index = data.index + ((e.directionX === "left") ? 1 : -1);

		endTouch(data, index);
	}

	/**
	 * @method private
	 * @name endTouch
	 * @description Cleans up touch interactions
	 * @param data [object] "Instance data"
	 * @param index [object] "New index"
	 */

	function endTouch(data, index) {
		data.$canister.css(TransitionProperty, "");

		positionCanister(data, index);

		data.isTouching = false;
	}

	/**
	 * @plugin
	 * @name Carousel
	 * @description A jQuery plugin for simple content carousels.
	 * @type widget
	 * @dependency core.js
	 * @dependency mediaquery.js
	 * @dependency touch.js
	 */

	var Plugin = Formstone.Plugin("carousel", {
			widget: true,

			/**
			 * @options
			 * @param autoAdvance [boolean] <false> "Flag to auto advance items"
			 * @param autoHeight [boolean] <false> "Flag to auto-size items"
			 * @param autoTime [int] <8000> "Auto advance time"
			 * @param controls [boolean] <true> "Flag to draw controls"
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param fill [boolean] <false> "Flag to fill viewport if item count is less then show count"
			 * @param infinite [boolean] <false> "Flag for looping items"
			 * @param labels.next [string] <'Next'> "Control text"
			 * @param labels.previous [string] <'Previous'> "Control text"
			 * @param maxWidth [string] <'Infinity'> "Width at which to auto-disable plugin"
			 * @param minWidth [string] <'0'> "Width at which to auto-disable plugin"
			 * @param paged [boolean] <false> "Flag for paged items"
			 * @param pagination [boolean] <true> "Flag to draw pagination"
			 * @param show [int / object] <1> "Items visible per page; Object for responsive counts"
			 * @param sized [boolean] <true> "Flag for auto-sizing items"
			 * @param useMargin [boolean] <false> "Use margins instead of css transitions (legacy browser support)"
			 */

			defaults: {
				autoAdvance    : false,
				autoHeight     : false,
				autoTime       : 8000,
				controls       : true,
				customClass    : "",
				fill           : false,
				infinite       : false,
				labels: {
					next       : "Next",
					previous   : "Previous"
				},
				maxWidth       : Infinity,
				minWidth       : '0px',
				paged          : false,
				pagination     : true,
				show           : 1,
				sized          : true,
				useMargin      : false
			},

			classes: [
				"viewport",
				"container",
				"canister",
				"item",
				"controls",
				"control",
				"pagination",
				"page",

				"animated",
				"enabled",
				"visible",
				"active",

				"control_previous",
				"control_next"
			],

			/**
			 * @events
			 * @event update.carousel "Carousel position updated"
			 */

			events: {
				update      : "update",
				panStart    : "panstart",
				pan         : "pan",
				panEnd      : "panend",
				swipe       : "swipe"
			},

			methods: {
				_construct    : construct,
				_destruct     : destruct,
				_resize       : resize,

				disable       : disable,
				enable        : enable,
				jump          : jumpToItem,
				previous      : previousItem,
				next          : nextItem,
				reset         : resetInstance,
				resize        : resizeInstance
			}
		}),

		// Localize References

		Classes        = Plugin.classes,
		RawClasses     = Classes.raw,
		Events         = Plugin.events,
		Functions      = Plugin.functions,
		GUID           = 0,

		$Instances     = [],

		TransformProperty     = Formstone.transform,
		TransitionProperty    = Formstone.transition;

})(jQuery, Formstone);
/*! Formstone v0.2.0 [checkbox.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

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
			baseClass    = [RawClasses.base, data.customClass].join(" "),
			html         = "";

		data.radio = (this.attr("type") === "radio");
		data.group = this.attr("name");

		html += '<div class="' + RawClasses.marker + '">';
		html += '<div class="' + RawClasses.flag + '"></div>';

		if (data.toggle) {
			baseClass += " " + RawClasses.toggle;
			html += '<span class="' + [RawClasses.state, RawClasses.state_on].join(" ") + '">'  + data.labels.on  + '</span>';
			html += '<span class="' + [RawClasses.state, RawClasses.state_off].join(" ") + '">' + data.labels.off + '</span>';
		}

		if (data.radio) {
			baseClass += " " + RawClasses.radio;
		}

		html += '</div>';

		// Modify DOM

		if ($label.length) {
			$label.addClass(RawClasses.label)
				  .wrap('<div class="' + baseClass + '"></div>')
				  .before(html);
		} else {
			this.before('<div class=" ' + baseClass + '">' + html + '</div>');
		}

		// Store plugin data
		data.$checkbox    = ($label.length) ? $label.parents(Classes.base) : this.prev(Classes.base);
		data.$marker      = data.$checkbox.find(Classes.marker);
		data.$states      = data.$checkbox.find(Classes.state);
		data.$label       = $label;

		// Check checked
		if (this.is(":checked")) {
			data.$checkbox.addClass(RawClasses.checked);
		}

		// Check disabled
		if (this.is(":disabled")) {
			data.$checkbox.addClass(RawClasses.disabled);
		}

		// Bind click events
		this.on(Events.focus, data, onFocus)
			.on(Events.blur, data, onBlur)
			.on(Events.change, data, onChange)
			.on(Events.click, data, onClick)
			.on(Events.deselect, data, onDeselect);

		data.$checkbox.touch({
			tap: true
		}).on(Events.tap, data, onClick);
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		data.$checkbox.off(Events.namespace)
					  .touch("destroy");

		data.$marker.remove();
		data.$states.remove();
		data.$label.unwrap()
				   .removeClass(RawClasses.label);

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
		data.$checkbox.removeClass(RawClasses.disabled);
	}

	/**
	 * @method
	 * @name disable
	 * @description Disables target instance
	 * @example $(".target").checkbox("disable");
	 */

	function disable(data) {
		this.prop("disabled", true);
		data.$checkbox.addClass(RawClasses.disabled);
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
			disabled    = data.$el.is(":disabled"),
			checked     = data.$el.is(":checked");

		if (!disabled) {
			if (data.radio) {
				// radio
				// if (checked || (isIE8 && !checked)) {
					onSelect(e);
				// }
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

		e.data.$checkbox.addClass(RawClasses.checked);
	}

	/**
	 * @method private
	 * @name onDeselect
	 * @description Changes input to "checked"
	 * @param e [object] "Event data"
	 */
	function onDeselect(e) {
		e.data.$checkbox.removeClass(RawClasses.checked);
	}

	/**
	 * @method private
	 * @name onFocus
	 * @description Handles instance focus
	 * @param e [object] "Event data"
	 */

	function onFocus(e) {
		e.data.$checkbox.addClass(RawClasses.focus);
	}

	/**
	 * @method private
	 * @name onBlur
	 * @description Handles instance blur
	 * @param e [object] "Event data"
	 */

	function onBlur(e) {
		e.data.$checkbox.removeClass(RawClasses.focus);
	}

	/**
	 * @plugin
	 * @name Checkbox
	 * @description A jQuery plugin for replacing checkboxes.
	 * @type widget
	 * @dependency core.js
	 * @dependency touch.js
	 */

	var Plugin = Formstone.Plugin("checkbox", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param toggle [boolean] <false> "Render 'toggle' styles"
			 * @param labels.on [string] <'ON'> "Label for 'On' position; 'toggle' only"
			 * @param labels.off [string] <'OFF'> "Label for 'Off' position; 'toggle' only"
			 */

			defaults: {
				customClass    : "",
				toggle         : false,
				labels : {
					on         : "ON",
					off        : "OFF"
				}
			},

			classes: [
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
				disable       : disable
			},

			events: {
				deselect : "deselect",
				tap      : "tap"
			}
		}),

		// Localize References

		Classes       = Plugin.classes,
		RawClasses    = Classes.raw,
		Events        = Plugin.events,
		Functions     = Plugin.functions;

})(jQuery, Formstone);
/*! Formstone v0.2.0 [cookie.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

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
						eraseCookie(key);
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

	function eraseCookie(key) {
		createCookie(key, "", {
			expires: -604800000 // -7 days
		});
	}

	/**
	 * @plugin
	 * @name Cookie
	 * @description A jQuery plugin for simple access to browser cookies.
	 * @type utility
	 * @dependency core.js
	 */

	var Plugin = Formstone.Plugin("cookie", {
			utilities: {
				_delegate:     delegate
			}
		}),

		/**
		 * @options
		 * @param domain [string] "Cookie domain"
		 * @param expires [int] <604800000> "Time until cookie expires"
		 * @param path [string] "Cookie path"
		 */

		Defaults = {
			domain:     null,
			expires:    604800000, // 7 days
			path:       null,
			secure:     null
		},

		// Localize References

		Document = Formstone.document;

})(jQuery, Formstone);
/*! Formstone v0.2.0 [dropdown.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

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
		data.disabled = this.is(":disabled");

		if (data.multiple) {
			data.links = false;
		} else if (data.external) {
			data.links = true;
		}

		// Grab true original index, only if selected attribute exits
		var $originalOption = this.find(":selected").not(":disabled"),
			originalLabel = $originalOption.text(),
			originalIndex = this.find("option").index($originalOption);

		if (!data.multiple && data.label !== "") {
			$originalOption = this.prepend('<option value="" class="' + RawClasses.item_placeholder + '" selected>' + data.label + '</option>');
			originalLabel = data.label;
			originalIndex = 0;
		} else {
			data.label = "";
		}

		// Build options array
		var $allOptions = this.find("option, optgroup"),
			$options = $allOptions.filter("option");

		// Swap tab index, no more interacting with the actual select!
		data.tabIndex = this[0].tabIndex;
		this[0].tabIndex = -1;

		// Build wrapper
		var wrapperClasses = [
			RawClasses.base,
			data.customClass
		];

		if (data.mobile || Formstone.isMobile) {
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

		// Build html
		var wrapperHtml = '<div class="' + wrapperClasses.join(" ") + '" tabindex="' + data.tabIndex + '"></div>',
			innerHtml = "";

		// Build inner
		if (!data.multiple) {
			innerHtml += '<button type="button" class="' + RawClasses.selected + '">';
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
		data.$allOptions      = $allOptions;
		data.$options         = $options;
		data.$selected        = data.$dropdown.find(Classes.selected);
		data.$wrapper         = data.$dropdown.find(Classes.options);
		data.$placeholder     = data.$dropdown.find(Classes.placeholder);
		data.index            = -1;
		data.guid             = GUID++;
		data.closed           = true;

		data.keyDownGUID      = Events.keyDown + data.guid;
		data.clickGUID        = Events.click + data.guid;

		buildOptions(data);

		if (!data.multiple) {
			updateOption(originalIndex, data);
		}

		/*
		// Scroller support
		if ($.fn.scroller !== undefined) {
			data.$wrapper.scroller();
		}
		*/

		// Bind events
		data.$selected.touch({
			tap: true
		}).on(Events.tap, data, onClick);

		data.$dropdown.on(Events.click, Classes.item, data, onSelect)
					  .on(Events.close, data, onClose);

		// Change events
		this.on(Events.change, data, onChange);

		// Focus/Blur events
		if (!Formstone.isMobile) {
			data.$dropdown.on(Events.focus, data, onFocus)
						  .on(Events.blur, data, onBlur);

			// Handle clicks to associated labels
			this.on(Events.focus, data, function(e) {
				e.data.$dropdown.trigger(Events.raw.focus);
			});
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
		/*
		if ($.fn.scroller !== undefined) {
			data.$dropdown.find(".selecter-options").scroller("destroy");
		}
		*/

		data.$el[0].tabIndex = data.tabIndex;

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
		var index = data.index;

		data.$allOptions = data.$el.find("option, optgroup");
		data.$options = data.$allOptions.filter("option");
		data.index = -1;

		index = data.$options.index(data.$options.filter(":selected"));

		buildOptions(data);

		if (!data.multiple) {
			updateOption(index, data);
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
				if ($option.is(":disabled")) {
					classes.push(RawClasses.disabled);
				}

				html += '<span class="' + classes.join(" ") + '">' + $option.attr("label") + '</span>';
			} else {
				var opVal = $option.val();

				if (!$option.attr("value")) {
					$option.attr("value", opVal);
				}

				classes.push(RawClasses.item);

				if ($option.hasClass(RawClasses.item_placeholder)) {
					classes.push(RawClasses.item_placeholder);
				}
				if ($option.is(":selected")) {
					classes.push(RawClasses.item_selected);
				}
				if ($option.is(":disabled")) {
					classes.push(RawClasses.item_disabled);
				}

				html += '<button type="button" class="' + classes.join(" ") + '" ';
				html += 'data-value="' + opVal + '">';
				html += $("<span></span>").text( trimText($option.text(), data.trim) ).html();
				html += '</button>';

				j++;
			}
		}

		data.$items = data.$wrapper.html(html)
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
			// Handle mobile, but not Firefox, unless desktop forced
			if (!data.mobile && Formstone.isMobile && !Formstone.isFirefoxMobile) {
				var el = data.$el[0];

				if (Document.createEvent) { // All
					var evt = Document.createEvent("MouseEvents");
					evt.initMouseEvent("mousedown", false, true, Window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
					el.dispatchEvent(evt);
				} else if (el.fireEvent) { // IE
					el.fireEvent("onmousedown");
				}
			} else {
				// Delegate intent
				if (data.closed) {
					openOptions(data);
				} else {
					closeOptions(data);
				}
			}
		}
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
			$(Classes.base).not(data.$dropdown).trigger(Events.close, [ data ]);

			var offset = data.$dropdown.offset(),
				bodyHeight = $Body.outerHeight(),
				optionsHeight = data.$wrapper.outerHeight(true),
				selectedOffset = (data.index >= 0) ? data.$items.eq(data.index).position() : { left: 0, top: 0 };

			// Calculate bottom of document
			if (offset.top + optionsHeight > bodyHeight) {
				data.$dropdown.addClass(RawClasses.bottom);
			}

			// Bind Events
			$Body.on(data.clickGUID, ":not(" + Classes.options + ")", data, closeOptionsHelper);

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
			$Body.off(data.clickGUID);

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
		}
	}

	/**
	 * @method private
	 * @name onSelect
	 * @description Handles option select.
	 * @param e [object] "Event data"
	 */

	function onSelect(e) {
		Functions.killEvent(e);

		var $target = $(this),
			data = e.data;

		if (!data.disabled) {
			if (data.$wrapper.is(":visible")) {
				// Update
				var index = data.$items.index($target);

				if (index !== data.index) {
					updateOption(index, data);
					handleChange(data);
				}
			}

			if (!data.multiple) {
				// Clean up
				closeOptions(data);
			}
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
			var index = data.$options.index( data.$options.filter("[value='" + escapeText($target.val()) + "']") );

			updateOption(index, data);
			handleChange(data);
		}
	}

	/**
	 * @method private
	 * @name onFocus
	 * @description Handles instance focus.
	 * @param e [object] "Event data"
	 */

	function onFocus(e) {
		Functions.killEvent(e);

		var data = e.data;

		if (!data.disabled && !data.multiple) {
			data.$dropdown.addClass(RawClasses.focus)
						  .on(data.keyDownGUID, data, onKeypress);
		}
	}

	/**
	 * @method private
	 * @name onBlur
	 * @description Handles instance blur.
	 * @param e [object] "Event data"
	 */

	function onBlur(e, internal) {
		Functions.killEvent(e);

		var data = e.data;

		data.$dropdown.removeClass(RawClasses.focus)
					  .off(data.keyDownGUID);

		if (!data.multiple) {
			// Clean up
			closeOptions(data);
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
					letter,
					i;

				// Search for input from original index
				for (i = data.index + 1; i <= total; i++) {
					letter = data.$options.eq(i).text().charAt(0).toUpperCase();
					if (letter === input) {
						index = i;
						break;
					}
				}

				// If not, start from the beginning
				if (index < 0 || index === data.index) {
					for (i = 0; i <= total; i++) {
						letter = data.$options.eq(i).text().charAt(0).toUpperCase();
						if (letter === input) {
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

	function updateOption(index, data) {
		var $item      = data.$items.eq(index),
			$option    = data.$options.eq(index),
			isSelected = $item.hasClass(RawClasses.item_selected),
			isDisabled = $item.hasClass(RawClasses.item_disabled);

		// Check for disabled options
		if (!isDisabled) {
			if (data.multiple) {
				if (isSelected) {
					$option.prop("selected", null);
					$item.removeClass(RawClasses.item_selected);
				} else {
					$option.prop("selected", true);
					$item.addClass(RawClasses.item_selected);
				}
			} else if (index > -1 && index < data.$items.length) {
				var label = $option.data("label") || $item.html();

				data.$selected.html(label)
							  .removeClass(Classes.item_placeholder);

				data.$items.filter(Classes.item_selected)
						   .removeClass(RawClasses.item_selected);

				data.$el[0].selectedIndex = index;

				$item.addClass(RawClasses.item_selected);
				data.index = index;
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
			selectedOffset = (data.index >= 0 && !$selected.hasClass(Classes.item_placeholder)) ? $selected.position() : { left: 0, top: 0 };

		/*
		if ($.fn.scroller !== undefined) {
			data.$wrapper.scroller("scroll", (data.$wrapper.find(".scroller-content").scrollTop() + selectedOffset.top), 0)
							  .scroller("reset");
		} else {
		*/
			data.$wrapper.scrollTop( data.$wrapper.scrollTop() + selectedOffset.top );
		// }
	}

	/**
	 * @method private
	 * @name handleChange
	 * @description Handles change events.
	 * @param data [object] "Instance data"
	 */

	function handleChange(data) {
		if (data.links) {
			launchLink(data);
		} else {
			data.$el.trigger(Events.raw.change, [ true ]);
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
	 * @dependency core.js
	 * @dependency touch.js
	 */

	var Plugin = Formstone.Plugin("dropdown", {
			widget: true,

			/**
			 * @options
			 * @param cover [boolean] <false> "Cover handle with option set"
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param label [string] <''> "Label displayed before selection"
			 * @param external [boolean] <false> "Open options as links in new window"
			 * @param links [boolean] <false> "Open options as links in same window"
			 * @param mobile [boolean] <false> "Force desktop interaction on mobile"
			 * @param trim [int] <0> "Trim options to specified length; 0 to disable”
			 */
			defaults: {
				cover          : false,
				customClass    : "",
				label          : "",
				external       : false,
				links          : false,
				mobile         : false,
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
				tap:   "tap",
				close: "close"
			}
		}),

		// Localize References

		Classes       = Plugin.classes,
		RawClasses    = Classes.raw,
		Events        = Plugin.events,
		Functions     = Plugin.functions,

		// Local

		GUID          = 0,
		Window        = Formstone.window,
		$Window       = Formstone.$window,
		Document      = Formstone.document,
		$Body         = null;

})(jQuery, Formstone);
/*! Formstone v0.2.0 [equalize.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

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
		data.mqGuid   = RawClasses.base + "__" + (GUID++);

		$.mediaquery("bind", data.mqGuid, data.mq, {
			enter: function() {
				enable.call(data.$el, data);
			},
			leave: function() {
				disable.call(data.$el, data);
			}
		});

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
		cacheInstances();
	}

	/**
	 * @method private
	 * @name resizeInstance
	 * @description Handle window resize event
	 * @param data [object] "Instance data"
	 */

	function resizeInstance(data) {
		if (data.enabled) {
			var $targets = data.target ? data.$el.find(data.target) : data.$el.children(),
				type     = (data.property === "height") ? "outerHeight" : "outerWidth",
				value    = 0,
				check    = 0;

			$targets.css(data.property, "");

			for (var i = 0; i < $targets.length; i++) {
				check = $targets.eq(i)[type]();

				if (check > value) {
					value = check;
				}
			}

			$targets.css(data.property, value);
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

			var $targets = data.target ? data.$el.find(data.target) : data.$el.children(),
				type     = (data.property === "height") ? "outerHeight" : "outerWidth";

			$targets.css(data.property, "");
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

			resizeInstance(data);
		}
	}

	/**
	 * @plugin
	 * @name Equalize
	 * @description A jQuery plugin for equal dimensions.
	 * @type widget
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
			 * @param target [string] <null> "Target child selector"
			 */

			defaults: {
				maxWidth    : Infinity,
				minWidth    : '0px',
				property    : "height",
				target      : null
			},

			methods : {
				_construct    : construct,
				_destruct     : destruct,
				_resize       : resize
			}
		}),

		// Localize References

		Classes        = Plugin.classes,
		RawClasses     = Classes.raw,
		Functions      = Plugin.functions,
		GUID           = 0,

		$Instances     = [];

})(jQuery, Formstone);
/*! Formstone v0.2.0 [lightbox.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name setup
	 * @description Setup plugin.
	 */

	function setup() {
		$Body = Formstone.$body;
		$Locks = $("html, body");
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

			buildLightbox.apply(Window, [{ data: $.extend({}, {
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
			// Check target type
			var data           = e.data,
				$el            = data.$el,
				$object        = data.$object,
				source         = ($el && $el[0].href) ? $el[0].href || "" : "",
				hash           = ($el && $el[0].hash) ? $el[0].hash || "" : "",
				sourceParts    = source.toLowerCase().split(".").pop().split(/\#|\?/),
				extension      = sourceParts[0],
				type           = ($el) ? $el.data(Namespace + "-type") : "",
				isImage	       = ( (type === "image") || ($.inArray(extension, data.extensions) > -1 || source.substr(0, 10) === "data:image") ),
				isVideo	       = ( source.indexOf("youtube.com/embed") > -1 || source.indexOf("player.vimeo.com/video") > -1 ),
				isUrl	       = ( (type === "url") || (!isImage && !isVideo && source.substr(0, 4) === "http" && !hash) ),
				isElement      = ( (type === "element") || (!isImage && !isVideo && !isUrl && (hash.substr(0, 1) === "#")) ),
				isObject       = ( (typeof $object !== "undefined") );

			if (isElement) {
				source = hash;
			}

			// Retain default click
			if ( !(isImage || isVideo || isUrl || isElement || isObject) ) {
				return;
			}

			// Kill event
			Functions.killEvent(e);

			// Cache internal data
			Instance = $.extend({}, {
				visible            : false,
				gallery: {
					active         : false
				},
				isMobile           : (Formstone.isMobile || data.mobile),
				isAnimating        : true,
				oldContentHeight   : 0,
				oldContentWidth    : 0
			}, data);

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

			// Assemble HTML
			var html = '';
			if (!Instance.isMobile) {
				html += '<div class="' + [Classes.raw.overlay, Instance.customClass].join(" ") + '"></div>';
			}
			var lightboxClasses = [
				Classes.raw.base,
				Classes.raw.loading,
				Classes.raw.animating,
				Instance.customClass
			];

			if (Instance.fixed) {
				lightboxClasses.push(Classes.raw.fixed);
			}
			if (Instance.isMobile) {
				lightboxClasses.push(Classes.raw.mobile);
			}
			if (isUrl) {
				lightboxClasses.push(Classes.raw.iframed);
			}
			if (isElement || isObject) {
				lightboxClasses.push(Classes.raw.inline);
			}

			html += '<div class="' + lightboxClasses.join(" ") + '">';
			html += '<button type="button" class="' + Classes.raw.close + '">' + Instance.labels.close + '</button>';
			html += '<span class="' + Classes.raw.loading_icon + '"></span>';
			html += '<div class="' + Classes.raw.container + '">';
			html += '<div class="' + Classes.raw.content + '">';
			if (isImage || isVideo) {
				html += '<div class="' + Classes.raw.meta + '">';

				if (Instance.gallery.active) {
					html += '<button type="button" class="' + [Classes.raw.control, Classes.raw.control_previous].join(" ") + '">' + Instance.labels.previous + '</button>';
					html += '<button type="button" class="' + [Classes.raw.control, Classes.raw.control_next].join(" ") + '">' + Instance.labels.next + '</button>';
					html += '<p class="' + Classes.raw.position + '"';
					if (Instance.gallery.total < 1) {
						html += ' style="display: none;"';
					}
					html += '>';
					html += '<span class="' + Classes.raw.position_current + '">' + (Instance.gallery.index + 1) + '</span> ';
					html += Instance.labels.count;
					html += ' <span class="' + Classes.raw.position_total + '">' + (Instance.gallery.total + 1) + '</span>';
					html += '</p>';
				}

				html += '<div class="' + Classes.raw.caption + '">';
				html += Instance.formatter.call($el, data);
				html += '</div></div>'; // caption, meta
			}
			html += '</div></div></div>'; //container, content, lightbox

			// Modify Dom
			$Body.append(html);

			// Cache jquery objects
			Instance.$overlay          = $(Classes.overlay);
			Instance.$lightbox         = $(Classes.base);
			Instance.$close            = $(Classes.close);
			Instance.$container        = $(Classes.container);
			Instance.$content          = $(Classes.content);
			Instance.$meta             = $(Classes.meta);
			Instance.$position         = $(Classes.position);
			Instance.$caption          = $(Classes.caption);
			Instance.$controls         = $(Classes.control);

			Instance.paddingVertical   = (!Instance.isMobile) ? (parseInt(Instance.$lightbox.css("paddingTop"), 10)  + parseInt(Instance.$lightbox.css("paddingBottom"), 10)) : (Instance.$close.outerHeight() / 2);
			Instance.paddingHorizontal = (!Instance.isMobile) ? (parseInt(Instance.$lightbox.css("paddingLeft"), 10) + parseInt(Instance.$lightbox.css("paddingRight"), 10))  : 0;
			Instance.contentHeight     = Instance.$lightbox.outerHeight() - Instance.paddingVertical;
			Instance.contentWidth      = Instance.$lightbox.outerWidth()  - Instance.paddingHorizontal;
			Instance.controlHeight     = Instance.$controls.outerHeight();

			// Center
			centerLightbox();

			// Update gallery
			if (Instance.gallery.active) {
				updateGalleryControls();
			}

			// Bind events
			$Window.on(Events.keyDown, onKeyDown);

			$Body.on(Events.clickTouchStart, [Classes.overlay, Classes.close].join(", "), closeLightbox);

			if (Instance.gallery.active) {
				Instance.$lightbox.on(Events.clickTouchStart, Classes.control, advanceGallery);
			}

			Instance.$lightbox.transition({
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
					cloneElement(source);
				} else if (isObject) {
					appendObject(Instance.$object);
				}
			}).addClass(Classes.raw.open);

			Instance.$overlay.addClass(Classes.raw.open);
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
	 * @method
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
			Instance.$lightbox.transition("destroy");
			Instance.$container.transition("destroy");

			Instance.$lightbox.addClass(Classes.raw.animating).transition({
				property: "opacity"
			},
			function(e) {
				// Clean up
				Instance.$lightbox.off(Events.namespace);
				Instance.$container.off(Events.namespace);
				$Window.off(Events.namespace);
				$Body.off(Events.namespace);

				Instance.$overlay.remove();
				Instance.$lightbox.remove();

				// Reset Instance
				Instance = null;

				$Window.trigger(Events.close);
			});

			Instance.$lightbox.removeClass(Classes.raw.open);
			Instance.$overlay.removeClass(Classes.raw.open);

			if (Instance.isMobile) {
				$Locks.removeClass(RawClasses.lock);
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

		if (!Instance.isMobile) {
			Instance.$controls.css({
				marginTop: ((Instance.contentHeight - Instance.controlHeight - Instance.metaHeight) / 2)
			});
		}

		if (!Instance.visible && Instance.isMobile && Instance.gallery.active) {
			Instance.$content.touch({
				axis: "x",
				swipe: true
			}).on(Events.swipe, onSwipe);
		}

		Instance.$lightbox.transition({
			property: (Instance.contentHeight !== Instance.oldContentHeight) ? "height" : "width"
		},
		function() {
			Instance.$container.transition({
				property: "opacity"
			},
			function() {
				Instance.$lightbox.removeClass(Classes.raw.animating);
				Instance.isAnimating = false;
			});

			Instance.$lightbox.removeClass(Classes.raw.loading);

			Instance.visible = true;

			// Fire open event
			$Window.trigger(Events.open);

			// Start preloading
			if (Instance.gallery.active) {
				preloadGallery();
			}
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
			Instance.$lightbox.transition("resolve");
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
				marginTop: ((Instance.contentHeight - Instance.controlHeight - Instance.metaHeight) / 2)
			});

			Instance.$lightbox.css({
				height: Instance.contentHeight + Instance.paddingVertical,
				width:  Instance.contentWidth  + Instance.paddingHorizontal,
				top:    (!Instance.fixed) ? position.top : 0
			});
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
			left: ($Window.width() - Instance.contentWidth - Instance.paddingHorizontal) / 2,
			top: (Instance.top <= 0) ? (($Window.height() - Instance.contentHeight - Instance.paddingVertical) / 2) : Instance.top
		};

		if (Instance.fixed !== true) {
			pos.top += $Window.scrollTop();
		}

		return pos;
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
	 * @name loadImage
	 * @description Loads source image.
	 * @param source [string] "Source image URL"
	 */

	function loadImage(source) {
		// Cache current image
		Instance.$image = $("<img>");

		Instance.$image.one(Events.load, function() {
			var naturalSize = calculateNaturalSize(Instance.$image);

			Instance.naturalHeight = naturalSize.naturalHeight;
			Instance.naturalWidth  = naturalSize.naturalWidth;

			if (Instance.retina) {
				Instance.naturalHeight /= 2;
				Instance.naturalWidth  /= 2;
			}

			Instance.$content.prepend(Instance.$image);

			if (Instance.$caption.html() === "") {
				Instance.$caption.hide();
			} else {
				Instance.$caption.show();
			}

			// Size content to be sure it fits the viewport
			sizeImage();

			openLightbox();

		}).error(loadError)
		  .attr("src", source)
		  .addClass(Classes.raw.image);

		// If image has already loaded into cache, trigger load event
		if (Instance.$image[0].complete || Instance.$image[0].readyState === 4) {
			Instance.$image.trigger(Events.load);
		}
	}

	/**
	 * @method private
	 * @name sizeImage
	 * @description Sizes image to fit in viewport.
	 * @param count [int] "Number of resize attempts"
	 */

	function sizeImage() {
		var count = 0;

		Instance.windowHeight = Instance.viewportHeight = $Window.height() - Instance.paddingVertical;
		Instance.windowWidth  = Instance.viewportWidth  = $Window.width()  - Instance.paddingHorizontal;

		Instance.contentHeight = Infinity;
		Instance.contentWidth = Infinity;

		Instance.imageMarginTop  = 0;
		Instance.imageMarginLeft = 0;

		while (Instance.contentHeight > Instance.viewportHeight && count < 2) {
			Instance.imageHeight = (count === 0) ? Instance.naturalHeight : Instance.$image.outerHeight();
			Instance.imageWidth  = (count === 0) ? Instance.naturalWidth  : Instance.$image.outerWidth();
			Instance.metaHeight  = (count === 0) ? 0 : Instance.metaHeight;

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
				// Get meta height before sizing
				Instance.$meta.css({
					width: Instance.windowWidth
				});
				Instance.metaHeight = Instance.$meta.outerHeight(true);

				// Content match viewport
				Instance.contentHeight = Instance.viewportHeight - Instance.paddingVertical;
				Instance.contentWidth  = Instance.viewportWidth  - Instance.paddingHorizontal;

				fitImage();

				Instance.imageMarginTop  = (Instance.contentHeight - Instance.targetImageHeight - Instance.metaHeight) / 2;
				Instance.imageMarginLeft = (Instance.contentWidth  - Instance.targetImageWidth) / 2;
			} else {
				// Viewport should match window, less margin, padding and meta
				if (count === 0) {
					Instance.viewportHeight -= (Instance.margin + Instance.paddingVertical);
					Instance.viewportWidth  -= (Instance.margin + Instance.paddingHorizontal);
				}
				Instance.viewportHeight -= Instance.metaHeight;

				fitImage();

				Instance.contentHeight = Instance.targetImageHeight;
				Instance.contentWidth  = Instance.targetImageWidth;
			}

			// Modify DOM

			Instance.$meta.css({
				width: Instance.contentWidth
			});

			Instance.$image.css({
				height: Instance.targetImageHeight,
				width:  Instance.targetImageWidth,
				marginTop:  Instance.imageMarginTop,
				marginLeft: Instance.imageMarginLeft
			});

			if (!Instance.isMobile) {
				Instance.metaHeight = Instance.$meta.outerHeight(true);
				Instance.contentHeight += Instance.metaHeight;
			}

			count ++;
		}
	}

	/**
	 * @method private
	 * @name fitImage
	 * @description Calculates target image size.
	 */

	function fitImage() {
		var height = (!Instance.isMobile) ? Instance.viewportHeight : Instance.contentHeight - Instance.metaHeight,
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

	function loadVideo(source) {
		Instance.$videoWrapper = $('<div class="' + Classes.raw.videoWrapper + '"></div>');
		Instance.$video = $('<iframe class="' + Classes.raw.video + '" seamless="seamless"></iframe>');

		Instance.$video.attr("src", source)
				   .addClass(Classes.raw.video)
				   .prependTo(Instance.$videoWrapper);

		Instance.$content.prepend(Instance.$videoWrapper);

		sizeVideo();
		openLightbox();
	}

	/**
	 * @method private
	 * @name sizeVideo
	 * @description Sizes video to fit in viewport.
	 */

	function sizeVideo() {
		// Set initial vars
		Instance.windowHeight = Instance.viewportHeight = Instance.contentHeight = $Window.height() - Instance.paddingVertical;
		Instance.windowWidth  = Instance.viewportWidth  = Instance.contentWidth  = $Window.width()  - Instance.paddingHorizontal;
		Instance.videoMarginTop = 0;
		Instance.videoMarginLeft = 0;

		if (Instance.isMobile) {
			Instance.$meta.css({
				width: Instance.windowWidth
			});
			Instance.metaHeight = Instance.$meta.outerHeight(true);
			Instance.viewportHeight -= Instance.metaHeight;

			Instance.targetVideoWidth  = Instance.viewportWidth;
			Instance.targetVideoHeight = Instance.targetVideoWidth * Instance.videoRatio;

			if (Instance.targetVideoHeight > Instance.viewportHeight) {
				Instance.targetVideoHeight = Instance.viewportHeight;
				Instance.targetVideoWidth  = Instance.targetVideoHeight / Instance.videoRatio;
			}

			Instance.videoMarginTop = (Instance.viewportHeight - Instance.targetVideoHeight) / 2;
			Instance.videoMarginLeft = (Instance.viewportWidth - Instance.targetVideoWidth) / 2;
		} else {
			Instance.viewportHeight = Instance.windowHeight - Instance.margin;
			Instance.viewportWidth  = Instance.windowWidth - Instance.margin;

			Instance.targetVideoWidth  = (Instance.videoWidth > Instance.viewportWidth) ? Instance.viewportWidth : Instance.videoWidth;
			if (Instance.targetVideoWidth < Instance.minWidth) {
				Instance.targetVideoWidth = Instance.minWidth;
			}
			Instance.targetVideoHeight = Instance.targetVideoWidth * Instance.videoRatio;

			Instance.contentHeight = Instance.targetVideoHeight;
			Instance.contentWidth  = Instance.targetVideoWidth;
		}

		// Update dom

		Instance.$meta.css({
			width: Instance.contentWidth
		});

		Instance.$videoWrapper.css({
			height: Instance.targetVideoHeight,
			width: Instance.targetVideoWidth,
			marginTop: Instance.videoMarginTop,
			marginLeft: Instance.videoMarginLeft
		});

		if (!Instance.isMobile) {
			Instance.metaHeight = Instance.$meta.outerHeight(true);
			Instance.contentHeight = Instance.targetVideoHeight + Instance.metaHeight;
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
			if (source.indexOf("youtube.com/embed") < 0 && source.indexOf("player.vimeo.com/video") < 0) {
				$('<img src="' + source + '">');
			}
		}
		if (Instance.gallery.index < Instance.gallery.total) {
			source = Instance.gallery.$items.eq(Instance.gallery.index + 1).attr("href");
			if (source.indexOf("youtube.com/embed") < 0 && source.indexOf("player.vimeo.com/video") < 0) {
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

		if (!Instance.isAnimating && !$control.hasClass(Classes.raw.control_disabled)) {
			Instance.isAnimating = true;

			Instance.gallery.index += ($control.hasClass(Classes.raw.control_next)) ? 1 : -1;
			if (Instance.gallery.index > Instance.gallery.total) {
				Instance.gallery.index = (Instance.infinite) ? 0 : Instance.gallery.total;
			}
			if (Instance.gallery.index < 0) {
				Instance.gallery.index = (Instance.infinite) ? Instance.gallery.total : 0;
			}

			Instance.$container.transition({
				property: "opacity"
			},
			function() {
				if (typeof Instance.$image !== 'undefined') {
					Instance.$image.remove();
				}
				if (typeof Instance.$videoWrapper !== 'undefined') {
					Instance.$videoWrapper.remove();
				}
				Instance.$el = Instance.gallery.$items.eq(Instance.gallery.index);

				Instance.$caption.html(Instance.formatter.call(Instance.$el, Instance));
				Instance.$position.find(Classes.position_current).html(Instance.gallery.index + 1);

				var source = Instance.$el.attr("href"),
					isVideo = ( source.indexOf("youtube.com/embed") > -1 || source.indexOf("player.vimeo.com/video") > -1 );

				if (isVideo) {
					loadVideo(source);
				} else {
					loadImage(source);
				}

				updateGalleryControls();
			});

			Instance.$lightbox.addClass( [Classes.raw.loading, Classes.raw.animating].join(" "));
		}
	}

	/**
	 * @method private
	 * @name updateGalleryControls
	 * @description Updates gallery control states.
	 */

	function updateGalleryControls() {
		Instance.$controls.removeClass(Classes.raw.control_disabled);

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
	 * @name cloneElement
	 * @description Clones target inline element.
	 * @param id [string] "Target element id"
	 */

	function cloneElement(id) {
		var $clone = $(id).find("> :first-child").clone();
		appendObject($clone);
	}

	/**
	 * @method private
	 * @name loadURL
	 * @description Load URL into iframe.
	 * @param source [string] "Target URL"
	 */

	function loadURL(source) {
		source = source + ((source.indexOf("?") > -1) ? "&" + Instance.requestKey + "=true" : "?" + Instance.requestKey + "=true");
		var $iframe = $('<iframe class="' + Classes.raw.iframe + '" src="' + source + '"></iframe>');
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
		Instance.windowHeight	  = $Window.height() - Instance.paddingVertical;
		Instance.windowWidth	  = $Window.width()  - Instance.paddingHorizontal;
		Instance.objectHeight	  = $object.outerHeight(true);
		Instance.objectWidth	  = $object.outerWidth(true);
		Instance.targetHeight	  = Instance.targetHeight || (Instance.$el ? Instance.$el.data(Namespace + "-height") : null);
		Instance.targetWidth	  = Instance.targetWidth  || (Instance.$el ? Instance.$el.data(Namespace + "-width")  : null);
		Instance.maxHeight		  = (Instance.windowHeight < 0) ? Instance.minHeight : Instance.windowHeight;
		Instance.isIframe		  = $object.is("iframe");
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
	}

	/**
	 * @method private
	 * @name loadError
	 * @description Error when resource fails to load.
	 * @param e [object] "Event data"
	 */

	function loadError(e) {
		var $error = $('<div class="' + Classes.raw.error + '"><p>Error Loading Resource</p></div>');

		// Clean up
		Instance.type = "element";
		Instance.$meta.remove();

		Instance.$image.off(Events.namespace);

		appendObject($error);
	}

	/**
	 * @method private
	 * @name onSwipe
	 * @description Handles swipe event
	 * @param e [object] "Event data"
	 */

	function onSwipe(e) {
		Instance.$controls.filter((e.directionX === "left") ? Classes.control_next : Classes.control_previous).trigger(Events.click);
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
	 * @plugin
	 * @name Lightbox
	 * @description A jQuery plugin for simple modals.
	 * @type widget
	 * @dependency core.js
	 * @dependency transition.js
	 */

	var Plugin = Formstone.Plugin("lightbox", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param extensions [array] <"jpg", "sjpg", "jpeg", "png", "gif"> "Image type extensions"
			 * @param fixed [boolean] <false> "Flag for fixed positioning"
			 * @param formatter [function] <$.noop> "Caption format function"
			 * @param infinite [boolean] <false> "Flag for infinite galleries"
			 * @param labels.close [string] <'Close'> "Close button text"
			 * @param labels.count [string] <'of'> "Gallery count separator text"
			 * @param labels.next [string] <'Next'> "Gallery control text"
			 * @param labels.previous [string] <'Previous'> "Gallery control text"
			 * @param margin [int] <50> "Margin used when sizing (single side)"
			 * @param minHeight [int] <100> "Minimum height of modal"
			 * @param minWidth [int] <100> "Minimum width of modal"
			 * @param mobile [boolean] <false> "Flag to force 'mobile' rendering"
			 * @param retina [boolean] <false> "Flag to use 'retina' sizing (halves natural sizes)"
			 * @param requestKey [string] <'fs-lightbox'> "GET variable for ajax / iframe requests"
			 * @param top [int] <0> "Target top position; over-rides centering"
			 * @param videoRadio [number] <0.5625> "Video height / width ratio (9 / 16 = 0.5625)"
			 * @param videoWidth [int] <600> "Video target width"
			 */

			defaults: {
				customClass    : "",
				extensions     : [ "jpg", "sjpg", "jpeg", "png", "gif" ],
				fixed          : false,
				formatter      : formatCaption,
				infinite       : false,
				labels: {
					close      : "Close",
					count      : "of",
					next       : "Next",
					previous   : "Previous"
				},
				margin         : 50,
				minHeight      : 100,
				minWidth       : 100,
				mobile         : false,
				retina         : false,
				requestKey     : "fs-lightbox",
				top            : 0,
				videoRatio     : 0.5625,
				videoWidth     : 600
			},

			classes: [
				"loading",
				"animating",
				"fixed",
				"mobile",
				"inline",
				"iframed",
				"open",
				"overlay",
				"close",
				"loading_icon",
				"container",
				"content",
				"image",
				"video",
				"video_wrapper",
				"meta",
				"control",
				"control_previous",
				"control_next",
				"control_disabled",
				"position",
				"position_current",
				"position_total",
				"caption",
				"iframe",
				"error",
				"lock"
			],

			/**
			 * @events
			 * @event open.lightbox "Lightbox opened; Triggered on window"
			 * @event close.lightbox "Lightbox closed; Triggered on window"
			 */

			events: {
				open     : "open",
				close    : "close",

				swipe    : "swipe"
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

		// Singleton

		Instance      = null;

})(jQuery, Formstone);
/*! Formstone v0.2.0 [mediaquery.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

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

		onBindingChange(Bindings[mqKey].mq);
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
					if (MQMatches[i].hasOwnProperty(j) && MQMatches[i][j].matches) {

						var state = (j === "Infinity") ? Infinity : parseInt(j, 10);

						if (i.indexOf("max") > -1) {
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
			event      = mq.matches ? Events.enter : Events.leave;

		if (binding && binding.active || (!binding.active && mq.matches)) {
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

})(jQuery, Formstone);
/*! Formstone v0.2.0 [pagination.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		data.mq       = "(max-width:" + (data.maxWidth === Infinity ? "100000px" : data.maxWidth) + ")";
		data.mqGuid   = RawClasses.base + "__" + (GUID++);

		var html = "";
		html += '<button type="button" class="' + [RawClasses.control, RawClasses.control_previous].join(" ") + '">' + data.labels.previous + '</button>';
		html += '<button type="button" class="' + [RawClasses.control, RawClasses.control_next].join(" ") + '">' + data.labels.next + '</button>';
		html += '<div class="' + RawClasses.position + '">';
		html += '<span class="' + RawClasses.current + '">0</span>';
		html += ' ' + data.labels.count + ' ';
		html += '<span class="' + RawClasses.total + '">0</span>';
		html += '</div>';
		html += '<select class="' + RawClasses.select + '" tab-index="-1"></select>';

		this.addClass(RawClasses.base)
			.wrapInner('<div class="' + RawClasses.pages + '"></div>')
			.prepend(html);

		data.$controls  = this.find(Classes.control);
		data.$pages     = this.find(Classes.pages);
		data.$items     = data.$pages.children().addClass(RawClasses.page);
		data.$position  = this.find(Classes.position);
		data.$select    = this.find(Classes.select);
		data.index      = -1;

		data.total = data.$items.length - 1;

		var index = data.$items.index(data.$items.filter(Classes.active));

		data.$items.eq(0)
				   .addClass(RawClasses.first)
				   .after('<span class="' + RawClasses.ellipsis + '">&hellip;</span>')
				   .end()
				   .eq(data.total)
				   .addClass(RawClasses.last)
				   .before('<span class="' + RawClasses.ellipsis + '">&hellip;</span>');

		data.$ellipsis = data.$pages.find(Classes.ellipsis);

		buildMobilePages(data);

		this.on(Events.clickTouchStart, Classes.page, data, onPageClick)
			.on(Events.clickTouchStart, Classes.control, data, onControlClick)
			.on(Events.clickTouchStart, Classes.position, data, onPositionClick)
			.on(Events.change, Classes.select, onPageSelect);

		$.mediaquery("bind", data.mqGuid, data.mq, {
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
		$.mediaquery("unbind", data.mqGuid, data.mq);

		data.$controls.remove();
		data.$ellipsis.remove();
		data.$select.remove();
		data.$position.remove();
		data.$items.removeClass( [RawClasses.page, RawClasses.active, RawClasses.visible, RawClasses.first, RawClasses.last].join(" ") )
				   .unwrap();

		this.removeClass(RawClasses.base)
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
		var data = e.data,
			index = data.$items.index( $(e.currentTarget) );

		if (data.ajax) {
			Functions.killEvent(e);
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
					   .filter(Classes.active)
					   .removeClass(RawClasses.active)
					   .end()
					   .eq(data.index)
					   .addClass(RawClasses.active)
					   .end()
					   .slice(start, end)
					   .addClass(RawClasses.visible);

			data.$position.find(Classes.current)
						  .text(data.index + 1)
						  .end()
						  .find(Classes.total)
						  .text(data.total + 1);

			data.$select.val(data.index);

			// controls
			data.$controls.removeClass(Classes.disabled);

			if (index === 0) {
				data.$controls.filter(Classes.control_previous).addClass(RawClasses.disabled);
			}
			if (index === data.total) {
				data.$controls.filter(Classes.control_next).addClass(RawClasses.disabled);
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
				visible         : 2
			},

			classes: [
				"pages",
				"page",

				"active",
				"first",
				"last",
				"visible",
				"ellipsis",

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
		Functions     = Plugin.functions,
		GUID          = 0;

})(jQuery, Formstone);
/*! Formstone v0.2.0 [navigation.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name setup
	 * @description Setup plugin.
	 */

	function setup() {
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
		data.guid         = "__" + (GUID++);
		data.eventGuid    = Events.namespace + data.guid;
		data.rawGuid      = RawClasses.base + data.guid;
		data.classGuid    = "." + data.rawGuid;

		data.isToggle     = (data.type === "toggle");

		if (data.isToggle) {
			data.gravity  = "";
		}

		var baseClass     = RawClasses.base,
			typeClass     = [baseClass, data.type].join("-"),
			gravityClass  = data.gravity ? [typeClass, data.gravity].join("-") : "",
			classGroup    = [data.rawGuid, data.customClass].join(" ");

		data.handle       = this.data(Namespace + "-handle");
		data.content      = this.data(Namespace + "-content");

		data.handleClasses = [
			RawClasses.handle,
			RawClasses.handle.replace(baseClass, typeClass),
			RawClasses.handle.replace(baseClass, gravityClass),
			classGroup
		].join(" ");

		data.navClasses = [
			RawClasses.nav.replace(baseClass, typeClass),
			RawClasses.nav.replace(baseClass, gravityClass),
			classGroup
		].join(" ");

		data.contentClasses = [
			RawClasses.content.replace(baseClass, typeClass),
			RawClasses.content.replace(baseClass, gravityClass),
			classGroup
		].join(" ");

		// DOM

		data.$nav        = this.addClass(data.navClasses);
		data.$handle     = $(data.handle).addClass(data.handleClasses);
		data.$content    = $(data.content).addClass(data.contentClasses);
		data.$animate    = $().add(data.$nav).add(data.$content);

		if (data.label) {
			data.originalLabel = data.$handle.text();
		}

		// toggle

		data.$handle.attr("data-swap-target", data.classGuid)
					.on("activate.swap" + data.eventGuid, data, onOpen)
					.on("deactivate.swap" + data.eventGuid, data, onClose)
					.on("enable.swap" + data.eventGuid, data, onEnable)
					.on("disable.swap" + data.eventGuid, data, onDisable)
					.swap({
						maxWidth: data.maxWidth,
						classes: {
							target  : data.classGuid,
							enabled : Classes.enabled,
							active  : Classes.open,
							raw: {
								target  : data.rawGuid,
								enabled : RawClasses.enabled,
								active  : RawClasses.open
							}
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
		data.$content.removeClass(data.contentClasses)
					 .off(Events.namespace);

		data.$handle.attr("data-swap-target", "")
					.removeClass(data.handleClasses)
					.off(data.eventGuid)
					.text(data.originalLabel)
					.swap("destroy");

		this.removeClass(data.navClasses)
			.off(Events.namespace);
	}

	/**
	 * @method
	 * @name open
	 * @description Opens instance.
	 * @example $(".target").navigation("open");
	 */

	function open(data) {
		data.$handle.swap("activate");
	}

	/**
	 * @method
	 * @name close
	 * @description Closes instance.
	 * @example $(".target").navigation("close");
	 */

	function close(data) {
		data.$handle.swap("deactivate");
	}

	/**
	 * @method
	 * @name enable
	 * @description Enables instance.
	 * @example $(".target").navigation("enable");
	 */

	function enable(data) {
		data.$handle.swap("enable");
	}

	/**
	 * @method
	 * @name disable
	 * @description Disables instance.
	 * @example $(".target").navigation("disable");
	 */

	function disable(data) {
		data.$handle.swap("disable");
	}

	/**
	 * @method private
	 * @name onOpen
	 * @description Handles nav open event.
	 * @param e [object] "Event data"
	 */

	function onOpen(e) {
		var data = e.data;

		data.$el.trigger(Events.open);

		data.$content.addClass(RawClasses.open)
					 .one(Events.clickTouchStart, function() {
						close(data);
					 });

		if (data.label) {
			data.$handle.text(data.labels.open);
		}

		if (!data.isToggle) {
			$Locks.addClass(RawClasses.lock);
		}
	}

	/**
	 * @method private
	 * @name onClose
	 * @description Handles nav close event.
	 * @param e [object] "Event data"
	 */

	function onClose(e) {
		var data = e.data;

		data.$el.trigger(Events.close);

		data.$content.removeClass(RawClasses.open)
					 .off(Events.namespace);

		if (data.label) {
			data.$handle.text(data.labels.closed);
		}

		if (!data.isToggle) {
			$Locks.removeClass(RawClasses.lock);
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

		data.$content.addClass(RawClasses.enabled);

		setTimeout(function() {
			data.$animate.addClass(RawClasses.animated);
		}, 0);

		if (data.label) {
			data.$handle.text(data.labels.closed);
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

		data.$content.removeClass(RawClasses.enabled, RawClasses.animated);
		data.$animate.removeClass(RawClasses.animated);

		if (data.label) {
			data.$handle.text(data.originalLabel);
		}
	}

	/**
	 * @plugin
	 * @name Navigation
	 * @description A jQuery plugin for simple responsive navigation.
	 * @type widget
	 * @dependency core.js
	 * @dependency mediaquery.js
	 * @dependency swap.js
	 * @dependency touch.js
	 */

	var Plugin = Formstone.Plugin("navigation", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param gravity [string] <'left'> "Gravity of 'push' and 'overlay' navigation; 'right', 'left'"
			 * @param label [boolean] <true> "Display handle width label"
			 * @param labels.closed [string] <'Menu'> "Closed state text"
			 * @param labels.open [string] <'Close'> "Open state text"
			 * @param maxWidth [string] <'980px'> "Width at which to auto-disable plugin"
			 * @param type [string] <'toggle'> "Type of navigation; 'toggle', 'push', 'overlay'"
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
				type           : "toggle"
			},

			classes: [
				"handle",
				"nav",
				"content",
				"animated",
				"enabled",
				"open",
				"toggle",
				"push",
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
				tap      : "tap",
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

		// Internal

		GUID          = 0,
		$Locks        = null;

})(jQuery, Formstone);
/*! Formstone v0.2.0 [number.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

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

		data.min  = (min || min === 0) ? min : false;
		data.max  = (max || max === 0) ? max : false;
		data.step = parseFloat(this.attr("step")) || 1;
		data.timer        = null;
		data.digits       = significantDigits(data.step);
		data.disabled     = this.prop("disabled");

		var html = "";
		html += '<button type="button" class="' + [RawClasses.arrow, RawClasses.up].join(" ") + '">'   + data.labels.up + '</button>';
		html += '<button type="button" class="' + [RawClasses.arrow, RawClasses.down].join(" ") + '">' + data.labels.down + '</button>';

		// Modify DOM
		this.wrap('<div class="' + [RawClasses.base, data.customClass, (data.disabled) ? RawClasses.disabled : ""].join(" ") + '"></div>')
			.after(html);

		// Store data
		data.$container    = this.parent(Classes.base);
		data.$arrows       = data.$container.find(Classes.arrow);

		// Bind keyboard events
		this.on(Events.keyPress, Classes.element, data, onKeyup);

		// Bind click events
		data.$container.on( [Events.touchStart, Events.mouseDown].join(" "), Classes.arrow, data, onMouseDown);
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
	 * @name onMouseDown
	 * @description Handles mousedown event on instance arrows
	 * @param e [object] "Event data"
	 */

	function onMouseDown(e) {
		Functions.killEvent(e);

		// Make sure we reset the states
		onMouseUp(e);

		var data = e.data;

		if (!data.disabled) {
			var change = $(e.target).hasClass(RawClasses.up) ? data.step : -data.step;

			data.timer = Functions.startTimer(data.timer, 110, function() {
				step(data, change, false);
			}, true);

			step(data, change);

			$Body.on( [Events.touchEnd, Events.mouseUp].join(" "), data, onMouseUp);
		}
	}

	/**
	 * @method private
	 * @name onMouseUp
	 * @description Handles mouseup event on instance arrows
	 * @param e [object] "Event data"
	 */

	function onMouseUp(e) {
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
			value -= data.step;
		}

		if (value !== oValue) {
			value = round(value, data.digits);

			data.$el.val(value)
					.trigger(Events.raw.change);
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
	 * @dependency core.js
	 */

	var Plugin = Formstone.Plugin("number", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param labels.up [string] <'Up'> "Up arrow label"
			 * @param labels.down [string] <'Down'> "Down arrow label"
			 */

			defaults: {
				customClass    : "",
				labels : {
					up         : "Up",
					down       : "Down"
				}
			},

			classes: [
				"arrow",
				"up",
				"down",
				"disabled"
			],

			methods: {
				_setup        : setup,
				_construct    : construct,
				_destruct     : destruct,

				// Public Methods

				enable        : enable,
				disable       : disable
			},

			events: {
				tap    : "tap"
			}
		}),

		// Localize References

		Classes       = Plugin.classes,
		RawClasses    = Classes.raw,
		Events        = Plugin.events,
		Functions     = Plugin.functions,

		$Body    = null;

})(jQuery, Formstone);
/*! Formstone v0.2.0 [range.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

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
		data.disbaled = this.is(":disabled");
		data.vertical = this.attr("orient") === "vertical" || data.vertical;

		html += '<div class="' + RawClasses.track + '">';
		html += '<div class="' + RawClasses.handle + '">';
		html += '<span class="' + RawClasses.marker + '"></span>';
		html += '</div>';
		html += '</div>';

		var baseClasses = [
			RawClasses.base,
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

		data.$container.touch({
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
					   .touch("destroy");

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

		if (!data.disbaled) {
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

		if (data.vertical) {
			percent = 1 - (e.pageY - data.offset.top) / data.trackHeight;
		} else {
			percent = (e.pageX - data.offset.left) / data.trackWidth;
		}

		position(data, percent);
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

		data.$container.removeClass(RawClasses.focus);
	}

	/**
	 * @method private
	 * @name onFocus
	 * @description Handles instance focus
	 * @param e [object] "Event data"
	 */

	function onFocus(e) {
		e.data.$container.addClass("focus");
	}

	/**
	 * @method private
	 * @name onBlur
	 * @description Handles instance blur
	 * @param e [object] "Event data"
	 */

	function onBlur(e) {
		e.data.$container.removeClass("focus");
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

		data.$handle.css((data.vertical) ? "bottom" : "left", (perc * 100) + "%");
		value += data.min;

		if (value !== data.value && value && isResize !== true) {
			data.$el.val(value)
					.trigger(Events.change, [ true ]);

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
	 * @dependency core.js
	 * @dependency touch.js
	 */

	var Plugin = Formstone.Plugin("range", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param formatter [function] <false> "Value format function"
			 * @param labels [boolean] <true> "Draw labels"
			 * @param labels.max [string] "Max value label; defaults to max value"
			 * @param labels.min [string] "Min value label; defaults to min value"
			 * @param vertical [boolean] <false> "Flag to render vertical range; Deprecated use 'orientation' attribute instead
			 */

			defaults: {
				customClass    : "",
				formatter      : false,
				labels: {
					max        : false,
					min        : false
				},
				vertical       : false
			},

			classes: [
				"track",
				"handle",
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
				resize        : resizeInstance
			},

			events: {
				panStart    : "panstart",
				pan         : "pan",
				panEnd      : "panend"
			}
		}),

		// Localize References

		Classes       = Plugin.classes,
		RawClasses    = Classes.raw,
		Events        = Plugin.events,
		Functions     = Plugin.functions,

		$Instances    = [];

})(jQuery, Formstone);
/*! Formstone v0.2.0 [scrollbar.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

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
		html += '<span class="' + RawClasses.handle + '"></span>';
		html += '</div></div>';

		data.paddingRight     = parseInt(this.css("padding-right"), 10);
		data.paddingBottom    = parseInt(this.css("padding-bottom"), 10);

		this.addClass( [RawClasses.base, data.customClass, (data.horizontal ? RawClasses.horizontal : "")].join(" ") )
			.wrapInner('<div class="' + RawClasses.content + '" />')
			.prepend(html);

		data.$content    = this.find(Classes.content);
		data.$bar        = this.find(Classes.bar);
		data.$track      = this.find(Classes.track);
		data.$handle     = this.find(Classes.handle);

		data.trackMargin = parseInt(data.trackMargin, 10);

		data.$content.on(Events.scroll, data, onScroll);

		this.on(Events.touchMouseDown, Classes.track, data, onTrackDown)
			.on(Events.touchMouseDown, Classes.handle, data, onHandleDown);

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
		data.$bar.remove();
		data.$content.off(Events.namespace)
					 .contents()
					 .unwrap();

		this.removeClass( [RawClasses.base, RawClasses.active, data.customClass].join(" ") )
			.off(Events.namespace);
	}

	/**
	 * @method
	 * @name scroll
	 * @description Scrolls instance of plugin to element or position
	 * @param position [string || int] <null> "Target element selector or static position"
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
				position = data.$content.scrollTop();
			}
		}

		styles[ (data.horizontal ? "scrollLeft" : "scrollTop") ] = position;

		data.$content.stop()
					 .animate(styles, duration);
	}

	/**
	 * @method
	 * @name resizeInstance
	 * @description Resizes layout on instance of plugin
	 * @example $(".target").scrollbar("resize");
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

		positionContent(data, handlePosition);

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

	/**
	 * @method private
	 * @name getPointer
	 * @description Normalizes touch and mouse events
	 * @param e [object] "Event data"
	 * @return [object] "Pointer poisition data"
	 */

	function getPointer(e) {
		var oe = e.originalEvent,
			touch = ($.type(oe.targetTouches) !== "undefined") ? oe.targetTouches[0] : null;

		return {
			pageX: (touch) ? touch.pageX : e.clientX,
			pageY: (touch) ? touch.pageY : e.clientY
		};
	}

	/**
	 * @method private
	 * @name onTrackDown
	 * @description Handles mousedown/touchstart event on track
	 * @param e [object] "Event data"
	 */

	function onTrackDown(e) {
		Functions.killEvent(e);

		var data       = e.data,
			pointer    = getPointer(e),
			offset     = data.$track.offset();

		if (data.horizontal) {
			// Horizontal
			data.pointerStart = pointer.pageX;
			data.handleLeft = pointer.pageX - offset.left + $Window.scrollLeft() - (data.handleWidth / 2);

			positionContent(data, data.handleLeft);
		} else {
			// Vertical
			data.pointerStart = pointer.pageY;
			data.handleTop = pointer.pageY - offset.top + $Window.scrollTop() - (data.handleHeight / 2);

			positionContent(data, data.handleTop);
		}

		onPointerStart(data);
	}

	/**
	 * @method private
	 * @name onHandleDown
	 * @description Handles mousedown/touchstart event on handle
	 * @param e [object] "Event data"
	 */

	function onHandleDown(e) {
		Functions.killEvent(e);

		var data       = e.data,
			pointer    = getPointer(e);

		if (data.horizontal) {
			// Horizontal
			data.pointerStart = pointer.pageX;
			data.handleLeft = parseInt(data.$handle.css("left"), 10);
		} else {
			// Vertical
			data.pointerStart = pointer.pageY;
			data.handleTop = parseInt(data.$handle.css("top"), 10);
		}

		onPointerStart(data);
	}

	/**
	 * @method private
	 * @name onStart
	 * @description Handles mousedown/touchstart event
	 * @param data [object] "Instance data"
	 */

	function onPointerStart(data) {
		data.$content.off(Events.namespace);

		$Body.on(Events.touchMouseMove, data, onPointerMove)
			 .on(Events.touchMouseUp, data, onPointerEnd);
	}

	/**
	 * @method private
	 * @name onPointerMove
	 * @description Handles mousemove/touchmove event
	 * @param e [object] "Event data"
	 */

	function onPointerMove(e) {
		Functions.killEvent(e);

		var data        = e.data,
			pointer     = getPointer(e),
			position    = 0;

		if (data.horizontal) {
			// Horizontal
			position = data.handleLeft - (data.pointerStart - pointer.pageX);
		} else {
			// Vertical
			position = data.handleTop - (data.pointerStart - pointer.pageY);
		}

		positionContent(data, position);
	}

	/**
	 * @method private
	 * @name onPointerEnd
	 * @description Handles mouseup/touchend event
	 * @param e [object] "Event data"
	 */

	function onPointerEnd(e) {
		Functions.killEvent(e);

		e.data.$content.on(Events.scroll, e.data, onScroll);
		$Body.off(Events.namespace);
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
	 * @description A jQuery plugin for .
	 * @type widget
	 * @dependency core.js
	 */

	var Plugin = Formstone.Plugin("scrollbar", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param duration [int] <0> "Scroll animation length"
			 * @param handleSize [int] <0> "Handle size; 0 to auto size"
			 * @param horizontal [boolean] <false> "Scroll horizontally"
			 * @param trackMargin [int] <0> "Margin between track and handle edge”
			 */

			defaults: {
				customClass: "",
				duration: 0,
				handleSize: 0,
				horizontal: false,
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

		Events.touchMouseDown    = [Events.touchStart, Events.mouseDown].join(" ");
		Events.touchMouseMove    = [Events.touchMove,  Events.mouseMove].join(" ");
		Events.touchMouseUp      = [Events.touchEnd,   Events.mouseUp].join(" ");

})(jQuery, Formstone);
/*! Formstone v0.2.0 [swap.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

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

		data.linked     = this.data(Namespace + "-linked");

		data.mq         = "(max-width:" + (data.maxWidth === Infinity ? "100000px" : data.maxWidth) + ")";
		data.mqGuid     = data.classes.raw.base + "__" + (GUID++);

		// live query for the group to avoid missing new elements
		var group       = this.data(Namespace + "-group");
		data.group      = group ? '[data-' + Namespace + '-group="' + group + '"]' : false;

		/*
		if (!data.collapse && data.group) {
			$(data.group).eq(0).attr("data-" + Namespace + "-active", "true");
		}
		*/

		// Should be activate when enabled
		data.onEnable = this.data(Namespace + "-active");

		data.$swaps = $().add(this).add(data.$target);

		this.touch({
				tap: true
			})
			.on(Events.tap, data, onClick);


		// Media Query support
		$.mediaquery("bind", data.mqGuid, data.mq, {
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
		$.mediaquery("unbind", data.mqGuid, data.mq);

		data.$swaps.removeClass( [data.classes.raw.enabled, data.classes.raw.active].join(" ") )
				   .off(Events.namespace);

		this.touch("destroy");
	}

	/**
	 * @method
	 * @name activate
	 * @description Activate instance.
	 * @example $(".target").swap("activate");
	 */

	function activate(data, fromLinked) {
		if (data.enabled && !data.active) {
			// Deactivates grouped instances
			$(data.group).not(data.$el)[Plugin.namespace]("deactivate");

			// index in group
			var index = (data.group) ? $(data.group).index(data.$el) : null;

			data.$swaps.addClass(data.classes.raw.active);

			if (!fromLinked) {
				// Linked handles
				$(data.linked).not(data.$el).swap("activate", true);
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
				// Linked handles
				$(data.linked).not(data.$el).swap("deactivate", true);
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
			data.$swaps.addClass(data.classes.raw.enabled);

			if (!fromLinked) {
				// Linked handles
				$(data.linked).not(data.$el).swap("enable");
			}

			data.enabled = true;

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
			data.$swaps.removeClass( [data.classes.raw.enabled, data.classes.raw.active].join(" ") );

			if (!fromLinked) {
				// Linked handles
				$(data.linked).not(data.$el).swap("disable");
			}

			this.trigger(Events.disable);

			data.enabled = false;
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
	 * @dependency core.js
	 * @dependency mediaquery.js
	 * @dependency touch.js
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
				tap           : "tap",
				activate      : "activate",
				deactivate    : "deactivate",
				enable        : "enable",
				disable       : "disable"
			},

			methods: {
				_construct    : construct,
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
		Functions     = Plugin.functions,
		GUID          = 0;

})(jQuery, Formstone);
/*! Formstone v0.2.0 [tabs.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		// guid
		var guid         = "__" + (GUID++);

		data.eventGuid    = Events.namespace + guid;
		data.rawGuid      = RawClasses.base + guid;
		data.classGuid    = "." + data.rawGuid;

		data.mq           = "(max-width:" + (data.mobileMaxWidth === Infinity ? "100000px" : data.mobileMaxWidth) + ")";

		data.content      = this.attr("href");
		data.group        = this.data(Namespace + "-group");

		data.tabClasses          = [RawClasses.tab, data.rawGuid].join(" ");
		data.mobileTabClasses    = [RawClasses.tab, RawClasses.tab_mobile, data.rawGuid].join(" ");
		data.contentClasses      = [RawClasses.content, data.rawGuid].join(" ");

		// DOM

		data.$mobileTab    = $('<button type="button" class="' + data.mobileTabClasses + '">' + this.text() + '</button>');
		data.$content      = $(data.content).addClass(data.contentClasses);

		data.$content.before(data.$mobileTab);

		// toggle

		this.attr("data-swap-target", data.content)
			.attr("data-swap-group", data.group)
			.addClass(data.tabClasses)
			.on("activate.swap" + data.eventGuid, data, onActivate)
			.on("deactivate.swap" + data.eventGuid, data, onDeactivate)
			.on("enable.swap" + data.eventGuid, data, onEnable)
			.on("disable.swap" + data.eventGuid, data, onDisable)
			.swap({
				maxWidth: data.maxWidth,
				classes: {
					target  : data.classGuid,
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

		data.$mobileTab.touch({
			tap: true
		}).on("tap" + data.eventGuid, data, onMobileActivate);

		// Media Query support
		$.mediaquery("bind", data.rawGuid, data.mq, {
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
		$.mediaquery("unbind", data.rawGuid, data.mq);

		data.$mobileTab.off(Events.namespace)
					   .touch("destroy")
					   .remove();

		data.$content.removeClass(RawClasses.content);

		this.attr("data-swap-target", "")
			.attr("data-swap-group", "")
			.removeClass(RawClasses.tab)
			.off(Events.namespace)
			.swap("destroy");
	}

	/**
	 * @method
	 * @name activate
	 * @description Activates instance.
	 * @example $(".target").tabs("open");
	 */

	function activate(data) {
		this.swap("activate");
	}

	/**
	 * @method
	 * @name enable
	 * @description Enables instance.
	 * @example $(".target").tabs("enable");
	 */

	function enable(data) {
		this.swap("enable");
	}

	/**
	 * @method
	 * @name disable
	 * @description Disables instance.
	 * @example $(".target").tabs("disable");
	 */

	function disable(data) {
		this.swap("disable");
	}

	/**
	 * @method private
	 * @name onActivate
	 * @description Handles tab open event.
	 * @param e [object] "Event data"
	 */

	function onActivate(e) {
		var data = e.data,
			index = 0;

		data.$el.trigger(Events.update, [ index ]);

		data.$mobileTab.addClass(RawClasses.active);
		data.$content.addClass(RawClasses.active);
	}

	/**
	 * @method private
	 * @name onDeactivate
	 * @description Handles tab close event.
	 * @param e [object] "Event data"
	 */

	function onDeactivate(e) {
		var data = e.data;

		// data.$el.trigger(Events.close);

		data.$mobileTab.removeClass(RawClasses.active);
		data.$content.removeClass(RawClasses.active);
	}

	/**
	 * @method private
	 * @name onEnable
	 * @description Handles tab enable event.
	 * @param e [object] "Event data"
	 */

	function onEnable(e) {
		var data = e.data;

		data.$mobileTab.addClass(RawClasses.enabled);
		data.$content.addClass(RawClasses.enabled);
	}

	/**
	 * @method private
	 * @name onDisable
	 * @description Handles tab disable event.
	 * @param e [object] "Event data"
	 */

	function onDisable(e) {
		var data = e.data;

		data.$mobileTab.removeClass(RawClasses.enabled);
		data.$content.removeClass(RawClasses.enabled);
	}

	/**
	 * @method private
	 * @name onMobileActivate
	 * @description Activates instance.
	 * @param e [object] "Event data"
	 */

	function onMobileActivate(e) {
		e.data.$el.swap("activate");
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
	}

	/**
	 * @plugin
	 * @name Tabs
	 * @description A jQuery plugin for simple tabs.
	 * @type widget
	 * @dependency core.js
	 * @dependency mediaquery.js
	 * @dependency swap.js
	 * @dependency touch.js
	 */

	var Plugin = Formstone.Plugin("tabs", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param maxWidth [string] <Infinity> "Width at which to auto-disable plugin"
			 * @param mobileMaxWidth [string] <'740px'> "Width at which to auto-disable mobile styles"
			 * @param vertical [boolean] <false> "Flag to draw vertical tab set"
			 */

			defaults: {
				customClass       : "",
				maxWidth          : Infinity,
				mobileMaxWidth    : "740px",
				vertical          : false
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
				tap      : "tap",
				update   : "update"
			},

			methods: {
				_construct    : construct,
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
		Functions     = Plugin.functions,
		GUID          = 0;

})(jQuery, Formstone);
/*! Formstone v0.2.0 [tooltip.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

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
		html += [RawClasses.base, RawClasses[data.direction] ].join(" ");
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
	 * @dependency core.js
	 */

	var Plugin = Formstone.Plugin("tooltip", {
			widget: true,

			/**
			 * @options
			 * @param delay [int] <0> "Hover delay"
			 * @param direction [string] <'top'> "Tooltip direction"
			 * @param follow [boolean] <false> "Flag to follow mouse"
			 * @param formatter [function] <$.noop> "Text format function"
			 * @param margin [int] <15> "Tooltip margin"
			 * @param match [boolean] <false> "Flag to match mouse position"
			 */

			defaults: {
				delay        : 0,
				direction    : "top",
				follow       : false,
				formatter    : format,
				margin       : 15,
				match        : false
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

})(jQuery, Formstone);
/*! Formstone v0.2.0 [touch.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

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

		if (data.tap) {
			// Tap

			data.pan   = false;
			data.scale = false;
			data.swipe = false;

			this.on( [Events.touchStart, Events.pointerDown].join(" "), data, onPointerStart)
				.on(Events.click, data, onClick);
		} else if (data.pan || data.swipe || data.scale) {
			// Pan / Swipe / Scale

			data.tap = false;

			if (data.swipe) {
				data.pan = true;
			}

			if (data.scale) {
				data.axis = false;
			}

			if (data.axis) {
				data.axisX = data.axis === "x";
				data.axisY = data.axis === "y";

				// touchAction(this, "pan-" + (data.axisY ? "y" : "x"));
			} else {
				touchAction(this, "none");
			}

			this.on( [Events.touchStart, Events.pointerDown].join(" "), data, onTouch);

			if (data.pan) {
				this.on( Events.mouseDown, data, onPointerStart);
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
		touchAction(this.off(Events.namespace), "");
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

		if (oe.type.match(/(up|end)$/i)) {
			onPointerEnd(e);
			return;
		}

		if (oe.pointerId) {
			// Normalize MS pointer events back to standard touches
			var activeTouch = false;
			for (var i in data.touches) {
				if (data.touches[i].id === oe.pointerId) {
					activeTouch = true;
					data.touches[i].pageX    = oe.clientX;
					data.touches[i].pageY    = oe.clientY;
				}
			}
			if (!activeTouch) {
				data.touches.push({
					id       : oe.pointerId,
					pageX    : oe.clientX,
					pageY    : oe.clientY
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
			touch    = ($.type(data.touches) !== "undefined") ? data.touches[0] : null;

		if (!data.touching) {
			data.startE      = e.originalEvent;
			data.startX      = (touch) ? touch.pageX : e.pageX;
			data.startY      = (touch) ? touch.pageY : e.pageY;
			data.startT      = new Date().getTime();
			data.scaleD      = 1;
			data.passed      = false;
		}

		if (data.tap) {
			// Tap

			data.clicked = false;

			data.$el.on( [Events.touchMove, Events.pointerMove].join(" "), data, onTouch)
					.on( [Events.touchEnd, Events.touchCancel, Events.pointerUp, Events.pointerCancel].join(" ") , data, onTouch);

		} else if (data.pan || data.scale) {
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

				if (data.pan) {
					$Window.on(Events.mouseMove, data, onPointerMove)
						   .on(Events.mouseUp, data, onPointerEnd);
				}

				$Window.on( [
					Events.touchMove,
					Events.touchEnd,
					Events.touchCancel,
					Events.pointerMove,
					Events.pointerUp,
					Events.pointerCancel
				].join(" ") , data, onTouch);

				data.$el.trigger(newE);
			}
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
			touch     = ($.type(data.touches) !== "undefined") ? data.touches[0] : null,
			newX      = (touch) ? touch.pageX : e.pageX,
			newY      = (touch) ? touch.pageY : e.pageY,
			deltaX    = newX - data.startX,
			deltaY    = newY - data.startY,
			dirX      = (deltaX > 0) ? "right" : "left",
			dirY      = (deltaY > 0) ? "down"  : "up",
			movedX    = Math.abs(deltaX) > TouchThreshold,
			movedY    = Math.abs(deltaY) > TouchThreshold;

		if (data.tap) {
			// Tap

			if (movedX || movedY) {
				data.$el.off( [
					Events.touchMove,
					Events.touchEnd,
					Events.touchCancel,
					Events.pointerMove,
					Events.pointerUp,
					Events.pointerCancel
				].join(" ") );
			}
		} else if (data.pan || data.scale) {
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
	 * @name onPointerEnd
	 * @description Handles pointer end / cancel.
	 * @param e [object] "Event data"
	 */

	function onPointerEnd(e) {
		var data = e.data;

		if (data.tap) {
			// Tap

			data.$el.off( [
				Events.touchMove,
				Events.touchEnd,
				Events.touchCancel,
				Events.pointerMove,
				Events.pointerUp,
				Events.pointerCancel,
				Events.mouseMove,
				Events.mouseUp
			].join(" ") );

			data.startE.preventDefault();

			onClick(e);
		} else if (data.pan || data.scale) {

			// Pan / Swipe / Scale

			var touch     = ($.type(data.touches) !== "undefined") ? data.touches[0] : null,
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
		}

		data.touching = false;
	}

	/**
	 * @method private
	 * @name onClick
	 * @description Handles click.
	 * @param e [object] "Event data"
	 */

	function onClick(e) {
		Functions.killEvent(e);

		var data = e.data;

		if (!data.clicked) {
			if (e.type !== "click") {
				data.clicked = true;
			}

			var newX    = (data.startE) ? data.startX : e.pageX,
				newY    = (data.startE) ? data.startY : e.pageY,
				newE    = buildEvent(Events.tap, e.originalEvent, newX, newY, 1, 0, 0);

			data.$el.trigger( newE );
		}
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
			 * @param tap [boolean] <false> "'Fastclick' event"
			 */

			defaults : {
				axis     : false,
				pan      : false,
				scale    : false,
				swipe    : false,
				tap      : false
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
		TouchThreshold    = 20,
		TouchTime         = 200;

		/**
		 * @events
		 * @event tap "'Fastclick' event; Prevents ghost clicks on mobile"
		 * @event panstart "Panning started"
		 * @event pan "Panning"
		 * @event panend "Panning ended"
		 * @event scalestart "Scaling started"
		 * @event scale "Scaling"
		 * @event scaleend "Scaling ended"
		 * @event swipe "Swipe"
		 */

		Events.tap           = "tap";
		Events.pan           = "pan";
		Events.panStart      = "panstart";
		Events.panEnd        = "panend";
		Events.scale         = "scale";
		Events.scaleStart    = "scalestart";
		Events.scaleEnd      = "scaleend";
		Events.swipe         = "swipe";

})(jQuery, Formstone);
/*! Formstone v0.2.0 [transition.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

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

//				if (Formstone.document.addEventListener) { // ie8
					// ie8 needs to resolve
					resolve(data);
/*
				} else {
					data.timer = Functions.startTimer(data.timer, 50, function() {
						checkStyles(data);
					}, true);
				}
*/
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

			data.$el[Plugin.namespace]("destroy"); // clean up old data?
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
				if (computed.hasOwnProperty(prop)) {
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
			if ( !(a.hasOwnProperty(i) && b.hasOwnProperty(i) && a[i] === b[i]) ) {
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

})(jQuery, Formstone);
/*! Formstone v0.2.0 [upload.js] 2015-03-23 | MIT License | formstone.it */

;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		if (Formstone.support.file) {
			var html = "";

			html += '<div class="' + RawClasses.target + '">';
			html += data.label;
			html += '</div>';
			html += '<input class="' + RawClasses.input + '" type="file"';
			if (data.maxQueue > 1) {
				html += ' ' + RawClasses.multiple;
			}
			html += '>';

			this.addClass(RawClasses.base)
				.append(html);

			data.$input       = this.find(Classes.input);
			data.queue        = [];
			data.total        = 0;
			data.uploading    = false;

			this.on(Events.click, Classes.target, data, onClick)
				.on(Events.dragEnter, data, onDragEnter)
				.on(Events.dragOver, data, onDragOver)
				.on(Events.dragLeave, data, onDragOut)
				.on(Events.drop, Classes.target, data, onDrop);

			data.$input.on(Events.change, data, onChange);
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

			this.off( [Events.click, Events.dragEnter, Events.dragOver, Events.dragLeave, Events.drop].join(" ") )
				.removeClass(RawClasses.base)
				.html("");
		}
	}

	/**
	 * @method private
	 * @name onClick
	 * @description Handles click to target.
	 * @param e [object] "Event data"
	 */
	function onClick(e) {
		e.stopPropagation();
		e.preventDefault();

		var data = e.data;

		data.$input.trigger(Events.click);
	}

	/**
	 * @method private
	 * @name onChange
	 * @description Handles change to hidden input.
	 * @param e [object] "Event data"
	 */
	function onChange(e) {
		e.stopPropagation();
		e.preventDefault();

		var data = e.data,
			files = data.$input[0].files;

		if (files.length) {
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
		e.stopPropagation();
		e.preventDefault();

		var data = e.data;

		data.$el.addClass(RawClasses.dropping);
	}

	/**
	 * @method private
	 * @name onDragOver
	 * @description Handles dragover to target.
	 * @param e [object] "Event data"
	 */
	function onDragOver(e) {
		e.stopPropagation();
		e.preventDefault();

		var data = e.data;

		data.$el.addClass(RawClasses.dropping);
	}

	/**
	 * @method private
	 * @name onDragOut
	 * @description Handles dragout to target.
	 * @param e [object] "Event data"
	 */
	function onDragOut(e) {
		e.stopPropagation();
		e.preventDefault();

		var data = e.data;

		data.$el.removeClass(RawClasses.dropping);
	}

	/**
	 * @method private
	 * @name onDrop
	 * @description Handles drop to target.
	 * @param e [object] "Event data"
	 */
	function onDrop(e) {
		e.preventDefault();

		var data = e.data,
			files = e.originalEvent.dataTransfer.files;

		data.$el.removeClass(RawClasses.dropping);

		handleUpload(data, files);
	}

	/**
	 * @method private
	 * @name handleUpload
	 * @description Handles new files.
	 * @param data [object] "Instance data"
	 * @param files [object] "File list"
	 */
	function handleUpload(data, files) {
		var newFiles = [];

		for (var i = 0; i < files.length; i++) {
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

		if (!data.uploading) {
			$Window.on(Events.beforeUnload, function(){
				return data.leave;
			});

			data.uploading = true;
		}

		data.$el.trigger(Events.start, [ newFiles ]);

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
					var formData = new FormData();

					formData.append(data.postKey, data.queue[j].file);

					for (var k in data.postData) {
						if (data.postData.hasOwnProperty(k)) {
							formData.append(k, data.postData[k]);
						}
					}

					uploadFile(data, data.queue[j], formData);
				}

				transfering++;

				if (transfering >= data.maxQueue) {
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
	 * @param formData [object] "Target form"
	 */
	function uploadFile(data, file, formData) {
		if (file.size >= data.maxSize) {
			file.error = true;
			data.$el.trigger(Events.fileError, [ file, "Too large" ]);

			checkQueue(data);
		} else {
			file.started = true;
			file.transfer = $.ajax({
				url: data.action,
				data: formData,
				type: "POST",
				contentType:false,
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
								percent = Math.ceil(position / total * 100);
							}

							data.$el.trigger(Events.fileProgress, [ file, percent ]);
						}, false);
					}

					return $xhr;
				},
				beforeSend: function(e) {
					data.$el.trigger(Events.fileStart, [ file ]);
				},
				success: function(response, status, jqXHR) {
					file.complete = true;
					data.$el.trigger(Events.fileComplete, [ file, response ]);

					checkQueue(data);
				},
				error: function(jqXHR, status, error) {
					file.error = true;
					data.$el.trigger(Events.fileError, [ file, error ]);

					checkQueue(data);
				}
			});
		}
	}

	/**
	 * @plugin
	 * @name Upload
	 * @description A jQuery plugin for simple drag and drop uploads.
	 * @type widget
	 * @dependency core.js
	 */

	var Plugin = Formstone.Plugin("upload", {
			widget: true,

			/**
			 * @options
			 * @param action [string] "Where to submit uploads"
			 * @param label [string] <'Drag and drop files or click to select'> "Drop target text"
			 * @param leave [string] <'You have uploads pending, are you sure you want to leave this page?'> "Before leave message"
			 * @param maxQueue [int] <2> "Number of files to simultaneously upload"
			 * @param maxSize [int] <5242880> "Max file size allowed"
			 * @param postData [object] "Extra data to post with upload"
			 * @param postKey [string] <'file'> "Key to upload file as"
			 */

			defaults: {
				customClass    : "",
				action         : "",
				label          : "Drag and drop files or click to select",
				leave          : "You have uploads pending, are you sure you want to leave this page?",
				maxQueue       : 2,
				maxSize        : 5242880, // 5 mb
				postData       : {},
				postKey        : "file"
			},

			classes: [
				"input",
				"target",
				"multiple",
				"dropping"
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

		$Window       = Formstone.$window;

		/**
		 * @events
		 * @event complete "All uploads are complete"
		 * @event filecomplete "Specific upload complete"
		 * @event fileerror "Specific upload error"
		 * @event filestart "Specific upload starting"
		 * @event fileprogress "Specific upload progress"
		 * @event start "Uploads starting"
		 */

		Events.complete        = "complete";
		Events.fileStart       = "filestart";
		Events.fileProgress    = "fileprogress";
		Events.fileComplete    = "filecomplete";
		Events.fileError       = "fileerror";
		Events.start           = "start";

})(jQuery, Formstone);
/*-------------------------------------------
  Site
-------------------------------------------*/

	/* global Prism */

	// !IE
	var IE8 = IE8 || false,
		IE9 = IE9 || false;

	// !Site
	var Site = (function($, window) {
		// Vars
		var minWidth = 320,
			maxWidth = Infinity,
			scrollTop = 0,
			windowHeight = 0,
			windowWidth = 0,
			$window,
			$doc,
			$body;

		function init() {
			// Objects
			$window = $(window);
			$doc    = $(document);
			$body   = $("body");

			$("[class*=lang-]").each(function() {
				$(this).addClass( $(this).attr("class").replace("lang-", "language-") );
			});

			$("table").wrap('<div class="table_wrapper"></div>');

			$("pre").wrap('<div class="pre_wrapper"></div>');

			// Prism.highlightAll();

			$(".js-navigation").navigation();

			$(".intro ul").navigation();

			$(".js-dropdown").dropdown();
		}

		return {
			init: init
		};
	})(jQuery, window);


	// !Ready
	$(document).ready(Site.init);