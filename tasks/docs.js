var fs   = require('fs-sync');

module.exports = function() {
  var widgetMethods = [],
    utilityMethods = [],
    allDocs = {
      grid: [],
      utility: [],
      widget: []
    };

  // Parse Javascript

  function parseJavascript(content) {
    var _return = {},
      parts = content.split("\n"),
      keys = [
        "name",
        "namespace",
        "type",
        "description",
        "example",
        "param",
        "event",
        "return",
        "main",
        "dependency"
      ];

    for (var pi in parts) {
      var p = parts[pi];

      for (var ki in keys) {
        var key = keys[ki];

        if (p.indexOf("@"+key) > -1 && p.indexOf("@events") < 0) {
          var pset = p.split("@"+key),
          part = pset[ pset.length - 1 ].trim();

          // Split down params, events and returns
          if ( ["param","event","return"].indexOf(key) > -1 ) {
            var parray = [];

            if (key !== "return") {
              parray = part.split(" ", 1);
              parray.push( part.replace(parray[0]+" ", "") );
              part = {
                "name": parray[0].trim()
              };
            } else {
              parray[0] = ''
              parray[1] = part;
              part = {};
            }

            if (parray[1]) {
              // 0 - all
              // 1 - type
              // 2 - default
              // 3 - description

              // Patterns: \[([^\]]*)\]|\<([^\]]*)\>|\"([^\]]*)\"
              var matches = parray[1].match(/\[([^\]]*)\]|\<([^\]]*)\>|\"([^\]]*)\"/g);

              for (var mi in matches) {
                var match = matches[mi];

                if (match.indexOf("[") === 0) {
                  part.type = match.replace("[", "").replace("]", "");
                }
                if (match.indexOf("<") === 0) {
                  part.default = match.replace("<", "").replace(">", "");
                }
                if (match.indexOf('"') === 0) {
                  part.description = match.replace(/"/g, "");
                }
              }
            }
          }

          if (key === "param") {
            if (!_return.params) {
              _return["params"] = [];
            }
            _return["params"].push(part);
          } else if (key === "example") {
            if (!_return.examples) {
              _return["examples"] = [];
            }
            _return["examples"].push(part);
          } else if (key === "event") {
            if (!_return.events) {
              _return["events"] = [];
            }
            _return["events"].push(part);
          } else if (key === "main") {
            if (!_return.main) {
              _return["main"] = [];
            }
            _return["main"].push(part);
          } else if (key === "dependency") {
            if (!_return.dependencies) {
              _return["dependencies"] = [];
            }
            _return["dependencies"].push(part);
          } else {
            _return[key] = part;
          }
        }
      }
    }

    return _return;
  }

  // Parse CSS

  function parseCSS(content) {
    var _return = {},
      parts = content.split("\n"),
      keys = [
        "name",
        "description",
        "type"
      ];

    for (var pi in parts) {
      var p = parts[pi];

      for (var ki in keys) {
        var key = keys[ki];

        if (p.indexOf("@"+key) > -1) {
          var pset = p.split("@"+key),
          part = pset[ pset.length - 1 ].trim();

          _return[key] = part;
        }
      }
    }
    return _return;
  }

  // Build JSON file

  function buildJSON(file) {
    var doc   = {
        main: []
      },
      jsf   = file,
      cssf  = file.replace(/js/g, "less"),
      usef  = file.replace('src/js', "src/docs").replace('src/less', "src/docs").replace(/js/g, "md").replace(/less/g, "md"),
      demof = file.replace('src/js', "src/docs").replace('src/less', "src/docs").replace(/js/g, "html").replace(/less/g, "html"),
      jsFile   = fs.exists( jsf )   ? fs.read( jsf )  : false,
      cssFile  = fs.exists( cssf )  ? fs.read( cssf ) : false,
      useFile  = fs.exists( usef )  ? fs.read( usef ) : false,
      demoFile = fs.exists( demof ) ? fs.read( demof ) : false,
      destination;

    if (cssFile) {
      destination = file.replace('src/less', "docs/json").replace('.less', ".json");
    }
    if (jsFile && cssf !== file) {
      destination = file.replace('src/js', "docs/json").replace('.js', ".json");
    }

    // JS
    if (jsFile) {
      var jsMatches = jsFile.match(/(?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)/g)

      doc.options = [];
      doc.events = [];
      doc.methods = [];

      if (jsMatches) {
        for (var i = 0, count = jsMatches.length; i < count; i++) {
          var content = jsMatches[i];

          if (content.indexOf("@plugin") > -1) {
            var plugin = parseJavascript(content);
            doc.name = plugin.name;
            doc.namespace = plugin.namespace;
            doc.type = plugin.type;
            doc.description = plugin.description;
            doc.main = plugin.main;
            doc.dependencies = plugin.dependencies;
          } else if (content.indexOf("@options") > -1) {
            var params = parseJavascript(content);
            doc.options = params["params"];
          } else if (content.indexOf("@events") > -1) {
            var events = parseJavascript(content);
            doc.events = events["events"];
          } else if (content.indexOf("@method") > -1) {


            if (!doc.methods) {
              doc.methods = [];
            }

            var m = parseJavascript(content);

            if (content.indexOf("private") < 0) {
              if (content.indexOf("@method widget") > -1) {
                widgetMethods.push(m);
              } else if (content.indexOf("@method utility") > -1) {
                utilityMethods.push(m);
              } else {
                doc.methods.push(m);
              }
            }
          }
        }
      }
    }

    if (cssFile) {

      var cssMatches = cssFile.match(/(?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)/g);
      doc.css = [];

      if (cssMatches) {
        // CSS
        for (var i = 0, count = cssMatches.length; i < count; i++) {
          var content = cssMatches[i];

          if (content.indexOf("@class") > -1) {
            var klass = parseCSS(content);
            if (klass.name) {
              doc.css.push(klass);
            }
          } else if (content.indexOf("@grid") > -1) {
            if (content.indexOf("@ignore") < 0) {
              var grid = parseCSS(content);
              doc.name = grid.name;
              doc.namespace = grid.namespace;
              doc.type = "grid";
              doc.description = grid.description;
            }
          }
        }
      }
    }

    if (doc.name) {
      var namespace = doc.name.toLowerCase().replace(/ /g, "");

      if (jsFile) {
        if (namespace !== "formstone" && namespace !== "core" && namespace !== "grid") {
          if (doc.type === "widget") {
            for (var i in widgetMethods) {
              var m = JSON.parse(JSON.stringify(widgetMethods[i]));

              if (m.examples) {
                for (var j in m.examples) {
                  m.examples[j] = m.examples[j].replace('{ns}', namespace);
                }
              }

              doc.methods.push(m);
            }
          }

          for (var i in utilityMethods) {
            var m = JSON.parse(JSON.stringify(utilityMethods[i]));

            if (m.examples) {
              for (var j in m.examples) {
                m.examples[j] = m.examples[j].replace('{ns}', namespace);
              }
            }

            doc.methods.push(m);
          }
        }

        doc.methods.sort(function(a, b) {
          if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
      }

      if (useFile) {
        doc.use = useFile;
      }
      if (demoFile) {
        doc.demo = demoFile;
      }

      doc.document = buildMarkdown(doc);

      fs.write(destination, JSON.stringify(doc));

      if (allDocs[doc.type]) {
        allDocs[doc.type].push(doc);
      }
    }
  }

  // build markdown

  function buildMarkdown(doc) {
    var heading = "#",
      namespace = doc.name.toLowerCase(),
      md = "";

    md += heading + ' ' + doc.name;
    md += '\n\n';
    md += doc.description;
    md += '\n\n';

    md += '<!-- HEADER END -->\n\n';
    md += '<!-- NAV START -->\n\n';

    md += "* [Use](#use)";
    md += '\n';

    if (doc.options && doc.options.length) {
      md += "* [Options](#options)";
      md += '\n';
    }
    if (doc.events && doc.events.length) {
      md += "* [Events](#events)";
      md += '\n';
    }
    if (doc.methods && doc.methods.length) {
      md += "* [Methods](#methods)";
      md += '\n';
    }
    if (doc.css && doc.css.length) {
      md += "* [CSS](#css)";
      md += '\n';
    }

    md += '\n<!-- NAV END -->\n';
    md += '\n<!-- DEMO BUTTON -->\n';

    md += '\n';
    md += '<a name="use"></a>\n\n';
    md += heading + '# Using ' + doc.name;
    md += '\n\n';

    if (doc.main && doc.main.length) {
      md += '\n';
      md += heading + '### Main';
      md += '\n\n';
      md += '```markup';
      md += '\n';
      for (var i in doc.main) {
        md += doc.main[i];
        md += '\n';
      }
      md += '```';
      md += '\n\n';
    }

    if (doc.dependencies && doc.dependencies.length) {
      md += '\n';
      md += heading + '### Dependencies';
      md += '\n\n';
      md += '```markup';
      md += '\n';
      for (var i in doc.dependencies) {
        md += doc.dependencies[i];
        md += '\n';
      }
      md += '```';
      md += '\n\n';
    }

    if (doc.use) {
      md += doc.use
      md += '\n\n';
    }

    if (doc.options && doc.options.length) {
      md += '\n';
      md += '<a name="options"></a>\n\n';
      md += heading + '# Options';
      md += '\n\n';
      if (doc.type === "widget") {
        md += 'Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-' + namespace + '-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.';
      }
      if (doc.type === "utility") {
        md += 'Set instance options by passing a valid object at initialization, or to the public `defaults` method.';
      }
      md += '\n\n';
      md += '| Name | Type | Default | Description |';
      md += '\n';
      md += '| --- | --- | --- | --- |';
      md += '\n';
      for (var i in doc.options) {
        var o = doc.options[i];
        md += '| ' + (o.name ? '`'+o.name+'`' : "&nbsp;");
        md += ' | ' + (o.type ? '`'+o.type+'`' : "&nbsp;");
        md += ' | ' + (o.default ? '`'+o.default+'`' : "&nbsp;");
        md += ' | ' + (o.description || "&nbsp;");
        md += ' |\n';
      }
      md += '\n';
    }

    if (doc.events && doc.events.length) {
      md += '<hr>\n';
      md += '<a name="events"></a>\n\n';
      md += heading + '# Events';
      md += '\n\n';
      if (doc.type === "widget") {
        md += 'Events are triggered on the target instance\'s element, unless otherwise stated.';
        md += '\n\n';
      }
      if (doc.type === "utility") {
        md += 'Events are triggered on the `window`, unless otherwise stated.';
        md += '\n\n';
      }
      md += '| Event | Description |';
      md += '\n';
      md += '| --- | --- |';
      md += '\n';
      for (var i in doc.events) {
        var e = doc.events[i];
        md += '| ' + (e.name ? '`'+e.name+'`' : "&nbsp;");
        md += ' | ' + (e.description || "&nbsp;");
        md += ' |\n';
      }
      md += '\n';
    }

    if (doc.methods && doc.methods.length) {
      md += '<hr>\n';
      md += '<a name="methods"></a>\n\n';
      md += heading + '# Methods';
      md += '\n\n';
      if (doc.type === "widget") {
        md += 'Methods are publicly available to all active instances, unless otherwise stated.';
        md += '\n\n';
      }
      if (doc.type === "utility") {
        md += 'Methods are publicly available, unless otherwise stated.';
        md += '\n\n';
      }
      for (var i in doc.methods) {
        var m = doc.methods[i];
        md += heading + '## ' + m.name;
        md += '\n\n';
        md += m.description;
        md += '\n\n';
        if (m.examples && m.examples.length) {
          for (var j in m.examples) {
            md += '```javascript';
            md += '\n';
            md += m.examples[j];
            md += '\n';
            md += '```';
            md += '\n';
          }
        }
        md += '\n';
        if (m.params && m.params.length) {
          md += heading + '### Parameters';
          md += '\n\n';
          md += '| Name | Type | Default | Description |';
          md += '\n';
          md += '| --- | --- | --- | --- |';
          md += '\n';
          for (var j in m.params) {
            var p = m.params[j];
            md += '| ' + (p.name ? '`'+p.name+'`' : "&nbsp;");
            md += ' | ' + (p.type ? '`'+p.type+'`' : "&nbsp;");
            md += ' | ' + (p.default ? '`'+p.default+'`' : "&nbsp;");
            md += ' | ' + (p.description || "&nbsp;");
            md += ' |\n';
          }
          md += '\n';
        }
      }
    }

    if (doc.css && doc.css.length) {
      md += '<hr>\n';
      md += '<a name="css"></a>\n\n';
      md += heading + '# CSS';
      md += '\n\n';
      md += '| Class | Type | Description |';
      md += '\n';
      md += '| --- | --- | --- |';
      md += '\n';
      for (var i in doc.css) {
        var c = doc.css[i];
        md += '| ' + (c.name ? '`'+c.name+'`' : "&nbsp;");
        md += ' | ' + (c.type ? '`'+c.type+'`' : "&nbsp;");
        md += ' | ' + (c.description || "&nbsp;");
        md += ' |\n';
      }
      md += '\n';
    }

    return md;
  }

  // Build Docs

  function buildDocs(file) {
    if (file != "docs/json/index.json") {
      var doc = JSON.parse(fs.read(file)),
        destination = file.replace('/json', "").replace('.json', ".md"),
        md = buildMarkdown(doc);

      fs.write(destination, md, false);
    }
  }

  // Build demo

  function buildDemo(file) {
    var doc = JSON.parse(fs.read(file));

    if (doc.name) {
      var destination = file.replace('docs/json', "demo/_src/pages/components").replace(".json", ".md"),
        template = {
          template: "component.html",
          title: doc.name,
          demo: doc.demo,
          asset_root: "../",
          year: new Date().getFullYear()
        },
        header = "";

      header += '\n\n #' + doc.name + ' Demo';
      header += '\n<p class="back_link"><a href="https://formstone.it/components/' + doc.name.toLowerCase().replace(/ /g, "") + '">View Documentation</a></p>';

      fs.write(destination, JSON.stringify(template) + header);
    }
  }

  // Build Index

  function buildIndex() {
    var docsmd = "",
      docsjson = {
        "Library": [
          "Core"
        ],
        "Utility": [],
        "Widget": []
      },
      demosmd = '';

    // Docs
    docsmd += '## Library';
    docsmd += '\n\n';
    docsmd += '* [Core](core.md)';
    docsmd += '\n';
    for (var i in allDocs.grid) {
      var d = allDocs.grid[i];
      docsmd += '* [' + d.name + '](' + d.name.toLowerCase().replace(/ /g, "") + '.md)';
      docsmd += '\n';

      docsjson["Library"].push(d.name);
    }
    docsmd += '\n';
    docsmd += '## Utility';
    docsmd += '\n\n';
    for (var i in allDocs.utility) {
      var d = allDocs.utility[i];
      docsmd += '* [' + d.name + '](' + d.name.toLowerCase().replace(/ /g, "") + '.md)';
      docsmd += '\n';

      docsjson["Utility"].push(d.name);
    }
    docsmd += '\n';
    docsmd += '## Widget';
    docsmd += '\n\n';
    for (var i in allDocs.widget) {
      var d = allDocs.widget[i];
      docsmd += '* [' + d.name + '](' + d.name.toLowerCase().replace(/ /g, "") + '.md)';
      docsmd += '\n';

      docsjson["Widget"].push(d.name);
    }

    fs.write("docs/README.md", '# Documentation \n\n' + docsmd);

    fs.write("docs/json/index.json", JSON.stringify(docsjson));

    // Demos
    demosmd += '## Library';
    demosmd += '\n\n';
    // demosmd += '* [Core](components/core.html)';
    // demosmd += '\n';
    for (var i in allDocs.grid) {
      var d = allDocs.grid[i];

      if (d.demo && d.demo.toLowerCase().indexOf("no demo") < 0) {
        demosmd += '* [' + d.name + '](components/' + d.name.toLowerCase().replace(/ /g, "") + '.html)';
        demosmd += '\n';
      }
    }
    demosmd += '\n';
    demosmd += '## Utility';
    demosmd += '\n\n';
    for (var i in allDocs.utility) {
      var d = allDocs.utility[i];

      if (d.demo.toLowerCase().indexOf("no demo") < 0) {
        demosmd += '* [' + d.name + '](components/' + d.name.toLowerCase().replace(/ /g, "") + '.html)';
        demosmd += '\n';
      }
    }
    demosmd += '\n';
    demosmd += '## Widget';
    demosmd += '\n\n';
    for (var i in allDocs.widget) {
      var d = allDocs.widget[i];

      if (d.demo.toLowerCase().indexOf("no demo") < 0) {
        demosmd += '* [' + d.name + '](components/' + d.name.toLowerCase().replace(/ /g, "") + '.html)';
        demosmd += '\n';
      }
    }

/*
    demosmd += '\n';
    demosmd += '## Themes';
    demosmd += '\n\n';
    demosmd += '* [Light](themes/light.html)';
    demosmd += '\n';
*/

    var template = {
        template: "content.html",
        title: "Demos",
        asset_root: "",
        year: new Date().getFullYear()
      };

    fs.write("demo/_src/pages/index.md", JSON.stringify(template) + '\n\n# Demos \n\n' + demosmd);

    // // Tool bar
    //
    // var toolbar = '';
    //
    // toolbar += '<div class="demo_bar">';
    // toolbar += '<div class="demo_field">';
    // toolbar += '<span class="demo_label">Component</span>';
    // toolbar += '<div class="demo_select demo_select_wide">';
    // toolbar += '<select class="js-component_select" data-dropdown-options=\'{"links":true}\'>';
    // toolbar += '<option value="">Select</option>';
    //
    // for (var i in allDocs.grid) {
    //   var d = allDocs.grid[i];
    //
    //   if (d.demo.toLowerCase().indexOf("no demo") < 0) {
    //     toolbar += '<option value="{{= it.asset_root }}components/' + d.name.toLowerCase().replace(/ /g, "") + '.html">' + d.name + '</option>';
    //   }
    // }
    // for (var i in allDocs.utility) {
    //   var d = allDocs.utility[i];
    //
    //   if (d.demo.toLowerCase().indexOf("no demo") < 0) {
    //     toolbar += '<option value="{{= it.asset_root }}components/' + d.name.toLowerCase().replace(/ /g, "") + '.html">' + d.name + '</option>';
    //   }
    // }
    // for (var i in allDocs.widget) {
    //   var d = allDocs.widget[i];
    //
    //   if (d.demo.toLowerCase().indexOf("no demo") < 0) {
    //     toolbar += '<option value="{{= it.asset_root }}components/' + d.name.toLowerCase().replace(/ /g, "") + '.html">' + d.name + '</option>';
    //   }
    // }
    //
    // toolbar += '</select>';
    // toolbar += '</div>';
    // toolbar += '</div>';
    // toolbar += '<div class="demo_field">';
    // toolbar += '<span class="demo_label">Theme</span>';
    // toolbar += '<div class="demo_select">';
    // toolbar += '<select class="js-theme_select">';
    //
    // toolbar += '<option value="fs-light">Light</option>';
    // toolbar += '<option value="">No Theme</option>';
    //
    // toolbar += '</select>';
    // toolbar += '</div>';
    // toolbar += '</div>';
    // toolbar += '</div>';
    //
    // fs.write("demo/_src/_templates/partials/_bar.html", toolbar);
  }

  // WORK

  fs.expand("src/js/*.js").forEach(buildJSON);
  fs.expand("src/less/*.less").forEach(buildJSON);
  fs.expand("docs/json/*.json").forEach(buildDocs);
  fs.expand("docs/json/*.json").forEach(buildDemo);

  fs.copy("src/docs/themes", "demo/_src/pages/themes");

  buildIndex();

  var pkg = JSON.parse(fs.read('package.json')),
    destination = 'README.md',
    markdown = '<a href="https://gulpjs.com/" target="_blank"><img src="https://img.shields.io/badge/-gulp-eb4a4b.svg?logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAAYAAAAOCAMAAAA7QZ0XAAAABlBMVEUAAAD%2F%2F%2F%2Bl2Z%2FdAAAAAXRSTlMAQObYZgAAABdJREFUeAFjAAFGRjSSEQzwUgwQkjAFAAtaAD0Ls2nMAAAAAElFTkSuQmCC" alt="Built with Gulp" height="18"></a> \n' +
           '<a href="https://badge.fury.io/js/formstone"><img src="https://badge.fury.io/js/formstone.svg" alt="npm version" height="18"></a> \n' +
           '<a href="https://travis-ci.org/Formstone/Formstone"><img src="https://travis-ci.org/Formstone/Formstone.svg?branch=master" alt="Travis CI" height="18"></a> \n' +
          '<a href="https://david-dm.org/formstone/formstone"><img src="https://david-dm.org/formstone/formstone.svg" alt="David DM" height="18"></a> \n' +
           '<a href="https://david-dm.org/formstone/formstone#info=devDependencies&view=table"><img src="https://david-dm.org/formstone/formstone/dev-status.svg" alt="David DM" height="18"></a> \n\n' +
           '# ' + pkg.realname + ' \n\n' +
           pkg.description + ' \n\n' +
           '[Documentation](docs/README.md) <br>' +
           '[Changelog](CHANGELOG.md) <br>' +
           '[Licensing](https://formstone.it/license) \n\n' +
           '### License \n\n' +
           'Available under the GNU GPL v3 for all open source applications. <br>A commercial license is required for all commercial applications.';

  fs.write(destination, markdown);
}
