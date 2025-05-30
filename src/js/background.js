import MediaQuery from './mediaquery.js';
import {
  isFn,
  isObj,
  extend,
  //
  element,
  select,
  iterate,
  //
  once,
  trigger,
  //
  addClass,
  removeClass,
  //
  getAttr,
  setAttr,
} from './utils.js';

// Class

class Background {

  static #_guid = 1;

  static #_defaults = {
    // alt: '',
    autoPlay: true,
    lazy: false,
    lazyOffset: '100px',
    loop: true,
    mute: true,
    source: null,
    youtubeOptions: {}
  };

  //

  static defaults(options) {
    this.#_defaults = extend(true, this.#_defaults, options);
  }

  static construct(selector, options) {
    let targets = select(selector);

    iterate(targets, (el) => {
      if (!el.Background) {
        new Background(el, options);
      }
    });

    return targets;
  }

  //

  constructor(el, options) {
    if (el.Background) {
      console.warn('Background: Instance already exists', el);
      return;
    }

    // Parse JSON Options

    let optionsData = {};
    let dataset = el.dataset;

    try {
      optionsData = JSON.parse(dataset.backgroundOptions || '{}');
    } catch (e) {
      console.warn('Background: Error parsing options JSON', el);
    }

    // Internal Data

    Object.assign(this, extend(true, this.constructor.#_defaults, options || {}, optionsData));

    this.el = el;
    this.guid = this.constructor.#_guid++;
    this.guidClass = `fs-background-element-${this.guid}`;
    this.layerGuid = 0;

    //

    this.container = element('div');
    addClass(this.container, 'fs-background-container');
    setAttr(this.container, {
      'aria-hidden': 'true',
      'role': 'presentation',
      'tabindex': '-1',
    });

    el.append(this.container);
    addClass(el, 'fs-background', this.guidClass);

    if (this.lazy) {
      addClass(el, 'fs-background-lazy');

      this.observer = new IntersectionObserver((entries, observer) => {
        iterate(entries, (entry) => {
          this.#observe(entry);
        });
      }, {
        // root: this.parentEl || null,
        root: null,
        threshold: 0,
        rootMargin: `0px 0px ${this.lazyOffset} 0px`
      });

      this.observer.observe(el);
    } else {
      this.#initialLoad(this.source);
    }

    el.Background = this;
  }

  //

  destroy() {
    this.container.remove();

    removeClass(this.el, 'fs-background', this.guidClass);

    this.el.Background = null;

    delete this.el.Background;
  }

  //

  #observe(entry) {
    if (entry.isIntersecting) {
      this.observer.unobserve(this.el);
      this.observer = null;
      this.#initialLoad(this.source);
    }
  }

  #initialLoad() {
    let source = this.source;
    this.source = '';
    this.load(source);
  }

  //

  load(source) {
    addClass(this.el, 'fs-background-loaded');

    if (source !== this.source) {
      this.source = source;
      this.sources = null;
      this.responsive = false;

      this.player = null;
      this.playerReady = true;
      this.playing = false;

      this.isVideo = (isObj(source) && !!(source.mp4 || source.ogg || source.webm));
      this.isYouTube = (!this.isVideo && isObj(source) && !!source.youtube);
      this.isImage = (!this.isVideo && !this.isYouTube);

      // Load Image

      if (this.isImage) {
        let newSource = source;

        // Responsive image handling
        if (isObj(source)) {
          let sources = [];
          let keys = [];

          iterate(Object.keys(source), (key) => {
            keys.push(key);
          });

          keys.sort((a, b) => {
            return parseInt(a, 10) - parseInt(b, 10);
          });

          for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let width = parseInt(key, 10);
            let mq = `(min-width: ${width}px)`;

            if (i + 1 < keys.length) {
              let maxWidth = parseInt(keys[i + 1], 10) - 1;

              mq = `(min-width: ${width}px) and (max-width: ${maxWidth}px)`;
            }

            sources.push({
              width: width,
              url: source[key],
              // mq: window.matchMedia(`(min-width: ${mq}px)`)
              mediaquery: MediaQuery.bind(`background-${this.guid}-${mq}`, mq, {
                enter: () => {
                  this.#loadImage(source[key]);
                }
              })
            });
          }

          this.sources = sources; // TODO do we need to track this way?
        } else {
          // Single image
          this.#loadImage(newSource);
        }
      }

      // Load Video

      if (this.isVideo) {
        this.#loadVideo(source);
      }

      // Load YouTube

      if (this.isYouTube) {
        this.#loadYouTube(source);
      }
    } else {
      trigger(this.el, 'background:loaded');
    }
  }

  //

  #loadImage(source) {
    this.layerGuid++;

    let media = element('div');

    media.ariaHidden = true;
    media.className = `fs-background-media fs-background-image`; // fs-background-layer-${this.layerGuid}`;
    media.style.opacity = 0;
    media.style.backgroundImage = `url(${source})`;

    setAttr(media, 'data-background-layer', this.layerGuid);

    this.container.append(media);

    let image = new Image();

    //

    image.onload = () => {
      this.#onLoad(media);
    };

    image.src = source;

    this.source = source;
  }

  //

  #loadVideo(source) {
    if (source.poster) {
      this.#loadImage(source.poster);
    }

    this.layerGuid++;

    let media = element('div');
    let video = element('video');

    media.ariaHidden = true;
    media.className = 'fs-background-media fs-background-video';
    media.style.opacity = 0;

    setAttr(media, 'data-background-layer', this.layerGuid);

    setAttr(video, {
      'playsinline': '',
      'playsinline': 'true',
      'preload': 'auto',
      'role': 'presentation',
      'tabindex': '-1',
    });

    if (this.loop) {
      video.loop = true;
    }
    if (this.mute) {
      video.muted = true;
    }
    if (this.autoPlay) {
      video.autoplay = true;
    }

    if (source.webm) {
      let src = element('source');
      src.type = 'video/webm';
      src.src = source.webm;

      video.append(src);
    }
    if (source.mp4) {
      let src = element('source');
      src.type = 'video/mp4';
      src.src = source.mp4;

      video.append(src);
    }
    if (source.ogg) {
      let src = element('source');
      src.type = 'video/ogg';
      src.src = source.ogg;

      video.append(src);
    }

    //

    once(video, 'loadeddata', (e) => {
      this.#onLoad(media);

      if (this.autoPlay) {
        this.play();
      }
    });

    media.append(video);
    this.container.append(media);

    this.source = source;
  }

  //

  #loadYouTube(source) {
    // let parts = source.youtube.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);
    let parts = source.youtube.match(/(?:(?:youtube\.com|youtube-nocookie\.com)\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);

    this.youTubeId = parts[1];

    let ytURL = 'youtube.com';

    if (!source.poster) {
      // source.poster = '//img.youtube.com/vi/' + this.youTubeId + '/0.jpg';
      source.poster = `//img.${ytURL}/vi/${this.youTubeId}/maxresdefault.jpg`;
    }

    this.#loadImage(source.poster);

    this.layerGuid++;

    if (!select(`script[src*="${ytURL}/iframe_api"]`).length) {
      let script = element('script');
      script.src = `//www.${ytURL}/iframe_api`;
      document.head.append(script);
    }

    if (!YouTubeReady) {
      YouTubeQueue.push({
        el: this,
        source: source
      });
    } else {
      let guid = `fs-background-${this.guid}-${this.layerGuid}`;
      let media = element('div');
      let video = element('div');

      video.id = guid;

      media.ariaHidden = true;
      media.className = 'fs-background-media fs-background-embed';
      media.style.opacity = 0;

      setAttr(media, 'data-background-layer', this.layerGuid);

      media.append(video);
      this.container.append(media);

      let options = extend(true, {}, {
        controls: 0,
        rel: 0,
        showinfo: 0,
        wmode: 'transparent',
        enablejsapi: 1,
        version: 3,
        playerapiid: guid,
        loop: (this.loop) ? 1 : 0,
        // autoplay: 1,
        mute: 1,
        origin: `${window.location.protocol}//${window.location.host}`
      }, this.youtubeOptions, {
        autoplay: 1 // Must be enabled for initial API callbacks to fire
      });

      this.player = new window.YT.Player(guid, {
        host: `https://www.${ytURL.replace('.com', '-nocookie.com')}`,
        videoId: this.youTubeId,
        playerVars: options,
        events: {
          onReady: (e) => {
            // console.log('onReady', e);

            let iframe = select('iframe', this.container);

            setAttr(iframe, {
              'role': 'presentation',
              'tabindex': '-1',
            });

            this.playerReady = true;
            // data.player.setPlaybackQuality('highres');



            if (this.mute) {
              this.player.mute();
            }

            if (this.autoPlay) {
              this.player.playVideo();
            } else {
              this.player.pauseVideo();
            }

            // TODO trigger ready event?
          },
          onStateChange: (e) => {
            // console.log('onStateChange', e);

            // -1 = unstarted
            //  0 = ended
            //  1 = playing
            //  2 = paused
            //  3 = buffering
            //  4 =
            //  5 = cued

            if (!this.playing && e.data === window.YT.PlayerState.PLAYING) {
              this.playing = true;

              this.#onLoad(media);
            } else if (this.loop && this.playing && e.data === window.YT.PlayerState.ENDED) {
              // fix looping option
              this.player.playVideo();
            }

            // Fix for Safari's overly secure security settings
            // this.el.find(Classes.embed)
            //   .addClass(RawClasses.ready);
          },
          onPlaybackQualityChange: (e) => {
            // console.log('onPlaybackQualityChange', e);
          },
          onPlaybackRateChange: (e) => {
            // console.log('onPlaybackRateChange', e);
          },
          onError: (e) => {
            // console.log('onError', e);
          },
          onApiChange: (e) => {
            // console.log('onApiChange', e);
          }
        }
      });
    }
  }

  //

  play() {
    if (this.isYouTube) {
      if (this.playerReady) {
        this.player.playVideo();
      } else {
        this.autoPlay = true;
      }
    } else if (this.isVideo) {
      let video = select('video', this.container);

      if (video.length) {
        video[0].play();
      }
    }

    // TODO trigger play event?

    this.playing = true;
  }

  pause() {
    if (this.isYouTube) {
      if (this.playerReady) {
        this.player.pauseVideo();
      } else {
        this.autoPlay = false;
      }
    } else if (this.video) {
      let video = select('video', this.container);

      if (video.length) {
        video[0].pause();
      }
    }

    // TODO trigger pause event?

    this.playing = false;
  }

  mute() {
    if (this.isYouTube && this.playerReady) {
      this.player.mute();
      // this.player.setVolume(0);
    } else if (this.video) {
      let video = select('video', this.container);

      if (video.length) {
        video[0].muted = true;
      }
    }

    // TODO trigger mute event?

    this.mute = true;
  }

  // Mute / Unmute is now blocked unless the user interacts with the video

  unmute() {
    if (this.isYouTube && this.playerReady) {
      this.player.unMute();
      // this.player.setVolume(100);

      if (this.playing) {
        this.player.playVideo();
      }
    } else if (this.video) {
      let video = select('video', this.container);

      if (video.length) {
        video[0].muted = false;
      }
    }

    // TODO trigger unmute event?

    this.mute = false;
  }

  // TODO unload method and event?

  // TODO set background video volume and event?

  //

  #onLoad(media) {
    let layer = getAttr(media, 'data-background-layer');

    once(media, 'transitionend', (e) => {
      if (this.onLoadTimer) {
        clearTimeout(this.onLoadTimer);
        this.onLoadTimer = null;
      }

      this.onLoadTimer = setTimeout(() => {
        let extra = select(`div:not([data-background-layer="${layer}"]):not([data-background-layer="${this.layerGuid}"])`, this.container);

        iterate(extra, (node) => {
          node.remove();
        });
      }, 500);
    });

    media.style.opacity = 1;

    // TODO handle errors and trigger events?

    trigger(this.el, 'background:loaded');
  }

};

// YouTube Helper

let YouTubeReady = false;
let YouTubeQueue = [];

function onYouTubeReady() {
  YouTubeReady = true;

  iterate(YouTubeQueue, (item) => {
    item.el.load(item.source);
  });

  YouTubeQueue = [];
}

let originalYouTubeCallback = (isFn(window.onYouTubeIframeAPIReady)) ? window.onYouTubeIframeAPIReady : null;

window.onYouTubeIframeAPIReady = () => {
  if (originalYouTubeCallback) {
    originalYouTubeCallback.call();
  }

  onYouTubeReady();
};

// Export

export default Background;