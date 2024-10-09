import {getMaxProfit} from "../src/max-profit/max-profit";

describe('"getMaxProfit"', () => {
  it('should return maximum profit value', () => {
    expect(getMaxProfit([7, 1, 4, 6, 7, 8])).toEqual(7)
  })

  it('should return maximum profit value if "min" is not unique', () => {
    expect(getMaxProfit([7, 1, 4, 6, 7, 8, 1])).toEqual(7)
  })

  it('should return 0 if rates are descending', () => {
    expect(getMaxProfit([7, 6, 4, 3, 2])).toEqual(0)
  })

  it('should return 0 if rates are the same', () => {
    expect(getMaxProfit([2, 2, 2, 2, 2])).toEqual(0)
  })
})
