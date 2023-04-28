import jQuery from 'jquery';
import Lightbox from '../js/lightbox.js';

// jQuery Wrapper

if (typeof jQuery !== 'undefined') {

  (($) => {
    $.fn['lightbox'] = function(options, ...args) {
      return $(this).each((index, el) => {
        if (!options || typeof options === 'object') {
          el.Lightbox = new Lightbox(el, options);
        } else if (el.Lightbox) {
          if (typeof el.Lightbox[options] === 'function') {
            el.Lightbox[options](...args);
          }
        }
      });
    };
  })(jQuery);

}

// Export

export default Lightbox;