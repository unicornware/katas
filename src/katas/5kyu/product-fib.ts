/**
 * @file Katas - productFib
 * @module katas/5kyu/productFib
 * @see https://codewars.com/kata/5541f58a944b85ce6d00006a
 */

class G964 {
  /**
   * Fibonacci sequence iterator.
   *
   * @public
   * @static
   *
   * @class
   * @implements {Iterator<number, number>}
   */
  static FibonacciSequence = class implements Iterator<number, number> {
    /**
     * @public
     * @instance
     * @member {number} fib1 - First current sequence value
     */
    fib1: number = 1

    /**
     * @public
     * @instance
     * @member {number} fib2 - Second current sequence value
     */
    fib2: number = 1

    /**
     * @protected
     * @instance
     * @member {number} max - Sequence value limit (inclusive)
     */
    protected max: number

    /**
     * Creates a new fibonacci sequence iterator.
     *
     * @param {number} [max=Number.MAX_SAFE_INTEGER] - Sequence value limit
     */
    constructor(max: number = Number.MAX_SAFE_INTEGER) {
      this.max = max < 0 ? 0 : max
    }

    /**
     * Iterable protocol.
     *
     * @public
     * @instance
     *
     * @return {IterableIterator<number>} Current sequence iterator
     */
    [Symbol.iterator](): IterableIterator<number> {
      return this
    }

    /**
     * Returns the next value in the fibonacci sequence.
     *
     * @public
     * @instance
     *
     * @return {IteratorResult<number, number>} Next value in sequence
     */
    next(): IteratorResult<number, number> {
      /** @const {number} value - Temporary sequence value */
      const value: number = this.fib1

      // Reset current sequence values
      this.fib1 = this.fib2
      this.fib2 = value + this.fib1

      return { done: value >= this.max, value }
    }
  }

  /**
   * Given an integer, `prod`, the function returns an array containing two
   * **consecutive** fibonacci sequence values whose product equals `prod`.
   *
   * If the two sequence values satisfying the constraints are found, the last
   * value in the returned array will be `true`. Otherwise, it'll be `false`.
   *
   * @example
   *  G964.productFib(714) // [21, 34, true]
   * @example
   *  G964.productFib(800) // [34, 55, false]
   *
   * @public
   * @static
   *
   * @param {number} prod - Target product
   * @return {[number, number, boolean]} Fibonacci sequence values
   */
  static productFib(prod: number): [number, number, boolean] {
    /** @const {G964.FibonacciSequence} s - Fibonacci sequence */
    const s = new this.FibonacciSequence((Math.sqrt(prod) | 0) * 2)

    /** @var {IteratorResult<number, number>} curr - Current {@link s} value */
    let curr: IteratorResult<number, number> = s.next()

    while (!curr.done) {
      /** @const {number} product - Product of current {@link s} values */
      const product: number = s.fib1 * s.fib2

      // If current product >= target product, return early
      if (product >= prod) return [s.fib1, s.fib2, product === prod]

      // Move onto next sequence value / pair of sequence values
      curr = s.next()
    }

    return [s.fib1, s.fib2, false]
  }
}

export default G964
