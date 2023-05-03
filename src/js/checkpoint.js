import {
  extend,
  select,
  iterate,
  trigger,
  addClass,
  removeClass
} from './utils.js';

// Class

class CheckPoint {

  static #_guid = 1;

  static #_defaults = {
    intersect: 'bottom',
    offset: '0px',
    reverse: false
  };

  static defaults(options) {
    this.#_defaults = extend(true, this.#_defaults, options);
  }

  static construct(selector, options) {
    let targets = select(selector);

    iterate(targets, (el) => {
      if (!el.CheckPoint) {
        new CheckPoint(el, options);
      }
    });

    return targets;
  }

  //

  constructor(el, options) {
    if (el.CheckPoint) {
      console.warn('Checkpoint: Instance already exists', el);
      return;
    }

    // Parse JSON Options

    let optionsData = {};
    let dataset = el.dataset;

    try {
      optionsData = JSON.parse(dataset.checkpointOptions || '{}');
    } catch (e) {
      console.warn('Checkpoint: Error parsing options JSON', el);
    }

    // Internal Data

    Object.assign(this, extend(true, this.constructor.#_defaults, options || {}, optionsData));

    this.el = el;
    this.guid = this.constructor.#_guid++;
    this.guidClass = `fs-checkpoint-element-${this.guid}`;

    this.enabled = false;
    this.active = false;
    this.parent = dataset.checkpointParent || null;
    this.parentEl = this.parent ? select(this.parent)[0] : null;
    this.container = dataset.checkpointContainer || null;

    addClass(this.el, this.guidClass);

    this.target = this.container || `.${this.guidClass}`;
    this.targetEl = select(this.target);

    this.intersect = dataset.checkpointIntersect || this.intersect;
    this.offset = dataset.checkpointOffset || this.offset;

    this.margin = `0px 0px -${this.offset} 0px`;
    this.edge = parseInt(this.offset, 10);
    this.percent = this.offset.includes('%') ? (this.edge / 100) : null;

    this.observer = new IntersectionObserver((entries, observer) => {
      iterate(entries, (entry) => {
        this.#observe(entry);
      });
    }, {
      root: this.parentEl || null,
      threshold: 0,
      rootMargin: this.margin
    });

    this.enable();

    el.CheckPoint = this;
  }

  destroy() {
    this.disable();

    removeClass(this.el, this.guidClass);

    this.observer = null;

    this.el.CheckPoint = null;

    delete this.el.CheckPoint;
  }

  //

  #observe(entry) {
    let height = this.parentEl ? this.parentEl.innerHeight : window.innerHeight;
    let edge = height - (this.percent ? (height * this.percent) : this.edge);

    if (entry.isIntersecting || entry.boundingClientRect.top < edge) {
      this.activate();
    } else {
      this.deactivate();
    }
  }

  //

  enable() {
    if (this.enabled) {
      return;
    }

    this.enabled = true;

    addClass(this.el, 'fs-checkpoint');

    iterate(this.targetEl, (el) => {
      this.observer.observe(el);
    });
  }

  disable() {
    if (!this.enabled) {
      return;
    }

    this.deactivate();

    this.enabled = false;

    removeClass(this.el, 'fs-checkpoint', 'fs-checkpoint-active');

    iterate(this.targetEl, (el) => {
      this.observer.unobserve(el);
    });
  }

  //

  activate() {
    if (!this.enabled || this.active) {
      return;
    }

    this.active = true;

    addClass(this.el, 'fs-checkpoint-active');
    trigger(this.el, 'activate.checkpoint', {});
  }

  deactivate() {
    if (!this.enabled || !this.active) {
      return;
    }

    this.active = false;

    removeClass(this.el, 'fs-checkpoint-active');
    trigger(this.el, 'deactivate.checkpoint', {});
  }

};

// Export

export default CheckPoint;