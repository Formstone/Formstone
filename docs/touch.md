# Touch

A jQuery plugin for multi-touch events.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)

## Use 

#### Main

```markup
touch.js
touch.css
```

#### Dependencies

```markup
core.js
```

### Basic

Touch normalizes mouse and touch events in the context of a few basic gestures: `tap`, `pan` and `scale`. It is up to the developer to utilize the events. Events emitted by Touch will contain the following extra properties:

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

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-touch-element` | `element` | Target Element |

