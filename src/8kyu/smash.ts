/**
 * @file Katas - smash
 * @module katas/8kyu/smash
 * @see https://codewars.com/kata/53dc23c68a0c93699800041d
 */

/**
 * Converts an array of words into a sentence.
 *
 * @example
 *  smash(['hello', 'world']) // 'hello world'
 *
 * @param {string[]} words - Words to convert
 * @return {string} `words` as sentence
 */
const smash = (words: string[]): string => words.join(' ')

export default smash
