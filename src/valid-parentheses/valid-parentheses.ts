export const hasValidParentheses = (input: string): boolean => {
  const curly = '{}'
  const square = '[]'
  const round = '()'

  const hasEnclosed = (operatingString: string): boolean => {
    return operatingString.includes(curly) || operatingString.includes(square) || operatingString.includes(round);
  }

  const removeEnclosed = (operatingString: string): string => {
    if (operatingString.includes(curly)) {
      return operatingString.replace(curly, '')
    } else if (operatingString.includes(square)) {
      return operatingString.replace(square, '')
    } else if (operatingString.includes(round)) {
      return operatingString.replace(round, '')
    }

    return operatingString
  }

  if (input.length % 2 !== 0) {
    return false
  }

  if (input.length < 2) {
    return false
  }

  let operatingInput = `${input}`

  while (hasEnclosed(operatingInput)) {
    operatingInput = removeEnclosed(operatingInput)
  }

  return operatingInput.length === 0
}
