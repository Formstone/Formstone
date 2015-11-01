# Changelog

### 0.8.26

* Adding matchMedia graceful degradation to Media Query, matches closest `fallbackWidth` and `fallbackHeight` values
* Added `ignoreTypes` option to ASAP to avoid loading downloadable files via AJAX
* Renamed `extensions` to `fileTypes` in Lightbox for consistency

### 0.8.25

* Fixed false positive on transitionEnd events in Transition
* Fixed issue with inaccessible Number inputs on iOS
* Increased initial pointer down delay in Number 
* Added `queued` event to Upload (Thanks @Bonscho!)

### 0.8.24

* Adding `support.nativeMatchMedia` and `fallbackWidth` values for graceful degradation
* Adding matchMedia graceful degradation to Carousel, matches closest `fallbackWidth` value

### 0.8.23

* Fixed issue with Carousel removing previous and next classes
* Fixed issue with Analytics and content blockers

### 0.8.22

* Fixed issue with Carousel `matchHeight` option
* Fixed issue with Tabs mobile classing
* Fixed XSS issue in Dropdown

### 0.8.21

* Added `mute` and `unmute` public methods to Background
* Added `fill` element to Range
* Added `abort` public method to Upload
* Added ability to cancel uploads in `beforeSend` Upload callback

### 0.8.20

* Added `min-height` to Carousel items, resolves issue with accidientally empty carousels
* Added ability to target same content element from multiple Navigations

### 0.8.19

* Added `postContruct` callback system, run after current set has initialized
* Added ability to set active Tab item
* Added ability to deep-link Tab item based on page hash
* Added ability to set custom Carousel controls container
* Added `previous` and `next` states for Carousel items

### 0.8.18

* Added check for Request Animation Frame
* Switched to passing `window` in Core closure

### 0.8.17

* Added internal events: 
	- `panStart`
	- `pan`
	- `panEnd`
	- `scaleStart`
	- `scale`
	- `scaleEnd`
	- `swipe`
* Added internal Request Animation Frame callback system
* Improved Lightbox pinch-and-zoom performance
* Updated Scrollbar to use Touch pan events
* Rebuilt ASAP by removing internal DOM caching for better state handling
* Removed clickTouchStart events in favor of browsers handling touch

### 0.8.16

* Fixed issue with grouped Swap active item
* Fixed issue with Lightbox loading icon visibility
* Fixed issue with fullscreen YouTube videos in Lightbox 
* Fixed regression in ASAP Analytics check

### 0.8.15

* Added basic pinch-and-zoom to Lightbox on touch devices

### 0.8.14

* Fixed ASAP issue with replacing history state
* Disabled touch in Checkbox due to erratic behavior

### 0.8.13

* Fixed typo in Background and Carousel 

### 0.8.12

* Fixed Background window width issue
* Optimized Background and Carousel responsive calculations

### 0.8.11

* Fixed Touch pointer event conflict

### 0.8.10

* Fixed Carousel window width issue

### 0.8.9

* Fixed overflow on `contained` Carousel

### 0.8.8

* Fixed ASAP redirects containing fragment identifiers
* Removed debug code from Carousel

### 0.8.7

* Added HTML option labels to Dropdown 
* Added `bottomEdge` option to Dropdown for custom thresholds
* Fixing Touch click event error

### 0.8.6

* Added `top` and `bottom` keywords to Scrollbar `scroll` method
* Added Dropdown Scrollbar support

### 0.8.5

* Added `beforeSend` callback to Upload for adding form data
* Added `disabled` and `enabled` methods to Upload
* Fixed issue with Upload warning on page leave

### 0.8.4

* Fixed ASAP Demo
* Added check for Analytics in ASAP

### 0.8.3

* Added `contained` and `single` option to Carousel

### 0.8.2

* Fixed regression in ASAP rebuild

### 0.8.1

* Renamed ASAP events to avoid native conflicts:
	- `request` to `requested`
	- `render` to `rendered`
	- `error` to `failed`
	
### 0.8.0

* Rebuilt Analytics for better GA and GTM support
* Added Analytics as ASAP dependency to reduce redundancies
