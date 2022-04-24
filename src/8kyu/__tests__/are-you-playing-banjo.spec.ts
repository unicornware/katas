/**
 * @file Unit Tests - areYouPlayingBanjo
 * @module katas/8kyu/tests/unit/areYouPlayingBanjo
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../are-you-playing-banjo'

describe('unit:katas/8kyu/areYouPlayingBanjo', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'rolf plays banjo', parameters: ['rolf'] },
    { expected: 'Ringo plays banjo', parameters: ['Ringo'] },
    { expected: 'Adam does not play banjo', parameters: ['Adam'] },
    { expected: 'Paul does not play banjo', parameters: ['Paul'] },
    { expected: 'bravo does not play banjo', parameters: ['bravo'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
