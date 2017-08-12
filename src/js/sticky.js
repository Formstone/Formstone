/* global define */

(function(factory) {
	if (typeof define === "function" && define.amd) {
		define([
			"jquery",
			"./core",
		], factory);
	} else {
		factory(jQuery, Formstone);
	}
}(function($, Formstone) {

	"use strict";

	/**
	 * @method private
	 * @name resize
	 * @description Handles window resize
	 */

	function resize() {
		Functions.iterate.call($Instances, resizeInstance);
	}

	/**
	 * @method private
	 * @name raf
	 * @description Handles request animation frame
	 */

	function raf() {
        ScrollTop = $Window.scrollTop();

		if (ScrollTop < 0) {
			ScrollTop = 0;
		}

		if (ScrollTop !== OldScrollTop) {
			renderRAF();

			OldScrollTop = ScrollTop;
		}
	}

	/**
	 * @method private
	 * @name cacheInstances
	 * @description Caches active instances
	 */

	function cacheInstances() {
		$Instances = $(Classes.base);

        resize();
	}

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		data.stuck    = false;
		data.passed   = true;
		data.props    = {};
		data.position = data.$el.position();
		data.$clone   = data.$el.clone();

		data.container  = data.$el.data("sticky-container");
		data.$container = $(data.container);

		data.$el.addClass(RawClasses.base);
		data.$clone.removeClass(RawClasses.element)
				   .addClass(RawClasses.clone);
		data.$container.addClass(RawClasses.container);

		data.$stickys = $().add(data.$el).add(data.$clone);

		data.$el.after(data.$clone);
	}

	/**
	 * @method private
	 * @name postConstruct
	 * @description Run post build.
	 * @param data [object] "Instance data"
	 */

	function postConstruct(data) {
        cacheInstances();
        resize();
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		cacheInstances();
	}

	/**
	 * @method private
	 * @name renderRAF
	 * @description Updates DOM based on animation values
	 */

	function renderRAF() {
        Functions.iterate.call($Instances, checkInstance);
    }

	/**
	 * @method private
	 * @name resizeInstance
	 * @description Handle window resize event
	 * @param data [object] "Instance data"
	 */

	function resizeInstance(data) {
		cacheProps(data);

		if (data.$container.length) {
			var containerPos = data.$container.position();

			data.position  = containerPos;
			data.props.max = containerPos.top + data.$container.outerHeight() - data.props.height;
		} else {
            if (data.stuck) {
                data.position = data.$clone.position();
            } else {
                data.position = data.$el.position();
            }
			data.props.max = false;
		}

        checkInstance(data);
	}

	function cacheProps(data) {
		data.props.height = data.$clone.outerHeight();
		data.props.width  = data.$clone.outerWidth();
	}

	/**
	 * @method private
	 * @name checkInstance
	 * @description Handle window scroll event
	 * @param data [object] "Instance data"
	 */

	function checkInstance(data) {
		var check = (ScrollTop + data.offset);

		if ( check >= data.position.top ) {
			if (!data.stuck) {
				data.$el.trigger(Events.stuck);
			}

            data.stuck = true;
			data.$stickys.addClass(RawClasses.stuck);

            cacheProps(data);

			var top = data.offset;
			var bottom = '';

			if (data.props.max && check > data.props.max) {
				if (!data.passed) {
					data.$el.trigger(Events.passed);
				}

				data.passed = true;
				data.$stickys.addClass(RawClasses.passed);

				top = '';
				bottom = 0;
			} else {
				data.passed = false;
				data.$stickys.removeClass(RawClasses.passed);
			}

            data.$el.css({
                height: data.props.height,
				width:  data.props.width,
				top:    top,
				bottom: bottom
			});
		} else {
			if (data.stuck) {
				data.$el.trigger(Events.unstuck);
			}

			data.stuck = false;
            data.$stickys.removeClass(RawClasses.stuck).removeClass(RawClasses.passed);

			data.$el.css({
				height: '',
				width:  '',
				top:    '',
				bottom: ''
			});
		}
	}

	/**
	 * @plugin
	 * @name Sticky
	 * @description A jQuery plugin for sticky elements.
	 * @type widget
	 * @main sticky.js
	 * @dependency jQuery
	 * @dependency core.js
	 */

	var Plugin = Formstone.Plugin("sticky", {
			widget: true,

			/**
			 * @options
			 * @param offset [int] <0> "Element offset for activating sticky position"
			 */

			defaults: {
				offset    : 0,
			},

			classes: [
				"sticky",
				"stuck",
				"clone",
				"container",
				"passed"
			],

			/**
			 * @events
			 * @event passed.sticky "Element passed"
			 * @event stuck.sticky "Element stuck"
			 * @event unstuck.sticky "Element unstuck"
			 */

			events: {
				passed     : "passed",
				stuck      : "stuck",
				unstuck    : "unstuck"
			},

			methods: {
				_construct    : construct,
				_postConstruct: postConstruct,
				_destruct     : destruct,
				_resize       : resize,
				_raf          : raf
			}
		}),

		// Localize References

		Namespace     = Plugin.namespace,
		Classes       = Plugin.classes,
		RawClasses    = Classes.raw,
        Events        = Plugin.events,
		Functions     = Plugin.functions,

		Window        = Formstone.window,
		$Window       = Formstone.$window,
		$Body,
		ScrollTop     = 0,
		OldScrollTop  = 0,
		$Instances    = [];

})

);
