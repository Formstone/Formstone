/* 
 * Formstone v0.0.1 - 2014-11-07 
 * Library of modular javascript components. 
 * http://formstone.it/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */

!function(a,b){"use strict";function c(a){b.matchMediaSupport&&("object"==typeof a?d.apply(this,arguments):d.apply(this,arguments))}function d(b){if(!i.initialized){b=b||{};for(var c in o)o.hasOwnProperty(c)&&(j[c]=b[c]?a.merge(b[c],j[c]):j[c]);j=a.extend(j,b),j.minWidth.sort(h),j.maxWidth.sort(g),j.minHeight.sort(h),j.maxHeight.sort(g);for(var d in o)if(o.hasOwnProperty(d)){n[d]={};for(var e in j[d])if(j[d].hasOwnProperty(e)){var k=window.matchMedia("("+o[d]+": "+(1/0===j[d][e]?1e5:j[d][e])+j.unit+")");k.addListener(f),n[d][j[d][e]]=k}}f(),i.initialized=!0}}function e(){m={unit:j.unit};for(var a in o)if(o.hasOwnProperty(a))for(var b in n[a])if(n[a].hasOwnProperty(b)&&n[a][b].matches){var c="Infinity"===b?1/0:parseInt(b,10);a.indexOf("max")>-1?(!m[a]||c<m[a])&&(m[a]=c):(!m[a]||c>m[a])&&(m[a]=c)}}function f(){e(),l.trigger(k.snap,[m])}function g(a,b){return b-a}function h(a,b){return a-b}var i=b.Plugin("rubberband",{methods:{_delegate:c}}),j={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},k={snap:"snap",enter:"enter",leave:"leave"},l=b.$window,m=(l[0],null),n={},o={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}}(jQuery,Formstone);