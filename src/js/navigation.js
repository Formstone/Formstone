import Swap from './swap.js';
import {
  isU,
  extend,
  //
  select,
  siblings,
  iterate,
  //
  on,
  off,
  trigger,
  //
  addClass,
  removeClass,
  //
  getAttr,
  setAttr,
  removeAttr,
  updateAttr,
  restoreAttr,
} from './utils.js';

// Accessibility based on https://plousia.com/blog/how-create-accessible-mobile-menu

// Class

class Navigation {

  static #_guid = 1;

  static #_defaults = {
    gravity: 'left',
    label: 'Menu',
    maxWidth: '980px',
    type: 'toggle',
    focusables: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
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

    // this.originalTabindex = getAttr(this.el, 'tabindex');
    this.originalRole = getAttr(this.el, 'role');
    this.originalHidden = getAttr(this.el, 'aria-hidden');
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
      setAttr(handle, 'data-navigation-tabindex', handle.tabIndex);
      handle.tabIndex = 0;

      on(handle, 'swap:activate', this.listeners.open);
      on(handle, 'swap:deactivate', this.listeners.close);
      on(handle, 'swap:enable', this.listeners.enable);
      on(handle, 'swap:disable', this.listeners.disable);
    });

    Swap.construct(`.${this.guidHandle}`, {
      classes: {
        enabled: 'fs-navigation-enabled',
        active: 'fs-navigation-open',
        inactive: 'fs-navigation-closed',
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

    removeAttr(this.handleEl, [
      'data-swap-target',
      'data-swap-linked',
      'data-swap-group'
    ]);

    iterate(this.handleEl, (handle) => {
      handle.tabIndex = getAttr(handle, 'data-navigation-tabindex');
      removeAttr(handle, 'data-navigation-tabindex');

      off(handle, 'swap:activate', this.listeners.open);
      off(handle, 'swap:deactivate', this.listeners.close);
      off(handle, 'swap:enable', this.listeners.enable);
      off(handle, 'swap:disable', this.listeners.disable);

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

      // this.el.tabIndex = -1;

      this.#hideFocusables();

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
        'aria-hidden': this.originalHidden || false,
        'aria-label': this.originaLabel || false,
        'aria-modal': this.originalModal || false,
        'id': this.originalId || false
      });

      // if (this.originalTabindex) {
      //   this.el.tabIndex = this.originalTabindex;
      // } else {
      //   removeAttr(this.el, 'tabindex');
      // }

      this.#showFocusables();

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

      this.#showFocusables();

      addClass(this.contentEl, this.contentOpenClasses);

      if (!this.isToggle) {
        this.#hideSiblings();
      } else {
        setAttr(this.handleEl, 'aria-expanded', 'true');
      }

      on(document.body, 'click', this.listeners.body);
      on(document.body, 'keydown', this.listeners.keydown);

      if (!this.isOpen) {
        trigger(this.el, 'navigation:open');

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

      this.#hideFocusables();

      removeClass(this.contentEl, this.contentOpenClasses);

      if (!this.isToggle) {
        // restoreAttr(this.#getSiblings(), 'aria-hidden', 'navigation');
        this.#showSiblings();
      }

      setAttr(this.handleEl, 'aria-expanded', 'false');

      off(document.body, 'click', this.listeners.body);
      off(document.body, 'keydown', this.listeners.keydown);

      if (this.isOpen) {
        trigger(this.el, 'navigation:close');

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

  #hideSiblings() {
    updateAttr(this.#getSiblings(), 'aria-hidden', 'true', 'navigation');
  }

  #showSiblings() {
    restoreAttr(this.#getSiblings(), 'aria-hidden', 'navigation');
  }

  //

  #getFocusables() {
    return select(this.focusables, this.el);
  }

  #hideFocusables() {
    updateAttr(this.#getFocusables(), 'tabindex', '-1', 'navigation');
  }

  #showFocusables() {
    restoreAttr(this.#getFocusables(), 'tabindex', 'navigation');
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