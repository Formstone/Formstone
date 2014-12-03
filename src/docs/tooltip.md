### Basic

Tooltip will generate a tooltip based on the target element's `data-title` attribute. Tooltip can be configured to open in a specific direction by setting the `direction` key at initialization:

```javascript
$(".target").tooltip({
	direction: "top"
});
```

```markup
<a href="#" data-title="ToolTip Text">Tooltip Target</a>
```

### Follow

Tooltip can be configured to follow the user's mouse:

```javascript
$(".target").tooltip({
	follow: true
});
```

### Match

Tooltip can be configured to match the user's mouse position, relative to the target:

```javascript
$(".target").tooltip({
	match: true
});
```

### Delay

A delay can be set to avoid accidental tooltips:

```javascript
$(".target").tooltip({
	delay: 500
});
```