/**
 * @file Unit Tests - counter
 * @module katas/tests/unit/order
 */

import testSubject from '../counter'

describe('unit:katas/counter', () => {
  it('should return a function', () => {
    expect(testSubject()).to.be.a('function')
  })

  it('should return 1 when counter is first invoked', () => {
    expect(testSubject()()).to.equal(1)
  })
})
