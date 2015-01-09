{"template":"content.html","title":"Getting Started","site_root":"../","asset_root":"../","component_root":"../components/"}

# Getting Started

Formstone is designed to be implemented easily without negatively impacting an existing project. Scripts are wrapped in self-executing closures and styles are individually name spaced to avoid collisions.

## Deploy

The first step is to deploy the package, either by downloading the package from GitHub or using Bower, a front-end package manager. Formstone can be deployed and updated via the command line with Bower:

```
bower install formstone
```

Note: Bower will install the package in a `bower-components` directory by default. We suggest setting a more URL-friendly directory in the .bowerrc file:

```javascript
{
    "directory": "components"
}
```

## Implement

The `core.js` file is a main dependency for all javascript based components:

```markup
<script src="/components/formstone/dist/js/core.js"></script>
```

Components can be implemented by including the required files and dependencies directly, or by hooking into a current build scripts:

```markup
<link href="/components/formstone/dist/css/component.css" rel="stylesheet">
<script src="/components/formstone/dist/js/component.js"></script>
```

## Customize

When customizing any component, best practice is to deploy the production files as provided then implement and extend the component's properties in local scripts and styles. This ensures the ability to update any component without overwriting custom styles. LESS variables can be 'lazy-loaded' for specific components when compiling directly:

```css
@import 'components/formstone/src/less/component.less';

@fs-component-variable: #fff;
```

## Contribute

<p>Find a bug? Have an idea for new functionality? Check out [Contributing to Formstone](../contribute.html).</p>