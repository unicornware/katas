/**
 * @file Unit Tests - reversedStrings
 * @module katas/8kyu/tests/unit/reversedStrings
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../reversed-strings'

describe('unit:katas/8kyu/reversedStrings', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: '', parameters: [''] },
    { expected: '', parameters: ['   '] },
    { expected: 'h', parameters: ['h'] },
    { expected: 'dlrow', parameters: ['world'] },
    { expected: 'olleh', parameters: ['hello'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
