/**
 * @file Unit Tests - toJadenCase
 * @module katas/7kyu/tests/unit/toJadenCase
 */

import type { Testcase } from '@tests/interfaces'
import testSubject from '../to-jaden-case'

describe('unit:katas/7kyu/toJadenCase', () => {
  interface Case extends Testcase<ReturnType<typeof testSubject>> {
    parameters: [string]
  }

  const cases: Case[] = [
    {
      expected: "How Can Mirrors Be Real If Our Eyes Aren't Real",
      parameters: ["How can mirrors be real if our eyes aren't real"]
    }
  ]

  cases.forEach(({ expected, parameters: [string] }) => {
    it(`should return ${pf(expected)} given [${pf(string)}]`, () => {
      expect(testSubject.apply(string)).to.equal(expected)
    })
  })
})
