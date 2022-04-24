/**
 * @file Katas - maxMin
 * @module katas/8kyu/maxMin
 * @see https://codewars.com/kata/577a98a6ae28071780000989
 */

/**
 * Given a list of integers, `list`, the function returns the largest value in
 * the list.
 *
 * @example
 *  max([5]) // 5
 * @example
 *  max([4, 6, 2, 1, 9, 63, -134, 566]) // 566
 *
 * @param {number[]} list - Integer array
 * @return {number} Largest value in `list`
 */
const max = (list: number[]): number => Math.max(...list)

/**
 * Given a list of integers, `list`, the function returns the smallest value
 * in the list.
 *
 * @example
 *  min([5]) // 5
 * @example
 *  min([-52, 56, 30, 29, -54, 0, -110]) // -110
 *
 * @param {number[]} list - Integer array
 * @return {number} Smallest value in `list`
 */
const min = (list: number[]): number => Math.min(...list)

export { max, min }
