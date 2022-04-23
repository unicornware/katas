/**
 * @file Unit Tests - centuryFromYear
 * @module katas/tests/unit/centuryFromYear
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../century-from-year'

describe('unit:katas/centuryFromYear', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 17, parameters: [1601] },
    { expected: 18, parameters: [1705] },
    { expected: 19, parameters: [1900] },
    { expected: 20, parameters: [2000] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
