/**
 * @file Unit Tests - abbrevName
 * @module katas/tests/unit/abbrevName
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../abbrev-name'

describe('unit:katas/abbrevName', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'R.F', parameters: ['R Favuzzi'] },
    { expected: 'S.H', parameters: ['Sam Harris'] },
    { expected: 'P.F', parameters: ['Patrick Feenan'] },
    { expected: 'P.F', parameters: ['patrick feeney'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
