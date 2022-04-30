/**
 * @file Unit Tests - isPalindrome
 * @module katas/8kyu/tests/unit/isPalindrome
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../is-palindrome'

describe('unit:katas/8kyu/isPalindrome', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: true, parameters: ['anna'] },
    { expected: false, parameters: ['walter'] },
    { expected: false, parameters: ['We love Codewars!'] },
    { expected: true, parameters: ['sator arepo tenet opera rotas'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
