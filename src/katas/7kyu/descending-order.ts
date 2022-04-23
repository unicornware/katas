/**
 * @file Katas - descendingOrder
 * @module katas/7kyu/descendingOrder
 * @see https://codewars.com/kata/5467e4d82edf8bbf40000155
 */

/**
 * Given a positive integer, `n`, the function rearranges the digits of `n` in
 * descending order thus returning the largest possible number that can be
 * created using those digits.
 *
 * @example
 *  descendingOrder(42145) // 54421
 * @example
 *  descendingOrder(145263) // 654321
 * @example
 *  descendingOrder(123456789) // 987654321
 *
 * @param {number} n - Positive integer
 * @return {number} Largest number that can be created using digits of `n`
 */
const descendingOrder = (n: number): number => {
  // If n is less than or equal to 11, digits are already in descending order
  if (n <= 11) return n

  /** @const {number[]} digits - Digits in {@link n} */
  const digits: number[] = []

  // Iterate through digits starting from rightmost digit
  while (n > 0) digits.push(n % 10 | 0) && (n = n / 10 | 0)

  // Sort digits in descending order before joining and converting into number
  return +digits.sort((a, b) => b - a).join('')
}

export default descendingOrder
