---
title: MediaQuery
published: true
visible: true
---

# MediaQuery

Responsive media query events.

<div class="docs_menu" markdown="1">

* [Demos](#demo)
* [Methods](#methods)

</div>


<hr class="divider">


## Demos {#demo}

<div class="docs_menu" markdown="1">

* [Basic](#demo-basic)

</div>

### Basic {#demo-basic}

Bind to media query changes.

<figure class="demo js-editor" markdown="1">

```html
<!-- Demo coming soon -->
```

```js
import { MediaQuery, Utils } from 'Formstone';

Utils.ready(() => {
  // Demo coming soon
});
```

```css
/* Demo coming soon */
```

</figure>


<hr class="divider">

<div class="docs" markdown="1">


## Methods {#methods}

Methods are publicly available, unless otherwise stated.

| Name | Description |
| -- | -- |
| [`.bind()`](#method-bind) | Binds to a media query |
| [`.unbind()`](#method-unbind) | Unbinds from a media query |


### .bind() {#method-bind}

Binds to a media query.

#### Parameters

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `key` | `string` (required) | `''` | Unique key |
| `media` | `string` (required) | `''` | Media query string |
| `data` | `object` (required) | `{}` | Object containing `enter` and `leave` callbacks |

#### Examples

<figure class="example js-example" markdown="1">
```js
MediaQuery.bind('unique-key', '(min-width: 500px)', {
  enter: function() {
    console.log('Enter 500px');
  },
  leave: function() {
    console.log('Leave 500px');
  }
});
```
</figure>


### .unbind() {#method-unbind}

Unbinds from a media query.

#### Parameters

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `key` | `string` (required) | `''` | Unique key |
| `media` | `string` (optional) | `''` | Specific media query string to unbind |

#### Examples

<figure class="example js-example" markdown="1">
```js
MediaQuery.unbind('unique-key');
```
</figure>


<hr class="divider">


</div>
