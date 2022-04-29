/**
 * @file Unit Tests - oddCount
 * @module katas/8kyu/tests/unit/oddCount
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../odd-count'

describe('unit:katas/8kyu/oddCount', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [0] },
    { expected: 1, parameters: [2] },
    { expected: 3, parameters: [7] },
    { expected: 7, parameters: [15] },
    { expected: 2_705_905_646_113_840, parameters: [5_411_811_292_227_681] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
