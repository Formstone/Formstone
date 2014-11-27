;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		data.enabled    = false;
		data.open       = false;

		this.addClass( [Classes.base, data.customClass].join(" ") )
			.wrapInner('<div class="' + Classes.container + '"></div>');

		data.$container    = this.find( Functions.getClassName(Classes.container) );
		data.$handle       = (data.handle) ? $(data.handle).addClass(Classes.handle) : $('<span class="' + Classes.handle + '"></span>').prependTo(this);

		if (data.label) {
			data.$handle.text(data.labels.closed);
		}

		// Touch Support
		data.$handle.touch({
			tap: true
		}).on(Events.tap, data, onClick);

		if (Formstone.support.matchMedia !== undefined) {
			data.mediaQuery = Formstone.$window[0].matchMedia("(max-width:" + (data.maxWidth === Infinity ? "100000px" : data.maxWidth) + ")");
			// Stay in context
			data.mediaQuery.addListener(function() {
				onRespond.call(data.$el, data);
			});
			onRespond.call(this, data);
		}
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		data.$handle.remove();
		data.$container.contents()
					   .unwrap();

		this.removeClass( [Classes.base, Classes.enabled, Classes.open, data.customClass].join(" ") )
			.off(Events.namespace);
	}

	/**
	 * @method
	 * @name open
	 * @description Opens instance.
	 * @example $(".target").navigation("open");
	 */

	function open(data) {
		if (data.enabled && !data.open) {
			if (data.label) {
				data.$handle.html(data.labels.open);
			}

			this.addClass(Classes.open)
				.trigger(Events.open);

			data.open = true;
		}
	}

	/**
	 * @method
	 * @name close
	 * @description Closes instance.
	 * @example $(".target").navigation("close");
	 */

	function close(data) {
		if (data.enabled && data.open) {
			if (data.label) {
				data.$handle.html(data.labels.closed);
			}

			this.removeClass(Classes.open)
				.trigger(Events.close);

			data.open = false;
		}
	}

	/**
	 * @method
	 * @name enable
	 * @description Enables instance.
	 * @example $(".target").navigation("enable");
	 */

	function enable(data) {
		if (!data.enabled) {
			this.addClass(Classes.enabled);
			data.enabled = true;
			data.open    = true; // trick close method

			close.call(this, data);
		}
	}

	/**
	 * @method
	 * @name disable
	 * @description Disables instance.
	 * @example $(".target").navigation("disable");
	 */

	function disable(data) {
		if (data.enabled) {
			this.removeClass( [Classes.enabled, Classes.open].join(" ") );
			data.enabled = false;
		}
	}

	/**
	 * @method private
	 * @name onClick
	 * @description Handles click nav click.
	 * @param e [object] "Event data"
	 */

	function onClick(e) {
		Functions.killEvent(e);

		var data = e.data;

		// Close Open Instances
		$( Functions.getClassName(Classes.base) ).not(data.$el)[Plugin.namespace]("close");

		if (data.open) {
			close.call(data.$el, data);
		} else {
			open.call(data.$el, data);
		}
	}

	/**
	 * @method private
	 * @name onRespond
	 * @description Handles media query match change.
	 */

	function onRespond(data) {
		if (data.mediaQuery.matches) {
			enable.call(data.$el, data);
		} else {
			disable.call(data.$el, data);
		}
	}

	/**
	 * @plugin
	 * @name Navigation
	 * @description A jQuery plugin for simple responsive navigation.
	 * @type widget
	 */

	var Plugin = Formstone.Plugin("navigation", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param handle [string] <null> "Handle element selector"
			 * @param label [boolean] <true> "Display handle width label"
			 * @param labels.closed [string] <'Navigation'> "Closed state text"
			 * @param labels.open [string] <'Close'> "Open state text"
			 * @param maxWidth [string] <'980px'> "Width at which to auto-disable plugin"
			 */

			defaults: {
				customClass    : "",
				handle         : null,
				label          : true,
				labels: {
					closed     : "Navigation",
					open       : "Close"
				},
				maxWidth       : "980px"
			},

			classes: [
				"handle",
				"container",
				"enabled",
				"open"
			],

			events: [
				"tap"
			],

			methods: {
				_construct    : construct,
				_destruct     : destruct,

				// Public Methods

				open          : open,
				close         : close,
				enable        : enable,
				disable       : disable
			}
		}),

		// Localize References

		Classes      = Plugin.classes,
		Events       = Plugin.events,
		Functions    = Plugin.functions,

		// Singleton

		Instance     = null;

		/**
		 * @events
		 * @event open "Navigation opened"
		 * @event close "Navigation closed"
		 */

		Events.open     = "open";
		Events.close    = "close";

})(jQuery, Formstone);

/**
 * @use

### Basic

Navigation will automatically turn a basic navigation into a mobile friendly system. Links can be styled independently:

```
$("nav").navigation();
```

```
<nav>
	<a href="#">Home</a>
	<a href="#">About</a>
	<a href="#">Contact</a>
</nav>
```

### Breakpoint

By default, Navigation will enable itself on screens smaller then 980 pixels wide. Specify a different width by setting the `maxWidth` option on initialization.

```
$("nav").navigation({
	maxWidth: "740px"
});
```

### Custom Handle

Specify a custom handle element by passing a selector to the <code>handle</code> option on initialization.

```
$("nav").navigation({
	handle: "#nav-handle"
});
```

```
<h4 id="nav-handle">Navigation</h4>
<nav>
	<a href="#">Home</a>
	<a href="#">About</a>
	<a href="#">Contact</a>
</nav>
```

#### IE Support

When supporting IE, a [HTML5 enabler](https://gist.github.com/benplum/8045366) and matchMedia polyfill ([IE 8](https://gist.github.com/benplum/8045336), [IE 9](https://gist.github.com/benplum/8045327)) are required.

 */