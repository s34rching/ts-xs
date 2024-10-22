export const countPoints = (x: number, y: number) => {
  const length = Math.sqrt(x * x + y * y)

  if (length > 10) {
    return 0
  } else if (length > 5) {
    return 1
  } else if (length > 1) {
    return 5
  } else {
    return 10
  }
}
