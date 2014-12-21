;(function ($, Formstone, undefined) {

	"use strict";

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
		data.rawClassGuid = RawClasses.base + data.guid;
		data.classGuid    = "." + data.rawClassGuid;

		if (data.type === "toggle") {
			data.gravity  = "";
		}

		var typeClass     = RawClasses[data.type] || "",
			gravityClass  = RawClasses[data.gravity] || "",
			classGroup    = [typeClass, data.rawClassGuid, data.customClass].join(" ");

		data.handle       = this.data(Namespace + "-handle");
		data.content      = this.data(Namespace + "-content");

		// nav type
		data.handleClasses     = [RawClasses.handle, classGroup].join(" ");
		data.navClasses        = [RawClasses.navigation, classGroup, gravityClass].join(" ");
		data.contentClasses    = [RawClasses.content, classGroup, (data.type === "push" ? gravityClass : "")].join(" ");

		// DOM

		data.$nav        = this.addClass(data.navClasses);
		data.$handle     = $(data.handle).addClass(data.handleClasses);
		data.$content    = $(data.content).addClass(data.contentClasses);
		data.$animate    = $().add(data.$nav).add(data.$content);

		if (data.label) {
			data.$handle.text(data.labels.closed);
		}

		// toggle

		data.$handle.attr("data-switch-target", data.classGuid)
					.on("activate.switch" + data.eventGuid, data, onOpen)
					.on("deactivate.switch" + data.eventGuid, data, onClose)
					.on("enable.switch" + data.eventGuid, data, onEnable)
					.on("disable.switch" + data.eventGuid, data, onDisable)
					.switch({
						maxWidth: data.maxWidth,
						classes: {
							target  : data.classGuid,
							enabled : Classes.enabled,
							active  : Classes.open,
							raw: {
								target  : data.rawClassGuid,
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
		data.$content.removeClass(data.contentClasses);

		data.$handle.attr("data-switch-target", "")
					.removeClass(data.handleClasses)
					.off(data.eventGuid)
					.switch("destroy");

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
		data.$handle.switch("activate");
	}

	/**
	 * @method
	 * @name close
	 * @description Closes instance.
	 * @example $(".target").navigation("close");
	 */

	function close(data) {
		data.$handle.switch("deactivate");
	}

	/**
	 * @method
	 * @name enable
	 * @description Enables instance.
	 * @example $(".target").navigation("enable");
	 */

	function enable(data) {
		data.$handle.switch("enable");
	}

	/**
	 * @method
	 * @name disable
	 * @description Disables instance.
	 * @example $(".target").navigation("disable");
	 */

	function disable(data) {
		data.$handle.switch("disable");
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

		if (data.label) {
			data.$handle.text(data.labels.open);
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

		data.$content.removeClass(RawClasses.open);

		if (data.label) {
			data.$handle.text(data.labels.closed);
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
	}

	/**
	 * @plugin
	 * @name Navigation
	 * @description A jQuery plugin for simple responsive navigation.
	 * @type widget
	 * @dependency core.js
	 * @dependency mediaquery.js
	 * @dependency switch.js
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
				"navigation",
				"content",
				"animated",
				"enabled",
				"open",
				// types
				"toggle",
				"push",
				"overlay",
				"left",
				"right"
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

		Namespace     = Plugin.namespace,
		Classes       = Plugin.classes,
		RawClasses    = Classes.raw,
		Events        = Plugin.events,
		Functions     = Plugin.functions,
		GUID          = 0;

})(jQuery, Formstone);