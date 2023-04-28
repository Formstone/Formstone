import jQuery from 'jquery';
import Background from '../js/background.js';

// jQuery Wrapper

if (typeof jQuery !== 'undefined') {

  (($) => {
    $.fn['background'] = function(options, ...args) {
      return $(this).each((index, el) => {
        if (!options || typeof options === 'object') {
          new Background(el, options);
        } else if (el.Background && typeof el.Background[options] === 'function') {
          el.Background[options](...args);
        }
      });
    };
  })(jQuery);

}

// Export

export default Background;