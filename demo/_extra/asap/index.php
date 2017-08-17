<?php

  $page_title = "Home Page &middot; ASAP Demo";

  include "_setup.php";
  include "_header.php";

  // Always output
  if ($isASAP) {
    // If ASAP request, save content to buffer
    ob_start();
  }
?>
<h2>Home Page</h2>
<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper.</p>
<p>Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.</p>
<?php
  if ($isASAP) {
    // If ASAP request, return json object with page pieces
    $page_content = ob_get_clean();

    $asap_content = json_encode(array(
      "title" => $page_title,
      "#content" => $page_content
    ));
    header("Content-length: " . strlen($asap_content));

    echo $asap_content;
  }
  // END: Always output

  include "_footer.php";
  include "_process.php";