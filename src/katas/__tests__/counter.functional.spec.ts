/**
 * @file Functional Tests - counter
 * @module katas/tests/functional/order
 */

import testSubject from '../counter'

describe('functional:katas/counter', () => {
  it('should increment counter each time return function is invoked', () => {
    // Arrange
    const counter = testSubject()

    // Act + Expect
    expect(counter()).to.equal(1)
    expect(counter()).to.equal(2)
  })

  it('should init different counts if more than one counter is created', () => {
    // Arrange
    const counter1 = testSubject()
    const counter2 = testSubject()

    // Act + Expect
    expect(counter1()).to.equal(1)
    expect(counter1()).to.equal(2)
    expect(counter2()).to.equal(1)
    expect(counter2()).to.equal(2)
  })
})
