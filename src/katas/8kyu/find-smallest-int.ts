/**
 * @file Katas - findSmallestInt
 * @module katas/8kyu/findSmallestInt
 * @see https://codewars.com/kata/55a2d7ebe362935a210000b2
 */

/**
 * Given an array of integers, `args`, the function returns the smallest integer
 * in the array.
 *
 * @example
 *  findSmallestInt([34, 15, 88, 2]) // 2
 * @example
 *  findSmallestInt([34, -345, -1, 100]) // -345
 *
 * @param {number[]} args - Integer array
 * @return {number} Smallest integer in `args`
 */
const findSmallestInt = (args: number[]): number => Math.min(...args)

export default findSmallestInt
