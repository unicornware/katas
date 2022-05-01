/**
 * @file Unit Tests - finalGrade
 * @module katas/8kyu/tests/unit/finalGrade
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject, { FinalGrade } from '../final-grade'

describe('unit:katas/8kyu/finalGrade', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: FinalGrade.ZERO, parameters: [20, 2] },
    { expected: FinalGrade.NINETY, parameters: [85, 5] },
    { expected: FinalGrade.HUNDRED, parameters: [87, 11] },
    { expected: FinalGrade.HUNDRED, parameters: [100, 12] },
    { expected: FinalGrade.SEVENTY_FIVE, parameters: [55, 3] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
