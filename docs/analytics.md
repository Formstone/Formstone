# Analytics

A jQuery plugin for Google Universal Analytics Events.

* [Use](#use)
* [Options](#options)

## Use 

#### Main

```markup
analytics.js
```

#### Dependencies

```markup
jQuery
core.js
mediaquery.js
```

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

### Scroll Depth

Track scroll depth by enabling the `scrollDepth` option at initialization. Change the target scroll increments by modifying the `scrollStops` option:

```javascript
$.analytics({
	scrollDepth: true,
	scrollStops: 10
});
```

### Tag Manager Support

To track events using Google Tag Manager proper Tags, Triggers and Variables will need to be configured from the Tag Manager dashboard.

First, create a new Trigger with the following properties:

| Name | Event Type | Fire On |
| -- | -- |
| Analytics Event Trigger | Custom Event | `gaTriggerEvent` |

Next, crate three new Data Layer Variables with the following properties:

| Name | Variable Name |
| -- | -- |
| Analytics Event Category | `eventCategory` |
| Analytics Event Action | `eventAction` |
| Analytics Event Label | `eventLabel` |
| Analytics Event Value | `eventValue` |

Finally, create a new Google Universal Analytics tag named 'Analytics Events' with the following configuration:

| Property | Value |
| -- | -- |
| Tracking ID | [Your Analytics ID] |
| Track Type | Event |
| Category | {{Analytics Event Category}} |
| Action | {{Analytics Event Action}} |
| Label | {{Analytics Event Label}} |
| Value | {{Analytics Event Value}} |
| Fire On | Analytics Event Trigger |

Publish the new tag to view Analytics events pushed to the Google Analytics dashboard. 

Note: The [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) extension helps to ensure events are being properly pushed. 

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autoEvents` | `boolean` | `false` | Flag to bind auto-events to mailto, tel, files and external links |
| `fileTypes` | `regex` | &nbsp; | File types for binding auto-events |
| `eventTimeout` | `int` | `1000` | Tag failure timeout |
| `scrollDepth` | `boolean` | `false` | Flag to track scroll depth events |
| `scrollStops` | `int` | `5` | Number of scroll increments to track |
| `trackerName` | `string` | `'gaTracker'` | Custom tracker name |

