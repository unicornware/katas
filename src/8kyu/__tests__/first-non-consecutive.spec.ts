/**
 * @file Unit Tests - firstNonConsecutive
 * @module katas/8kyu/tests/unit/firstNonConsecutive
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../first-non-consecutive'

describe('unit:katas/8kyu/firstNonConsecutive', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: null, parameters: [[]] },
    { expected: null, parameters: [[1]] },
    { expected: 6, parameters: [[1, 2, 3, 4, 6, 7, 8]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
