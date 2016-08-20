# Viewer

A jQuery plugin for image exploration.

<!-- HEADER END -->

<!-- NAV START -->

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)

<!-- NAV END -->

<!-- DEMO BUTTON -->

## <a name="use"></a> Using Viewer


#### Main

```markup
viewer.js
viewer.css
```


#### Dependencies

```markup
jQuery
core.js
touch.js
transition.js
```

### Basic



## <a name="options"></a> Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-viewer-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `customClass` | `string` | `''` | Class applied to instance |
| `lazy` | `boolean` | `false` | Lazy load with scroll |
| `lazyEdge` | `int` | `100` | Lazy load edge |
| `labels.count` | `string` | `'of'` | Gallery count separator text |
| `labels.next` | `string` | `'Next'` | Gallery control text |
| `labels.previous` | `string` | `'Previous'` | Gallery control text |
| `labels.zoom_in` | `string` | `'Zoom In'` | Image zoom text |
| `labels.zoom_out` | `string` | `'Zoom Out'` | Image zoom text |
| `theme` | `string` | `"fs-light"` | Theme class name |

<hr>
## <a name="events"></a> Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `loaded.viewer` | Image loaded |
| `ready.viewer` | Image ready |

<hr>
## <a name="methods"></a> Methods

Methods are publicly available to all active instances, unless otherwise stated.

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.viewer("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").viewer("destroy");
```

### load

Loads source image

```javascript
$(".target").viewer("load", "path/to/image.jpg");
```
```javascript
$(".target").viewer("load", ["path/to/image-1.jpg","path/to/image-2.jpg"]);
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | `string OR array` | &nbsp; | Source image (string) or array of images (array) |

### unload

Unloads current image

```javascript
$(".target").viewer("unload");
```

<hr>
## <a name="css"></a> CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-viewer-element` | `element` | Target elmement |
| `.fs-viewer` | `element` | Base widget class |

