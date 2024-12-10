import {getNumberType} from "../src/perfect-number/perfect-number";

describe('"getNumberType"', () => {
  it('should define perfect number', () => {
    expect(getNumberType(6)).toEqual('Perfect')
  })

  it('should define abundant number', () => {
    expect(getNumberType(12)).toEqual('Abundant')
  })

  it('should define deficient number', () => {
    expect(getNumberType(8)).toEqual('Deficient')
  })
})
