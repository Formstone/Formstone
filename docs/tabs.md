# Tabs

A jQuery plugin for simple tabs.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)

## Use 

#### Main

```markup
tabs.js
tabs.css
```

#### Dependencies

```markup
core.js
mediaquery.js
switch.js
touch.js
```

### Basic



## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-tabs-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `customClass` | `string` | `''` | Class applied to instance |
| `maxWidth` | `string` | `Infinity` | Width at which to auto-disable plugin |
| `mobileMaxWidth` | `string` | `'740px'` | Width at which to auto-disable mobile styles |
| `vertical` | `boolean` | `false` | Flag to draw vertical tab set |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `update.tabs` | Tab activated |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### activate

Activates instance.

```javascript
$(".target").tabs("open");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.tabs("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").tabs("destroy");
```

### disable

Disables instance.

```javascript
$(".target").tabs("disable");
```

### enable

Enables instance.

```javascript
$(".target").tabs("enable");
```

