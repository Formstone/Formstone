# Touch

A jQuery plugin for multi-touch events.

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

## Using Touch


#### Main

```markup
touch.js
```


#### Dependencies

```markup
jQuery
core.js
```

### Basic

Touch normalizes mouse and touch events in the context of a few basic gestures: `pan`, `swipe` and `scale`. It is up to the developer to utilize the events. Events emitted by Touch will contain the following extra properties:

| Key | Description |
| --- | --- |
| `pageX` | Current X position |
| `pageY` | Current Y position |
| `deltaX` | Change in X position |
| `deltaY` | Change in Y position |
| `scale` | Current scale value |
| `directionX` | Current X movement |
| `directionY` | Current Y movement |

### Pan

Pan can be used for building touch-friendly draggable interfaces:

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

### Swipe

Swipe can be used for building touch-friendly swipable interfaces:

```javascript
$(".target").touch({
  swipe: true
}).on("swipe", function(e) {
  console.log("Swiped");
});
```

### Scale

Scale can be used for building touch-friendly scalable interfaces:

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

Note: `pan`, `swipe` and `scale` can also be used together to create a rich interface.


<a name="options"></a>

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-touch-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `axis` | `string` | `null` | Limit axis for pan and swipe; 'x' or 'y' |
| `pan` | `boolean` | `false` | Pan events |
| `scale` | `boolean` | `false` | Scale events |
| `swipe` | `boolean` | `false` | Swipe events |
| `threshold` | `int` | `10` | Touch threshold for single axis |
| `time` | `int` | `50` | Touch time limit for single axis |

<hr>
<a name="events"></a>

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `panstart` | Panning started |
| `pan` | Panning |
| `panend` | Panning ended |
| `scalestart` | Scaling started |
| `scale` | Scaling |
| `scaleend` | Scaling ended |
| `swipe` | Swipe |

<hr>
<a name="methods"></a>

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

<hr>
<a name="css"></a>

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-touch-element` | `element` | Target Element |

