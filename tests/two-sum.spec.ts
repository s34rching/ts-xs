import {twoSum} from "../src/two-sum/two-sum";

describe('"twoSum"', () => {
  it('should return items indexes if all indexes unique', () => {
    expect(twoSum([1, 2, 3, 4], 7)).toEqual([2, 3])
  })

  it('should return items indexes if members are equal', () => {
    expect(twoSum([8, 2, 3, 3, 5], 6)).toEqual([2, 3])
  })

  it('should return "-1" if there is not members which sum is equal to "sum"', () => {
    expect(twoSum([1, 2, 3, 3, 4], 12)).toEqual(-1)
  })
})
