/**
 * @file Unit Tests - maxMin
 * @module katas/8kyu/tests/unit/maxMin
 */

import type { TestcaseFn } from '@tests/interfaces'
import * as TestSubject from '../max-min'

describe('unit:katas/8kyu/maxMin', () => {
  describe('.max', () => {
    interface Case extends TestcaseFn<typeof TestSubject['max']> {}

    const cases: Case[] = [
      { expected: 5, parameters: [[5]] },
      { expected: 566, parameters: [[4, 6, 2, 1, 9, 63, -134, 566]] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${expected} given ${pf(parameters)}`, () => {
        expect(TestSubject.max(...parameters)).to.equal(expected)
      })
    })
  })

  describe('.min', () => {
    interface Case extends TestcaseFn<typeof TestSubject['max']> {}

    const cases: Case[] = [
      { expected: 0, parameters: [[42, 54, 65, 87, 0]] },
      { expected: -110, parameters: [[-52, 56, 30, 29, -54, 0, -110]] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${expected} given ${pf(parameters)}`, () => {
        expect(TestSubject.min(...parameters)).to.equal(expected)
      })
    })
  })
})
