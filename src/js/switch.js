;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		data.enabled    = false;
		data.active     = false;

		data.classes    = $.extend(true, {}, Classes, data.classes);

		data.target     = this.data(Namespace + "-target");
		data.$target    = $(data.target).addClass(data.classes.raw.target);

		// live query for the group to avoid missing new elements
		var group       = this.data(Namespace + "-group");
		data.group      = group ? '[data-' + Namespace + '-group="' + group + '"]' : false;

		if (!data.collapse && data.group) {
			$(data.group).eq(0).attr("data-" + Namespace + "-active", "true");
		}

		data.onEnable = this.data(Namespace + "-active");

		data.$switches = $().add(this).add(data.$target);

		this.touch({
				tap: true
			})
			.on(Events.tap, data, onClick);

		// Media Query support
		$.mediaquery("bind", "(max-width:" + (data.maxWidth === Infinity ? "100000px" : data.maxWidth) + ")", {
			enter: function() {
				enable.call(data.$el, data);
			},
			leave: function() {
				disable.call(data.$el, data);
			}
		});
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		data.$switches.removeClass( [data.classes.raw.enabled, data.classes.raw.active].join(" ") )
					  .off(Events.namespace);

		this.touch("destroy");
	}

	/**
	 * @method
	 * @name activate
	 * @description Activate instance.
	 * @example $(".target").switch("activate");
	 */

	function activate(data) {
		if (data.enabled && !data.active) {
			// Deactivates grouped instances
			$(data.group).not(data.$el)[Plugin.namespace]("deactivate");

			// index in group
			var index = (data.group) ? $(data.group).index(data.$el) : null;

			data.$switches.addClass(data.classes.raw.active);

			this.trigger(Events.activate, [index]);

			data.active = true;
		}
	}

	/**
	 * @method
	 * @name deactivate
	 * @description Deactivates instance.
	 * @example $(".target").switch("deactivate");
	 */

	function deactivate(data) {
		if (data.enabled && data.active) {
			data.$switches.removeClass(data.classes.raw.active);

			this.trigger(Events.deactivate);

			data.active = false;
		}
	}

	/**
	 * @method
	 * @name enable
	 * @description Enables instance.
	 * @example $(".target").switch("enable");
	 */

	function enable(data) {
		if (!data.enabled) {
			data.$switches.addClass(data.classes.raw.enabled);

			data.enabled = true;

			this.trigger(Events.enable);

			if (data.onEnable) {
				data.active = false;
				activate.call(this, data);
			} else {
				data.active = true;
				deactivate.call(this, data);
			}
		}
	}

	/**
	 * @method
	 * @name disable
	 * @description Disables instance.
	 * @example $(".target").switch("disable");
	 */

	function disable(data) {
		if (data.enabled) {
			data.$switches.removeClass( [data.classes.raw.enabled, data.classes.raw.active].join(" ") );

			this.trigger(Events.disable);

			data.enabled = false;
		}
	}

	/**
	 * @method private
	 * @name onClick
	 * @description Handles click nav click.
	 * @param e [object] "Event data"
	 */

	function onClick(e) {
		Functions.killEvent(e);

		var data = e.data;

		if (data.active && data.collapse) {
			deactivate.call(data.$el, data);
		} else {
			activate.call(data.$el, data);
		}
	}

	/**
	 * @plugin
	 * @name Switch
	 * @description A jQuery plugin for toggling states.
	 * @type widget
	 * @dependency core.js
	 * @dependency mediaquery.js
	 * @dependency touch.js
	 */

	var Plugin = Formstone.Plugin("switch", {
			widget: true,

			/**
			 * @options
			 * @param collapse [boolean] <true> "Allow switch to collapse it's target"
			 * @param maxWidth [string] <Infinity> "Width at which to auto-disable plugin"
			 */

			defaults: {
				collapse       : true,
				maxWidth       : Infinity
			},

			classes: [
				"target",
				"enabled",
				"active"
			],

			/**
			 * @events
			 * @event activate.switch "Switch activated"
			 * @event deactivate.switch "Switch deactivated"
			 * @event enable.switch "Switch enabled"
			 * @event disable.switch "Switch diabled"
			 */

			events: {
				tap           : "tap",
				activate      : "activate",
				deactivate    : "deactivate",
				enable        : "enable",
				disable       : "disable"
			},

			methods: {
				_construct    : construct,
				_destruct     : destruct,

				// Public Methods

				activate      : activate,
				deactivate    : deactivate,
				enable        : enable,
				disable       : disable
			}
		}),

		// Localize References

		Namespace     = Plugin.namespace,
		Classes       = Plugin.classes,
		Events        = Plugin.events,
		Functions     = Plugin.functions;

})(jQuery, Formstone);