/**
 * @fileoverview MediaQuery - Responsive media query events
 */

import {
  iterate,
  //
  on,
} from './utils.js';

/**
 * MediaQuery class for managing responsive media query events
 * @class
 */
class MediaQuery {

  static #_bindings = {};

  /**
   * Binds callbacks to a media query
   * @param {string} key - Unique identifier for this binding
   * @param {string} media - Media query string (e.g., '(min-width: 768px)')
   * @param {Object} data - Object containing enter and/or leave callback functions
   * @example
   * MediaQuery.bind('mobile', '(max-width: 740px)', {
   *   enter: () => { console.log('Mobile view'); },
   *   leave: () => { console.log('Desktop view'); }
   * });
   */
  static bind(key, media, data) {
    key = this.#createKey(key);

    let mq = window.matchMedia(media);
    let mqKey = this.#createKey(mq.media);

    if (!this.#_bindings[mqKey]) {
      this.#_bindings[mqKey] = {
        mq: mq,
        active: true,
        enter: {},
        leave: {}
      };

      on(mq, 'change', (e) => {
        this.#onBindingChange(e);
      });
    }

    iterate(Object.entries(data), (entry) => {
      let action = entry[0];
      let cb = entry[1];

      if (this.#_bindings[mqKey][action]) {
        if (this.#_bindings[mqKey][action][key]) {
          console.warn(`MediaQuery: '${key}' ${media} already exists and can not be bound`);
          // TODO short circuit here?
        } else {
          this.#_bindings[mqKey][action][key] = cb;
        }
      }
    });

    // Check Match

    let binding = this.#_bindings[mqKey];

    if (mq.matches && binding.enter[key]) {
      binding.enter[key].apply(mq);
      binding.active = true;
    } else if (!mq.matches && binding.leave[key]) {
      binding.leave[key].apply(mq);
      binding.active = false;
    }
  }

  /**
   * Unbinds callbacks from a media query
   * @param {string} key - Unique identifier for the binding to remove
   * @param {string} [media] - Optional media query string to unbind from specific query
   * @example
   * MediaQuery.unbind('mobile');
   * MediaQuery.unbind('mobile', '(max-width: 740px)');
   */
  static unbind(key, media) {
    if (!key) {
      return;
    }

    key = this.#createKey(key);

    if (media) {
      // Unbind specific MQ
      let mqKey = this.#createKey(media);

      if (this.#_bindings[mqKey]) {
        if (this.#_bindings[mqKey].enter[key]) {
          delete this.#_bindings[mqKey].enter[key];
        }

        if (this.#_bindings[mqKey].leave[key]) {
          delete this.#_bindings[mqKey].leave[key];
        }
      }
    } else {
      // Unbind all
      iterate(Object.entries(this.#_bindings), (entry) => {
        // let mqKey = entry[0];
        let binding = entry[1];

        if (binding.enter[key]) {
          delete binding.enter[key];
        }

        if (binding.leave[key]) {
          delete binding.leave[key];
        }
      });
    }
  }

  /**
   * Handles media query match state changes
   * @private
   * @param {MediaQueryListEvent} e - Media query change event
   * @returns {void}
   */
  static #onBindingChange(e) {
    let mqkey = MediaQuery.#createKey(e.media);
    let binding = this.#_bindings[mqkey];
    let action = e.matches ? 'enter' : 'leave';

    if (binding && (binding.active || (!binding.active && e.matches))) {
      iterate(Object.entries(binding[action]), (entry) => {
        // let key = entry[0];
        let cb = entry[1];

        cb.apply(binding.mq);
      });

      binding.active = true;
    }
  }

  /**
   * Creates a normalized key from media query text
   * @private
   * @param {string} text - Media query text
   * @returns {string} Normalized key string
   */
  static #createKey(text) {
    return text.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '').replace(/^\s+|\s+$/g, '');
  }

};

// Export

export default MediaQuery;