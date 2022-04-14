/**
 * @file Unit Tests - dblLinear
 * @module katas/tests/unit/dblLinear
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../dbl-linear'

describe('unit:katas/dblLinear', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 1, parameters: [0] },
    { expected: 22, parameters: [10] },
    { expected: 57, parameters: [20] },
    { expected: 91, parameters: [30] },
    { expected: 447, parameters: [100] },
    { expected: 111_718, parameters: [7687] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
