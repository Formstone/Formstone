/*! formstone v1.4.12 [lightbox.js] 2019-02-20 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./touch","./transition","./viewer"],t):t(jQuery,Formstone)}(function(t,i){"use strict";function e(e){if(!S){var o=e.data;!0===o.overlay&&(o.mobile=!0),(S=t.extend({},{visible:!1,gallery:{active:!1},isMobile:i.isMobile||o.mobile,isTouch:i.support.touch,isAnimating:!0,isZooming:!1,oldContentHeight:0,oldContentWidth:0,metaHeight:0,thumbnailHeight:0,captionOpen:!1,thumbnailsOpen:!1,tapTimer:null},o)).isViewer=S.isMobile&&o.viewer&&void 0!==t.fn.fsViewer;var a=o.$el,l=o.$object,g=a&&a[0].href?a[0].href||"":"",d=a&&a[0].hash?a[0].hash||"":"",c=(g.toLowerCase().split(".").pop().split(/\#|\?/),a?a.data(P+"-type"):""),p="image"===c||g.match(o.fileTypes)||"data:image"===g.substr(0,10),u=z(g),v="url"===c||!p&&!u&&"http"===g.substr(0,4)&&!d,H="element"===c||!p&&!u&&!v&&"#"===d.substr(0,1),w=void 0!==l;if(H&&(g=d),!(p||u||v||H||w))return void(S=null);if(B.killEvent(e),S.margin*=2,S.type=p?"image":u?"video":"element",p||u){var W=a.data(P+"-gallery");W&&(S.gallery.active=!0,S.gallery.id=W,S.gallery.$items=t("a[data-lightbox-gallery= "+S.gallery.id+"], a[rel= "+S.gallery.id+"]"),S.gallery.index=S.gallery.$items.index(S.$el),S.gallery.total=S.gallery.$items.length-1)}S.thumbnails&&(p||u)&&S.gallery.active||(S.thumbnails=!1);var y="";S.isMobile||(y+='<div class="'+[R.overlay,S.theme,S.customClass].join(" ")+'"></div>');var I=[R.base,R.loading,R.animating,S.theme,S.customClass];if(S.fixed&&I.push(R.fixed),S.isMobile&&I.push(R.mobile),S.isTouch&&I.push(R.touch),v&&I.push(R.iframed),(H||w)&&I.push(R.inline),S.thumbnails&&I.push(R.thumbnailed),S.labels.lightbox=S.labels.lightbox.replace("{guid}",o.numGuid),y+='<div class="'+I.join(" ")+'" role="dialog" aria-label="'+S.labels.lightbox+'" tabindex="-1">',y+='<button type="button" class="'+R.close+'">'+S.labels.close+"</button>",y+='<span class="'+R.loading_icon+'"></span>',y+='<div class="'+R.container+'">',S.gallery.active&&S.thumbnails){y+='<div class="'+[R.thumbnails]+'">',y+='<div class="'+[R.thumbnail_container]+'">';for(var M,k,j=0,O=S.gallery.$items.length;j<O;j++)(k=(M=S.gallery.$items.eq(j)).data("lightbox-thumbnail"))||(k=M.find("img").attr("src")),y+='<button class="'+[R.thumbnail_item]+'">',y+='<img src="'+k+'" alt="">',y+="</button>";y+="</div></div>"}y+='<div class="'+R.content+'"></div>',(p||u)&&(y+='<div class="'+R.tools+'">',y+='<div class="'+R.controls+'">',S.gallery.active&&(y+='<button type="button" class="'+[R.control,R.control_previous].join(" ")+'">'+S.labels.previous+"</button>",y+='<button type="button" class="'+[R.control,R.control_next].join(" ")+'">'+S.labels.next+"</button>"),S.isMobile&&S.isTouch&&(y+='<button type="button" class="'+[R.toggle,R.caption_toggle].join(" ")+'">'+S.labels.captionClosed+"</button>",S.gallery.active&&S.thumbnails&&(y+='<button type="button" class="'+[R.toggle,R.thumbnail_toggle].join(" ")+'">'+S.labels.thumbnailsClosed+"</button>")),y+="</div>",y+='<div class="'+R.meta+'">',y+='<div class="'+R.meta_content+'">',S.gallery.active&&(y+='<p class="'+R.position+'"',S.gallery.total<1&&(y+=' style="display: none;"'),y+=">",y+='<span class="'+R.position_current+'">'+(S.gallery.index+1)+"</span> ",y+=S.labels.count,y+=' <span class="'+R.position_total+'">'+(S.gallery.total+1)+"</span>",y+="</p>"),y+='<div class="'+R.caption+'">',y+=S.formatter.call(a,o),y+="</div></div></div>",y+="</div>"),y+="</div></div>",D.append(y),S.$overlay=t(E.overlay),S.$lightbox=t(E.base),S.$close=t(E.close),S.$container=t(E.container),S.$content=t(E.content),S.$tools=t(E.tools),S.$meta=t(E.meta),S.$metaContent=t(E.meta_content),S.$position=t(E.position),S.$caption=t(E.caption),S.$controlBox=t(E.controls),S.$controls=t(E.control),S.$thumbnails=t(E.thumbnails),S.$thumbnailContainer=t(E.thumbnail_container),S.$thumbnailItems=t(E.thumbnail_item),S.isMobile?(S.paddingVertical=S.$close.outerHeight(),S.paddingHorizontal=0,S.mobilePaddingVertical=parseInt(S.$content.css("paddingTop"),10)+parseInt(S.$content.css("paddingBottom"),10),S.mobilePaddingHorizontal=parseInt(S.$content.css("paddingLeft"),10)+parseInt(S.$content.css("paddingRight"),10)):(S.paddingVertical=parseInt(S.$lightbox.css("paddingTop"),10)+parseInt(S.$lightbox.css("paddingBottom"),10),S.paddingHorizontal=parseInt(S.$lightbox.css("paddingLeft"),10)+parseInt(S.$lightbox.css("paddingRight"),10),S.mobilePaddingVertical=0,S.mobilePaddingHorizontal=0),S.contentHeight=S.$lightbox.outerHeight()-S.paddingVertical,S.contentWidth=S.$lightbox.outerWidth()-S.paddingHorizontal,S.controlHeight=S.$controls.outerHeight(),r(),S.gallery.active&&(S.$lightbox.addClass(R.has_controls),x()),K.on(A.keyDown,C),D.on(A.click,[E.overlay,E.close].join(", "),n).on([A.focus,A.focusIn].join(" "),L),S.gallery.active&&S.$lightbox.on(A.click,E.control,$),S.thumbnails&&S.$lightbox.on(A.click,E.thumbnail_item,f),S.isMobile&&S.isTouch&&S.$lightbox.on(A.click,E.caption_toggle,s).on(A.click,E.thumbnail_toggle,h),S.$lightbox.fsTransition({property:"opacity"},function(){p?m(g):u?b(g):v?V(g):H?_(g):w&&T(S.$object)}).addClass(R.open),S.$overlay.addClass(R.open)}}function o(t){"object"!=typeof t&&(S.targetHeight=arguments[0],S.targetWidth=arguments[1]),"element"===S.type?M(S.$content.find("> :first-child")):"image"===S.type?p():"video"===S.type&&v(),l()}function n(t){B.killEvent(t),S&&(S.$lightbox.fsTransition("destroy"),S.$content.fsTransition("destroy"),S.$lightbox.addClass(R.animating).fsTransition({property:"opacity"},function(t){void 0!==S.$inlineTarget&&S.$inlineTarget.length&&I(),S.isViewer&&S.$imageContainer&&S.$imageContainer.length&&S.$imageContainer.fsViewer("destroy"),S.$lightbox.off(A.namespace),S.$container.off(A.namespace),K.off(A.keyDown),D.off(A.namespace),D.off(A.namespace),S.$overlay.remove(),S.$lightbox.remove(),void 0!==S.$el&&S.$el&&S.$el.length&&S.$el.focus(),S=null,K.trigger(A.close)}),S.$lightbox.removeClass(R.open),S.$overlay.removeClass(R.open),S.isMobile&&(N.removeClass(R.lock),B.unlockViewport(P)))}function a(){var t=g();S.isMobile||S.duration;S.isMobile?B.lockViewport(P):S.$controls.css({marginTop:(S.contentHeight-S.controlHeight-S.metaHeight+S.thumbnailHeight)/2}),""===S.$caption.html()?(S.$caption.hide(),S.$lightbox.removeClass(R.has_caption),S.gallery.active||S.$tools.hide()):(S.$caption.show(),S.$lightbox.addClass(R.has_caption)),S.$lightbox.fsTransition({property:S.contentHeight!==S.oldContentHeight?"height":"width"},function(){S.$content.fsTransition({property:"opacity"},function(){S.$lightbox.removeClass(R.animating),S.isAnimating=!1}),S.$lightbox.removeClass(R.loading).addClass(R.ready),S.visible=!0,K.trigger(A.open),S.gallery.active&&(H(),w(),W()),S.$lightbox.focus()}),S.isMobile||S.$lightbox.css({height:S.contentHeight+S.paddingVertical,width:S.contentWidth+S.paddingHorizontal,top:S.fixed?0:t.top});var i=S.oldContentHeight!==S.contentHeight||S.oldContentWidth!==S.contentWidth;!S.isMobile&&i||S.$lightbox.fsTransition("resolve"),S.oldContentHeight=S.contentHeight,S.oldContentWidth=S.contentWidth,S.isMobile&&N.addClass(R.lock)}function l(){if(S.visible&&!S.isMobile){var t=g();S.$controls.css({marginTop:(S.contentHeight-S.controlHeight-S.metaHeight+S.thumbnailHeight)/2}),S.$lightbox.css({height:S.contentHeight+S.paddingVertical,width:S.contentWidth+S.paddingHorizontal,top:S.fixed?0:t.top}),S.oldContentHeight=S.contentHeight,S.oldContentWidth=S.contentWidth}}function r(){var t=g();S.$lightbox.css({top:S.fixed?0:t.top})}function g(){if(S.isMobile)return{left:0,top:0};var t={left:(i.windowWidth-S.contentWidth-S.paddingHorizontal)/2,top:S.top<=0?(i.windowHeight-S.contentHeight-S.paddingVertical)/2:S.top};return!0!==S.fixed&&(t.top+=K.scrollTop()),t}function s(t){if(B.killEvent(t),S.captionOpen)d();else{c();var i=parseInt(S.$metaContent.outerHeight(!0));i+=parseInt(S.$meta.css("padding-top")),i+=parseInt(S.$meta.css("padding-bottom")),S.$meta.css({height:i}),S.$lightbox.addClass(R.caption_open).find(E.caption_toggle).text(S.labels.captionOpen),S.captionOpen=!0}}function d(){S.$lightbox.removeClass(R.caption_open).find(E.caption_toggle).text(S.labels.captionClosed),S.captionOpen=!1}function h(t){B.killEvent(t),S.thumbnailsOpen?c():(d(),S.$lightbox.addClass(R.thumbnails_open).find(E.thumbnail_toggle).text(S.labels.thumbnailsOpen),S.thumbnailsOpen=!0)}function c(){S.$lightbox.removeClass(R.thumbnails_open).find(E.thumbnail_toggle).text(S.labels.thumbnailsClosed),S.thumbnailsOpen=!1}function m(i){S.isViewer?(S.$imageContainer=t('<div class="'+R.image_container+'"><img></div>'),S.$image=S.$imageContainer.find("img"),S.$image.attr("src",i).addClass(R.image),S.$content.prepend(S.$imageContainer),p(),S.$imageContainer.one("loaded.viewer",function(){a()}).fsViewer({theme:S.theme})):(S.$imageContainer=t('<div class="'+R.image_container+'"><img></div>'),S.$image=S.$imageContainer.find("img"),S.$image.one(A.load,function(){var t=j(S.$image);S.naturalHeight=t.naturalHeight,S.naturalWidth=t.naturalWidth,S.retina&&(S.naturalHeight/=2,S.naturalWidth/=2),S.$content.prepend(S.$imageContainer),p(),a()}).on(A.error,k).attr("src",i).addClass(R.image),(S.$image[0].complete||4===S.$image[0].readyState)&&S.$image.trigger(A.load))}function p(){if(S.$image){var t=0;for(S.windowHeight=S.viewportHeight=i.windowHeight-S.mobilePaddingVertical-S.paddingVertical,S.windowWidth=S.viewportWidth=i.windowWidth-S.mobilePaddingHorizontal-S.paddingHorizontal,S.contentHeight=1/0,S.contentWidth=1/0,S.imageMarginTop=0,S.imageMarginLeft=0;S.contentHeight>S.viewportHeight&&t<2;)S.imageHeight=0===t?S.naturalHeight:S.$image.outerHeight(),S.imageWidth=0===t?S.naturalWidth:S.$image.outerWidth(),S.metaHeight=0===t?0:S.metaHeight,S.spacerHeight=0===t?0:S.spacerHeight,S.thumbnailHeight=0===t?0:S.thumbnailHeight,0===t&&(S.ratioHorizontal=S.imageHeight/S.imageWidth,S.ratioVertical=S.imageWidth/S.imageHeight,S.isWide=S.imageWidth>S.imageHeight),S.imageHeight<S.minHeight&&(S.minHeight=S.imageHeight),S.imageWidth<S.minWidth&&(S.minWidth=S.imageWidth),S.isMobile?(S.isTouch?(S.$controlBox.css({width:i.windowWidth}),S.spacerHeight=S.$controls.outerHeight(!0)):(S.$tools.css({width:i.windowWidth}),S.spacerHeight=S.$tools.outerHeight(!0)),S.contentHeight=S.viewportHeight,S.contentWidth=S.viewportWidth,S.isTouch||S.$content.css({height:S.contentHeight-S.spacerHeight}),S.$thumbnails.length&&(S.spacerHeight+=S.$thumbnails.outerHeight(!0)),S.spacerHeight+=10,u(),S.imageMarginTop=(S.contentHeight-S.targetImageHeight-S.spacerHeight)/2,S.imageMarginLeft=(S.contentWidth-S.targetImageWidth)/2):(0===t&&(S.viewportHeight-=S.margin+S.paddingVertical,S.viewportWidth-=S.margin+S.paddingHorizontal),S.viewportHeight-=S.metaHeight,S.thumbnails&&(S.viewportHeight-=S.thumbnailHeight),u(),S.contentHeight=S.targetImageHeight,S.contentWidth=S.targetImageWidth),S.isMobile||S.isTouch||S.$meta.css({width:S.contentWidth}),S.$image.css({height:S.targetImageHeight,width:S.targetImageWidth,marginTop:S.imageMarginTop,marginLeft:S.imageMarginLeft}),S.isMobile||(S.metaHeight=S.$meta.outerHeight(!0),S.contentHeight+=S.metaHeight),S.thumbnails&&(S.thumbnailHeight=S.$thumbnails.outerHeight(!0),S.contentHeight+=S.thumbnailHeight),t++}}function u(){var t=S.isMobile?S.contentHeight-S.spacerHeight:S.viewportHeight,i=S.isMobile?S.contentWidth:S.viewportWidth;S.isWide?(S.targetImageWidth=i,S.targetImageHeight=S.targetImageWidth*S.ratioHorizontal,S.targetImageHeight>t&&(S.targetImageHeight=t,S.targetImageWidth=S.targetImageHeight*S.ratioVertical)):(S.targetImageHeight=t,S.targetImageWidth=S.targetImageHeight*S.ratioVertical,S.targetImageWidth>i&&(S.targetImageWidth=i,S.targetImageHeight=S.targetImageWidth*S.ratioHorizontal)),(S.targetImageWidth>S.imageWidth||S.targetImageHeight>S.imageHeight)&&(S.targetImageHeight=S.imageHeight,S.targetImageWidth=S.imageWidth),(S.targetImageWidth<S.minWidth||S.targetImageHeight<S.minHeight)&&(S.targetImageWidth<S.minWidth?(S.targetImageWidth=S.minWidth,S.targetImageHeight=S.targetImageWidth*S.ratioHorizontal):(S.targetImageHeight=S.minHeight,S.targetImageWidth=S.targetImageHeight*S.ratioVertical))}function b(i){var e=z(i),o=i.split("?"),n="&origin="+encodeURIComponent(window.location.protocol+"//"+window.location.hostname);e?(o.length>=2&&(e+="?"+o.slice(1)[0].trim()),S.$videoWrapper=t('<div class="'+R.video_wrapper+'"></div>'),S.$video=t('<iframe class="'+R.video+'" frameborder="0" seamless="seamless" allowfullscreen></iframe>'),S.$video.attr("src",e+"&enablejsapi=1"+n).addClass(R.video).prependTo(S.$videoWrapper),S.$content.prepend(S.$videoWrapper),v(),a()):k()}function v(){S.windowHeight=S.viewportHeight=i.windowHeight-S.mobilePaddingVertical-S.paddingVertical,S.windowWidth=S.viewportWidth=i.windowWidth-S.mobilePaddingHorizontal-S.paddingHorizontal,S.videoMarginTop=0,S.videoMarginLeft=0,S.isMobile?(S.isTouch?(S.$controlBox.css({width:i.windowWidth}),S.spacerHeight=S.$controls.outerHeight(!0)+10):(S.$tools.css({width:i.windowWidth}),S.spacerHeight=S.$tools.outerHeight(!0),S.spacerHeight+=S.$thumbnails.outerHeight(!0)+10),S.viewportHeight-=S.spacerHeight,S.targetVideoWidth=S.viewportWidth,S.targetVideoHeight=S.targetVideoWidth*S.videoRatio,S.targetVideoHeight>S.viewportHeight&&(S.targetVideoHeight=S.viewportHeight,S.targetVideoWidth=S.targetVideoHeight/S.videoRatio),S.videoMarginTop=(S.viewportHeight-S.targetVideoHeight)/2,S.videoMarginLeft=(S.viewportWidth-S.targetVideoWidth)/2):(S.viewportHeight=S.windowHeight-S.margin,S.viewportWidth=S.windowWidth-S.margin,S.targetVideoWidth=S.videoWidth>S.viewportWidth?S.viewportWidth:S.videoWidth,S.targetVideoWidth<S.minWidth&&(S.targetVideoWidth=S.minWidth),S.targetVideoHeight=S.targetVideoWidth*S.videoRatio,S.contentHeight=S.targetVideoHeight,S.contentWidth=S.targetVideoWidth),S.isMobile||S.isTouch||S.$meta.css({width:S.contentWidth}),S.$videoWrapper.css({height:S.targetVideoHeight,width:S.targetVideoWidth,marginTop:S.videoMarginTop,marginLeft:S.videoMarginLeft}),S.isMobile||(S.metaHeight=S.$meta.outerHeight(!0),S.contentHeight+=S.metaHeight),S.thumbnails&&(S.thumbnailHeight=S.$thumbnails.outerHeight(!0),S.contentHeight+=S.thumbnailHeight)}function H(i){var e="";S.gallery.index>0&&(z(e=S.gallery.$items.eq(S.gallery.index-1).attr("href"))||t('<img src="'+e+'">')),S.gallery.index<S.gallery.total&&(z(e=S.gallery.$items.eq(S.gallery.index+1).attr("href"))||t('<img src="'+e+'">'))}function $(i){B.killEvent(i);var e=t(i.currentTarget);S.isAnimating||e.hasClass(R.control_disabled)||(S.isAnimating=!0,d(),S.gallery.index+=e.hasClass(R.control_next)?1:-1,S.gallery.index>S.gallery.total&&(S.gallery.index=S.infinite?0:S.gallery.total),S.gallery.index<0&&(S.gallery.index=S.infinite?S.gallery.total:0),w(),S.$lightbox.addClass(R.animating),S.$content.fsTransition({property:"opacity"},y),S.$lightbox.addClass(R.loading))}function f(i){B.killEvent(i);var e=t(i.currentTarget);S.isAnimating||e.hasClass(R.active)||(S.isAnimating=!0,d(),S.gallery.index=S.$thumbnailItems.index(e),w(),S.$lightbox.addClass(R.animating),S.$content.fsTransition({property:"opacity"},y),S.$lightbox.addClass(R.loading))}function w(){if(S.thumbnails){var t=S.$thumbnailItems.eq(S.gallery.index);S.$thumbnailItems.removeClass(R.active),t.addClass(R.active)}}function W(){if(S.thumbnails){var t=S.$thumbnailItems.eq(S.gallery.index),i=t.position().left+t.outerWidth(!1)/2-S.$thumbnailContainer.outerWidth(!0)/2;S.$thumbnailContainer.stop().animate({scrollLeft:i},200,"linear")}}function y(){void 0!==S.$imageContainer&&(S.isViewer&&S.$imageContainer.fsViewer("destroy"),S.$imageContainer.remove()),void 0!==S.$videoWrapper&&S.$videoWrapper.remove(),S.$el=S.gallery.$items.eq(S.gallery.index),S.$caption.html(S.formatter.call(S.$el,S)),S.$position.find(E.position_current).html(S.gallery.index+1);var t=S.$el.attr("href");z(t)?(S.type="video",b(t)):(S.type="image",m(t)),x()}function x(){S.$controls.removeClass(R.control_disabled),S.infinite||(0===S.gallery.index&&S.$controls.filter(E.control_previous).addClass(R.control_disabled),S.gallery.index===S.gallery.total&&S.$controls.filter(E.control_next).addClass(R.control_disabled))}function C(t){!S.gallery.active||37!==t.keyCode&&39!==t.keyCode?27===t.keyCode&&S.$close.trigger(A.click):(B.killEvent(t),S.$controls.filter(37===t.keyCode?E.control_previous:E.control_next).trigger(A.click))}function _(i){S.$inlineTarget=t(i),S.$inlineContents=S.$inlineTarget.children().detach(),T(S.$inlineContents)}function I(){S.$inlineTarget.append(S.$inlineContents.detach())}function V(i){i+=i.indexOf("?")>-1?"&"+S.requestKey+"=true":"?"+S.requestKey+"=true",T(t('<iframe class="'+R.iframe+'" src="'+i+'"></iframe>'))}function T(t){S.$content.append(t),M(t),a()}function M(t){S.windowHeight=i.windowHeight-S.mobilePaddingVertical-S.paddingVertical,S.windowWidth=i.windowWidth-S.mobilePaddingHorizontal-S.paddingHorizontal,S.objectHeight=t.outerHeight(!0),S.objectWidth=t.outerWidth(!0),S.targetHeight=S.targetHeight||(S.$el?S.$el.data(P+"-height"):null),S.targetWidth=S.targetWidth||(S.$el?S.$el.data(P+"-width"):null),S.maxHeight=S.windowHeight<0?S.minHeight:S.windowHeight,S.isIframe=t.is("iframe"),S.objectMarginTop=0,S.objectMarginLeft=0,S.isMobile||(S.windowHeight-=S.margin,S.windowWidth-=S.margin),S.contentHeight=S.targetHeight?S.targetHeight:S.isIframe||S.isMobile?S.windowHeight:S.objectHeight,S.contentWidth=S.targetWidth?S.targetWidth:S.isIframe||S.isMobile?S.windowWidth:S.objectWidth,(S.isIframe||S.isObject)&&S.isMobile?(S.contentHeight=S.windowHeight,S.contentWidth=S.windowWidth):S.isObject&&(S.contentHeight=S.contentHeight>S.windowHeight?S.windowHeight:S.contentHeight,S.contentWidth=S.contentWidth>S.windowWidth?S.windowWidth:S.contentWidth),S.isMobile||(S.contentHeight>S.maxHeight&&(S.contentHeight=S.maxHeight),S.contentWidth>S.maxWidth&&(S.contentWidth=S.maxWidth))}function k(){var i=t('<div class="'+R.error+'"><p>Error Loading Resource</p></div>');S.type="element",S.$tools.remove(),S.$image.off(A.namespace),T(i),K.trigger(A.error)}function j(t){var i=t[0],e=new Image;return void 0!==i.naturalHeight?{naturalHeight:i.naturalHeight,naturalWidth:i.naturalWidth}:"img"===i.tagName.toLowerCase()&&(e.src=i.src,{naturalHeight:e.height,naturalWidth:e.width})}function z(t){var i,e=S.videoFormatter;for(var o in e)if(e.hasOwnProperty(o)&&null!==(i=t.match(e[o].pattern)))return e[o].format.call(S,i);return!1}function L(i){var e=i.target;t.contains(S.$lightbox[0],e)||e===S.$lightbox[0]||e===S.$overlay[0]||(B.killEvent(i),S.$lightbox.focus())}var O=i.Plugin("lightbox",{widget:!0,defaults:{customClass:"",fileTypes:/\.(jpg|sjpg|jpeg|png|gif)/i,fixed:!1,formatter:function(){var t=this.attr("title"),i=!(void 0===t||!t)&&t.replace(/^\s+|\s+$/g,"");return i?'<p class="caption">'+i+"</p>":""},infinite:!1,labels:{close:"Close",count:"of",next:"Next",previous:"Previous",captionClosed:"View Caption",captionOpen:"Close Caption",thumbnailsClosed:"View Thumbnails",thumbnailsOpen:"Close Thumbnails",lightbox:"Lightbox {guid}"},margin:50,maxHeight:1e4,maxWidth:1e4,minHeight:100,minWidth:100,mobile:!1,overlay:!1,retina:!1,requestKey:"fs-lightbox",theme:"fs-light",thumbnails:!1,top:0,videoFormatter:{youtube:{pattern:/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,format:function(t){return"//www.youtube.com/embed/"+t[1]}},vimeo:{pattern:/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,format:function(t){return"//player.vimeo.com/video/"+t[3]}}},videoRatio:.5625,videoWidth:800,viewer:!0},classes:["loading","animating","fixed","mobile","touch","inline","iframed","open","ready","overlay","close","loading_icon","container","content","image","image_container","video","video_wrapper","tools","meta","meta_content","controls","control","control_previous","control_next","control_disabled","position","position_current","position_total","toggle","caption_toggle","caption","caption_open","thumbnailed","thumbnails_open","thumbnail_toggle","thumbnails","thumbnail_container","thumbnail_item","active","has_controls","has_caption","iframe","error","active","lock"],events:{open:"open",close:"close"},methods:{_construct:function(t){this.on(A.click,t,e);var i=this.data(P+"-gallery");!Q&&G&&i===G&&(Q=!0,this.trigger(A.click))},_destruct:function(t){n(),this.off(A.namespace)},_resize:function(){S&&o()},resize:o},utilities:{_initialize:function(i,o){i instanceof t&&e.apply(F,[{data:t.extend(!0,{},{$object:i},q,o||{})}])},close:n}}),P=O.namespace,q=O.defaults,E=O.classes,R=E.raw,A=O.events,B=O.functions,F=i.window,K=i.$window,D=null,N=null,G=!1,Q=!1,S=null;i.Ready(function(){D=i.$body,N=t("html, body"),G=i.window.location.hash.replace("#","")})});