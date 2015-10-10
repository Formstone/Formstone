# Range

A jQuery plugin for cross browser range inputs.

* [Use](#use)
* [Options](#options)
* [Methods](#methods)

## Use 

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
| `vertical` | `boolean` | `false` | &nbsp; |

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

