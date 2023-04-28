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
  _readyCallbacks.forEach((cb) => {
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
  return (type(v) === 'undefined' || v === false || v === null);
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

//

export function on(target, event, cb, options) {
  iterable(target).forEach((el) => {
    el.addEventListener(event, cb, options || null);
  })
}

export function once(target, event, cb, options) {
  on(target, event, cb, extend({
    once: true,
    capture: (options === true)
  }, (type(options) === 'object') ? options : {}));
}

export function off(target, event, cb) {
  iterable(target).forEach((el) => {
    el.removeEventListener(event, cb);
  })
}

export function trigger(target, event, detail) {
  iterable(target).forEach((el) => {
    el.dispatchEvent(new CustomEvent(event, {
      detail: detail || null
    }));
  })
}

//

export function normalizeClasses(...classes) {
  if (proto(classes[0]) === '[object Array]') {
    classes = classes[0];
  }

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

  iterable(target).forEach((el) => {
    el.classList.add(...classes);
  });
}

export function removeClass(target, ...classes) {
  classes = normalizeClasses(...classes);

  iterable(target).forEach((el) => {
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

  iterable(target).forEach((el) => {
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

  iterable(target).forEach((el) => {
    attr.forEach((a) => {
      el.removeAttribute(a);
    });
  });
}

//

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