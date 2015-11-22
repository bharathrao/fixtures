var fixtures = require('../index')(__filename)
var expect = require('expect.js')
var mod = require('./module.js')

describe('multi-level require fixtures folder', function() {
  it('should find fixture from fixtures folder under parent dir', function*() {
    expect(fixtures.level).to.equal('parent')
  })
})
