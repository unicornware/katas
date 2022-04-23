/**
 * @file Unit Tests - descendingOrder
 * @module katas/7kyu/tests/unit/descendingOrder
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../descending-order'

describe('unit:katas/7kyu/descendingOrder', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [0] },
    { expected: 1, parameters: [1] },
    { expected: 54_421, parameters: [42_145] },
    { expected: 654_321, parameters: [145_263] },
    { expected: 987_654_321, parameters: [123_456_789] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
