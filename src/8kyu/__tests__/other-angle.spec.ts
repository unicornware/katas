/**
 * @file Unit Tests - otherAngle
 * @module katas/8kyu/tests/unit/otherAngle
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../other-angle'

describe('unit:katas/8kyu/otherAngle', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 90, parameters: [30, 60] },
    { expected: 90, parameters: [45, 45] },
    { expected: 60, parameters: [60, 60] },
    { expected: 59, parameters: [43, 78] },
    { expected: 150, parameters: [10, 20] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
