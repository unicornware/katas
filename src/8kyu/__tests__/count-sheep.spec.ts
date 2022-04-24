/**
 * @file Unit Tests - countSheep
 * @module katas/8kyu/tests/unit/countSheep
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../count-sheep'

describe('unit:katas/8kyu/countSheep', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: '', parameters: [0] },
    { expected: '1 sheep...', parameters: [1] },
    { expected: '1 sheep...2 sheep...', parameters: [2] },
    { expected: '1 sheep...2 sheep...3 sheep...', parameters: [3] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
