/* jshint sub: true */

var Modernizr = window.Modernizr;

var tests = {
	"standalone": {
		"applicationcache": Modernizr.applicationcache,
		"audio": Modernizr.audio,
		"battery": Modernizr.batteryapi,
		"blob": Modernizr.blobconstructor,
		"canvas": Modernizr.canvas,
		"canvastext": Modernizr.canvastext,
		"contenteditable": Modernizr.contenteditable,
		"contentsecuritypolicy": Modernizr.contentsecuritypolicy,
		"contextmenu": Modernizr.contextmenu,
		"cookies": Modernizr.cookies,
		"cors": Modernizr.cors,
		"custom-protocol-handler": Modernizr.customprotocolhandler,
		"dart": Modernizr.dart,
		"dataview-api": Modernizr.dataview,
		"draganddrop": Modernizr.draganddrop,
		"emoji": Modernizr.emoji,
		"exif-orientation": Modernizr.exiforientation,
		"flash": Modernizr.flash,
		"fullscreen-api": Modernizr.fullscreen,
		"gamepad": Modernizr.gamepads,
		"geolocation": Modernizr.geolocation,
		"hashchange": Modernizr.hashchange,
		"history": Modernizr.history,
		"ie8compat": Modernizr.ie8compat,
		"indexedDB": Modernizr.indexeddb,
		"input": Modernizr.input,
		"inputsearchevent": Modernizr.search,
		"inputtypes": Modernizr.inputtypes,
		"intl": Modernizr.Intl,
		"json": Modernizr.json,
		"lists-reversed": Modernizr.olreversed,
		"mathml": Modernizr.mathml,
		"notification": Modernizr.notification,
		"pagevisibility-api": Modernizr.pagevisibility,
		"performance": Modernizr.performance,
		"pointerevents": Modernizr.pointerevents,
		"pointerlock-api": Modernizr.pointerlock,
		"postmessage": Modernizr.postmessage,
		"quota-management-api": Modernizr.quotamanagement,
		"requestanimationframe": Modernizr.requestanimationframe,
		"serviceworker": Modernizr.serviceworker,
		"svg": Modernizr.svg,
		"touchevents": Modernizr.touchevents,
		"typed-arrays": Modernizr.typedarrays,
		"unicode-range": Modernizr.unicoderange,
		"unicode": Modernizr.unicode,
		"userdata": Modernizr.userdata,
		"vibration": Modernizr.vibrate,
		"video": Modernizr.video,
		"vml": Modernizr.vml,
		"web-intents": Modernizr.webintents,
		"webanimations": Modernizr.animation,
		"webgl": Modernizr.webgl,
		"websockets": Modernizr.websockets
	},
	"a": {
		"download": Modernizr.adownload
	},
	"audio": {
		"loop": Modernizr.audioloop,
		"preload": Modernizr.audiopreload,
		"webaudio": Modernizr.webaudio
	},
	"battery": {
		"lowbattery": Modernizr.lowbattery
	},
	"canvas": {
		"todataurl": [
			Modernizr["todataurljpeg"],
			Modernizr["todataurlpng"],
			Modernizr["todataurlwebp"]
		]
	},
	"crypto": {
		"getrandomvalues": Modernizr.getrandomvalues
	},
	"css": {
		"animations": Modernizr.cssanimations,
		"backgroundcliptext": Modernizr.backgroundcliptext,
		"backgroundposition-shorthand": Modernizr.bgpositionshorthand,
		"backgroundposition-xy": Modernizr.bgpositionxy,
		"backgroundrepeat": [
			Modernizr["bgrepeatspace"],
			Modernizr["bgrepeatround"]
		],
		"backgroundsize": Modernizr.backgroundsize,
		"backgroundsizecover": Modernizr.bgsizecover,
		"borderimage": Modernizr.borderimage,
		"borderradius": Modernizr.borderradius,
		"boxshadow": Modernizr.boxshadow,
		"boxsizing": Modernizr.boxsizing,
		"calc": Modernizr.csscalc,
		"checked": Modernizr.checked,
		"columns": Modernizr.csscolumns,
		"cubicbezierrange": Modernizr.cubicbezierrange,
		"displayrunin": Modernizr["display-runin"],
		"displaytable": Modernizr.displaytable,
		"ellipsis": Modernizr.ellipsis,
		"escape": Modernizr.cssescape,
		"filters": Modernizr.cssfilters,
		"flexbox": Modernizr.flexbox,
		"flexboxlegacy": Modernizr.flexboxlegacy,
		"flexboxtweener": Modernizr.flexboxtweener,
		"flexwrap": Modernizr.flexwrap,
		"fontface": Modernizr.fontface,
		"generatedcontent": Modernizr.generatedcontent,
		"gradients": Modernizr.cssgradients,
		"hsla": Modernizr.hsla,
		"hyphens": [
			Modernizr["csshyphens"],
			Modernizr["softhyphens"],
			Modernizr["softhyphensfind"]
		],
		"lastchild": Modernizr.lastchild,
		"mask": Modernizr.cssmask,
		"mediaqueries": Modernizr.mediaqueries,
		"multiplebgs": Modernizr.multiplebgs,
		"nthchild": Modernizr.nthchild,
		"objectfit": Modernizr.objectfit,
		"opacity": Modernizr.opacity,
		"overflow-scrolling": Modernizr.overflowscrolling,
		"pointerevents": Modernizr.csspointerevents,
		"positionsticky": Modernizr.csspositionsticky,
		"pseudoanimations": Modernizr.csspseudoanimations,
		"pseudotransitions": Modernizr.csspseudotransitions,
		"reflections": Modernizr.cssreflections,
		"regions": Modernizr.regions,
		"remunit": Modernizr.cssremunit,
		"resize": Modernizr.cssresize,
		"rgba": Modernizr.rgba,
		"scrollbars": Modernizr.cssscrollbar,
		"shapes": Modernizr.shapes,
		"siblinggeneral": Modernizr.siblinggeneral,
		"subpixelfont": Modernizr.subpixelfont,
		"supports": Modernizr.supports,
		"target": Modernizr.target,
		"textshadow": Modernizr.textshadow,
		"transforms": Modernizr.csstransforms,
		"transforms3d": Modernizr.csstransforms3d,
		"transformstylepreserve3d": Modernizr.preserve3d,
		"transitions": Modernizr.csstransitions,
		"userselect": Modernizr.userselect,
		"vhunit": Modernizr.cssvhunit,
		"vmaxunit": Modernizr.cssvmaxunit,
		"vminunit": Modernizr.cssvminunit,
		"vwunit": Modernizr.cssvwunit,
		"wrapflow": Modernizr.wrapflow
	},
	"dom": {
		"classlist": Modernizr.classlist,
		"createElement-attrs": [
			Modernizr["createelementattrs"],
			Modernizr["createelement-attrs"]
		],
		"dataset": Modernizr.dataset,
		"documentfragment": Modernizr.documentfragment,
		"microdata": Modernizr.microdata
	},
	"elem": {
		"datalist": Modernizr.datalistelem,
		"details": Modernizr.details,
		"output": Modernizr.outputelem,
		"progress-meter": [
			Modernizr["progressbar"],
			Modernizr["meter"]
		],
		"ruby": Modernizr.ruby,
		"template": Modernizr.template,
		"time": Modernizr.time,
		"track": [
			Modernizr["texttrackapi"],
			Modernizr["track"]
		]
	},
	"es5": {
		"array": Modernizr.es5array,
		"date": Modernizr.es5date,
		"function": Modernizr.es5function,
		"object": Modernizr.es5object,
		"strictmode": Modernizr.strictmode,
		"string": Modernizr.es5string
	},
	"es6": {
		"contains": Modernizr.contains,
		"promises": Modernizr.promises
	},
	"event": {
		"deviceorientation-motion": [
			Modernizr["devicemotion"],
			Modernizr["deviceorientation"]
		],
		"oninput": Modernizr.oninput
	},
	"file": {
		"api": Modernizr.filereader,
		"filesystem": Modernizr.filesystem
	},
	"forms": {
		"capture": Modernizr.capture,
		"fileinput": Modernizr.fileinput,
		"fileinputdirectory": Modernizr.directory,
		"formattribute": Modernizr.formattribute,
		"inputnumber-l10n": Modernizr.localizednumber,
		"placeholder": Modernizr.placeholder,
		"requestautocomplete": Modernizr.requestautocomplete,
		"speechinput": Modernizr.speechinput,
		"validation": Modernizr.formvalidation
	},
	"iframe": {
		"sandbox": Modernizr.sandbox,
		"seamless": Modernizr.seamless,
		"srcdoc": Modernizr.srcdoc
	},
	"img": {
		"apng": Modernizr.apng,
		"jpegxr": Modernizr.jpegxr,
		"srcset": Modernizr.srcset,
		"webp-alpha": Modernizr.webpalpha,
		"webp-animation": Modernizr.webpanimation,
		"webp-lossless": [
			Modernizr["webplossless"],
			Modernizr["webp-lossless"]
		],
		"webp": Modernizr.webp
	},
	"input": {
		"formaction": Modernizr.inputformaction,
		"formenctype": Modernizr.inputformenctype
	},
	"network": {
		"connection": Modernizr.lowbandwidth,
		"eventsource": Modernizr.eventsource,
		"xhr-responsetype-arraybuffer": Modernizr.xhrresponsetypearraybuffer,
		"xhr-responsetype-blob": Modernizr.xhrresponsetypeblob,
		"xhr-responsetype-document": Modernizr.xhrresponsetypedocument,
		"xhr-responsetype-json": Modernizr.xhrresponsetypejson,
		"xhr-responsetype-text": Modernizr.xhrresponsetypetext,
		"xhr-responsetype": Modernizr.xhrresponsetype,
		"xhr2": Modernizr.xhr2
	},
	"script": {
		"async": Modernizr.scriptasync,
		"defer": Modernizr.scriptdefer
	},
	"speech": {
		"speech-recognition": Modernizr.speechrecognition,
		"speech-synthesis": Modernizr.speechsynthesis
	},
	"storage": {
		"localstorage": Modernizr.localstorage,
		"sessionstorage": Modernizr.sessionstorage,
		"websqldatabase": Modernizr.websqldatabase
	},
	"style": {
		"scoped": Modernizr.stylescoped
	},
	"svg": {
		"asimg": Modernizr.svgasimg,
		"clippaths": Modernizr.svgclippaths,
		"filters": Modernizr.svgfilters,
		"inline": Modernizr.inlinesvg,
		"smil": Modernizr.smil
	},
	"textarea": {
		"maxlength": Modernizr.textareamaxlength
	},
	"url": {
		"data-uri": Modernizr.datauri
	},
	"video": {
		"autoplay": Modernizr.videoautoplay,
		"loop": Modernizr.videoloop,
		"preload": Modernizr.videopreload
	},
	"webgl": {
		"extensions": Modernizr.webglextensions
	},
	"webrtc": {
		"getusermedia": Modernizr.getusermedia,
		"peerconnection": Modernizr.peerconnection
	},
	"websockets": {
		"binary": Modernizr.websocketsbinary
	},
	"window": {
		"framed": Modernizr.framed
	},
	"workers": {
		"blobworkers": Modernizr.blobworkers,
		"dataworkers": Modernizr.dataworkers,
		"sharedworkers": Modernizr.sharedworkers,
		"webworkers": Modernizr.webworkers
	}
};