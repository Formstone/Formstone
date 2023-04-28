import jQuery from 'jquery';
import Swap from '../js/swap.js';

// jQuery Wrapper

if (typeof jQuery !== 'undefined') {

  (($) => {
    $.fn['swap'] = function(options, ...args) {
      return $(this).each((index, el) => {
        if (!options || typeof options === 'object') {
          new Swap(el, options);
        } else if (el.Swap && typeof el.Swap[options] === 'function') {
          el.Swap[options](...args);
        }
      });
    };
  })(jQuery);

}

// Export

export default Swap;