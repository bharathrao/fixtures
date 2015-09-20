# fixtures
Automatically load fixtures for tests from corresponding json files in the fixtures directory

```
/specs

/specs/feature.spec.js

/specs/fixtures

/specs/fixtures/feature.spec.json
```

#Usage

```javascript

var fixtures = require('fixtures')(__filename) // Automatically figure out filename and load

expect(result).to.equal(fixtures.result)
```
