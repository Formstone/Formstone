/* global define */

// TODO: load error
// TODO: Move image manipulation to code functions? Functionality should be shared with Viewer, possibly reusable as fsTouch option?

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

		console.log($Instances);
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

		data.images         = [];
		data.source         = false;
		data.gallery        = false;
		data.isMobile       = Formstone.isMobile;
		data.isTouch        = Formstone.support.touch;
		data.isAnimating    = true;
		data.isZooming      = false;
		data.tapTimer       = null;

		data.loaded = false;

		data.doRAF  = false;
		data.zooming = false;

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

		// data.$controls.on(Events.click, [Classes.control_previous, Classes.control_next].join(", ") , data, advanceGallery);
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

		data.$viewport.append(data.$container);

		// Load image
		data.$image.one(Events.load, function() {
			onImageReady(data);

			data.loaded = true;

			// sizeImage(data);

			// Transition in
			// data.$container.fsTransition({
			// 	property: "opacity"
			// },
			// function() {
			// 	console.log("loaded!");
			// });

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

		// Check if image is cached
		if (data.$image[0].complete || data.$image[0].readyState === 4) {
			data.$image.trigger(Events.load);
		}

		data.source = source;
	}


	// START NEW LOGIC

	// on initial load
	function onImageReady(data) {
		// Cache image properties
		// First for container
		cacheImageProps(data);

		// Cache viewport properties
		cacheViewportProps(data);

		// Set initial container position
		data.containerTop  = (data.viewportHeight / 2);
		data.containerLeft = (data.viewportWidth  / 2);

		// Cache image min max
		cacheImageMinMax(data);

		// Set initial image size
		data.imageHeight = data.naturalHeight;
		data.imageWidth  = data.naturalWidth;

		// Size the image to fit into the viewport
		fitToViewport(data);

		// Cache container min max
		cacheContainerMinMax(data);

		// Cache image top left
		cacheImageTopLeft(data);

		// Cache last props
		cacheLastProps(data);

		// Cache render props
		cacheRenderProps(data);

		data.doRAF = true;

		// Update dom
		// setSizeAndPosition(data);
	}

	// on initial load
	// on image load
	// before viewport and container
	function cacheImageProps(data) {
		var naturalSize = calculateNaturalSize(data.$image);

		data.naturalHeight = naturalSize.naturalHeight;
		data.naturalWidth  = naturalSize.naturalWidth;

		data.ratioHorizontal = data.naturalHeight / data.naturalWidth;
		data.ratioVertical   = data.naturalWidth  / data.naturalHeight;

		data.isWide  = (data.naturalWidth > data.naturalHeight);
	}

	// on inital load
	// on resize
	// before container
	function cacheViewportProps(data) {
		data.viewportHeight = data.$viewport.outerHeight();
		data.viewportWidth  = data.$viewport.outerWidth();
	}

	// on initial load
	// on image load
	// on resize
	// on scale
	function cacheContainerMinMax(data) {
		if (data.imageHeight <= data.viewportHeight) {
			data.containerMinTop = ( data.viewportHeight / 2 );
			data.containerMaxTop = ( data.viewportHeight / 2 );
		} else {
			data.containerMinTop = data.viewportHeight - ( data.imageHeight / 2 );
			data.containerMaxTop = ( data.imageHeight / 2 );
		}

		if (data.imageWidth <= data.viewportWidth) {
			data.containerMinLeft = ( data.viewportWidth / 2 );
			data.containerMaxLeft = ( data.viewportWidth / 2 );
		} else {
			data.containerMinLeft = data.viewportWidth  - ( data.imageWidth  / 2 );
			data.containerMaxLeft = ( data.imageWidth  / 2 );
		}
	}

	// on inital load
	// on image load
	// on resize
	function cacheImageMinMax(data) {
		// Set min
		if (data.isWide) {
			//WIDE
			data.imageMinWidth  = data.viewportWidth;
			data.imageMinHeight = data.imageMinWidth * data.ratioHorizontal;

			if (data.imageMinHeight > data.viewportHeight) {
				data.imageMinHeight = data.viewportHeight;
				data.imageMinWidth  = data.imageMinHeight * data.ratioVertical;
			}
		} else {
			//TALL
			data.imageMinHeight = data.viewportHeight;
			data.imageMinWidth  = data.imageMinHeight * data.ratioVertical;

			if (data.imageMinWidth > data.viewportWidth) {
				data.imageMinWidth  = data.viewportWidth;
				data.imageMinHeight = data.imageMinWidth * data.ratioHorizontal;
			}
		}

		// Check natural max against new min
		if (data.imageMinWidth > data.naturalWidth || data.imageMinHeight > data.naturalHeight) {
			data.imageMinHeight = data.naturalHeight;
			data.imageMinWidth  = data.naturalWidth;
		}

		// Set max
		data.imageMaxHeight = data.naturalHeight;
		data.imageMaxWidth  = data.naturalWidth;
	}

	// on inital load
	// on image load
	// on size change
	function cacheImageTopLeft(data) {
		data.imageTop  = -(data.imageHeight / 2);
		data.imageLeft = -(data.imageWidth / 2);
	}

	// on initial load
	// on image load
	// on scale start
	// on scale end
	// on zoom
	function cacheLastProps(data) {
		data.lastContainerTop  = data.containerTop;
		data.lastContainerLeft = data.containerLeft;

		data.lastImageHeight = data.imageHeight;
		data.lastImageWidth  = data.imageWidth;

		data.lastImageTop  = data.imageTop;
		data.lastImageLeft = data.imageLeft;
	}

	// on initial load
	// on image load
	// on scale end
	// on zoom
	function cacheRenderProps(data) {
		data.renderContainerTop  = data.lastContainerTop;
		data.renderContainerLeft = data.lastContainerLeft;

		data.renderImageTop  = data.lastImageTop;
		data.renderImageLeft = data.lastImageLeft;

		data.renderImageHeight = data.lastImageHeight;
		data.renderImageWidth  = data.lastImageWidth;
	}

	// on inital load
	// on image load
	function fitToViewport(data) {
		data.imageHeight = data.imageMinHeight;
		data.imageWidth  = data.imageMinWidth;
	}

	// on scale
	function checkImageMinMax(data) {
		if (data.imageHeight < data.imageMinHeight) {
			data.imageHeight = data.imageMinHeight;
		}
		if (data.imageHeight > data.imageMaxHeight) {
			data.imageHeight = data.imageMaxHeight;
		}

		if (data.imageWidth < data.imageMinWidth) {
			data.imageWidth = data.imageMinWidth;
		}
		if (data.imageWidth > data.imageMaxWidth) {
			data.imageWidth = data.imageMaxWidth;
		}
	}

	// on scale
	function checkContainerTopLeft(data) {
		if (data.containerTop < data.containerMinTop) {
			data.containerTop = data.containerMinTop;
		}
		if (data.containerTop > data.containerMaxTop) {
			data.containerTop = data.containerMaxTop;
		}

		if (data.containerLeft < data.containerMinLeft) {
			data.containerLeft = data.containerMinLeft;
		}
		if (data.containerLeft > data.containerMaxLeft) {
			data.containerLeft = data.containerMaxLeft;
		}
	}

	// on scale start
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

	// on timer end
	// on scale
	function clearDoubleTap(data) {
		Functions.clearTimer(data.tapTimer);
		data.tapTimer = null;
	}

	// on inital load
	// on image load
	// on size change
	function setSizeAndPosition(data) {
		data.$container.css({
			top     : data.containerTop,
			left    : data.containerLeft
		});

		data.$image.css({
			height    : data.imageHeight,
			width     : data.imageWidth,
			top       : data.imageTop,
			left      : data.imageLeft
		});
	}

	// on scale start
	function onScaleStart(e) {
		var data = e.data;

		// Check double tap
		checkDoubleTap(data);

		// Cache previous values
		cacheLastProps(data);
	}

	// on scale
	function onScale(e) {
		var data = e.data;

		// Clear double tap
		clearDoubleTap(data);

		data.doRAF = false;
		data.zooming = false;

		var zoomed = (data.imageHeight > data.imageMinHeight + 1);

		// Change container position
		data.containerTop  = data.lastContainerTop  + e.deltaY;
		data.containerLeft = data.lastContainerLeft + e.deltaX;

		// Change image size
		data.imageHeight = data.lastImageHeight * e.scale;
		data.imageWidth  = data.lastImageWidth  * e.scale;

		// Cache container min max
		cacheContainerMinMax(data);

		// Check container top left
		checkContainerTopLeft(data);

		// Check image min max
		checkImageMinMax(data);

		// Cache image top left
		cacheImageTopLeft(data);

		// Update dom
		setSizeAndPosition(data);
	}

	// on scale end
	function onScaleEnd(e) {
		var data = e.data;

		if (!data.zooming) {
			// Cache last properties
			cacheLastProps(data);

			// Cache rander properties
			cacheRenderProps(data);

			data.doRAF = true;
		}
	}

	// on image zoom
	function onImageZoom(data) {
		var zoomed = (data.imageHeight > data.imageMinHeight + 1);

		data.zooming = true;

		// Cache last properties
		cacheLastProps(data);

		// Cache rander properties
		cacheRenderProps(data);

		if (zoomed) {
			// zoomed in (go to min)
			data.imageHeight = data.imageMinHeight;
			data.imageWidth  = data.imageMinWidth;
		} else {
			// zoomed out (go to max)
			data.imageHeight = data.imageMaxHeight;
			data.imageWidth  = data.imageMaxWidth;
		}

		// Cache container min max
		cacheContainerMinMax(data);

		// Check container top left
		checkContainerTopLeft(data);

		// Cache image top left
		cacheImageTopLeft(data);

		data.doRAF = true;
	}

	function raf() {
		Functions.iterate.call($Instances, render);
	}

	function render(data) {
		if (data.doRAF) {
			data.enertia = 0.2;

			data.renderContainerTop  += Math.round((data.containerTop  - data.renderContainerTop)  * data.enertia);
			data.renderContainerLeft += Math.round((data.containerLeft - data.renderContainerLeft) * data.enertia);

			data.renderImageTop  += Math.round((data.imageTop  - data.renderImageTop)  * data.enertia);
			data.renderImageLeft += Math.round((data.imageLeft - data.renderImageLeft) * data.enertia);

			data.renderImageHeight += Math.round((data.imageHeight - data.renderImageHeight) * data.enertia);
			data.renderImageWidth  += Math.round((data.imageWidth  - data.renderImageWidth)  * data.enertia);

			// Update dom
			data.$container.css({
				top     : data.renderContainerTop,
				left    : data.renderContainerLeft
			});

			data.$image.css({
				height    : data.renderImageHeight,
				width     : data.renderImageWidth,
				top       : data.renderImageTop,
				left      : data.renderImageLeft
			});
		}
	}

	// END NEW LOGIC





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

	// /**
	//  * @method private
	//  * @name fitImage
	//  * @description Calculates target image size.
	//  */
	//
	// function sizeImage(data) {
	// 	data.naturalSize = calculateNaturalSize(data.$image);
	//
	// 	var height = data.viewportHeight,
	// 		width  = data.viewportWidth,
	// 		nSize  = data.naturalSize;
	//
	// 	data.imageHeight = nSize.naturalHeight;
	// 	data.imageWidth  = nSize.naturalWidth;
	//
	// 	data.ratioHorizontal = data.imageHeight / data.imageWidth;
	// 	data.ratioVertical   = data.imageWidth  / data.imageHeight;
	// 	data.isWide  = (data.imageWidth > data.imageHeight);
	//
	// 	if (data.isWide) {
	// 		//WIDE
	// 		data.targetImageWidth  = width;
	// 		data.targetImageHeight = data.targetImageWidth * data.ratioHorizontal;
	//
	// 		if (data.targetImageHeight > height) {
	// 			data.targetImageHeight = height;
	// 			data.targetImageWidth  = data.targetImageHeight * data.ratioVertical;
	// 		}
	// 	} else {
	// 		//TALL
	// 		data.targetImageHeight = height;
	// 		data.targetImageWidth  = data.targetImageHeight * data.ratioVertical;
	//
	// 		if (data.targetImageWidth > width) {
	// 			data.targetImageWidth  = width;
	// 			data.targetImageHeight = data.targetImageWidth * data.ratioHorizontal;
	// 		}
	// 	}
	//
	// 	// MAX
	// 	if (data.targetImageWidth > data.imageWidth || data.targetImageHeight > data.imageHeight) {
	// 		data.targetImageHeight = data.imageHeight;
	// 		data.targetImageWidth  = data.imageWidth;
	// 	}
	//
	// 	// MIN
	// 	if (data.targetImageWidth < data.minWidth || data.targetImageHeight < data.minHeight) {
	// 		if (data.targetImageWidth < data.minWidth) {
	// 			data.targetImageWidth  = data.minWidth;
	// 			data.targetImageHeight = data.targetImageWidth * data.ratioHorizontal;
	// 		} else {
	// 			data.targetImageHeight = data.minHeight;
	// 			data.targetImageWidth  = data.targetImageHeight * data.ratioVertical;
	// 		}
	// 	}
	//
	// 	data.$container.css({
	// 		top     : (data.viewportHeight / 2),
	// 		left    : (data.viewportWidth  / 2)
	// 	});
	//
	// 	data.$image.css({
	// 		height    : data.targetImageHeight,
	// 		width     : data.targetImageWidth,
	// 		top       : -(data.targetImageHeight / 2),
	// 		left      : -(data.targetImageWidth  / 2)
	// 	});
	//
	// 	if (data.doTouch) {
	// 		data.scaleMinHeight    = data.targetImageHeight;
	// 		data.scaleMinWidth     = data.targetImageWidth;
	// 		data.scaleMaxHeight    = data.imageHeight;
	// 		data.scaleMaxWidth     = data.imageWidth;
	// 	}
	// }
	//
	//
	// function advanceGallery() {
	//
	// }

	/**
	 * @method private
	 * @name resizeInstance
	 * @description Handle window resize event
	 * @param data [object] "Instance data"
	 */

	function resizeInstance(data) {
		// console.log(data);
		//
		// data.viewportHeight    = data.$viewport.outerHeight();
		// data.viewportWidth     = data.$viewport.outerWidth();
		//
		// if (data.source) {
		// 	sizeImage(data);
		// }
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


	// /**
	//  * @method private
	//  * @name clearTouch
	//  * @description Clears current touch action.
	//  */
	//
	// function clearTouch(data) {
	// 	// if (data.$image && data.$image.length) {
	// 	// 	data.$viewport.fsTouch("destroy")
	// 	// 				  .off(Events.scaleStart, onScaleStart)
	// 	// 				  .off(Events.scaleEnd, onScaleEnd)
	// 	// 				  .off(Events.scale, onScale);
	// 	// }
	// }
	//
	// /**
	//  * @method private
	//  * @name onImageZoom
	//  * @description Zooms image.
	//  * @param e [object] "Event data"
	//  */
	//
	// function onImageZoom(data) {
	// 	if (data.$image && data.$image.length) {
	// 		data.isZooming = true;
	//
	// 		data.$el.addClass(RawClasses.zooming)
	// 				.removeClass(RawClasses.scaling);
	//
	// 		var direction = (data.targetImageHeight > data.scaleMinHeight + 1) ? "out" : "in";
	//
	// 		console.log(direction);
	//
	// 		if (direction === "out") {
	// 			// We're zoomed in
	// 			data.targetImageHeight = data.scaleMinHeight;
	// 			data.targetImageWidth  = data.scaleMinWidth;
	// 		} else {
	// 			// We're zoomed out
	// 			data.targetImageHeight = data.scaleMaxHeight;
	// 			data.targetImageWidth  = data.scaleMaxWidth;
	// 		}
	//
	// 		var conHeight = data.$viewport.outerHeight(),
	// 			conWidth  = data.$viewport.outerWidth();
	//
	// 		data.scalePosition.top  = data.targetContainerY = (conHeight / 2);
	// 		data.scalePosition.left = data.targetContainerX = (conWidth  / 2);
	//
	// 		data.$container.css({
	// 			left: data.targetContainerX,
	// 			top:  data.targetContainerY
	// 		});
	//
	// 		data.$image.fsTransition({
	// 			property: "top"
	// 		}, function() {
	// 			data.isZooming = false;
	// 			data.$el.removeClass(RawClasses.zooming);
	// 		}).css({
	// 			height    : data.targetImageHeight,
	// 			width     : data.targetImageWidth,
	// 			top       : -(data.targetImageHeight / 2),
	// 			left      : -(data.targetImageWidth  / 2)
	// 		});
	//
	// 		console.log(data);
	// 	}
	// }
	//
	// /**
	//  * @method private
	//  * @name cacheScale
	//  * @description Caches current scale settings.
	//  */
	//
	// function cacheScale(data) {
	// 	data.scalePosition = data.$container.position();
	//
	// 	data.scaleY = data.scalePosition.top;
	// 	data.scaleX = data.scalePosition.left;
	//
	// 	data.scaleHeight = data.$image.outerHeight();
	// 	data.scaleWidth  = data.$image.outerWidth();
	// }
	//
	// /**
	//  * @method private
	//  * @name onScaleStart
	//  * @description Handles scale start event.
	//  * @param e [object] "Event data"
	//  */
	//
	// function onScaleStart(e) {
	// 	var data = e.data;
	//
	// 	if (!data.isZooming) {
	// 		data.$el.removeClass(RawClasses.zooming)
	// 				.addClass(RawClasses.scaling);
	//
	// 		cacheScale(data);
	// 		checkDoubleTap(data);
	//
	// 		console.log(data.targetImageHeight, data.targetImageWidth);
	// 	}
	// }
	//
	// /**
	//  * @method private
	//  * @name onScale
	//  * @description Handles scale event.
	//  * @param e [object] "Event data"
	//  */
	//
	// function onScale(e) {
	// 	var data = e.data;
	//
	// 	if (!data.isZooming) {
	// 		clearDoubleTap(data);
	//
	// 		var zoomed = (data.targetImageHeight > data.scaleMinHeight + 1);
	//
	// 		// if (!data.gallery || zoomed) {
	// 			data.targetContainerY = data.scaleY + e.deltaY;
	// 		// }
	// 		data.targetContainerX = data.scaleX + e.deltaX;
	//
	// 		data.targetContainerY = data.scaleY;
	// 		data.targetContainerX = data.scaleX;
	//
	// 		// if (zoomed) {
	// 			data.targetContainerY += e.deltaY;
	// 			data.targetContainerX += e.deltaX;
	// 		// }
	//
	// 		data.targetImageHeight = data.scaleHeight * e.scale;
	// 		data.targetImageWidth  = data.scaleWidth  * e.scale;
	//
	// 		if (data.targetImageHeight < data.scaleMinHeight) {
	// 			data.targetImageHeight = data.scaleMinHeight;
	// 		}
	// 		if (data.targetImageHeight > data.scaleMaxHeight) {
	// 			data.targetImageHeight = data.scaleMaxHeight;
	// 		}
	//
	// 		if (data.targetImageWidth < data.scaleMinWidth) {
	// 			data.targetImageWidth = data.scaleMinWidth;
	// 		}
	// 		if (data.targetImageWidth > data.scaleMaxWidth) {
	// 			data.targetImageWidth = data.scaleMaxWidth;
	// 		}
	//
	// 		data.hasScaled = true;
	//
	// 		data.$container.css({
	// 			top:  data.targetContainerY,
	// 			left: data.targetContainerX
	// 		});
	//
	// 		var imageStyles = {
	// 			height    : data.targetImageHeight,
	// 			width     : data.targetImageWidth,
	// 			left      : -(data.targetImageWidth  / 2)
	// 		};
	//
	// 		// if (!data.gallery || zoomed) {
	// 			imageStyles.top = -(data.targetImageHeight / 2);
	// 		// }
	//
	// 		data.$image.css(imageStyles);
	// 	}
	// }
	//
	// /**
	//  * @method private
	//  * @name onScaleEnd
	//  * @description Handles scale end event.
	//  * @param e [object] "Event data"
	//  */
	//
	// function onScaleEnd(e) {
	// 	var data = e.data;
	//
	// 	if (!data.isZooming) {
	// 		cacheScale(data);
	//
	// 		var conHeight = data.$viewport.outerHeight(),
	// 			conWidth  = data.$viewport.outerWidth();
	//
	// 		data.scaleMinY    = conHeight - ( data.scaleHeight / 2 );
	// 		data.scaleMinX    = conWidth  - ( data.scaleWidth  / 2 );
	// 		data.scaleMaxY    = ( data.scaleHeight / 2 );
	// 		data.scaleMaxX    = ( data.scaleWidth  / 2 );
	//
	// 		if (data.scaleHeight < conHeight) {
	// 			data.scalePosition.top = conHeight / 2;
	// 		} else {
	// 			if (data.scalePosition.top < data.scaleMinY) {
	// 				data.scalePosition.top = data.scaleMinY;
	// 			}
	// 			if (data.scalePosition.top > data.scaleMaxY) {
	// 				data.scalePosition.top = data.scaleMaxY;
	// 			}
	// 		}
	//
	// 		if (data.scaleWidth < conWidth) {
	// 			data.scalePosition.left = conWidth / 2;
	// 		} else {
	// 			if (data.scalePosition.left < data.scaleMinX) {
	// 				data.scalePosition.left = data.scaleMinX;
	// 			}
	// 			if (data.scalePosition.left > data.scaleMaxX) {
	// 				data.scalePosition.left = data.scaleMaxX;
	// 			}
	// 		}
	//
	// 		data.$el.removeClass(RawClasses.scaling);
	//
	// 		data.$container.css({
	// 			left: data.scalePosition.left,
	// 			top:  data.scalePosition.top
	// 		});
	// 	}
	// }
	//
	// /**
	//  * @method private
	//  * @name checkDoubleTap
	//  * @description Check double tap action.
	//  */
	//
	// function checkDoubleTap(data) {
	// 	if (data.tapTimer === null) {
	// 	 	data.tapTimer = Functions.startTimer(data.tapTimer, 500, function() {
	// 	 		clearDoubleTap(data);
	// 	 	});
	// 	} else {
	// 		clearDoubleTap(data);
	// 		onImageZoom(data);
	// 	}
	// }
	//
	// /**
	//  * @method private
	//  * @name clearDoubleTap
	//  * @description Clear double tap action.
	//  */
	//
	// function clearDoubleTap(data) {
	// 	Functions.clearTimer(data.tapTimer);
	// 	data.tapTimer = null;
	// }

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
				_raf          : raf,

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
