---
title: Background
published: true
visible: true
---

# Background

Full-frame, responsive image and video backgrounds.

<div class="docs_menu" markdown="1">

* [Demos](#demo)
* [Options](#options)
* [Methods](#methods)
* [Events](#events)
* [Styles](#styles)

</div>


<hr class="divider">


## Demos {#demo}

<div class="docs_menu" markdown="1">

* [Image](#demo-image)
* [Responsive](#demo-responsive)
* [Video](#demo-video)
* [YouTube](#demo-youtube)

</div>

### Image {#demo-image}

Create a new Background by passing the source image URL at initialization.

<figure class="demo js-editor" markdown="1">

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

Create a responsive-friendly Background by defining key/value pairs containing the min-width and image URLs.

<figure class="demo js-editor" markdown="1">

```html
<div class="demo_background js-background"
data-background-options='{
  "source": {
    "0": "//spacehold.it/800x450/1.jpg",
    "740": "//spacehold.it/1600x900/3.jpg"
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

Create a video Background by defining proper browser-specific source video URLs, as well as a poster image URL.

<figure class="demo js-editor" markdown="1">

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


### YouTube {#demo-youtube}

Create a YouTube Background by defining the `youtube` URL.

<figure class="demo js-editor" markdown="1">

```html
<div class="demo_background js-background"
data-background-options='{
  "source": {
    "youtube": "https://www.youtube.com/watch?v=ScMzIvxBSi4"
  }
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


<hr class="divider">

<div class="docs" markdown="1">


## Options {#options}

Set instance options by passing a valid object at initialization, or to the public [`.defaults()`](#method-defaults) method. Custom options for a specific instance can also be set by attaching a `data-background-options` attribute containing a properly formatted JSON object to the target elment.

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `alt` | `string` | `''` | Image `alt` attribute |
| `autoPlay` | `boolean` | `true` | Autoplay video |
| `lazy` | `boolean` | `false` | Lazy load media on scroll |
| `lazyOffset` | `string` | `'100px'` | Distance from bottom of window |
| `loop` | `boolean` | `true` | Loop video |
| `mute` | `boolean` | `true` | Mute video |
| `source` | `string | object` | `null` | Source image (string or object) or video (object) |
| `youtubeOptions` | `object` | `{}` | Options passed to YouTube player |


<hr class="divider">


## Methods {#methods}

Methods are publicly available to all active instances, unless otherwise stated.

| Name | Description |
| -- | -- |
| [`.construct()`](#method-construct) | Initializes plugin on target elements |
| [`.defaults()`](#method-defaults) | Sets default options for future initialization |
| [`.destroy()`](#method-destroy) | Removes plugin and all related data |
| [`.load()`](#method-load) | Loads new source media |
| [`.mute()`](#method-mute) | Mutes current video |
| [`.pause()`](#method-pause) | Pauses current video |
| [`.play()`](#method-play) | Plays current video |
| [`.unload()`](#method-unload) | Unloads current media |
| [`.unmute()`](#method-unmute) | Unmutes current video |


### .construct() {#method-construct}

Initializes plugin on target elements.

#### Parameters

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `selector` | `string` (required) | `''` | Selector string to target |
| `options` | `object` (optional) | `{}` | Object containing [instance options](#options) |

#### Examples

<figure class="example js-example" markdown="1">
```js
let targets = Background.construct('.js-background');
```
</figure>

<figure class="example js-example" markdown="1">
```js
let targets = Background.construct('.js-background', {
  lazy: true,
  lazyOffset: '10vh'
});
```
</figure>


### .defaults() {#method-defaults}

Sets default options for future initialization.

#### Parameters

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `options` | `object` (required) | `{}` | Object containing default options |

#### Examples

<figure class="example js-example" markdown="1">
```js
Background.defaults({
  lazy: true,
  lazyOffset: '10vh'
});
```
</figure>


### .destroy() {#method-destroy}

Removes plugin and all related data.

#### Examples

<figure class="example js-example" markdown="1">
```js
el.Background.destroy();
```
</figure>


### .load() {#method-load}

Loads new source media.

#### Parameters

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `source` | `string | object` (required) | `null` | Source image (string or object) or video (object) |

#### Examples

<figure class="example js-example" markdown="1">
```js
el.Background.load('/path/to/image.jpg');
```
</figure>

<figure class="example js-example" markdown="1">
```js
el.Background.load({
  0: '/path/to/small-image.jpg',
  740: '/path/to/large-image.jpg'
});
```
</figure>

<figure class="example js-example" markdown="1">
```js
el.Background.load({
  mp4: '/path/to/video.mp4',
  poster: '/path/to/poster.jpg'
});
```
</figure>

<figure class="example js-example" markdown="1">
```js
el.Background.load({
  youtube: 'https://www.youtube.com/watch?v=VIDEO_ID',
});
```
</figure>


### .mute() {#method-mute}

Mutes current video.

#### Examples

<figure class="example js-example" markdown="1">
```js
el.Background.mute();
```
</figure>


### .pause() {#method-pause}

Pauses current video.

#### Examples

<figure class="example js-example" markdown="1">
```js
el.Background.pause();
```
</figure>


### .play() {#method-play}

Plays current video.

#### Examples

<figure class="example js-example" markdown="1">
```js
el.Background.play();
```
</figure>


### .unload() {#method-unload}

Unloads current media.

#### Examples

<figure class="example js-example" markdown="1">
```js
el.Background.unload();
```
</figure>


### .unmute() {#method-unmute}

Unmutes current video.

#### Examples

<figure class="example js-example" markdown="1">
```js
el.Background.unmute();
```
</figure>



<!-- ```js
// Javascript
import { Background, Utils } from 'Formstone';

let targets = Background.construct('.js-background', {
  // ...
});

Utils.iterate(targets, (el) => {
  el.Background && el.Background.load('new-source.jpg');
});

Utils.on(targets, 'background:loaded', (e) => {
  // ...
});


// jQuery

let $targets = $('.js-background').background({
  // ...
});

$targets.background('load', 'new-source.jpg');

$targets.on('background:loaded', (e) => {
  // ...
});
``` -->


<hr class="divider">


## Events {#events}

Events are triggered on the target instance's element, unless otherwise stated.

| Name | Description |
| -- | -- |
| `background:loaded` | Background media loaded |
| `background:ready` | Background media ready |
| `background:play` | Background media is paused |
| `background:pause` | Background media is playing |
| `background:mute` | Background media is muted |
| `background:unmute` | Background media is unmuted |
| `background:error` | Background media error |


<hr class="divider">


## Styles {#styles}

CSS custom properties are used to modify default styles.

| Property | Default | Description |
| -- | -- | -- |
| `--fs-background-duration` | `0.15s` | Transition duration |

Classes allow deeper customization and indicate the current state of a specific instance.

| Classname | Type | Description |
| -- | -- | -- |
| `.fs-background` | `element` | Target elmement |
| `.fs-background-container` | `element` | Media container element |
| `.fs-background-media` | `element` | Media element |
| `.fs-background-image` | `modifier` | Indicates image media |
| `.fs-background-video` | `modifier` | Indicates video media |
| `.fs-background-embed` | `modifier` | Indicates embeded media (YouTube) |
| `.fs-background-loaded` | `modifier` | Indicates media has loaded |
| `.fs-background-lazy` | `modifier` | Indicates lazy loading media |



</div>