/**
 * @file Unit Tests - hello
 * @module katas/8kyu/tests/unit/hello
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../hello'

describe('unit:katas/8kyu/hello', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'hello world!', parameters: [] },
    { expected: 'hello pluto!', parameters: ['pluto'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
