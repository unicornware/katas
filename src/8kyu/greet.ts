/**
 * @file Katas - greet
 * @module katas/8kyu/greet
 * @see https://codewars.com/kata/55a70521798b14d4750000a4
 */

/**
 * Given `name`, the function returns a greeting message.
 *
 * @example
 *  greet('Ryan') // 'Hello, Ryan how are you doing today?'
 *
 * @param {string} name - Name to insert into greeting message
 * @return {string} Greeting message
 */
const greet = (name: string): string => {
  return `Hello, ${name} how are you doing today?`
}

export default greet
