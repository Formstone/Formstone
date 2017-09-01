# Tooltip

A jQuery plugin for simple tooltips.

<!-- HEADER END -->

<!-- NAV START -->

* [Use](#use)
* [Options](#options)
* [Methods](#methods)
* [CSS](#css)

<!-- NAV END -->

<!-- DEMO BUTTON -->

<a name="use"></a>

## Using Tooltip


#### Main

```markup
tooltip.js
tooltip.css
```


#### Dependencies

```markup
jQuery
core.js
```

### Basic

Tooltip will generate a tooltip based on the target element's `data-title` attribute. Tooltip can be configured to open in a specific direction by setting the `direction` key at initialization:

```javascript
$("a").tooltip({
  direction: "top"
});
```

```markup
<a href="#" data-title="ToolTip Text">Tooltip Target</a>
```

<!--
### Follow

Tooltip can be configured to follow the user's mouse:

```javascript
$("a").tooltip({
  follow: true
});
```

### Match

Tooltip can be configured to match the user's mouse position, relative to the target:

```javascript
$("a").tooltip({
  match: true
});
```
-->

### Delay

A delay can be set to avoid accidental tooltips:

```javascript
$("a").tooltip({
  delay: 500
});
```


<a name="options"></a>

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-tooltip-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `customClass` | `string` | `''` | Class applied to instance |
| `delay` | `int` | `0` | Hover delay |
| `direction` | `string` | `'top'` | Tooltip direction |
| `follow` | `boolean` | `false` | Flag to follow mouse |
| `formatter` | `function` | `$.noop` | Text format function |
| `margin` | `int` | `15` | Tooltip margin |
| `match` | `boolean` | `false` | Flag to match mouse position |
| `theme` | `string` | `"fs-light"` | Theme class name |

<hr>
<a name="methods"></a>

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.tooltip("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").tooltip("destroy");
```

<hr>
<a name="css"></a>

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-tooltip-element` | `element` | Target elmement |
| `.fs-tooltip` | `element` | Base widget class |
| `.fs-tooltip.fs-tooltip-visible` | `modifier` | Inidcates visible state |
| `.fs-tooltip.fs-tooltip-right` | `modifier` | Inidcates right side display |
| `.fs-tooltip.fs-tooltip-left` | `modifier` | Inidcates left side display |
| `.fs-tooltip.fs-tooltip-top` | `modifier` | Inidcates top display |
| `.fs-tooltip.fs-tooltip-bottom` | `modifier` | Inidcates bottom display |
| `.fs-tooltip-content` | `element` | Tooltip content wrapper |
| `.fs-tooltip-caret` | `element` | Tooltip caret |

