/**
 * @file Unit Tests - disemvowel
 * @module katas/7kyu/tests/unit/disemvowel
 */

import type { TestcaseFn } from '@tests/interfaces'
import TestSubject from '../disemvowel'

describe('unit:katas/7kyu/disemvowel', () => {
  describe('.disemvowel', () => {
    interface Case extends TestcaseFn<typeof TestSubject['disemvowel']> {}

    const cases: Case[] = [
      {
        expected: 'Ths wbst s fr lsrs LL!',
        parameters: ['This website is for losers LOL!']
      },
      { expected: 'ndrd scks', parameters: ['Android sucks'] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.disemvowel(...parameters)).to.equal(expected)
      })
    })
  })
})
