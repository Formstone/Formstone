var colors = require("colors");
var path = require("path");
var cwd = path.resolve(__dirname, "..");
var spawn = require('win-spawn');;
var fs = require("fs");

var modernizrPath = path.join(cwd, "node_modules", "modernizr");

if (fs.existsSync(modernizrPath)) {
	console.log("--------------------------------------------------------------------------------------------------------------------------------------------");
	console.log(("This postinstall script is a workaround for " + ("npm issue #1341: npm install should recursively check/install dependencies").bold).yellow);
	console.log("More info can be found here: " + ("https://github.com/npm/npm/issues/1341").cyan.underline);
	console.log("Checking for any missing Modernizr dependencies in path: " + modernizrPath.cyan);
	console.log("--------------------------------------------------------------------------------------------------------------------------------------------");
	console.log();

	var child = spawn("npm", ["install", "--production"], {
		cwd: modernizrPath,
		stdio: "inherit"
	});

	child.on("exit", process.exit);
}
