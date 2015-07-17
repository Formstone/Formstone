# Scrollbar

A jQuery plugin for .

* [Use](#use)
* [Options](#options)
* [Methods](#methods)
* [CSS](#css)

## Use 

#### Main

```markup
scrollbar.js
scrollbar.css
```

#### Dependencies

```markup
jQuery
core.js
```

### Basic

Scrollbar will allow you to customize the visible scrollbar on overflow content.

```javascript
$(".target").scrollbar();
```

```markup
<div class="target">
	<p>...</p>
</div>
```

### Horizontal

```javascript
$(".target").scrollbar({
	horizontal: true
});
```

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-scrollbar-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `customClass` | `string` | `''` | Class applied to instance |
| `duration` | `int` | `0` | Scroll animation length |
| `handleSize` | `int` | `0` | Handle size; 0 to auto size |
| `horizontal` | `boolean` | `false` | Scroll horizontally |
| `trackMargin` | `int` | `0` | &nbsp; |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.scrollbar("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").scrollbar("destroy");
```

### resizeInstance

Resizes layout on instance of plugin

```javascript
$(".target").scrollbar("resize");
```

### scroll

Scrolls instance of plugin to element or position

```javascript
$(".target").scrollbar("scroll", position, duration);
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | `string || int` | `null` | Target element selector or static position |
| `duration` | `int` | `null` | Optional scroll duration |

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-scrollbar-element` | `element` | Target elmement |
| `.fs-scrollbar` | `element` | Base widget class |
| `.fs-scrollbar.fs-scrollbar-horizontal` | `modifier` | Indicates horizontal scrolling |
| `.fs-scrollbar.fs-scrollbar-setup` | `modifier` | Indicates setup state |
| `.fs-scrollbar.fs-scrollbar-active` | `modifier` | Indicates active state |
| `.fs-scrollbar-content` | `element` | Scrolling content |
| `.fs-scrollbar-bar` | `element` | Scrollbar container |
| `.fs-scrollbar-track` | `element` | Scrollbar track container |
| `.fs-scrollbar-handle` | `element` | Scrollbar handle |

