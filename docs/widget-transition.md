# Transition

A jQuery plugin for CSS transition events.

* [Options](#options)
* [Methods](#methods)

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-transition-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| always | boolean | False | Flag to always react to transition end (.on vs .one) |
| complete | function | $.noop | Callback function |
| property | string | null | Property to react to |
| target | string | null | Target child selector |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### destroy

Removes plugin instance.

```
$(".target").transition("destroy");
```

