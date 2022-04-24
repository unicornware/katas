/**
 * @file Unit Tests - stringToNumber
 * @module katas/8kyu/tests/unit/stringToNumber
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../string-to-number'

describe('unit:katas/8kyu/stringToNumber', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: -7, parameters: ['-7'] },
    { expected: 605, parameters: ['605'] },
    { expected: 1234, parameters: ['1234'] },
    { expected: 1405, parameters: ['1405'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
