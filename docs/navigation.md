# Navigation

A jQuery plugin for simple responsive navigation.

<!-- HEADER END -->

<!-- NAV START -->

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)

<!-- NAV END -->

<!-- DEMO BUTTON -->

<a name="use"></a>

## Using Navigation


#### Main

```markup
navigation.js
navigation.css
```


#### Dependencies

```markup
jQuery
core.js
mediaquery.js
swap.js
```

### Basic

Navigation will automatically turn a basic navigation into a mobile friendly system. Links can be styled independently:

```javascript
$("nav").navigation();
```

```markup
<h4 id="handle">Navigation</h4>
<nav data-navigation-handle="#handle">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
```

### Breakpoint

By default, Navigation will enable itself on screens smaller then 980 pixels wide. Specify a different width by setting the `maxWidth` option on initialization.

```javascript
$("nav").navigation({
  maxWidth: "740px"
});
```

### Off Canvas

Navigation can also slide out from the left or right hand side of the screen. The nav can 'push' the main page content by specifying the `data-navigation-content` attribute:

```javascript
$("nav").navigation();
```

```markup
<h4 id="handle">Navigation</h4>
<nav data-navigation-handle="#handle" data-navigation-content="#content">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
<div id="content">
  ...
</nav>
```

<h3>Events</h3>

React to the navigation by listening for the `open.navigation` and `close.navigation` events:

```javascript
$("nav").on("open.navigation", function() {
  // ...
}).on("close.navigation", function() {
  // ...
});
```



<a name="options"></a>

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-navigation-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `customClass` | `string` | `''` | Class applied to instance |
| `gravity` | `string` | `'left'` | Gravity of 'push', 'reveal' and 'overlay' navigation; 'right', 'left' |
| `label` | `boolean` | `true` | Display handle width label |
| `labels.closed` | `string` | `'Menu'` | Closed state text |
| `labels.open` | `string` | `'Close'` | Open state text |
| `maxWidth` | `string` | `'980px'` | Width at which to auto-disable plugin |
| `theme` | `string` | `"fs-light"` | Theme class name |
| `type` | `string` | `'toggle'` | Type of navigation; 'toggle', 'push', 'reveal', 'overlay' |

<hr>
<a name="events"></a>

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `open.navigation` | Navigation opened |
| `close.navigation` | Navigation closed |

<hr>
<a name="methods"></a>

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### close

Closes instance.

```javascript
$(".target").navigation("close");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.navigation("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").navigation("destroy");
```

### disable

Disables instance.

```javascript
$(".target").navigation("disable");
```

### enable

Enables instance.

```javascript
$(".target").navigation("enable");
```

### open

Opens instance.

```javascript
$(".target").navigation("open");
```

<hr>
<a name="css"></a>

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-navigation-element` | `element` | Target elmement |
| `.fs-navigation` | `element` | Base widget class |
| `.fs-navigation-toggle-nav` | `element` | Toggle navigation |
| `.fs-navigation-toggle-nav.fs-navigation-enabled` | `modifier` | Indicates enabled state |
| `.fs-navigation-toggle-nav.fs-navigation-open` | `modifier` | Indicates open state |
| `.fs-navigation-toggle-handle` | `element` | Toggle handle |
| `.fs-navigation-toggle-handle.fs-navigation-enabled` | `modifier` | Indicates enabled state |
| `.fs-navigation-toggle-handle.fs-navigation-open` | `modifier` | Indicates open state |
| `.fs-navigation-overlay-nav` | `element` | Overlay nav |
| `.fs-navigation-overlay-nav.fs-navigation-enabled` | `modifier` | Indicates enabled state |
| `.fs-navigation-overlay-nav.fs-navigation-animated` | `modifier` | Indicates animated state |
| `.fs-navigation-overlay-nav.fs-navigation-open` | `modifier` | Indicates open state |
| `.fs-navigation-overlay-left-nav` | `modifier` | Indicates left hand nav |
| `.fs-navigation-overlay-right-nav` | `modifier` | Indicates right hand nav |
| `.fs-navigation-push-nav` | `element` | Push nav |
| `.fs-navigation-push-nav.fs-navigation-enabled` | `modifier` | Indicates enabled state |
| `.fs-navigation-push-nav.fs-navigation-animated` | `modifier` | Indicates animated state |
| `.fs-navigation-push-nav.fs-navigation-open` | `modifier` | Indicates open state |
| `.fs-navigation-push-left-nav` | `modifier` | Indicates left hand nav |
| `.fs-navigation-push-right-nav` | `modifier` | Indicates right hand nav |
| `.fs-navigation-reveal-nav` | `element` | Reveal nav |
| `.fs-navigation-reveal-nav.fs-navigation-enabled` | `modifier` | Indicates enabled state |
| `.fs-navigation-reveal-nav.fs-navigation-animated` | `modifier` | Indicates animated state |
| `.fs-navigation-reveal-nav.fs-navigation-open` | `modifier` | Indicates open state |
| `.fs-navigation-reveal-left-nav` | `modifier` | Indicates left hand nav |
| `.fs-navigation-reveal-right-nav` | `modifier` | Indicates right hand nav |
| `.fs-navigation-overlay-handle` | `element` | Overlay handle |
| `.fs-navigation-overlay-handle.fs-navigation-enabled` | `modifier` | Indicates enabled state |
| `.fs-navigation-push-handle` | `element` | Push handle |
| `.fs-navigation-push-handle.fs-navigation-enabled` | `modifier` | Indicates enabled state |
| `.fs-navigation-overlay-content:before` | `element` | Overlay mask |
| `.fs-navigation-overlay-content.fs-navigation-open:before` | `modifier` | Indicates open state |
| `.fs-navigation-push-content` | `element` | Target page content |
| `.fs-navigation-push-content.fs-navigation-enabled` | `modifier` | Indicates enabled state |
| `.fs-navigation-push-content.fs-navigation-animated` | `modifier` | Indicates animted state |
| `.fs-navigation-push-content.fs-navigation-open` | `modifier` | Indicates open state |
| `.fs-navigation-push-left-content` | `modifier` | Indicates left hand nav |
| `.fs-navigation-push-right-content` | `modifier` | Indicates right hand nav |
| `.fs-navigation-reveal-content` | `element` | Target page content |
| `.fs-navigation-reveal-content.fs-navigation-enabled` | `modifier` | Indicates enabled state |
| `.fs-navigation-reveal-content.fs-navigation-animated` | `modifier` | Indicates animted state |
| `.fs-navigation-reveal-content.fs-navigation-open` | `modifier` | Indicates open state |
| `.fs-navigation-reveal-left-content` | `modifier` | Indicates left hand nav |
| `.fs-navigation-reveal-right-content` | `modifier` | Indicates right hand nav |
| `.fs-navigation-handle` | `element` | Click target to toggle navigation |
| `.fs-navigation-handle.fs-navigation-open` | `modifier` | Indicates open state |
| `.fs-navigation-handle.fs-navigation-enabled` | `modifier` | Indicates enabled state |
| `.fs-navigation-lock` | `modifier` | Indicates locked state; Applied to body element |

