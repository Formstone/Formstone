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
		data.classGuid    = RawClasses.base + data.guid;

		if (data.type === "toggle") {
			data.gravity  = "";
		}

		var typeClass     = RawClasses[data.type] || "",
			gravityClass  = RawClasses[data.gravity] || "",
			classGroup    = [typeClass, data.classGuid, data.customClass].join(" ");

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

		if (data.label) {
			data.$handle.text(data.labels.closed);
		}

		// toggle

		data.$handle
			.attr("data-toggle-target", "." + data.classGuid).toggle({
				maxWidth: data.maxWidth,
				classes: {
					target  : "." + data.classGuid,
					enabled : Classes.enabled,
					active  : Classes.open,
					raw: {
						target  : data.classGuid,
						enabled : RawClasses.enabled,
						active  : RawClasses.open
					}
				}
			}).on("activate.toggle" + data.eventGuid, data, onOpen)
			  .on("deactivate.toggle" + data.eventGuid, data, onClose)
			  .on("enable.toggle" + data.eventGuid, data, onEnable)
			  .on("disable.toggle" + data.eventGuid, data, onDisable);
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
					.off(data.eventGuid)
					.toggle("destroy");

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
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param gravity [string] <'left'> "Gravity of 'push' and 'overlay' navigation; 'right', 'left'"
			 * @param label [boolean] <true> "Display handle width label"
			 * @param labels.closed [string] <'Navigation'> "Closed state text"
			 * @param labels.open [string] <'Close'> "Open state text"
			 * @param maxWidth [string] <'980px'> "Width at which to auto-disable plugin"
			 * @param type [string] <'toggle'> "Type of navigation; 'toggle', 'push', 'overlay'"
			 */

			defaults: {
				customClass    : "",
				gravity        : "left",
				label          : true,
				labels: {
					closed     : "Navigation",
					open       : "Close"
				},
				maxWidth       : "980px",
				type           : "toggle"
			},

			classes: [
				"handle",
				"navigation",
				"content",
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