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

		var $h = this.find( Functions.getClassName(Classes.handle) );

		data.$handle = $h.length ? $h.detach() : $('<span class="' + Classes.handle + '"></span>');
		data.$handle.text((data.label) ? data.labels.closed : '');

		this.addClass( [Classes.base, data.customClass].join(" ") )
			.wrapInner('<div class="' + Classes.container + '"></div>')
			.prepend(data.$handle);

		data.$container    = this.find( Functions.getClassName(Classes.container) );
		data.eventDelegate = Functions.getClassName(Classes.handle);

		this.on(Events.touchStart, data.eventDelegate, data, onTouchStart)
			.on(Events.click, data.eventDelegate, data, onClick);

		if (Formstone.matchMediaSupport !== undefined) {
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
	 * @example $(".target").naver("open");
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
	 * @example $(".target").naver("close");
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
	 * @example $(".target").naver("enable");
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
	 * @example $(".target").naver("disable");
	 */

	function disable(data) {
		if (data.enabled) {
			this.removeClass( [Classes.enabled, Classes.open].join(" ") );
			data.enabled = false;
		}
	}

	/**
	 * @method private
	 * @name onTouchStart
	 * @description Handles touchstart to selected item.
	 * @param e [object] "Event data"
	 */

	function onTouchStart(e) {
		e.stopPropagation();

		var data    = e.data,
			oe      = e.originalEvent;

		data.touchStartEvent    = oe;
		data.touchStartX        = oe.touches[0].clientX;
		data.touchStartY        = oe.touches[0].clientY;
		data.hasClicked         = false;

		data.$el.on(Events.touchMove, data.eventDelegate, data, onTouchMove)
				.on(Events.touchEnd, data.eventDelegate, data, onTouchEnd);
	}

	/**
	 * @method private
	 * @name onTouchMove
	 * @description Handles touchmove to selected item.
	 * @param e [object] "Event data"
	 */

	function onTouchMove(e) {
		var data    = e.data,
			oe      = e.originalEvent;

		if (Math.abs(oe.touches[0].clientX - data.touchStartX) > 10 || Math.abs(oe.touches[0].clientY - data.touchStartY) > 10) {
			data.$el.off( [Events.touchMove, Events.touchEnd].join(" ") );
		}
	}

	/**
	 * @method private
	 * @name onTouchEnd
	 * @description Handles touchend to selected item.
	 * @param e [object] "Event data"
	 */

	function onTouchEnd(e) {
		var data = e.data;

		data.touchStartEvent.preventDefault();

		data.$el.off( [Events.touchMove, Events.touchEnd, Events.click].join(" ") );

		onClick(e);

		data.hasClicked = true;
		data.timer = Functions.startTimer(data.timer, 300, function() {
			data.hasClicked = false;
		});
	}

	/**
	 * @method private
	 * @name onClick
	 * @description Handles click nav click.
	 * @param e [object] "Event data"
	 */

	function onClick(e) {
		Functions.killEvent(e);

		var $target = $(e.currentTarget),
			data = e.data;

		if (!data.hasClicked) {
			// Close Open Instances
			$( Functions.getClassName(Classes.base) ).not(data.$el)[Plugin.namespace]("close");

			if (data.open) {
				close.call(data.$el, data);
			} else {
				open.call(data.$el, data);
			}
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
	 * @name Naver
	 * @description A jQuery plugin for simple responsive navigation.
	 * @type widget
	 */

	var Plugin = Formstone.Plugin("naver", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param label [boolean] <true> "Display handle width label"
			 * @param labels.closed [string] <'Navigation'> "Closed state text"
			 * @param labels.open [string] <'Close'> "Open state text"
			 * @param maxWidth [string] <'980px'> "Width at which to auto-disable plugin"
			 */

			defaults: {
				customClass    : "",
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

			/**
			 * @events
			 * @event open.naver "Navigation opened"
			 * @event close.naver "Navigation closed"
			 */

			events: [
				"open",
				"close"
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

})(jQuery, Formstone);

/**
 * @use

### Basic

Naver will automatically turn a basic navigation into a mobile friendly system. Links can be styled independently:

```
$("nav").naver();
```

```
<nav>
	<a href="#">Home</a>
	<a href="#">About</a>
	<a href="#">Contact</a>
</nav>
```

### Breakpoint

By default, Naver will enable itself on screens smaller then 980 pixels wide. Specify a different width by setting the `maxWidth` option on initialization.

```
$("nav").naver({
	maxWidth: "740px"
});
```

#### IE Support

When supporting IE, a [HTML5 enabler](https://gist.github.com/benplum/8045366) and matchMedia polyfill ([IE 8](https://gist.github.com/benplum/8045336), [IE 9](https://gist.github.com/benplum/8045327)) are required.

 */