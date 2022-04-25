/**
 * @file Unit Tests - isDivideBy
 * @module katas/8kyu/tests/unit/isDivideBy
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../is-divide-by'

describe('unit:katas/8kyu/isDivideBy', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: true, parameters: [4, 1, 4] },
    { expected: false, parameters: [45, 1, 6] },
    { expected: true, parameters: [45, 5, 15] },
    { expected: true, parameters: [15, -5, 3] },
    { expected: true, parameters: [-12, 2, -6] },
    { expected: false, parameters: [-12, 2, -5] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
