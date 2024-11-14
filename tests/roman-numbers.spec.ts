import {convertToRoman} from "../src/roman-numbers/roman-numbers";

describe('"convertToRoman"', () => {
  it('should convert 1', () => {
    expect(convertToRoman(1)).toEqual('I')
  })

  it('should convert 3', () => {
    expect(convertToRoman(3)).toEqual('III')
  })

  it('should convert 5', () => {
    expect(convertToRoman(5)).toEqual('V')
  })

  it('should convert 10', () => {
    expect(convertToRoman(10)).toEqual('X')
  })

  it('should convert 14', () => {
    expect(convertToRoman(14)).toEqual('XIV')
  })

  it('should convert 50', () => {
    expect(convertToRoman(50)).toEqual('L')
  })

  it('should convert 79', () => {
    expect(convertToRoman(79)).toEqual('LXXIX')
  })

  it('should convert 100', () => {
    expect(convertToRoman(100)).toEqual('C')
  })

  it('should convert 146', () => {
    expect(convertToRoman(146)).toEqual('CXLVI')
  })

  it('should convert 500', () => {
    expect(convertToRoman(500)).toEqual('D')
  })

  it('should convert 1000', () => {
    expect(convertToRoman(1000)).toEqual('M')
  })

  it('should convert 1111', () => {
    expect(convertToRoman(1111)).toEqual('MCXI')
  })

  it('should convert 2460', () => {
    expect(convertToRoman(2460)).toEqual('MMCDLX')
  })

  it('should convert 3999', () => {
    expect(convertToRoman(3999)).toEqual('MMMCMXCIX')
  })

  it('should return error if max number is exceeded', () => {
    expect(convertToRoman(4000)).toEqual('Sorry, the max number is 3999')
  })

  it('should return error if number less than 1', () => {
    expect(convertToRoman(0)).toEqual('Sorry, unable to parse numbers less 1')
  })
})
