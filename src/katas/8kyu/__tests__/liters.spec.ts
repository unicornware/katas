/**
 * @file Unit Tests - liters
 * @module katas/8kyu/tests/unit/liters
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../liters'

describe('unit:katas/8kyu/liters', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [0] },
    { expected: 0, parameters: [0.82] },
    { expected: 0, parameters: [1.4] },
    { expected: 1, parameters: [2] },
    { expected: 5, parameters: [11.8] },
    { expected: 6, parameters: [12.3] },
    { expected: 893, parameters: [1787] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
