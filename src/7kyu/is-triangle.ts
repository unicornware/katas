/**
 * @file Katas - isTriangle
 * @module katas/7kyu/isTriangle
 * @see https://codewars.com/kata/56606694ec01347ce800001b
 */

/**
 * Given three integer values, `a`, `b`, and `c`, the function checks if a
 * triangle can be built using the provided values.
 *
 * @example
 *  isTriangle(1, 2, 2) // true
 * @example
 *  isTriangle(7, 2, 2) // false
 *
 * @param {number} a - Length of first possible side
 * @param {number} b - Length of second possible side
 * @param {number} c - Length of third possible side
 * @return {boolean} `true` if triangle can be built, `false` otherwise
 */
const isTriangle = (a: number, b: number, c: number): boolean => {
  return a + c > b && b + c > a && a + b > c
}

export default isTriangle
