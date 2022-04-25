/**
 * @file Katas - rentalCarCost
 * @module katas/8kyu/rentalCarCost
 * @see https://codewars.com/kata/568d0dd208ee69389d000016
 */

/**
 * Every day a car is rented, it costs `40$`.
 *
 * If the car is rented for `7` or more days, the price is discounted `50$`.
 *
 * If the car is rented for `3` or more days, the price is discounted `20$`.
 *
 * Given the number of days a car is rented, `d`, the function returns the final
 * price of the rental car.
 *
 * @example
 *  rentalCarCost(1) // 40
 * @example
 *  rentalCarCost(3) // 100
 * @example
 *  rentalCarCost(9) // 310
 *
 * @param {number} d - Number of days car is rented
 * @return {number} Price of rental car
 */
const rentalCarCost = (d: number): number => {
  return d * 40 - (d <= 2 ? 0 : d <= 6 ? 20 : 50)
}

export default rentalCarCost
