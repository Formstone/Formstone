---
title: Checkpoint
published: true
visible: true
---

# Checkpoint!


<!-- Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.

Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. -->


### Fade

<figure class="js-editor checkpoint_demo" markdown="1">

```html
<div class="demo_checkpoint js-checkpoint"
  data-checkpoint-animation="fade-in"
>
  <code>fade-in</code>
</div>

<div class="demo_checkpoint js-checkpoint"
  data-checkpoint-animation="fade-up"
>
  <code>fade-up</code>
</div>

<div class="demo_checkpoint js-checkpoint"
  data-checkpoint-animation="fade-down"
>
  <code>fade-down</code>
</div>

<div class="demo_checkpoint js-checkpoint"
  data-checkpoint-animation="fade-left"
>
  <code>fade-left</code>
</div>

<div class="demo_checkpoint js-checkpoint"
  data-checkpoint-animation="fade-right"
>
  <code>fade-right</code>
</div>
```

```js
import { CheckPoint, Utils } from 'Formstone';

Utils.ready(() => {
  CheckPoint.construct('.js-checkpoint', {
    intersect: 'middle',
    offset: '500px',
    reverse: true,
  });
});
```

```css
.demo_checkpoint {
  background: blue;
  border-radius: 4px;
  color: white;
  margin-bottom: 30vh;
  padding: 10px;
  text-align: center;
}

/* -------------------- */

body {
  overflow-x: clip;
}

body::before {
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  content: 'Scroll Down';
}

body::after {
  height: 30vh;

  content: '';
  display: block;
}
```

</figure>

<style>
  .checkpoint_demo playground-preview {
    height: 500px;
  }
</style>