# Dropdown

A jQuery plugin for custom select elements.

* [Use](#use)
* [Options](#options)
* [Methods](#methods)
* [CSS](#css)

## Use 

#### Main

```markup
dropdown.js
dropdown.css
```

#### Dependencies

```markup
core.js
touch.js
```

### Basic

To customize a select element, simply apply the plugin to the target element:

```javascript
$("select").dropdown();
```

```markup
<select>
	<option value="1">One</option>
	<option value="2">Two</option>
	<option value="3">Three</option>
</select>
```

### Events

React to changes to the element's value by listening for the standard `change` event:

```javascript
$("select").on("change", function() {
	var value = $(this).val();
});
```

Updated the element's value externally by triggering the standard `change` event:

```javascript
$("select").val(1).trigger("change");
```

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-dropdown-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cover` | `boolean` | `false` | Cover handle with option set |
| `customClass` | `string` | `''` | Class applied to instance |
| `label` | `string` | `''` | Label displayed before selection |
| `external` | `boolean` | `false` | Open options as links in new window |
| `links` | `boolean` | `false` | Open options as links in same window |
| `mobile` | `boolean` | `false` | Force desktop interaction on mobile |
| `trim` | `int` | `0` | &nbsp; |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### close

Closes target instance.

```javascript
$(".target").dropdown("close");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.dropdown("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").dropdown("destroy");
```

### disable

Disables target instance or option.

```javascript
$(".target").dropdown("disable", "1");
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `option` | `string` | `null` | Target option value |

### enable

Enables target instance or option.

```javascript
$(".target").dropdown("enable", "1");
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `option` | `string` | `null` | Target option value |

### open

Opens target instance.

```javascript
$(".target").dropdown("open");
```

### update

Updates instance.

```javascript
$(".target").dropdown("update");
```

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-dropdown` | `element` | Base widget class |
| `.fs-lightbox.fs-lightbox-multiple` | `modifer` | Indicates multi-selected element |
| `.fs-lightbox.fs-lightbox-cover` | `modifer` | Indicates cover positioning |
| `.fs-lightbox.fs-lightbox-bottom` | `modifer` | Indicates bottom positioning |
| `.fs-lightbox.fs-lightbox-disabled` | `modifer` | Indicates disabled state |
| `.fs-lightbox.fs-lightbox-open` | `modifer` | Indicates open state |
| `.fs-lightbox.fs-lightbox-focus` | `modifer` | Indicates focus state |
| `.fs-dropdown-selected` | `element` | Handle item |
| `.fs-dropdown-options` | `element` | Options container |
| `.fs-dropdown-group` | `element` | Option group label |
| `.fs-dropdown-item` | `element` | Option item |
| `.fs-dropdown-item.fs-dropdown-item_placeholder` | `modifier` | Indicates placeholder item |
| `.fs-dropdown-item.fs-dropdown-item_selected` | `modifier` | Indicates selected item |
| `.fs-dropdown-item.fs-dropdown-item_disabled` | `modifier` | Indicates disabled item |

