/**
 * @file Katas - findShort
 * @module katas/findShort
 * @see https://codewars.com/kata/57cebe1dc6fdc20c57000ac9
 */

/**
 * Given a string, `s`, the function returns the length of the shortest word(s)
 * in the string.
 *
 * Given an array of integers, `args`, the function returns the smallest integer
 * in the array.
 *
 * @example
 *  findShort('typescript is the best language') // 2
 * @example
 *  findShort('bitcoin take over the world maybe who knows perhaps') // 3
 *
 * @param {string} s - String containing words
 * @return {number} Length of the shortest word(s) in `s`
 */
const findShort = (s: string): number => {
  /** @const {string[]} words - Words in {@link s} */
  const words: string[] = s.split(' ')

  /** @var {number} shortest - Length shortest  word(s) in {@link s} */
  let shortest: number = words[0]!.length

  // Find length of the shortest word(s)
  for (const curr of words) if (curr.length < shortest) shortest = curr.length

  return shortest
}

export default findShort
