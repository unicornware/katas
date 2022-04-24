/**
 * @file Katas - reverseSeq
 * @module katas/8kyu/reverseSeq
 * @see https://codewars.com/kata/5a00e05cc374cb34d100000d
 */

/**
 * Given an integer greater than `0`, `n`, the function returns an array of
 * integers from `n` to `1`.
 *
 * @example
 *  reverseSeq(1) // [1]
 * @example
 *  reverseSeq(5) // [5, 4, 3, 2, 1]
 *
 * @param {number} n - Integer greater than `0`
 * @return {number[]} Array of integers from `n` to `1`
 */
const reverseSeq = (n: number): number[] => {
  /** @const {number[]} integers - Integers from {@link n} to `1` */
  const integers: number[] = []

  // Build sequence
  for (let int = n; int >= 1; int--) integers.push(int)

  return integers
}

export default reverseSeq
