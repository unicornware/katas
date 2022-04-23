/**
 * @file Unit Tests - change
 * @module katas/5kyu/tests/unit/change
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../change'

describe('unit:katas/5kyu/change', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    {
      expected:
        'Program: Ladder Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.1',
      parameters: [
        'Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-0091\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha',
        'Ladder',
        '1.1'
      ]
    },
    {
      expected:
        'Program: Circular Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.5',
      parameters: [
        'Program title: Balance\nAuthor: Dorries\nCorporation: Funny\nPhone: +1-503-555-0095\nDate: Tues July 19, 2014\nVersion: 6.7\nLevel: Release',
        'Circular',
        '1.5'
      ]
    },
    {
      expected:
        'Program: Candy Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 2.0',
      parameters: [
        'Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-0093\nDate: Tues April 9, 2005\nVersion: 2.0\nLevel: Can',
        'Candy',
        '1.7'
      ]
    },
    {
      expected: 'ERROR: VERSION or PHONE',
      parameters: [
        'Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-009\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha',
        'Ladder',
        '1.1'
      ]
    },
    {
      expected: 'ERROR: VERSION or PHONE',
      parameters: [
        'Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-0090\nDate: Tues April 9, 2005\nVersion: 67\nLevel: Alpha',
        'Ladder',
        '1.1'
      ]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    const args = `[s, ${pf(parameters[1])}, ${pf(parameters[2])}]`

    it(`should return ${pf(expected)} given ${args}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
