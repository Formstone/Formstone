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
		var guid         = "__" + (GUID++);

		data.eventGuid    = Events.namespace + guid;
		data.rawGuid      = RawClasses.base + guid;
		data.classGuid    = "." + data.rawGuid;

		data.mq           = "(max-width:" + (data.mobileMaxWidth === Infinity ? "100000px" : data.mobileMaxWidth) + ")";

		data.content      = this.attr("href");
		data.group        = this.data(Namespace + "-group");

		data.tabClasses          = [RawClasses.tab, data.rawGuid].join(" ");
		data.mobileTabClasses    = [RawClasses.tab, RawClasses.tab_mobile, data.rawGuid].join(" ");
		data.contentClasses      = [RawClasses.content, data.rawGuid].join(" ");

		// DOM

		data.$mobileTab    = $('<button type="button" class="' + data.mobileTabClasses + '">' + this.text() + '</button>');
		data.$content      = $(data.content).addClass(data.contentClasses);

		data.$content.before(data.$mobileTab);

		// toggle

		this.attr("data-swap-target", data.content)
			.attr("data-swap-group", data.group)
			.addClass(data.tabClasses)
			.on("activate.swap" + data.eventGuid, data, onActivate)
			.on("deactivate.swap" + data.eventGuid, data, onDeactivate)
			.on("enable.swap" + data.eventGuid, data, onEnable)
			.on("disable.swap" + data.eventGuid, data, onDisable)
			.swap({
				maxWidth: data.maxWidth,
				classes: {
					target  : data.classGuid,
					enabled : Classes.enabled,
					active  : Classes.active,
					raw: {
						target  : data.rawGuid,
						enabled : RawClasses.enabled,
						active  : RawClasses.active
					}
				},
				collapse: false
			});

		data.$mobileTab.touch({
			tap: true
		}).on("tap" + data.eventGuid, data, onMobileActivate);

		// Media Query support
		$.mediaquery("bind", data.rawGuid, data.mq, {
			enter: function() {
				mobileEnable.call(data.$el, data);
			},
			leave: function() {
				mobileDisable.call(data.$el, data);
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
		$.mediaquery("unbind", data.rawGuid, data.mq);

		data.$mobileTab.off(Events.namespace)
					   .touch("destroy")
					   .remove();

		data.$content.removeClass(RawClasses.content);

		this.attr("data-swap-target", "")
			.attr("data-swap-group", "")
			.removeClass(RawClasses.tab)
			.off(Events.namespace)
			.swap("destroy");
	}

	/**
	 * @method
	 * @name activate
	 * @description Activates instance.
	 * @example $(".target").tabs("open");
	 */

	function activate(data) {
		this.swap("activate");
	}

	/**
	 * @method
	 * @name enable
	 * @description Enables instance.
	 * @example $(".target").tabs("enable");
	 */

	function enable(data) {
		this.swap("enable");
	}

	/**
	 * @method
	 * @name disable
	 * @description Disables instance.
	 * @example $(".target").tabs("disable");
	 */

	function disable(data) {
		this.swap("disable");
	}

	/**
	 * @method private
	 * @name onActivate
	 * @description Handles tab open event.
	 * @param e [object] "Event data"
	 */

	function onActivate(e) {
		var data = e.data,
			index = 0;

		data.$el.trigger(Events.update, [ index ]);

		data.$mobileTab.addClass(RawClasses.active);
		data.$content.addClass(RawClasses.active);
	}

	/**
	 * @method private
	 * @name onDeactivate
	 * @description Handles tab close event.
	 * @param e [object] "Event data"
	 */

	function onDeactivate(e) {
		var data = e.data;

		// data.$el.trigger(Events.close);

		data.$mobileTab.removeClass(RawClasses.active);
		data.$content.removeClass(RawClasses.active);
	}

	/**
	 * @method private
	 * @name onEnable
	 * @description Handles tab enable event.
	 * @param e [object] "Event data"
	 */

	function onEnable(e) {
		var data = e.data;

		data.$mobileTab.addClass(RawClasses.enabled);
		data.$content.addClass(RawClasses.enabled);
	}

	/**
	 * @method private
	 * @name onDisable
	 * @description Handles tab disable event.
	 * @param e [object] "Event data"
	 */

	function onDisable(e) {
		var data = e.data;

		data.$mobileTab.removeClass(RawClasses.enabled);
		data.$content.removeClass(RawClasses.enabled);
	}

	/**
	 * @method private
	 * @name onMobileActivate
	 * @description Activates instance.
	 * @param e [object] "Event data"
	 */

	function onMobileActivate(e) {
		e.data.$el.swap("activate");
	}

	/**
	 * @method private
	 * @name mobileEnable
	 * @description Handles mobile enable event.
	 * @param data [object] "Instance data"
	 */

	function mobileEnable(data) {
		data.$el.addClass(RawClasses.mobile);
		data.$mobileTab.addClass(RawClasses.mobile);
	}

	/**
	 * @method private
	 * @name mobileDisable
	 * @description Handles mobile disable event.
	 * @param data [object] "Instance data"
	 */

	function mobileDisable(data) {
		data.$el.removeClass(RawClasses.mobile);
		data.$mobileTab.removeClass(RawClasses.mobile);
	}

	/**
	 * @plugin
	 * @name Tabs
	 * @description A jQuery plugin for simple tabs.
	 * @type widget
	 * @dependency core.js
	 * @dependency mediaquery.js
	 * @dependency swap.js
	 * @dependency touch.js
	 */

	var Plugin = Formstone.Plugin("tabs", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param maxWidth [string] <Infinity> "Width at which to auto-disable plugin"
			 * @param mobileMaxWidth [string] <'740px'> "Width at which to auto-disable mobile styles"
			 * @param vertical [boolean] <false> "Flag to draw vertical tab set"
			 */

			defaults: {
				customClass       : "",
				maxWidth          : Infinity,
				mobileMaxWidth    : "740px",
				vertical          : false
			},

			classes: [
				"tab",
				"tab_mobile",
				"mobile",
				"content",
				"enabled",
				"active"
			],

			/**
			 * @events
			 * @event update.tabs "Tab activated"
			 */

			events: {
				tap      : "tap",
				update   : "update"
			},

			methods: {
				_construct    : construct,
				_destruct     : destruct,

				// Public Methods

				activate      : activate,
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