/**
 * @file Unit Tests - warnTheSheep
 * @module katas/tests/unit/warnTheSheep
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../warn-the-sheep'

describe('unit:katas/warnTheSheep', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    {
      expected: 'Pls go away and stop eating my sheep',
      parameters: [['sheep', 'sheep', 'wolf']]
    },
    {
      expected: 'Oi! Sheep number 1! You are about to be eaten by a wolf!',
      parameters: [['sheep', 'wolf', 'sheep']]
    },
    {
      expected: 'Oi! Sheep number 2! You are about to be eaten by a wolf!',
      parameters: [
        ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']
      ]
    },
    {
      expected: 'Oi! Sheep number 5! You are about to be eaten by a wolf!',
      parameters: [
        ['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']
      ]
    },
    {
      expected: 'Oi! Sheep number 6! You are about to be eaten by a wolf!',
      parameters: [
        ['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']
      ]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
