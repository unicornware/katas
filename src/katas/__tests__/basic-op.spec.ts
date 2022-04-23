/**
 * @file Unit Tests - basicOp
 * @module katas/tests/unit/basicOp
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject, { Op } from '../basic-op'

describe('unit:katas/basicOp', () => {
  describe('@return', () => {
    interface Case extends TestcaseFn<typeof testSubject> {}

    const cases: Case[] = [
      { expected: 11, parameters: [Op.ADDITION, 4, 7] },
      { expected: 7, parameters: [Op.DIVISION, 49, 7] },
      { expected: -3, parameters: [Op.SUBTRACTION, 15, 18] },
      { expected: 25, parameters: [Op.MULTIPLICATION, 5, 5] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${expected} given ${pf(parameters)}`, () => {
        expect(testSubject(...parameters)).to.equal(expected)
      })
    })
  })

  describe('@throws', () => {
    it('should throw Error if operation is invalid', () => {
      // Arrange
      const operation: string = '**'
      let error: Error

      // Act
      try {
        testSubject(operation, 0, 1)
      } catch (e: unknown) {
        error = e as typeof error
      }

      // Expect
      expect(error!.message).to.equal(`Invalid operator: ${pf(operation)}`)
    })
  })
})
