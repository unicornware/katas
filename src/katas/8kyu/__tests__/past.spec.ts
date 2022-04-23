/**
 * @file Unit Tests - past
 * @module katas/8kyu/tests/unit/past
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../past'

describe('unit:katas/8kyu/past', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [0, 0, 0] },
    { expected: 61_000, parameters: [0, 1, 1] },
    { expected: 3_600_000, parameters: [1, 0, 0] },
    { expected: 3_601_000, parameters: [1, 0, 1] },
    { expected: 3_661_000, parameters: [1, 1, 1] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
