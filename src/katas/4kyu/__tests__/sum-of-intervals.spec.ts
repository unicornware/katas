/**
 * @file Unit Tests - sumOfIntervals
 * @module katas/4kyu/tests/unit/sumOfIntervals
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../sum-of-intervals'

describe('unit:katas/4kyu/sumOfIntervals', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [[]] },
    { expected: 4, parameters: [[[1, 5]]] },
    { expected: 4, parameters: [[[1, 5], [1, 5]]] },
    { expected: 8, parameters: [[[1, 5], [6, 10]]] },
    { expected: 7, parameters: [[[1, 4], [7, 10], [3, 5]]] },
    { expected: 11, parameters: [[[1, 5], [10, 15], [-1, 3]]] },
    {
      expected: 356,
      parameters: [
        [
          [70, 396],
          [145, 228],
          [231, 293],
          [246, 394],
          [282, 422],
          [316, 420],
          [495, 499]
        ]
      ]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
