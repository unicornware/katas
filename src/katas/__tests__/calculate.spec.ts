/**
 * @file Unit Tests - calculate
 * @module katas/tests/unit/calculate
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject from '../calculate'

describe('unit:katas/calculate', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const describes: { cases: Case[]; title: string }[] = [
    {
      cases: [
        { expected: -2, parameters: ['-2'] },
        { expected: 1, parameters: ['1'] },
        { expected: 1.1, parameters: ['1.1'] },
        {
          expected: 3.156_696_237_618_729e-8,
          parameters: ['3.156696237618729e-8']
        }
      ],
      title: 'expression is one number'
    },
    {
      cases: [
        { expected: 2, parameters: ['1+1'] },
        { expected: 0, parameters: ['-1+1'] },
        { expected: -2, parameters: ['-1+-1'] },
        { expected: 1, parameters: ['2$2'] },
        { expected: -1, parameters: ['-2$2'] },
        { expected: 1, parameters: ['-2$-2'] },
        { expected: 4, parameters: ['2*2'] },
        { expected: -4, parameters: ['-2*2'] },
        { expected: 4, parameters: ['-2*-2'] },
        { expected: 0, parameters: ['1-1'] },
        { expected: -2, parameters: ['-1-1'] },
        { expected: 0, parameters: ['-1--1'] }
      ],
      title: 'expression with one operation'
    },
    {
      cases: [
        { expected: 3, parameters: ['1.1+1.9'] },
        { expected: 2.25, parameters: ['9$4'] },
        { expected: 4.5, parameters: ['1.5*3'] },
        { expected: -38.2, parameters: ['5-43.2'] }
      ],
      title: 'expression with decimal numbers'
    },
    {
      cases: [
        { expected: 20, parameters: ['5+5+5+5'] },
        { expected: 0.04, parameters: ['5$5$5$5'] },
        { expected: 625, parameters: ['5*5*5*5'] },
        { expected: -10, parameters: ['5-5-5-5'] }
      ],
      title: 'expression with many of the same operator'
    },
    {
      cases: [
        { expected: 1, parameters: ['1+1-1'] },
        { expected: 10, parameters: ['5*6$2+5-10'] },
        { expected: 81, parameters: ['1000$2.5$5+5-5+6$6'] },
        { expected: 9, parameters: ['1*1*1*1*1*1$1$1$1$1+1-1+9-1'] },
        {
          expected: 775_952_723.548_387,
          parameters: ['325744+3799-7353+9189$62*7476-9927-84-83+98654*7851+58']
        },
        {
          expected: -3_437_553_322_352_435_700,
          parameters: [
            '461*848392$54-5768-5858*111791+4167*867+53$77*7834-254-462-78895*492-119969*5616*658512*7748'
          ]
        },
        {
          expected: -2.319_337_234_399_302e23,
          parameters: [
            '94566-733847+44836-1561-429-487$4155-994521-149859$38*294147*242*444441*313651$73946*438267-9328*934289+6954'
          ]
        }
      ],
      title: 'expression with many terms and operators'
    },
    {
      cases: [
        { expected: '400: Bad request', parameters: ['p'] },
        { expected: '400: Bad request', parameters: ['9^9'] },
        { expected: '400: Bad request', parameters: ['5/10'] },
        { expected: '400: Bad request', parameters: ['5*6$2&5-10'] }
      ],
      title: 'expression with bad inputs'
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
