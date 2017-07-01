# Sticky

A jQuery plugin for sticky elements.

<!-- HEADER END -->

<!-- NAV START -->

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)

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

Sticky stuff.



## <a name="options"></a> Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-sticky-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `customClass` | `string` | `''` | Class applied to instance |
| `maxWidth` | `string` | `Infinity` | Width at which to auto-disable plugin |
| `mobileMaxWidth` | `string` | `'740px'` | Width at which to auto-disable mobile styles |
| `theme` | `string` | `"fs-light"` | Theme class name |

<hr>
## <a name="events"></a> Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `update.sticky` | Sticky activated |

<hr>
## <a name="methods"></a> Methods

Methods are publicly available to all active instances, unless otherwise stated.

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.sticky("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").sticky("destroy");
```

<hr>
## <a name="css"></a> CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-sticky-element` | `element` | Target elmement |
| `.fs-sticky-clone` | `element` | Cloned elemtn |
| `.fs-sticky.fs-sticky-stuck` | `modifier` | Indicates stuck state |
| `.fs-sticky-clone.fs-sticky-stuck` | `modifier` | Indicates stuck state |

