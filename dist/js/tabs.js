/*! formstone v1.3.3 [tabs.js] 2017-08-01 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./swap"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(c){c.mq="(max-width:"+(c.mobileMaxWidth===1/0?"100000px":c.mobileMaxWidth)+")",c.content=this.attr("href"),c.group=this.data(q+"-group"),c.elementClasses=[s.tab,c.rawGuid,c.theme,c.customClass],c.mobileTabClasses=[s.tab,s.tab_mobile,c.rawGuid,c.theme,c.customClass],c.contentClasses=[s.content,c.rawGuid,c.theme,c.customClass],c.$mobileTab=a('<button type="button" class="'+c.mobileTabClasses.join(" ")+'" aria-hidden="true">'+this.text()+"</button>"),c.$content=a(c.content).addClass(c.contentClasses.join(" ")),c.$content.before(c.$mobileTab).attr("role","tabpanel"),this.attr("role","tab"),c.id=this.attr("id"),c.id?c.ariaId=c.id:(c.ariaId=c.rawGuid,this.attr("id",c.ariaId)),c.contentId=c.$content.attr("id"),c.contentGuid=c.rawGuid+"_content",c.contentId?c.ariacontentId=c.contentId:(c.ariaContentId=c.contentGuid,c.$content.attr("id",c.ariaContentId));var d=b.window.location.hash,e=!1,f=!1;d.length&&(e=this.filter("[href*='"+d+"']").length>0,f=c.group&&a("[data-"+q+'-group="'+c.group+'"]').filter("[href*='"+d+"']").length>0),e?this.attr("data-swap-active","true"):f?this.removeAttr("data-swap-active").removeData("data-swap-active"):"true"===this.attr("data-tabs-active")&&this.attr("data-swap-active","true"),this.attr("data-swap-target",c.content).attr("data-swap-group",c.group).addClass(c.elementClasses.join(" ")).on("activate.swap"+c.dotGuid,c,i).on("deactivate.swap"+c.dotGuid,c,j).on("enable.swap"+c.dotGuid,c,k).on("disable.swap"+c.dotGuid,c,l)}function d(b){this.fsSwap({maxWidth:b.maxWidth,classes:{target:b.dotGuid,enabled:r.enabled,active:r.active,raw:{target:b.rawGuid,enabled:s.enabled,active:s.active}},collapse:!1}),b.$mobileTab.on("click"+b.dotGuid,b,m),a.fsMediaquery("bind",b.rawGuid,b.mq,{enter:function(){n.call(b.$el,b)},leave:function(){o.call(b.$el,b)}})}function e(b){a.fsMediaquery("unbind",b.rawGuid),b.$mobileTab.off(t.namespace).remove(),b.elementClasses.push(s.mobile),b.contentClasses.push(s.mobile),b.$content.removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass(b.contentClasses.join(" ")),b.$content.attr("id")===b.contentGuid&&b.$content.removeAttr("id"),this.removeAttr("aria-controls").removeAttr("aria-selected").removeAttr("data-swap-active").removeData("data-swap-active").removeAttr("data-swap-target").removeData("data-swap-target").removeAttr("data-swap-group").removeData("data-swap-group").removeAttr("role").removeClass(b.elementClasses.join(" ")).off(t.namespace).fsSwap("destroy"),this.attr("id")===b.rawGuid&&this.removeAttr("id")}function f(a){this.fsSwap("activate")}function g(a){this.fsSwap("enable")}function h(a){this.fsSwap("disable")}function i(a){if(!a.originalEvent){var b=a.data;b.$el.attr("aria-selected",!0).trigger(t.update,[0]),b.$mobileTab.addClass(s.active),b.$content.attr("aria-hidden",!1).addClass(s.active)}}function j(a){if(!a.originalEvent){var b=a.data;b.$el.attr("aria-selected",!1),b.$mobileTab.removeClass(s.active),b.$content.attr("aria-hidden",!0).removeClass(s.active)}}function k(a){var b=a.data;b.$el.attr("aria-controls",b.ariaContentId),b.$mobileTab.addClass(s.enabled),b.$content.attr("aria-labelledby",b.ariaId).addClass(s.enabled)}function l(a){var b=a.data;b.$el.removeAttr("aria-controls").removeAttr("aria-selected"),b.$mobileTab.removeClass(s.enabled),b.$content.removeAttr("aria-labelledby").removeAttr("aria-hidden").removeClass(s.enabled)}function m(a){a.data.$el.fsSwap("activate")}function n(a){a.$el.addClass(s.mobile),a.$mobileTab.addClass(s.mobile),a.$content.addClass(s.mobile)}function o(a){a.$el.removeClass(s.mobile),a.$mobileTab.removeClass(s.mobile),a.$content.removeClass(s.mobile)}var p=b.Plugin("tabs",{widget:!0,defaults:{customClass:"",maxWidth:1/0,mobileMaxWidth:"740px",theme:"fs-light"},classes:["tab","tab_mobile","mobile","content","enabled","active"],events:{update:"update"},methods:{_construct:c,_postConstruct:d,_destruct:e,activate:f,enable:g,disable:h}}),q=p.namespace,r=p.classes,s=r.raw,t=p.events;p.functions});