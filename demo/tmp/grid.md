{"template":"component.html","title":"Grid","demo":"<style>\n\t* { *behavior: url(/components/Formstone/grid/boxsizing.htc); }\n\n\t.demo .example { margin-bottom: 30px; margin-top: 0; }\n\t.demo .example [class*=\"desktop-\"] { background: #ccc; color: #fff; border-radius: 2px; margin-bottom: 1.8%; overflow: hidden; padding-top: 10px; padding-bottom: 10px; text-align: center; }\n\t.demo .example .row .row [class*=\"desktop-\"] { background: rgba(255, 255, 255, 0.25); margin-bottom: 0; }\n\t.demo .example .row:hover [class*=\"desktop-\"] { background: #999; }\n\t.demo .example .row:hover [class*=\"desktop-\"] [class*=\"desktop-\"] { background: rgba(255, 255, 255, 0.25); margin-bottom: 0; }\n\n\t.label_d { display: block; }\n\t.label_t,\n\t.label_m { display: none; }\n\n\t.button.bookmarklet { background: #999; clear: both; float: left; padding: 0 20px; width: auto; }\n\n\t@media screen and (max-width: 979px) {\n\t\t.label_d { display: none; }\n\t}\n\t@media screen and (min-width: 740px) and (max-width: 979px) {\n\t\t.label_t { display: block; }\n\t}\n\t@media screen and (min-width: 0px) and (max-width: 739px) {\n\t\t.label_m { display: block; }\n\t}\n</style>\n\n<p>\n\t<a href=\"grid-adaptive.html\">Switch to Adaptive Grid</a>\n\t<a href=\"grid-fluid-mobile.html\">Switch to Fluid Mobile Grid</a>\n</p>\n\n\n<!-- Bookmarklet -->\n<h3>Bookmarklet</h3>\n<p>Drag the bookmarklet to your bookmarks bar.</p>\n<a href=\"javascript:(function(){if(typeof%20GridlockBookmarklet=='undefined'){document.body.appendChild(document.createElement('script')).src='http://formstone.it/js/gridlock.bookmarklet.js';}else{GridlockBookmarklet();}})();\" class=\"button bookmarklet\">Gridlock</a>\n<br class=\"clear\">\n<p>Or, include it on every page of your development site:</p>\n<pre class=\"example\"><code class=\"language-markup\">&lt;script&gt;\n(function(){if(typeof GridlockBookmarklet=='undefined'){document.body.appendChild(document.createElement('script')).src='http://formstone.it/js/gridlock.bookmarklet.js';}else{GridlockBookmarklet();}})();\n&lt;/script&gt;</code></pre>\n\n<!-- Asymmetrical -->\n<h3>Asymmetrical</h3>\n<pre class=\"example\"><code class=\"language-markup\">&lt;body class=&quot;grid&quot;&gt;\n&lt;div class=&quot;row&quot;&gt;\n\t&lt;div class=&quot;desktop-4 tablet-2 mobile-1&quot;&gt;\n\t\tSidebar\n\t&lt;/div&gt;\n\t&lt;div class=&quot;desktop-8 tablet-4 mobile-3&quot;&gt;\n\t\tContent\n\t&lt;/div&gt;\n&lt;/div&gt;\n&lt;/body&gt;</code></pre>\n\n<h5>Demo</h5>\n<div class=\"example\">\n\t<div class=\"row\">\n\t\t<div class=\"desktop-4 tablet-2 mobile-1\">\n\t\t\t<span class=\"label_d\">desktop-4</span>\n\t\t\t<span class=\"label_t\">tablet-2</span>\n\t\t\t<span class=\"label_m\">mobile-1</span>\n\t\t</div>\n\t\t<div class=\"desktop-8 tablet-4 mobile-2\">\n\t\t\t<span class=\"label_d\">desktop-8</span>\n\t\t\t<span class=\"label_t\">tablet-4</span>\n\t\t\t<span class=\"label_m\">mobile-2</span>\n\t\t</div>\n\t</div>\n</div>\n<!-- END Asymmetrical -->\n\n<!-- Symmetrical -->\n<h3>Symmetrical</h3>\n\n<pre class=\"example\"><code class=\"language-markup\">&lt;body class=&quot;grid&quot;&gt;\n&lt;div class=&quot;row&quot;&gt;\n\t&lt;div class=&quot;desktop-3 tablet-3 mobile-3&quot;&gt;\n\t\tOne\n\t&lt;/div&gt;\n\t&lt;div class=&quot;desktop-3 tablet-3 mobile-3&quot;&gt;\n\t\tTwo\n\t&lt;/div&gt;\n\t&lt;div class=&quot;desktop-3 tablet-3 mobile-3&quot;&gt;\n\t\tThree\n\t&lt;/div&gt;\n\t&lt;div class=&quot;desktop-3 tablet-3 mobile-3&quot;&gt;\n\t\tFour\n\t&lt;/div&gt;\n&lt;/div&gt;\n&lt;/body&gt;</code></pre>\n\n<h5>Demo</h5>\n\n<div class=\"example\">\n\t<div class=\"row\">\n\t\t<div class=\"desktop-3 tablet-3 mobile-3\">\n\t\t\t<span class=\"label_d\">desktop-3</span>\n\t\t\t<span class=\"label_t\">tablet-3</span>\n\t\t\t<span class=\"label_m\">mobile-3</span>\n\t\t</div>\n\t\t<div class=\"desktop-3 tablet-3 mobile-3\">\n\t\t\t<span class=\"label_d\">desktop-3</span>\n\t\t\t<span class=\"label_t\">tablet-3</span>\n\t\t\t<span class=\"label_m\">mobile-3</span>\n\t\t</div>\n\t\t<div class=\"desktop-3 tablet-3 mobile-3\">\n\t\t\t<span class=\"label_d\">desktop-3</span>\n\t\t\t<span class=\"label_t\">tablet-3</span>\n\t\t\t<span class=\"label_m\">mobile-3</span>\n\t\t</div>\n\t\t<div class=\"desktop-3 tablet-3 mobile-3\">\n\t\t\t<span class=\"label_d\">desktop-3</span>\n\t\t\t<span class=\"label_t\">tablet-3</span>\n\t\t\t<span class=\"label_m\">mobile-3</span>\n\t\t</div>\n\t</div>\n</div>\n<!-- END Symmetrical -->\n\n<!-- 3 Column -->\n<h3>3 Column</h3>\n<pre class=\"example\"><code class=\"language-markup\">&lt;body class=&quot;grid&quot;&gt;\n&lt;div class=&quot;row&quot;&gt;\n\t&lt;div class=&quot;desktop-4 tablet-2 mobile-1&quot;&gt;\n\t\tOne\n\t&lt;/div&gt;\n\t&lt;div class=&quot;desktop-4 tablet-2 mobile-1&quot;&gt;\n\t\tTwo\n\t&lt;/div&gt;\n\t&lt;div class=&quot;desktop-4 tablet-2 mobile-1&quot;&gt;\n\t\tThree\n\t&lt;/div&gt;\n&lt;/div&gt;\n&lt;/body&gt;</code></pre>\n\n<h5>Demo</h5>\n\n<div class=\"example\">\n\t<div class=\"row\">\n\t\t<div class=\"desktop-4 tablet-2 mobile-1\">\n\t\t\t<span class=\"label_d\">desktop-4</span>\n\t\t\t<span class=\"label_t\">tablet-2</span>\n\t\t\t<span class=\"label_m\">mobile-1</span>\n\t\t</div>\n\t\t<div class=\"desktop-4 tablet-2 mobile-1\">\n\t\t\t<span class=\"label_d\">desktop-4</span>\n\t\t\t<span class=\"label_t\">tablet-2</span>\n\t\t\t<span class=\"label_m\">mobile-1</span>\n\t\t</div>\n\t\t<div class=\"desktop-4 tablet-2 mobile-1\">\n\t\t\t<span class=\"label_d\">desktop-4</span>\n\t\t\t<span class=\"label_t\">tablet-2</span>\n\t\t\t<span class=\"label_m\">mobile-1</span>\n\t\t</div>\n\t</div>\n</div>\n<!-- END 3 Column -->\n\n<!-- Push -->\n<h3>Push</h3>\n\n<pre class=\"example\"><code class=\"language-markup\">&lt;body class=&quot;grid&quot;&gt;\n&lt;div class=&quot;row&quot;&gt;\n\t&lt;div class=&quot;desktop-4 desktop-push-4 tablet-2 tablet-push-2 mobile-2 mobile-push-1&quot;&gt;&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=&quot;row&quot;&gt;\n\t&lt;div class=&quot;desktop-4 desktop-push-2 tablet-2 tablet-push-1 mobile-1&quot;&gt;&lt;/div&gt;\n\t&lt;div class=&quot;desktop-4 tablet-2 mobile-1&quot;&gt;&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=&quot;row&quot;&gt;\n\t&lt;div class=&quot;desktop-12 tablet-6 mobile-3&quot;&gt;&lt;/div&gt;\n&lt;/div&gt;\n&lt;/body&gt;</code></pre>\n\n<h5>Demo</h5>\n<div class=\"example\">\n\t<div class=\"row\">\n\t\t<div class=\"desktop-4 desktop-push-4 tablet-2 tablet-push-2 mobile-2 mobile-push-1\">\n\t\t\t<span class=\"label_d\">desktop-4 desktop-push-4</span>\n\t\t\t<span class=\"label_t\">tablet-2 tablet-push-2</span>\n\t\t\t<span class=\"label_m\">mobile-2 mobile-push-1</span>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"desktop-4 desktop-push-2 tablet-2 tablet-push-1 mobile-1\">\n\t\t\t<span class=\"label_d\">desktop-4 desktop-push-2</span>\n\t\t\t<span class=\"label_t\">tablet-2 tablet-push-1</span>\n\t\t\t<span class=\"label_m\">mobile-1</span>\n\t\t</div>\n\t\t<div class=\"desktop-4 tablet-2 mobile-1 mobile-1\">\n\t\t\t<span class=\"label_d\">desktop-4</span>\n\t\t\t<span class=\"label_t\">tablet-2</span>\n\t\t\t<span class=\"label_m\">mobile-1</span>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"desktop-12 tablet-6 mobile-3\">\n\t\t\t<span class=\"label_d\">desktop-12</span>\n\t\t\t<span class=\"label_t\">tablet-6</span>\n\t\t\t<span class=\"label_m\">mobile-3</span>\n\t\t</div>\n\t</div>\n</div>\n<!-- END Push -->\n\n<!-- Centered -->\n<h3>Centered</h3>\n<pre class=\"example\"><code class=\"language-markup\">&lt;body class=&quot;grid&quot;&gt;\n&lt;div class=&quot;row&quot;&gt;\n\t&lt;div class=&quot;desktop-7 tablet-3 mobile-1 centered&quot;&gt;\n\t\tOne\n\t&lt;/div&gt;\n\t&lt;div class=&quot;desktop-7 tablet-3 mobile-1  centered&quot;&gt;\n\t\tTwo\n\t&lt;/div&gt;\n\t&lt;div class=&quot;desktop-7 tablet-3 mobile-1  centered&quot;&gt;\n\t\tThree\n\t&lt;/div&gt;\n&lt;/div&gt;\n&lt;/body&gt;</code></pre>\n\n<h5>Demo</h5>\n\n<div class=\"example\">\n\t<div class=\"row\">\n\t\t<div class=\"desktop-7 tablet-3 mobile-1  centered\">\n\t\t\t<span class=\"label_d\">desktop-7</span>\n\t\t\t<span class=\"label_t\">tablet-3</span>\n\t\t\t<span class=\"label_m\">mobile-1</span>\n\t\t</div>\n\t\t<div class=\"desktop-7 tablet-3 mobile-1  centered\">\n\t\t\t<span class=\"label_d\">desktop-7</span>\n\t\t\t<span class=\"label_t\">tablet-3</span>\n\t\t\t<span class=\"label_m\">mobile-1</span>\n\t\t</div>\n\t\t<div class=\"desktop-7 tablet-3 mobile-1  centered\">\n\t\t\t<span class=\"label_d\">desktop-7</span>\n\t\t\t<span class=\"label_t\">tablet-3</span>\n\t\t\t<span class=\"label_m\">mobile-1</span>\n\t\t</div>\n\t</div>\n</div>\n<!-- END Centered -->\n\n<!-- Padded -->\n<h3>Padded</h3>\n\n<pre class=\"example\"><code class=\"language-markup\">&lt;body class=&quot;grid&quot;&gt;\n\t&lt;div class=&quot;row&quot;&gt;\n\t\t&lt;div class=&quot;desktop-4 tablet-2 mobile-1 padded&quot;&gt;\n\t\t\tSidebar\n\t\t&lt;/div&gt;\n\t\t&lt;div class=&quot;desktop-8 tablet-4 mobile-2 padded&quot;&gt;\n\t\t\tContent\n\t\t&lt;/div&gt;\n\t&lt;/div&gt;\n&lt;/body&gt;</code></pre>\n\n<h5>Demo</h5>\n<div class=\"example\">\n\t<div class=\"row\">\n\t\t<div class=\"desktop-4 tablet-2 mobile-1 padded\" style=\"background-color: #ccc;\">\n\t\t\t<span class=\"label_d\">desktop-4</span>\n\t\t\t<span class=\"label_t\">tablet-2</span>\n\t\t\t<span class=\"label_m\">mobile-1</span>\n\t\t</div>\n\t\t<div class=\"desktop-8 tablet-4 mobile-2 padded\" style=\"background-color: #999;\">\n\t\t\t<span class=\"label_d\">desktop-8</span>\n\t\t\t<span class=\"label_t\">tablet-4</span>\n\t\t\t<span class=\"label_m\">mobile-2</span>\n\t\t</div>\n\t</div>\n</div>\n<!-- END Padded -->\n\n<!-- Contained -->\n<h3>Contained</h3>\n\n<pre class=\"example\"><code class=\"language-markup\">&lt;body class=&quot;grid&quot;&gt;\n&lt;div class=&quot;row&quot;&gt;\n\t&lt;div class=&quot;desktop-4 tablet-2 mobile-1 contained&quot;&gt;\n\t\tSidebar\n\t&lt;/div&gt;\n\t&lt;div class=&quot;desktop-8 tablet-4 mobile-2 contained&quot;&gt;\n\t\tContent\n\t&lt;/div&gt;\n&lt;/div&gt;\n&lt;/body&gt;</code></pre>\n\n<h5>Demo</h5>\n<div class=\"example\">\n\t<div class=\"row\">\n\t\t<div class=\"desktop-4 tablet-2 mobile-1 contained\" style=\"background-color: #ccc;\">\n\t\t\t<span class=\"label_d\">desktop-4</span>\n\t\t\t<span class=\"label_t\">tablet-2</span>\n\t\t\t<span class=\"label_m\">mobile-1</span>\n\t\t</div>\n\t\t<div class=\"desktop-8 tablet-4 mobile-2 contained\" style=\"background-color: #999;\">\n\t\t\t<span class=\"label_d\">desktop-8</span>\n\t\t\t<span class=\"label_t\">tablet-4</span>\n\t\t\t<span class=\"label_m\">mobile-2</span>\n\t\t</div>\n\t</div>\n</div>\n<!-- END Contained -->"}

# Grid

A responsive CSS grid.

* [Use](#use)
* [Demo](#demo)


## Use 

The grid works by nesting 'cells' within 'rows'. Cells are defined by classes that set widths at specific breakpoints. The breakpoints correspond to general screen sizes. By default, Grid renders 3 columns on mobile, 6 columns on tablet and 12 columns on desktop.

### Markup

A basic example may look something like:

```markup
<body class="grid">
	<div class="row">
		<div class="mobile-3 tablet-2 desktop-4">...</div>
		<div class="mobile-3 tablet-2 desktop-4">...</div>
		<div class="mobile-3 tablet-2 desktop-4">...</div>
	</div>
</body>
```

This will create 3 cells that each span 3 columns on mobile, 2 columns on tablet and 4 columns on desktop screen sizes. Think of the nested structure like a directory tree:

```
grid
├─ row
|  ├─ cell
|  |─ cell
|  |  └─ row
|  |     ├─ cell
|  |     └─ cell
|  └─ cell
└─ row
   ├─ cell
   └─ cell
```

### Box-Sizing

Grid relies on border-box and includes a global box-sizing reset:

```css
*,
*:before,
*:after {
	box-sizing: border-box;
}
```

This will effect every element on the page and can have unexpected results. In the long run it will help speed development by modifying how padding and borders effect the box model calculations. [Learn more about border-box](http://www.paulirish.com/2012/box-sizing-border-box-ftw/).

### Row Widths and Columns Counts

| Name | Screen Size | Row Width | Column Count |
| --- | --- | --- | --- |
| min | smaller than 500px | 300px | 3 |
| mobile | smaller than 740px | 480px | 3 |
| tablet | 740px to 960px | 720px | 6 |
| desktop | 960px to 1220px | 960px | 12 |
| max | larger than 1220px | 1200px | 12 |

### Defining Cells

| Class | Description |
| --- | --- |
| `min-X` | only min size |
| `mobile-X` | both mobile and min sizes |
| `tablet-X` | tablet size |
| `desktop-X` | both desktop and max sizes |
| `max-X` | only max size |
| `all-X` | all sizes |

Cells are defined by the target screen size and column count, relative to it's screen size. For example `mobile-2` will produce a cell spanning 2 of the 3 available columns in the mobile screen size range. Cell classes should be stacked to specify column spans across all screen sizes:

```markup
<div class="mobile-3 tablet-6 desktop-12">...</div>
```

The `max-X` and `min-X` classes adds level of control when targeting the desktop and mobile sizes. For example, a cell may need to span 2 columns at the larger mobile size, but span the full width at the smallest mobile size:

```markup
<div class="min-3 mobile-2 ...">...</div>
```

The `all-X` classes will create a cell that spans the specified width on all screen sizes (only works with fraction cells):

```markup
<div class="all-full ...">...</div>
```

### Fraction Cells

The fraction classes can be used in place of specific column counts:

| Class | Description |
| --- | --- |
| `X-full` | entire row width |
| `X-half` | 1/2 row width |
| `X-third` | 1/3 row width |
| `X-fourth` | 1/4 row width |

### Hidden Cells

To hide cells at specific screen sizes:

| Class | Description |
| --- | --- |
| `min-hide` | Hide on min |
| `mobile-hide` | Hide on mobile |
| `tablet-hide` | Hide on tablet |
| `desktop-hide` | Hide on desktop |
| `max-hide` | Hide on max |

### Helper Classes

Helper classes can be added to cells to modify their default behavior in predictable ways.

| Class | Description |
| --- | --- |
| `padded` | Swaps cell margin for padding. Allows backgrounds to touch while maintaining gutters. |
| `contained` | Removes cell margin. Allows backgrounds to touch by removing gutters. |
| `centered` | Centers cell. Useful for centering odd column count cells. |
| `right` | Right aligns cell. Useful for changing document flow on different device sizes. |

### LESS Configuration

Grid can also be configured and rebuilt using Grunt. Simply edit the variables found in `/src/grid/grid-config.less` before running the default `grunt` process.

| Variable | Default | Description |
| --- | --- | --- |
| **Structure** | | |
| `@fs-grid-class-container` | `grid` | Container class |
| `@fs-grid-class-row` | `row` | Row class |
| `@fs-grid-class-contained` | `contained` | Contained helper class |
| `@fs-grid-class-padded` | `padded` | Padded helper class |
| `@fs-grid-class-centered` | `centered` | Centered helper class |
| **Cells** | | |
| `@fs-grid-class-all` | `all` | All cell class |
| `@fs-grid-class-min` | `min` | Min cell class |
| `@fs-grid-class-mobile` | `mobile` | Mobile cell class |
| `@fs-grid-class-tablet` | `tablet` | Tablet cell class |
| `@fs-grid-class-desktop` | `desktop` | Desktop cell class |
| `@fs-grid-class-max` | `max` | Max cell class |
| **Columns** | | |
| `@fs-grid-columns-mobile` | `3` | Mobile column count |
| `@fs-grid-columns-tablet` | `6` | Tablet column count |
| `@fs-grid-columns-desktop` | `12` | Desktop column count |
| **Widths** | | |
| `@fs-grid-width-min` | `300px` | Min row width |
| `@fs-grid-width-mobile` | `480px` | Mobile row width |
| `@fs-grid-width-tablet` | `720px` | Tablet row width |
| `@fs-grid-width-desktop` | `960px` | Desktop row width |
| `@fs-grid-width-max` | `1200px` | Max row width |
| **Breakpoints** | | |
| `@fs-grid-width-break-min` | `320px` | Min break width |
| `@fs-grid-width-break-mobile` | `500px` | Mobile break width |
| `@fs-grid-width-break-tablet` | `740px` | Tablet break width |
| `@fs-grid-width-break-desktop` | `980px` | Desktop break width |
| `@fs-grid-width-break-max` | `1220px` | Max break width |
| **Gutters** | | |
| `@fs-grid-gutter` | `1.0416666666666667%;` | Gutter width |

