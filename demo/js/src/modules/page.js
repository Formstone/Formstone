/*-------------------------------------------
	Page
-------------------------------------------*/

	/* global picturefill */

	Site.modules.Page = (function($, Site) {

		function init() {
/*
			$(".js-component_select").dropdown();
			$(".js-theme_select").dropdown().on("change", function() {
				buildPlugins($(this).val());
			});
*/

			$.cookie({
				path: '/'
			});

			buildPlugins("fs-light");


			Site.onScroll.push(scroll);
			Site.onResize.push(resize);
			Site.onRespond.push(respond);

			Site.scroll();
		}

		function scroll() {

		}

		function resize() {
			scroll();
		}

		function respond() {
			scroll();
		}

		function buildPlugins(theme) {
			var options = {
				theme: theme
			};

			// Destroy

			Site.$body.find(".js-background").background("destroy");
			Site.$body.find(".js-carousel").carousel("destroy");
			Site.$body.find(".js-checkbox, .js-radio, input[type=checkbox], input[type=radio]").checkbox("destroy");
			Site.$body.find(".js-dropdown").dropdown("destroy");
			Site.$body.find(".js-equalize").equalize("destroy");
			Site.$body.find(".js-lightbox").lightbox("destroy");
			Site.$body.find(".js-navigation").navigation("destroy");
			Site.$body.find("input[type=number]").number("destroy");
			Site.$body.find(".js-pagination").pagination("destroy");
			Site.$body.find("input[type=range]").range("destroy");
			Site.$body.find(".js-scrollbar").scrollbar("destroy");
			Site.$body.find(".js-swap").swap("destroy");
			Site.$body.find(".js-tabs").tabs("destroy");
			Site.$body.find(".js-tooltip").tooltip("destroy");
			Site.$body.find(".js-upload").upload("destroy");

			// Init

			Site.$body.find(".js-background").background(options);
			Site.$body.find(".js-carousel").carousel(options);
			Site.$body.find(".js-checkbox, .js-radio, input[type=checkbox], input[type=radio]").checkbox(options);
			Site.$body.find(".js-dropdown").dropdown(options);
			Site.$body.find(".js-equalize").equalize(options);
			Site.$body.find(".js-lightbox").lightbox(options);
			Site.$body.find(".js-navigation").navigation(options);
			Site.$body.find("input[type=number]").number(options);
			Site.$body.find(".js-pagination").pagination(options);
			Site.$body.find("input[type=range]").range(options);
			Site.$body.find(".js-scrollbar").scrollbar(options);
			Site.$body.find(".js-swap").swap(options);
			Site.$body.find(".js-tabs").tabs(options);
			Site.$body.find(".js-tooltip").tooltip(options);
			Site.$body.find(".js-upload").upload(options);
		}

		/* Hook Into Main init Routine */

		Site.onInit.push(init);

		return {

		};
	})(jQuery, Site);
