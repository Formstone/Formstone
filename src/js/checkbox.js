;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		var $parent      = this.closest("label"),
			$label       = $parent.length ? $parent.eq(0) : $("label[for=" + this.attr("id") + "]"),
			type         = this.attr("type"),
			baseClass    = [RawClasses.base, data.customClass].join(" "),
			html         = '<div class="' + RawClasses.marker + '"></div>';

			/*
			if (opts.toggle) {
				typeClass += " picker-toggle";
				html = '<span class="picker-toggle-label on">' + opts.labels.on + '</span><span class="picker-toggle-label off">' + opts.labels.off + '</span>' + html;
			}
			*/

		// Modify DOM

		// this.addClass(RawClasses.element);

		if ($label.length) {
			$label.addClass(RawClasses.label)
				  .wrap('<div class="' + baseClass + '"></div>')
				  .before(html);
		} else {
			this.before('<div class=" ' + baseClass + '">' + html + '</div>');
		}

		// Store plugin data
		data.$checkbox = ($label.length) ? $label.parents(Classes.base) : this.prev(Classes.base);
		data.$handle = data.$checkbox.find(Classes.handle);
		data.$labels = data.$checkbox.find(Classes.label);

		// Check checked
		if (this.is(":checked")) {
			data.$checkbox.addClass(RawClasses.checked);
		}

		// Check disabled
		if (this.is(":disabled")) {
			data.$checkbox.addClass(RawClasses.disabled);
		}

		// Bind click events
		this.on(Events.focus, data, onFocus)
			.on(Events.blur, data, onBlur)
			.on(Events.change, data, onChange)
			.on(Events.click, data, onClick);
			//.on("deselect.picker", data, _onDeselect)

		data.$checkbox.touch({
			tap: true
		}).on(Events.tap, data, onClick);
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
/*
		data.$mobileTab.off(Events.namespace)
					   .touch("destroy")
					   .remove();

		data.$content.removeClass(RawClasses.content);

		this.attr("data-switch-target", "")
			.attr("data-switch-group", "")
			.removeClass(RawClasses.tab)
			.off(Events.namespace)
			.switch("destroy");
*/
	}

	/**
	 * @method
	 * @name enable
	 * @description Enables target instance
	 * @example $(".target").checkbox("enable");
	 */

	function enable(data) {
		this.prop("disabled", false);
		data.$checkbox.removeClass(RawClasses.disabled);
	}

	/**
	 * @method
	 * @name disable
	 * @description Disables target instance
	 * @example $(".target").checkbox("disable");
	 */

	function disable(data) {
		this.prop("disabled", true);
		data.$checkbox.addClass(RawClasses.disabled);
	}

	/**
	 * @method private
	 * @name onClick
	 * @description Handles click
	 */

	function onClick(e) {
		var data = e.data;

		if (!$(e.target).is(data.$input)) {
			e.preventDefault();

			data.$el.trigger("click");
		}
	}

	function onFocus(e) {
	}

	function onBlur(e) {
	}

	function onChange(e) {
	}

	/**
	 * @plugin
	 * @name Checkbox
	 * @description A jQuery plugin for replacing checkboxes.
	 * @type widget
	 * @dependency core.js
	 * @dependency touch.js
	 */

	var Plugin = Formstone.Plugin("checkbox", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param toggle [boolean] <false> "Render 'toggle' styles"
			 * @param labels.on [string] <'ON'> "Label for 'On' position; 'toggle' only"
			 * @param labels.off [string] <'OFF'> "Label for 'Off' position; 'toggle' only"
			 */

			defaults: {
				customClass    : "",
				toggle         : false,
				labels : {
					on         : "ON",
					off        : "OFF"
				}
			},

			classes: [
				"label",
				"marker",
				"checked",
				"disabled"
			],

			methods: {
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
		Functions     = Plugin.functions;

})(jQuery, Formstone);