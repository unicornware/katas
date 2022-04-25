/**
 * @file Katas - firstNonConsecutive
 * @module katas/8kyu/firstNonConsecutive
 * @see https://codewars.com/kata/58f8a3a27a5c28d92e000144
 */

import { OrNull } from '@flex-development/tutils'

/**
 * Given an array of integers, `arr`, the function returns the first element in
 * the array that is not consecutive.
 *
 * @example
 *  firstNonConsecutive([]) // null
 * @example
 *  firstNonConsecutive([1]) // null
 * @example
 *  firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]) // 6
 *
 * @param {number[]} array - Integer array
 * @return {OrNull<number>} First non-consecutive integer or `null`
 */
const firstNonConsecutive = (array: number[]): OrNull<number> => {
  return array.find((curr, index, obj) => {
    /** @const {number | undefined} prev - Integer before {@link curr} */
    const prev: number | undefined = obj[index - 1]

    // Check if difference between integers is 1
    return prev === undefined ? false : curr - prev !== 1
  }) ?? null
}

export default firstNonConsecutive
