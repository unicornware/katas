/**
 * @file Katas - getSum
 * @module katas/getSum
 * @see https://codewars.com/kata/55f2b110f61eb01779000053
 */

/**
 * Given two integers, `a` and `b`, the function returns the sum of all the
 * integers between and including `a` and `b`.
 *
 * @example getSum(1, 0) // 1
 * @example getSum(2, -1) // 2
 * @example getSum(3, 3) // 3
 *
 * @param {number} a - First bound (inclusive)
 * @param {number} b - Second bound (inclusive)
 * @return {number} Sum of integers within the range `[a, b]`
 */
const getSum = (a: number, b: number): number => {
  // If bounds are equal, return either bound
  if (a === b) return a

  /** @var {number} sum - Sum of integers in range `[a, b]` */
  let sum: number = 0

  // Calculate sum
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) sum += i

  return sum
}

export default getSum
