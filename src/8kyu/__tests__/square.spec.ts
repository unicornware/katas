/**
 * @file Unit Tests - square
 * @module katas/8kyu/tests/unit/square
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../square'

describe('unit:katas/8kyu/square', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [0] },
    { expected: 1, parameters: [1] },
    { expected: 4, parameters: [2] },
    { expected: 9, parameters: [3] },
    { expected: 25, parameters: [5] },
    { expected: 4, parameters: [-2] },
    { expected: 144, parameters: [12] },
    { expected: 4.84, parameters: [-2.2] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      assert.approximately(testSubject(...parameters), expected, 0.05)
    })
  })
})
