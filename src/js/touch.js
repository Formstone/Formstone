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

		touchAction(this, "none");

		if (data.tap) {
			// Tap

			data.pan   = false;
			data.scale = false;

			this.on( Events.touchStart, data, onPointerStart)
				.on(Events.click, data, onClick);
		} else if (data.pan || data.scale) {
			// Pan / Scale

			data.tap = false;

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
		// Stop ms panning and zooming
		if (e.preventManipulation) {
			e.preventManipulation();
		}

		Functions.killEvent(e);

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
		e.stopPropagation();

		var data     = e.data,
			touch    = ($.type(e.originalEvent.touches) !== "undefined") ? e.originalEvent.touches[0] : null;

		data.startE     = e.originalEvent;
		data.startX     = (touch) ? touch.pageX : e.pageX;
		data.startY     = (touch) ? touch.pageY : e.pageY;
		data.scaleD     = 1;

		if (data.tap) {
			// Tap
			data.clicked = false;

			data.$el.on(Events.touchMove, data, onPointerMove)
					.on( [Events.touchEnd, Events.touchCancel].join(" ") , data, onPointerEnd);
		} else if (data.pan || data.scale) {
			// Pan / Scale

			Functions.killEvent(e);

			var newE = buildEvent(data.scale ? Events.scaleStart : Events.panStart, e, data.startX, data.startY, data.scaleD, 0, 0);

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

			if (data.pan) {
				$Window.on(Events.mouseMove, data, onPointerMove)
					   .on(Events.mouseUp, data, onPointerEnd);
			}

			$Window.on( [Events.touchMove, Events.touchEnd, Events.touchCancel, Events.pointerMove, Events.pointerUp, Events.pointerCancel].join(" ") , data, onTouch);

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
		var data      = e.data,
			touch     = ($.type(e.originalEvent.touches) !== "undefined") ? e.originalEvent.touches[0] : null,
			newX      = (touch) ? touch.pageX : e.pageX,
			newY      = (touch) ? touch.pageY : e.pageY,
			deltaX    = newX - data.startX,
			deltaY    = newY - data.startY;

		if (data.tap && (Math.abs(newX - data.startX) > 10 || Math.abs(newY - data.startY) > 10)) {
			// Tap

			data.$el.off( [Events.touchMove, Events.touchEnd, Events.touchCancel].join(" ") );
		} else if (data.pan || data.scale) {
			// Pan / Scale

			var fire    = true,
				newE    = buildEvent(data.scale ? Events.scale : Events.pan, e, newX, newY, data.scaleD, deltaX, deltaY);

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

			var touch     = ($.type(e.originalEvent.touches) !== "undefined") ? e.originalEvent.touches[0] : null,
				newX      = (touch) ? touch.pageX : e.pageX,
				newY      = (touch) ? touch.pageY : e.pageY,
				deltaX    = newX - data.startX,
				deltaY    = newY - data.startY,
				newE      = buildEvent(data.scale ? Events.scaleEnd : Events.panEnd, e, newX, newY, data.scaleD, deltaX, deltaY);

			$Window.off( [Events.touchMove, Events.touchEnd, Events.touchCancel, Events.mouseMove, Events.mouseUp, Events.pointerMove, Events.pointerUp, Events.pointerCancel].join(" ") );

			data.$el.trigger( newE );

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

	function buildEvent(type, oe, x, y, s, dx, dy) {
		return $.Event(type, {
			pageX     : x,
			pageY     : y,
			scale     : s,
			deltaX    : dx,
			deltaY    : dy,
			originalEvent: oe,
			bubbles: true
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
	 */

	var legacyPointer = !(Formstone.window.PointerEvent),
		Plugin = Formstone.Plugin("touch", {
			widget: true,

			/**
			 * @options
			 * @param pan [boolean || object] <false> "Object to enable"
			 * @param scale [boolean] <false> "True to enable"
			 * @param tap [boolean] <false> "True to enable"
			 */

			defaults : {
				pan      : false,
				scale    : false,
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

		$Window = Formstone.$window;

		/**
		 * @events
		 * @event tap ""
		 * @event panstart ""
		 * @event pan ""
		 * @event panend ""
		 * @event scalestart ""
		 * @event scale ""
		 * @event scaleend ""
		 */

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

### Events

Touch normalizes mouse and touch events in the context of a few basic gestures: `tap`, `pan` and `scale`. Events emitted by Touch will contain the following extra properties:

```
pageX		// Current X position
pageY		// Current Y position
deltaX		// Change in X position
deltaY		// Change in Y position
scale		// Current scale value
```

### Tap

Tap creates a basic 'fast click' event. This synthesizes the touch and click events allowing fast mobile UIs without interupting the user's scroll:

```
$(".tap-it").touch({
	tap: true
}).on("tap", function(e) {
	console.log("Tapped");
});
```

Note: `tap` can not be used in conjunction with `pan` or `scale`.

### Pan

Pan can be used for building touch-freindly drag and drop interfaces:

```
$(".pan-it").touch({
	pan: true
}).on("panstart", function(e) {
	console.log("Started panning");
}).on("pan", function(e) {
	console.log("Panning");
}).on("panend", function(e) {
	console.log("Stopped panning");
});
```

### Scale

Scale can be used for building touch-freindly scalable interfaces:

```
$(".scale-it").touch({
	scale: true
}).on("scalestart", function(e) {
	console.log("Started scaling");
}).on("scale", function(e) {
	console.log("Scaling");
}).on("scaleend", function(e) {
	console.log("Stopped scaling");
});
```

Note: `pan` and `scale` can also be used together to create a rich interface.

 */