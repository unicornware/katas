/**
 * @file Unit Tests - isDivisible
 * @module katas/tests/unit/isDivisible
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../is-divisible'

describe('unit:katas/isDivisible', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: [3, 3, 4] },
    { expected: false, parameters: [8, 3, 4] },
    { expected: true, parameters: [12, 3, 4] },
    { expected: true, parameters: [48, 3, 4] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
