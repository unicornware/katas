/**
 * @file Katas - greetJenny
 * @module katas/8kyu/greetJenny
 * @see https://codewars.com/kata/55225023e1be1ec8bc000390
 */

/**
 * Jenny has written a function that returns a greeting for a user. However,
 * because she's in love with Johnny, the function returns a special greeting
 * for Johnny.
 *
 * @example
 *  greetJenny('Johnny') // 'Hello, my love!'
 * @example
 *  greetJenny('Ryan') // 'Hello, Ryan!'
 *
 * @param {string} name - Person to greet
 * @return {string} Greeting message
 */
const greetJenny = (name: string): string => {
  return `Hello, ${/johnny/i.test(name) ? 'my love' : name}!`
}

export default greetJenny
