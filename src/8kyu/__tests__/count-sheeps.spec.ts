/**
 * @file Unit Tests - countSheeps
 * @module katas/8kyu/tests/unit/countSheeps
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../count-sheeps'

describe('unit:katas/8kyu/countSheeps', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 3, parameters: [[true, false, null, undefined, true, true]] },
    {
      expected: 17,
      parameters: [
        [
          true,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          false,
          true,
          false,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          false,
          false,
          true,
          true
        ]
      ]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
