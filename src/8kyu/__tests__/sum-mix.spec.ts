/**
 * @file Unit Tests - sumMix
 * @module katas/8kyu/tests/unit/sumMix
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../sum-mix'

describe('unit:katas/8kyu/sumMix', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 22, parameters: [[9, 3, '7', '3']] },
    { expected: 42, parameters: [['5', '0', 9, 3, 2, 1, '9', 6, 7]] },
    { expected: 41, parameters: [['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
