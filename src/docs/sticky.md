### Basic

Sticky will apply fixed positioning to an element as the user scrolls past the original vertical offset:

```javascript
$(".sticky").sticky();
```

```markup
<div class="sticky">
  ...
</div>
```

### Offset

Adjust the vertical offset by setting the `offset` option:

```javascript
$(".sticky").sticky({
  offset: 100
});
```

### Container

Use the `data-sticky-container` attribute to define a parent element. The target element will stick to the bottom of the container when completely passed:

```markup
<div class="container">
  <div class="sticky" data-sticky-container=".container">
    ...
  </div>
</div>
```
