/**
 * @file Unit Tests - opposite
 * @module katas/tests/unit/opposite
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../opposite'

describe('unit:katas/opposite', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [0] },
    { expected: -1, parameters: [1] },
    { expected: -14, parameters: [14] },
    { expected: 34, parameters: [-34] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
