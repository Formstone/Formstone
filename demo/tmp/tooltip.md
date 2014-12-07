{"template":"component.html","title":"Tooltip","demo":"<style>\n\t.tooltips { margin: 20px 0; overflow: hidden; }\n\n\t.tooltip { background: #c65032; border-radius: 3px; color: #fff; clear: both; display: block; height: 50px; line-height: 50px; margin: 0 auto 10px; text-align: center; width: 50%; }\n</style>\n\n<script>\n\t$(function() {\n\t\t$(\".tooltip\").tooltip();\n\t});\n</script>\n\n<h4>Basic</h4>\n<div class=\"tooltips\">\n\t<div class=\"tooltip\" data-title=\"Left Tooltip\"   data-tooltip-options='{\"direction\":\"left\"}'>Left</div>\n\t<div class=\"tooltip\" data-title=\"Right Tooltip\"  data-tooltip-options='{\"direction\":\"right\"}'>Right</div>\n\t<div class=\"tooltip\" data-title=\"Top Tooltip\"    data-tooltip-options='{\"direction\":\"top\"}'>Top</div>\n\t<div class=\"tooltip\" data-title=\"Bottom Tooltip\" data-tooltip-options='{\"direction\":\"bottom\"}'>Bottom</div>\n</div>\n\n<h4>Follow</h4>\n<div class=\"tooltips\">\n\t<div class=\"tooltip\" data-title=\"Left Tooltip\"    data-tooltip-options='{\"direction\":\"left\",\"follow\":\"true\"}'>Left</div>\n\t<div class=\"tooltip\" data-title=\"Right Tooltip\"   data-tooltip-options='{\"direction\":\"right\",\"follow\":\"true\"}'>Right</div>\n\t<div class=\"tooltip\" data-title=\"Top Tooltip\"     data-tooltip-options='{\"direction\":\"top\",\"follow\":\"true\"}'>Top</div>\n\t<div class=\"tooltip\" data-title=\"Bottom Tooltip\"  data-tooltip-options='{\"direction\":\"bottom\",\"follow\":\"true\"}'>Bottom</div>\n</div>\n\n<h4>Match</h4>\n<div class=\"tooltips\">\n\t<div class=\"tooltip\" data-title=\"Left Tooltip\"    data-tooltip-options='{\"direction\":\"left\",\"match\":\"true\"}'>Left</div>\n\t<div class=\"tooltip\" data-title=\"Right Tooltip\"   data-tooltip-options='{\"direction\":\"right\",\"match\":\"true\"}'>Right</div>\n\t<div class=\"tooltip\" data-title=\"Top Tooltip\"     data-tooltip-options='{\"direction\":\"top\",\"match\":\"true\"}'>Top</div>\n\t<div class=\"tooltip\" data-title=\"Bottom Tooltip\"  data-tooltip-options='{\"direction\":\"bottom\",\"match\":\"true\"}'>Bottom</div>\n</div>\n\n<h4>Delay</h4>\n<div class=\"tooltips\">\n\t<div class=\"tooltip\" data-title=\"Left Tooltip\"    data-tooltip-options='{\"direction\":\"left\",\"delay\":\"500\"}'>Left</div>\n\t<div class=\"tooltip\" data-title=\"Right Tooltip\"   data-tooltip-options='{\"direction\":\"right\",\"delay\":\"500\"}'>Right</div>\n\t<div class=\"tooltip\" data-title=\"Top Tooltip\"     data-tooltip-options='{\"direction\":\"top\",\"delay\":\"500\"}'>Top</div>\n\t<div class=\"tooltip\" data-title=\"Bottom Tooltip\"  data-tooltip-options='{\"direction\":\"bottom\",\"delay\":\"500\"}'>Bottom</div>\n</div>"}

# Tooltip

A jQuery plugin for simple tooltips.

* [Use](#use)
* [Options](#options)
* [Methods](#methods)
* [CSS](#css)
* [Demo](#demo)

## Use 

#### Main

```markup
tooltip.js
tooltip.css
```

#### Dependencies

```markup
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

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-tooltip-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `delay` | `int` | `0` | Hover delay |
| `direction` | `string` | `'top'` | Tooltip direction |
| `follow` | `boolean` | `false` | Flag to follow mouse |
| `formatter` | `function` | `$.noop` | Text format function |
| `margin` | `int` | `15` | Tooltip margin |
| `match` | `boolean` | `false` | Flag to match mouse position |

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

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-tooltip` | `element` | Base widget class |
| `.fs-tooltip.fs-tooltip-visible` | `modifier` | Inidcates visible state |
| `.fs-tooltip.fs-tooltip-right` | `modifier` | Inidcates right side display |
| `.fs-tooltip.fs-tooltip-left` | `modifier` | Inidcates left side display |
| `.fs-tooltip.fs-tooltip-top` | `modifier` | Inidcates top display |
| `.fs-tooltip.fs-tooltip-bottom` | `modifier` | Inidcates bottom display |
| `.fs-tooltip-content` | `element` | Tooltip content wrapper |
| `.fs-tooltip-caret` | `element` | Tooltip caret |

