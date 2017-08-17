<?php

  $size = ob_get_length();
  $content = ob_get_clean();

  header("Content-length: " . $size);
  die($content);