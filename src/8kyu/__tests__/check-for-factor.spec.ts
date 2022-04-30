/**
 * @file Unit Tests - checkForFactor
 * @module katas/8kyu/tests/unit/checkForFactor
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../check-for-factor'

describe('unit:katas/8kyu/checkForFactor', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: [9, 2] },
    { expected: true, parameters: [10, 2] },
    { expected: true, parameters: [63, 7] },
    { expected: false, parameters: [653, 7] },
    { expected: true, parameters: [2450, 5] },
    { expected: false, parameters: [2453, 5] },
    { expected: true, parameters: [24_612, 3] },
    { expected: false, parameters: [24_617, 3] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
