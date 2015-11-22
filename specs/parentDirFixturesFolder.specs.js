var fixtures = require('../index')(__filename)
var expect = require('expect.js')

describe('Parent directory fixtures folder', function() {
  it('should find fixture from fixtures folder under parent dir', function*() {
    expect(fixtures.found).to.equal('../fixtures')
  })
})
