/**
 * @file Unit Tests - subtractSum
 * @module katas/8kyu/tests/unit/subtractSum
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject, { Fruit } from '../subtract-sum'

describe('unit:katas/8kyu/subtractSum', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [{ expected: Fruit.APPLE, parameters: [10] }]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
