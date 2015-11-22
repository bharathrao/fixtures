var fixtures = require('../index')(__filename)
var assert   = require('assert')
var expect = require('expect.js')

describe('Current directory fixtures folder', function() {
  it('should find fixture from fixtures folder under current dir', function*() {
    // assert(fixtures.found === './fixtures', 'Did not find fixtures')
    expect(fixtures.found).to.equal('./fixtures')
  })
})
