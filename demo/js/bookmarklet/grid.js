/*
 * Grid Overlay Bookmarklet <http://formstone.it/grid>
 * @author Ben Plum
 * @version 1.1.0
 *
 * Copyright 2013 Ben Plum <mr@benplum.co>
 */

function FSGridBookmarklet() {
	var $jq,
		OverlayObj,
		Overlay = function() {
			var _this = this,
				config = $jq.extend({
					onLoad: false,
					position: "bottom-left", // top-right, top-left, bottom-right, bottom-left
					useCookies: false
				}, window.FSGridBookmarkletConfig);

			if ($jq(".fs-grid").length < 1) {
				alert("Grid Not Found.\nYou'll need to include Grid before using this bookmarklet.\n\nLearn more: http://formstone.it/grid/");
			} else {
				var desktopCount = 12,
					tabletCount = 6,
					mobileCount = 3;

				if ($jq("#fs-grid-styles").length < 1) {
					$jq("body").append('<link id="fs-grid-styles" rel="stylesheet" href="http://formstone.it/css/bookmarklet/grid.css" type="text/css" media="all">');
				}

				if ($jq("#fs-grid-overlay").length < 1) {
					var html = '';

					html += '<menu id="fs-grid-menu" class="' + config.position + '">';

					html += '<div class="fs-grid-statuses">';
					html += '<span class="fs-grid-status fs-grid-status-xs">xs</span>';
					html += '<span class="fs-grid-status fs-grid-status-sm">sm</span>';
					html += '<span class="fs-grid-status fs-grid-status-md">md</span>';
					html += '<span class="fs-grid-status fs-grid-status-lg">lg</span>';
					html += '<span class="fs-grid-status fs-grid-status-xl">xl</span>';
					html += '</div>';

					html += '<button class="fs-grid-show fs-grid-option">Show Grid</button>';
					html += '<button class="fs-grid-icon fs-grid-remove">Close</button>';
					html += '</menu>';
					html += '<section id="fs-grid-overlay">';
					html += '<div class="fs-row">';
					for (var i = 0; i < desktopCount; i++) {
						html += '<div class="fs-cell fs-sm-1 fs-md-1 fs-lg-1"><span></span></div>';
					}
					html += '</div>';
					html += '</section>';

					$jq("body").append(html);

					_this.$menu = $jq("#fs-grid-menu");
					_this.$menuItems = _this.$menu.find("span");
					_this.$overlay = $jq("#fs-grid-overlay");

					_this.$menu.on("click", ".fs-grid-option", $jq.proxy(_this.onClick, _this))
							   .on("click", ".fs-grid-remove", $jq.proxy(_this.remove, _this));

					if (config.onLoad || (config.useCookies === true && _this.readCookie("fs-grid-active") === "true")) {
						_this.$menuItems.filter(".fs-grid-show")
										.trigger("click");
					}
				}
			}
		};

	Overlay.prototype = {
		onClick: function(e) {
			var _this = this,
				$target = $jq(e.currentTarget);

			if ($target.hasClass("fs-grid-active") || $target.hasClass("fs-grid-remove")) {
				$target.removeClass("fs-grid-active")
					   .html("Show Grid");
				_this.$overlay.removeClass("fs-grid-visible");
				_this.eraseCookie("fs-grid-active");
			} else {
				$target.addClass("fs-grid-active")
					   .html("Hide Grid");
				_this.$overlay.addClass("fs-grid-visible");
				_this.createCookie("fs-grid-active", "true", 7);
			}
		},

		remove: function(e) {
			var _this = this;

			_this.$menu.remove();
			_this.$overlay.remove();
		},

		createCookie: function(key, value, expires) {
			var date = new Date(),
				path = "; path=/",
				domain = "; domain=" + document.domain;

			date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();

			document.cookie = key + "=" + value + expires + domain + path;
		},

		readCookie: function(key) {
			var keyString = key + "=",
				cookieArray = document.cookie.split(';');

			for (var i = 0; i < cookieArray.length; i++) {
				var cookie = cookieArray[i];

				while (cookie.charAt(0) === ' ') {
					cookie = cookie.substring(1, cookie.length);
				}

				if (cookie.indexOf(keyString) === 0) {
					return cookie.substring(keyString.length, cookie.length);
				}
			}

			return null;
		},

		eraseCookie: function(key) {
			this.createCookie(key, "", -1);
		}
	};

	function initOverlay() {
		OverlayObj = new Overlay();
	}

	function loadJQuery() {
		var jQ = document.createElement("script");

		jQ.id = "grid-jquery";
		jQ.src = "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
		jQ.onload = function() {
			$jq = jQuery.noConflict(true);
			initOverlay();
		};

		document.body.appendChild(jQ);
	}

	if (typeof jQuery === "undefined") {
		loadJQuery();
	} else {
		var version = jQuery.fn.jquery.split('.');

		if (parseInt(version[1], 10) < 7) {
			loadJQuery();
		} else {
			$jq = jQuery;
			initOverlay();
		}
	}
}

new FSGridBookmarklet();