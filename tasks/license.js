module.exports = function(grunt) {
	grunt.registerTask('buildLicense', 'Build Formstone LICENSE.md file.', function () {
		var pkg = grunt.file.readJSON('package.json'),
			gpl = grunt.file.read('tasks/license.txt'),
			destination = 'license.txt',
			markdown = 'Formstone \n\n' +
					   'Copyright ' + grunt.template.today('yyyy') + ' ' + pkg.author.name + ' \n\n' +
					   gpl;

		grunt.file.write(destination, markdown);
		grunt.log.writeln('File "' + destination + '" created.');
	});
}