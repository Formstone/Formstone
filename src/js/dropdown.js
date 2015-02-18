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
		data.multiple = this.prop("multiple");
		data.disabled = this.is(":disabled");

		if (data.multiple) {
			data.links = false;
		} else if (data.external) {
			data.links = true;
		}

		// Grab true original index, only if selected attribute exits
		var $originalOption = this.find(":selected").not(":disabled"),
			originalLabel = $originalOption.text(),
			originalIndex = this.find("option").index($originalOption);

		if (!data.multiple && data.label !== "") {
			$originalOption = this.prepend('<option value="" class="' + RawClasses.item_placeholder + '" selected>' + data.label + '</option>');
			originalLabel = data.label;
			originalIndex = 0;
		} else {
			data.label = "";
		}

		// Build options array
		var $allOptions = this.find("option, optgroup"),
			$options = $allOptions.filter("option");

		// Swap tab index, no more interacting with the actual select!
		data.tabIndex = this[0].tabIndex;
		this[0].tabIndex = -1;

		// Build wrapper
		var wrapperClasses = [
			RawClasses.base,
			data.customClass
		];

		if (data.mobile || Formstone.isMobile) {
			wrapperClasses.push(RawClasses.mobile);
		} else if (data.cover) {
			wrapperClasses.push(RawClasses.cover);
		}
		if (data.multiple) {
			wrapperClasses.push(RawClasses.multiple);
		}
		if (data.disabled) {
			wrapperClasses.push(RawClasses.disabled);
		}

		// Build html
		var wrapperHtml = '<div class="' + wrapperClasses.join(" ") + '" tabindex="' + data.tabIndex + '"></div>',
			innerHtml = "";

		// Build inner
		if (!data.multiple) {
			innerHtml += '<button type="button" class="' + RawClasses.selected + '">';
			innerHtml += $('<span></span>').text( trimText(originalLabel, data.trim) ).html();
			innerHtml += '</button>';
		}
		innerHtml += '<div class="' + RawClasses.options + '">';
		innerHtml += '</div>';

		// Modify DOM
		this.wrap(wrapperHtml)
			.after(innerHtml);

		// Store plugin data
		data.$dropdown        = this.parent(Classes.base);
		data.$allOptions      = $allOptions;
		data.$options         = $options;
		data.$selected        = data.$dropdown.find(Classes.selected);
		data.$wrapper         = data.$dropdown.find(Classes.options);
		data.$placeholder     = data.$dropdown.find(Classes.placeholder);
		data.index            = -1;
		data.guid             = GUID++;
		data.closed           = true;

		data.keyDownGUID      = Events.keyDown + data.guid;
		data.clickGUID        = Events.click + data.guid;

		buildOptions(data);

		if (!data.multiple) {
			updateOption(originalIndex, data);
		}

		/*
		// Scroller support
		if ($.fn.scroller !== undefined) {
			data.$wrapper.scroller();
		}
		*/

		// Bind events
		data.$selected.touch({
			tap: true
		}).on(Events.tap, data, onClick);

		data.$dropdown.on(Events.click, Classes.item, data, onSelect)
					  .on(Events.close, data, onClose);

		// Change events
		this.on(Events.change, data, onChange);

		// Focus/Blur events
		if (!Formstone.isMobile) {
			data.$dropdown.on(Events.focus, data, onFocus)
						  .on(Events.blur, data, onBlur);

			// Handle clicks to associated labels
			this.on(Events.focus, data, function(e) {
				e.data.$dropdown.trigger(Events.raw.focus);
			});
		}
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		if (data.$dropdown.hasClass(RawClasses.open)) {
			data.$selected.trigger(Events.click);
		}

		// Scrollbar support
		/*
		if ($.fn.scroller !== undefined) {
			data.$dropdown.find(".selecter-options").scroller("destroy");
		}
		*/

		data.$el[0].tabIndex = data.tabIndex;

		data.$dropdown.off(Events.namespace);
		data.$options.off(Events.namespace);

		data.$placeholder.remove();
		data.$selected.remove();
		data.$wrapper.remove();

		data.$el.off(Events.namespace)
				.show()
				.unwrap();
	}

	/**
	 * @method
	 * @name disable
	 * @description Disables target instance or option.
	 * @param option [string] <null> "Target option value"
	 * @example $(".target").dropdown("disable", "1");
	 */

	function disableDropdown(data, option) {
		if (typeof option !== "undefined") {
			var index = data.$items.index( data.$items.filter("[data-value=" + option + "]") );

			data.$items.eq(index).addClass(RawClasses.item_disabled);
			data.$options.eq(index).prop("disabled", true);
		} else {
			if (data.$dropdown.hasClass(RawClasses.open)) {
				data.$selected.trigger(Events.click);
			}

			data.$dropdown.addClass(RawClasses.disabled);
			data.$el.prop("disabled", true);

			data.disabled = true;
		}
	}

	/**
	 * @method
	 * @name enable
	 * @description Enables target instance or option.
	 * @param option [string] <null> "Target option value"
	 * @example $(".target").dropdown("enable", "1");
	 */

	function enableDropdown(data, option) {
		if (typeof option !== "undefined") {
			var index = data.$items.index( data.$items.filter("[data-value=" + option + "]") );
			data.$items.eq(index).removeClass(RawClasses.item_disabled);
			data.$options.eq(index).prop("disabled", false);
		} else {
			data.$dropdown.removeClass(RawClasses.disabled);
			data.$el.prop("disabled", false);

			data.disabled = false;
		}
	}

	/**
	* @method
	* @name update
	* @description Updates instance.
	* @example $(".target").dropdown("update");
	*/

	function updateDropdown(data) {
		var index = data.index;

		data.$allOptions = data.$el.find("option, optgroup");
		data.$options = data.$allOptions.filter("option");
		data.index = -1;

		index = data.$options.index(data.$options.filter(":selected"));

		buildOptions(data);

		if (!data.multiple) {
			updateOption(index, data);
		}
	}

	/**
	 * @method private
	 * @name buildOptions
	 * @description Builds instance's option set.
	 * @param data [object] "Instance data"
	 */

	function buildOptions(data) {
		var html = '',
			j = 0;

		for (var i = 0, count = data.$allOptions.length; i < count; i++) {
			var $option = data.$allOptions.eq(i),
				classes = [];

			// Option group
			if ($option[0].tagName === "OPTGROUP") {
				classes.push(RawClasses.group);

				// Disabled groups
				if ($option.is(":disabled")) {
					classes.push(RawClasses.disabled);
				}

				html += '<span class="' + classes.join(" ") + '">' + $option.attr("label") + '</span>';
			} else {
				var opVal = $option.val();

				if (!$option.attr("value")) {
					$option.attr("value", opVal);
				}

				classes.push(RawClasses.item);

				if ($option.hasClass(RawClasses.item_placeholder)) {
					classes.push(RawClasses.item_placeholder);
				}
				if ($option.is(":selected")) {
					classes.push(RawClasses.item_selected);
				}
				if ($option.is(":disabled")) {
					classes.push(RawClasses.item_disabled);
				}

				html += '<button type="button" class="' + classes.join(" ") + '" ';
				html += 'data-value="' + opVal + '">';
				html += $("<span></span>").text( trimText($option.text(), data.trim) ).html();
				html += '</button>';

				j++;
			}
		}

		data.$items = data.$wrapper.html(html)
								   .find(Classes.item);
	}

	/**
	 * @method private
	 * @name onClick
	 * @description Handles click to selected item.
	 * @param e [object] "Event data"
	 */

	function onClick(e) {
		Functions.killEvent(e);

		var data = e.data;

		if (!data.disabled) {
			// Handle mobile, but not Firefox, unless desktop forced
			if (!data.mobile && Formstone.isMobile && !Formstone.isFirefoxMobile) {
				var el = data.$el[0];

				if (Document.createEvent) { // All
					var evt = Document.createEvent("MouseEvents");
					evt.initMouseEvent("mousedown", false, true, Window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
					el.dispatchEvent(evt);
				} else if (el.fireEvent) { // IE
					el.fireEvent("onmousedown");
				}
			} else {
				// Delegate intent
				if (data.closed) {
					openOptions(data);
				} else {
					closeOptions(data);
				}
			}
		}
	}

	/**
	 * @method private
	 * @name openOptions
	 * @description Opens option set.
	 * @param data [object] "Instance data"
	 */

	/**
	 * @method
	 * @name open
	 * @description Opens target instance.
	 * @example $(".target").dropdown("open");
	 */

	function openOptions(data) {
		// Make sure it's not already open
		if (data.closed) {
			$(Classes.base).not(data.$dropdown).trigger(Events.close, [ data ]);

			var offset = data.$dropdown.offset(),
				bodyHeight = $Body.outerHeight(),
				optionsHeight = data.$wrapper.outerHeight(true),
				selectedOffset = (data.index >= 0) ? data.$items.eq(data.index).position() : { left: 0, top: 0 };

			// Calculate bottom of document
			if (offset.top + optionsHeight > bodyHeight) {
				data.$dropdown.addClass(RawClasses.bottom);
			}

			// Bind Events
			$Body.on(data.clickGUID, ":not(" + Classes.options + ")", data, closeOptionsHelper);

			data.$dropdown.addClass(RawClasses.open);
			scrollOptions(data);

			data.closed = false;
		}
	}

	/**
	 * @method private
	 * @name closeOptions
	 * @description Closes option set.
	 * @param data [object] "Instance data"
	 */

	/**
	 * @method
	 * @name close
	 * @description Closes target instance.
	 * @example $(".target").dropdown("close");
	 */

	function closeOptions(data) {
		// Make sure it's actually open
		if (data && !data.closed) {
			$Body.off(data.clickGUID);

			data.$dropdown.removeClass( [RawClasses.open, RawClasses.bottom].join(" ") );

			data.closed = true;
		}
	}

	/**
	 * @method private
	 * @name closeOptionsHelper
	 * @description Determines if event target is outside instance before closing
	 * @param e [object] "Event data"
	 */

	function closeOptionsHelper(e) {
		Functions.killEvent(e);

		var data = e.data;

		if (data && $(e.currentTarget).parents(Classes.base).length === 0) {
			closeOptions(data);
		}
	}

	/**
	 * @method private
	 * @name onClose
	 * @description Handles close event.
	 * @param e [object] "Event data"
	 */

	function onClose(e) {
		var data = e.data;

		if (data) {
			closeOptions(data);
		}
	}

	/**
	 * @method private
	 * @name onSelect
	 * @description Handles option select.
	 * @param e [object] "Event data"
	 */

	function onSelect(e) {
		Functions.killEvent(e);

		var $target = $(this),
			data = e.data;

		if (!data.disabled) {
			if (data.$wrapper.is(":visible")) {
				// Update
				var index = data.$items.index($target);

				if (index !== data.index) {
					updateOption(index, data);
					handleChange(data);
				}
			}

			if (!data.multiple) {
				// Clean up
				closeOptions(data);
			}
		}
	}

	/**
	 * @method private
	 * @name onChange
	 * @description Handles external changes.
	 * @param e [object] "Event data"
	 */

	function onChange(e, internal) {
		var $target = $(this),
			data = e.data;

		if (!internal && !data.multiple) {
			var index = data.$options.index( data.$options.filter("[value='" + escapeText($target.val()) + "']") );

			updateOption(index, data);
			handleChange(data);
		}
	}

	/**
	 * @method private
	 * @name onFocus
	 * @description Handles instance focus.
	 * @param e [object] "Event data"
	 */

	function onFocus(e) {
		Functions.killEvent(e);

		var data = e.data;

		if (!data.disabled && !data.multiple) {
			data.$dropdown.addClass(RawClasses.focus)
						  .on(data.keyDownGUID, data, onKeypress);
		}
	}

	/**
	 * @method private
	 * @name onBlur
	 * @description Handles instance blur.
	 * @param e [object] "Event data"
	 */

	function onBlur(e, internal) {
		Functions.killEvent(e);

		var data = e.data;

		data.$dropdown.removeClass(RawClasses.focus)
					  .off(data.keyDownGUID);

		if (!data.multiple) {
			// Clean up
			closeOptions(data);
		}
	}

	/**
	 * @method private
	 * @name onKeypress
	 * @description Handles instance keypress, once focused.
	 * @param e [object] "Event data"
	 */

	function onKeypress(e) {
		var data = e.data;

		if (e.keyCode === 13) {
			if (!data.closed) {
				closeOptions(data);
				updateOption(data.index, data);
			}
			handleChange(data);
		} else if (e.keyCode !== 9 && (!e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey)) {
			// Ignore modifiers & tabs
			Functions.killEvent(e);

			var total = data.$items.length - 1,
				index = (data.index < 0) ? 0 : data.index;

			// Firefox left/right support thanks to Kylemade
			if ($.inArray(e.keyCode, (Formstone.isFirefox) ? [38, 40, 37, 39] : [38, 40]) > -1) {
				// Increment / decrement using the arrow keys
				index = index + ((e.keyCode === 38 || (Formstone.isFirefox && e.keyCode === 37)) ? -1 : 1);

				if (index < 0) {
					index = 0;
				}
				if (index > total) {
					index = total;
				}
			} else {
				var input = String.fromCharCode(e.keyCode).toUpperCase(),
					letter,
					i;

				// Search for input from original index
				for (i = data.index + 1; i <= total; i++) {
					letter = data.$options.eq(i).text().charAt(0).toUpperCase();
					if (letter === input) {
						index = i;
						break;
					}
				}

				// If not, start from the beginning
				if (index < 0 || index === data.index) {
					for (i = 0; i <= total; i++) {
						letter = data.$options.eq(i).text().charAt(0).toUpperCase();
						if (letter === input) {
							index = i;
							break;
						}
					}
				}
			}

			// Update
			if (index >= 0) {
				updateOption(index, data);
				scrollOptions(data);
			}
		}
	}

	/**
	 * @method private
	 * @name updateOption
	 * @description Updates instance based on new target index.
	 * @param index [int] "Selected option index"
	 * @param data [object] "instance data"
	 */

	function updateOption(index, data) {
		var $item      = data.$items.eq(index),
			$option    = data.$options.eq(index),
			isSelected = $item.hasClass(RawClasses.item_selected),
			isDisabled = $item.hasClass(RawClasses.item_disabled);

		// Check for disabled options
		if (!isDisabled) {
			if (data.multiple) {
				if (isSelected) {
					$option.prop("selected", null);
					$item.removeClass(RawClasses.item_selected);
				} else {
					$option.prop("selected", true);
					$item.addClass(RawClasses.item_selected);
				}
			} else if (index > -1 && index < data.$items.length) {
				var label = $option.data("label") || $item.html();

				data.$selected.html(label)
							  .removeClass(Classes.item_placeholder);

				data.$items.filter(Classes.item_selected)
						   .removeClass(RawClasses.item_selected);

				data.$el[0].selectedIndex = index;

				$item.addClass(RawClasses.item_selected);
				data.index = index;
			} else if (data.label !== "") {
				data.$selected.html(data.label);
			}
		}
	}

	/**
	 * @method private
	 * @name scrollOptions
	 * @description Scrolls options wrapper to specific option.
	 * @param data [object] "Instance data"
	 */

	function scrollOptions(data) {
		var $selected = data.$items.eq(data.index),
			selectedOffset = (data.index >= 0 && !$selected.hasClass(Classes.item_placeholder)) ? $selected.position() : { left: 0, top: 0 };

		/*
		if ($.fn.scroller !== undefined) {
			data.$wrapper.scroller("scroll", (data.$wrapper.find(".scroller-content").scrollTop() + selectedOffset.top), 0)
							  .scroller("reset");
		} else {
		*/
			data.$wrapper.scrollTop( data.$wrapper.scrollTop() + selectedOffset.top );
		// }
	}

	/**
	 * @method private
	 * @name handleChange
	 * @description Handles change events.
	 * @param data [object] "Instance data"
	 */

	function handleChange(data) {
		if (data.links) {
			launchLink(data);
		} else {
			data.$el.trigger(Events.raw.change, [ true ]);
		}
	}

	/**
	 * @method private
	 * @name launchLink
	 * @description Launches link.
	 * @param data [object] "Instance data"
	 */

	function launchLink(data) {
		var url = data.$el.val();

		if (data.external) {
			// Open link in a new tab/window
			Window.open(url);
		} else {
			// Open link in same tab/window
			Window.location.href = url;
		}
	}

	/**
	 * @method private
	 * @name trimText
	 * @description Trims text, if specified length is greater then 0.
	 * @param length [int] "Length to trim at"
	 * @param text [string] "Text to trim"
	 * @return [string] "Trimmed string"
	 */

	function trimText(text, length) {
		if (length === 0) {
			return text;
		} else {
			if (text.length > length) {
				return text.substring(0, length) + "...";
			} else {
				return text;
			}
		}
	}

	/**
	 * @method private
	 * @name escapeText
	 * @description Escapes text.
	 * @param text [string] "Text to escape"
	 */

	function escapeText(text) {
		return (typeof text === "string") ? text.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1') : text;
	}

	/**
	 * @plugin
	 * @name Dropdown
	 * @description A jQuery plugin for custom select elements.
	 * @type widget
	 * @dependency core.js
	 * @dependency touch.js
	 */

	var Plugin = Formstone.Plugin("dropdown", {
			widget: true,

			/**
			 * @options
			 * @param cover [boolean] <false> "Cover handle with option set"
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param label [string] <''> "Label displayed before selection"
			 * @param external [boolean] <false> "Open options as links in new window"
			 * @param links [boolean] <false> "Open options as links in same window"
			 * @param mobile [boolean] <false> "Force desktop interaction on mobile"
			 * @param trim [int] <0> "Trim options to specified length; 0 to disable”
			 */
			defaults: {
				cover          : false,
				customClass    : "",
				label          : "",
				external       : false,
				links          : false,
				mobile         : false,
				trim           : 0
			},

			methods: {
				_setup        : setup,
				_construct    : construct,
				_destruct     : destruct,

				disable       : disableDropdown,
				enable        : enableDropdown,
				update        : updateDropdown,
				open          : openOptions,
				close         : closeOptions
			},

			classes: [
				"cover",
				"bottom",
				"multiple",
				"mobile",

				"open",
				"disabled",
				"focus",

				"selected",
				"options",
				"group",
				"item",

				"item_disabled",
				"item_selected",
				"item_placeholder"
			],

			events: {
				tap:   "tap",
				close: "close"
			}
		}),

		// Localize References

		Classes       = Plugin.classes,
		RawClasses    = Classes.raw,
		Events        = Plugin.events,
		Functions     = Plugin.functions,

		// Local

		GUID          = 0,
		Window        = Formstone.window,
		$Window       = Formstone.$window,
		Document      = Formstone.document,
		$Body         = null;

})(jQuery, Formstone);