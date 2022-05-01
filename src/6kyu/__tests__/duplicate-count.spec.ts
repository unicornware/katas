/**
 * @file Unit Tests - duplicateCount
 * @module katas/6kyu/tests/unit/duplicateCount
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../duplicate-count'

describe('unit:katas/6kyu/duplicateCount', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [''] },
    { expected: 2, parameters: ['aA11'] },
    { expected: 2, parameters: ['ABBA'] },
    { expected: 0, parameters: ['abcde'] },
    { expected: 2, parameters: ['aabbcde'] },
    { expected: 2, parameters: ['aabBcde'] },
    { expected: 1, parameters: ['Indivisibility'] },
    { expected: 2, parameters: ['Indivisibilities'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
