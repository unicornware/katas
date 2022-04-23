/**
 * @file Unit Tests - check
 * @module katas/8kyu/tests/unit/check
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../check'

describe('unit:katas/8kyu/check', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: true, parameters: [[66, 101], 66] },
    { expected: true, parameters: [['t', 'e', 's', 't'], 'e'] },
    { expected: false, parameters: [['what', 'a', 'great', 'kata'], 'kat'] },
    { expected: true, parameters: [[80, 117, 115, 104, 45, 85, 112, 115], 45] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
