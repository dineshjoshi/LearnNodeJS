/**
 * New node file
 */
var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function(socket) {
	var data = strftime('%Y-%m-%d %H:%M');
	socket.write(data);
	socket.write('\n')
	socket.end();
});
server.listen(process.argv[2]);
