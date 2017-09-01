# Range

A jQuery plugin for cross browser range inputs.

<!-- HEADER END -->

<!-- NAV START -->

* [Use](#use)
* [Options](#options)
* [Methods](#methods)
* [CSS](#css)

<!-- NAV END -->

<!-- DEMO BUTTON -->

<a name="use"></a>

## Using Range


#### Main

```markup
range.js
range.css
```


#### Dependencies

```markup
jQuery
core.js
touch.js
```

### Basic

Range will convert an input into a customizable slider interface:

```javascript
$("input[type=range]").range();
```

```markup
<input type="range">
```

### Limits

Range will automatically detect the minimum, maximum and increment values based on the `min`, `max` and `step` attributes:

```markup
<input type="range" min="2" max="20" step="2">
```

### Vertical

Create a vertical slider with the `orient` attribute:

```markup
<input type="range" orient="vertical">
```


<a name="options"></a>

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-range-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `customClass` | `string` | `''` | Class applied to instance |
| `fill` | `boolean` | `false` | Flag to draw fill |
| `formatter` | `function` | `false` | Value format function |
| `labels` | `boolean` | `true` | Flag to draw labels |
| `labels.max` | `string` | &nbsp; | Max value label; defaults to max value |
| `labels.min` | `string` | &nbsp; | Min value label; defaults to min value |
| `theme` | `string` | `"fs-light"` | Theme class name |
| `vertical` | `boolean` | `false` | &nbsp; |

<hr>
<a name="methods"></a>

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.range("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").range("destroy");
```

### disable

Disables target instance

```javascript
$(".target").range("disable");
```

### enable

Enables target instance

```javascript
$(".target").range("enable");
```

### resize

Resizes instance

```javascript
$(".target").range("resize");
```

### update

Updates instance.

```javascript
$(".target").range("update");
```

<hr>
<a name="css"></a>

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-range-element` | `element` | Target elmement |
| `.fs-range` | `element` | Base widget class |
| `.fs-range.fs-range-focus` | `modifier` | Indicates focused state |
| `.fs-range.fs-range-disabled` | `modifier` | Indicates disabled state |
| `.fs-range.fs-range-labels` | `modifier` | Indicates label display |
| `.fs-range.fs-range-vertical` | `modifier` | Indicates vertical display |
| `.fs-range-track` | `element` | Track elmement |
| `.fs-range-fill` | `element` | Fill elmement |
| `.fs-range-handle` | `element` | Handle elmement |
| `.fs-range-marker` | `element` | Marker elmement |
| `.fs-range-label` | `element` | Label elmement |
| `.fs-range-label_min` | `element` | Minimum label elmement |
| `.fs-range-label_max` | `element` | Maximum label elmement |

