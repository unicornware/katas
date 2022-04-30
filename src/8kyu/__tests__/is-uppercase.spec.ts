/**
 * @file Unit Tests - isUppercase
 * @module katas/8kyu/tests/unit/isUppercase
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../is-uppercase'

describe('unit:katas/8kyu/isUppercase', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: true, parameters: [''] },
    { expected: true, parameters: ['C'] },
    { expected: false, parameters: ['c'] },
    { expected: true, parameters: ['HELLO I AM DONALD'] },
    { expected: false, parameters: ['hello I AM DONALD'] },
    { expected: true, parameters: ['ACSKLDFJSGSKLDFJSKLDFJ'] },
    { expected: false, parameters: ['ACSKLDFJSgSKLDFJSKLDFJ'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
