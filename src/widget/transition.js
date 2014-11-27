;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance Data"
	 * @param opions [object] "Instance options"
	 */

	function construct(data) {
		// Target child element, for delegation

		data.$target = data.$el.find(data.target);

		if (Formstone.support.transition) {
			// If supported

			this.on(Events.transitionEnd, data, onTranistionEnd);
		} else {
			// Otherwise, resolve

			resolve(data);
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
	 * @name onTransitionEnd
	 * @description Handles transition end events.
	 * @param e [object] "Event data"
	 */

	function onTranistionEnd(e) {
		e.stopPropagation();
		e.preventDefault();

		var data           = e.data,
			oe             = e.originalEvent,
			checkProp      = (!data.property || (oe && oe.propertyName === data.property)),
			checkTarget    = (!data.target || (oe && $(oe.target).is(data.$target))),
			checkEl        = (checkTarget || (!data.target && oe && $(oe.target).is(data.$el)));

		// Check property and target

		if ( checkProp && checkTarget && checkEl ) {
			resolve(data);
		}
	}

	/**
	 * @method private
	 * @name resolve
	 * @description Resolves transition end events.
	 * @param e [object] "Event data"
	 */

	function resolve(data) {
		if (!data.always) {
			// Unbind events, similiar to .one()

			data.$el.off(Events.transitionEnd)[Plugin.namespace]("destroy"); // clean up old data?
		}

		// fire callback

		data.complete.apply(data.$el);
	}

	/**
	 * @plugin
	 * @name Transition
	 * @description A jQuery plugin for CSS transition events.
	 * @type widget
	 */

	var Plugin = Formstone.Plugin("transition", {
			widget: true,

			/**
			 * @options
			 * @param always [boolean] <False> "Flag to always react to transition end (.on vs .one)"
			 * @param complete [function] <$.noop> "Callback function"
			 * @param property [string] <null> "Property to react to"
			 * @param target [string] <null> "Target child selector"
			 */

			defaults: {
				always      : false,
				complete    : $.noop,
				property    : null,
				target      : null
			},

			methods : {
				_construct    : construct,
				_destruct     : destruct,
				resolve       : resolve
			}
		}),

		// Localize References

		Events        = Plugin.events,
		Functions     = Plugin.functions,

		// Local

		$Window = Formstone.$window;

})(jQuery, Formstone);

/*
 * @use



 */