# Tabs

A jQuery plugin for simple tabs.

* [Use](#use)
* [Options](#options)
* [Events](#events)
* [Methods](#methods)
* [CSS](#css)

## Use 

#### Main

```markup
tabs.js
tabs.css
```

#### Dependencies

```markup
jQuery
core.js
mediaquery.js
swap.js
touch.js
```

### Basic

Tabs will automatically turn a set of links into a tabbed interface. The link's `href` attribute should point to the desired content's fragment identifier, white the `data-tabs-group` attribute should remain consistent between linked tabs:

```javascript
$(".tab").tabs();
```

```markup
<nav>
	<a href="#tab-one" class="tab" data-tabs-group="tab-group">One</a>
	<a href="#tab-two" class="tab" data-tabs-group="tab-group">Two</a>
	<a href="#tab-three" class="tab" data-tabs-group="tab-group">Three</a>
</nav>
<div id="tab-one">
	...
</div>
<div id="tab-two">
	...
</div>
<div id="tab-three">
	...
</div>
```

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-tabs-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `customClass` | `string` | `''` | Class applied to instance |
| `maxWidth` | `string` | `Infinity` | Width at which to auto-disable plugin |
| `mobileMaxWidth` | `string` | `'740px'` | Width at which to auto-disable mobile styles |
| `vertical` | `boolean` | `false` | Flag to draw vertical tab set |

## Events

Events are triggered on the target instance's element, unless otherwise stated.

| Event | Description |
| --- | --- |
| `update.tabs` | Tab activated |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### activate

Activates instance.

```javascript
$(".target").tabs("open");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.tabs("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").tabs("destroy");
```

### disable

Disables instance.

```javascript
$(".target").tabs("disable");
```

### enable

Enables instance.

```javascript
$(".target").tabs("enable");
```

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-tabs-element` | `element` | Target elmement |
| `.fs-tabs` | `element` | Base widget class |
| `.fs-tabs.fs-tabs-enabled` | `modifier` | Indicates enabled state |
| `.fs-tabs-tab` | `element` | Tab handle element |
| `.fs-tabs-tab.fs-tabs-enabled` | `modifier` | Indicates enabled state |
| `.fs-tabs-tab.fs-tabs-active` | `modifier` | Indicates active state |
| `.fs-tabs-tab.fs-tabs-mobile` | `modifier` | Indicates mobile interface |
| `.fs-tabs-content` | `element` | Tab content element |
| `.fs-tabs-content.fs-tabs-enabled` | `modifier` | Indicates enabled state |
| `.fs-tabs-content.fs-tabs-active` | `modifier` | Indicates active state |
| `.fs-tabs-tab_mobile` | `element` | Mobile tab handle element |
| `.fs-tabs-tab_mobile.fs-tabs-active` | `modifier` | Indicates active state |

