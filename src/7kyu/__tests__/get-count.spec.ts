/**
 * @file Unit Tests - getCount
 * @module katas/7kyu/tests/unit/getCount
 */

import type { TestcaseFn } from '@tests/interfaces'
import TestSubject from '../get-count'

describe('unit:katas/7kyu/getCount', () => {
  describe('.getCount', () => {
    interface Case extends TestcaseFn<typeof TestSubject['getCount']> {}

    const cases: Case[] = [
      { expected: 5, parameters: ['abracadabra'] },
      {
        expected: 11,
        parameters: ['the quick brown fox jumps over the lazy dog']
      }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${expected} given ${pf(parameters)}`, () => {
        expect(TestSubject.getCount(...parameters)).to.equal(expected)
      })
    })
  })
})
