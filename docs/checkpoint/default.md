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


## Demos

* [Fade](#demo-fade)
* [Zoom In](#demo-zoom-in)
* [Zoom Out](#demo-zoom-out)
* [Flip](#demo-flip)
* [Custom](#demo-custom)

### Fade {#demo-fade}

<figure class="example js-editor checkpoint_demo" markdown="1">

```html
<div class="box js-checkpoint"
  data-checkpoint-animation="fade-in"
  data-checkpoint-offset="20%"
>
  fade-in
</div>

<div class="box js-checkpoint"
  data-checkpoint-animation="fade-up"
>
  fade-up
</div>

<div class="box js-checkpoint"
  data-checkpoint-animation="fade-down"
>
  fade-down
</div>

<div class="box js-checkpoint"
  data-checkpoint-animation="fade-left"
>
  fade-left
</div>

<div class="box js-checkpoint"
  data-checkpoint-animation="fade-right"
>
  fade-right
</div>
```

```js
import { CheckPoint, Utils } from 'Formstone';

Utils.ready(() => {
  CheckPoint.construct('.js-checkpoint', {
    offset: '25%',
    reverse: true,
  });
});
```

```css
.box {
  /* playground-fold */
  background: var(--color-yellow);
  border: var(--border-size) solid var(--color-black);
  border-radius: var(--border-size);
  margin: 0 auto 30vh;
  width: 200px;
  padding: 20px 10px;
  text-align: center;/* playground-fold-end */

}/* playground-hide */

body {
  padding-bottom: 30vh;
}

body::before {
  align-items: center;
  content: 'Scroll Down\A\21E3';
  display: flex;
  height: 105vh;
  justify-content: center;
  text-align: center;
  white-space: pre-wrap;
}
/* playground-hide-end */

```

</figure>


### Zoom In {#demo-zoom-in}

<figure class="example js-editor checkpoint_demo" markdown="1">

```html
<div class="box js-checkpoint"
  data-checkpoint-animation="zoom-in"
  data-checkpoint-offset="20%"
>
  zoom-in
</div>

<div class="box js-checkpoint"
  data-checkpoint-animation="zoom-in-up"
>
  zoom-in-up
</div>

<div class="box js-checkpoint"
  data-checkpoint-animation="zoom-in-down"
>
  zoom-in-down
</div>

<div class="box js-checkpoint"
  data-checkpoint-animation="zoom-in-left"
>
  zoom-in-left
</div>

<div class="box js-checkpoint"
  data-checkpoint-animation="zoom-in-right"
>
  zoom-in-right
</div>
```

```js
import { CheckPoint, Utils } from 'Formstone';

Utils.ready(() => {
  CheckPoint.construct('.js-checkpoint', {
    offset: '25%',
    reverse: true,
  });
});
```

```css
.box {
  /* playground-fold */
  background: var(--color-yellow);
  border: var(--border-size) solid var(--color-black);
  border-radius: var(--border-size);
  margin: 0 auto 30vh;
  width: 200px;
  padding: 20px 10px;
  text-align: center;/* playground-fold-end */

}/* playground-hide */

body {
  padding-bottom: 30vh;
}

body::before {
  align-items: center;
  content: 'Scroll Down\A\21E3';
  display: flex;
  height: 105vh;
  justify-content: center;
  text-align: center;
  white-space: pre-wrap;
}/* playground-hide-end */

```

</figure>


### Zoom Out {#demo-zoom-out}

<figure class="example js-editor checkpoint_demo" markdown="1">

```html
<div class="box js-checkpoint"
  data-checkpoint-animation="zoom-out"
  data-checkpoint-offset="20%"
>
  zoom-out
</div>

<div class="box js-checkpoint"
  data-checkpoint-animation="zoom-out-up"
>
  zoom-out-up
</div>

<div class="box js-checkpoint"
  data-checkpoint-animation="zoom-out-down"
>
  zoom-out-down
</div>

<div class="box js-checkpoint"
  data-checkpoint-animation="zoom-out-left"
>
  zoom-out-left
</div>

<div class="box js-checkpoint"
  data-checkpoint-animation="zoom-out-right"
>
  zoom-in-right
</div>
```

```js
import { CheckPoint, Utils } from 'Formstone';

Utils.ready(() => {
  CheckPoint.construct('.js-checkpoint', {
    offset: '25%',
    reverse: true,
  });
});
```

```css
.box {
  /* playground-fold */
  background: var(--color-yellow);
  border: var(--border-size) solid var(--color-black);
  border-radius: var(--border-size);
  margin: 0 auto 30vh;
  width: 200px;
  padding: 20px 10px;
  text-align: center;/* playground-fold-end */

}/* playground-hide */

body {
  padding-bottom: 30vh;
}

body::before {
  align-items: center;
  content: 'Scroll Down\A\21E3';
  display: flex;
  height: 105vh;
  justify-content: center;
  text-align: center;
  white-space: pre-wrap;
}
/* playground-hide-end */

```

</figure>


### Flip {#demo-flip}

<figure class="example js-editor checkpoint_demo" markdown="1">

```html
<div class="box js-checkpoint"
  data-checkpoint-animation="flip-up"
>
  flip-up
</div>

<div class="box js-checkpoint"
  data-checkpoint-animation="flip-down"
>
  flip-down
</div>

<div class="box js-checkpoint"
  data-checkpoint-animation="flip-left"
>
  flip-left
</div>

<div class="box js-checkpoint"
  data-checkpoint-animation="flip-right"
>
  flip-right
</div>
```

```js
import { CheckPoint, Utils } from 'Formstone';

Utils.ready(() => {
  CheckPoint.construct('.js-checkpoint', {
    offset: '25%',
    reverse: true,
  });
});
```

```css
.box {
  /* playground-fold */
  background: var(--color-yellow);
  border: var(--border-size) solid var(--color-black);
  border-radius: var(--border-size);
  margin: 0 auto 30vh;
  width: 200px;
  padding: 20px 10px;
  text-align: center;/* playground-fold-end */

}/* playground-hide */
body {
  padding-bottom: 30vh;
}

body::before {
  align-items: center;
  content: 'Scroll Down\A\21E3';
  display: flex;
  height: 105vh;
  justify-content: center;
  text-align: center;
  white-space: pre-wrap;
}
/* playground-hide-end */

```

</figure>


### Custom {#demo-custom}

<figure class="example js-editor checkpoint_demo" markdown="1">

```html
<div class="box js-checkpoint"
  data-checkpoint-animation="spinner"
>
  spinner
</div>
```

```js
import { CheckPoint, Utils } from 'Formstone';

Utils.ready(() => {
  CheckPoint.construct('.js-checkpoint', {
    offset: '25%',
    reverse: true,
  });
});
```

```css
.box {
  /* playground-fold */
  background: var(--color-yellow);
  border: var(--border-size) solid var(--color-black);
  border-radius: var(--border-size);
  margin: 0 auto 30vh;
  width: 200px;
  padding: 20px 10px;
  text-align: center;/* playground-fold-end */

}

[data-checkpoint-animation="spinner"] {
  --opacity: 0;
  --transform: translate(0, 100%) scale(0.5) rotate(300deg);
  --duration: 0.5s;
  --ease: cubic-bezier(0.47, 1.64, 0.41, 0.8);

  opacity: var(--opacity);
  transform: var(--transform);
  transition:
    opacity var(--duration) linear,
    transform var(--duration) var(--ease);
}

[data-checkpoint-animation="spinner"].fs-checkpoint-active {
  --opacity: 1;
  --transform: translate(0, 0) scale(1) rotate(0deg);
}/* playground-hide */
body {
  padding-bottom: 30vh;
}

body::before {
  align-items: center;
  content: 'Scroll Down\A\21E3';
  display: flex;
  height: 105vh;
  justify-content: center;
  text-align: center;
  white-space: pre-wrap;
}
/* playground-hide-end */

```

</figure>


<!-- LOCAL STYLES -->

<style>
  .demo playground-preview {
    height: 500px;
  }
  .demo.fs-swap-active playground-preview {
    height: 70vh;
  }
</style>