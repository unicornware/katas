/**
 * @file Katas - gapInPrimes
 * @module katas/gapInPrimes
 * @see https://codewars.com/kata/561e9c843a2ef5a40c0000a4
 */

/**
 * [Prime Gap][1] calculator.
 *
 * [1]: http://mathworld.wolfram.com/PrimeGaps.html
 */
class G964 {
  /**
   * Returns the first pair of prime numbers spaced with a gap of `g` between
   * the limits `m` and `n`.
   *
   * @example
   *  G964.gap(2, 3, 50) // [3, 5]
   *
   * @public
   * @static
   *
   * @param {number} g - Prime gap to search for
   * @param {number} m - Lower bound (inclusive)
   * @param {number} n - Upper bound (exclusive)
   * @return {[number, number] | null} First pair of primes with a gap of `g`
   */
  static gap(g: number, m: number, n: number): [number, number] | null {
    /** @const {number[]} p - Prime numbers between {@link m} and {@link n} */
    const p: number[] = this.primes(n, m)

    // Find first pair of primes
    for (let i = 0; i < p.length; i++) {
      /** @const {number} p1 - Current prime number */
      const p1 = p[i]!

      /** @const {number | undefined} p2 - Next prime number */
      const p2: number | undefined = p[i + 1]

      // If no next prime, do nothing
      if (p2 === undefined) break

      // If gap was found, return pair
      if (p2 - p1 === g) return [p1, p2]
    }

    return null
  }

  /**
   * Checks if `n` is a prime number.
   *
   * @example
   *  G964.prime(2) // true
   * @example
   *  G964.prime(10) // false
   *
   * @public
   * @static
   *
   * @param {number} n - Number to check
   * @return {boolean} `true` if `n` is a prime number, `false` otherwise
   */
  static prime(n: number): boolean {
    // Prime numbers start at 2 and all are odd (except 2)
    if (n <= 1 || n !== 2 && n % 2 === 0) return false

    // If n equals 2, n is a prime number
    if (n === 2) return true

    // Check multiples between 3 and Math.sqrt(n)
    // If n is divisible by any of those multiples, n is a not a prime number
    for (let i = 3; i <= Math.sqrt(n); i++) if (n % i === 0) return false

    // n is a prime number
    return true
  }

  /**
   * Returns an array containing all prime numbers between `k` and `n`.
   *
   * @example
   *  G964.primes(30) // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
   * @example
   *  G964.primes(20, 4) // [5, 7, 11, 13, 17, 19]
   *
   * @public
   * @static
   *
   * @param {number} n - Upper bound
   * @param {number} [k=2] - Lower bound
   * @return {number[]} Prime numbers between `k` and `n`
   */
  static primes(n: number, k: number = 2): number[] {
    /** @const {number[]} p - Prime numbers between {@link k} and {@link n} */
    const p: number[] = []

    // Get prime numbers
    for (let i = k; i <= n; i++) if (this.prime(i)) p.push(i)

    return p
  }
}

export default G964
