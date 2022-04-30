/**
 * @file Katas - feast
 * @module katas/8kyu/feast
 * @see https://codewars.com/kata/5aa736a455f906981800360d
 */

/**
 * The animals are having a feast! Each animal is bringing one dish.
 *
 * There is just one rule: the dish must start and end with the same letters as
 * the animal's name.
 *
 * Given an animal, `b`, and their proposed dish, `d`, the function checks if
 * the beast is allowed to bring the dish to the feast.
 *
 * @example
 *  feast('brown bear', 'bear claw') // false
 * @example
 *  feast('chickadee', 'chocolate cake') // true
 * @example
 *  feast('great blue heron', 'garlic naan') // true
 *
 * @param {string} b - Beast's name
 * @param {string} d - Beast's proposed dish
 * @return {boolean} `true` if `beast` can bring `dish`, `false` otherwise
 */
const feast = (b: string, d: string): boolean => {
  return b[0]! === d[0]! && b[b.length - 1]! === d[d.length - 1]!
}

export default feast
