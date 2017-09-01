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

<a name="use"></a>

## Using Viewer


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

Viewer will create a zoomable image based on the child image of it's target:

```javascript
$(".target").viewer();
```

```markup
<div class="target">
  <img src="one.jpg" alt="">
</div>
```

### Basic

Viewer will create a gallery if multiple child images are found:

```javascript
$(".target").viewer();
```

```markup
<div class="target">
  <img src="one.jpg" alt="">
  <img src="two.jpg" alt="">
  <img src="three.jpg" alt="">
</div>
```



<a name="options"></a>

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-viewer-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `controls` | `boolean or object` | `true` | Flag to draw controls OR object containing container, next, previous, zoom_in and zoom_out control selectors (Must be fully qualified selectors) |
| `customClass` | `string` | `''` | Class applied to instance |
| `labels.count` | `string` | `'of'` | Gallery count separator text |
| `labels.next` | `string` | `'Next'` | Gallery control text |
| `labels.previous` | `string` | `'Previous'` | Gallery control text |
| `labels.zoom_in` | `string` | `'Zoom In'` | Image zoom text |
| `labels.zoom_out` | `string` | `'Zoom Out'` | Image zoom text |
| `theme` | `string` | `"fs-light"` | Theme class name |
| `zoomDelta` | `int` | `100` | Max zoom change |
| `zoomEnertia` | `float` | `0.2` | Enertia for zoom |
| `zoomIncrement` | `float` | `0.01` | Increment for zoom buttons |

<hr>
<a name="events"></a>

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `loaded.viewer` | Image loaded |
| `ready.viewer` | Image ready |

<hr>
<a name="methods"></a>

## Methods

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
<a name="css"></a>

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-viewer-element` | `element` | Target elmement |
| `.fs-viewer` | `element` | Base widget class |
| `.fs-viewer-source` | `element` | Source image element |
| `.fs-viewer-wrapper` | `element` | Viewer wrapper |
| `.fs-viewer-viewport` | `element` | Viewer viewport |
| `.fs-viewer-container` | `element` | Image container |
| `.fs-viewer-image` | `element` | Image element |
| `.fs-viewer-controls` | `element` | Controls container |
| `.fs-viewer-control` | `element` | Control element |
| `.fs-viewer-control_previous` | `element` | Previous control |
| `.fs-viewer-control_next` | `element` | Next control |
| `.fs-viewer-control_zoom_in` | `element` | Zoom in control |
| `.fs-viewer-control_zoom_out` | `element` | Zoom out control |

