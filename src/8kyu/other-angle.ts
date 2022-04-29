/**
 * @file Katas - otherAngle
 * @module katas/8kyu/otherAngle
 * @see https://codewars.com/kata/5a023c426975981341000014
 */

/**
 * Given two interior angles of a triangle, `a` and `b`, the function returns
 * the third angle.
 *
 * @example
 *  otherAngle(30, 60) // 90
 * @example
 *  otherAngle(45, 45) // 90
 *
 * @param {number} a - First angle
 * @param {number} b - Second angle
 * @return {number} Third angle
 */
const otherAngle = (a: number, b: number): number => 180 - (a + b)

export default otherAngle
