import { getCounter } from './getCounter'

describe('getCounter', () => {
  test('should return counter', () => {
    const state = {
      counter: {
        value: 0,
      },
    }
    expect(getCounter(state)).toEqual({
      value: 0,
    })
  })
})
