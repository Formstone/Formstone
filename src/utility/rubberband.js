;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method
	 * @name delegate
	 * @param opts [object] "Plugin options"
	 */

	function delegate(options) {
		if (Formstone.matchMediaSupport) {
			if (typeof options === "object") {
				initialize.apply(this, arguments);
			} else {
				initialize.apply(this, arguments);
			}
		}
	}

	/**
	 * @method private
	 * @name initialize
	 * @description Initializes plugin
	 * @param opts [object] "Plugin options"
	 */

	function initialize(options) {
		if (!Plugin.initialized) {
			options = options || {};

			// Build Media Queries

			for (var i in MQStrings) {
				if (MQStrings.hasOwnProperty(i)) {
					Defaults[i] = (options[i]) ? $.merge(options[i], Defaults[i]) : Defaults[i];
				}
			}

			Defaults = $.extend(Defaults, options);

			// Sort

			Defaults.minWidth.sort( sortDesc );
			Defaults.maxWidth.sort( sortAsc );
			Defaults.minHeight.sort( sortDesc );
			Defaults.maxHeight.sort( sortAsc );

			// Bind Media Query Matches

			for (var j in MQStrings) {
				if (MQStrings.hasOwnProperty(j)) {
					MQMatches[j] = {};
					for (var k in Defaults[j]) {
						if (Defaults[j].hasOwnProperty(k)) {
							var mq = window.matchMedia( "(" + MQStrings[j] + ": " + (Defaults[j][k] === Infinity ? 100000 : Defaults[j][k]) + Defaults.unit + ")" );
							mq.addListener( onStateChange );
							MQMatches[j][ Defaults[j][k] ] = mq;
						}
					}
				}
			}

			// Initial Trigger

			onStateChange();

			Plugin.initialized = true;
		}
	}

	/**
	 * @method private
	 * @name setState
	 * @description Sets current media query match state
	 */

	function setState() {
		State = {
			unit: Defaults.unit
		};

		for (var i in MQStrings) {
			if (MQStrings.hasOwnProperty(i)) {

				for (var j in MQMatches[i]) {
					if (MQMatches[i].hasOwnProperty(j) && MQMatches[i][j].matches) {

						var state = (j === "Infinity" ? Infinity : parseInt(j, 10));

						if (i.indexOf("max") > -1) {
							if (!State[i] || state < State[i]) {
								State[i] = state;
							}
						} else {
							if (!State[i] || state > State[i]) {
								State[i] = state;
							}
						}

					}
				}

			}
		}
	}

	/**
	 * @method
	 * @name getState
	 * @description Returns the current state
	 * @return [object] "Current state object"
	 * @example var state = $.rubberband("state");
	 */

	function getState() {
		return State;
	}

	/**
	 * @method
	 * @name bind
	 * @description Binds callbacks to media query matching
	 * @param media [string] "Media query to match"
	 * @param data [object] "Object containing 'enter' and 'leave' callbacks"
	 * @example $.rubberband("bind", "(min-width: 500px)", { ... });
	 */

	function bind(media, data) {
		if (!Bindings[ media ]) {
			Bindings[ media ] = {
				mq:        Window.matchMedia(media),
				active:    false,
				enter:     [],
				leave:     []
			};

			Bindings[ media ].mq.addListener( onBindingChange );
		}

		for (var i in data) {
			if (data.hasOwnProperty(i) && Bindings[ media ].hasOwnProperty(i)) {
				Bindings[ media ][i].push( data[i] );
			}
		}

		onBindingChange( Bindings[ media ].mq );
	}

	/**
	 * @method
	 * @name unbind
	 * @description Unbinds all callbacks from media query
	 * @param media [string] "Media query to match"
	 * @example $.rubberband("unbind", "(min-width: 500px)", { ... });
	 */

	function unbind(media) {
		if (Bindings[ media ]) {
			Bindings[ media ].mq.removeListener( onBindingChange );
			Bindings = Bindings.splice(Bindings.indexOf( Bindings[ media ] ), 1);
		}
	}

	/**
	 * @method private
	 * @name onStateChange
	 * @description Handles media query changes
	 */

	function onStateChange() {
		setState();

		$Window.trigger(Events.snap, [ State ]);
	}

	/**
	 * @method private
	 * @name onBindingChange
	 * @description Handles a binding's media query change
	 */

	function onBindingChange(mq) {
		var binding    = Bindings[ mq.media ],
			event      = mq.matches ? Events.enter : Events.leave;

		if (binding.active || (!binding.active && mq.matches)) {
			for (var i in binding[ event ]) {
				if (binding[ event ].hasOwnProperty(i)) {
					binding[ event ][i].apply( binding.mq );
				}
			}

			binding.active = true;
		}
	}

	/**
	 * @method private
	 * @name sortAsc
	 * @description Sorts an array (ascending)
	 * @param a [mixed] "First value"
	 * @param b [mixed] "Second value"
	 * @return Difference between second and first values
	 */

	function sortAsc(a, b) {
		return (b - a);
	}

	/**
	 * @method private
	 * @name sortDesc
	 * @description Sorts an array (descending)
	 * @param a [mixed] "First value"
	 * @param b [mixed] "Second value"
	 * @return Difference between first and second values
	 */

	function sortDesc(a, b) {
		return (a - b);
	}

	// Register Plugin

	var Plugin = Formstone.Plugin("rubberband", {
			methods: {
				_delegate:    delegate
			}
		}),

		/**
		 * @options
		 * @param minWidth [array] <[ 0 ]> "Array of min-widths"
		 * @param maxWidth [array] <[ Infinity ]> "Array of max-widths"
		 * @param minHeight [array] <[ 0 ]> "Array of min-heights"
		 * @param maxHeight [array] <[ Infinity ]> "Array of max-heights"
		 * @param unit [string] <'px'> "Unit to use when matching widths and heights"
		 */

		Defaults = {
			minWidth:     [ 0 ],
			maxWidth:     [ Infinity ],
			minHeight:    [ 0 ],
			maxHeight:    [ Infinity ],
			unit:         "px"
		},

		// Unprefixed Events

		Events = {
			snap     : "snap",
			enter    : "enter",
			leave    : "leave"
		},

		// Localize References

		$Window      = Formstone.$window,
		Window       = $Window[0],

		// Internal

		State        = null,
		Bindings     = [],
		MQMatches    = {},
		MQStrings    = {
			minWidth:     "min-width",
			maxWidth:     "max-width",
			minHeight:    "min-height",
			maxHeight:    "max-height"
		};

})(jQuery, Formstone);