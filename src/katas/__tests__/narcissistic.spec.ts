/**
 * @file Unit Tests - narcissistic
 * @module katas/tests/unit/narcissistic
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../narcissistic'

describe('unit:katas/narcissistic', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: true, parameters: [7] },
    { expected: false, parameters: [13] },
    { expected: false, parameters: [105] },
    { expected: true, parameters: [153] },
    { expected: true, parameters: [1634] },
    { expected: false, parameters: [1652] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
