/**
 * @file Unit Tests - between
 * @module katas/8kyu/tests/unit/between
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../between'

describe('unit:katas/8kyu/between', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [1, 2, 3, 4], parameters: [1, 4] },
    { expected: [-2, -1, 0, 1, 2], parameters: [-2, 2] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
