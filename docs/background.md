# Background

A jQuery plugin for full-frame image and video backgrounds.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)

## Use 

#### Main

```markup
background.js
background.css
```

#### Dependencies

```markup
core.js
transition.js
```

### Basic


## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-background-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoPlay` | `boolean` | `true` | Autoplay video |
| `customClass` | `string` | `''` | Class applied to instance |
| `embedRatio` | `number` | `1.777777` | Video / embed ratio (16/9) |
| `hoverPlay` | `boolean` | `false` | Play video on hover |
| `loop` | `boolean` | `true` | Loop video |
| `mute` | `boolean` | `true` | Mute video |
| `source` | `string | object` | `null` | Source image (string or object) or video (object) or YouTube (object) |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `loaded.background` | Background media loaded |
| `ready.background` | Background media ready |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### load

Loads source media

```javascript
$(".target").background("load", "path/to/image.jpg");
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | `string | object` | &nbsp; | Source image (string) or video (object) or YouTube (object); { source: { poster: <>, video: < or {}>  } } |

### pause

Pauses target video

```javascript
$(".target").background("stop");
```

### play

Plays target video

```javascript
$(".target").background("play");
```

### unload

Unloads current media

```javascript
$(".target").background("unload");
```

