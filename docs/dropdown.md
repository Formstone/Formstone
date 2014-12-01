# Dropdown

A jQuery plugin for custom select elements.

* [Options](#options)
* [Methods](#methods)
<br class="nav">
## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-dropdown-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| cover | boolean | false | Cover handle with option set |
| customClass | string | '' | Class applied to instance |
| label | string | '' | Label displayed before selection |
| external | boolean | false | Open options as links in new window |
| links | boolean | false | Open options as links in same window |
| mobile | boolean | false | Force desktop interaction on mobile |
| trim | int | 0 |  |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### close

Closes target instance.

```
$(".target").dropdown("close");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```
$.dropdown("defaults", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | object | {} | New plugin defaults |

### destroy

Removes plugin instance.

```
$(".target").dropdown("destroy");
```

### disable

Disables target instance or option.

```
$(".target").dropdown("disable", "1");
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| option | string | null | Target option value |

### enable

Enables target instance or option.

```
$(".target").dropdown("enable", "1");
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| option | string | null | Target option value |

### open

Opens target instance.

```
$(".target").dropdown("open");
```

### update

Updates instance.

```
$(".target").dropdown("update");
```

