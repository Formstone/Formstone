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

		data.mq         = "(max-width:" + (data.maxWidth === Infinity ? "100000px" : data.maxWidth) + ")";

		// live query for linked to avoid missing new elements
		var linked      = this.data(Namespace + "-linked");
		data.linked     = linked ? '[data-' + Namespace + '-linked="' + linked + '"]' : false;

		// live query for the group to avoid missing new elements
		var group       = this.data(Namespace + "-group");
		data.group      = group ? '[data-' + Namespace + '-group="' + group + '"]' : false;

		if (!data.collapse && data.group) {
			$(data.group).eq(0).attr("data-" + Namespace + "-active", "true");
		}

		// Should be activate when enabled
		data.onEnable = this.data(Namespace + "-active");

		data.$swaps = $().add(this).add(data.$target);

		this.fsTouch({
				tap: true
			})
			.on(Events.tap + data.dotGuid, data, onClick);

		// Media Query support
		$.fsMediaquery("bind", data.rawGuid, data.mq, {
			enter: function() {
				enable.call(data.$el, data, true);
			},
			leave: function() {
				disable.call(data.$el, data, true);
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
		$.fsMediaquery("unbind", data.rawGuid);

		data.$swaps.removeClass( [data.classes.raw.enabled, data.classes.raw.active].join(" ") )
				   .off(Events.namespace);

		this.fsTouch("destroy");
	}

	/**
	 * @method
	 * @name activate
	 * @description Activate instance.
	 * @example $(".target").swap("activate");
	 */

	function activate(data, fromLinked) {
		if (data.enabled && !data.active) {
			if (data.group && !fromLinked) {
				// Deactivates grouped instances
				$(data.group).not(data.$el).not(data.linked)[Plugin.namespaceClean]("deactivate");
			}

			// index in group
			var index = (data.group) ? $(data.group).index(data.$el) : null;

			data.$swaps.addClass(data.classes.raw.active);

			if (!fromLinked) {
				if (data.linked) {
					// Linked handles
					$(data.linked).not(data.$el).swap("activate", true);
				}

				this.trigger(Events.activate, [index]);
			}

			data.active = true;
		}
	}

	/**
	 * @method
	 * @name deactivate
	 * @description Deactivates instance.
	 * @example $(".target").swap("deactivate");
	 */

	function deactivate(data, fromLinked) {
		if (data.enabled && data.active) {
			data.$swaps.removeClass(data.classes.raw.active);

			if (!fromLinked) {
				if (data.linked) {
					// Linked handles
					$(data.linked).not(data.$el).swap("deactivate", true);
				}

				this.trigger(Events.deactivate);
			}

			data.active = false;
		}
	}

	/**
	 * @method
	 * @name enable
	 * @description Enables instance.
	 * @example $(".target").swap("enable");
	 */

	function enable(data, fromLinked) {
		if (!data.enabled) {
			data.enabled = true;

			data.$swaps.addClass(data.classes.raw.enabled);

			if (!fromLinked) {
				// Linked handles
				$(data.linked).not(data.$el).swap("enable");
			}

			this.trigger(Events.enable);

			if (data.onEnable) {
				data.active = true;
				data.$swaps.addClass(data.classes.raw.active);
				// activate.call(this, data);
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
	 * @example $(".target").swap("disable");
	 */

	function disable(data, fromLinked) {
		if (data.enabled) {
			data.enabled = false;

			data.$swaps.removeClass( [data.classes.raw.enabled, data.classes.raw.active].join(" ") );

			if (!fromLinked) {
				// Linked handles
				$(data.linked).not(data.$el).swap("disable");
			}

			this.trigger(Events.disable);
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
	 * @name Swap
	 * @description A jQuery plugin for toggling states.
	 * @type widget
	 * @dependency jQuery
	 * @dependency core.js
	 * @dependency mediaquery.js
	 * @dependency touch.js
	 */

	var Plugin = Formstone.Plugin("swap", {
			widget: true,

			/**
			 * @options
			 * @param collapse [boolean] <true> "Allow swap to collapse it's target"
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
			 * @event activate.swap "Swap activated"
			 * @event deactivate.swap "Swap deactivated"
			 * @event enable.swap "Swap enabled"
			 * @event disable.swap "Swap diabled"
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