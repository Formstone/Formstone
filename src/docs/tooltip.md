### Basic

Tooltip will generate a tooltip based on the target element's `data-title` attribute. Tooltip can be configured to open in a specific direction by setting the `direction` key at initialization:

```
$(".target").tooltip({
	direction: "top"
});
```

```
<a href="#" data-title="ToolTip Text">Tooltip Target</a>
```

### Follow

Tooltip can be configured to follow the user's mouse:

```
$(".target").tooltip({
	follow: true
});
```

### Match

Tooltip can be configured to match the user's mouse position, relative to the target:

```
$(".target").tooltip({
	match: true
});
```

### Delay

A delay can be set to avoid accidental tooltips:

```
$(".target").tooltip({
	delay: 500
});
```