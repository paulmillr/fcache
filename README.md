# fcache

> `fs.readFile` cache for Node.js build systems & watchers

## Usage

```js
// Your watcher
const fcache = require('fcache');
watcher.on('change', path => {
  fcache.updateCache(path).then(data => {
    // Do some stuff.
  });
});

// Later, in your plugin
fcache.readFile(path).then(data => {
  // Would use cached version.
});

```

## Supported Node.js versions

fcache | Node.js
------ | -------
^0.1   | > 0.8
^1.0   | > 4.0
