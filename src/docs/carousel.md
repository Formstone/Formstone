### Basic

Carousel will treat immediate children as items to scroll through. By default, all items will be sized to the width of the carousel.

```javascript
$(".target").carousel();
```

```markup
<div class="target">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

### Show

Set the `show` option to a value, or object, at initialization to allow more items to be visible at once. If passing an object keys should be valid `min-width` media query values, including units.

```javascript
$(".target").carousel({
  show: 2
});
```

```javascript
$(".target").carousel({
  show: {
    "740px" : 2,
    "980px" : 3
  }
});
```

Note: Carousel items that don't meet jQuery's `:visible` selector requirements will not be counted as active items. This can be useful when filtering or updating a set of items.