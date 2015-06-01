;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name setup
	 * @description Setup plugin.
	 */

	function setup() {
		$Body = Formstone.$body;
	}

	/**
	 * @method private
	 * @name delegate
	 */

	function delegate() {
		if (arguments.length && $.type(arguments[0]) !== "object") {
			pushEvent.apply(this, arguments);
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
		// Attach Scout events
		if (!Initialized && $Body.length) {
			Initialized = true;

			Defaults = $.extend(Defaults, options || {});

			// $Body.find("a").not("[" + DataKeyFull + "]").each(buildEvent);

			$Body.on("click.scout", "*[" + DataKeyFull + "]", trackEvent);
		}
	}

	/**
	 * @method private
	 * @name buildEvent
	 * @description Build events for email, phone, file types & external links
	 */

/*
	function buildEvent() {
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
*/

	/**
	 * @method private
	 * @name trackEvent
	 * @description Tracks event
	 * @param e [object] "Event data"
	 */

	function trackEvent(e) {
		// Universal Analytics
		if ($.type(Window.ga) === "function") {
			e.preventDefault();

			var $target = $(this),
				url     = $target.attr("href"),
				data    = $target.data(DataKey).split(",");

			// Trim that data
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
		// Universal Analytics
		if ($.type(Window.ga) === "function") {

			// https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference

			var event = {
				"hitType"     : "event",
				"location"    : Window.location,
				"title"       : Window.document.title
			};

			if (category) {
				event["eventCategory"]  = category;
			}
			if (action) {
				event["eventAction"]    = action;
			}
			if (label) {
				event["eventLabel"]     = label;
			}
			if (value) {
				event["eventValue"]     = value;
			}
			if (noninteraction) {
				event["nonInteraction"] = noninteraction;
			}

			// If active link, launch that ish!
			if ($.type($target) !== "undefined" && !$target.attr("data-analytics-stop")) {
				var href = ($.type($target[0].href) !== "undefined") ? $target[0].href : "",
					url  = (!href.match(/^mailto\:/i) && !href.match(/^tel\:/i) && href.indexOf(":") < 0) ? Window.location.protocol + "//" + Window.location.hostname + "/" + href : href;

				if (href !== "") {
					// Check Window target
					if ($target.attr("target")) {
						Window.open(url, $target.attr("target"));
					} else {
						event["hitCallback"] = function() {
							document.location = url;
						};
					}
				}
			}

			Window.ga("send", event);

			/*
			// May use when adding tag manager support
			if (Defaults.tracking.manager) {
				// Tag Manager
				var page = {};
				page[Defaults.tracking.variable] = url;
				Window.dataLayer = Window.dataLayer || [];

				// Push new url to varibale then tracking event
				Window.dataLayer.push(page);
				Window.dataLayer.push({
					'event': Defaults.tracking.event
				});
			} else {
				Window.ga("send", event);

				// Specific tracker - only needed if using mutiple and/or tag manager
				//var t = ga.getAll();
				//ga(t[0].get('name')+'.send', 'pageview', '/mimeo/');
			}
			*/
		}
	}

	/**
	 * @plugin
	 * @name Analytics
	 * @description A jQuery plugin for Google Analytics Events.
	 * @type utility
	 * @dependency core.js
	 */

	var Plugin = Formstone.Plugin("analytics", {
			methods: {
				_setup       : setup
			},
			utilities: {
				_delegate    : delegate
			}
		}),

		/**
		 * @options
		 */

		Defaults = {
			filetypes: /\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i
			/*
			// May use when adding tag manager support
			tracking: {
				legacy: false, // Use legacy ga code
				manager: false, // Use tag manager events
				variable: 'currentURL', // data layer variable name - macro in tag manager
				event: 'PageView' // event name - rule in tag manager
			}
			*/
		},

		// Localize References

		Window      = Formstone.window,
		$Body       = null,

		// Internal

		Initialized = false,
		DataKey     = "analytics-event",
		DataKeyFull = "data-" + DataKey;

})(jQuery, Formstone);