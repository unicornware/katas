/**
 * @file Unit Tests - findUniq
 * @module katas/6kyu/tests/unit/findUniq
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../find-uniq'

describe('unit:katas/6kyu/findUniq', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: null, parameters: [[]] },
    { expected: null, parameters: [[1]] },
    { expected: null, parameters: [[1, 2]] },
    { expected: null, parameters: [[3, 3, 3]] },
    { expected: 2, parameters: [[1, 1, 1, 2, 1, 1]] },
    { expected: 0.55, parameters: [[0, 0, 0.55, 0, 0]] },
    { expected: 0, parameters: [[0, 1, 1, 1, 1, 1, 1, 1]] },
    { expected: 14, parameters: [[7, 7, 7, 7, 7, 7, 7, 14, 7]] },
    { expected: 16, parameters: [[8, 8, 8, 8, 8, 8, 8, 8, 16]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
