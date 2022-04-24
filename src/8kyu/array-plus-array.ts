/**
 * @file Katas - arrayPlusArray
 * @module katas/8kyu/arrayPlusArray
 * @see https://codewars.com/kata/5a2be17aee1aaefe2a000151
 */

/**
 * Given two integer arrays, `a1` and `a2`, the function returns the sum of the
 * integers in each array.
 *
 * @example
 *  arrayPlusArray([-1, -2, -3, -4], [10]) // 0
 * @example
 *  arrayPlusArray([1, 2, 3, 4, 5, 6, 7], [10, 20, 30, 40, 50]) // 178
 *
 * @param {number[]} a1 - First integer array
 * @param {number[]} a2 - Second integer array
 * @return {number} Sum of integers in `arr1` and `arr2`
 */
const arrayPlusArray = (a1: number[], a2: number[]): number => {
  return a1.reduce((acc, n) => acc + n, 0) + a2.reduce((acc, n) => acc + n, 0)
}

export default arrayPlusArray
