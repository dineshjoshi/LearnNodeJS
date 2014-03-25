var http = require('http');
var url = require('url');

function getUnixtime(time) {
	var retVal = {
		unixtime : time.getTime()
	};
	
	return retVal;
}

function parseTime(time) {
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	
	var retVal = {
		hour : hours,
		minute : minutes,
		second : seconds
	};
	
	return retVal;
}

var server = http.createServer(function(req, res) {
	var urlParsed = url.parse(req.url, true);
	var retTime = new Date(urlParsed.query.iso);
	var result;

	if (/^\/api\/parsetime/.test(req.url)) {
		result = parseTime(retTime);
	} else if (/^\/api\/unixtime/.test(req.url)) {
		result = getUnixtime(retTime);
	}

	if (result) {
		res.writeHead(200, {
			'Content-Type' : 'application/json'
		});
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(+(process.argv[2]));
