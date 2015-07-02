/*! formstone v0.6.15 [range.js] 2015-07-02 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(a){w.iterate.call(x,j)}function e(){x=a(t.element)}function f(a){a.formatter||(a.formatter=r),a.min=parseFloat(this.attr("min"))||0,a.max=parseFloat(this.attr("max"))||100,a.step=parseFloat(this.attr("step"))||1,a.digits=a.step.toString().length-a.step.toString().indexOf("."),a.value=parseFloat(this.val())||a.min+(a.max-a.min)/2;var b="";a.disbaled=this.is(":disabled"),a.vertical="vertical"===this.attr("orient")||a.vertical,b+='<div class="'+u.track+'">',b+='<div class="'+u.handle+'">',b+='<span class="'+u.marker+'"></span>',b+="</div>",b+="</div>";var c=[u.base,a.customClass,a.vertical?u.vertical:"",a.labels?u.labels:"",a.disabled?u.disabled:""];if(this.addClass(u.element).wrap('<div class="'+c.join(" ")+'"></div>').after(b),a.$container=this.parents(t.base),a.$track=a.$container.find(t.track),a.$handle=a.$container.find(t.handle),a.$output=a.$container.find(t.output),a.labels){var d='<span class="'+[u.label,u.label_max].join(" ")+'">'+a.formatter.call(this,a.labels.max?a.labels.max:a.max)+"</span>",f='<span class="'+[u.label,u.label_min].join(" ")+'">'+a.formatter.call(this,a.labels.max?a.labels.min:a.min)+"</span>";a.$container.prepend(a.vertical?d:f).append(a.vertical?f:d)}a.$labels=a.$container.find(t.label),this.on(v.focus,a,n).on(v.blur,a,o).on(v.change,a,q),a.$container.touch({pan:!0,axis:a.vertical?"y":"x"}).on(v.panStart,a,k).on(v.pan,a,l).on(v.panEnd,a,m),e(),j.call(this,a)}function g(a){a.$container.off(v.namespace).touch("destroy"),a.$track.remove(),a.$labels.remove(),this.unwrap().removeClass(u.element).off(v.namespace),e()}function h(a){a.disabled&&(this.prop("disabled",!1),a.$container.removeClass(u.disabled),a.disabled=!1)}function i(a){a.disabled||(this.prop("disabled",!0),a.$container.addClass(u.disabled),a.disabled=!0)}function j(a){a.stepCount=(a.max-a.min)/a.step,a.offset=a.$track.offset(),a.vertical?(a.trackHeight=a.$track.outerHeight(),a.handleHeight=a.$handle.outerHeight(),a.increment=a.trackHeight/a.stepCount):(a.trackWidth=a.$track.outerWidth(),a.handleWidth=a.$handle.outerWidth(),a.increment=a.trackWidth/a.stepCount);var b=(a.$el.val()-a.min)/(a.max-a.min);p(a,b,!0)}function k(a){w.killEvent(a);var b=a.data;b.disbaled||(l(a),b.$container.addClass(u.focus))}function l(a){w.killEvent();var b=a.data,c=0;c=b.vertical?1-(a.pageY-b.offset.top)/b.trackHeight:(a.pageX-b.offset.left)/b.trackWidth,p(b,c)}function m(a){w.killEvent(a);var b=a.data;b.$container.removeClass(u.focus)}function n(a){a.data.$container.addClass("focus")}function o(a){a.data.$container.removeClass("focus")}function p(a,b,c){a.increment>1&&(b=a.vertical?Math.round(b*a.stepCount)*a.increment/a.trackHeight:Math.round(b*a.stepCount)*a.increment/a.trackWidth),0>b&&(b=0),b>1&&(b=1);var d=(a.min-a.max)*b;d=-parseFloat(d.toFixed(a.digits)),a.$handle.css(a.vertical?"bottom":"left",100*b+"%"),d+=a.min,d!==a.value&&d&&c!==!0&&(a.$el.val(d).trigger(v.change,[!0]),a.value=d)}function q(a,b){var c=a.data;if(!b&&!c.disabled){var d=(c.$el.val()-c.min)/(c.max-c.min);p(c,d)}}function r(a){var b=a.toString().split(".");return b[0]=b[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),b.join(".")}var s=b.Plugin("range",{widget:!0,defaults:{customClass:"",formatter:!1,labels:{max:!1,min:!1},vertical:!1},classes:["track","handle","marker","labels","label","label_min","label_max","vertical","focus","disabled"],methods:{_construct:f,_destruct:g,_resize:d,enable:h,disable:i,resize:j},events:{panStart:"panstart",pan:"pan",panEnd:"panend"}}),t=s.classes,u=t.raw,v=s.events,w=s.functions,x=[]}(jQuery,Formstone);