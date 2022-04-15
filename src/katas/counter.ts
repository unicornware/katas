/**
 * @file Katas - counter
 * @module katas/counter
 * @see https://codewars.com/kata/60edafd71dad1800563cf933
 */

/**
 * Returns a function that returns an increasing value.
 *
 * @return {() => number} Counter function
 */
const counter = (): (() => number) => {
  /** @var {number} count - Increasing value */
  let count: number = 0

  /**
   * Increases {@link count}.
   *
   * @return {number} New value of `count`
   */
  const increase = (): number => ++count

  return increase
}

export default counter
