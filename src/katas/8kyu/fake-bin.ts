/**
 * @file Katas - fakeBin
 * @module katas/8kyu/fakeBin
 * @see https://codewars.com/kata/57eae65a4321032ce000002d
 */

import { Numeric } from '@flex-development/tutils'

/**
 * Given a string of digits, the function replaces any digit below `5` with `0`
 * and any digit greater than or equal to `5` and above with `1`.
 *
 * @example
 *  fakeBin('509321967506747') // '101000111101101'
 * @example
 *  fakeBin('366058562030849490134388085') // '011011110000101010000011011'
 *
 * @param {Numeric} x - String of digits
 * @return {Numeric} `x` as binary number
 */
const fakeBin = (x: Numeric): Numeric => {
  return x.replace(/[1-4]/g, '0').replace(/[5-9]/g, '1') as Numeric
}

export default fakeBin
