import {isPangram} from "../src/pangram/pangram";

describe('"isPangram"', () => {
  it('should identify a pangram', () => {
    expect(isPangram('The quick brown fox jumps over the lazy dog.')).toBeTruthy()
  })

  it('should identify a pangram if there are repetitive chars', () => {
    expect(isPangram('The quick brown fox jumpss over the llazy dog.')).toBeTruthy()
  })

  it('should reject target string if it is not a pangram', () => {
    expect(isPangram('The quick brown fox.')).toBeFalsy()
  })
})
