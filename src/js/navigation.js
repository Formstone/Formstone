;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		data.guid             = "__" + (GUID++);
		data.eventGuid        = Events.namespace + data.guid;
		data.containerGuid    = RawClasses.container + data.guid;

		data.$container = $('<div class="' + data.containerGuid + '"></div>');

		this.addClass( [RawClasses.base, data.customClass].join(" ") )
			.wrapInner(data.$container);

		data.$handle = (data.handle) ? $(data.handle).addClass(RawClasses.handle) : $('<span class="' + RawClasses.handle + '"></span>').prependTo(this);

		if (data.label) {
			data.$handle.text(data.labels.closed);
		}

		data.$handle
			// .attr("data-toggle-group", RawClasses.base)
			.attr("data-toggle-target", "." + data.containerGuid).toggle({
				classes: {
					target  : Classes.container,
					enabled : Classes.enabled,
					active  : Classes.open,
					raw: {
						target  : RawClasses.container,
						enabled : RawClasses.enabled,
						active  : RawClasses.open
					}
				}
			}).on("activate.toggle" + data.eventGuid, data, onOpen)
			  .on("deactivate.toggle" + data.eventGuid, data, onClose);

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
		data.$handle.off("data.eventGuid")
					.toggle("destroy");

		if (!data.handle) {
			data.$handle.remove();
		}

		data.$container.contents()
					   .unwrap();

		this.removeClass( [RawClasses.base, data.customClass].join(" ") )
			.off(Events.namespace);
	}

	/**
	 * @method
	 * @name open
	 * @description Opens instance.
	 * @example $(".target").navigation("open");
	 */

	function open(data) {
		if (data.label) {
			data.$handle.html(data.labels.open);
		}

		data.$handle.toggle("activate");
	}

	/**
	 * @method
	 * @name close
	 * @description Closes instance.
	 * @example $(".target").navigation("close");
	 */

	function close(data) {
		if (data.label) {
			data.$handle.html(data.labels.closed);
		}

		data.$handle.toggle("deactivate");
	}

	/**
	 * @method
	 * @name enable
	 * @description Enables instance.
	 * @example $(".target").navigation("enable");
	 */

	function enable(data) {
		data.$handle.toggle("enable");
	}

	/**
	 * @method
	 * @name disable
	 * @description Disables instance.
	 * @example $(".target").navigation("disable");
	 */

	function disable(data) {
		data.$handle.toggle("disable");
	}

	/**
	 * @method private
	 * @name onOpen
	 * @description Handles nav open event.
	 * @param e [object] "Event data"
	 */

	function onOpen(e) {
		Functions.killEvent(e);

		var data = e.data;

		data.$el.trigger(Events.open);
	}

	/**
	 * @method private
	 * @name onClose
	 * @description Handles nav close event.
	 * @param e [object] "Event data"
	 */

	function onClose(e) {
		Functions.killEvent(e);

		var data = e.data;

		data.$el.trigger(Events.close);
	}

	/**
	 * @plugin
	 * @name Navigation
	 * @description A jQuery plugin for simple responsive navigation.
	 * @type widget
	 * @dependency core.js
	 * @dependency mediaquery.js
	 * @dependency toggle.js
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
			 * @event open.navigation "Navigation opened"
			 * @event close.navigation "Navigation closed"
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
		GUID          = 0;

})(jQuery, Formstone);