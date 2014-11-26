/*! 
 * Formstone v0.0.1 - 2014-11-26 
 * Library of modular javascript components. 
 * http://formstone.it/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */

!function(a,b){"use strict";function c(a){a.$target=a.$el.find(a.target),b.support.transition?this.on(h.transitionEnd,a,e).on(h.transitionForce,a,f):a.complete.apply(a.$el)}function d(){this.off(h.namespace)}function e(b){b.stopPropagation(),b.preventDefault();var c=b.data,d=b.originalEvent;(!c.property||d&&d.propertyName===c.property)&&(!c.target||d&&a(d.target).is(c.$target))&&(!c.target||d&&a(d.target).is(c.$el))&&f({data:c})}function f(a){var b=a.data;b.always||b.$el.off(h.transitionEnd)[g.namespace]("destroy"),b.complete.apply(b.$el)}{var g=b.Plugin("transition",{widget:!0,defaults:{always:!1,complete:a.noop,property:null,target:null},methods:{_construct:c,_destruct:d},events:["transitionForce"]}),h=g.events;g.functions,b.$window}}(jQuery,Formstone);