<?php

  // Grab any extra form data!

  foreach ($_POST as $key => $val) {
    echo $key . ": " . $val . "\n";
  }

  echo "\n\n";

  // Remember to process the uploads!

  $f = $_FILES["file"];
  $file = $f["name"];

  $chunk  = $_POST["chunk"];
  $chunks = $_POST["chunks"];

  $error = false;

  if ($error) {
    die("Error: " . $error);
  } else {
    die("Chunk: " . ($chunk + 1) . " of " . $chunks);
  }


/*
  // Handle chunked uploads

  $chunk  = $_POST["chunk"];
  $chunks = $_POST["chunks"];

  $filename = 'uploads/' . $_FILES["file"]["name"];

  $output = fopen($filename . ".part", $chunks ? "ab" : "wb");
  $input  = fopen($_FILES["file"]["tmp_name"], "rb");

  if (!$output) {
    die('Could not write output: ' . $filename);
  }

  if (!$input) {
    die('Could not read input:' . $_FILES["file"]["tmp_name"]);
  }

  while ($buffer = fread($input, 2048)) {
    fwrite($output, $buffer);
  }

  fclose($output);
  fclose($input);

  if ($chunk == $chunks - 1) {
    rename($filename . ".part", $filename);
  }

*/
