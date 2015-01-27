var fs = require('fs');

var cache = Object.create(null);

exports.read = function(path, callback) {
  if (path in cache) {
    callback(undefined, cache[path]);
  } else {
    fs.readFile(path, 'utf-8', callback);
  }
};

exports.update = function(path, callback) {
  fs.readFile(path, 'utf-8', function(error, source) {
    if (error) return callback(error);
    cache[path] = source;
    callback(undefined, source)
  });
};

