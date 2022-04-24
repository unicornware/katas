/**
 * @file Katas - fibonacciSequence
 * @module katas/5kyu/fibonacciSequence
 * @see https://codewars.com/kata/55695bc4f75bbaea5100016b
 */

/**
 * Fibonacci sequence iterator.
 *
 * @implements {Iterator<number, number | undefined>}
 */
class FibonacciSequence implements Iterator<number, number | undefined> {
  /**
   * @protected
   * @instance
   * @member {number} fib1 - First current sequence value
   */
  protected fib1: number = 1

  /**
   * @protected
   * @instance
   * @member {number} fib2 - Second current sequence value
   */
  protected fib2: number = 1

  /**
   * @protected
   * @instance
   * @member {number} index - Sequence index
   */
  protected index: number = -1

  /**
   * @protected
   * @instance
   * @member {number} max - Sequence index limit
   */
  protected max: number

  /**
   * Creates a new fibonacci sequence iterator.
   *
   * @param {number} [max=Number.POSITIVE_INFINITY] - Sequence index limit
   */
  constructor(max: number = Number.POSITIVE_INFINITY) {
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

    return { done: ++this.index === this.max, value }
  }
}

/**
 * Fibonacci sequence generator.
 *
 * @param {number} [max] - Sequence index limit
 * @return {FibonacciSequence} Fibonacci sequence generator
 */
const fibonacciSequence = (max?: number): FibonacciSequence => {
  return new FibonacciSequence(max)
}

export default fibonacciSequence
