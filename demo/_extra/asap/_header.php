<?php
  // Only output on full page loads
  if (!$isASAP) {
?><!DOCTYPE html>
<html lang="en" class="no-js">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">

    <!-- Page Attributes -->
    <title>ASAP Demo &middot; Formstone</title>

    <!-- Modernizer -->
    <script src="../../js/modernizr.js"></script>

    <!-- Compiled CSS -->
    <link rel="stylesheet" href="../../css/site.css?v=">

    <!-- Compiled JS -->
    <script src="../../js/site.js"></script>

    <!-- Demo JS -->
    <script src="js/main.js"></script>
  </head>
  <body class="fs-grid demo_page">

    <div class="demo_content">

      <header class="header">
        <div class="fs-row">
          <div class="fs-cell-centered fs-xl-10">
            <a href="https://formstone.it/" class="header_logo icon-logo">Formstone</a>
          </div>
        </div>
      </header>

      <div class="fs-row">
        <div class="fs-cell-centered fs-xl-10">


<style>
  #content {
    -webkit-transition: none;
        transition: none;
  }
</style>

<h1>ASAP DEMO</h1>
<p class="back_link">
  <a href="https://formstone.it/components/asap/" class="no-asap">View Documentation</a>
</p>
<br>
<nav>
  <a href="index.php">Home</a>
  <a href="about.php">About</a>
  <a href="contact.php">Contact</a>
</nav>
<br>
<div id="content">
<?php
  }
  // END: Only output on full page loads
