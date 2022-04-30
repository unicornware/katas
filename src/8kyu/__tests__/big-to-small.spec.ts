/**
 * @file Unit Tests - bigToSmall
 * @module katas/8kyu/tests/unit/bigToSmall
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../big-to-small'

describe('unit:katas/8kyu/bigToSmall', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: '1>1>1>1>1', parameters: [[[1, 1], [1], [1, 1]]] },
    { expected: '6>5>4>3>2>1', parameters: [[[1, 3, 5], [2, 4, 6]]] },
    { expected: '6>5>4>3>2>1', parameters: [[[1, 2], [3, 4], [5, 6]]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
