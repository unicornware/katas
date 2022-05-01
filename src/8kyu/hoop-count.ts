/**
 * @file Katas - hoopCount
 * @module katas/8kyu/hoopCount
 * @see https://codewars.com/kata/55cb632c1a5d7b3ad0000145
 */

/** Encouraging messages for Alex. */
type Message = 'Great, now move on to tricks' | 'Keep at it until you get it'

/**
 * Alex just got a new hula hoop. They love it, but feel discouraged because
 * their sibling is better than them.
 *
 * Given the number of times the hoop has gone round, the function returns an
 * encouraging message you can give to Alex.
 *
 * @example
 *  hoopCount(3) // 'Keep at it until you get it'
 * @example
 *  hoopCount(13) // 'Great, now move on to tricks'
 *
 * @param {number} n - Number of times hoop has gone round
 * @return {Message} Encouraging message for Alex
 */
const hoopCount = (n: number): Message => {
  return n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks'
}

export default hoopCount
