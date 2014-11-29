/*! 
 * Formstone v0.0.1 - 2014-11-29 
 * Library of modular javascript components. 
 * http://formstone.it/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */

var IE8=IE8||!1,IE9=IE9||!1,Site=function(a,b){function c(){f=a(b),g=a(document),h=a("body"),i=a(".shifter-page"),j=a(".subnavigation"),f.on("snap",d).on("resize",e),a.rubberband({minWidth:[1220,980,740,500,320]}),a.shifter({maxWidth:"979px"})}function d(b,c){l=c.maxWidth,k=c.minWidth,a.shifter("close")}function e(){}var f,g,h,i,j,k=320,l=1/0;return{init:c}}(jQuery,window);$(document).ready(Site.init);