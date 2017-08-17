  var $content,
    $deferred;

  $(document).ready(function() {
    // Bind ASAP events
    $(window).on("requested.asap", pageRequested)
         .on("progress.asap", pageLoadProgress)
         .on("loaded.asap", pageLoaded)
         .on("rendered.asap", pageRendered)
         .on("failed.asap", pageLoadError);

    $content = $("#content");

    // Init ASAP
    $.asap({
      cache: false,
      selector: "a:not(.no-asap)",
      transitionOut: function() {
        if ($deferred) {
          $deferred.reject();
        }

        $deferred = $.Deferred();

        $content.animate({ opacity: 0 }, 1000, function() {
          console.log("Animate complete");

          $deferred.resolve();
        });

        return $deferred;
      }
    });

    // Remember to init first page
    pageRendered();
  });

  function pageRequested(e) {
    // update state to reflect loading
    console.log("Request new page");
  }

  function pageLoadProgress(e, percent) {
    // update progress to reflect loading
    console.log("New page load progress", percent);
  }

  function pageLoaded(e) {
    // unbind old events and remove plugins
    console.log("Destroy old page");
  }

  function pageRendered(e) {
    // bind new events and initialize plugins
    console.log("Render new page");

    $content.animate({ opacity: 1 }, 1000);
  }

  function pageLoadError(e, error) {
    // watch for load errors
    console.warn("Error loading page: ", error);
  }