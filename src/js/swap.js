/**
 * @function
 * @name Swap
 * @description A javascript plugin for toggling element states.
 * @param {Object} options - Instance options
 * @param {Boolean} [options.collapse=true] - Allow grouped instances to be deactivated
 * @param {String} [options.maxWidth=Infinity] - Width to auto-disable instance
 * @requires core
 * @requires mediaquery
 * @example Formstone('.target').swap({ ... });
 */

(function(window, Formstone) {

  'use strict';

  var Namespace = 'swap';
  var GUID = 0;

  var Options = {
    collapse: true,
    maxWidth: Infinity,
  };

  var Classes = {
    base: namespace(''),
    target: namespace('target'),
    active: namespace('active'),
    enabled: namespace('enabled'),
  };

  var Events = {
    namespace: eventspace(''),
    click: eventspace('click'),
    activate: eventspace('activate'),
    deactivate: eventspace('deactivate'),
    enable: eventspace('enable'),
    disable: eventspace('disable'),
  };

  // Internal

  /**
   * @private
   * @description Builds namespace.
   * @param {String} string - String to namespace
   * @param {Boolean} prefix - Inlcude library prefix
   */

  function namespace(string, prefix) {
    return (prefix === false ? '' : 'fs-') + Namespace + (string !== '' ? '-' + string : '');
  }

  // /**
  //  * @private
  //  * @description Builds selector dotspace.
  //  * @param {String} string - String to prefix
  //  */

  //  function dotspace(string) {
  //   return '.' + string;
  // }

  /**
   * @private
   * @description Builds selector dotspace.
   * @param {String} string - String to prefix
   */

  function eventspace(string) {
    return string + '.' + Namespace;
  }

  // Private

  /**
   * @private
   * @description Builds instance.
   */

  function construct(options) {
    var $el = Formstone(this);
    var data = $el.getData(Namespace);

    if (data) {
      return;
    }

    GUID++

    data = Formstone.extend({
      guid: GUID,
      guidClass: namespace(String(GUID).padStart(3, '0')),
      enabled: false,
      active: false,
    }, Options, options, ($el.getData('swapOptions') || {}));

    $el.setData(Namespace, data);

    data.classes = $.extend(true, {}, Classes, data.classes);

    data.el = this;
    data.$el = $el;
    data.target = data.$el.data(namespace('target', false));
    data.$target = Formstone(data.target);

    data.$el.addClass([data.classes.base, data.guidClass]);
    data.$target.addClass(data.classes.target);

    // Media Query support
    data.mq = '(max-width:' + (data.maxWidth === Infinity ? '100000px' : data.maxWidth) + ')';

    // Live query for linked to avoid missing new elements
    var linked = data.$el.data(namespace('linked', false));
    data.linked = linked ? '[data-' + Namespace + '-linked="' + linked + '"]' : false;

    // Live query for the group to avoid missing new elements
    var group = data.$el.data(namespace('group', false));
    data.group = group ? '[data-' + Namespace + '-group="' + group + '"]' : false;

    data.$swaps = Formstone(data.el);
    data.$swaps.nodes = data.$swaps.nodes.concat(data.$target.nodes);

    data.$el.bind(Events.click, onClick);
  }

  /**
   * @private
   * @description Runs post build.
   */

  function postConstruct() {
    var data = Formstone(this).getData(Namespace);

    if (data) {
      if (!data.collapse && data.group && !Formstone(data.group).filter('[data-' + Namespace + '-active]').length) {
        Formstone(Formstone(data.group).first()).attr('data-' + namespace('active', false), 'true');
      }

      // Should be activate when enabled
      data.onEnable = data.$el.data(namespace('active', false)) || false;

      if (Formstone.mediaquery) {
        // Media Query support
        Formstone.mediaquery('bind', data.guidClass, data.mq, {
          enter: function() {
            enable.apply(data.el, [true]);
          },
          leave: function() {
            disable.apply(data.el, [true]);
          }
        });
      } else {
        enable.apply(data.el);
      }
    }
  }

  /**
   * @private
   * @description Handles click.
   * @param {Object} e - Event data
   */

  function onClick(e) {
    Formstone.killEvent(e);

    var data = Formstone(this).getData(Namespace);

    if (data) {
      if (data.active && data.collapse) {
        deactivate.apply(data.el);
      } else {
        activate.apply(data.el);
      }
    }
  }

  // Public

  /**
   * @description Sets default options; applies to future instances.
   * @param {Object} options - Default options
   * @example Formstone.swap('defaults', { ... });
   */

  function defaults(options) {
    Options = Formstone.extend({}, Options, options);
  }

  /**
   * @description Tears down instance.
   * @example Formstone('.target').swap('destroy');
   */

   function destroy() {
    var data = Formstone(this).getData(Namespace);

    if (data) {
      if (Formstone.mediaquery) {
        // Media Query support
        Formstone.mediaquery('unbind', data.guidClass);
      }

      data.$swaps.removeClass([data.classes.base, data.classes.target, data.classes.enabled, data.classes.active, data.guidClass])
        .unbind(Events.namespace);

      data.$el.deleteData(Namespace);
    }
  }

  /**
   * @description Activates instance.
   * @example Formstone('.target').swap('activate');
   */

  function activate() {
    var data = Formstone(this).getData(Namespace);
    var fromLinked = arguments[0];

    if (data && data.enabled && !data.active) {
      if (data.group && !fromLinked) {
        // Deactivates grouped instances
        Formstone(data.group).not(data.$el).not(data.linked).swap('deactivate', true);
      }

      // index in group
      var index = (data.group) ? Formstone(data.group).nodes.indexOf(data.el) : null;

      data.$swaps.addClass(data.classes.active);

      if (!fromLinked) {
        if (data.linked) {
          // Linked handles
          Formstone(data.linked).not(data.$el).swap('activate', true);
        }
      }

      data.$el.trigger(Events.activate, index);

      data.active = true;
    }
  }

  /**
   * @description Deactivates instance.
   * @example Formstone('.target').swap('deactivate');
   */

  function deactivate() {
    var data = Formstone(this).getData(Namespace);
    var fromLinked = arguments[0];

    if (data && data.enabled && data.active) {
      data.$swaps.removeClass(data.classes.active);

      if (!fromLinked) {
        if (data.linked) {
          // Linked handles
          Formstone(data.linked).not(data.$el).swap('deactivate', true);
        }
      }

      data.$el.trigger(Events.deactivate);

      data.active = false;
    }
  }

  /**
   * @description Enables instance.
   * @example Formstone('.target').swap('enable');
   */

  function enable() {
    var data = Formstone(this).getData(Namespace);
    var fromLinked = arguments[0];

    if (data && !data.enabled) {
      data.enabled = true;

      data.$swaps.addClass(data.classes.enabled);

      if (!fromLinked) {
        // Linked handles
        Formstone(data.linked).not(data.$el).swap('enable');
      }

      data.$el.trigger(Events.enable);

      if (data.onEnable) {
        data.active = false;
        activate.apply(data.el);
      } else {
        data.active = true;
        deactivate.apply(data.el);
      }
    }
  }

  /**
   * @description Disables instance.
   * @example Formstone('.target').swap('disable');
   */

  function disable() {
    var data = Formstone(this).getData(Namespace);
    var fromLinked = arguments[0];

    if (data && data.enabled) {
      data.enabled = false;

      data.$swaps.removeClass([data.classes.enabled, data.classes.active]);

      if (!fromLinked) {
        // Linked handles
        Formstone(data.linked).not(data.$el).swap('disable');
      }

      data.$el.trigger(Events.disable);
    }
  }

  // Component

  Formstone.Component(Namespace, {
    _construct: construct,
    _postConstruct: postConstruct,
    defaults: defaults,
    destroy: destroy,
    activate: activate,
    deactivate: deactivate,
    enable: enable,
    disable: disable,
  });

  /**
   * @event enable.swap
   * @description Element has been enabled
   * @param {Object} e - Event data
   * @example Formstone('.target').bind('enable.swap', function(e) { ... });
   */

  /**
   * @event disable.swap
   * @description Element has been disabled
   * @param {Object} e - Event data
   * @example Formstone('.target').bind('disable.swap', function(e) { ... });
   */

  /**
   * @event activate.swap
   * @description Element has been activated
   * @param {Object} e - Event data
   * @param {Number} index - Active index in group, if groupped
   * @example Formstone('.target').bind('activate.swap', function(e, index) { ... });
   */

  /**
   * @event deactivate.swap
   * @description Element has been deactivated
   * @param {Object} e - Event data
   * @example Formstone('.target').bind('deactivate.swap', function(e) { ... });
   */

})(window, Formstone);