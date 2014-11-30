# Upload

A jQuery plugin for simple drag and drop uploads.

* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)
<br class="nav">
## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-upload-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| action | string |  | Where to submit uploads |
| label | string | 'Drag and drop files or click to select' | Dropzone text |
| leave | string | 'You have uploads pending, are you sure you want to leave this page?' | Before leave message |
| maxQueue | int | 2 | Number of files to simultaneously upload |
| maxSize | int | 5242880 | Max file size allowed |
| postData | object |  | Extra data to post with upload |
| postKey | string | 'file' | Key to upload file as |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| complete | All uploads are complete |
| filecomplete | Specific upload complete |
| fileerror | Specific upload error |
| filestart | Specific upload starting |
| fileprogress | Specific upload progress |
| start | Uploads starting |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### defaults

Extends plugin default settings; effects instances created hereafter.

```
$.upload("defaults", { ... });
```

##### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | object | {} | New plugin defaults |

### destroy

Removes plugin instance.

```
$(".target").upload("destroy");
```

## CSS

| Class | Type | Description |
| --- | --- | --- |
| .fs-upload | element | Base widget class |
| .fs-upload.fs-upload-dropping | modifier | Indicates dropping state |
| .fs-upload-input | element | Masked Input |
| .fs-upload-dropzone | element | Drop target |

