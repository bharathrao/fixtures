function getFixture(filename) {
  var dirs   = filename.split('/')
  var specfile = dirs.pop()
  dirs.push('fixtures', specfile + 'on')
  return require(dirs.join('/'))
}
module.exports = getFixture
