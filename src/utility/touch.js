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
			// Tap

			data.pan = false;
			data.scale = false;

			this.on(Events.touchStart, data, onPointerStart)
				.on(Events.click, data, onClick);
		} else if (data.pan || data.scale) {
			// Pan / Scale

			data.tap      = false;

			this.on( [Events.touchStart].join(" "), data, onTouch);

			if (data.pan) {
				this.on( Events.mouseDown, data, onPointerStart);
			}
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
	 * @name onTouch
	 * @description Delegates touch events.
	 * @param e [object] "Event data"
	 */

	function onTouch(e) {

		// Stop ms panning and zooming
		if (e.preventManipulation) {
			e.preventManipulation();
		}

		e.preventDefault();
		e.stopPropagation();

		var data    = e.data,
			oe      = e.originalEvent;

		if (oe.type.match(/(up|end)$/i)) {
			onPointerEnd(e);
			return;
		}

		if (oe.pointerId) {
			// Normalize MS pointer events back to standard touches
			var activeTouch = false;
			for (var i in data.touches) {
				if (data.touches[i].identifier === oe.pointerId) {
					activeTouch = true;
					data.touches[i].pageX    = oe.clientX;
					data.touches[i].pageY    = oe.clientY;
				}
			}
			if (!activeTouch) {
				data.touches.push({
					identifier    : oe.pointerId,
					pageX         : oe.clientX,
					pageY         : oe.clientY
				});
			}
		} else {
			// Alias normal touches
			data.touches = oe.touches;
		}

		// Delegate touch actions
		if (oe.type.match(/(down|start)$/i)) {
			onPointerStart(e);
		} else if (oe.type.match(/move$/i)) {
			onPointerMove(e);
		}
	}

	/**
	 * @method private
	 * @name onPointerStart
	 * @description Handles pointer start.
	 * @param e [object] "Event data"
	 */

	function onPointerStart(e) {
		e.stopPropagation();

		var data     = e.data,
			touch    = (typeof e.originalEvent.touches !== "undefined") ? e.originalEvent.touches[0] : null;

		data.startE     = e.originalEvent;
		data.startX     = (touch) ? touch.pageX : e.pageX;
		data.startY     = (touch) ? touch.pageY : e.pageY;

		if (data.tap) {
			// Tap

			data.clicked    = false;

			data.$el.on(Events.touchMove, data, onPointerMove)
					.on( [Events.touchEnd, Events.touchCancel].join(" ") , data, onPointerEnd);
		} else if (data.pan || data.scale) {
			// Pan / Scale

			Functions.killEvent(e);

			var newE = buildEvent(data.scale ? Events.scaleStart : Events.panStart, e, data.startX, data.startY, 1);

			if (data.scale && data.touches && data.touches.length >= 2) {
				data.pinchStartX0    = data.touches[0].pageX;
				data.pinchStartY0    = data.touches[0].pageY;

				data.pinchStartX1    = data.touches[1].pageX;
				data.pinchStartY1    = data.touches[1].pageY;

				data.pinchStartX     = ((data.pinchStartX0 + data.pinchStartX1) / 2.0);
				data.pinchStartY     = ((data.pinchStartY0 + data.pinchStartY1) / 2.0);

				data.pinchDeltaStart = Math.sqrt(Math.pow((data.pinchStartX1 - data.pinchStartX0), 2) + Math.pow((data.pinchStartY1 - data.pinchStartY0), 2));

				newE.pageX    = data.pinchStartX;
				newE.pageY    = data.pinchStartY;
			}

			if (data.pan) {
				$Window.on(Events.mouseMove, data, onPointerMove)
					   .on(Events.mouseUp, data, onPointerEnd);
			}

			$Window.on( [Events.touchMove, Events.touchEnd, Events.touchCancel].join(" ") , data, onTouch);

			data.$el.trigger( newE );
		}
	}

	/**
	 * @method private
	 * @name onPointerMove
	 * @description Handles pointer move.
	 * @param e [object] "Event data"
	 */

	function onPointerMove(e) {
		var data     = e.data,
			touch    = (typeof e.originalEvent.touches !== "undefined") ? e.originalEvent.touches[0] : null,
			newX     = (touch) ? touch.pageX : e.pageX,
			newY     = (touch) ? touch.pageY : e.pageY;

		if (data.tap && (Math.abs(newX - data.startX) > 10 || Math.abs(newY - data.startY) > 10)) {
			// Tap

			data.$el.off( [Events.touchMove, Events.touchEnd, Events.touchCancel].join(" ") );
		} else if (data.pan || data.scale) {
			// Pan / Scale

			var fire    = true,
				newE    = buildEvent(data.scale ? Events.scale : Events.pan, e, newX, newY, 1);

			if (data.scale) {
				if (data.touches && data.touches.length >= 2) {
					data.pinchEndX0    = data.touches[0].pageX;
					data.pinchEndY0    = data.touches[0].pageY;

					data.pinchEndX1    = data.touches[1].pageX;
					data.pinchEndY1    = data.touches[1].pageY;

					data.pinchDeltaEnd = Math.sqrt(Math.pow((data.pinchEndX1 - data.pinchEndX0), 2) + Math.pow((data.pinchEndY1 - data.pinchEndY0), 2));
					data.scale         = (data.pinchDeltaEnd / data.pinchDeltaStart);

					data.pinchEndX     = ((data.pinchEndX0 + data.pinchEndX1) / 2.0);
					data.pinchEndY     = ((data.pinchEndY0 + data.pinchEndY1) / 2.0);

					newE.pageX    = data.pinchEndX;
					newE.pageY    = data.pinchEndY;
					newE.scale    = data.scale;
				} else if (!data.pan) {
					fire = false;
				}
			}

			if (fire) {
				data.$el.trigger( newE );
			}
		}
	}

	/**
	 * @method private
	 * @name onPointerEnd
	 * @description Handles pointer end / cancel.
	 * @param e [object] "Event data"
	 */

	function onPointerEnd(e) {
		var data = e.data;

		if (data.tap) {
			// Tap

			data.$el.off( [Events.touchMove, Events.touchEnd, Events.touchCancel, Events.mouseMove, Events.mouseUp].join(" ") );

			data.startE.preventDefault();

			onClick(e);
		} else if (data.pan || data.scale) {
			// Pan / Scale

			var touch    = (typeof e.originalEvent.touches !== "undefined") ? e.originalEvent.touches[0] : null,
				newX     = (touch) ? touch.pageX : e.pageX,
				newY     = (touch) ? touch.pageY : e.pageY,
				newE     = buildEvent(data.scale ? Events.scaleEnd : Events.panEnd, e, newX, newY, 1);

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

			$Window.off( [Events.touchMove, Events.touchEnd, Events.touchCancel, Events.mouseMove, Events.mouseUp].join(" ") );

			data.$el.trigger( newE );
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

			var newX    = (data.startE) ? data.startX : e.pageX,
				newY    = (data.startE) ? data.startY : e.pageY,
				newE    = buildEvent(Events.tap, data.oe, newX, newY, 1);

			data.$el.trigger( newE );
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

	function buildEvent(type, oe, x, y, s) {
		return $.Event(type, {
			pageX: x,
			pageY: y,
			scale: s,
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
			widget :  true,
			classes : false,

			/**
			 * @options
			 * @param pan [boolean || object] <false> "Object to enable"
			 * @param swipe [boolean || object] <false> "Object to enable"
			 * @param swipe.direction [string] <"all"> "'all', 'horizontal', 'vertical'"
			 * @param scale [boolean] <false> "True to enable"
			 * @param tap [boolean] <false> "True to enable"
			 */

			defaults : {
				pan      : false,
				swipe    : false,
				scale    : false,
				tap      : false
			},

			methods : {
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