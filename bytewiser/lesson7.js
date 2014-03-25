/**
 * NodeJS - Array Buffers
 */

var num = +process.argv[2];
var int32 = new Uint32Array(1);
int32[0] = num;
var int16 = new Uint16Array(int32.buffer);
console.log(JSON.stringify(int16));
