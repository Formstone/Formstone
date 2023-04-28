import {
  on
} from './utils.js';

// Class

class MediaQuery {

  static #_bindings = {};

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

    Object.entries(data).forEach((entry) => {
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

  static unbind(key, media) {
    if (!key) {
      return;
    }

    if (media) {
      // Unbind specific MQ
      var mqKey = this.#createKey(media);

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
      Object.entries(this.#_bindings).forEach((entry) => {
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

  static #onBindingChange(e) {
    let mqkey = MediaQuery.#createKey(e.media);
    let binding = this.#_bindings[mqkey];
    let action = e.matches ? 'enter' : 'leave';

    if (binding && (binding.active || (!binding.active && e.matches))) {
      Object.entries(binding[action]).forEach((entry) => {
        // let key = entry[0];
        let cb = entry[1];

        cb.apply(binding.mq);
      });

      binding.active = true;
    }
  }

  static #createKey(text) {
    return text.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '').replace(/^\s+|\s+$/g, '');
  }

};

// Export

export default MediaQuery;