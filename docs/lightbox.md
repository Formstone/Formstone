# Lightbox

A jQuery plugin for simple modals.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)

## Use 

#### Main

```markup
lightbox.js
lightbox.css
```

#### Dependencies

```markup
jQuery
core.js
touch.js
transition.js
```

### Basic

Display images and videos in an overlay:

```javascript
$("a").lightbox();
```

```markup
<a href="one.jpg" title="Image Caption">
	<img src="one_thumb.jpg" alt="">
</a>
```

### Gallery

Link multiple images or videos together with the `data-lightbox-gallery` attribute:

```markup
<a href="one.jpg" title="Image Caption One" data-lightbox-gallery="photo_gallery">
	<img src="one_thumb.jpg" alt="">
</a>
<a href="two.jpg" title="Image Caption Two" data-lightbox-gallery="photo_gallery">
	<img src="two_thumb.jpg" alt="">
</a>
<a href="three.jpg" title="Image Caption Three" data-lightbox-gallery="photo_gallery">
	<img src="three_thumb.jpg" alt="">
</a>
```

<h3>Events</h3>

React to the lightbox by listening for the `open.lightbox` and `close.lightbox` events on the `window`:

```javascript
$(window).on("open.lightbox", function() {
	// ...
}).on("close.lightbox", function() {
	// ...
});
```

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-lightbox-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `customClass` | `string` | `''` | Class applied to instance |
| `extensions` | `array` | `"jpg", "sjpg", "jpeg", "png", "gif"` | Image type extensions |
| `fixed` | `boolean` | `false` | Flag for fixed positioning |
| `formatter` | `function` | `$.noop` | Caption format function |
| `infinite` | `boolean` | `false` | Flag for infinite galleries |
| `labels.close` | `string` | `'Close'` | Close button text |
| `labels.count` | `string` | `'of'` | Gallery count separator text |
| `labels.next` | `string` | `'Next'` | Gallery control text |
| `labels.previous` | `string` | `'Previous'` | Gallery control text |
| `labels.captionClosed` | `string` | `'View Caption'` | Mobile caption toggle text, closed state |
| `labels.captionOpen` | `string` | `'View Caption'` | Mobile caption toggle text, open state |
| `margin` | `int` | `50` | Margin used when sizing (single side) |
| `minHeight` | `int` | `100` | Minimum height of modal |
| `minWidth` | `int` | `100` | Minimum width of modal |
| `mobile` | `boolean` | `false` | Flag to force 'mobile' rendering |
| `retina` | `boolean` | `false` | Flag to use 'retina' sizing (halves natural sizes) |
| `requestKey` | `string` | `'fs-lightbox'` | GET variable for ajax / iframe requests |
| `top` | `int` | `0` | Target top position; over-rides centering |
| `videoRadio` | `number` | `0.5625` | Video height / width ratio (9 / 16 = 0.5625) |
| `videoWidth` | `int` | `800` | Video max width |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `open.lightbox` | Lightbox opened; Triggered on window |
| `close.lightbox` | Lightbox closed; Triggered on window |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### close

Closes active instance.

```javascript
$.lightbox("close");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.lightbox("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").lightbox("destroy");
```

### resize

Resizes lightbox.

```javascript
$.lightbox("resize");
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `height` | `int | false` | &nbsp; | Target height or false to auto size |
| `width` | `int | false` | &nbsp; | Target width or false to auto size |

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-lightbox-element` | `element` | Target elmement |
| `.fs-lightbox` | `element` | Base widget class |
| `.fs-lightbox.fs-lightbox-open` | `modifier` | Indicates open state |
| `.fs-lightbox.fs-lightbox-loading` | `modifier` | Indicates loading state |
| `.fs-lightbox.fs-lightbox-animating` | `modifier` | Indicates animating state |
| `.fs-lightbox.fs-lightbox-mobile` | `modifier` | Indicates mobile display |
| `.fs-lightbox.fs-lightbox-fixed` | `modifier` | Indicates fixed positioning |
| `.fs-lightbox.fs-lightbox-inline` | `modifier` | Indicates inline content |
| `.fs-lightbox.fs-lightbox-iframed` | `modifier` | Indicates iFrame content |
| `.fs-lightbox.fs-lightbox-has_caption` | `modifier` | Indicates caption is present |
| `.fs-lightbox.fs-lightbox-has_controls` | `modifier` | Indicates controls are present |
| `.fs-lightbox-overlay` | `element` | Overlay element |
| `.fs-lightbox-close` | `element` | Close element |
| `.fs-lightbox-loading_icon` | `element` | Loading icon element |
| `.fs-lightbox-container` | `element` | Container element |
| `.fs-lightbox-content` | `element` | Content element |
| `.fs-lightbox-image` | `element` | Image element |
| `.fs-lightbox-video` | `element` | Video element |
| `.fs-lightbox-iframe` | `element` | iFrame element |
| `.fs-lightbox-tools` | `element` | Tools element |
| `.fs-lightbox-meta` | `element` | Meta info element |
| `.fs-lightbox-controls` | `element` | Controls container element |
| `.fs-lightbox-control` | `element` | Control element |
| `.fs-lightbox-control.fs-lightbox-control_previous` | `modifier` | Indicates previous control |
| `.fs-lightbox-control.fs-lightbox-control_next` | `modifier` | Indicates next control |
| `.fs-lightbox-control.fs-lightbox-control_disabled` | `modifier` | Indicates disbaled state |
| `.fs-lightbox-position` | `element` | Position element |
| `.fs-lightbox-position_current` | `element` | Current position element |
| `.fs-lightbox-position_total` | `element` | Total position element |
| `.fs-lightbox-caption` | `element` | Caption element |
| `.fs-lightbox-error` | `element` | Error message element |
| `.fs-lightbox-lock` | `modifier` | Indicates locked state; Applied to body element |

