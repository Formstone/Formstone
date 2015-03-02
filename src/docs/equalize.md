### Basic

By default, Equalize will set the height of an element's children to the largest of the group:

```javascript
$(".target").equalize();
```

```markup
<div class="target">
	<div>...</div>
	<div>...</div>
	<div>...</div>
</div>
```

### Targets

Specify a valid `target` selector to equalize specific child elements:

```javascript
$(".target").equalize({
	target: ".child"
});
```

```markup
<div class="target">
	<div>
		<p class="child">...</p>
	</div>
	<div>
		<p class="child">...</p>
	</div>
	<div>
		<p class="child">...</p>
	</div>
</div>
```

### Width

Set the `protperty` to width to Equalize the widths of elements, rather than heights:

```javascript
$(".target").equalize({
	property: "width"
});
```