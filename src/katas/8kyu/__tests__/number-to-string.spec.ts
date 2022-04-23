/**
 * @file Unit Tests - numberToString
 * @module katas/8kyu/tests/unit/numberToString
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../number-to-string'

describe('unit:katas/8kyu/numberToString', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: '67', parameters: [67] },
    { expected: '123', parameters: [123] },
    { expected: '999', parameters: [999] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
