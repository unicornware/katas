/**
 * @file Katas - check
 * @module katas/8kyu/check
 * @see https://codewars.com/kata/57cc975ed542d3148f00015b
 */

import { NumberString } from '@flex-development/tutils'

/**
 * Given an array, `a`, and a value, `x`, the function checks if `a` includes
 * the provided value.
 *
 * @example
 *  check([80, 117, 115, 104, 45, 85, 112, 115], 45) // true
 * @example
 *  check(['what', 'a', 'great', 'kata'], 'kat') // false
 *
 * @param {NumberString[]} a - Array to search
 * @param {NumberString} x - Value to check for
 * @return {boolean} `true` if `a` includes `x`, `false` otherwise
 */
const check = (a: NumberString[], x: NumberString): boolean => a.includes(x)

export default check
