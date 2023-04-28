import jQuery from 'jquery';
import Tabs from '../js/tabs.js';

// jQuery Wrapper

if (typeof jQuery !== 'undefined') {

  (($) => {
    $.fn['tabs'] = function(options, ...args) {
      return $(this).each((index, el) => {
        if (!options || typeof options === 'object') {
          new Tabs(el, options);
        } else if (el.Tabs && typeof el.Tabs[options] === 'function') {
          el.Tabs[options](...args);
        }
      });
    };
  })(jQuery);

}

// Export

export default Tabs;