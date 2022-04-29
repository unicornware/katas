/**
 * @file Unit Tests - updateLight
 * @module katas/8kyu/tests/unit/updateLight
 */

import type { TestcaseFn } from '@tests/interfaces'
import testSubject, { TrafficLightState } from '../update-light'

describe('unit:katas/8kyu/updateLight', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: TrafficLightState.GREEN, parameters: [TrafficLightState.RED] },
    { expected: TrafficLightState.RED, parameters: [TrafficLightState.YELLOW] },
    {
      expected: TrafficLightState.YELLOW,
      parameters: [TrafficLightState.GREEN]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
