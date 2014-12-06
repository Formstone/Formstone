;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		data.enabled    = true;
		data.open       = false;

		this.addClass( [RawClasses.base, data.customClass].join(" ") )
			.wrapInner('<div class="' + RawClasses.container + '"></div>');

		data.$container    = this.find(Classes.container);
		data.$handle       = (data.handle) ? $(data.handle).addClass(RawClasses.handle) : $('<span class="' + RawClasses.handle + '"></span>').prependTo(this);
		data.$toggles      = $().add(this).add(data.$handle);

		if (data.label) {
			data.$handle.text(data.labels.closed);
		}

		// Touch Support
		data.$handle.touch({
			tap: true
		}).on(Events.tap, data, onClick);

		disable.call(data.$el, data);

		// Media Query support
		$.mediaquery("bind", "(max-width:" + (data.maxWidth === Infinity ? "100000px" : data.maxWidth) + ")", {
			enter: function() {
				enable.call(data.$el, data);
			},
			leave: function() {
				disable.call(data.$el, data);
			}
		});
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		if (!data.handle) {
			data.$handle.remove();
		}

		data.$container.contents()
					   .unwrap();

		this.removeClass( [RawClasses.base, RawClasses.enabled, RawClasses.open, data.customClass].join(" ") )
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

			data.$toggles.addClass(RawClasses.open);

			this.trigger(Events.open);

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

			data.$toggles.removeClass(RawClasses.open);

			this.trigger(Events.close);

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
			this.addClass(RawClasses.enabled);

			if (data.handle) {
				data.$handle.addClass( [RawClasses.handle, RawClasses.enabled].join(" ") );
			}

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
			data.$toggles.removeClass( [RawClasses.enabled, RawClasses.open].join(" ") );

			if (data.handle) {
				data.$handle.removeClass( [RawClasses.handle, RawClasses.enabled, RawClasses.open].join(" ") );
			}

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
		$(Classes.base).not(data.$el)[Plugin.namespace]("close");

		if (data.open) {
			close.call(data.$el, data);
		} else {
			open.call(data.$el, data);
		}
	}

	/**
	 * @plugin
	 * @name Navigation
	 * @description A jQuery plugin for simple responsive navigation.
	 * @type widget
	 * @dependency core.js
	 * @dependency mediaquery.js
	 * @dependency touch.js
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

			/**
			 * @events
			 * @event open "Navigation opened"
			 * @event close "Navigation closed"
			 */

			events: {
				tap      : "tap",
				open     : "open",
				close    : "close"
			},

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

		Classes       = Plugin.classes,
		RawClasses    = Classes.raw,
		Events        = Plugin.events,
		Functions     = Plugin.functions,

		// Singleton

		Instance      = null;

})(jQuery, Formstone);