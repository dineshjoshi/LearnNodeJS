var fs = require('fs');
var pathm = require('path');

var fn = process.argv.slice(-2);
var path = fn[0];
var ext  = fn[1];

bFile = fs.readdir(path, function(err, list) {
	for (i=0; i < list.length; i++) {
		extname = pathm.extname(list[i]);
		if (extname === ("." + ext)) {
			console.log(list[i])
		}
	}
});

