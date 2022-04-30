/**
 * @file Unit Tests - getRealFloor
 * @module katas/8kyu/tests/unit/getRealFloor
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../get-real-floor'

describe('unit:katas/8kyu/getRealFloor', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [0] },
    { expected: 0, parameters: [1] },
    { expected: 1, parameters: [2] },
    { expected: 2, parameters: [3] },
    { expected: 3, parameters: [4] },
    { expected: 4, parameters: [5] },
    { expected: 5, parameters: [6] },
    { expected: 6, parameters: [7] },
    { expected: 7, parameters: [8] },
    { expected: 8, parameters: [9] },
    { expected: 9, parameters: [10] },
    { expected: 10, parameters: [11] },
    { expected: 11, parameters: [12] },
    { expected: 12, parameters: [13] },
    { expected: 12, parameters: [14] },
    { expected: 13, parameters: [15] },
    { expected: -3, parameters: [-3] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
