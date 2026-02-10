---
title: Utils
published: true
visible: true
---

# Utils

Core utility functions used throughout Formstone.

<div class="docs_menu" markdown="1">

* [Methods](#methods)

</div>


<hr class="divider">


<div class="docs" markdown="1">

## Methods {#methods}

Methods are publicly available as static methods on the `Utils` class.

| Name | Description |
| -- | -- |
| [`.addClass()`](#method-addclass) | Adds class(es) to target(s) |
| [`.camelCase()`](#method-camelcase) | Converts a string to camelCase |
| [`.element()`](#method-element) | Creates a new element |
| [`.extend()`](#method-extend) | Deep or shallow merge of objects |
| [`.falsey()`](#method-falsey) | Checks if a value is "falsey" |
| [`.getAttr()`](#method-getattr) | Returns an attribute value from an element |
| [`.hasAttr()`](#method-hasattr) | Checks if an element has an attribute |
| [`.hasClass()`](#method-hasclass) | Checks if an element has a class |
| [`.isFn()`](#method-isfn) | Checks if a value is a function |
| [`.isObj()`](#method-isobj) | Checks if a value is an object |
| [`.isU()`](#method-isu) | Checks if a value is undefined |
| [`.iterable()`](#method-iterable) | Normalizes an item into an array for iteration |
| [`.iterate()`](#method-iterate) | Iterates over items |
| [`.off()`](#method-off) | Removes event listener(s) |
| [`.on()`](#method-on) | Adds event listener(s) |
| [`.once()`](#method-once) | Adds a one-time event listener |
| [`.ready()`](#method-ready) | Executes callback when DOM is ready |
| [`.removeAttr()`](#method-removeattr) | Removes attribute(s) |
| [`.removeClass()`](#method-removeclass) | Removes class(es) from target(s) |
| [`.restoreAttr()`](#method-restoreattr) | Restores an attribute's value |
| [`.select()`](#method-select) | Selects elements via query selector |
| [`.setAttr()`](#method-setattr) | Sets attribute(s) |
| [`.siblings()`](#method-siblings) | Returns siblings of an element |
| [`.trigger()`](#method-trigger) | Triggers a custom event |
| [`.type()`](#method-type) | Returns the native typeof of an item |
| [`.updateAttr()`](#method-updateattr) | Preserves and updates an attribute |


<hr class="divider">


## Core {#core}

### .ready() {#method-ready}

Executes callback when DOM is ready, or immediately if already loaded.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `cb` | `function` | Callback function |

#### Examples

<figure class="example js-example" markdown="1">
```js
Utils.ready(() => {
  // DOM is ready
});
```
</figure>


<hr class="divider">


## Checks {#checks}

### .type() {#method-type}

Returns the native `typeof` of an item.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `item` | `any` | Item to check |

#### Returns

| Type | Description |
| -- | -- |
| `string` | The `typeof` result |

### .falsey() {#method-falsey}

Checks if a value is "falsey" (undefined, null, or false).

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `v` | `any` | Value to check |

#### Returns

| Type | Description |
| -- | -- |
| `boolean` | True if falsey |

### .isFn() {#method-isfn}

Checks if a value is a function.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `v` | `any` | Value to check |

#### Returns

| Type | Description |
| -- | -- |
| `boolean` | True if a function |

### .isObj() {#method-isobj}

Checks if a value is an object.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `v` | `any` | Value to check |

#### Returns

| Type | Description |
| -- | -- |
| `boolean` | True if an object |

### .isU() {#method-isu}

Checks if a value is undefined.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `v` | `any` | Value to check |

#### Returns

| Type | Description |
| -- | -- |
| `boolean` | True if undefined |


<hr class="divider">


## Objects {#objects}

### .extend() {#method-extend}

Deep or shallow merge of objects.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `deep` | `boolean` (optional) | Whether to perform deep merge |
| `...args` | `object` | Objects to merge |

#### Returns

| Type | Description |
| -- | -- |
| `object` | The merged object |

#### Examples

<figure class="example js-example" markdown="1">
```js
let options = Utils.extend(true, defaults, userOptions);
```
</figure>


<hr class="divider">


## Selection {#selection}

### .select() {#method-select}

Selects elements via query selector.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `selector` | `string` | Selector string |
| `context` | `element` (optional) | Context to search within |

#### Returns

| Type | Description |
| -- | -- |
| `NodeList` | Collection of matching elements |

### .element() {#method-element}

Creates a new element.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `tag` | `string` | HTML tag name |

#### Returns

| Type | Description |
| -- | -- |
| `element` | The new element |

### .siblings() {#method-siblings}

Returns siblings of an element.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `node` | `element` | Element to find siblings for |

#### Returns

| Type | Description |
| -- | -- |
| `array` | Collection of sibling elements |


<hr class="divider">


## Iteration {#iteration}

### .iterate() {#method-iterate}

Iterates over an array, NodeList, or single element.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `target` | `any` | Target item(s) to iterate |
| `cb` | `function` | Callback function |

### .iterable() {#method-iterable}

Normalizes an item into an array for iteration.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `target` | `any` | Target item to normalize |

#### Returns

| Type | Description |
| -- | -- |
| `array` | Normalized collection |


<hr class="divider">


## Events {#events}

### .on() {#method-on}

Adds event listener(s) to target(s).

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `target` | `any` | Target element(s) |
| `event` | `string` | Event name |
| `cb` | `function` | Callback function |
| `options` | `object` (optional) | Event listener options |

### .once() {#method-once}

Adds a one-time event listener to target(s).

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `target` | `any` | Target element(s) |
| `event` | `string` | Event name |
| `cb` | `function` | Callback function |
| `options` | `object` (optional) | Event listener options |

### .off() {#method-off}

Removes event listener(s) from target(s).

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `target` | `any` | Target element(s) |
| `event` | `string` | Event name |
| `cb` | `function` | Callback function |

### .trigger() {#method-trigger}

Triggers a custom event on target(s).

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `target` | `any` | Target element(s) |
| `event` | `string` | Event name |
| `detail` | `any` (optional) | Custom event detail |


<hr class="divider">


## Classes {#classes}

### .addClass() {#method-addclass}

Adds class(es) to target(s).

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `target` | `any` | Target element(s) |
| `...classes` | `string` | Class names |

### .removeClass() {#method-removeclass}

Removes class(es) from target(s).

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `target` | `any` | Target element(s) |
| `...classes` | `string` | Class names |

### .hasClass() {#method-hasclass}

Checks if an element has a class.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `target` | `element` | Target element |
| `c` | `string` | Class name |

#### Returns

| Type | Description |
| -- | -- |
| `boolean` | True if class exists |


<hr class="divider">


## Attributes {#attributes}

### .setAttr() {#method-setattr}

Sets attribute(s) on target(s).

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `target` | `any` | Target element(s) |
| `attr` | `string|object` | Attribute name or object of attributes |
| `value` | `string` (optional) | Attribute value |

### .getAttr() {#method-getattr}

Returns an attribute value from an element.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `target` | `element` | Target element |
| `attr` | `string` | Attribute name |

#### Returns

| Type | Description |
| -- | -- |
| `string` | Attribute value |

### .hasAttr() {#method-hasattr}

Checks if an element has an attribute.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `target` | `element` | Target element |
| `attr` | `string` | Attribute name |

#### Returns

| Type | Description |
| -- | -- |
| `boolean` | True if attribute exists |

### .removeAttr() {#method-removeattr}

Removes attribute(s) from target(s).

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `target` | `any` | Target element(s) |
| `attr` | `string|array` | Attribute name(s) |

### .updateAttr() {#method-updateattr}

Preserves an attribute's current value in a data attribute before updating it.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `els` | `any` | Target element(s) |
| `attr` | `string` | Attribute name |
| `value` | `string` | New value |
| `handle` | `string` | Plugin handle for the data key |

### .restoreAttr() {#method-restoreattr}

Restores an attribute's value from its preserved data attribute.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `els` | `any` | Target element(s) |
| `attr` | `string` | Attribute name |
| `handle` | `string` | Plugin handle for the data key |


<hr class="divider">


## Strings {#strings}

### .camelCase() {#method-camelcase}

Converts a string to camelCase.

#### Parameters

| Name | Type | Description |
| -- | -- | -- |
| `string` | `string` | String to convert |

#### Returns

| Type | Description |
| -- | -- |
| `string` | CamelCased string |

</div>
