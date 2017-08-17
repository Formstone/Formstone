### Basic

ASAP can progressively enhance a site to request page content via AJAX, reducing overall page load time. The site must be tuned to return a properly formed JSON object containing key-value pairs. Keys should be valid selectors as they will be used to match DOM nodes. The value should contain the new content to render. This allows the developer to only update the parts of the page that change while leaving global elements, such as headers and footers, in place.

```php
<?php

ob_start();

$page_title = "Page Title";

if ($_GET["fs-asap"]) {
  define("IS_ASAP", true);
}

if (!IS_ASAP) {
  // Draw Header
?>
<html>
  <head>
    ...
  </head>
  <body>
    <div id="page_content">
<?
}

// Always Draw Content
?>
<h1>Page Title</h1>
<?

if (!IS_ASAP) {
  // Draw footer
?>
    </div>
  </body>
</html>
<?
}

$page_content = ob_get_clean();

if (IS_ASAP) {
  echo json_encode(array(
    "title" => $page_title,
    "#page_content" => $page_content,
  ));
  die();
} else {
  echo $content;
}

?>
```

### Events

Only updating parts of a page also means static resources, like CSS and JavaScript, are only loaded and executed once. Developers can hook into the ASAP events to ensure the page is rendered and destroyed properly:

```javascript
$(window).on("requested.asap", function(e) {
  // Before request is made.
}).on("progress.asap", function (e) {
  // As request is loaded. 
}).on("loaded.asap", function (e) {
  // After request is loaded. Tear down any existing plugins.
}).on("loaded.asap", function (e) {
  // After state is rendered. Initialize any new plugins.
}).on("failed.asap", function (e) {
  // After load error.
});
```

