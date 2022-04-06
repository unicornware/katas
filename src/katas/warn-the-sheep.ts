/**
 * @file Katas - warnTheSheep
 * @module katas/warnTheSheep
 */

/**
 * Wolves have been reintroduced to Great Britain. Sheep farmers are now plagued
 * by wolves which pretend to be sheep.
 *
 * Given a queue of sheeps (both real and disguised), `queue`, the function
 * warns the sheep in front of the wolf that they are about to be eaten.
 *
 * If a wolf is the closest animal in the queue, the function will return **"Pls
 * go away and stop eating my sheep"**.
 *
 * If a sheep is about to be eaten, the function will return **"Oi! Sheep number
 * `N`! You are about to be eaten by a wolf!"** where `N` is the sheep's
 * position in the queue.
 *
 * @see https://codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
 *
 * @example warnTheSheep(['sheep', 'wolf', 'sheep']) // sheep warning
 * @example warnTheSheep(['sheep', 'sheep', 'wolf']) // wolf warning
 *
 * @param {string[]} queue - Sheep / wolf queue
 * @return {string} Warning message
 */
const warnTheSheep = (queue: string[]): string => {
  // Reverse queue
  queue = queue.reverse()

  /** @const {string | undefined} curr - Current item in {@link queue} */
  let curr: string | undefined = queue.shift()

  /** @const {string | undefined} prev - Item before {@link curr} */
  let prev: string | undefined

  /** @const {number} sheep - Sheep count */
  let sheep: number = 0

  // Check queue for wolves disguised as sheep
  while (curr) {
    // Increase sheep count
    if (curr === 'sheep') sheep++

    // Return warning message if wolf is found in the queue
    if (curr === 'wolf') {
      // If wolf is the first in queue, return wolf warning message
      if (!prev) return 'Pls go away and stop eating my sheep'

      // Return sheep warning message
      return `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!`
    }

    // Move onto next item
    prev = curr
    curr = queue.shift()
  }

  return ''
}

export default warnTheSheep
