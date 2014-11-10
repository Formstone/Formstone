# Naver

A jQuery plugin for simple responsive navigation.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)


## Use 
### Basic

Naver will automatically turn a basic navigation into a mobile friendly system. Links can be styled independently:

```
$("nav").naver();
```

```
<nav>
	<a href="#">Home</a>
	<a href="#">About</a>
	<a href="#">Contact</a>
</nav>
```

### Breakpoint

By default, Naver will enable itself on screens smaller then 980 pixels wide. Specify a different width by setting the `maxWidth` option on initialization.

```
$("nav").naver({
	maxWidth: "740px"
});
```

#### IE Support

When supporting IE, a [HTML5 enabler](https://gist.github.com/benplum/8045366) and matchMedia polyfill ([IE 8](https://gist.github.com/benplum/8045336), [IE 9](https://gist.github.com/benplum/8045327)) are required.

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-naver-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

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
| close.naver | Navigation closed |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### close

Closes instance.

```
$(".target").naver("close");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```
$.naver("defaults", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | object | {} | New plugin defaults |

### destroy

Removes plugin instance.

```
$(".target").naver("destroy");
```

### disable

Disables instance.

```
$(".target").naver("disable");
```

### enable

Enables instance.

```
$(".target").naver("enable");
```

### open

Opens instance.

```
$(".target").naver("open");
```

## CSS

| Class | Type | Description |
| --- | --- | --- |
| .naver | element | Base widget class |
| .naver.naver-open | modifier | Indicates open state |
| .naver.naver-enabled | modifier | Indicates enabled state |
| .naver-handle | element | Click target to toggle navigation |
| .naver-handle:after | element | Icon displayed in handle |
| .naver-container | element | Wraps target navigation |

