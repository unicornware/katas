/**
 * @file Unit Tests - moveZeros
 * @module katas/6kyu/tests/unit/moveZeros
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../move-zeros'

describe('unit:katas/6kyu/moveZeros', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [1, 1, 0, 0], parameters: [[1, 0, 0, 1]] },
    {
      expected: [1, 2, 1, 1, 3, 1, 0, 0, 0, 0],
      parameters: [[1, 2, 0, 1, 0, 1, 0, 3, 0, 1]]
    },
    {
      expected: [9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      parameters: [[9, 0, 9, 0, 1, 0, 2, 0, 1, 0, 1, 0, 3, 0, 1, 0, 9, 0, 9, 0]]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
