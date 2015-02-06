;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name resize
	 * @description Handles window resize
	 */

	function resize(windowWidth) {
		Functions.iterate.call($Instances, resizeInstance);
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
		var i;

		data.maxWidth = (data.maxWidth === Infinity ? "100000px" : data.maxWidth);
		data.mq       = "(min-width:" + data.minWidth + ") and (max-width:" + data.maxWidth + ")";
		data.mqGuid   = RawClasses.base + "__" + (GUID++);

		// Legacy browser support
		if (!Formstone.support.transform) {
			data.useMargin = true;
		}

		// Build controls and pagination
		var controlsHtml = '',
			paginationHtml = '';

		if (data.controls) {
			controlsHtml += '<div class="' + RawClasses.controls + '">';
			controlsHtml += '<button type="button" class="' + [RawClasses.control, RawClasses.control_previous].join(" ")+ '">' + data.labels.previous + '</button>';
			controlsHtml += '<button type="button" class="' + [RawClasses.control, RawClasses.control_next].join(" ")+ '">' + data.labels.next + '</button>';
			controlsHtml += '</div>';
		}

		if (data.pagination) {
			paginationHtml += '<div class="' + RawClasses.pagination + '">';
			paginationHtml += '</div>';
		}

		// Modify dom
		this.addClass( [RawClasses.base, data.customClass].join(" ") )
			.wrapInner('<div class="' + RawClasses.container + '"><div class="' + RawClasses.canister + '"></div></div>')
			.append(controlsHtml)
			.wrapInner('<div class="' + RawClasses.viewport + '"></div>')
			.append(paginationHtml);

		data.$viewport           = this.find(Classes.viewport).eq(0);
		data.$container          = this.find(Classes.container).eq(0);
		data.$canister           = this.find(Classes.canister).eq(0);
		data.$controls           = this.find(Classes.controls).eq(0);
		data.$pagination         = this.find(Classes.pagination).eq(0);
		data.$items              = data.$canister.children().addClass(RawClasses.item);
		data.$controlItems       = data.$controls.find(Classes.control);
		data.$paginationItems    = data.$pagination.find(Classes.page);
		data.$images             = data.$canister.find("img");

		data.index           = 0;
		data.enabled         = false;
		data.leftPosition    = 0;
		data.totalImages     = data.$images.length;
		data.autoTimer       = null;

		if ($.type(data.show) === "object") {
			var show = data.show,
				keys = [];

			for (i in show) {
				if (show.hasOwnProperty(i)) {
					keys.push(i);
				}
			}

			keys.sort(Functions.sortAsc);
			data.show = {};

			for (i in keys) {
				if (keys.hasOwnProperty(i)) {
					data.show[ keys[i] ] = {
						width: parseInt( keys[i] ),
						count: show[ keys[i] ]
					};
				}
			}
		}

		// Media Query support
		$.mediaquery("bind", data.mqGuid, data.mq, {
			enter: function() {
				enable.call(data.$el, data);
			},
			leave: function() {
				disable.call(data.$el, data);
			}
		});

		// Watch Images
		if (data.totalImages > 0) {
			data.loadedImages = 0;
			for (i = 0; i < data.totalImages; i++) {
				var $img = data.$images.eq(i);
				$img.one(Events.load, data, onImageLoad);

				if ($img[0].complete || $img[0].height) {
					$img.trigger(Events.load);
				}
			}
		}

		// Auto timer
		if (data.autoAdvance) {
			data.autoTimer = Functions.startTimer(data.autoTimer, data.autoTime, function() {
				autoAdvance(data);
			}, true);
		}

		cacheInstances();
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		Functions.clearTimer(data.autoTimer);

		disable.call(this, data);

		$.mediaquery("unbind", data.mqGuid, data.mq);

		data.$items.removeClass( [RawClasses.item, RawClasses.visible].join(" ") )
				   .unwrap().unwrap();

		if (data.pagination) {
			data.$pagination.remove();
		}
		if (data.controls) {
			data.$controls.remove();
		}

		this.removeClass( [RawClasses.base, RawClasses.enabled, RawClasses.animated, data.customClass].join(" ") );

		cacheInstances();
	}

	/**
	 * @method
	 * @name disable
	 * @description Disables instance of plugin
	 * @example $(".target").carousel("disable");
	 */

	function disable(data) {
		if (data.enabled) {
			Functions.clearTimer(data.autoTimer);

			data.enabled = false;

			this.removeClass( [RawClasses.enabled, RawClasses.animated].join(" ") )
				.off(Events.namespace);

			data.$canister.touch("destroy")
						  .off(Events.namespace)
						  .attr("style", "")
						  .css( Functions.prefix(TransitionProperty, "none") );

			data.$items.css({
				width: "",
				height: ""
			});

			data.$controls.removeClass(RawClasses.visible);
			data.$pagination.removeClass(RawClasses.visible)
							.html("");

			if (data.useMargin) {
				data.$canister.css({
					marginLeft: ""
				});
			} else {
				data.$canister.css( Functions.prefix(TransformProperty, "") );
			}

			data.index = 0;
		}
	}

	/**
	 * @method
	 * @name enable
	 * @description Enables instance of plugin
	 * @example $(".target").carousel("enable");
	 */

	function enable(data) {
		if (!data.enabled) {
			data.enabled = true;

			this.addClass(RawClasses.enabled)
				.on(Events.clickTouchStart, Classes.control, data, onAdvance)
				.on(Events.clickTouchStart, Classes.page, data, onSelect);

			data.$canister.touch({
				axis: "x",
				pan: true,
				swipe: true
			}).on(Events.panStart, data, onPanStart)
			  .on(Events.pan, data, onPan)
			  .on(Events.panEnd, data, onPanEnd)
			  .on(Events.swipe, data, onSwipe)
			  .css( Functions.prefix(TransitionProperty, "") );

			resizeInstance.call(this, data);
		}
	}

	/**
	 * @method
	 * @name resize
	 * @description Resizes instance
	 * @example $(".target").carousel("resize");
	 */

	/**
	 * @method private
	 * @name resizeInstance
	 * @description Resizes each instance
	 * @param data [object] "Instance data"
	 */

	function resizeInstance(data) {
		if (data.enabled) {
			var i,
				j,
				$items,
				$first,
				height;

			data.count = data.$items.length;

			if (data.count < 1) { // avoid empty carousels
				return;
			}

			this.removeClass(RawClasses.animated);

			// data.viewportWidth  = data.$viewport.outerWidth(false);
			data.containerWidth = data.$container.outerWidth(false);

			data.visible   = calculateVisible(data);
			data.perPage   = data.paged ? 1 : data.visible;

			data.itemMargin = parseInt(data.$items.eq(0).css("marginRight")) + parseInt(data.$items.eq(0).css("marginLeft"));
			data.itemWidth  = (data.containerWidth - (data.itemMargin * (data.visible - 1))) / data.visible;
			data.itemHeight = 0;

			data.pageWidth = data.paged ? data.itemWidth : data.containerWidth;
			data.pageCount = Math.ceil(data.count / data.perPage);

			data.$canister.css({
				width: ((data.pageWidth + data.itemMargin) * data.pageCount)
			});

			data.$items.css({
				width: data.itemWidth,
				height: ""
			}).removeClass(RawClasses.visible);

			// initial page
			data.pages = [];

			for (i = 0, j = 0; i < data.count; i += data.perPage) {
				$items = data.$items.slice(i, i + data.perPage);

				if ($items.length < data.perPage) {
					if (i === 0) {
						$items = data.$items;
					} else {
						$items = data.$items.slice(data.$items.length - data.perPage);
					}
				}

				$first = $items.eq(0);
				height = $first.outerHeight();

				data.pages.push({
					left      : $first.position().left,
					height    : height,
					$items    : $items
				});

				if (height > data.itemHeight) {
					data.itemHeight = height;
				}

				j++;
			}

			if (data.paged) {
				data.pageCount -=  (data.count % data.visible);
			}

			data.maxMove = -data.pages[ data.pageCount - 1 ].left;

			// auto height
			if (data.autoHeight) {
				data.$items.css({
					height: data.itemHeight
				});
			}

			// Reset Page Count
			var html = '';
			for (i = 0; i < data.pageCount; i++) {
				html += '<button type="button" class="' + RawClasses.page + '">' + (i + 1) + '</button>';
			}
			data.$pagination.html(html);

			// update pagination
			if (data.pageCount <= 1) {
				data.$controls.removeClass(RawClasses.visible);
				data.$pagination.removeClass(RawClasses.visible);
			} else {
				data.$controls.addClass(RawClasses.visible);
				data.$pagination.addClass(RawClasses.visible);
			}
			data.$paginationItems = data.$el.find(Classes.page);

			positionCanister(data, data.index, false);

			setTimeout(function() {
				data.$el.addClass(RawClasses.animated);
			}, 5);
		}
	}

	/**
	 * @method
	 * @name reset
	 * @description Resets instance after item change
	 * @example $(".target").carousel("reset");
	 */

	/**
	 * @method private
	 * @name resetInstance
	 * @description Resets instance after item change
	 * @param data [object] "Instance data"
	 */

	function resetInstance(data) {
		if (data.enabled) {
			data.$items = data.$canister.children().addClass(RawClasses.item);

			resizeInstance.call(this, data);
		}
	}

	/**
	 * @method
	 * @name jump
	 * @description Jump instance of plugin to specific page
	 * @example $(".target").carousel("jump", 1);
	 */

	/**
	 * @method private
	 * @name jumpToItem
	 * @description Jump instance of plugin to specific page
	 * @param data [object] "Instance data"
	 * @param index [int] "New index"
	 */

	function jumpToItem(data, index) {
		if (data.enabled) {
			Functions.clearTimer(data.autoTimer);

			positionCanister(data, index-1);
		}
	}

	/**
	 * @method
	 * @name previous
	 * @description Move to the previous item
	 * @example $(".target").carousel("previous");
	 */

	/**
	 * @method private
	 * @name previousItem
	 * @description Move to next item
	 * @param data [object] "Instance data"
	 */

	function previousItem(data) {
		var index = data.index - 1;

		if (data.infinite && index < 0) {
			index = data.pageCount;
		}

		positionCanister(data, index);
	}

	/**
	 * @method
	 * @name next
	 * @description Move to next item
	 * @param data [object] "Instance data"
	 */

	/**
	 * @method private
	 * @name nextItem
	 * @description Move to next item
	 * @example $(".target").carousel("next");
	 */

	function nextItem(data) {
		var index = data.index + 1;

		if (data.infinite && index >= data.pageCount) {
			index = 0;
		}

		positionCanister(data, index);
	}

	/**
	 * @method private
	 * @name onImageLoad
	 * @description Handles child image load
	 * @param e [object] "Event data"
	 */

	function onImageLoad(e) {
		var data = e.data;

		data.loadedImages++;

		if (data.loadedImages === data.totalImages) {
			resizeInstance.call(data.$el, data);
		}
	}

	/**
	 * @method private
	 * @name autoAdvance
	 * @description Handles auto advancement
	 * @param data [object] "Instance data"
	 */

	function autoAdvance(data) {
		var index = data.index + 1;

		if (index >= data.pageCount) {
			index = 0;
		}

		positionCanister(data, index);
	}

	/**
	 * @method private
	 * @name onAdvance
	 * @description Handles item advancement
	 * @param e [object] "Event data"
	 */

	function onAdvance(e) {
		Functions.killEvent(e);

		var data = e.data,
			index = data.index + ($(e.currentTarget).hasClass(RawClasses.control_next) ? 1 : -1);

		Functions.clearTimer(data.autoTimer);
		positionCanister(data, index);
	}

	/**
	 * @method private
	 * @name onSelect
	 * @description Handles item select
	 * @param e [object] "Event data"
	 */

	function onSelect(e) {
		Functions.killEvent(e);

		var data = e.data,
			index = data.$paginationItems.index($(e.currentTarget));

		Functions.clearTimer(data.autoTimer);
		positionCanister(data, index);
	}

	/**
	 * @method private
	 * @name position
	 * @description Handles updating instance position
	 * @param data [object] "Instance data"
	 * @param index [int] "Item index"
	 */

	function positionCanister(data, index, animate) {
		if (index < 0) {
			index = (data.infinite) ? data.pageCount-1 : 0;
		}
		if (index >= data.pageCount) {
			index = (data.infinite) ? 0 : data.pageCount-1;
		}

		if (data.pages[index]) {
			data.leftPosition = -data.pages[index].left;
		}

		if (data.leftPosition < data.maxMove) {
			data.leftPosition = data.maxMove;
		}
		if (data.leftPosition > 0 || isNaN(data.leftPosition)) {
			data.leftPosition = 0;
		}

		if (data.useMargin) {
			data.$canister.css({
				marginLeft: data.leftPosition
			});
		} else {
			if (animate === false) {
				data.$canister.css( Functions.prefix(TransitionProperty, "none") )
							  .css( Functions.prefix(TransformProperty, "translate3d("+data.leftPosition+"px, 0, 0)") );

				// Slight delay before adding transitions backs
				setTimeout(function() {
					data.$canister.css( Functions.prefix(TransitionProperty, "") );
				}, 5);
			} else {
				data.$canister.css( Functions.prefix(TransformProperty, "translate3d("+data.leftPosition+"px, 0, 0)") );
			}
		}

		// Update classes
		data.$items.removeClass(RawClasses.visible);
		data.pages[index].$items.addClass(RawClasses.visible);

		if (animate !== false && index !== data.index && (data.infinite || (index > -1 && index < data.pageCount)) ) {
			data.$el.trigger(Events.update, [ index ]);
		}

		data.index = index;

		updateControls(data);
	}

	/**
	 * @method private
	 * @name updateControls
	 * @description Handles updating instance controls
	 * @param data [object] "Instance data"
	 */

	function updateControls(data) {
		data.$paginationItems.removeClass(RawClasses.active)
							 .eq(data.index)
							 .addClass(RawClasses.active);

		if (data.infinite) {
			data.$controlItems.addClass(RawClasses.visible);
		} else if (data.pageCount < 1) {
			data.$controlItems.removeClass(RawClasses.visible);
		} else {
			data.$controlItems.addClass(RawClasses.visible);

			if (data.index <= 0) {
				data.$controlItems.filter(Classes.control_previous).removeClass(RawClasses.visible);
			} else if (data.index >= data.pageCount || data.leftPosition === data.maxMove) {
				data.$controlItems.filter(Classes.control_next).removeClass(RawClasses.visible);
			}
		}
	}

	/**
	 * @method private
	 * @name calculateVisible
	 * @description Determines how many items should show at screen width
	 * @param data [object] "Instance data"
	 * @return [int] "New visible count"
	 */

	function calculateVisible(data) {
		if ($.type(data.show) === "object") {
			for (var i in data.show) {
				if (data.show.hasOwnProperty(i) && Formstone.windowWidth >= data.show[i].width) {
					return (data.fill && data.count < data.show[i].count) ? data.count : data.show[i].count;
				}
			}
			return 1;
		}

		return (data.fill && data.count < data.show) ? data.count : data.show;
	}

	/**
	 * @method private
	 * @name onPanStart
	 * @description Handles pan start event
	 * @param e [object] "Event data"
	 */

	function onPanStart(e) {
		var data = e.data;

		if (data.useMargin) {
			data.leftPosition = parseInt(data.$canister.css("marginLeft"));
		} else {
			var matrix = data.$canister.css(TransformProperty).split(",");
			data.leftPosition = parseInt(matrix[4]); // ?
		}

		data.$canister.css( Functions.prefix(TransitionProperty, "none") );

		onPan(e);

		data.isTouching = true;
	}

	/**
	 * @method private
	 * @name onPan
	 * @description Handles pan event
	 * @param e [object] "Event data"
	 */

	function onPan(e) {
		var data = e.data;

		data.touchLeft = data.leftPosition + e.deltaX;

		if (data.touchLeft > 0) {
			data.touchLeft = 0;
		}
		if (data.touchLeft < data.maxMove) {
			data.touchLeft = data.maxMove;
		}

		if (data.useMargin) {
			data.$canister.css({
				marginLeft: data.touchLeft
			});
		} else {
			data.$canister.css( Functions.prefix(TransformProperty, "translate3d("+data.touchLeft+"px, 0, 0)") );
		}
	}

	/**
	 * @method private
	 * @name onPanEnd
	 * @description Handles pan end event
	 * @param e [object] "Event data"
	 */

	function onPanEnd(e) {
		var data = e.data,
			index = (e.deltaX > -50 && e.deltaX < 50) ? data.index : data.index + ((e.directionX === "left") ? 1 : -1);

		endTouch(data, index);
	}

	/**
	 * @method private
	 * @name onSwipe
	 * @description Handles swipe event
	 * @param e [object] "Event data"
	 */

	function onSwipe(e) {
		var data = e.data,
			index = data.index + ((e.directionX === "left") ? 1 : -1);

		endTouch(data, index);
	}

	/**
	 * @method private
	 * @name endTouch
	 * @description Cleans up touch interactions
	 * @param data [object] "Instance data"
	 * @param index [object] "New index"
	 */

	function endTouch(data, index) {
		data.$canister.css( Functions.prefix(TransitionProperty, "") );

		positionCanister(data, index);

		data.isTouching = false;
	}

	/**
	 * @plugin
	 * @name Carousel
	 * @description A jQuery plugin for simple content carousels.
	 * @type widget
	 * @dependency core.js
	 * @dependency mediaquery.js
	 * @dependency touch.js
	 */

	var Plugin = Formstone.Plugin("carousel", {
			widget: true,

			/**
			 * @options
			 * @param autoAdvance [boolean] <false> "Flag to auto advance items"
			 * @param autoHeight [boolean] <false> "Flag to auto-size items"
			 * @param autoTime [int] <8000> "Auto advance time"
			 * @param controls [boolean] <true> "Flag to draw controls"
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param fill [boolean] <false> "Flag to fill viewport if item count is less then show count"
			 * @param infinite [boolean] <false> "Flag for looping items"
			 * @param labels.next [string] <'Next'> "Control text"
			 * @param labels.previous [string] <'Previous'> "Control text"
			 * @param maxWidth [string] <'Infinity'> "Width at which to auto-disable plugin"
			 * @param minWidth [string] <'0'> "Width at which to auto-disable plugin"
			 * @param paged [boolean] <false> "Flag for paged items"
			 * @param pagination [boolean] <true> "Flag to draw pagination"
			 * @param show [int / object] <1> "Items visible per page; Object for responsive counts"
			 * @param sized [boolean] <true> "Flag for auto-sizing items"
			 * @param useMargin [boolean] <false> "Use margins instead of css transitions (legacy browser support)"
			 */

			defaults: {
				autoAdvance    : false,
				autoHeight     : false,
				autoTime       : 8000,
				controls       : true,
				customClass    : "",
				fill           : false,
				infinite       : false,
				labels: {
					next       : "Next",
					previous   : "Previous"
				},
				maxWidth       : Infinity,
				minWidth       : '0px',
				paged          : false,
				pagination     : true,
				show           : 1,
				sized          : true,
				useMargin      : false
			},

			classes: [
				"viewport",
				"container",
				"canister",
				"item",
				"controls",
				"control",
				"pagination",
				"page",

				"animated",
				"enabled",
				"visible",
				"active",

				"control_previous",
				"control_next"
			],

			/**
			 * @events
			 * @event update.carousel "Carousel position updated"
			 */

			events: {
				update      : "update",
				panStart    : "panstart",
				pan         : "pan",
				panEnd      : "panend",
				swipe       : "swipe"
			},

			methods: {
				_construct    : construct,
				_destruct     : destruct,
				_resize       : resize,

				disable       : disable,
				enable        : enable,
				jump          : jumpToItem,
				previous      : previousItem,
				next          : nextItem,
				reset         : resetInstance,
				resize        : resizeInstance
			}
		}),

		// Localize References

		Classes        = Plugin.classes,
		RawClasses     = Classes.raw,
		Events         = Plugin.events,
		Functions      = Plugin.functions,
		GUID           = 0,

		$Instances     = [],

		TransformProperty     = Formstone.transform,
		TransitionProperty    = Formstone.transition;

})(jQuery, Formstone);