/**
 * @file Katas - stringToNumber
 * @module katas/8kyu/stringToNumber
 * @see https://codewars.com/kata/544675c6f971f7399a000e79
 */

import { Numeric } from '@flex-development/tutils'

/**
 * Given a numeric, `numeric`, the function returns the numeric into a number.
 *
 * @example
 *  stringToNumber('-7') // -7
 * @example
 *  stringToNumber('605') // 605
 * @example
 *  stringToNumber('1234') // 1234
 * @example
 *  stringToNumber('1405') // 1405
 *
 * @param {Numeric} numeric - Numeric to parse
 * @return {number} `numeric` as number
 */
const stringToNumber = (numeric: Numeric): number => +numeric

export default stringToNumber
