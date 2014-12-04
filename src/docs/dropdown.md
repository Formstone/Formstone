### Basic

To customize a select element, simply apply the plugin to the target element:

```javascript
<select class="target">
	<option value="1">One</option>
	<option value="2">Two</option>
	<option value="3">Three</option>
</select>
```

```javascript
$(".target").dropdown();
```

### Events

React to changes to the element's value by listening for the standard `change` event:

```javascript
$(".target").on("change", function() {
	var value = $(this).val();
});
```

Updated the element's value externally by triggering the standard `change` event:

```javascript
$(".target").val(1).trigger("change");
```