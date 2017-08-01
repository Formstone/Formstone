/* jshint sub: true */
/* global define */

define(["Modernizr"], function (M) {

	var tests = {
		"standalone": {
			"ambientlight": M.ambientlight,
			"applicationcache": M.applicationcache,
			"audio": M.audio,
			"battery": M.batteryapi,
			"blob": M.blobconstructor,
			"canvas": M.canvas,
			"canvastext": M.canvastext,
			"contenteditable": M.contenteditable,
			"contextmenu": M.contextmenu,
			"cookies": M.cookies,
			"cors": M.cors,
			"custom-protocol-handler": M.customprotocolhandler,
			"customevent": M.customevent,
			"dart": M.dart,
			"dataview-api": M.dataview,
			"draganddrop": M.draganddrop,
			"emoji": M.emoji,
			"eventlistener": M.eventlistener,
			"exif-orientation": M.exiforientation,
			"flash": M.flash,
			"fullscreen-api": M.fullscreen,
			"gamepad": M.gamepads,
			"geolocation": M.geolocation,
			"hashchange": M.hashchange,
			"hiddenscroll": M.hiddenscroll,
			"history": M.history,
			"htmlimports": M.htmlimports,
			"ie8compat": M.ie8compat,
			"indexeddb": M.indexeddb,
			"indexeddbblob": M.indexeddbblob,
			"input": M.input,
			"inputsearchevent": M.search,
			"inputtypes": M.inputtypes,
			"intl": M.intl,
			"json": M.json,
			"lists-reversed": M.olreversed,
			"mathml": M.mathml,
			"notification": M.notification,
			"pagevisibility-api": M.pagevisibility,
			"performance": M.performance,
			"pointerevents": M.pointerevents,
			"pointerlock-api": M.pointerlock,
			"postmessage": M.postmessage,
			"proximity": M.proximity,
			"queryselector": M.queryselector,
			"quota-management-api": M.quotamanagement,
			"requestanimationframe": M.requestanimationframe,
			"serviceworker": M.serviceworker,
			"svg": M.svg,
			"templatestrings": M.templatestrings,
			"touchevents": M.touchevents,
			"typed-arrays": M.typedarrays,
			"unicode-range": M.unicoderange,
			"unicode": M.unicode,
			"userdata": M.userdata,
			"vibration": M.vibrate,
			"video": M.video,
			"vml": M.vml,
			"web-intents": M.webintents,
			"webanimations": M.animation,
			"webgl": M.webgl,
			"websockets": M.websockets
		},
		"a": {
			"download": M.adownload
		},
		"audio": {
			"loop": M.audioloop,
			"preload": M.audiopreload,
			"webaudio": M.webaudio
		},
		"battery": {
			"lowbattery": M.lowbattery
		},
		"canvas": {
			"blending": M.canvasblending,
			"todataurl": [
				M["todataurljpeg"],
				M["todataurlpng"],
				M["todataurlwebp"]
			],
			"winding": [
				M["canvaswinding"]
			]
		},
		"crypto": {
			"getrandomvalues": M.getrandomvalues
		},
		"css": {
			"all": M.cssall,
			"animations": M.cssanimations,
			"appearance": M.appearance,
			"backgroundblendmode": M.backgroundblendmode,
			"backgroundcliptext": M.backgroundcliptext,
			"backgroundposition-shorthand": M.bgpositionshorthand,
			"backgroundposition-xy": M.bgpositionxy,
			"backgroundrepeat": [
				M["bgrepeatspace"],
				M["bgrepeatround"]
			],
			"backgroundsize": M.backgroundsize,
			"backgroundsizecover": M.bgsizecover,
			"borderimage": M.borderimage,
			"borderradius": M.borderradius,
			"boxshadow": M.boxshadow,
			"boxsizing": M.boxsizing,
			"calc": M.csscalc,
			"checked": M.checked,
			"chunit": M.csschunit,
			"columns": M.csscolumns,
			"cubicbezierrange": M.cubicbezierrange,
			"displayrunin": M["display-runin"],
			"displaytable": M.displaytable,
			"ellipsis": M.ellipsis,
			"escape": M.cssescape,
			"exunit": M.cssexunit,
			"filters": M.cssfilters,
			"flexbox": M.flexbox,
			"flexboxlegacy": M.flexboxlegacy,
			"flexboxtweener": M.flexboxtweener,
			"flexwrap": M.flexwrap,
			"fontface": M.fontface,
			"generatedcontent": M.generatedcontent,
			"gradients": M.cssgradients,
			"hsla": M.hsla,
			"hyphens": [
				M["csshyphens"],
				M["softhyphens"],
				M["softhyphensfind"]
			],
			"invalid": M.cssinvalid,
			"lastchild": M.lastchild,
			"mask": M.cssmask,
			"mediaqueries": M.mediaqueries,
			"multiplebgs": M.multiplebgs,
			"nthchild": M.nthchild,
			"objectfit": M.objectfit,
			"opacity": M.opacity,
			"overflow-scrolling": M.overflowscrolling,
			"pointerevents": M.csspointerevents,
			"positionsticky": M.csspositionsticky,
			"pseudoanimations": M.csspseudoanimations,
			"pseudotransitions": M.csspseudotransitions,
			"reflections": M.cssreflections,
			"regions": M.regions,
			"remunit": M.cssremunit,
			"resize": M.cssresize,
			"rgba": M.rgba,
			"scrollbars": M.cssscrollbar,
			"shapes": M.shapes,
			"siblinggeneral": M.siblinggeneral,
			"subpixelfont": M.subpixelfont,
			"supports": M.supports,
			"target": M.target,
			"textalignlast": M.textalignlast,
			"textshadow": M.textshadow,
			"transforms": M.csstransforms,
			"transforms3d": M.csstransforms3d,
			"transformstylepreserve3d": M.preserve3d,
			"transitions": M.csstransitions,
			"userselect": M.userselect,
			"valid": M.cssvalid,
			"vhunit": M.cssvhunit,
			"vmaxunit": M.cssvmaxunit,
			"vminunit": M.cssvminunit,
			"vwunit": M.cssvwunit,
			"will-change": M.willchange,
			"wrapflow": M.wrapflow
		},
		"dom": {
			"classlist": M.classlist,
			"createElement-attrs": [
				M["createelementattrs"],
				M["createelement-attrs"]
			],
			"dataset": M.dataset,
			"documentfragment": M.documentfragment,
			"hidden": M.hidden,
			"microdata": M.microdata,
			"mutationObserver": M.mutationobserver
		},
		"elem": {
			"datalist": M.datalistelem,
			"details": M.details,
			"output": M.outputelem,
			"picture": M.picture,
			"progress-meter": [
				M["progressbar"],
				M["meter"]
			],
			"ruby": M.ruby,
			"template": M.template,
			"time": M.time,
			"track": [
				M["texttrackapi"],
				M["track"]
			],
			"unknown": M.unknownelements
		},
		"es5": {
			"array": M.es5array,
			"date": M.es5date,
			"function": M.es5function,
			"object": M.es5object,
			"specification": M.es5,
			"strictmode": M.strictmode,
			"string": M.es5string,
			"syntax": M.es5syntax,
			"undefined": M.es5undefined
		},
		"es6": {
			"array": M.es6array,
			"contains": M.contains,
			"generators": M.generators,
			"math": M.es6math,
			"number": M.es6number,
			"object": M.es6object,
			"promises": M.promises,
			"string": M.es6string
		},
		"event": {
			"deviceorientation-motion": [
				M["devicemotion"],
				M["deviceorientation"]
			],
			"oninput": M.oninput
		},
		"file": {
			"api": M.filereader,
			"filesystem": M.filesystem
		},
		"forms": {
			"capture": M.capture,
			"fileinput": M.fileinput,
			"fileinputdirectory": M.directory,
			"formattribute": M.formattribute,
			"inputnumber-l10n": M.localizednumber,
			"placeholder": M.placeholder,
			"requestautocomplete": M.requestautocomplete,
			"validation": M.formvalidation
		},
		"iframe": {
			"sandbox": M.sandbox,
			"seamless": M.seamless,
			"srcdoc": M.srcdoc
		},
		"img": {
			"apng": M.apng,
			"jpegxr": M.jpegxr,
			"sizes": M.sizes,
			"srcset": M.srcset,
			"webp-alpha": M.webpalpha,
			"webp-animation": M.webpanimation,
			"webp-lossless": [
				M["webplossless"],
				M["webp-lossless"]
			],
			"webp": M.webp
		},
		"input": {
			"formaction": M.inputformaction,
			"formenctype": M.inputformenctype,
			"formmethod": M.inputformmethod,
			"formtarget": M.inputformtarget
		},
		"network": {
			"beacon": M.beacon,
			"connection": M.lowbandwidth,
			"eventsource": M.eventsource,
			"xhr-responsetype-arraybuffer": M.xhrresponsetypearraybuffer,
			"xhr-responsetype-blob": M.xhrresponsetypeblob,
			"xhr-responsetype-document": M.xhrresponsetypedocument,
			"xhr-responsetype-json": M.xhrresponsetypejson,
			"xhr-responsetype-text": M.xhrresponsetypetext,
			"xhr-responsetype": M.xhrresponsetype,
			"xhr2": M.xhr2
		},
		"script": {
			"async": M.scriptasync,
			"defer": M.scriptdefer
		},
		"speech": {
			"speech-recognition": M.speechrecognition,
			"speech-synthesis": M.speechsynthesis
		},
		"storage": {
			"localstorage": M.localstorage,
			"sessionstorage": M.sessionstorage,
			"websqldatabase": M.websqldatabase
		},
		"style": {
			"scoped": M.stylescoped
		},
		"svg": {
			"asimg": M.svgasimg,
			"clippaths": M.svgclippaths,
			"filters": M.svgfilters,
			"foreignobject": M.svgforeignobject,
			"inline": M.inlinesvg,
			"smil": M.smil
		},
		"textarea": {
			"maxlength": M.textareamaxlength
		},
		"url": {
			"bloburls": M.bloburls,
			"data-uri": M.datauri,
			"parser": M.urlparser
		},
		"video": {
			"autoplay": M.videoautoplay,
			"loop": M.videoloop,
			"preload": M.videopreload
		},
		"webgl": {
			"extensions": M.webglextensions
		},
		"webrtc": {
			"datachannel": M.datachannel,
			"getusermedia": M.getusermedia,
			"peerconnection": M.peerconnection
		},
		"websockets": {
			"binary": M.websocketsbinary
		},
		"window": {
			"framed": M.framed,
			"matchmedia": M.matchmedia
		},
		"workers": {
			"blobworkers": M.blobworkers,
			"dataworkers": M.dataworkers,
			"sharedworkers": M.sharedworkers,
			"transferables": M.transferables,
			"webworkers": M.webworkers
		}
	};

	return M;

});