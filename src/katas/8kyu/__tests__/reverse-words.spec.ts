/**
 * @file Unit Tests - reverseWords
 * @module katas/8kyu/tests/unit/reverseWords
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../reverse-words'

describe('unit:katas/8kyu/reverseWords', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'foobar', parameters: ['foobar'] },
    { expected: 'editor kata', parameters: ['kata editor'] },
    { expected: 'world! hello', parameters: ['hello world!'] },
    {
      expected: 'boat your row row row',
      parameters: ['row row row your boat']
    },
    {
      expected: "this like speak doesn't yoda",
      parameters: ["yoda doesn't speak like this"]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
