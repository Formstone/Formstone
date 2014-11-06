
// Formstone Core

var Formstone = this.Formstone = (function ($, window, document, undefined) {

	"use strict";

	// Namespace

	var Core = function() {
			this.Plugins = {};

			// Globals

			this.$window              = $(window);
			this.$document            = $(document);
			this.$body                = null;
			this.userAgent            = window.navigator.userAgent || window.navigator.vendor || window.opera;
			this.isFirefox            = /Firefox/i.test( this.userAgent );
			this.isChrome             = /Chrome/i.test(  this.userAgent );
			this.isSafari             = (/Safari/i.test( this.userAgent ) && !this.isChrome);
			this.isMobile             = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test( this.userAgent );
			this.isFirefoxMobile      = (this.isFirefox && this.isMobile);
			this.transitionSupport    = false;
			this.matchMediaSupport    = !!(window.matchMedia);
			this.historySupport       = !!(window.history && window.history.pushState && window.history.replaceState);
			this.rafSupport           = !!(window.requestAnimationFrame && window.cancelAnimationFrame);
		},

		Formstone = new Core(),

		// Classes

		Classes = {
			base                 : "{ns}",
			element              : "{ns}-element"
		},

		// Events

		Events = {
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

	// Plugin Factory

	Core.prototype.Plugin = function(namespace, settings) {
		Formstone.Plugins[namespace] = (function(namespace, settings) {

			/**
			 * @method private
			 * @name initialize
			 * @description Initializes plugin
			 * @param opts [object] "Plugin options"
			 */
			function initialize(options) {

				// Setup

				if (!settings.initialized) {
					settings.initialized    = true;
					settings.namespace      = namespace;

					settings.methods._setup.call(window);
				}

				// Extend Defaults

				options = $.extend(true, {}, settings.defaults, options);

				// Maintain Chain

				return this.each(function() {
					var $element = $(this);

					// Gaurd Against Exiting Instances

					if (!getData($element)) {

						// Extend w/ Local Options

						var data = $.extend(true, {
							$element: $element,
							$el: $element
						}, options, $element.data(namespace + "-options"));

						// Constructor

						settings.methods._construct.call($element, data);

						// Cache Instance

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
			 * @description Loop function calls over jQuery set
			 * @param func [string] "Function to call"
			 * @return [object] "jQuery set"
			 */
			function iterate(func) {
				return this.each(function() {
					var $element = $(this),
						data = getData($element);

					if (data) {
						func.apply($element, [ data ].concat(Array.prototype.slice.call(arguments, 1)));
					}
				});
			}

			/**
			 * @method private
			 * @name delegateRoutine
			 * @description Delegate public methods
			 * @description Loop function calls over jQuery set
			 * @param method [string || object] "Public method name; Options object if initializing"
			 */
			function delegateRoutine(method) {

				// Only allow "public" methods (no underscore prefix)

				if (settings.methods[method] && method.indexOf("_") !== 0) {

					// Wrap Public Methods

					return iterate.apply(this, [ settings.methods[method] ].concat(Array.prototype.slice.call(arguments, 1)));
				} else if (typeof method === 'object' || !method) {
					// Initialize

					return initialize.apply(this, arguments);
				}

				return this;
			}

			/**
			 * @method private
			 * @name setDefaults
			 * @param method [string] "Public method name"
			 */
			function setDefaults(method) {
				if (method === "defaults") {
					/**
					 * @method
					 * @name defaults
					 * @description Sets default options
					 * @param opts [object] <{}> "Options object"
					 * @example $.plugin("defaults", opts);
					 */
					settings.defaults = $.extend(true, settings.defaults, arguments[1] || {});
				}

				return this;
			}

			// Locals

			settings.initialized = false;

			// Namespace Classes & Events

			settings.classes   = namespaceProperties("classes", namespace, Classes, settings.classes);
			settings.events    = namespaceProperties("events",  namespace, Events,  settings.events);

			// Extend Functions

			settings.functions = $.extend({
				getData         : getData,
				startTimer      : startTimer,
				clearTimer      : clearTimer,
				getClassName    : getClassName,
				killEvent       : killEvent
			}, settings.functions);

			// Extend Methods

			settings.methods = $.extend({

				// Private Methods

				_setup          : $.noop,    // Widget First Run
				_construct      : $.noop,    // Widget Constructor
				_destruct       : $.noop,    // Widget Destructor
				_delegate       : false,     // Utility Delegation

				// Public Methods

				/**
				 * @method
				 * @name destroy
				 * @description Removes instance of plugin
				 * @example $(".target").plugin("destroy");
				 */
				destroy: function(data) {
					iterate.apply(this, [ settings.methods._destruct ].concat(Array.prototype.slice.call(arguments, 1)));

					this.removeClass(settings.classes.element)
						.removeData(namespace);
				}

			}, settings.methods);

			// Register Plugin

			if (settings.widget) {

				// Widget

				$.fn[namespace]    = delegateRoutine;   // Method Delegation:    $(".selector").plugin("method", ...);
				$[namespace]       = setDefaults;       // Set Defaults:         $.plugin("defaults", { ... });
			} else {

				// Utility

				$[namespace]       = settings.methods._delegate || delegateRoutine;    // Custom Delegation:    $(".selector").plugin( ... );
			}

			return settings;
		})(namespace, settings);

		return Formstone.Plugins[namespace];
	};

	// Namespace Properties

	function namespaceProperties(type, namespace, globalProps, customProps) {
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

	// Get Transition Event

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

	// Document Ready

	Formstone.$document.ready(function() {
		Formstone.$body = $("body");
	});

	// Custom Events

	Events.transitionEnd      = getTransitionEvent();
	Events.clickTouchStart    = Events.click + " " + Events.touchStart;

	return Formstone;

})(jQuery, this, document);