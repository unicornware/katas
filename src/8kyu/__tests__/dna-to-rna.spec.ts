/**
 * @file Unit Tests - DNAtoRNA
 * @module katas/8kyu/tests/unit/DNAtoRNA
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../dna-to-rna'

describe('unit:katas/8kyu/DNAtoRNA', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'GCAU', parameters: ['GCAT'] },
    { expected: 'UUUU', parameters: ['TTTT'] },
    { expected: 'GACCGCCGCC', parameters: ['GACCGCCGCC'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
