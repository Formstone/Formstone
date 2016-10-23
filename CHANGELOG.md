# Changelog

<!-- -->

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
