/**
 * @file Unit Tests - digitize
 * @module katas/8kyu/tests/unit/digitize
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../digitize'

describe('unit:katas/8kyu/digitize', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [0], parameters: [0] },
    { expected: [1, 3, 2, 5, 3], parameters: [35_231] },
    { expected: [7, 9, 5, 8, 4, 3], parameters: [348_597] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
