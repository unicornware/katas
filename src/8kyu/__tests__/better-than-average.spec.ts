/**
 * @file Unit Tests - betterThanAverage
 * @module katas/8kyu/tests/unit/betterThanAverage
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../better-than-average'

describe('unit:katas/8kyu/betterThanAverage', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: true, parameters: [[2, 3], 5] },
    { expected: false, parameters: [[29, 55, 74, 60, 11, 90, 67, 28], 21] },
    { expected: false, parameters: [[41, 75, 72, 56, 80, 82, 81, 33], 50] },
    { expected: true, parameters: [[100, 40, 34, 57, 29, 72, 57, 88], 75] },
    { expected: true, parameters: [[12, 23, 34, 45, 56, 67, 78, 89, 90], 69] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
