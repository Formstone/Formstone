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
| `md` | 740px to 980px | 720px | 6 |
| `lg` | 980px to 1220px | 960px | 12 |
| `xl` | larger than 1220px | 1200px | 12 |

### Defining Cells

| Class | Description |
| --- | --- |
| `fs-xs-[x]` | only extra small size |
| `fs-sm-[x]` | both small and extra small sizes |
| `fs-md-[x]` | medium size |
| `fs-lg-[x]` | both large and extra large sizes |
| `fs-xl-[x]` | only extra large size |
| `fs-all-[x]` | all sizes |

Cells will default to filling the available horizontal space but can be defined by the target screen size and column count. For example `fs-sm-2` will produce a cell spanning 2 of the 3 available columns within the 'small' screen size range. Cell classes can be stacked to specify column spans across all screen sizes:

```markup
<div class="fs-cell fs-sm-3 fs-md-6 fs-lg-12">...</div>
```

The `fs-xl-[x]` and `fs-xs-[x]` classes adds level of control when targeting large and small screens. For example, a cell may need to span 2 columns at the small size, but span the full width at the extra small size:

```markup
<div class="fs-cell fs-xs-3 fs-sm-2 ...">...</div>
```

The `fs-all-[x]` classes will create a cell that spans the specified width on all screen sizes (only works with fraction cell counts):

```markup
<div class="fs-cell fs-all-third">...</div>
```

### Fraction Cells

The fraction classes can be used in place of specific column counts:

| Class | Description |
| --- | --- |
| `fs-[x]-full` | entire row width |
| `fs-[x]-half` | 1/2 row width |
| `fs-[x]-third` | 1/3 row width |
| `fs-[x]-fourth` | 1/4 row width |
| `fs-[x]-fifth` | 1/5 row width |

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
| **Gutters** | | |
| `@fs-grid-gutter` | `1.0416666666666667%;` | Gutter width |
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
| **Media Queries - Max** | | |
| `@fs-grid-mq-max-sm` | `499px` | Small max mq |
| `@fs-grid-mq-max-md` | `739px` | Medium max mq |
| `@fs-grid-mq-max-lg` | `979px` | Large max mq |
| `@fs-grid-mq-max-xl` | `1219px` | Extra Large max mq |
| **Media Queries - Min** | | |
| `@fs-grid-mq-min-sm` | `500px` | Small min mq |
| `@fs-grid-mq-min-md` | `740px` | Medium min mq |
| `@fs-grid-mq-min-lg` | `980px` | Large min mq |
| `@fs-grid-mq-min-xl` | `1220px` | Extra Large min mq |
| **Mixin-Only Grid** | | |
| `@fs-grid-mixin-only` | `false` | Disables generation of classes based grid |

### LESS Extends & Mixins 

Grid can be compiled into CSS directly. This allows for a similar declarative approach, without adding classes to markup. 

| Name | Description |
| --- | --- |
| **Extends** | |
| `.fs_grid_row` | Base row |
| `.fs_grid_row_fluid` | Base fluid row |
| `.fs_grid_row_fluid_sm` | Base fluid row (small only) |
| `.fs_grid_row_row` | Base nested row |
| `.fs_grid_row_row_contained` | Base nested row (parent cell is contained) |
| `.fs_grid_cell` | Base cell |
| `.fs_grid_cell_centered` | Base centered cell |
| `.fs_grid_cell_padded` | Base padded cell |
| `.fs_grid_cell_contained` | Base contained cell |
| `.fs_grid_cell_right` | Base right cell |
| **Mixins** | |
| `.fs_row();` | Base row |
| `.fs_row_fluid();` | Base row fluid |
| `.fs_row_fluid_sm();` | Base fluid row (small only) |
| `.fs_row_row();` | Base nested row |
| `.fs_row_row_contained();` | Base nested row (parent cell is contained) |
| `.fs_cell();` | Base cell |
| `.fs_cell_centered();` | Base centered cell |
| `.fs_cell_padded();` | Base padded cell |
| `.fs_cell_contained();` | Base contained cell |
| `.fs_cell_right();` | Base right cell |
| `.fs_cell_xs(@count [, @total]);` | Extra Small cell; Pass @total to define fractions |
| `.fs_cell_sm(@count [, @total]);` | Small cell; Pass @total to define fractions |
| `.fs_cell_md(@count [, @total]);` | Medium cell; Pass @total to define fractions |
| `.fs_cell_lg(@count [, @total]);` | Large cell; Pass @total to define fractions |
| `.fs_cell_xl(@count [, @total]);` | Extra Large cell; Pass @total to define fractions |
| `.fs_push_xs(@count [, @total]);` | Extra Small push; Pass @total to define fractions |
| `.fs_push_sm(@count [, @total]);` | Small push; Pass @total to define fractions |
| `.fs_push_md(@count [, @total]);` | Medium push; Pass @total to define fractions |
| `.fs_push_lg(@count [, @total]);` | Large push; Pass @total to define fractions |
| `.fs_push_xl(@count [, @total]);` | Extra Large push; Pass @total to define fractions |
