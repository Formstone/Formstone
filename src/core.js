
// Formstone Core

var Formstone = window.Formstone = (function ($, window, document, undefined) {

	"use strict";

	// Namespace

	var Formstone = {
		Plugins: {}
	};

	// Classes

	var Classes= {
		base                 : "{ns}",
		element              : "{ns}-element"
	};

	// Events

	var Events = {
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

	// Globals

	Formstone.$window              = $(window);
	Formstone.$document            = $(document);
	Formstone.$body                = null;
	Formstone.userAgent            = window.navigator.userAgent || window.navigator.vendor || window.opera;
	Formstone.isFirefox            = /Firefox/i.test( Formstone.userAgent );
	Formstone.isChrome             = /Chrome/i.test(  Formstone.userAgent );
	Formstone.isSafari             = (/Safari/i.test( Formstone.userAgent ) && !Formstone.isChrome);
	Formstone.isMobile             = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test( Formstone.userAgent );
	Formstone.isFirefoxMobile      = (Formstone.isFirefox && Formstone.isMobile);
	Formstone.transitionSupport    = false;
	Formstone.matchMediaSupport    = !!(window.matchMedia);
	Formstone.historySupport       = !!(window.history && window.history.pushState && window.history.replaceState);

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

				// Setup

				if (!settings.initialized) {
					settings.initialized = true;

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
			 * @description Loop function calls over jQuery object
			 * @param func [string] "Function to call"
			 * @return [object] "jQuery objects"
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
			 * @name publicRouter
			 */
			function publicRouter(method) {
				if (settings.methods[method] && method.indexOf("_") > 0) {

					// Wrap Public Methods

					return iterate.apply(this, [ settings.methods[method] ].concat(Array.prototype.slice.call(arguments, 1)));
				} else if (typeof method === 'object' || !method) {

					// Initialize

					return init.apply(this, arguments);
				}

				return this;
			}

			/**
			 * @method private
			 * @name publicDefaults
			 */
			function publicDefaults(method) {
				if (method === "defaults") {
					/**
					 * @method
					 * @name defaults
					 * @description Sets default plugin options
					 * @param opts [object] <{}> "Options object"
					 * @example $.plugins("defaults", opts);
					 */
					settings.defaults = $.extend(true, settings.defaults, arguments[1] || {});
				}

				return this;
			}

			// Locals

			settings.initialized = false;

			// Namespace Classes & Events

			settings.classes   = namespaceProperties("classes", namespace, Classes, settings.classes);
			settings.events    = namespaceProperties("events", namespace, Events, settings.events);

			// Extend Internal Functions

			settings.functions = $.extend({
				getData         : getData,
				startTimer      : startTimer,
				clearTimer      : clearTimer,
				getClassName    : getClassName
			}, settings.functions);

			// Extend Public Methods

			settings.methods = $.extend({

				_setup          : $.noop,
				_construct      : $.noop,
				_destruct       : $.noop,
				_route          : false,

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



			if (settings.widget) {

				// Widget Definition

				$.fn[namespace]    = publicRouter;
				$[namespace]       = publicDefaults;
			} else {

				// Utility Definition

				$[namespace] = settings.methods._route || publicRouter;
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

	// Transition Event

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

	// RAF Polyfill

	function checkRAFSupport() {
		var time = 0,
			vendors = [
				'webkit',
				'moz'
			];

		for (var i = 0; i < vendors.length && !window.requestAnimationFrame; i++) {
			window.requestAnimationFrame = window[ vendors[i] + 'RequestAnimationFrame' ];
			window.cancelAnimationFrame  = window[ vendors[i] + 'CancelAnimationFrame' ] || window[ vendors[i] + 'CancelRequestAnimationFrame' ];
		}

		if (typeof window.requestAnimationFrame === "undefined") {
			window.requestAnimationFrame = function(callback, element) {
				var now = new Date().getTime(),
					diff = Math.max(0, 16 - (now - time)),
					id = setTimeout(function() {
						callback(now + diff);
					}, diff);

				time = now + diff;

				return id;
			};

			window.cancelAnimationFrame = function(id) {
				clearTimeout(id);
			};
		}
	}

	checkRAFSupport();

	// Document Ready

	Formstone.$document.ready(function() {
		Formstone.$body = $("body");
	});

	// Custom Events

	Events.transitionEnd      = getTransitionEvent();
	Events.clickTouchStart    = Events.click + " " + Events.touchStart;

	return Formstone;

})(jQuery, window, document);