/**
 * @file Unit Tests - dirReduc
 * @module katas/tests/unit/dirReduc
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../dir-reduc'

describe('unit:katas/dirReduc', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    {
      expected: [],
      parameters: [['NORTH', 'SOUTH', 'EAST', 'WEST']]
    },
    {
      expected: [],
      parameters: [['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH']]
    },
    {
      expected: ['NORTH', 'WEST', 'SOUTH', 'EAST'],
      parameters: [['NORTH', 'WEST', 'SOUTH', 'EAST']]
    },
    {
      expected: ['WEST', 'WEST'],
      parameters: [['NORTH', 'EAST', 'WEST', 'SOUTH', 'WEST', 'WEST']]
    },
    {
      expected: ['WEST'],
      parameters: [['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
