### Basic

Track click events in Google Analytics by attaching a properly formed data attribute to any element. The data attribute should define at least the required values, category and action. Values should be comma separated:

```markup
<button data-analytics-event="category, action [, label] [, value]">...</button>
```

### Advanced

Fire custom events by passing the event field values directly to Analytics:

```javascript
$.analytics("event", {
  eventCategory: "Category",
  eventAction: "Action"
  eventLabel: "Label",
  eventValue: 100
});
```

Note: `eventLabel` and `eventValue` are optional. Learn more about fields and <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/events" target="_blank">Event Tracking with Universal Analytics</a>.

### Scroll Depth

Track scroll depth by enabling the `scrollDepth` option at initialization. Change the target scroll increments by modifying the `scrollStops` option:

```javascript
$.analytics({
  scrollDepth: true,
  scrollStops: 10
});
```

### Page Views

Fire page view by calling the `pageview` method:

```javascript
$.analytics("pageview");
```

### Tag Manager Support

Analytics will push to all available trackers, even when loaded using Google Tag Manager.

Note: The [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) extension helps to ensure events are being properly pushed.
