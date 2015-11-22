var fixtures = require('../index')
var assert   = require('assert')

assert(fixtures.found === './fixtures', 'Did not find fixtures')
