/**
 * NodeJS - concatenate buffers
 */

var util = require('util');
var Transform = require('stream').Transform;
util.inherits(doCat, Transform);

function doCat(callback) {
    Transform.call(this);
    this.callback = callback;
    this.buffers = [];
}

doCat.prototype._transform = function(data, encoding, done) {
    this.buffers.push(data);
    this.push(data);
    done();
}

doCat.prototype._flush = function(done) {
    this.callback(this.buffers);
    done();
}

process.stdin.pipe(new doCat(log));

function log(buffs) {
    console.log(Buffer.concat(buffs));
}
