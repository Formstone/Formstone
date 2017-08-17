<?php
  error_reporting(E_ALL);
  ini_set('display_errors', '1');

  $isASAP = (isset($_GET["fs-asap"]) && $_GET["fs-asap"] == "true");

  ob_start();