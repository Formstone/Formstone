/* global define */

// TODO: load error

(function(factory) {
	if (typeof define === "function" && define.amd) {
		define([
			"jquery",
			"./core",
			"./transition"
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
		// scroll();
		// $Window.on("scroll", scroll);
	}

	/**
	 * @method private
	 * @name resize
	 * @description Handles window resize
	 */

	function resize() {
		// Functions.iterate.call($Instances, resizeInstance);
		// Functions.iterate.call($LazyInstances, cacheScrollPosition);
		// Functions.iterate.call($LazyInstances, checkScrollPosition);
	}

	/**
	 * @method private
	 * @name scroll
	 * @description Handles window scroll
	 */

	function scroll() {
		// ScrollTop = $Window.scrollTop() + Formstone.windowHeight;
		//
		// if (ScrollTop < 0) {
		// 	ScrollTop = 0;
		// }
		//
		// Functions.iterate.call($LazyInstances, checkScrollPosition);
	}

	/**
	 * @method private
	 * @name cacheInstances
	 * @description Caches active instances
	 */

	function cacheInstances() {
		$Instances     = $(Classes.base);
		// $LazyInstances = $(Classes.lazy);

		// Functions.iterate.call($LazyInstances, cacheScrollPosition);
	}

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		var $image,
			imageData,
			html = '';

		data = $.extend({}, data, {
			images             : [],
			source             : false,
			gallery            : false,
			isMobile           : Formstone.isMobile,
			isTouch            : Formstone.support.touch,
			isAnimating        : true,
			isZooming          : false,
			tapTimer           : null
		});

		data.doTouch = ( /* data.touch && */ data.isMobile && data.isTouch);

		data.margin = 0; // TODO
		data.margin *= 2;
		data.thisClasses = [RawClasses.base, RawClasses.animating, RawClasses.loading, data.customClass, data.theme];

		data.$images   = this.find("img").addClass(RawClasses.source);
		data.index     = 0;
		data.total     = data.$images.length - 1;

		if (data.$images.length > 1) {
			data.gallery = true;
		}

		for (var i = 0; i < data.$images.length; i++) {
			$image = data.$images.eq(i);
			data.images.push($image.attr("src"));
		}

		html += '<div class="' + RawClasses.wrapper + '">';
		html += '<div class="' + RawClasses.viewport + '"></div>';
		html += '<div class="' + RawClasses.controls + '">';
		html += '<button type="button" class="' + [RawClasses.control, RawClasses.zoom_out].join(" ") + '">' + data.labels.zoom_out + '</button>';
		html += '<button type="button" class="' + [RawClasses.control, RawClasses.zoom_in].join(" ") + '">' + data.labels.zoom_in + '</button>';
		if (data.gallery) {
			html += '<button type="button" class="' + [RawClasses.control, RawClasses.control_previous].join(" ") + '">' + data.labels.previous + '</button>';
			html += '<button type="button" class="' + [RawClasses.control, RawClasses.control_next].join(" ") + '">' + data.labels.next + '</button>';
		}
		html += '</div>'; // controls
		html += '</div>'; // wrapper

		this.addClass(data.thisClasses.join(" "))
			.prepend(html);

		data.$wrapper      = this.find(Classes.wrapper);
		data.$viewport     = this.find(Classes.viewport);
		data.$controlBox   = this.find(Classes.controls);
		data.$controls     = this.find(Classes.control);

		cacheInstances();
		resizeInstance(data);

		console.log(data.images);

		data.$controls.on(Events.click, [Classes.control_previous, Classes.control_next].join(", ") , data, advanceGallery);
					  // .on(Events.click, [Classes.zoom_out, Classes.zoom_in].join(", ") , data, zoomImage);

		// if (data.lazy) {
		// 	cacheScrollPosition(data);
		// 	checkScrollPosition(data);
		// } else {
			loadImage(data, data.images[ data.index ]);
		// }

		console.log(data);
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		// data.$container.remove();
		//
		// this.removeClass(data.thisClasses.join(" "))
		// 	.off(Events.namespace);

		// cacheInstances();
	}

	/**
	 * @method
	 * @name load
	 * @description Loads source image
	 * @param source [string OR array] "Source image (string) or array of images (array)"
	 * @example $(".target").viewer("load", "path/to/image.jpg");
	 * @example $(".target").viewer("load", ["path/to/image-1.jpg","path/to/image-2.jpg"]);
	 */

	/**
	 * @method private
	 * @name load
	 * @description Loads an image
	 * @param data [object] "Instance data"
	 * @param source [string OR object] "Source image (string) or video (object)"
	 * @param firstLoad [boolean] "Flag for first load"
	 */

	function load(data, source, firstLoad) {
		// // Check if the source is new
		// if (source !== data.source && data.visible) {
		// 	data.source        = source;
		//
		// 		loadImage(data, newSource, false, firstLoad);
		// 	}
		// } else {
		// 	data.$el.trigger(Events.loaded);
		// }
	}

	/**
	 * @method private
	 * @name loadImage
	 * @description Loads source image
	 * @param data [object] "Instance data",
	 * @param source [string] "Source image"
	 * @param firstLoad [boolean] "Flag for first load"
	 */

	function loadImage(data, source, firstLoad) {
		data.$container = $('<div class="' + RawClasses.container + '"><img></div>');
		data.$image = data.$container.find("img");

		// Load image
		data.$image.one(Events.load, function() {
			sizeImage(data);

			// Transition in
			data.$container.fsTransition({
				property: "opacity"
			},
			function() {
				console.log("loaded!");
			});

			if (data.doTouch) {
				data.$viewport.fsTouch({
					pan      : true,
					scale    : true
				}).on(Events.scaleStart, data, onScaleStart)
				  .on(Events.scaleEnd, data, onScaleEnd)
				  .on(Events.scale, data, onScale);
			}

			if (firstLoad) {
				data.$el.trigger(Events.loaded);
			}
		}) // .error(loadError)
		  .attr("src", source)
		  .addClass(RawClasses.image);

		data.$viewport.append(data.$container);

		// Check if image is cached
		if (data.$image[0].complete || data.$image[0].readyState === 4) {
			data.$image.trigger(Events.load);
		}

		data.source = source;
	}

	/**
	 * @method
	 * @name unload
	 * @description Unloads current image
	 * @example $(".target").viewer("unload");
	 */

	/**
	 * @method private
	 * @name unloadImage
	 * @description Unloads current image
	 * @param data [object] "Instance data"
	 */

	function unloadImage(data) {
		// var $media = data.$container.find(Classes.media);
		//
		// if ($media.length >= 1) {
		// 	$media.fsTransition({
		// 		property: "opacity"
		// 	},
		// 	function() {
		// 		$media.remove();
		// 		delete data.source;
		// 	}).css({ opacity: 0 });
		// }
	}

	/**
	 * @method private
	 * @name fitImage
	 * @description Calculates target image size.
	 */

	function sizeImage(data) {
		data.naturalSize = calculateNaturalSize(data.$image);

		var height = data.viewportHeight,
			width  = data.viewportWidth,
			nSize  = data.naturalSize;

		data.imageHeight = nSize.naturalHeight;
		data.imageWidth  = nSize.naturalWidth;

		data.ratioHorizontal = data.imageHeight / data.imageWidth;
		data.ratioVertical   = data.imageWidth  / data.imageHeight;
		data.isWide  = (data.imageWidth > data.imageHeight);

		if (data.isWide) {
			//WIDE
			data.targetImageWidth  = width;
			data.targetImageHeight = data.targetImageWidth * data.ratioHorizontal;

			if (data.targetImageHeight > height) {
				data.targetImageHeight = height;
				data.targetImageWidth  = data.targetImageHeight * data.ratioVertical;
			}
		} else {
			//TALL
			data.targetImageHeight = height;
			data.targetImageWidth  = data.targetImageHeight * data.ratioVertical;

			if (data.targetImageWidth > width) {
				data.targetImageWidth  = width;
				data.targetImageHeight = data.targetImageWidth * data.ratioHorizontal;
			}
		}

		// MAX
		if (data.targetImageWidth > data.imageWidth || data.targetImageHeight > data.imageHeight) {
			data.targetImageHeight = data.imageHeight;
			data.targetImageWidth  = data.imageWidth;
		}

		// MIN
		if (data.targetImageWidth < data.minWidth || data.targetImageHeight < data.minHeight) {
			if (data.targetImageWidth < data.minWidth) {
				data.targetImageWidth  = data.minWidth;
				data.targetImageHeight = data.targetImageWidth * data.ratioHorizontal;
			} else {
				data.targetImageHeight = data.minHeight;
				data.targetImageWidth  = data.targetImageHeight * data.ratioVertical;
			}
		}

		data.$container.css({
			top     : (data.viewportHeight / 2),
			left    : (data.viewportWidth  / 2)
		});

		data.$image.css({
			height    : data.targetImageHeight,
			width     : data.targetImageWidth,
			top       : -(data.targetImageHeight / 2),
			left      : -(data.targetImageWidth  / 2)
		});

		if (data.doTouch) {
			data.scaleMinHeight    = data.targetImageHeight;
			data.scaleMinWidth     = data.targetImageWidth;
			data.scaleMaxHeight    = data.imageHeight;
			data.scaleMaxWidth     = data.imageWidth;
		}
	}


	function advanceGallery() {

	}

	/**
	 * @method private
	 * @name resizeInstance
	 * @description Handle window resize event
	 * @param data [object] "Instance data"
	 */

	function resizeInstance(data) {
		console.log(data);

		data.viewportHeight    = data.$viewport.outerHeight();
		data.viewportWidth     = data.$viewport.outerWidth();

		if (data.source) {
			sizeImage(data);
		}
	}

	/**
	 * @method private
	 * @name resize
	 * @description Resize target instance
	 * @example $(".target").viewer("resize");
	 */

	/**
	 * @method private
	 * @name doResizeInstance
	 * @description Resize target instance
	 * @param data [object] "Instance data"
	 */

	function doResizeInstance(data) {
		// // Target all media
		// var $all = data.$container.find(Classes.media);
		//
		// for (var i = 0, count = $all.length; i < count; i++) {
		// 	var $m = $all.eq(i),
		// 		type = (data.isYouTube) ? "iframe" : ($m.find("video").length ? "video" : "img"),
		// 		$media = $m.find(type);
		//
		// 	// If media found and scaling is not natively support
		// 	if ($media.length && !(type === "img" && BGSupport)) {
		// 		var frameWidth     = data.$el.outerWidth(),
		// 			frameHeight    = data.$el.outerHeight(),
		// 			frameRatio     = frameWidth / frameHeight,
		// 			nSize          = naturalSize(data, $media);
		//
		// 		data.width     = nSize.width;
		// 		data.height    = nSize.height;
		// 		data.left      = 0;
		// 		data.top       = 0;
		//
		// 		var mediaRatio = (data.isYouTube) ? data.embedRatio : (data.width / data.height);
		//
		// 		// First check the height
		// 		data.height = frameHeight;
		// 		data.width = data.height * mediaRatio;
		//
		// 		// Next check the width
		// 		if (data.width < frameWidth) {
		// 			data.width     = frameWidth;
		// 			data.height    = data.width / mediaRatio;
		// 		}
		//
		// 		// Position the media
		// 		data.left    = -(data.width - frameWidth) / 2;
		// 		data.top     = -(data.height - frameHeight) / 2;
		//
		// 		$m.css({
		// 			height    : data.height,
		// 			width     : data.width,
		// 			left      : data.left,
		// 			top       : data.top
		// 		});
		// 	}
		// }
	}


	/**
	 * @method private
	 * @name clearTouch
	 * @description Clears current touch action.
	 */

	function clearTouch(data) {
		// if (data.$image && data.$image.length) {
		// 	data.$viewport.fsTouch("destroy")
		// 				  .off(Events.scaleStart, onScaleStart)
		// 				  .off(Events.scaleEnd, onScaleEnd)
		// 				  .off(Events.scale, onScale);
		// }
	}

	/**
	 * @method private
	 * @name onImageZoom
	 * @description Zooms image.
	 * @param e [object] "Event data"
	 */

	function onImageZoom(data) {
		if (data.$image && data.$image.length) {
			data.isZooming = true;

			data.$el.addClass(RawClasses.zooming)
					.removeClass(RawClasses.scaling);

			var direction = (data.targetImageHeight > data.scaleMinHeight + 1) ? "out" : "in";

			console.log(direction);

			if (direction === "out") {
				// We're zoomed in
				data.targetImageHeight = data.scaleMinHeight;
				data.targetImageWidth  = data.scaleMinWidth;
			} else {
				// We're zoomed out
				data.targetImageHeight = data.scaleMaxHeight;
				data.targetImageWidth  = data.scaleMaxWidth;
			}

			var conHeight = data.$viewport.outerHeight(),
				conWidth  = data.$viewport.outerWidth();

			data.scalePosition.top  = data.targetContainerY = (conHeight / 2);
			data.scalePosition.left = data.targetContainerX = (conWidth  / 2);

			data.$container.css({
				left: data.targetContainerX,
				top:  data.targetContainerY
			});

			data.$image.fsTransition({
				property: "top"
			}, function() {
				data.isZooming = false;
				data.$el.removeClass(RawClasses.zooming);
			}).css({
				height    : data.targetImageHeight,
				width     : data.targetImageWidth,
				top       : -(data.targetImageHeight / 2),
				left      : -(data.targetImageWidth  / 2)
			});

			console.log(data);
		}
	}

	/**
	 * @method private
	 * @name cacheScale
	 * @description Caches current scale settings.
	 */

	function cacheScale(data) {
		data.scalePosition = data.$container.position();

		data.scaleY = data.scalePosition.top;
		data.scaleX = data.scalePosition.left;

		data.scaleHeight = data.$image.outerHeight();
		data.scaleWidth  = data.$image.outerWidth();
	}

	/**
	 * @method private
	 * @name onScaleStart
	 * @description Handles scale start event.
	 * @param e [object] "Event data"
	 */

	function onScaleStart(e) {
		var data = e.data;

		if (!data.isZooming) {
			data.$el.removeClass(RawClasses.zooming)
					.addClass(RawClasses.scaling);

			cacheScale(data);
			checkDoubleTap(data);

			console.log(data.targetImageHeight, data.targetImageWidth);
		}
	}

	/**
	 * @method private
	 * @name onScale
	 * @description Handles scale event.
	 * @param e [object] "Event data"
	 */

	function onScale(e) {
		var data = e.data;

		if (!data.isZooming) {
			clearDoubleTap(data);

			var zoomed = (data.targetImageHeight > data.scaleMinHeight + 1);

			// if (!data.gallery || zoomed) {
				data.targetContainerY = data.scaleY + e.deltaY;
			// }
			data.targetContainerX = data.scaleX + e.deltaX;

			data.targetContainerY = data.scaleY;
			data.targetContainerX = data.scaleX;

			// if (zoomed) {
				data.targetContainerY += e.deltaY;
				data.targetContainerX += e.deltaX;
			// }

			data.targetImageHeight = data.scaleHeight * e.scale;
			data.targetImageWidth  = data.scaleWidth  * e.scale;

			if (data.targetImageHeight < data.scaleMinHeight) {
				data.targetImageHeight = data.scaleMinHeight;
			}
			if (data.targetImageHeight > data.scaleMaxHeight) {
				data.targetImageHeight = data.scaleMaxHeight;
			}

			if (data.targetImageWidth < data.scaleMinWidth) {
				data.targetImageWidth = data.scaleMinWidth;
			}
			if (data.targetImageWidth > data.scaleMaxWidth) {
				data.targetImageWidth = data.scaleMaxWidth;
			}

			data.hasScaled = true;

			data.$container.css({
				top:  data.targetContainerY,
				left: data.targetContainerX
			});

			var imageStyles = {
				height    : data.targetImageHeight,
				width     : data.targetImageWidth,
				left      : -(data.targetImageWidth  / 2)
			};

			// if (!data.gallery || zoomed) {
				imageStyles.top = -(data.targetImageHeight / 2);
			// }

			data.$image.css(imageStyles);
		}
	}

	/**
	 * @method private
	 * @name onScaleEnd
	 * @description Handles scale end event.
	 * @param e [object] "Event data"
	 */

	function onScaleEnd(e) {
		var data = e.data;

		if (!data.isZooming) {
			cacheScale(data);

			var conHeight = data.$viewport.outerHeight(),
				conWidth  = data.$viewport.outerWidth();

			data.scaleMinY    = conHeight - ( data.scaleHeight / 2 );
			data.scaleMinX    = conWidth  - ( data.scaleWidth  / 2 );
			data.scaleMaxY    = ( data.scaleHeight / 2 );
			data.scaleMaxX    = ( data.scaleWidth  / 2 );

			if (data.scaleHeight < conHeight) {
				data.scalePosition.top = conHeight / 2;
			} else {
				if (data.scalePosition.top < data.scaleMinY) {
					data.scalePosition.top = data.scaleMinY;
				}
				if (data.scalePosition.top > data.scaleMaxY) {
					data.scalePosition.top = data.scaleMaxY;
				}
			}

			if (data.scaleWidth < conWidth) {
				data.scalePosition.left = conWidth / 2;
			} else {
				if (data.scalePosition.left < data.scaleMinX) {
					data.scalePosition.left = data.scaleMinX;
				}
				if (data.scalePosition.left > data.scaleMaxX) {
					data.scalePosition.left = data.scaleMaxX;
				}
			}

			data.$el.removeClass(RawClasses.scaling);

			data.$container.css({
				left: data.scalePosition.left,
				top:  data.scalePosition.top
			});
		}
	}

	/**
	 * @method private
	 * @name checkDoubleTap
	 * @description Check double tap action.
	 */

	function checkDoubleTap(data) {
		if (data.tapTimer === null) {
		 	data.tapTimer = Functions.startTimer(data.tapTimer, 500, function() {
		 		clearDoubleTap(data);
		 	});
		} else {
			clearDoubleTap(data);
			onImageZoom(data);
		}
	}

	/**
	 * @method private
	 * @name clearDoubleTap
	 * @description Clear double tap action.
	 */

	function clearDoubleTap(data) {
		Functions.clearTimer(data.tapTimer);
		data.tapTimer = null;
	}

	/**
	 * @method private
	 * @name cacheScrollPosition
	 * @description Cahce target scroll position
	 * @param data [object] "Instance data"
	 */

	function cacheScrollPosition(data) {
		// data.scrollTop = data.$el.offset().top;
	}

	/**
	 * @method private
	 * @name checkScrollPosition
	 * @description Check target scroll position against window
	 * @param data [object] "Instance data"
	 */

	function checkScrollPosition(data) {
		// if (!data.visible && data.scrollTop < ScrollTop + data.lazyEdge) {
		// 	data.visible = true;
		// 	loadInitialSource(data);
		// }
	}

	/**
	 * @method private
	 * @name calculateNaturalSize
	 * @description Determines natural size of target image.
	 * @param $img [jQuery object] "Source image object"
	 * @return [object | boolean] "Object containing natural height and width values or false"
	 */

	function calculateNaturalSize($img) {
		var node = $img[0],
			img = new Image();

		if (typeof node.naturalHeight !== "undefined") {
			return {
				naturalHeight: node.naturalHeight,
				naturalWidth:  node.naturalWidth
			};
		} else {
			if (node.tagName.toLowerCase() === 'img') {
				img.src = node.src;
				return {
					naturalHeight: img.height,
					naturalWidth:  img.width
				};
			}
		}

		return false;
	}

	/**
	 * @plugin
	 * @name Viewer
	 * @description A jQuery plugin for image exploration.
	 * @type widget
	 * @main viewer.js
	 * @main viewer.css
	 * @dependency jQuery
	 * @dependency core.js
	 * @dependency touch.js
	 * @dependency transition.js
	 */

	var Plugin = Formstone.Plugin("viewer", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param lazy [boolean] <false> "Lazy load with scroll"
			 * @param lazyEdge [int] <100> "Lazy load edge"
			 * @param labels.count [string] <'of'> "Gallery count separator text"
			 * @param labels.next [string] <'Next'> "Gallery control text"
			 * @param labels.previous [string] <'Previous'> "Gallery control text"
			 * @param labels.zoom_in [string] <'Zoom In'> "Image zoom text"
			 * @param labels.zoom_out [string] <'Zoom Out'> "Image zoom text"
			 * @param theme [string] <"fs-light"> "Theme class name"
			 */

			defaults: {
				customClass    : "",
				// lazy           : false,
				// lazyEdge       : 100,
				labels: {
					count      : "of",
					next       : "Next",
					previous   : "Previous",
					zoom_in    : "Zoom In",
					zoom_out   : "Zoom Out"
				},
				theme          : "fs-light"
			},

			classes: [
				"source",
				"wrapper",
				"viewport",
				"container",
				"image",

				"controls",
				"control_previous",
				"control_next",
				"zoom_in",
				"zoom_out",
				// "lazy"
				"animating",
				"loading",
				"scaling",
				"zooming"
			],

			/**
			 * @events
			 * @event loaded.viewer "Image loaded"
			 * @event ready.viewer "Image ready"
			 */

			events: {
				loaded    : "loaded",
				ready     : "ready"
			},

			methods: {
				_setup        : setup,
				_construct    : construct,
				_destruct     : destruct,
				_resize       : resize,

				resize        : doResizeInstance,
				load          : loadImage,
				unload        : unloadImage
			}
		}),

		// Localize References

		Classes         = Plugin.classes,
		RawClasses      = Classes.raw,
		Events          = Plugin.events,
		Functions       = Plugin.functions,

		Window          = Formstone.window,
		$Window         = Formstone.$window,
		// ScrollTop       = 0,
		$Instances      = [] // ,
		// $LazyInstances  = []
		;

})

);
