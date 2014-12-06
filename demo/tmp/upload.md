{"template":"component.html","title":"Upload","demo":"<style>\n\t.filelists { margin: 20px 0; }\n\t.filelists h5 { margin: 10px 0 0; }\n\t.filelist { margin: 0; padding: 10px 0; }\n\t.filelist li { background: #fff; border-bottom: 1px solid #eee; font-size: 14px; list-style: none; padding: 5px; }\n\t.filelist li:before { display: none; }\n\t.filelist li .file { color: #333; }\n\t.filelist li .progress { color: #666; float: right; font-size: 10px; text-transform: uppercase; }\n\t.filelist li .delete { color: red; cursor: pointer; float: right; font-size: 10px; text-transform: uppercase; }\n\t.filelist li.complete .progress { color: green; }\n\t.filelist li.error .progress { color: red; }\n</style>\n\n<script>\n\tvar $filequeue,\n\t\t$filelist;\n\n\t$(document).ready(function() {\n\t\t$filequeue = $(\".filelist.queue\");\n\t\t$filelist = $(\".filelist.complete\");\n\n\t\t$(\".upload\").upload({\n\t\t\tmaxSize: 1048576\n\t\t}).on(\"start.upload\", onStart)\n\t\t  .on(\"complete.upload\", onComplete)\n\t\t  .on(\"filestart.upload\", onFileStart)\n\t\t  .on(\"fileprogress.upload\", onFileProgress)\n\t\t  .on(\"filecomplete.upload\", onFileComplete)\n\t\t  .on(\"fileerror.upload\", onFileError);\n\t});\n\n\tfunction onStart(e, files) {\n\t\tconsole.log(\"Start\");\n\t\tvar html = '';\n\t\tfor (var i = 0; i < files.length; i++) {\n\t\t\thtml += '<li data-index=\"' + files[i].index + '\"><span class=\"file\">' + files[i].name + '</span><span class=\"progress\">Queued</span></li>';\n\t\t}\n\t\t$filequeue.append(html);\n\t}\n\n\tfunction onComplete(e) {\n\t\tconsole.log(\"Complete\");\n\t\t// All done!\n\t}\n\n\tfunction onFileStart(e, file) {\n\t\tconsole.log(\"File Start\");\n\t\t$filequeue.find(\"li[data-index=\" + file.index + \"]\")\n\t\t\t\t  .find(\".progress\").text(\"0%\");\n\t}\n\n\tfunction onFileProgress(e, file, percent) {\n\t\tconsole.log(\"File Progress\");\n\t\t$filequeue.find(\"li[data-index=\" + file.index + \"]\")\n\t\t\t\t  .find(\".progress\").text(percent + \"%\");\n\t}\n\n\tfunction onFileComplete(e, file, response) {\n\t\tconsole.log(\"File Complete\");\n\t\tif (response.trim() === \"\" || response.toLowerCase().indexOf(\"error\") > -1) {\n\t\t\t$filequeue.find(\"li[data-index=\" + file.index + \"]\").addClass(\"error\")\n\t\t\t\t\t  .find(\".progress\").text(response.trim());\n\t\t} else {\n\t\t\tvar $target = $filequeue.find(\"li[data-index=\" + file.index + \"]\");\n\t\t\t$target.find(\".file\").text(file.name);\n\t\t\t$target.find(\".progress\").remove();\n\t\t\t$target.appendTo($filelist);\n\t\t}\n\t}\n\n\tfunction onFileError(e, file, error) {\n\t\tconsole.log(\"File Error\");\n\t\t$filequeue.find(\"li[data-index=\" + file.index + \"]\").addClass(\"error\")\n\t\t\t\t  .find(\".progress\").text(\"Error: \" + error);\n\t}\n</script>\n\n<h4>Basic</h4>\n<form action=\"#\" method=\"GET\" class=\"form demo_form\">\n\t<div class=\"upload\" data-upload-options='{\"action\":\"../extra/upload-target.php\"}'></div>\n\n\t<div class=\"filelists\">\n\t\t<h5>Complete</h5>\n\t\t<ol class=\"filelist complete\">\n\t\t</ol>\n\t\t<h5>Queued</h5>\n\t\t<ol class=\"filelist queue\">\n\t\t</ol>\n\t</div>\n</form>"}

# Upload

A jQuery plugin for simple drag and drop uploads.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)
* [Demo](#demo)

## Use 

#### Main

```markup
upload.js
upload.css
```

#### Dependencies

```markup
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

### Uploads

Upload does not store or manipulate uploaded files on the server, it simply facilitates the asynchronous upload process from the front end.

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-upload-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | `string` | &nbsp; | Where to submit uploads |
| `label` | `string` | `'Drag and drop files or click to select'` | Dropzone text |
| `leave` | `string` | `'You have uploads pending, are you sure you want to leave this page?'` | Before leave message |
| `maxQueue` | `int` | `2` | Number of files to simultaneously upload |
| `maxSize` | `int` | `5242880` | Max file size allowed |
| `postData` | `object` | &nbsp; | Extra data to post with upload |
| `postKey` | `string` | `'file'` | Key to upload file as |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `complete` | All uploads are complete |
| `filecomplete` | Specific upload complete |
| `fileerror` | Specific upload error |
| `filestart` | Specific upload starting |
| `fileprogress` | Specific upload progress |
| `start` | Uploads starting |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

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

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-upload` | `element` | Base widget class |
| `.fs-upload.fs-upload-dropping` | `modifier` | Indicates dropping state |
| `.fs-upload-input` | `element` | Masked Input |
| `.fs-upload-dropzone` | `element` | Drop target |

