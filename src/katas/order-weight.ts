/**
 * @file Katas - orderWeight
 * @module katas/orderWeight
 * @see https://codewars.com/kata/55c6126177c9441a570000cc
 */

/**
 * Given a string with the weights of each "Fat to Fit Club (FFC)" member, the
 * function returns a string with the weights sorted in ascending order by the
 * sum of their digits.
 *
 * @example orderWeight('56 74 100 99 86 180 90') // '100 180 90 56 74 86 99'
 *
 * @param {string} string - Weights of FFC members
 * @return {string} Weights sorted by sum of their digits
 */
const orderWeight = (string: string): string => {
  return [...(string.match(/\d+/g) ?? '')]
    .map(m => ({ m, w: [...m].reduce((acc, char) => acc + +char, 0) }))
    .sort((a, b) => (a.w === b.w ? a.m.localeCompare(b.m) : a.w - b.w))
    .reduce((acc, curr) => acc + (acc ? ' ' : '') + curr.m, '')
}

export default orderWeight
