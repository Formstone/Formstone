# Checkbox

A jQuery plugin for replacing checkboxes.

* [Use](#use)
* [Options](#options)
* [Methods](#methods)

## Use 

#### Main

```markup
checkbox.js
checkbox.css
```

#### Dependencies

```markup
core.js
touch.js
```

### Basic


## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-checkbox-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `customClass` | `string` | `''` | Class applied to instance |
| `toggle` | `boolean` | `false` | Render 'toggle' styles |
| `labels.on` | `string` | `'ON'` | Label for 'On' position; 'toggle' only |
| `labels.off` | `string` | `'OFF'` | Label for 'Off' position; 'toggle' only |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### disable

Disables target instance

```javascript
$(".target").checkbox("disable");
```

### enable

Enables target instance

```javascript
$(".target").checkbox("enable");
```

