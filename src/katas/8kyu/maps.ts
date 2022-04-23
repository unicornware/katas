/**
 * @file Katas - maps
 * @module katas/8kyu/maps
 * @see https://codewars.com/kata/57f781872e3d8ca2a000007e
 */

/**
 * Given an array of integers, `x`, the function returns a new array with each
 * integer in `x` doubled.
 *
 * @example
 *  maps([1, 2, 3]) // [2, 4, 6]
 * @example
 *  maps([4, 1, 1, 1, 4]) // [8, 2, 2, 2, 8]
 * @example
 *  maps([2, 2, 2, 2, 2, 2]) // [4, 4, 4, 4, 4, 4]
 *
 * @param {number[]} x - Integer array
 * @return {number[]} New array with each integer in `x` doubled
 */
const maps = (x: number[]): number[] => x.map(n => n * 2)

export default maps
