/**
 * @file Unit Tests - productFib
 * @module katas/tests/unit/productFib
 */

import type { TestcaseFn } from '@tests/interfaces'
import TestSubject from '../product-fib'

describe('unit:katas/productFib', () => {
  describe('.productFib', () => {
    interface Case extends TestcaseFn<typeof TestSubject['productFib']> {}

    const cases: Case[] = [
      { expected: [21, 34, true], parameters: [714] },
      { expected: [34, 55, false], parameters: [800] },
      { expected: [55, 89, true], parameters: [4895] },
      { expected: [89, 144, false], parameters: [5895] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.productFib(...parameters)).to.deep.equal(expected)
      })
    })
  })
})
