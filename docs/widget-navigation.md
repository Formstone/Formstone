# Navigation

A jQuery plugin for simple responsive navigation.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)


## Use 
### Basic

Navigation will automatically turn a basic navigation into a mobile friendly system. Links can be styled independently:

```
$("nav").navigation();
```

```
<nav>
	<a href="#">Home</a>
	<a href="#">About</a>
	<a href="#">Contact</a>
</nav>
```

### Breakpoint

By default, Navigation will enable itself on screens smaller then 980 pixels wide. Specify a different width by setting the `maxWidth` option on initialization.

```
$("nav").navigation({
	maxWidth: "740px"
});
```

#### IE Support

When supporting IE, a [HTML5 enabler](https://gist.github.com/benplum/8045366) and matchMedia polyfill ([IE 8](https://gist.github.com/benplum/8045336), [IE 9](https://gist.github.com/benplum/8045327)) are required.

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-navigation-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| customClass | string | '' | Class applied to instance |
| label | boolean | true | Display handle width label |
| labels.closed | string | 'Navigation' | Closed state text |
| labels.open | string | 'Close' | Open state text |
| maxWidth | string | '980px' | Width at which to auto-disable plugin |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| close.navigation | Navigation closed |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### close

Closes instance.

```
$(".target").navigation("close");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```
$.navigation("defaults", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | object | {} | New plugin defaults |

### destroy

Removes plugin instance.

```
$(".target").navigation("destroy");
```

### disable

Disables instance.

```
$(".target").navigation("disable");
```

### enable

Enables instance.

```
$(".target").navigation("enable");
```

### open

Opens instance.

```
$(".target").navigation("open");
```

## CSS

| Class | Type | Description |
| --- | --- | --- |
| .navigation | element | Base widget class |
| .navigation.navigation-open | modifier | Indicates open state |
| .navigation.navigation-enabled | modifier | Indicates enabled state |
| .navigation-handle | element | Click target to toggle navigation |
| .navigation-handle:after | element | Icon displayed in handle |
| .navigation-container | element | Wraps target navigation |

