var fixtures = require('../index')(__filename)
var expect = require('expect.js')

describe('Same directory fixtures folder', function() {
  it('should find fixture from same dir as test file', function*() {
    expect(fixtures.found).to.equal('.')
  })
})
