# Touch

A jQuery plugin for simple tooltips.

* [Options](#options)
* [Methods](#methods)

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-touch-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| pan | boolean || object | false | Object to enable |
| swipe | boolean || object | false | Object to enable |
| swipe.direction | string | "all" | 'all', 'horizontal', 'vertical' |
| scale | boolean | false | True to enable |
| tap | boolean | false | True to enable |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### defaults

Extends plugin default settings; effects instances created hereafter.

```
$.touch("defaults", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | object | {} | New plugin defaults |

### destroy

Removes plugin instance.

```
$(".target").touch("destroy");
```

