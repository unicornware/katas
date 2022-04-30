/**
 * @file Unit Tests - arr2bin
 * @module katas/8kyu/tests/unit/arr2bin
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../arr2bin'

describe('unit:katas/8kyu/arr2bin', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: '0', parameters: [] },
    { expected: '0', parameters: [[]] },
    { expected: '0', parameters: [[null]] },
    { expected: '11', parameters: [[1, 2]] },
    { expected: '11', parameters: [[1, 2, 'a']] },
    { expected: '1111', parameters: [[1, 2, 3, 4, 5]] },
    { expected: '1111', parameters: [[true, true, false, 15]] },
    { expected: '10001010111', parameters: [[1, 10, 100, 1000]] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
