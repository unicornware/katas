/**
 * @file Katas - digitalRoot
 * @module katas/6kyu/digitalRoot
 * @see https://codewars.com/kata/541c8630095125aba6000c00
 */

/**
 * [Digital root][1] is the _recursive sum of all the digits in a number_.
 *
 * Given a number, `n`, the functions returns the sum of all digits in `n`.
 *
 * [1]: https://en.wikipedia.org/wiki/Digital_root
 *
 * @example
 *  digitalRoot(16) // 17
 * @example
 *  digitalRoot(942) // 6
 * @example
 *  digitalRoot(132189) // 6
 * @example
 *  digitalRoot(493193) // 2
 *
 * @param {number} n - Number to calculate digital root of
 * @return {number} Sum of all digits in `n`
 */
const digitalRoot = (n: number): number => {
  // Base case: If n is a single digit number, return n
  if (n <= 9) return n

  /** @var {number} sum - Sum of all digits in {@link n} */
  let sum: number = 0

  // Iterate through digits starting from rightmost digit
  while (n > 0) {
    // Add rightmost digit
    sum += n % 10 | 0

    // Move onto next digit
    n = n / 10 | 0
  }

  // Return digital root of sum
  return digitalRoot(sum)
}

export default digitalRoot
