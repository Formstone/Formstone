# Macaroon

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



| Name | Type | Default | Description |
| --- | --- | --- | --- |
| domain | string |  | Cookie domain |
| expires | int | 604800000 | Time until cookie expires |
| path | string |  | Cookie path |

## Methods

### create

Creates a cookie.

```
$.macaroon(key, value, options);
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| key | string |  | Cookie key |
| value | string |  | Cookie value |
| options | object |  | Options object |

### defaults

Extends plugin default settings; effects instances created hereafter.

```
$.macaroon("defaults", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | object | {} | New plugin defaults |

### destroy

Removes plugin instance.

```
$(".target").macaroon("destroy");
```

### erase

Deletes a cookie.

```
$.macaroon(key, null);
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| key | string |  | Cookie key |

### read

Returns a cookie's value, or null.

```
var value = $.macaroon(key);
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| key | string |  | Cookie key |

