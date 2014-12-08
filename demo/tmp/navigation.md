{"template":"component.html","title":"Navigation","demo":"<style>\n\t.navigation { margin: 0 0 20px; }\n\t.navigation a { background: #c65032; border: none; color: #fff; display: block; float: left; font-size: 16px; line-height: 40px; margin: 0 1px 0 0; padding: 0 20px; }\n\t.navigation a:hover { color: #fff; }\n\n\t.fs-navigation-container.fs-navigation-enabled a { float: none; margin: 0 0 1px 0; width: 100%; }\n\t.fs-navigation-container.fs-navigation-enabled { padding: 10px; }\n\n\t.custom_handle.fs-navigation-enabled { background: #ccc; font-size: 14px; margin: 0; padding: 10px 15px; text-align: center; }\n\t.custom_navigation.fs-navigation-enabled { margin-top: 0; }\n</style>\n\n<script>\n\t$(function() {\n\t\t$(\".navigation a\").on(\"click\", function(e) {\n\t\t\te.preventDefault();\n\t\t\te.stopPropagation();\n\t\t});\n\n\t\t$(\".navigation\").navigation();\n\t});\n</script>\n\n<h4>Basic</h4>\n<nav class=\"navigation\">\n\t<a href=\"#\">Home</a>\n\t<a href=\"#\">About</a>\n\t<a href=\"#\">Contact</a>\n</nav>\n\n<h4>Custom Handle</h4>\n<h5 class=\"custom_handle\">Navigation</h5>\n<nav class=\"navigation custom_navigation\" data-navigation-options='{\"handle\":\".custom_handle\"}'>\n\t<a href=\"#\">Home</a>\n\t<a href=\"#\">About</a>\n\t<a href=\"#\">Contact</a>\n</nav>\n\n<h4>Breakpoint</h4>\n<nav class=\"navigation\" data-navigation-options='{\"maxWidth\":\"740px\"}'>\n\t<a href=\"#\">Home</a>\n\t<a href=\"#\">About</a>\n\t<a href=\"#\">Contact</a>\n</nav>\n\n<h4>Custom Handle</h4>\n<h5 class=\"slide_handle\">Navigation</h5>\n<nav class=\"navigation custom_navigation\" data-navigation-options='{\"type\":\"slide_left\",\"handle\":\".slide_handle\",\"page\":\"#page\"}'>\n\t<a href=\"#\">Home</a>\n\t<a href=\"#\">About</a>\n\t<a href=\"#\">Contact</a>\n</nav>"}

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
<nav>
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

### Custom Handle

Specify a custom handle element by passing a selector to the <code>handle</code> option on initialization.

```javascript
$("nav").navigation({
	handle: "#nav-handle"
});
```

```markup
<h4 id="nav-handle">Navigation</h4>
<nav>
	<a href="#">Home</a>
	<a href="#">About</a>
	<a href="#">Contact</a>
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
| `handle` | `string` | `null` | Handle element selector |
| `label` | `boolean` | `true` | Display handle width label |
| `labels.closed` | `string` | `'Navigation'` | Closed state text |
| `labels.open` | `string` | `'Close'` | Open state text |
| `maxWidth` | `string` | `'980px'` | Width at which to auto-disable plugin |
| `type` | `string` | `'toggle'` | Type of navigation; 'toggle', 'slide_left', 'slide_right', 'overlay' |

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
| `.fs-navigation` | `element` | Base widget class |
| `.fs-navigation.fs-navigation-open` | `modifier` | Indicates open state |
| `.fs-navigation.fs-navigation-enabled` | `modifier` | Indicates enabled state |
| `.fs-navigation-handle` | `element` | Click target to toggle navigation |
| `.fs-navigation-container` | `element` | Wraps target navigation |
| `.fs-navigation-handle:after` | `element` | Icon displayed in handle |
| `.fs-navigation.fs-navigation-toggle` | `modifier` | Indicates toggle interface |
| `.fs-navigation.fs-navigation-slide_left` | `modifier` | Indicates off canvas slide interface |
| `.fs-navigation.fs-navigation-slide_right` | `modifier` | Indicates off canvas slide interface |
| `.fs-navigation-page` | `element` | Target page for slide_left and slide_right |
| `.fs-navigation.fs-navigation-overlay` | `modifier` | Indicates overlay interface |

