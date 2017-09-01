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
```


#### Dependencies

```markup
jQuery
core.js
```

### Basic

Checkpoint stuff.



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

