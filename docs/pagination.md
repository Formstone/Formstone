# Pagination

A jQuery plugin for simple pagination.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)

## Use 

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



## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-pagination-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ajax` | `boolean` | `false` | Flag to disable default click actions |
| `customClass` | `string` | `''` | Class applied to instance |
| `labels.close` | `string` | `'Close'` | Close button text |
| `labels.count` | `string` | `'of'` | Gallery count separator text |
| `labels.next` | `string` | `'Next'` | Gallery control text |
| `labels.previous` | `string` | `'Previous'` | Gallery control text |
| `maxWidth` | `string` | `'980px'` | Width at which to auto-disable plugin |
| `visible` | `int` | `2` | Visible pages before and after current page |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `update.pagination` | Page updated |

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

