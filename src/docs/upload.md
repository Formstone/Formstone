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

Note: IE9 does not support the <a href="http://caniuse.com/#feat=fileapi" target="_blank">File API</a>. The developer will need to provide a proper fallback. Support can be checked in the `Formstone.support` object:

```js
if (Formstone.support.file) {
	...
}
```

### Uploads

Upload does not store or manipulate uploaded files on the server, it simply facilitates the asynchronous upload process from the front end.