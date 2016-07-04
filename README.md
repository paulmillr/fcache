# fcache

> `fs.readFile` cache for node.js build systems & watchers

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
