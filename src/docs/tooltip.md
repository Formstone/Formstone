### Basic

Tooltip will generate a tooltip based on the target element's `data-title` attribute. Tooltip can be configured to open in a specific direction by setting the `direction` key at initialization:

```javascript
$("a").tooltip({
  direction: "top"
});
```

```markup
<a href="#" data-title="ToolTip Text">Tooltip Target</a>
```

<!--
### Follow

Tooltip can be configured to follow the user's mouse:

```javascript
$("a").tooltip({
  follow: true
});
```

### Match

Tooltip can be configured to match the user's mouse position, relative to the target:

```javascript
$("a").tooltip({
  match: true
});
```
-->

### Delay

A delay can be set to avoid accidental tooltips:

```javascript
$("a").tooltip({
  delay: 500
});
```