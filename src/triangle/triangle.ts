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
    return { isTriangle: false, message: "Not enough sides" }
  }

  if (sides.length > 3) {
    return { isTriangle: false, message: "Too many sides" }
  }

  if (sides.includes(0)) {
    return { isTriangle: false, message: "Triangle side cannot be less than 0" }
  }

  if (!((sides[0] + sides[1] > sides[2]) && (sides[1] + sides[2] > sides[0]) && (sides[0] + sides[2] > sides[1]))) {
    return { isTriangle: false, message: "Impossible to compose triangle from provided values" }
  }

  return { isTriangle: true, message: "Valid triangle" }
}

export const defineTriangleType = (sides: number[]): ResultData => {
  const validated = validateSides(sides)

  if (validated.isTriangle) {
    const sortedSides = sides.sort((a, b) => a - b)

    if (sides[0] === sides[1] && sides[1] === sides[2]) {
      return { isTypeDefined: true, result: "Equilateral triangle" }
    } if (sortedSides[1] === sortedSides[0] || sortedSides[1] === sortedSides[2]) {
      return { isTypeDefined: true, result: "Isosceles triangle" }
    } else {
      return { isTypeDefined: true, result: "Scalene triangle" }
    }
  } else {
    return { isTypeDefined: false, result: validated.message }
  }
}
