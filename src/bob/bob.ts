export const isSilence = (query: string): boolean => {
  return query.split('').every((symbol) => symbol.match(/\n/) !== null) || query === ''
}

export const respondAsBob = (query: string): string => {
  switch (true) {
    case (query === query.toUpperCase() && query.endsWith('?')):
      return "Calm down, I know what I'm doing!"
    case (query !== query.toUpperCase() && query.endsWith('?')):
      return "Sure."
    case (query === query.toUpperCase() && !query.endsWith('?') && !isSilence(query)):
      return "Whoa, chill out!"
    case (isSilence(query)):
      return "Fine. Be that way!"
    default:
      return "Whatever."
  }
}
