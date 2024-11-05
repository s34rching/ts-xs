export const validateNumber = (target: string | number): boolean => {
  const isEven = (num: number): boolean => num % 2 === 0

  const input = (typeof target === 'number') ? target.toString() : target
  const refined = input.replace(/\s/g, '')
  const digits = refined.trim().split('')

  if (digits.length < 1) {
    return false
  }

  const reversed = digits.reverse()
  let oddDigits: number[] = []
  let evenDigits: number[] = []

  reversed.forEach((digit, index) => {
    const num = Number.parseInt(digit, 10)

    if (isEven(index)) {
      if (isEven(digits.length)) {
        oddDigits.push(num)
      } else {
        evenDigits.push(num)
      }
    } else {
      if (isEven(digits.length)) {
        evenDigits.push(num)
      } else {
        oddDigits.push(num)
      }
    }
  })

  const processed = evenDigits.map((digit) => {
    const doubled = digit * 2

    return doubled > 9 ? doubled - 9 : doubled
  })

  const allDigits = [...oddDigits, ...processed]

  const sum = allDigits.reduce((previous, current) => {
    return previous! + current!
  }, 0)

  console.log(evenDigits)
  console.log(oddDigits)

  return sum! % 10 === 0
}
