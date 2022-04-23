/**
 * @file Unit Tests - booleanToString
 * @module katas/8kyu/tests/unit/booleanToString
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../boolean-to-string'

describe('unit:katas/8kyu/booleanToString', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'true', parameters: [true] },
    { expected: 'false', parameters: [false] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
