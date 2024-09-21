import * as messages from './messages.json'

export interface ValidationData {
  isTriangle: boolean
  message: string
}

export interface ResultData {
  isTypeDefined: boolean
  result: string
}

export const validateSides = (sides: number[]): ValidationData => {
  if (sides.length < 3) {
    return { isTriangle: false, message: messages.errors.notEnoughSides }
  }

  if (sides.length > 3) {
    return { isTriangle: false, message: messages.errors.tooManySides }
  }

  if (sides.includes(0)) {
    return { isTriangle: false, message: messages.errors.zeroLengthSide }
  }

  if (!((sides[0] + sides[1] > sides[2]) && (sides[1] + sides[2] > sides[0]) && (sides[0] + sides[2] > sides[1]))) {
    return { isTriangle: false, message: messages.errors.invalidSides }
  }

  return { isTriangle: true, message: messages.success.valid }
}

export const defineTriangleType = (sides: number[]): ResultData => {
  const validated = validateSides(sides)

  if (validated.isTriangle) {
    const sortedSides = sides.sort((a, b) => a - b)

    if (sides[0] === sides[1] && sides[1] === sides[2]) {
      return { isTypeDefined: true, result: messages.success.equilateral }
    } if (sortedSides[1] === sortedSides[0] || sortedSides[1] === sortedSides[2]) {
      return { isTypeDefined: true, result: messages.success.isosceles }
    } else {
      return { isTypeDefined: true, result: messages.success.scalene }
    }
  } else {
    return { isTypeDefined: false, result: validated.message }
  }
}
