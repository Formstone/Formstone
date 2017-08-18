/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
      define([
        "jquery",
        "./core",
      ], factory);
    } else {
      factory(jQuery, Formstone);
    }
  }(function($, Formstone) {

    "use strict";

    /**
     * @method private
     * @name resize
     * @description Handles window resize
     */

    function resize() {
      Functions.iterate.call($Instances, resizeInstance);
    }

    /**
     * @method private
     * @name raf
     * @description Handles request animation frame
     */

    function raf() {
      ScrollTop = $Window.scrollTop();

      if (ScrollTop < 0) {
        ScrollTop = 0;
      }

      if (ScrollTop !== OldScrollTop) {
        renderRAF();

        OldScrollTop = ScrollTop;
      }
    }

    /**
     * @method private
     * @name cacheInstances
     * @description Caches active instances
     */

    function cacheInstances() {
      $Instances = $(Classes.base);

      resize();
    }

    /**
     * @method private
     * @name construct
     * @description Builds instance.
     * @param data [object] "Instance data"
     */

    function construct(data) {
      data.stuck = false;
      data.passed = true;
      data.$clone = data.$el.clone();

      data.container = data.$el.data("sticky-container");
      data.$container = $(data.container);

      data.$el.addClass(RawClasses.base);
      data.$clone.removeClass(RawClasses.element)
        .addClass(RawClasses.clone);
      data.$container.addClass(RawClasses.container);

      data.$stickys = $().add(data.$el).add(data.$clone);

      data.$el.after(data.$clone);
    }

    /**
     * @method private
     * @name postConstruct
     * @description Run post build.
     * @param data [object] "Instance data"
     */

    function postConstruct(data) {
      cacheInstances();
      resize();
    }

    /**
     * @method private
     * @name destruct
     * @description Tears down instance.
     * @param data [object] "Instance data"
     */

    function destruct(data) {
      data.$clone.remove();
      data.$container.removeClass(RawClasses.container);

      data.$el.css({
        height: '',
        width: '',
        top: '',
        bottom: '',
        marginBottom: ''
      }).removeClass(RawClasses.base);

      cacheInstances();
    }

    /**
     * @method private
     * @name renderRAF
     * @description Updates DOM based on animation values
     */

    function renderRAF() {
      Functions.iterate.call($Instances, checkInstance);
    }

    /**
     * @method private
     * @name resizeInstance
     * @description Handle window resize event
     * @param data [object] "Instance data"
     */

    function resizeInstance(data) {
      cacheProps(data);

      if (data.$container.length) {
        var containerPos = data.$container.position();

        data.min = containerPos.top + data.containerMargin - data.margin;
        data.max = data.min + data.$container.outerHeight(false) - data.height;
      } else {
        var $el;

        if (data.stuck) {
          $el = data.$clone;
        } else {
          $el = data.$el;
        }

        var elPos = $el.position();

        data.min = elPos.top;
        data.max = false;
      }

      checkInstance(data);
    }

    function cacheProps(data) {
      var $el;

      if (data.stuck) {
        $el = data.$clone;
      } else {
        $el = data.$el;
      }

      data.margin = parseInt($el.css("margin-top"), 10);

      if (data.$container.length) {
        data.containerMargin = parseInt(data.$container.css("margin-top"), 10);
      } else {
        data.containerMargin = 0;
      }

      data.height = $el.outerHeight();
      data.width = $el.outerWidth();
    }

    /**
     * @method private
     * @name checkInstance
     * @description Handle window scroll event
     * @param data [object] "Instance data"
     */

    function checkInstance(data) {
      var check = (ScrollTop + data.offset);

      if (check >= data.min) {
        data.stuck = true;
        data.$stickys.addClass(RawClasses.stuck);

        if (!data.stuck) {
          data.$el.trigger(Events.stuck);

          cacheProps(data);
        }

        var top = data.offset;
        var bottom = '';

        if (data.max && check > data.max) {
          if (!data.passed) {
            data.$el.trigger(Events.passed);
          }

          data.passed = true;
          data.$stickys.addClass(RawClasses.passed);

          top = '';
          bottom = 0;
        } else {
          data.passed = false;
          data.$stickys.removeClass(RawClasses.passed);
        }

        data.$el.css({
          height: data.height,
          width: data.width,
          top: top,
          bottom: bottom,
          marginBottom: 0
        });
      } else {
        data.stuck = false;
        data.$stickys.removeClass(RawClasses.stuck).removeClass(RawClasses.passed);

        if (data.stuck) {
          data.$el.trigger(Events.unstuck);

          // cacheProps(data);
        }

        data.$el.css({
          height: '',
          width: '',
          top: '',
          bottom: '',
          marginBottom: ''
        });
      }
    }

    /**
     * @plugin
     * @name Sticky
     * @description A jQuery plugin for sticky elements.
     * @type widget
     * @main sticky.js
     * @dependency jQuery
     * @dependency core.js
     */

    var Plugin = Formstone.Plugin("sticky", {
        widget: true,

        /**
         * @options
         * @param offset [int] <0> "Element offset for activating sticky position"
         */

        defaults: {
          offset: 0,
        },

        classes: [
          "sticky",
          "stuck",
          "clone",
          "container",
          "passed"
        ],

        /**
         * @events
         * @event passed.sticky "Element passed"
         * @event stuck.sticky "Element stuck"
         * @event unstuck.sticky "Element unstuck"
         */

        events: {
          passed: "passed",
          stuck: "stuck",
          unstuck: "unstuck"
        },

        methods: {
          _construct: construct,
          _postConstruct: postConstruct,
          _destruct: destruct,
          _resize: resize,
          _raf: raf
        }
      }),

      // Localize References

      Namespace = Plugin.namespace,
      Classes = Plugin.classes,
      RawClasses = Classes.raw,
      Events = Plugin.events,
      Functions = Plugin.functions,

      Window = Formstone.window,
      $Window = Formstone.$window,
      $Body,
      ScrollTop = 0,
      OldScrollTop = 0,
      $Instances = [];

  })

);
