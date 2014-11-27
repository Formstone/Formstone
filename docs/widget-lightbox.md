# Lightbox

A jQuery plugin for simple modals.

* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-lightbox-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| customClass | string | '' | Class applied to instance |
| extensions | array | "jpg", "sjpg", "jpeg", "png", "gif" | Image type extensions |
| fixed | boolean | false | Flag for fixed positioning |
| formatter | function | $.noop | Caption format function |
| labels.close | string | 'Close' | Close button text |
| labels.count | string | 'of' | Gallery count separator text |
| labels.next | string | 'Next' | Gallery control text |
| labels.previous | string | 'Previous' | Gallery control text |
| margin | int | 50 | Margin used when sizing (single side) |
| minHeight | int | 100 | Minimum height of modal |
| minWidth | int | 100 | Minimum width of modal |
| mobile | boolean | false | Flag to force 'mobile' rendering |
| retina | boolean | false | Flag to use 'retina' sizing (halves natural sizes) |
| requestKey | string | 'boxer' | GET variable for ajax / iframe requests |
| top | int | 0 | Target top position; over-rides centering |
| videoRadio | number | 0.5625 | Video height / width ratio (9 / 16 = 0.5625) |
| videoWidth | int | 600 | Video target width |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| open | Lightbox opened; Triggered on window |
| close | Lightbox closed; Triggered on window |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### close

Closes active instance of plugin

```
$.lightbox("close");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```
$.lightbox("defaults", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | object | {} | New plugin defaults |

### destroy

Removes plugin instance.

```
$(".target").lightbox("destroy");
```

### resize

Triggers resize of instance

```
$.lightbox("resize");
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| height | int | false |  | Target height or false to auto size |
| width | int | false |  | Target width or false to auto size |

## CSS

| Class | Type | Description |
| --- | --- | --- |
| .fs-lightbox | element | Base widget class |
| .fs-lightbox.fs-lightbox-open | modifier | Indicates open state |
| .fs-lightbox.fs-lightbox-loading | modifier | Indicates loading state |
| .fs-lightbox.fs-lightbox-animating | modifier | Indicates animating state |
| .fs-lightbox.fs-lightbox-mobile | modifier | Indicates mobile display |
| .fs-lightbox.fs-lightbox-fixed | modifier | Indicates fixed positioning |
| .fs-lightbox.fs-lightbox-inline | modifier | Indicates inline content |
| .fs-lightbox.fs-lightbox-iframed | modifier | Indicates iFrame content |
| .fs-lightbox-lock | modifier | Indicates locked state; Applied to body element |
| .fs-lightbox-overlay | element | Overlay element |
| .fs-lightbox-close | element | Close element |
| .fs-lightbox-loading_icon | element | Loading icon element |
| .fs-lightbox-container | element | Container element |
| .fs-lightbox-content | element | Content element |
| .fs-lightbox-image | element | Image element |
| .fs-lightbox-video | element | Video element |
| .fs-lightbox-iframe | element | iFrame element |
| .fs-lightbox-meta | element | Meta info element |
| .fs-lightbox-control | element | Control element |
| .fs-lightbox-control.fs-lightbox-control_previous | modifier | Indicates previous control |
| .fs-lightbox-control.fs-lightbox-control_next | modifier | Indicates next control |
| .fs-lightbox-control.fs-lightbox-control_disabled | modifier | Indicates disbaled state |
| .fs-lightbox-position | element | Position element |
| .fs-lightbox-position_current | element | Current position element |
| .fs-lightbox-position_total | element | Total position element |
| .fs-lightbox-caption | element | Caption element |
| .fs-lightbox-error | element | Error message element |

