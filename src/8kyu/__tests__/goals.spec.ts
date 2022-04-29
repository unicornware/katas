/**
 * @file Unit Tests - goals
 * @module katas/8kyu/tests/unit/goals
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../goals'

describe('unit:katas/8kyu/goals', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [0, 0, 0] },
    { expected: 17, parameters: [5, 10, 2] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
