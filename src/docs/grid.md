The grid works by nesting 'cells' within 'rows'. Cells are defined by classes that set widths at specific breakpoints. The breakpoints correspond to general screen sizes. By default, Grid renders 3 columns on 'small', 6 columns on 'medium' and 12 columns on 'large' displays.

### Markup

A basic example may look something like:

```markup
<body class="fs-grid">
	<div class="fs-row">
		<div class="fs-cell fs-sm-3 fs-md-2 fs-lg-4">...</div>
		<div class="fs-cell fs-sm-3 fs-md-2 fs-lg-4">...</div>
		<div class="fs-cell fs-sm-3 fs-md-2 fs-lg-4">...</div>
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
| `xs` | smaller than 500px | 300px | 3 |
| `sm` | smaller than 740px | 480px | 3 |
| `md` | 740px to 960px | 720px | 6 |
| `lg` | 960px to 1220px | 960px | 12 |
| `xl` | larger than 1220px | 1200px | 12 |

### Defining Cells

| Class | Description |
| --- | --- |
| `xs-X` | only extra small size |
| `sm-X` | both small and extra small sizes |
| `md-X` | medium size |
| `lg-X` | both large and extra large sizes |
| `xl-X` | only extra large size |
| `all-X` | all sizes |

Cells will default to filling the available horizontal space but can be defined by the target screen size and column count. For example `fs-sm-2` will produce a cell spanning 2 of the 3 available columns within the 'small' screen size range. Cell classes can be stacked to specify column spans across all screen sizes:

```markup
<div class="fs-cell fs-sm-3 fs-md-6 fs-lg-12">...</div>
```

The `fs-xl-X` and `fs-xs-X` classes adds level of control when targeting large and small screens. For example, a cell may need to span 2 columns at the small size, but span the full width at the extra small size:

```markup
<div class="fs-cell fs-xs-3 fs-sm-2 ...">...</div>
```

The `fs-all-X` classes will create a cell that spans the specified width on all screen sizes (only works with fraction cell counts):

```markup
<div class="fs-cell fs-all-third">...</div>
```

### Fraction Cells

The fraction classes can be used in place of specific column counts:

| Class | Description |
| --- | --- |
| `fs-X-full` | entire row width |
| `fs-X-half` | 1/2 row width |
| `fs-X-third` | 1/3 row width |
| `fs-X-fourth` | 1/4 row width |
| `fs-X-fifth` | 1/5 row width |

### Hidden Cells

To hide cells at specific screen sizes:

| Class | Description |
| --- | --- |
| `fs-xs-hide` | Hide on extra small |
| `fs-sm-hide` | Hide on small |
| `fs-md-hide` | Hide on medium |
| `fs-lg-hide` | Hide on large |
| `fs-xl-hide` | Hide on extra large |

### Helper Classes

Helper classes can be added to cells to modify their default behavior in predictable ways.

| Class | Description |
| --- | --- |
| `fs-padded` | Swaps cell margin for padding. Allows backgrounds to touch while maintaining gutters. |
| `fs-contained` | Removes cell margin. Allows backgrounds to touch by removing gutters. |
| `fs-centered` | Centers cell. Useful for centering odd column count cells. |
| `fs-right` | Right aligns cell. Useful for changing document flow on different device sizes. |

### LESS Configuration

Grid can also be configured and rebuilt using Grunt. Simply edit the variables found in `/src/grid/grid-config.less` before running the default `grunt` process.

| Variable | Default | Description |
| --- | --- | --- |
| **Structure** | | |
| `@fs-grid-class-container` | `fs-grid` | Container class |
| `@fs-grid-class-row` | `fs-row` | Row class |
| `@fs-grid-class-contained` | `fs-contained` | Contained helper class |
| `@fs-grid-class-padded` | `fs-padded` | Padded helper class |
| `@fs-grid-class-centered` | `fs-centered` | Centered helper class |
| **Cells** | | |
| `@fs-grid-class-all` | `fs-all` | All cell class |
| `@fs-grid-class-xs` | `fs-xs` | Extra Small cell class |
| `@fs-grid-class-sm` | `fs-sm` | Small cell class |
| `@fs-grid-class-md` | `fs-md` | Medium cell class |
| `@fs-grid-class-lg` | `fs-lg` | Large cell class |
| `@fs-grid-class-xl` | `fs-xl` | Extra Large cell class |
| **Columns** | | |
| `@fs-grid-columns-sm` | `3` | Small column count |
| `@fs-grid-columns-md` | `6` | Medium column count |
| `@fs-grid-columns-lg` | `12` | Large column count |
| **Widths** | | |
| `@fs-grid-width-xs` | `300px` | Extra Small row width |
| `@fs-grid-width-sm` | `480px` | Small row width |
| `@fs-grid-width-md` | `720px` | Medium row width |
| `@fs-grid-width-lg` | `960px` | Large row width |
| `@fs-grid-width-xl` | `1200px` | Extra Large row width |
| **Breakpoints** | | |
| `@fs-grid-width-break-xs` | `320px` | Extra Small break width |
| `@fs-grid-width-break-sm` | `500px` | Small break width |
| `@fs-grid-width-break-md` | `740px` | Medium break width |
| `@fs-grid-width-break-lg` | `980px` | Large break width |
| `@fs-grid-width-break-xl` | `1220px` | Extra Large break width |
| **Gutters** | | |
| `@fs-grid-gutter` | `1.0416666666666667%;` | Gutter width |