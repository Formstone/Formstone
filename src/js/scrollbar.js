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
		$Instances = $(Classes.base);
	}

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		var html = '';

		html += '<div class="' + RawClasses.bar + '">';
		html += '<div class="' + RawClasses.track + '">';
		html += '<button type="button" class="' + RawClasses.handle + '"></button>';
		html += '</div></div>';

		data.paddingRight     = parseInt(this.css("padding-right"), 10);
		data.paddingBottom    = parseInt(this.css("padding-bottom"), 10);

		this.addClass( [RawClasses.base, data.customClass, (data.horizontal ? RawClasses.horizontal : "")].join(" ") )
			.wrapInner('<div class="' + RawClasses.content + '" />')
			.prepend(html);

		data.$content    = this.find(Classes.content);
		data.$bar        = this.find(Classes.bar);
		data.$track      = this.find(Classes.track);
		data.$handle     = this.find(Classes.handle);

		data.trackMargin = parseInt(data.trackMargin, 10);

		data.$content.on(Events.scroll, data, onScroll);

		this.on(Events.touchMouseDown, Classes.track, data, onTrackDown)
			.on(Events.touchMouseDown, Classes.handle, data, onHandleDown);

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
		data.$bar.remove();
		data.$content.off(Events.namespace)
					 .contents()
					 .unwrap();

		this.removeClass( [RawClasses.base, RawClasses.active, data.customClass].join(" ") )
			.off(Events.namespace);
	}

	/**
	 * @method
	 * @name scroll
	 * @description Scrolls instance of plugin to element or position
	 * @param position [string || int] <null> "Target element selector or static position"
	 * @param duration [int] <null> "Optional scroll duration"
	 * @example $(".target").scrollbar("scroll", position, duration);
	 */

	function scroll(data, position, dur) {
		var duration = dur || data.duration,
			styles = {};

		if ($.type(position) !== "number") {
			var $target = $(position);

			if ($target.length > 0) {
				var offset = $target.position();

				if (data.horizontal) {
					position = offset.left + data.$content.scrollLeft();
				} else {
					position = offset.top + data.$content.scrollTop();
				}
			} else {
				position = data.$content.scrollTop();
			}
		}

		styles[ (data.horizontal ? "scrollLeft" : "scrollTop") ] = position;

		data.$content.stop()
					 .animate(styles, duration);
	}

	/**
	 * @method
	 * @name resizeInstance
	 * @description Resizes layout on instance of plugin
	 * @example $(".target").scrollbar("resize");
	 */

	function resizeInstance(data)  {
		data.$el.addClass(RawClasses.isSetup);

		var barStyles = {},
			trackStyles = {},
			handleStyles = {},
			handlePosition = 0,
			active = true;

		if (data.horizontal) {
			// Horizontal
			data.barHeight       = data.$content[0].offsetHeight - data.$content[0].clientHeight;
			data.frameWidth      = data.$content.outerWidth();
			data.trackWidth      = data.frameWidth - (data.trackMargin * 2);
			data.scrollWidth     = data.$content[0].scrollWidth;
			data.ratio           = data.trackWidth / data.scrollWidth;
			data.trackRatio      = data.trackWidth / data.scrollWidth;
			data.handleWidth     = (data.handleSize > 0) ? data.handleSize : data.trackWidth * data.trackRatio;
			data.scrollRatio     = (data.scrollWidth - data.frameWidth) / (data.trackWidth - data.handleWidth);
			data.handleBounds    = {
				left: 0,
				right: data.trackWidth - data.handleWidth
			};

			data.$content.css({
				paddingBottom: data.barHeight + data.paddingBottom
			});

			var scrollLeft = data.$content.scrollLeft();

			handlePosition = scrollLeft * data.ratio;
			active = (data.scrollWidth <= data.frameWidth);

			barStyles = {
				width: data.frameWidth
			};

			trackStyles = {
				width: data.trackWidth,
				marginLeft: data.trackMargin,
				marginRight: data.trackMargin
			};

			handleStyles = {
				width: data.handleWidth
			};
		} else {
			// Vertical
			data.barWidth = data.$content[0].offsetWidth - data.$content[0].clientWidth;
			data.frameHeight = data.$content.outerHeight();
			data.trackHeight = data.frameHeight - (data.trackMargin * 2);
			data.scrollHeight = data.$content[0].scrollHeight;
			data.ratio = data.trackHeight / data.scrollHeight;
			data.trackRatio = data.trackHeight / data.scrollHeight;
			data.handleHeight = (data.handleSize > 0) ? data.handleSize : data.trackHeight * data.trackRatio;
			data.scrollRatio = (data.scrollHeight - data.frameHeight) / (data.trackHeight - data.handleHeight);
			data.handleBounds = {
				top: 0,
				bottom: data.trackHeight - data.handleHeight
			};

			var scrollTop = data.$content.scrollTop();

			handlePosition = scrollTop * data.ratio;
			active = (data.scrollHeight <= data.frameHeight);

			barStyles = {
				height: data.frameHeight
			};

			trackStyles = {
				height: data.trackHeight,
				marginBottom: data.trackMargin,
				marginTop: data.trackMargin
			};

			handleStyles = {
				height: data.handleHeight
			};
		}

		// Updates

		if (active) {
			data.$el.removeClass(RawClasses.active);
		} else {
			data.$el.addClass(RawClasses.active);
		}

		data.$bar.css(barStyles);
		data.$track.css(trackStyles);
		data.$handle.css(handleStyles);

		positionContent(data, handlePosition);

		data.$el.removeClass(RawClasses.setup);
	}

	/**
	 * @method private
	 * @name onScroll
	 * @description Handles scroll event
	 * @param e [object] "Event data"
	 */

	function onScroll(e) {
		Functions.killEvent(e);

		var data = e.data,
			handleStyles = {};

		if (data.horizontal) {
			// Horizontal
			var scrollLeft = data.$content.scrollLeft();

			if (scrollLeft < 0) {
				scrollLeft = 0;
			}

			data.handleLeft = scrollLeft / data.scrollRatio;

			if (data.handleLeft > data.handleBounds.right) {
				data.handleLeft = data.handleBounds.right;
			}

			handleStyles = {
				left: data.handleLeft
			};
		} else {
			// Vertical
			var scrollTop = data.$content.scrollTop();

			if (scrollTop < 0) {
				scrollTop = 0;
			}

			data.handleTop = scrollTop / data.scrollRatio;

			if (data.handleTop > data.handleBounds.bottom) {
				data.handleTop = data.handleBounds.bottom;
			}

			handleStyles = {
				top: data.handleTop
			};
		}

		data.$handle.css(handleStyles);
	}

	/**
	 * @method private
	 * @name getPointer
	 * @description Normalizes touch and mouse events
	 * @param e [object] "Event data"
	 * @return [object] "Pointer poisition data"
	 */

	function getPointer(e) {
		var oe = e.originalEvent,
			touch = ($.type(oe.targetTouches) !== "undefined") ? oe.targetTouches[0] : null;

		return {
			pageX: (touch) ? touch.pageX : e.clientX,
			pageY: (touch) ? touch.pageY : e.clientY
		};
	}

	/**
	 * @method private
	 * @name onTrackDown
	 * @description Handles mousedown/touchstart event on track
	 * @param e [object] "Event data"
	 */

	function onTrackDown(e) {
		Functions.killEvent(e);

		var data       = e.data,
			pointer    = getPointer(e),
			offset     = data.$track.offset();

		if (data.horizontal) {
			// Horizontal
			data.pointerStart = pointer.pageX;
			data.handleLeft = pointer.pageX - offset.left + $Window.scrollLeft() - (data.handleWidth / 2);

			positionContent(data, data.handleLeft);
		} else {
			// Vertical
			data.pointerStart = pointer.pageY;
			data.handleTop = pointer.pageY - offset.top + $Window.scrollTop() - (data.handleHeight / 2);

			positionContent(data, data.handleTop);
		}

		onPointerStart(data);
	}

	/**
	 * @method private
	 * @name onHandleDown
	 * @description Handles mousedown/touchstart event on handle
	 * @param e [object] "Event data"
	 */

	function onHandleDown(e) {
		Functions.killEvent(e);

		var data       = e.data,
			pointer    = getPointer(e);

		if (data.horizontal) {
			// Horizontal
			data.pointerStart = pointer.pageX;
			data.handleLeft = parseInt(data.$handle.css("left"), 10);
		} else {
			// Vertical
			data.pointerStart = pointer.pageY;
			data.handleTop = parseInt(data.$handle.css("top"), 10);
		}

		onPointerStart(data);
	}

	/**
	 * @method private
	 * @name onStart
	 * @description Handles mousedown/touchstart event
	 * @param data [object] "Instance data"
	 */

	function onPointerStart(data) {
		data.$content.off(Events.namespace);

		$Body.on(Events.touchMouseMove, data, onPointerMove)
			 .on(Events.touchMouseUp, data, onPointerEnd);
	}

	/**
	 * @method private
	 * @name onPointerMove
	 * @description Handles mousemove/touchmove event
	 * @param e [object] "Event data"
	 */

	function onPointerMove(e) {
		Functions.killEvent(e);

		var data        = e.data,
			pointer     = getPointer(e),
			position    = 0;

		if (data.horizontal) {
			// Horizontal
			position = data.handleLeft - (data.pointerStart - pointer.pageX);
		} else {
			// Vertical
			position = data.handleTop - (data.pointerStart - pointer.pageY);
		}

		positionContent(data, position);
	}

	/**
	 * @method private
	 * @name onPointerEnd
	 * @description Handles mouseup/touchend event
	 * @param e [object] "Event data"
	 */

	function onPointerEnd(e) {
		Functions.killEvent(e);

		e.data.$content.on(Events.scroll, e.data, onScroll);
		$Body.off(Events.namespace);
	}

	/**
	 * @method private
	 * @name position
	 * @description Position handle based on scroll
	 * @param data [object] "Instance data"
	 * @param position [int] "Scroll position"
	 */

	function positionContent(data, position) {
		var handleStyles = {};

		if (data.horizontal) {
			// Horizontal
			if (position < data.handleBounds.left) {
				position = data.handleBounds.left;
			}

			if (position > data.handleBounds.right) {
				position = data.handleBounds.right;
			}

			handleStyles = {
				left: position
			};

			data.$content.scrollLeft(Math.round(position * data.scrollRatio));
		} else {
			// Vertical
			if (position < data.handleBounds.top) {
				position = data.handleBounds.top;
			}

			if (position > data.handleBounds.bottom) {
				position = data.handleBounds.bottom;
			}

			handleStyles = {
				top: position
			};

			data.$content.scrollTop(Math.round(position * data.scrollRatio));
		}

		data.$handle.css(handleStyles);
	}

	/**
	 * @plugin
	 * @name Scrollbar
	 * @description A jQuery plugin for .
	 * @type widget
	 * @dependency core.js
	 */

	var Plugin = Formstone.Plugin("scrollbar", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param duration [int] <0> "Scroll animation length"
			 * @param handleSize [int] <0> "Handle size; 0 to auto size"
			 * @param horizontal [boolean] <false> "Scroll horizontally"
			 * @param trackMargin [int] <0> "Margin between track and handle edge”
			 */

			defaults: {
				customClass: "",
				duration: 0,
				handleSize: 0,
				horizontal: false,
				trackMargin: 0
			},

			classes: [
				"content",
				"bar",
				"track",
				"handle",
				"horizontal",
				"setup",
				"active"
			],

			methods: {
				_setup        : setup,
				_construct    : construct,
				_destruct     : destruct,
				_resize       : resize,

				// Public Methods
				scroll        : scroll,
				resize        : resizeInstance
			}
		}),

		// Localize References

		Classes        = Plugin.classes,
		RawClasses     = Classes.raw,
		Events         = Plugin.events,
		Functions      = Plugin.functions,

		$Body,
		$Window        = Formstone.$window,
		$Instances     = [];

		Events.touchMouseDown    = [Events.touchStart, Events.mouseDown].join(" ");
		Events.touchMouseMove    = [Events.touchMove,  Events.mouseMove].join(" ");
		Events.touchMouseUp      = [Events.touchEnd,   Events.mouseUp].join(" ");

})(jQuery, Formstone);