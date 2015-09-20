var fixtures = require('../index')(__filename)
var assert   = require('assert')

assert(fixtures.found, 'Did not find fixtures')
