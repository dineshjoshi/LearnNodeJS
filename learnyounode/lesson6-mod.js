/**
 * New node file
 */
var fs = require('fs');
var pathm = require('path');

module.exports = function(dirname, ext, cbfn) {
	var path = dirname;
	var fileList = new Array();

	bFile = fs.readdir(path, function(err, list) {
		if (err != null) {
			cbfn(err);
		} else {
			for (i = 0; i < list.length; i++) {
				extname = pathm.extname(list[i]);
				if (extname === ("." + ext)) {
					fileList.push(list[i]);
				}
			}
			cbfn(null, fileList);
		}
	});

}