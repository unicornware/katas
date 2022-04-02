/**
 * @file Unit Tests - makeNegative
 * @module katas/tests/unit/makeNegative
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../make-negative'

describe('unit:katas/makeNegative', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [0] },
    { expected: -1, parameters: [1] },
    { expected: -5, parameters: [-5] },
    { expected: -42, parameters: [42] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
