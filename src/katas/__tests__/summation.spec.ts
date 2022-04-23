/**
 * @file Unit Tests - summation
 * @module katas/tests/unit/summation
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../summation'

describe('unit:katas/summation', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 1, parameters: [1] },
    { expected: 3, parameters: [2] },
    { expected: 36, parameters: [8] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
