{"template":"component.html","title":"Switch","demo":"<style>\n\t.toggle.fs-switch-enabled { color: #393b3f; }\n\t.toggle.fs-switch-active { color: #c65032; }\n\n\t.toggle_target { background: #c65032; border-radius: 3px; color: #fff; height: 50px; line-height: 50px; margin: 10px 0; text-align: center; width: 100%; }\n\t.toggle_target.fs-switch-enabled.fs-switch-target { display: none; }\n\t.toggle_target.fs-switch-enabled.fs-switch-active { display: block; }\n</style>\n\n<script>\n\t$(function() {\n\t\t$(\".toggle\").switch();\n\t});\n</script>\n\n<h4>Basic</h4>\n<div class=\"toggle\" data-switch-target=\".toggle_target_0\">Toggle</div>\n<div class=\"toggle_target toggle_target_0\">Target</div>\n\n<h4>Grouped</h4>\n<div class=\"toggle\" data-switch-target=\".toggle_target_1\" data-switch-group=\"toggle_group_1\">Toggle 1</div>\n<div class=\"toggle_target toggle_target_1\">Target 1</div>\n\n<div class=\"toggle\" data-switch-target=\".toggle_target_2\" data-switch-group=\"toggle_group_1\">Toggle 2</div>\n<div class=\"toggle_target toggle_target_2\">Target 2</div>\n\n<h4>Grouped (no collapse)</h4>\n<div class=\"toggle\" data-switch-active=\"true\" data-switch-options='{\"collapse\":false}' data-switch-target=\".toggle_target_3\" data-switch-group=\"toggle_group_2\">Toggle 1</div>\n<div class=\"toggle_target toggle_target_3\">Target 1</div>\n\n<div class=\"toggle\" data-switch-options='{\"collapse\":false}' data-switch-target=\".toggle_target_4\" data-switch-group=\"toggle_group_2\">Toggle 2</div>\n<div class=\"toggle_target toggle_target_4\">Target 2</div>\n\n<h4>Max Width</h4>\n<div class=\"toggle\" data-switch-options='{\"maxWidth\":\"740px\"}' data-switch-target=\".toggle_target_5\">Toggle</div>\n<div class=\"toggle_target toggle_target_5\">Target</div>"}

# Switch

A jQuery plugin for toggling states.

* [Use](#use)
* [Demo](#demo)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)

## Use 

#### Main

```markup
switch.js
switch.css
```

#### Dependencies

```markup
core.js
mediaquery.js
touch.js
```

### Basic

Switch toggles classes on groups of elements based on configuration options and user interaction. It is up to the developer to utilize the classes.

```javascript
$(".target").switch();
```

```markup
<div class="target" data-switch-target=".toggle">Toggle</div>
<div class="toggle">Target</div>
```

### Groups

Switches can be grouped together for a simple accordions or tabs.

```markup
<h4>Grouped</h4>
<div class="target" data-switch-target=".toggle_1" data-switch-group="group_1">Toggle - 1</div>
<div class="target" data-switch-target=".toggle_2" data-switch-group="group_1">Toggle - 2</div>

<div class="toggle_1">Target - 1</div>
<div class="toggle_2">Target - 2</div>
```

### Max Width

Switches will auto-enable and disable themselves if the `maxWidth` property is set.

```javascript
$(".target").switch({
	maxWidth: "740px"
});
```

```markup
<div class="target" data-switch-target=".toggle">Toggle</div>
<div class="switch">Target</div>
```


## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-switch-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `collapse` | `boolean` | `true` | Allow switch to collapse it's target |
| `maxWidth` | `string` | `Infinity` | Width at which to auto-disable plugin |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `activate.switch` | Switch activated |
| `deactivate.switch` | Switch deactivated |
| `enable.switch` | Switch enabled |
| `disable.switch` | Switch diabled |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### activate

Activate instance.

```javascript
$(".target").switch("activate");
```

### deactivate

Deactivates instance.

```javascript
$(".target").switch("deactivate");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.switch("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").switch("destroy");
```

### disable

Disables instance.

```javascript
$(".target").switch("disable");
```

### enable

Enables instance.

```javascript
$(".target").switch("enable");
```

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-switch-element` | `element` | Target Element |
| `.fs-switch-target` | `element` | Toggled element |
| `.fs-switch-enabled` | `modifier` | Indicates enabled state |
| `.fs-switch-active` | `modifier` | Indicates active state |

