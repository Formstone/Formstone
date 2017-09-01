# Transition

A jQuery plugin for CSS transition events.

<!-- HEADER END -->

<!-- NAV START -->

* [Use](#use)
* [Options](#options)
* [Methods](#methods)
* [CSS](#css)

<!-- NAV END -->

<!-- DEMO BUTTON -->

<a name="use"></a>

## Using Transition


#### Main

```markup
transition.js
```


#### Dependencies

```markup
jQuery
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


<a name="options"></a>

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-transition-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `always` | `boolean` | `False` | Flag to always react to transition end (.on vs .one) |
| `property` | `string` | `null` | Property to react to |
| `target` | `string` | `null` | Target child selector |

<hr>
<a name="methods"></a>

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

<hr>
<a name="css"></a>

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-transition-element` | `element` | Target Element |

