var fs = require('fs'),
    stripmq = require('../tasks/lib/stripmq');

var input = fs.readFileSync('input.css', {encoding:'utf-8'});
var result = stripmq(input, {width: 1000, type: 'screen'});
console.log(result);
fs.writeFileSync('output.css', result);
