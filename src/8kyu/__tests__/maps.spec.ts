/**
 * @file Unit Tests - maps
 * @module katas/8kyu/tests/unit/maps
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../maps'

describe('unit:katas/8kyu/maps', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [2, 4, 6], parameters: [[1, 2, 3]] },
    { expected: [8, 2, 2, 2, 8], parameters: [[4, 1, 1, 1, 4]] },
    { expected: [4, 4, 4, 4, 4, 4], parameters: [[2, 2, 2, 2, 2, 2]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
