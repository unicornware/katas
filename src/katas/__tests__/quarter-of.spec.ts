/**
 * @file Unit Tests - quarterOf
 * @module katas/tests/unit/quarterOf
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../quarter-of'

describe('unit:katas/quarterOf', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 1, parameters: [3] },
    { expected: 3, parameters: [8] },
    { expected: 4, parameters: [11] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
