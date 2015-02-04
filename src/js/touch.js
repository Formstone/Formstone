;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		data.touches     = [];
		data.touching    = false;

		if (data.tap) {
			// Tap

			data.pan   = false;
			data.scale = false;
			data.swipe = false;

			this.on( [Events.touchStart, Events.pointerDown].join(" "), data, onPointerStart)
				.on(Events.click, data, onClick);
		} else if (data.pan || data.swipe || data.scale) {
			// Pan / Swipe / Scale

			data.tap = false;

			if (data.swipe) {
				data.pan = true;
			}

			if (data.scale) {
				data.axis = false;
			}

			if (data.axis) {
				data.axisX = data.axis === "x";
				data.axisY = data.axis === "y";

				touchAction(this, "pan-" + (data.axisY ? "y" : "x"));
			} else {
				touchAction(this, "none");
			}

			this.on( [Events.touchStart, Events.pointerDown].join(" "), data, onTouch);

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
		touchAction(this.off(Events.namespace), "");
	}

	/**
	 * @method private
	 * @name onTouch
	 * @description Delegates touch events.
	 * @param e [object] "Event data"
	 */

	function onTouch(e) {
		// Stop panning and zooming
		if (e.preventManipulation) {
			e.preventManipulation();
		}

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
				if (data.touches[i].id === oe.pointerId) {
					activeTouch = true;
					data.touches[i].pageX    = oe.clientX;
					data.touches[i].pageY    = oe.clientY;
				}
			}
			if (!activeTouch) {
				data.touches.push({
					id       : oe.pointerId,
					pageX    : oe.clientX,
					pageY    : oe.clientY
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
		var data     = e.data,
			touch    = ($.type(data.touches) !== "undefined") ? data.touches[0] : null;

		if (!data.touching) {
			data.startE      = e.originalEvent;
			data.startX      = (touch) ? touch.pageX : e.pageX;
			data.startY      = (touch) ? touch.pageY : e.pageY;
			data.startT      = new Date().getTime();
			data.scaleD      = 1;
			data.passed      = false;
		}

		if (data.tap) {
			// Tap

			data.clicked = false;

			data.$el.on( [Events.touchMove, Events.pointerMove].join(" "), data, onTouch)
					.on( [Events.touchEnd, Events.touchCancel, Events.pointerUp, Events.pointerCancel].join(" ") , data, onTouch);

		} else if (data.pan || data.scale) {
			// Clear old click events

			if (data.$links) {
				data.$links.off(Events.click);
			}

			// Pan / Scale

			var newE = buildEvent(data.scale ? Events.scaleStart : Events.panStart, e, data.startX, data.startY, data.scaleD, 0, 0, "", "");

			if (data.scale && data.touches && data.touches.length >= 2) {
				var t = data.touches;

				data.pinch = {
					startX     : midpoint(t[0].pageX, t[1].pageX),
					startY     : midpoint(t[0].pageY, t[1].pageY),
					startD     : pythagorus((t[1].pageX - t[0].pageX), (t[1].pageY - t[0].pageY))
				};

				newE.pageX    = data.startX   = data.pinch.startX;
				newE.pageY    = data.startY   = data.pinch.startY;
			}

			// Only bind at first touch
			if (!data.touching) {
				data.touching = true;

				if (data.pan) {
					$Window.on(Events.mouseMove, data, onPointerMove)
						   .on(Events.mouseUp, data, onPointerEnd);
				}

				$Window.on( [
					Events.touchMove,
					Events.touchEnd,
					Events.touchCancel,
					Events.pointerMove,
					Events.pointerUp,
					Events.pointerCancel
				].join(" ") , data, onTouch);

				data.$el.trigger(newE);
			}
		}
	}

	/**
	 * @method private
	 * @name onPointerMove
	 * @description Handles pointer move.
	 * @param e [object] "Event data"
	 */

	function onPointerMove(e) {
		var data      = e.data,
			touch     = ($.type(data.touches) !== "undefined") ? data.touches[0] : null,
			newX      = (touch) ? touch.pageX : e.pageX,
			newY      = (touch) ? touch.pageY : e.pageY,
			deltaX    = newX - data.startX,
			deltaY    = newY - data.startY,
			dirX      = (deltaX > 0) ? "right" : "left",
			dirY      = (deltaY > 0) ? "down"  : "up",
			movedX    = Math.abs(deltaX) > TouchThreshold,
			movedY    = Math.abs(deltaY) > TouchThreshold;

		if (data.tap) {
			// Tap

			if (movedX || movedY) {
				data.$el.off( [
					Events.touchMove,
					Events.touchEnd,
					Events.touchCancel,
					Events.pointerMove,
					Events.pointerUp,
					Events.pointerCancel
				].join(" ") );
			}
		} else if (data.pan || data.scale) {
			if (!data.passed && data.axis && ((data.axisX && movedY) || (data.axisY && movedX)) ) {
				// if axis and moved in opposite direction
				onPointerEnd(e);
			} else {
				if (!data.passed && (!data.axis || (data.axis && (data.axisX && movedX) || (data.axisY && movedY)))) {
					// if has axis and moved in same direction
					data.passed = true;

					// data.$el.one(Events.click, data, Functions.killEvent);
				}

				if (data.passed) {
					Functions.killEvent(e);
					Functions.killEvent(data.startE);
				}

				// Pan / Scale

				var fire    = true,
					newE    = buildEvent(data.scale ? Events.scale : Events.pan, e, newX, newY, data.scaleD, deltaX, deltaY, dirX, dirY);

				if (data.scale) {
					if (data.touches && data.touches.length >= 2) {
						var t = data.touches;

						data.pinch.endX     = midpoint(t[0].pageX, t[1].pageX);
						data.pinch.endY     = midpoint(t[0].pageY, t[1].pageY);
						data.pinch.endD     = pythagorus((t[1].pageX - t[0].pageX), (t[1].pageY - t[0].pageY));
						data.scaleD    = (data.pinch.endD / data.pinch.startD);

						newE.pageX     = data.pinch.endX;
						newE.pageY     = data.pinch.endY;
						newE.scale     = data.scaleD;
						newE.deltaX    = data.pinch.endX - data.pinch.startX;
						newE.deltaY    = data.pinch.endY - data.pinch.startY;
					} else if (!data.pan) {
						fire = false;
					}
				}

				if (fire) {
					data.$el.trigger( newE );
				}
			}
		}
	}

	function bindLink($link, data) {
		$link.on(Events.click, data, onLinkClick);

		// http://www.elijahmanor.com/how-to-access-jquerys-internal-data/
		var events = $._data($link[0], "events")["click"];
		events.unshift(events.pop());
	}

	function onLinkClick(e) {
		Functions.killEvent(e, true);
		e.data.$links.off(Events.click);
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

			data.$el.off( [
				Events.touchMove,
				Events.touchEnd,
				Events.touchCancel,
				Events.pointerMove,
				Events.pointerUp,
				Events.pointerCancel,
				Events.mouseMove,
				Events.mouseUp
			].join(" ") );

			data.startE.preventDefault();

			onClick(e);
		} else if (data.pan || data.scale) {

			// Pan / Swipe / Scale

			var touch     = ($.type(data.touches) !== "undefined") ? data.touches[0] : null,
				newX      = (touch) ? touch.pageX : e.pageX,
				newY      = (touch) ? touch.pageY : e.pageY,
				deltaX    = newX - data.startX,
				deltaY    = newY - data.startY,
				endT      = new Date().getTime(),
				eType     = data.scale ? Events.scaleEnd : Events.panEnd,
				dirX      = (deltaX > 0) ? "right" : "left",
				dirY      = (deltaY > 0) ? "down"  : "up",
				movedX    = Math.abs(deltaX) > 1,
				movedY    = Math.abs(deltaY) > 1;

			// Swipe

			if (data.swipe && Math.abs(deltaX) > TouchThreshold && (endT - data.startT) < TouchTime) {
				eType = Events.swipe;
			}

			// Kill clicks to internal links

			if ( (data.axis && ((data.axisX && movedY) || (data.axisY && movedX))) || (movedX || movedY) ) {
				data.$links = data.$el.find("a");

				for (var i = 0, count = data.$links.length; i < count; i++) {
					bindLink(data.$links.eq(i), data);
				}
			}

			var newE = buildEvent(eType, e, newX, newY, data.scaleD, deltaX, deltaY, dirX, dirY);

			$Window.off( [
				Events.touchMove,
				Events.touchEnd,
				Events.touchCancel,
				Events.mouseMove,
				Events.mouseUp,
				Events.pointerMove,
				Events.pointerUp,
				Events.pointerCancel
			].join(" ") );

			data.$el.trigger(newE);

			data.touches = [];

			if (data.scale) {
				/*
				if (e.originalEvent.pointerId) {
					for (var i in data.touches) {
						if (data.touches[i].id === e.originalEvent.pointerId) {
							data.touches.splice(i, 1);
						}
					}
				} else {
					data.touches = e.originalEvent.touches;
				}
				*/

				/*
				if (data.touches.length) {
					onPointerStart($.extend(e, {
						data: data,
						originalEvent: {
							touches: data.touches
						}
					}));
				}
				*/
			}
		}

		data.touching = false;
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
				newE    = buildEvent(Events.tap, e.originalEvent, newX, newY, 1, 0, 0);

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
	 * @param scale [float] "Scale value"
	 * @param dx [float] "Delta X value"
	 * @param dy [float] "Delta Y value"
	 */

	function buildEvent(type, oe, px, py, s, dx, dy, dirx, diry) {
		return $.Event(type, {
			originalEvent : oe,
			bubbles       : true,
			pageX         : px,
			pageY         : py,
			scale         : s,
			deltaX        : dx,
			deltaY        : dy,
			directionX    : dirx,
			directionY    : diry
		});
	}

	/**
	 * @method private
	 * @name midpoint
	 * @description Calculates midpoint.
	 * @param a [float] "Value 1"
	 * @param b [float] "Value 2"
	 */

	function midpoint(a, b) {
		return (a + b) / 2.0;
	}

	/**
	 * @method private
	 * @name pythagorus
	 * @description Pythagorean theorem.
	 * @param a [float] "Value 1"
	 * @param b [float] "Value 2"
	 */

	function pythagorus(a, b) {
		return Math.sqrt((a * a) + (b * b));
	}

	/**
	 * @method private
	 * @name touchAction
	 * @description Set ms touch action on target.
	 * @param action [string] "Touch action value"
	 */

	function touchAction($target, action) {
		$target.css({
			"-ms-touch-action": action,
			    "touch-action": action
		});
	}

	/**
	 * @plugin
	 * @name Touch
	 * @description A jQuery plugin for multi-touch events.
	 * @type widget
	 * @dependency core.js
	 */

	var legacyPointer = !(Formstone.window.PointerEvent),
		Plugin = Formstone.Plugin("touch", {
			widget: true,

			/**
			 * @options
			 * @param axis [string] <null> "Limit axis for pan and swipe; 'x' or 'y'"
			 * @param pan [boolean] <false> "Pan events"
			 * @param scale [boolean] <false> "Scale events"
			 * @param swipe [boolean] <false> "Swipe events"
			 * @param tap [boolean] <false> "'Fastclick' event"
			 */

			defaults : {
				axis     : false,
				pan      : false,
				scale    : false,
				swipe    : false,
				tap      : false
			},

			methods : {
				_construct    : construct,
				_destruct     : destruct
			},

			events: {
				pointerDown    : legacyPointer ? "MSPointerDown"   : "pointerdown",
				pointerUp      : legacyPointer ? "MSPointerUp"     : "pointerup",
				pointerMove    : legacyPointer ? "MSPointerMove"   : "pointermove",
				pointerCancel  : legacyPointer ? "MSPointerCancel" : "pointercancel"
			}
		}),

		// Localize References

		Events        = Plugin.events,
		Functions     = Plugin.functions,

		// Local

		$Window           = Formstone.$window,
		TouchThreshold    = 20,
		TouchTime         = 200;

		/**
		 * @events
		 * @event tap "'Fastclick' event; Prevents ghost clicks on mobile"
		 * @event panstart "Panning started"
		 * @event pan "Panning"
		 * @event panend "Panning ended"
		 * @event scalestart "Scaling started"
		 * @event scale "Scaling"
		 * @event scaleend "Scaling ended"
		 * @event swipe "Swipe"
		 */

		Events.tap           = "tap";
		Events.pan           = "pan";
		Events.panStart      = "panstart";
		Events.panEnd        = "panend";
		Events.scale         = "scale";
		Events.scaleStart    = "scalestart";
		Events.scaleEnd      = "scaleend";
		Events.swipe         = "swipe";

})(jQuery, Formstone);