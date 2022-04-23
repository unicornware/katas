/**
 * @file Unit Tests - dnaStrand
 * @module katas/tests/unit/dnaStrand
 */

import type { TestcaseFn } from '@tests/interfaces'
import TestSubject from '../dna-strand'

describe('unit:katas/dnaStrand', () => {
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
