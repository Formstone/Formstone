# Sticky

A jQuery plugin for sticky elements.

<!-- HEADER END -->

<!-- NAV START -->

* [Use](#use)
* [Options](#options)
* [Events](#events)

<!-- NAV END -->

<!-- DEMO BUTTON -->

## <a name="use"></a> Using Sticky


#### Main

```markup
sticky.js
```


#### Dependencies

```markup
jQuery
core.js
mediaquery.js
```

### Basic

Checkpoint stuff.



## <a name="options"></a> Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-sticky-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `anchor` | `string` | `'bottom'` | Position of offset anchor; 'top', 'middle', 'bottom' |
| `offset` | `int` | `0` | Element offset for activating animation |
| `reverse` | `boolean` | `false` | Deactivate animation when scrolling back |

<hr>
## <a name="events"></a> Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `update.sticky` | Sticky activated |

