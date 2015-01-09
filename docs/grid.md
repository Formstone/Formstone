# Grid

A responsive CSS grid.

* [Use](#use)

## Use 

#### Main

```markup
grid.less
```

The grid works by nesting 'cells' within 'rows'. Cells are defined by classes that set widths at specific breakpoints. The breakpoints correspond to general screen sizes. By default, Grid renders 3 columns on 'small', 6 columns on 'medium' and 12 columns on 'large' displays.

### Markup

A basic example may look something like:

```markup
<body class="fs-grid">
	<div class="row">
		<div class="cell small-3 medium-2 large-4">...</div>
		<div class="cell small-3 medium-2 large-4">...</div>
		<div class="cell small-3 medium-2 large-4">...</div>
	</div>
</body>
```

This will create 3 cells that each span 3 columns on 'small', 2 columns on 'medium' and 4 columns on 'large' screens. Think of the nested structure like a directory tree:

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
| `min` | smaller than 500px | 300px | 3 |
| `small` | smaller than 740px | 480px | 3 |
| `medium` | 740px to 960px | 720px | 6 |
| `large` | 960px to 1220px | 960px | 12 |
| `max` | larger than 1220px | 1200px | 12 |

### Defining Cells

| Class | Description |
| --- | --- |
| `min-X` | only min size |
| `small-X` | both small and min sizes |
| `medium-X` | medium size |
| `large-X` | both large and max sizes |
| `max-X` | only max size |
| `all-X` | all sizes |

Cells will default to filling the available horizontal space but can be defined by the target screen size and column count. For example `small-2` will produce a cell spanning 2 of the 3 available columns within the 'small' screen size range. Cell classes can be stacked to specify column spans across all screen sizes:

```markup
<div class="cell small-3 medium-6 large-12">...</div>
```

The `max-X` and `min-X` classes adds level of control when targeting large and small screens. For example, a cell may need to span 2 columns at the small size, but span the full width at the min size:

```markup
<div class="cell min-3 small-2 ...">...</div>
```

The `all-X` classes will create a cell that spans the specified width on all screen sizes (only works with fraction cell counts):

```markup
<div class="cell all-third">...</div>
```

### Fraction Cells

The fraction classes can be used in place of specific column counts:

| Class | Description |
| --- | --- |
| `X-full` | entire row width |
| `X-half` | 1/2 row width |
| `X-third` | 1/3 row width |
| `X-fourth` | 1/4 row width |
| `X-fifth` | 1/5 row width |

### Hidden Cells

To hide cells at specific screen sizes:

| Class | Description |
| --- | --- |
| `min-hide` | Hide on min |
| `small-hide` | Hide on small |
| `medium-hide` | Hide on medium |
| `large-hide` | Hide on large |
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
| `@fs-grid-class-container` | `fs-grid` | Container class |
| `@fs-grid-class-row` | `row` | Row class |
| `@fs-grid-class-contained` | `contained` | Contained helper class |
| `@fs-grid-class-padded` | `padded` | Padded helper class |
| `@fs-grid-class-centered` | `centered` | Centered helper class |
| **Cells** | | |
| `@fs-grid-class-all` | `all` | All cell class |
| `@fs-grid-class-min` | `min` | Min cell class |
| `@fs-grid-class-small` | `small` | Small cell class |
| `@fs-grid-class-medium` | `medium` | Medium cell class |
| `@fs-grid-class-large` | `large` | Large cell class |
| `@fs-grid-class-max` | `max` | Max cell class |
| **Columns** | | |
| `@fs-grid-columns-small` | `3` | Small column count |
| `@fs-grid-columns-medium` | `6` | Medium column count |
| `@fs-grid-columns-large` | `12` | Large column count |
| **Widths** | | |
| `@fs-grid-width-min` | `300px` | Min row width |
| `@fs-grid-width-small` | `480px` | Small row width |
| `@fs-grid-width-medium` | `720px` | Medium row width |
| `@fs-grid-width-large` | `960px` | Large row width |
| `@fs-grid-width-max` | `1200px` | Max row width |
| **Breakpoints** | | |
| `@fs-grid-width-break-min` | `320px` | Min break width |
| `@fs-grid-width-break-small` | `500px` | Small break width |
| `@fs-grid-width-break-medium` | `740px` | Medium break width |
| `@fs-grid-width-break-large` | `980px` | Large break width |
| `@fs-grid-width-break-max` | `1220px` | Max break width |
| **Gutters** | | |
| `@fs-grid-gutter` | `1.0416666666666667%;` | Gutter width |

