import {isValidPalindrome} from "../src/valid-palindrome/valid-palindrome";

describe('"isValidPalindrome"', () => {
  it('should assess correct string as valid palindrome', () => {
    expect(isValidPalindrome('a b a')).toBeTruthy()
  })

  it('should assess empty string as valid palindrome', () => {
    expect(isValidPalindrome('   ')).toBeTruthy()
  })

  it('should assess correct string with whitespaces as valid palindrome', () => {
    expect(isValidPalindrome('qwertrewq   ')).toBeTruthy()
  })

  it('should assess alphanumeric string as valid palindrome', () => {
    expect(isValidPalindrome('1 qwertrewq 1')).toBeTruthy()
  })

  it('should not assess string as a palindrome', () => {
    expect(isValidPalindrome('qwertrwq')).toBeFalsy()
  })
})
