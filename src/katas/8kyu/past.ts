/**
 * @file Katas - past
 * @module katas/8kyu/past
 * @see https://codewars.com/kata/55f9bca8ecaa9eac7100004a
 */

/**
 * Clocks show `h` hours, `m` minutes, and `s` seconds after midnight.
 *
 * Given the hours, minutes, and seconds after midnight, the function returns
 * the time since midnight **in milliseconds**.
 *
 * @example
 *  past(0, 0, 0) // 0
 * @example
 *  past(0, 1, 1) // 61000
 * @example
 *  past(1, 1, 1) // 3661000
 *
 * @param {number} h - Hours after midnight
 * @param {number} m - Minutes after midnight
 * @param {number} s - Seconds after midnight
 * @return {number} Time since midnight **in milliseconds**
 */
const past = (h: number, m: number, s: number): number => {
  return h * 3_600_000 + m * 60_000 + s * 1000
}

export default past
