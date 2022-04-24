/**
 * @file Katas - countSheep
 * @module katas/8kyu/countSheep
 * @see https://codewars.com/kata/5b077ebdaf15be5c7f000077
 */

/**
 * If you can't sleep, just count sheep!
 *
 * Given a non-negative integer, `num`, the function returns a message to help
 * with counting.
 *
 * @example
 *  countSheep(0) // ''
 * @example
 *  countSheep(3) // '1 sheep...2 sheep...3 sheep...'
 *
 * @param {number} num - Nnon-negative integer
 * @return {string} Counting helper
 */
const countSheep = (num: number): string => {
  return (function helper(n: number): string[] {
    return n === 0 ? [] : [`${n} sheep...`, ...helper(n - 1)]
  })(num).reverse().join('')
}

export default countSheep
