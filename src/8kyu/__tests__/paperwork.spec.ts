/**
 * @file Unit Tests - paperwork
 * @module katas/8kyu/tests/unit/paperwork
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../paperwork'

describe('unit:katas/8kyu/paperwork', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [5, 0] },
    { expected: 0, parameters: [5, -5] },
    { expected: 0, parameters: [-5, 5] },
    { expected: 25, parameters: [5, 5] },
    { expected: 0, parameters: [-5, -5] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
