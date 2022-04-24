/**
 * @file Unit Tests - gapInPrimes
 * @module katas/5kyu/tests/unit/gapInPrimes
 */

import type { TestcaseFn } from '@tests/interfaces'
import TestSubject from '../gap-in-primes'

describe('unit:katas/5kyu/gapInPrimes', () => {
  describe('.gap', () => {
    interface Case extends TestcaseFn<typeof TestSubject['gap']> {}

    const cases: Case[] = [
      { expected: null, parameters: [2, 5, 5] },
      { expected: null, parameters: [6, 100, 110] },
      { expected: [3, 5], parameters: [2, 3, 50] },
      { expected: [5, 7], parameters: [2, 5, 7] },
      { expected: [101, 103], parameters: [2, 100, 110] },
      { expected: [103, 107], parameters: [4, 100, 110] },
      { expected: [163, 167], parameters: [4, 130, 200] },
      { expected: [359, 367], parameters: [8, 300, 400] },
      { expected: [337, 347], parameters: [10, 300, 400] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.gap(...parameters)).to.deep.equal(expected)
      })
    })
  })

  describe('.prime', () => {
    interface Case extends TestcaseFn<typeof TestSubject['prime']> {}

    const cases: Case[] = [
      { expected: false, parameters: [1] },
      { expected: false, parameters: [10] },
      { expected: true, parameters: [2] },
      { expected: true, parameters: [13] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${expected} given ${pf(parameters)}`, () => {
        expect(TestSubject.prime(...parameters)).to.equal(expected)
      })
    })
  })

  describe('.primes', () => {
    interface Case extends TestcaseFn<typeof TestSubject['primes']> {}

    const cases: Case[] = [
      { expected: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29], parameters: [30] },
      { expected: [5, 7, 11, 13, 17, 19], parameters: [20, 4] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.primes(...parameters)).to.deep.equal(expected)
      })
    })
  })
})
