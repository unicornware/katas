/**
 * @file Katas - order
 * @module katas/order
 * @see https://codewars.com/kata/55c45be3b2079eccff00010f
 */

/**
 * Given a string, `words`, where each word contains a number (`1` - `9`), the
 * function returns a string with the words sorted in ascending order.
 *
 * @example order('is2 Thi1s T4est 3a') // 'Thi1s is2 3a T4est'
 * @example order('') // ''
 *
 * @param {string} words - Words to sort
 * @return {string} String containing sorted words
 */
const order = (words: string): string => {
  /** @const {string} delimiter - {@link words} separator */
  const delimiter: string = ' '

  // Get array of sorted words and concatenate
  return words
    .split(delimiter)
    .sort((w1, w2) => +/\d/.exec(w1)![0]! - +/\d/.exec(w2)![0]!)
    .join(delimiter)
}

export default order
