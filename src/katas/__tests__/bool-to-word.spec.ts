/**
 * @file Unit Tests - boolToWord
 * @module katas/tests/unit/boolToWord
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../bool-to-word'

describe('unit:katas/boolToWord', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'No', parameters: [false] },
    { expected: 'Yes', parameters: [true] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
