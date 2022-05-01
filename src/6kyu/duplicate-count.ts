/**
 * @file Katas - duplicateCount
 * @module katas/6kyu/duplicateCount
 * @see https://codewars.com/kata/54bf1c2cd5b56cc47f0007a1
 */

/**
 * Given a string, `text`, the function returns the total number of **distinct
 * case-insensitive** alphabetic characters and numeric digits that occur more
 * than once in the input string.
 *
 * @example
 *  duplicateCount('') // 0
 * @example
 *  duplicateCount('aA11') // 2
 * @example
 *  duplicateCount('ABBA') // 2
 * @example
 *  duplicateCount('abcde') // 0
 * @example
 *  duplicateCount('aabbcde') // 2
 * @example
 *  duplicateCount('aabBcde') // 2
 * @example
 *  duplicateCount('Indivisibility') // 1
 * @example
 *  duplicateCount('Indivisibilities') // 2
 *
 * @param {string} text - String to check
 * @return {number} Number of distinct case-insensitive characters and digits
 */
const duplicateCount = (text: string): number => {
  return [...new Set(text.toLowerCase().match(/(\w)(?=.*?\1)/gi) ?? [])].length
}

export default duplicateCount
