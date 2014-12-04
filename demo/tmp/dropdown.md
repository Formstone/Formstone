{"template":"component.html","title":"Dropdown","demo":"<style>\n\t.demo .custom_select { max-width: 500px; }\n\t.demo .custom_select .fs-dropdown-selected { border-width: 2px; }\n\t.demo .custom_select .fs-dropdown-options { border-width: 0 2px 2px; padding: 1%; }\n\t.demo .custom_select .fs-dropdown-item { border-radius: 3px !important; border: none; margin: 0 0 1%; }\n\t.demo .custom_select .fs-dropdown-item:last-child { margin: 0; }\n</style>\n\n<script>\n\t$(function() {\n\t\t// All\n\t\t$(\".demo_form select\").dropdown();\n\n\t\t$(\".demo_form\").on(\"click\", \".toggle\", toggleEnabled);\n\t});\n\n\tfunction toggleEnabled(e) {\n\t\te.preventDefault();\n\t\te.stopPropagation();\n\n\t\tvar $target = $(this),\n\t\t\t$select = $target.parents(\".demo_form\").find(\"select\");\n\n\t\tif ($target.hasClass(\"toggle_item\")) {\n\t\t\t// Toggle item\n\t\t\tif ($select.find(\"option\").eq(0).is(\":disabled\")) {\n\t\t\t\t$select.dropdown(\"enable\", \"1\");\n\t\t\t\t$target.text(\"Disable Item '1'\");\n\t\t\t} else {\n\t\t\t\t$select.dropdown(\"disable\", \"1\");\n\t\t\t\t$target.text(\"Enable Item '1'\");\n\t\t\t}\n\t\t} else {\n\t\t\t// Toggle select\n\t\t\tif ($select.is(\":disabled\")) {\n\t\t\t\t$select.dropdown(\"enable\");\n\t\t\t\t$target.text(\"Disable\");\n\t\t\t} else {\n\t\t\t\t$select.dropdown(\"disable\");\n\t\t\t\t$target.text(\"Enable\");\n\t\t\t}\n\t\t}\n\t}\n</script>\n\n<h4>Basic</h4>\n<form action=\"#\" method=\"GET\" class=\"form demo_form\">\n\t<fieldset class=\"form_fieldset\">\n\t\t<label for=\"demo_basic\" class=\"form_label\">Label</label>\n\t\t<select name=\"demo_basic\" id=\"demo_basic\">\n\t\t\t<option>One</option>\n\t\t\t<option>Two</option>\n\t\t</select>\n\t</fieldset>\n</form>\n\n<h4>Option Groups</h4>\n<form action=\"#\" method=\"GET\" class=\"form demo_form\">\n\t<fieldset class=\"form_fieldset\">\n\t\t<label for=\"demo_groups\" class=\"form_label\">Label</label>\n\t\t<select name=\"demo_groups\" id=\"demo_groups\">\n\t\t\t<optgroup label=\"Group One\">\n\t\t\t\t<option value=\"1\">One</option>\n\t\t\t\t<option value=\"2\">Two</option>\n\t\t\t\t<option value=\"3\">Three</option>\n\t\t\t</optgroup>\n\t\t\t<optgroup label=\"Group One\">\n\t\t\t\t<option value=\"4\">Four</option>\n\t\t\t\t<option value=\"5\">Five</option>\n\t\t\t\t<option value=\"6\">Six</option>\n\t\t\t\t<option value=\"7\">Seven</option>\n\t\t\t</optgroup>\n\t\t\t<optgroup label=\"Group Three\">\n\t\t\t\t<option value=\"8\">Eight</option>\n\t\t\t\t<option value=\"9\">Nine</option>\n\t\t\t\t<option value=\"10\">Ten</option>\n\t\t\t</optgroup>\n\t\t</select>\n\t</fieldset>\n</form>\n\n<h4>Multiple</h4>\n<form action=\"#\" method=\"GET\" class=\"form demo_form\">\n\t<fieldset class=\"form_fieldset\">\n\t\t<label for=\"demo_multiple\" class=\"form_label\">Label</label>\n\t\t<select name=\"demo_multiple\" id=\"demo_multiple\" multiple>\n\t\t\t<option value=\"1\">One</option>\n\t\t\t<option value=\"2\">Two</option>\n\t\t\t<option value=\"3\">Three</option>\n\t\t\t<option value=\"4\">Four</option>\n\t\t\t<option value=\"5\">Five</option>\n\t\t\t<option value=\"6\">Six</option>\n\t\t\t<option value=\"7\">Seven</option>\n\t\t\t<option value=\"8\">Eight</option>\n\t\t\t<option value=\"9\">Nine</option>\n\t\t\t<option value=\"10\">Ten</option>\n\t\t</select>\n\t</fieldset>\n</form>\n\n<h4>Default Label</h4>\n<form action=\"#\" method=\"GET\" class=\"form demo_form\">\n\t<fieldset class=\"form_fieldset\">\n\t\t<label for=\"demo_label\" class=\"form_label\">Label</label>\n\t\t<select name=\"demo_label\" id=\"demo_label\" data-dropdown-options='{\"label\":\"Select A State\"}'>\n\t\t\t<option value=\"AL\">Alabama</option>\n\t\t\t<option value=\"AK\">Alaska</option>\n\t\t\t<option value=\"AZ\">Arizona</option>\n\t\t\t<option value=\"AR\">Arkansas</option>\n\t\t\t<option value=\"CA\">California</option>\n\t\t\t<option value=\"CO\">Colorado</option>\n\t\t\t<option value=\"CT\">Connecticut</option>\n\t\t\t<option value=\"DE\">Delaware</option>\n\t\t\t<option value=\"DC\">District Of Columbia</option>\n\t\t\t<option value=\"FL\">Florida</option>\n\t\t\t<option value=\"GA\">Georgia</option>\n\t\t\t<option value=\"HI\">Hawaii</option>\n\t\t\t<option value=\"ID\">Idaho</option>\n\t\t\t<option value=\"IL\">Illinois</option>\n\t\t\t<option value=\"IN\">Indiana</option>\n\t\t\t<option value=\"IA\">Iowa</option>\n\t\t\t<option value=\"KS\">Kansas</option>\n\t\t\t<option value=\"KY\">Kentucky</option>\n\t\t\t<option value=\"LA\">Louisiana</option>\n\t\t\t<option value=\"ME\">Maine</option>\n\t\t\t<option value=\"MD\">Maryland</option>\n\t\t\t<option value=\"MA\">Massachusetts</option>\n\t\t\t<option value=\"MI\">Michigan</option>\n\t\t\t<option value=\"MN\">Minnesota</option>\n\t\t\t<option value=\"MS\">Mississippi</option>\n\t\t\t<option value=\"MO\">Missouri</option>\n\t\t\t<option value=\"MT\">Montana</option>\n\t\t\t<option value=\"NE\">Nebraska</option>\n\t\t\t<option value=\"NV\">Nevada</option>\n\t\t\t<option value=\"NH\">New Hampshire</option>\n\t\t\t<option value=\"NJ\">New Jersey</option>\n\t\t\t<option value=\"NM\">New Mexico</option>\n\t\t\t<option value=\"NY\">New York</option>\n\t\t\t<option value=\"NC\">North Carolina</option>\n\t\t\t<option value=\"ND\">North Dakota</option>\n\t\t\t<option value=\"OH\">Ohio</option>\n\t\t\t<option value=\"OK\">Oklahoma</option>\n\t\t\t<option value=\"OR\">Oregon</option>\n\t\t\t<option value=\"PA\">Pennsylvania</option>\n\t\t\t<option value=\"RI\">Rhode Island</option>\n\t\t\t<option value=\"SC\">South Carolina</option>\n\t\t\t<option value=\"SD\">South Dakota</option>\n\t\t\t<option value=\"TN\">Tennessee</option>\n\t\t\t<option value=\"TX\">\tTexas</option>\n\t\t\t<option value=\"UT\">Utah</option>\n\t\t\t<option value=\"VT\">Vermont</option>\n\t\t\t<option value=\"VA\">Virginia</option>\n\t\t\t<option value=\"WA\">Washington</option>\n\t\t\t<option value=\"WV\">West Virginia</option>\n\t\t\t<option value=\"WI\">Wisconsin</option>\n\t\t\t<option value=\"WY\">Wyoming</option>\n\t\t</select>\n\t</fieldset>\n</form>\n\n<h4>Links</h4>\n<form action=\"#\" method=\"GET\" class=\"form demo_form\">\n\t<fieldset class=\"form_fieldset\">\n\t\t<label for=\"demo_links\" class=\"form_label\">Label</label>\n\t\t<select name=\"demo_links\" id=\"demo_links\" data-dropdown-options='{\"label\":\"Jump Sites\",\"links\":true}'>\n\t\t\t<option value=\"http://google.com\">Google Search</option>\n\t\t\t<option value=\"http://boingboing.com\">Boing\tBoing</option>\n\t\t\t<option value=\"http://cnn.com\">CNN News</option>\n\t\t</select>\n\t</fieldset>\n</form>\n\n<h4>External Links</h4>\n<form action=\"#\" method=\"GET\" class=\"form demo_form\">\n\t<fieldset class=\"form_fieldset\">\n\t\t<label for=\"demo_external\" class=\"form_label\">Label</label>\n\t\t<select name=\"demo_external\" id=\"demo_external\" data-dropdown-options='{\"label\":\"Jump Sites\",\"external\":\"true\"}'>\n\t\t\t<option value=\"http://google.com\">Google Search</option>\n\t\t\t<option value=\"http://boingboing.com\">Boing\tBoing</option>\n\t\t\t<option value=\"http://cnn.com\">CNN News</option>\n\t\t</select>\n\t</fieldset>\n</form>\n\n<h4>Cover</h4>\n<form action=\"#\" method=\"GET\" class=\"form demo_form\">\n\t<fieldset class=\"form_fieldset\">\n\t\t<label for=\"demo_cover\" class=\"form_label\">Label</label>\n\t\t<select name=\"demo_cover\" id=\"demo_cover\" data-dropdown-options='{\"cover\":\"true\"}'>\n\t\t\t<option value=\"1\">One</option>\n\t\t\t<option value=\"2\">Two</option>\n\t\t\t<option value=\"3\">Three</option>\n\t\t\t<option value=\"4\">Four</option>\n\t\t\t<option value=\"5\">Five</option>\n\t\t</select>\n\t</fieldset>\n</form>\n\n<h4>Custom Class</h4>\n<form action=\"#\" method=\"GET\" class=\"form demo_form\">\n\t<fieldset class=\"form_fieldset\">\n\t\t<label for=\"demo_custom\" class=\"form_label\">Label</label>\n\t\t<select name=\"demo_custom\" id=\"demo_custom\" data-dropdown-options='{\"customClass\":\"custom\"}'>\n\t\t\t<option value=\"1\">One</option>\n\t\t\t<option value=\"2\">Two</option>\n\t\t\t<option value=\"3\">Three</option>\n\t\t\t<option value=\"4\">Four</option>\n\t\t\t<option value=\"5\">Five</option>\n\t\t</select>\n\t</fieldset>\n</form>\n\n<h4>Disable</h4>\n<form action=\"#\" method=\"GET\" class=\"form demo_form\">\n\t<fieldset class=\"form_fieldset\">\n\t\t<label for=\"demo_disable\" class=\"form_label\">Label</label>\n\t\t<select name=\"demo_disable\" id=\"demo_disable\" disabled>\n\t\t\t<option value=\"1\">One</option>\n\t\t\t<option value=\"2\">Two</option>\n\t\t\t<option value=\"3\">Three</option>\n\t\t\t<option value=\"4\">Four</option>\n\t\t\t<option value=\"5\">Five</option>\n\t\t</select>\n\t</fieldset>\n\t<fieldset class=\"form_fieldset\">\n\t\t<button type=\"button\" class=\"form_button toggle\">Enable</button>\n\t</fieldset>\n</form>\n\n<h4>Disable Item</h4>\n<form action=\"#\" method=\"GET\" class=\"form demo_form\">\n\t<fieldset class=\"form_fieldset\">\n\t\t<label for=\"demo_disable_item\" class=\"form_label\">Label</label>\n\t\t<select name=\"demo_disable_item\" id=\"demo_disable_item\">\n\t\t\t<option value=\"1\" disabled>One</option>\n\t\t\t<option value=\"2\">Two</option>\n\t\t\t<option value=\"3\">Three</option>\n\t\t\t<option value=\"4\">Four</option>\n\t\t\t<option value=\"5\">Five</option>\n\t\t</select>\n\t</fieldset>\n\t<fieldset class=\"form_fieldset\">\n\t\t<button type=\"button\" class=\"form_button toggle toggle_item\">Enable Item '1'</button>\n\t</fieldset>\n</form>"}

# Dropdown

A jQuery plugin for custom select elements.

* [Use](#use)
* [Options](#options)
* [Methods](#methods)
* [CSS](#css)
* [Demo](#demo)

## Use 

#### Main

```markup
dropdown.js
dropdown.css
```

#### Dependencies

```markup
core.js
touch.js
```

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

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-dropdown-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cover` | `boolean` | `false` | Cover handle with option set |
| `customClass` | `string` | `''` | Class applied to instance |
| `label` | `string` | `''` | Label displayed before selection |
| `external` | `boolean` | `false` | Open options as links in new window |
| `links` | `boolean` | `false` | Open options as links in same window |
| `mobile` | `boolean` | `false` | Force desktop interaction on mobile |
| `trim` | `int` | `0` | &nbsp; |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### close

Closes target instance.

```javascript
$(".target").dropdown("close");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.dropdown("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `object` | `{}` | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").dropdown("destroy");
```

### disable

Disables target instance or option.

```javascript
$(".target").dropdown("disable", "1");
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `option` | `string` | `null` | Target option value |

### enable

Enables target instance or option.

```javascript
$(".target").dropdown("enable", "1");
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `option` | `string` | `null` | Target option value |

### open

Opens target instance.

```javascript
$(".target").dropdown("open");
```

### update

Updates instance.

```javascript
$(".target").dropdown("update");
```

## CSS

| Class | Type | Description |
| --- | --- | --- |
| `.fs-dropdown` | `element` | Base widget class |
| `.fs-lightbox.fs-lightbox-multiple` | `modifer` | Indicates multi-selected element |
| `.fs-lightbox.fs-lightbox-cover` | `modifer` | Indicates cover positioning |
| `.fs-lightbox.fs-lightbox-bottom` | `modifer` | Indicates bottom positioning |
| `.fs-lightbox.fs-lightbox-disabled` | `modifer` | Indicates disabled state |
| `.fs-lightbox.fs-lightbox-open` | `modifer` | Indicates open state |
| `.fs-lightbox.fs-lightbox-focus` | `modifer` | Indicates focus state |
| `.fs-dropdown-selected` | `element` | Handle item |
| `.fs-dropdown-options` | `element` | Options container |
| `.fs-dropdown-group` | `element` | Option group label |
| `.fs-dropdown-item` | `element` | Option item |
| `.fs-dropdown-item.fs-dropdown-item_placeholder` | `modifier` | Indicates placeholder item |
| `.fs-dropdown-item.fs-dropdown-item_selected` | `modifier` | Indicates selected item |
| `.fs-dropdown-item.fs-dropdown-item_disabled` | `modifier` | Indicates disabled item |

