export const isValidPalindrome = (input: string): boolean => {
  const refined = input.trim()

  if (refined === '') {
    return true
  }

  const pattern = new RegExp('[a-zA-Z0-9]', 'gi')
  const initialStringChars = refined.match(pattern)
  const initialStringCharsCopy = Object.assign([], initialStringChars)
  const reversedStringChars = initialStringCharsCopy.reverse()

  return initialStringChars!.join('') === reversedStringChars!.join('')
}
