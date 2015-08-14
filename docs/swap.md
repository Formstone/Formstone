# Swap

A jQuery plugin for toggling states.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)

## Use 

#### Main

```markup
swap.js
swap.css
```

#### Dependencies

```markup
jQuery
core.js
mediaquery.js
touch.js
```

### Basic

Swap toggles classes on groups of elements based on configuration options and user interaction. It is up to the developer to utilize the classes.

```javascript
$(".target").swap();
```

```markup
<div class="target" data-swap-target=".toggle">Toggle</div>
<div class="toggle">Target</div>
```

### Groups

Swaps can be grouped together for a simple accordions or tabs.

```markup
<h4>Grouped</h4>
<div class="target" data-swap-target=".toggle_1" data-swap-group="group_1">Toggle - 1</div>
<div class="target" data-swap-target=".toggle_2" data-swap-group="group_1">Toggle - 2</div>

<div class="toggle_1">Target - 1</div>
<div class="toggle_2">Target - 2</div>
```

### Linked

Swaps can be linked together for multiple handles.

```markup
<h4>Grouped</h4>
<div class="target" data-swap-target=".toggle_1" data-swap-group="linked_1">Handle - 1</div>

<div class="toggle_1">Target - 1</div>

<div class="target" data-swap-target=".toggle_1" data-swap-group="linked_1">Handle - 2</div>
```

### Max Width

Swaps will auto-enable and disable themselves if the `maxWidth` property is set.

```javascript
$(".target").swap({
	maxWidth: "740px"
});
```

```markup
<div class="target" data-swap-target=".toggle">Toggle</div>
<div class="toggle">Target</div>
```


## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-swap-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `collapse` | `boolean` | `true` | Allow swap to collapse it's target |
| `maxWidth` | `string` | `Infinity` | Width at which to auto-disable plugin |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `activate.swap` | Swap activated |
| `deactivate.swap` | Swap deactivated |
| `enable.swap` | Swap enabled |
| `disable.swap` | Swap diabled |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### activate

Activate instance.

```javascript
$(".target").swap("activate");
```

### deactivate

Deactivates instance.

```javascript
$(".target").swap("deactivate");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.swap("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").swap("destroy");
```

### disable

Disables instance.

```javascript
$(".target").swap("disable");
```

### enable

Enables instance.

```javascript
$(".target").swap("enable");
```

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-swap-element` | `element` | Target Element |
| `.fs-swap-target` | `element` | Toggled element |
| `.fs-swap-enabled` | `modifier` | Indicates enabled state |
| `.fs-swap-active` | `modifier` | Indicates active state |

