# Pagination

A jQuery plugin for simple pagination.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)

## Use 

#### Main

```markup
pagination.js
pagination.css
```

#### Dependencies

```markup
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

