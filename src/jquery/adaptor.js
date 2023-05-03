import {
  isFn,
  isObj
} from '../js/utils.js';

export function widget(Plugin, Namespace) {
  if (typeof jQuery !== 'undefined') {
    jQuery.fn[Namespace.toLowerCase()] = function(options, ...args) {
      return $(this).each((index, el) => {
        if (!options || isObj(options)) {
          new Plugin(el, options);
        } else if (el[Namespace] && typeof el[Namespace][options] === 'function') {
          el[Namespace][options](...args);
        }
      });
    };
  }
}

export function utility(Plugin, Namespace) {
  if (typeof jQuery !== 'undefined') {
    jQuery[Namespace.toLowerCase()] = function(method, ...args) {
      if (isFn(Plugin[method])) {
        return Plugin[method](...args);
      }
    };
  }
}