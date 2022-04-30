/**
 * @file Katas - expressionsMatter
 * @module katas/8kyu/expressionsMatter
 * @see https://codewars.com/kata/5ae62fcf252e66d44d00008e
 */

/**
 * Given three integers, `a`, `b`, and `c`, the function returns the **largest**
 * number obtained attempting every combination of the following:
 *
 * - `+`
 * - `*`
 * - `()`
 *
 * @example
 *  expressionsMatter(1, 2, 3) // 9
 *
 * @param {number} a - First integer
 * @param {number} b - Second integer
 * @param {number} c - Third integer
 * @return {number} Largest integer obtained
 */
const expressionsMatter = (a: number, b: number, c: number): number => {
  return Math.max(a * b * c, a + b + c, a + b * c, (a + b) * c, a * (b + c))
}

export default expressionsMatter
