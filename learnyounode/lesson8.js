/**
 * New node file
 */

var bl = require('bl');
var http = require('http');

http.get(process.argv.slice(-1)[0], function (res) {
  res.pipe(bl(function (err, data) {
    if (err !== null) {
      return console.error(err);
    }
    
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});