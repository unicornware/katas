/**
 * @file Unit Tests - bmi
 * @module katas/8kyu/tests/unit/bmi
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject, { BodyMassIndexType } from '../bmi'

describe('unit:katas/8kyu/bmi', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: BodyMassIndexType.OBESE, parameters: [180, 1.95] },
    { expected: BodyMassIndexType.NORMAL, parameters: [100, 2.25] },
    { expected: BodyMassIndexType.UNDERWEIGHT, parameters: [80, 4] },
    { expected: BodyMassIndexType.OVERWEIGHT, parameters: [95, 1.9] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
