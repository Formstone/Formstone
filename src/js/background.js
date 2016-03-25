/* global define */

(function(factory) {
	if (typeof define === "function" && define.amd) {
		define([
			"jquery",
			"./core",
			"./transition"
		], factory);
	} else {
		factory(jQuery, Formstone);
	}
}(function($, Formstone) {

	"use strict";

	/**
	 * @method private
	 * @name resize
	 * @description Handles window resize
	 */

	function resize(windowWidth) {
		Functions.iterate.call($Instances, resizeInstance);
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
		data.youTubeGuid  = 0;

		data.$container = $('<div class="' + RawClasses.container + '"></div>').appendTo(this);

		data.thisClasses = [RawClasses.base, data.customClass];

		this.addClass(data.thisClasses.join(" "));

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

		this.removeClass(data.thisClasses.join(" "))
			.off(Events.namespace);

		cacheInstances();
	}

	/**
	 * @method
	 * @name load
	 * @description Loads source media
	 * @param source [string OR object] "Source image (string or object) or video (object) or YouTube (object);"
	 * @example $(".target").background("load", "path/to/image.jpg");
	 * @example $(".target").background("load", { "0px": "path/to/image-small.jpg", "980px": "path/to/image-large.jpg" });
	 * @example $(".target").background("load", { "poster": "path/to/image.jpg", "webm": "path/to/video.webm", "mp4": "path/to/video.mp4", "ogg": "path/to/video.ogv" });
	 * @example $(".target").background("load", { "poster": "path/to/image.jpg", "video": "//www.youtube.com/embed/VIDEO_ID" });
	 */

	/**
	 * @method private
	 * @name loadMedia
	 * @description Determines how to handle source media
	 * @param data [object] "Instance data"
	 * @param source [string OR object] "Source image (string) or video (object)"
	 * @param firstLoad [boolean] "Flag for first load"
	 */

	function loadMedia(data, source, firstLoad) {
		// Check if the source is new
		if (source !== data.source) {
			data.source        = source;
			data.responsive    = false;
			data.isYouTube     = false;

			// Check YouTube
			if ($.type(source) === "object" && $.type(source.video) === "string") {
				var parts = source.video.match( /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i );

				if (parts && parts.length >= 1) {
					data.isYouTube = true;
					data.videoId = parts[1];
				}
			}

			var isVideo = !data.isYouTube && ($.type(source) === "object" &&
												(source.hasOwnProperty("mp4") || source.hasOwnProperty("ogg") || source.hasOwnProperty("webm") )
											 );

			data.video      = data.isYouTube || isVideo;
			data.playing    = false;

			if (data.isYouTube) {
				// youtube video
				data.playerReady = false;
				data.posterLoaded = false;

				loadYouTube(data, source, firstLoad);
			} else if ($.type(source) === "object" && source.hasOwnProperty("poster")) {
				// html5 video
				loadVideo(data, source, firstLoad);
			} else {
				var newSource = source;

				// Responsive image handling
				if ($.type(source) === "object") {
					var cache    = [],
						keys     = [],
						i;

					for (i in source) {
						if (source.hasOwnProperty(i)) {
							keys.push(i);
						}
					}

					keys.sort(Functions.sortAsc);

					for (i in keys) {
						if (keys.hasOwnProperty(i)) {
							cache.push({
								width    : parseInt( keys[i] ),
								url      : source[ keys[i] ],
								mq       : window.matchMedia( "(min-width: " + parseInt( keys[i] ) + "px)" )
							});
						}
					}

					data.responsive = true;
					data.sources = cache;

					newSource = calculateSource(data);
				}

				loadImage(data, newSource, false, firstLoad);
			}
		} else {
			data.$el.trigger(Events.loaded);
		}
	}

	/**
	 * @method private
	 * @name calculateSource
	 * @description Determines responsive source
	 * @param data [object] "Instance data"
	 * @return [string] "New source url"
	 */

	function calculateSource(data) {
		var source = data.source;

		if (data.responsive) {
			source = data.sources[0].url;

			for (var i in data.sources) {
				if (data.sources.hasOwnProperty(i)) {
					if (Formstone.support.nativeMatchMedia) {
						if (data.sources[i].mq.matches) {
							source = data.sources[i].url;
						}
					} else {
						// ie8 fallback, grab the first breakpoint that's large enough
						if (data.sources[i].width < Formstone.fallbackWidth) {
							source = data.sources[i].url;
						}
					}
				}
			}
		}

		return source;
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
			$media = $('<div class="' + imageClasses + '" aria-hidden="true"><img alt=""></div>'),
			$img = $media.find("img"),
			newSource = source;

		// Load image
		$img.one(Events.load, function() {
			if (BGSupport) {
				$media.addClass(RawClasses.native)
					  .css({ backgroundImage: "url('" + newSource + "')" });
			}

			// YTransition in
			$media.fsTransition({
				property: "opacity"
			},
			function() {
				if (!poster) {
					cleanMedia(data);
				}
			}).css({ opacity: 1 });

			doResizeInstance(data);

			if (!poster || firstLoad) {
				data.$el.trigger(Events.loaded);
			}
		}).attr("src", newSource);

		if (data.responsive) {
			$media.addClass(RawClasses.responsive);
		}

		data.$container.append($media);

		// Check if image is cached
		if ($img[0].complete || $img[0].readyState === 4) {
			$img.trigger(Events.load);
		}

		data.currentSource = newSource;
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
				html = '<div class="' + videoClasses + '" aria-hidden="true">';

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
				$media.fsTransition({
					property: "opacity"
				},
				function() {
					cleanMedia(data);
				}).css({ opacity: 1 });

				doResizeInstance(data);

				data.$el.trigger(Events.loaded);

				// Events
				if (data.autoPlay) {
					playVideo(data);
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
				data.source.poster = "http://img.youtube.com/vi/" + data.videoId + "/0.jpg";
			}

			data.posterLoaded = true;
			loadImage(data, data.source.poster, true, firstLoad);

			firstLoad = false;
		}

		if (!Formstone.isMobile) {
			if (!$("script[src*='youtube.com/iframe_api']").length) {
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
					html = '<div class="' + youTubeClasses + '" aria-hidden="true">';

				html += '<div id="' + guid + '"></div>';
				html += '</div>';

				var $media    = $(html),
					ytOptions = $.extend(true, {}, {
						controls: 0,
						rel: 0,
						showinfo: 0,
						wmode: "transparent",
						enablejsapi: 1,
						version: 3,
						playerapiid: guid,
						loop: (data.loop) ? 1 : 0,
						autoplay: 1,
						origin: Window.location.protocol + "//" + Window.location.host
					}, data.youtubeOptions);

				// For youtube auto so events fire, disabled by plugin
				ytOptions.autoplay = 1;

				data.$container.append($media);

				if (data.player) {
					data.oldPlayer = data.player;
					data.player = null;
				}

				data.player = new Window.YT.Player(guid, {
					videoId: data.videoId,
					playerVars: ytOptions,
					events: {
						onReady: function (e) {
							/* console.log("onReady", e); */

							data.playerReady = true;
							/* data.player.setPlaybackQuality("highres"); */

							if (data.mute) {
								data.player.mute();
							}

							if (!data.autoPlay) {
								// make sure the video plays
								data.player.pauseVideo();
							}
						},
						onStateChange: function (e) {
							/* console.log("onStateChange", e); */

							// -1 = unstarted
							//  0 = ended
							//  1 = playing
							//  2 = paused
							//  3 = buffering
							//  4 =
							//  5 = cued

							if (!data.playing && e.data === Window.YT.PlayerState.PLAYING) {
								data.playing = true;

								$media.fsTransition({
									property: "opacity"
								},
								function() {
									cleanMedia(data);
								}).css({ opacity: 1 });

								doResizeInstance(data);

								data.$el.trigger(Events.loaded);
							} else if (data.loop && data.playing && e.data === Window.YT.PlayerState.ENDED) {
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
				doResizeInstance(data);
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
	}

	/**
	 * @method
	 * @name unload
	 * @description Unloads current media
	 * @example $(".target").background("unload");
	 */

	/**
	 * @method private
	 * @name uploadMedia
	 * @description Unloads current media
	 * @param data [object] "Instance data"
	 */

	function unloadMedia(data) {
		var $media = data.$container.find(Classes.media);

		if ($media.length >= 1) {
			$media.fsTransition({
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
	 * @name pauseVideo
	 * @description Pauses target video
	 * @param data [object] "Instance data"
	 */

	/**
	 * @method
	 * @name pause
	 * @description Pauses target video
	 * @example $(".target").background("pause");
	 */

	function pauseVideo(data) {
		if (data.video && data.playing) {
			if (data.isYouTube) {
				if (data.playerReady) {
					data.player.pauseVideo();
				} else {
					data.autoPlay = false;
				}
			} else {
				var $video = data.$container.find("video");

				if ($video.length) {
					$video[0].pause();
				}
			}

			data.playing = false;
		}
	}

	/**
	 * @method private
	 * @name playVideo
	 * @description Plays target video
	 * @param data [object] "Instance data"
	 */

	/**
	 * @method
	 * @name play
	 * @description Plays target video
	 * @example $(".target").background("play");
	 */

	function playVideo(data) {
		if (data.video && !data.playing) {
			if (data.isYouTube) {
				if (data.playerReady) {
					data.player.playVideo();
				} else {
					data.autoPlay = true;
				}
			} else {
				var $video = data.$container.find("video");

				if ($video.length) {
					$video[0].play();
				}

				data.playing = true;
			}
		}
	}

	/**
	 * @method private
	 * @name muteVideo
	 * @description Mutes target video
	 * @param data [object] "Instance data"
	 */

	/**
	 * @method
	 * @name mute
	 * @description Mutes target video
	 * @example $(".target").background("mute");
	 */

	function muteVideo(data) {
		if (data.video) {
			if (data.isYouTube && data.playerReady) {
				data.player.mute();
			} else {
				var $video = data.$container.find("video");

				if ($video.length) {
					$video[0].muted = true;
				}
			}
		}

		data.mute = true;
	}

	/**
	 * @method private
	 * @name unmuteVideo
	 * @description Unmutes target video
	 * @param data [object] "Instance data"
	 */

	/**
	 * @method
	 * @name unmute
	 * @description Unmutes target video
	 * @example $(".target").background("unmute");
	 */

	function unmuteVideo(data) {
		if (data.video) {
			if (data.isYouTube && data.playerReady) {
				data.player.unMute();
			} else {
				var $video = data.$container.find("video");

				if ($video.length) {
					$video[0].muted = false;
				}
			}

			data.playing = true;
		}

		data.mute = false;
	}

	/**
	 * @method private
	 * @name resizeInstance
	 * @description Handle window resize event
	 * @param data [object] "Instance data"
	 */

	function resizeInstance(data) {
		if (data.responsive) {
			var newSource = calculateSource(data);

			if (newSource !== data.currentSource) {
				loadImage(data, newSource, false, true);
			} else {
				doResizeInstance(data);
			}
		} else {
			doResizeInstance(data);
		}
	}

	/**
	 * @method private
	 * @name resize
	 * @description Resize target instance
	 * @example $(".target").background("resize");
	 */

	/**
	 * @method private
	 * @name doResizeInstance
	 * @description Resize target instance
	 * @param data [object] "Instance data"
	 */

	function doResizeInstance(data) {
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
	 * @name naturalSize
	 * @description Determines natural size of target media
	 * @param data [object] "Instance data"
	 * @param $media [jQuery object] "Source media object"
	 * @return [object OR boolean] "Object containing natural height and width values or false"
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
	 * @main background.js
	 * @main background.css
	 * @dependency jQuery
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
			 * @param loop [boolean] <true> "Loop video"
			 * @param mute [boolean] <true> "Mute video"
			 * @param source [string OR object] <null> "Source image (string or object) or video (object) or YouTube (object)"
			 * @param youtubeOptions [object] <null> "Custom YouTube player parameters (to be used cautiously); See https://developers.google.com/youtube/player_parameters for more"
			 */
			defaults: {
				autoPlay       : true,
				customClass    : "",
				embedRatio     : 1.777777,
				loop           : true,
				mute           : true,
				source         : null,
				youtubeOptions : {}
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
				_construct    : construct,
				_destruct     : destruct,
				_resize       : resize,

				play          : playVideo,
				pause         : pauseVideo,
				mute          : muteVideo,
				unmute        : unmuteVideo,
				resize        : doResizeInstance,
				load          : loadMedia,
				unload        : unloadMedia
			}
		}),

		// Localize References

		Classes         = Plugin.classes,
		RawClasses      = Classes.raw,
		Events          = Plugin.events,
		Functions       = Plugin.functions,

		Window          = Formstone.window,
		$Instances      = [],

		BGSupport       = ("backgroundSize" in Formstone.document.documentElement.style),
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

})

);
