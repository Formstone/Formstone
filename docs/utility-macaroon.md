# Macaroon

A jQuery plugin for simple access to browser cookies.

## Options



| Name | Type | Default | Description |
| --- | --- | --- | --- |
| domain | string |  | Cookie domain |
| expires | int | 604800000 | Time until cookie expires |
| path | string |  | Cookie path |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

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

