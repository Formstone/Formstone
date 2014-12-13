### Basic

Switch toggles classes on groups of elements based on configuration options and user interaction. It is up to the developer to utilize the classes.

```javascript
$(".target").switch();
```

```markup
<div class="target" data-switch-target=".toggle">Toggle</div>
<div class="toggle">Target</div>
```

### Groups

Switches can be grouped together for a simple accordions or tabs.

```markup
<h4>Grouped</h4>
<div class="target" data-switch-target=".toggle_1" data-switch-group="group_1">Toggle - 1</div>
<div class="target" data-switch-target=".toggle_2" data-switch-group="group_1">Toggle - 2</div>

<div class="toggle_1">Target - 1</div>
<div class="toggle_2">Target - 2</div>
```

### Max Width

Switches will auto-enable and disable themselves if the `maxWidth` property is set.

```javascript
$(".target").switch({
	maxWidth: "740px"
});
```

```markup
<div class="target" data-switch-target=".toggle">Toggle</div>
<div class="switch">Target</div>
```
