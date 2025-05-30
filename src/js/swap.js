import MediaQuery from './mediaquery.js';
import {
  extend,
  //
  select,
  iterate,
  //
  on,
  off,
  trigger,
  //
  addClass,
  hasClass,
  removeClass,
  //
  hasAttr,
} from './utils.js';

// Class

// TODO look into events

class Swap {

  static #_guid = 1;

  static #_defaults = {
    classes: {
      enabled: 'fs-swap-enabled',
      active: 'fs-swap-active',
      inactive: 'fs-swap-inactive',
    },
    collapse: true,
    maxWidth: Infinity,
    minWidth: '0px',
  };

  static defaults(options) {
    this.#_defaults = extend(true, this.#_defaults, options);
  }

  static construct(selector, options) {
    let targets = select(selector);

    iterate(targets, (el) => {
      if (!el.Swap) {
        new Swap(el, options);
      }
    });

    return targets;
  }

  //

  constructor(el, options) {
    if (el.Swap) {
      console.warn('Swap: Instance already exists', el);
      return;
    }

    // Parse JSON Options

    let optionsData = {};
    let dataset = el.dataset;

    try {
      optionsData = JSON.parse(dataset.swapOptions || '{}');
    } catch (e) {
      console.warn('Swap: Error parsing options JSON', el);
    }

    // Internal Data

    Object.assign(this, extend(true, this.constructor.#_defaults, options || {}, optionsData));

    this.el = el;
    this.guid = this.constructor.#_guid++;
    this.guidClass = `fs-swap-element-${this.guid}`;
    this.guidTarget = `fs-swap-target-${this.guid}`;

    this.enabled = false;
    // this.active = el.dataset.swapActive || false;
    this.group = dataset.swapGroup ? `[data-swap-group="${dataset.swapGroup}"]` : false;
    this.linked = dataset.swapLinked ? `[data-swap-linked="${dataset.swapLinked}"]` : false;
    this.target = dataset.swapTarget || null;
    this.targetEl = select(this.target);
    // this = extend(true, this.constructor.#_defaults, options || {}, optionsData);

    let maxWidth = (this.maxWidth === Infinity ? '100000px' : this.maxWidth);

    this.mq = `(min-width: ${this.minWidth}) and (max-width: ${maxWidth})`;

    addClass(this.el, this.guidClass);
    addClass(this.targetEl, this.guidTarget);

    this.toggleEl = select(`.${this.guidClass}, .${this.guidTarget}`);

    MediaQuery.bind(this.guidClass, this.mq, {
      enter: () => {
        this.enable();
      },
      leave: () => {
        this.disable();
      }
    });

    el.Swap = this;
  }

  destroy() {
    this.disable();

    removeClass(this.toggleEl, this.guidClass, this.guidTarget);

    this.el.Swap = null;

    delete this.el.Swap;
  }

  //

  enable(internal) {
    if (this.enabled) {
      return;
    }

    this.enabled = true;

    addClass(this.toggleEl, this.classes.enabled, this.classes.inactive);

    on(this.el, 'click', this.#onClick);

    if (!this.collapse && this.group) {
      let groupItems = select(this.group);
      let activeItems = Array.from(groupItems).filter((el) => {
        return hasAttr(el, 'data-swap-active');
      });

      if (!activeItems.length) {
        groupItems[0].dataset.swapActive = 'true';
      }
    }

    trigger(this.toggleEl, 'swap:enable');

    if (this.el.dataset.swapActive) {
      this.activate();
    }

    if (!internal && this.linked) {
      iterate(select(this.linked), (el) => {
        if (el.Swap && !hasClass(el, this.guidClass)) {
          el.Swap.enable(true);
        }
      });
    }
  }

  disable(internal) {
    if (!this.enabled) {
      return;
    }

    this.enabled = false;
    this.active = false;

    removeClass(this.toggleEl, this.classes.enabled, this.classes.active, this.classes.inactive);

    off(this.el, 'click', this.#onClick);

    trigger(this.toggleEl, 'swap:disable');

    if (!internal && this.linked) {
      iterate(select(this.linked), (el) => {
        if (el.Swap && !hasClass(el, this.guidClass)) {
          el.Swap.disable(true);
        }
      });
    }
  }

  //

  activate(internal) {
    if (!this.enabled || this.active) {
      return;
    }

    this.active = true;

    removeClass(this.toggleEl, this.classes.inactive);
    addClass(this.toggleEl, this.classes.active);

    if (!internal) {
      trigger(this.toggleEl, 'swap:activate');

      if (this.linked) {
        iterate(select(this.linked), (el) => {
          if (el.Swap && !hasClass(el, this.guidClass)) {
            el.Swap.activate(true);
          }
        });
      }
    }

    if (this.group) {
      iterate(select(this.linked ? `${this.group}:not(${this.linked})` : this.group), (el) => {
        if (el.Swap && !hasClass(el, this.guidClass)) {
          el.Swap.deactivate(true);
        }
      });
    }
  }

  deactivate(internal) {
    if (!this.enabled || !this.active) {
      return;
    }

    this.active = false;

    removeClass(this.toggleEl, this.classes.active);
    addClass(this.toggleEl, this.classes.inactive);

    if (!internal) {
      trigger(this.toggleEl, 'swap:deactivate');

      if (this.linked) {
        iterate(select(this.linked), (el) => {
          if (el.Swap && !hasClass(el, this.guidClass)) {
            el.Swap.deactivate(true);
          }
        });
      }
    }
  }

  //

  #onClick(e) {
    e.preventDefault();
    e.stopPropagation();

    let instance = this.Swap;

    if (instance.active && instance.collapse) {
      instance.deactivate();
    } else {
      instance.activate();
    }
  }

};

// Export

export default Swap;