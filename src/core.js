
/**
 * Formstone Library core
 */

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
			blur                 : "blur.{ns}",
			change               : "change.{ns}",
			click                : "click.{ns}",
			dblClick             : "dblclick.{ns}",
			drag                 : "drag.{ns}",
			dragEnd              : "dragend.{ns}",
			dragEnter            : "dragenter.{ns}",
			dragLeave            : "dragleave.{ns}",
			dragOver             : "dragover.{ns}",
			dragStart            : "dragstart.{ns}",
			drop                 : "drop.{ns}",
			error                : "error.{ns}",
			focus                : "focus.{ns}",
			focusIn              : "focusin.{ns}",
			focusOut             : "focusout.{ns}",
			input                : "input.{ns}",
			keyDown              : "keydown.{ns}",
			keyPress             : "keypress.{ns}",
			keyUp                : "keyup.{ns}",
			load                 : "load.{ns}",
			mouseDown            : "mousedown.{ns}",
			mouseEnter           : "mouseenter.{ns}",
			mouseLeave           : "mouseleave.{ns}",
			mouseMove            : "mousemove.{ns}",
			mouseOut             : "mouseout.{ns}",
			mouseOver            : "mouseover.{ns}",
			mouseUp              : "mouseup.{ns}",
			resize               : "resize.{ns}",
			scroll               : "scroll.{ns}",
			select               : "select.{ns}",
			touchCancel          : "touchcancel.{ns}",
			touchEnd             : "touchend.{ns}",
			touchLeave           : "touchleave.{ns}",
			touchMove            : "touchmove.{ns}",
			touchStart           : "touchstart.{ns}"
		};

	/**
	 * Plugin factory
	 * @method Plugin
	 */

	Core.prototype.Plugin = function(namespace, settings) {
		Formstone.Plugins[namespace] = (function(namespace, settings) {

			/*!
			 * Initialize plugin instances by building data, setting the base classname and scoping a _construct call.
			 * @method initialize
			 * @param {object} options Plugin options
			 */

			function initialize(options) {

				// Extend Defaults

				options = $.extend(true, {}, settings.defaults, options);

				// Maintain Chain

				var $targets = this;

				for (var i = 0, count = $targets.length; i < count; i++) {
					var $element = $targets.eq(i);

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

				}

				return $targets;
			}

			/*!
			 * Removes plugin instance by scoping a _destruct call, and removing the base classname and data.
			 * @param {object} data Plugin data
			 */
			function destroy(data) {
				iterate.apply(this, [ settings.methods._destruct ].concat(Array.prototype.slice.call(arguments, 1)));

				this.removeClass(settings.classes.element)
					.removeData(namespace);
			}

			/*!
			 * Stops event action and bubble
			 * @param {event} e Event data
			 */
			function killEvent(e) {
				if (typeof e !== "undefined") {
					e.preventDefault();
					e.stopPropagation();
				}
			}

			/*!
			 * Creates class selector from text
			 * @param {object} $element Target jQuery object
			 * @return {object} Plugin data
			 */
			function getData($element) {
				return $element.data(namespace);
			}

			/*!
			 * Starts an internal timer
			 * @param {int} timer Timer ID
			 * @param {int} time Time until execution
			 * @param {int} callback Function to execute
			 */
			function startTimer(timer, time, callback) {
				clearTimer(timer);
				return setTimeout(callback, time);
			}

			/*!
			 * Clears an internal timer
			 * @param {int} timer Timer ID
			 */
			function clearTimer(timer) {
				if (timer) {
					clearTimeout(timer);
					timer = null;
				}
			}

			/*!
			 * Create class selector from text
			 * @param {String} text Text to convert
			 * @return {String} New class name
			 */
			function getClassName(text) {
				return "." + text;
			}

			/*
			 * &&method iterate
			 *
			 * &&overview Loop function calls over jQuery set
			 * &&param func [string] "Function to call"
			 * &&return [object] "jQuery set"
			 */
			function iterate(func) {
				var $targets = this;

				for (var i = 0, count = $targets.length; i < count; i++) {
					var $element = $targets.eq(i),
						data = getData($element);

					if (data) {
						func.apply($element, [ data ].concat(Array.prototype.slice.call(arguments, 1)));
					}
				}

				return $targets;
			}

			/*
			 * &&method delegateRoutine
			 *
			 * &&overview Delegate public methods
			 * &&overview Loop function calls over jQuery set
			 * &&param method [string || object] "Public method name; Options object if initializing"
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

			/*
			 * &&method setDefaults
			 *
			 * &&param method [string] "Public method name"
			 */
			function setDefaults(method) {
				if (method === "defaults") {
					/*
					 * &&method defaults
					 *
					 * &&overview Sets default options
					 * &&param opts [object] <{}> "Options object"
					 * &&example $.plugin("defaults", opts);
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

				destroy: destroy

			}, settings.methods);

			// Register Plugin

			if (settings.widget) {

				// Widget

				// Method Delegation: $(".selector").plugin("method", ...);
				$.fn[namespace]    = delegateRoutine;

				// Set Defaults:      $.plugin("defaults", { ... });
				$[namespace]       = setDefaults;
			} else {

				// Utility

				// Custom Delegation: $(".selector").plugin( ... );
				$[namespace]       = settings.methods._delegate || delegateRoutine;
			}

			// Run Setup

			$(function() {
				if (!settings.initialized) {
					settings.initialized    = true;
					settings.namespace      = namespace;

					settings.methods._setup.call(document);
				}
			});

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

	$(function() {
		Formstone.$body = $("body");
	});

	// Custom Events

	Events.transitionEnd      = getTransitionEvent();
	Events.clickTouchStart    = Events.click + " " + Events.touchStart;

	return Formstone;

})(jQuery, this, document);