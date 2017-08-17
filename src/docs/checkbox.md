### Basic

Checkbox will automatically detect the input's type and render proper styles.

```javascript
$("input[type=checkbox], input[type=radio]").checkbox();
```

```markup
<fieldset>
  <label for="check_1">Checkbox</label>
  <input type="checkbox" name="check_1" id="check_1" value="on">
</fieldset>
<fieldset>
  <label for="radio_1">Radio</label>
  <input type="radio" name="radio_1" id="radio_1" value="on">
</fieldset>
```

### Toggle

Checkbox can also render a 'toggle' style checkbox.

```javascript
$("input[type=checkbox]").checkbox({
  toggle: true
});
```