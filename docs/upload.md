# Upload

A jQuery plugin for simple drag and drop uploads.

<!-- HEADER END -->

<!-- NAV START -->

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)

<!-- NAV END -->

<!-- DEMO BUTTON -->

<a name="use"></a>

## Using Upload


#### Main

```markup
upload.js
upload.css
```


#### Dependencies

```markup
jQuery
core.js
```

### Basic

Upload will create a simple 'drop zone' for file uploads:

```javascript
$(".target").upload({
  action: "upload.php"
});
```

```markup
<div class="target"></div>
```

Note: Older browsers do not support the <a href="http://caniuse.com/#feat=fileapi" target="_blank">File API</a>. Developers will need to provide a proper fallback. Support can be checked in the `Formstone.support` object:

```js
if (Formstone.support.file) {
  ...
}
```

### Form Data

Form Data can be modified before the request is made. The request can also be aborted based on file attributes:

```javascript
$(".target").upload({
  beforeSend: onBeforeSend
});

function onBeforeSend(formData, file) {
  // Cancel request
  if (file.name.indexOf(".jpg") < 0) {
    return false;
  }

  // Modify and return form data
  formdata.append("input_name", "input_value");

  return formData;
}
```

### Abort

Active uploads can be aborted one at a time by passing the file's index, or abort the entire queue by excluding the second parameter:

```javascript
// Abort single file
$(".target").upload("abort", file.index);

// Abort entire queue
$(".target").upload("abort");
```

### Uploads

Upload does not store or manipulate uploaded files on the server, it simply facilitates the asynchronous upload process from the front end.



<a name="options"></a>

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-upload-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `accept` | `string` | &nbsp; | Input accept attribute |
| `action` | `string` | &nbsp; | Where to submit uploads |
| `autoUpload` | `boolean` | `false` | Beging upload when files are dropped |
| `beforeSend` | `function` | &nbsp; | Run before request sent, must return modified formdata or `false` to cancel |
| `chunked` | `boolean` | `false` | Use chunked uploading, if supported |
| `chunkSize` | `int` | `100` | Size to chunk, in kB |
| `customClass` | `string` | `''` | Class applied to instance |
| `dataType` | `string` | `'html'` | Data type of AJAX request |
| `label` | `string` | `'Drag and drop files or click to select'` | Drop target text; `false` to disable |
| `leave` | `string` | `'You have uploads pending, are you sure you want to leave this page?'` | Before leave message |
| `maxConcurrent` | `int` | `2` | Number of files to simultaneously upload |
| `maxFiles` | `int OR boolean` | `false` | Total number of files that can be uploaded; `false` to disable |
| `maxSize` | `int` | `5242880` | Max file size allowed |
| `multiple` | `true` | `true` | Flag to allow mutiple file uploads |
| `postData` | `object` | &nbsp; | Extra data to post with upload |
| `postKey` | `string` | `'file'` | Key to upload file as |
| `theme` | `string` | `"fs-light"` | Theme class name |

<hr>
<a name="events"></a>

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `chunkcomplete` | File chunk complete |
| `chunkstart` | File chunk starting |
| `chunkerror` | File chunk error |
| `complete` | All uploads are complete |
| `filecomplete` | Specific upload complete |
| `filedragenter` | File dragged into target |
| `filedragleave` | File dragged from target |
| `filedragover` | File dragged over target |
| `fileerror` | Specific upload error |
| `fileprogress` | Specific upload progress |
| `filestart` | Specific upload starting |
| `start` | Uploads starting |
| `queued` | Files are queued for upload |

<hr>
<a name="methods"></a>

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### abort

Cancels all active uploads.

```javascript
$(".target").upload("abort");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.upload("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").upload("destroy");
```

### disable

Disables target instance.

```javascript
$(".target").upload("disable");
```

### enable

Enables target instance.

```javascript
$(".target").upload("enable");
```

### start

Starts queued uploads; Use when autoUpload is set to false.

```javascript
$(".target").upload("start");
```

<hr>
<a name="css"></a>

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-upload-element` | `element` | Target elmement |
| `.fs-upload` | `element` | Base widget class |
| `.fs-upload.fs-upload-dropping` | `modifier` | Indicates dropping state |
| `.fs-upload.fs-upload-disabled` | `modifier` | Indicates disabled state |
| `.fs-upload-input` | `element` | Masked Input |
| `.fs-upload-target` | `element` | Drop target |

