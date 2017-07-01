/* global define */

(function(factory) {
	if (typeof define === "function" && define.amd) {
		define([
			"jquery",
			"./core",
			"./mediaquery",
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

		if (data.stuck) {
			data.$el.css({
				height: '',
				width:  '',
				top:    '',
				bottom: ''
			});
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

		if ( check > data.position.top ) {
			cacheProps(data);

			var top = data.offset;
			var bottom = '';

			data.stuck = true;
			data.$stickys.addClass(RawClasses.stuck);

			if (data.props.max && check > data.props.max) {
				data.$stickys.addClass(RawClasses.passed);

				top = '';
				bottom = 0;
			} else {
				data.$stickys.removeClass(RawClasses.passed);
			}

			data.$el.css({
				height: data.props.height,
				width:  data.props.width,
				top:    top,
				bottom: bottom
			});
		} else {
			data.stuck = false;
			data.$el.css({
				height: '',
				width:  '',
				top:    '',
				bottom: ''
			});
			data.$stickys.removeClass(RawClasses.stuck).removeClass(RawClasses.passed);
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
	 * @dependency mediaquery.js
	 */

	var Plugin = Formstone.Plugin("sticky", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param maxWidth [string] <Infinity> "Width at which to auto-disable plugin"
			 * @param mobileMaxWidth [string] <'740px'> "Width at which to auto-disable mobile styles"
			 * @param theme [string] <"fs-light"> "Theme class name"
			 */

			defaults: {
				customClass       : "",
				maxWidth          : Infinity,
				mobileMaxWidth    : "740px",
				theme             : "fs-light"
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
			 * @event update.sticky "Sticky activated"
			 */

			events: {
				update   : "update"
			},

			methods: {
				_construct    : construct,
				_postConstruct: postConstruct,
				_destruct     : destruct,
				_resize       : resize,
				_raf          : raf

				// Public Methods

				// activate      : activate,
				// enable        : enable,
				// disable       : disable
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
