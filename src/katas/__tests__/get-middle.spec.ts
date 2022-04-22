/**
 * @file Unit Tests - getMiddle
 * @module katas/tests/unit/getMiddle
 */

import type { TestcaseFn } from '@tests/interfaces'
import TestSubject from '../get-middle'

describe('unit:katas/getMiddle', () => {
  describe('.getMiddle', () => {
    interface Case extends TestcaseFn<typeof TestSubject['getMiddle']> {}

    const cases: Case[] = [
      { expected: 'A', parameters: ['A'] },
      { expected: 'es', parameters: ['test'] },
      { expected: 'dd', parameters: ['middle'] },
      { expected: 't', parameters: ['testing'] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.getMiddle(...parameters)).to.equal(expected)
      })
    })
  })
})
