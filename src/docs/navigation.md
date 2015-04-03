### Basic

Navigation will automatically turn a basic navigation into a mobile friendly system. Links can be styled independently:

```javascript
$("nav").navigation();
```

```markup
<h4 id="handle">Navigation</h4>
<nav data-navigation-handle="#handle">
	<a href="#">Home</a>
	<a href="#">About</a>
	<a href="#">Contact</a>
</nav>
```

### Breakpoint

By default, Navigation will enable itself on screens smaller then 980 pixels wide. Specify a different width by setting the `maxWidth` option on initialization.

```javascript
$("nav").navigation({
	maxWidth: "740px"
});
```

### Slide Out

Navigation can also slide out from the left or right hand side of the screen. The nav can 'push' the main page content by specifying the `data-navigation-content` attribute:

```javascript
$("nav").navigation();
```

```markup
<h4 id="handle">Navigation</h4>
<nav data-navigation-handle="#handle" data-navigation-content="#content">
	<a href="#">Home</a>
	<a href="#">About</a>
	<a href="#">Contact</a>
</nav>
<div id="content">
	...
</nav>
```

<h3>Events</h3>

React to the navigation by listening for the `open.navigation` and `close.navigation` events:

```javascript
$("nav").on("open.navigation", function() {
	// ...
}).on("close.navigation", function() {
	// ...
});
```

### IE Support

When supporting IE, a [HTML5 enabler](https://gist.github.com/benplum/8045366) and matchMedia polyfill ([IE 8](https://gist.github.com/benplum/8045336), [IE 9](https://gist.github.com/benplum/8045327)) are required.