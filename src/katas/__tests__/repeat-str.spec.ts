/**
 * @file Unit Tests - repeatStr
 * @module katas/tests/unit/repeatStr
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../repeat-str'

describe('unit:katas/repeatStr', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: '***', parameters: [3, '*'] },
    { expected: 'IIIIII', parameters: [6, 'I'] },
    { expected: 'HelloHelloHelloHelloHello', parameters: [5, 'Hello'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
