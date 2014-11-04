;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method
	 * @name Route
	 */

	function route(key, value, options) {

		// Set defaults

		if (typeof key === "object") {
			defaults = $.extend(defaults, key);
			return null;
		} else {
			options = $.extend({}, defaults, options || {});
		}

		// Delegate intent

		if (typeof key !== "undefined") {
			if (typeof value !== "undefined") {
				if (value === null) {
					erase(key);
				} else {
					create(key, value, options);
				}
			} else {
				return read(key);
			}
		}
	}

	/**
	 * @method
	 * @name create
	 * @description Creates a cookie
	 * @param key [string] "Cookie key"
	 * @param value [string] "Cookie value"
	 * @param options [object] "Options object"
	 * @example $.macaroon(key, value, options);
	 */
	function create(key, value, options) {
		var expiration = false,
			date = new Date();

		// Check Expiration Date

		if (options.expires && typeof options.expires === "number") {
			date.setTime( date.getTime() + options.expires );
			expiration = date.toGMTString();
		}

		var domain     = (options.domain)    ? "; domain=" + options.domain : "",
			expires    = (expiration)        ? "; expires=" + expiration : "",
			maxAge     = (expiration)        ? "; max-age=" + (options.expires / 1000) : "", // to seconds
			path       = (options.path)      ? "; path=" + options.path : "",
			secure     = (options.secure)    ? "; secure" : "";

		// Set Cookie

		Document.cookie = key + "=" + value + expires + maxAge + domain + path + secure;
	}

	/**
	 * @method
	 * @name read
	 * @description Returns a cookie's value, or null
	 * @param key [string] "Cookie key"
	 * @return [string | null] "Cookie's value, or null"
	 * @example var value = $.macaroon(key);
	 */
	function read(key) {
		var keyString    = key + "=",
			cookies      = Document.cookie.split(';');

		// Loop Cookies

		for(var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i];

			while (cookie.charAt(0) === ' ') {
				cookie = cookie.substring(1, cookie.length);
			}

			// Return Match

			if (cookie.indexOf(keyString) === 0) {
				return cookie.substring(keyString.length, cookie.length);
			}
		}

		return null;
	}

	/**
	 * @method
	 * @name erase
	 * @description Deletes a cookie
	 * @param key [string] "Cookie key"
	 * @example $.macaroon(key, null);
	 */
	function erase(key) {
		create(key, "", {
			expires: -604800000 // -7 days
		});
	}

	// Register Plugin

	var plugin = Formstone.Plugin("macaroon", {
			methods: {
				_route:     route,
				create:     create,
				erase:      erase
			}
		}),
		/**
		 * @options
		 * @param domain [string] "Cookie domain"
		 * @param expires [int] <604800000> "Time until cookie expires"
		 * @param path [string] "Cookie path"
		 */
		defaults = {
			domain:     null,
			expires:    604800000, // 7 days
			path:       null,
			secure:     null
		},
		// Localize References
		Document    = Formstone.$document[0];

})(jQuery, Formstone);