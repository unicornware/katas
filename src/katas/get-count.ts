/**
 * @file Katas - getCount
 * @module katas/getCount
 * @see https://codewars.com/kata/54ff3102c1bad923760001f3
 */

/**
 * Given a string, `str`, the function returns the total number of vowels in the
 * string.
 *
 * **Note**: This function does **not** consider `y` a vowel.
 *
 * @example getCount('abracadabra') // 5
 * @example getCount('the quick brown fox jumps over the lazy dog') // 11
 *
 * @param {string} str - String to check
 * @return {number} Total numbers of vowels in `str`
 */
const getCount = (str: string): number => [...str.matchAll(/[aeiou]/g)].length

export default getCount
