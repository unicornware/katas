/**
 * @file Katas - zeroFuel
 * @module katas/8kyu/zeroFuel
 * @see https://codewars.com/kata/5861d28f124b35723e00005e
 */

/**
 * Given the distance to a gas station, `distance`, miles per gallon a car runs
 * on, `mpg`, and the fuel left in said car, `fuel`, the function determines if
 * the car will make it to the gas station before running out of gas.
 *
 * @example
 *  zeroFuel(50, 25, 2) // true
 * @example
 *  zeroFuel(100, 50, 1) // false
 *
 * @param {number} distance - Distance to gas station
 * @param {number} mpg - Miles per gallon car runs on
 * @param {number} fuel - Gallons of fuel left in car
 * @return {boolean} `true` if car will make it, `false` otherwise
 */
const zeroFuel = (distance: number, mpg: number, fuel: number): boolean => {
  return distance <= mpg * fuel
}

export default zeroFuel
