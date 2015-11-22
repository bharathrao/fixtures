# fixtures.js

Automatically load fixtures for tests from corresponding json files in the fixtures directory

### Fixtures files

A fixtures file is a JSON file with the same name as your test file but a .json extension.

Examples:

Test file | Fixtures file
---------| ----------
feature1.js| feature1.json
feature2.spec.js|feature2.spec.json

### Location of fixtures file

Fixtures files can be placed in the following locations:

 1. Same directory as the test file
 2. in a fixtures folder under the test directory
 3. in a fixtures folder under any ancestor directory

For example, if the test file is at the following location:

```
/home/dude/projects/coolthing/specs/server/feature1/feature1.specs.js
```

The fixtures file may be located at the following locations (in priority order)

Priority | Fixtures file path
----------------|-----------------
1| /home/dude/projects/coolthing/specs/server/feature1/feature1.specs.json
2| /home/dude/projects/coolthing/specs/server/feature1/**fixtures**/feature1.specs.js
3|/home/dude/projects/coolthing/specs/server/**fixtures**/feature1.specs.js
4|/home/dude/projects/coolthing/specs/**fixtures**/feature1.specs.js
5| .. and so on all the way to the top until a fixtures dir is located

# Usage

### specs/features/fixtures/drwho.specs.json

```
{
	"name": "Dr. Who",
	"title": "Time Lord"
}
```

### specs/features/drwho.specs.js

```javascript
var expect   = require('expect.js')
var fixtures = require('fixtures.js')(__filename) // Automatically figure out filename and load

describe('Show attributes', function() {
  it('should get title', function() {
    var result = getTitle(fixtures.name)
    expect(result).to.equal(fixtures.title)
  }
}
```
