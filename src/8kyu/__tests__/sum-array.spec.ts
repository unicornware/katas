/**
 * @file Unit Tests - sumArray
 * @module katas/8kyu/tests/unit/sumArray
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../sum-array'

describe('unit:katas/8kyu/sumArray', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [[]] },
    { expected: 0, parameters: [[0]] },
    { expected: 0, parameters: [null] },
    { expected: 6, parameters: [[1, 1, 11, 2, 3]] },
    { expected: 16, parameters: [[6, 2, 1, 8, 10]] },
    { expected: 17, parameters: [[6, 0, 1, 10, 10]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
