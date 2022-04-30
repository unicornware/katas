/**
 * @file Katas - arr2bin
 * @module katas/8kyu/arr2bin
 * @see https://codewars.com/kata/57642a90dee2da8dd3000161
 */

/**
 * Given an array of random elements, `arr`, the function adds all numbers in
 * the array and returns the sum as a binary number.
 *
 * @example
 *  arr2bin() // '0'
 * @example
 *  arr2bin([1, 2]) // '11'
 * @example
 *  arr2bin([true, true, false, 15]) // '1111'
 *
 * @param {unknown[]} [arr=[]] - Random elements
 * @return {string} Sum of numbers in `arr` as binary number
 */
const arr2bin = (arr: unknown[] = []): string => {
  return arr.reduce<number>((acc, curr) => {
    return acc + (typeof curr === 'number' ? curr : 0)
  }, 0).toString(2)
}

export default arr2bin
