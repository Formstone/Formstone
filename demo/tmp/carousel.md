{"template":"component.html","title":"Carousel","demo":"<style>\n\t.carousel { width: 100%; }\n\t.carousel_item { background: #c65032; color: #fff; font-size: 100px; height: 200px; line-height: 200px; margin: 0; text-align: center; width: 100%; }\n\t.carousel_item:nth-child(even) { background: #393b3f; }\n\n/*\n\t.demo .rolled.single .roller-controls,\n\t.demo .rolled.single .roller-pagination { clear: both; }\n\n\t.demo .rolled .roller-page.active { color: #000; }\n\n\t.demo .rolled.extra .roller-item {\n\t\t-webkit-transition: margin 0.4s ease;\n\t\t\t\ttransition: margin 0.4s ease;\n\t}\n\t.demo .rolled.extra .roller-item.first { margin-left: 200px; }\n*/\n</style>\n\n<script>\n\t$(function() {\n\t\t$(\".carousel\").carousel({\n\t\t\tshow: 2\n\t\t});\n\t});\n</script>\n\n<h4>Basic</h4>\n\n<div class=\"carousel\">\n\t<div class=\"carousel_item\">1</div>\n\t<div class=\"carousel_item\">2</div>\n\t<div class=\"carousel_item\">3</div>\n\t<div class=\"carousel_item\">4</div>\n\t<div class=\"carousel_item\">5</div>\n</div>\n\n<!--\n<br>\n\n<h2>Paged</h2>\n<p>Bt default, Roller will calculate page sizes by determining how many <code>roller-item</code> elements will fit in the <code>roller-viewport</code> at once. You can opt to have Roller stop at every <code>roller-item</code> element by setting the <code>paged</code> option at initialization:</p>\n\n<pre class=\"example\"><code class=\"language-javascript\">$(\".target\").roller({\npaged: true\n});</code></pre>\n\n<h5>Demo</h5>\n<div class=\"rolled\" data-roller-options='{\"paged\":\"true\"}'>\n\t<div class=\"roller-item\">\n\t\t1\n\t</div>\n\t<div class=\"roller-item\">\n\t\t2\n\t</div>\n\t<div class=\"roller-item\">\n\t\t3\n\t</div>\n\t<div class=\"roller-item\">\n\t\t4\n\t</div>\n\t<div class=\"roller-item\">\n\t\t5\n\t</div>\n</div>\n\n<br>\n\n<h2>Auto Width</h2>\n<p>Roller will base all calculations on the item's widths, allowing items with varying widths to exists in the same instance. You can also set Roller to automatically resize all of it's items to the viewport width.</p>\n\n<pre class=\"example\"><code class=\"language-javascript\">$(\".target\").roller({\nautoWidth: true\n});</code></pre>\n\n<h5>Demo</h5>\n<div class=\"rolled\" data-roller-options='{\"autoWidth\":\"true\"}'>\n\t<div class=\"roller-item\">\n\t\t1\n\t</div>\n\t<div class=\"roller-item\">\n\t\t2\n\t</div>\n\t<div class=\"roller-item\">\n\t\t3\n\t</div>\n\t<div class=\"roller-item\">\n\t\t4\n\t</div>\n\t<div class=\"roller-item\">\n\t\t5\n\t</div>\n</div>\n\n<br>\n\n<h2>Single</h2>\n<p>To display a single item at a time:</p>\n\n<pre class=\"example\"><code class=\"language-javascript\">$(\".target\").roller({\nsingle: true\n});</code></pre>\n\n<h5>Demo</h5>\n<div class=\"rolled\" data-roller-options='{\"single\":\"true\"}'>\n\t<div class=\"roller-item\">\n\t\t1\n\t</div>\n\t<div class=\"roller-item\">\n\t\t2\n\t</div>\n\t<div class=\"roller-item\">\n\t\t3\n\t</div>\n\t<div class=\"roller-item\">\n\t\t4\n\t</div>\n\t<div class=\"roller-item\">\n\t\t5\n\t</div>\n</div>\n\n<br>\n\n<h2>Infinite</h2>\n<p>Roller can also infinitely loop instead of having hard start and stop positions:</p>\n\n<pre class=\"example\"><code class=\"language-javascript\">$(\".target\").roller({\ninfinite: true\n});</code></pre>\n\n<h5>Demo</h5>\n<div class=\"rolled\" data-roller-options='{\"infinite\":\"true\"}'>\n\t<div class=\"roller-item\">\n\t\t1\n\t</div>\n\t<div class=\"roller-item\">\n\t\t2\n\t</div>\n\t<div class=\"roller-item\">\n\t\t3\n\t</div>\n\t<div class=\"roller-item\">\n\t\t4\n\t</div>\n\t<div class=\"roller-item\">\n\t\t5\n\t</div>\n</div>\n\n<br>\n\n<h2>Breakpoint</h2>\n<p>By default, each Roller instance will enable itself on all screen sizes. You can specify a different width by setting either the <code>maxWidth</code> or <code>minWidth</code> option on initialization.</p>\n\n<pre class=\"example\"><code class=\"language-javascript\">$(\".target\").roller({\nminWidth: \"740px\"\n});</code></pre>\n\n<h5>Demo</h5>\n<div class=\"rolled\" data-roller-options='{\"minWidth\":\"740px\"}'>\n\t<div class=\"roller-item\">\n\t\t1\n\t</div>\n\t<div class=\"roller-item\">\n\t\t2\n\t</div>\n\t<div class=\"roller-item\">\n\t\t3\n\t</div>\n\t<div class=\"roller-item\">\n\t\t4\n\t</div>\n\t<div class=\"roller-item\">\n\t\t5\n\t</div>\n</div>\n\n<br>\n\n<h2>Extra Width</h2>\n<p>:</p>\n\n<pre class=\"example\"><code class=\"language-javascript\">$(\".target\").roller({\nextraMargin: 200\n});</code></pre>\n\n<h5>Demo</h5>\n<div class=\"rolled extra\" data-roller-options='{\"extraMargin\":200}'>\n\t<div class=\"roller-item\">\n\t\t1\n\t</div>\n\t<div class=\"roller-item\">\n\t\t2\n\t</div>\n\t<div class=\"roller-item\">\n\t\t3\n\t</div>\n\t<div class=\"roller-item\">\n\t\t4\n\t</div>\n\t<div class=\"roller-item\">\n\t\t5\n\t</div>\n</div>\n-->"}

# Carousel

A jQuery plugin for simple content carousels.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)
* [Demo](#demo)

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
| `show` | `int | object` | `1` | Items visible per page; Object for responsive counts |
| `touchPaged` | `boolean` | `true` | Flag for paged touch interaction |
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

