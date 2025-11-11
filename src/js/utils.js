let _readyCallbacks = [];

export function ready(cb) {
  if (document.readyState === 'loading') {
    _readyCallbacks.push(cb);
    document.addEventListener('DOMContentLoaded', isReady, false);
  } else {
    cb.call();
  }
}

export function isReady() {
  iterate(_readyCallbacks, (cb) => {
    cb.call();
  });
}

//

export function type(item) {
  return (typeof item);
}

export function proto(item) {
  return Object.prototype.toString.call(item);
}

export function falsey(v) {
  return (isU(v) || v === false || v === null);
}

export function isFn(v) {
  return (type(v) === 'function');
}

export function isObj(v) {
  return (type(v) === 'object');
}

export function isU(v) {
  return (type(v) === 'undefined');
}

export function extend(...args) {
  let extended = {};
  let deep = false;
  let i = 0;

  if (type(args[0]) === 'boolean') {
    deep = args[0];
    i++;
  }

  let merge = (obj) => {
    for (let prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        if (deep && proto(obj[prop]) === '[object Object]') {
          extended[prop] = extend(extended[prop], obj[prop]);
        } else {
          extended[prop] = obj[prop];
        }
      }
    }
  };

  for (; i < args.length; i++) {
    merge(args[i]);
  }

  return extended;
}

//

export function element(tag) {
  return document.createElement(tag);
}

export function select(selector, context) {
  return (context || document).querySelectorAll(selector);
}

export function siblings(node) {
  return [...node.parentElement.children].filter((child) => {
    return child != node;
  });
}

export function iterable(target) {
  if (!['[object NodeList]', '[object Array]'].includes(proto(target))) {
    target = [target];
  }

  return [...target].filter((item) => {
    // return item instanceof Element;
    return !falsey(item);
  });
}

export function iterate(target, cb) {
  iterable(target).forEach(cb);
}

//

export function on(target, event, cb, options) {
  iterate(target, (el) => {
    el.addEventListener(event, cb, options || null);
  });
}

export function once(target, event, cb, options) {
  on(target, event, cb, extend({
    once: true,
    capture: (options === true)
  }, (isObj(options)) ? options : {}));
}

export function off(target, event, cb) {
  iterate(target, (el) => {
    el.removeEventListener(event, cb);
  });
}

export function trigger(target, event, detail) {
  iterate(target, (el) => {
    el.dispatchEvent(new CustomEvent(event, {
      detail: detail || null
    }));
  });
}

//

export function normalizeClasses(...classes) {
  if (proto(classes[0]) === '[object Array]') {
    classes = classes[0];
  }

  classes = classes.join(' ').split(' ');

  classes = classes.filter((c) => {
    return c !== '';
  });

  return classes;
}

export function hasClass(target, c) {
  return target.classList.contains(c);
}

export function addClass(target, ...classes) {
  classes = normalizeClasses(...classes);

  iterate(target, (el) => {
    el.classList.add(...classes);
  });
}

export function removeClass(target, ...classes) {
  classes = normalizeClasses(...classes);

  iterate(target, (el) => {
    el.classList.remove(...classes);
  });
}

//

export function hasAttr(target, attr) {
  return target.hasAttribute(attr);
}

export function getAttr(target, attr) {
  return target.getAttribute(attr);
}

export function normalizeAttrs(attr, value) {
  if (proto(attr) !== '[object Object]') {
    let newAttr = {};
    newAttr[`${attr}`] = value;
    attr = newAttr;
  }

  return Object.entries(attr);
}

export function setAttr(target, attr, value) {
  attr = normalizeAttrs(attr, value);

  iterate(target, (el) => {
    for (let [a, v] of attr) {
      if (falsey(v)) {
        removeAttr(target, a);
      } else {
        el.setAttribute(a, v);
      }
    }
  });
}

export function removeAttr(target, attr) {
  if (proto(attr) !== '[object Array]') {
    attr = [attr];
  }

  iterate(target, (el) => {
    iterate(attr, (a) => {
      el.removeAttribute(a);
    });
  });
}

//

export function updateAttr(els, attr, value, handle) {
  let key = camelCase([handle, attr].join('-'));

  iterate(els, (el) => {
    el.dataset[key] = getAttr(el, attr) || '';
    setAttr(el, attr, value);
  });
}

export function restoreAttr(els, attr, handle) {
  let key = camelCase([handle, attr].join('-'));

  iterate(els, (el) => {
    setAttr(el, attr, el.dataset[key] || false);
    delete el.dataset[key];
  });
}

//

export function camelCase(string) {
  return string.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, char) => {
    return char.toUpperCase();
  });
}