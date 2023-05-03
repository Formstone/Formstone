import MediaQuery from './mediaquery.js';
import Swap from './swap.js';
import {
  extend,
  element,
  select,
  iterate,
  on,
  off,
  addClass,
  removeClass,
  getAttr,
  setAttr,
  removeAttr
} from './utils.js';

// Class

class Tabs {

  static #_guid = 1;

  static #_defaults = {
    maxWidth: Infinity,
    mobileMaxWidth: '980px'
  };

  //

  static defaults(options) {
    this.#_defaults = extend(true, this.#_defaults, options);
  }

  static construct(selector, options) {
    let targets = select(selector);

    targets.forEach((el) => {
      if (!el.Tabs) {
        new Tabs(el, options);
      }
    });

    return targets;
  }

  //

  constructor(el, options) {
    if (el.Tabs) {
      console.warn('Tabs: Instance already exists', el);
      return;
    }

    // Parse JSON Options

    let optionsData = {};
    let dataset = el.dataset;

    try {
      optionsData = JSON.parse(dataset.tabsOptions || '{}');
    } catch (e) {
      console.warn('Tabs: Error parsing options JSON', el);
    }

    // Internal Data

    Object.assign(this, extend(true, this.constructor.#_defaults, options || {}, optionsData));

    this.el = el;
    this.guid = this.constructor.#_guid++;
    this.guidClass = `fs-tabs-element-${this.guid}`;
    this.guidContent = `fs-tabs-content-${this.guid}`;

    let mobileMaxWidth = (this.mobileMaxWidth === Infinity ? '100000px' : this.mobileMaxWidth);

    this.mq = `(max-width: ${mobileMaxWidth})`;

    this.target = el.hash;
    this.container = dataset.tabsContainer;
    this.group = dataset.tabsGroup;

    this.mobileEl = element('button');
    this.contentEl = select(this.target)[0];
    this.containerEl = select(this.container)[0];

    this.handleEl = [el, this.mobileEl];

    //

    this.mobileEl.innerHTML = el.innerHTML;

    setAttr(this.mobileEl, {
      'type': 'button',
      'aria-hidden': 'true'
    });

    addClass(el, 'fs-tabs-tab', this.guidClass);
    addClass(this.mobileEl, 'fs-tabs-tab_mobile', this.guidClass);
    addClass(this.contentEl, 'fs-tabs-content', this.guidContent);
    addClass(this.containerEl, 'fs-tabs-container');

    this.contentEl.parentNode.insertBefore(this.mobileEl, this.contentEl);

    // Aria

    // SHOULD BE IN ENABLE / DISABLE?
    this.originalId = getAttr(el, 'id');

    if (this.originalId) {
      this.elId = this.originalId;
    } else {
      this.elId = this.guidClass;
      setAttr(el, 'id', this.elId);
    }

    this.originalContentId = getAttr(el, 'id');

    if (this.originalContentId) {
      this.contentId = this.originalContentId;
    } else {
      this.contentId = this.guidContent;
      setAttr(this.contentEl, 'id', this.contentId);
    }

    // Check for hash

    let hash = window.location.hash;

    this.hashActive = false;
    this.hashGroup = false;

    if (hash.length) {
      this.hashActive = (el.hash == hash);
      this.hashGroup = this.group && (select(`[data-tabs-group="${this.group}"][href$="${hash}]`).length > 0);
    }

    // SHOULD BE IN ENABLE / DISABLE?
    if (this.hashActive) {
      setAttr(this.handleEl, 'data-swap-active', 'true');
    } else if (this.hashGroup) {
      removeAttr(this.handleEl, 'data-swap-active');
    } else if (this.el.dataset.tabsActive === 'true') {
      setAttr(this.handleEl, 'data-swap-active', 'true');
    }

    //

    this.listeners = {
      // activate: this.#onActivate(this),
      // deactivate: this.#onDeactivate(this),
      enable: this.#onEnable(this),
      disable: this.#onDisable(this)
    };

    this.handleEl.forEach((handle) => {
      setAttr(handle, {
        'data-swap-target': `.${this.guidContent}`,
        'data-swap-linked': `${this.guidClass}`,
        'data-swap-group': `${this.group}`
      });

      // on(handle, 'activate.swap', this.listeners.activate);
      // on(handle, 'deactivate.swap', this.listeners.deactivate);
      on(handle, 'enable.swap', this.listeners.enable);
      on(handle, 'disable.swap', this.listeners.disable);
    });

    MediaQuery.bind(this.guidClass, this.mq, {
      enter: () => {
        console.log('enter');
        this.#mobileEnable();
      },
      leave: () => {
        console.log('leave');
        this.#mobileDisable();
      }
    });

    Swap.construct(`.${this.guidClass}`, {
      classes: {
        enabled: 'fs-tabs-enabled',
        active: 'fs-tabs-active',
      },
      collapse: true,
      maxWidth: this.maxWidth
    });

    el.Tabs = this;
  }

  //

  destroy() {
    this.listeners.disable.call();

    removeClass(this.el, 'fs-tabs-tab', this.guidClass);
    removeClass(this.contentEl, 'fs-tabs-content', this.guidContent);
    removeClass(this.containerEl, 'fs-tabs-container');

    removeAttr(this.handle, [
      'data-swap-target',
      'data-swap-linked',
      'data-swap-group'
    ]);

    this.handleEl.forEach((handle) => {
      off(handle, 'enable.swap', this.listeners.enable);
      off(handle, 'disable.swap', this.listeners.disable);

      handle.Swap.destroy();
    });

    this.mobileEl.remove();

    this.el.Tabs = null;

    delete this.el.Tabs;
  }

  //

  enable() {
    this.el.Swap.enable();
  }

  disable() {
    this.el.Swap.disable();
  }

  //

  activate() {
    this.el.Swap.activate();
  }

  deactivate() {
    this.el.Swap.deactivate();
  }

  //

  #onEnable() {
    return (e) => {
      setAttr(this.el, {
        'role': 'tab',
        'aria-controls': this.contentId
      });

      setAttr(this.contentEl, {
        'role': 'tabpanel',
        'aria-labeledby': this.elId
      });

      setAttr(this.containerEl, {
        'role': 'tablist'
      });

      addClass(this.contentEl, 'fs-tabs-enabled');
      addClass(this.contentEl, 'fs-tabs-enabled');

      // setAttr(this.el, 'aria-label', this.label);

      // if (!this.isToggle) {
      //   setAttr(this.el, {
      //     'role': 'dialog',
      //     'aria-modal': 'true'
      //   });
      // }

      // setAttr(this.handle, 'aria-controls', this.elId);

      // if (this.isToggle) {
      //   setAttr(this.handle, 'aria-expanded', 'false');
      // }

      // addClass(this.content, 'fs-navigation-enabled');

      // setTimeout(() => {
      //   addClass(this.el, 'fs-navigation-animated');
      //   addClass(this.content, 'fs-navigation-animated');
      // }, 0);
    };
  }

  #onDisable() {
    return (e) => {
      removeAttr(this.el, 'role', 'aria-controls');

      removeAttr(this.contentEl, 'role', 'aria-labeledby');

      removeAttr(this.containerEl, 'role');

      removeClass(this.contentEl, 'fs-tabs-enabled');

      // SHOULD BE IN ENABLE / DISABLE
      // setAttr(this.el, {
      //   'role': this.originalRole || false,
      //   'aria-label': this.originaLabel || false,
      //   'aria-modal': this.originaModal || false,
      //   'id': this.originalId || false
      // });
    };
  }

  #onActivate() {
    //   return (e) => {
    //   };
  }

  #onDeactivate() {
    //   return (e) => {
    //   };
  }

  //

  #mobileEnable() {
    iterate(this.handleEl, (handle) => {
      addClass(handle, 'fs-tabs-mobile');
    });
  }

  #mobileDisable() {
    iterate(this.handleEl, (handle) => {
      removeClass(handle, 'fs-tabs-mobile');
    });
  }

};

// Export

export default Tabs;