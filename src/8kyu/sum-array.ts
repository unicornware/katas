/**
 * @file Katas - sumArray
 * @module katas/8kyu/sumArray
 * @see https://codewars.com/kata/576b93db1129fcf2200001e6
 */

import { OrNull } from '@flex-development/tutils'

/**
 * Given an array of integers, `array`, the function adds all integers in the
 * array **except** the largest and smallest integers.
 *
 * **Note**: The highest or lowest element is a **single** element at each edge,
 * even if there is more than one element with the same value.
 *
 * @example
 *  sumArray([1, 1, 11, 2, 3]) // 6
 * @example
 *  sumArray([6, 2, 1, 8, 10]) // 16
 *
 * @param {OrNull<number[]>} array - Array of integers
 * @return {number} Sum of integers **except** the largest and smallest integers
 */
const sumArray = (array: OrNull<number[]>): number => {
  // If no array, array is empty, or array has one element, return 0
  if (!array || array.length <= 1) return 0

  // Sort array in ascending order before removing largest and smallest integers
  // Then calculate and return sum of integers
  return array.sort((a, b) => a - b).slice(1, -1).reduce((acc, n) => acc + n, 0)
}

export default sumArray
