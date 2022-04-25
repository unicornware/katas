/**
 * @file Katas - sumMix
 * @module katas/8kyu/sumMix
 * @see https://codewars.com/kata/57eaeb9578748ff92a000009
 */

import { NumberString } from '@flex-development/tutils'

/**
 * Given an array of integers as strings and numbers, `x`, the function returns
 * the sum of all integers as if all elements in `x` were numbers.
 *
 * @example
 *  sumMix([9, 3, '7', '3']) // 22
 * @example
 *  sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) // 42
 * @example
 *  sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']) // 41
 *
 * @param {NumberString[]} x - Array of integers as strings and numbers
 * @return {number} Sum of integers as if all elements in `x` were numbers
 */
const sumMix = (x: NumberString[]): number => {
  return x.reduce<number>((acc, curr: typeof x[0]) => acc + +curr, 0)
}

export default sumMix
