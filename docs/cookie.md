# Cookie

A jQuery plugin for simple access to browser cookies.

* [Use](#use)
* [Options](#options)
* [Methods](#methods)

## Use 

#### Main

```markup
cookie.js
```

#### Dependencies

```markup
jQuery
core.js
```

### Basic

To create a new cookie, or update an existing one, simply pass the `key` and `value` as the first and second parameters, respectively:

```javascript
// Set cookie
$.macroon(key, value);
```

To return a cookie's value pass the `key` as the only parameter:

```javascript
// Get Cookie
var value = $.macroon(key);
```

To erase an existing cookie, set it to `null`:

```javascript
// Erase Cookie
$.macroon(key, null);
```

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `domain` | `string` | &nbsp; | Cookie domain |
| `expires` | `int` | `604800000` | Time until cookie expires |
| `path` | `string` | &nbsp; | Cookie path |

## Methods

Methods are publicly available, unless otherwise stated.

### create

Creates a cookie.

```javascript
$.cookie(key, value, options);
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `key` | `string` | &nbsp; | Cookie key |
| `value` | `string` | &nbsp; | Cookie value |
| `options` | `object` | &nbsp; | Options object |

### erase

Deletes a cookie.

```javascript
$.cookie(key, null);
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `key` | `string` | &nbsp; | Cookie key |

### read

Returns a cookie's value, or null.

```javascript
var value = $.cookie(key);
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `key` | `string` | &nbsp; | Cookie key |

