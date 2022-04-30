/**
 * @file Katas - shortLongShort
 * @module katas/8kyu/shortLongShort
 * @see https://codewars.com/kata/50654ddff44f800200000007
 */

/**
 * Given two strings, `a` and `b`, let `short` represent the shorter of the two
 * strings, and `long` the longer of two strings.
 *
 * The function concatenates the strings and returns the new string in the
 * format `short + long + short`.
 *
 * @example
 *  shortLongShort('1', '22') // '1221'
 * @example
 *  shortLongShort('Soon', 'Me') // 'MeSoonMe'
 *
 * @param {string} a - First string
 * @param {string} b - Second string
 * @return {string} New string in the format `short + long + short`
 */
const shortLongShort = (a: string, b: string): string => {
  /** @const {string} short - Shorter string of {@link a} and {@link b} */
  const short: string = a.length < b.length ? a : b

  // Return concatenated strings in new format
  return short + (short === a ? b : a) + short
}

export default shortLongShort
