# Transition

A jQuery plugin for CSS transition events.

* [Use](#use)
* [Options](#options)
* [Methods](#methods)


## Use 

### Basic

Transition provides a predicatable interface for moving to CSS based animations:

```
$(".target").transition(function() {
	...
}).addClass("visible");
```

### Resolve

Tranistions can manually resolved, which will immediately fire the associated callback:

```
if (shouldResolve) {
	$(".target").transition("resolve");
}
```

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-transition-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| always | boolean | False | Flag to always react to transition end (.on vs .one) |
| property | string | null | Property to react to |
| target | string | null | Target child selector |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### defaults

Extends plugin default settings; effects instances created hereafter.

```
$.transition("defaults", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | object | {} | New plugin defaults |

### destroy

Removes plugin instance.

```
$(".target").transition("destroy");
```

