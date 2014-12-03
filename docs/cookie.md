# Cookie

A jQuery plugin for simple access to browser cookies.

* [Use](#use)
* [Options](#options)
* [Methods](#methods)


## Use 

### Basic

To create a new cookie, or update an existing one, simply pass the `key` and `value` as the first and second parameters, respectively:

```
// Set cookie
$.macroon(key, value);
```

To return a cookie's value pass the `key` as the only parameter:

```
// Get Cookie
var value = $.macroon(key);
```

To erase an existing cookie, set it to `null`:

```
// Erase Cookie
$.macroon(key, null);
```

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| domain | string |  | Cookie domain |
| expires | int | 604800000 | Time until cookie expires |
| path | string |  | Cookie path |

## Methods

Methods are publicly available, unless otherwise stated.

### create

Creates a cookie.

```
$.cookie(key, value, options);
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| key | string |  | Cookie key |
| value | string |  | Cookie value |
| options | object |  | Options object |

### erase

Deletes a cookie.

```
$.cookie(key, null);
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| key | string |  | Cookie key |

### read

Returns a cookie's value, or null.

```
var value = $.cookie(key);
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| key | string |  | Cookie key |

