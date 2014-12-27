;(function ($, Formstone, undefined) {

	"use strict";

	/**
	 * @method private
	 * @name setup
	 * @description Setup plugin.
	 */

	function setup() {
		$Window.on(Events.resize, onResize);
		onResize();
	}

	/**
	 * @method private
	 * @name onResize
	 * @description Handles window resize
	 */

	function onResize(e) {
		if ($Instances.length) {
			ResizeTimer = Functions.startTimer(ResizeTimer, Debounce, function() {
				Functions.iterate.call($Instances, resize);
			});
		}

		WindowWidth = $Window.width();
	}

	/**
	 * @method private
	 * @name cacheInstances
	 * @description Caches active instances
	 */

	function cacheInstances() {
		$Instances = $(Classes.base);
	}

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		// guid
		data.guid         = "__" + (GUID++);
		data.youTubeGuid  = 0;
		data.eventGuid    = Events.namespace + data.guid;
		data.rawClassGuid = RawClasses.base + data.guid;
		data.classGuid    = "." + data.rawClassGuid;

		data.$container = $('<div class="' + RawClasses.container + '"></div>').appendTo(this);

		this.addClass(RawClasses.base);

		var source = data.source;
		data.source = null;

		loadMedia(data, source, true);

		cacheInstances();
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		data.$container.remove();

		this.removeClass(RawClasses.base)
			.off(Events.namespace);

		cacheInstances();
	}

	/**
	 * @method
	 * @name load
	 * @description Loads source media
	 * @param source [string | object] "Source image (string) or video (object) or YouTube (object); { source: { poster: <"">, video: <"" or {}>  } }"
	 * @example $(".target").background("load", "path/to/image.jpg");
	 */

	/**
	 * @method private
	 * @name loadMedia
	 * @description Determines how to handle source media
	 * @param data [object] "Instance data"
	 * @param source [string | object] "Source image (string) or video (object)"
	 * @param firstLoad [boolean] "Flag for first load"
	 */

	function loadMedia(data, source, firstLoad) {
		// Check if the source is new
		if (source !== data.source) {
			data.source = source;
			data.isYouTube = false;

			// Check YouTube
			if ($.type(source) === "object" && $.type(source.video) === "string") {
				// var parts = source.match( /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/ );
				var parts = source.video.match( /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i );

				if (parts && parts.length >= 1) {
					data.isYouTube = true;
					data.videoId = parts[1];
				}
			}

			if (data.isYouTube) {
				// youtube video
				data.playing = false;
				data.playerReady = false;
				data.posterLoaded = false;

				loadYouTube(data, source, firstLoad);
			} else if ($.type(source) === "object" && !source.hasOwnProperty("fallback")) {
				// html5 video
				loadVideo(data, source, firstLoad);
			} else {
				// regular old image
				if (data.responsiveSource) {
					for (var i in data.responsiveSource) {
						if (data.responsiveSource.hasOwnProperty(i)) {
							data.responsiveSource[i].mq.removeListener(onRespond);
						}
					}
				}

				data.responsive = false;
				data.responsiveSource = null;

				// Responsive image handling
				if ($.type(source) === "object") {
					var sources = [],
						newSource;

/*
					for (var j in source) {
						if (source.hasOwnProperty(j)) {
							var media = (j === "fallback") ? "(min-width: 0px)" : j;

							if (media) {
								var _mq = window.matchMedia(media.replace(Infinity, "100000px"));
								_mq.addListener(onRespond);
								sources.push({
									mq: _mq,
									source: source[j]
								});

								if (_mq.matches) {
									newSource = source[j];
								}
							}
						}
					}
*/

					data.responsive = true;
					data.responsiveSource = sources;
					source = newSource;
				}

				// single or responsive set
				loadImage(data, source, false, firstLoad);
			}
		} else {
			data.$el.trigger(Events.loaded);
		}
	}

	/**
	 * @method
	 * @name pause
	 * @description Pauses target video
	 * @example $(".target").background("stop");
	 */

	function pause(data) {
		if (data.isYouTube && data.playerReady) {
			data.player.pauseVideo();
		} else {
			var $video = data.$container.find("video");

			if ($video.length) {
				$video[0].pause();
			}
		}
	}

	/**
	 * @method
	 * @name play
	 * @description Plays target video
	 * @example $(".target").background("play");
	 */

	function play(data) {
		if (data.isYouTube && data.playerReady) {
			data.player.playVideo();
		} else {
			var $video = data.$container.find("video");

			if ($video.length) {
				$video[0].play();
			}
		}
	}

	/**
	 * @method
	 * @name unload
	 * @description Unloads current media
	 * @example $(".target").background("unload");
	 */

	function unload(data) {
		unloadMedia(data);
	}

	/**
	 * @method private
	 * @name loadImage
	 * @description Loads source image
	 * @param data [object] "Instance data",
	 * @param source [string] "Source image"
	 * @param poster [boolean] "Flag for video poster"
	 * @param firstLoad [boolean] "Flag for first load"
	 */

	function loadImage(data, source, poster, firstLoad) {
		var imageClasses = [RawClasses.media, RawClasses.image, (firstLoad !== true ? RawClasses.animated : '')].join(" "),
			$media = $('<div class="' + imageClasses + '"><img></div>'),
			$img = $media.find("img"),
			newSource = source;

		// Load image
		$img.one(Events.load, function() {
			if (BGSupport) {
				$media.addClass(RawClasses.native)
					  .css({ backgroundImage: "url('" + newSource + "')" });
			}

			// YTransition in
			$media.transition({
				property: "opacity"
			},
			function() {
				if (!poster) {
					cleanMedia(data);
				}
			}).css({ opacity: 1 });

			resize(data);

/*
			if (data.responsive && firstLoad) {
				cleanMedia(data);
			}
*/

			if (!poster || firstLoad) {
				data.$el.trigger(Events.loaded);
			}

			// caches responsive images
			//$responders = $(Classes.responsive);
		}).attr("src", newSource);

		if (data.responsive) {
			$media.addClass(Classes.responsive);
		}

		data.$container.append($media);

		// Check if image is cached
		if ($img[0].complete || $img[0].readyState === 4) {
			$img.trigger(Events.load);
		}
	}

	/**
	 * @method private
	 * @name loadVideo
	 * @description Loads source video
	 * @param data [object] "Instance data"
	 * @param source [object] "Source video"
	 * @param firstLoad [boolean] "Flag for first load"
	 */

	function loadVideo(data, source, firstLoad) {
		if (data.source && data.source.poster) {
			loadImage(data, data.source.poster, true, true);

			firstLoad = false;
		}

		if (!Formstone.isMobile) {
			var videoClasses = [RawClasses.media, RawClasses.video, (firstLoad !== true ? RawClasses.animated : '')].join(" "),
				html = '<div class="' + videoClasses + '">';

			html += '<video';
			if (data.loop) {
				html += ' loop';
			}
			if (data.mute) {
				html += ' muted';
			}
			html += '>';
			if (data.source.webm) {
				html += '<source src="' + data.source.webm + '" type="video/webm" />';
			}
			if (data.source.mp4) {
				html += '<source src="' + data.source.mp4 + '" type="video/mp4" />';
			}
			if (data.source.ogg) {
				html += '<source src="' + data.source.ogg + '" type="video/ogg" />';
			}
			html += '</video>';
			html += '</div>';

			var $media = $(html),
				$video = $media.find("video");

			$video.one(Events.loadedMetaData, function(e) {
				$media.transition({
					property: "opacity"
				},
				function() {
					cleanMedia(data);
				}).css({ opacity: 1 });

				resize(data);

				data.$el.trigger(Events.loaded);

				// Events
				if (data.hoverPlay) {
					data.$el.on(Events.mouseOver, play)
							.on(Events.mouseOut, pause);
				} else if (data.autoPlay) {
					this.play();
				}
			});

			data.$container.append($media);
		}
	}

	/**
	 * @method private
	 * @name loadYouTube
	 * @description Loads YouTube video
	 * @param data [object] "Instance data"
	 * @param source [string] "YouTube URL"
	 */

	function loadYouTube(data, source, firstLoad) {
		if (!data.videoId) {
			var parts = source.match( /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/ );
			data.videoId = parts[1];
		}

		if (!data.posterLoaded) {
			if (!data.source.poster) {
				// data.source.poster = "http://img.youtube.com/vi/" + data.videoId + "/maxresdefault.jpg";
				data.source.poster = "http://img.youtube.com/vi/" + data.videoId + "/0.jpg";
			}

			data.posterLoaded = true;
			loadImage(data, data.source.poster, true, firstLoad);

			firstLoad = false;
		}

		if (!Formstone.isMobile) {
			if (!$("script[src*='youtube.com/iframe_api']").length) {
				// $("head").append('<script src="' + window.location.protocol + '//www.youtube.com/iframe_api"></script>');
				$("head").append('<script src="//www.youtube.com/iframe_api"></script>');
			}

			if (!YouTubeReady) {
				YouTubeQueue.push({
					data: data,
					source: source
				});
			} else {
				var guid = data.guid + "_" + (data.youTubeGuid++),
					youTubeClasses = [RawClasses.media, RawClasses.embed, (firstLoad !== true ? RawClasses.animated : '')].join(" "),
					html = '<div class="' + youTubeClasses + '">';

				html += '<div id="' + guid + '"></div>';
				html += '</div>';

				var $media = $(html);

				data.$container.append($media);

				if (data.player) {
					data.oldPlayer = data.player;
					data.player = null;
				}

				data.player = new window.YT.Player(guid, {
					videoId: data.videoId,
					playerVars: {
						controls: 0,
						rel: 0,
						showinfo: 0,
						wmode: "transparent",
						enablejsapi: 1,
						version: 3,
						playerapiid: guid,
						loop: (data.loop) ? 1 : 0,
						autoplay: 1,
						origin: window.location.protocol + "//" + window.location.host
					},
					events: {
						onReady: function (e) {
							/* console.log("onReady", e); */

							data.playerReady = true;
							/* data.player.setPlaybackQuality("highres"); */

							if (data.mute) {
								data.player.mute();
							}

							if (data.hoverPlay) {
								data.$el.on(Events.mouseOver, play)
										.on(Events.mouseOut, pause);
							} else if (data.autoPlay) {
								// make sure the video plays
								data.player.playVideo();
							}
						},
						onStateChange: function (e) {
							/* console.log("onStateChange", e); */

							if (!data.playing && e.data === window.YT.PlayerState.PLAYING) {
								data.playing = true;

								if (data.hoverPlay || !data.autoPlay) {
									data.player.pauseVideo();
								}

								$media.transition({
									property: "opacity"
								},
								function() {
									cleanMedia(data);
								}).css({ opacity: 1 });

								resize(data);

								data.$el.trigger(Events.loaded);
							} else if (data.loop && data.playing && e.data === window.YT.PlayerState.ENDED) {
								// fix looping option
								data.player.playVideo();
							}

							/* if (!isSafari) { */
								// Fix for Safari's overly secure security settings...
								data.$el.find(Classes.embed)
										.addClass(RawClasses.ready);
							/* } */
						},
						onPlaybackQualityChange: function(e) {
							/* console.log("onPlaybackQualityChange", e); */
						},
						onPlaybackRateChange: function(e) {
							/* console.log("onPlaybackRateChange", e); */
						},
						onError: function(e) {
							/* console.log("onError", e); */
						},
						onApiChange: function(e) {
							/* console.log("onApiChange", e); */
						}
					}
		        });

				// Resize
				resize(data);
			}
		}
	}

	/**
	 * @method private
	 * @name cleanMedia
	 * @description Cleans up old media
	 * @param data [object] "Instance data"
	 */

	function cleanMedia(data) {
		var $media = data.$container.find(Classes.media);

		if ($media.length >= 1) {
			$media.not(":last").remove();
			data.oldPlayer = null;
		}

		//$responders = $(Classes.responsive);
	}

	/**
	 * @method private
	 * @name uploadMedia
	 * @description Unloads current media
	 * @param data [object] "Instance data"
	 */

	function unloadMedia(data) {
		var $media = data.$container.find(Classes.media);

		if ($media.length >= 1) {
			$media.transition({
				property: "opacity"
			},
			function() {
				$media.remove();
				delete data.source;
			}).css({ opacity: 0 });
		}
	}

	/**
	 * @method private
	 * @name resize
	 * @description Resize target instance
	 * @param data [object] "Instance data"
	 */

	function resize(data) {
		// Target all media
		var $all = data.$container.find(Classes.media);

		for (var i = 0, count = $all.length; i < count; i++) {
			var $m = $all.eq(i),
				type = (data.isYouTube) ? "iframe" : ($m.find("video").length ? "video" : "img"),
				$media = $m.find(type);

			// If media found and scaling is not natively support
			if ($media.length && !(type === "img" && BGSupport)) {
				var frameWidth     = data.$el.outerWidth(),
					frameHeight    = data.$el.outerHeight(),
					frameRatio     = frameWidth / frameHeight,
					nSize          = naturalSize(data, $media);

				data.width     = nSize.width;
				data.height    = nSize.height;
				data.left      = 0;
				data.top       = 0;

				var mediaRatio = (data.isYouTube) ? data.embedRatio : (data.width / data.height);

				// First check the height
				data.height = frameHeight;
				data.width = data.height * mediaRatio;

				// Next check the width
				if (data.width < frameWidth) {
					data.width     = frameWidth;
					data.height    = data.width / mediaRatio;
				}

				// Position the media
				data.left    = -(data.width - frameWidth) / 2;
				data.top     = -(data.height - frameHeight) / 2;

				$m.css({
					height    : data.height,
					width     : data.width,
					left      : data.left,
					top       : data.top
				});
			}
		}
	}

	/**
	 * @method private
	 * @name onRespond
	 * @description Handle media query changes
	 */

	function onRespond() {
		//clearTimer(respondTimer);

/*
		$responders.each(function() {
			var $target = $(this),
				$image = $target.find("img"),
				data = $target.parents(".wallpaper").data("wallpaper"),
				sources = data.responsiveSource,
				index = 0;

			for (var i = 0, count = sources.length; i < count; i++) {
				if (sources.hasOwnProperty(i)) {
					var match = sources[i].mq;

					if (match && match.matches) {
						index = i;
					}
				}
			}

			loadImage(data, sources[index].source, false, true);

			$target.trigger("change.wallpaper");
		});
*/
	}

	/**
	 * @method private
	 * @name naturalSize
	 * @description Determines natural size of target media
	 * @param data [object] "Instance data"
	 * @param $media [jQuery object] "Source media object"
	 * @return [object | boolean] "Object containing natural height and width values or false"
	 */
	function naturalSize(data, $media) {
		if (data.isYouTube) {
			return {
				height: 500,
				width:  500 / data.embedRatio
			};
		} else if ($media.is("img")) {
			var node = $media[0];

			if ($.type(node.naturalHeight) !== "undefined") {
				return {
					height: node.naturalHeight,
					width:  node.naturalWidth
				};
			} else {
				var img = new Image();
				img.src = node.src;
				return {
					height: img.height,
					width:  img.width
				};
			}
		} else {
			return {
				height: $media[0].videoHeight,
				width:  $media[0].videoWidth
			};
		}
		return false;
	}

	/**
	 * @plugin
	 * @name Background
	 * @description A jQuery plugin for full-frame image and video backgrounds.
	 * @type widget
	 * @dependency core.js
	 * @dependency transition.js
	 */

	var Plugin = Formstone.Plugin("background", {
			widget: true,

			/**
			 * @options
			 * @param autoPlay [boolean] <true> "Autoplay video"
			 * @param customClass [string] <''> "Class applied to instance"
			 * @param embedRatio [number] <1.777777> "Video / embed ratio (16/9)"
			 * @param hoverPlay [boolean] <false> "Play video on hover"
			 * @param loop [boolean] <true> "Loop video"
			 * @param mute [boolean] <true> "Mute video"
			 * @param source [string | object] <null> "Source image (string or object) or video (object) or YouTube (object)"
			 */
			defaults: {
				autoPlay       : true,
				customClass    : "",
				embedRatio     : 1.777777,
				hoverPlay      : false,
				loop           : true,
				mute           : true,
				source         : null
			},

			classes: [
				"container",
				"media",
				"animated",
				"responsive",
				"native",
				"fixed",
				"ready"
			],

			/**
			 * @events
			 * @event loaded.background "Background media loaded"
			 * @event ready.background "Background media ready"
			 */

			events: {
				loaded    : "loaded",
				ready     : "ready",
				loadedMetaData : "loadedmetadata"
			},

			methods: {
				_setup        : setup,
				_construct    : construct,
				_destruct     : destruct,

				play          : play,
				pause         : pause,
				load          : loadMedia
			}
		}),

		// Localize References

		Classes         = Plugin.classes,
		RawClasses      = Classes.raw,
		Events          = Plugin.events,
		Functions       = Plugin.functions,

		Window          = Formstone.window,
		$Window         = Formstone.$window,
		Doc             = Formstone.document,
		$Instances      = [],
		GUID            = 0,

		WindowWidth     = 0,
		ResizeTimer     = null,
		Debounce        = 20,

		BGSupport       = ("backgroundSize" in Doc.documentElement.style),
		YouTubeReady    = false,
		YouTubeQueue    = [];

	/**
	 * @method private global
	 * @name window.onYouTubeIframeAPIReady
	 * @description Attaches YouTube players to active instances
	 */
	Window.onYouTubeIframeAPIReady = function() {
		YouTubeReady = true;

		for (var i in YouTubeQueue) {
			if (YouTubeQueue.hasOwnProperty(i)) {
				loadYouTube(YouTubeQueue[i].data, YouTubeQueue[i].source);
			}
		}

		YouTubeQueue = [];
	};

})(jQuery, Formstone);