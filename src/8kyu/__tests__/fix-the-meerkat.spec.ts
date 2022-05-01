/**
 * @file Unit Tests - fixTheMeerkat
 * @module katas/8kyu/tests/unit/fixTheMeerkat
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../fix-the-meerkat'

describe('unit:katas/8kyu/fixTheMeerkat', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    {
      expected: ['head', 'body', 'tail'],
      parameters: [['tail', 'body', 'head']]
    },
    {
      expected: ['heads', 'body', 'tails'],
      parameters: [['tails', 'body', 'heads']]
    },
    {
      expected: ['top', 'middle', 'bottom'],
      parameters: [['bottom', 'middle', 'top']]
    },
    {
      expected: ['upper legs', 'torso', 'lower legs'],
      parameters: [['lower legs', 'torso', 'upper legs']]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
