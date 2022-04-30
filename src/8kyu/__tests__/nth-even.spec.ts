/**
 * @file Unit Tests - nthEven
 * @module katas/8kyu/tests/unit/nthEven
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../nth-even'

describe('unit:katas/8kyu/nthEven', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [1] },
    { expected: 2, parameters: [2] },
    { expected: 4, parameters: [3] },
    { expected: 198, parameters: [100] },
    { expected: 2_597_466, parameters: [1_298_734] },
    { expected: 1_066_034_778, parameters: [533_017_390] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
