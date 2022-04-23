/**
 * @file Unit Tests - hero
 * @module katas/8kyu/tests/unit/hero
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../hero'

describe('unit:katas/8kyu/hero', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: [0, 1] },
    { expected: false, parameters: [4, 5] },
    { expected: false, parameters: [7, 4] },
    { expected: true, parameters: [10, 5] },
    { expected: true, parameters: [100, 40] },
    { expected: false, parameters: [1500, 751] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
