/**
 * New node file
 */
var http = require('http');
//
var url1 = process.argv.slice(-1)[0];

http.get(url1, function (response) {
	response.setEncoding('utf8')
	response.on('data', console.log)
	response.on('error', console.error)
})
