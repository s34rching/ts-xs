import {countPoints} from "../src/darts/darts";

describe('"countPoints"', () => {
  it('hit to the center earns 10 points', () => {
    expect(countPoints(0, 0)).toBe(10)
  })

  it('hit to the inner circle earns 10 points', () => {
    expect(countPoints(0.5, 0.3)).toBe(10)
  })

  it('hit to the middle circle earns 5 points', () => {
    expect(countPoints(-2, 4)).toBe(5)
  })

  it('hit to the outer circle earns 1 point', () => {
    expect(countPoints(-7, -7)).toBe(1)
  })

  it('hit outside the target earns 0 points', () => {
    expect(countPoints(-11, -7)).toBe(0)
  })
})
