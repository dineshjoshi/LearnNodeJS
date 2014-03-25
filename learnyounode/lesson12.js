/**
 * New node file
 */

var http = require('http');
var tmap = require('through2-map');

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('Error. POST body required\n');
  }
  
  req.pipe(tmap(function (data) {
    return data.toString().toUpperCase();
  })).pipe(res);
});

server.listen(+(process.argv[2]));

