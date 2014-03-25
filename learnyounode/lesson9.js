var http = require('http');
var bl = require('bl');
var resArr = [];
var cnt = 0;

function echoAnswers() {
	for ( var i = 0; i < 3; i++) {
		console.log(resArr[i]);
	}
}

function makeReq(idx) {
	http.get(process.argv[2 + idx], function(res) {
		res.pipe(bl(function(err, data) {
			if (err !== null) {
				return console.error(data);
			}
			resArr[idx] = data.toString();
			cnt++;
			if (cnt === 3) {
				echoAnswers();
			}
		}));
	});
}

for ( var i = 0; i < 3; i++) {
	makeReq(i);
}