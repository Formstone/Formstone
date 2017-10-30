# Pagination

A jQuery plugin for simple pagination.

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

## Using Pagination


#### Main

```markup
pagination.js
pagination.css
```


#### Dependencies

```markup
jQuery
core.js
mediaquery.js
```

### Basic

Pagination will convert a set of links into a mobile-friendly pagination system:

```javascript
$(".pagination").pagination();
```

```markup
<nav class="pagination">
  <a href="1.html">1</a>
  <a href="2.html">2</a>
  <a href="3.html">3</a>
  <a href="4.html">4</a>
  <a href="5.html">5</a>
</nav>
```



<a name="options"></a>

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-pagination-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ajax` | `boolean` | `false` | Flag to disable default click actions |
| `customClass` | `string` | `''` | Class applied to instance |
| `labels.close` | `string` | `'Close'` | Close button text |
| `labels.count` | `string` | `'of'` | Pagination count separator text |
| `labels.next` | `string` | `'Next'` | Pagination control text |
| `labels.previous` | `string` | `'Previous'` | Pagination control text |
| `labels.select` | `string` | `'Select Page'` | Pagination select title |
| `labels.pagination` | `string` | `'Pagination {guid}'` | Pagination aria label; {guid} replaced with instance GUID |
| `maxWidth` | `string` | `'980px'` | Width at which to auto-disable plugin |
| `theme` | `string` | `"fs-light"` | Theme class name |
| `visible` | `int` | `2` | Visible pages before and after current page |

<hr>
<a name="events"></a>

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `update.pagination` | Page updated |

<hr>
<a name="methods"></a>

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.pagination("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").pagination("destroy");
```

### jump

Jump instance of plugin to specific page

```javascript
$(".target").pagination("jump", 1);
```

<hr>
<a name="css"></a>

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-pagination-element` | `element` | Target elmement |
| `.fs-pagination` | `element` | Base widget class |
| `.fs-pagination.fs-pagination-mobile` | `modifier` | Indicates mobile display |
| `.fs-pagination` | `element` | Pages container |
| `.fs-pagination-page` | `element` | Page element |
| `.fs-pagination-ellipsis` | `element` | Ellipsis element |
| `.fs-pagination-page.fs-pagination-active` | `modifier` | Indicates active page |
| `.fs-pagination-page.fs-pagination-first` | `modifier` | Indicates first page |
| `.fs-pagination-page.fs-pagination-last` | `modifier` | Indicates last page |
| `.fs-pagination-page.fs-pagination-visible` | `modifier` | Indicates visible page |
| `.fs-pagination-control` | `element` | Pagination button |
| `.fs-pagination-control.fs-pagination-control_previous` | `modifier` | Indicates previous control |
| `.fs-pagination-control.fs-pagination-control_next` | `modifier` | Indicates next control |
| `.fs-pagination-position` | `element` | Mobile position indicator |
| `.fs-pagination-select` | `element` | Mobile page dropdown |
| `.fs-pagination-current` | `element` | Current page mobile display |
| `.fs-pagination-total` | `element` | Total pages mobile display |

