/**
 * @file Unit Tests - even_or_odd
 * @module katas/8kyu/tests/unit/even_or_odd
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../even-or-odd'

describe('unit:katas/8kyu/even_or_odd', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'Even', parameters: [-4] },
    { expected: 'Odd', parameters: [-3] },
    { expected: 'Even', parameters: [0] },
    { expected: 'Odd', parameters: [1] },
    { expected: 'Even', parameters: [2] },
    { expected: 'Odd', parameters: [7] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
