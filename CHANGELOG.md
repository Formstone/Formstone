# Changelog

<!-- -->

### 1.4.9

* Added `autoplay` attribute to `video` tags in Background
* Fixed issue with alignment on `-contained` and `-padded` cells in Grid

### 1.4.8

* Added mobile auto-play video support in Background
* Added `threshold` and `time` options in Touch
* Fixed issue with `matchWidth: false` paging in Carousel
* Fixed issue with page scrolling in Carousel

### 1.4.7

* Fixed issue with nested cell widths in Grid for legacy IE

### 1.4.6

* Added `parent` scroll context support in Checkpoint
* Fixed issue with Carousel

### 1.4.5

* Fixed issue with `-first` and `-last` classes in Grid
* Fixed issue with inactive animations in Checkpoint

### 1.4.4

* Added option to select multiple items without pressing 'ctl' key in Dropdown (Thanks @qtsd!)
* Fixed issue with `contained` classes in Grid
* Fixed issue with default behavior in Number

### 1.4.3

* Fixed issue with 'autoAdvanced' in Carousel
* Fixed issue with 'first' and 'last' cells in Grid
* Fixed issue with image URL detection in Lightbox
* Renamed 'mobile' to 'overlay' in Lightbox

### 1.4.2

* Fixed issue with 'paged' counts in Carousel
* Fixed issue with cell alignment in Grid

### 1.4.1

* Added `alt` option in Background
* Added aria labeling options in Carousel, Lightbox, and Pagination
* Fixed issue with nested rows in Grid
* Fixed issue with initialization in Checkpoint
* Fixed issue with label selector in Dropdown
* Fixed issue with rounding small steps in Number
* Fixed issue with accessibility in Pagination (Thanks @nhall!)

### 1.4.0

* Updated minimum jQuery version
* Updated to Gulp build process
* Added flexbox based grid as default (legacy float based grid still available)
* Added Checkpoint plugin for CSS animations scroll
* Added Sticky plugin for sticky elements on scroll
* Added Formstone.Ready handler to Core
* Added additional AJAX parameters in Upload events
* Fixed issue with moving input elements in Checkbox
* Fixed issue with load order and `setup` calls
* Renamed `mobile` option to `native` in Dropdown for clarity
* Removed Modernizr requirement
* Removed legacy browser support

### 1.3.3

* Added compiled theme files for each component
* Fixed issue with un-contained Carousel item focus

### 1.3.2

* Fixed issue with Viewer in Lightbox (Thanks @mackensen!)
* Fixed issue with inline content in Lightbox
* Fixed issue with focus in Lightbox

### 1.3.1

* Added viewport and gesture locking for touch based components
* Added `maxFile` option in Upload
* Renamed `maxQueue` option to `maxConcurrent` in Upload for clarity
* Fixed error handling in Lightbox
* Fixed issue with Scrollbar jumping in Firefox
* Fixed issue with Scrollbar handle closing Dropdown
* Fixed issue with `wheel` event on Scrollbar track
* Fixed Viewer styling issue in Lightbox theme
* Fixed issue when installing via NPM
* Deprecated YouTube options in Background for TOS compliance

### 1.3.0

* Added Viewer component
* Added file chunking to Upload
* Added load error event to Background
* Added `jumpItem` method to Carousel
* Aliased `jump`, `previous`, and `next` methods to `jumpPage`, `previousPage`, and `nextPage` in Carousel
* Fixed protocol agnostic YouTube thumbnail in Background
* Fixed Navigation styles in fs-light base theme
* Fixed issue with mobile dropdown options in Pagination

### 1.2.2

* Fixed issue with Dropdown options in WebKit/Blink on mobile

### 1.2.1

* Added ability to define custom fields for scroll depth events in Analytics
* Fixed issue with accessing target element from `beforeSend` callback in Upload
* Fixed video sizing issue in Lightbox
* Fixed link actions in Pagination
* Removed erroneous `vertical` option in Tabs

### 1.2.0

* Added `lazy` and `lazyEdge` options to Background
* Added `update` method to Number
* Added `update` method to Range
* Added example code to demos
* Added custom pagination container in Carousel
* Fixed accessibility issues in Checkbox
* Fixed accessibility issues in Dropdown
* Fixed accessibility issues in Lightbox
* Fixed accessibility issues in Navigation
* Fixed accessibility issues in Number
* Fixed accessibility issues in Pagination
* Fixed accessibility issues in Scrollbar
* Fixed accessibility issues in Range
* Fixed accessibility issues in Tabs
* Fixed accessibility issues in Upload
* Fixed `visible` classing in Pagination
* Fixed `disabled` hover state in Range
* Normalized setting `active` item in Pagination
* Removed non-standard `readonly` support from Checkbox

### 1.1.3

* Fixed link actions in Pagination
* Fixed display bug in Upload

### 1.1.2

* Added `accept` option to Upload

### 1.1.1

* Fixed issue with iOS `change` events in Dropdown
* Fixed webkit touch scrolling in Lightbox
* Fixed webkit touch scrolling in Navigation (Thanks @nhall!)

### 1.1.0

* Added `thumbnail` option to Lightbox
* Added `maxHeight` and `maxWidth` options for element modals in Lightbox
* Added linked carousel support to Carousel
* Added controller carousel support to Carousel
* Fixed `rtl` positioning in Carousel
* Fixed issues with Dropdown option container positioning

### 1.0.4

* Fixed issue with empty option values in Dropdown

### 1.0.3

* Fixed issue with multiple bindings in Media Query

### 1.0.2

* Fixed issue with fragment identifier linking in Tabs

### 1.0.1

* Fixed issue with `play` method in Background

### 1.0.0

* Added theme support for all Widget plugins
* Added fs-light base theme
* Added AMD module wrappers to all components
* Added custom video formatters in Lightbox
* Fixed issue with removing data in Cookie
