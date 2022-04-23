/**
 * @file Unit Tests - countPositivesSumNegatives
 * @module katas/8kyu/tests/unit/countPositivesSumNegatives
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../count-positives-sum-negatives'

describe('unit:katas/8kyu/countPositivesSumNegatives', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [], parameters: [] },
    { expected: [], parameters: [[]] },
    { expected: [], parameters: [null] },
    {
      expected: [8, -50],
      parameters: [[0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]]
    },
    {
      expected: [10, -65],
      parameters: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
