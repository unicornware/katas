/**
 * @file Katas - reverseWords
 * @module katas/8kyu/reverseWords
 * @see https://codewars.com/kata/51c8991dee245d7ddf00000e
 */

/**
 * Reverses the words in `str`.
 *
 * @example
 *  reverseWords(string) // 'string'
 * @example
 *  const str = 'The greatest victory is that which requires no battle'
 *  reverseWords(str) // 'battle no requires which that is victory greatest The'
 *
 * @param {string} str - String to reverse
 * @return {string} Reversed string
 */
const reverseWords = (str: string): string => {
  /** @const {string} delimiter - Word delimiter */
  const delimiter: string = ' '

  // Reverse words in string and re-concatenate
  return str.split(delimiter).reverse().join(delimiter)
}

export default reverseWords
