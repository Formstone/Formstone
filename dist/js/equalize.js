/*! formstone v0.8.39 [equalize.js] 2016-02-27 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(a){o.iterate.call(p,h)}function e(){p=a(m.element)}function f(b){b.maxWidth=b.maxWidth===1/0?"100000px":b.maxWidth,b.mq="(min-width:"+b.minWidth+") and (max-width:"+b.maxWidth+")",b.type="height"===b.property?"outerHeight":"outerWidth",b.target?a.isArray(b.target)||(b.target=[b.target]):b.target=["> *"],e(),a.fsMediaquery("bind",b.rawGuid,b.mq,{enter:function(){j.call(b.$el,b)},leave:function(){i.call(b.$el,b)}})}function g(b){k(b),a.fsMediaquery("unbind",b.rawGuid),e()}function h(a){if(a.data&&(a=a.data),a.enabled)for(var b,c,d,e=0;e<a.target.length;e++){b=0,c=0,d=a.$el.find(a.target[e]),d.css(a.property,"");for(var f=0;f<d.length;f++)c=d.eq(f)[a.type](),c>b&&(b=c);d.css(a.property,b)}}function i(a){a.enabled&&(a.enabled=!1,k(a))}function j(a){if(!a.enabled){a.enabled=!0;var b=a.$el.find("img");b.length&&b.on(n.load,a,h),h(a)}}function k(a){for(var b=0;b<a.target.length;b++)a.$el.find(a.target[b]).css(a.property,"");a.$el.find("img").off(n.namespace)}var l=b.Plugin("equalize",{widget:!0,priority:5,defaults:{maxWidth:1/0,minWidth:"0px",property:"height",target:null},methods:{_construct:f,_destruct:g,_resize:d,resize:h}}),m=l.classes,n=(m.raw,l.events),o=l.functions,p=[]}(jQuery,Formstone);