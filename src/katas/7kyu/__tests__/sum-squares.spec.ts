/**
 * @file Unit Tests - SumSquares
 * @module katas/7kyu/tests/unit/SumSquares
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../sum-squares'

describe('unit:katas/7kyu/SumSquares', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [[]] },
    { expected: 0, parameters: [[[]]] },
    { expected: 14, parameters: [[1, 2, 3]] },
    { expected: 14, parameters: [[[1, 2], 3]] },
    { expected: 1, parameters: [[[[[[[[[[1]]]]]]]]]] },
    { expected: 400, parameters: [[10, [[10], 10], [10]]] },
    {
      expected: 325,
      parameters: [[1, [[3], 10, 5, [2, [3], [4], [5, [6]]]], [10]]]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
