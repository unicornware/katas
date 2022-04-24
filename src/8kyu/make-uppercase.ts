/**
 * @file Katas - makeUppercase
 * @module katas/8kyu/makeUppercase
 * @see https://codewars.com/kata/57a0556c7cb1f31ab3000ad7
 */

/**
 * Converts `str` to uppercase.
 *
 * @example
 *  makeUppercase('hello world') // 'HELLO WORLD'
 *
 * @param {string} str - String to convert
 * @return {Uppercase<string>} `str` in uppercase
 */
const makeUppercase = (str: string): Uppercase<string> => str.toUpperCase()

export default makeUppercase
