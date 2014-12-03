# Grid

A responsive CSS grid.

* [Use](#use)


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

