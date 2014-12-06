{"template":"component.html","title":"Touch","demo":"<style>\nhtml, body {\n\theight: 200%;\n}\n.panit,\n.touchit,\n.scaleit,\n.panscaleit {\n\t-ms-touch-action: none;\n\ttouch-action: none;\n}\n.panit {\n\theight: 50px;\n\twidth:  50px;\n\tposition: absolute;\n\ttop:  50px;\n\tleft: 50px;\n\tbackground: red;\n}\n.tapit {\n\tbackground: green;\n\theight: 20px;\n\twidth:  200px;\n\tmargin: 250px auto;\n}\n.tapit.active {\n\tbackground: blue;\n}\n.scaleit {\n\theight: 1px;\n\twidth:  1px;\n\tposition: absolute;\n\ttop:  150px;\n\tleft: 150px;\n}\n.scaleit_box {\n\theight: 200px;\n\twidth:  200px;\n\tposition: absolute;\n\ttop:  -100px;\n\tleft: -100px;\n\tbackground: purple;\n}\n.panscaleit {\n\theight: 1px;\n\twidth:  1px;\n\tposition: absolute;\n\ttop:  250px;\n\tleft: 100px;\n}\n.panscaleit_box {\n\theight: 200px;\n\twidth:  200px;\n\tposition: absolute;\n\ttop:  -100px;\n\tleft: -100px;\n\tbackground: yellow;\n}\n</style>\n\n<script>\n$(document).ready(function() {\n\tvar origX = 0,\n\t\torigY = 0,\n\t\tdiffX = 0,\n\t\tdiffY = 0,\n\t\tminX = 10,\n\t\tmaxX = 200\n\t\tminY = 10,\n\t\tmaxY = 200,\n\t\tsDiffX = 0,\n\t\tsDiffY = 0,\n\t\tsOrigH = 0,\n\t\tsOrigW = 0,\n\t\tpsDiffX = 0,\n\t\tpsDiffY = 0,\n\t\tpsOrigH = 0,\n\t\tpsOrigW = 0;\n\t// Pan\n\tvar $panit = $(\".panit\");\n\t$panit.touch({\n\t\tpan: true\n\t}).on(\"panstart.panit\", function(e) {\n\t\tlog(\"pan start\");\n\t\tvar offset = $(this).offset();\n\t\tdiffX = offset.left - e.pageX;\n\t\tdiffY = offset.top  - e.pageY;\n\t\torigX = offset.left;\n\t\torigY = offset.top;\n\t})\n\t.on(\"panend.panit\", function(e) {\n\t\tlog(\"pan end\");\n\t});\n\t// Bubbling\n\t$(document).on(\"pan.panit\", \".panit\", function(e) {\n\t\tlog(\"pan\");\n\t\tvar data = e.data,\n\t\t\tx = origX + e.deltaX, //e.pageX + diffX,\n\t\t\ty = origY + e.deltaY; //e.pageY + diffY;\n\t\tif (x < minX) {\n\t\t\tx = minX;\n\t\t}\n\t\tif (x > maxX) {\n\t\t\tx = maxX;\n\t\t}\n\t\tif (y < minY) {\n\t\t\ty = minY;\n\t\t}\n\t\tif (y > maxY) {\n\t\t\ty = maxY;\n\t\t}\n\t\tlog(x, y);\n\t\t$(this).css({\n\t\t\tleft: x,\n\t\t\ttop: y\n\t\t})\n\t});\n\t// Tap\n\tvar $tapit = $(\".tapit\");\n\t$tapit.touch({\n\t\ttap: true\n\t}).on(\"tap.tapit\", function(e) {\n\t\tlog(\"tap\");\n\t\t$tapit.toggleClass(\"active\");\n\t});\n\t// Scale\n\tvar $scaleit = $(\".scaleit\");\n\t$scaleit.touch({\n\t\tscale: true\n\t}).on(\"scalestart.scaleit\", function(e) {\n\t\tlog(\"scale start\");\n\t\tvar offset = $scaleit.offset();\n\t\tsDiffX = offset.left - e.pageX;\n\t\tsDiffY = offset.top  - e.pageY;\n\t\tsOrigH = $(\".scaleit_box\").outerHeight();\n\t\tsOrigW = $(\".scaleit_box\").outerWidth();\n\t})\n\t.on(\"scaleend.scaleit\", function(e) {\n\t\tlog(\"scale end\");\n\t})\n\t.on(\"scale.scaleit\", function(e) {\n\t\tlog(\"scale\");\n\t\tvar w = sOrigW * e.scale,\n\t\t\th = sOrigH * e.scale;\n\t\tif (w < 50) {\n\t\t\tw = 50;\n\t\t}\n\t\tif (w > 300) {\n\t\t\tw = 300;\n\t\t}\n\t\tif (h < 50) {\n\t\t\th = 50;\n\t\t}\n\t\tif (h > 300) {\n\t\t\th = 300;\n\t\t}\n\t\tvar x = e.pageX + sDiffX,\n\t\t\ty = e.pageY + sDiffY;\n\t\tlog(x, y, w, h);\n/*\n\t\t$scaleit.css({\n\t\t\tleft: x,\n\t\t\ttop: y\n\t\t});\n*/\n\t\t$(\".scaleit_box\").css({\n\t\t\theight: h,\n\t\t\twidth: w,\n\t\t\tleft: -(w / 2),\n\t\t\ttop: -(h / 2)\n\t\t});\n\t});\n\t// Pan+Scale\n\tvar $panscaleit = $(\".panscaleit\");\n\t$panscaleit.touch({\n\t\tpan: true,\n\t\tscale: true\n\t}).on(\"scalestart.panscaleit\", function(e) {\n\t\tlog(\"panscale start\");\n\t\tvar offset = $panscaleit.offset();\n\t\tpsDiffX = offset.left - e.pageX;\n\t\tpsDiffY = offset.top  - e.pageY;\n\t\tpsOrigH = $(\".panscaleit_box\").outerHeight();\n\t\tpsOrigW = $(\".panscaleit_box\").outerWidth();\n\t})\n\t.on(\"scaleend.panscaleit\", function(e) {\n\t\tlog(\"panscale end\");\n\t})\n\t.on(\"scale.panscaleit\", function(e) {\n\t\tlog(\"panscale\");\n\t\tvar w = psOrigW * e.scale,\n\t\t\th = psOrigH * e.scale;\n\t\tif (w < 50) {\n\t\t\tw = 50;\n\t\t}\n\t\tif (w > 300) {\n\t\t\tw = 300;\n\t\t}\n\t\tif (h < 50) {\n\t\t\th = 50;\n\t\t}\n\t\tif (h > 300) {\n\t\t\th = 300;\n\t\t}\n\t\tvar x = e.pageX + psDiffX,\n\t\t\ty = e.pageY + psDiffY;\n\t\tlog(x, y, w, h);\n\t\t$panscaleit.css({\n\t\t\tleft: x,\n\t\t\ttop: y\n\t\t});\n\t\t$(\".panscaleit_box\").css({\n\t\t\theight: h,\n\t\t\twidth: w,\n\t\t\tleft: -(w / 2),\n\t\t\ttop: -(h / 2)\n\t\t});\n\t});\n\tfunction log() {\n\t\t//console.log(Array.prototype.slice.call(arguments, 0));\n\t}\n\n\t$(window).on(\"touchstart\", function(e) {\n\t\tconsole.log(\"Start\", e.originalEvent.defaultPrevented);\n\t}).on(\"touchmove\", function(e) {\n\t\tconsole.log(\"Move\", e.originalEvent.defaultPrevented);\n\t});\n});\n</script>\n\n<div class=\"panit\"></div>\n\n<div class=\"tapit\"></div>\n\n<div class=\"scaleit\"><div class=\"scaleit_box\"></div></div>\n\n<div class=\"panscaleit\"><div class=\"panscaleit_box\"></div></div>"}

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

