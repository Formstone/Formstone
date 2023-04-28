import jQuery from 'jquery';
import MediaQuery from '../js/mediaquery.js';

// jQuery Wrapper

if (typeof jQuery !== 'undefined') {

  (($) => {
    $['cookie'] = (method, ...args) => {
      if (typeof MediaQuery[method] === 'function') {
        return MediaQuery[method](...args);
      }
    };
  })(jQuery);

}

// Export

export default MediaQuery;