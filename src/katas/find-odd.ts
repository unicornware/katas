/**
 * @file Katas - findOdd
 * @module katas/findOdd
 * @see https://codewars.com/kata/54da5a58ea159efa38000836
 */

/**
 * Given an array of integers, `xs`, the function returns the integer that is
 * found an odd number of times.
 *
 * @example
 *  findOdd([0]) // 0
 * @example
 *  findOdd([1, 1, 2]) // 2
 * @example
 *  findOdd([0, 1, 0, 1, 0]) // 0
 * @example
 *  findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]) // 4
 *
 * @param {number[]} xs - Integer array
 * @return {number} Integer that occurs an odd number of times in `xs`
 */
const findOdd = (xs: number[]): number => xs.reduce((a, b) => a ^ b)

export default findOdd
