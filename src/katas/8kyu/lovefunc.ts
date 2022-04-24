/**
 * @file Katas - lovefunc
 * @module katas/8kyu/lovefunc
 * @see https://codewars.com/kata/555086d53eac039a2a000083
 */

/**
 * Two people think they are in love.
 *
 * However, around where they live, they will only know once they pick a flower
 * each. If one of the flowers has an even number of petals and the other has an
 * odd number of petals, it means they are in love.
 *
 * Given the number of petals on each flower, `flower1` and `flower2`, the
 * function determines if two people are truly in love.
 *
 * @example
 *  lovefunc(0, 1) // true
 * @example
 *  lovefunc(0, 0) // false
 *
 * @param {number} f1 - Number of petals first flower has
 * @param {number} f2 - Number of petals second flower has
 * @return {boolean} `true` if in love, `false` otherwise
 */
const lovefunc = (f1: number, f2: number): boolean => f1 % 2 !== f2 % 2

export default lovefunc
