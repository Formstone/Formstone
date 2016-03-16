/* global define */

(function(factory) {
	if (typeof define === "function" && define.amd) {
		define([
			"jquery",
			"./core",
			"./mediaquery",
			"./swap"
		], factory);
	} else {
		factory(jQuery, Formstone);
	}
}(function($, Formstone) {

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
		data.handleGuid   = RawClasses.handle + data.guid;

		data.isToggle     = (data.type === "toggle");
		data.open         = false;

		if (data.isToggle) {
			data.gravity  = "";
		}

		var baseClass     = RawClasses.base,
			typeClass     = [baseClass, data.type].join("-"),
			gravityClass  = data.gravity ? [typeClass, data.gravity].join("-") : "",
			classGroup    = [data.rawGuid, data.theme, data.customClass].join(" ");

		data.handle       = this.data(Namespace + "-handle");
		data.content      = this.data(Namespace + "-content");

		data.handleClasses = [
			RawClasses.handle,
			RawClasses.handle.replace(baseClass, typeClass),
			gravityClass ? RawClasses.handle.replace(baseClass, gravityClass) : "",
			data.handleGuid,
			classGroup
		].join(" ");

		data.thisClasses = [
			RawClasses.nav.replace(baseClass, typeClass),
			gravityClass ? RawClasses.nav.replace(baseClass, gravityClass) : "",
			classGroup
		];

		data.contentClasses = [
			RawClasses.content.replace(baseClass, typeClass),
			classGroup
		].join(" ");

		data.contentClassesOpen = [
			gravityClass ? RawClasses.content.replace(baseClass, gravityClass) : "",
			RawClasses.open
		].join(" ");

		// DOM

		data.$nav        = this.addClass(data.thisClasses.join(" "));
		data.$handle     = $(data.handle).addClass(data.handleClasses);
		data.$content    = $(data.content).addClass(data.contentClasses);
		data.$animate    = $().add(data.$nav).add(data.$content);

		cacheLabel(data);

		// toggle

		data.$handle.attr("data-swap-target", data.dotGuid)
					.attr("data-swap-linked", data.handleGuid)
					.attr("data-swap-group", RawClasses.base)
					.on("activate.swap" + data.dotGuid, data, onOpen)
					.on("deactivate.swap" + data.dotGuid, data, onClose)
					.on("enable.swap" + data.dotGuid, data, onEnable)
					.on("disable.swap" + data.dotGuid, data, onDisable)
					.fsSwap({
						maxWidth: data.maxWidth,
						classes: {
							target  : data.dotGuid,
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
		data.$content.removeClass( [data.contentClasses, data.contentClassesOpen].join(" ") )
					 .off(Events.namespace);

		data.$handle.removeAttr("data-swap-target")
					.removeData("swap-target")
					.removeAttr("data-swap-linked")
					.removeData("swap-linked")
					.removeClass(data.handleClasses)
					.off(data.dotGuid)
					.html(data.originalLabel)
					.fsSwap("destroy");

		restoreLabel(data);

		clearLocks(data);

		this.removeClass(data.thisClasses.join(" "))
			.off(Events.namespace);
	}

	/**
	 * @method
	 * @name open
	 * @description Opens instance.
	 * @example $(".target").navigation("open");
	 */

	function open(data) {
		data.$handle.fsSwap("activate");
	}

	/**
	 * @method
	 * @name close
	 * @description Closes instance.
	 * @example $(".target").navigation("close");
	 */

	function close(data) {
		data.$handle.fsSwap("deactivate");
	}

	/**
	 * @method
	 * @name enable
	 * @description Enables instance.
	 * @example $(".target").navigation("enable");
	 */

	function enable(data) {
		data.$handle.fsSwap("enable");
	}

	/**
	 * @method
	 * @name disable
	 * @description Disables instance.
	 * @example $(".target").navigation("disable");
	 */

	function disable(data) {
		data.$handle.fsSwap("disable");
	}

	/**
	 * @method private
	 * @name onOpen
	 * @description Handles nav open event.
	 * @param e [object] "Event data"
	 */

	function onOpen(e) {
		if (!e.originalEvent) { // thanks IE :/
			var data = e.data;

			if (!data.open) {
				data.$el.trigger(Events.open);

				data.$content.addClass(data.contentClassesOpen)
							 .one(Events.click, function() {
								close(data);
							 });

				if (data.label) {
					data.$handle.html(data.labels.open);
				}

				addLocks(data);

				data.open = true;
			}
		}
	}

	/**
	 * @method private
	 * @name onClose
	 * @description Handles nav close event.
	 * @param e [object] "Event data"
	 */

	function onClose(e) {
		if (!e.originalEvent) { // thanks IE :/
			var data = e.data;

			if (data.open) {
				data.$el.trigger(Events.close);

				data.$content.removeClass(data.contentClassesOpen)
							 .off(Events.namespace);

				if (data.label) {
					data.$handle.html(data.labels.closed);
				}

				clearLocks(data);

				data.open = false;
			}
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
			data.$handle.html(data.labels.closed);
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

		restoreLabel(data);

		clearLocks(data);
	}

	/**
	 * @method private
	 * @name addLocks
	 * @description Locks scrolling
	 * @param data [object] "Instance data"
	 */

	function addLocks(data) {
		if (!data.isToggle) {
			$Locks.addClass(RawClasses.lock);
		}
	}

	/**
	 * @method private
	 * @name clearLocks
	 * @description Unlocks scrolling
	 * @param data [object] "Instance data"
	 */

	function clearLocks(data) {
		if (!data.isToggle) {
			$Locks.removeClass(RawClasses.lock);
		}
	}

	/**
	 * @method private
	 * @name cacheLabel
	 * @description Sets handle labels
	 * @param data [object] "Instance data"
	 */

	function cacheLabel(data) {
		if (data.label) {
			if (data.$handle.length > 1) {
				data.originalLabel = [];

				for (var i = 0, count = data.$handle.length; i < count; i++) {
					data.originalLabel[i] = data.$handle.eq(i).html();
				}
			} else {
				data.originalLabel = data.$handle.html();
			}
		}
	}

	/**
	 * @method private
	 * @name restoreLabel
	 * @description restores handle labels
	 * @param data [object] "Instance data"
	 */

	function restoreLabel(data) {
		if (data.label) {
			if (data.$handle.length > 1) {
				for (var i = 0, count = data.$handle.length; i < count; i++) {
					data.$handle.eq(i).html(data.originalLabel[i]);
				}
			} else {
				data.$handle.html(data.originalLabel);
			}
		}
	}

	/**
	 * @plugin
	 * @name Navigation
	 * @description A jQuery plugin for simple responsive navigation.
	 * @type widget
	 * @main navigation.js
	 * @main navigation.css
	 * @dependency jQuery
	 * @dependency core.js
	 * @dependency mediaquery.js
	 * @dependency swap.js
	 */

	var Plugin = Formstone.Plugin("navigation", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param gravity [string] <'left'> "Gravity of 'push', 'reveal' and 'overlay' navigation; 'right', 'left'"
			 * @param label [boolean] <true> "Display handle width label"
			 * @param labels.closed [string] <'Menu'> "Closed state text"
			 * @param labels.open [string] <'Close'> "Open state text"
			 * @param maxWidth [string] <'980px'> "Width at which to auto-disable plugin"
			 * @param theme [string] <"fs-light"> "Theme class name"
			 * @param type [string] <'toggle'> "Type of navigation; 'toggle', 'push', 'reveal', 'overlay'"
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
				theme          : "fs-light",
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
				"reveal",
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

		$Locks        = null;

})

);