{"template":"content.html","title":"Changelog","site_root":"../","asset_root":"../","component_root":"../components/"} 

# Changelog

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
