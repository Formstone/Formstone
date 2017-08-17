### Basic

Transition provides a predictable interface for moving to CSS based animations:

```javascript
$(".target").transition(function() {
  ...
}).addClass("visible");
```

### Resolve

Transitions can manually resolved, which will immediately fire the associated callback:

```javascript
if (shouldResolve) {
  $(".target").transition("resolve");
}
```