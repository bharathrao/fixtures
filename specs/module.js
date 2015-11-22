var fixtures = require('../index')(__filename)

var expect = require('expect.js')

describe('Should get module fixtures', function() {
  it('should get module fixtures', function() {
    expect(fixtures.level).to.equal('child')
  })
})
