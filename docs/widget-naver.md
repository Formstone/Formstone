# Naver

A jQuery plugin for simple responsive navigation.

## Options

Options are set by passing a valid options object at initialization or to the public "defaults" method. You can also set custom options for a specific instance by attaching a data-naver-options attribute containing a properly formatted JSON object to the target element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| customClass | string | '' | Class applied to instance |
| label | boolean | true | Display handle width label |
| labels.closed | string | 'Navigation' | Closed state text |
| labels.open | string | 'Close' | Open state text |
| maxWidth | string | '980px' | Width at which to auto-disable plugin |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| close.naver | Navigation closed |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### close

Closes instance.

```
$(".target").naver("close");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```
$.naver("defaults", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | object | {} | New plugin defaults |

### destroy

Removes plugin instance.

```
$(".target").naver("destroy");
```

### disable

Disables instance.

```
$(".target").naver("disable");
```

### enable

Enables instance.

```
$(".target").naver("enable");
```

### open

Opens instance.

```
$(".target").naver("open");
```

