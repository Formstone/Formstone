// import MediaQuery from './mediaquery.js';
import {
  addClass,
  removeClass,
  getAttr,
  setAttr,
  removeAttr,
  extend,
  element,
  select,
  siblings,
  iterate,
  on,
  off,
  once
} from './utils.js';

// Accessibility based on https://plousia.com/blog/how-create-accessible-mobile-menu

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
<div class="fs-lightbox" role="dialog" aria-modal="true">
  <div class="fs-lightbox-overlay"></div>
  <div class="fs-lightbox-loading">[loading]</div>
  <button type="button" class="fs-lightbox-close" aria-label="Close">[close]</button>
  <div class="fs-lightbox-container"></div>
  <button type="button" class="fs-lightbox-control fs-lightbox-control_previous" aria-label="Previous">[previous]</button>
  <button type="button" class="fs-lightbox-control fs-lightbox-control_next" aria-label="Next">[next]</button>
</div>`,
      //       zoom: `
      // <button type="button" class="fs-lightbox-zoom fs-lightbox-zoom_in" aria-label="Zoom In">[zoomIn]</button>
      // <button type="button" class="fs-lightbox-zoom fs-lightbox-zoom_out" aria-label="Zoom Out">[zoomOut]</button>`,
      close: `<span class="fs-lightbox-sr">Close</span><svg viewBox="-6 -6 24 24" fill="currentColor"><path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></path></svg>`,
      loading: '<span class="fs-lightbox-sr">Loading</span>',
      previous: `<span class="fs-lightbox-sr">Previous</span><svg viewBox="-5 -5 24 24" fill="currentColor"><path d="M3.414 7.657l3.95 3.95A1 1 0 0 1 5.95 13.02L.293 7.364a.997.997 0 0 1 0-1.414L5.95.293a1 1 0 1 1 1.414 1.414l-3.95 3.95H13a1 1 0 0 1 0 2H3.414z"></path></svg>`,
      next: `<span class="fs-lightbox-sr">Next</span><svg viewBox="-5 -5 24 24" fill="currentColor"><path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z"></path></svg>`,
      // zoomIn: `<span class="fs-lightbox-sr">Zoom In</span><svg viewBox="-2.5 -2.5 24 24" fill="currentColor"><path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414zM9 7h2a1 1 0 0 1 0 2H9v2a1 1 0 0 1-2 0V9H5a1 1 0 1 1 0-2h2V5a1 1 0 1 1 2 0v2z"></path></svg>`,
      // zoomOut: `<span class="fs-lightbox-sr">Zoom Out</span><svg viewBox="-2.5 -2.5 24 24" fill="currentColor"><path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414zM5 7h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2z"></path></svg>`
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

    iterate(targets, (el) => {
      if (!el.Lightbox) {
        new Lightbox(el, options);
      }
    });

    return targets;
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
      console.warn('Lightbox: Error parsing options JSON', el);
    }

    // Internal Data

    Object.assign(this, extend(true, this.constructor.#_defaults, options || {}, optionsData));

    this.el = el;
    this.guid = this.constructor.#_guid++;
    this.guidClass = `fs-lightbox-element-${this.guid}`;
    this.gallery = dataset.lightboxGallery || null;
    this.isOpen = false;
    this.isTouching = false;

    //

    addClass(this.el, this.guidClass);

    on(this.el, 'click', this.#onClick);

    el.Lightbox = this;
  }

  //

  destroy() {
    this.close();

    removeClass(this.el, this.guidClass);

    off(this.el, 'click', this.#onClick);

    this.el.Lightbox = null;

    delete this.el.Lightbox;
  }

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
      // 'zoomin': this.#onZoomIn(),
      // 'zoomout': this.#onZoomOut(),
    };

    this.#draw();

    this.#setPositions();

    this.#hideSiblings();

    setTimeout(() => {
      addClass(this.lightboxEl, 'fs-lightbox-open');

      this.isOpen = true;

      this.lightboxEl.focus();
    }, 0);
  }

  close() {
    if (!this.isOpen) {
      return;
    }

    removeClass(this.lightboxEl, 'fs-lightbox-open');

    this.#showSiblings();

    off(window, 'keydown', this.listeners.keydown);

    once(this.lightboxEl, 'transitionend', (e) => {
      iterate(this.items, (item, index) => {
        if (item.isElement) {
          item.targetEl.append(...item.frameEl.childNodes);
        }
      });

      this.lightboxEl.remove();

      this.isOpen = false;

      this.el.focus();
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

    iterate(targets, (el, i) => {
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
          caption: el.dataset.lightboxCaption || getAttr(el, 'title'),
          // zoomed: false,
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

    iterate(this.items, (item, index) => {
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

    once(this.closeEl, 'click', this.listeners.close);
    on(this.controlPreviousEl, 'click', this.listeners.previous);
    on(this.controlNextEl, 'click', this.listeners.next);
    on(this.containerEl, 'click', this.listeners.container);
    on(window, 'keydown', this.listeners.keydown);
  }

  //

  #drawImage(item, index) {
    let itemEl = element('div');
    let wrapEl = element('div');
    let mediaEl = element('div');
    let imgEl = element('img');

    addClass(itemEl, 'fs-lightbox-item', `fs-lightbox-item_${index}`);
    addClass(wrapEl, 'fs-lightbox-wrap');
    addClass(mediaEl, 'fs-lightbox-media', 'fs-lightbox-media_image');
    addClass(imgEl, 'fs-lightbox-image');

    setAttr(imgEl, {
      'data-src': item.source,
      'draggable': 'false'
    });

    mediaEl.append(imgEl);
    wrapEl.append(mediaEl);
    itemEl.append(wrapEl);

    this.#checkCaption(item, itemEl);

    this.containerEl.append(itemEl);

    item.el = itemEl;
    item.mediaEl = mediaEl;

    // // zoom

    // let zoom = this.templates.zoom
    //   .replace('[zoomIn]', this.templates.zoomIn)
    //   .replace('[zoomOut]', this.templates.zoomOut);

    // itemEl.insertAdjacentHTML('beforeend', zoom);

    // let zoomInEl = select('.fs-lightbox-zoom_in', itemEl)[0];
    // let zoomOutEl = select('.fs-lightbox-zoom_out', itemEl)[0];

    // console.log(zoomInEl);

    // on(zoomInEl, 'click', this.listeners.zoomin);
    // on(zoomOutEl, 'click', this.listeners.zoomout);
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

    let itemEl = element('div');
    let wrapEl = element('div');
    let mediaEl = element('div');
    let frameEl = element('div');
    let iframeEl = element('iframe');

    addClass(itemEl, 'fs-lightbox-item', `fs-lightbox-item_${index}`);
    addClass(wrapEl, 'fs-lightbox-wrap');
    addClass(mediaEl, 'fs-lightbox-media', 'fs-lightbox-media_video');
    addClass(frameEl, 'fs-lightbox-video');

    setAttr(iframeEl, {
      'frameborder': '0',
      'seamless': 'seamless',
      'allowfullscreen': '',
      'data-src': source
    });

    frameEl.append(iframeEl);
    mediaEl.append(frameEl);
    wrapEl.append(mediaEl);
    itemEl.append(wrapEl);

    this.#checkCaption(item, itemEl);

    this.containerEl.append(itemEl);

    item.el = itemEl;
    item.mediaEl = mediaEl;
  }

  #drawIframe(item, index) {
    let itemEl = element('div');
    let wrapEl = element('div');
    let mediaEl = element('div');
    let frameEl = element('div');
    let iframeEl = element('iframe');

    addClass(itemEl, 'fs-lightbox-item', `fs-lightbox-item_${index}`);
    addClass(wrapEl, 'fs-lightbox-wrap');
    addClass(mediaEl, 'fs-lightbox-media', 'fs-lightbox-media_iframe');
    addClass(frameEl, 'fs-lightbox-iframe');

    setAttr(iframeEl, {
      'frameborder': '0',
      'seamless': 'seamless',
      'data-src': item.source
    });

    frameEl.append(iframeEl);
    mediaEl.append(frameEl);
    wrapEl.append(mediaEl);
    itemEl.append(wrapEl);

    this.#checkCaption(item, itemEl);

    this.containerEl.append(itemEl);

    item.el = itemEl;
    item.mediaEl = mediaEl;
    item.frameEl = frameEl;
  }

  #drawElement(item, index) {
    let itemEl = element('div');
    let wrapEl = element('div');
    let mediaEl = element('div');
    let frameEl = element('div');

    item.targetEl = select(item.hash)[0];

    addClass(itemEl, 'fs-lightbox-item', `fs-lightbox-item_${index}`, 'fs-lightbox-loaded');
    addClass(wrapEl, 'fs-lightbox-wrap');
    addClass(mediaEl, 'fs-lightbox-media', 'fs-lightbox-media_element');
    addClass(frameEl, 'fs-lightbox-element');

    frameEl.append(...item.targetEl.childNodes);
    mediaEl.append(frameEl);
    wrapEl.append(mediaEl);
    itemEl.append(wrapEl);

    this.#checkCaption(item, itemEl);

    this.containerEl.append(itemEl);

    item.isLoaded = true;

    item.el = itemEl;
    item.mediaEl = mediaEl;
    item.frameEl = frameEl;
  }

  //

  #setPositions() {
    iterate(this.items, (item, index) => {
      removeClass(item.el, 'fs-lightbox-active', 'fs-lightbox-item_previous', 'fs-lightbox-item_next');

      if (index === this.index) {
        addClass(item.el, 'fs-lightbox-active');

        removeAttr(item.el, 'aria-hidden');

        if (!item.isLoaded) {
          this.#showLoading();

          this.#loadItem(item, index);
        } else {
          this.#hideLoading();
        }
      } else {
        once(item.el, 'transitionend', (e) => {
          this.#unloadItem(item, index);
        });

        setAttr(item.el, 'aria-hidden', 'true');
      }

      if (index < this.index) {
        addClass(item.el, 'fs-lightbox-item_previous');
      }

      if (index > this.index) {
        addClass(item.el, 'fs-lightbox-item_next');
      }
    });

    setAttr(this.controlPreviousEl, 'disabled', (this.index === 0));
    setAttr(this.controlNextEl, 'disabled', (this.index === this.items.length - 1));
  }

  //

  #loadItem(item, index) {
    if (index !== this.index) {
      return;
    }

    let media = select('[data-src]', item.el);

    iterate(media, (m) => {
      once(m, 'load', (e) => {
        addClass(item.el, 'fs-lightbox-loaded');

        item.isLoaded = true;

        this.#hideLoading();
      });

      m.src = getAttr(m, 'data-src');
    });
  }

  #unloadItem(item, index) {
    if (index == this.index) {
      return;
    }

    // if (item.isImage) {
    //   this.#resetZoom(item);
    // }

    if ((item.isVideo || item.isIframe) && item.isLoaded) {
      let media = select('[data-src]', item.el);

      iterate(media, (m) => {
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

  #showSiblings() {
    iterate(siblings(this.lightboxEl), (el) => {
      setAttr(el, 'aria-hidden', el.dataset.lightboxAriaHidden || false);
      delete el.dataset.lightboxAriaHidden;
    });
  }

  #hideSiblings() {
    iterate(siblings(this.lightboxEl), (el) => {
      el.dataset.lightboxAriaHidden = getAttr(el, 'aria-hidden') || '';
      setAttr(el, 'aria-hidden', true);
    });
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

  #checkCaption(item, el) {
    if (item.caption) {
      el.insertAdjacentHTML('beforeend', `<div class="fs-lightbox-details">${item.caption}</div>`);
    }
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
      this.pointerStartY = e.clientY;

      this.containerEl.setPointerCapture(e.pointerId);

      addClass(this.containerEl, 'fs-lightbox-touching');

      on(this.containerEl, 'pointermove', this.listeners.pointermove);
      on(this.containerEl, 'pointerup', this.listeners.pointerup);
    }
  }

  #onPointerMove() {
    return (e) => {
      let item = this.items[this.index];

      // if (item.zoomed) {
      //   // handle pan
      //   let diffX = -(this.pointerStartX - e.clientX);
      //   let diffY = -(this.pointerStartY - e.clientY);


      // } else {
      let diff = -(this.pointerStartX - e.clientX);

      item.el.style.transform = `translate3d(${diff}px, 0, 0)`;
      // }
    }
  }

  #onPointerUp() {
    return (e) => {
      let item = this.items[this.index];

      removeClass(this.containerEl, 'fs-lightbox-touching');

      off(this.containerEl, 'pointermove', this.listeners.pointermove);
      off(this.containerEl, 'pointerup', this.listeners.pointerup);

      // if (item.zoomed) {
      //   // handle pan
      // } else {
      let diff = this.pointerStartX - e.clientX;

      item.el.style.transform = null;

      if (Math.abs(diff) > this.threshold) {
        if (diff < 0) {
          this.previous();
        }
        if (diff > 0) {
          this.next();
        }
      }
      // }

      this.isTouching = false;

      once(this.containerEl, 'click', (e) => {
        e.stopPropagation(); // prevent closing when swiping
      }, true);
    }
  }

  // //

  // #onZoomIn() {
  //   return (e) => {
  //     e.stopPropagation();

  //     console.log('Zoom in');

  //     let item = this.items[this.index];

  //     item.zoomed = true;

  //     addClass(item.el, 'fs-lightbox-zoomed');

  //     console.log(item, item.el);
  //   }
  // }

  // #onZoomOut() {
  //   return (e) => {
  //     e.stopPropagation();

  //     console.log('Zoom out');

  //     let item = this.items[this.index];

  //     this.#resetZoom(item);
  //   }
  // }

  // #resetZoom(item) {
  //   item.zoomed = false;

  //   removeClass(item.el, 'fs-lightbox-zoomed');

  //   // item.el.style.transform
  // }

};

// Export

export default Lightbox;