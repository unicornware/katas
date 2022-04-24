/**
 * @file Unit Tests - isSquare
 * @module katas/7kyu/tests/unit/isSquare
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../is-square'

describe('unit:katas/7kyu/isSquare', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: true, parameters: [0] },
    { expected: true, parameters: [4] },
    { expected: true, parameters: [25] },
    { expected: false, parameters: [3] },
    { expected: false, parameters: [-1] },
    { expected: false, parameters: [26] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
