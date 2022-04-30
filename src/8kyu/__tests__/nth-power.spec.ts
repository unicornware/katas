/**
 * @file Unit Tests - nthPower
 * @module katas/8kyu/tests/unit/nthPower
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../nth-power'

describe('unit:katas/8kyu/nthPower', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 1, parameters: [[0, 1], 0] },
    { expected: -1, parameters: [[1, 2], 3] },
    { expected: -1, parameters: [[6, 31], 3] },
    { expected: 9, parameters: [[1, 2, 3, 4], 2] },
    { expected: 1000, parameters: [[29, 82, 45, 10], 3] },
    { expected: 1_000_000, parameters: [[1, 3, 10, 100], 3] },
    { expected: 512, parameters: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 9] },
    { expected: -1, parameters: [[75, 68, 35, 61, 9, 36, 89, 0, 30], 10] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
