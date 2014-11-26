/*! 
 * Formstone v0.0.1 - 2014-11-26 
 * Library of modular javascript components. 
 * http://formstone.it/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */

!function(a,b){"use strict";function c(a){a.$target=a.$el.find(a.target),b.support.transition?this.on(g.transitionEnd,a,e):a.complete.apply(a.$el)}function d(){this.off(g.namespace)}function e(b){b.stopPropagation(),b.preventDefault();var c=b.data,d=b.originalEvent,e=d.propertyName;c.property&&e!==c.property||c.target&&!a(d.target).is(c.$target)||(c.always||c.$el.off(g.transitionEnd)[f.namespace]("destroy"),c.complete.apply(c.$el))}{var f=b.Plugin("transition",{widget:!0,defaults:{always:!0,complete:a.noop,property:null,target:null},methods:{_construct:c,_destruct:d}}),g=f.events;f.functions,b.$window}}(jQuery,Formstone);