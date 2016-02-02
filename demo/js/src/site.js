/*-------------------------------------------
	Site
-------------------------------------------*/

	// !IE
	var IE8 = IE8 || false,
	    IE9 = IE9 || false;

	// !Site
	var Site = (function($, window) {

		// !BaseController
		var BaseController = function() {
			this.namespace    = "";

			this.minWidth     = 320;
			this.maxWidth     = Infinity;
			this.scrollTop    = 0;
			this.windowHeight = 0;
			this.windowWidth  = 0;

			this.window       = null;
			this.doc          = null;

			this.$window      = null;
			this.$doc         = null;
			this.$body        = null;

			// Public modules
			this.modules      = [];

			this.onInit       = [];
			this.onRespond    = [];
			this.onResize     = [];
			this.onScroll     = [];

			this.minXS = "@mq_min_xs";
			this.minSM = "@mq_min_sm";
			this.minMD = "@mq_min_md";
			this.minLG = "@mq_min_lg";
			this.minXL = "@mq_min_xl";

			this.maxXS = this.minXS - 1;
			this.maxSM = this.minSM - 1;
			this.maxMD = this.minMD - 1;
			this.maxLG = this.minLG - 1;
			this.maxXL = this.minXL - 1;

			this.minHTsm = parseInt("@mq_min_ht_sm", 10);
			this.minHT   = parseInt("@mq_min_ht", 10);

			this.maxHTsm = this.minHTsm - 1;
			this.maxHT   = this.minHT - 1;

			this.touch = false;
		};

		$.extend(BaseController.prototype, {
			// Init
			init: function(namespace) {
				// Objects
				this.namespace = namespace;
				this.window    = window;
				this.doc       = document;
				this.$window   = $(window);
				this.$doc      = $(document);
				this.$body     = $("body");
				this.touch     = $("html").hasClass("touch");

				if ($.mediaquery) {
					$.mediaquery({
						minWidth: [ this.minXS, this.minSM, this.minMD, this.minLG, this.minXL ],
						maxWidth: [ this.maxXL, this.maxLG, this.maxMD, this.maxSM, this.maxXS ],
						minHeight: [ this.minHTsm, this.minHT ],
						maxHeight: [ this.maxHT, this.maxHTsm ]
					});
				}

				if ($.cookie) {
					$.cookie({
						path: "/"
					});
				}

				// Init modules before scroll/resize/respond
				iterate(this.onInit);

				this.$window.on("mqchange.mediaquery", onRespond)
							.on(Controller.ns("resize"), onResize)
							.on(Controller.ns("scroll"), onScroll);

				this.resize();
			},
			// Namespace Text
			ns: function(text) {
				return text + "." + this.namespace;
			},
			// Resize Trigger
			resize: function() {
				this.$window.trigger(Controller.ns("resize"));
			},
			// Scroll Trigger
			scroll: function() {
				this.$window.trigger(Controller.ns("scroll"));
			},
			// Kill event
			killEvent: function(e) {
				if (e && e.preventDefault) {
					e.preventDefault();
					e.stopPropagation();
				}
			},
			// Start timer
			startTimer: function(timer, time, callback, interval) {
				this.clearTimer(timer);
				return (interval) ? setInterval(callback, time) : setTimeout(callback, time);
			},
			// Clear timer
			clearTimer: function(timer, interval) {
				if (timer) {
					if (interval) {
						clearInterval(timer);
					} else {
						clearTimeout(timer);
					}

					timer = null;
				}
			}
		});

		// Internal Instance
		var Controller = new BaseController();

		// Loop through callbacks
		function iterate(items) {
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					items[i].apply(Controller, Array.prototype.slice.call(arguments, 1));
				}
			}
		}

		// Media Query Change Handler
		function onRespond(e, state) {
			Controller.minWidth = state.minWidth;

			iterate(Controller.onRespond, state);
		}

		// Resize Handler
		function onResize() {
			Controller.windowWidth  = Controller.$window.width();
			Controller.windowHeight = Controller.$window.height();

			iterate(Controller.onResize);
		}

		// Scroll Handler
		function onScroll() {
			Controller.scrollTop = Controller.$window.scrollTop();

			iterate(Controller.onScroll);
		}

		// Return Internal Instance
		return Controller;
	})(jQuery, window);

	// !Ready
	$(document).ready(function() {
		Site.init("Namespace");
	});