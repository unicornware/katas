/**
 * @file Unit Tests - multiply
 * @module katas/8kyu/tests/unit/multiply
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../multiply'

describe('unit:katas/8kyu/multiply', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [0, 0] },
    { expected: 25, parameters: [5, 5] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
