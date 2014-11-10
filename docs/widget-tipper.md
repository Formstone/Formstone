# Tipper

A jQuery plugin for simple tooltips.

* [Options](#options)
* [Methods](#methods)
* [CSS](#css)

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-tipper-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| delay | int | 0 | Hover delay |
| direction | string | 'top' | Tooltip direction |
| follow | boolean | false | Flag to follow mouse |
| formatter | function | $.noop | Text format function |
| margin | int | 15 | Tooltip margin |
| match | boolean | false | Flag to match mouse position |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### defaults

Extends plugin default settings; effects instances created hereafter.

```
$.tipper("defaults", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | object | {} | New plugin defaults |

### destroy

Removes plugin instance.

```
$(".target").tipper("destroy");
```

## CSS

| Class | Type | Description |
| --- | --- | --- |
| .tipper | element | Base widget class |
| .tipper.tipper-visible | modifier | Inidcates visible state |
| .tipper.tipper-right | modifier | Inidcates right side display |
| .tipper.tipper-left | modifier | Inidcates left side display |
| .tipper.tipper-top | modifier | Inidcates top display |
| .tipper.tipper-bottom | modifier | Inidcates bottom display |
| .tipper-content | element | Tooltip content wrapper |
| .tipper-caret | element | Tooltip caret |

