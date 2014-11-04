;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name construct
	 */
	function construct(data) {
		this.on(events.mouseEnter, data, onMouseEnter);
	}

	/**
	 * @method private
	 * @name destruct
	 */
	function destruct(data) {
		removeTooltip();

		this.off(events.namespace);
	}

	/**
	 * @method private
	 * @name onMouseEnter
	 * @description Handles mouse enter event
	 * @param e [object] "Event data"
	 */
	function onMouseEnter(e) {
		removeTooltip();

		var data = e.data;

		data.left = e.pageX;
		data.top  = e.pageY;

		data.timer = functions.startTimer(data.timer, data.delay, function() {
			buildTooltip(data);
		});

		data.$el.one(events.mouseLeave, data, onMouseLeave);
	}

	/**
	 * @method private
	 * @name onMouseLeave
	 * @description Handles mouse leave event
	 * @param e [object] "Event data"
	 */
	function onMouseLeave(e) {
		var data = e.data;

		functions.clearTimer(data.timer);

		removeTooltip();
	}

	/**
	 * @method private
	 * @name onMouseLeave
	 * @description Handles mouse move event
	 * @param e [object] "Event data"
	 */
	function onMouseMove(e) {
		var data = e.data,
			position = {
				left: e.pageX,
				top: e.pageY
			};

		positionTooltip(position);
	}

	/**
	 * @method private
	 * @name buildTooltip
	 * @description Builds new tooltip instance
	 * @param data [object] "Instance data"
	 */
	function buildTooltip(data) {
		removeTooltip();

		var html = '';

		html += '<div class="';
		html += [classes.base, classes[data.direction] ].join(" ");
		html += '">';
		html += '<div class="' + classes.content + '">';
		html += data.formatter.call(data.$el, data);
		html += '<span class="' + classes.caret + '"></span>';
		html += '</div>';
		html += '</div>';

		Instance = {
			$tipper: $(html),
			$el: data.$el
		};

		Formstone.$body.append(Instance.$tipper);

		var $content = Instance.$tipper.find( functions.getClassName(classes.content) ),
			$caret   = Instance.$tipper.find( functions.getClassName(classes.caret) ),

			offset = data.$el.offset(),
			height = data.$el.outerHeight(),
			width  = data.$el.outerWidth(),

			tooltipLeft     = 0,
			tooltipTop      = 0,
			contentLeft     = 0,
			contentTop      = 0,
			caretLeft       = false,
			caretTop        = false,

			caretHeight     = $caret.outerHeight(true),
			caretWidth      = $caret.outerWidth(true),
			contentHeight   = $content.outerHeight(true),
			contentWidth    = $content.outerWidth(true);

		// position content
		if (data.direction === "right" || data.direction === "left") {
			caretTop = (contentHeight - caretHeight) / 2;
			contentTop = -contentHeight / 2;

			if (data.direction === "right") {
				contentLeft = data.margin;
			} else if (data.direction === "left") {
				contentLeft = -(contentWidth + data.margin);
			}
		} else {
			caretLeft = (contentWidth - caretWidth) / 2;
			contentLeft = -contentWidth / 2;

			if (data.direction === "bottom") {
				contentTop = data.margin;
			} else if (data.direction === "top") {
				contentTop = -(contentHeight + data.margin);
			}
		}

		// Modify Dom
		$content.css({
			top:  contentTop,
			left: contentLeft
		});

		$caret.css({
			top:  caretTop,
			left: caretLeft
		});

		// Position tipper
		if (data.follow) {
			data.$el.on(events.mouseMove, data, onMouseMove)
					.trigger(events.mouseMove);
		} else if (data.match) {
			if (data.direction === "right" || data.direction === "left") {
				tooltipTop = data.top; // mouse pos

				if (data.direction === "right") {
					tooltipLeft = offset.left + width;
				} else if (data.direction === "left") {
					tooltipLeft = offset.left;
				}
			} else {
				tooltipLeft = data.left; // mouse pos

				if (data.direction === "bottom") {
					tooltipTop = offset.top + height;
				} else if (data.direction === "top") {
					tooltipTop = offset.top;
				}
			}
		} else {
			if (data.direction === "right" || data.direction === "left") {
				tooltipTop = offset.top + (height / 2);

				if (data.direction === "right") {
					tooltipLeft = offset.left + width;
				} else if (data.direction === "left") {
					tooltipLeft = offset.left;
				}
			} else {
				tooltipLeft = offset.left + (width / 2);

				if (data.direction === "bottom") {
					tooltipTop = offset.top + height;
				} else if (data.direction === "top") {
					tooltipTop = offset.top;
				}
			}
		}

		Instance.$tipper.addClass(classes.visible);

		positionTooltip({
			top:  tooltipTop,
			left: tooltipLeft
		});
	}

	/**
	 * @method private
	 * @name positionTooltip
	 * @description Positions active tooltip instance
	 * @param position [object] "Position data"
	 */
	function positionTooltip(position) {
		if (Instance) {
			Instance.$tipper.css(position);
		}
	}

	/**
	 * @method private
	 * @name removeTooltip
	 * @description Removes active tooltip instance
	 */
	function removeTooltip() {
		if (Instance) {
			Instance.$el.off( [events.mouseMove, events.mouseLeave].join(" ") );

			Instance.$tipper.remove();
			Instance = null;
		}
	}

	/**
	 * @method private
	 * @name format
	 * @description Formats tooltip text
	 * @return [string] "Tooltip text"
	 */
	function format(data) {
		return this.data("title");
	}

	// Register Plugin

	var plugin = Formstone.Plugin("tipper", {
			widget: true,
			defaults: {
				delay        : 0,
				direction    : "top",
				follow       : false,
				formatter    : format,
				margin       : 15,
				match        : false
			},
			classes: [
				"content",
				"caret",
				"visible",
				"top",
				"bottom",
				"right",
				"left"
			],
			methods: {
				_construct: construct,
				_destruct: destruct
			}
		}),
		// Localize References
		classes      = plugin.classes,
		events       = plugin.events,
		methods      = plugin.methods,
		functions    = plugin.functions,
		// Singleton
		Instance     = null;

})(jQuery, Formstone);