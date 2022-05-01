/**
 * @file Unit Tests - likes
 * @module katas/6kyu/tests/unit/likes
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../likes'

describe('unit:katas/6kyu/likes', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'no one likes this', parameters: [[]] },
    { expected: 'Peter likes this', parameters: [['Peter']] },
    { expected: 'Jacob and Alex like this', parameters: [['Jacob', 'Alex']] },
    {
      expected: 'Max, John and Mark like this',
      parameters: [['Max', 'John', 'Mark']]
    },
    {
      expected: 'Alex, TJ and 2 others like this',
      parameters: [['Alex', 'TJ', 'Mark', 'Max']]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
