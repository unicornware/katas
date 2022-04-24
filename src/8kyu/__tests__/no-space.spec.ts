/**
 * @file Unit Tests - noSpace
 * @module katas/8kyu/tests/unit/noSpace
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../no-space'

describe('unit:katas/8kyu/noSpace', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: '', parameters: [''] },
    { expected: '8aaaaaddddr', parameters: ['8aaaaa dddd r     '] },
    {
      expected: '8j8mBliB8gimjB8B8jlB',
      parameters: ['8 j 8   mBliB8g  imjB8B8  jl  B']
    },
    {
      expected: '88Bifk8hB8BB8BBBB888chl8BhBfd',
      parameters: ['8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd']
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
