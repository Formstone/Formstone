### Basic

Track click events in Google Analytics by attaching a properly formed data attribute to any element. The data attribute should define at least the required values, category and action. Values should be comma separated:

```markup
<button data-analytics-event="category, action [, label] [, value]">...</button>
```

### Advanced

Fire custom events by passing the event values directly to Analytics:

```javascript
$.analytics(category, action [, label] [, value]);
```

Learn more about <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/events" target="_blank">Event Tracking with Universal Analytics</a>.