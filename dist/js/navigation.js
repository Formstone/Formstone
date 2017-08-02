/*! formstone v1.3.3 [navigation.js] 2017-08-02 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./swap"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){B=a("html, body")}function d(b){b.handleGuid=y.handle+b.guid,b.isToggle="toggle"===b.type,b.open=!1,b.isToggle&&(b.gravity="");var c=y.base,d=[c,b.type].join("-"),e=b.gravity?[d,b.gravity].join("-"):"",f=[b.rawGuid,b.theme,b.customClass].join(" ");b.handle=this.data(w+"-handle"),b.content=this.data(w+"-content"),b.handleClasses=[y.handle,y.handle.replace(c,d),e?y.handle.replace(c,e):"",b.handleGuid,f].join(" "),b.thisClasses=[y.nav.replace(c,d),e?y.nav.replace(c,e):"",f],b.contentClasses=[y.content.replace(c,d),f].join(" "),b.contentClassesOpen=[e?y.content.replace(c,e):"",y.open].join(" "),b.$nav=this.addClass(b.thisClasses.join(" ")).attr("role","navigation"),b.$handle=a(b.handle).addClass(b.handleClasses),b.$content=a(b.content).addClass(b.contentClasses),b.$animate=a().add(b.$nav).add(b.$content),t(b),b.navTabIndex=b.$nav.attr("tabindex"),b.$nav.attr("tabindex",-1),b.id=this.attr("id"),b.id?b.ariaId=b.id:(b.ariaId=b.rawGuid,this.attr("id",b.ariaId)),b.$handle.attr("data-swap-target",b.dotGuid).attr("data-swap-linked",b.handleGuid).attr("data-swap-group",y.base).attr("tabindex",0).on("activate.swap"+b.dotGuid,b,n).on("deactivate.swap"+b.dotGuid,b,o).on("enable.swap"+b.dotGuid,b,p).on("disable.swap"+b.dotGuid,b,q).on(z.focus+b.dotGuid,b,j).on(z.blur+b.dotGuid,b,k).fsSwap({maxWidth:b.maxWidth,classes:{target:b.dotGuid,enabled:x.enabled,active:x.open,raw:{target:b.rawGuid,enabled:y.enabled,active:y.open}}}),b.$handle.on(z.keyUp+b.dotGuid,b,l),b.$nav.on(z.keyUp+b.dotGuid,b,m)}function e(a){a.$content.removeClass([a.contentClasses,a.contentClassesOpen].join(" ")).off(z.namespace),a.$handle.removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("data-swap-target").removeData("swap-target").removeAttr("data-swap-linked").removeAttr("data-swap-group").removeData("swap-linked").removeData("tabindex").removeClass(a.handleClasses).off(a.dotGuid).html(a.originalLabel).fsSwap("destroy"),a.$nav.attr("tabindex",a.navTabIndex),u(a),s(a),this.removeAttr("aria-hidden").removeClass(a.thisClasses.join(" ")).off(z.namespace),this.attr("id")===a.rawGuid&&this.removeAttr("id")}function f(a){a.$handle.fsSwap("activate")}function g(a){a.$handle.fsSwap("deactivate")}function h(a){a.$handle.fsSwap("enable")}function i(a){a.$handle.fsSwap("disable")}function j(a){a.data.$handle.addClass(y.focus)}function k(a){a.data.$handle.removeClass(y.focus)}function l(a){var b=a.data;13!==a.keyCode&&32!==a.keyCode||(b.$handle.is("a, button")||b.$handle.trigger(z.raw.click),(13===a.keyCode&&!0===b.open||32===a.keyCode&&!1===b.open)&&b.$nav.find(":focusable").eq(0).focus())}function m(a){var b=a.data;27===a.keyCode&&(A.killEvent(a),b.$handle.trigger(z.raw.click),b.$handle.focus())}function n(a){if(!a.originalEvent){var b=a.data;b.open||(b.$el.trigger(z.open).attr("aria-hidden",!1),b.$content.addClass(b.contentClassesOpen).one(z.click,function(){g(b)}),b.$handle.attr("aria-expanded",!0),b.label&&b.$handle.html(b.labels.open),r(b),b.open=!0)}}function o(a){if(!a.originalEvent){var b=a.data;b.open&&(b.$el.trigger(z.close).attr("aria-hidden",!0),b.$content.removeClass(b.contentClassesOpen).off(z.namespace),b.$handle.attr("aria-expanded",!1),b.label&&b.$handle.html(b.labels.closed),s(b),b.open=!1)}}function p(a){var b=a.data;b.$el.attr("aria-hidden",!0),b.$handle.attr("aria-controls",b.ariaId).attr("aria-expanded",!1),b.$content.addClass(y.enabled),setTimeout(function(){b.$animate.addClass(y.animated)},0),b.label&&b.$handle.html(b.labels.closed)}function q(a){var b=a.data;b.$el.removeAttr("aria-hidden"),b.$handle.removeAttr("aria-controls").removeAttr("aria-expanded"),b.$content.removeClass(y.enabled,y.animated),b.$animate.removeClass(y.animated),u(b),s(b)}function r(a){a.isToggle||B.addClass(y.lock)}function s(a){a.isToggle||B.removeClass(y.lock)}function t(a){if(a.label)if(a.$handle.length>1){a.originalLabel=[];for(var b=0,c=a.$handle.length;b<c;b++)a.originalLabel[b]=a.$handle.eq(b).html()}else a.originalLabel=a.$handle.html()}function u(a){if(a.label)if(a.$handle.length>1)for(var b=0,c=a.$handle.length;b<c;b++)a.$handle.eq(b).html(a.originalLabel[b]);else a.$handle.html(a.originalLabel)}var v=b.Plugin("navigation",{widget:!0,defaults:{customClass:"",gravity:"left",label:!0,labels:{closed:"Menu",open:"Close"},maxWidth:"980px",theme:"fs-light",type:"toggle"},classes:["handle","nav","content","animated","enabled","focus","open","toggle","push","reveal","overlay","left","right","lock"],events:{open:"open",close:"close"},methods:{_setup:c,_construct:d,_destruct:e,open:f,close:g,enable:h,disable:i}}),w=v.namespace,x=v.classes,y=x.raw,z=v.events,A=v.functions,B=null});