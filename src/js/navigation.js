;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name setup
	 * @description Setup plugin.
	 */

	function setup() {
		$Locks = $("html, body");
	}

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		// guid
		data.guid         = "__" + (GUID++);
		data.eventGuid    = Events.namespace + data.guid;
		data.rawGuid      = RawClasses.base + data.guid;
		data.classGuid    = "." + data.rawGuid;

		data.isToggle     = (data.type === "toggle");

		if (data.isToggle) {
			data.gravity  = "";
		}

		var baseClass     = RawClasses.base,
			typeClass     = [baseClass, data.type].join("-"),
			gravityClass  = data.gravity ? [typeClass, data.gravity].join("-") : "",
			classGroup    = [data.rawGuid, data.customClass].join(" ");

		data.handle       = this.data(Namespace + "-handle");
		data.content      = this.data(Namespace + "-content");

		data.handleClasses = [
			RawClasses.handle,
			RawClasses.handle.replace(baseClass, typeClass),
			RawClasses.handle.replace(baseClass, gravityClass),
			classGroup
		].join(" ");

		data.navClasses = [
			RawClasses.nav.replace(baseClass, typeClass),
			RawClasses.nav.replace(baseClass, gravityClass),
			classGroup
		].join(" ");

		data.contentClasses = [
			RawClasses.content.replace(baseClass, typeClass),
			RawClasses.content.replace(baseClass, gravityClass),
			classGroup
		].join(" ");

		// DOM

		data.$nav        = this.addClass(data.navClasses);
		data.$handle     = $(data.handle).addClass(data.handleClasses);
		data.$content    = $(data.content).addClass(data.contentClasses);
		data.$animate    = $().add(data.$nav).add(data.$content);

		if (data.label) {
			data.originalLabel = data.$handle.text();
		}

		// toggle

		data.$handle.attr("data-swap-target", data.classGuid)
					.on("activate.swap" + data.eventGuid, data, onOpen)
					.on("deactivate.swap" + data.eventGuid, data, onClose)
					.on("enable.swap" + data.eventGuid, data, onEnable)
					.on("disable.swap" + data.eventGuid, data, onDisable)
					.swap({
						maxWidth: data.maxWidth,
						classes: {
							target  : data.classGuid,
							enabled : Classes.enabled,
							active  : Classes.open,
							raw: {
								target  : data.rawGuid,
								enabled : RawClasses.enabled,
								active  : RawClasses.open
							}
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
		data.$content.removeClass(data.contentClasses)
					 .off(Events.namespace);

		data.$handle.attr("data-swap-target", "")
					.removeClass(data.handleClasses)
					.off(data.eventGuid)
					.text(data.originalLabel)
					.swap("destroy");

		this.removeClass(data.navClasses)
			.off(Events.namespace);
	}

	/**
	 * @method
	 * @name open
	 * @description Opens instance.
	 * @example $(".target").navigation("open");
	 */

	function open(data) {
		data.$handle.swap("activate");
	}

	/**
	 * @method
	 * @name close
	 * @description Closes instance.
	 * @example $(".target").navigation("close");
	 */

	function close(data) {
		data.$handle.swap("deactivate");
	}

	/**
	 * @method
	 * @name enable
	 * @description Enables instance.
	 * @example $(".target").navigation("enable");
	 */

	function enable(data) {
		data.$handle.swap("enable");
	}

	/**
	 * @method
	 * @name disable
	 * @description Disables instance.
	 * @example $(".target").navigation("disable");
	 */

	function disable(data) {
		data.$handle.swap("disable");
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

		data.$content.addClass(RawClasses.open)
					 .one(Events.clickTouchStart, function() {
						close(data);
					 });

		if (data.label) {
			data.$handle.text(data.labels.open);
		}

		if (!data.isToggle) {
			$Locks.addClass(RawClasses.lock);
		}
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

		data.$content.removeClass(RawClasses.open)
					 .off(Events.namespace);

		if (data.label) {
			data.$handle.text(data.labels.closed);
		}

		if (!data.isToggle) {
			$Locks.removeClass(RawClasses.lock);
		}
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

		setTimeout(function() {
			data.$animate.addClass(RawClasses.animated);
		}, 0);

		if (data.label) {
			data.$handle.text(data.labels.closed);
		}
	}

	/**
	 * @method private
	 * @name onDisable
	 * @description Handles nav disable event.
	 * @param e [object] "Event data"
	 */

	function onDisable(e) {
		var data = e.data;

		data.$content.removeClass(RawClasses.enabled, RawClasses.animated);
		data.$animate.removeClass(RawClasses.animated);

		if (data.label) {
			data.$handle.text(data.originalLabel);
		}
	}

	/**
	 * @plugin
	 * @name Navigation
	 * @description A jQuery plugin for simple responsive navigation.
	 * @type widget
	 * @dependency core.js
	 * @dependency mediaquery.js
	 * @dependency swap.js
	 * @dependency touch.js
	 */

	var Plugin = Formstone.Plugin("navigation", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param gravity [string] <'left'> "Gravity of 'push' and 'overlay' navigation; 'right', 'left'"
			 * @param label [boolean] <true> "Display handle width label"
			 * @param labels.closed [string] <'Menu'> "Closed state text"
			 * @param labels.open [string] <'Close'> "Open state text"
			 * @param maxWidth [string] <'980px'> "Width at which to auto-disable plugin"
			 * @param type [string] <'toggle'> "Type of navigation; 'toggle', 'push', 'overlay'"
			 */

			defaults: {
				customClass    : "",
				gravity        : "left",
				label          : true,
				labels: {
					closed     : "Menu",
					open       : "Close"
				},
				maxWidth       : "980px",
				type           : "toggle"
			},

			classes: [
				"handle",
				"nav",
				"content",
				"animated",
				"enabled",
				"open",
				"toggle",
				"push",
				"overlay",
				"left",
				"right",
				"lock"
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

		Namespace     = Plugin.namespace,
		Classes       = Plugin.classes,
		RawClasses    = Classes.raw,
		Events        = Plugin.events,
		Functions     = Plugin.functions,

		// Internal

		GUID          = 0,
		$Locks        = null;

})(jQuery, Formstone);