import jQuery from 'jquery';
import Cookie from '../js/cookie.js';

// jQuery Wrapper

if (typeof jQuery !== 'undefined') {

  (($) => {
    $['cookie'] = (method, ...args) => {
      if (typeof Cookie[method] === 'function') {
        return Cookie[method](...args);
      }
    };
  })(jQuery);

}

// Export

export default Cookie;