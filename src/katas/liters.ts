/**
 * @file Katas - liters
 * @module katas/liters
 * @see https://codewars.com/kata/582cb0224e56e068d800003c
 */

/**
 * Nathan loves cycling. Because Nathan knows it is important to stay hydrated,
 * he drinks 0.5 liters of water per hour of cycling.
 *
 * Given the number of hours Nathan will cycle, `time`, the function returns the
 * liters of water Nathan will drink, rounded to the smallest value.
 *
 * @example
 *  liters(3) // 1
 * @example
 *  liters(6.7) // 3
 * @example
 *  liters(11.8) // 5
 *
 * @param {number} time - Hours spent cycling
 * @return {number} Liters of water Nathan will drink
 */
const liters = (time: number): number => Math.floor(time / 2)

export default liters
