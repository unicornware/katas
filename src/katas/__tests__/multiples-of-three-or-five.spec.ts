/**
 * @file Unit Tests - multiplesOfThreeOrFive
 * @module katas/tests/unit/multiplesOfThreeOrFive
 */

import type { TestcaseFn } from '@tests/interfaces'
import TestSubject from '../multiples-of-three-or-five'

describe('unit:katas/multiplesOfThreeOrFive', () => {
  describe('.solution', () => {
    interface Case extends TestcaseFn<typeof TestSubject['solution']> {}

    const cases: Case[] = [
      { expected: 0, parameters: [-1] },
      { expected: 23, parameters: [10] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${expected} given ${pf(parameters)}`, () => {
        expect(TestSubject.solution(...parameters)).to.equal(expected)
      })
    })
  })
})
