/**
 * @file Katas - countSmileys
 * @module katas/6kyu/countSmileys
 * @see https://codewars.com/kata/583203e6eb35d7980400002a
 */

/**
 * Given an array, `arr`, the function returns the total number of smiley faces
 * in the array.
 *
 * @example
 *  countSmileys([':)', ';(', ';}', ':-D']) // 2
 * @example
 *  countSmileys([';D', ':-(', ':-)', ';~)']) // 3
 * @example
 *  countSmileys([';]', ':[', ';*', ':$', ';-D']) // 1
 *
 * @param {string[]} arr - Array of strings
 * @return {number} Number of smiley faces in `arr`
 */
const countSmileys = (arr: string[]): number => {
  return [...arr.join(' ').match(/((:|;)(-|~)?(\)|D))/g) ?? []].length
}

export default countSmileys
