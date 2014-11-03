
// Formstone Core

var Formstone = window.Formstone = (function ($, window, document, undefined) {

	"use strict";

	// Namespace

	var Formstone = {
		Plugins: {}
	};

	// Globals

	Formstone.$window              = null;
	Formstone.$document            = null;
	Formstone.$body                = null;
	Formstone.trueMobile           = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test((window.navigator.userAgent||window.navigator.vendor||window.opera));
	Formstone.transitionSupport    = false;
	Formstone.matchMediaSupport    = window.matchMedia;

	// Classes

	Formstone.classes = {
		base                 : "{ns}",
		element              : "{ns}-element"
	};

	// Events

	Formstone.events = {
		namespace            : ".{ns}",
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
		mouseLeave           : "mouseleave.{ns}",
		mouseOver            : "mouseover.{ns}",
		mouseOut             : "mouseout.{ns}",
		mouseMove            : "mousemove.{ns}",
		touchStart           : "touchstart.{ns}",
		touchMove            : "touchmove.{ns}",
		touchEnd             : "touchend.{ns}"
	};

	// Localize Properties

	function localizeProperties(type, namespace, globalProps, customProps) {
		var _props = {},
			i;

		customProps = customProps || {};

		for (i in customProps) {
			if (customProps.hasOwnProperty(i)) {
				if (type === "classes") {
					// Custom classes
					_props[ customProps[i] ] = namespace + "-" + customProps[i];
				} else {
					// Custom events
					_props[ customProps[i] ] = customProps[i] + "." + namespace;
				}
			}
		}

		for (i in globalProps) {
			if (globalProps.hasOwnProperty(i)) {
				// From Globals
				_props[i] = globalProps[i].replace(/{ns}/g, namespace);
			}
		}

		return _props;
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

					settings.methods._init.call(window);
				}

				options = $.extend(true, {}, settings.defaults, options);

				return this.each(function() {
					var $element = $(this);

					if (!getData($element)) {
						var data = $.extend(true, {
							$element: $element,
							$el: $element
						}, options, $element.data(namespace + "-options"));

						settings.methods._construct.call($element, data);

						$element.addClass(settings.classes.element)
						        .data(namespace, data);
					}
				});
			}

			/**
			 * @method private
			 * @name killEvent
			 * @description Kill event
			 * @param e [event] "Event object"
			 */
			function killEvent(e) {
				if (typeof e !== "undefined") {
					e.preventDefault();
					e.stopPropagation();
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

			settings.classes   = localizeProperties("classes", namespace, Formstone.classes, settings.classes);
			settings.events    = localizeProperties("events", namespace, Formstone.events, settings.events);

			// Extend Internal Functions

			settings.functions = $.extend({
				getData         : getData,
				startTimer      : startTimer,
				clearTimer      : clearTimer,
				getClassName    : getClassName
			}, settings.functions);

			// Extend Public Methods

			settings.methods = $.extend({

				_init           : $.noop,
				_construct      : $.noop,
				_destruct       : $.noop,

				/**
				 * @method
				 * @name destroy
				 * @description Removes instance of plugin
				 * @example $(".target").tipper("destroy");
				 */
				destroy: function(data) {
					iterate.apply(this, [ settings.methods._destruct ].concat(Array.prototype.slice.call(arguments, 1)));

					this.removeData(namespace);
				}

			}, settings.methods);

			// Plugin Definition

			if (settings.widget) {
				$.fn[namespace] = function(method) {
					if (settings.methods[method] && method.indexOf("_") > 0) {
						return iterate.apply(this, [ settings.methods[method] ].concat(Array.prototype.slice.call(arguments, 1)));
					} else if (typeof method === 'object' || !method) {
						return init.apply(this, arguments);
					}
					return this;
				};
			}

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
				"transition"          : "transitionend",
				"MozTransition"       : "transitionend",
				"OTransition"         : "otransitionend",
				"WebkitTransition"    : "webkitTransitionEnd"
			},
			event = "transitionend",
			test = document.createElement('div');

		for (var i in transitions) {
			if (transitions.hasOwnProperty(i) && i in test.style) {
				event = transitions[i];
				Formstone.transitionSupport = true;
			}
		}

		return event + ".{ns}";
	}

	// Init Core

	Formstone.$window      = $(window);
	Formstone.$document    = $(document);

	Formstone.$document.ready(function() {
		Formstone.$body = $("body");
	});

	// Custom events

	Formstone.events.transitionEnd      = getTransitionEvent();
	Formstone.events.clickTouchStart    = Formstone.events.click + " " + Formstone.events.touchStart;

	return Formstone;

})(jQuery, window, document);