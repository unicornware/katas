/**
 * @file Katas - isUppercase
 * @module katas/8kyu/isUppercase
 * @see https://codewars.com/kata/56cd44e1aa4ac7879200010b
 */

/**
 * Given a string, `str`, the function checks if the string is in **ALL CAPS**.
 *
 * **Note**: A string is considered to be in all caps if it does not contain any
 * lowercase letters. An empty string is considered to be in all caps.
 *
 * @example
 *  isUppercase('') // true
 * @example
 *  isUppercase('C') // true
 * @example
 *  isUppercase('c') // false
 * @example
 *  isUppercase('HELLO I AM DONALD') // true
 * @example
 *  isUppercase('hello I AM DONALD') // false
 * @example
 *  isUppercase('ACSKLDFJSGSKLDFJSKLDFJ') // true
 * @example
 *  isUppercase('ACSKLDFJSgSKLDFJSKLDFJ') // false
 *
 * @param {string} str - String to check
 * @return {boolean} true if `str` is in all caps
 */
const isUppercase = (str: string): boolean => !/[a-z]/.test(str)

export default isUppercase
