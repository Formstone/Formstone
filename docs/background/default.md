---
title: Background
published: true
visible: true
---

# Background


<!-- Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus.
-->

## Demos

* [Image](#demo-image)
* [Responsive](#demo-responsive)
* [Video](#demo-video)

### Image {#demo-image}

<figure class="example js-editor checkpoint_demo" markdown="1">

```html
<div class="demo_background js-background"
data-background-options='{
  "source": "//spacehold.it/1600x900/1.jpg",
  "alt": "Background Image"
}'>
  <!-- playground-hide -->
  <h1>Sem Dolor</h1>
  <!-- playground-hide-end -->
</div>
```

```js
import { Background, Utils } from 'Formstone';

Utils.ready(() => {
  Background.construct('.js-background');
});
```

```css
@import 'path/to/formstone/dist/formstone.css';/* playground-hide */
.demo_background {
  aspect-ratio: 16/9;
  display: grid;
  align-items: center;
  justify-content: center;
}
.demo_background h1 {
  z-index: 1;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  font-size: 40px;
  line-height: 1;
  padding: 20px 30px;
  text-transform: uppercase;
}/* playground-hide-end */
```

</figure>


### Responsive {#demo-responsive}

<figure class="example js-editor checkpoint_demo" markdown="1">

```html
<div class="demo_background js-background"
data-background-options='{
  "source": {
    "0px": "//spacehold.it/800x450/1.jpg",
    "740px": "//spacehold.it/1600x900/3.jpg",
  },
  "alt": "Background Image"
}'>
  <!-- playground-hide -->
  <h1>Sem Dolor</h1>
  <!-- playground-hide-end -->
</div>
```

```js
import { Background, Utils } from 'Formstone';

Utils.ready(() => {
  Background.construct('.js-background');
});
```

```css
@import 'path/to/formstone/dist/formstone.css';/* playground-hide */
.demo_background {
  aspect-ratio: 16/9;
  display: grid;
  align-items: center;
  justify-content: center;
}
.demo_background h1 {
  z-index: 1;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  font-size: 40px;
  line-height: 1;
  padding: 20px 30px;
  text-transform: uppercase;
}/* playground-hide-end */
```

</figure>


### Video {#demo-video}

<figure class="example js-editor checkpoint_demo" markdown="1">

```html
<div class="demo_background js-background"
data-background-options='{
  "source": {
    "webm": "//spacehold.it/video/video.webm",
    "mp4": "//spacehold.it/video/video.mp4",
    "ogg": "//spacehold.it/video/video.ogv",
    "poster": "//spacehold.it/video/poster.jpg"
  },
  "alt": "Background Video"
}'>
  <!-- playground-hide -->
  <h1>Sem Dolor</h1>
  <!-- playground-hide-end -->
</div>
```

```js
import { Background, Utils } from 'Formstone';

Utils.ready(() => {
  Background.construct('.js-background');
});
```

```css
@import 'path/to/formstone/dist/formstone.css';/* playground-hide */
.demo_background {
  aspect-ratio: 16/9;
  display: grid;
  align-items: center;
  justify-content: center;
}
.demo_background h1 {
  z-index: 1;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  font-size: 40px;
  line-height: 1;
  padding: 20px 30px;
  text-transform: uppercase;
}/* playground-hide-end */
```

</figure>


<!-- LOCAL STYLES -->

<style>
  .demo playground-preview {
    aspect-ratio: 3/2;
  }

  .demo.fs-swap-active playground-preview {
    aspect-ratio: unset;
    height: 70vh;
  }
</style>



Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.

Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

## Options

| Name | Type | Default | Description |
| -- | -- | -- | --|
| `alt` | string | `''` | Image `alt` attribute |
| `autoPlay` | boolean | `true` | Autoplay video |
| `lazy` | boolean | `false` | Lazy load media on scroll |
| `lazyOffset` | string | `'100px'` | Distance from bottom of window |
| `loop` | boolean | `true` | Loop video |
| `mute` | boolean | `true` | Mute video |
| `source` | string OR object | `null` | Source image (string or object) or video (object) |
| `youtubeOptions` | object | `{}` | Options passed to YouTube player |

## Methods

| Name | Parameters | Description |
| -- | -- | -- |
| `contruct(selector, options)` | `selector`: Selector string to target<br>`options`: Object containing instance options | Initializes plugin on target elements |
| `defaults(options)` | `options`: Object containing default options | Sets default options for future initialization |
| `destroy()` |  | Removes plugin and all related data |
| `load(source)` | `source`: String OR object containing source media | Loads source media |
| `mute()` |  | Mutes current video |
| `pause()` |  | Pauses current video |
| `play()` |  | Plays current video |
| `unload()` |  | Unloads current media |
| `unmute()` |  | Unmutes current video |

## Events

| Name | Description |
| -- | --|
| `background:loaded` | Background media loaded |
| `background:ready` | Background media ready |
| `background:play` | Background media is paused |
| `background:pause` | Background media is playing |
| `background:mute` | Background media is muted |
| `background:unmute` | Background media is unmuted |
| `background:error` | Background media error |