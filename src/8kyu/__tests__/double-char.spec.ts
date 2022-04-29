/**
 * @file Unit Tests - doubleChar
 * @module katas/8kyu/tests/unit/doubleChar
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../double-char'

describe('unit:katas/8kyu/doubleChar', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'aabbccdd', parameters: ['abcd'] },
    { expected: '11333377', parameters: ['1337'] },
    { expected: '%%^^&&**((', parameters: ['%^&*('] },
    { expected: '112233445566', parameters: ['123456'] },
    { expected: 'AAddiiddaass', parameters: ['Adidas'] },
    { expected: 'iilllluummiinnaattii', parameters: ['illuminati'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
