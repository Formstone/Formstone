### Basic

Checkpoint will apply CSS based animations and trigger events when the target element is scrolled into view.

```javascript
$(".checkpoint").checkpoint();
```

```markup
<div class="checkpoint" data-checkpoint-animation="fade-up">
  ...
</div>
```

### Offset and Intersect

Adjust the point the element becomes visible by setting the `offset` and `intersect` options:

```javascript
$(".checkpoint").checkpoint({
  offset: 100, // distance from intersect position
  intersect: 'center-top' // '[window]-[element]'
});
```

These values can also be set as `data` attributes for more fine grain control:

```markup
<div class="checkpoint" data-checkpoint-animation="zoom-in" data-checkpoint-offset="100" data-checkpoint-intersect="center-top">
  ...
</div>
```

### Container

Use the `data-checkpoint-container` attribute to define a parent element. The animation and events will still be trigger on the target element:

```markup
<div class="container">
  <div class="checkpoint" data-checkpoint-container=".container" data-checkpoint-animation="zoom-in">
    ...
  </div>
</div>
```
