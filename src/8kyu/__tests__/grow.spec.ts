/**
 * @file Unit Tests - grow
 * @module katas/8kyu/tests/unit/grow
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../grow'

describe('unit:katas/8kyu/grow', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 6, parameters: [[1, 2, 3]] },
    { expected: 24, parameters: [[1, 2, 3, 4]] },
    { expected: 16, parameters: [[4, 1, 1, 1, 4]] },
    { expected: 64, parameters: [[2, 2, 2, 2, 2, 2]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
