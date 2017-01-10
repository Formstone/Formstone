(function() {
	var exec  = require('child_process').exec;

	try {
		var bower = require('bower');

		if (bower) {
			exec('node bower install');

			console.log('Bower devDependencies installed.');
		} else {
			console.log('Bower not installed, skipping devDependencies.');
		}
	} catch(e) {
		console.log('Bower not installed, skipping devDependencies.');
	}
})();
