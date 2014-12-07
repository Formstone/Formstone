{"template":"component.html","title":"Toggle","demo":"<style>\n\t.toggle.fs-toggle-enabled { color: #393b3f; }\n\t.toggle.fs-toggle-active { color: #c65032; }\n\n\t.toggle_target { background: #c65032; border-radius: 3px; color: #fff; height: 50px; line-height: 50px; margin: 10px 0; text-align: center; width: 100%; }\n\t.toggle_target.fs-toggle-enabled.fs-toggle-target { display: none; }\n\t.toggle_target.fs-toggle-enabled.fs-toggle-active { display: block; }\n</style>\n\n<script>\n\t$(function() {\n\t\t$(\".toggle\").toggle();\n\n\t\t// test custom classes\n\t\t$(\".test\").toggle({\n\t\t\tclasses: {\n\t\t\t\ttarget  : \".fs-navigtation-target\",\n\t\t\t\tenabled : \".fs-navigtation-enabled\",\n\t\t\t\tactive  : \".fs-navigtation-active\",\n\t\t\t\traw: {\n\t\t\t\t\ttarget  : \"fs-navigtation-target\",\n\t\t\t\t\tenabled : \"fs-navigtation-enabled\",\n\t\t\t\t\tactive  : \"fs-navigtation-active\"\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t});\n</script>\n\n<h4>Basic</h4>\n<div class=\"toggle\" data-toggle-target=\".toggle_target_0\">Toggle</div>\n<div class=\"toggle_target toggle_target_0\">Target</div>\n\n<h4>Grouped</h4>\n<div class=\"toggle\" data-toggle-target=\".toggle_target_1\" data-toggle-group=\"toggle_group_1\">Toggle 1</div>\n<div class=\"toggle_target toggle_target_1\">Target 1</div>\n\n<div class=\"toggle\" data-toggle-target=\".toggle_target_2\" data-toggle-group=\"toggle_group_1\">Toggle 2</div>\n<div class=\"toggle_target toggle_target_2\">Target 2</div>\n\n<h4>Grouped (no collapse)</h4>\n<div class=\"toggle\" data-toggle-active=\"true\" data-toggle-options='{\"collapse\":false}' data-toggle-target=\".toggle_target_3\" data-toggle-group=\"toggle_group_2\">Toggle 1</div>\n<div class=\"toggle_target toggle_target_3\">Target 1</div>\n\n<div class=\"toggle\" data-toggle-options='{\"collapse\":false}' data-toggle-target=\".toggle_target_4\" data-toggle-group=\"toggle_group_2\">Toggle 2</div>\n<div class=\"toggle_target toggle_target_4\">Target 2</div>\n\n<h4>Max Width</h4>\n<div class=\"toggle\" data-toggle-options='{\"maxWidth\":\"740px\"}' data-toggle-target=\".toggle_target_5\">Toggle</div>\n<div class=\"toggle_target toggle_target_5\">Target</div>\n\n<!-- test custom classes -->\n<h4>Custom Classes</h4>\n<div class=\"test\" data-toggle-target=\".toggle_test\">Toggle</div>\n<div class=\"toggle_target toggle_test\">Target</div>"}

# Toggle

A jQuery plugin for toggling states.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)
* [Demo](#demo)

## Use 

#### Main

```markup
toggle.js
toggle.css
```

#### Dependencies

```markup
core.js
mediaquery.js
touch.js
```

### Basic

Toggle adds and removes classes based on configuration options and user interaction. It is up to the developer to utilize the classes.

```javascript
$(".target").toggle();
```

```markup
<div class="target" data-toggle-target=".toggle">Toggle</div>
<div class="toggle">Target</div>
```

### Groups

Toggles can be grouped together for a simple accordions or tabs.

```markup
<h4>Grouped</h4>
<div class="target" data-toggle-target=".toggle_1" data-toggle-group="group_1">Toggle - 1</div>
<div class="target" data-toggle-target=".toggle_2" data-toggle-group="group_1">Toggle - 2</div>

<div class="toggle_1">Target - 1</div>
<div class="toggle_2">Target - 2</div>
```

### Max Width

Toggles will auto-enable and disable themselves if the `maxWidth` property is set.

```javascript
$(".target").toggle({
	maxWidth: "740px"
});
```

```markup
<div class="target" data-toggle-target=".toggle">Toggle</div>
<div class="toggle">Target</div>
```


## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-toggle-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `collapse` | `boolean` | `true` | Allow toggle to collapse it's target |
| `maxWidth` | `string` | `Infinity` | Width at which to auto-disable plugin |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `activate.toggle` | Toggle activated |
| `deactivate.toggle` | Toggle deactivated |
| `enable.toggle` | Toggle enabled |
| `disable.toggle` | Toggle diabled |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### activate

Activate instance.

```javascript
$(".target").toggle("activate");
```

### deactivate

Deactivates instance.

```javascript
$(".target").toggle("deactivate");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.toggle("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").toggle("destroy");
```

### disable

Disables instance.

```javascript
$(".target").toggle("disable");
```

### enable

Enables instance.

```javascript
$(".target").toggle("enable");
```

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-toggle-element` | `element` | Target Element |
| `.fs-toggle-target` | `element` | Toggled element |
| `.fs-toggle-enabled` | `modifier` | Indicates enabled state |
| `.fs-toggle-active` | `modifier` | Indicates active state |

