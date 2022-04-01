/**
 * @file Unit Tests - factorial
 * @module katas/tests/unit/factorial
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../factorial'

describe('unit:katas/factorial', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 1, parameters: [0] },
    { expected: 1, parameters: [1] },
    { expected: 2, parameters: [2] },
    { expected: 6, parameters: [3] },
    { expected: 6_227_020_800, parameters: [13] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
