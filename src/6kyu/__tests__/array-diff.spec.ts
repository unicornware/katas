/**
 * @file Unit Tests - arrayDiff
 * @module katas/6kyu/tests/unit/arrayDiff
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../array-diff'

describe('unit:katas/6kyu/arrayDiff', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [], parameters: [[], [4, 5]] },
    { expected: [4], parameters: [[3, 4], [3]] },
    { expected: [3], parameters: [[1, 2, 3], [1, 2]] },
    { expected: [1, 8, 2], parameters: [[1, 8, 2], []] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
