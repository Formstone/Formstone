;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name setup
	 * @description Setup plugin.
	 */

	function setup() {
		$Body = Formstone.$body;
		// Window.dataLayer = Window.dataLayer || [];
	}

	/**
	 * @method private
	 * @name setup
	 * @description Setup plugin.
	 */

	function resize() {
		if (Defaults.scrollDepth) {
			setScrollDepths();
		}
	}

	/**
	 * @method private
	 * @name delegate
	 */

	function delegate() {
		if (arguments.length && $.type(arguments[0]) !== "object") {
			if (arguments[0] === "destroy") {
				destroy.apply(this);
			} else {
				pushEvent.apply(this, arguments);
			}
		} else {
			init.apply(this, arguments);
		}

		return null;
	}

	/**
	 * @method private
	 * @name init
	 * @description Initializes plugin
	 * @param opts [object] "Initialization options"
	 */

	function init(options) {
		// Attach Analytics events
		if (!Initialized && $Body.length) {
			Initialized = true;

			GUA = ($.type(Window.ga) === "function");
			GTM = ($.type(Window.dataLayer) !== "undefined" && $.type(Window.dataLayer.push) === "function");

			Defaults = $.extend(Defaults, options || {});

			if (Defaults.autoEvents) {
				$Body.find("a").not("[" + DataKeyFull + "]").each(buildEvent);
			}

			if (Defaults.scrollDepth) {
				setScrollDepths();
				$Window.on(Events.scroll, trackScroll);
				$Window.one(Events.load, resize);
			}

			$Body.on(Events.click, "*[" + DataKeyFull + "]", trackEvent);
		}
	}

	/**
	 * @method private
	 * @name destroy
	 * @description Destroys plugin
	 */

	function destroy() {
		if (Initialized && $Body.length) {
			$Window.off(Events.namespace);
			$Body.off(Events.namespace);
		}
	}

	/**
	 * @method private
	 * @name buildEvent
	 * @description Build events for email, phone, file types & external links
	 */

	function buildEvent() {
		if (Defaults.autoEvents) {
			var $target = $(this),
				href = ($.type($target[0].href) !== "undefined") ? $target[0].href : "",
				domain = document.domain.split(".").reverse(),
				internal = href.match(domain[1] + "." + domain[0]) !== null,
				eventData;

			if (href.match(/^mailto\:/i)) {
				// Email
				eventData = "Email, Click, " + href.replace(/^mailto\:/i, "");
			} else if (href.match(/^tel\:/i)) {
				// Action
				eventData = "Telephone, Click, " + href.replace(/^tel\:/i, "");
			} else if (href.match(Defaults.filetypes)) {
				// Files
				var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
				eventData = "File, Download:" + extension[0] + ", " + href.replace(/ /g,"-");
			} else if (!internal) {
				// External Link
				eventData = "ExternalLink, Click, " + href;
			}

			if (eventData) {
				$target.attr(DataKeyFull, eventData);
			}
		}
	}

	/**
	 * @method private
	 * @name trackScroll
	 * @description Debounces scroll tracking
	 */

	function trackScroll(e) {
		Functions.startTimer(ScrollTimer, 250, doTrackScroll);
	}

	/**
	 * @method private
	 * @name doTrackScroll
	 * @description Handle scroll tracking
	 */

	function doTrackScroll() {
		var scrollTop = Formstone.$window.scrollTop() + Formstone.windowHeight,
			step      = (1 / Defaults.scrollStops),
			depth     = step,
			key;

		for (var i = 1; i <= Defaults.scrollStops; i++) {
			key = ( Math.round(100 * depth) ).toString();

			if (!ScrollDepths[ ScrollWidth ][ key ].passed && scrollTop > ScrollDepths[ ScrollWidth ][ key ].edge) {
				ScrollDepths[ ScrollWidth ][ key ].passed = true;

				// Push data
				pushEvent('ScrollDepth', ScrollWidth, key);
			}

			depth += step;
		}
	}

	/**
	 * @method private
	 * @name setScrollDepths
	 * @description Sets scroll depths at specific widths
	 */

	function setScrollDepths() {
		var mqState    = $.mediaquery('state'),
			bodyHeight = $Body.outerHeight(),
			newDepths  = {},
			step       = (1 / Defaults.scrollStops),
			depth      = step,
			top        = 0,
			key;

		if (mqState.minWidth) {
			ScrollWidth = 'MinWidth:' + mqState.minWidth + 'px';
		}

		for (var i = 1; i <= Defaults.scrollStops; i++) {
			top = parseInt(bodyHeight * depth);
			key = ( Math.round(100 * depth) ).toString();

			newDepths[ key ] = {
				edge       : ( key === '100' ) ? top - 10 : top,
				passsed    : ( ScrollDepths[ ScrollWidth ] && ScrollDepths[ ScrollWidth ][ key ] ) ? ScrollDepths[ ScrollWidth ][ key ].passed : false
			};

			depth += step;
		}

		ScrollDepths[ ScrollWidth ] = newDepths;
	}

	/**
	 * @method private
	 * @name trackEvent
	 * @description Tracks event
	 * @param e [object] "Event data"
	 */

	function trackEvent(e) {
		if (GUA || GTM) {
			var $target = $(this),
				url     = $target.attr("href"),
				data    = $target.data(DataKey).split(",");

			if (Defaults.eventCallback) {
				e.preventDefault();
			}

			// Trim data
			for (var i in data) {
				if (data.hasOwnProperty(i)) {
					data[i] = $.trim(data[i]);
				}
			}

			// Push data
			pushEvent(data[0], data[1], (data[2] || url), data[3], data[4], $target);
		}
	}

	/**
	 * @method private
	 * @name pushEvent
	 * @description Push event to Universal Analytics
	 */

	function pushEvent(category, action, label, value, noninteraction, $target) {
		if (GUA || GTM) {
			// https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference
			var event = {
				"hitType"     : "event",
				"location"    : Window.location,
				"title"       : Window.document.title
			};

			// http://www.simoahava.com/analytics/create-a-generic-event-tag/
			event["eventCategory"]  = category || undefined;
			event["eventAction"]    = action || undefined;
			event["eventLabel"]     = label || undefined;
			event["eventValue"]     = value || undefined;
			event["nonInteraction"] = noninteraction || undefined;

			// If active link, launch that ish!
			if ($.type($target) !== "undefined" && !$target.attr("data-analytics-stop")) {
				var href = ($.type($target[0].href) !== "undefined") ? $target[0].href : "",
					url  = (!href.match(/^mailto\:/i) && !href.match(/^tel\:/i) && href.indexOf(":") < 0) ? Window.location.protocol + "//" + Window.location.hostname + "/" + href : href;

				if (href !== "") {
					// Check Window target
					if ($target.attr("target")) {
						Window.open(url, $target.attr("target"));
					} else if (Defaults.eventCallback) {
						var callbackType = "hitCallback"; // GUA ? "hitCallback" : "eventCallback";

						event[ callbackType ] = function() {
							if (LinkTimer) {
								Functions.clearTimer(LinkTimer);

								openURL( url );
							}
						};

						// Event timeout
						LinkTimer = Functions.startTimer(LinkTimer, Defaults.eventTimeout, event[ callbackType ]);
					}
				}
			}

			// if (GUA) {
				// Push to all trackers, even if GTM active
				var trackers = Window.ga.getAll();

				for (var i = 0, count = trackers.length; i < count; i++) {
					Window.ga( trackers[i].get("name") + ".send", event);
				}
			// } else if (GTM) {
			// 	event["event"] = "gaTriggerEvent";
			// 	Window.dataLayer.push(event);
			// }
		}
	}

	/**
	 * @method private
	 * @name openURL
	 * @description Launch a url
	 */
	function openURL(url) {
		document.location = url;
	}

	/**
	 * @plugin
	 * @name Analytics
	 * @description A jQuery plugin for Google Universal Analytics Events.
	 * @type utility
	 * @dependency jQuery
	 * @dependency core.js
	 * @dependency mediaquery.js
	 */

	var Plugin = Formstone.Plugin("analytics", {
			methods: {
				_setup       : setup,
				_resize      : resize
			},
			utilities: {
				_delegate    : delegate
			}
		}),

		/**
		 * @options
		 * @param autoEvents [boolean] <false> "Flag to bind auto-events to mailto, tel, files and external links"
		 * @param fileTypes [regex] <> "File types for binding auto-events"
		 * @param eventCallback [boolean] <false> "Flag to use event callbacks when navigating"
		 * @param eventTimeout [int] <1000> "Event failure timeout"
		 * @param scrollDepth [boolean] <false> "Flag to track scroll depth events"
		 * @param scrollStops [int] <5> "Number of scroll increments to track"
		 * @param trackerName [string] <'gaTracker'> "Custom tracker name"
		 */

		Defaults = {
			autoEvents     : false,
			filetypes      : /\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,
			eventCallback  : false,
			eventTimeout   : 1000,
			scrollDepth    : false,
			scrollStops    : 5,
			trackerName    : "all"
		},

		// Localize References

		Window       = Formstone.window,
		$Window      = Formstone.$window,
		$Body        = null,

		Functions    = Plugin.functions,
		Events       = Plugin.events,

		// Internal

		Initialized  = false,
		DataKey      = "analytics-event",
		DataKeyFull  = "data-" + DataKey,

		ScrollDepths = {},
		ScrollTimer  = null,
		ScrollWidth  = 'Site',
		LinkTimer    = null,

		GUA = false,
		GTM = false;

})(jQuery, Formstone);