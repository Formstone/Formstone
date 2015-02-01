;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name setup
	 * @description Setup plugin.
	 */

	function setup() {
		$Body = Formstone.$body;
	}

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		var min = parseFloat(this.attr("min")),
			max = parseFloat(this.attr("max"));

		data.min  = (min || min === 0) ? min : false;
		data.max  = (max || max === 0) ? max : false;
		data.step = parseFloat(this.attr("step")) || 1;
		data.timer        = null;
		data.digits       = significantDigits(data.step);
		data.disabled     = this.prop("disabled");

		var html = "";
		html += '<button type="button" class="' + [RawClasses.arrow, RawClasses.up].join(" ") + '">'   + data.labels.up + '</button>';
		html += '<button type="button" class="' + [RawClasses.arrow, RawClasses.down].join(" ") + '">' + data.labels.down + '</button>';

		// Modify DOM
		this.wrap('<div class="' + [RawClasses.base, data.customClass, (data.disabled) ? RawClasses.disabled : ""].join(" ") + '"></div>')
			.after(html);

		// Store data
		data.$container    = this.parent(Classes.base);
		data.$arrows       = data.$container.find(Classes.arrow);

		// Bind keyboard events
		this.on(Events.keyPress, Classes.element, data, onKeyup);

		// Bind click events
		data.$container.on( [Events.touchStart, Events.mouseDown].join(" "), Classes.arrow, data, onMouseDown);
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		data.$arrows.remove();

		this.unwrap()
			.off(Events.namespace);
	}

	/**
	 * @method
	 * @name enable
	 * @description Enables target instance
	 * @example $(".target").number("enable");
	 */

	function enable(data) {
		if (data.disabled) {
			this.prop("disabled", false);

			data.$container.removeClass(RawClasses.disabled);

			data.disabled = false;
		}
	}

	/**
	 * @method
	 * @name disable
	 * @description Disables target instance
	 * @example $(".target").number("disable");
	 */

	function disable(data) {
		if (!data.disabled) {
			this.prop("disabled", true);

			data.$container.addClass(RawClasses.disabled);

			data.disabled = true;
		}
	}

	/**
	 * @method private
	 * @name onKeyup
	 * @description Handles keypress event on inputs
	 * @param e [object] "Event data"
	 */

	function onKeyup(e) {
		var data = e.data;

		// If arrow keys
		if (e.keyCode === 38 || e.keyCode === 40) {
			e.preventDefault();

			step(data, (e.keyCode === 38) ? data.step : -data.step);
		}
	}

	/**
	 * @method private
	 * @name onMouseDown
	 * @description Handles mousedown event on instance arrows
	 * @param e [object] "Event data"
	 */

	function onMouseDown(e) {
		Functions.killEvent(e);

		// Make sure we reset the states
		onMouseUp(e);

		var data = e.data;

		if (!data.disabled) {
			var change = $(e.target).hasClass(RawClasses.up) ? data.step : -data.step;

			data.timer = Functions.startTimer(data.timer, 110, function() {
				step(data, change, false);
			}, true);

			step(data, change);

			$Body.on( [Events.touchEnd, Events.mouseUp].join(" "), data, onMouseUp);
		}
	}

	/**
	 * @method private
	 * @name onMouseUp
	 * @description Handles mouseup event on instance arrows
	 * @param e [object] "Event data"
	 */

	function onMouseUp(e) {
		Functions.killEvent(e);

		var data = e.data;

		Functions.clearTimer(data.timer, true);

		$Body.off(Events.namespace);
	}

	/**
	 * @method private
	 * @name step
	 * @description Steps through values
	 * @param e [object] "Event data"
	 * @param change [string] "Change value"
	 */

	function step(data, change) {
		var oValue = parseFloat(data.$el.val()),
			value = change;

		if ($.type(oValue) === "undefined" || isNaN(oValue)) {
			if (data.min !== false) {
				value = data.min;
			} else {
				value = 0;
			}
		} else if (data.min !== false && oValue < data.min) {
			value = data.min;
		} else {
			value += oValue;
		}

		var diff = (value - data.min) % data.step;
		if (diff !== 0) {
			value -= diff;
		}

		if (data.min !== false && value < data.min) {
			value = data.min;
		}
		if (data.max !== false && value > data.max) {
			value -= data.step;
		}

		if (value !== oValue) {
			value = round(value, data.digits);

			data.$el.val(value)
					.trigger(Events.raw.change);
		}
	}

	/**
	 * @method private
	 * @name significantDigits
	 * @description Analyzes and returns significant digit count
	 * @param value [float] "Value to analyze"
	 * @return [int] "Number of significant digits"
	 */
	function significantDigits(value) {
		var test = String(value);

		if (test.indexOf(".") > -1) {
			return test.length - test.indexOf(".") - 1;
		} else {
			return 0;
		}
	}

	/**
	 * @method private
	 * @name round
	 * @description Rounds a number to a sepcific significant digit count
	 * @param value [float] "Value to round"
	 * @param digits [float] "Digits to round to"
	 * @return [number] "Rounded number"
	 */

	function round(value, digits) {
		var exp = Math.pow(10, digits);
		return Math.round(value * exp) / exp;
	}

	/**
	 * @plugin
	 * @name Number
	 * @description A jQuery plugin for cross browser number inputs.
	 * @type widget
	 * @dependency core.js
	 */

	var Plugin = Formstone.Plugin("number", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param labels.up [string] <'Up'> "Up arrow label"
			 * @param labels.down [string] <'Down'> "Down arrow label"
			 */

			defaults: {
				customClass    : "",
				labels : {
					up         : "Up",
					down       : "Down"
				}
			},

			classes: [
				"arrow",
				"up",
				"down",
				"disabled"
			],

			methods: {
				_setup        : setup,
				_construct    : construct,
				_destruct     : destruct,

				// Public Methods

				enable        : enable,
				disable       : disable
			},

			events: {
				tap    : "tap"
			}
		}),

		// Localize References

		Classes       = Plugin.classes,
		RawClasses    = Classes.raw,
		Events        = Plugin.events,
		Functions     = Plugin.functions,

		$Body    = null;

})(jQuery, Formstone);