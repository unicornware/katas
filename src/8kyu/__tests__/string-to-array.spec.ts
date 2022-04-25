/**
 * @file Unit Tests - stringToArray
 * @module katas/8kyu/tests/unit/stringToArray
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../string-to-array'

describe('unit:katas/8kyu/stringToArray', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: ['Robin', 'Singh'], parameters: ['Robin Singh'] },
    {
      expected: ['I', 'love', 'arrays', 'they', 'are', 'my', 'favorite'],
      parameters: ['I love arrays they are my favorite']
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
