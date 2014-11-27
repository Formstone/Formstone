
/**
 * @plugin
 * @name Formstone
 * @description Library core.
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
			this.isFirefox            = /Firefox/i.test(this.userAgent);
			this.isChrome             = /Chrome/i.test(this.userAgent);
			this.isSafari             = (/Safari/i.test(this.userAgent) && !this.isChrome);
			this.isMobile             = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test( this.userAgent );
			this.isFirefoxMobile      = (this.isFirefox && this.isMobile);

			this.support = {
				file          : !!(window.File && window.FileList && window.FileReader),
				history       : !!(window.history && window.history.pushState && window.history.replaceState),
				matchMedia    : !!(window.matchMedia || window.msMatchMedia),
				raf           : !!(window.requestAnimationFrame && window.cancelAnimationFrame),
				touch         : !!(("ontouchstart" in window) || window.DocumentTouch && document instanceof window.DocumentTouch),
				transition    : false
			};
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
	 * @method
	 * @name Plugin
	 * @description Builds a plugin and registers it with jQuery.
	 * @param namespace [string] "Plugin namespace"
	 * @param settings [object] "Plugin settings"
	 * @return [object] "Plugin properties. Includes `defaults`, `classes`, `events`, `functions` and `methods` keys"
	 * @example Formstone.Plugin("namespace", { ... });
	 */

	Core.prototype.Plugin = function(namespace, settings) {
		Formstone.Plugins[namespace] = (function(namespace, settings) {

			var namespaceDash = "fs-" + namespace,
				namespaceDot  = "fs." + namespace;

			/**
			 * @method private
			 * @name initialize
			 * @description Creates plugin instance by adding base classname, creating data and scoping a _construct call.
			 * @param options [object] <{}> "Instance options"
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
							$el : $element
						}, options, $element.data(namespace + "-options"));

						// Constructor

						settings.methods._construct.call($element, data);

						// Cache Instance

						$element.addClass(settings.classes.element)
						        .data(namespaceDash, data);
					}

				}

				return $targets;
			}

			/**
			 * @method private
			 * @name destroy
			 * @description Removes plugin instance by scoping a _destruct call, and removing the base classname and data.
			 * @param data [object] <{}> "Instance data"
			 */

			/**
			 * @method widget
			 * @name destroy
			 * @description Removes plugin instance.
			 * @example $(".target").{ns}("destroy");
			 */

			function destroy(data) {
				iterate.apply(this, [ settings.methods._destruct ].concat(Array.prototype.slice.call(arguments, 1)));

				this.removeClass(settings.classes.element)
					.removeData(namespaceDash);
			}

			/**
			 * @method private
			 * @name killEvent
			 * @description Stops event action and bubble.
			 * @param e [object] "Event data"
			 */

			function killEvent(e) {
				try {
					e.preventDefault();
					e.stopPropagation();
				} catch(error) {
					//
				}
			}

			/**
			 * @method private
			 * @name getData
			 * @description Creates class selector from text.
			 * @param $element [jQuery] "Target jQuery object"
			 * @return [object] "Instance data"
			 */

			function getData($element) {
				return $element.data(namespaceDash);
			}

			/**
			 * @method private
			 * @name startTimer
			 * @description Starts an internal timer.
			 * @param timer [int] "Timer ID"
			 * @param time [int] "Time until execution"
			 * @param callback [function] "Function to execute"
			 * @return [int] "Timer ID"
			 */

			function startTimer(timer, time, callback) {
				clearTimer(timer);
				return setTimeout(callback, time);
			}

			/**
			 * @method private
			 * @name clearTimer
			 * @description Clears an internal timer.
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
			 * @description Creates class selector from text.
			 * @param text [string] "Text to convert"
			 * @return [string] "Class selector"
			 */

			function getClassName(text) {
				return "." + text;
			}

			/**
			 * @method private
			 * @name iterate
			 * @description Loops scoped function calls over jQuery set with instance data as first parameter.
			 * @param func [function] "Function to execute"
			 * @return [jQuery] "jQuery set"
			 */

			function iterate(func) {
				var $targets = this;

				for (var i = 0, count = $targets.length; i < count; i++) {
					var $element = $targets.eq(i),
						data = getData($element) || {};

					if (data) {
						func.apply($element, [ data ].concat(Array.prototype.slice.call(arguments, 1)));
					}
				}

				return $targets;
			}

			/**
			 * @method private
			 * @name delegateWidget
			 * @description Delegates public methods.
			 * @param method [string] "Method to execute"
			 * @return [jQuery] "jQuery set"
			 */

			function delegateWidget(method) {

				// If jQuery object

				if (this instanceof $) {

					var _method = settings.methods[method];

					// Public method OR false

					if ($.type(method) === "object" || !method) {

						// Initialize

						return initialize.apply(this, arguments);
					} else if (_method && method.indexOf("_") !== 0) {

						// Wrap Public Methods

						return iterate.apply(this, [ _method ].concat(Array.prototype.slice.call(arguments, 1)));
					}

					return this;
				}
			}

			/**
			 * @method private
			 * @name delegateUtility
			 * @description Delegates utility methods.
			 * @param method [string] "Method to execute"
			 */

			function delegateUtility(method) {

				// public utility OR utility init OR false

				var _method = settings.utilities[method] || settings.utilities._initialize || false;

				if (_method) {

					// Wrap Utility Methods

					_method.apply(window, Array.prototype.slice.call(arguments, ($.type(method) === "object" ? 0 : 1) ));
				}
			}

			/**
			 * @method
			 * @name defaults
			 * @description Extends plugin default settings; effects instances created hereafter.
			 * @param options [object] <{}> "New plugin defaults"
			 * @example $.{ns}("defaults", { ... });
			 */

			function defaults(options) {
				settings.defaults = $.extend(true, settings.defaults, options || {});
			}

			// Locals

			settings.initialized = false;

			// Namespace Classes & Events

			settings.classes   = namespaceProperties("classes", namespaceDash, Classes, settings.classes);
			settings.events    = namespaceProperties("events",  namespaceDash, Events,  settings.events);

			// Extend Functions

			settings.functions = $.extend({
				getData         : getData,
				startTimer      : startTimer,
				clearTimer      : clearTimer,
				getClassName    : getClassName,
				killEvent       : killEvent,
				iterate         : iterate
			}, settings.functions);

			// Extend Methods

			settings.methods = $.extend(true, {

				// Private Methods

				_setup         : $.noop,    // First Run
				_construct     : $.noop,    // Constructor
				_destruct      : $.noop,    // Destructor

				// Public Methods

				destroy        : destroy

			}, settings.methods);

			// Extend Utilities

			settings.utilities = $.extend(true, {

				// Private Utilities

				_initialize    : false,    // First Run
				_delegate      : false,    // Custom Delegation

				// Public Utilities

				defaults       : defaults

			}, settings.utilities);

			// Register Plugin

			// Widget

			if (settings.widget) {

				// Widget Delegation: $(".target").plugin("method", ...);
				$.fn[namespace] = delegateWidget;
			}

			// Utility

				// Utility Delegation: $.plugin("method", ... );
				$[namespace] = settings.utilities._delegate || delegateUtility;

			// Run Setup

			settings.namespace = namespace;

			$(function() {
				if (!settings.initialized) {
					settings.methods._setup.call(document);

					settings.initialized = true;
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
					_props[ i ] = customProps[i] + "." + namespace;
				}
			}
		}

		for (i in globalProps) {
			if (globalProps.hasOwnProperty(i)) {
				// From Globals
				_props[ i ] = globalProps[i].replace(/{ns}/g, namespace);
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
			test = document.createElement("div");

		for (var i in transitions) {
			if (transitions.hasOwnProperty(i) && i in test.style) {
				event = transitions[i];
				Formstone.support.transition = true;
			}
		}

		return event;
	}

	// Document Ready

	$(function() {
		Formstone.$body = $("body");
	});

	// Custom Events

	Events.transitionEnd       = getTransitionEvent() + ".{ns}";
	Events.clickTouchStart     = Events.click + " " + Events.touchStart;

	return Formstone;

})(jQuery, this, document);


/**
 * @use

### Formstone Object

The Formstone core is a dependency of all javascript based components and will contain a few global values, as well as a simple plugin factory. The global Formstone object has access to the following keys:

```
$window					// object, Reference to jQuery wrapped window
$document				// object, Reference to jQuery wrapped document
$body					// object, Reference to jQuery wrapped body tag

Plugins					// object, Contains all registered plugins

support.file			// boolean, File API support
support.history			// boolean, History API support, including push and pop state
support.matchMedia		// boolean, Match Media API support
support.raf				// boolean, Request Animation Frame API support'
support.touch			// boolean, Touch event support
support.transition		// boolean, CSS3 Transition support

userAgent				// string, Raw user string
isChrome				// boolean, Browser is Chrome
isFirefox				// boolean, Browser is FireFox
isSafari				// boolean, Browser is Safari
isMobile				// boolean, Browser is Mobile
isFirefoxMobile			// boolean, Browser is FireFox Mobile
```

User agent sniffing isn't always reliable or considered a best practice - it should be used sparingly, if at all.

### Plugin Factory

The `Formstone.Plugin` factory function is used to define a plugin. The factory will use the provided namespace to register the plugin with jQuery. The plugin is then available like any other:

```
$(“.target).plugin({
	option: value
});
```

### Plugin Types

There are two types of plugins that can be defined: Widget or Utility.

#### Widget

Widget plugins are implicitly tied to an element to enhance or change the interface. Examples of Widgets include input enhancements like Picker or Selecter. A simple Widget might look like:

```
;(function ($, Formstone, undefined) {

	function setUp() {
		// this = document
	}

	function construct(data) {
		// this = jQuery wrapped target element
		// data = instance data
	}

	function destruct(data) {
		// this = jQuery wrapped target element
		// data = instance data
	}

	function reset(data) {
		// this = jQuery wrapped target element
		// data = instance data
	}

	// Register Plugin

	var Plugin = Formstone.Plugin("namespace", {
			widget: true,
			defaults: {
				option:    value
			},
			classes: [
				"visible"
			],
			methods: {
				_setup         setup,
				_construct:    construct,
				_destruct:     destruct,
				reset:         reset
			},
			utilities: {
				close:         close
			}
		}),

		// Localize References

		Classes      = Plugin.classes,
		Events       = Plugin.events,
		Functions    = Plugin.functions;

})(jQuery, Formstone);
```

As in the example above, Widgets can override three internal methods by pointing a key to the corresponding local function:

```
_setup					// Run once when document is ready, scoped to document
_construct				// Run at initialization of each instance, scoped to specific instance
_destruct				// Run at destruction of each instance, scoped to specific instance
```

When an instance is created or destroyed, the factory will automatically add or remove the instance's localized plugin data. This data is available as the first argument in any public method call, or by using the namespace to query for the data:

```
this.data("namespace");
```

Custom public methods can also be defined, provided their keys are not prefixed with an underscore (`_`). The underscore signifies a core method and should be avoided when defining public methods. The factory will scope any public method call to the target instance, as well as provide it's plugin data as the first argument followed by any addition arguments:

```
$(".target").namespace("reset", 500);
```

A Widget can also operate as a singleton, like Boxer or Tipper. In this case, events are bound to the instance's target element, while DOM manipulations are tied to a single internal instance. This helps prevent unwanted duplication when the interface pattern calls for a single instance.

#### Utility

Utility plugins may interact with DOM nodes but are not necessarily tied to any specific elements. An example of a Utility is the media query event abstraction provided by Rubberband. A simple Utility plugin might look like:

```
;(function ($, Formstone, undefined) {

	function delegate() {
		// Manually handle public methods
	}

	// Register Plugin

	var Plugin = Formstone.Plugin("namespace", {
			utilties: {
				_delegate:     delegate
			}
		}),

		// Internal Defaults

		Defaults = {
			option:    value
		},

		// Localize References

		Document = Formstone.$document[0];

})(jQuery, Formstone);
```

A utility can override the default method delegation by pointing the `_delegate` key to a custom function. The delegate function will need to manually handle any arguments passed. Otherwise, Utilities will use the same public method delegation system as Widgets.

```
$.namespace("reset", 500);
```

#### Plugin Object

Defining a plugin using the factory will return an object containing the follow keys:

```
namespace				// String, plugin namespace
initialized				// Boolean, initialized state
defaults				// Object, default options extended with initialization and local options
functions				// Object, private utility functions
methods					// Object, public methods
utilities				// Object, public utilities
classes					// Object, namespaced classes strings
events					// Object, namespaced event strings
```

These values can then be localized in the scope of the plugin for optimal minimization:

```
var Plugin = Formstone.Plugin(“namespace”, {
		...
	}),
	Defaults     = Plugin.defaults,
	Functions    = Plugin.functions,
	Methods      = Plugin.methods,
	Utilities    = Plugin.utilities,
	Classes      = Plugin.classes,
	Events       = Plugin.events;
```

This may seem strangely redundant at first, however multi-dimensional objects do not minimize efficiently. This is also one reason standard prototypal inheritance is not used when building a plugin, however this is not to say a specific plugin could not contain locally scoped prototypes. Plugin design is always up to the developer, the factory simply provides a consistent, DRY approach to the basic plugin pattern.

#### Classes

The `classes` object returned when defining a plugin will contain properly namespaced strings of both default and custom classes. Custom classes will become object keys, while the namespaced class will become the value:

```
var Plugin = Formstone.Plugin(“namespace”, {
	...
	classes: [
		"visible",
		"content"
	],
	...
});
```

```
base					// Default, "namespace"
element					// Default, "namespace-element"

visible					// Custom,  "namespace-visible"
content					// Custom,  "namespace-content"
```

#### Events

The `events` object returned when defining a plugin will contain properly namespaced strings of both default and custom events. Custom events will become object keys, while the namespaced event will become the value:

```
var Plugin = Formstone.Plugin(“namespace”, {
	...
	events: [
		"enable",
		"disable"
	],
	...
});
```

```
namespace				// Default, ".namespace",
blur					// Default, "blur.namespace",
change					// Default, "change.namespace",
click					// Default, "click.namespace",
clickTouchStart			// Default, "click.namespace touchstart.namespace",
dblClick				// Default, "dblClick.namespace",
drag					// Default, "drag.namespace",
dragEnd					// Default, "dragend.namespace",
dragEnter				// Default, "dragenter.namespace",
dragLeave				// Default, "dragleave.namespace",
dragOver				// Default, "dragover.namespace",
dragStart				// Default, "dragstart.namespace",
drop					// Default, "drop.namespace",
error					// Default, "error.namespace",
focus					// Default, "focus.namespace",
focusIn					// Default, "focusin.namespace",
focusOut				// Default, "focusout.namespace",
input					// Default, "input.namespace",
keyDown					// Default, "keydown.namespace",
keyPress				// Default, "keypress.namespace",
keyUp					// Default, "keyup.namespace",
load					// Default, "load.namespace",
mouseDown				// Default, "mousedown.namespace",
mouseEnter				// Default, "mouseenter.namespace",
mouseLeave				// Default, "mouseleave.namespace",
mouseMove				// Default, "mousemove.namespace",
mouseOut				// Default, "mouseout.namespace",
mouseOver				// Default, "mouseover.namespace",
mouseUp					// Default, "mouseup.namespace",
resize					// Default, "resize.namespace",
scroll					// Default, "scroll.namespace",
select					// Default, "select.namespace",
touchCancel				// Default, "touchcancel.namespace",
touchEnd				// Default, "touchend.namespace"
touchLeave				// Default, "touchleave.namespace",
touchMove				// Default, "touchmove.namespace",
touchStart				// Default, "touchstart.namespace",
transitionEnd			// Default, "transitionEnd.namespace"

enable					// Custom,  "enable.namespace"
disable					// Custom,  "disable.namespace"
```

 */