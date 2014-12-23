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
			baseClass    = [RawClasses.base, data.customClass].join(" "),
			html         = "";

		data.radio = (this.attr("type") === "radio");
		data.group = this.attr("name");

		html += '<div class="' + RawClasses.marker + '">';
		html += '<div class="' + RawClasses.flag + '"></div>';

		if (data.toggle) {
			baseClass += " " + RawClasses.toggle;
			html += '<span class="' + [RawClasses.state, RawClasses.state_on].join(" ") + '">'  + data.labels.on  + '</span>';
			html += '<span class="' + [RawClasses.state, RawClasses.state_off].join(" ") + '">' + data.labels.off + '</span>';
		}

		if (data.radio) {
			baseClass += " " + RawClasses.radio;
		}

		html += '</div>';

		// Modify DOM

		if ($label.length) {
			$label.addClass(RawClasses.label)
				  .wrap('<div class="' + baseClass + '"></div>')
				  .before(html);
		} else {
			this.before('<div class=" ' + baseClass + '">' + html + '</div>');
		}

		// Store plugin data
		data.$checkbox    = ($label.length) ? $label.parents(Classes.base) : this.prev(Classes.base);
		data.$marker      = data.$checkbox.find(Classes.marker);
		data.$states      = data.$checkbox.find(Classes.state);
		data.$label       = $label;

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
			.on(Events.click, data, onClick)
			.on(Events.deselect, data, onDeselect);

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
		data.$checkbox.off(Events.namespace)
					  .touch("destroy");

		data.$marker.remove();
		data.$states.remove();
		data.$label.unwrap()
				   .removeClass(RawClasses.label);

		this.off(Events.namespace);
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
		e.stopPropagation();

		var data = e.data;

		if (!$(e.target).is(data.$el)) {
			e.preventDefault();

			data.$el.trigger("click");
		}
	}

	/**
	 * @method private
	 * @name onChange
	 * @description Handles external changes
	 * @param e [object] "Event data"
	 */

	function onChange(e) {
		var data        = e.data,
			disabled    = data.$el.is(":disabled"),
			checked     = data.$el.is(":checked");

		if (!disabled) {
			if (data.radio) {
				// radio
				// if (checked || (isIE8 && !checked)) {
					onSelect(e);
				// }
			} else {
				// Checkbox change events fire after state has changed
				if (checked) {
					onSelect(e);
				} else {
					onDeselect(e);
				}
			}
		}
	}

	/*
	 * @method private
	 * @name onSelect
	 * @description Changes input to "checked"
	 * @param e [object] "Event data"
	 */
	function onSelect(e) {
		if (e.data.radio) {
			$('input[name="' + e.data.group + '"]').not(e.data.$el).trigger("deselect");
		}

		e.data.$checkbox.addClass(RawClasses.checked);
	}

	/**
	 * @method private
	 * @name onDeselect
	 * @description Changes input to "checked"
	 * @param e [object] "Event data"
	 */
	function onDeselect(e) {
		e.data.$checkbox.removeClass(RawClasses.checked);
	}

	/**
	 * @method private
	 * @name onFocus
	 * @description Handles instance focus
	 * @param e [object] "Event data"
	 */

	function onFocus(e) {
		e.data.$checkbox.addClass(RawClasses.focus);
	}

	/**
	 * @method private
	 * @name onBlur
	 * @description Handles instance blur
	 * @param e [object] "Event data"
	 */

	function onBlur(e) {
		e.data.$checkbox.removeClass(RawClasses.focus);
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
				"flag",
				"radio",
				"focus",
				"checked",
				"disabled",
				"toggle",
				"state",
				"state_on",
				"state_off"
			],

			methods: {
				_construct    : construct,
				_destruct     : destruct,

				// Public Methods

				enable        : enable,
				disable       : disable
			},

			events: {
				deselect : "deselect",
				tap      : "tap"
			}
		}),

		// Localize References

		Classes       = Plugin.classes,
		RawClasses    = Classes.raw,
		Events        = Plugin.events,
		Functions     = Plugin.functions;

})(jQuery, Formstone);