<?php

  $page_title = "Contact Page &middot; ASAP Demo";

  include "_setup.php";
  include "_header.php";

  // Always output
  if ($isASAP) {
    // If ASAP request, save content to buffer
    ob_start();
  }
?>
<h2>Contact Page</h2>
<p>Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>
<p>Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
<p>Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
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