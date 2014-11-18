;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		data.touches = [];

		if (data.tap) {
			this.on(Events.touchStart, data, onPointerStart)
				.on(Events.click, data, onClick);
		}

		if (data.pan) {
			this.on( [Events.touchStart, Events.mouseDown].join(" "), data, onPointerStart);
		}

		if (data.scale) {
			this.on( [Events.touchStart].join(" "), data, onPointerStart);
		}
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		this.off(Events.namespace);
	}

	/**
	 * @method private
	 * @name onPointerStart
	 * @description Handles touchstart.
	 * @param e [object] "Event data"
	 */

	function onPointerStart(e) {
		e.stopPropagation();

		var data     = e.data,
			touch    = (typeof e.originalEvent.touches !== "undefined") ? e.originalEvent.touches[0] : null;

		data.clicked    = false;
		data.startE     = e.originalEvent;
		data.startX     = (touch) ? touch.pageX : e.pageX;
		data.startY     = (touch) ? touch.pageY : e.pageY;

		if (data.tap) {
			data.$el.on(Events.touchMove, data, onPointerMove)
					.on( [Events.touchEnd, Events.touchCancel].join(" ") , data, onPointerEnd);
		}

		if (data.pan) {
			Functions.killEvent(e);

			$Window.on( [Events.touchMove, Events.mouseMove].join(" "), data, onPointerMove)
				   .on( [Events.touchEnd, Events.touchCancel, Events.mouseUp].join(" ") , data, onPointerEnd);

			data.$el.trigger( buildEvent(Events.panStart, e, data.startX, data.startY) );
		}

		if (data.scale) {
			if (e.originalEvent.pointerId) {
				// Normalize MS pointer events back to standard touches
				var activeTouch = false;
				for (var i in data.touches) {
					if (data.touches[i].id === e.originalEvent.pointerId) {
						activeTouch = true;
						data.touches[i].pageX = data.startE.pageX;
						data.touches[i].pageY = data.startE.pageY;
					}
				}
				if (!activeTouch) {
					data.touches.push({
						id: data.startE.pointerId,
						pageX: data.startE.pageX,
						pageY: data.startE.pageY
					});
				}
			} else {
				// Alias normal touches
				data.touches = e.originalEvent.touches;
			}

			if (data.touches.length >= 2) {
				data.pinchStartX0 = data.touches[0].pageX;
				data.pinchStartY0 = data.touches[0].pageY;

				data.pinchStartX1 = data.touches[1].pageX;
				data.pinchStartY1 = data.touches[1].pageY;

				data.pinchStartX = ((data.pinchStartX0 + data.pinchStartX1) / 2.0);
				data.pinchStartY = ((data.pinchStartY0 + data.pinchStartY1) / 2.0);

				data.pinchDeltaStart = Math.sqrt(Math.pow((data.pinchStartX1 - data.pinchStartX0), 2) + Math.pow((data.pinchStartY1 - data.pinchStartY0), 2));

				data.$el.on(Events.touchMove, data, onPointerMove)
						.on( [Events.touchEnd, Events.touchCancel].join(" ") , data, onPointerEnd);

				var _e = $.Event(Events.scaleStart, {
					pageX: data.pinchStartX,
					pageY: data.pinchStartY,
					originalEvent: data.startE
				});
				data.$el.trigger( _e );
			}
		}
	}

	/**
	 * @method private
	 * @name onPointerMove
	 * @description Handles touchmove.
	 * @param e [object] "Event data"
	 */

	function onPointerMove(e) {
		var data     = e.data,
			touch    = (typeof e.originalEvent.touches !== "undefined") ? e.originalEvent.touches[0] : null,
			newX     = (touch) ? touch.pageX : e.pageX,
			newY     = (touch) ? touch.pageY : e.pageY;

		if (data.tap && (Math.abs(newX - data.startX) > 10 || Math.abs(newY - data.startY) > 10)) {
			data.$el.off( [Events.touchMove, Events.touchEnd, Events.touchCancel].join(" ") );
		}

		if (data.pan) {
			data.$el.trigger( buildEvent(Events.pan, e, newX, newY) );
		}

		if (data.scale) {
			data.pinchEndX0 = data.touches[0].pageX;
			data.pinchEndY0 = data.touches[0].pageY;

			data.pinchEndX1 = data.touches[1].pageX;
			data.pinchEndY1 = data.touches[1].pageY;

			data.pinchDeltaEnd  = Math.sqrt(Math.pow((data.pinchEndX1 - data.pinchEndX0), 2) + Math.pow((data.pinchEndY1 - data.pinchEndY0), 2));
			data.scale = (data.pinchDeltaEnd / data.pinchDeltaStart);

			data.pinchEndX = ((data.pinchEndX0 + data.pinchEndX1) / 2.0);
			data.pinchEndY = ((data.pinchEndY0 + data.pinchEndY1) / 2.0);

			var _e = $.Event(Events.scale, {
				pageX: data.pinchEndX,
				pageY: data.pinchEndY,
				scale: data.scale,
				originalEvent: data.startE
			});
			data.$el.trigger( _e );
		}
	}

	/**
	 * @method private
	 * @name onPointerEnd
	 * @description Handles touchend / touchcancel.
	 * @param e [object] "Event data"
	 */

	function onPointerEnd(e) {
		var data = e.data;

		if (data.tap) {
			data.$el.off( [Events.touchMove, Events.touchEnd, Events.touchCancel, Events.mouseMove, Events.mouseUp].join(" ") );

			data.startE.preventDefault();

			onClick(e);
		}

		if (data.pan) {
			var touch    = (typeof e.originalEvent.touches !== "undefined") ? e.originalEvent.touches[0] : null,
				newX     = (touch) ? touch.pageX : e.pageX,
				newY     = (touch) ? touch.pageY : e.pageY;

			$Window.off( [Events.touchMove, Events.touchEnd, Events.touchCancel, Events.mouseMove, Events.mouseUp].join(" ") );

			data.$el.trigger( buildEvent(Events.panEnd, e, data.startX, data.startY) );
		}

		if (data.scale) {
			if (e.originalEvent.pointerId) {
				for (var i in data.touches) {
					if (data.touches[i].id === e.originalEvent.pointerId) {
						data.touches.splice(i, 1);
					}
				}
			} else {
				data.touches = e.originalEvent.touches;
			}
		}
	}

	/**
	 * @method private
	 * @name onClick
	 * @description Handles click.
	 * @param e [object] "Event data"
	 */

	function onClick(e) {
		Functions.killEvent(e);

		var data = e.data;

		if (!data.clicked) {
			if (e.type !== "click") {
				data.clicked = true;
			}

			var newX = (data.startE) ? data.startX : e.pageX,
				newY = (data.startE) ? data.startY : e.pageY;

			data.$el.trigger( buildEvent(Events.tap, data.oe, newX, newY) );
		}
	}

	/**
	 * @method private
	 * @name buildEvents
	 * @description Builds new event.
	 * @param type [type] "Event type"
	 * @param oe [object] "Original event"
	 * @param x [int] "X value"
	 * @param y [int] "Y value"
	 */

	function buildEvent(type, oe, x, y) {
		return $.Event(type, {
			pageX: x,
			pageY: y,
			originalEvent: oe
		});
	}


	/**
	 * @plugin
	 * @name Touch
	 * @description A jQuery plugin for simple tooltips.
	 * @type widget
	 */

	var Plugin = Formstone.Plugin("touch", {
			widget: true,

			/**
			 * @options
			 * @param pan [boolean || object] <false> "Object to enable"
			 * @param swipe [boolean || object] <false> "Object to enable"
			 * @param swipe.direction [string] <"all"> "'all', 'horizontal', 'vertical'"
			 * @param scale [boolean] <false> "True to enable"
			 * @param tap [boolean] <false> "True to enable"
			 */

			defaults: {
				pan      : false,
				swipe    : false,
				scale    : false,
				tap      : false
			},

			methods: {
				_construct    : construct,
				_destruct     : destruct
			}
		}),

		// Localize References

		Events        = Plugin.events,
		Functions     = Plugin.functions,

		// Local

		$Window = Formstone.$window;

		// Custom Events

		Events.tap           = "tap";
		Events.pan           = "pan";
		Events.panStart      = "panstart";
		Events.panEnd        = "panend";
		Events.scale         = "scale";
		Events.scaleStart    = "scalestart";
		Events.scaleEnd      = "scaleend";

})(jQuery, Formstone);

/*
 * @use



 */