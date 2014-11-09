# Rubberband

A jQuery plugin for responsive media query events.

## Options

Options are set by passing a valid options object at initialization or to the public "defaults" method. You can also set custom options for a specific instance by attaching a data-rubberband-options attribute containing a properly formatted JSON object to the target element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| minWidth |  0  |  | Array of min-widths |
| maxWidth |  Infinity  |  | Array of max-widths |
| minHeight |  0  |  | Array of min-heights |
| maxHeight |  Infinity  |  | Array of max-heights |
| unit | string | 'px' | Unit to use when matching widths and heights |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| snap | Change to a media query match |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### bind

Binds callbacks to media query matching.

```
$.rubberband("bind", "(min-width: 500px)", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| media | string |  | Media query to match |
| data | object |  | Object containing 'enter' and 'leave' callbacks |

### defaults

Extends plugin default settings; effects instances created hereafter.

```
$.rubberband("defaults", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | object | {} | New plugin defaults |

### destroy

Removes plugin instance.

```
$(".target").rubberband("destroy");
```

### getState

Returns the current state.

```
var state = $.rubberband("state");
```

### unbind

Unbinds all callbacks from media query.

```
$.rubberband("unbind", "(min-width: 500px)");
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| media | string |  | Media query to match |

