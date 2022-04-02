/**
 * @file Katas - makeNegative
 * @module katas/makeNegative
 */

/**
 * Given an integer, `num`, the function returns the integer negated.
 *
 * If `num` is already less than or equal to `0`, the function will return the
 * original integer.
 *
 * @see https://codewars.com/kata/55685cd7ad70877c23000102
 *
 * @example makeNegative(0) => 0
 * @example makeNegative(1) => -1
 * @example makeNegative(-5) => -5
 * @example makeNegative(42) => -42
 *
 * @param {number} num - Integer to negate
 * @return {number} Negated integer
 */
const makeNegative = (num: number): number => (num <= 0 ? num : num * -1)

export default makeNegative
