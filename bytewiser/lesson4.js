/**
 * NodeJS - Convert hex bytes to strings
 */

var fs = require('fs');
var infile = fs.readFileSync(process.argv[2]);
var pos = 0;
for (var i = 0; i < infile.length; i++) {
    if (infile[i] === 10) {
	console.log(infile.slice(pos, i));
	i++;
	pos = i;
    }
}
console.log(infile.slice(pos, i));
