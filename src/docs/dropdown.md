### Basic

To customize a select element, simply apply the plugin to the target element:

```javascript
$("select").dropdown();
```

```markup
<select>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

### Events

React to changes to the element's value by listening for the standard `change` event:

```javascript
$("select").on("change", function() {
  var value = $(this).val();
});
```

Updated the element's value externally by triggering the standard `change` event:

```javascript
$("select").val(1).trigger("change");
```

Note: If the select is too close to the bottom edge of the `body` tag, the dropdown options will "flip" and display above the handle.