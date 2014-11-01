
var Formstone = (function ($, window, document, undefined) {

	"use strict";

	// Namespace

	var Formstone = {
		Plugins: {}
	};

	window.Formstone = Formstone;

	// Globals

	Formstone.$window              = null;
	Formstone.$document            = null;
	Formstone.$body                = null;
	Formstone.trueMobile           = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test((window.navigator.userAgent||window.navigator.vendor||window.opera));
	Formstone.transitionSupport    = true;
	Formstone.matchMediaSupport    = window.matchMedia;

	// Classes

	Formstone.classes = {
		base                 : "{ns}",
		element              : "{ns}-element"
	};

	// Events

	Formstone.events = {
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
		transition           : null
	};

	// Localize Classes

	function localizeClasses(namespace, classes) {
		var _classes = {},
			i;

		classes = classes || {};

		for (i in classes) {
			if (classes.hasOwnProperty(i)) {
				// Custom Classes
				_classes[ classes[i] ] = namespace + "-" + classes[i];
			}
		}

		for (i in Formstone.classes) {
			if (Formstone.classes.hasOwnProperty(i)) {
				// From Globals
				_classes[i] = Formstone.classes[i].replace("{ns}", namespace);
			}
		}

		return _classes;
	}

	// Localize Events

	function localizeEvents(namespace, events) {
		var _events = {},
			i;

		events = events || {};

		for (i in events) {
			if (events.hasOwnProperty(i)) {
				// Custom Events
				_events[ events[i] ] = events[i] + "." + namespace;
			}
		}

		for (i in Formstone.events) {
			if (Formstone.events.hasOwnProperty(i)) {
				// From Globals
				_events[i] = Formstone.events[i].replace("{ns}", namespace);
			}
		}

		return _events;
	}

	// Plugin Bridge

	Formstone.Plugin = function(namespace, settings) {
		Formstone.Plugins[namespace] = (function(namespace, settings) {

			/**
			 * @method private
			 * @name init
			 * @description Initializes plugin
			 * @param opts [object] "Initialization options"
			 */
			function init(options) {
				if (!settings.initialized) {
					settings.initialized = true;

					settings.functions.init.call(window);
				}

				options = $.extend(true, {}, settings.defaults, options);

				return this.each(function() {
					var $element = $(this);

					if (!getData($element)) {
						var data = $.extend(true, {
							$element: $element,
							$el: $element
						}, options, $element.data(namespace + "-options"));

						settings.functions.construct.call($element, data);

						$element.addClass(settings.classes.element)
						        .data(namespace, data);
					}
				});
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
			 * @name iterate
			 * @description Loop function calls over jQuery object
			 * @param func [string] "Function to call"
			 * @return [object] "jQuery objects"
			 */
			function iterate(func) {
				// Wrap public methods
				return this.each(function() {
					var $element = $(this),
						data = getData($element);

					if (data) {
						func.apply($element, [ data ].concat(Array.prototype.slice.call(arguments, 1)));
					}
				});
			}

			// Locals

			settings.initialized = false;

			// Localize Classes & Events

			settings.classes   = localizeClasses(namespace, settings.classes);
			settings.events    = localizeEvents(namespace, settings.events);

			// Extend Internal Functions

			settings.functions = $.extend({
				init            : $.noop,
				construct       : $.noop,
				destruct        : $.noop,

				getData         : getData,
				startTimer      : startTimer,
				clearTimer      : clearTimer,
				getClassName    : getClassName
			}, settings.functions);

			// Extend Public Methods

			settings.methods = $.extend({

				/**
				 * @method
				 * @name destroy
				 * @description Removes instance of plugin
				 * @example $(".target").tipper("destroy");
				 */
				destroy: function(data) {
					settings.functions.destruct.call(this, data);

					this.removeData(namespace);
				}

			}, settings.methods);

			// Plugin Definition

			$.fn[namespace] = function(method) {
				if (settings.methods[method]) {
					return iterate.apply(this, [ settings.methods[method] ].concat(Array.prototype.slice.call(arguments, 1)));
				} else if (typeof method === 'object' || !method) {
					return init.apply(this, arguments);
				}
				return this;
			};

			$[namespace] = function(method) {
				if (method === "defaults") {
					/**
					 * @method
					 * @name defaults
					 * @description Sets default plugin options
					 * @param opts [object] <{}> "Options object"
					 * @example $.tipper("defaults", opts);
					 */
					settings.defaults = $.extend(true, settings.defaults, arguments[1] || {});
				}
			};

			return settings;
		})(namespace, settings);

		return Formstone.Plugins[namespace];
	};

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
			Formstone.transitionSupport = false;
		}

		return event + ".{ns}";
	}

	// Init Core

	Formstone.$window      = $(window);
	Formstone.$document    = $(document);
	Formstone.$body        = $("body");

	// Custom events

	Formstone.events.transition         = getTransitionEvent();
	Formstone.events.clickTouchStart    = Formstone.events.click + " " + Formstone.events.touchStart;

	return Formstone;

})(jQuery, window, document);