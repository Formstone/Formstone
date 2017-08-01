var Mocha = require("mocha");

var mocha = new Mocha({
	setup : "bdd",
	reporter : process.env.TRAVIS ? "tap" : "spec",
	slow : 5000,
	timeout : 30000
});

mocha.addFile("test/tests.js");

var runner = mocha.run();

runner.on("fail", function (test, err) {
	process.stderr.write("         " + err.toString() + "\n\n");
	process.exit(1);
});
