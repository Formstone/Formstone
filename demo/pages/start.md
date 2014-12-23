{"template":"content.html","local_title":"Getting Started","site_root":"../","asset_root":"../","component_root":"../components/"}

# Getting Started

Formstone components are designed to be implemented easily without impacting your existing project. Scripts are wrapped in self-executing closures and styles are individually name spaced to avoid collisions.

## Deploy

The first step is to deploy the package, either by downloading the package from GitHub or using Bower, a front-end package manager. All Formstone components can be deployed and updated via the command line with Bower:

```
bower install ComponentName
```

Note: Bower will install components in a bower-components directory by default. We suggest setting a more URL-friendly directory in the .bowerrc file:

```javascript
{
    "directory": "components"
}
```

## Implement

Once deployed, components can be implemented by including the files directly or hooking into your current build scripts:

```markup
<link href="/components/Component/jquery.fs.component.css" rel="stylesheet" type="text/css" media="all" />
<script src="/components/Component/jquery.fs.component.js"></script>
```

## Customize

When customizing any component, best practice is to deploy the production files as provided then implement and extend the component's properties in your local scripts and styles. This ensures the ability to update any component without overwriting custom styles.

## Contribute

<p>Find a bug? Have an idea for new functionality? You should check out [Contributing to Formstone](../contribute.html).</p>