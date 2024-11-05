import {validateNumber} from "../src/luhn/luhn";

describe('"validateNumber"', () => {
  it('should validate stringified valid number', () => {
    expect(validateNumber('4539 3195 0343 6467')).toBeTruthy()
  })

  it('should validate valid number', () => {
    expect(validateNumber(4342077277183288)).toBeTruthy()
  })

  it('should validate stringified valid number with trimming empty spaces', () => {
    expect(validateNumber('   4539 3195 0343 6467')).toBeTruthy()
  })

  it('should reject too short numbers', () => {
    expect(validateNumber(2)).toBeFalsy()
  })

  it('should reject empty strings', () => {
    expect(validateNumber('   ')).toBeFalsy()
  })
})
