/**
 * @file Unit Tests - twiceAsOld
 * @module katas/8kyu/tests/unit/twiceAsOld
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../twice-as-old'

describe('unit:katas/8kyu/twiceAsOld', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [42, 21] },
    { expected: 5, parameters: [55, 30] },
    { expected: 20, parameters: [22, 1] },
    { expected: 22, parameters: [36, 7] },
    { expected: 29, parameters: [29, 0] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
