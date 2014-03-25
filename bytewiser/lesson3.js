/**
 * NodeJS - Modifying buffer
 */

process.stdin.on('data', function(inp) {
    for (var i = 0; i < inp.length; i++) {
	if (inp[i] === 46) inp.write('!', i);
    }
    console.log(inp);
});
