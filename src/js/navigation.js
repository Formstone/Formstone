import Swap from './swap.js';
import {
  extend,
  select,
  siblings,
  iterate,
  on,
  off,
  trigger,
  addClass,
  removeClass,
  getAttr,
  setAttr,
  removeAttr,
  // type,
  isU
} from './utils.js';

// Accessibility based on https://plousia.com/blog/how-create-accessible-mobile-menu

// Class

class Navigation {

  static #_guid = 1;

  static #_defaults = {
    gravity: 'left',
    label: 'Menu',
    maxWidth: '980px',
    type: 'toggle'
  };

  //

  static defaults(options) {
    this.#_defaults = extend(true, this.#_defaults, options);
  }

  static construct(selector, options) {
    let targets = select(selector);

    iterate(targets, (el) => {
      if (!el.Navigation) {
        new Navigation(el, options);
      }
    });

    return targets;
  }

  //

  constructor(el, options) {
    if (el.Navigation) {
      console.warn('Navigation: Instance already exists', el);
      return;
    }

    // Parse JSON Options

    let optionsData = {};
    let dataset = el.dataset;

    try {
      optionsData = JSON.parse(dataset.navigationOptions || '{}');
    } catch (e) {
      console.warn('Navigation: Error parsing options JSON', el);
    }

    // Internal Data

    Object.assign(this, extend(true, this.constructor.#_defaults, options || {}, optionsData));

    this.el = el;
    this.guid = this.constructor.#_guid++;
    this.guidClass = `fs-navigation-element-${this.guid}`;
    this.guidHandle = `fs-navigation-handle-${this.guid}`;
    // this = extend(true, this.constructor.#_defaults, options || {}, optionsData);
    this.isOpen = false;

    this.handleEl = select(dataset.navigationHandle);
    this.contentEl = select(dataset.navigationContent);

    this.isToggle = (this.type === 'toggle');

    let typeClass = `fs-navigation-${this.type}`;
    let gravityClass = (!this.isToggle) ? `${typeClass}-${this.gravity}` : '';

    this.navClasses = ['fs-navigation', this.guidClass, `${typeClass}-nav`, `${gravityClass}-nav`];
    this.handleClasses = ['fs-navigation-handle', this.guidHandle, `${typeClass}-handle`, `${gravityClass}-handle`];
    this.contentClasses = ['fs-navigation-content', `${typeClass}-content`];
    this.contentOpenClasses = ['fs-navigation-open', `${gravityClass}-content`];

    //

    addClass(el, this.navClasses);
    addClass(this.handleEl, this.handleClasses);
    addClass(this.contentEl, this.contentClasses);

    //

    this.originalTabIndex = this.el.tabIndex;
    this.el.tabIndex = -1;

    this.originalRole = getAttr(this.el, 'role');
    this.originalLabel = getAttr(this.el, 'aria-label');
    this.originalModal = getAttr(this.el, 'aria-modal');

    //

    this.originalId = getAttr(this.el, 'id');

    if (this.originalId) {
      this.elId = this.originalId;
    } else {
      this.elId = this.guidClass;
      setAttr(this.el, 'id', this.elId);
    }

    this.listeners = {
      open: this.#onOpen(this),
      close: this.#onClose(this),
      enable: this.#onEnable(this),
      disable: this.#onDisable(this),
      body: this.#onBodyClick(this),
      keydown: this.#oKeyDown(this)
    };

    setAttr(this.handleEl, {
      'data-swap-target': `.${this.guidClass}`,
      'data-swap-linked': `${this.guidHandle}`,
      'data-swap-group': 'fs-navigation'
    });

    iterate(this.handleEl, (handle) => {
      setAttr(handle, 'data-tabindex', handle.tabIndex);
      handle.tabIndex = 0;

      on(handle, 'activate.swap', this.listeners.open);
      on(handle, 'deactivate.swap', this.listeners.close);
      on(handle, 'enable.swap', this.listeners.enable);
      on(handle, 'disable.swap', this.listeners.disable);
    });

    Swap.construct(`.${this.guidHandle}`, {
      classes: {
        enabled: 'fs-navigation-enabled',
        active: 'fs-navigation-open',
      },
      collapse: true,
      maxWidth: this.maxWidth
    });

    el.Navigation = this;
  }

  //

  destroy() {
    this.listeners.disable.call();

    removeClass(this.el, this.navClasses);
    removeClass(this.handleEl, this.handleClasses);
    removeClass(this.contentEl, this.contentClasses);
    removeAttr(this.el, 'aria-hidden');
    this.tabIndex = this.originalTabIndex;

    removeAttr(this.handleEl, [
      'data-swap-target',
      'data-swap-linked',
      'data-swap-group'
    ]);

    iterate(this.handleEl, (handle) => {
      handle.tabIndex = getAttr(handle, 'data-tabindex');
      removeAttr(handle, 'data-tabindex');

      off(handle, 'activate.swap', this.listeners.open);
      off(handle, 'deactivate.swap', this.listeners.close);
      off(handle, 'enable.swap', this.listeners.enable);
      off(handle, 'disable.swap', this.listeners.disable);

      handle.Swap.destroy();
    });

    this.el.Navigation = null;

    delete this.el.Navigation;
  }

  //

  enable() {
    iterate(this.handleEl, (handle) => {
      handle.Swap.enable();
    });
  }

  disable() {
    iterate(this.handleEl, (handle) => {
      handle.Swap.disable();
    });
  }

  //

  open() {
    this.handleEl[0].Swap.activate();
  }

  close() {
    this.handleEl[0].Swap.deactivate();
  }

  //

  #onEnable() {
    return (e) => {
      setAttr(this.el, 'aria-label', this.label);

      if (!this.isToggle) {
        setAttr(this.el, {
          'role': 'dialog',
          'aria-modal': 'true'
        });
      }

      setAttr(this.handleEl, 'aria-controls', this.elId);

      if (this.isToggle) {
        setAttr(this.handleEl, 'aria-expanded', 'false');
      }

      addClass(this.contentEl, 'fs-navigation-enabled');

      setTimeout(() => {
        addClass(this.el, 'fs-navigation-animated');
        addClass(this.contentEl, 'fs-navigation-animated');
      }, 0);
    };
  }

  #onDisable() {
    return (e) => {
      this.listeners.close.call();

      setAttr(this.el, {
        'role': this.originalRole || false,
        'aria-label': this.originaLabel || false,
        'aria-modal': this.originaModal || false,
        'id': this.originalId || false
      });

      removeAttr(this.handleEl, [
        'aria-controls',
        'aria-expanded'
      ]);

      removeClass(this.el, 'fs-navigation-animated');
      removeClass(this.contentEl, 'fs-navigation-enabled', 'fs-navigation-animated', this.contentOpenClasses);
    };
  }

  #onOpen() {
    return (e) => {
      setAttr(this.el, 'aria-hidden', 'false');

      addClass(this.contentEl, this.contentOpenClasses);

      if (!this.isToggle) {
        // setAttr(this.content, 'aria-hidden', 'true');
        //setAttr(this.#siblingsClean(this.content), 'aria-hidden', 'true');
        this.#hideSiblings();
      } else {
        setAttr(this.handleEl, 'aria-expanded', 'true');
      }

      on(document.body, 'click', this.listeners.body);
      on(document.body, 'keydown', this.listeners.keydown);

      if (!this.isOpen) {
        trigger(this.el, 'open.navigation');

        this.isOpen = true;

        setTimeout(() => {
          (select('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', this.el)[0] || this.el).focus();
        }, 50);
      }
    };
  }

  #onClose() {
    return (e) => {
      setAttr(this.el, 'aria-hidden', 'true');

      removeClass(this.contentEl, this.contentOpenClasses);

      if (!this.isToggle) {
        // removeAttr(siblings(this.el), 'aria-hidden');
        this.#showSiblings();
      }

      setAttr(this.handleEl, 'aria-expanded', 'false');

      off(document.body, 'click', this.listeners.body);
      off(document.body, 'keydown', this.listeners.keydown);

      if (this.isOpen) {
        trigger(this.el, 'close.navigation');

        this.handleEl[0].focus();

        this.isOpen = false;
      }
    };
  }

  //

  #getSiblings() {
    return siblings(this.el).filter((el) => {
      return isU(el.Navigation);
    });
  }

  #showSiblings() {
    iterate(this.#getSiblings(), (el) => {
      setAttr(el, 'aria-hidden', el.dataset.navigationAriaHidden || false);
      delete el.dataset.navigationAriaHidden;
    });
  }

  #hideSiblings() {
    iterate(this.#getSiblings(), (el) => {
      el.dataset.navigationAriaHidden = getAttr(el, 'aria-hidden') || '';
      setAttr(el, 'aria-hidden', true);
    });
  }

  //

  #onBodyClick() {
    return (e) => {
      if (e.target !== this.el && !this.el.contains(e.target)) {
        this.close();
      }
    };
  }

  #oKeyDown() {
    return (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    }
  }

};

// Export

export default Navigation;