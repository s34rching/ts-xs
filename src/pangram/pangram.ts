export const isPangram = (target: string): boolean => {
  const assertIncluded = (char: string, targetString: string): boolean => {
    const pattern = new RegExp(char, 'gi')
    const result = targetString.match(pattern)
    return result !== null;
  }

  const alphabet = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
  const alphabetChars = alphabet.split(' ')

  const resolved = alphabetChars.map((char) => assertIncluded(char, target))
  return !resolved.includes(false)
}

