# Formstone

Library core.

* [Use](#use)
* [Methods](#methods)


## Use 
### Formstone Object

The Formstone core is a dependency of all javascript based components and will contain a few global values, as well as a simple plugin factory. The global Formstone object has access to the following keys:

```
$window					// Object, Reference to jQuery wrapped window
$document				// Object, Reference to jQuery wrapped document
$body					// Object, Reference to jQuery wrapped body tag

Plugins					// Object containing all registered plugins

historySupport			// Boolean, history api support, including push and pop state
matchMediaSupport		// Boolean, match media api support
rafSupport				// Boolean, request animation frame api support
transitionSupport		// Boolean, CSS3 transition support

userAgent				// Raw user agent string
isChrome				// Boolean, browser is Chrome
isFirefox				// Boolean, browser is FireFox
isSafari				// Boolean, browser is Safari
isMobile				// Boolean, browser is Mobile
isFirefoxMobile			// Boolean, browser is FireFox Mobile
```

### Plugin Factory

The `Formstone.Plugin` factory function is used to define a plugin. The factory will use the provided namespace to register the plugin with jQuery. The plugin is then available like any other:

```
$(“.selector”).plugin({
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
$(".selector").namespace("reset", 500);
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
			methods: {
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
$(".selector").namespace("reset", 500);
```

#### Plugin Object

Defining a plugin using the factory will return an object containing the follow keys:

```
namespace				// String, plugin namespace
initialized				// Boolean, initialized state
defaults				// Object, default options extended with initialization and local options
functions				// Object, private utility functions
methods					// Object, public methods
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
click					// Default, "click.namespace",
clickTouchStart			// Default, "click.namespace touchstart.namespace",
dragEnter				// Default, "dragenter.namespace",
dragOver				// Default, "dragover.namespace",
dragLeave				// Default, "dragleave.namespace",
drop					// Default, "drop.namespace",
fileError				// Default, "fileError.namespace",
fileStart				// Default, "fileStart.namespace",
fileProgress			// Default, "fileProgress.namespace",
fileComplete			// Default, "fileComplete.namespace",
beforeUnload			// Default, "beforeunload.namespace",
complete				// Default, "complete.namespace",
start					// Default, "start.namespace",
change					// Default, "change.namespace",
keyDown					// Default, "keydown.namespace",
keyUp					// Default, "keyup.namespace",
keyPress				// Default, "keypress.namespace",
resize					// Default, "resize.namespace",
load					// Default, "load.namespace",
matchMedia				// Default, "matchmedia.namespace",
mouseEnter				// Default, "mouseenter.namespace",
mouseLeave				// Default, "mouseleave.namespace",
mouseOver				// Default, "mouseover.namespace",
mouseOut				// Default, "mouseout.namespace",
mouseMove				// Default, "mousemove.namespace",
touchStart				// Default, "touchstart.namespace",
touchMove				// Default, "touchmove.namespace",
touchEnd				// Default, "touchend.namespace"
transitionEnd			// Default, "transitionEnd.namespace"

enable					// Custom,  "enable.namespace"
disable					// Custom,  "disable.namespace"
```

## Methods

### Plugin

Builds a plugin and registers it with jQuery.

```
Formstone.Plugin("namespace", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| namespace | string |  | Plugin namespace |
| settings | object |  | Plugin settings |

