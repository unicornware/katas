/**
 * @file Unit Tests - cockroachSpeed
 * @module katas/8kyu/tests/unit/cockroachSpeed
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../cockroach-speed'

describe('unit:katas/8kyu/cockroachSpeed', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 0, parameters: [0] },
    { expected: 30, parameters: [1.08] },
    { expected: 30, parameters: [1.09] },
    { expected: 42, parameters: [1.52] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
