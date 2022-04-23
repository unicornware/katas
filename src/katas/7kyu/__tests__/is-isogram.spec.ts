/**
 * @file Unit Tests - isIsogram
 * @module katas/7kyu/tests/unit/isIsogram
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../is-isogram'

describe('unit:katas/7kyu/isIsogram', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: true, parameters: [''] },
    { expected: false, parameters: ['aba'] },
    { expected: false, parameters: ['moOse'] },
    { expected: true, parameters: ['isogram'] },
    { expected: false, parameters: ['isIsogram'] },
    { expected: true, parameters: ['Dermatoglyphics'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
