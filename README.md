# fcache

> `fs.readFile` cache for node.js build systems & watchers

## Usage

```
# Your watcher
var fcache = require('fcache');
fcache.update(path);

# Your plugin
fcache.read(path)
```
