{"template":"component.html","title":"Cookie","demo":"<style>\n\t.form_fieldset { margin-top: 0; margin-bottom: 20px; }\n\n\t.demo_output { margin: 20px 0; }\n</style>\n\n<script>\n\tvar $demoForm,\n\t\t$demoOutput;\n\n\t$(function() {\n\t\t$demoForm = $(\".demo_form\");\n\t\t$demoOutput = $(\".demo_output\");\n\n\t\t$demoForm.on(\"click.cookie\", \".set\", setCookie)\n\t\t\t\t .on(\"click.cookie\", \".get\", getCookie)\n\t\t\t\t .on(\"click.cookie\", \".erase\", eraseCookie);\n\t});\n\n\tfunction setCookie(e) {\n\t\tkillEvent(e);\n\n\t\tvar key   = $demoForm.find(\"[name=set_key]\").val(),\n\t\t\tvalue = $demoForm.find(\"[name=set_value]\").val();\n\n\t\t$.cookie(key, value);\n\n\t\toutput(\"Set\", key + \" = \" + value);\n\t}\n\n\tfunction getCookie(e) {\n\t\tkillEvent(e);\n\n\t\tvar key   = $demoForm.find(\"[name=get_key]\").val(),\n\t\t\tvalue = $.cookie(key);\n\n\t\toutput(\"Get\", key + \" = \" + value);\n\t}\n\n\tfunction eraseCookie(e) {\n\t\tkillEvent(e);\n\n\t\tvar key = $demoForm.find(\"[name=erase_key]\").val();\n\n\t\t$.cookie(key, null);\n\n\t\toutput(\"Erase\", key);\n\t}\n\n\tfunction output(label, value) {\n\t\t$demoOutput.prepend('<strong>' + label + ': </strong>' + value + '</span><br>');\n\t}\n\n\tfunction killEvent(e) {\n\t\te.preventDefault();\n\t\te.stopPropagation();\n\t}\n</script>\n\n<form action=\"#\" medthod=\"GET\" class=\"row form demo_form\">\n\t<div class=\"min-full mobile-third tablet-third desktop-third\">\n\t\t<h4 class=\"no_margin_top\">Set Cookie</h4>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"min-half mobile-full tablet-full desktop-full\">\n\t\t\t\t<fieldset class=\"form_fieldset\">\n\t\t\t\t\t<label class=\"form_label\">Key</label>\n\t\t\t\t\t<input type=\"text\" name=\"set_key\" value=\"foo\" class=\"form_input\">\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t\t<div class=\"min-half mobile-full tablet-full desktop-full\">\n\t\t\t\t<fieldset class=\"form_fieldset\">\n\t\t\t\t\t<label class=\"form_label\">Value</label>\n\t\t\t\t\t<input type=\"text\" name=\"set_value\" value=\"bar\" class=\"form_input\">\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t</div>\n\t\t<input type=\"submit\" class=\"button form_button set\" value=\"Set\">\n\t</div>\n\t<div class=\"min-half mobile-third tablet-third desktop-third\">\n\t\t<h4 class=\"no_margin_top\">Get Cookie</h4>\n\t\t<fieldset class=\"form_fieldset\">\n\t\t\t<label class=\"form_label\">Key</label>\n\t\t\t<input type=\"text\" name=\"get_key\" value=\"foo\" class=\"form_input\">\n\t\t</fieldset>\n\t\t<input type=\"submit\" class=\"button form_button get\" value=\"Get\">\n\t</div>\n\t<div class=\"min-half mobile-third tablet-third desktop-third\">\n\t\t<h4 class=\"no_margin_top\">Erase Cookie</h4>\n\t\t<fieldset class=\"form_fieldset\">\n\t\t\t<label class=\"form_label\">Key</label>\n\t\t\t<input type=\"text\" name=\"erase_key\" value=\"foo\" class=\"form_input\">\n\t\t</fieldset>\n\t\t<input type=\"submit\" class=\"button form_button erase\" value=\"Erase\">\n\t</div>\n</form>\n<div class=\"demo_output form_textarea\"></div>"}

# Cookie

A jQuery plugin for simple access to browser cookies.

* [Use](#use)
* [Demo](#demo)
* [Options](#options)
* [Methods](#methods)

## Use 

#### Main

```markup
cookie.js
```

#### Dependencies

```markup
core.js
```

### Basic

To create a new cookie, or update an existing one, simply pass the `key` and `value` as the first and second parameters, respectively:

```javascript
// Set cookie
$.macroon(key, value);
```

To return a cookie's value pass the `key` as the only parameter:

```javascript
// Get Cookie
var value = $.macroon(key);
```

To erase an existing cookie, set it to `null`:

```javascript
// Erase Cookie
$.macroon(key, null);
```

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `domain` | `string` | &nbsp; | Cookie domain |
| `expires` | `int` | `604800000` | Time until cookie expires |
| `path` | `string` | &nbsp; | Cookie path |

## Methods

Methods are publicly available, unless otherwise stated.

### create

Creates a cookie.

```javascript
$.cookie(key, value, options);
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `key` | `string` | &nbsp; | Cookie key |
| `value` | `string` | &nbsp; | Cookie value |
| `options` | `object` | &nbsp; | Options object |

### erase

Deletes a cookie.

```javascript
$.cookie(key, null);
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `key` | `string` | &nbsp; | Cookie key |

### read

Returns a cookie's value, or null.

```javascript
var value = $.cookie(key);
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `key` | `string` | &nbsp; | Cookie key |

