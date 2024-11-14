export const convertToRoman = (target: number): string => {
  if (target > 3999) {
    return "Sorry, the max number is 3999"
  }

  if (target < 1) {
    return "Sorry, unable to parse numbers less 1"
  }

  const digits = target.toString(10).split('').reverse()

  let converted = ''

  digits.forEach((digit, index) => {
    const currentNumber = parseInt(digit, 10)
    let smallest: string
    let middle: string | null
    let next: string | null
    let appended: string

    if (index === 0) {
      smallest = "I"
      middle = "V"
      next = "X"
    } else if (index === 1) {
      smallest = "X"
      middle = "L"
      next = "C"
    } else if (index === 2) {
      smallest = "C"
      middle = "D"
      next = "M"
    } else {
      smallest = "M"
      middle = null
      next = null
    }

    switch (true) {
      case (currentNumber === 0 && (index + 1 <= digits.length - 1)):
        appended = ''
        break
      case currentNumber < 4:
        appended = smallest.repeat(currentNumber)
        break
      case currentNumber === 4:
        appended = `${smallest}${middle}`
        break
      case currentNumber === 5:
        appended = middle!
        break
      case currentNumber === 9:
        appended = `${smallest}${next!}`
        break
      default:
        appended = `${middle!}${smallest.repeat(currentNumber - 5)}`
        break
    }

    converted = appended + converted
  })

  return converted
}
