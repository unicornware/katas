/**
 * @file Katas - getMiddle
 * @module katas/7kyu/getMiddle
 * @see https://codewars.com/kata/56747fd5cb988479af000028
 */

/**
 * Finds the middle character(s) in a given string.
 */
class Challenge {
  /**
   * Given a string, `s`, the function returns the middle character(s) in `s`.
   *
   * @example
   *  Challenge.getMiddle('A') // 'A'
   * @example
   *  Challenge.getMiddle('test') // 'es'
   * @example
   *  Challenge.getMiddle('middle') // 'dd'
   * @example
   *  Challenge.getMiddle('testing') // 't'
   *
   * @public
   * @static
   *
   * @param {string} s - String to get middle characters from
   * @return {string} Middle characters in `s`
   */
  static getMiddle(s: string): string {
    /** @const {number} m - Index of midpoint in {@link s} */
    const m: number = s.length / 2 | 0

    // If length of s is odd, access middle character by index
    // If length of s is even, use slice to get middle characters
    return s.length % 2 !== 0 ? s[m]! : s.slice(m - 1, m + 1)
  }
}

export default Challenge
