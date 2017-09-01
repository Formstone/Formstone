# Number

A jQuery plugin for cross browser number inputs.

<!-- HEADER END -->

<!-- NAV START -->

* [Use](#use)
* [Options](#options)
* [Methods](#methods)
* [CSS](#css)

<!-- NAV END -->

<!-- DEMO BUTTON -->

<a name="use"></a>

## Using Number


#### Main

```markup
number.js
number.css
```


#### Dependencies

```markup
jQuery
core.js
```

### Basic

Number will convert an input into a customizable step interface:

```javascript
$("input[type=number]").number();
```

```markup
<input type="number" pattern="[0-9]*">
```

### Limits

Number will automatically detect the minimum, maximum and increment values based on the `min`, `max` and `step` attributes:

```markup
<input type="number" min="2" max="20" step="2" pattern="[0-9]*">
```


<a name="options"></a>

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-number-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `customClass` | `string` | `''` | Class applied to instance |
| `labels.up` | `string` | `'Up'` | Up arrow label |
| `labels.down` | `string` | `'Down'` | Down arrow label |
| `theme` | `string` | `"fs-light"` | Theme class name |

<hr>
<a name="methods"></a>

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.number("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").number("destroy");
```

### disable

Disables target instance

```javascript
$(".target").number("disable");
```

### enable

Enables target instance

```javascript
$(".target").number("enable");
```

### update

Updates instance.

```javascript
$(".target").number("update");
```

<hr>
<a name="css"></a>

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-number-element` | `element` | Target elmement |
| `.fs-number` | `element` | Base widget class |
| `.fs-number.fs-number-disabled` | `modifier` | Indicates disabled state |
| `.fs-number-arrow` | `element` | Arrow elmement |
| `.fs-number-arrow:after` | `element` | Arrow icon |
| `.fs-number-arrow.fs-number-up` | `modifier` | Indicates up state |
| `.fs-number-arrow.fs-number-down` | `modifier` | Indicates up state |

