import jQuery from 'jquery';
import Navigation from '../js/navigation.js';

// jQuery Wrapper

if (typeof jQuery !== 'undefined') {

  (($) => {
    $.fn['navigation'] = function(options, ...args) {
      return $(this).each((index, el) => {
        if (!options || typeof options === 'object') {
          new Navigation(el, options);
        } else if (el.Navigation && typeof el.Navigation[options] === 'function') {
          el.Navigation[options](...args);
        }
      });
    };
  })(jQuery);

}

// Export

export default Navigation;