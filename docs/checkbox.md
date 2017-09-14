# Checkbox

A jQuery plugin for replacing checkboxes.

<!-- HEADER END -->

<!-- NAV START -->

* [Use](#use)
* [Options](#options)
* [Methods](#methods)
* [CSS](#css)

<!-- NAV END -->

<!-- DEMO BUTTON -->

<a name="use"></a>

## Using Checkbox


#### Main

```markup
checkbox.js
checkbox.css
```


#### Dependencies

```markup
jQuery
core.js
```

### Basic

Checkbox will automatically detect the input's type and render proper styles.

```javascript
$("input[type=checkbox], input[type=radio]").checkbox();
```

```markup
<fieldset>
  <label for="check_1">Checkbox</label>
  <input type="checkbox" name="check_1" id="check_1" value="on">
</fieldset>
<fieldset>
  <label for="radio_1">Radio</label>
  <input type="radio" name="radio_1" id="radio_1" value="on">
</fieldset>
```

### Toggle

Checkbox can also render a 'toggle' style checkbox.

```javascript
$("input[type=checkbox]").checkbox({
  toggle: true
});
```


<a name="options"></a>

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-checkbox-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `customClass` | `string` | `''` | Class applied to instance |
| `toggle` | `boolean` | `false` | Render 'toggle' styles |
| `labels.on` | `string` | `'ON'` | Label for 'On' position; 'toggle' only |
| `labels.off` | `string` | `'OFF'` | Label for 'Off' position; 'toggle' only |
| `theme` | `string` | `"fs-light"` | Theme class name |

<hr>
<a name="methods"></a>

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

### update

Updates target instance

```javascript
$(".target").checkbox("update");
```

<hr>
<a name="css"></a>

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-checkbox-element` | `element` | Target elmement |
| `.fs-checkbox` | `element` | Base widget class |
| `.fs-checkbox.fs-checkbox-checked` | `modifier` | Indicates checked state |
| `.fs-checkbox.fs-checkbox-radio` | `modifier` | Indicates radio interface |
| `.fs-checkbox.fs-checkbox-toggle` | `modifier` | Indicates toggle interface |
| `.fs-checkbox.fs-checkbox-focus` | `modifier` | Indicates focused state |
| `.fs-checkbox.fs-checkbox-disabled` | `modifier` | Indicates disabled state |
| `.fs-checkbox-label` | `element` | Label element |
| `.fs-checkbox-marker` | `element` | Marker element |
| `.fs-checkbox-flag` | `element` | Flag element |

