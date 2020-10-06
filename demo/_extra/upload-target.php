<?php

  // Grab any extra form data!

  function sanitize($str) {
    return htmlspecialchars(stripslashes(trim($str)));
  }

  foreach ($_POST as $key => $val) {
    echo sanitize($key) . ": " . sanitize($val) . "\n";
  }

  echo "\n\n";

  // Remember to process the uploads!

  $f = $_FILES["file"];
  $file = sanitize($f["name"]);

  $error = false;

  if ($error) {
    die("Error: " . $error);
  } else {
    die("File: " . $file);
  }
