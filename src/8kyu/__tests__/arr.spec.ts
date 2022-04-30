/**
 * @file Unit Tests - arr
 * @module katas/8kyu/tests/unit/arr
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../arr'

describe('unit:katas/8kyu/arr', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [], parameters: [] },
    { expected: [0, 1, 2, 3], parameters: [4] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
