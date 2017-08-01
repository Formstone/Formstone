// Node Script to perform the original bash command:
//
//     if [[ -d node_modules/modernizr ]]; then ( cd node_modules/modernizr; npm install --production; cd -; ); fi

var fs = require('fs');
var exec = require('child_process').exec;

var on_module_stat = function (error, stat) {
    if (error === null) {
        exec('cd node_modules/modernizr && npm install --production', on_install);
    }
};

var on_install = function (error, stdout, stderr) {
    if (error !== null) {
        console.error('Error executing grunt-modernizr postinstall: ' + error);
        console.error(stderr);
        return;
    }

    console.log('grunt-modernizr postinstall success');
};

fs.stat('node_modules/modernizr', on_module_stat);
