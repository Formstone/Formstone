# Formstone

undefined

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### * @example Formstone.Plugin("namespace", { ... });

Factory to register plugin with jQuery.

```
Formstone.Plugin("namespace", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| namespace | string |  | Plugin namespace |
| settings | object |  | Plugin settings |

### defaults

Extends plugin default settings; effects instances created hereafter.

```
$.formstone("defaults", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | object | {} | New plugin defaults |

### destroy

Removes plugin instance.

```
$(".target").formstone("destroy");
```

