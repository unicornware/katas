/**
 * @file Unit Tests - expressionsMatter
 * @module katas/8kyu/tests/unit/expressionsMatter
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../expressions-matter'

describe('unit:katas/8kyu/expressionsMatter', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 3, parameters: [1, 1, 1] },
    { expected: 4, parameters: [2, 1, 1] },
    { expected: 5, parameters: [1, 3, 1] },
    { expected: 6, parameters: [2, 1, 2] },
    { expected: 8, parameters: [2, 2, 2] },
    { expected: 9, parameters: [1, 2, 3] },
    { expected: 16, parameters: [2, 2, 4] },
    { expected: 27, parameters: [3, 3, 3] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
