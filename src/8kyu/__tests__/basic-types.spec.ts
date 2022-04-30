/**
 * @file Unit Tests - basicTypes
 * @module katas/8kyu/tests/unit/basicTypes
 */

import * as TestSubject from '../basic-types'

describe('unit:katas/8kyu/basicTypes', () => {
  type Var =
    | 'var1Boolean'
    | 'var2Decimal'
    | 'var3Hex'
    | 'var4Binary'
    | 'var5Octal'
    | 'var6String'
    | 'var7Array'
    | 'var8NumericArray'
    | 'var9Tuple'
    | 'var10Enum'
    | 'var11ArrayOfAny'
    | 'var12VoidFunction'
    | 'var13Null'
    | 'var14Undefined'
    | 'var15NeverFunction'

  const describes: { cases: { expected: any }[]; title: Var }[] = [
    { cases: [{ expected: true }], title: 'var1Boolean' },
    { cases: [{ expected: 13 }], title: 'var2Decimal' },
    { cases: [{ expected: 0xF0_0D }], title: 'var3Hex' },
    { cases: [{ expected: 0b11_1111 }], title: 'var4Binary' },
    { cases: [{ expected: 0o744 }], title: 'var5Octal' },
    { cases: [{ expected: 'Hello, world!' }], title: 'var6String' },
    { cases: [{ expected: [1, 'test', { a: 3 }, 4, 5] }], title: 'var7Array' },
    { cases: [{ expected: [1, 2, 3, 4, 5] }], title: 'var8NumericArray' },
    { cases: [{ expected: ['key', 12_345] }], title: 'var9Tuple' },
    { cases: [{ expected: TestSubject.Color.Blue }], title: 'var10Enum' },
    {
      cases: [{ expected: [1, 'test', { a: 3 }, 4, 5] }],
      title: 'var11ArrayOfAny'
    },
    { cases: [{ expected: undefined }], title: 'var12VoidFunction' },
    { cases: [{ expected: null }], title: 'var13Null' },
    { cases: [{ expected: undefined }], title: 'var14Undefined' },
    { cases: [{ expected: undefined }], title: 'var15NeverFunction' }
  ]

  describes.forEach(({ cases, title }) => {
    describe(title, () => {
      cases.forEach(({ expected }) => {
        it(`should return ${pf(expected)}`, () => {
          // Arrange
          const s = TestSubject[title]
          let result: any

          // Act
          try {
            result = typeof s === 'function' ? void s() : s
          } catch { /** purposely empty */ }

          // Expect
          expect(result).to.deep.equal(expected)
        })
      })
    })
  })
})
