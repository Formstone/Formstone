### Basic

Toggle adds and removes classes based on configuration options and user interaction. It is up to the developer to utilize the classes.

```javascript
$(".target").toggle();
```

```markup
<div class="target" data-toggle-target=".toggle">Toggle</div>
<div class="toggle">Target</div>
```

### Groups

Toggles can be grouped together for a simple accordions or tabs.

```markup
<h4>Grouped</h4>
<div class="target" data-toggle-target=".toggle_1" data-toggle-group="group_1">Toggle - 1</div>
<div class="target" data-toggle-target=".toggle_2" data-toggle-group="group_1">Toggle - 2</div>

<div class="toggle_1">Target - 1</div>
<div class="toggle_2">Target - 2</div>
```

### Max Width

Toggles will auto-enable and disable themselves if the `maxWidth` property is set.

```javascript
$(".target").toggle({
	maxWidth: "740px"
});
```

```markup
<div class="target" data-toggle-target=".toggle">Toggle</div>
<div class="toggle">Target</div>
```
