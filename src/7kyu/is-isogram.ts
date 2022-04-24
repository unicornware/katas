/**
 * @file Katas - isIsogram
 * @module katas/7kyu/isIsogram
 * @see https://codewars.com/kata/54ba84be607a92aa900000f1
 */

/**
 * Checks if `s` is an isogram, a word that has no repeating letters.
 *
 * **Note**: Letter case is ignored.
 *
 * @example
 *  isIsogram('') // true
 * @example
 *  isIsogram('aba') // false
 * @example
 *  isIsogram('moOse') // false
 * @example
 *  isIsogram('isogram') // true
 * @example
 *  isIsogram('isIsogram') // false
 * @example
 *  isIsogram('Dermatoglyphics') // true
 *
 * @param {string} str - Word to check
 * @return {boolean} `true` if `s` is an isogram, `false` otherwise
 */
const isIsogram = (str: string): boolean => /^(?:(\w)(?!.*\1))*$/i.test(str)

export default isIsogram
