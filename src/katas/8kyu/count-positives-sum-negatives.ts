/**
 * @file Katas - countPositivesSumNegatives
 * @module katas/8kyu/countPositivesSumNegatives
 * @see https://codewars.com/kata/576bb71bbbcf0951d5000044
 */

import { OrNull } from '@flex-development/tutils'

/**
 * Total number of positive integers and sum of negative integers in an array.
 */
type CountSum = [] | [number, number]

/**
 * Given an array of integers, `input`, the function returns an array where the
 * first element is the total number of positive integers in the array and the
 * second element is the sum of all negative integers in the array.
 *
 * **Note**: `0` is neither positive nor negative.
 *
 * @example
 *  countPositivesSumNegatives() // []
 * @example
 *  countPositivesSumNegatives([]) // []
 * @example
 *  countPositivesSumNegatives(null) // []
 * @example
 *  countPositivesSumNegatives([1, 2, 3, -11, -12, -13, -14, -15]) // [3, -65]
 *
 * @param {OrNull<number[]>} [input] - Integer array
 * @return {CountSum} Total number of positives and sum of negatives in `input`
 */
const countPositivesSumNegatives = (
  input?: OrNull<number[]>
): CountSum => {
  return input?.reduce((acc, curr) => [
    acc[0]! + (curr > 0 ? 1 : 0),
    acc[1]! + (curr < 0 ? curr : 0)
  ], input.length === 0 ? [] : [0, 0]) ?? []
}

export default countPositivesSumNegatives
