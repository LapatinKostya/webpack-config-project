import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state = {
      counter: {
        value: 0,
        test: 1,
      },
    }
    expect(getCounterValue(state)).toEqual(0)
  })
})
