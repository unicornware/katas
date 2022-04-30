/**
 * @file Katas - hello
 * @module katas/8kyu/hello
 * @see https://codewars.com/kata/523b4ff7adca849afe000035
 * @see https://codewars.com/kata/57e3f79c9cb119374600046b
 */

/**
 * Given `name`, the function returns a "hello" message.
 *
 * @example
 *  hello() // 'hello world!'
 * @example
 *  hello('pluto') // 'hello pluto!'
 * @example
 *  hello('', true) // 'Hello, World!'
 * @example
 *  hello('pluto', true) // 'Hello, Pluto!'
 *
 * @param {string} [name=''] - Name to insert into message
 * @param {boolean} [format=false] - Format message
 * @return {string} "hello" message
 */
const hello = (name: string = '', format: boolean = false): string => {
  // Default to "world" if name isn't provided
  name = name || 'world'

  // Format name
  if (format) name = `${name[0]!.toUpperCase()}${name.slice(1).toLowerCase()}`

  // Return formatted message if formatting is enabled
  // Otherwise, return message without formatting
  return `${format ? 'Hello,' : 'hello'} ${name}!`
}

export default hello
