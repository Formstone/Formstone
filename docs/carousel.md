# Carousel

A jQuery plugin for simple content carousels.

<!-- HEADER END -->

<!-- NAV START -->

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)

<!-- NAV END -->

<!-- DEMO BUTTON -->

<a name="use"></a>

## Using Carousel


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

Carousel will treat immediate children as items to scroll through. By default, all items will be sized to the width of the carousel.

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

Set the `show` option to a value, or object, at initialization to allow more items to be visible at once. If passing an object keys should be valid `min-width` media query values, including units.

```javascript
$(".target").carousel({
  show: 2
});
```

```javascript
$(".target").carousel({
  show: {
    "740px" : 2,
    "980px" : 3
  }
});
```

Note: Carousel items that don't meet jQuery's `:visible` selector requirements will not be counted as active items. This can be useful when filtering or updating a set of items.


<a name="options"></a>

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-carousel-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoAdvance` | `boolean` | `false` | Flag to auto advance items |
| `autoHeight` | `boolean` | `false` | Flag to adjust carousel height to visible item(s) |
| `autoTime` | `int` | `8000` | Auto advance time |
| `contained` | `boolean` | `true` | Flag for 'overflow: visible' |
| `controls` | `boolean or object` | `true` | Flag to draw controls OR object containing container, next and previous control selectors (Must be fully qualified selectors) |
| `customClass` | `string` | `''` | Class applied to instance |
| `fill` | `boolean` | `false` | Flag to fill viewport if item count is less then show count |
| `infinite` | `boolean` | `false` | Flag for looping items |
| `labels.next` | `string` | `'Next'` | Control text |
| `labels.previous` | `string` | `'Previous'` | Control text |
| `labels.controls` | `string` | `'Carousel {guid} Controls'` | Controls aria label; {guid} replaced with instance GUID |
| `labels.pagination` | `string` | `'Carousel {guid} Pagination'` | Pagination aria label; {guid} replaced with instance GUID |
| `matchHeight` | `boolean` | `false` | Flag to match item heights |
| `matchWidth` | `boolean` | `true` | Flag to match item widths; Requires CSS widths if false |
| `maxWidth` | `string` | `'Infinity'` | Width at which to auto-disable plugin |
| `minWidth` | `string` | `'0'` | Width at which to auto-disable plugin |
| `paged` | `boolean` | `false` | Flag for paged items |
| `pagination` | `boolean or string` | `true` | Flag to draw pagination OR string containing pagination target selector (Must be fully qualified selector) |
| `rtl` | `boolean` | `false` | Right to Left display |
| `show` | `int / object` | `1` | Items visible per page; Object for responsive counts |
| `single` | `boolean` | `false` | Flag to display single item at a time |
| `theme` | `string` | `"fs-light"` | Theme class name |
| `useMargin` | `boolean` | `false` | Use margins instead of css transitions (legacy browser support) |

<hr>
<a name="events"></a>

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `itemClick.carousel` | Item clicked; Triggered on carousel item |
| `update.carousel` | Carousel position updated |

<hr>
<a name="methods"></a>

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

Jump instance of plugin to specific page; Alias of `jumpPage`

```javascript
$(".target").carousel("jump", 1);
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | `int` | &nbsp; | New index |
| `silent` | `boolean` | &nbsp; | Flag to prevent triggering update event |

### jumpItem

Jump instance of plugin to specific item

```javascript
$(".target").carousel("jumpItem", 1);
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | `int` | &nbsp; | New item index |
| `silent` | `boolean` | &nbsp; | Flag to prevent triggering update event |

### jumpPage

Jump instance of plugin to specific page

```javascript
$(".target").carousel("jumpPage", 1);
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | `int` | &nbsp; | New index |
| `silent` | `boolean` | &nbsp; | Flag to prevent triggering update event |

### next

Move to next page; Alias of `nextPage`

```javascript
$(".target").carousel("next");
```

### nextPage

Move to next page

```javascript
$(".target").carousel("nextPage");
```

### previous

Move to the previous page; Alias of `previousPage`

```javascript
$(".target").carousel("previous");
```

### previousPage

Move to the previous page

```javascript
$(".target").carousel("previousPage");
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

<hr>
<a name="css"></a>

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-carousel-element` | `element` | Target element |
| `.fs-carousel` | `element` | Base widget class |
| `.fs-carousel.fs-enabled` | `modifier` | Indicates enabled state |
| `.fs-carousel.fs-rtl` | `modifier` | Indicates right to left display |
| `.fs-carousel.fs-carousel-auto_height` | `modifier` | Indicates auto height sizing |
| `.fs-carousel.fs-carousel-contained` | `modifier` | Indicates overflow: hidden |
| `.fs-carousel.fs-carousel-single` | `modifier` | Indicates single item display |
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

