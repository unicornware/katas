/**
 * @file Unit Tests - arrayPlusArray
 * @module katas/8kyu/tests/unit/arrayPlusArray
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../array-plus-array'

describe('unit:katas/8kyu/arrayPlusArray', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [[0, 0, 0], [0, 0, 0]] },
    { expected: 15, parameters: [[0, 0, 0], [4, 5, 6]] },
    { expected: 21, parameters: [[1, 2, 3], [4, 5, 6]] },
    { expected: 0, parameters: [[-1, -2, -3, -4], [10]] },
    { expected: -21, parameters: [[-1, -2, -3], [-4, -5, -6]] },
    { expected: 2100, parameters: [[100, 200, 300], [400, 500, 600]] },
    {
      expected: 178,
      parameters: [[1, 2, 3, 4, 5, 6, 7], [10, 20, 30, 40, 50]]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
