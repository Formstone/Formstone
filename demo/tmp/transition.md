{"template":"component.html","title":"Transition","demo":"<style>\n\t.transitions { margin: 0 0 20px; }\n\t.transition { background: #c65032; border-radius: 3px; height: 30px; margin: 20px 0; width: 10%;\n\t\t-webkit-transition: none;\n\t\t\t\ttransition: none;\n\t\t-webkit-transition: margin 0.5s ease, background 0.5s linear 0.5s;\n\t\t\t\ttransition: margin 0.5s ease, background 0.5s linear 0.5s;\n\t}\n\t.transition.move { margin-left: 90%; }\n\t.transition_property.move { background: #393b3f; }\n\n\t.demo_output { margin: 0 0 20px; }\n\n\t@media screen and (min-width: 500px) {\n\t\t.demo_output { display: inline-block; margin: 0 0 0 10px; }\n\t}\n</style>\n\n<script>\n\t$(function() {\n\t\t$(\".transition_basic\").transition({\n\t\t\talways: true\n\t\t}, complete);\n\n\t\t$(\".transition_parent\").transition({\n\t\t\talways: true,\n\t\t\ttarget: \".transition_delegate\",\n\t\t}, complete);\n\n\t\t$(\".transition_property\").transition({\n\t\t\talways: true,\n\t\t\tproperty: \"background-color\",\n\t\t}, complete);\n\n\t\t$(\".trigger\").on(\"click\", start);\n\t});\n\n\tfunction start() {\n\t\tvar $target = $(this).parent(\".transitions\").find(\".transition\");\n\n\t\tif (!$target.hasClass(\"animating\")) {\n\t\t\t$target.toggleClass(\"move\")\n\t\t\t\t   .addClass(\"animating\");\n\n\t\t\toutput($target, \"&nbsp;\");\n\t\t}\n\t}\n\n\tfunction complete() {\n\t\tvar $target = $(this);\n\n\t\tif (!$target.hasClass(\"transition\")) {\n\t\t\t$target = $(this).find(\".transition\");\n\t\t}\n\n\t\t$target.removeClass(\"animating\");\n\t\toutput($target, \"Complete\");\n\t}\n\n\tfunction output($target, text) {\n\t\t$target.parents(\".transitions\").find(\".demo_output\").html(text);\n\t}\n</script>\n\n<h4>Basic</h4>\n<div class=\"transitions\">\n\t<div class=\"transition transition_basic\"></div>\n\t<button class=\"button trigger\">Start</button>\n\t<div class=\"demo_output\">&nbsp;</div>\n</div>\n\n<h4>Delegation</h4>\n<div class=\"transitions\">\n\t<div class=\"transition_parent\">\n\t\t<div class=\"transition transition_delegate\"></div>\n\t</div>\n\t<button class=\"button trigger\">Start</button>\n\t<div class=\"demo_output\">&nbsp;</div>\n</div>\n\n<h4>Property</h4>\n<div class=\"transitions\">\n\t<div class=\"transition transition_property\"></div>\n\t<button class=\"button trigger\">Start</button>\n\t<div class=\"demo_output\">&nbsp;</div>\n</div>"}

# Transition

A jQuery plugin for CSS transition events.

* [Use](#use)
* [Options](#options)
* [Methods](#methods)
* [CSS](#css)
* [Demo](#demo)

## Use 

#### Main

```markup
transition.js
transition.css
```

#### Dependencies

```markup
core.js
```

### Basic

Transition provides a predictable interface for moving to CSS based animations:

```javascript
$(".target").transition(function() {
	...
}).addClass("visible");
```

### Resolve

Transitions can manually resolved, which will immediately fire the associated callback:

```javascript
if (shouldResolve) {
	$(".target").transition("resolve");
}
```

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-transition-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `always` | `boolean` | `False` | Flag to always react to transition end (.on vs .one) |
| `property` | `string` | `null` | Property to react to |
| `target` | `string` | `null` | Target child selector |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.transition("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").transition("destroy");
```

### resolve

Resolves current transition end events.

```javascript
$(".target").transition("resolve");
```

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-transition-element` | `element` | Target Element |

