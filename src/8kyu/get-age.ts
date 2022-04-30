/**
 * @file Katas - get_age
 * @module katas/8kyu/get_age
 * @see https://codewars.com/kata/557cd6882bfa3c8a9f0000c1
 */

/**
 * Child's answer to the question "How old are you?"
 */
type Answer = '1 year old' | `${0 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9} years old`

/**
 * You ask a small child, "How old are you?"
 *
 * They always say "x years old", where `x` is a number between `0` and `9`.
 *
 * Given the child's answer, `age`, the function returns an the child's age as
 * an integer.
 *
 * @example
 *  get_age('2 years old') // 2
 *
 * @param {Answer} age - Child's answer
 * @return {number} `age` as integer
 */
const get_age = (age: Answer): number => +age[0]!

export default get_age
