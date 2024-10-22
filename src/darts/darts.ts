export const countPoints = (x: number, y: number) => {
  if (Math.abs(x) > 10 || Math.abs(y) > 10) {
    return 0
  }

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
