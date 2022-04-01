/**
 * @file Unit Tests - realSize
 * @module katas/tests/unit/realSize
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../real-size'

describe('unit:katas/realSize', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [[]] },
    { expected: 0, parameters: [[[]]] },
    { expected: 2, parameters: [[1, [1]]] },
    { expected: 3, parameters: [[1, [], 2, [], 3, []]] },
    { expected: 7, parameters: [[0, [1, [5, [4, 3], 1], 1]]] },
    { expected: 7, parameters: [[[[5], 3], 0, 2, [], [4, [5, 6]]]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
