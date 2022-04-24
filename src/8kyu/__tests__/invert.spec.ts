/**
 * @file Unit Tests - invert
 * @module katas/8kyu/tests/unit/invert
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../invert'

describe('unit:katas/8kyu/invert', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [], parameters: [[]] },
    { expected: [-0], parameters: [[0]] },
    { expected: [-1, -2, -3, -4, -5], parameters: [[1, 2, 3, 4, 5]] },
    { expected: [-1, 2, -3, 4, -5], parameters: [[1, -2, 3, -4, 5]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
