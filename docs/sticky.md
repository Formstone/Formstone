# Sticky

A jQuery plugin for sticky elements.

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

## Using Sticky


#### Main

```markup
sticky.js
```


#### Dependencies

```markup
jQuery
core.js
```

### Basic

Sticky will apply fixed positioning to an element as the user scrolls past the original vertical offset:

```javascript
$(".sticky").sticky();
```

```markup
<div class="sticky">
  ...
</div>
```

### Offset

Adjust the vertical offset by setting the `offset` option:

```javascript
$(".sticky").sticky({
  offset: 100
});
```

### Container

Use the `data-sticky-container` attribute to define a parent element. The target element will stick to the bottom of the container when completely passed:

```markup
<div class="container">
  <div class="sticky" data-sticky-container=".container">
    ...
  </div>
</div>
```



<a name="options"></a>

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-sticky-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `maxWidth` | `string` | `'Infinity'` | Width at which to auto-disable plugin |
| `minWidth` | `string` | `'0'` | Width at which to auto-disable plugin |
| `offset` | `int` | `0` | Element offset for activating sticky position |

<hr>
<a name="events"></a>

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `passed.sticky` | Element passed |
| `stuck.sticky` | Element stuck |
| `unstuck.sticky` | Element unstuck |

<hr>
<a name="methods"></a>

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.sticky("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").sticky("destroy");
```

### disable

Disables instance.

```javascript
$(".target").sticky("disable");
```

### enable

Enables instance.

```javascript
$(".target").sticky("enable");
```

### resize

Updates instance.

```javascript
$(".target").sticky("resize");
```

<hr>
<a name="css"></a>

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-sticky-element` | `element` | Target elmement |
| `.fs-sticky-clone` | `element` | Cloned elemtn |
| `.fs-sticky.fs-sticky-stuck` | `modifier` | Indicates stuck state |
| `.fs-sticky-clone.fs-sticky-stuck` | `modifier` | Indicates stuck state |

