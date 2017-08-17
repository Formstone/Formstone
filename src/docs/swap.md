### Basic

Swap toggles classes on groups of elements based on configuration options and user interaction. It is up to the developer to utilize the classes. 

```javascript
$(".target").swap();
```

```markup
<div class="target" data-swap-target=".toggle">Toggle</div>
<div class="toggle">Target</div>
```

### Groups

Swaps can be grouped together for a simple accordions or tabs using the `data-swap-group` attribute.

```markup
<h4>Grouped</h4>
<div class="target" data-swap-target=".toggle_1" data-swap-group="group_1">Toggle - 1</div>
<div class="target" data-swap-target=".toggle_2" data-swap-group="group_1">Toggle - 2</div>

<div class="toggle_1">Target - 1</div>
<div class="toggle_2">Target - 2</div>
```

### Linked

Swaps can be linked together for multiple handles using the `data-swap-linked` attribute.

```markup
<h4>Grouped</h4>
<div class="target" data-swap-target=".toggle_1" data-swap-linked="linked_1">Handle - 1</div>

<div class="toggle_1">Target - 1</div>

<div class="target" data-swap-target=".toggle_1" data-swap-linked="linked_1">Handle - 2</div>
```

### Max Width

Swaps will auto-enable and disable themselves if the `maxWidth` property is set.

```javascript
$(".target").swap({
  maxWidth: "740px"
});
```

```markup
<div class="target" data-swap-target=".toggle">Toggle</div>
<div class="toggle">Target</div>
```
