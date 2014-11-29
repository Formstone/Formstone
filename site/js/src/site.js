/*-------------------------------------------
  Site
-------------------------------------------*/

	// !IE
	var IE8 = IE8 || false,
		IE9 = IE9 || false;

	// !Site
	var Site = (function($, window) {
		// Vars
		var minWidth = 320,
			maxWidth = Infinity,
			scrollTop = 0,
			windowHeight = 0,
			windowWidth = 0,
			$window,
			$doc,
			$body;

		function init() {
			// Objects
			$window = $(window);
			$doc    = $(document);
			$body   = $("body");
		}

		return {
			init: init
		};
	})(jQuery, window);


	// !Ready
	$(document).ready(Site.init);