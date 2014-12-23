{"template":"content.html","title":"Contributing","site_root":"../","asset_root":"../","component_root":"../components/"}

# Contributing

Formstone components are built with Grunt and share a common set of automated tasks that ensure code quality and maintain simple implementation. If you would like to contribute to a component, simply fork the specific project on GitHub, install grunt and start editing. Once you feel you have a working version, send us a pull request. After we have reviewed your updates we'll merge the changes and push a newly tagged version. Easy as that.

## Using Grunt

Grunt is a javascript task runner installed with npm and accessed via the command line, similar to Git. Learn more about getting started with Grunt at gruntjs.com.

After forking the component and cloning locally you will need to install Grunt and all other task dependencies. From the command line, navigate to the repository's directory and run the following commands:

```
npm install grunt;
npm install;
```

Now you can jump into the code and start making changes. Once you've fixed a bug or added a feature, simply run the build process:

```
grunt;
```

If the build process completes without any errors then you are ready to make a pull request. Keep in mind that new functionality should include a working demo and bug fixes should not not break any existing demos.