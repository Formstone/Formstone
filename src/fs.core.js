;(function ($, window, document, undefined) {
	"use strict";

	// Namespace

	var $fs = {};

	window.Formstone = window.$fs = $fs;

	// Globals

	$fs.$window              = null;
	$fs.$document            = null;
	$fs.$body                = null;
	$fs.trueMobile           = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test((window.navigator.userAgent||window.navigator.vendor||window.opera));
	$fs.transitionSupport    = true;
	$fs.matchMediaSupport    = window.matchMedia;

	// Classes

	$fs.classes = {
		base                 : "{ns}",
		element              : "{ns}-element"
	};

	// Events
	$fs.events = {
		click                : "click.{ns}",
		dragEnter            : "dragenter.{ns}",
		dragOver             : "dragover.{ns}",
		dragLeave            : "dragleave.{ns}",
		drop                 : "drop.{ns}",
		fileError            : "fileError.{ns}",
		fileStart            : "fileStart.{ns}",
		fileProgress         : "fileProgress.{ns}",
		fileComplete         : "fileComplete.{ns}",
		beforeUnload         : "beforeunload.{ns}",
		complete             : "complete.{ns}",
		start                : "start.{ns}",
		change               : "change.{ns}",
		keyDown              : "keydown.{ns}",
		keyUp                : "keyup.{ns}",
		keyPress             : "keypress.{ns}",
		resize               : "resize.{ns}",
		load                 : "load.{ns}",
		matchMedia           : "matchmedia.{ns}",
		mouseEnter           : "mouseenter.{ns}",
		mouseMove            : "mousemove.{ns}",
		mouseLeave           : "mouseleave.{ns}",
		touchStart           : "touchstart.{ns}",
		touchMove            : "touchmove.{ns}",
		touchEnd             : "touchend.{ns}",
		// clickTouchStart      : $fs.events.click + " " + $fs.events.touchStart,
		transition           : null
	};

	// Init Core

	$.ready(function() {
		$fs.$window = $(window);
		$fs.$document = $(document);
		$fs.$body = $("body");

		$fs.events.transition = getTransitionEvent();
	});

	// Localize Classes

	function localizeClasses(namespace, classes) {
		var _classes = $.extend({}, $fs.classes, classes);

		for (var i in classes) {
			if (classes.hasOwnProperty(i)) {
				if ($fs.classes.hasOwnProperty(i)) {
					// From Globals
					_classes[i] = $fs.classes[ classes[i] ].replace("{ns}", namespace);
				} else {
					// Custom Classes
					_classes[i] = namespace + "-" + classes[i];
				}
			}
		}

		return _classes;
	}

	// Localize Events

	function localizeEvents(namespace, events) {
		var _events = $.extend({}, $fs.events, events);

		for (var i in events) {
			if (events.hasOwnProperty(i)) {
				if ($fs.events.hasOwnProperty(i)) {
					// From Globals
					_events[i] = $fs.events[ events[i] ].replace("{ns}", namespace);
				} else {
					// Custom Events
					_events[i] = events[i] + "." + namespace;
				}
			}
		}

		return _events;
	}

	// Widget Factory

	$fs.widget = function(namespace, settings) {

		// Locals

		var initialized = false,

			defaults = settings.defaults,

			// Localize Classes & Events

			classes   = localizeClasses(namespace, settings.classes),
			events    = localizeEvents(namespace, settings.events),

			// Extend Internal Functions

			functions = $.extend({

				init         : $.noop,
				construct    : $.noop,
				destruct     : $.noop

			}, settings.functions),

			// Extend Public Methods

			methods = $.extend({

				/**
				 * @method
				 * @name defaults
				 * @description Sets default plugin options
				 * @param opts [object] <{}> "Options object"
				 * @example $.tipper("defaults", opts);
				 */
				defaults: function(options) {
					defaults = $.extend(true, defaults, options || {});
					return this;
				},

				/**
				 * @method
				 * @name destroy
				 * @description Removes instance of plugin
				 * @example $(".target").tipper("destroy");
				 */
				destroy: function() {
					return this.each(function() {
						var $element = $(this),
							data = getData($element);

						if (data) {
							functions.destruct.apply($element, data);
							$element.removeData(namespace);
						}
					});
				}

			}, settings.methods);

		/**
		 * @method private
		 * @name init
		 * @description Initializes plugin
		 * @param opts [object] "Initialization options"
		 */
		function init(options) {
			if (!initialized) {
				initialized = true;

				functions.init.apply(window);
			}

			options = $.extend(true, {}, defaults, options);

			return this.each(function() {
				build($(this), options);
			});
		}

		/**
		 * @method private
		 * @name build
		 * @description Builds each instance
		 * @param $element [jQuery object] "Target jQuery object"
		 * @param options [object] <{}> "Options object"
		 */
		function build($element, options) {
			if (!getData($element)) {
				var data = $.extend(true, {}, options, $element.data(namespace + "-options"));

				functions.construct.apply($element, data);

				$element.addClass(classes.element)
				        .data(namespace, data);
			}
		}

		/**
		 * @method private
		 * @name getData
		 * @description Create class selector from text
		 * @param $element [object] "Target jQuery object"
		 * @return [object] "Plugin data"
		 */
		function getData($element) {
			return $element.data(namespace);
		}

		// Plugin Definition

		$.fn[namespace] = function(method) {
			if (methods[method]) {
				return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			} else if (typeof method === 'object' || !method) {
				return init.apply(this, arguments);
			}
			return this;
		};

		$[namespace] = function(method) {
			if (method === "defaults") {
				methods.defaults.apply(this, Array.prototype.slice.call(arguments, 1));
			}
		};

	};

	/**
	 * @method private
	 * @name startTimer
	 * @description Starts an internal timer
	 * @param timer [int] "Timer ID"
	 * @param time [int] "Time until execution"
	 * @param callback [int] "Function to execute"
	 */
	function startTimer(timer, time, callback) {
		clearTimer(timer);
		return setTimeout(callback, time);
	}

	/**
	 * @method private
	 * @name clearTimer
	 * @description Clears an internal timer
	 * @param timer [int] "Timer ID"
	 */
	function clearTimer(timer) {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
	}

	/**
	 * @method private
	 * @name getClassName
	 * @description Create class selector from text
	 * @param text [string] "Text to convert"
	 * @return [string] "New class name"
	 */
	function getClassName(text) {
		return "." + text;
	}

	/**
	 * @method private
	 * @name getTransitionEvent
	 * @description Retuns a properly prefixed transitionend event
	 * @return [string] "Properly prefixed event"
	 */
	function getTransitionEvent() {
		var transitions = {
				'transition'         : 'transitionend',
				'MozTransition'      : 'transitionend',
				'OTransition'        : 'otransitionend',
				'WebkitTransition'   : 'webkitTransitionEnd'
			},
			event = false,
			test = document.createElement('div');

		for (var i in transitions) {
			if (transitions.hasOwnProperty(i) && i in test.style) {
				event = transitions[i];
			}
		}

		// no transitions :(
		if (!event) {
			event = "transitionend";
			$fs.transitionSupport = false;
		}

		return event + ".{ns}";
	}

})(jQuery, window, document);



// Usage ?

/* global console */
/* global classes */
/* global events */

;(function ($, window, document, undefined) {
	var $fs = window.Formstone;

	$fs.widget("tipper", {
		classes: [
			"active",
			"visible"
		],
		// events: { },
		functions: {

			construct: function (data) {
				console.log("Construct", this, data);
				console.log(classes);
				console.log(events);
			},

			destruct: function (data) {
				console.log("Destruct", this, data);
			}

		},
		methods: {}
	});

})(jQuery, window, document);


$(function() {
	$("<a>").tipper();
});