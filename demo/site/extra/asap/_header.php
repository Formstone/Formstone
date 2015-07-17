<?
	// Only output on full page loads
	if (!$isASAP) {
?>
<!DOCTYPE html>
<html class="no-js" lang="en">
	<head>
		<meta charset="utf-8">
		<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
		<meta content="yes" name="apple-mobile-web-app-capable">
		<meta content="yes" name="mobile-web-app-capable">

		<!-- Page Attributes -->
		<title><?=$page_title?></title>
		<meta content="" name="description">

		<!-- Modernizer -->
		<script src="//formstone.it/js/modernizr.js"></script>

		<!-- Google Fonts -->
		<link href="//fonts.googleapis.com/css?family=Oxygen:400,300|Inconsolata:400,700" rel="stylesheet">

		<!-- Compiled CSS -->
		<!--[if gt IE 8]><!--><link href="//formstone.it/css/site.css" rel="stylesheet"><!--<![endif]-->

		<!--[if IE 8]>
			<script>var IE8 = true;</script>
			<script src="//formstone.it/js/site-ie8.js"></script>
			<link rel="stylesheet" href="//formstone.it/css/site-ie8.css">
		<![endif]-->

		<!--[if IE 9]>
			<script>var IE9 = true;</script>
			<script src="//formstone.it/js/site-ie9.js"></script>
			<link rel="stylesheet" href="//formstone.it/css/site-ie9.css">
		<![endif]-->

		<!-- Compiled JS -->
		<script src="//formstone.it/js/site.js"></script>

		<!-- Demo Resources -->
		<script src="js/main.js"></script>
		<style>
			#content {
				-webkit-transition: none;
						transition: none;
			}
		</style>
	</head>

	<body class="fs-grid fs-grid-sm-fluid">
		<header class="header">
			<a class="logo header_logo no-asap" href="//formstone.it/">Formstone</a>
		</header>
		<div class="wrapper">
			<div class="page js-nav_move">
				<div class="fs-row page_row">
					<div class="fs-cell-centered fs-lg-10 fs-xl-8">
						<article class="content demo">
							<header class="intro">
								<h1>ASAP DEMO</h1>
								<p>A jQuery plugin for asynchronous page loads.</p>
							</header>
							<nav>
								<a href="index.php">Home</a>
								<a href="about.php">About</a>
								<a href="contact.php">Contact</a>
							</nav>
							<div id="content">
<?
	}
	// END: Only output on full page loads
?>