{"template":"component.html","title":"Carousel","demo":"<style>\n\t.carousel { border-radius: 3px; margin: 20px 0; width: 100%; }\n\n\t.carousel_item { background: #c65032; border-radius: 3px; color: #fff; font-size: 75px; height: 200px; line-height: 200px; margin: 0 0 10px 0; text-align: center; width: 100%; }\n\t.carousel_item:nth-child(even) { background: #393b3f; }\n\n\t.fs-carousel-enabled .carousel_item.fs-carousel-item { margin: 0 10px 0 0; }\n</style>\n\n<script>\n\t$(function() {\n\t\t$(\".carousel\").carousel();\n\t});\n</script>\n\n<h4>Basic</h4>\n<div class=\"carousel\">\n\t<div class=\"carousel_item\">1</div>\n\t<div class=\"carousel_item\">2</div>\n\t<div class=\"carousel_item\">3</div>\n\t<div class=\"carousel_item\">4</div>\n\t<div class=\"carousel_item\">5</div>\n</div>\n\n<h4>Paged</h4>\n<div class=\"carousel\" data-carousel-options='{\"paged\":true,\"show\":2}'>\n\t<div class=\"carousel_item\">1</div>\n\t<div class=\"carousel_item\">2</div>\n\t<div class=\"carousel_item\">3</div>\n\t<div class=\"carousel_item\">4</div>\n\t<div class=\"carousel_item\">5</div>\n</div>\n\n<h4>Uneven</h4>\n<div class=\"carousel\" data-carousel-options='{\"show\":3}'>\n\t<div class=\"carousel_item\">1</div>\n\t<div class=\"carousel_item\">2</div>\n\t<div class=\"carousel_item\">3</div>\n\t<div class=\"carousel_item\">4</div>\n\t<div class=\"carousel_item\">5</div>\n</div>\n\n<h4>Infinite</h4>\n<div class=\"carousel\" data-carousel-options='{\"infinite\":true}'>\n\t<div class=\"carousel_item\">1</div>\n\t<div class=\"carousel_item\">2</div>\n\t<div class=\"carousel_item\">3</div>\n\t<div class=\"carousel_item\">4</div>\n\t<div class=\"carousel_item\">5</div>\n</div>\n\n<h4>No Controls</h4>\n<div class=\"carousel\" data-carousel-options='{\"controls\":false,\"pagination\":false}'>\n\t<div class=\"carousel_item\">1</div>\n\t<div class=\"carousel_item\">2</div>\n\t<div class=\"carousel_item\">3</div>\n\t<div class=\"carousel_item\">4</div>\n\t<div class=\"carousel_item\">5</div>\n</div>\n\n<h4>Breakpoint</h4>\n<div class=\"carousel\" data-carousel-options='{\"minWidth\":\"740px\"}'>\n\t<div class=\"carousel_item\">1</div>\n\t<div class=\"carousel_item\">2</div>\n</div>\n\n<h4>Responsive Counts</h4>\n<div class=\"carousel\" data-carousel-options='{\"show\":{\"740px\":2,\"960px\":3}}'>\n\t<div class=\"carousel_item\">1</div>\n\t<div class=\"carousel_item\">2</div>\n\t<div class=\"carousel_item\">3</div>\n\t<div class=\"carousel_item\">4</div>\n\t<div class=\"carousel_item\">5</div>\n</div>"}

# Carousel

A jQuery plugin for simple content carousels.

* [Use](#use)
* [Demo](#demo)
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
<div class="carousel">
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
| `autoTime` | `int` | `8000` | Auto advance time |
| `controls` | `boolean` | `true` | Flag to draw controls |
| `customClass` | `string` | `''` | Class applied to instance |
| `infinite` | `boolean` | `false` | Flag for looping items |
| `labels.next` | `string` | `'Next'` | Control text |
| `labels.previous` | `string` | `'Previous'` | Control text |
| `maxWidth` | `string` | `'Infinity'` | Width at which to auto-disable plugin |
| `minWidth` | `string` | `'0'` | Width at which to auto-disable plugin |
| `paged` | `boolean` | `false` | Flag for paged items |
| `pagination` | `boolean` | `true` | Flag to draw pagination |
| `show` | `int / object` | `1` | Items visible per page; Object for responsive counts |
| `sized` | `boolean` | `true` | Flag for auto-sizing items |
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

### reset

Resets instance after item change

```javascript
$(".target").carousel("reset");
```

### resize

Resizes each instance

```javascript
$(".target").carousel("resize");
```

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-carousel-element` | `element` | Target elmement |
| `.fs-carousel` | `element` | Base widget class |
| `.fs-upload.fs-upload-dropping` | `modifier` | Indicates dropping state |
| `.fs-carousel-viewport` | `element` | Item container |
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

