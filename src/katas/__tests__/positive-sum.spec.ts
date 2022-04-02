/**
 * @file Unit Tests - positiveSum
 * @module katas/tests/unit/positiveSum
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../positive-sum'

describe('unit:katas/positiveSum', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [[]] },
    { expected: 20, parameters: [[1, -4, 7, 12]] },
    { expected: 15, parameters: [[1, 2, 3, 4, 5]] },
    { expected: 9, parameters: [[-1, 2, 3, 4, -5]] },
    { expected: 13, parameters: [[1, -2, 3, 4, 5]] },
    { expected: 0, parameters: [[-1, -2, -3, -4, -5]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
