<?php

  // Grab any extra form data!

  foreach ($_POST as $key => $val) {
    echo $key . ": " . $val . "\n";
  }

  echo "\n\n";

  // Remember to process the uploads!

  $f = $_FILES["file"];
  $file = $f["name"];

  $error = false;

  if ($error) {
    die("Error: " . $error);
  } else {
    die("File: " . $file);
  }
