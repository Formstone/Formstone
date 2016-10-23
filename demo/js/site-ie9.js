/*! formstone v1.3.0 [site-ie9.js] 2016-10-23 | GPL-3.0 License | formstone.it */

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
window.matchMedia||(window.matchMedia=function(){"use strict";
// For browsers that support matchMedium api such as IE 9 and webkit
var a=window.styleMedia||window.media;
// For those that don't support matchMedium
if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),
// 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";
// Test if media query is true or false
// 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
function(){
// Bail out for browsers that have addListener support
if(window.matchMedia&&window.matchMedia("all").addListener)return!1;var a=window.matchMedia,b=a("only all").matches,c=!1,d=0,// setTimeout for debouncing 'handleChange'
e=[],// Contains each 'mql' and associated 'listeners' if 'addListener' is used
f=function(b){
// Debounce
clearTimeout(d),d=setTimeout(function(){for(var b=0,c=e.length;b<c;b++){var d=e[b].mql,f=e[b].listeners||[],g=a(d.media).matches;
// Update mql.matches value and call listeners
// Fire listeners only if transitioning to or from matched state
if(g!==d.matches){d.matches=g;for(var h=0,i=f.length;h<i;h++)f[h].call(window,d)}}},30)};window.matchMedia=function(d){var g=a(d),h=[],i=0;return g.addListener=function(a){
// Changes would not occur to css media type so return now (Affects IE <= 8)
b&&(
// Set up 'resize' listener for browsers that support CSS3 media queries (Not for IE <= 8)
// There should only ever be 1 resize listener running for performance
c||(c=!0,window.addEventListener("resize",f,!0)),
// Push object only if it has not been pushed already
0===i&&(i=e.push({mql:g,listeners:h})),h.push(a))},g.removeListener=function(a){for(var b=0,c=h.length;b<c;b++)h[b]===a&&h.splice(b,1)},g}}();