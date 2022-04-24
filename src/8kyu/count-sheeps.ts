/**
 * @file Katas - countSheeps
 * @module katas/8kyu/countSheeps
 * @see https://codewars.com/kata/54edbc7200b811e956000556
 */

/**
 * Given an array where some "sheep" may be missing from their place, `arr`, the
 * function returns the total number of "sheep" present in the array.
 *
 * @example
 *  countSheeps([true, false, null, undefined, true, true]) // 3
 *
 * @param {(boolean | null | undefined)[]} arr - Sheep array
 * @return {number} Total number of sheep in `arr`
 */
const countSheeps = (arr: (boolean | null | undefined)[]): number => {
  return arr.reduce((acc, curr) => acc + (curr ? 1 : 0), 0)
}

export default countSheeps
