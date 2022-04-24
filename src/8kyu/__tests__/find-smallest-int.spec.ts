/**
 * @file Unit Tests - findSmallestInt
 * @module katas/8kyu/tests/unit/findSmallestInt
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../find-smallest-int'

describe('unit:katas/8kyu/findSmallestInt', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: -345, parameters: [[34, -345, -1, 100]] },
    { expected: 0, parameters: [[78, 56, 232, 12, 0]] },
    { expected: 1, parameters: [[1, 56, 232, 12, 8]] },
    { expected: 2, parameters: [[34, 15, 88, 2]] },
    { expected: 8, parameters: [[78, 56, 232, 12, 8]] },
    { expected: 12, parameters: [[78, 56, 232, 12, 18]] },
    { expected: 56, parameters: [[78, 56, 232, 412, 228]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
