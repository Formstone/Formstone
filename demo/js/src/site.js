/*-------------------------------------------
  Site
-------------------------------------------*/

	/* global Prism */

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
			$html,
			$body;

		function init() {
			// Objects
			$window = $(window);
			$doc    = $(document);
			$html   = $("html");
			$body   = $("body");

			$("[class*=lang-]").each(function() {
				$(this).addClass( $(this).attr("class").replace("lang-", "language-") );
			});

			$("table").wrap('<div class="table_wrapper"></div>');

			$("pre").wrap('<div class="pre_wrapper"></div>');

			if ($html.hasClass("canvas")) {
				Prism.highlightAll();
			}

			$(".js-navigation").navigation();

			$(".intro ul").navigation();

			$(".js-dropdown").dropdown();
		}

		return {
			init: init
		};
	})(jQuery, window);


	// !Ready
	$(document).ready(Site.init);