/**
 * @file Unit Tests - dnaStrand
 * @module katas/7kyu/tests/unit/dnaStrand
 */

import type { TestcaseFn } from '@tests/interfaces'
import TestSubject from '../dna-strand'

describe('unit:katas/7kyu/dnaStrand', () => {
  describe('.dnaStrand', () => {
    interface Case extends TestcaseFn<typeof TestSubject['dnaStrand']> {}

    const cases: Case[] = [
      { expected: 'TTTT', parameters: ['AAAA'] },
      { expected: 'CATA', parameters: ['GTAT'] },
      { expected: 'TAACG', parameters: ['ATTGC'] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.dnaStrand(...parameters)).to.equal(expected)
      })
    })
  })
})
