/**
 * @file Unit Tests - greetBossOrGuest
 * @module katas/8kyu/tests/unit/greetBossOrGuest
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../greet-boss-or-guest'

describe('unit:katas/8kyu/greetBossOrGuest', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'Hello guest', parameters: ['Greg', 'Daniel'] },
    { expected: 'Hello boss', parameters: ['Daniel', 'Daniel'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
