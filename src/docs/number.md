### Basic

Number will convert an input into a customizable step interface:

```javascript
$("input[type=number]").number();
```

```markup
<input type="number" pattern="[0-9]*">
```

### Limits

Number will automatically detect the minimum, maximum and increment values based on the `min`, `max` and `step` attributes:

```markup
<input type="number" min="2" max="20" step="2" pattern="[0-9]*">
```