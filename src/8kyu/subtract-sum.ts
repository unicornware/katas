/**
 * @file Katas - subtractSum
 * @module katas/8kyu/subtractSum
 * @see https://codewars.com/kata/56c5847f27be2c3db20009c3
 */

/**
 * Fruits.
 *
 * @enum {Lowercase<string>}
 */
export enum Fruit {
  APPLE = 'apple',
  BANANA = 'banana',
  CHERRY = 'cherry',
  CUCUMBER = 'cucumber',
  GRAPE = 'grape',
  KIWI = 'kiwi',
  MELON = 'melon',
  ORANGE = 'orange',
  PEAR = 'pear',
  PINEAPPLE = 'pineapple'
}

/**
 * Maps the difference of a given integer and the sum of its digits to a fruit.
 *
 * @const {Readonly<Record<number, Fruit>>} Fruits
 */
export const Fruits: Readonly<Record<number, Fruit>> = Object.freeze({
  1: Fruit.KIWI,
  2: Fruit.PEAR,
  3: Fruit.KIWI,
  4: Fruit.BANANA,
  5: Fruit.MELON,
  6: Fruit.BANANA,
  7: Fruit.MELON,
  8: Fruit.PINEAPPLE,
  9: Fruit.APPLE,
  10: Fruit.PINEAPPLE,
  11: Fruit.CUCUMBER,
  12: Fruit.PINEAPPLE,
  13: Fruit.CUCUMBER,
  14: Fruit.ORANGE,
  15: Fruit.GRAPE,
  16: Fruit.ORANGE,
  17: Fruit.GRAPE,
  18: Fruit.APPLE,
  19: Fruit.GRAPE,
  20: Fruit.CHERRY,
  21: Fruit.PEAR,
  22: Fruit.CHERRY,
  23: Fruit.PEAR,
  24: Fruit.KIWI,
  25: Fruit.BANANA,
  26: Fruit.KIWI,
  27: Fruit.APPLE,
  28: Fruit.MELON,
  29: Fruit.BANANA,
  30: Fruit.MELON,
  31: Fruit.PINEAPPLE,
  32: Fruit.MELON,
  33: Fruit.PINEAPPLE,
  34: Fruit.CUCUMBER,
  35: Fruit.ORANGE,
  36: Fruit.APPLE,
  37: Fruit.ORANGE,
  38: Fruit.GRAPE,
  39: Fruit.ORANGE,
  40: Fruit.GRAPE,
  41: Fruit.CHERRY,
  42: Fruit.PEAR,
  43: Fruit.CHERRY,
  44: Fruit.PEAR,
  45: Fruit.APPLE,
  46: Fruit.PEAR,
  47: Fruit.KIWI,
  48: Fruit.BANANA,
  49: Fruit.KIWI,
  50: Fruit.BANANA,
  51: Fruit.MELON,
  52: Fruit.PINEAPPLE,
  53: Fruit.MELON,
  54: Fruit.APPLE,
  55: Fruit.CUCUMBER,
  56: Fruit.PINEAPPLE,
  57: Fruit.CUCUMBER,
  58: Fruit.ORANGE,
  59: Fruit.CUCUMBER,
  60: Fruit.ORANGE,
  61: Fruit.GRAPE,
  62: Fruit.CHERRY,
  63: Fruit.APPLE,
  64: Fruit.CHERRY,
  65: Fruit.PEAR,
  66: Fruit.CHERRY,
  67: Fruit.PEAR,
  68: Fruit.KIWI,
  69: Fruit.PEAR,
  70: Fruit.KIWI,
  71: Fruit.BANANA,
  72: Fruit.APPLE,
  73: Fruit.BANANA,
  74: Fruit.MELON,
  75: Fruit.PINEAPPLE,
  76: Fruit.MELON,
  77: Fruit.PINEAPPLE,
  78: Fruit.CUCUMBER,
  79: Fruit.PINEAPPLE,
  80: Fruit.CUCUMBER,
  81: Fruit.APPLE,
  82: Fruit.GRAPE,
  83: Fruit.ORANGE,
  84: Fruit.GRAPE,
  85: Fruit.CHERRY,
  86: Fruit.GRAPE,
  87: Fruit.CHERRY,
  88: Fruit.PEAR,
  89: Fruit.CHERRY,
  90: Fruit.APPLE,
  91: Fruit.KIWI,
  92: Fruit.BANANA,
  93: Fruit.KIWI,
  94: Fruit.BANANA,
  95: Fruit.MELON,
  96: Fruit.BANANA,
  97: Fruit.MELON,
  98: Fruit.PINEAPPLE,
  99: Fruit.APPLE,
  100: Fruit.PINEAPPLE
})

/**
 * Given an integer, `n`, such that `10 <= n < 10000`, the function continuously
 * sums the digits of `n` and subtracts the sum until a {@link Fruit} is chosen.
 *
 * @example
 *  subtractSum(10) // 'apple'
 *
 * @param {number} n - Integer, such that `10 <= n < 10000`
 * @return {Fruit} Random fruit
 */
const subtractSum = (n: number): Fruit => {
  // Continuously sum digits in n and subtract sum from n
  while (n >= 10) {
    /** @var {number} num - Copy of {@link n} */
    let num: number = n

    /** @var {number} sum - Sum of digits in {@link num} */
    let sum: number = 0

    // Iterate through digits starting from rightmost digit
    while (num > 0) {
      // Add rightmost digit
      sum += num % 10 | 0

      // Move onto next digit
      num = num / 10 | 0
    }

    // Subtract sum of digits from n
    n -= sum
  }

  return Fruits[n]!
}

export default subtractSum
