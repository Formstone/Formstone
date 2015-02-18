;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name setup
	 * @description Setup plugin.
	 */

	function setup() {
		$Body = Formstone.$body;
		$Locks = $("html, body");
	}

	/**
	 * @method private
	 * @name resize
	 * @description Handles window resize
	 */

	function resize() {
		if (Instance) {
			resizeLightbox();
		}
	}

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		this.on(Events.click, data, buildLightbox);
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		closeLightbox();

		this.off(Events.namespace);
	}

	/**
	 * @method private
	 * @name initialize
	 * @description Builds instance from $target.
	 * @param $target [jQuery] "Target jQuery object"
	 */

	function initialize($target, options) {
		if ($target instanceof $) {

			// Emulate event

			buildLightbox.apply(Window, [{ data: $.extend({}, {
				$object: $target
			}, Defaults, options || {}) }]);
		}
	}

	/**
	 * @method private
	 * @name buildLightbox
	 * @description Builds new lightbox.
	 * @param e [object] "Event data"
	 */

	function buildLightbox(e) {
		if (!Instance) {
			// Check target type
			var data           = e.data,
				$el            = data.$el,
				$object        = data.$object,
				source         = ($el && $el[0].href) ? $el[0].href || "" : "",
				hash           = ($el && $el[0].hash) ? $el[0].hash || "" : "",
				sourceParts    = source.toLowerCase().split(".").pop().split(/\#|\?/),
				extension      = sourceParts[0],
				type           = ($el) ? $el.data(Namespace + "-type") : "",
				isImage	       = ( (type === "image") || ($.inArray(extension, data.extensions) > -1 || source.substr(0, 10) === "data:image") ),
				isVideo	       = ( source.indexOf("youtube.com/embed") > -1 || source.indexOf("player.vimeo.com/video") > -1 ),
				isUrl	       = ( (type === "url") || (!isImage && !isVideo && source.substr(0, 4) === "http" && !hash) ),
				isElement      = ( (type === "element") || (!isImage && !isVideo && !isUrl && (hash.substr(0, 1) === "#")) ),
				isObject       = ( (typeof $object !== "undefined") );

			if (isElement) {
				source = hash;
			}

			// Retain default click
			if ( !(isImage || isVideo || isUrl || isElement || isObject) ) {
				return;
			}

			// Kill event
			Functions.killEvent(e);

			// Cache internal data
			Instance = $.extend({}, {
				visible            : false,
				gallery: {
					active         : false
				},
				isMobile           : (Formstone.isMobile || data.mobile),
				isAnimating        : true,
				oldContentHeight   : 0,
				oldContentWidth    : 0
			}, data);

			// Double the margin
			Instance.margin *= 2;

			if (isImage) {
				Instance.type = "image";
			} else if (isVideo) {
				Instance.type = "video";
			} else {
				Instance.type = "element";
			}

			if (isImage || isVideo) {
				// Check for gallery
				var id = $el.data(Namespace + "-gallery");

				if (id) {
					Instance.gallery.active    = true;
					Instance.gallery.id        = id;
					Instance.gallery.$items    = $("a[data-lightbox-gallery= " + Instance.gallery.id + "], a[rel= " + Instance.gallery.id + "]"); // backwards compatibility
					Instance.gallery.index     = Instance.gallery.$items.index(Instance.$el);
					Instance.gallery.total     = Instance.gallery.$items.length - 1;
				}
			}

			// Assemble HTML
			var html = '';
			if (!Instance.isMobile) {
				html += '<div class="' + [Classes.raw.overlay, Instance.customClass].join(" ") + '"></div>';
			}
			var lightboxClasses = [
				Classes.raw.base,
				Classes.raw.loading,
				Classes.raw.animating,
				Instance.customClass
			];

			if (Instance.fixed) {
				lightboxClasses.push(Classes.raw.fixed);
			}
			if (Instance.isMobile) {
				lightboxClasses.push(Classes.raw.mobile);
			}
			if (isUrl) {
				lightboxClasses.push(Classes.raw.iframed);
			}
			if (isElement || isObject) {
				lightboxClasses.push(Classes.raw.inline);
			}

			html += '<div class="' + lightboxClasses.join(" ") + '">';
			html += '<button type="button" class="' + Classes.raw.close + '">' + Instance.labels.close + '</button>';
			html += '<span class="' + Classes.raw.loading_icon + '"></span>';
			html += '<div class="' + Classes.raw.container + '">';
			html += '<div class="' + Classes.raw.content + '">';
			if (isImage || isVideo) {
				html += '<div class="' + Classes.raw.meta + '">';

				if (Instance.gallery.active) {
					html += '<button type="button" class="' + [Classes.raw.control, Classes.raw.control_previous].join(" ") + '">' + Instance.labels.previous + '</button>';
					html += '<button type="button" class="' + [Classes.raw.control, Classes.raw.control_next].join(" ") + '">' + Instance.labels.next + '</button>';
					html += '<p class="' + Classes.raw.position + '"';
					if (Instance.gallery.total < 1) {
						html += ' style="display: none;"';
					}
					html += '>';
					html += '<span class="' + Classes.raw.position_current + '">' + (Instance.gallery.index + 1) + '</span> ';
					html += Instance.labels.count;
					html += ' <span class="' + Classes.raw.position_total + '">' + (Instance.gallery.total + 1) + '</span>';
					html += '</p>';
				}

				html += '<div class="' + Classes.raw.caption + '">';
				html += Instance.formatter.call($el, data);
				html += '</div></div>'; // caption, meta
			}
			html += '</div></div></div>'; //container, content, lightbox

			// Modify Dom
			$Body.append(html);

			// Cache jquery objects
			Instance.$overlay          = $(Classes.overlay);
			Instance.$lightbox         = $(Classes.base);
			Instance.$close            = $(Classes.close);
			Instance.$container        = $(Classes.container);
			Instance.$content          = $(Classes.content);
			Instance.$meta             = $(Classes.meta);
			Instance.$position         = $(Classes.position);
			Instance.$caption          = $(Classes.caption);
			Instance.$controls         = $(Classes.control);

			Instance.paddingVertical   = (!Instance.isMobile) ? (parseInt(Instance.$lightbox.css("paddingTop"), 10)  + parseInt(Instance.$lightbox.css("paddingBottom"), 10)) : (Instance.$close.outerHeight() / 2);
			Instance.paddingHorizontal = (!Instance.isMobile) ? (parseInt(Instance.$lightbox.css("paddingLeft"), 10) + parseInt(Instance.$lightbox.css("paddingRight"), 10))  : 0;
			Instance.contentHeight     = Instance.$lightbox.outerHeight() - Instance.paddingVertical;
			Instance.contentWidth      = Instance.$lightbox.outerWidth()  - Instance.paddingHorizontal;
			Instance.controlHeight     = Instance.$controls.outerHeight();

			// Center
			centerLightbox();

			// Update gallery
			if (Instance.gallery.active) {
				updateGalleryControls();
			}

			// Bind events
			$Window.on(Events.keyDown, onKeyDown);

			$Body.on(Events.clickTouchStart, [Classes.overlay, Classes.close].join(", "), closeLightbox);

			if (Instance.gallery.active) {
				Instance.$lightbox.on(Events.clickTouchStart, Classes.control, advanceGallery);
			}

			Instance.$lightbox.transition({
				property: "opacity"
			},
			function() {
				if (isImage) {
					loadImage(source);
				} else if (isVideo) {
					loadVideo(source);
				} else if (isUrl) {
					loadURL(source);
				} else if (isElement) {
					cloneElement(source);
				} else if (isObject) {
					appendObject(Instance.$object);
				}
			}).addClass(Classes.raw.open);

			Instance.$overlay.addClass(Classes.raw.open);
		}
	}

	/**
	 * @method
	 * @name resize
	 * @description Resizes lightbox.
	 * @example $.lightbox("resize");
	 * @param height [int | false] "Target height or false to auto size"
	 * @param width [int | false] "Target width or false to auto size"
	 */

	/**
	 * @method
	 * @name resizeLightbox
	 * @description Triggers resize of instance.
	 */

	function resizeLightbox(e) {
		if (typeof e !== "object") {
			Instance.targetHeight = arguments[0];
			Instance.targetWidth  = arguments[1];
		}

		if (Instance.type === "element") {
			sizeContent(Instance.$content.find("> :first-child"));
		} else if (Instance.type === "image") {
			sizeImage();
		} else if (Instance.type === "video") {
			sizeVideo();
		}

		sizeLightbox();
	}

	/**
	 * @method
	 * @name close
	 * @description Closes active instance.
	 * @example $.lightbox("close");
	 */

	/**
	 * @method private
	 * @name closeLightbox
	 * @description Closes active instance.
	 * @param e [object] "Event data"
	 */

	function closeLightbox(e) {
		Functions.killEvent(e);

		if (Instance) {
			Instance.$lightbox.transition("destroy");
			Instance.$container.transition("destroy");

			Instance.$lightbox.addClass(Classes.raw.animating).transition({
				property: "opacity"
			},
			function(e) {
				// Clean up
				Instance.$lightbox.off(Events.namespace);
				Instance.$container.off(Events.namespace);
				$Window.off(Events.namespace);
				$Body.off(Events.namespace);

				Instance.$overlay.remove();
				Instance.$lightbox.remove();

				// Reset Instance
				Instance = null;

				$Window.trigger(Events.close);
			});

			Instance.$lightbox.removeClass(Classes.raw.open);
			Instance.$overlay.removeClass(Classes.raw.open);

			if (Instance.isMobile) {
				$Locks.removeClass(RawClasses.lock);
			}
		}
	}

	/**
	 * @method private
	 * @name openLightbox
	 * @description Opens active instance.
	 */

	function openLightbox() {
		var position = calculatePosition(),
			durration = Instance.isMobile ? 0 : Instance.duration;

		if (!Instance.isMobile) {
			Instance.$controls.css({
				marginTop: ((Instance.contentHeight - Instance.controlHeight - Instance.metaHeight) / 2)
			});
		}

		if (!Instance.visible && Instance.isMobile && Instance.gallery.active) {
			Instance.$content.touch({
				axis: "x",
				swipe: true
			}).on(Events.swipe, onSwipe);
		}

		Instance.$lightbox.transition({
			property: (Instance.contentHeight !== Instance.oldContentHeight) ? "height" : "width"
		},
		function() {
			Instance.$container.transition({
				property: "opacity"
			},
			function() {
				Instance.$lightbox.removeClass(Classes.raw.animating);
				Instance.isAnimating = false;
			});

			Instance.$lightbox.removeClass(Classes.raw.loading);

			Instance.visible = true;

			// Fire open event
			$Window.trigger(Events.open);

			// Start preloading
			if (Instance.gallery.active) {
				preloadGallery();
			}
		});

		if (!Instance.isMobile) {
			Instance.$lightbox.css({
				height: Instance.contentHeight + Instance.paddingVertical,
				width:  Instance.contentWidth  + Instance.paddingHorizontal,
				top:    (!Instance.fixed) ? position.top : 0
			});
		}

		// Trigger event in case the content size hasn't changed
		var contentHasChanged = (Instance.oldContentHeight !== Instance.contentHeight || Instance.oldContentWidth !== Instance.contentWidth);

		if (Instance.isMobile || !contentHasChanged) {
			Instance.$lightbox.transition("resolve");
		}

		// Track content size changes
		Instance.oldContentHeight = Instance.contentHeight;
		Instance.oldContentWidth  = Instance.contentWidth;

		if (Instance.isMobile) {
			$Locks.addClass(RawClasses.lock);
		}
	}

	/**
	 * @method private
	 * @name sizeLightbox
	 * @description Sizes active instance.
	 */

	function sizeLightbox() {
		if (Instance.visible && !Instance.isMobile) {
			var position = calculatePosition();

			Instance.$controls.css({
				marginTop: ((Instance.contentHeight - Instance.controlHeight - Instance.metaHeight) / 2)
			});

			Instance.$lightbox.css({
				height: Instance.contentHeight + Instance.paddingVertical,
				width:  Instance.contentWidth  + Instance.paddingHorizontal,
				top:    (!Instance.fixed) ? position.top : 0
			});
		}
	}

	/**
	 * @method private
	 * @name centerLightbox
	 * @description Centers instance.
	 */

	function centerLightbox() {
		var position = calculatePosition();

		Instance.$lightbox.css({
			top: (!Instance.fixed) ? position.top : 0
		});
	}

	/**
	 * @method private
	 * @name calculatePosition
	 * @description Calculates positions.
	 * @return [object] "Object containing top and left positions"
	 */

	function calculatePosition() {
		if (Instance.isMobile) {
			return {
				left: 0,
				top: 0
			};
		}

		var pos = {
			left: ($Window.width() - Instance.contentWidth - Instance.paddingHorizontal) / 2,
			top: (Instance.top <= 0) ? (($Window.height() - Instance.contentHeight - Instance.paddingVertical) / 2) : Instance.top
		};

		if (Instance.fixed !== true) {
			pos.top += $Window.scrollTop();
		}

		return pos;
	}

	/**
	 * @method private
	 * @name formatCaption
	 * @description Formats caption.
	 * @param $target [jQuery object] "Target element"
	 */

	function formatCaption() {
		var title = this.attr("title");
		return (title !== undefined && title.trim() !== "") ? '<p class="caption">' + title.trim() + '</p>' : "";
	}

	/**
	 * @method private
	 * @name loadImage
	 * @description Loads source image.
	 * @param source [string] "Source image URL"
	 */

	function loadImage(source) {
		// Cache current image
		Instance.$image = $("<img>");

		Instance.$image.one(Events.load, function() {
			var naturalSize = calculateNaturalSize(Instance.$image);

			Instance.naturalHeight = naturalSize.naturalHeight;
			Instance.naturalWidth  = naturalSize.naturalWidth;

			if (Instance.retina) {
				Instance.naturalHeight /= 2;
				Instance.naturalWidth  /= 2;
			}

			Instance.$content.prepend(Instance.$image);

			if (Instance.$caption.html() === "") {
				Instance.$caption.hide();
			} else {
				Instance.$caption.show();
			}

			// Size content to be sure it fits the viewport
			sizeImage();

			openLightbox();

		}).error(loadError)
		  .attr("src", source)
		  .addClass(Classes.raw.image);

		// If image has already loaded into cache, trigger load event
		if (Instance.$image[0].complete || Instance.$image[0].readyState === 4) {
			Instance.$image.trigger(Events.load);
		}
	}

	/**
	 * @method private
	 * @name sizeImage
	 * @description Sizes image to fit in viewport.
	 * @param count [int] "Number of resize attempts"
	 */

	function sizeImage() {
		var count = 0;

		Instance.windowHeight = Instance.viewportHeight = $Window.height() - Instance.paddingVertical;
		Instance.windowWidth  = Instance.viewportWidth  = $Window.width()  - Instance.paddingHorizontal;

		Instance.contentHeight = Infinity;
		Instance.contentWidth = Infinity;

		Instance.imageMarginTop  = 0;
		Instance.imageMarginLeft = 0;

		while (Instance.contentHeight > Instance.viewportHeight && count < 2) {
			Instance.imageHeight = (count === 0) ? Instance.naturalHeight : Instance.$image.outerHeight();
			Instance.imageWidth  = (count === 0) ? Instance.naturalWidth  : Instance.$image.outerWidth();
			Instance.metaHeight  = (count === 0) ? 0 : Instance.metaHeight;

			if (count === 0) {
				Instance.ratioHorizontal = Instance.imageHeight / Instance.imageWidth;
				Instance.ratioVertical   = Instance.imageWidth  / Instance.imageHeight;

				Instance.isWide = (Instance.imageWidth > Instance.imageHeight);
			}

			// Double check min and max
			if (Instance.imageHeight < Instance.minHeight) {
				Instance.minHeight = Instance.imageHeight;
			}
			if (Instance.imageWidth < Instance.minWidth) {
				Instance.minWidth = Instance.imageWidth;
			}

			if (Instance.isMobile) {
				// Get meta height before sizing
				Instance.$meta.css({
					width: Instance.windowWidth
				});
				Instance.metaHeight = Instance.$meta.outerHeight(true);

				// Content match viewport
				Instance.contentHeight = Instance.viewportHeight - Instance.paddingVertical;
				Instance.contentWidth  = Instance.viewportWidth  - Instance.paddingHorizontal;

				fitImage();

				Instance.imageMarginTop  = (Instance.contentHeight - Instance.targetImageHeight - Instance.metaHeight) / 2;
				Instance.imageMarginLeft = (Instance.contentWidth  - Instance.targetImageWidth) / 2;
			} else {
				// Viewport should match window, less margin, padding and meta
				if (count === 0) {
					Instance.viewportHeight -= (Instance.margin + Instance.paddingVertical);
					Instance.viewportWidth  -= (Instance.margin + Instance.paddingHorizontal);
				}
				Instance.viewportHeight -= Instance.metaHeight;

				fitImage();

				Instance.contentHeight = Instance.targetImageHeight;
				Instance.contentWidth  = Instance.targetImageWidth;
			}

			// Modify DOM

			Instance.$meta.css({
				width: Instance.contentWidth
			});

			Instance.$image.css({
				height: Instance.targetImageHeight,
				width:  Instance.targetImageWidth,
				marginTop:  Instance.imageMarginTop,
				marginLeft: Instance.imageMarginLeft
			});

			if (!Instance.isMobile) {
				Instance.metaHeight = Instance.$meta.outerHeight(true);
				Instance.contentHeight += Instance.metaHeight;
			}

			count ++;
		}
	}

	/**
	 * @method private
	 * @name fitImage
	 * @description Calculates target image size.
	 */

	function fitImage() {
		var height = (!Instance.isMobile) ? Instance.viewportHeight : Instance.contentHeight - Instance.metaHeight,
			width  = (!Instance.isMobile) ? Instance.viewportWidth  : Instance.contentWidth;

		if (Instance.isWide) {
			//WIDE
			Instance.targetImageWidth  = width;
			Instance.targetImageHeight = Instance.targetImageWidth * Instance.ratioHorizontal;

			if (Instance.targetImageHeight > height) {
				Instance.targetImageHeight = height;
				Instance.targetImageWidth  = Instance.targetImageHeight * Instance.ratioVertical;
			}
		} else {
			//TALL
			Instance.targetImageHeight = height;
			Instance.targetImageWidth  = Instance.targetImageHeight * Instance.ratioVertical;

			if (Instance.targetImageWidth > width) {
				Instance.targetImageWidth  = width;
				Instance.targetImageHeight = Instance.targetImageWidth * Instance.ratioHorizontal;
			}
		}

		// MAX
		if (Instance.targetImageWidth > Instance.imageWidth || Instance.targetImageHeight > Instance.imageHeight) {
			Instance.targetImageHeight = Instance.imageHeight;
			Instance.targetImageWidth  = Instance.imageWidth;
		}

		// MIN
		if (Instance.targetImageWidth < Instance.minWidth || Instance.targetImageHeight < Instance.minHeight) {
			if (Instance.targetImageWidth < Instance.minWidth) {
				Instance.targetImageWidth  = Instance.minWidth;
				Instance.targetImageHeight = Instance.targetImageWidth * Instance.ratioHorizontal;
			} else {
				Instance.targetImageHeight = Instance.minHeight;
				Instance.targetImageWidth  = Instance.targetImageHeight * Instance.ratioVertical;
			}
		}
	}

	/**
	 * @method private
	 * @name loadVideo
	 * @description Loads source video.
	 * @param source [string] "Source video URL"
	 */

	function loadVideo(source) {
		Instance.$videoWrapper = $('<div class="' + Classes.raw.videoWrapper + '"></div>');
		Instance.$video = $('<iframe class="' + Classes.raw.video + '" seamless="seamless"></iframe>');

		Instance.$video.attr("src", source)
				   .addClass(Classes.raw.video)
				   .prependTo(Instance.$videoWrapper);

		Instance.$content.prepend(Instance.$videoWrapper);

		sizeVideo();
		openLightbox();
	}

	/**
	 * @method private
	 * @name sizeVideo
	 * @description Sizes video to fit in viewport.
	 */

	function sizeVideo() {
		// Set initial vars
		Instance.windowHeight = Instance.viewportHeight = Instance.contentHeight = $Window.height() - Instance.paddingVertical;
		Instance.windowWidth  = Instance.viewportWidth  = Instance.contentWidth  = $Window.width()  - Instance.paddingHorizontal;
		Instance.videoMarginTop = 0;
		Instance.videoMarginLeft = 0;

		if (Instance.isMobile) {
			Instance.$meta.css({
				width: Instance.windowWidth
			});
			Instance.metaHeight = Instance.$meta.outerHeight(true);
			Instance.viewportHeight -= Instance.metaHeight;

			Instance.targetVideoWidth  = Instance.viewportWidth;
			Instance.targetVideoHeight = Instance.targetVideoWidth * Instance.videoRatio;

			if (Instance.targetVideoHeight > Instance.viewportHeight) {
				Instance.targetVideoHeight = Instance.viewportHeight;
				Instance.targetVideoWidth  = Instance.targetVideoHeight / Instance.videoRatio;
			}

			Instance.videoMarginTop = (Instance.viewportHeight - Instance.targetVideoHeight) / 2;
			Instance.videoMarginLeft = (Instance.viewportWidth - Instance.targetVideoWidth) / 2;
		} else {
			Instance.viewportHeight = Instance.windowHeight - Instance.margin;
			Instance.viewportWidth  = Instance.windowWidth - Instance.margin;

			Instance.targetVideoWidth  = (Instance.videoWidth > Instance.viewportWidth) ? Instance.viewportWidth : Instance.videoWidth;
			if (Instance.targetVideoWidth < Instance.minWidth) {
				Instance.targetVideoWidth = Instance.minWidth;
			}
			Instance.targetVideoHeight = Instance.targetVideoWidth * Instance.videoRatio;

			Instance.contentHeight = Instance.targetVideoHeight;
			Instance.contentWidth  = Instance.targetVideoWidth;
		}

		// Update dom

		Instance.$meta.css({
			width: Instance.contentWidth
		});

		Instance.$videoWrapper.css({
			height: Instance.targetVideoHeight,
			width: Instance.targetVideoWidth,
			marginTop: Instance.videoMarginTop,
			marginLeft: Instance.videoMarginLeft
		});

		if (!Instance.isMobile) {
			Instance.metaHeight = Instance.$meta.outerHeight(true);
			Instance.contentHeight = Instance.targetVideoHeight + Instance.metaHeight;
		}
	}

	/**
	 * @method private
	 * @name preloadGallery
	 * @description Preloads previous and next images in gallery for faster rendering.
	 * @param e [object] "Event Data"
	 */

	function preloadGallery(e) {
		var source = '';

		if (Instance.gallery.index > 0) {
			source = Instance.gallery.$items.eq(Instance.gallery.index - 1).attr("href");
			if (source.indexOf("youtube.com/embed") < 0 && source.indexOf("player.vimeo.com/video") < 0) {
				$('<img src="' + source + '">');
			}
		}
		if (Instance.gallery.index < Instance.gallery.total) {
			source = Instance.gallery.$items.eq(Instance.gallery.index + 1).attr("href");
			if (source.indexOf("youtube.com/embed") < 0 && source.indexOf("player.vimeo.com/video") < 0) {
				$('<img src="' + source + '">');
			}
		}
	}

	/**
	 * @method private
	 * @name advanceGallery
	 * @description Advances gallery base on direction.
	 * @param e [object] "Event Data"
	 */

	function advanceGallery(e) {
		Functions.killEvent(e);

		var $control = $(e.currentTarget);

		if (!Instance.isAnimating && !$control.hasClass(Classes.raw.control_disabled)) {
			Instance.isAnimating = true;

			Instance.gallery.index += ($control.hasClass(Classes.raw.control_next)) ? 1 : -1;
			if (Instance.gallery.index > Instance.gallery.total) {
				Instance.gallery.index = Instance.gallery.total;
			}
			if (Instance.gallery.index < 0) {
				Instance.gallery.index = 0;
			}

			Instance.$lightbox.addClass( [Classes.raw.loading, Classes.raw.animating].join(" "));

			Instance.$container.transition({
				property: "opacity"
			},
			function() {
				if (typeof Instance.$image !== 'undefined') {
					Instance.$image.remove();
				}
				if (typeof Instance.$videoWrapper !== 'undefined') {
					Instance.$videoWrapper.remove();
				}
				Instance.$el = Instance.gallery.$items.eq(Instance.gallery.index);

				Instance.$caption.html(Instance.formatter.call(Instance.$el, Instance));
				Instance.$position.find(Classes.position_current).html(Instance.gallery.index + 1);

				var source = Instance.$el.attr("href"),
					isVideo = ( source.indexOf("youtube.com/embed") > -1 || source.indexOf("player.vimeo.com/video") > -1 );

				if (isVideo) {
					loadVideo(source);
				} else {
					loadImage(source);
				}

				updateGalleryControls();
			});
		}
	}

	/**
	 * @method private
	 * @name updateGalleryControls
	 * @description Updates gallery control states.
	 */

	function updateGalleryControls() {
		Instance.$controls.removeClass(Classes.raw.control_disabled);
		if (Instance.gallery.index === 0) {
			Instance.$controls.filter(Classes.control_previous).addClass(RawClasses.control_disabled);
		}
		if (Instance.gallery.index === Instance.gallery.total) {
			Instance.$controls.filter(Classes.control_next).addClass(RawClasses.control_disabled);
		}
	}

	/**
	 * @method private
	 * @name onKeyDown
	 * @description Handles keypress in gallery.
	 * @param e [object] "Event data"
	 */

	function onKeyDown(e) {
		if (Instance.gallery.active && (e.keyCode === 37 || e.keyCode === 39)) {
			Functions.killEvent(e);

			Instance.$controls.filter((e.keyCode === 37) ? Classes.control_previous : Classes.control_next).trigger(Events.click);
		} else if (e.keyCode === 27) {
			Instance.$close.trigger(Events.click);
		}
	}

	/**
	 * @method private
	 * @name cloneElement
	 * @description Clones target inline element.
	 * @param id [string] "Target element id"
	 */

	function cloneElement(id) {
		var $clone = $(id).find("> :first-child").clone();
		appendObject($clone);
	}

	/**
	 * @method private
	 * @name loadURL
	 * @description Load URL into iframe.
	 * @param source [string] "Target URL"
	 */

	function loadURL(source) {
		source = source + ((source.indexOf("?") > -1) ? "&" + Instance.requestKey + "=true" : "?" + Instance.requestKey + "=true");
		var $iframe = $('<iframe class="' + Classes.raw.iframe + '" src="' + source + '"></iframe>');
		appendObject($iframe);
	}

	/**
	 * @method private
	 * @name appendObject
	 * @description Appends and sizes object.
	 * @param $object [jQuery Object] "Object to append"
	 */

	function appendObject($object) {
		Instance.$content.append($object);
		sizeContent($object);
		openLightbox();
	}

	/**
	 * @method private
	 * @name sizeContent
	 * @description Sizes jQuery object to fir in viewport.
	 * @param $object [jQuery Object] "Object to size"
	 */

	function sizeContent($object) {
		Instance.windowHeight	  = $Window.height() - Instance.paddingVertical;
		Instance.windowWidth	  = $Window.width()  - Instance.paddingHorizontal;
		Instance.objectHeight	  = $object.outerHeight(true);
		Instance.objectWidth	  = $object.outerWidth(true);
		Instance.targetHeight	  = Instance.targetHeight || (Instance.$el ? Instance.$el.data(Namespace + "-height") : null);
		Instance.targetWidth	  = Instance.targetWidth  || (Instance.$el ? Instance.$el.data(Namespace + "-width")  : null);
		Instance.maxHeight		  = (Instance.windowHeight < 0) ? Instance.minHeight : Instance.windowHeight;
		Instance.isIframe		  = $object.is("iframe");
		Instance.objectMarginTop  = 0;
		Instance.objectMarginLeft = 0;

		if (!Instance.isMobile) {
			Instance.windowHeight -= Instance.margin;
			Instance.windowWidth  -= Instance.margin;
		}

		Instance.contentHeight = (Instance.targetHeight) ? Instance.targetHeight : (Instance.isIframe || Instance.isMobile) ? Instance.windowHeight : Instance.objectHeight;
		Instance.contentWidth  = (Instance.targetWidth)  ? Instance.targetWidth  : (Instance.isIframe || Instance.isMobile) ? Instance.windowWidth  : Instance.objectWidth;

		if ((Instance.isIframe || Instance.isObject) && Instance.isMobile) {
			Instance.contentHeight = Instance.windowHeight;
			Instance.contentWidth  = Instance.windowWidth;
		} else if (Instance.isObject) {
			Instance.contentHeight = (Instance.contentHeight > Instance.windowHeight) ? Instance.windowHeight : Instance.contentHeight;
			Instance.contentWidth  = (Instance.contentWidth  > Instance.windowWidth)  ? Instance.windowWidth  : Instance.contentWidth;
		}
	}

	/**
	 * @method private
	 * @name loadError
	 * @description Error when resource fails to load.
	 * @param e [object] "Event data"
	 */

	function loadError(e) {
		var $error = $('<div class="' + Classes.raw.error + '"><p>Error Loading Resource</p></div>');

		// Clean up
		Instance.type = "element";
		Instance.$meta.remove();

		Instance.$image.off(Events.namespace);

		appendObject($error);
	}

	/**
	 * @method private
	 * @name onSwipe
	 * @description Handles swipe event
	 * @param e [object] "Event data"
	 */

	function onSwipe(e) {
		Instance.$controls.filter((e.directionX === "left") ? Classes.control_next : Classes.control_previous).trigger(Events.click);
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
	 * @name Lightbox
	 * @description A jQuery plugin for simple modals.
	 * @type widget
	 * @dependency core.js
	 * @dependency transition.js
	 */

	var Plugin = Formstone.Plugin("lightbox", {
			widget: true,

			/**
			 * @options
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param extensions [array] <"jpg", "sjpg", "jpeg", "png", "gif"> "Image type extensions"
			 * @param fixed [boolean] <false> "Flag for fixed positioning"
			 * @param formatter [function] <$.noop> "Caption format function"
			 * @param labels.close [string] <'Close'> "Close button text"
			 * @param labels.count [string] <'of'> "Gallery count separator text"
			 * @param labels.next [string] <'Next'> "Gallery control text"
			 * @param labels.previous [string] <'Previous'> "Gallery control text"
			 * @param margin [int] <50> "Margin used when sizing (single side)"
			 * @param minHeight [int] <100> "Minimum height of modal"
			 * @param minWidth [int] <100> "Minimum width of modal"
			 * @param mobile [boolean] <false> "Flag to force 'mobile' rendering"
			 * @param retina [boolean] <false> "Flag to use 'retina' sizing (halves natural sizes)"
			 * @param requestKey [string] <'fs-lightbox'> "GET variable for ajax / iframe requests"
			 * @param top [int] <0> "Target top position; over-rides centering"
			 * @param videoRadio [number] <0.5625> "Video height / width ratio (9 / 16 = 0.5625)"
			 * @param videoWidth [int] <600> "Video target width"
			 */

			defaults: {
				customClass    : "",
				extensions     : [ "jpg", "sjpg", "jpeg", "png", "gif" ],
				fixed          : false,
				formatter      : formatCaption,
				labels: {
					close      : "Close",
					count      : "of",
					next       : "Next",
					previous   : "Previous"
				},
				margin         : 50,
				minHeight      : 100,
				minWidth       : 100,
				mobile         : false,
				retina         : false,
				requestKey     : "fs-lightbox",
				top            : 0,
				videoRatio     : 0.5625,
				videoWidth     : 600
			},

			classes: [
				"loading",
				"animating",
				"fixed",
				"mobile",
				"inline",
				"iframed",
				"open",
				"overlay",
				"close",
				"loading_icon",
				"container",
				"content",
				"image",
				"video",
				"video_wrapper",
				"meta",
				"control",
				"control_previous",
				"control_next",
				"control_disabled",
				"position",
				"position_current",
				"position_total",
				"caption",
				"iframe",
				"error",
				"lock"
			],

			/**
			 * @events
			 * @event open.lightbox "Lightbox opened; Triggered on window"
			 * @event close.lightbox "Lightbox closed; Triggered on window"
			 */

			events: {
				open     : "open",
				close    : "close",

				swipe    : "swipe"
			},

			methods: {
				_setup        : setup,
				_construct    : construct,
				_destruct     : destruct,
				_resize       : resize,

				resize        : resizeLightbox
			},

			utilities: {
				_initialize    : initialize,

				close          : closeLightbox
			}
		}),

		// Localize References

		Namespace     = Plugin.namespace,
		Defaults      = Plugin.defaults,
		Classes       = Plugin.classes,
		RawClasses    = Classes.raw,
		Events        = Plugin.events,
		Functions     = Plugin.functions,
		Window        = Formstone.window,
		$Window       = Formstone.$window,
		$Body         = null,

		// Internal

		$Locks        = null,

		// Singleton

		Instance      = null;

})(jQuery, Formstone);