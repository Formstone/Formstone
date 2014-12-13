{"template":"component.html","title":"Navigation","demo":"<style>\n\t.navigation { margin: 0 0 20px; overflow: hidden; }\n\t.navigation a { background: #c65032; border: none; color: #fff; display: block; float: left; font-size: 16px; line-height: 40px; margin: 0 1px 0 0; padding: 0 20px; }\n\t.navigation a:hover { color: #fff; }\n\n\t.navigation.fs-navigation-enabled a { float: none; margin: 0 0 1px 0; width: 100%; }\n\t.navigation.fs-navigation-enabled { padding: 10px; }\n</style>\n\n<script>\n\t$(function() {\n\t\t$(\".navigation a\").on(\"click\", function(e) {\n\t\t\te.preventDefault();\n\t\t\te.stopPropagation();\n\t\t});\n\n\t\t$(\".navigation\").navigation();\n\t});\n</script>\n\n<h4>Basic</h4>\n<h5 id=\"nav_handle_1\">Navigation</h5>\n<nav class=\"navigation\" data-navigation-handle=\"#nav_handle_1\">\n\t<a href=\"#\">Home</a>\n\t<a href=\"#\">About</a>\n\t<a href=\"#\">Contact</a>\n</nav>\n\n<h4>Breakpoint</h4>\n<h5 id=\"nav_handle_2\">Navigation</h5>\n<nav class=\"navigation\" data-navigation-handle=\"#nav_handle_2\" data-navigation-options='{\"maxWidth\":\"740px\"}'>\n\t<a href=\"#\">Home</a>\n\t<a href=\"#\">About</a>\n\t<a href=\"#\">Contact</a>\n</nav>\n\n<!--\n<h4>Overlay</h4>\n<h5 id=\"nav_handle_3\">Navigation</h5>\n<nav class=\"navigation\" data-navigation-handle=\"#nav_handle_3\" data-navigation-options='{\"type\":\"overlay\"}'>\n\t<a href=\"#\">Home</a>\n\t<a href=\"#\">About</a>\n\t<a href=\"#\">Contact</a>\n</nav>\n-->"}

# Navigation

A jQuery plugin for simple responsive navigation.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)
* [Demo](#demo)

## Use 

#### Main

```markup
navigation.js
navigation.css
```

#### Dependencies

```markup
core.js
mediaquery.js
toggle.js
touch.js
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

### Slide Out

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

### Events

React to the navigation by listening for the `open.navigation` and `close.navigation` events:

```javascript
$("nav").on("open.navigation", function() {
	// ...
}).on("close.navigation", function() {
	// ...
});
```

#### IE Support

When supporting IE, a [HTML5 enabler](https://gist.github.com/benplum/8045366) and matchMedia polyfill ([IE 8](https://gist.github.com/benplum/8045336), [IE 9](https://gist.github.com/benplum/8045327)) are required.

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-navigation-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `customClass` | `string` | `''` | Class applied to instance |
| `gravity` | `string` | `'left'` | Gravity of 'push' and 'overlay' navigation; 'right', 'left' |
| `label` | `boolean` | `true` | Display handle width label |
| `labels.closed` | `string` | `'Menu'` | Closed state text |
| `labels.open` | `string` | `'Close'` | Open state text |
| `maxWidth` | `string` | `'980px'` | Width at which to auto-disable plugin |
| `type` | `string` | `'toggle'` | Type of navigation; 'toggle', 'push', 'overlay' |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `open.navigation` | Navigation opened |
| `close.navigation` | Navigation closed |

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

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-navigation-element` | `element` | Target elmement |
| `.fs-navigation-navigation` | `element` | Navigation |
| `.fs-navigation.fs-navigation-open` | `modifier` | Indicates open state |
| `.fs-navigation.fs-navigation-enabled` | `modifier` | Indicates enabled state |
| `.fs-navigation.fs-navigation-animated` | `modifier` | Indicates animated state |
| `.fs-navigation.fs-navigation-toggle` | `modifier` | Indicates toggle interface |
| `.fs-navigation.fs-navigation-overlay` | `modifier` | Indicates toggle interface |
| `.fs-navigation.fs-navigation-push` | `modifier` | Indicates toggle interface |
| `.fs-navigation-push.fs-navigation-left` | `modifier` | Indicates off canvas slide interface |
| `.fs-navigation-push.fs-navigation-right` | `modifier` | Indicates off canvas slide interface |
| `.fs-navigation-content` | `element` | Target page content |
| `.fs-navigation-content.fs-navigation-push` | `modifier` | Indicates toggle interface |
| `.fs-navigation-content.fs-navigation-animated` | `modifier` | Indicates animted state |
| `.fs-navigation-content.fs-navigation-open` | `modifier` | Indicates open state |
| `.fs-navigation-content.fs-navigation-enabled` | `modifier` | Indicates enabled state |
| `.fs-navigation-handle` | `element` | Click target to toggle navigation |
| `.fs-navigation-handle.fs-navigation-open` | `modifier` | Indicates open state |
| `.fs-navigation-handle.fs-navigation-enabled` | `modifier` | Indicates enabled state |
| `.fs-navigation-handle:after` | `element` | Icon displayed in handle |

