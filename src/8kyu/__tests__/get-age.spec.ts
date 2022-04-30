/**
 * @file Unit Tests - get_age
 * @module katas/8kyu/tests/unit/get_age
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../get-age'

describe('unit:katas/8kyu/get_age', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: ['0 years old'] },
    { expected: 1, parameters: ['1 year old'] },
    { expected: 2, parameters: ['2 years old'] },
    { expected: 3, parameters: ['3 years old'] },
    { expected: 4, parameters: ['4 years old'] },
    { expected: 5, parameters: ['5 years old'] },
    { expected: 6, parameters: ['6 years old'] },
    { expected: 7, parameters: ['7 years old'] },
    { expected: 8, parameters: ['8 years old'] },
    { expected: 9, parameters: ['9 years old'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
