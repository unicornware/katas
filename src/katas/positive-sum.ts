/**
 * @file Katas - positiveSum
 * @module katas/positiveSum
 */

/**
 * Given an array of integers, `arr`, the function returns the sum of all
 * **positive** integers.
 *
 * @see https://codewars.com/kata/5715eaedb436cf5606000381
 *
 * @example positiveSum([]) => 0
 * @example positiveSum([1, -4, 7, 12]) => 20
 * @example positiveSum([-1, -2, -3, -4, -5]) => 0
 *
 * @param {number[]} arr - Integer array
 * @return {number} Sum of all positive integers
 */
const positiveSum = (arr: number[]): number => {
  return arr.reduce((accum, num) => accum + (num >= 0 ? num : 0), 0)
}

export default positiveSum
