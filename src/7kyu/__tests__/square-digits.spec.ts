/**
 * @file Unit Tests - squareDigits
 * @module katas/7kyu/tests/unit/squareDigits
 */

import type { TestcaseFn } from '@tests/interfaces'
import TestSubject from '../square-digits'

describe('unit:katas/7kyu/squareDigits', () => {
  describe('.squareDigits', () => {
    interface Case extends TestcaseFn<typeof TestSubject['squareDigits']> {}

    const cases: Case[] = [
      { expected: 811_181, parameters: [9119] },
      { expected: 14_916, parameters: [1234] },
      { expected: 0, parameters: [0] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.squareDigits(...parameters)).to.equal(expected)
      })
    })
  })
})
