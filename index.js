var fs = require('fs')
var path = require('path')

module.exports = function getFixture(filename) {
  // var filename = module.parent.filename
  var dirs   = filename.split(path.sep)
  var specfile = dirs.pop()
  var parsed   = path.parse(specfile)
  var fixtures = parsed.name + '.json'
  dirs.push(fixtures)
  var fixturesPath = dirs.join(path.sep)
  if(fs.existsSync(fixturesPath)) return require(fixturesPath)
  dirs.pop()
  while(dirs.length > 0) {
    dirs.push('fixtures', fixtures)
    var fixturesPath = dirs.join(path.sep)
    if(fs.existsSync(fixturesPath)) {
      return require(fixturesPath)
    }
    dirs.pop(); dirs.pop(); dirs.pop()
  }
  return undefined
}
