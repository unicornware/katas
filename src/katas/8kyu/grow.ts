/**
 * @file Katas - grow
 * @module katas/8kyu/grow
 * @see https://codewars.com/kata/57f780909f7e8e3183000078
 */

/**
 * Given a non-empty array of integers, `arr`, the function returns the product
 * of all integers in the array.
 *
 * @example
 *  grow([1, 2, 3, 4]) // 24
 *
 * @param {number[]} arr - Non-empty integer array
 * @return {number[]} Product of all integers in `arr`
 */
const grow = (arr: number[]): number => arr.reduce((acc, n) => acc * n, 1)

export default grow
