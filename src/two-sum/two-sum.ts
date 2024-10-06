// Iterate over items
// For every element calculate delta from sum
// Search for delta in array
// Return indexes if delta in array
// Not reuse the same element

export const twoSum = (numbers: number[], sum: number): number[] | number => {
  for (const num of numbers) {
    const delta = sum - num

    if (numbers.indexOf(delta) !== -1) {
      let firstIndex: number
      let lastIndex: number

      if (delta === num) {
        firstIndex = numbers.indexOf(num)
        lastIndex = numbers.lastIndexOf(num)
      } else {
        firstIndex = numbers.indexOf(num)
        lastIndex = numbers.indexOf(delta)
      }

      return [firstIndex, lastIndex]
    }
  }

  return -1
}
