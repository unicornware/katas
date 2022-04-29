/**
 * @file Katas - cockroachSpeed
 * @module katas/8kyu/cockroachSpeed
 * @see https://codewars.com/kata/55fab1ffda3e2e44f00000c6
 */

/**
 * The cockroach is one of the fastest insects.
 *
 * Given the speed of a cockroach in km per hour, `s`, the function returns the
 * speed in cm per second, rounded down to the integer.
 *
 * @example
 *  cockroachSpeed(0) // 0
 * @example
 *  cockroachSpeed(1.08) // 30
 * @example
 *  cockroachSpeed(1.52) // 42
 *
 * @param {number} s - Cockroach speed in km per hour
 * @return {number} Cockroach speed in cm per second
 */
const cockroachSpeed = (s: number): number => s * 27.777_778 | 0

export default cockroachSpeed
