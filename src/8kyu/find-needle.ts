/**
 * @file Katas - findNeedle
 * @module katas/8kyu/findNeedle
 * @see https://codewars.com/kata/56676e8fabd2d1ff3000000c
 */

/**
 * Finds the index of `'needle'` in `haystack`.
 *
 * @example
 *  findNeedle(['hay', 'needle', 'junk']) // 'found the needle at position 1'
 * @example
 *  findNeedle(['junk', 'hay', 'needle']) // 'found the needle at position 2'
 *
 * @param {unknown[]} haystack - Array to search for `'needle'` in
 * @return {string} Message indicating `'needle'` position
 */
const findNeedle = (haystack: unknown[]): string => {
  return `found the needle at position ${haystack.indexOf('needle')}`
}

export default findNeedle
