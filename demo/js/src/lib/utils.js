// Console Polyfill <http://stackoverflow.com/questions/3326650/console-is-undefined-error-for-internet-explorer>
(function(){window.console||(window.console={});for(var b="log info warn error debug trace dir group groupCollapsed groupEnd time timeEnd profile profileEnd dirxml assert count markTimeline timeStamp clear".split(" "),a=0;a<b.length;a++)window.console[b[a]]||(window.console[b[a]]=function(){})})();
// Fix Missing .indexOf() - IE8
if(!Array.prototype.indexOf){Array.prototype.indexOf=function(e){var t=this.length>>>0;var n=Number(arguments[1])||0;n=n<0?Math.ceil(n):Math.floor(n);if(n<0)n+=t;for(;n<t;n++){if(n in this&&this[n]===e)return n}return-1}}
// Fix Missing .forEach() - IE8
if(!Array.prototype.forEach){Array.prototype.forEach=function(method,value){for(var i=0,c=this.length;i<c;i++){if(i in this){method.call(value,this[i],i,this);}}}}
// Fix missing .trim() - IE8
if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,'')}}