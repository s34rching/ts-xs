export const isLeapYear = (year: number | string): boolean => {
  const yearValue = typeof year === "string" ? parseInt(year, 10) : year

  if (yearValue % 4 === 0) {
    if (yearValue % 100 === 0) {
      if (yearValue % 400 === 0) {
        return true
      }
      return false
    }
    return true
  }
  return false
}
