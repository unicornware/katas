/**
 * @file Unit Tests - orderWeight
 * @module katas/5kyu/tests/unit/orderWeight
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../order-weight'

describe('unit:katas/5kyu/orderWeight', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: '2000 103 123 4444 99', parameters: ['103 123 4444 99 2000'] },
    {
      expected: '100 180 90 56 65 74 68 86 99',
      parameters: ['56 65 74 100 99 68 86 180 90']
    },

    {
      expected: '11 11 2000 10003 22 123 1234000 44444444 9999',
      parameters: ['2000 10003 1234000 44444444 9999 11 11 22 123']
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
