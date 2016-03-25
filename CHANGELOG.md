# Changelog

<!-- -->

### 1.0.1

* Fixed issue with `play` method in Background 

### 1.0.0

* Added theme support for all Widget plugins
* Added fs-light base theme 
* Added AMD module wrappers to all components
* Added custom video formatters in Lightbox
* Fixed issue with removing data in Cookie

### 0.8.44

* Fixed issue with `play` method in Background 

### 0.8.43

* Fixed issue with IE touch-action in Touch

### 0.8.42

* Fixed issue with destroying Carousels

### 0.8.41

* Fixed issue with cloning inline content in Lightbox

### 0.8.40

* Fixed issue with IE events in Touch 
* Fixed issue with selecting the same file multiple times in Upload
* Fixed issue with autoPlay option in Background

### 0.8.39

* Fixed change event in Checkbox for radios
* Fixed nested rows in Grid

### 0.8.38

* Added ability to search by more then 1 letter in Dropdown (Thanks @thierrymichel!)
* Fixed second parameter in ASAP request event (Thanks @adriansuter!)
* Removed button focus styles (Thanks @nhall!)

### 0.8.37

* Fixed Lightbox event binding issue

### 0.8.36

* Added HTML label support to Navigation (Thanks @collegeman!)
* Fixed accessibility issues with Background (Thanks @nhall!)
* Fixed accessibility issues with Carousel (Thanks @nhall!)
* Fixed accessibility issues with Checkbox
* Fixed accessibility issues with Dropdown

### 0.8.35

* Fixed issue with Analytics scroll depth interfering with bounce rate
* Added `autoUpload` option and `start` method to Upload
* Fixed issue with Upload queued files parameter

### 0.8.34

* Fixed issue with Carousel `touch` events not clearing auto advance timers
* Fixed issue with Dropdown not firing `change` event
* Fixed issue with Dropdown `focus` handling 

### 0.8.33

* Added ability to open Lightbox gallery with URL fragment identifier
* Fixed issue with Range `change` events

### 0.8.32

* Fixed issue with `overlay` Navigation in Android Browser
* Fixed issue with Dropdown not opening on Windows touch devices
* Fixed issue with multi Dropdown on mobile

### 0.8.31

* Fixed issue with Modernizr change to `no-touchevents`
* Modified Carousel touch paging to be more consistent
* Added `matchWidth` option to Carousel
* Fixed issue with Background not storing muted state

### 0.8.30

* Added ability to clear default label in Upload (Thanks @Valamas!)
* Fixed issue with right clicking Number arrows
* Fixed issue with pop state in ASAP

### 0.8.29

* Switched event delegation in Upload to allow extra content
* Added `filedragenter`, `filedragover`, and `filedragleave` events to Upload (Thanks @Valamas!)
* Added multi-select range and modifier actions to Dropdown
* Fixed issue with `single` and `rtl` options in Carousel

### 0.8.28

* Fixed issue with resize mobile Lightbox
* Fixed issue with updating Dropdown Scrollbars (Thanks @cbier!)
* Removed `tap` event from Touch
* Resolved issue with IE pointer events in Touch

### 0.8.27

* Added `readonly` support to Checkbox (Thanks @Bonscho!), Dropdown, Number and Range
* Updated upload Demo to include `queue` event (Thanks @Bonscho!)

### 0.8.26

* Added matchMedia graceful degradation to Media Query, matches closest `fallbackWidth` and `fallbackHeight` values
* Added `ignoreTypes` option to ASAP to avoid loading downloadable files via AJAX
* Renamed `extensions` to `fileTypes` in Lightbox for consistency

### 0.8.25

* Fixed false positive on transitionEnd events in Transition
* Fixed issue with inaccessible Number inputs on iOS
* Increased initial pointer down delay in Number 
* Added `queued` event to Upload (Thanks @Bonscho!)

### 0.8.24

* Added `support.nativeMatchMedia` and `fallbackWidth` values for graceful degradation
* Added matchMedia graceful degradation to Carousel, matches closest `fallbackWidth` value

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

* Added `min-height` to Carousel items, resolves issue with accidentally empty carousels
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
* Fixed Touch click event error

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
