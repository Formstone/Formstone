import {
  // hasClass,
  addClass,
  removeClass,
  getAttr,
  setAttr,
  // removeAttr,
  extend,
  select,
  on,
  off,
  once,
  type
} from './utils.js';

// Formatters

function formatYouTube(parts) {
  return '//www.youtube.com/embed/' + parts[1];
}

function formatVimeo(parts) {
  return '//player.vimeo.com/video/' + parts[3];
}

// Class

class Lightbox {

  static #_guid = 1;

  static #_defaults = {
    fileTypes: /\.(jpg|sjpg|jpeg|png|gif)/i,
    iframeWidth: '900px',
    // loop: false,
    threshold: 50,
    templates: {
      container: `
<div class="fs-lightbox">
  <div class="fs-lightbox-overlay"></div>
  <div class="fs-lightbox-loading">[loading]</div>
  <button type="button" class="fs-lightbox-close">[close]</button>
  <div class="fs-lightbox-container"></div>
  <button type="button" class="fs-lightbox-control fs-lightbox-control_previous">[previous]</button>
  <button type="button" class="fs-lightbox-control fs-lightbox-control_next">[next]</button>
</div>`,
      //       item: `
      // <div class="fs-lightbox-item">
      //   <div class="fs-lightbox-media"></div>
      //   <div class="fs-lightbox-details"></div>
      // </div>`,
      close: `<span class="fs-lightbox-sr">Close</span><svg viewBox="0 0 24 24" fill="none"><path d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></svg>`,
      loading: '<span class="fs-lightbox-sr">Loading</span>',
      previous: `<span class="fs-lightbox-sr">Previous</span><svg viewBox="0 0 24 24" fill="none"><path d="M15 19L8 12L15 5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
      next: `<span class="fs-lightbox-sr">Next</span><svg viewBox="0 0 24 24" fill="none"><path d="M9 5L16 12L9 19" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
    },
    videoProviders: {
      youtube: {
        pattern: /(?:(?:youtube\.com|youtube-nocookie\.com)\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/,
        format: formatYouTube
      },
      vimeo: {
        pattern: /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,
        format: formatVimeo
      }
    }
  };

  static defaults(options) {
    this.#_defaults = extend(true, this.#_defaults, options);
  }

  static construct(selector, options) {
    let targets = select(selector);

    targets.forEach((el) => {
      if (!el.Lightbox) {
        el.Lightbox = new Lightbox(el, options);
      }
    });

    return targets;
  }

  static onClick() {

  }

  //

  constructor(el, options) {
    if (el.Lightbox) {
      console.warn('Lightbox: Instance already exists', el);
      return;
    }

    // Parse JSON Options

    let optionsData = {};
    let dataset = el.dataset;

    try {
      optionsData = JSON.parse(dataset.lightboxOptions || '{}');
    } catch (e) {
      console.warn('Background: Error parsing options JSON', el);
    }

    // Internal Data

    Object.assign(this, extend(true, this.constructor.#_defaults, options || {}, optionsData));

    this.el = el;
    this.guid = this.constructor.#_guid++;
    this.guidClass = `fs-lightbox-element-${this.guid}`;
    this.gallery = el.dataset.lightboxGallery || null;
    this.isOpen = false;
    this.isTouching = false;

    //

    addClass(this.el, this.guidClass);

    this.el.addEventListener('click', this.#onClick);
  }

  // destroy() {
  //   this.close();

  //   removeClass(this.el, this.guidClass);

  //   this.el.removeEventListener('click', this.#onClick);

  //   this.el.Lightbox = null;

  //   delete this.el.Lightbox;
  // }

  //

  open(index) {
    if (this.isOpen) {
      return;
    }

    this.index = index;

    this.#buildItems();

    this.listeners = {
      'close': this.#onClose(),
      'next': this.#onNext(),
      'previous': this.#onPrevious(),
      'container': this.#onContainerClick(),
      'keydown': this.#onKeyDown(),
      'pointerdown': this.#onPointerDown(),
      'pointermove': this.#onPointerMove(),
      'pointerup': this.#onPointerUp(),
    };

    this.#draw();

    this.#setPositions();

    setTimeout(() => {
      addClass(this.lightboxEl, 'fs-lightbox-open');

      this.isOpen = true;
    }, 0);
  }

  close() {
    if (!this.isOpen) {
      return;
    }

    removeClass(this.lightboxEl, 'fs-lightbox-open');

    off(window, 'keydown', this.listeners.keydown);

    once(this.lightboxEl, 'transitionend', (e) => {
      this.items.forEach((item, index) => {
        if (item.isElement) {
          item.targetEl.append(...item.mediaEl.childNodes);
        }
      });

      this.lightboxEl.remove();

      this.isOpen = false;
    });
  }

  //

  next() {
    this.index++;
    this.#checkIndex();

    this.#setPositions();
  }

  previous() {
    this.index--;
    this.#checkIndex();

    this.#setPositions();
  }

  jump(index) {
    this.index = index;
    this.#checkIndex();

    this.#setPositions();
  }

  //

  #buildItems() {
    this.selector = this.gallery ? `[data-lightbox-gallery="${this.gallery}"]` : `.${this.guidClass}`;

    let targets = select(this.selector);

    this.items = [];

    targets.forEach((el, i) => {
      if (el.tagName === 'A') {
        let source = el.href;
        let hash = el.hash;
        let type = el.dataset.lightboxType || '';
        let isImage = (type === 'image') || this.#checkImage(source);
        let isVideo = (type === 'video') || !!this.#checkVideo(source);
        let isIframe = (type === 'url') || (!isImage && !isVideo && source.substr(0, 4) === 'http' && !hash);
        let isElement = (type === 'element') || (!isImage && !isVideo && !isIframe && (hash.substr(0, 1) === '#'));

        if (!this.index && el == this.el) {
          this.index = i;
        }

        this.items.push({
          source: source,
          hash: hash,
          // type: type,
          isLoaded: false,
          isImage: isImage,
          isVideo: isVideo,
          isIframe: isIframe,
          isElement: isElement,
          caption: el.dataset.lightboxCaption || getAttr(el, 'title')
        });
      }
    });
  }

  //

  #draw() {
    let html = this.templates.container
      .replace('[close]', this.templates.close)
      .replace('[loading]', this.templates.loading)
      .replace('[previous]', this.templates.previous)
      .replace('[next]', this.templates.next);

    document.body.insertAdjacentHTML('beforeend', html);

    this.lightboxEl = select('.fs-lightbox')[0];
    this.overlayEl = select('.fs-lightbox-overlay', this.lightboxEl)[0];
    this.closeEl = select('.fs-lightbox-close', this.lightboxEl)[0];
    this.loadingEl = select('.fs-lightbox-loading', this.lightboxEl)[0];
    this.containerEl = select('.fs-lightbox-container', this.lightboxEl)[0];
    this.controlPreviousEl = select('.fs-lightbox-control_previous', this.lightboxEl)[0];
    this.controlNextEl = select('.fs-lightbox-control_next', this.lightboxEl)[0];

    if (this.items.length > 1) {
      addClass(this.lightboxEl, 'fs-lightbox-gallery');
    }

    this.#drawItems();

    once(this.closeEl, 'click', this.listeners.close);
    on(this.controlPreviousEl, 'click', this.listeners.previous);
    on(this.controlNextEl, 'click', this.listeners.next);
    on(this.containerEl, 'click', this.listeners.container);
    on(window, 'keydown', this.listeners.keydown);
  }

  #drawItems() {
    this.items.forEach((item, index) => {
      if (item.isImage) {
        this.#drawImage(item, index);
      }
      if (item.isVideo) {
        this.#drawVideo(item, index);
      }
      if (item.isIframe) {
        this.#drawIframe(item, index);
      }
      if (item.isElement) {
        this.#drawElement(item, index);
      }

      if (this.items.length > 1) {
        on(item.mediaEl, 'pointerdown', this.listeners.pointerdown);
      }
    });
  }

  #drawImage(item, index) {
    let itemEl = document.createElement('div');
    let wrapEl = document.createElement('div');
    let mediaEl = document.createElement('div');
    let imgEl = document.createElement('img');

    itemEl.className = `fs-lightbox-item fs-lightbox-item_${index}`;
    wrapEl.className = `fs-lightbox-wrap`;
    mediaEl.className = `fs-lightbox-media fs-lightbox-media_image`;
    imgEl.className = `fs-lightbox-image`;

    setAttr(imgEl, 'data-src', item.source);
    setAttr(imgEl, 'draggable', 'false');

    mediaEl.append(imgEl);
    wrapEl.append(mediaEl);
    itemEl.append(wrapEl);

    if (item.caption) {
      itemEl.insertAdjacentHTML('beforeend', `<div class="fs-lightbox-details">${item.caption}</div>`);
    }

    this.containerEl.append(itemEl);

    item.el = itemEl;
    item.mediaEl = mediaEl;
  }

  #drawVideo(item, index) {
    let url = this.#checkVideo(item.source);
    let qs = item.source.split('?');
    let parts = [
      '&origin=' + encodeURIComponent(window.location.protocol + '//' + window.location.hostname),
      '&enablejsapi=1'
    ];

    if (qs.length >= 2) {
      parts.push(qs.slice(1)[0].trim());
    }

    let source = `${url}?${parts.join('&')}`;

    let itemEl = document.createElement('div');
    let wrapEl = document.createElement('div');
    let mediaEl = document.createElement('div');
    let videoEl = document.createElement('div');
    let iframeEl = document.createElement('iframe');

    itemEl.className = `fs-lightbox-item fs-lightbox-item_${index}`;
    wrapEl.className = `fs-lightbox-wrap`;
    mediaEl.className = `fs-lightbox-media fs-lightbox-media_video`;
    videoEl.className = `fs-lightbox-video`;
    // iframeEl.className = `fs-lightbox-iframe`;

    setAttr(iframeEl, 'frameborder', '0');
    setAttr(iframeEl, 'seamless', 'seamless');
    setAttr(iframeEl, 'allowfullscreen', '');
    setAttr(iframeEl, 'data-src', source);

    videoEl.append(iframeEl);
    mediaEl.append(videoEl);
    wrapEl.append(mediaEl);
    itemEl.append(wrapEl);

    if (item.caption) {
      itemEl.insertAdjacentHTML('beforeend', `<div class="fs-lightbox-details">${item.caption}</div>`);
    }

    this.containerEl.append(itemEl);

    item.el = itemEl;
    item.mediaEl = mediaEl;
  }

  #drawIframe(item, index) {
    let itemEl = document.createElement('div');
    let wrapEl = document.createElement('div');
    let mediaEl = document.createElement('div');
    let containerEl = document.createElement('div');
    let iframeEl = document.createElement('iframe');

    itemEl.className = `fs-lightbox-item fs-lightbox-item_${index}`;
    wrapEl.className = `fs-lightbox-wrap`;
    mediaEl.className = `fs-lightbox-media fs-lightbox-media_iframe`;
    containerEl.className = `fs-lightbox-iframe`;
    // iframeEl.className = `fs-lightbox-iframe`;

    setAttr(iframeEl, 'frameborder', '0');
    setAttr(iframeEl, 'seamless', 'seamless');
    setAttr(iframeEl, 'data-src', item.source);

    containerEl.append(iframeEl);
    mediaEl.append(containerEl);
    wrapEl.append(mediaEl);
    itemEl.append(wrapEl);

    // if (item.caption) {
    //   itemEl.insertAdjacentHTML('beforeend', `<div class="fs-lightbox-details">${item.caption}</div>`);
    // }

    this.containerEl.append(itemEl);

    item.el = itemEl;
    item.mediaEl = mediaEl;
  }

  #drawElement(item, index) {
    let itemEl = document.createElement('div');
    let wrapEl = document.createElement('div');
    let mediaEl = document.createElement('div');
    let containerEl = document.createElement('div');

    item.targetEl = select(item.hash)[0];

    itemEl.className = `fs-lightbox-item fs-lightbox-item_${index} fs-lightbox-loaded`;
    wrapEl.className = `fs-lightbox-wrap`;
    mediaEl.className = `fs-lightbox-media fs-lightbox-media_element`;
    containerEl.className = `fs-lightbox-element`;

    containerEl.append(...item.targetEl.childNodes);
    mediaEl.append(containerEl);
    wrapEl.append(mediaEl);
    itemEl.append(wrapEl);

    // if (item.caption) {
    //   itemEl.insertAdjacentHTML('beforeend', `<div class="fs-lightbox-details">${item.caption}</div>`);
    // }

    this.containerEl.append(itemEl);

    item.isLoaded = true;

    item.el = itemEl;
    item.mediaEl = mediaEl;
  }

  //

  #setPositions() {
    this.items.forEach((item, index) => {
      removeClass(item.el, 'fs-lightbox-active', 'fs-lightbox-item_previous', 'fs-lightbox-item_next');

      if (index === this.index) {
        addClass(item.el, 'fs-lightbox-active');

        if (!item.isLoaded) {
          this.#showLoading();

          this.#loadItem(item);
        } else {
          this.#hideLoading();
        }
      } else {
        once(item.el, 'transitionend', (e) => {
          this.#unloadItem(item);
        });
      }

      if (index < this.index) {
        addClass(item.el, 'fs-lightbox-item_previous');
      }

      if (index > this.index) {
        addClass(item.el, 'fs-lightbox-item_next');
      }
    });

    // if (!this.loop) {
    removeClass(this.controlPreviousEl, 'fs-lightbox-visible');
    removeClass(this.controlNextEl, 'fs-lightbox-visible');
    // }

    if (this.index > 0) {
      addClass(this.controlPreviousEl, 'fs-lightbox-visible');
    }
    if (this.index < this.items.length - 1) {
      addClass(this.controlNextEl, 'fs-lightbox-visible');
    }
  }

  //

  #loadItem(item) {
    let media = select('[data-src]', item.el);

    media.forEach((m) => {
      once(m, 'load', (e) => {
        addClass(item.el, 'fs-lightbox-loaded');

        item.isLoaded = true;

        this.#hideLoading();
      });

      m.src = getAttr(m, 'data-src');
    });
  }

  #unloadItem(item) {
    if ((item.isVideo || item.isIframe) && item.isLoaded) {
      let media = select('[data-src]', item.el);

      media.forEach((m) => {
        m.src = '';
      });

      removeClass(item.el, 'fs-lightbox-loaded');

      item.isLoaded = false;
    }
  }

  //

  #showLoading() {
    addClass(this.loadingEl, 'fs-lightbox-visible');
  }

  #hideLoading() {
    removeClass(this.loadingEl, 'fs-lightbox-visible');
  }

  //

  #checkIndex() {
    if (this.index < 0) {
      this.index = 0;
    }
    if (this.index >= this.items.length) {
      this.index = this.items.length - 1;
    }
  }

  #checkImage(source) {
    return (source.match(this.fileTypes) !== null || source.substr(0, 10) === 'data:image');
  }

  #checkVideo(source) {
    for (let i in this.videoProviders) {
      let provider = this.videoProviders[i];
      let parts = source.match(provider.pattern);

      if (parts !== null) {
        return provider.format.call(this, parts);
      }
    }

    return false;
  }

  //

  #onClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.Lightbox.open();
  }

  #onContainerClick() {
    return (e) => {
      let item = this.items[this.index].mediaEl;

      if (e.target !== item && !item.contains(e.target)) {
        this.close();
      }
    };
  }

  #onClose() {
    return (e) => {
      this.close();
    };
  }

  #onPrevious() {
    return (e) => {
      this.previous();
    };
  }

  #onNext() {
    return (e) => {
      this.next();
    };
  }

  #onKeyDown() {
    return (e) => {
      if (e.key === 'ArrowLeft') {
        this.previous();
      }
      if (e.key === 'ArrowRight') {
        this.next();
      }
      if (e.key === 'Escape') {
        this.close();
      }
    };
  }

  //

  #onPointerDown() {
    return (e) => {
      this.isTouching = true;
      this.pointerStartX = e.clientX;

      this.containerEl.setPointerCapture(e.pointerId);

      addClass(this.containerEl, 'fs-lightbox-touching');

      on(this.containerEl, 'pointermove', this.listeners.pointermove);
      on(this.containerEl, 'pointerup', this.listeners.pointerup);
    }
  }

  #onPointerMove() {
    return (e) => {
      let diff = -(this.pointerStartX - e.clientX);

      this.items[this.index].el.style.transform = `translate3d(${diff}px, 0, 0)`;
    }
  }

  #onPointerUp() {
    return (e) => {
      removeClass(this.containerEl, 'fs-lightbox-touching');

      off(this.containerEl, 'pointermove', this.listeners.pointermove);
      off(this.containerEl, 'pointerup', this.listeners.pointerup);

      let diff = this.pointerStartX - e.clientX;

      this.items[this.index].el.style.transform = null;

      if (Math.abs(diff) > this.threshold) {
        if (diff < 0) {
          this.previous();
        }
        if (diff > 0) {
          this.next();
        }
      }

      this.isTouching = false;

      once(this.containerEl, 'click', (e) => {
        e.stopPropagation(); // prevent closing when swiping
      }, true);
    }
  }

};

// jQuery Wrapper

if (typeof jQuery !== 'undefined') {

  (($) => {
    $.fn['lightbox'] = function(options, ...args) {
      return $(this).each((index, el) => {
        if (!options || type(options) === 'object') {
          el.Lightbox = new Lightbox(el, options);
        } else if (el.Lightbox) {
          if (type(el.Lightbox[options]) === 'function') {
            el.Lightbox[options](...args);
          }
        }
      });
    };
  })(jQuery);

}

// Export

export default Lightbox;