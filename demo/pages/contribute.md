{"template":"content.html","title":"Contributing","site_root":"../","asset_root":"../","component_root":"../components/"}

# Contributing

Formstone is built with Grunt to ensure code quality and maintain simple implementation. To contribute simply fork the specific project on GitHub, install grunt and start editing. Once a working version is ready, create a pull request. After reviewing the updates we'll merge the changes and push a newly tagged version. Easy as that.

## Using Grunt

Grunt is a javascript task runner installed with npm and accessed via the command line, similar to Git. Learn more about getting started with Grunt at gruntjs.com.

After forking the component and cloning locally you will need to install Grunt and all other task dependencies. From the command line, navigate to the repository's directory and run the following commands:

```
npm install;
```

Now you can jump into the code and start making changes. Once you've fixed a bug or added a feature, simply run the build process:

```
grunt;
```

If the build process completes without any errors then you are ready to make a pull request. Keep in mind that new functionality should include a working demo and bug fixes should not not break any existing demos.

## Documentation

The default Grunt process will build the library, as well as compiling GitHub-ready documentation and the demo site. This automated process is based on in-code comment blocks, a usage markdown file and demo HTML partial.

```
src/js/component.js
src/less/component.less
src/docs/component.md
src/docs/component.html
```

A component's javascript files should consist of a plugin definition, as well as any function definitions, marked up using proper key/value pairs. All component dependencies should be listed when defining a plugin, as well as it's type. Method definitions should list all parameters, as well as any return value. Note the `private` flag when defining an internal method, this function will not show on documentation pages:

```javascript
/**
 * @plugin
 * @name Namespace
 * @description A jQuery plugin.
 * @type widget
 * @dependency core.js
 */

var Plugin = Formstone.Plugin("namespace", {
	...
});

```

```javascript
/**
 * @method
 * @name construct
 * @description Builds instance.
 * @param data [object] "Instance data"
 */

function construct(data) {
	...
}

```

```javascript
/**
 * @method private
 * @name internalFunction
 * @description Function description.
 * @param event [object] "Parameter description"
 * @return [string] "Return value description"
 */

function internalFunction(event) {
	...

	return value;
}

```

A component's CSS files should consist of class blocks marked up using proper key/value pairs. In most cases, modifier classes should reflect their associated element's class name:

```css
/**
 * @class
 * @name .fs-namespace-element
 * @type element
 * @description Element description
 */
 ```

```css
/**
 * @class
 * @name .fs-namespace-element.fs-namespace-modifier
 * @type modifier
 * @description Modifier description
 */
```

A component's usage should consist of a general overview of the plugin's implementation and features, following the style of existing documentation. A component's demo should consist of an HTML partial that highlights features in a compelling way.