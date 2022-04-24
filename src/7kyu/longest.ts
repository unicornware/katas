/**
 * @file Katas - longest
 * @module katas/7kyu/longest
 * @see https://codewars.com/kata/5656b6906de340bd1b0000ac
 */

/**
 * Merges two strings into one.
 */
class G964 {
  /**
   * Given two strings, `s1` and `s2`, the function returns a new **sorted**
   * string, the **longest** possible, containing only distinct letters.
   *
   * @example
   *  G964.longest('aretheyhere', 'yestheyarehere') // 'aehrsty'
   * @example
   *  G964.longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq') // 'abcdefklmopqwxy'
   *
   * @public
   * @static
   *
   * @param {string} s1 - First string to merge
   * @param {string} s2 - Second string to merge
   * @return {string} Merged string
   */
  static longest(s1: string, s2: string): string {
    return [...new Set<string>([...s1, ...s2])].sort((a, b) => {
      return a.localeCompare(b)
    }).join('')
  }
}

export default G964
