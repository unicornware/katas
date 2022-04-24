/**
 * @file Unit Tests - zeroFuel
 * @module katas/8kyu/tests/unit/zeroFuel
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../zero-fuel'

describe('unit:katas/8kyu/zeroFuel', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: true, parameters: [50, 25, 2] },
    { expected: false, parameters: [100, 50, 1] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
