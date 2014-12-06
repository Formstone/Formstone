# Toggle

A jQuery plugin for toggling states.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)

## Use 

#### Main

```markup
toggle.js
```

#### Dependencies

```markup
core.js
mediaquery.js
touch.js
```

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-toggle-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `collapse` | `boolean` | `true` | Allow toggle to collapse it's target |
| `maxWidth` | `string` | `Infinity` | Width at which to auto-disable plugin |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `activate.toggle` | Toggle activated |
| `deactivate.toggle` | Toggle deactivated |
| `enable.toggle` | Toggle enabled |
| `disable.toggle` | Toggle diabled |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### activate

Activate instance.

```javascript
$(".target").toggle("activate");
```

### deactivate

Deactivates instance.

```javascript
$(".target").toggle("deactivate");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.toggle("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").toggle("destroy");
```

### disable

Disables instance.

```javascript
$(".target").toggle("disable");
```

### enable

Enables instance.

```javascript
$(".target").toggle("enable");
```

