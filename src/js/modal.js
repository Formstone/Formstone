// import MediaQuery from './mediaquery.js';
import {
  extend,
  //
  select,
  iterate,
  //
  on,
  off,
  once,
  trigger,
  //
  addClass,
  removeClass,
  hasClass,
  //
  getAttr,
  setAttr,
} from './utils.js';

// Accessibility based on https://plousia.com/blog/how-create-accessible-mobile-menu
// Updated based on work by @nhall

let ModalInstance;

// Class

class Modal {

  static #_guid = 1;

  static #_defaults = {
    customClass: '',
    returnFocus: true,
    templates: {
      container: `
<dialog class="fs-modal" role="dialog" aria-modal="true">
  <div class="fs-modal-container">
    <div class="fs-modal-wrap">
      <button type="button" class="fs-modal-close" autofocus>[close]</button>
      <div class="fs-modal-frame"></div>
    </div>
  </div>
</dialog>`,
      close: `<span class="fs-modal-sr">Close</span><svg viewBox="-6 -6 24 24" fill="currentColor"><path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></path></svg>`,
    },
  };

  static defaults(options) {
    this.#_defaults = extend(true, this.#_defaults, options);
  }

  static construct(selector, options) {
    let targets = select(selector);

    iterate(targets, (el) => {
      if (!el.Modal) {
        new Modal(el, options);
      }
    });

    return targets;
  }

  //

  constructor(el, options) {
    if (el.Modal) {
      console.warn('Modal: Instance already exists', el);
      return;
    }

    // Parse JSON Options

    let optionsData = {};
    let dataset = el.dataset;

    try {
      optionsData = JSON.parse(dataset.modalOptions || '{}');
    } catch (e) {
      console.warn('Modal: Error parsing options JSON', el);
    }

    // Internal Data

    Object.assign(this, extend(true, this.constructor.#_defaults, options || {}, optionsData));

    this.el = el;
    this.guid = this.constructor.#_guid++;
    this.guidClass = `fs-modal-element-${this.guid}`;
    this.isOpen = false;

    // Enhance trigger

    addClass(this.el, this.guidClass);

    setAttr(this.el, {
      role: 'button',
      'aria-haspopup': 'dialog'
    });

    if (!getAttr(this.el, 'aria-label') && !getAttr(this.el, 'aria-labelledby')) {
      setAttr(this.el, 'aria-label', 'Open Modal');
    }

    on(this.el, 'click', this.#onClick);

    on(this.el, 'keydown', (e) => {
      if (e.key === ' ') {
        e.preventDefault();

        this.open();
      }
    });

    el.Modal = this;
  }

  //

  destroy() {
    this.close();

    removeClass(this.el, this.guidClass);

    off(this.el, 'click', this.#onClick);

    this.el.Modal = null;

    delete this.el.Modal;
  }

  //

  open() {
    let promise = ModalInstance ? ModalInstance.close() : Promise.resolve();

    promise.then(() => {
      if (this.isOpen) {
        return;
      }

      this.hash = this.el.hash;
      this.targetEl = select(this.hash)[0];

      if (!this.targetEl) {
        return;
      }

      this.listeners = {
        'close': this.#onClose(),
        'container': this.#onContainerClick(),
      };

      this.#draw();

      if (typeof this.modalEl.showModal === 'function') {
        this.modalEl.showModal();
      }

      setTimeout(() => {
        addClass(this.modalEl, 'fs-modal-open');

        this.isOpen = true;

        ModalInstance = this;

        trigger(window, 'modal:open', {
          el: this.el
        });
      }, 10);
    });
  }

  close() {
    if (!this.isOpen) {
      return;
    }

    // Fixes 'stuck' instance
    if (!hasClass(this.modalEl, 'fs-modal-open')) {
      this.#cleanUp();

      return Promise.resolve();
    }

    removeClass(this.modalEl, 'fs-modal-open');

    off(window, 'modal:close', this.listeners.close);

    let promise = new Promise((resolve, reject) => {
      let cb = (e) => {
        if (!hasClass(e.target, 'fs-modal')) {
          return;
        }

        off(this.modalEl, 'transitionend', cb);
        // off(this.modalEl, 'transitioncancel', cb);

        this.#cleanUp();

        resolve(this.el);
      };

      on(this.modalEl, 'transitionend', cb);
      // on(this.modalEl, 'transitioncancel', cb);
    });

    return promise;
  }

  #cleanUp() {
    this.targetEl.append(...this.frameEl.childNodes);

    this.modalEl.remove();

    this.isOpen = false;

    if (this.returnFocus) {
      this.el.focus();
    }

    trigger(window, 'modal:close', {
      el: this.el
    });

    ModalInstance = null;
  }

  //

  #draw() {
    let html = this.templates.container
      .replace('[close]', this.templates.close);

    document.body.insertAdjacentHTML('beforeend', html);

    this.modalEl = select('.fs-modal')[0];
    this.overlayEl = select('.fs-modal-overlay', this.modalEl)[0];
    this.closeEl = select('.fs-modal-close', this.modalEl)[0];
    this.containerEl = select('.fs-modal-container', this.modalEl)[0];
    this.wrapEl = select('.fs-modal-wrap', this.modalEl)[0];
    this.frameEl = select('.fs-modal-frame', this.modalEl)[0];

    this.frameEl.append(...this.targetEl.childNodes);
    this.wrapEl.append(this.frameEl);

    addClass(this.modalEl, this.customClass);

    once(this.closeEl, 'click', this.listeners.close);
    on(this.containerEl, 'click', this.listeners.container);
    on(this.modalEl, 'cancel', (e) => {
      this.close();
    });
    on(window, 'modal:close', this.listeners.close);
  }

  //

  #onClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.Modal.open();
  }

  #onContainerClick() {
    return (e) => {
      if (e.target !== this.wrapEl && !this.wrapEl.contains(e.target)) {
        this.close();
      } else {
        this.#checkClick(e);
      }
    };
  }

  #checkClick(e) {
    if (hasClass(e.target, 'fs-modal-trigger-close')) {
      this.close();
    }
  }

  #onClose() {
    return (e) => {
      this.close();
    };
  }

  // #onKeyDown() {
  //   return (e) => {
  //     if (e.key === 'Escape') {
  //       this.close();
  //     }
  //   };
  // }

};

// Export

export default Modal;