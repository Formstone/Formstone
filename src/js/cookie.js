import {
  extend,
  type
} from './utils.js';

// Class

class Cookie {

  static #_defaults = {
    domain: null,
    expires: 604800000, // 7 days
    path: null,
    samesite: 'Lax',
    secure: null
  };

  static defaults(options) {
    this.#_defaults = extend(true, this.#_defaults, options);
  }

  //

  static set(key, value, options) {
    let expiration = false;
    let date = new Date();

    options = extend(true, this.#_defaults, options || {});

    // Check Expiration Date

    if (type(options.expires) === 'number') {
      date.setTime(date.getTime() + options.expires);
      expiration = date.toGMTString();
    }

    let domain = (options.domain) ? '; domain=' + options.domain : '';
    let expires = (expiration) ? '; expires=' + expiration : '';
    let maxAge = (expiration) ? '; max-age=' + (options.expires / 1000) : ''; // to seconds
    let path = (options.path) ? '; path=' + options.path : '';
    let samesite = (options.samesite) ? '; samesite=' + options.samesite : '';
    let secure = (options.secure) ? '; secure' : '';

    // Set Cookie

    document.cookie = `${key}=${value}${expires}${maxAge}${domain}${path}${samesite}${secure}`;
  }

  static get(key) {
    let keyString = `${key}=`;
    let cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();

      if (cookie.indexOf(keyString) === 0) {
        return cookie.substring(keyString.length, cookie.length);
      }
    }

    return null;
  }

  static delete(key, options) {
    this.set(key, '', extend({}, options, {
      expires: -604800000 // -7 days
    }));
  }
};

// Export

export default Cookie;