/**
 * @file Unit Tests - findAverage
 * @module katas/8kyu/tests/unit/findAverage
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../find-average'

describe('unit:katas/8kyu/findAverage', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [[]] },
    { expected: 1, parameters: [[1, 1, 1]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
