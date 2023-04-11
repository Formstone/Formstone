import MediaQuery from './mediaquery.js';
import {
  extend,
  select,
  on,
  off,
  trigger,
  addClass,
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

    try {
      optionsData = JSON.parse(el.dataset.swapOptions || '{}');
    } catch (e) {
      console.warn('Swap: Error parsing options JSON', el);
    }

    // Internal Data

    Object.assign(this, extend(true, this.constructor.#_defaults, options || {}, optionsData));

    this.el = el;
    this.guid = this.constructor.#_guid++;
    this.guidEl = `fs-swap-element-${this.guid}`;
    this.guidTarget = `fs-swap-target-${this.guid}`;

    this.enabled = false;
    // this.active = el.dataset.swapActive || false;
    this.group = el.dataset.swapGroup ? `[data-swap-group="${el.dataset.swapGroup}"]` : false;
    this.target = el.dataset.swapTarget || null;
    this.targetEl = select(this.target);
    // this = extend(true, this.constructor.#_defaults, options || {}, optionsData);

    let maxWidth = (this.maxWidth === Infinity ? '100000px' : this.maxWidth);

    this.mq = `(min-width: ${this.minWidth}) and (max-width: ${maxWidth})`;

    addClass(this.el, this.guidEl);
    addClass(this.targetEl, this.guidTarget);

    this.toggleEl = select(`.${this.guidEl}, .${this.guidTarget}`);

    MediaQuery.bind(this.guidEl, this.mq, {
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

    removeClass(this.toggleEl, this.guidEl, this.guidTarget);

    this.el.Swap = null;

    delete this.el.Swap;
  }

  //

  enable() {
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
  }

  disable() {
    if (!this.enabled) {
      return;
    }

    this.enabled = false;

    removeClass(this.toggleEl, this.classes.enabled, this.classes.active);

    off(this.el, 'click', this.#onClick);

    trigger(this.toggleEl, 'disable.swap');
  }

  //

  activate() {
    if (!this.enabled || this.active) {
      return;
    }

    this.active = true;

    addClass(this.toggleEl, this.classes.active);

    trigger(this.toggleEl, 'activate.swap');

    if (this.group) {
      select(this.group).forEach((el) => {
        if (el.Swap && !el.classList.contains(this.guidEl)) {
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

// jQuery Wrapper

if (typeof jQuery !== 'undefined') {

  (($) => {
    $.fn['swap'] = function(options, ...args) {
      return $(this).each((index, el) => {
        if (!options || type(options) === 'object') {
          new Swap(el, options);
        } else if (el.Swap && type(el.Swap[options]) === 'function') {
          el.Swap[options](...args);
        }
      });
    };
  })(jQuery);

}

// Export

export default Swap;