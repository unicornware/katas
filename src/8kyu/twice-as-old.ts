/**
 * @file Katas - twiceAsOld
 * @module katas/8kyu/twiceAsOld
 * @see https://codewars.com/kata/5b853229cfde412a470000d0
 */

/**
 * Given the age of a father and son, `f` and `s`, the function returns how many
 * years ago the father was twice as old as his son (or in how many years he
 * will be twice as old).
 *
 * @example
 *  twiceAsOld(22, 1) // 20
 * @example
 *  twiceAsOld(36, 7) // 22
 *
 * @param {number} f - Father's age
 * @param {number} s - Son's age
 * @return {number} How many years ago the father was twice as old as his son
 * (or in how many years he will be twice as old)
 */
const twiceAsOld = (f: number, s: number): number => Math.abs(f - s * 2)

export default twiceAsOld
