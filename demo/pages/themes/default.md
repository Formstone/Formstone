{"template":"themes.html","title":"Themes","site_root":"../","asset_root":"../","component_root":"../components/"}

# Themes

Theme support is planned for the 0.9.0 release. The goal is to further separate the structure and functionality of a component from the visual styles, allowing developers to more easily customize an individual component without needing to override and repeat as many styles. Themes are essentially CSS classes added to the component, similar to the `customClass` option found in many plugins. All styles not integral to the function of the component will be moved to separate files containing scoped, theme-specific selectors. The default theme will be named 'Light' (`fs-light`) and match the current component designs, as well as introduce new styles for previously un-styled components, like Pagination. Full theme files can be included, or individual component-specific theme files can be compiled from src.

**Note:** This will not be a drop in upgrade because of the CSS selector specificity changes required. Code updates should be minor (if including the 'Light' theme), and will usually involve simply modifying custom selectors to match the new specificity.

A 0.8.x branch will continue to be supported into 2016, however developers are encouraged to upgrade to take advantage of the lighter, less restrictive code base, especially on heavily customize interfaces.

[Follow along with the changes on GitHub.](https://github.com/Formstone/Formstone/issues/87)

## Preview

<ul>
	<li>[Raw](../themes/raw/)</li>
	<li>[Light](../themes/light/)</li>
	<!-- <li>[Dark](../themes/dark/)</li> -->
</ul>