/**
 * @file Unit Tests - humanReadable
 * @module katas/5kyu/tests/unit/humanReadable
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../human-readable'

describe('unit:katas/5kyu/humanReadable', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: '00:00:00', parameters: [0] },
    { expected: '00:00:05', parameters: [5] },
    { expected: '00:01:00', parameters: [60] },
    { expected: '23:59:59', parameters: [86_399] },
    { expected: '99:59:59', parameters: [359_999] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
