/**
 * @file Katas - squareSum
 * @module katas/squareSum
 */

/**
 * Given an array of numbers, `arr`, the functions squares each number in `arr`
 * and returns the sum.
 *
 * @see https://codewars.com/kata/515e271a311df0350d00000f
 *
 * @example squareSum([1, 2, 2]) // 9
 * @example squareSum([]) // 0
 *
 * @param {number[]} arr - Integer array
 * @return {number} Sum of squares in `arr`
 */
const squareSum = (arr: number[]): number => arr.reduce((a, n) => a + n ** 2, 0)

export default squareSum
