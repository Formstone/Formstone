{"template":"component.html","title":"Touch","demo":"<style>\n\t.tap,\n\t.box { background: #393b3f; border-radius: 3px; color: #fff; text-align: center; }\n\n\t.tap.active,\n\t.box.active { background: #c65032; }\n\n\t.tap { height: 50px; line-height: 50px; margin: 10px 0; width: 100%; }\n\n\t.container { border: 1px solid #ccc; border-radius: 3px; height: 400px; margin: 20px 0; overflow: hidden; position: relative; width: 100%; }\n\n\t.register { height: 1px; left: 50%; position: absolute; top: 50%; width: 1px; }\n\t.box { height: 100px; line-height: 100px; left: -50px; position: absolute; top: -50px; width: 100px; }\n</style>\n\n<script>\n\t$(function() {\n\t\tvar $targets = $(\".touch\"),\n\t\t\t_minX = 10,\n\t\t\t_minY = 10;\n\n\t\t$targets.each(function() {\n\t\t\tvar $target = $(this),\n\t\t\t\tdata = {\n\t\t\t\t\t$container: $target.parents(\".container\"),\n\t\t\t\t\t$register:  $target.parents(\".register\")\n\t\t\t\t};\n\n\t\t\t$target.data(\"demo\", data);\n\t\t});\n\n\t\t// Tap\n\n\t\t$(\".tap\").touch({\n\t\t\ttap: true\n\t\t}).on(\"tap\", function(e) {\n\t\t\t$(this).toggleClass(\"active\");\n\t\t});\n\n\n\t\t// Pan\n\t\t$(\".pan\").touch({\n\t\t\tpan: true\n\t\t}).on(\"panstart\", function(e) {\n\t\t\tvar $target = $(this),\n\t\t\t\tdata = $target.data(\"demo\"),\n\t\t\t\toffset = data.$register.position();\n\n\t\t\tdata.origX = offset.left;\n\t\t\tdata.origY = offset.top;\n\n\t\t\tdata.diffWidth  = $target.outerWidth() / 2;\n\t\t\tdata.diffHeight = $target.outerHeight() / 2;\n\t\t})\n\t\t.on(\"panend\", function(e) {\n\t\t\t// ...\n\t\t});\n\n\t\t// Bubbling\n\n\t\t$(document).on(\"pan\", \".pan\", function(e) {\n\t\t\tvar $target = $(this),\n\t\t\t\tdata = $target.data(\"demo\"),\n\t\t\t\tx = data.origX + e.deltaX,\n\t\t\t\ty = data.origY + e.deltaY,\n\t\t\t\tminX = _minX + data.diffWidth,\n\t\t\t\tminY = _minY + data.diffHeight,\n\t\t\t\tmaxX = data.$container.outerWidth()  - minX,\n\t\t\t\tmaxY = data.$container.outerHeight() - minY;\n\n\t\t\tif (x < minX) {\n\t\t\t\tx = minX;\n\t\t\t}\n\t\t\tif (x > maxX) {\n\t\t\t\tx = maxX;\n\t\t\t}\n\t\t\tif (y < minY) {\n\t\t\t\ty = minY;\n\t\t\t}\n\t\t\tif (y > maxY) {\n\t\t\t\ty = maxY;\n\t\t\t}\n\n\t\t\tdata.$register.css({\n\t\t\t\tleft: x,\n\t\t\t\ttop:  y\n\t\t\t});\n\t\t});\n\n\t\t// Scale\n\t\t$(\".scale\").touch({\n\t\t\tscale: true\n\t\t}).on(\"scalestart\", function(e) {\n\t\t\tvar $target = $(this),\n\t\t\t\tdata = $target.data(\"demo\"),\n\t\t\t\toffset = $target.position();\n\n\t\t\tdata.origWidth  = $target.outerWidth();\n\t\t\tdata.origHeight = $target.outerHeight();\n\t\t})\n\t\t.on(\"scaleend\", function(e) {\n\t\t\t// ...\n\t\t})\n\t\t.on(\"scale\", function(e) {\n\t\t\tvar $target = $(this),\n\t\t\t\tdata = $target.data(\"demo\")\n\t\t\t\twidth  = data.origWidth  * e.scale,\n\t\t\t\theight = data.origHeight * e.scale,\n\t\t\t\tminWidth  = 50,\n\t\t\t\tminHeight = 50,\n\t\t\t\tmaxH = data.$container.outerHeight() - 20,\n\t\t\t\tmaxW = data.$container.outerWidth()  - 20,\n\t\t\t\tmaxWidth  = (maxH > maxW) ? maxW : maxH,\n\t\t\t\tmaxHeight = (maxH > maxW) ? maxW : maxH;\n\n\t\t\tif (width < minWidth) {\n\t\t\t\twidth = minWidth;\n\t\t\t}\n\t\t\tif (width > maxWidth) {\n\t\t\t\twidth = maxWidth;\n\t\t\t}\n\n\t\t\tif (height < minHeight) {\n\t\t\t\theight = minHeight;\n\t\t\t}\n\t\t\tif (height > maxHeight) {\n\t\t\t\theight = maxHeight;\n\t\t\t}\n\n\t\t\t$target.css({\n\t\t\t\twidth:  width,\n\t\t\t\theight: height,\n\t\t\t\tlineHeight: height + \"px\",\n\t\t\t\tleft: -(width / 2),\n\t\t\t\ttop:  -(height / 2)\n\t\t\t});\n\t\t});\n\n\t\t// Manipulate\n\t\t$(\".manipulate\").touch({\n\t\t\tpan: true,\n\t\t\tscale: true\n\t\t}).on(\"scalestart\", function(e) {\n\t\t\tvar $target = $(this),\n\t\t\t\tdata = $target.data(\"demo\"),\n\t\t\t\toffset = data.$register.position();\n\n\t\t\tdata.origX = offset.left;\n\t\t\tdata.origY = offset.top;\n\n\t\t\tdata.origWidth  = $target.outerWidth();\n\t\t\tdata.origHeight = $target.outerHeight();\n\t\t})\n\t\t.on(\"scaleend\", function(e) {\n\t\t\t// ...\n\t\t})\n\t\t.on(\"scale\", function(e) {\n\t\t\tvar $target = $(this),\n\t\t\t\tdata = $target.data(\"demo\")\n\t\t\t\twidth  = data.origWidth  * e.scale,\n\t\t\t\theight = data.origHeight * e.scale,\n\t\t\t\t// pan\n\t\t\t\tx = data.origX + e.deltaX,\n\t\t\t\ty = data.origY + e.deltaY,\n\t\t\t\tminX = _minX,\n\t\t\t\tminY = _minY,\n\t\t\t\tmaxX = data.$container.outerWidth()  - minX,\n\t\t\t\tmaxY = data.$container.outerHeight() - minY,\n\t\t\t\t// scale\n\t\t\t\tminWidth  = 100,\n\t\t\t\tminHeight = 100,\n\t\t\t\tmaxH = 600,\n\t\t\t\tmaxW = 600;\n\n\t\t\tif (x < minX) {\n\t\t\t\tx = minX;\n\t\t\t}\n\t\t\tif (x > maxX) {\n\t\t\t\tx = maxX;\n\t\t\t}\n\t\t\tif (y < minY) {\n\t\t\t\ty = minY;\n\t\t\t}\n\t\t\tif (y > maxY) {\n\t\t\t\ty = maxY;\n\t\t\t}\n\n\t\t\tdata.$register.css({\n\t\t\t\tleft: x,\n\t\t\t\ttop:  y\n\t\t\t});\n\n\t\t\tif (width < minWidth) {\n\t\t\t\twidth = minWidth;\n\t\t\t}\n\t\t\tif (width > maxWidth) {\n\t\t\t\twidth = maxWidth;\n\t\t\t}\n\n\t\t\tif (height < minHeight) {\n\t\t\t\theight = minHeight;\n\t\t\t}\n\t\t\tif (height > maxHeight) {\n\t\t\t\theight = maxHeight;\n\t\t\t}\n\n\t\t\t$target.css({\n\t\t\t\twidth:  width,\n\t\t\t\theight: height,\n\t\t\t\tlineHeight: height + \"px\",\n\t\t\t\tleft: -(width / 2),\n\t\t\t\ttop:  -(height / 2)\n\t\t\t});\n\t\t});\n\t});\n</script>\n\n<h4>Tap</h4>\n<div class=\"touch tap\">Tap</div>\n\n<h4>Pan</h4>\n<div class=\"container\">\n\t<div class=\"register\">\n\t\t<div class=\"box touch pan\">Pan</div>\n\t</div>\n</div>\n\n<h4>Scale</h4>\n<div class=\"container\">\n\t<div class=\"register\">\n\t\t<div class=\"box touch scale\">Scale</div>\n\t</div>\n</div>\n\n<h4>Manipulate</h4>\n<div class=\"container\">\n\t<div class=\"register\">\n\t\t<div class=\"box touch manipulate\">Scale &amp; Pan</div>\n\t</div>\n</div>"}

# Touch

A jQuery plugin for multi-touch events.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [Demo](#demo)

## Use 

#### Main

```markup
touch.js
```

#### Dependencies

```markup
core.js
```

### Events

Touch normalizes mouse and touch events in the context of a few basic gestures: `tap`, `pan` and `scale`. Events emitted by Touch will contain the following extra properties:

| Key | Description |
| --- | --- |
| `pageX` | Current X position |
| `pageY` | Current Y position |
| `deltaX` | Change in X position |
| `deltaY` | Change in Y position |
| `scale` | Current scale value |

### Tap

Tap creates a basic 'fast click' event. This synthesizes the touch and click events allowing fast mobile UIs without interupting the user's scroll:

```javascript
$(".target").touch({
	tap: true
}).on("tap", function(e) {
	console.log("Tapped");
});
```

Note: `tap` can not be used in conjunction with `pan` or `scale`.

### Pan

Pan can be used for building touch-freindly drag and drop interfaces:

```javascript
$(".target").touch({
	pan: true
}).on("panstart", function(e) {
	console.log("Started panning");
}).on("pan", function(e) {
	console.log("Panning");
}).on("panend", function(e) {
	console.log("Stopped panning");
});
```

### Scale

Scale can be used for building touch-freindly scalable interfaces:

```javascript
$(".target").touch({
	scale: true
}).on("scalestart", function(e) {
	console.log("Started scaling");
}).on("scale", function(e) {
	console.log("Scaling");
}).on("scaleend", function(e) {
	console.log("Stopped scaling");
});
```

Note: `pan` and `scale` can also be used together to create a rich interface.

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-touch-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `pan` | `boolean || object` | `false` | Object to enable |
| `scale` | `boolean` | `false` | True to enable |
| `tap` | `boolean` | `false` | True to enable |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `tap` | 'Fastclick' event; Prevents ghost clicks on mobile |
| `panstart` | Panning started |
| `pan` | Panning |
| `panend` | Panning ended |
| `scalestart` | Scaling started |
| `scale` | Scaling |
| `scaleend` | Scaling ended |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.touch("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").touch("destroy");
```

