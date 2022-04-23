/**
 * @file Unit Tests - getAverage
 * @module katas/8kyu/tests/unit/getAverage
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../get-average'

describe('unit:katas/8kyu/getAverage', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 2, parameters: [[2, 2, 2, 2]] },
    { expected: 3, parameters: [[1, 2, 3, 4, 5]] },
    { expected: 1, parameters: [[1, 1, 1, 1, 1, 1, 1, 2]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
