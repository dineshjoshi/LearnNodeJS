var fs = require('fs');

var fn = process.argv.slice(-1)
//console.log(fn);
bFile = fs.readFileSync(fn[0])

var fStr = bFile.toString();
//console.log(fStr);
var arrLines = fStr.split('\n');

console.log(arrLines.length-1);