/**
 * @file Unit Tests - rentalCarCost
 * @module katas/8kyu/tests/unit/rentalCarCost
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../rental-car-cost'

describe('unit:katas/8kyu/rentalCarCost', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const describes: { cases: Case[]; title: string }[] = [
    {
      cases: [
        { expected: 40, parameters: [1] },
        { expected: 80, parameters: [2] }
      ],
      title: 'should return pricing for under 3 days'
    },
    {
      cases: [
        { expected: 100, parameters: [3] },
        { expected: 140, parameters: [4] },
        { expected: 180, parameters: [5] },
        { expected: 220, parameters: [6] }
      ],
      title: 'should return pricing for under 7 days'
    },
    {
      cases: [
        { expected: 230, parameters: [7] },
        { expected: 270, parameters: [8] },
        { expected: 310, parameters: [9] },
        { expected: 350, parameters: [10] }
      ],
      title: 'should return pricing for more than 7 days'
    }
  ]

  describes.forEach(({ cases, title }) => {
    describe(title, () => {
      cases.forEach(({ expected, parameters }) => {
        it(`should return ${expected} given ${pf(parameters)}`, () => {
          expect(testSubject(...parameters)).to.equal(expected)
        })
      })
    })
  })
})
