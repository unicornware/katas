/**
 * @file Katas - likes
 * @module katas/6kyu/likes
 * @see https://codewars.com/kata/5266876b8f4bf2da9b000362
 */

/**
 * The Facebook 'like' system and similar models allow people to 'like' blog
 * posts, pictures and other pieces of content.
 *
 * Given an array of names, `a`, the function returns a message indicating the
 * people like a certain piece of content.
 *
 * @example
 *  likes([]) // 'no one likes this'
 * @example
 *  likes(['Peter']) // 'Peter likes this'
 * @example
 *  likes(['Jacob', 'Alex']) // 'Jacob and Alex like this'
 * @example
 *  likes(['Max', 'John', 'Mark']) // 'Max, John and Mark like this'
 * @example
 *  likes(['Alex', 'TJ', 'Mark', 'Max']) // 'Alex, TJ and 2 others like this'
 *
 * @param {string[]} a - Names
 * @return {string} "like" message
 */
const likes = (a: string[]): string => {
  /** @var {string} message - "like" message */
  let message: string = ''

  // Get "like" message
  switch (a.length) {
    case 0:
      message = 'no one likes this'
      break
    case 1:
      message = `${a[0]} likes this`
      break
    case 2:
      message = `${a[0]} and ${a[1]} like this`
      break
    case 3:
      message = `${a[0]}, ${a[1]} and ${a[2]} like this`
      break
    default:
      message = `${a[0]}, ${a[1]} and ${a.length - 2} others like this`
  }

  return message
}

export default likes
