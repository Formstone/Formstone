/*! formstone v0.8.36 [upload.js] 2016-01-26 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(a){if(b.support.file){var c="";a.label!==!1&&(c+='<div class="'+v.target+'">',c+=a.label,c+="</div>"),c+='<input class="'+v.input+'" type="file"',a.multiple&&(c+=" multiple"),c+=">",this.addClass(v.base).append(c),a.$input=this.find(u.input),a.queue=[],a.total=0,a.uploading=!1,a.disabled=!0,a.aborting=!1,this.on(w.click,u.target,a,j).on(w.dragEnter,a,l).on(w.dragOver,a,m).on(w.dragLeave,a,n).on(w.drop,a,o),a.$input.on(w.change,a,k),i.call(this,a)}}function e(a){b.support.file&&(a.$input.off(w.namespace),this.off([w.click,w.dragEnter,w.dragOver,w.dragLeave,w.drop].join(" ")).removeClass(v.base).html(""))}function f(b,c){var d;b.aborting=!0;for(var e in b.queue)b.queue.hasOwnProperty(e)&&(d=b.queue[e],("undefined"===a.type(c)||c>=0&&d.index===c)&&(d.started&&!d.complete?d.transfer.abort():g(b,d,"abort")));b.aborting=!1,r(b)}function g(a,b,c){b.error=!0,a.$el.trigger(w.fileError,[b,c]),a.aborting||r(a)}function h(a){a.disabled||(this.addClass(v.disabled),a.$input.prop("disabled",!0),a.disabled=!0)}function i(a){a.disabled&&(this.removeClass(v.disabled),a.$input.prop("disabled",!1),a.disabled=!1)}function j(a){x.killEvent(a);var b=a.data;b.disabled||b.$input.trigger(w.click)}function k(a){x.killEvent(a);var b=a.data,c=b.$input[0].files;!b.disabled&&c.length&&p(b,c)}function l(a){x.killEvent(a);var b=a.data;b.$el.addClass(v.dropping).trigger(w.fileDragEnter)}function m(a){x.killEvent(a);var b=a.data;b.$el.addClass(v.dropping).trigger(w.fileDragOver)}function n(a){x.killEvent(a);var b=a.data;b.$el.removeClass(v.dropping).trigger(w.fileDragLeave)}function o(a){x.killEvent(a);var b=a.data,c=a.originalEvent.dataTransfer.files;b.$el.removeClass(v.dropping),b.disabled||p(b,c)}function p(a,b){for(var c=[],d=0;d<b.length;d++){var e={index:a.total++,file:b[d],name:b[d].name,size:b[d].size,started:!1,complete:!1,error:!1,transfer:null};c.push(e),a.queue.push(e)}a.$el.trigger(w.queued,[c]),a.autoUpload&&q(a)}function q(a){a.uploading||(z.on(w.beforeUnload,function(){return a.leave}),a.uploading=!0,a.$el.trigger(w.start,[a.queue])),r(a)}function r(a){var b=0,c=[];for(var d in a.queue)!a.queue.hasOwnProperty(d)||a.queue[d].complete||a.queue[d].error||c.push(a.queue[d]);a.queue=c;for(var e in a.queue)if(a.queue.hasOwnProperty(e)){if(!a.queue[e].started){var f=new FormData;f.append(a.postKey,a.queue[e].file);for(var g in a.postData)a.postData.hasOwnProperty(g)&&f.append(g,a.postData[g]);s(a,f,a.queue[e])}if(b++,b>=a.maxQueue)return;d++}0===b&&(z.off(w.beforeUnload),a.uploading=!1,a.$el.trigger(w.complete))}function s(b,c,d){c=b.beforeSend.call(y,c,d),d.size>=b.maxSize||c===!1||d.error===!0?g(b,d,c?"size":"abort"):(d.started=!0,d.transfer=a.ajax({url:b.action,data:c,dataType:b.dataType,type:"POST",contentType:!1,processData:!1,cache:!1,xhr:function(){var c=a.ajaxSettings.xhr();return c.upload&&c.upload.addEventListener("progress",function(a){var c=0,e=a.loaded||a.position,f=a.total;a.lengthComputable&&(c=Math.ceil(e/f*100)),b.$el.trigger(w.fileProgress,[d,c])},!1),c},beforeSend:function(a,c){b.$el.trigger(w.fileStart,[d])},success:function(a,c,e){d.complete=!0,b.$el.trigger(w.fileComplete,[d,a]),r(b)},error:function(a,c,e){g(b,d,e)}}))}var t=b.Plugin("upload",{widget:!0,defaults:{action:"",autoUpload:!0,beforeSend:function(a){return a},customClass:"",dataType:"html",label:"Drag and drop files or click to select",leave:"You have uploads pending, are you sure you want to leave this page?",maxQueue:2,maxSize:5242880,multiple:!0,postData:{},postKey:"file"},classes:["input","target","multiple","dropping","disabled"],methods:{_construct:d,_destruct:e,disable:h,enable:i,abort:f,start:q}}),u=t.classes,v=u.raw,w=t.events,x=t.functions,y=b.window,z=b.$window;w.complete="complete",w.fileComplete="filecomplete",w.fileDragEnter="filedragenter",w.fileDragLeave="filedragleave",w.fileDragOver="filedragover",w.fileError="fileerror",w.fileProgress="fileprogress",w.fileStart="filestart",w.start="start",w.queued="queued"}(jQuery,Formstone);