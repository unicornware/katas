/**
 * @file Katas - moveZeros
 * @module katas/moveZeros
 * @see https://codewars.com/kata/52597aa56021e91c93000cb0
 */

/**
 * Given an array, `arr`, the function moves all zeros to the end of the array.
 *
 * @example
 *  moveZeros([false, 0, 3, 'a']) // [false, 3, 0, 0]
 *
 * @param {unknown[]} arr - Array
 * @return {unknown[]} `arr` with zeros shifted to the end of the array
 */
const moveZeros = (arr: unknown[]): unknown[] => {
  return [...arr.filter(el => el !== 0), ...arr.filter(el => el === 0)]
}

export default moveZeros
