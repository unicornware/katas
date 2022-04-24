/**
 * @file Unit Tests - lovefunc
 * @module katas/8kyu/tests/unit/lovefunc
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../lovefunc'

describe('unit:katas/8kyu/lovefunc', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: true, parameters: [0, 1] },
    { expected: true, parameters: [1, 4] },
    { expected: false, parameters: [0, 0] },
    { expected: false, parameters: [2, 2] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
