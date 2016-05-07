/*-------------------------------------------
	Page
-------------------------------------------*/

	/* global picturefill */

/*
	// https://github.com/angular/angular.js/blob/v1.3.14/src/ngSanitize/sanitize.js#L435
	function encodeEntities(value) {
		return value.replace(/&/g, '&amp;')
					.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(value) {
						var hi = value.charCodeAt(0);
						var low = value.charCodeAt(1);
						return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
					})
					.replace(/([^\#-~| |!])/g, function(value) {
						return '&#' + value.charCodeAt(0) + ';';
					})
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;');
	}
*/

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

			$(".demo_container").each(function(index) {
				var html  = "",
					$demo = $(this),
					$example = $demo.find(".demo_example"),
					$code    = $demo.find(".demo_code");

				$example.attr("id", "example-" + index);
				$code.attr("id", "code-" + index);

				html += '<div class="demo_tabs contain">';
				html += '<a href="#example-' + index + '" class="demo_tab js-demo_tabs" data-tabs-group="demo-' + index + '">Demo</a>';
				html += '<a href="#code-' + index +    '" class="demo_tab js-demo_tabs" data-tabs-group="demo-' + index + '">Code</a>';
				html += '</div>';

				$demo.prepend(html);
			});


/*
			$(".js-demo").each(function() {
				var $demo = $(this),
					content = encodeEntities($demo.html().trim());

				$demo.after('<pre>' + content + '</pre>');
			});
*/

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

			Site.$body.find(".js-demo_tabs").off("update.tabs").tabs("destroy");

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

			Site.$body.find(".js-demo_tabs").tabs({
				mobileMaxWidth: "0px"
			}).on("update.tabs", resetPlugins);
		}

		function resetPlugins() {
			var $tab = $(this),
				$content = $( $tab.attr("href") );

			$content.find(".js-background").background("resize");
			$content.find(".js-carousel").carousel("resize");
/*
			$content.find(".js-checkbox, .js-radio, input[type=checkbox], input[type=radio]").checkbox("destroy");
			$content.find(".js-dropdown").dropdown("destroy");
			$content.find(".js-equalize").equalize("destroy");
			$content.find(".js-lightbox").lightbox("destroy");
			$content.find(".js-navigation").navigation("destroy");
			$content.find("input[type=number]").number("destroy");
			$content.find(".js-pagination").pagination("destroy");
			$content.find("input[type=range]").range("destroy");
			$content.find(".js-scrollbar").scrollbar("destroy");
			$content.find(".js-swap").swap("destroy");
			$content.find(".js-tabs").tabs("destroy");
			$content.find(".js-tooltip").tooltip("destroy");
			$content.find(".js-upload").upload("destroy");
*/
		}

		/* Hook Into Main init Routine */

		Site.onInit.push(init);

		return {

		};
	})(jQuery, Site);
