{"template":"component.html","title":"Lightbox","demo":"<style>\n\t.gallery { margin: 20px 0; overflow: hidden; }\n\n\t.lightbox_image { border: 1px solid #ccc; border-radius: 3px; display: block; float: left; margin: 0 2% 10px 0; padding: 5px; width: 31.3333%; max-width: 150px; }\n\t.lightbox_image img { border-radius: 3px; width: 100%; }\n\n\t.no-touch .lightbox_image:hover {\n\t\tbox-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n\t}\n\n\t.inline_content { width: 300px; overflow: hidden; padding: 0 20px; }\n\t.inline_content h2 { margin-top: 20px; }\n\n\t.fs-lightbox h3 { font-style: italic; font-size: 16px; margin: 0; padding: 5px 0; }\n</style>\n\n<script>\n\t$(function() {\n\t\t$(\".lightbox\").not(\".lightbox_format\").lightbox();\n\n\t\t$(\".lightbox_format\").lightbox({\n\t\t\tformatter: customFormat\n\t\t});\n\n\t\t$(\".lightbox_object\").click(launchObject);\n\t});\n\n\tfunction customFormat() {\n\t\treturn '<h3>' + this.attr(\"title\") + \"</h3>\";\n\t}\n\n\tfunction launchObject() {\n\t\t$.lightbox( $('<div class=\"inline_content\"><h2>More Content!</h2><p>This was created by jQuery and loaded into the new Lightbox instance.</p></div>') );\n\t}\n</script>\n\n<h4>Basic</h4>\n<div class=\"gallery\">\n\t<a href=\"http://formstone.it/files/demo/nasa-bw-1.jpg\" class=\"lightbox lightbox_image\" title=\"By NASA on The Commons (Apollo-Soyuz) [Public domain], via Wikimedia Commons\">\n\t\t<img src=\"http://formstone.it/files/demo/th_nasa-bw-1.jpg\" alt=\"\">\n\t</a>\n</div>\n\n<h4>Gallery</h4>\n<div class=\"gallery\">\n\t<a href=\"http://formstone.it/files/demo/nasa-bw-1.jpg\" class=\"lightbox lightbox_image\" data-lightbox-gallery=\"gallery\" title=\"By NASA on The Commons (Apollo-Soyuz) [Public domain], via Wikimedia Commons\">\n\t    <img src=\"http://formstone.it/files/demo/th_nasa-bw-1.jpg\" alt=\"\">\n\t</a>\n\t<a href=\"http://formstone.it/files/demo/nasa-bw-2.jpg\" class=\"lightbox lightbox_image\" data-lightbox-gallery=\"gallery\" title=\"By NASA on The Commons (Bumper V-2 Launch) [Public domain], via Wikimedia Commons\">\n\t    <img src=\"http://formstone.it/files/demo/th_nasa-bw-2.jpg\" alt=\"\">\n\t</a>\n\t<a href=\"http://formstone.it/files/demo/nasa-bw-3.jpg\" class=\"lightbox lightbox_image\" data-lightbox-gallery=\"gallery\" title=\"By NASA on The Commons [Public domain], via Wikimedia Commons\">\n\t    <img src=\"http://formstone.it/files/demo/th_nasa-bw-3.jpg\" alt=\"\">\n\t</a>\n</div>\n\n<h4>YouTube &amp; Vimeo Videos</h4>\n<div class=\"gallery\">\n\t<a href=\"//www.youtube.com/embed/zsJpUCWfyPE?rel=0\" class=\"button lightbox\" data-lightbox-gallery=\"video_gallery\" title=\"STS-129 HD Launch\">\n\t\tYouTube Video\n\t</a>\n    <a href=\"//player.vimeo.com/video/15091562\" class=\"button lightbox\" data-lightbox-gallery=\"video_gallery\" title=\"Homemade Spacecraft\">\n\t\tVimeo Video\n\t</a>\n</div>\n\n<h4>Mobile</h4>\n<div class=\"gallery\">\n\t<a href=\"http://formstone.it/files/demo/nasa-bw-1.jpg\" class=\"lightbox lightbox_image\" data-lightbox-gallery=\"gallery_mobile\" data-lightbox-options='{\"mobile\":true}' title=\"By NASA on The Commons (Apollo-Soyuz) [Public domain], via Wikimedia Commons\">\n\t\t<img src=\"http://formstone.it/files/demo/th_nasa-bw-1.jpg\" alt=\"\">\n\t</a>\n\t<a href=\"http://formstone.it/files/demo/nasa-bw-2.jpg\" class=\"lightbox lightbox_image\" data-lightbox-gallery=\"gallery_mobile\" data-lightbox-options='{\"mobile\":true}' title=\"By NASA on The Commons (Bumper V-2 Launch) [Public domain], via Wikimedia Commons\">\n\t    <img src=\"http://formstone.it/files/demo/th_nasa-bw-2.jpg\" alt=\"\">\n\t</a>\n\t<a href=\"http://formstone.it/files/demo/nasa-bw-3.jpg\" class=\"lightbox lightbox_image\" data-lightbox-gallery=\"gallery_mobile\" data-lightbox-options='{\"mobile\":true}' title=\"By NASA on The Commons [Public domain], via Wikimedia Commons\">\n\t    <img src=\"http://formstone.it/files/demo/th_nasa-bw-3.jpg\" alt=\"\">\n\t</a>\n</div>\n\n<h4>Fixed Positioning</h4>\n<div class=\"gallery\">\n\t<a href=\"http://formstone.it/files/demo/nasa-bw-1.jpg\" class=\"lightbox lightbox_image\" data-lightbox-gallery=\"gallery_fixed\" data-lightbox-options='{\"fixed\":true}' title=\"By NASA on The Commons (Apollo-Soyuz) [Public domain], via Wikimedia Commons\">\n\t    <img src=\"http://formstone.it/files/demo/th_nasa-bw-1.jpg\" alt=\"\">\n\t</a>\n\t<a href=\"http://formstone.it/files/demo/nasa-bw-2.jpg\" class=\"lightbox lightbox_image\" data-lightbox-gallery=\"gallery_fixed\" data-lightbox-options='{\"fixed\":true}' title=\"By NASA on The Commons (Bumper V-2 Launch) [Public domain], via Wikimedia Commons\">\n\t    <img src=\"http://formstone.it/files/demo/th_nasa-bw-2.jpg\" alt=\"\">\n\t</a>\n\t<a href=\"http://formstone.it/files/demo/nasa-bw-3.jpg\" class=\"lightbox lightbox_image\" data-lightbox-gallery=\"gallery_fixed\" data-lightbox-options='{\"fixed\":true}' title=\"By NASA on The Commons [Public domain], via Wikimedia Commons\">\n\t    <img src=\"http://formstone.it/files/demo/th_nasa-bw-3.jpg\" alt=\"\">\n\t</a>\n</div>\n\n<h4>Top Positioning</h4>\n<div class=\"gallery\">\n\t<a href=\"http://formstone.it/files/demo/nasa-bw-1.jpg\" class=\"lightbox lightbox_image\" data-lightbox-gallery=\"gallery_top\" data-lightbox-options='{\"top\":25}' title=\"By NASA on The Commons (Apollo-Soyuz) [Public domain], via Wikimedia Commons\">\n\t\t<img src=\"http://formstone.it/files/demo/th_nasa-bw-1.jpg\" alt=\"\">\n\t</a>\n\t<a href=\"http://formstone.it/files/demo/nasa-bw-2.jpg\" class=\"lightbox lightbox_image\" data-lightbox-gallery=\"gallery_top\" data-lightbox-options='{\"top\":25}' title=\"By NASA on The Commons (Bumper V-2 Launch) [Public domain], via Wikimedia Commons\">\n\t    <img src=\"http://formstone.it/files/demo/th_nasa-bw-2.jpg\" alt=\"\">\n\t</a>\n\t<a href=\"http://formstone.it/files/demo/nasa-bw-3.jpg\" class=\"lightbox lightbox_image\" data-lightbox-gallery=\"gallery_top\" data-lightbox-options='{\"top\":25}' title=\"By NASA on The Commons [Public domain], via Wikimedia Commons\">\n\t    <img src=\"http://formstone.it/files/demo/th_nasa-bw-3.jpg\" alt=\"\">\n\t</a>\n</div>\n\n<h4>In-Line Content</h4>\n<div class=\"gallery\">\n\t<a href=\"#hidden_content\" class=\"button lightbox\">Show Hidden Content</a>\n</div>\n<div id=\"hidden_content\" style=\"display: none;\">\n\t<div class=\"inline_content\">\n\t\t<h2>Some Content!</h2>\n\t\t<p>This was hidden on the page and loaded into the new Boxer instance.</p>\n\t</div>\n</div>\n\n<h4>jQuery Objects</h4>\n<div class=\"gallery\">\n\t<button class=\"button lightbox lightbox_object\">Show jQuery Object</button>\n</div>\n\n<h4>iFrame</h4>\n<div class=\"gallery\">\n\t<a href=\"http://www.cnn.com/\" class=\"button lightbox\">View CNN.com</a>\n\t<a href=\"../extra/lightbox-iframe.html\" class=\"button lightbox\">View Local iFrame</a>\n</div>\n\n<h4>Sizing</h4>\n<div class=\"gallery\">\n\t<a href=\"http://www.cnn.com/\" class=\"button lightbox\" data-lightbox-height=\"500\" data-lightbox-width=\"500\">View CNN.com</a>\n</div>\n\n<h4>Caption Formating</h4>\n<div class=\"gallery\">\n\t<a href=\"http://formstone.it/files/demo/nasa-bw-1.jpg\" class=\"lightbox lightbox_image lightbox_format\" title=\"By NASA on The Commons (Apollo-Soyuz) [Public domain], via Wikimedia Commons\">\n\t    <img src=\"http://formstone.it/files/demo/th_nasa-bw-1.jpg\" alt=\"\">\n\t</a>\n</div>\n\n<h4>Retina Support</h4>\n<div class=\"gallery\">\n\t<a href=\"http://formstone.it/files/demo/nasa-bw-retina.jpg\" class=\"lightbox lightbox_image\" data-lightbox-options='{\"retina\":true}' title=\"By Apollo 15 astronaut.Bubba73 at en.wikipedia [Public domain], from Wikimedia Commons\">\n\t\t<img src=\"http://formstone.it/files/demo/th_nasa-bw-retina.jpg\" alt=\"\">\n\t</a>\n</div>"}

# Lightbox

A jQuery plugin for simple modals.

* [Use](#use)
* [Demo](#demo)
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
core.js
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

### Events

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
| `labels.close` | `string` | `'Close'` | Close button text |
| `labels.count` | `string` | `'of'` | Gallery count separator text |
| `labels.next` | `string` | `'Next'` | Gallery control text |
| `labels.previous` | `string` | `'Previous'` | Gallery control text |
| `margin` | `int` | `50` | Margin used when sizing (single side) |
| `minHeight` | `int` | `100` | Minimum height of modal |
| `minWidth` | `int` | `100` | Minimum width of modal |
| `mobile` | `boolean` | `false` | Flag to force 'mobile' rendering |
| `retina` | `boolean` | `false` | Flag to use 'retina' sizing (halves natural sizes) |
| `requestKey` | `string` | `'boxer'` | GET variable for ajax / iframe requests |
| `top` | `int` | `0` | Target top position; over-rides centering |
| `videoRadio` | `number` | `0.5625` | Video height / width ratio (9 / 16 = 0.5625) |
| `videoWidth` | `int` | `600` | Video target width |

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

### resizeLightbox

Triggers resize of instance.



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
| `.fs-lightbox-lock` | `modifier` | Indicates locked state; Applied to body element |
| `.fs-lightbox-overlay` | `element` | Overlay element |
| `.fs-lightbox-close` | `element` | Close element |
| `.fs-lightbox-loading_icon` | `element` | Loading icon element |
| `.fs-lightbox-container` | `element` | Container element |
| `.fs-lightbox-content` | `element` | Content element |
| `.fs-lightbox-image` | `element` | Image element |
| `.fs-lightbox-video` | `element` | Video element |
| `.fs-lightbox-iframe` | `element` | iFrame element |
| `.fs-lightbox-meta` | `element` | Meta info element |
| `.fs-lightbox-control` | `element` | Control element |
| `.fs-lightbox-control.fs-lightbox-control_previous` | `modifier` | Indicates previous control |
| `.fs-lightbox-control.fs-lightbox-control_next` | `modifier` | Indicates next control |
| `.fs-lightbox-control.fs-lightbox-control_disabled` | `modifier` | Indicates disbaled state |
| `.fs-lightbox-position` | `element` | Position element |
| `.fs-lightbox-position_current` | `element` | Current position element |
| `.fs-lightbox-position_total` | `element` | Total position element |
| `.fs-lightbox-caption` | `element` | Caption element |
| `.fs-lightbox-error` | `element` | Error message element |

