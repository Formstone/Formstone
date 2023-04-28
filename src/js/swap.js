import MediaQuery from './mediaquery.js';
import {
  extend,
  select,
  on,
  off,
  trigger,
  addClass,
  hasClass,
  removeClass,
  hasAttr,
  type
} from './utils.js';

// Class

class Swap {

  static #_guid = 1;

  static #_defaults = {
    classes: {
      enabled: 'fs-swap-enabled',
      active: 'fs-swap-active',
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

    targets.forEach((el) => {
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

    addClass(this.toggleEl, this.classes.enabled);

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

    trigger(this.toggleEl, 'enable.swap');

    if (this.el.dataset.swapActive) {
      this.activate();
    }

    if (!internal && this.linked) {
      select(this.linked).forEach((el) => {
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

    removeClass(this.toggleEl, this.classes.enabled, this.classes.active);

    off(this.el, 'click', this.#onClick);

    trigger(this.toggleEl, 'disable.swap');

    if (!internal && this.linked) {
      select(this.linked).forEach((el) => {
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

    addClass(this.toggleEl, this.classes.active);

    if (!internal) {
      trigger(this.toggleEl, 'activate.swap');

      if (this.linked) {
        select(this.linked).forEach((el) => {
          if (el.Swap && !hasClass(el, this.guidClass)) {
            el.Swap.activate(true);
          }
        });
      }
    }

    if (this.group) {
      select(this.linked ? `${this.group}:not(${this.linked})` : this.group).forEach((el) => {
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

    if (!internal) {
      trigger(this.toggleEl, 'deactivate.swap');

      if (this.linked) {
        select(this.linked).forEach((el) => {
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