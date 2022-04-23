/**
 * @file Unit Tests - isTriangle
 * @module katas/7kyu/tests/unit/isTriangle
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../is-triangle'

describe('unit:katas/7kyu/isTriangle', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: true, parameters: [1, 2, 2] },
    { expected: false, parameters: [7, 2, 2] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
