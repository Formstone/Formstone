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