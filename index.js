var dirs   = module.parent.filename.split('/')
var specfile = dirs.pop()
dirs.push('fixtures', specfile + 'on')
module.exports = require(dirs.join('/'))
