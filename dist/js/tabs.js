/*! formstone v0.8.41 [tabs.js] 2016-03-14 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(c){c.mq="(max-width:"+(c.mobileMaxWidth===1/0?"100000px":c.mobileMaxWidth)+")",c.content=this.attr("href"),c.group=this.data(r+"-group"),c.tabClasses=[t.tab,c.rawGuid].join(" "),c.mobileTabClasses=[t.tab,t.tab_mobile,c.rawGuid].join(" "),c.contentClasses=[t.content,c.rawGuid].join(" "),c.$mobileTab=a('<button type="button" class="'+c.mobileTabClasses+'">'+this.text()+"</button>"),c.$content=a(c.content).addClass(c.contentClasses),c.$content.before(c.$mobileTab);var d=b.window.location.hash,e=!1,f=!1;d.length&&(e=this.filter("[href*="+d+"]").length>0,f=c.group&&a("[data-"+r+'-group="'+c.group+'"]').filter("[href*="+d+"]").length>0),e?this.attr("data-swap-active","true"):f?this.removeAttr("data-swap-active").removeData("data-swap-active"):"true"===this.attr("data-tabs-active")&&this.attr("data-swap-active","true"),this.attr("data-swap-target",c.content).attr("data-swap-group",c.group).addClass(c.tabClasses).on("activate.swap"+c.dotGuid,c,j).on("deactivate.swap"+c.dotGuid,c,k).on("enable.swap"+c.dotGuid,c,l).on("disable.swap"+c.dotGuid,c,m)}function e(b){this.fsSwap({maxWidth:b.maxWidth,classes:{target:b.dotGuid,enabled:s.enabled,active:s.active,raw:{target:b.rawGuid,enabled:t.enabled,active:t.active}},collapse:!1}),b.$mobileTab.on("click"+b.dotGuid,b,n),a.fsMediaquery("bind",b.rawGuid,b.mq,{enter:function(){o.call(b.$el,b)},leave:function(){p.call(b.$el,b)}})}function f(b){a.fsMediaquery("unbind",b.rawGuid),b.$mobileTab.off(u.namespace).remove(),b.$content.removeClass(t.content),this.removeAttr("data-swap-active").removeData("data-swap-active").removeAttr("data-swap-target").removeData("data-swap-target").removeAttr("data-swap-group").removeData("data-swap-group").removeClass(t.tab).off(u.namespace).fsSwap("destroy")}function g(a){this.fsSwap("activate")}function h(a){this.fsSwap("enable")}function i(a){this.fsSwap("disable")}function j(a){if(!a.originalEvent){var b=a.data,c=0;b.$el.trigger(u.update,[c]),b.$mobileTab.addClass(t.active),b.$content.addClass(t.active)}}function k(a){if(!a.originalEvent){var b=a.data;b.$mobileTab.removeClass(t.active),b.$content.removeClass(t.active)}}function l(a){var b=a.data;b.$mobileTab.addClass(t.enabled),b.$content.addClass(t.enabled)}function m(a){var b=a.data;b.$mobileTab.removeClass(t.enabled),b.$content.removeClass(t.enabled)}function n(a){a.data.$el.fsSwap("activate")}function o(a){a.$el.addClass(t.mobile),a.$mobileTab.addClass(t.mobile)}function p(a){a.$el.removeClass(t.mobile),a.$mobileTab.removeClass(t.mobile)}var q=b.Plugin("tabs",{widget:!0,defaults:{customClass:"",maxWidth:1/0,mobileMaxWidth:"740px",vertical:!1},classes:["tab","tab_mobile","mobile","content","enabled","active"],events:{update:"update"},methods:{_construct:d,_postConstruct:e,_destruct:f,activate:g,enable:h,disable:i}}),r=q.namespace,s=q.classes,t=s.raw,u=q.events;q.functions}(jQuery,Formstone);