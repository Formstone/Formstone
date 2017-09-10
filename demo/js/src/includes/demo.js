/* ==========================================================================
  Demo
============================================================================= */

  (function($, Formstone) {
    var $window,
        $body,
        opts = {};

    opts.minXS = parseInt("@mq_min_xs", 10);
    opts.minSM = parseInt("@mq_min_sm", 10);
    opts.minMD = parseInt("@mq_min_md", 10);
    opts.minLG = parseInt("@mq_min_lg", 10);
    opts.minXL = parseInt("@mq_min_xl", 10);

    opts.maxXS = opts.minXS - 1;
    opts.maxSM = opts.minSM - 1;
    opts.maxMD = opts.minMD - 1;
    opts.maxLG = opts.minLG - 1;
    opts.maxXL = opts.minXL - 1;

    opts.minHTsm = parseInt("@mq_min_ht_sm", 10);
    opts.minHT   = parseInt("@mq_min_ht", 10);

    opts.maxHTsm = opts.minHTsm - 1;
    opts.maxHT   = opts.minHT - 1;

    function init() {
      $window = $(window);
      $body   = $("body");

      if ($.mediaquery) {
        $.mediaquery({
          minWidth: [ opts.minXS, opts.minSM, opts.minMD, opts.minLG, opts.minXL ],
          maxWidth: [ opts.maxXL, opts.maxLG, opts.maxMD, opts.maxSM, opts.maxXS ],
          minHeight: [ opts.minHTsm, opts.minHT ],
          maxHeight: [ opts.maxHT, opts.maxHTsm ]
        });
      }

      if ($.cookie) {
        $.cookie({
          path: "/"
        });
      }

      buildDemoTabs();
      buildPlugins("fs-light");
    }

    function buildDemoTabs() {
      $(".demo_container").each(function(index) {
        var html     = "",
            $demo    = $(this),
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

      $body.find(".js-background").background("destroy");
      $body.find(".js-carousel").carousel("destroy");
      $body.find(".js-checkbox, .js-radio, input[type=checkbox], input[type=radio]").checkbox("destroy");
      $body.find(".js-checkpoint").checkpoint("destroy");
      $body.find(".js-dropdown").dropdown("destroy");
      $body.find(".js-equalize").equalize("destroy");
      $body.find(".js-lightbox").lightbox("destroy");
      $body.find(".js-navigation").navigation("destroy");
      $body.find("input[type=number]").number("destroy");
      $body.find(".js-pagination").pagination("destroy");
      $body.find("input[type=range]").range("destroy");
      $body.find(".js-scrollbar").scrollbar("destroy");
      $body.find(".js-sticky").sticky("destroy");
      $body.find(".js-swap").swap("destroy");
      $body.find(".js-tabs").tabs("destroy");
      $body.find(".js-tooltip").tooltip("destroy");
      $body.find(".js-upload").upload("destroy");
      $body.find(".js-viewer").viewer("destroy");

      // Init

      $body.find(".js-background").background(options);
      $body.find(".js-carousel").carousel(options);
      $body.find(".js-checkbox, .js-radio, input[type=checkbox], input[type=radio]").checkbox(options);
      $body.find(".js-checkpoint").checkpoint();
      $body.find(".js-dropdown").dropdown(options);
      $body.find(".js-equalize").equalize(options);
      $body.find(".js-lightbox").lightbox(options);
      $body.find(".js-navigation").navigation(options);
      $body.find("input[type=number]").number(options);
      $body.find(".js-pagination").pagination(options);
      $body.find("input[type=range]").range(options);
      $body.find(".js-scrollbar").scrollbar(options);
      $body.find(".js-sticky").sticky(options);
      $body.find(".js-swap").swap(options);
      $body.find(".js-tabs").tabs(options);
      $body.find(".js-tooltip").tooltip(options);
      $body.find(".js-upload").upload(options);
      $body.find(".js-viewer").viewer(options);

      // Demo Tabs

      $body.find(".js-demo_tabs").off("update.tabs").tabs("destroy");

      $body.find(".js-demo_tabs").tabs({
        mobileMaxWidth: "0px",
        theme: "fs-demo"
      }).on("update.tabs", resetPlugins);
    }

    function resetPlugins() {
      var $tab     = $(this),
          $content = $( $tab.attr("href") );

      $content.find(".js-background").background("resize");
      $content.find(".js-carousel").carousel("resize");
      $content.find(".js-equalize").equalize("resize");
      $content.find("input[type=range]").range("resize");
      $content.find(".js-scrollbar").scrollbar("resize");

      $body.find(".js-checkpoint").checkpoint("resize");
      $body.find(".js-sticky").sticky("resize");
    }

    // Ready

    Formstone.Ready(init);

  })(jQuery, Formstone);
