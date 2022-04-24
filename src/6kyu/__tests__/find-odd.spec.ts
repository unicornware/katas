/**
 * @file Unit Tests - findOdd
 * @module katas/6kyu/tests/unit/findOdd
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../find-odd'

describe('unit:katas/6kyu/findOdd', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [[0]] },
    { expected: 7, parameters: [[7]] },
    { expected: 10, parameters: [[10]] },
    { expected: 2, parameters: [[1, 1, 2]] },
    { expected: 0, parameters: [[0, 1, 0, 1, 0]] },
    { expected: 1, parameters: [[5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]] },
    { expected: 10, parameters: [[1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]] },
    { expected: -1, parameters: [[1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]] },
    { expected: 4, parameters: [[1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]] },
    { expected: 5, parameters: [[20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]] },
    {
      expected: 5,
      parameters: [[20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
