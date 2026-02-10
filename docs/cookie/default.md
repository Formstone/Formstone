---
title: Cookie
published: true
visible: true
---

# Cookie

Simple cookie management.

<div class="docs_menu" markdown="1">

* [Demos](#demo)
* [Options](#options)
* [Methods](#methods)

</div>


<hr class="divider">


## Demos {#demo}

<div class="docs_menu" markdown="1">

* [Basic](#demo-basic)

</div>

### Basic {#demo-basic}

Create, read and delete cookies.

<figure class="demo js-editor" markdown="1">

```html
<!-- Demo coming soon -->
```

```js
import { Cookie, Utils } from 'Formstone';

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


## Options {#options}

Set global options by passing a valid object to the public [`.defaults()`](#method-defaults) method.

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `domain` | `string` | `null` | Cookie domain |
| `expires` | `number` | `604800000` | Expiration time in milliseconds (default 7 days) |
| `path` | `string` | `null` | Cookie path |
| `samesite` | `string` | `'Lax'` | SameSite attribute |
| `secure` | `boolean` | `null` | Secure attribute |


<hr class="divider">


## Methods {#methods}

Methods are publicly available, unless otherwise stated.

| Name | Description |
| -- | -- |
| [`.delete()`](#method-delete) | Deletes a cookie |
| [`.defaults()`](#method-defaults) | Sets default options for future use |
| [`.get()`](#method-get) | Returns a cookie value |
| [`.set()`](#method-set) | Sets a cookie value |


### .delete() {#method-delete}

Deletes a cookie.

#### Parameters

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `key` | `string` (required) | `''` | Cookie key |
| `options` | `object` (optional) | `{}` | Object containing [options](#options) |

#### Examples

<figure class="example js-example" markdown="1">
```js
Cookie.delete('key');
```
</figure>


### .defaults() {#method-defaults}

Sets default options for future use.

#### Parameters

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `options` | `object` (required) | `{}` | Object containing default options |

#### Examples

<figure class="example js-example" markdown="1">
```js
Cookie.defaults({
  expires: 3600000 // 1 hour
});
```
</figure>


### .get() {#method-get}

Returns a cookie value.

#### Parameters

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `key` | `string` (required) | `''` | Cookie key |

#### Examples

<figure class="example js-example" markdown="1">
```js
let value = Cookie.get('key');
```
</figure>


### .set() {#method-set}

Sets a cookie value.

#### Parameters

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `key` | `string` (required) | `''` | Cookie key |
| `value` | `string` (required) | `''` | Cookie value |
| `options` | `object` (optional) | `{}` | Object containing [options](#options) |

#### Examples

<figure class="example js-example" markdown="1">
```js
Cookie.set('key', 'value');
```
</figure>