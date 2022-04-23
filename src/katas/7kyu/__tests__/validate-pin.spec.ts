/**
 * @file Unit Tests - validatePin
 * @module katas/7kyu/tests/unit/validatePin
 */

import type { TestcaseFn } from '@tests/interfaces'
import TestSubject from '../validate-pin'

describe('unit:katas/7kyu/validatePin', () => {
  describe('.validatePin', () => {
    interface Case extends TestcaseFn<typeof TestSubject['validatePin']> {}

    const describes: { cases: Case[]; title: string }[] = [
      {
        cases: [
          { expected: false, parameters: ['.234'] },
          { expected: false, parameters: ['a234'] }
        ],
        title: 'should return false for pins with invalid characters'
      },
      {
        cases: [
          { expected: false, parameters: ['1'] },
          { expected: false, parameters: ['123'] },
          { expected: false, parameters: ['-1234'] },
          { expected: false, parameters: ['1.234'] },
          { expected: false, parameters: ['12345'] },
          { expected: false, parameters: ['1234567'] },
          { expected: false, parameters: ['00000000'] }
        ],
        title: 'should return false for pins with invalid lengths'
      },
      {
        cases: [
          { expected: true, parameters: ['0000'] },
          { expected: true, parameters: ['1111'] },
          { expected: true, parameters: ['1234'] },
          { expected: true, parameters: ['098765'] },
          { expected: true, parameters: ['090909'] },
          { expected: true, parameters: ['123456'] }
        ],
        title: 'should return true for valid pins'
      }
    ]

    describes.forEach(({ cases, title }) => {
      describe(title, () => {
        cases.forEach(({ expected, parameters }) => {
          it(`should return ${expected} given ${pf(parameters)}`, () => {
            expect(TestSubject.validatePin(...parameters)).to.equal(expected)
          })
        })
      })
    })
  })
})
