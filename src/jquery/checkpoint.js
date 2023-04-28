import jQuery from 'jquery';
import CheckPoint from '../js/checkpoint.js';

// jQuery Wrapper

if (typeof jQuery !== 'undefined') {

  (($) => {
    $.fn['checkpoint'] = function(options, ...args) {
      return $(this).each((index, el) => {
        if (!options || typeof options === 'object') {
          new CheckPoint(el, options);
        } else if (el.CheckPoint && typeof el.CheckPoint[options] === 'function') {
          el.CheckPoint[options](...args);
        }
      });
    };
  })(jQuery);

}

// Export

export default CheckPoint;