/**
 * @file Unit Tests - makeUppercase
 * @module katas/8kyu/tests/unit/makeUppercase
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../make-uppercase'

describe('unit:katas/8kyu/makeUppercase', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'HELLO', parameters: ['hello'] },
    { expected: 'HELLO WORLD', parameters: ['hello world'] },
    { expected: 'HELLO WORLD !', parameters: ['hello world !'] },
    { expected: 'HELLO WORLD !', parameters: ['Hello World !'] },
    { expected: '1,2,3 HELLO WORLD!', parameters: ['1,2,3 hello world!'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
