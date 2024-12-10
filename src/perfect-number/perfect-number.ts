export const getNumberType = (num: number): string => {
  const dividers = []
  let currentDivider = 1

  while (currentDivider < num) {
    if (num % currentDivider === 0) {
      dividers.push(currentDivider)
    }

    currentDivider += 1
  }

  const aliquotSum = dividers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
  }, 0)

  switch (true) {
    case aliquotSum === num:
      return 'Perfect'
    case aliquotSum > num:
      return 'Abundant'
    case aliquotSum < num:
      return 'Deficient'
    default:
      return 'unknown number'
  }
}
