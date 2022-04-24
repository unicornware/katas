/**
 * @file Katas - getCount
 * @module katas/7kyu/getCount
 * @see https://codewars.com/kata/54ff3102c1bad923760001f3
 */

/**
 * Vowel counter.
 */
class Kata {
  /**
   * Given a string, `str`, the function returns the total number of vowels in
   * the string.
   *
   * **Note**: This function does **not** consider `y` a vowel.
   *
   * @example
   *  Kata.getCount('abracadabra') // 5
   * @example
   *  Kata.getCount('the quick brown fox jumps over the lazy dog') // 11
   *
   * @public
   * @static
   *
   * @param {string} s - String to check
   * @return {number} Total numbers of vowels in `str`
   */
  static getCount = (s: string): number => [...s.matchAll(/[aeiou]/g)].length
}

export default Kata
