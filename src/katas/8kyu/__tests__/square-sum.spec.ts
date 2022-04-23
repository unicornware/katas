/**
 * @file Unit Tests - squareSum
 * @module katas/8kyu/tests/unit/squareSum
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../square-sum'

describe('unit:katas/8kyu/squareSum', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [[]] },
    { expected: 5, parameters: [[1, 2]] },
    { expected: 9, parameters: [[1, 2, 2]] },
    { expected: 50, parameters: [[0, 3, 4, 5]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
