;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name setup
	 * @description Setup plugin.
	 */

	function setup() {
		$Body = $("body, html");
	}

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {

		if (!data.handle && !data.navigation && data.type !== "toggle") {
			$.warn("Navigation: You must specify a handle and page");
			return;
		}

		// guid
		data.guid         = "__" + (GUID++);
		data.eventGuid    = Events.namespace + data.guid;
		data.classGuid    = RawClasses.base + data.guid;

		var typeClass     = RawClasses[data.type];

		// nav type
		data.handleClasses     = [RawClasses.handle, typeClass].join(" ");
		data.navClasses        = [RawClasses.navigation, typeClass, data.classGuid].join(" ");
		data.contentClasses    = [RawClasses.content, typeClass, data.classGuid].join(" ");

		// DOM

		this.addClass( [RawClasses.base, data.classGuid, data.customClass].join(" ") );

		data.$handle     = $(data.handle).addClass(data.handleClasses);
		data.$nav        = $(data.nav).addClass(data.navClasses);
		data.$content    = $(data.content).addClass(data.contentClasses);

		if (data.label) {
			data.$handle.text(data.labels.closed);
		}

/*
		if (data.type !== "toggle") {
			data.$content.after(data.$container.detach());
		}
*/

		// toggle

		data.$handle
			// .attr("data-toggle-group", RawClasses.base)
			.attr("data-toggle-target", "." + data.classGuid).toggle({
				classes: {
					target  : data.classGuid,
					enabled : Classes.enabled,
					active  : Classes.open,
					raw: {
						target  : data.contentClasses,
						enabled : RawClasses.enabled,
						active  : RawClasses.open
					}
				}
			}).on("activate.toggle" + data.eventGuid, data, onOpen)
			  .on("deactivate.toggle" + data.eventGuid, data, onClose)
			  .on("enable.toggle" + data.eventGuid, data, onEnable)
			  .on("disable.toggle" + data.eventGuid, data, onDisable);

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
		data.$content.removeClass(data.contentClasses);

		data.$handle.removeClass(data.handleClasses)
					.off("data.eventGuid")
					.toggle("destroy");

		if (!data.handle) {
			data.$handle.remove();
		}

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
		var data = e.data;

		data.$el.trigger(Events.open);

		data.$content.addClass(RawClasses.open);
	}

	/**
	 * @method private
	 * @name onClose
	 * @description Handles nav close event.
	 * @param e [object] "Event data"
	 */

	function onClose(e) {
		var data = e.data;

		data.$el.trigger(Events.close);

		data.$content.removeClass(RawClasses.open);
	}

	/**
	 * @method private
	 * @name onEnable
	 * @description Handles nav enable event.
	 * @param e [object] "Event data"
	 */

	function onEnable(e) {
		var data = e.data;

		data.$content.addClass(RawClasses.enabled);
	}

	/**
	 * @method private
	 * @name onDisable
	 * @description Handles nav disable event.
	 * @param e [object] "Event data"
	 */

	function onDisable(e) {
		var data = e.data;

		data.$content.removeClass(RawClasses.enabled);
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
			 * @param content [string] <null> "Content element selector"
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param handle [string] <null> "Handle element selector"
			 * @param label [boolean] <true> "Display handle width label"
			 * @param labels.closed [string] <'Navigation'> "Closed state text"
			 * @param labels.open [string] <'Close'> "Open state text"
			 * @param maxWidth [string] <'980px'> "Width at which to auto-disable plugin"
			 * @param navigation [string] <null> "Navigation element selector"
			 * @param type [string] <'toggle'> "Type of navigation; 'toggle', 'slide_left', 'slide_right', 'overlay'"
			 */

			defaults: {
				customClass    : "",
				handle         : null,
				label          : true,
				labels: {
					closed     : "Navigation",
					open       : "Close"
				},
				maxWidth       : "980px",
				naviation      : null,
				type           : "toggle"
			},

			classes: [
				"handle",
				"navigation",
				"content",
				"enabled",
				"open",
				"toggle",
				"slide_left",
				"slide_right",
				"overlay"
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
				_setup        : setup,
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
		GUID          = 0,
		$Body         = null;

})(jQuery, Formstone);