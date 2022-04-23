/**
 * @file Unit Tests - fakeBin
 * @module katas/8kyu/tests/unit/fakeBin
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../fake-bin'

describe('unit:katas/8kyu/fakeBin', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: '101000111101101', parameters: ['509321967506747'] },
    { expected: '01011110001100111', parameters: ['45385593107843568'] },
    {
      expected: '011011110000101010000011011',
      parameters: ['366058562030849490134388085']
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
