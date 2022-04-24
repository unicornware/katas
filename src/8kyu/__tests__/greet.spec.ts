/**
 * @file Unit Tests - greet
 * @module katas/8kyu/tests/unit/greet
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../greet'

describe('unit:katas/8kyu/greet', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'Hello, Ryan how are you doing today?', parameters: ['Ryan'] },
    {
      expected: 'Hello, Shingles how are you doing today?',
      parameters: ['Shingles']
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
