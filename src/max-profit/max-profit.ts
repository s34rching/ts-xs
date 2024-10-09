const isOnly = (array: number[], value: number): boolean => {
  return array.indexOf(value) === array.lastIndexOf(value)
}

const getExtremumValue = (array: number[], type: string): number => {
  const copy = Object.assign([], array)
  const sorted = copy.sort((a, b) => type === "max" ? (b - a) : (a - b))
  return sorted[0]
}

export const getMaxProfit = (dailyRates: number[]): number => {
  const minRate = getExtremumValue(dailyRates, "min")
  const day = dailyRates.indexOf(minRate!)

  if ((day === dailyRates.length - 1) && isOnly(dailyRates, minRate)) {
    return 0
  }

  const upcomingDayRates = dailyRates.slice(day + 1)
  const maxRate = getExtremumValue(upcomingDayRates, "max")

  return maxRate - minRate
}
