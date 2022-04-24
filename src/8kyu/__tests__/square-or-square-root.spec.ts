/**
 * @file Unit Tests - squareOrSquareRoot
 * @module katas/8kyu/tests/unit/squareOrSquareRoot
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../square-or-square-root'

describe('unit:katas/8kyu/squareOrSquareRoot', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [2, 9, 3, 49, 4, 1], parameters: [[4, 3, 9, 7, 2, 1]] },
    { expected: [1, 4, 9, 2, 25, 36], parameters: [[1, 2, 3, 4, 5, 6]] },
    {
      expected: [10, 10_201, 25, 25, 1, 1],
      parameters: [[100, 101, 5, 5, 1, 1]]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
