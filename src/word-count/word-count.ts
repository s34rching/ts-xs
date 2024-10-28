export type WordsMap = {
  [key: string]: number
}

export const isWhiteSpace = (symbol: string): boolean => symbol.match(/\s/) !== null

export const normalizeWhitespaces = (phrase: string): string => {
  const trimmed = phrase.trim()
  const withoutLineBreaks = trimmed.replace(/\n/g, ' ')
  const symbols = withoutLineBreaks.split('')


  const withNormalizedWhitespaces = symbols.map((symbol: string, index: number): string | undefined => {
    if (isWhiteSpace(symbol) && (index !== symbols.length - 1)) {
      if (!isWhiteSpace(symbols[index + 1])) {
        return symbol
      }
    } else {
      return symbol
    }
  })

  return withNormalizedWhitespaces.join('')
}

export const handleContractions = (phrase: string): string => {
  const APOSTROPHE = "'"
  const DASH = "-"
  const symbols = ` ${phrase} `.split('')

  const handled = symbols.map((symbol, index) => {
    if ([APOSTROPHE, DASH].includes(symbol)) {
      if (!isWhiteSpace(symbols[index - 1]) && !isWhiteSpace(symbols[index + 1])) {
        return symbol
      }
    } else {
      return symbol
    }
  })

  return handled.join('').trim()
}

export const countWords = (phrase: string): WordsMap => {
  const lowerCased = phrase.toLowerCase()
  const withHandledContractions = handleContractions(lowerCased)
  const withNormalizedWhitespaces = normalizeWhitespaces(withHandledContractions)
  const withoutExplicitPunctuation = withNormalizedWhitespaces.replace(/[.,!":;()]/g, '')

  let wordsMap: WordsMap = {}

  const words = withoutExplicitPunctuation.split(' ')

  words.forEach((word) => {
    if (word in wordsMap) {
      wordsMap[word] += 1
    } else {
      wordsMap[word] = 1
    }
  })

  return wordsMap
}
