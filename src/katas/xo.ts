/**
 * @file Katas - xo
 * @module katas/xo
 * @see https://codewars.com/kata/55908aad6620c066bc00002a
 */

/**
 * Given a string, `s`, the function checks if the string has the same number
 * of `'x'`s and `'o'`s.
 *
 * @example
 *  xo('ooxx') // true
 * @example
 *  xo('ooxXm') // true
 * @example
 *  xo('zzoo') // false
 * @example
 *  xo('xooxx') // false
 * @example
 *  xo('zpzpzpp') // true
 *
 * @param {string} str - String to check
 * @return {boolean} `true` if same # of `'x'`s and `'o'`s, `false` otherwise
 */
const xo = (str: string): boolean => {
  return str.match(/o/gi)?.length === str.match(/x/gi)?.length
}

export default xo
