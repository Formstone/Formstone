### Basic

Number will convert input into customizable step interfaces:

```javascript
$("input[type=number]").number();
```

```markup
<input type="number">
```

### Range

Number will automatically detect the minimum, maximum and increment values based on the `min`, `max` and `step` attributes:

```markup
<input type="number" min="2" max="20" step="2">
```