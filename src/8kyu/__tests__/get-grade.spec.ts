/**
 * @file Unit Tests - getGrade
 * @module katas/8kyu/tests/unit/getGrade
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject, { LetterGrade } from '../get-grade'

describe('unit:katas/8kyu/getGrade', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const describes: { cases: Case[]; title: LetterGrade }[] = [
    {
      cases: [
        { expected: LetterGrade.A, parameters: [92, 93, 94] },
        { expected: LetterGrade.A, parameters: [95, 90, 93] },
        { expected: LetterGrade.A, parameters: [100, 85, 96] },
        { expected: LetterGrade.A, parameters: [100, 100, 100] }
      ],
      title: LetterGrade.A
    },
    {
      cases: [
        { expected: LetterGrade.B, parameters: [82, 85, 87] },
        { expected: LetterGrade.B, parameters: [84, 79, 85] },
        { expected: LetterGrade.B, parameters: [70, 70, 100] }
      ],
      title: LetterGrade.B
    },
    {
      cases: [
        { expected: LetterGrade.C, parameters: [60, 82, 76] },
        { expected: LetterGrade.C, parameters: [70, 70, 70] },
        { expected: LetterGrade.C, parameters: [75, 70, 79] }
      ],
      title: LetterGrade.C
    },
    {
      cases: [
        { expected: LetterGrade.D, parameters: [58, 62, 70] },
        { expected: LetterGrade.D, parameters: [65, 70, 59] },
        { expected: LetterGrade.D, parameters: [66, 62, 68] }
      ],
      title: LetterGrade.D
    },
    {
      cases: [
        { expected: LetterGrade.F, parameters: [0, 0, 0] },
        { expected: LetterGrade.F, parameters: [44, 55, 52] },
        { expected: LetterGrade.F, parameters: [48, 55, 52] },
        { expected: LetterGrade.F, parameters: [58, 59, 60] }
      ],
      title: LetterGrade.F
    }
  ]

  describes.forEach(({ cases, title }) => {
    describe(title, () => {
      cases.forEach(({ expected, parameters }) => {
        it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
          expect(testSubject(...parameters)).to.equal(expected)
        })
      })
    })
  })
})
