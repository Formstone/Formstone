<?

/*
	error_reporting(E_ALL);
	ini_set('display_errors', '1');
*/

	session_start();

	// Figure out www_root
	$url = strtolower("http" . (($_SERVER["HTTPS"]) ? "s://" : "://") . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"]);
	$cwd = strtolower(getcwd());
	$end = end(explode("/", $cwd));
	$www_root = ((strpos($url, $end) > -1) ? substr($url, 0, strpos($url, $end) + strlen($end)) : $url) . "/";

	// Get requested URL
	$current_url = $_GET["request_url"];
	$path = cleanURL(str_ireplace($www_root, "", $current_url));

	// Compute route
	$route = routeRecursive("site/", explode("/", $path));

	// Build the page
	ob_start();

	if ($route["commands"][0] == "") {
		unset($route["commands"]);
	}

	if (file_exists("site/" . $route["path"] . ".html") && count($route["commands"]) == 0) {
		$file = "site/" . $route["path"] . ".html";
	} else {
		$file = "site/404.html";
	}

	// Fix resources
	$content = file_get_contents($file);

	$html = str_ireplace(array("../../", "../", ".html"), array($www_root, $www_root, "/"), $content);
	//$html = $content;

	echo $html;

	// Functions
	function routeRecursive($base = "site/", $route, $level = 0) {
		$router = "";
		for ($i = 0; $i < $level; $i++) {
			$router .= $route[$i] . "/";
		}

		$return = array();

		if (is_file($base . $router . $route[$level] . ".html")) {
			$return["path"] = $router . $route[$level];
			$return["commands"] = array_slice($route, $level + 1);
		} else if (is_dir($base . $router)) {
			if (isset($route[$level])) {
				$return = routeRecursive($base, $route, $level+1);
				if (!$return && is_file($base . $router . "default.html")) {
					$return["path"] = $router . "default";
					$return["commands"] = array_slice($route, $level);
				}
			} else if (is_file($base . $router . "default.html")) {
				$return["path"] = $router . "default";
				$return["commands"] = array_slice($route, $level);
			}
		}

		if (!$return && $level == 0) {
			$return["path"] = "index";
			$return["commands"] = array_slice($route, $level);
		}

		return $return;
	}

	function cleanURL($url) {
		if (substr($url, strlen($url) - 1, strlen($url)) == '/') {
			$url = substr($url, 0, strlen($url) - 1);
		}

		return $url;
	}

?>