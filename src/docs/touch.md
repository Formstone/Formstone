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