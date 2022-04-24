/**
 * @file Katas - hero
 * @module katas/8kyu/hero
 * @see https://codewars.com/kata/59ca8246d751df55cc00014c
 */

/**
 * A hero is on their way to the castle to complete their mission.
 *
 * However, they've been told that the castle is surrounded by powerful dragons!
 * Each dragon takes `2` bullets to be defeated; our hero has no idea how many
 * bullets they should carry.
 *
 * Given a number of bullets, `b`, and a number of dragons, `d`, the function
 * determines if the hero has enough bullets to survive the journey.
 *
 * @example
 *  hero(100, 40) // true
 * @example
 *  hero(1500, 751) // false
 *
 * @param {number} b - Number of bullets hero has
 * @param {number} d - Number of dragons on castle route
 * @return {boolean} `true` if hero will survive, `false` otherwise
 */
const hero = (b: number, d: number): boolean => b >= d * 2

export default hero
