/**
 * @file Katas - distinct
 * @module katas/8kyu/distinct
 * @see https://codewars.com/kata/57a5b0dfcf1fa526bb000118
 */

/**
 * Given an array of numbers, `a`, the function returns a new array with all
 * duplicate values removed.
 *
 * @example
 *  distinct([1]) // [1]
 * @example
 *  distinct([1, 1, 2]) // [1, 2]
 *
 * @param {number[]} a - Number array
 * @return {number[]} Array with duplicates values in `a` removed
 */
const distinct = (a: number[]): number[] => [...new Set(a)]

export default distinct
