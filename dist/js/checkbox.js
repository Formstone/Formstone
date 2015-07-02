/*! formstone v0.6.15 [checkbox.js] 2015-07-02 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(b){var c=this.closest("label"),d=c.length?c.eq(0):a("label[for="+this.attr("id")+"]"),e=[q.base,b.customClass].join(" "),f="";b.radio="radio"===this.attr("type"),b.group=this.attr("name"),f+='<div class="'+q.marker+'">',f+='<div class="'+q.flag+'"></div>',b.toggle&&(e+=" "+q.toggle,f+='<span class="'+[q.state,q.state_on].join(" ")+'">'+b.labels.on+"</span>",f+='<span class="'+[q.state,q.state_off].join(" ")+'">'+b.labels.off+"</span>"),b.radio&&(e+=" "+q.radio),f+="</div>",d.length?d.addClass(q.label).wrap('<div class="'+e+'"></div>').before(f):this.before('<div class=" '+e+'">'+f+"</div>"),b.$checkbox=d.length?d.parents(p.base):this.prev(p.base),b.$marker=b.$checkbox.find(p.marker),b.$states=b.$checkbox.find(p.state),b.$label=d,this.is(":checked")&&b.$checkbox.addClass(q.checked),this.is(":disabled")&&b.$checkbox.addClass(q.disabled),this.wrap('<div class="'+q.element_wrapper+'"></div>'),this.on(r.focus,b,m).on(r.blur,b,n).on(r.change,b,j).on(r.click,b,i).on(r.deselect,b,l),b.$checkbox.touch({tap:!0}).on(r.tap,b,i)}function e(a){a.$checkbox.off(r.namespace).touch("destroy"),a.$marker.remove(),a.$states.remove(),a.$label.unwrap().removeClass(q.label),this.unwrap().off(r.namespace)}function f(a){this.prop("disabled",!1),a.$checkbox.removeClass(q.disabled)}function g(a){this.prop("disabled",!0),a.$checkbox.addClass(q.disabled)}function h(a){var b=a.$el.is(":disabled"),c=a.$el.is(":checked");b||(c?k({data:a}):l({data:a}))}function i(b){b.stopPropagation();var c=b.data;a(b.target).is(c.$el)||(b.preventDefault(),c.$el.trigger("click"))}function j(a){var b=a.data,c=b.$el.is(":disabled"),d=b.$el.is(":checked");c||(b.radio?k(a):d?k(a):l(a))}function k(b){b.data.radio&&a('input[name="'+b.data.group+'"]').not(b.data.$el).trigger("deselect"),b.data.$checkbox.addClass(q.checked)}function l(a){a.data.$checkbox.removeClass(q.checked)}function m(a){a.data.$checkbox.addClass(q.focus)}function n(a){a.data.$checkbox.removeClass(q.focus)}var o=b.Plugin("checkbox",{widget:!0,defaults:{customClass:"",toggle:!1,labels:{on:"ON",off:"OFF"}},classes:["element_wrapper","label","marker","flag","radio","focus","checked","disabled","toggle","state","state_on","state_off"],methods:{_construct:d,_destruct:e,enable:f,disable:g,update:h},events:{deselect:"deselect",tap:"tap"}}),p=o.classes,q=p.raw,r=o.events;o.functions}(jQuery,Formstone);