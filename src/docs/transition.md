### Basic

Transition provides a predicatable interface for moving to CSS based animations:

```javascript
$(".target").transition(function() {
	...
}).addClass("visible");
```

### Resolve

Tranistions can manually resolved, which will immediately fire the associated callback:

```javascript
if (shouldResolve) {
	$(".target").transition("resolve");
}
```