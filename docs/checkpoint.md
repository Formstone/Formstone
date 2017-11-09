# Checkpoint

A jQuery plugin for animating visible elements.

<!-- HEADER END -->

<!-- NAV START -->

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)

<!-- NAV END -->

<!-- DEMO BUTTON -->

<a name="use"></a>

## Using Checkpoint


#### Main

```markup
checkpoint.js
checkpoint.css
```


#### Dependencies

```markup
jQuery
core.js
```

### Basic

Checkpoint will apply CSS based animations and trigger events when the target element is scrolled into view.

```javascript
$(".checkpoint").checkpoint();
```

```markup
<div class="checkpoint" data-checkpoint-animation="fade-up">
  ...
</div>
```

### Offset and Intersect

Adjust the point the element becomes visible by setting the `offset` and `intersect` options:

```javascript
$(".checkpoint").checkpoint({
  offset: 100, // distance from intersect position
  intersect: 'center-top' // '[window]-[element]'
});
```

These values can also be set as `data` attributes for more fine grain control:

```markup
<div class="checkpoint" data-checkpoint-animation="zoom-in" data-checkpoint-offset="100" data-checkpoint-intersect="center-top">
  ...
</div>
```

### Container

Use the `data-checkpoint-container` attribute to define a parent element. The animation and events will still be trigger on the target element:

```markup
<div class="container">
  <div class="checkpoint" data-checkpoint-container=".container" data-checkpoint-animation="zoom-in">
    ...
  </div>
</div>
```



<a name="options"></a>

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-checkpoint-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `intersect` | `string` | `'bottom-top'` | Position of intersection |
| `offset` | `int` | `0` | Element offset for activating animation |
| `reverse` | `boolean` | `false` | Deactivate animation when scrolling back |

<hr>
<a name="events"></a>

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `activate.checkpoint` | Checkpoint activated |
| `deactivate.checkpoint` | Checkpoint deactivated |

<hr>
<a name="methods"></a>

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### resize

Updates instance.

```javascript
$(".target").checkpoint("resize");
```

