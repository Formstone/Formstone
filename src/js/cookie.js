;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name delegate
	 * @param key [string] "Cookie key"
	 * @param value [string] "Cookie value"
	 * @param options [object] "Options object"
	 * @return [null || string] "Cookie value, if 'read'"
	 */

	function delegate(key, value, options) {
		if ($.type(key) === "object") {

			// Set defaults

			Defaults = $.extend(Defaults, key);
		} else {

			// Delegate intent

			options = $.extend({}, Defaults, options || {});

			if ($.type(key) !== "undefined") {
				if ($.type(value) !== "undefined") {
					if (value === null) {
						eraseCookie(key);
					} else {
						createCookie(key, value, options);
					}
				} else {
					return readCookie(key);
				}
			}
		}

		return null;
	}

	/**
	 * @method
	 * @name create
	 * @description Creates a cookie.
	 * @param key [string] "Cookie key"
	 * @param value [string] "Cookie value"
	 * @param options [object] "Options object"
	 * @example $.cookie(key, value, options);
	 */

	function createCookie(key, value, options) {
		var expiration = false,
			date = new Date();

		// Check Expiration Date

		if (options.expires && $.type(options.expires) === "number") {
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
	 * @description Returns a cookie's value, or null.
	 * @param key [string] "Cookie key"
	 * @return [string | null] "Cookie's value, or null"
	 * @example var value = $.cookie(key);
	 */

	function readCookie(key) {
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
	 * @description Deletes a cookie.
	 * @param key [string] "Cookie key"
	 * @example $.cookie(key, null);
	 */

	function eraseCookie(key) {
		createCookie(key, "", {
			expires: -604800000 // -7 days
		});
	}

	/**
	 * @plugin
	 * @name Cookie
	 * @description A jQuery plugin for simple access to browser cookies.
	 * @type utility
	 */

	var Plugin = Formstone.Plugin("cookie", {
			utilities: {
				_delegate:     delegate
			}
		}),

		/**
		 * @options
		 * @param domain [string] "Cookie domain"
		 * @param expires [int] <604800000> "Time until cookie expires"
		 * @param path [string] "Cookie path"
		 */

		Defaults = {
			domain:     null,
			expires:    604800000, // 7 days
			path:       null,
			secure:     null
		},

		// Localize References

		Document    = Formstone.document;

})(jQuery, Formstone);

/**
 * @use

### Basic

To create a new cookie, or update an existing one, simply pass the `key` and `value` as the first and second parameters, respectively:

```
// Set cookie
$.macroon(key, value);
```

To return a cookie's value pass the `key` as the only parameter:

```
// Get Cookie
var value = $.macroon(key);
```

To erase an existing cookie, set it to `null`:

```
// Erase Cookie
$.macroon(key, null);
```

*/

/**
 * @demo

<div class="demo">
	<script>
		$(function() {
			$(".demo .form").on("click.cookie", ".set", _setCookie)
							.on("click.cookie", ".get", _getCookie)
							.on("click.cookie", ".erase", _eraseCookie);

			$(window).one("pronto.load", function() {
				$(".demo .form").off(".cookie");
			});
		});

		function _setCookie(e) {
			e.preventDefault();
			e.stopPropagation();

			var key = $(".demo .form [name=set_key]").val(),
				value = $(".demo .form [name=set_value]").val();

			$.cookie(key, value);

			_output("Set", key + " = " + value);
		}

		function _getCookie(e) {
			e.preventDefault();
			e.stopPropagation();

			var key = $(".demo .form [name=get_key]").val(),
				value = $.cookie(key);

			_output("Get", key + " = " + value);
		}

		function _eraseCookie(e) {
			e.preventDefault();
			e.stopPropagation();

			var key = $(".demo .form [name=erase_key]").val();

			$.cookie(key, null);

			_output("Erase", key);
		}

		function _output(label, value) {
			var html = '';
			html += '<p><span class="label">' + label + ':</span>';
			html += '<span class="value">' + value + '</p>';

			$(".demo .output").prepend(html);
		}
	</script>

	<div class="row form">
		<form>
			<fieldset class="mobile-third tablet-third desktop-third">
				<h5>Set Cookie</h5>
				<label>Key</label>
				<input type="text" name="set_key" value="foo">
				<label>value</label>
				<input type="text" name="set_value" value="bar">
				<input type="submit" class="button set" value="Set">
			</fieldset>
		</form>
		<form>
			<fieldset class="mobile-third tablet-third desktop-third">
				<h5>Get Cookie</h5>
				<label>Key</label>
				<input type="text" name="get_key" value="foo">
				<input type="submit" class="button get" value="Get">
			</fieldset>
		</form>
		<form>
			<fieldset class="mobile-third tablet-third desktop-third">
				<h5>Erase Cookie</h5>
				<label>Key</label>
				<input type="text" name="erase_key" value="foo">
				<input type="submit" class="button erase" value="Erase">
			</fieldset>
		</form>
	</div>
	<div class="output"></div>

</div>

 */