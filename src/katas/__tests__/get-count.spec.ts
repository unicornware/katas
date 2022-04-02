/**
 * @file Unit Tests - getCount
 * @module katas/tests/unit/getCount
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../get-count'

describe('unit:katas/getCount', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 5, parameters: ['abracadabra'] },
    {
      expected: 11,
      parameters: ['the quick brown fox jumps over the lazy dog']
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
