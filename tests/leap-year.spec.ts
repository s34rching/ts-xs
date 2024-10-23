import {isLeapYear} from "../src/leap-year/leap-year";

describe('"isLeapYear"', () => {
  it('should identify leap year', () => {
    expect(isLeapYear(1992)).toBeTruthy()
  })

  it('should identify even divisible by 100 and by 400 leap year', () => {
    expect(isLeapYear(2000)).toBeTruthy()
  })

  it('should reject non-leap even year', () => {
    expect(isLeapYear(1990)).toBeFalsy()
  })

  it('should reject non-leap odd year', () => {
    expect(isLeapYear(1991)).toBeFalsy()
  })

  it('should reject non-leap even divisible by 100 and not by 400 year', () => {
    expect(isLeapYear(1991)).toBeFalsy()
  })
})
