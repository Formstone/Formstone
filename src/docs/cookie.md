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