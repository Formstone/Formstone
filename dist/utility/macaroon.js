/* 
 * Formstone v0.0.1 - 2014-11-07 
 * Library of modular javascript components. 
 * http://formstone.it/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */

!function(a,b){"use strict";function c(b,c,h){if("object"==typeof b)g=a.extend(g,b);else if(h=a.extend({},g,h||{}),"undefined"!=typeof b){if("undefined"==typeof c)return e(b);null===c?f(b):d(b,c,h)}return null}function d(a,b,c){var d=!1,e=new Date;c.expires&&"number"==typeof c.expires&&(e.setTime(e.getTime()+c.expires),d=e.toGMTString());var f=c.domain?"; domain="+c.domain:"",g=d?"; expires="+d:"",i=d?"; max-age="+c.expires/1e3:"",j=c.path?"; path="+c.path:"",k=c.secure?"; secure":"";h.cookie=a+"="+b+g+i+f+j+k}function e(a){for(var b=a+"=",c=h.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null}function f(a){d(a,"",{expires:-6048e5})}var g=(b.Plugin("macaroon",{methods:{_delegate:c}}),{domain:null,expires:6048e5,path:null,secure:null}),h=b.$document[0]}(jQuery,Formstone);