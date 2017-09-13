# Media Query

A jQuery plugin for responsive media query events.

<!-- HEADER END -->

<!-- NAV START -->

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)

<!-- NAV END -->

<!-- DEMO BUTTON -->

<a name="use"></a>

## Using Media Query


#### Main

```markup
mediaquery.js
```


#### Dependencies

```markup
jQuery
core.js
```

### Basic

Media Query can track global changes to screen size based on an existing grid system. This is useful when many elements need to be resized at any change to the target screen size. Start by configuring the dimensions to be tracked by passing arrays at initialization. These arrays should contain the target width and/or heights to react to:

```javascript
$.mediaquery({
  minWidth     : [ 320, 500, 740, 980, 1220 ],
  maxWidth     : [ 1220, 980, 740, 500, 320 ],
  minHeight    : [ 400, 800 ],
  maxHeight    : [ 800, 400 ]
});
```

### Events

After initializing, simply listen for the `mqchange.mediaquery` event:

```javascript
$(window).on("mqchange.mediaquery", function(e, state) {
  console.log(state.minWidth, state.maxWidth, state.minHeight, state.maxHeight);
});
```

Note: In the example above, the `mqchange.mediaquery` event will be fire twice for each breakpoint. This is because Mediaquery will respond to both the `min-width` and `max-width` changes.

### Binding

Media Query can also bind events to specific media query changes for more fine grain control:

```javascript
$.mediaquery("bind", "mq-key", "(min-width: 740px)", {
  enter: function() {
    ...
  },
  leave: function() {
    ...
  }
});
```

To unbind a Media Query:

```javascript
$.mediaquery("unbind", "mq-key");
```



<a name="options"></a>

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `minWidth` | ` 0 ` | &nbsp; | Array of min-widths |
| `maxWidth` | ` Infinity ` | &nbsp; | Array of max-widths |
| `minHeight` | ` 0 ` | &nbsp; | Array of min-heights |
| `maxHeight` | ` Infinity ` | &nbsp; | Array of max-heights |
| `unit` | `string` | `'px'` | Unit to use when matching widths and heights |

<hr>
<a name="events"></a>

## Events

Events are triggered on the `window`, unless otherwise stated.

| Event | Description |
| --- | --- |
| `mqchange.mediaquery` | Change to a media query match; Triggered on window |

<hr>
<a name="methods"></a>

## Methods

Methods are publicly available, unless otherwise stated.

### bind

Binds callbacks to media query matching.

```javascript
$.mediaquery("bind", "key", "(min-width: 500px)", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `key` | `string` | &nbsp; | Instance key |
| `media` | `string` | &nbsp; | Media query to match |
| `data` | `object` | &nbsp; | Object containing 'enter' and 'leave' callbacks |

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.mediaquery("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### state

Returns the current state.

```javascript
var state = $.mediaquery("state");
```

### unbind

Unbinds all callbacks from media query.

```javascript
$.mediaquery("unbind", "key");
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `key` | `string` | &nbsp; | Instance key |
| `media` | `string` | &nbsp; | Media query to unbind; defaults to all |

