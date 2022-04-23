/**
 * @file Unit Tests - validate
 * @module katas/5kyu/tests/unit/validate
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../validate'

describe('unit:katas/5kyu/validate', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: true, parameters: ['djI38D55'] },
    { expected: true, parameters: ['Password123'] },
    { expected: false, parameters: ['password'] },
    { expected: false, parameters: ['jfkdfj3j'] },
    { expected: false, parameters: ['abc'] },
    { expected: false, parameters: ['a2.d412'] },
    { expected: false, parameters: ['JHD5FJ53'] },
    { expected: false, parameters: ['123'] },
    { expected: false, parameters: ['!fdjn345'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
