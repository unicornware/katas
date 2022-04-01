/**
 * @file Unit Tests - disemvowel
 * @module katas/tests/unit/disemvowel
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../disemvowel'

describe('unit:katas/disemvowel', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    {
      expected: 'Ths wbst s fr lsrs LL!',
      parameters: ['This website is for losers LOL!']
    },
    { expected: 'ndrd scks', parameters: ['Android sucks'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
