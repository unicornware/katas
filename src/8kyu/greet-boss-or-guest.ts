/**
 * @file Katas - greetBossOrGuest
 * @module katas/8kyu/greetBossOrGuest
 * @see https://codewars.com/kata/5772da22b89313a4d50012f7
 */

/**
 * Returns a greeting message for a "boss" or "guest".
 *
 * @example
 *  greetBossOrGuest('Greg', 'Daniel') // 'Hello guest'
 * @example
 *  greetBossOrGuest('Daniel', 'Daniel') // 'Hello boss'
 *
 * @param {string} name - Boss or guest name
 * @param {string} owner - Name of boss
 * @return {string} Greeting message
 */
const greetBossOrGuest = (name: string, owner: string): string => {
  return `Hello ${name === owner ? 'boss' : 'guest'}`
}

export default greetBossOrGuest
