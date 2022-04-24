/**
 * @file Unit Tests - correct
 * @module katas/8kyu/tests/unit/order
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../correct'

describe('unit:katas/8kyu/correct', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'BUDAPEST', parameters: ['BUDAPE5T'] },
    { expected: 'DUBLIN', parameters: ['DUBL1N'] },
    { expected: 'LONDON', parameters: ['L0ND0N'] },
    { expected: 'PARIS', parameters: ['PAR15'] },
    { expected: 'SINGAPORE', parameters: ['51NGAP0RE'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
