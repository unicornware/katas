/**
 * @file Katas - getRealFloor
 * @module katas/8kyu/getRealFloor
 * @see https://codewars.com/kata/574b3b1599d8f897470018f6
 */

/**
 * Americans are odd people: in their buildings, the first floor is actually the
 * ground floor and there is no 13th floor (due to superstition).
 *
 * Given a floor in the american system, `n`, the function returns the floor in
 * the european system.
 *
 * @example
 *  getRealFloor(1) // 0
 * @example
 *  getRealFloor(5) // 4
 * @example
 *  getRealFloor(15) // 13
 *
 * @param {number} n - Floor in american system
 * @return {number} `n` as floor in european system
 */
const getRealFloor = (n: number): number => n <= 0 ? n : n - (n > 13 ? 2 : 1)

export default getRealFloor
