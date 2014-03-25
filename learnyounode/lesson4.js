var fs = require('fs');

var fn = process.argv.slice(-1)
bFile = fs.readFile(fn[0], 'utf8', function(err, data) {
	var fStr = data.toString();
	var arrLines = fStr.split('\n');
	console.log(arrLines.length-1);	
});

