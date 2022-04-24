/**
 * @file Unit Tests - johnAndAnnCodewars
 * @module katas/5kyu/tests/unit/johnAndAnnCodewars
 */

import type { TestcaseFn } from '@tests/interfaces'
import TestSubject from '../john-and-ann-codewars'

describe('unit:katas/5kyu/johnAndAnnCodewars', () => {
  describe('.ann', () => {
    interface Case extends TestcaseFn<typeof TestSubject['ann']> {}

    const cases: Case[] = [
      { expected: [1], parameters: [0] },
      { expected: [1, 1, 2, 2, 3, 3], parameters: [6] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.ann(...parameters)).to.deep.equal(expected)
      })
    })
  })

  describe('.john', () => {
    interface Case extends TestcaseFn<typeof TestSubject['john']> {}

    const cases: Case[] = [
      { expected: [0], parameters: [0] },
      { expected: [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6], parameters: [11] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.john(...parameters)).to.deep.equal(expected)
      })
    })
  })

  describe('.sumAnn', () => {
    interface Case extends TestcaseFn<typeof TestSubject['sumAnn']> {}

    const cases: Case[] = [
      { expected: 1, parameters: [0] },
      { expected: 9, parameters: [5] },
      { expected: 4070, parameters: [115] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${expected} given ${pf(parameters)}`, () => {
        expect(TestSubject.sumAnn(...parameters)).to.equal(expected)
      })
    })
  })

  describe('.sumJohn', () => {
    interface Case extends TestcaseFn<typeof TestSubject['sumJohn']> {}

    const cases: Case[] = [
      { expected: 0, parameters: [0] },
      { expected: 33, parameters: [11] },
      { expected: 1720, parameters: [75] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${expected} given ${pf(parameters)}`, () => {
        expect(TestSubject.sumJohn(...parameters)).to.equal(expected)
      })
    })
  })
})
