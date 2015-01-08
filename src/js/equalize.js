;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name resize
	 * @description Handles window resize
	 */

	function resize(windowWidth) {
		Functions.iterate.call($Instances, resizeInstance);
	}

	/**
	 * @method private
	 * @name cacheInstances
	 * @description Caches active instances
	 */

	function cacheInstances() {
		$Instances = $(Classes.element);
	}

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance Data"
	 */

	function construct(data) {
		data.maxWidth = (data.maxWidth === Infinity ? "100000px" : data.maxWidth);
		data.mq       = "(min-width:" + data.minWidth + ") and (max-width:" + data.maxWidth + ")";
		data.mqGuid   = RawClasses.base + "__" + (GUID++);

		$.mediaquery("bind", data.mqGuid, data.mq, {
			enter: function() {
				enable.call(data.$el, data);
			},
			leave: function() {
				disable.call(data.$el, data);
			}
		});

		resizeInstance(data);

		cacheInstances();
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		cacheInstances();
	}

	/**
	 * @method private
	 * @name resizeInstance
	 * @description Handle window resize event
	 * @param data [object] "Instance data"
	 */

	function resizeInstance(data) {
		if (data.enabled) {
			var $targets = data.target ? data.$el.find(data.target) : data.$el.children(),
				type     = (data.property === "height") ? "outerHeight" : "outerWidth",
				value    = 0,
				check    = 0;

			$targets.css(data.property, "");

			for (var i = 0; i < $targets.length; i++) {
				check = $targets.eq(i)[type]();

				if (check > value) {
					value = check;
				}
			}

			$targets.css(data.property, value);
		}
	}

	/**
	 * @method
	 * @name disable
	 * @description Disables instance of plugin
	 * @example $(".target").equalize("disable");
	 */

	function disable(data) {
		if (data.enabled) {
			data.enabled = false;

			var $targets = data.target ? data.$el.find(data.target) : data.$el.children(),
				type     = (data.property === "height") ? "outerHeight" : "outerWidth";

			$targets.css(data.property, "");
		}
	}

	/**
	 * @method
	 * @name enable
	 * @description Enables instance of plugin
	 * @example $(".target").equalize("enable");
	 */

	function enable(data) {
		if (!data.enabled) {
			data.enabled = true;

			resizeInstance(data);
		}
	}

	/**
	 * @plugin
	 * @name Equalize
	 * @description A jQuery plugin for equal dimensions.
	 * @type widget
	 * @dependency core.js
	 * @dependency mediaquery.js
	 */

	var Plugin = Formstone.Plugin("equalize", {
			widget: true,
			priority: 5,

			/**
			 * @options
			 * @param maxWidth [string] <'Infinity'> "Width at which to auto-disable plugin"
			 * @param minWidth [string] <'0'> "Width at which to auto-disable plugin"
			 * @param property [string] <"height"> "Property to size; 'height' or 'width'"
			 * @param target [string] <null> "Target child selector"
			 */

			defaults: {
				maxWidth    : Infinity,
				minWidth    : '0px',
				property    : "height",
				target      : null
			},

			methods : {
				_construct    : construct,
				_destruct     : destruct,
				_resize       : resize
			}
		}),

		// Localize References

		Classes        = Plugin.classes,
		RawClasses     = Classes.raw,
		Functions      = Plugin.functions,
		GUID           = 0,

		$Instances     = [];

})(jQuery, Formstone);