/**
 * @file Katas - doubleChar
 * @module katas/8kyu/doubleChar
 * @see https://codewars.com/kata/56b1f01c247c01db92000076
 */

/**
 * Given a string, `str`, the function returns a string where each character in
 * `str` is repeated twice.
 *
 * @example
 *  doubleChar('String') // 'SSttrriinngg'
 * @example
 *  doubleChar('1234!_ ') // '11223344!!__  '
 * @example
 *  doubleChar('Hello World') // 'HHeelllloo  WWoorrlldd'
 *
 * @param {string} str - Original string
 * @return {string} String with each character in `str` repeated once
 */
const doubleChar = (str: string): string => {
  /** @var {string} s -  String with each char in {@link str} repeated once */
  let s: string = ''

  // Get characters
  for (const char of str) s += char.repeat(2)

  return s
}

export default doubleChar
