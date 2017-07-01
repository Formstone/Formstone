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
	 * @name setup
	 * @description Setup plugin.
	 */

	function setup() {
		scroll();
		$Window.on("scroll", scroll);
		$Body = Formstone.$body;
	}

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
	 * @name scroll
	 * @description Handles window scroll
	 */

	function scroll() {
		ScrollTop = $Window.scrollTop(); // + Formstone.windowHeight;

		if (ScrollTop < 0) {
			ScrollTop = 0;
		}

		// Functions.iterate.call($Instances, checkInstance);
	}

	/**
	 * @method private
	 * @name raf
	 * @description Handles request animation frame
	 */

	function raf() {
		if (ScrollTop !== OldScrollTop) {
			Functions.iterate.call($Instances, renderRAF);

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

		cacheInstances();

		console.log(data);
	}

	/**
	 * @method private
	 * @name postConstruct
	 * @description Run post build.
	 * @param data [object] "Instance data"
	 */

	function postConstruct(data) {
		// // Media Query support
		// $.fsMediaquery("bind", data.rawGuid, data.mq, {
		// 	enter: function() {
		// 		mobileEnable.call(data.$el, data);
		// 	},
		// 	leave: function() {
		// 		mobileDisable.call(data.$el, data);
		// 	}
		// });
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		// $.fsMediaquery("unbind", data.rawGuid);

		cacheInstances();
	}

	/**
	 * @method private
	 * @name renderRAF
	 * @description Updates DOM based on animation values
	 * @param data [object] "Instance data"
	 */

	function renderRAF(data) {
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
			data.position  = data.$el.position();
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
				_setup        : setup,
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






// // Scroll Spy
//
// (function($) {
//
// 	var $Instances,
// 		  $SpyItems,
// 		  $SpyBlocks;
//
//   $(document).ready(function() {
//     init();
//   });
//
// 	function init() {
// 		$Instances = $(".js-scroll_lock").each(createInstance);
//
// 		$SpyItems  = $(".js-scroll_spy");
// 		$SpyBlocks = $SpyItems.map(function(){
// 			var id    = $(this)[0].hash,
// 				  $item = $(id);
//
// 			if (!$item.length) {
// 				$item = $("[name=" + id.replace("#", "") + "]");
// 			}
//
// 			if ($item.length) {
// 				return $item;
// 			}
// 		});
//
// 		$(window).on("scroll", scroll).on("resize", resize);
//
// 		scroll();
// 	}
//
// 	function scroll() {
// 		$Instances.each(checkInstance);
//
// 		// Spy
//
// 		var $current = [],
//         viewTop  = $(window).scrollTop() + ($(window).height() * 0.333);
//
// 		$SpyBlocks.each(function() {
// 			var $block = $(this);
//
// 			if (viewTop >= $block.offset().top) {
// 				$current = $block;
// 			}
// 		});
//
// 		$SpyItems.removeClass("js-active");
//
// 		if ($current.length) {
// 			$SpyItems.filter("[href*='#" + $current.attr("id") + "']").addClass("js-active");
// 		}
// 	}
//
// 	function resize() {
// 		$Instances.each(cacheInstance);
//
// 		scroll();
// 	}
//
// 	function createInstance() {
// 		var $target  = $(this),
// 			  $clone   = $target.clone(),
// 			  offset   = parseInt($target.data("scroll-offset"), 10),
// 			  position = $target.position();
//
// 		$target.addClass("js-scroll_ready");
// 		$clone.addClass("js-scroll_clone");
//
// 		$target.data("scroll", {
// 			$el:    $target,
// 			$clone: $clone,
// 			$locks: $().add($target).add($clone),
// 			locked: false,
// 			offset: offset,
// 			top:    position.top
// 		}).after($clone);
// 	}
//
// 	function cacheInstance() {
// 		var data = $(this).data("scroll"),
// 			position;
//
// 		if (data.locked) {
// 			position = data.$clone.position();
// 		} else {
// 			position = data.$el.position();
// 		}
//
// 		data.top = position.top;
// 	}
//
// 	function checkInstance() {
// 		var data = $(this).data("scroll");
//
// 		if (($(window).scrollTop() - data.top) > data.offset) {
// 			data.locked = true;
// 			data.$locks.addClass("js-scroll_locked");
// 		} else {
// 			data.locked = false;
// 			data.$locks.removeClass("js-scroll_locked");
// 		}
// 	}
//
// })(jQuery);
