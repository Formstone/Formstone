### Basic

Range will convert an input into a customizable slider interface:

```javascript
$("input[type=range]").range();
```

```markup
<input type="range">
```

### Limits

Range will automatically detect the minimum, maximum and increment values based on the `min`, `max` and `step` attributes:

```markup
<input type="range" min="2" max="20" step="2">
```

### Vertical

Create a vertical slider with the `orient` attribute:

```markup
<input type="range" orient="vertical">
```