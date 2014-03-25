/**
 * NodeJS - Convert hex bytes to strings
 */

var inp = [0, 15, 24, 3, 250, 83];
var buf = new Buffer(inp);
console.log(buf.toString('hex'));
