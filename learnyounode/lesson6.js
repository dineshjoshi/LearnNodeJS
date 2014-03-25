/**
 * New node file
 */
var mymod = require('./lesson6-mod.js');

var fn = process.argv.slice(-2);
var path = fn[0];
var ext = fn[1];

mymod(path, ext, function(err, list) {
	if (err === null) {
		for (i = 0; i < list.length; i++) {
			console.log(list[i]);
		}
	} else {
		console.log("Error occurred");
	}
});