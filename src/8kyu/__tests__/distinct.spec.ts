/**
 * @file Unit Tests - distinct
 * @module katas/8kyu/tests/unit/distinct
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../distinct'

describe('unit:katas/8kyu/distinct', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: [1], parameters: [[1]] },
    { expected: [1, 2], parameters: [[1, 2]] },
    { expected: [1, 2], parameters: [[1, 1, 2]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
