# Carousel

A jQuery plugin for simple content carousels.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)

## Use 

#### Main

```markup
carousel.js
carousel.css
```

#### Dependencies

```markup
jQuery
core.js
mediaquery.js
touch.js
```

### Basic

Carousel will treat immediate children as items to scroll through. By default, all pages will be sized to the width of the carousel.

```javascript
$(".target").carousel();
```

```markup
<div class="target">
	<div>1</div>
	<div>2</div>
	<div>3</div>
	<div>4</div>
	<div>5</div>
</div>
```

### Show

Set the `show` option to a value, or object, at initialization to allow more pages to be visible at once. If passing an object keys should be valid `min-width` media query values, including units.

```javascript
$(".target").carousel({
	show: 2
});
```

```javascript
$(".target").carousel({
	show: {
		"740px" : 2,
		"960px" : 3
	}
});
```

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-carousel-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoAdvance` | `boolean` | `false` | Flag to auto advance items |
| `autoHeight` | `boolean` | `false` | Flag to adjust carousel height to visible item(s) |
| `autoTime` | `int` | `8000` | Auto advance time |
| `controls` | `boolean | object` | `true` | Flag to draw controls OR object containing next and previous control selectors |
| `customClass` | `string` | `''` | Class applied to instance |
| `fill` | `boolean` | `false` | Flag to fill viewport if item count is less then show count |
| `infinite` | `boolean` | `false` | Flag for looping items |
| `labels.next` | `string` | `'Next'` | Control text |
| `labels.previous` | `string` | `'Previous'` | Control text |
| `matchHeight` | `boolean` | `false` | Flag to match item heights |
| `maxWidth` | `string` | `'Infinity'` | Width at which to auto-disable plugin |
| `minWidth` | `string` | `'0'` | Width at which to auto-disable plugin |
| `paged` | `boolean` | `false` | Flag for paged items |
| `pagination` | `boolean` | `true` | Flag to draw pagination |
| `show` | `int / object` | `1` | Items visible per page; Object for responsive counts |
| `rtl` | `boolean` | `false` | Right to Left display |
| `useMargin` | `boolean` | `false` | Use margins instead of css transitions (legacy browser support) |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `update.carousel` | Carousel position updated |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### disable

Disables instance of plugin

```javascript
$(".target").carousel("disable");
```

### enable

Enables instance of plugin

```javascript
$(".target").carousel("enable");
```

### jump

Jump instance of plugin to specific page

```javascript
$(".target").carousel("jump", 1);
```

### next

Move to next item


#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `object` | &nbsp; | Instance data |

### previous

Move to the previous item

```javascript
$(".target").carousel("previous");
```

### reset

Resets instance after item change

```javascript
$(".target").carousel("reset");
```

### resize

Resizes instance

```javascript
$(".target").carousel("resize");
```

### update

Updates carousel items

```javascript
$(".target").carousel("update", "...");
```

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-carousel-element` | `element` | Target elmement |
| `.fs-carousel` | `element` | Base widget class |
| `.fs-carousel.fs-enabled` | `modifier` | Indicates enabled state |
| `.fs-carousel.fs-rtl` | `modifier` | Indicates right to left display |
| `.fs-carousel.fs-carousel-auto_height` | `modifier` | Indicates auto height sizing |
| `.fs-carousel-viewport` | `element` | Carousel container |
| `.fs-carousel-wrapper` | `element` | Carousel container |
| `.fs-carousel-container` | `element` | Canister container |
| `.fs-carousel-canister` | `element` | Item container |
| `.fs-carousel-canister` | `element` | Item container |
| `.fs-carousel-item` | `element` | Individual item |
| `.fs-carousel-controls` | `element` | Controls container |
| `.fs-carousel-controls.fs-carousel-visible` | `modifier` | Indicates visible state |
| `.fs-carousel-control` | `element` | Control element |
| `.fs-carousel-control.fs-carousel-control_previous` | `modifier` | Indicates previous control |
| `.fs-carousel-control.fs-carousel-control_next` | `modifier` | Indicates next control |
| `.fs-carousel-control.fs-carousel-control_disabled` | `modifier` | Indicates disbaled state |
| `.fs-carousel-pagination` | `element` | Item element |
| `.fs-carousel-pagination.fs-carousel-visible` | `modifier` | Indicates visible state |
| `.fs-carousel-page` | `element` | Pagiantion item element |
| `.fs-carousel-page.fs-carousel-active` | `modifier` | Indicates active state |

