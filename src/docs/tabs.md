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