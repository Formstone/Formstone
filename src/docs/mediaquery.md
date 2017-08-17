### Basic

Media Query can track global changes to screen size based on an existing grid system. This is useful when many elements need to be resized at any change to the target screen size. Start by configuring the dimensions to be tracked by passing arrays at initialization. These arrays should contain the target width and/or heights to react to:

```javascript
$.mediaquery({
  minWidth     : [ 320, 500, 740, 980, 1220 ],
  maxWidth     : [ 1220, 980, 740, 500, 320 ],
  minHeight    : [ 400, 800 ],
  maxHeight    : [ 800, 400 ]
});
```

### Events

After initializing, simply listen for the `mqchange.mediaquery` event:

```javascript
$(window).on("mqchange.mediaquery", function(e, state) {
  console.log(state.minWidth, state.maxWidth, state.minHeight, state.maxHeight);
});
```

Note: In the example above, the `mqchange.mediaquery` event will be fire twice for each breakpoint. This is because Mediaquery will respond to both the `min-width` and `max-width` changes.

### Binding

Media Query can also bind events to specific media query changes for more fine grain control:

```javascript
$.mediaquery("bind", "mq-key", "(min-width: 740px)", {
  enter: function() {
    ...
  },
  leave: function() {
    ...
  }
});
```

To unbind a Media Query:

```javascript
$.mediaquery("unbind", "mq-key");
```
