/**
 * @file Katas - nthPower
 * @module katas/8kyu/nthPower
 * @see https://codewars.com/kata/57d814e4950d8489720008db
 */

/**
 * Given an array of positive numbers, `array`, and non-negative integer, `n`,
 * the function returns the `n`th power of `n`th element in the array.
 *
 * @example
 *  nthPower([1, 2, 3], 3) // -1
 * @example
 *  nthPower([1, 2, 3, 4], 2) // 9
 *
 * @param {number[]} array - Number array
 * @param {number} n - Index of element / power to raise `array[n]` to
 * @return {number} `n`th power of `n`th element in `array`
 */
const nthPower = (array: number[], n: number): number => array[n]! ** n || -1

export default nthPower
