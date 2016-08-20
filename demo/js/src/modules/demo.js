/* ==========================================================================
	Demo
============================================================================= */

	/* global picturefill */

	Site.modules.Demo = (function($, Site) {

		function init() {
			$.cookie({
				path: '/'
			});

			buildDemoTabs();
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

		function buildDemoTabs() {
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
		}

		function buildPlugins(theme) {
			var options = {
				theme: theme
			};

			// Move the demo navs out

			$(".js-navigation_elements").appendTo("body");

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
			Site.$body.find(".js-viewer").viewer("destroy");

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
			Site.$body.find(".js-viewer").viewer(options);

			// Demo Tabs

			Site.$body.find(".js-demo_tabs").off("update.tabs").tabs("destroy");

			Site.$body.find(".js-demo_tabs").tabs({
				mobileMaxWidth: "0px",
				theme: "fs-demo"
			}).on("update.tabs", resetPlugins);
		}

		function resetPlugins() {
			var $tab = $(this),
				$content = $( $tab.attr("href") );

			$content.find(".js-background").background("resize");
			$content.find(".js-carousel").carousel("resize");
			$content.find(".js-equalize").equalize("resize");
			$content.find("input[type=range]").range("resize");
			$content.find(".js-scrollbar").scrollbar("resize");
		}

		/* Hook Into Main init Routine */

		Site.onInit.push(init);

		return {

		};
	})(jQuery, Site);
