/**
 * @file Unit Tests - squareDigits
 * @module katas/tests/unit/squareDigits
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../square-digits'

describe('unit:katas/squareDigits', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 811_181, parameters: [9119] },
    { expected: 14_916, parameters: [1234] },
    { expected: 0, parameters: [0] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
