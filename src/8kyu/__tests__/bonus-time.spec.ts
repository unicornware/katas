/**
 * @file Unit Tests - bonusTime
 * @module katas/8kyu/tests/unit/bonusTime
 */

import type { TestcaseFn } from '@tests/interfaces'
import TestSubject from '../bonus-time'

describe('unit:katas/8kyu/bonusTime', () => {
  describe('.bonusTime', () => {
    interface Case extends TestcaseFn<typeof TestSubject['bonusTime']> {}

    const cases: Case[] = [
      { expected: '£20', parameters: [2, true] },
      { expected: '£78', parameters: [78, false] },
      { expected: '£10000', parameters: [10_000, false] },
      { expected: '£60000', parameters: [60_000, false] },
      { expected: '£100000', parameters: [10_000, true] },
      { expected: '£250000', parameters: [25_000, true] },
      { expected: '£678900', parameters: [67_890, true] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.bonusTime(...parameters)).to.equal(expected)
      })
    })
  })
})
