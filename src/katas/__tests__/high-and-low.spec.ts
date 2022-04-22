/**
 * @file Unit Tests - highAndLow
 * @module katas/tests/unit/highAndLow
 */

import type { TestcaseFn } from '@tests/interfaces'
import TestSubject from '../high-and-low'

describe('unit:katas/highAndLow', () => {
  describe('.highAndLow', () => {
    interface Case extends TestcaseFn<typeof TestSubject['highAndLow']> {}

    const cases: Case[] = [
      { expected: '3 1', parameters: ['1 2 3'] },
      { expected: '5 1', parameters: ['1 2 3 4 5'] },
      { expected: '5 -3', parameters: ['1 2 -3 4 5'] },
      { expected: '9 -5', parameters: ['1 9 3 4 -5'] },
      { expected: '42 -9', parameters: ['8 3 -5 42 -1 0 0 -9 4 7 4 -4'] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.highAndLow(...parameters)).to.equal(expected)
      })
    })
  })
})
