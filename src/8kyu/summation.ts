/**
 * @file Katas - summation
 * @module katas/8kyu/summation
 * @see https://codewars.com/kata/55d24f55d7dd296eb9000030
 */

/**
 * Given a positive integer, `n`, the function returns the summation of every
 * number within the range `[1, n]`.
 *
 * @example
 *  summation(2) // 3
 * @example
 *  summation(8) // 36
 *
 * @param {number} n - Positive integer greater than `0`
 * @return {number} Summation of every number from 1 to `n`
 */
const summation = (n: number): number => n === 1 ? n : n + summation(n - 1)

export default summation
