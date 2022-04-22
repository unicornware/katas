/**
 * @file Katas - reversedStrings
 * @module katas/reversedStrings
 * @see https://codewars.com/kata/5168bb5dfe9a00b126000018
 */

/**
 * Given a string, `str`, the function returns the string in reverse.
 *
 * @example
 *  solution('hello') // 'olleh'
 * @example
 *  solution('world') // 'dlrow'
 *
 * @param {string} str - String to reverse
 * @return {string} Reversed string
 */
const solution = (str: string): string => [...str.trim()].reverse().join('')

export default solution
