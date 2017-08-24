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
