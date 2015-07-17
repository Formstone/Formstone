# ASAP

A jQuery plugin for asynchronous page loads.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)

## Use 

#### Main

```markup
asap.js
```

#### Dependencies

```markup
jQuery
core.js
```

### Basic


## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cache` | `boolean` | `true` | Cache AJAX responses |
| `force` | `boolean` | `false` | Forces new requests when navigating back/forward |
| `jump` | `boolean` | `true` | Jump page to top on render |
| `modal` | `boolean` | `false` | Flag for content loaded into modal |
| `selector` | `string` | `'a'` | Target DOM Selector |
| `render` | `function` | `$.noop` | Custom render function |
| `requestKey` | `string` | `'fs-asap'` | GET variable for requests |
| `tracking.legacy` | `boolean` | `false` | Flag for legacy Google Analytics tracking |
| `tracking.manager` | `boolean` | `false` | Flag for Tag Manager tracking |
| `tracking.variable` | `string` | `'currentURL'` | Tag Manager dataLayer variable name (macro in Tag Manager) |
| `tracking.event` | `string` | `'PageView'` | Tag Manager event name (rule in Tag Manager) |
| `transitionOut` | `function` | `$.noop` | Transition timing callback; should return user defined $.Deferred object, which must eventually resolve |

## Events

Events are triggered on the `window`, unless otherwise stated.

| Event | Description |
| --- | --- |
| `request.asap` | Before request is made; triggered on window. Second parameter 'true' if pop event |
| `progress.asap` | As request is loaded; triggered on window |
| `load.asap` | After request is loaded; triggered on window |
| `render.asap` | After state is rendered; triggered on window |
| `error.asap` | After load error; triggered on window |

## Methods

Methods are publicly available, unless otherwise stated.

### load

Loads new page

```javascript
$.asap("load", "http://website.com/page/");
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `opts` | `url` | `''` | URL to load |

