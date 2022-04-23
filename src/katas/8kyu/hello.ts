/**
 * @file Katas - hello
 * @module katas/8kyu/hello
 * @see https://codewars.com/kata/523b4ff7adca849afe000035
 */

/**
 * Given `name`, the function returns a "hello" message.
 *
 * @example
 *  hello() // 'hello world!'
 * @example
 *  hello('pluto') // 'hello pluto!'
 *
 * @param {string} [name='world'] - Name to insert into message
 * @return {string} "hello" message
 */
const hello = (name: string = 'world'): string => `hello ${name}!`

export default hello
