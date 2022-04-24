/**
 * @file Unit Tests - divisibleByFive
 * @module katas/4kyu/tests/unit/divisibleByFive
 */

import type { TestcaseFn } from '@tests/interfaces'
import TestSubject from '../divisible-by-five'

describe('unit:katas/4kyu/divisibleByFive', () => {
  describe('#test', () => {
    interface Case extends TestcaseFn<typeof TestSubject['test']> {}

    const cases: Case[] = [
      { expected: false, parameters: [''] },
      { expected: true, parameters: ['101'] },
      { expected: true, parameters: ['1010'] },
      { expected: true, parameters: ['10100'] },
      { expected: false, parameters: [(21).toString(2)] },
      { expected: false, parameters: ['1110001'] },
      { expected: false, parameters: ['10110101'] },
      { expected: false, parameters: [(328).toString(2)] },
      { expected: false, parameters: [(5729).toString(2)] },
      { expected: false, parameters: [(15_392).toString(2)] },
      { expected: false, parameters: [(19_344).toString(2)] },
      { expected: false, parameters: [(43_936).toString(2)] },
      { expected: true, parameters: [(65_020).toString(2)] }
    ]

    cases.forEach(({ expected, parameters: [string] }) => {
      const d = Number.parseInt(string, 2)
      const state = Number.isNaN(d) ? 'empty string' : `${d} as binary number`

      it(`should return ${expected} given ${state}`, () => {
        expect(TestSubject.test(string)).to.equal(expected)
      })
    })
  })
})
