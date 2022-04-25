/**
 * @file Unit Tests - doubleInteger
 * @module katas/8kyu/tests/unit/doubleInteger
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../double-integer'

describe('unit:katas/8kyu/doubleInteger', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 4, parameters: [2] },
    { expected: -2, parameters: [-1] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
