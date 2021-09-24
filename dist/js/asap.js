/*! formstone v1.4.21 [asap.js] 2021-09-24 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./analytics"],e):e(jQuery,Formstone)}(function(l,t){"use strict";function r(e){var t=e.currentTarget;1<e.which||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||window.location.protocol!==t.protocol||window.location.host!==t.host||"_blank"===t.target||t.hash&&(t.href.replace(t.hash,"")===window.location.href.replace(location.hash,"")||t.href===window.location.href+"#")||t.href.match(f.ignoreTypes)||(g.killEvent(e),e.stopImmediatePropagation(),t.href!==m&&o(t.href,!0))}function n(e){d&&d.abort();var t=e.originalEvent.state;t&&(O=t.id,t.url!==m&&o(t.url,!1))}function o(n,e){d&&d.abort(),p.trigger(y.requested,[e]),f.transitionOutDeferred=f.transitionOut.apply(h,[!1]);var o=c(n),t=o.params,r=(o.hash,o.clean),a="User error",i=null,s=l.Deferred();t[f.requestKey]=!0,d=l.ajax({url:r,data:t,dataType:"json",cache:f.cache,xhr:function(){var e=new h.XMLHttpRequest;return e.addEventListener("progress",function(e){if(e.lengthComputable){var t=e.loaded/e.total;p.trigger(y.progress,[t])}},!1),e},success:function(e,t,r){i="string"==typeof e?l.parseJSON(e):e,e.location&&(n=e.location,o=c(n),o.hash),s.resolve()},error:function(e,t,r){a=r,s.reject()}}),l.when(s,f.transitionOutDeferred).done(function(){!function(e,t,r){p.trigger(y.loaded,[t]),void 0!==l.fsAnalytics&&l.fsAnalytics("pageview");f.render.call(this,t,e.hash),m=e.url,r&&function(e,t){history.pushState({id:e,url:t},w+e,t)}(++O,m);p.trigger(y.rendered,[t]);var n=!1;if(""!==e.hash){var o=l(e.hash);o.length&&(n=o.offset().top)}!1!==n&&p.scrollTop(n)}(o,i,e)}).fail(function(){p.trigger(y.failed,[a])})}function a(e,t){var r;if(void 0!==e)for(var n in e)e.hasOwnProperty(n)&&(r=l(n)).length&&r.html(e[n])}function i(e,t){history.replaceState({id:e,url:t},w+e,t)}function c(e){var t=e.indexOf("?"),r=e.indexOf("#"),n={},o="",a=e;return-1<r&&(o=e.slice(r),a=e.slice(0,r)),-1<t&&(n=g.parseQueryString(e.slice(t+1,-1<r?r:e.length)),a=e.slice(0,t)),{hash:o,params:n,url:e,clean:a}}var s,d,f,e=t.Plugin("asap",{utilities:{_initialize:function(e){!f&&t.support.history&&(s=t.$body,(f=l.extend(u,e)).render===l.noop&&(f.render=a),f.transitionOut===l.noop&&(f.transitionOut=function(){return l.Deferred().resolve()}),history.state?(O=history.state.id,m=history.state.url):(m=window.location.href,i(O,m)),p.on(y.popState,n),s&&!s.hasClass(v.base)&&s.on(y.click,f.selector,r).addClass(v.base))},load:function(e){f&&t.support.history?e&&o(e,!0):window.location.href=e},replace:function(e){var t=history.state;m=e,i(t.id,e)}},events:{failed:"failed",loaded:"loaded",popState:"popstate",progress:"progress",requested:"requested",rendered:"rendered"}}),u={cache:!0,ignoreTypes:/\.(jpg|sjpg|jpeg|png|gif|zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,render:l.noop,requestKey:"fs-asap",selector:"a",transitionOut:l.noop},p=t.$window,h=p[0],g=e.functions,y=e.events,v=e.classes.raw,w="asap-",m="",O=1});