# Rubberband

A jQuery plugin for responsive media query events.

* [Options](#options)
* [Events](#events)
* [Methods](#methods)

## Options



| Name | Type | Default | Description |
| --- | --- | --- | --- |
| minWidth |  0  |  | Array of min-widths |
| maxWidth |  Infinity  |  | Array of max-widths |
| minHeight |  0  |  | Array of min-heights |
| maxHeight |  Infinity  |  | Array of max-heights |
| unit | string | 'px' | Unit to use when matching widths and heights |

## Events

| Event | Description |
| --- | --- |
| snap | Change to a media query match |

## Methods

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

### state

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

